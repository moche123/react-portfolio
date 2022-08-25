//! JAVASCRIPT : CALLBACK ES UNA FUNCION DENTRO DE OTRA, PARA EJECUTARLA CUANDO YO QUIERO

function termina(){
    console.log('termina')
}

function empieza(callback){
    setTimeout(() => {
        console.log('EMPIEZA')

        callback()

    }, 2000);
}


empieza(termina);


//!ESPERAR 2s LUEGO EMPIEZA ** TERMINA