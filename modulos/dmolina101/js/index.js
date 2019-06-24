var self;

var app = new Vue({
  el: '#app',
  data: {
    btnVerCert: "",
    certificados: [],
    experiencia: [],
    habilidades: [],
    idiomActivo: "",
    menuContacto: [],
    menuPrincipal: [],
    perfil: {},
    secciones: {
      sobreMi: {titulo: "", contenido: ""},
      habilidades: {titulo: ""},
      experienciaLab: {titulo: ""},
      certificados: {titulo: ""}
    }
  },
  beforeCreate: function(){},
  created: function () {},
  updated: function(){

    //Para los tooltips
    $('[data-toggle="tooltip"]').tooltip();

    self.rating();

  },
  beforeMount: async function () {

    this.traducir();
    this.habilidades = await this.habilidadesDisponibles();
    this.experiencia = await this.experienciaLaboral();
    this.certificados = await this.certificadosObtenidos();

  },
  mounted: function () {

    self = this;

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

    /*var mobile = self.mobileAndTabletcheck();
    (!mobile) ? self.urlWhatsapp = "https://web.whatsapp.com/send?phone=584244106840" : self.urlWhatsapp = "https://wa.me/584244106840";*/

  },
  methods:{

    idioma: function(e) {

      let codigoLang = ($(e.target).attr("data-lang") === "es") ? "en" : "es";
      localStorage.setItem('lang', codigoLang);
      this.idiomActivo = codigoLang;

      const traduccion = self.traductor();
      this.traducir();

    },
    traducir: async function() {

      const traduccion = await this.traductor();

      this.btnVerCert    = traduccion.btnVerCert;
      this.idiomActivo   = traduccion.idiomActivo;
      this.menuContacto  = traduccion.menuContacto;
      this.menuPrincipal = traduccion.menuPrincipal;
      this.perfil        = traduccion.perfil;
      this.secciones     = traduccion.secciones;
      this.habilidades   = await this.habilidadesDisponibles();
      this.experiencia   = await this.experienciaLaboral();
      this.certificados = await this.certificadosObtenidos();

    },
    traductor: async function() {

      if(!localStorage.getItem('lang')){
        localStorage.setItem('lang', 'es');
      }

      const codigoLang = localStorage.getItem('lang');
      const traduccion = await $.getJSON( "modulos/dmolina101/js/idioma/"+codigoLang+".json", function(data){
        return data;
      });

      return traduccion;

    },
    habilidadesDisponibles: function(){

      const habilidades = [
        {clase : "html", rating : "4", titulo : "Html5", icono : "html.jpg"},
        {clase : "css", rating : "4", titulo : "CSS3", icono : "css.jpg"},
        {clase : "js", rating : "4", titulo : "JS", icono : "js.jpg"},
        {clase : "mysql", rating : "4", titulo : "MySql", icono : "mysql.jpg"},
        {clase : "node", rating : "4", titulo : "NodeJS", icono : "node.jpg"},
        {clase : "less", rating : "4", titulo : "Less", icono : "less.jpg"},
        {clase : "oracle", rating : "4", titulo : "Oracle", icono : "oracle.jpg"},
        {clase : "dynamodb", rating : "3", titulo : "DynamoDB", icono : "dynamodb.jpg"},
        {clase : "postgresql", rating : "3", titulo : "Postgresql", icono : "postgresql.jpg"},
        {clase : "nextjs", rating : "3", titulo : "NextJS", icono : "nextjs.jpg"},
        {clase : "php", rating : "4", titulo : "PHP", icono : "php.jpg"},
        {clase : "bootstrap", rating : "4", titulo : "Bootstrap", icono : "bootstrap.jpg"},
        {clase : "soap", rating : "4", titulo : "SOAP", icono : "soap.jpg"},
        {clase : "restful", rating : "4", titulo : "RESTful", icono : "restful.jpg"},
        {clase : "codeigniter", rating : "4", titulo : "Codeigniter", icono : "codeigniter.jpg"},
        {clase : "laravel", rating : "3", titulo : "Laravel", icono : "laravel.jpg"},
        {clase : "android", rating : "2", titulo : "Android", icono : "android.jpg"},
        {clase : "jquery", rating : "4", titulo : "Jquery", icono : "jquery.jpg"},
        {clase : "git", rating : "4", titulo : "Git", icono : "git.jpg"},
        {clase : "composer", rating : "3", titulo : "Composer", icono : "composer.jpg"},
        {clase : "lodash", rating : "4", titulo : "Lodash", icono : "lodash.png"},
        {clase : "vue", rating : "4", titulo : "Vue js", icono : "vue.png"},
        {clase : "npm", rating : "4", titulo : "Node Package Manager", icono : "npm.jpg"},
        {clase : "aws", rating : "3", titulo : "Amazon Web Services", icono : "aws.jpg"},
        {clase : "serverless", rating : "3", titulo : "Serverless", icono : "serverless.jpg"},
        {clase : "heroku", rating : "2", titulo : "Heroku", icono : "heroku.jpg"},
        {clase : "react", rating : "4", titulo : "React JS", icono : "react.jpg"}
      ];

      return habilidades;

    },
    experienciaLaboral: async function(){

      const traduccion = await this.traductor();

      const experiencia = [
        {empresa : "Sofguar", cargo : traduccion.cargos["1"], tiempo : "02/2019 - " + traduccion.actualidad, lugar : traduccion.pais.VE, presencial : traduccion.presencial.presencial},
        {empresa : "Stacksavings", cargo : traduccion.cargos["2"], tiempo : "12/2017 – 01/2019", lugar : traduccion.pais.US, presencial : traduccion.presencial.remoto},
        {empresa : "Técnologia Creativa A&R", cargo : traduccion.cargos["3"], tiempo : "01/2017 – 03/2018", lugar : traduccion.pais.VE, presencial : traduccion.presencial.presencial},
        {empresa : "Ministerio del Poder Popular para la Alimentación", cargo : traduccion.cargos["4"], tiempo : "07/2016 – 01/2017", lugar : traduccion.pais.VE, presencial : traduccion.presencial.presencial},
        {empresa : "Ministerio del Poder Popular para la Alimentación", cargo : traduccion.cargos["5"], tiempo : "04/2016 – 01/2017", lugar : traduccion.pais.VE, presencial : traduccion.presencial.presencial},
        {empresa : "BQ Trading", cargo : traduccion.cargos["6"], tiempo : "09/2015 – 02/2016", lugar : traduccion.pais.VE, presencial : traduccion.presencial.presencial},
        {empresa : "Corpovex", cargo : traduccion.cargos["7"], tiempo : "02/2015 – 09/2015", lugar : traduccion.pais.VE, presencial : traduccion.presencial.presencial},
        {empresa : "Corporación de Abastecimientos y Servicios Agrícolas S.A.", cargo : traduccion.cargos["6"], tiempo : "06/2008 – 09/2015", lugar : traduccion.pais.VE, presencial : traduccion.presencial.presencial},
        {empresa : "Ministerio del Poder Popular para la Alimentación", cargo : traduccion.cargos["7"], tiempo : "10/2013 – 03/2014", lugar : traduccion.pais.VE, presencial : traduccion.presencial.presencial}/*,
        {empresa : "Banco del Tesoro", cargo : traduccion.cargos["8"]", tiempo : "05/2010 – 05/2010", lugar : traduccion.pais.VE, presencial : traduccion.presencial.presencial}*/
      ];

      return experiencia;

    },
    certificadosObtenidos: async function(){

      const traduccion = await this.traductor();

      const certificados = [
        {titulo : traduccion.certificados[0].titulo, impartido : traduccion.impartido, empresa : "Mijao", fecha : "11/2013 - 11/2013", id : "RIF: J-31746535-0"},
        {titulo : traduccion.certificados[1].titulo, impartido : traduccion.impartido, empresa : "Mijao", fecha : "10/2013 - 11/2013", id : "RIF: J-31746535-0"},
        {titulo : traduccion.certificados[2].titulo, impartido : traduccion.impartido, empresa : "Mijao", fecha : "10/2013 - 10/2013", id : "RIF: J-31746535-0"},
        {titulo : traduccion.certificados[3].titulo, impartido : traduccion.impartido, empresa : "ISCA", fecha : "09/2013 - 10/2013", id : "RIF: J-30964433-5"},
        {titulo : traduccion.certificados[4].titulo, impartido : traduccion.impartido, empresa : "Mijao", fecha : "11/2010 - 12/2010", id : "RIF: J-31746535-0"}
      ];

      return certificados;

    },
    rating: function() {

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

        }

        ratingTarget.addClass(ratingDesc(ratingVal));
        ratingTarget.barrating({
          initialRating : ratingVal,
          readonly      : true,
          theme         : 'bars-movie'
        });

      });

    },
    irSeccion: function(e) {

      const self = this;
      const indice = $(e.target).parents("li").index();

      switch(indice){

        case 0: var moverA = $("#sobre-mi").offset().top; break;
        case 1: var moverA = $("#skills").offset().top; break;
        case 2: var moverA = $("#experiencia").offset().top; break;
        case 3: var moverA = $("#certificados").offset().top; break;
        case 4: self.imprimirCV();
        default: var moverA = $("#sobre-mi").offset().top; break;

      }//Fin del switch

      if(indice !== 4){
        zenscroll.toY(moverA - 64);
      }

    },
    imprimirCV: function(){

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

    },
    modalCertificado: function(e){

      let id = $(e.target).attr("data-id-cert");

      switch(id){

        case '0': var img = '<img src="modulos/dmolina101/images/certificados/2.jpg" class="img-fluid">';break;
        case '1': var img = '<img src="modulos/dmolina101/images/certificados/3.jpg" class="img-fluid">';break;
        case '2': var img = '<img src="modulos/dmolina101/images/certificados/4.jpg" class="img-fluid">';break;
        case '3': var img = '<img src="modulos/dmolina101/images/certificados/10.jpg" class="img-fluid">';break;
        case '4': var img = '<img src="modulos/dmolina101/images/certificados/5.jpg" class="img-fluid">';break;

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

    }

  }// Fin methods
});
