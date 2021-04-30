$('.btn').click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/api/posts",
        data: { 
             userId : window.currentUser.id,
             title : $('.form-group #exampleFormControlTextarea2').val(),
             body : $('.form-group #exampleFormControlTextarea1').val(),
        },
        success: function(result) {
            alert('ok');
        },
        error: function(result) {
            alert('error');
            console.error(error)
        }
    });
});