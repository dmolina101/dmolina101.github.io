$.fn.idioma = function(idioma){

  //Obtenemos el archivo del idioma
  $.getJSON( "modulos/dmolina101/js/idioma/"+idioma+".json", function( data ) {

    //Seteamos la traducciones
    $('#section_inicio').text(data.sobreMi);
    $('#section_habilidades').text(data.habilidades);
    $('#section_experiencia').text(data.expLaboral);
    $('#section_certificados').text(data.certificados);
    $('#imprimir_cv').text(data.imprimirCv);

    $('.programador').text(data.programador);
    $('#universidad').html(data.universidad);

    $('.sobreMi').text(data.sobreMi);
    $('.infoSobreMi').html(data.infoSobreMi);
    $('.wrapperContPdf .infoSobreMi').html(data.infoSobreMiPDF);

    $('.habilidades').text(data.habilidades);
    $('.pesimo').parent('.br-wrapper').find('.br-current-rating').text(data.pesimo);
    $('.regular').parent('.br-wrapper').find('.br-current-rating').text(data.regular);
    $('.bueno').parent('.br-wrapper').find('.br-current-rating').text(data.bueno);
    $('.excelente').parent('.br-wrapper').find('.br-current-rating').text(data.excelente);

    $('.experiencia').text(data.expLaboral);
    $('.tecCreativa').text(data.tecCreativa);
    $('.minppal1').text(data.minppal1);
    $('.minppal2').text(data.minppal2);
    $('.bq-trading').text(data.bqTrading);
    $('.corpovex').text(data.corpovex);
    $('.casa').text(data.casa);
    $('.minppal3').text(data.minppal3);
    $('.bancoTesoro').text(data.bancoTesoro);

    $('.certificados').text(data.certificados);
    $('.modal_certificado').text(data.btnCert);
    $('.impartido').text(data.impartido);
    $('.cert1').text(data.cert1);
    $('.cert2').text(data.cert2);
    $('.cert3').text(data.cert3);
    $('.cert4').text(data.cert4);
    $('.cert5').text(data.cert5);

  });

}//Fin de la función $.fn.idioma()
