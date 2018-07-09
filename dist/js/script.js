//alert('WESH !');

$('document').ready(function() {
    console.log( "ready!" );
    console.log(window.location);

    console.log(window.location.pathname);

    var adress = "/curriculum";
    var home = "/";

    var redirect = function Redirect() {
        window.location = adress;
    }
    //setTimeout(Redirect(), 5000);
   
    //if($('body').hasClass('ireland')){
    if(window.location.pathname != '/curriculum'){
        setTimeout(redirect, 5000);
    }else{
        clearTimeout(redirect);
    }
    
});




/*function stopSetTimeout(){
    clearTimeout(animationTimeout);
}*/



