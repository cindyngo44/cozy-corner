<template>
    <div class="timerWrapper">
        <div class ="timer">{{formattedTimeLeft}} minutes left</div>
        <div class="timerIntRow">
            <div class="timerIntCol">
                <button class="timerButton" @click="addTime(5)">+5</button>
                <button class="timerButton" @click="addTime(10)">+10</button>
                <button class="timerButton" @click="addTime(20)">+20</button>
            </div>
            <div class="timerIntCol">
                <button class="timerButton" @click="addTime(-5)">-5</button>
                <button class="timerButton" @click="addTime(-10)">-10</button>
                <button class="timerButton" @click="addTime(-20)">-20</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "timer",
        data() {
            return {
                hours: "",
                minutes: "",
                timeLimit: 3600,
                timePassed: 0,
                timeLeft: 0,
                timeInterval: null,
            }
        },
        methods: {
            startTimer() {
                this.timerInterval = setInterval(() => {
                    this.timePassed += 1;
                    this.timeLeft = this.timeLimit - this.timePassed;
                    if (this.timeLimit === 0) {
                        this.onTimesUp();
                    }
                }, 1000);
            },
            onTimesUp() {
                clearInterval(this.timerInterval);
            },
            addTime (minutes) {
                this.timeLimit += (minutes * 60)
                this.timeLeft = this.timeLimit - this.timePassed
            }
        },
        computed: {
            formattedTimeLeft() {
                const timeLeft = this.timeLeft;

                const timerMinutes = Math.floor(timeLeft / 60);
                let seconds = timeLeft % 60;

                if (seconds < 10) {
                    seconds = `${seconds}`
                }
                return `${timerMinutes}`
            }
        },

        mounted() {
            this.startTimer()
        },
    }
</script>

<style scoped>
    .timerWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #164979;
        border-radius: 10px;
        border-width: thick;
        border-style: solid;
        border-color: #FFF8F0;
        color: #FFF8F0;
        padding: 10px;
    }
    .timer {
        font-size: 15px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        padding-bottom: 8px;
    }
    .timerButton {
        padding: 5px;
    }
    .timerIntRow {
        display: grid;
        grid-template-rows: repeat(2, minmax(0, 1fr));
        row-gap: 5px;
    }
    .timerIntCol {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 3px;
    }
</style>