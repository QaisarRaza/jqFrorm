$(document).ready(function(){
    
    $('.openmanue').click(function(){
        $('.nav-items').css('right' , '0');
        console.log("click");
    });
    $('.closmanue').click(function(){
        $('.nav-items').css('right' , '-100%');
        console.log("click");
    });



    $('.login').click(function(){
        $('.model').css('top' , '15%');
        console.log("click");
    });
    $('.button2').click(function(){
        $('.model').css('top' , '-100%');
        console.log("click");
    });


    $('.signup').click(function(){
        $('.model2').css('top' , '15%');
        console.log("click");
    });
    $('.button22').click(function(){
        $('.model2').css('top' , '-100%');
        console.log("click");
    });
   

});