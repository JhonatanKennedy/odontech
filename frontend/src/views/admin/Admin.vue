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
            <td>
              <v-btn depressed style="background-color:#2fb325; color: white;" 
              @click="createRecordsPage(user.id)">
                Criar Prontuário
              </v-btn>
            </td>
            <td>
                <v-btn depressed style="background-color: #1F7087; color: white;" @click="listRecordsPage(user.id)">
                  Listar Prontuários
                </v-btn>
            </td>
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
      idd:0
    }
  },

  mounted(){
    admin.getUsers().then(response => {
      this.Users = response.data;
    }).catch( error => {
      alert(error);
    });
  },

  methods:{
    createRecordsPage(id){
      this.$router.push(`/admin/createRecord/${id}`);
    },
    listRecordsPage(id){
      this.$router.push(`/admin/listRecords/${id}`);
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

</style>