//alert('WESH !');

$('document').ready(function() {
    console.log( "ready!" );
    console.log(window.location);

    var adress = "/cv";

    var redirect = function Redirect() {
        window.location = adress;
    }
    //setTimeout(Redirect(), 5000);
    
    /*if( window.location != adress){
        setTimeout(redirect, 5000);
    }*/
});




/*function stopSetTimeout(){
    clearTimeout(animationTimeout);
}*/



