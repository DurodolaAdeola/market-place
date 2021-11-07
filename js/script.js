$(document).ready(function(){
    $("#fish").click(function(){
        window.location.href="form.html"
    });
    $("#food").click(function(){
        window.location.href="form.html"
    });
    $("#rice").click(function(){
        window.location.href="form.html"
    });
    $("#chic").click(function(){
        window.location.href="form.html"
    });
    $("#meat").click(function(){
        window.location.href="form.html"
    });
    $("#egg").click(function(){
        window.location.href="form.html"
    });
    $("#beans").click(function(){
        window.location.href="form.html"
    });
    $("#yam").click(function(){
        window.location.href="form.html"
    });
        $("#btn").click(function(){
        window.location.href="index.html"
    });
  


})
$(document).ready(function(){
    ("form#form").submit(function(event){
        
        let car =($("#car").val());
        let firstName =($("#firstname").val());
        let lastName =($("#lastname").val());
        let middleName =($("#middlename").val());
        event.preventDefault();
        
    
    
    $("#output").text(`${firstName} ${lastName} ${middleName} ${car}`);

    })
     

})