<template>
    <v-app>
      <v-card id="createRecordContainer">
        <br>
        <br>
        <h3>Editar Usuário</h3>
        <v-form id="formContainer" ref="form">
          <v-card-text>
            <v-text-field
              label="Nome"
              v-model="name"
              hide-details="auto"
              :rules="rules"
            ></v-text-field>
            <v-text-field
              label="Idade"
              v-model="age"
              hide-details="auto"
              :rules="rules"
              type="number"
            ></v-text-field>

            <v-text-field
              label="Celular"
              v-model="phone"
              v-mask="'(##) #####-####'"
              hide-details="auto"
              :rules="rulePhone"
            ></v-text-field>

            <v-text-field
              label="Email"
              v-model="email"
              hide-details="auto"
              :rules="emailRules"
            ></v-text-field>

            <v-text-field
              label="Senha"
              v-model="password"
              hide-details="auto"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            ></v-text-field>


            <br>
          </v-card-text>
        </v-form>
        <v-btn class="success mx-o mt-3" @click="editUser">Editar Usuário</v-btn>
        <br>
        <br>
      </v-card>
    </v-app>
</template>

<script>
import user from '../services/user';

export default {
  data :()=>{
    return{
      show: false,
      id:'',
      name:'',
      age: 0,
      phone:'',
      email:'',
      password:'',
      medicalRecords:[],
      rules:[
        value => !!value || 'Necessário',
      ],
      emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido'
      ],
      rulePhone:[
        v => v.length === 15 || 'Digite o número completo'
      ]
    }
  },
  created(){
    user.getUser(this.$route.params.id)
    .then(response => { 
      const data = response.data;
      this.id = data.id;
      this.name = data.name;
      this.age = data.age;
      this.phone = data.phone;
      this.email = data.email;
      this.password = data.password;
      this.medicalRecords = data.medicalRecords;

    }).catch(error => alert(error));
  },
  methods:{
    editUser(){
      const userData ={
        id: this.id,
        name: this.name,
        age: this.age,
        phone: this.phone,
        email: this.email,
        password: this.password,
        medicalRecords: this.medicalRecords
      }
      if(this.$refs.form.validate()){
        user.editUser(userData,this.$route.params.id)
        .then(() => alert('Usuário editado com sucesso!'))
        .catch(error => alert(error));
        this.$router.push(`/user/${this.$route.params.id}`);
      }else{
        alert('Digite todos os campos!');
      }
    }
  }
}
</script>

<style>

</style>