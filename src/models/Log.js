class Log {
    constructor () {
        this.messages = []
        this.nextId = 1
    }

    log (message) {
        this.messages.push({
            id: this.nextId,
            message
        })
        this.nextId++
    }

    reset () {
        this.messages = []
        this.nextId = 1
    }
}

export default Log