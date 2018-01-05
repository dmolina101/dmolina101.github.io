$(document).ready(function(){

  //Para los tooltips
  $('[data-toggle="tooltip"]').tooltip()

  $('#html, #css3, #js, #less, #php, #restful, #codeigniter, #jquery').barrating({
    initialRating : 4,
    readonly      : true,
    theme         : 'bars-movie'
  });

  $('#mysql, #node, #oracle, #bootstrap, #soap, #git').barrating({
    initialRating : 3,
    readonly      : true,
    theme         : 'bars-movie'
  });

  $('#dynamodb, #laravel, #android, #composer').barrating({
    initialRating : 2,
    readonly      : true,
    theme         : 'bars-movie'
  });

  //Evento scroll sobre la ventana
  $(window).scroll(function(){
    $('.tooltip').remove();
  });

  $.fn.eventos();

});//Fin del document ready

/*
  Función donde se declaran todos los eventos
*/
$.fn.eventos = function(){

  /*
    Evento click sobre el link #itemsMenuPrincipal
  */
	$('#itemsMenuPrincipal .nav-link').unbind('click');
	$('#itemsMenuPrincipal .nav-link').click(function(){

    //Obtenemos el id
    var id = $(this).attr('id');

    switch(id){

      case 'section_inicio': $("html")
                             .animate({ scrollTop: 0 }, 700);
                             break;

      case 'section_habilidades': $("html")
                                  .animate({ scrollTop: $('#skills').offset().top - 60 }, 700);
                                  break;

      case 'section_experiencia': $("html")
                                 .animate({ scrollTop: $('#experiencia').offset().top - 60 }, 700);
                                 break;

      case 'section_certificados': $("html")
                                   .animate({ scrollTop: $('#certificados').offset().top - 60 }, 700);
                                   break;

    }//Fin del switch

		$.fn.eventos();

	});//Fin del evento click
  /***********************/

  /*
    Evento click sobre .modal_certificado
  */
  $('.modal_certificado').unbind('click');
  $('.modal_certificado').click(function(){

    //Obtenemos el indice
    var indice = $(this).index();

    alert(indice);

    $.fn.eventos();

  });//Fin del evento click
  /***********************/

};//Fin de la función $.fn.eventos
