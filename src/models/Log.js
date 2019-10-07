class Log {
    constructor () {
        this.messages = []
        this.nextId = 1
    }

    log (message, who) {
        this.messages.unshift({
            id: this.getNextId(),
            message,
            who
        })
    }

    getNextId () {
        return this.nextId++;
    }

    reset () {
        this.messages = []
        this.nextId = 1
    }
}

export default Log