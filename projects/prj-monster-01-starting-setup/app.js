function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            round: 0,
            winner: null,
            logs: []
        }
    },
    watch: {
        monsterHealth(value) {
            if (value === 0) {
                if (this.playerHealth > 0) {
                    this.winner = "player";
                } else {
                    this.winner = "draw";
                }
            }
        },

        playerHealth(value) {
            if (value === 0) {
                if (this.monsterHealth > 0) {
                    this.winner = "monster";
                } else {
                    this.winner = "draw";
                }
            }
        }
    },

    computed: {
        monsterHealthBarStyle() {
            return {
                width: this.monsterHealth + "%"
            }
        },
        playerHealthBarStyle() {
            return {
                width: this.playerHealth + "%"
            }
        },
        specialAttackEnabled() {
            return this.round % 3 === 0;
        },
        monsterWon() {
            return this.winner === "monster";
        },
        playerWon() {
            return this.winner === "player";
        },
        draw() {
            return this.winner === "draw";
        }

    },
    methods: {
        reset() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.round = 0;
            this.winner = null;
            this.logs = [];
        },
        attackMonster() {
            this.round++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth = Math.max(0, this.monsterHealth - attackValue);
            this.addLogMessage("Player", "attack", attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth = Math.max(0, this.playerHealth - attackValue);
            this.addLogMessage("Monster", "attack", attackValue);
        },
        launchSpecialAttack() {
            this.round++;
            const attackValue = getRandomValue(15, 20);
            this.monsterHealth = Math.max(0, this.monsterHealth - attackValue);
            this.addLogMessage("Player", "attack", attackValue);
            this.attackPlayer();
        },
        heal() {
            this.round++;
            const healValue = getRandomValue(8, 20);
            this.playerHealth = Math.min(100, this.playerHealth + healValue);
            this.addLogMessage("Player", "heal", healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = "monster";
        },
        addLogMessage(subject, action, value) {
            this.logs.unshift({
                subject: subject,
                action: action,
                value: value
            });
        }

    }

});

app.mount("#game")