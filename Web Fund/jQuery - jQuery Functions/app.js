$(document).ready(function(){
    $('p').click(function(){
        $('h3').html(
        `
            <h1>Appended</h1>
        `
        );
    });

    $('h3').on('click', 'h1', function(){
        $('p').css('color', 'green');
    });
});
