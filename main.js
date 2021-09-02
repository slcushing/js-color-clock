// // 'use strict';

// function updateClock(){
//     const date = new Date();
//     const time = (date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds());
//     console.log(time);

//     const $clock = document.querySelector('.clock-display');
//     console.log($clock.textContent); 

//     $clock.textContent = time //I DID IT!(10:05pm)

// // attempt at getting the time to show up in the blue box
//     // $clock.textContent = '00:00:00' //find out how to change textContent of the element
//     // let clock = document.getElementsByClassName('.clock-display');
//     // console.log(clock.textContent);
//     // object style.display //return display property
//     // object style.display = value
    
    
//     // var d = new Date();
//     // var sec = d.getSeconds();
//     // var min = 60;
//                                         //attempts at console.log the % of min that current seconds represent
// //     function perBar(sec,min){
// //         return (100 * (sec/min));
// //         }
// // console.log(perBar);
// };
// setInterval(updateClock,1000);

// document.getElementsByClassName('clock-display').innerHTML = $clock;
//** Another attempt at console.logging the % of a min that current second represents
// const minute = 60

// function percentage(seconds,minute) {
//     return (100 * seconds/minute);
//     console.log(percentage);
//  }

// const now = new Date (); 
// console.log(now)

const $progressbar = document.querySelector('.clock-progress-bar');
const $clock = document.querySelector('.clock');
const $display = document.querySelector('.clock-display');


const colors =['#DF5069', '#FF0000', '#00FF00','#95D0F0','#E3B44C'];
let index = 0;
let isHovering = false; //default for the page

$clock.addEventListener('mouseover', function(){
    
    isHovering = true;
});

$clock.addEventListener('mouseout', function(){
   
    isHovering = false;
});

    //function setDate fires EVERY SECOND (see bottom when function is called)

function setDate() { 
    const now = new Date(); //creating a new object - it's a date OBJECT
    let seconds, minutes, hour;
    
    if(isHovering){
        console.log('hovering');
        seconds = ('0' + now.getSeconds().toString(16)).slice(-2);
        minutes = ('0' + now.getMinutes().toString(16)).slice(-2); // number.prototype.toString will convert number to hexdecimal
        hour = ('0' + now.getHours().toString(16)).slice(-2);
    } else {
        console.log('not hovering');
        seconds = ('0' + now.getSeconds()).slice(-2);
        minutes = ('0' + now.getMinutes()).slice(-2); //padding values with O + slice(-2) cutting off :22 of :022
        hour = ('0' + now.getHours()).slice(-2);
    };

    $display.innerHTML = `${hour}:${minutes}:${seconds}`
    $progressbar.style.width =  `${seconds/60 * 14}rem`

    // $clock.addEventListener('mouseover', function(){
    //     isHovering = true;
    // });
    // $clock.addEventListener('mouseout', function(){
    //     isHovering = false;
    // });
};

function setBackground() {
    $clock.style.background = colors[index];
    if(index === colors.length - 1) {
        index = 0;
    } else {
        // index = index + 1;
        index++;
    }
}


setInterval(setDate,1000);
setInterval(setBackground, 5000);
setDate();