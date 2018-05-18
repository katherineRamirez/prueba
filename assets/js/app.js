$(document).ready(function(){

// Cambiando color del botón al hacerle click 
 $(".trueQuestion1").click(function(){
        $(this).toggleClass("color correct");
    });
 $(".trueQuestion2").click(function(){
        $(this).toggleClass("color inCorrect");
    });
 $(".trueQuestion3").click(function(){
        $(this).toggleClass("color correct");
    });
 $(".falseQuestion1").click(function(){
        $(this).toggleClass("color inCorrect");
    });
 $(".falseQuestion2").click(function(){
        $(this).toggleClass("color correct");
    });
 $(".falseQuestion3").click(function(){
        $(this).toggleClass("color inCorrect");
    });

// Función del botón Validar 
 $(".validate").click(function(){

 // Si se selecciona ambas alternativas nos muestra un alert en pantalla
 	  if($(".trueQuestion1").hasClass('color') && $(".falseQuestion1").hasClass('color')){ 
 	  	$(".firstList").toggleClass("invalid");
 	  	alert("No puede seleccionar dos alternativas de la misma pregunta");
 	  }

 	  if($(".trueQuestion2").hasClass('color') && $(".falseQuestion2").hasClass('color')){
 	  	$(".secondList").toggleClass("invalid");
 	  	alert("No puede seleccionar dos alternativas de la misma pregunta");
 	  }
 	  if($(".trueQuestion3").hasClass('color') && $(".falseQuestion3").hasClass('color')){
 	  	$(".thirdList").toggleClass("invalid");
 	  	alert("No puede seleccionar dos alternativas de la misma pregunta");
 	  }

// Si selecciona las alternativas correctas, se activa el modal que nos muestra una imagen y audio de Correcto
    if ($(".trueQuestion1").hasClass('correct') && $(".falseQuestion2").hasClass('correct') && $(".trueQuestion3").hasClass('correct')){
        $("#modalAnswer").append('<div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog">'+    
        '<img class="image" src="assets/images/muybien.png"><audio src="assets/images/correcto.mp3" autoplay="autoplay"></audio></div></div>');
// Si su selección es distinta a la correcta, se activa el modal que nos muestra una imagen y audio de Incorrecto
    }else if($(".trueQuestion2").hasClass('inCorrect') || $(".falseQuestion1").hasClass('inCorrect') || $(".falseQuestion3").hasClass('inCorrect')){
    	  $("#modalAnswer").append('<div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog">'+    
        '<img class="image" src="assets/images/incorrecto.png"><audio src="assets/images/incorrecto.mp3" autoplay="autoplay"></audio></div></div>');
    }else{
// Si no selección alguna de las dos alternativa en cualquiera de las preguntas nos muestra un alert en pantalla
    	alert('Debe responder todas las preguntas');
    }
  });

});

