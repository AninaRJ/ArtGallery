<script>
  export default{
    // component options
    // reactive state defined here
    data(){
      return {
        title: "Art Gallery",
        heading: "Welcome to my website!",
        description: "Hey all. Welcome welcome! 🤗 Trying to see if i can set up a web based gallery for all my digital artworks",
        copyright: "All rights reserved ©️ AninaRJ  2025"
      }
    }
  }
</script>

<template>
<title>
  {{title}}
</title>
<header>
  {{heading}}
  <p>
    <!--Tab to edit-->
    {{description}}
  </p>
</header>

<footer>
  {{copyright}}
</footer>
</template>