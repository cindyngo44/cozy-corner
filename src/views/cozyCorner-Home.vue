<template>
    <div>
        <div class = "background" >
            <div class="UIContainer">
                <todo class="todo"/>
                <div class="timeContainer">
                    <clock class="clock"/>
                    <timer class="timer"/>
                    <music-player class="music"/>
                    <credits class="credits"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Clock from "../components/clock"
    import Timer from "../components/timer"
    import Todo from "../components/todo"
    import Credits from "../components/credits"
    import MusicPlayer from "../components/musicPlayer"
    export default {
        name: "Home",
        components: {
            MusicPlayer,
            Credits,
            Clock,
            Timer,
            Todo,
        },
    };

</script>

<style>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        background-size: cover;
        background-image: url('../assets/backgroundIMG.gif');
        
    }
    .UIContainer {
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .timeContainer {
        display: flex;
        flex-direction: column;
        margin: 30px;
        flex-wrap: wrap;
    }

    .clock {
        margin-bottom: 10px;
        align-self: flex-end;
    }
    .timer {
        align-self: flex-end;
        margin-bottom: 10px;
    }
    .todo {
        align-self: flex-start;
        margin-left: 50px;
        margin-top: 450px;
    }
    .music{
        margin-bottom: 10px;
        align-self: flex-end;
    }
    .credits{
        align-self: flex-end;
        margin-right: 30px;

    }
    .tippy-tooltip {
        font-size: 15px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        background: #0F3F6E;
    }
</style>