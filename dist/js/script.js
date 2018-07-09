//alert('WESH !');

$('document').ready(function() {
    console.log( "ready!" );
    console.log(window.location);

    var adress = "/curriculum";
    var home = "/";

    var redirect = function Redirect() {
        window.location = adress;
    }
    //setTimeout(Redirect(), 5000);
    
    var blop = true;
    if( blop == true){
        setTimeout(redirect, 5000);
        blop = false;
    }
    console.log('blop : '+ blop);
});




/*function stopSetTimeout(){
    clearTimeout(animationTimeout);
}*/



