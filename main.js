import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'
import Main from './Main.vue';

const app = createApp(Main)
app.mount('#app')