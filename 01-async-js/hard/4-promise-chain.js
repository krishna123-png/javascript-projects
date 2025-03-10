/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js  
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('First function resolved')
        }, t * 1000)
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second function resolved')
        }, t * 1000)
    })
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Third function resolved')
        }, t * 1000)
    })
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now()
    return wait1(t1)
            .then((data1) => {
                console.log(data1)
                return wait2(t2)
            })
            .then((data2) => {
                console.log(data2)
                return wait3(t3)
            })
            .then((data3) => {
                console.log(data3)
                const endTime = Date.now()
                const totalTime = endTime - startTime
                return totalTime
            })
}

calculateTime(10, 5, 15)
        .then((data) => {
            console.log(data)
        })

module.exports = calculateTime;
