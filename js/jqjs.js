/**
 * Created by Administrator on 2017/6/19.
 */
$(function () {

    $("#div1").css("opacity","1");
    var timer=setTimeout(function () {
        $("#span").animate({
            left:'1080px'
        },1000);
        $("#span").animate({
            top:"340px"
        },1000);
    },2000);
    var timer2=setTimeout(function () {
        $("#div2").css("opacity","1");
    },4000);
    var timer=setTimeout(function () {
        $("#span2").css("opacity","1");

        $("#span2").animate({
            left:'200px'
        },1000);
        $("#span2").animate({
            top:"270px"
        },2000);
    },8000);

    var timer3=setTimeout(function () {
        $("#img").css("display","block");
    },18000);


    $("#img2").mouseover(function () {
        $("#img2").animate({left:"75px"},1000)
    });

    var timer4=setTimeout(function () {
        $(".ind4-move").css("opacity","1");
    },6000);

        $(".ind4-move").mouseover(function(){
            $(".ind4-move").animate({left:'100px'},2000);
        });

    $("#btn1").click(function () {
        if($("#btn4").css("opacity","1")){
            $("#btn4").css("opacity","0");
        }
        $("#btn3").css("opacity","1");
    });
    $("#btn2").click(function () {
        if($("#btn3").css("opacity","1")){
            $("#btn3").css("opacity","0");
        }
        $("#btn4").css("opacity","1");
    });
    $("#btn3").click(function () {
        $(".ind5-p").css("opacity","1");
        $("#ind5-box3").css("opacity","0");
    });

});