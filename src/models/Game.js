class Game {
    constructor () {
        this.isRunning = false
    }

    start () {
        this.isRunning = true
    }

    stop () {
        this.isRunning = false
    }
}

export default Game