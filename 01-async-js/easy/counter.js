/*## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second*/

function formatDateTo12Hour(date) {

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Pad minutes and seconds with leading zeros if needed
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Format the time
    const timeString = `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    
    return timeString;
}



function setCounter() {
    let count = 0;
    return () => {
        count = count + 1
        let date = new Date()
        console.log(formatDateTo12Hour(date))
    }
}

setInterval(setCounter(), 1000)