<template>
  <div>
    <h3>{{ titulo }}</h3>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="userPost in userPosts" :key="userPost.id">
          <td>{{ userPost.id }}</td>
          <td>{{ userPost.title }}</td>
          <td>{{ userPost.body }}</td>

          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
// import { defineComponent } from '@vue/composition-api'
import axios from "axios";

export default {
  name: "User",
  created() {
    let urlUserPost = `https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`;
    // this.user = url;
    axios
      .get(urlUserPost)
      .then((response) => (this.userPosts = response.data))
      .catch((error) => console.log(error));
  },
  data() {
    return {
      titulo: "Post Asociados",
      userPosts: [],
    };
  },
};
</script>
<style scoped>
.table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
