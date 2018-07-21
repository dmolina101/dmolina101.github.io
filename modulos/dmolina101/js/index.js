$(document).ready(() => {

  $.fn.idioma('es');

  //Para los tooltips
  $('[data-toggle="tooltip"]').tooltip();

  $.fn.rating();

  //Evento scroll sobre la ventana
  $(window).scroll(() => {

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
$.fn.eventos = () => {

  /*
    Evento click sobre .idioma
  */
  $('.idioma').unbind('click');
  $('.idioma').click((e) => {

    //Obetenemos el atributo que indica en que idioma esta
    let idioma = $(e.target).parent().attr('lang');

    //Evaluamos
    if(idioma == 'es'){

      //Traducimos
      $(e.target).parent().attr('lang','en');
      $(e.target).text('Español');
      $.fn.idioma('en');

    }else{

      //Traducimos
      $(e.target).parent().attr('lang','es');
      $(e.target).text('English');
      $.fn.idioma('es');

    }//Fin del if

    $.fn.eventos();

  });//Fin del evento click
  /***********************/

  /*
    Evento click sobre el link #itemsMenuPrincipal
  */
	$('#itemsMenuPrincipal .link').unbind('click');
	$('#itemsMenuPrincipal .link').click((e) => {

    //Obtenemos el id
    let id = $(e.target).attr('id');

    switch(id){

      case 'section_inicio': var top = 0;
                             break;

      case 'section_habilidades': var top = $('#skills').offset().top - 60;
                                  break;

      case 'section_experiencia': var top = $('#experiencia').offset().top - 60;
                                  break;

      case 'section_certificados': var top = $('#certificados').offset().top - 60;
                                   break;

      default: var top = 'none';

    }//Fin del switch

    if(top !== 'none'){

      //Evaluamos el dispositivo
      if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){

        setTimeout(() => {

          window.scrollTo(0,top);

        }, 700);

      }else{

        $("html")
        .animate({ scrollTop: top}, 700);

      }//Fin del if

    }

		$.fn.eventos();

	});//Fin del evento click
  /***********************/

  /*
    Evento click sobre #imprimir_cv
  */
  $('#imprimir_cv').unbind('click');
  $('#imprimir_cv').click(function(){

    //Obetenemos el atributo que indica en que idioma esta
    let idioma = $('.idioma').attr('lang');

    const pdf = new jsPDF('p', 'mm', "a4");

    html2canvas($('.wrapperContPdf .img1')[0]).then(canvas => {

      var pdfWidth  = 210;
      var pdfHeight = 298;

      let canvasImg = canvas.toDataURL("image/jpg");
      pdf.addImage(canvasImg, 'JPEG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
      pdf.addPage();

      html2canvas($('.wrapperContPdf .img2')[0]).then(canvas => {

        let canvasImg = canvas.toDataURL("image/jpg");
        pdf.addImage(canvasImg, 'JPEG', 0, 0, 215, 300, '', 'FAST');
        pdf.save('dmolina101_cv.pdf');

      });

    });

    $.fn.eventos();

  });//Fin del evento click
  /***********************/

  /*
    Evento click sobre .modal_certificado
  */
  $('.modal_certificado').unbind('click');
  $('.modal_certificado').click((e) => {

    //Obtenemos el id
    let id = $(e.target).attr('id');

    $.fn.modal_certificado(id);

    $.fn.eventos();

  });//Fin del evento click
  /***********************/

};//Fin de la función $.fn.eventos

/*
  Función que arma la modal para mostrar los certificados
*/
$.fn.modal_certificado = (id) => {

  switch(id){

    case 'certificado1': var img = '<img src="modulos/dmolina101/images/certificados/2.jpg" class="img-fluid">';
                         break;

    case 'certificado2': var img = '<img src="modulos/dmolina101/images/certificados/3.jpg" class="img-fluid">';
                        break;

    case 'certificado3': var img = '<img src="modulos/dmolina101/images/certificados/4.jpg" class="img-fluid">';
                         break;

    case 'certificado4': var img = '<img src="modulos/dmolina101/images/certificados/10.jpg" class="img-fluid">';
                         break;

    case 'certificado5': var img = '<img src="modulos/dmolina101/images/certificados/5.jpg" class="img-fluid">';
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

/*
  Función que muestra el rating de cada habilidad
*/
$.fn.rating = () => {

  //Recorremos cada uno de los elementos que deben
  //de poseer un rating
  $('.rating').each((indice, elemento) => {

    //Obtenemos valores
    let ratingVal    = parseInt($(elemento).attr('rating-value'));
    let ratingTarget = $(elemento).find('select');
    const ratingDesc   = (ratingVal) => {

      var desc;

      switch (ratingVal) {
        case 1:
          desc = 'pesimo';
          break;
        case 2:
          desc = 'regular';
          break;
        case 3:
          desc = 'bueno';
          break;
        case 4:
          desc = 'excelente';
          break;
        default:
          desc = 'pesimo';
      }

      return desc;

    }//Fin ratingDesc

    ratingTarget.addClass(ratingDesc(ratingVal))
    ratingTarget.barrating({
      initialRating : ratingVal,
      readonly      : true,
      theme         : 'bars-movie'
    });

  });//Fin each

};//Fin de la función $.fn.rating
