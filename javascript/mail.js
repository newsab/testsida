function sendMail() {
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);

    if (isIE) {

        var name = $("#name").value;
        var lastName = $("#lastName").value;
        var mail = $("#mail").value;
        var message = $("#message").value;
        var checkbox = $('input[type=checkbox]').prop('checked');

        if (!$('#lastName').val() && checkbox == true && $('#name').val() && $('#mail').val() && $('#message').val()) {
            document.mailForm.submit();
            showModal('kontaktModal');
            $("#formMail").trigger('reset');
        }

        else if (!$('#name').val()) {
            alert('Du måste skriva in ett namn')
        }

        else if (!$('#mail').val()) {
            alert('Du måste skriva in en mailadress')
        }

        else if (!$('#message').val()) {
            alert('Du måste skriva in ett meddelande')
        }

        else if (checkbox == false) {
            alert('Du måste godkänna integritetspolicyn')
        }

        else {
            alert('Se över dina uppgifter')
        }
    }
    else {
        var isValid = document.querySelector('form').reportValidity();
        if (!$('#lastName').val()) {

            if (!isValid) {
                return false;
            }

            var formData = new FormData($('#formMail')[0]);

        };
        $.ajax({
            type: "POST",
            url: "mail/mail.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function () {
            },

        });

        showModal('kontaktModal');
        $("#formMail").trigger('reset');
        return false;
    }
}

function showModal(Modal) {
    var modal = document.getElementById(Modal);
    modal.style.display = "block";
}