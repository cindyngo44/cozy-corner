<template>
    <div class="timerWrapper">
        <div class ="timeLeft" @click="playTimer"  content="paused"
             v-tippy = "{ distance: 5, trigger : 'click', animation : 'fade'}">{{formattedTimeLeft}} minutes left</div>
        <div class="timerIntRow">
            <div class="timerIntCol">
                <div class="icons">+</div>
                <button class="timerButton" @click="addTime(5)">5</button>
                <button class="timerButton" @click="addTime(10)">10</button>
                <button class="timerButton" @click="addTime(20)">20</button>
            </div>
            <div class="timerIntCol">
                <div class="icons">-</div>
                <button class="timerButton" @click="addTime(-5)">5</button>
                <button class="timerButton" @click="addTime(-10)">10</button>
                <button class="timerButton" @click="addTime(-20)">20</button>
            </div>
        </div>
        <div>
            <audio ref="alarmPlayer" src="../assets/audio/alarm.wav" preload="metadata">
            </audio>
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
                timerInterval: null,
                isPlaying: false,
            }
        },
        methods: {
            startTimer() {
                this.timerInterval = setInterval(() => {
                    this.timePassed += 1;
                    this.timeLeft = this.timeLimit - this.timePassed;
                    this.isPlaying = false;
                    if (this.timeLimit <= 0) {
                        this.onTimesUp();
                        this.playAlarm();
                    }
                }, 1000);
            },
            onTimesUp() {
                this.timeLimit = 0;
                this.timePassed = 0;
                this.timeLeft = 0;
                this.hours = '0';
                this.minutes = '0';
                clearInterval(this.timerInterval);
            },
            playAlarm(){
                this.isPlaying = true;
                if(this.isPlaying){
                    this.$refs.alarmPlayer.play();
                    this.$refs.alarmPlayer.volume = 0.8;
                }
            },
            addTime (minutes) {
                this.timeLimit += (minutes * 60)
                this.timeLeft = this.timeLimit - this.timePassed

                if (this.timeLimit <= 0) {
                    this.onTimesUp();
                    this.playAlarm();
                }
            },
            playTimer(){
                if (!this.timerInterval)
                    this.startTimer();
                else
                    clearInterval(this.timerInterval);
                    delete this.timerInterval;
            },
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
        background: #071532;
        border-radius: 50px;
        color: #FFFFFF;
        padding: 25px;
        box-shadow: 0px 7px 8px -7px black;
    }
    .timeLeft {
        font-size: 18px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        padding-bottom: 20px;
        cursor: pointer;
    }
    .icons{
       font-size: 25px;
    }
    .timerButton {
        width: 40px;
        height:40px;
        background: #071532;
        border-radius: 50px;
        border-color: #FFFFFF;
        font-size: 12px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        color: #FFFFFF;
        padding: 5px;
        cursor: pointer;
    }
    .timerIntRow {
        display: grid;
        grid-template-rows: repeat(2, minmax(0, 1fr));
        row-gap: 7px;
        padding-bottom: 7px;
    }
    .timerIntCol {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: 7px;
    }
</style>