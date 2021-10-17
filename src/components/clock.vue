<template>
    <div>
        <div class = "clockFace" >
            <img src="../assets/clockIcon.png">
            <div class="hour">{{hours}}</div>
            <div class="dots">:</div>
            <div class="min">{{minutes}}</div>
            <div class="date">{{date}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "clock",
        data() {
            return {
                hours: "",
                minutes: "",
                date: "",
            }
        },
        methods: {
            setTime() {
                setInterval(() => {
                    const time = new Date();

                    this.hours = time.getHours();
                    this.minutes = this.checkSingleDigit(time.getMinutes())
                    this.date = (time.getMonth() + 1 )+ '/' + time.getDate() + '/' + time.getFullYear();
                }, 1000)
            },
            checkSingleDigit(digit) {
                return ('0' + digit).slice(-2)
            },
        },
        mounted() {
            this.setTime()
        },

    };
</script>

<style scoped>

    .clockFace {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 280px;
        height: 50px;
        background: #164979;
        border-radius: 10px;
        border-width: thick;
        border-style: solid;
        border-color: #FFF8F0;
        color: #FFF8F0;
    }
    .hour, .min{
        font-size: 27px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
    }
    .date{
        font-size: 27px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        padding-left: 20px;
    }
    .dots {
        font-size: 23px;
    }
    img{
        width: 27px;
        padding-right: 10px;
    }
</style>