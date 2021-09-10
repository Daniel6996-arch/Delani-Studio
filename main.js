$(document).ready(function(){
       var imageUrl = "assets/backgrounds/first.jpg";
       var imageUrlOne = "assets/backgrounds/second.jpg";
       var imageUrlTwo = "assets/backgrounds/third.jpg";
        $(".bg-one").css("background-image","url("+ imageUrl +")");
        $(".bg-one").css("background-position","center");
        $(".bg-two").css("background-image","url("+ imageUrlOne +")");
        $(".bg-two").css("background-position","center");
        $(".bg-two").css("background-repeat","no-repeat");
        $(".bg-three").css("background-image","url("+ imageUrlTwo +")");
        $(".bg-three").css("background-position","center");
        $(".bg-three").css("background-repeat","no-repeat");

    });