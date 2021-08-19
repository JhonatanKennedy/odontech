<template>
  <div id="home">
    <v-card height="200px" width="300px">
      <v-card-subtitle>Rota aberta</v-card-subtitle>
      <v-btn @click="gotoCreateUSer">Criar usuário</v-btn>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Home',

  methods:{
    gotoCreateUSer(){
      this.$router.push('/register')
    }
  }
}
</script>

<style>
#home{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
