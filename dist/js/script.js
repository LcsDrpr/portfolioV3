
var adress = "index.html";
function Redirect() {
    window.location="index.html";
}

if( window.location != adress){
    setTimeout('Redirect()', 5000);
}



/*function stopSetTimeout(){
    clearTimeout(animationTimeout);
}*/



