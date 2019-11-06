<template>
    <main>
        <About></About>
        <div class="wrapper">
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    </main>
</template>

<script>
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

    export default {
        components: {
            About,
            Skills,
            Projects,
            Contact
        },
        methods: {
            setAboutHeight(){
                let navigation = document.querySelector('.navigation');
                let aboutHeight = window.innerHeight - navigation.offsetHeight

                document.querySelector('.about').style.height = aboutHeight + 'px'
            }
        },
        mounted(){
            this.setAboutHeight()
        }
    }
</script>
