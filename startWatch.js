export class startWatch {
    start() {
        console.log(`Start or Resume counting`);
           let intervalId = setInterval(function() {
                    duration++;
                }, 1000);  
    }
   
}