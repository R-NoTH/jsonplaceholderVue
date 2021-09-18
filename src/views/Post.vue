<template>
  <div>
    <h4>Id : {{ this.$route.params.id }}</h4>
    <pre>{{ $data }}</pre>
    <h1>Nombre :{{ user.name }}</h1>
    <hr />
    <p>post asociados</p>
    <br />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="commit in commitsRelacionados" :key="commit.id">
          <td>{{ commit.id }}</td>
          <td>{{ commit.name }}</td>
          <td>{{ commit.email }}</td>
          <td>{{ commit.body }}</td>

          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script >
// import { defineComponent } from "vue";
// import postsService from "@/services/postsService.js";
import axios from "axios";

export default {
  name: "Post",
  created() {
    let urlUser = `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`;
    // this.user = url;
    axios
      .get(urlUser)
      .then((response) => (this.user = response.data))
      .catch((error) => console.log(error));

    let urlPostComments = `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`;
    axios
      .get(urlPostComments)
      .then((response) => (this.commitsRelacionados = response.data))
      .catch((error) => console.log(error));
  },
  data() {
    return {
      user: [],
      commitsRelacionados: [],
    };
  },
  methods: {},
  computed: {},
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
