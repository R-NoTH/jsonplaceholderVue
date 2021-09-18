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
    usersServices.get().then((users) => (this.users = users.data));
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
</style>
