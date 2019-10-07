class Log {
    constructor () {
        this.messages = []
    }

    log (message) {
        this.messages.push(message)
    }

    reset () {
        this.messages = []
    }
}

export default Log