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
.content-table {
  width: 60%;
  border-collapse: collapse;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
}

.content-table thead tr {
  background-color: #009879;
  color: #ffffff;
  /* text-align: center; */
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
  text-align: left;
}
/*  */

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.content-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
