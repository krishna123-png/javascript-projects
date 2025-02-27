/*## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.*/


function setCounter() {
    let count = 0;
    return function getCounter() {
        count = count + 1
        console.log(count)
        setTimeout(() => getCounter(), 1000)
    }
}

setTimeout(setCounter(), 1000)




































































