let width
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
});


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