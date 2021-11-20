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
                <button>
                    <font-awesome-icon @click="playNature" :icon="['fas', 'seedling']" />
                </button>
                <audio loop preload="metadata" ref="nature" src="../assets/audio/nature.wav"></audio>
            </div>
            <div class="musicIntRow">
                <div class="sliderContainer">
                <input type="range" vertical min="0" max="100" v-model="volume" class="slider" id="myRange"/>
                </div>
                <div class="sliderContainer">
                    <input type="range" vertical min="0" max="100" v-model="volume1" class="slider" id="myRange1"/>
                </div>
                <div class="sliderContainer">
                <input type="range" vertical min="0" max="100" v-model="volume2" class="slider" id="myRange2"/>
            </div>
                <div class="sliderContainer">
                    <input type="range" vertical min="0" max="100" v-model="volume3" class="slider" id="myRange3"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "musicPlayer",
        data(){
            return{
                volume: 50,
                volume1: 50,
                volume2: 50,
                volume3: 50,
            }
        },
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
            },
            playNature() {
                var a = this.$refs.nature;
                if (a.paused) {
                    a.play();
                } else {
                    a.pause();
                }
            }
        },
        watch:{
            volume(v){
                this.$refs.lofiMusic.volume = v / 100.0
            },
            volume1(v){
                this.$refs.rain.volume = v / 100.0
            },
            volume2(v){
                this.$refs.fire.volume = v / 100.0
            },
            volume3(v){
                this.$refs.nature.volume = v / 100.0
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

    .musicIntRow {
        display: grid;
        grid-template-rows: repeat(4, minmax(0, 1fr));
        row-gap: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        align-items: center;
    }
    .musicIntCol {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 0px;
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
    .sliderContainer{
        padding-left: 30px;
    }
    .slider{
        -webkit-appearance: slider-vertical; /* WebKit */
        width: 8px;
        height: 60px;
        cursor: pointer;
    }
</style>