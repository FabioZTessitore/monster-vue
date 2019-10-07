class Actor {
    constructor (name, config, logger) {
        // backup the initial data
        this.config = config

        this.name = name
        this.logger = logger

        this.reset()
    }

    attack (min, max) {
        const damage = Math.floor(min + Math.random() * (max - min))
        this.life -= damage
        return damage
    }

    specialAttack () {
        const damage = this.attack(this.minAttack*this.specialFactor, this.maxAttack*this.specialFactor)
        this.logger.log('hit by special attack with damage ' + damage, this.name)
    }

    normalAttack () {
        const damage = this.attack(this.minAttack, this.maxAttack)
        this.logger.log('hit with damage ' + damage, this.name)
    }

    heal () {
        this.life += 10
        if (this.life > this.config.life) this.life = this.config.life
        this.logger.log('heal', this.name)
    }

    reset () {
        this.life = this.config.life
        this.minAttack = this.config.minAttack
        this.maxAttack = this.config.maxAttack
        this.specialFactor = this.config.specialFactor
    }
}

export default Actor