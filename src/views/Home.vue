<template>
    <main>
        <Navigation></Navigation>
        <About></About>
        <div class="wrapper">
            <Skills></Skills>
            <Projects></Projects>
        </div>
        <Footer></Footer>
    </main>
</template>

<script>
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';

    export default {
        components: {
            About,
            Skills,
            Projects,
            Navigation,
            Footer
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
