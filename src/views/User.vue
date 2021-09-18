<template>
  <div>
    <h3>{{ titulo }}</h3>
    <h4>Id : {{ this.$route.params.id }}</h4>
    <br />
    <table class="content-table">
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
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
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
