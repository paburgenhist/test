$(document).ready(function () {
    let link = $('.menu a');
    $(link).click(function (e) { 
        e.preventDefault();

        let id = $(this).attr('href');
        let height = $(id).offset().top;
        $('html').animate({scrollTop: height}, 1000);
        console.log(id);    
        console.log(height);
    });
});