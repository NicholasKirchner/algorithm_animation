var horizSpace = 75;
var vertSpace = 50;

function createToken(token) {
    return "<div class='token'>" + token + "</div>";
}

function placeToken(token, xcoord, ycoord) {
    $(".staging-area").append(createToken(token));
    $(".staging-area .token:last-child").css({top: ycoord, left: xcoord});
    return $(".staging-area .token:last-child");
}

function generateLine(dividend, divisor, line_num) {
    var ycoord = line_num * vertSpace;
    var quotient = Math.floor(dividend/divisor);
    var remain = dividend % divisor;
    var moveables = new Array();
    placeToken(dividend, horizSpace * 0, ycoord);
    placeToken("=",      horizSpace * 1, ycoord);
    placeToken(divisor,  horizSpace * 2, ycoord);
    placeToken("*",      horizSpace * 3, ycoord);
    placeToken(quotient, horizSpace * 4, ycoord);
    placeToken("+",      horizSpace * 5, ycoord);
    placeToken(remain,   horizSpace * 6, ycoord);
    moveables[0] = placeToken(divisor,  horizSpace * 2, ycoord);
    moveables[1] = placeToken(remain,   horizSpace * 6, ycoord);
    return moveables;
}

function generateQandR(dividend, divisor, line_num) {
    var ycoord = line_num * vertSpace;
    var quotient = Math.floor(dividend/divisor);
    var remain = dividend % divisor;
    var qToken = placeToken("Quotient: " + quotient, horizSpace * 7, ycoord);
    var rToken = placeToken("Remainder: " + remain, horizSpace * 7, ycoord + vertSpace/2);
    setTimeout(function() {
        qToken.remove();
        rToken.remove();
    }, 2000);
}

var animateLineWith = function(a,b,loops) {
    generateQandR(a,b,loops);
    var sprites = generateLine(a,b,loops);
    var t = b;
    b = a % t;
    a = t;
    loops = loops + 1;
    if ( b != 0) {
        sprites[0].animate({left: 0, top: "+=50"}, 2500);
        sprites[1].animate({left: 150, top: "+=50"}, 2500);
        setTimeout(function() { 
            sprites[0].remove();
            sprites[1].remove();
            animateLineWith(a,b,loops); 
        }, 2500);
    } else {
        sprites[1].remove();
        finishAnimation(sprites[0]);
    }
}

function finishAnimation(answer) {
    answer.animate( {top: "+=50", left: 0, opacity: 0.4, fontSize: "3em" }, 2500);
    setTimeout(function() {
        answer.text(answer.text() + " is the GCD.");
    }, 2500);
}

$(document).ready( function() {

    $('.inputs button').on("click", function() {
        $('.staging-area').empty()
        var inputs = $(this).parent().find('input');
        numbers = $.map(inputs, (function(a) { return Number($(a).val()); }));
        animateLineWith(numbers[0], numbers[1], 0);
    });

});
