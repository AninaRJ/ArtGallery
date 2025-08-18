<script>
  import Header from './src/sections/Header.vue'
  import Footer from './src/sections/Footer.vue'
  import Home from './src/pages/Home.vue'
  import ContactMe from './src/pages/ContactMe.vue'
  import Gallery from './src/pages/Gallery.vue'
  import NotFound from './src/pages/NotFound.vue'
  
  export default {
    // component options
    // reactive state defined here
    
    const routes = {
      '/': Home,
      '/contact-me': ContactMe,
      '/gallery': Gallery,
      '/404': NotFound
    }
    
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
    mounted: {
      window.addEventListener('hashchange', function() {
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