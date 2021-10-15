<template>
    <div id="app">
        <div class = "background" >
            <clock class = "clockContainer"/>
            <timer class="timerContainer"/>
        </div>
    </div>
</template>

<script>
    import Clock from "../components/clock"
    import Timer from "../components/timer"
    export default {
        name: "Home",
        components: {
            Clock,
            Timer,
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
        width: 140px;
    }
</style>