<template>
  <div id="listRecords">
    <h3>Lista de Prontuários</h3>
    <v-breadcrumbs :items="links" ></v-breadcrumbs>
        <div id="noData" v-if="records.length === 0">
            <h2>Sem Prontuários</h2>
        </div>
      <v-simple-table dense style="width: 100%" v-if="records.length !== 0">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Data
              </th>
              <th class="text-left">
                Comentários
              </th>
              <th class="text-left">
                
              </th>
            </tr>
          </thead>
          <tbody >
            <tr
              v-for="item in records"
              :key="item.id"
            >
              <td style="padding:10px">{{ item.date.substring(0,10)}}</td>
              <td>{{ item.comments }}</td>
              <td><button id="buttonEditR" @click="editPageRecord(item.id, item)">Editar Prontuário</button></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
  </div>
</template>

<script>
import admin from '../services/adm';


export default {
  data(){
    return{
      records:[],
      links:[
        {
          text:'Admin',
          disabled: false,
          href:'/Admin'
        },
        {
          text: 'Criar Prontuário',
          disabled: true,
          href:'/admin/listRecords/:id'
        }
      ],
    }
  },
  mounted(){

    admin.listRecords(this.$route.params.id)
    .then( response => {
      this.records = response.data;
    })
    .catch( error => alert(error))
  },
  methods:{
    editPageRecord(id, data){
      this.$router.push({name: "RecordEdit", params:{ data: data, id: id }});
    }
  }

}
</script>

<style>
#listRecords{
  display: flex;
  flex-direction: column;
  align-items: center;
}
a{
  color: #1F7087;
}

#buttonEditR{
  background-color: #1F7087;
  color: white;
  padding: 5px;
  border-radius: 5px;
}
</style>