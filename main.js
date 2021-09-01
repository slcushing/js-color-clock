// 'use strict';

//need class = clock-display to get the current time\
// const date = new Date();
// const time = (date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds());
//     console.log(time);

function updateClock(){
    const date = new Date();
    const time = (date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds());
    console.log(time);
    
};
setInterval(updateClock,1000);
    

// setInterval(function(){
//     console.log(time);
// },1000);