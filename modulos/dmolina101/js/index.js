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
//alert($(window).width())
  //Evento scroll sobre la ventana
  $(window).scroll(function(){

    //Removemos los tooltips activos
    $('.tooltip').remove();

    //Obtenemos el ancho de la pantalla
    var ancho = $(window).width();

    //Obtenemos la distancia del top
    var top = $(document).scrollTop();

    //Evaluamos si reposicionamos
    if(ancho > 558){

      $('.wrapper_me').css('margin-top',top);

    }else{

      $('.wrapper_me').css('margin-top',0);

    }

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

    //Obtenemos el id
    var id = $(this).attr('id');

    $.fn.modal_certificado(id);

    $.fn.eventos();

  });//Fin del evento click
  /***********************/

};//Fin de la función $.fn.eventos

/*
  Función que arma la modal para mostrar los certificados
*/
$.fn.modal_certificado = function(id){

  switch(id){

    case 'certificado1': var img = '<img src="modulos/dmolina101/images/certificados/2.jpg" class="img-fluid">';
                         break;

    case 'certificado2': var img = '<img src="modulos/dmolina101/images/certificados/3.jpg" class="img-fluid">';
                        break;

    case 'certificado3': var img = '<img src="modulos/dmolina101/images/certificados/4.jpg" class="img-fluid">';
                         break;

    case 'certificado4': var img = '<img src="modulos/dmolina101/images/certificados/1.jpg" class="img-fluid">';
                         break;

  }//Fin switch

  var modal = `<div class="modal fade" id="modal_certificado" tabindex="-1" role="dialog" aria-hidden="true">
      				  <div class="modal-dialog" role="document">
      					<div class="modal-content">
      					  <div class="modal-header">
      						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
      						  <span aria-hidden="true">&times;</span>
      						</button>
      					  </div>
      					  <div class="modal-body">
                    `+img+`
      					  </div>
      					  <div class="modal-footer"></div>
      					</div>
      				  </div>
      				</div>`;

    //Agregamos la modal al body
	$('body').append(modal);

	//Opciones de la modal
	$('#modal_certificado').modal({backdrop : 'static'})

  //Evento cuando se cierre la modal
	$('#modal_certificado').on('hidden.bs.modal', function(e){

		$(this).remove();

	});

  //Mostramos la modal
	$('#modal_certificado').modal('show');

};//Fin de la función modal_certificado
