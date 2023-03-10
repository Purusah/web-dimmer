"use strict";

/**
 * @param {browser.tabs.Tab} tab
 * @param {browser.action.OnClickData | undefined} _data
 */
async function onActionButton(tab, _data) {
    if (tab.url !== undefined) {
        await browser.tabs.sendMessage(tab.id ?? 0, "skip_video");
    }
}

browser.browserAction.onClicked.addListener(onActionButton);
