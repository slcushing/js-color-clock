// 'use strict';

function updateClock(){
    const date = new Date();
    const time = (date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds());
    console.log(time);

    const $clock = document.querySelector('.clock-display');
    console.log($clock.textContent); 

    $clock.textContent = time //I DID IT!(10:05pm)

// attempt at getting the time to show up in the blue box
    // $clock.textContent = '00:00:00' //find out how to change textContent of the element
    // let clock = document.getElementsByClassName('.clock-display');
    // console.log(clock.textContent);
    // object style.display //return display property
    // object style.display = value
    
    
    // var d = new Date();
    // var sec = d.getSeconds();
    // var min = 60;
                                        //attempts at console.log the % of min that current seconds represent
//     function perBar(sec,min){
//         return (100 * (sec/min));
//         }
// console.log(perBar);

    

};
setInterval(updateClock,1000);

// document.getElementsByClassName('clock-display').innerHTML = $clock;
//** Another attempt at console.logging the % of a min that current second represents
// const minute = 60

// function percentage(seconds,minute) {
//     return (100 * seconds/minute);
//     console.log(percentage);
//  }

