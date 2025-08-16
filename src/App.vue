<script>
import Header from 'sections/Header'
import Footer from 'sections/Footer'
import Home from 'pages/Home'
import ContactMe from 'pages/ContactMe'
import Gallery from 'pages/Gallery'
import NotFound from 'pages/NotFound'

  export default{
    // component options
    // reactive state defined here
    
    const routes = {
      '/' : Home,
      '/contact-me': ContactMe,
      '/gallery': Gallery,
      '/404': NotFound
    }
    
    data(){
      return {
        currentPath: window.location.hash
      }
    },
    computed:{
      currentView() {
        return routes[this.currentPath.slice(1) || '/'] || NotFound
      }
    },
    mounted:{
      window.addEventListener('hashchange', function(){
        this.currentPath = window.location.hash
      })
    }
  }
</script>

<template>
  <Header>
  </Header>
  
  <nav>
    <a href="#/">Home</a> |
    <a href="#/gallery">Gallery</a> |
    <a href="#/contact-me">Contact Me</a>
  <component :is="currentView" />
  </nav>
  
  <Footer>
  </Footer>
</template>