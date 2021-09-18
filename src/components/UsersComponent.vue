<template>
  <div>
    <h3>
      {{ titulo }}
    </h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="botonVer" @click="goToPost(user.id)">Ver</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import usersServices from "@/services/usersServices.js";

export default {
  created() {
    // let urlUser = `https://jsonplaceholder.typicode.com/posts?userId=${this.id}`;
    // this.url = urlUser;
    // axios
    //   .get(urlUser)
    //   .then((response) => (this.user = response.data))
    //   .catch((error) => console.log(error));
    usersServices.get().then((users) => (this.users = users.data));
    // usersServices.get().then((users) => (this.users = users.data));
  },
  data() {
    return {
      titulo: "Lista de Usuarios",
      users: [],
    };
  },
  methods: {
    goToPost(id) {
      this.$router.push({ name: "User", params: { id } });
    },
  },
};
</script>
<style scoped>
.table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 50%;
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

.botonVer {
  color: #31ac83 !important;
  font-size: 14px;
  font-weight: 300;
  padding: 0.5em 1.2em;
  background: rgba(0, 0, 0, 0);
  border: 2px solid;
  border-color: #31ac91;
  transition: all 0.7s ease;
  position: relative;
}
.botonVer:hover {
  background: #31ac7d;
  color: #fff !important;
}
</style>
