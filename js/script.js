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
    $(".Form").submit(function(event){
        
        const cars =$("#car").val();
        console.log(cars)
        let firstName =$("#firstname").val();
        let lastName =$("#Lastname").val();
        let middleName =$("#middlename").val();
        const gen =$("input:radio[name= Gender]:checked").val();
        const pay =$("input:radio[name=payment]:checked").val();
        let phone = $("#phonenumber").val();
        event.preventDefault();
        
    
    
    $("#output").text(`${firstName} ${lastName} ${middleName} ${cars} ${gen} ${pay} ${phone}`);

    })
     

}) 