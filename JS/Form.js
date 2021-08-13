$(function(){

    //send form contact

    $("#index-form").ajaxForm({
        'success': function(){
            $(".blue-vivacity").fadeIn();
            $(".modal-check").fadeIn();
        }
    });

    $(".close-modal").click(function(){
        $(".blue-vivacity").fadeOut();
        $(".modal-check").fadeOut();
        $("#index-form input:not([type='submit'])").val("");
        $("textarea").val("");
    })
});