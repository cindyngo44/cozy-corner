<template>
    <div class="musicWrapper">
        <div class ="musicTitle">Music Player</div>
        <div class="musicIntCol">
            <div class="musicIntRow">
                <img src="../assets/music.png"/>
                <img src="../assets/rain.png"/>
                <img src="../assets/fire.png"/>
            </div>
            <div class="musicIntRow">

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "musicPlayer"
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
    .musicTitle{
        font-size: 18px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        padding-bottom: 20px;
    }
    img{
        width: 70px;
    }
    .musicIntRow {
        display: grid;
        grid-template-rows: repeat(3, minmax(0, 1fr));
        row-gap: 20px;
        padding-bottom: 10px;
    }
    .musicIntCol {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 25px;
    }

</style>