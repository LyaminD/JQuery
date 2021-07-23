console.log("exercice 3");
$("h1").text('Lyamin');
$("#tagline").text('sa marche pas');
$('nav ul:first').remove();
$('nav ul:last span').removeClass('glyphicon-log-in').addClass('glyphicon-king')
$('footer p').text("Copyright 2017").css('font-weight' , 'bolder')
$('div p').text('Mon projet');
$("img").attr('src','https://media.airofmelty.fr/article-2083995-ratio15_720/media.jpg');

$('#work1').prepend($("<p>DU BON BOULOT!</p>"),
                    $('<img>',{
                            class:"imagefruit",
                            src: "https://media.airofmelty.fr/article-2083995-ratio15_720/media.jpg",
                            style: "height : 250px" }));


$('footer').addClass('intro')
                