const eventEmitter = require('events');
const uuid = require('uuid');

class Logger extends eventEmitter {
    log(msg){
        //Call event
        this.emit('message', {id : uuid.v4(), msg });
    }
}

//module.exports = Logger;
const Logger = require('./logger');
const logger = new Logger();

logger.on('message', data => console.log('Called Listner', data));

logger.log('Hello World!');
logger.log('Hello');
logger.log('Hi');