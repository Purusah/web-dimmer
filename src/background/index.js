"use strict";

const userAgentHeader = "user-agent";
const userAgentValue = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    + "(KHTML, like Gecko) Chrome/99.0.4844 Safari/537.36";

/**
 * @param {browser.webRequest._OnBeforeSendHeadersDetails} details
 */
function listener(details) {
    if (details.requestHeaders === undefined) {
        return details;
    }

    for (const header of details.requestHeaders) {
        if (header.name.toLowerCase() === userAgentHeader) {
            header.value = userAgentValue;
        }
    }

    return {
        requestHeaders: details.requestHeaders,
    };
}

browser.webRequest.onBeforeSendHeaders.addListener(
    listener,
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"],
);
