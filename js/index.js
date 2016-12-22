$(document).ready(function() {
   pageAnimation();
   $("#about").on("click",function(){
        $("#arr").css("animation","none");
        $(".list-title").animate({
            marginLeft:'100px',
            opacity:'0.9'
        },400,fade);
        
   });
    

    /*contact*/
    var unclicked = true;

    $("#yes").on("click",function(){
        $("#bzphoto").hide();
            $(".photo").fadeIn(800,function(){ 
            $(".contact-list").fadeIn(800);         
             });
    });

    $("#wx").hover(function(){
        $(".photo").css('background-image','url(./images/wxdetail.JPG)');
    },function(){
        $(".photo").css('background-image','url(./images/photo.jpg)')
    })

    $("#no").on("click",function(){
            
        $("#bzphoto").fadeIn(800);
    });


    $(window).scroll(function(){

        var scroll=$(window).scrollTop();
            if (700>scroll&&scroll>=30) {
                $(".about-content").fadeIn(1000);
            }else if(900>scroll&&scroll>=700){
                $(".skills-img").addClass("animationed");
                setTimeout(function(){
                    $(".skills-list").fadeIn(1000);
                },1000);
            }
    });


});



function pageAnimation(){
    setTimeout(function(){
        $(".welcome").fadeIn(800);
        $(".status").animate({
                right:'30%',
                opacity:'0.7'
            },1000);
    },500);
}

function fade(){
    setTimeout(function(){
        $("#list01").fadeIn(1000,function(){
            $("#list02").fadeIn(1000,function(){
                $("#list03").fadeIn(1000);
            })
        })
    },800)
    
}