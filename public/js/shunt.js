MOVEMENT_TIME = 1000;

function isDigit(aChar) {
    charCode = aChar.charCodeAt(0);
    if ((charCode > 47) && (charCode < 58)) { return true; }
    return false;
}

function isAlpha(aChar) {
    charCode = aChar.charCodeAt(0);
    if (((charCode > 64) && (charCode < 91)) || ((charCode > 96 && charCode < 123))) { return true; }
    return false;
}

function Operator(symbol, precedence, associativity, numArgs, separator) {
    this.symbol = symbol;
    this.precedence = precedence;
    this.associativity = associativity || "left";
    this.numArgs = numArgs || 2;
    this.separator = separator || ",";
}

function Sprite(text) {
    var rawHTML = "<div class='token'>" + text + "</div>";
    $(".staging-area").append(rawHTML);
    this.DOMelement = $(".staging-area .token:last-child");
}

Sprite.prototype = {
    placeAt: function(x,y) { this.DOMelement.css({top: y, left: x}); },
    moveTo: function(x,y) { this.DOMelement.css({top: y, left: x}); }
}

function Queue() = {
    this.array = [];
}

Queue.prototype = {
    shift: function() { return this.array.shift(); },
    push: function(x) { return this.array.push(x); }
}

function Stack() = {
    this.array = [];
}

Stack.prototype = {
    pop: function() { return this.array.pop(); },
    push: function(x) { return this.array.push(x); }
}

function Yard(input) {
    this.inputQueue = new Queue();
    this.outputQueue = new Queue();
    this.opStack = new Stack();
    createInputQueue(input);
}

Yard.prototype = {
    createInputQueue: function(input) {},
    animate: function() {},

    inputToStage: function() {},
    stageToOutput: function() {},
    stageToOps: function() {},
    opsToOutput: function() {},
    stageToTrash: function() {},
    opToTrash: function() {}
}

$(document).ready( function() {

    $('.inputs button').on("click", function() {
        $('.staging-area').empty();
        var input = $(this).parent().find('input').val();
        var yard = Yard(input);
    });

});
