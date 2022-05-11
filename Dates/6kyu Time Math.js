// Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').


// P: 2 time strings and an operator
// R: Result of the addition/subtraction, in 24 hour clock format
// E:
timeMath('01:24:31', '+', '02:16:05') === '03:40:36'
timeMath('01:24:31', '-', '02:31:41') === '22:52:50'
timeMath('00:00:01', '-', '00:00:02') === '23:59:59'
// P:
    // Create helper functions to transform the string to number of seconds and transform back
    // Do math on # of seconds (and check if >= 24h) and convert back to string.


function timeMath(time1, op, time2) {
    const ops = {
        '+': function() {
            return secondsTo24Hour(stringToSeconds(time1) + stringToSeconds(time2))
        },
        '-': function() {
            return secondsTo24Hour(stringToSeconds(time1) - stringToSeconds(time2))
        },
    }
    return ops[op]()
}


function stringToSeconds(timeAsString) {
    x = timeAsString.split(':')
    return +x[0] * 3600 + +x[1] * 60 + +x[2]
}

function secondsTo24Hour(timeInSeconds) {
    hours = Math.floor(timeInSeconds / 3600) % 24
    minutes = Math.floor(timeInSeconds % 3600 / 60)
    seconds = timeInSeconds % 3600 % 60
    if (hours < 0) hours = 24 + hours
    if (minutes < 0) minutes = 60 + minutes
    if (seconds < 0) seconds = 60 + seconds
    const timeAsString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    return timeAsString
}





function timeMath(time1, op, time2) {
    var t0=new Date("1970-01-01 00:00:00"),
        t1=new Date((new Date("1970-02-01 "+time1)-t0)+(new Date("1970-01-01 "+time2)-t0)*(op=="+"?1:-1))
    return (t1+"").slice(16,24)
  }