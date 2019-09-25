chrome.runtime.onMessage.addListener( function(request, sender) {
    var now = new Date().getTime();
    var saved_q = {
        data: request.defaultQuality,
        creation: now,
        expiration: now + 2592000000 // one month
    };
    
    console.log(request.defaultQuality)
    localStorage['yt-player-quality'] = JSON.stringify(saved_q);
})