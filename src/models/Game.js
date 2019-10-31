class Game {
    constructor () {
        this.isRunning = false
        this.status = ''
    }

    start () {
        this.isRunning = true
        this.status = ''
    }

    stop () {
        this.isRunning = false
    }

    win () {
        this.status = 'win'
        this.stop()
    }

    lost () {
        this.status = 'lost'
        this.stop()
    }

    giveup () {
        this.status = 'giveup'
        this.stop()
    }
}

export default Game