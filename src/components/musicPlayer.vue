<template>
    <div class="musicWrapper">
        <div class="musicIntCol">
            <div class="musicIntRow">
                <img src="../assets/music.png" content="playing"
                     v-tippy = "{ distance: 5, animation : 'fade'}"/>
                <img src="../assets/rain.png" content="playing"
                     v-tippy = "{ distance: 5, animation : 'fade'}"/>
                <img src="../assets/fire.png" content="playing"
                     v-tippy = "{ distance: 5, animation : 'fade'}"/>
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
    img{
        width: 70px;
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