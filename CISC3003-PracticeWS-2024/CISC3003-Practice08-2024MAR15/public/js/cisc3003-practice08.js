/**
 * 
 * @param {*} targetFieldNames A list of names of a fields to be toggled.
 * @param {*} isError Specifies the target state of the fields, error or not.
 * @returns Whether there are any required fields that's been incompleted.
 */
function toggleFieldsErrorUI(targetFieldNames, isError) {
    var haveIncompleteFields = false;       // Whether exists any incompletes.

    targetFieldNames.forEach(function (fieldName) {
        let field = document.getElementById(fieldName);
        if (!field.value && isError) {

            // Toggle Error
            field.classList.add("error");
            haveIncompleteFields = true;
        } else {
            field.classList.remove("error");
        }
    });

    return haveIncompleteFields;
}

// Required Fields.
let requiredFieldNames = ['title', 'description', 'medium', 'museum', 'year'];

// Form
document.querySelector('form').addEventListener('submit', function (event) {
    // Toggle the UI.
    var haveIncompleteFields = toggleFieldsErrorUI(requiredFieldNames, true);

    // If there are any incompletes, don't submit.
    if (haveIncompleteFields) {
        event.preventDefault();
    }
})

// On click field: Recover corresponding field UI.
document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('focus', function (event) {
        input.classList.remove("error");
    });
});

// Clear form: Recover all field UIs.
document.querySelector('form').addEventListener('reset', function (event) {
    toggleFieldsErrorUI(requiredFieldNames, false);
});

