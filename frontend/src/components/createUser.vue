<template >
    <v-app>
      <v-card id="createRecordContainer">
        <br>
        <br>
        <h3>Novo Usuário</h3>
        <v-form id="formContainer" ref="form">
          <v-card-text>
            <v-text-field
              id="name"
              label="Nome"
              v-model="name"
              hide-details="auto"
              :rules="rules"
            ></v-text-field>

            <v-text-field
              id="age"
              label="Idade"
              v-model="age"
              hide-details="auto"
              :rules="rules"
              type="number"
            ></v-text-field>

            <v-text-field
              id="phone"
              label="Celular"
              v-model="phone"
              hide-details="auto"
              v-mask="'(##) #####-####'"
              :rules="rulePhone"
            ></v-text-field>

            <v-text-field
              id="email"
              label="Email"
              v-model="email"
              hide-details="auto"
              :rules="emailRules"
            ></v-text-field>

            <v-text-field
              id="password1"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Senha"
              v-model="password"
              hide-details="auto"
              :rules="rules"
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-text-field
              id="password2"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              label="Confirmação de senha"
              v-model="password2"
              hide-details="auto"
              :rules="passwordConfirmation"
              @click:append="show2 = !show2"
            ></v-text-field>
            <br>
            
          </v-card-text>
        </v-form>
        <v-btn class="success mx-o mt-3" @click="submit">Criar Usuário</v-btn>
        <br>
        <br>
      </v-card>
    </v-app>
</template>
<script>
import user from '../services/user';

export default {
 data:()=>{
    return{
      name:'',
      age:'',
      phone:'',
      email:'',
      password:'',
      password2:'',
      show1:false,
      show2: false,
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
  computed:{
   passwordConfirmation(){
     return[
        () => this.password === this.password2 || ('Senhas não combinam'),
        v => !!v || 'É necessário'
     ]
   }
 },
 methods:{
   submit(){
     const data = {
       name: this.name,
       age: this.age,
       phone: this.phone,
       email: this.email,
       password: this.password
     }
     if(this.$refs.form.validate()){
      user.createUser(data)
      .then((response) => {
        alert('Usuário cadastrado com sucesso!')
          this.$router.push(`/user/${response.data.id}`);
    
      })
      .catch(error => alert(error))
     }else{
       alert('Preecha os campos necessários')
     }
   }
 }
}
</script>

<style>

</style>