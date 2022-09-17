"use strict";

(() => {
    function skipVideo() {
        document.getElementsByTagName("video")[0].currentTime = (
            document.getElementsByTagName("video")[0].duration
        );
    }

    browser.runtime.onMessage.addListener((message) => {
        if (message === "skip_video") {
            skipVideo();
        }
    });
})();
