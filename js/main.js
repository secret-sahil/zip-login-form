$(document).ready(function(){
    $('#zipcode').keyup(function() {
        var zip = $(this).val();
        // to check if zip is empty 😅
        if (zip == ''){
            $('#zipcode_status').text("Zipcode required!")
            $('#zipcode_status').addClass('text-danger')
        }
        // to check if zip is < 6️⃣ or zip is > 6️⃣
        else if ((zip.length)< 6 || (zip.length)>6 ){
            $('#zipcode_status').text("zipcode should only be 6 digits")
            $('#zipcode_status').addClass('text-danger')
        }
        else{
            $('#zipcode_status').text("");
        }
    })
    // pasword toogle 🔑
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