<template >
    <v-app>
      <v-card id="createRecordContainer">
        <br>
        <br>
        <h3>Editar Prontuário</h3>
        <v-form id="formContainer" ref="form">
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
              :rules="ruleBirth"
            ></v-text-field>

            <v-text-field
              label="Celular"
              v-model="cel"
              hide-details="auto"
              v-mask="'(##) #####-####'"
              :rules="rulePhone"
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
        <v-btn class="success mx-o mt-3" @click="submit">Editar Prontuário</v-btn>
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
      id: '',
      name:'',
      birth:'',
      cel:'',
      alergies:'',
      comments:'',
      tooths:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      date:'',

      rules:[
        value => !!value || 'Necessário'
      ],
      rulePhone:[
        v => v.length === 15 || 'Digite o número completo'
      ],
      ruleBirth:[
        v => v.length === 10 || 'Digite a data completa'
      ]
    }
  },
  methods:{
    submit(){

      const data = {
        id: this.id,
        name: this.name,
        birth: this.birth,
        cel: this.cel,
        alergies: this.alergies,
        tooths: this.tooths,
        comments: this.comments,
        date: this.date
      }
      if(this.$refs.form.validate()){
        admin.editRecord(data, this.$route.params.id)
        .then( () => {
          alert('Prontuário editado com sucesso');
          this.$router.push('/admin');
        })
        .catch( error => {
          alert(error)
        });
      }else{
        alert('Digite todos os campos');
      }
    }

  },
  created(){
    const data = this.$route.params.data
    this.id = data.id;
    this.name = data.name;
    this.birth = data.birth;
    this.cel = data.cel;
    this.alergies = data.alergies;
    this.tooths = data.tooths;
    this.comments = data.comments;
    this.date = data.date
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
