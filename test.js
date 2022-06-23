//return the current time in the format "hh:mm:ss"
let time;

function getTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    return h + ":" + m + ":" + s;
}

time = getTime();


console.log(time);


