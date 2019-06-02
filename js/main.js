/*jslint browser: true*/
/*global console*/

function fullHeight(leftColumn, rightColumn, html) {
    "use strict";

    return function () {
        if (html.offsetHeight > rightColumn.scrollHeight) {
            leftColumn.style.height = 100 + "%";
        } else {
            leftColumn.style.height = rightColumn.scrollHeight + "px";
        }
    };
}

window.onload = function () {
    "use strict";

    var leftColumn = document.getElementById("leftColumn"),
        rightColumn = document.getElementById("rightColumn"),
        html = document.getElementsByTagName("html");

    fullHeight(leftColumn, rightColumn, html[0])();
    window.addEventListener("resize", fullHeight(leftColumn, rightColumn, html[0]));
};
