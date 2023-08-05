const EventEmitter = require('events')

const observer = new EventEmitter()

observer.on("aman", (message) => {
    console.log("aman " + message)
    console.log("Ha bolo kya hua?");
    console.log("Me yaha hun!")
})

observer.emit("aman", "Kha Hai tu?");

