<template>
  <div id="admin">
    <h2>Admin</h2>
    <br><br>
    <div id="searchBox">
        <v-text-field
          label="Pesquisa"
          hide-details="auto"
        ></v-text-field>
    </div>
    <br>
    <v-divider></v-divider>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Nome
            </th>
            <th class="text-left">
              Idade
            </th>
            <th class="text-left">
              Telefone
            </th>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              Consultas
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in Users"
            :key="user.name"
          >
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.medicalRecords.length || 0 }}</td>
            <td><button @click="gotosite(user.id)">Criar Prontuário</button></td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>

<script>

import admin from '../../services/adm';

export default {
  name: 'Admin',

  data(){
    return{
      Users: [],
      search:'',
    }
  },

  mounted(){
    admin.getUsers().then(response => {
      this.Users = response.data;
    });
  },

  watch:{
    search: function(newVal){
      console.log(newVal)
    }
  },
  methods:{
    gotosite(id){
      console.log(id)
      window.location.href = window.location + '/createRecord/' + id
    }
  }

}
</script>

<style>
#admin{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
#userInfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
p.info{
  padding: 10px 00px;
}
#userPage{
  background-color: #1F7087;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 0px 10px;
}
#containerButtonsAdmin{
  display: flex;
  justify-content: center;
  align-items: center;
}
#teste{
background-color: yellow;
}

</style>