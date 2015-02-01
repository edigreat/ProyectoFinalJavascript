$(document).ready(function(){
	new WOW().init();
  inicializarEfectos();
  obtenerCerveceria();

});



function inicializarEfectos(){
  $(".lista-navegacion li a").addClass('animated pulse');
  $("#inicio h1, #inicio p").addClass("wow bounceInUp");
  $(".nosotros-texto").addClass("wow fadeInRight");
  $(".videoContainer").addClass("wow fadeInLeft");
  $("#historia img,#historia p,#historia h2").addClass("wow fadeIn");
  $("#cervecerias h1").addClass("wow fadeIn");
  $("#internacionales").addClass("wow fadeIn");
  $("#internacionales").addClass("wow fadeInRight");
  $("#cervecerias figure").addClass("efecto-imagen  wowload fadeInUp");
  $("#formaOculta").css("display","block");
  $("#formaOculta").css("background","rgba(0,0,0,0.9)");
  $("#formaOculta").css("width","100%");
  $("#formaOculta").css("height","100%");
  $("#formaOculta").css("position","fixed");
  $("#formaOculta").css("top","0");
  $("#formaOculta").css("left","0");
  $("#formaOculta").css("text-align","center");
  $("#formaOculta").css("display","none");
  $("#formaOculta.form-group").css("padding","20px");
  $("#mensajeRegistro").css("display","none");
   
 
}


function obtenerCerveceria(){
  var aleatorio = Math.round(Math.random()*7);
  var cerveceria = "<a  target=\"_blank\" class=\"list-group-item active animated fadeIn \"";
  $.getJSON("http://api.openbeerdatabase.com/v1/breweries.json?callback=?", function(response) {
      cerveceria+=" href='"+response.breweries[aleatorio].url+"' > ";
      cerveceria+=response.breweries[aleatorio].id+". ";
      cerveceria+=response.breweries[aleatorio].name+" <br /> <br />Pagina "+response.breweries[aleatorio].url+" </a>";
      $("#internacionales-list").html(cerveceria+"<br /> ");
    });
  //console.log("realizando peticion");
  setTimeout(function(){obtenerCerveceria()},5000);
  
}

function mostrarForma(){
      $("#formaOculta").show('slow');
      $("#formaOculta").css("display","block");
 
  
  
}

function enviarInfo(){
      $("#formaOculta").hide('slow');
      $("#mensajeRegistro").show(1000).hide(5000);

  
}

function cancelar(){
      $("#formaOculta").hide('slow');
  
}

