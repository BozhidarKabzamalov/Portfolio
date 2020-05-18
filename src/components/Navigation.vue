<template lang="html">
    <nav class='navigation'>
        <div class='element' :class="{ active: activeSection === 'about' }" @click='scrollTo(".about")'></div>
        <div class='element' :class="{ active: activeSection === 'skills' }" @click='scrollTo(".skills")'></div>
        <div class='element' :class="{ active: activeSection === 'projects' }" @click='scrollTo(".projects")'></div>
    </nav>
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

<style lang="css" scoped>
.navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    border-radius: 30px;
    background-color: #ffffff;
    width: 40px;
    padding: 30px 0;
}
.element {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-bottom: 30px;
    transition: all .1s linear;
    background-color: #e3e6ea;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
.element:last-child {
    margin-bottom: 0;
}
.element:hover {
    transform: scale(1.1);
}
.active {
    background-image: linear-gradient(-45deg, #57cfb0, #2ab5d3);
}

@media (max-width: 900px) {
    .navigation {
        display: none;
    }
}
</style>
