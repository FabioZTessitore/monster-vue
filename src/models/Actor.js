class Actor {
    constructor (config, logger) {
        // backup the initial data
        this.config = config

        this.logger = logger

        this.reset()
    }

    attack (min, max, who) {
        const damage = Math.floor(min + Math.random() * (max - min))
        this.life -= damage
        this.logger.log(who + ' hit with damage ' + damage)
    }

    specialAttack (who) {
        this.attack(this.minAttack*this.specialFactor, this.maxAttack*this.specialFactor, who)
    }

    normalAttack (who) {
        this.attack(this.minAttack, this.maxAttack, who)
    }

    heal () {
        this.life += 10
        if (this.life > this.config.life) this.life = this.config.life
        this.logger.log('human heal')
    }

    reset () {
        this.life = this.config.life
        this.minAttack = this.config.minAttack
        this.maxAttack = this.config.maxAttack
        this.specialFactor = this.config.specialFactor
    }
}

export default Actor