<template>
  <div>
    <h3>{{ titulo }}</h3>
    <table class="content-table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>
            <b>{{ post.id }}</b>
          </td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <button class="botonVer" @click="goToPost(post.userId)">Ver</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script scoped>
import postsService from "@/services/postsService.js";

export default {
  name: "Posts",
  created() {
    postsService.get().then((posts) => (this.posts = posts.data));
  },
  data() {
    return {
      posts: [],
      titulo: "Lista de Todos los Post ",
    };
  },
  methods: {
    goToPost(id) {
      this.$router.push({ name: "Post", params: { id } });
    },
  },
};
</script>
<style scoped>
</style>
