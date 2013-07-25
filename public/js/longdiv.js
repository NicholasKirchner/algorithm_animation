function Digit(digit,xcoord,ycoord) {
    this.digit = digit;
    this.xcoord = xcoord;
    this.ycoord = ycoord;
}

$(document).ready( function() {
    $('.inputs button').on("click", function() {
        $('.staging-area').empty()
        var inputs = $(this).parent().find('input');
        numbers = $.map(inputs, (function(a) { return Number($(a).val()); }));
        animateLineWith(numbers[0], numbers[1], 0);
    });
});
