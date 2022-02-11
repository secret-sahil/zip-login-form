$(document).ready(function(){
    $('#zipcode').keyup(function() {
        var zip = $(this).val();
        if (zip == ''){
            $('#zipcode_status').text("Zipcode required!")
            $('#zipcode_status').addClass('text-danger')
        }
        else if ((zip.length)< 6 || (zip.length)>6 ){
            $('#zipcode_status').text("zipcode should only be 6 digits")
            $('#zipcode_status').addClass('text-danger')
        }
        else{
            $('#zipcode_status').text("");
        }
    })

    $('#togglePassword').click(function(){
        $(this).toggleClass("fa-eye fa-eye-slash")
        var password = $("#pass").attr("type")
        if (password === "password") {
            $("#pass").attr("type", "text")
        } else {
            $("#pass").attr("type", "password")
        }
    })
})