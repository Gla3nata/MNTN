$(document).ready(function() {
    $(".content__text__title-more").click(function(event) {
        $(this).toggleClass("active").next().slideToggle(300);
        console.log(this);
    });
});