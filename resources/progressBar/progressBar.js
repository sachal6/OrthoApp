//step is 0-indexed
function progressToStep(step) {
    var boxes = $(".progressBox");
    var labels = $(".progressLabel");
    //✓

    for (var i = 0; i < boxes.length && i < step; i++) {
        var curBox = boxes.eq(i);
        $(curBox).css("background-color", "#1de9b6");
    }
    if (step < boxes.length) {
        $(boxes.eq(step).css("background-color", "#00bfa5"));
    } else {
        $(boxes.eq(boxes.length - 1).css("background-color", "#00bfa5"));
    }
    for (i = 0; i < labels.length && i < step; i++) {
        var curLabel = labels.eq(i);
        var curLabelText = $(curLabel).children("p");
        //curLabelText.text(curLabelText.text());
        $(curLabelText).css("color", "#1de9b6");
    }
    //
    if (step < boxes.length) {
        $(labels.eq(step).children("p").css("color", "#00bfa5"));
    } else {
        $(labels.eq(length - 1).children("p").css("color", "#00bfa5"));
    }

}
