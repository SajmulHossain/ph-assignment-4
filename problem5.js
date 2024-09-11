function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }

    let totalTime = 0;

    for(const x of waitingTimes) {
        totalTime += x;
    }

    const avgTime = Math.round(totalTime / waitingTimes.length);

    const serial = (serialNumber - 1) - waitingTimes.length;

    const leftTime = avgTime * serial;

    return leftTime;
}

const result = waitingTime([6], 4)
console.log(result);
