<template>
    <div>
        <button class="button" @click="openGitHub"   content="Thank you for using my application!"
                v-tippy = "{ distance: 5, animation : 'fade'}">
            Credits
        </button>
    </div>
</template>

<script>
    export default {
        name: "credits",
        methods: {
            openGitHub() {
                window.open("https://github.com/cindyngo44");
            },
        },
    };
</script>

<style scoped>
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 50px;
        border-radius: 50px;
        border: none;
        box-shadow: 0px 7px 8px -7px black;
        background-color: #F7B467;
        color: #FFFFFF;
        cursor: pointer;
    }

</style>