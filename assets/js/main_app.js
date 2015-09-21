////////////////////////////////////////////////////////////////
// Description:JavaScript File for Jimmy's Personal Website.  //
////////////////////////////////////////////////////////////////
// Created                     // Last Edited                 //
// By: Jimmy Grzybek           // By: Jimmy Grzybek           //
// On: Sept VI, MMXV 23:57     // On: Sept XIV, MMXV 03:21    //
////////////////////////////////////////////////////////////////

// Hides everything before page finishes loading, then fades in
// text.

// Hide content before page loads. 
$(".contact_form").hide();
$(".main_text").hide();
$("#contact").hide();


// Loads content when page is ready.
$(document).ready(function(){
    setTimeout( function(){
        $(".main_text").fadeIn(3000);
        $("#contact").fadeIn(4500);
    } , 1000);
});


// Changes button color upon mouse entering. 
$(".button_contact").mouseenter(function(){
    $(this).addClass("active");
    $(this).fadeIn(2000);
});

// Changes button color upon mouse leaving. 
$(".button_contact").mouseleave(function(){
    $(this).removeClass("active");
    $(this).fadeIn(2000);

});

// Hides main text and loads contact form. 
$(".button_form").click(function(){
    $(".main_text").hide();
    $("#contact").hide();
    setTimeout( function(){
        $(".contact_form").fadeIn(1000);
    } , 100);    
});

// Hides contact form and loads main text.
$(".button_go_back").click(function(){ 
    $(".contact_form").hide();
    $("#contact").fadeIn(1000);
    $(".main_text").fadeIn(1000);
});


// AJAX form submission. Sends data to PHP script where data is inserted into a MySQL database.
$("#get_in_touch").submit(function() {
    var url = "assets/php/data_collection.php";
    var form_container = document.getElementById("get_in_touch");
    var textbox = document.getElementById("title_form");
    var name_content = document.forms["form_contact"]["name"].value;
    if (name_content == null || name_content == "") {
        textbox.innerHTML = "Please enter your name.";
    }
    else{
    $.ajax({
           type: "POST",
           url: url,
           data: $("#get_in_touch").serialize(), 
           success: function(data)
           {


                $(".title_form").hide();
                $('#get_in_touch').hide();
                if (data == "ERROR205") {
                    textbox.innerHTML = "Sorry, there appears to be some technical difficulties. Please email jimmy.grzybek@gmail.com or try again later.";
                }
                else{
                    textbox.innerHTML = "Thanks, " + data +". I look forward to connecting with you.";
                }
                $('.title_form').fadeIn(1500);
                setTimeout( function(){
                    $(".title_form").show();
                    $('#get_in_touch').show(); 
                    $(".contact_form").hide();
                    $("#contact").fadeIn(1000);
                    $(".main_text").fadeIn(1000);
                    textbox.innerHTML = "Let's keep in touch.";
                    $(".title_form").show();
                } , 4000);
                document.getElementById("get_in_touch").reset();
           }
         });
    
    }
    return false;
});

// Bonus to those checking out my page source :)
console.log("Thanks for checking out my page source. Let's get in touch.");
