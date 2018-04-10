//used for the disappearing banner pic.
$( window ).scroll(function() {
     if($(window).innerHeight() > 700){
       $('#homehead').animate({'width': '0'}); 
     }else{
         $('homehead').animate({'width': '100'}); 
     }
});

//
$(function () {
   $('#modal').modal('toggle');
});

 $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).effect( selectedEffect, options, 500, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
      return false;
    });
  } );

//used for date function
$(document).ready(function(){
  var date=new Date();
  $("#btn1").click(function(){
    var val=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    $("#printDate").text(val);
  });
  $("#btn2").click(function(){
    var val=(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
    $("#printDate").text(val);
  });
  $("#btn3").click(function(){
    var months=["JAN","FEB","MAR","APR","MAY","JUN","JUL",
    "AUG","SEP","OCT","NOV","DEC"];
    var val=date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear();
    $("#printDate").text(val);
  });       
});
    //used to fade in style paragraph in the about
    $(document).ready(function(){
    $(".btn1").click(function(){
        $("#Legacy").fadeOut()
    });
    $(".btn2").click(function(){
        $("#Legacy").fadeIn();
    });
    });

function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    } 
} 

$(function() {
  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

       $(document).ready(function() {
         $(":checkbox").click(function(event) {
           if ($(this).is(":checked"))
           $("#Style").show();
         else
           $("#Style").hide();
           });
           });

