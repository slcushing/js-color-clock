// 'use strict';

//need class = clock-display to get the current time\
const date = new Date();
const time = (date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds());
    console.log(time);