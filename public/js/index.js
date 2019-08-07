
$(document).ready(function(){
    let starRating;
    
    $(".star").on("click",function(){
        
      if(parseInt(this.value) === 1){
          starRating = "bstar1.jpg";
      }else if(parseInt(this.value) === 2){
          starRating = "bstar2.jpg";
      }else if(parseInt(this.value) === 3){
        starRating = "bstar3.jpg";
    }else if(parseInt(this.value) === 4){
        starRating = "bstar4.jpg";
    }else if(parseInt(this.value) === 5){
        starRating = "bstar5.jpg";
    }
    });




    $("#submit").on("click",function(){
        const comment = {
            firstname: $("#name").val(),
            lastInitial: $("#mySelect1").val(),
            email: $("#email").val(),
            starRating,
            message:  $("#message").val(),
        };


       $.ajax({
           method: "POST",
           url: "/reviewride",
           data: {
               comment,
           }

       }).done(function(data){
console.log(data);
       });
    });
});


