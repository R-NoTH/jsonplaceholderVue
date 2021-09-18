<template>
  <div>
    <h1>Lista de Post</h1> | <button>Todo los Posts</button>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="post in postsRamdom" :key="post.id">
      <td>{{ post.id }}</td>
      <td>{{ post.title }}</td>
      <td>{{ post.body }}</td>
      <td><button>Ver</button></td>
    </tr>
  </tbody>
  <!-- <pre>{{ postsRamdom }}</pre> -->
</table>
  </div>
</template>
<script>
import postsService from '@/services/postsService.js';

export default {
  name:'Posts',
  created(){
    postsService.get()
    .then(posts => this.posts = posts.data);
  },
  data(){
    return{
      posts:[],
    }
  },
  methods:{

  },
  computed:{
    postsRamdom(){
      let arrayPosts = this.posts;
    // Desordena el Array que esta guardado en arrayPosts.
      const arrayDesordenado = arrayPosts.sort(() => Math.random() - Math.random());
    // Obtiene una submatriz de los primeros n elementos después de mezclarlos
      let selected = arrayDesordenado.slice(0, 5);
      return selected;
    },
  }
}
</script>
<style scoped>
.table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}
</style>
