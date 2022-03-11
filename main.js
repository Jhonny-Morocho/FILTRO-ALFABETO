var app = new Vue({
    el: '#main',
    data: {
      message: 'Hola Vue!',
      input:'funeraria jaramillo',
      vocales:'',
      consonantes:''
    },
    methods: {
        btnEjecutar(){
            this.vocales=this.input.replace('/[aeiouáéíóú]/','');
        }
    },
})