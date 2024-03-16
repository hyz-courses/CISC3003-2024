$(document).ready(function () {
    // Required Fields.
    let requiredFieldNames = ['title', 'description', 'medium', 'museum', 'year'];

    // On submit, check required fields.
    $('form').on('submit', function (event) {
        // Check each required input.
        requiredFieldNames.forEach(function (fieldName) {
            let field = $('#' + fieldName);
            if (!field.val()) {
                field.css('background', '#FFCDD2');
                event.preventDefault();
            } else {
                field.css('background', 'white');
            }
        });
    });

    // Input field color is recovered when user clicks it.
    $('input').on('focus', function (event) {
        // Don't change button's color.
        if ($(this).attr('class') == 'btn') {
            return;
        }
        event.preventDefault();

        // Changes field color to default.
        $(this).css('background', '');

    })



});
