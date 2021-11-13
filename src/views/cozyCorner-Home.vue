<template>
    <div class = "background" >
        <div class="UIContainer">
            <div class="timeContainer">
                <clock class="clock"/>
                <timer class="timer"/>
            </div>
            <todo class="todo"/>
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
        flex-direction: column;
        justify-content: space-between;
    }
    .timeContainer {
        display: flex;
        flex-direction: column;
        margin: 30px;
    }
    .clock {
        margin-bottom: 10px;
        align-self: flex-end;
    }
    .timer {
        align-self: flex-end;
    }
    .todo {
        align-self: flex-start;
        margin-left: 50px;
        margin-bottom: 90px;
    }
    .tippy-tooltip {
        font-size: 15px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        background: #0F3F6E;
    }
</style>