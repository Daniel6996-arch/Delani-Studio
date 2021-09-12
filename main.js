var imageUrl = "assets/backgrounds/first.jpg";
var imageUrlOne = "assets/backgrounds/second.jpg";
var imageUrlTwo = "assets/backgrounds/third.jpg";

$(document).ready(function(){
        $(".bg-one").css("background-image","url("+ imageUrl +")");
        $(".bg-one").css("background-position","center");
        $(".bg-two").css("background-image","url("+ imageUrlOne +")");
        $(".bg-two").css("background-position","center");
        $(".bg-two").css("background-repeat","no-repeat");
        $(".bg-three").css("background-image","url("+ imageUrlTwo +")");
        $(".bg-three").css("background-position","center");
        $(".bg-three").css("background-repeat","no-repeat");
        $(".soci").css("display", "none");
        $(".show"). click(function(){
                $(".hide").toggle();
                $(".show").hide();
        });
        $(".showOne"). click(function(){
                $(".hideOne").toggle();
                $(".showOne").hide();
        });
        $(".showTwo"). click(function(){
                $(".hideTwo").toggle();
                $(".showTwo").hide();
        });
        $(".hide"). click(function(){
                $(".show").toggle();
                $(".hide").hide();
        });
        $(".hideOne"). click(function(){
                $(".showOne").toggle();
                $(".hideOne").hide();
        });
        $(".hideTwo"). click(function(){
                $(".showTwo").toggle();
                $(".hideTwo").hide();
        });
        $("form#add").submit(function(event) {
                event.preventDefault();
                var name = $("#name").val();
                var email = $("#email").val();
                var text = $("#textarea").val();
                var output = [];
                var backs = 0
                var outputs = output.concat(name, email, text);
                //$(".output").text(outputs);
                //console.log(outputs)
                for (var index=0; index <= outputs.length -1; index += 1){
                             console.log(outputs[index])
                            // $(".output").text(outputs[index]);
                    };
                   // console.log(outputs[index])
        });
});

