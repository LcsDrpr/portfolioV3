//alert('WESH !');

$('document').ready(function() {
    console.log( "ready!" );

    var adress = "/cv";

    function Redirect() {
        window.location = adress;
    }
    //setTimeout(Redirect(), 5000);
    
    if( window.location != adress){
        setTimeout('Redirect()', 5000);
    }
});




/*function stopSetTimeout(){
    clearTimeout(animationTimeout);
}*/



