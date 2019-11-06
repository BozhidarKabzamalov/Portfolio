<template>
    <div id="app">
        <nav class='navigation'>
            <div class='element' :class="{ active: activeSection === 'about' }" @click='scrollTo(".about")'></div>
            <div class='element' :class="{ active: activeSection === 'skills' }" @click='scrollTo(".skills")'></div>
            <div class='element' :class="{ active: activeSection === 'projects' }" @click='scrollTo(".projects")'></div>
            <div class='element' :class="{ active: activeSection === 'contact' }" @click='scrollTo(".contact")'></div>
        </nav>
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeSection: 'about'
        }
    },
    methods: {
        scrollTo(element){
            let selectElement = document.querySelector(element);

            window.scrollTo({
                top: selectElement.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        },
        updateNavigation(){
            let sections = document.querySelectorAll('section');
            let currentY = window.scrollY
            for (let section of sections) {
                if (currentY >= section.offsetTop && currentY <= section.offsetTop + section.clientHeight) {
                    this.activeSection = section.className
                    console.log(section.className)
                }
            }
        }
    },
    mounted(){
        this.updateNavigation();
        window.addEventListener("scroll", () => {
            this.updateNavigation();
        })
    }
}
</script>

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
        font-family: 'Roboto', 'Helvetica', 'Helvetica Neue', 'Arial', sans-serif;
        background-image: url("./assets/svg/topography.svg");
        background-attachment: fixed;
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
    .navigation {
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
        text-align: right;
    }
    .element {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-bottom: 30px;
        transition: all .1s linear;
        border: 5px solid rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
    .element:hover {
        transform: scale(1.2)
    }
    .active {
        border-color: rgba(0,0,0,0);
        background-color: rgba(0, 0, 0, 0.5)
    }
</style>
