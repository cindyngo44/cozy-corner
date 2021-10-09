<template>
    <div id="app">
        <div class = "background" >
            <clock class = "clockContainer"/>
            <div class="timerContainer">
                <div class="timerFace">
                    <div class ="timer">{{formattedTimeLeft}} minutes left</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Clock from "../components/clock"
    export default {
        name: "Home",
        props: {
            timeLeft: {
                type: Number,
                required: true
            }
        },
        components: {
            Clock,
        },
        data() {
            return {
                hours: "",
                minutes: "",
                timeLimit: 3600,
                timePassed: 0,
                timeInterval: null,
            }
        },
        methods: {
            setTime () {
                setInterval(() => {
                    const time = new Date()

                    this.hours = time.getHours()
                    this.minutes = this.checkSingleDigit(time.getMinutes())
                }, 1000)
            },
            checkSingleDigit (digit) {
                return ('0' + digit).slice(-2)
            },
            startTimer() {
                this.timerInterval = setInterval(() => {
                    this.timePassed += 1
                    this.timeLeft = this.timeLimit - this.timePassed
                    if (this.timeLimit === 0) {
                        this.onTimesUp();
                    }
                }, 1000);
            },
            onTimesUp() {
                clearInterval(this.timerInterval);
            },
        },
        computed: {
            formattedTimeLeft() {
                const timeLeft = this.timeLeft

                const timerMinutes = Math.floor(timeLeft / 60)
                let seconds = timeLeft % 60

                if (seconds < 10) {
                    seconds = `0${seconds}`
                }
                return `${timerMinutes}`
            }
        },

        mounted() {
            this.setTime()
            this.startTimer();
        },

    };



</script>

<style scoped>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        background-size: cover;
        background-image: url('../assets/backgroundIMG.gif');

    }
    .clockContainer {
        position: absolute;
        top: 80px;
        right: 100px;
        width: 150px;
    }
    .timerContainer{
        position: absolute;
        top: 150px;
        right: 100px;
        width: 150px;
    }
    .timerFace{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 40px;
        background: #164979;
        border-radius: 10px;
        border-width: thick;
        border-style: solid;
        border-color: #FFF8F0;
        color: #FFF8F0;
    }
    .timer{
        font-size: 15px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
    }
</style>