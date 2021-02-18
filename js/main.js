$(document).ready(function() {

    $("#loading").fadeOut(1500);

    let aside = $("aside");
    let main = $("main");
    let sidePos = $("aside").css("right");
    $("#big-bar").click(function() {
        if (sidePos == "0px") {
            $("main").animate({ width: "100%" }, 700);
            $("aside").animate({
                right: "-25%"

            }, 700);
            sidePos = '-100px';
        } else {
            $("main").animate({ width: "78%" }, 700);
            $("aside").animate({
                right: "0%"
            }, 700);
            sidePos = '0px';

        }

    });
    $("#small-bar").click(function() {
        if (sidePos == "0px") {
            $("aside").animate({
                right: "-80%"

            }, 700);
            sidePos = '-100px';
        } else {
            $("aside").animate({
                right: "0%"
            }, 700);
            sidePos = '0px';

        }

    });

    $("#close").click(function() {
        $("aside").animate({
            right: "-80%"
        }, 700);
        sidePos = '-100px';


    });
    $('.from-Session').change(function(e) {
        let val = $('.from-Session').val();
        if (val == 'allSession') {
            $('.to').hide();
        } else {
            $('.to-Session option').prop('disabled', false);
            $('.to').show();
            $('.to-Session option').each(function() {
                if (val >= $(this).attr('value')) {
                    $(this).prop('disabled', true);
                }
            });
        }
    });


});