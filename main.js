var app = new Vue({
    el: '#main',
    data: {
      message: 'Hola Vue!',
      input:'',
      vocales:'',
      consonantes:''
    },
    methods: {
        btnEjecutar(){
            if(!this.input){
                alert("Debe ingresar una cadena ");
            }
            var strVocal=this.input;
            var strConsonantes=this.input;
            this.vocales=strVocal.replace(/[^aáAÁeéEÉiíIÍoOóÓuúUÚ]/g,'');
            this.consonantes=strConsonantes.replace(/[ aáAÁeéEÉiíIÍoOóÓuúUÚ]/g,'');
        }
    },
})