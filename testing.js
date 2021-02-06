function countDown(count){
    let timer = setInterval(function() {
    //At first I had count-- here, but I wanted it to start with the # entered.
        if (count <= 0) {
        clearInterval(timer);
        console.log('DONE!');
      } else {
        console.log(count);
      }
      count--; //This starts the countdown at number entered.
    }, 1000)
  }
  countDown(4);

  function randomGame() {
    let count = 0;  
    let timer = setInterval(function() {
        let num = Math.random();
            count++;
          if (num > .75) {
              clearInterval(timer);
              console.log(`It took ${count} try/tries.`);
          } 
        
      }, 1000)
  }

randomGame();