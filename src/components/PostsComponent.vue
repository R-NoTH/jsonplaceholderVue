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
.botonVer {
  color: #31ac83 !important;
  font-size: 14px;
  font-weight: 300;
  padding: 0.5em 1.2em;
  background: rgba(0, 0, 0, 0);
  border: 2px solid;
  border-color: #31ac91;
  border-radius: 7px;
  transition: all 0.7s ease;
  position: relative;
}
.botonVer:hover {
  background: #31ac7d;
  color: #fff !important;
}
</style>
