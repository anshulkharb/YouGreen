chrome.tabs.onActivated.addListener(function () {
    chrome.tabs.query({ url: "*://www.youtube.com/*" }, function (tabs) {
        for (var key in tabs) {
            tab = tabs[key]
            tabId = tab.id

            chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
                tabURL = tab.url
                if ( changeInfo.url ) {
                    if ( tabURL.includes('watch') ) {
                        if ( tab.active === true ) {
                            chrome.tabs.executeScript(tabId, { file: 'auto.js' });
                        } else {
                            chrome.tabs.executeScript(tabId, { file: 'tiny.js' });
                            chrome.storage.sync.get({ 'videosParsed': 0 }, function (result) {
                                t = result.videosParsed
                                t += 1
                                chrome.storage.sync.set({ 'videosParsed': t })
                                chrome.tabs.sendMessage(tabId, { 'videosParsed': t });
                            });
    
                        }
                    } else {
                        chrome.tabs.executeScript(tabId, { file: 'auto.js' });
                    }
                }
            })
        }

    })
});

