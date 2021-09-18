<template>
  <div >
    <img alt="Vue logo" src="../assets/logo.png" width="100" height="100">
    <ramdom-posts-component></ramdom-posts-component>
  </div>
</template>

<script>
// @ is an alias to /src
import RamdomPostsComponent from '../components/RamdomPostsComponent.vue'

export default {
  name: 'Home',
  components: {
    RamdomPostsComponent,
  }
}
</script>

    PostsComponent
