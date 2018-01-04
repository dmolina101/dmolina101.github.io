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

});//Fin del document ready
