console.log("exercice 4");

        $(".btn").click(function(){
          var email = $("input").val();
          alert(`Merci ${email} nous vous tiendrons informé des différentes offres`);
  });



$( "ul:first li:nth-child(2)" ).dblclick(function() {
    $("li:nth-child(2)").hide();
});

var produit =1;
$("img").click(function(){
    $("ul:last li:nth-child(2) a").text(`Cart ( ${produit++})`)
});
$("img").dblclick(function(){
    $("ul:last li:nth-child(2) a").text(`Cart ( ${produit+=2})`)
});

$( "img" ).on('mouseover',event => {
    let text =$(event.currentTarget).parent().next()[0].innerText;
    text = text.split(" ").pop();
      console.log('L\'utilisateur regarde ' + text)
    });


$( "input" ).keypress(function() {
        console.log( "L'utilisateur écrit" );
      });