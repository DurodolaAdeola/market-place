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
        let phone = $("#Phonenumber").val();
        let email =$("#Email").val();
        event.preventDefault();
        $("#Table").toggle();
$(".m").text(`${firstName} ${lastName}`);
$(".t").text(email);
$(".e").text(cars);
$(".s").text(phone);
$(".d").text(pay);
$(".b").text(gen);
    
    
    
   // $("#output").text(`${firstName} ${lastName} ${middleName} ${cars} ${gen} ${pay} ${phone}`);

    })
     

}) 