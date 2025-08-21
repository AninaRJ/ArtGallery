<script>
  import Header from './sections/Header.vue'
  import Footer from './sections/Footer.vue'
  import Home from './pages/Home.vue'
  import ContactMe from './pages/ContactMe.vue'
  import Gallery from './pages/Gallery.vue'
  import NotFound from './pages/NotFound.vue'
  
  const routes = {
    '/': Home,
    '/contact-me': ContactMe,
    '/gallery': Gallery,
    '/404': NotFound
  }

  export default {
    // component options
    // reactive state defined here

    data() {
      return {
        currentPath: window.location.hash
      }
    },
    computed: {
      currentView() {
        return routes[this.currentPath.slice(1) || '/'] || NotFound
      }
    },
    mounted() {
      window.addEventListener('hashchange', () => {
        this.currentPath = window.location.hash
      })
    }
  }
</script>

<template>
  <Header>
  </Header>
  App vue
  <nav>
    <a href="#/">Home</a> |
    <a href="#/gallery">Gallery</a> |
    <a href="#/contact-me">Contact Me</a>
    <component :is="currentView" />
  </nav>
  
  <Footer>
  </Footer>
</template>