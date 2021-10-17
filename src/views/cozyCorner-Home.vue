<template>
    <div id="app">
        <div class = "background" >
            <clock class = "clockContainer"/>
            <timer class= "timerContainer"/>
            <todo class = "todoContainer"/>
        </div>
    </div>
</template>

<script>
    import Clock from "../components/clock"
    import Timer from "../components/timer"
    import Todo from "../components/todo"
    export default {
        name: "Home",
        components: {
            Clock,
            Timer,
            Todo,
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
        right: 200px;
        width: 150px;
    }
    .timerContainer{
        position: absolute;
        top: 150px;
        right: 200px;
        width: 140px;
    }
    .todoContainer{
        position: absolute;
        bottom: 80px;
        left: 100px;
        width: 150px;
    }
</style>