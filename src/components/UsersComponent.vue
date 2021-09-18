<template>
  <div>
    <h3>
      {{ titulo }}
    </h3>
    <table class="content-table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Aciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <b>{{ user.id }}</b>
          </td>
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
