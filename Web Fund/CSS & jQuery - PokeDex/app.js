$(document).ready(function(){ show_pokes(); });

function show_pokes(){
    for(var x = 1; x < 152; ++x){
        $('.pokemon').append('<img src="http://pokeapi.co/media/img/'+[x]+'.png">');
    }
}