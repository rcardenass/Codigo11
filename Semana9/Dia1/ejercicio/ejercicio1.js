function NroDeLetras (cadena, caracter) {
    let longitud = cadena.split(caracter);
    let mensaje = cadena.concat(' - ');
    mensaje = mensaje.concat(caracter);
    mensaje = mensaje.concat(':');
    console.log(mensaje , longitud.length - 1);
}

NroDeLetras('el cielo esta en ladrillado', 'i');






function AgregarIndiceACadena (cadena) {
    let char;
    let char2;
    let texto  = '';

    for(i = 0; i < cadena.length; i++){
        char = cadena.slice(i, i + 1);
        char2 = char.concat(String(i));
        texto = texto.concat(char2);
    }

    let mensaje = cadena.concat(': ');
    
    console.log(mensaje, texto);
}

AgregarIndiceACadena('ladrillado');



