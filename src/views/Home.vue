<template>
  <div>
    <ramdom-posts-component></ramdom-posts-component>
  </div>
</template>

<script>
// @ is an alias to /src
import RamdomPostsComponent from "../components/RamdomPostsComponent.vue";

export default {
  name: "Home",
  components: {
    RamdomPostsComponent,
  },
};
</script>
