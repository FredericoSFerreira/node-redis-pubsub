import Queue from "./queue.js";


console.log("Worker started");
const queue = new Queue()
queue.subscribe("chat", message => {
    console.log("processing");
    console.log(message);
})