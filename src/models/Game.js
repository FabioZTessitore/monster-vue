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
    }

    lost () {
        this.status = 'lost'
    }

    giveup () {
        this.status = 'giveup'
    }
}

export default Game