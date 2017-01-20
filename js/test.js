
/**
 * Created by D on 26.12.2016.
 */
 $(document).ready(function() {

     $('#wrap-all').on('mousemove', function (event) {

         var containerWidth = $(this).innerWidth(),
            containerHeight = $(this).innerHeight(),
            mousePositionX = (event.pageX / containerWidth) * 80,
            mousePositionY = (event.pageY / containerHeight) * 80;
            // console.log(mousePositionX);
            // console.log(mousePositionY);
         // $(".the_div").css({"transform":"translate(" + my_width + "px,0px)"});
         // $(this).css({'transform':"translate("+ mousePositionX+"px,"+ mousePositionY+"px)"});
         $(this).css('background-position', mousePositionX + '%' + ' ' + mousePositionY + '%');

   });
 });
// var parElem = document.getElementById('wrap-all');
// console.log(parElem);
//  document.querySelector('.brandLogo').addEventListener('click',function(){
//      console.log('fucking shit');
//  });
// //
// });
