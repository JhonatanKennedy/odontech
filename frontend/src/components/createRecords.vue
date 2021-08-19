<template >
    <v-app>
      <v-card id="createRecordContainer">
        <br>
        <v-breadcrumbs :items="links"></v-breadcrumbs>
        <br>
        <h3>Novo Prontuário</h3>
        <v-form id="formContainer">
          <v-card-text>
            <v-text-field
              label="Nome"
              v-model="name"
              hide-details="auto"
              :rules="rules"
            ></v-text-field>

            <v-text-field
              label="Data de nascimento"
              v-model="birth"
              hide-details="auto"
              v-mask="'##/##/####'"
              :rules="rules"
            ></v-text-field>

            <v-text-field
              label="Celular"
              v-model="cel"
              hide-details="auto"
              v-mask="'(##) #####-####'"
              :rules="rules"
            ></v-text-field>

            <v-text-field
              label="Alergias"
              v-model="alergies"
              hide-details="auto"
              :rules="rules"
            ></v-text-field>

            <v-text-field
              label="Comentários"
              v-model="comments"
              hide-details="auto"
            ></v-text-field>
            <br>

            <div id="labelDentes">
              <b>Dentes:</b>
            </div>
              <b>Superior</b>
            
            <v-col id="tooths">
              <v-checkbox
                v-model="tooths[i+16]"
                :label="i.toString()"
                color="red"
                :value="1"
                hide-details
                v-for="i in 16" :key="i"
              ></v-checkbox>
            </v-col>

            <b>Inferior</b>

            <v-col id="tooths">
              <v-checkbox
                v-model="tooths[i]"
                :label="i.toString()"
                color="red"
                :value="1"
                hide-details
                v-for="i in 16" :key="i"
              ></v-checkbox>
            </v-col>
          </v-card-text>
        </v-form>
        <v-btn class="success mx-o mt-3" @click="submit">Criar Prontuário</v-btn>
        <br>
        <br>
      </v-card>
    </v-app>
</template>

<script>
import admin from '../services/adm';

export default {

  data:()=>{
    return{
      name:'',
      birth:'',
      cel:'',
      alergies:'',
      comments:'',
      tooths:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

      links:[
        {
          text:'Admin',
          disabled: false,
          href:'/Admin'
        },
        {
          text: 'Criar Prontuário',
          disabled: true,
          href:'/admin/createRecord/:id'
        }
      ],
      rules:[
        value => !!value || 'Necessário'
      ]
    }
  },
  methods:{
    submit(){

      const data = {
        name: this.name,
        birth: this.birth,
        cel: this.cel,
        alergies: this.alergies,
        tooths: this.tooths,
        comments: this.comments
      }
      admin.createRecord(data, this.$route.params.id)
      .then( () => {
        alert('Prontuário criado com sucesso');
        window.location.href = 'http://localhost:8080/Admin/'
      })
      .catch( error => {
        alert(error)
      })

    }
  }
}
</script>

<style>
a{
  color: #1F7087;
}
#createRecordContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#formContainer{
  width: 80%;
}
#labelDentes{
  display: flex;
  justify-content: flex-start;
}
#tooths{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

</style>
