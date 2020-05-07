
$(document).ready(function(){
setTimeout(function(){
    $('#h4').removeClass('header4')
},500);

$('.goback').hide()
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

    $('.wss').on('click',function(){
        window.setTimeout(function(){
            $(".projectsRight").addClass("slidefromrightp3activate");
            $(".projectsLeft").addClass("slidefromleftp3activate");
            $('.goback').show();
            $('.seeprojects').addClass("addslidertoprojects")
        },100)
    }
    )
});


//
/*
let width = window.screen.width;
let height = window.screen.height;
let ratio = height/width;
if(ratio>1){

    $('.projectsLeft').css('height','80%')
    $('.projectsLeft').css('width','80%')
    $('.projectsLeft').css('display','flex')
    $('.projectsLeft').css('flex-direction','column')
    $('.projectsLeft').css('justify-content','space-between')
    $('.projectsLeft').css(' margin-left','5vh')

    $('.projectsRight').css('height','80%')
    $('.projectsRight').css('width','80%')
    $('.projectsRight').css('display','flex')
    $('.projectsRight').css('flex-direction','column')
    $('.projectsRight').css('justify-content','space-between')
    $('.projectsRight').css(' margin-left','5vh')

    $('.portfolioprojects').css('background','242424')
    $('.portfolioprojects').css('height','80%')
    $('.portfolioprojects').css('background-size','cover')
    $('.portfolioprojects').css('position','relative')
    $('.portfolioprojects').css('height','400vh')
    $('.portfolioprojects').css('width','100%')
    $('.portfolioprojects').css('color','white')
    $('.portfolioprojects').css('border-bottom','2px solid white')

    $('.wrapProjects').css('padding-top','2%')
    $('.wrapProjects').css('display','flex')
    $('.wrapProjects').css('flex-direction','column')
    $('.wrapProjects').css('height','s80%')
    $('.wrapProjects').css('width','100%')



}
console.log(ratio);
console.log(window.screen.width)
console.log(window.screen.height)
*/
//

$("#projectone").hover(function(){
    $('#imgp1').attr("src","./img/yearsearch.gif");
})
$("#projectone").mouseleave(function(){
    $('#imgp1').attr("src","./img/yearsearchLOGO.png");
})

$("#projecttwo").hover(function(){
    $('#imgp2').attr("src","./img/whoscoredradars.gif");
})
$("#projecttwo").mouseleave(function(){
    $('#imgp2').attr("src","./img/whoscoredradarsLOGO.png");
})

$("#projectthree").hover(function(){
    $('#imgp3').attr("src","./img/moviedb.gif");
})
$("#projectthree").mouseleave(function(){
    $('#imgp3').attr("src","./img/moviedbLOGO.png");
})

$("#projectfour").hover(function(){
    $('#imgp4').attr("src","./img/bomber.gif");
})
$("#projectfour").mouseleave(function(){
    $('#imgp4').attr("src","./img/bomberLOGO.png");
})

$("#projectfive").hover(function(){
    $('#imgp5').attr("src","./img/wheel.gif");
})
$("#projectfive").mouseleave(function(){
    $('#imgp5').attr("src","./img/wheelLOGO.png");
})

$("#projectsix").hover(function(){
    $('#imgp6').attr("src","./img/itunesmusiclibrary.gif");
})
$("#projectsix").mouseleave(function(){
    $('#imgp6').attr("src","./img/itunesmusiclibraryLOGO.png");
})

$("#projectseven").hover(function(){
    $('#imgp7').attr("src","./img/ceneo.gif");
})
$("#projectseven").mouseleave(function(){
    $('#imgp7').attr("src","./img/ceneoLOGO.png");
})


$("#projecteight").hover(function(){
    $('#imgp8').attr("src","./img/wordc.gif");
})
$("#projecteight").mouseleave(function(){
    $('#imgp8').attr("src","./img/wordcounterLOGO.png");
})

$("#projectnine").hover(function(){
    $('#imgp9').attr("src","./img/blackjack.gif");
})
$("#projectnine").mouseleave(function(){
    $('#imgp9').attr("src","./img/blackjackLOGO.png");
})


$("#projectten").hover(function(){
    $('#imgp10').attr("src","./img/minesweeper.gif");
})
$("#projectten").mouseleave(function(){
    $('#imgp10').attr("src","./img/minesweeperLOGO.png");
})






$('.fa-github').on('click',function(){
    window.open('https://github.com/dl769')
})

})

/*sliding 2nd page*/
/*
$(document).scroll(function () {
    $('.goback').show()
    var y = $(this).scrollTop();
    var x = $(".secondPageRight").position();
    
    if (y > (x.top - 50)) { // -50 so things don't overlap
        $(".secondPageRight").addClass(
            "slidefromleftactivate");
    }
    else {
        $(".secondPageRight").removeClass(
            "slidefromleftactivate");
    }

    });
*/

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var z = $(".portfolioprojects").position();
        
        if (y > (z.top )) { // -50 so things don't overlap
            $(".projectsRight").addClass("slidefromrightp3activate");
            $(".projectsLeft").addClass("slidefromleftp3activate");
            $('.goback').show();
            $('.seeprojects').addClass("addslidertoprojects")
        }else{
            $('.goback').hide();
        }

    
        });



function redirect(url){
    window.open(url);
}