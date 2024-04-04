const newday=new Date();
const noOfDay=newday.getDay();
const daynames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.querySelector(".day").innerHTML=`Today is ${daynames[noOfDay]}`;
var hours = newday.getHours();
const min = newday.getMinutes();
const seconds= newday.getSeconds();
var prepand= hours>12?'PM':'AM'
hours = (hours >= 12) ? hours - 12 : hours;
if (hours===0 && prepand==='PM'){
    if (min===0 && seconds===0){
        hours=12;
        prepand='Noon'
    } else{
        hours=12;
        prepand='PM'
    }
}

document.querySelector(".time").innerHTML=`Curent time is : ${hours}${prepand}:${min}:${seconds}`;