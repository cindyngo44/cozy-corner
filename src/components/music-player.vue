<template>
  <div class="musicWrapper">
    <audio ref="musicPlayer" src="../assets/audio/bell.mp3" @ended="isPlaying = false"></audio>
    <button @click="playPause" class="playButton">{{ isPlaying ? "Pause" : "Play" }}</button>
    <div class="slidecontainer">
      <input type="range" min="0" max="100" v-model="volume" class="slider" id="myRange" />
      {{volume}}
    </div>
  </div>
</template>

<script>
export default {
  name: "timer",
  data() {
    return {
      isPlaying: false,
      musicSource: '../assets/audio/bell.mp3',
      volume: 100
    }
  },
  methods: {
    playPause() {
      if (this.isPlaying) {
        this.$refs.musicPlayer.pause()
      } else {
        this.$refs.musicPlayer.play()
      }
      this.isPlaying = !this.isPlaying
    }
  },
  mounted() {
    this.$refs.musicPlayer.load()
  },
  watch: {
    volume (v) {
      this.$refs.musicPlayer.volume = v / 100.0
    }
  }
}

</script>

<style>
.musicWrapper {
  background: #164979;
  border-radius: 10px;
  border-width: thick;
  border-style: solid;
  border-color: #fff8f0;
  color: #fff8f0;
  padding: 10px;
}
.playButton {
  padding: 5px;
}
</style>