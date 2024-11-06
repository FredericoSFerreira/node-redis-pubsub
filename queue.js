import { createClient } from 'redis';


export default class Queue {

    constructor() {
        this.client = createClient()
        this.client.connect()
        this.client.on('error', err => console.log('Redis Client Error', err));
      }

    async publish(channel, value) {
        console.log('Message sent!');
        return this.client.publish(channel, JSON.stringify(value));
    }
     
    async subscribe(channelSubscribed, callback) {
        this.client.subscribe(channelSubscribed, (message, channel) => {
            console.log('Message arrived!', message, channel);
            callback(message);
        });
    }   
}

