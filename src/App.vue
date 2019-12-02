<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
    *, *:after, *:before {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        color: rgba(0, 0, 0, 0.8);
    }
    body {
        background-color: #f1f1f1;
        background-image: url("./assets/topography.svg");
        background-attachment: fixed;
        font-family: 'Roboto', 'Helvetica', 'Helvetica Neue', 'Arial', sans-serif;
    }
    section {
        min-height: 100vh;
    }
    .flex {
        display: flex;
    }
    .column {
        flex: 1;
    }
    .wrapper {
        width: 70%;
        margin: 0 auto;
    }
    @media (max-width: 900px) {
        .wrapper {
            width: 95%;
        }
    }
</style>
