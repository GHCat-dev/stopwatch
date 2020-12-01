let duration = 0;
let startTime;
let stopTime;
let isRunning = false;
class stopWatch {
    get getDuration() {
        return duration;
        console.log(duration);
    }
    start() {
        if (isRunning)
            throw newError('The Stopwatch is already running.');
        isRunning = true;
        startTime = new Date();
        console.log(`Start or Resume counting`);
        console.log(duration);

    }
    stop() {
        if (!isRunning)
            throw new Error('The Stopwatch is not started.');

        isRunning = false;
        stopTime = new Date();

        const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds; 
        console.log(`Stop to counts seconds`);
        console.log(duration);
    }
    reset () {
        duration = 0;
        startTime = null;
        stopTime = null;
        isRunning = false;
        console.log(`Reset the stopwatch and its counter`);
        console.log(duration);
    }
   
}

const test = new stopWatch();
test.getDuration;
