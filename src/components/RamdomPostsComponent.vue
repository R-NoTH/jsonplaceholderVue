<template>
  <div class="container">
    <h3>{{ titulo }}</h3>
    <table class="content-table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in postsRamdom" :key="post.id">
          <td>
            <b>{{ post.id }}</b>
          </td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import postsService from "@/services/postsService.js";

export default {
  name: "RamdomPosts",
  created() {
    postsService.get().then((posts) => (this.posts = posts.data));
  },
  data() {
    return {
      posts: [],
      titulo: "Lista de Post Ramdom",
    };
  },
  methods: {},
  computed: {
    postsRamdom() {
      let arrayPosts = this.posts;
      // Desordena el Array que esta guardado en arrayPosts.
      const arrayDesordenado = arrayPosts.sort(
        () => Math.random() - Math.random()
      );
      // Obtiene una submatriz de los primeros n elementos después de mezclarlos
      let selected = arrayDesordenado.slice(0, 5);
      return selected;
    },
  },
};
</script>
<style scoped>
</style>
