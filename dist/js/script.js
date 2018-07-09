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
   
    if( window.location == home){
        setTimeout(redirect, 5000);
    }else{
        clearTimeout(redirect);
    }
    
});




/*function stopSetTimeout(){
    clearTimeout(animationTimeout);
}*/



