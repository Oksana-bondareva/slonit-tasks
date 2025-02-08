function createLogger() {
    let messages = [];

    return {
        log: function(message) {
            messages.push(message);
        },
        getLogs: function() {
            return [...messages]
        },
    }
}

const logger = createLogger();


function createRandomGenerator(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const getRandomNumber = createRandomGenerator(1, 10);