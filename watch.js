export default class watch {
    get getDuration() {
        console.log(duration);
    }
    reset () {
        clearInterval(intervalId);
        duration = 0;
        console.log(`Reset stopwatch and its counter`);
    }

}