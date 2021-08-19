<template>
    <v-app>
      <v-card id="createRecordContainer">
        <br>
<v-breadcrumbs :items="items"></v-breadcrumbs>
        <br>
        <h3>Prontuário da data: {{date.substring(0,10)}}</h3>
          <v-card-text>
            <v-text-field
              label="Nome"
              v-model="name"
              hide-details="auto"
              disabled
            ></v-text-field>

            <v-text-field
              label="Data de nascimento"
              v-model="birth"
              hide-details="auto"
              disabled
            ></v-text-field>

            <v-text-field
              label="Celular"
              v-model="cel"
              hide-details="auto"
              disabled
            ></v-text-field>

            <v-text-field
              label="Alergias"
              v-model="alergies"
              hide-details="auto"
              disabled
            ></v-text-field>

            <v-text-field
              label="Comentários"
              v-model="comments"
              hide-details="auto"
              disabled
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
                disabled
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
                disabled
              ></v-checkbox>
            </v-col>
          </v-card-text>
        <br>
        <br>
      </v-card>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        name:'',
        birth:'',
        cel:'',
        alergies:'',
        comments:'',
        tooths:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        date:'',
        items: [
          {
            text: 'User',
            disabled: false,
            href: `/user/${this.$route.params.id}`,
          },
          {
            text: 'Lista de Prontuários',
            disabled: false,
            href: `/user/recordsList/${this.$route.params.id}`,
          },
          {
            text: 'Prontuário',
            disabled: true,
            href: '/user/recordsList/record/',
          },
        ],

        }
    },
    created(){
      const record = this.$route.params.data
      this.name = record.name
      this.birth = record.birth
      this.cel = record.cel
      this.alergies = record.alergies
      this.comments = record.comments
      this.tooths = record.tooths
      this.date = record.date
    }
  }
</script>
<style>

</style>