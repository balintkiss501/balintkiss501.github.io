function countDownFor404Page(elementId, textToChangeTo, initialTimeoutInSeconds) {
    "use strict";
    window.addEventListener('load', function () {
        var millisecond = 1000;
        var remainingSeconds = initialTimeoutInSeconds;

        function changeText(inputText) {
            document.getElementById(elementId).textContent = inputText;
        }

        function countDownCallback() {
            remainingSeconds -= 1;
            if (0 < remainingSeconds) {
                changeText(remainingSeconds);
            } else {
                changeText(textToChangeTo);
            }
        }

        setInterval(function () {
            countDownCallback();
        }, millisecond);

        changeText(remainingSeconds);
    });
}
