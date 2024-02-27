$('.company_intu a').click(function(e){
    e.preventDefault();
    let d = $('.ci1').css('display')
    if(d == 'none'){
        $('.ci1').addClass('on')
    }else{
        $('.ci1').removeClass('on')
    }
}) 
$('.oddugi a').click(function(e){
    e.preventDefault();
    let d = $('.ci2').css('display')
    if(d == 'none'){
        $('.ci2').addClass('on')
    }else{
        $('.ci2').removeClass('on')
    }
}) 
