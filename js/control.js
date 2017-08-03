$(document).ready(function(){
    $('.go_to').click( function(){ 
    var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); 
        }
        return false;
    });
});



$(document).ready(function () {
 $("form").submit(function () {
 // Получение ID формы
 var formID = $(this).attr('id');
 // Добавление решётки к имени ID
 var formNm = $('#' + formID);
 $.ajax({
 type: "POST",
 url: 'mail.php',
 data: formNm.serialize(),
 success: function (data) {
 // Вывод текста результата отправки
 $(formNm).html(data);
 },
 error: function (jqXHR, text, error) {
 // Вывод текста ошибки отправки
 $(formNm).html(error);
 }
 });
 return false;
 });
});



$(document).ready(function(){
    
    $('a[href^="#"]').click(function(){ 
    var target=$(this).attr('href'); 
    $('html, body').animate({ 
    scrollTop:$(target).offset().top}, 
    800); 
    return false; 
    });

    $(window).scroll(function(){
            if($(window).scrollTop()>60){
                $('#nav_menu').addClass('fix_menu');
                $('#nav_menu').css('padding-top','0px');
                $('.lifirst').css('margin-left','36vw');



            } else{
                $('#nav_menu').removeClass('fix_menu');
                $('#nav_menu').css('padding-top','0%');
                $('.lifirst').css('margin-left','0px');

            }

    });

    /*Modal Function*/
    function modal(text){
        var content='<div id="modal"><div id="close_modal"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 21.9 21.9" enable-background="new 0 0 21.9 21.9"><path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z" fill="#FFFFFF"/></svg></span></div><div id="content_modal">'+text+'</div></div><div id="black_fill"></div>';
        $('body').append(content);


    }

    function closemodal(){

        $('#modal').remove();
        $('#black_fill').remove();
    }

    $('button[data-modal="form"]').click(function(){

        var text=$(this).html();
        var form='<form name="go" enctype="multipart/form-data"><input type="text" name="name" placeholder="Your name:"/><input type="text" name="phone" placeholder="Your phone:"/><button type="submit" class="btn">'+text+'</button></form>';
        modal(form);
        

    });


    $('body').on('click','#close_modal',function(){
        closemodal();

    });
});

