class Actor {
    constructor (config) {
        // backup the initial data
        this.config = config

        this.reset()
    }

    attack (min, max) {
        this.life -= Math.floor(min + Math.random() * (max - min))
    }

    specialAttack () {
        this.attack(this.minAttack*this.specialFactor, this.maxAttack*this.specialFactor)
    }

    normalAttack () {
        this.attack(this.minAttack, this.maxAttack)
    }

    heal () {
        this.life += 10
        if (this.life > this.config.life) this.life = this.config.life
    }

    reset () {
        this.life = this.config.life
        this.minAttack = this.config.minAttack
        this.maxAttack = this.config.maxAttack
        this.specialFactor = this.config.specialFactor
    }
}

export default Actor