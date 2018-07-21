//alert('WESH !');

$('document').ready(function() {

    $('.body_cards .tranche>div:not(.languages)').on('click',function(){
        //console.log('zbrah');
        $(this).toggleClass('open');
        $(this).closest('.tranche').siblings().find('>div').removeClass('open');
        $(this).siblings().removeClass('open');
    });

    $('.experiences .infos .section-content').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    //console.log(window.location.pathname);
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



