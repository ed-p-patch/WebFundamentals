$(document).ready(function(){
    $('img').click(function(){
        $(this).fadeOut(50);
    });

    $('.reappear').click(function(){
        $('img').show();
    });  
})