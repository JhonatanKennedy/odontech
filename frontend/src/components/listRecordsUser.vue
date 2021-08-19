<template>
  <div id="listUserRecords">
      <div id="noData" v-if="records.length === 0">
        <h2>Sem Prontuários</h2>
      </div>
      <v-simple-table dense v-if="records.length !== 0">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Data
            </th>
            <th class="text-left">
              Comentários
            </th>

          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in records"
            :key="item.id"
          >
            <td style="padding:10px">{{ item.date.substring(0,10) }}</td>
            <td>{{ item.comments }}</td>
            <td>
              <v-btn @click="gotoRecord(item)" >Ver</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
 
<script>
import user from '../services/user';

  export default {
    data () {
      return {
        records:[],
      }
    },
    mounted(){
      user.getMedicalRecords(this.$route.params.id)
      .then(response => {
        this.records = response.data;
      })
      .catch(error => alert(error))
    },
    methods:{
      gotoRecord(data){
        this.$router.push({name: "RecordUser", params: { data: data, id: this.$route.params.id }});
      }
    }
  }
</script>
 
 <style>
 </style>