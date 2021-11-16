<template>
    <div class="musicWrapper">
        <div class="musicIntCol">
            <div class="musicIntRow">
                <button>
                    <font-awesome-icon @click="playLofi" :icon="['fas', 'music']" />
                </button>
                <audio loop preload="metadata" ref="lofiMusic" src="../assets/audio/relaxing_lofi.wav"></audio>
                <button>
                    <font-awesome-icon @click="playRain" :icon="['fas', 'cloud-showers-heavy']" />
                </button>
                <audio loop preload="metadata" ref="rain" src="../assets/audio/rain.wav"></audio>
                <button>
                    <font-awesome-icon @click="playFire" :icon="['fas', 'fire-alt']" />
                </button>
                <audio loop preload="metadata" ref="fire" src="../assets/audio/fire.wav"></audio>
            </div>
            <div class="musicIntRow">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "musicPlayer",
        methods: {
            playLofi() {
                var a = this.$refs.lofiMusic;
                if (a.paused) {
                    a.play();
                } else {
                    a.pause();
                }
            },
            playRain() {
                var a = this.$refs.rain;
                if (a.paused) {
                    a.play();
                } else {
                    a.pause();
                }
            },
            playFire() {
                var a = this.$refs.fire;
                if (a.paused) {
                    a.play();
                } else {
                    a.pause();
                }
            }
        }
    }
</script>

<style scoped>
    .musicWrapper{
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
    button{
        width: 60px;
        height: 60px;
        font-size: 35px;
        background: #071532;
        border-radius: 20px;
        border-color: #FFFFFF;
        color: #FFFFFF;
        cursor: pointer;
    }
    .toggleButton{
        color: #071532;
        background-color: white;
    }
    .musicIntRow {
        display: grid;
        grid-template-rows: repeat(3, minmax(0, 1fr));
        row-gap: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .musicIntCol {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 25px;
    }

</style>