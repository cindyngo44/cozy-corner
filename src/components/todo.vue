<template>
    <div>
        <div class = "todolistBox">
        <div class = "todolist">
            <h1>To Do List:</h1>
            <div class="add">
                <input class = "input font" type="text" placeholder="add a new task" @keyup.enter="addTask" v-model="task" maxlength = "30">
            </div>
            <div class="task" v-for="(task, i) in tasks.slice(0, 7)" :key="task.text" >
                <p class="task__text font" :class="{task__text__completed: task.completed}">{{ task.text}}</p>
                <button class="task__delete" @click="deleteTask(i)">x</button>
            </div>


        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "todo",
        data() {
            return {
                task: "",
                tasks: []
            }
        },
        methods: {
            deleteTask(index) {
                this.tasks.splice(index, 1);
            },
            addTask() {
                this.tasks.push({
                    text: "♥ " + this.task,
                });
                this.tasks = this.tasks.slice(0, 7),
                this.task = "";
            }
        }
    }
</script>

<style scoped>
    ::placeholder {
        color: #FFF8F0;
        opacity: 0.5;
    }
    .todolistBox{
        line-height: 1.4em;
        margin: 0 auto;
        width: 280px;
        height: 300px;
        background: #164979;
        border-radius: 10px;
        border-width: thick;
        border-style: solid;
        border-color: #FFF8F0;
        color: #FFF8F0;
    }
    .todolist{
        position: relative;
        align-items: center;
        display: inline-grid;
        grid-auto-flow: row;
        justify-items: center;
        grid-gap: 0;
        margin-left: 40px;
    }
    h1{
        font-size: 15px;
        font-family: "Arial", sans-serif;
        font-weight: bold;

    }
    .font{
        font-size: 12px;
        font-family: "Arial", sans-serif;
        font-weight: bold;
    }
    .add {
        grid-template-columns: 10px;
    }
    .input{
        border: 0;
        color: #FFF8F0;
        font-size: 12px;
        font-family: "Arial", sans-serif;
        background: #164979;
        width: 200px;
    }
    .task {
        align-items: center;
        grid-template-columns: auto 1fr auto;
        justify-content: space-between;
        height: 30px;
    }
    .task,
    .add {
        display: grid;
        width: 200px;
    }
    .task__delete {
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        border-radius: 100%;
        cursor: pointer;
        height: 15px;
        width:15px;

    }
    .task__text {
        justify-self: start;
        height: 10px;
    }
    .task__delete {
        font-size: 10px;
        justify-self: end;
        color: #FFF8F0;
    }

    .task__delete:hover {
        background-color: rgba(0, 0, 0, 0);
        color: #F25C54;
        font-size: 10px;
    }
    @media (max-width: 280px) {
        .task,
        .add {
            width: 85%;
        }
    }
</style>