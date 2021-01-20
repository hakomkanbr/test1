$(document).ready(function(){
    $('.next').on("click",function(){
        var now_li = $('.active')
        var next_li = now_li.next()
        if(next_li.length){// İF THERE İS AN İMAGE
            now_li.removeClass('active');
            next_li.addClass('active');
        }
        var now = $('.show')
        var next_img = now.next();
        if(next_img.length){ // İF THERE İS AN İMAGE
        now.fadeOut(300).removeClass('show');
            next_img.fadeIn(300).addClass('show');
        }
    })



    $('li').on("click",function(){
    
        $("li").removeClass('active');
        $(this).addClass('active');


        $("img").removeClass("show");
        $("img[id="+ $(this).attr("data-target")+"]").addClass("show");
    })








    $('.prev').on("click",function(){
        var now_li = $('.active')
        var prev_li = now_li.prev()

        var now = $('.show')
        var prev_img = now.prev()

        if(prev_li.length){// İF THERE İS AN İMAGE
            now_li.removeClass('active');
            prev_li.addClass('active')
        }

        if(prev_img.length){// İF THERE İS AN İMAGE
            now.fadeOut(300).removeClass('show');
            prev_img.fadeIn(300).addClass('show');
        }
    })
})