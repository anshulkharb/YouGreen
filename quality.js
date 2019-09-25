chrome.runtime.onMessage.addListener( function(request, sender) {
    console.log(request.defaultQuality)
    localStorage['qt'] = request.defaultQuality
})