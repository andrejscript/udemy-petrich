$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault(); 
        var form = $(this);
        var error = false;
        form.find('input').each(function() {
            if ($(this).val() == '') {
                alert('Зaпoлнитe пoлe "' + $(this).attr('placeholder') + '"!');
                error = true;
            }
        });
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: data,
                beforeSend: function(data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function() {
                    form.find('input[type="submit"]').prop('disabled', false);
                    $('.js-close').click();
                    $('#success-overlay').css({
                        'display': 'flex'
                    }); // открыть
                    setTimeout(() => {
                        $('#success-overlay').fadeOut(1000);
                    }, 4500);
                    $(form)[0].reset();
                },
                error: function() {
                    alert('Ошибка!');
                },
            });
        }
        return false;
    });
    $('.overlay-success js-close').click(() => {
        $('#success-overlay').fadeOut(800);
    });

    $('.success-block__close').click(function() {
        $('.overlay-success').fadeOut(300);
        $('header, footer, .advantage, h1, h2, h3, .services__blocl-hr, #prev, #next, .data__two-buttons, .hidde, .no-human, img, p, .services__flag, .main-screen, main-screen__butt js-button, services__button js-button').css('filter','none');
    });
});
