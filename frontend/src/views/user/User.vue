<template>
  <div id="user">
    <h2>Bem vindo(a) {{userInfo.name}}</h2>
    <br><br>
    <v-card height="200px" width="300px" id="card">
      <button @click="editUserPage">Editar Usuario</button>
      <br>
      <button @click="listRecordsPage" >Listar Prontuários</button>
    </v-card>

  </div>
</template>

<script>
import user from '../../services/user';

  export default {
    data: () => {
      return{
        userInfo:{}
      }
    },
    methods:{
      listRecordsPage(){
        this.$router.push(`/user/recordsList/${this.$route.params.id}`);
      },
      editUserPage(){
        this.$router.push(`/user/edit/${this.$route.params.id}`);
      }
    },
    created(){
      user.getUser(this.$route.params.id)
      .then(response => this.userInfo = response.data)
      .catch(error => alert(error));
    }
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