$(document).ready(function() {
    $('#submit').on('click', function() {
        var title = $('.title input').val(),
            description = $('.description input').val(),
            email = $('.email input').val(),
            datetime = $('.datetime input').val();
            console.log("here");

        $.ajax({
            url: 'http://localhost:3002/reminder',
            type: 'POST',
            data: {
                'title': title,
                'description': description,
                'email': email,
                'datetime': datetime
            },
            success: function(data) {
                console.log("Success");
            },
            error: function (data) {
                console.log(data);
            }
        });
    });
});
