window.addEventListener("load",function(){


   console.log('ok');
     $('.mostrarcontenido').click(function(e){

        $('.oculto').css("display","block");

     });


     $('.mostrarcontenido1').click(function(e){

      $('.oculto1').css("display","block");

   });


//vmaos a llamar al boton_col1 de columna 1

$(".boton_col1").click(function(e){

 
   e.preventDefault;


   $('.oculto').css("display","none");



   return false;
    

});

   //vmaos a llamar al boton_col3 de columna 3

   $(".boton_col3").click(function(e){

 
      e.preventDefault;

 
      $('.oculto1').css("display","none");



      return false;
       

   });


   $(".corazon").mouseover(function(e){


      //agregar morado
     
      $(this).addClass("corazonmorado");


      $(this).mouseout(function(e){


     //quita morado
         $(this).removeClass("corazonmorado");
   
   

      });
   

   });


   
 


     /*var mostrarcontenido = document.getElementsByClassName('mostrarcontenido');

     mostrarcontenido.addEventListener('click',function(){

      mostrarcontenido.style.display = 'block';


     });
*/


});