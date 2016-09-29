


document.addEventListener('DOMContentLoaded', init)
  function init() {
    // alert("test");


    var start = document.querySelector('#start')
    var reset = document.querySelector('#reset')
    var pause = document.querySelector('#pause')
    var seconds = 0;
    //
    var timerId = document.querySelector('#timer')
    var x

    start.addEventListener('click', starter)
    reset.addEventListener('click', resetter)
    pause.addEventListener('click', pauser)

    function starter() {
      // window.setInterval will do updateTime for every 1s.
      // x = timerId
      x = window.setInterval(updateTime, 1000)
      start.addEventListener('click', starter)
    }

    function resetter() {
      // windows.clearInterval will make x = 0
      window.clearInterval(x)
      seconds = 0
      timerId.textContent = 'Stop Watch'

    }

    function pauser() {
      window.clearInterval(x)

    }

    function updateTime(){
    seconds = seconds + 1
    timerId.textContent = seconds
    timerId.id = 'timer'
  }

  }
