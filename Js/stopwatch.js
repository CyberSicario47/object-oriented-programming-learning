

function Stopwatch(value){
    let startTime, endTime, running, duration = 0;


    let startFunction = function(){

        if(running){
            throw new Error('Stopwatch is already started')
        }
        running = true;
        startTime = new Date();
    }
    let resetFunction = function(){
        startTime = null,
        endTime = null,
        running = false, 
        duration = 0;
    }
    let stopFunction = function(){
        if(!running){
            throw new Error('Stopwatch is already started')
        }
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds
    }
    

    this.start =  startFunction
    this.reset =  resetFunction
    this.stop =  stopFunction

    Object.defineProperty(this,'duration',{
        get:function(){
            return duration
        },
    })
    
}

const sw = new Stopwatch(10)
console.log(sw)

// run these commands
// sw.start()     to start the stopwatch
// sw.stop()     to stop the stopwatch
// sw.reset()     to reset the stopwatch
// sw.duration     to get total time duration of the stopwatch