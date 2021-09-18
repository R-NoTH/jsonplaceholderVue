<template>
  <div>
    <h3>Post Asociados</h3>
    <h4>Nombre :{{ user.name }}</h4>
    <h4>Id : {{ this.$route.params.id }}</h4>
    <br />
    <table class="content-table">
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
