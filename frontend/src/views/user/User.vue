<template>
  <div id="user">
    <h2>User Page</h2>
    <br><br>
    <v-card height="200px" width="300px" id="card">
      <button>Editar Usuario</button>
      <br>
      <button>Listar Prontuários</button>
    </v-card>

  </div>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style scoped>
#user{
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
}
#card{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
button{
  padding: 10px 10px;
  background-color: #1F7087;
  color: aliceblue;
  min-width: 70%;
}
button:hover{
  background-color: #115163;
}
</style>