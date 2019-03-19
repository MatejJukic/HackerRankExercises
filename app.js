'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

class time {
    constructor(hours, minutes, seconds, amPm) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      this.amPm = amPm;
      }
      static parse (str) {
        if (typeof str != "string"){
              throw Error ("Entered data type is wrong!");
          }
        if (str.length != 10) {
              throw Error ("Expected length of string is 10 characters!");
            
            }
        if((str[2]!=":")||(str[5]!=":")){
                throw Error ("Missing ':' characters in time format");
        }
        if(((str.slice(8, 10) == "AM")||(str.slice(8, 10) == "PM"))==false){
                throw Error ("Missing AM or PM ")
        }
        
        var morningEvening = (str.slice(8, 10) == "AM");
            var hours = parseInt(str.slice(0,2));
            var minutes = parseInt(str.slice(3,5));
            var seconds = parseInt(str.slice(6,8));
        if ((seconds<0)||(seconds>59)||(isNaN(seconds))) {

                throw Error ("Wrong seconds format");

            }

        if ((minutes<0)||(minutes>59)||(isNaN(minutes))) {

                throw Error ("Wrong minutes format");

            }

        if ((hours<1)||(hours>12)) {

                throw Error ("Wrong hour format!");

            }
        if ((hours < 12) && (!morningEvening)) hours+=12;
        if ((hours==12) && (morningEvening))  hours=0;
        if ((hours==12) && (!morningEvening)) hours=12;
        

        var result = new time (hours, minutes, seconds);
        return result;       
      }

      toString() {

            var result = "";
            if (this.hours<10){
                result+="0"+this.hours;
            }
            else {
                result+=this.hours;
            }
            result+=":";
            if (this.minutes<10){
                result+="0"+this.minutes;
            }
            else {
                result+=this.minutes;
            }
            result+=":";
            if (this.seconds<10){
                result+="0"+this.seconds;
            }
            else {
                result+=this.seconds;
            }

            return result;


      }
  }
/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    console.log(s);
var timeObj = time.parse(s);
    return timeObj.toString();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
