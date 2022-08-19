$(document).ready(function(){
    $(".next").click(function(){
        slide();
    })
    $(".pre").click(function(){
        var slide_pre = $(".active").prev(); 
        if(slide_pre.length!=0){
            $(".active").addClass("endtoright").one("webkitAnimationEnd",function(){
                $(".endtoright").removeClass("endtoright").removeClass("active");
            })
            slide_pre.addClass("active").addClass("starttoleft").one("webkitAnimationEnd",function()
            {
                (".starttoleft").removeClass("starttoleft");
            })
        }else{
            $(".active").addClass("endtoright").one("webkitAnimationEnd",function(){
                $(".endtoright").removeClass("endtoright").removeClass("active");
            })
            $(".slides div.slide:last-child").addClass("active").addClass("starttoleft").one("webkitAnimationEnd",function(){
                $(".starttoleft").removeClass("starttoleft")
            });
        }
        
    })
    setInterval(slide,3000);
    function slide(){
        var slide_next = $(".active").next(); 
        if(slide_next.length!=0){
            $(".active").addClass("endtoleft").one("webkitAnimationEnd",function(){
                $(".endtoleft").removeClass("endtoleft").removeClass("active");
            })
            slide_next.addClass("active").addClass("starttoright").one("webkitAnimationEnd",function()
            {
                (".starttoright").removeClass("starttoright");
            });
        }else{
            $(".active").addClass("endtoleft").one("webkitAnimationEnd",function(){
                $(".endtoleft").removeClass("endtoleft").removeClass("active");
            })
            $(".slide:first-child").addClass("active").addClass("starttoright").one("webkitAnimationEnd",function(){
                $(".starttoright").removeClass("starttoright")
            })
        }
    }
    $(".animate__animated").hover(function(){
        $(this).addClass("animate__bounce");
    }, function(){
        $(this).removeClass("animate__bounce");
    })
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".backtop").fadeIn();
        }else{
            $(".backtop").fadeOut();
        }
    })
    $(".backtop").click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".menu-scroll").fadeIn();
    
        }else{
            $(".menu-scroll").fadeOut();
           
        }
    })
    $("#bar").click(function(){
        $("ul.menu").slideToggle();
    })
});