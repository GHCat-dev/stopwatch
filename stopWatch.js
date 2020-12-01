export class stopWatch {
    
    stop() {
        clearInterval(intervalId);
        console.log(`Stop to counts seconds`);
    }
   
}