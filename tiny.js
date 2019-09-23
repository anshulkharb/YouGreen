
var now = new Date().getTime();
var saved_q = {
    data: "tiny",
    creation: now,
    expiration: now + 2592000000 // one month
};


localStorage['yt-player-quality'] = JSON.stringify(saved_q);




chrome.runtime.onMessage.addListener( function(request, sender) {
    var x = document.getElementById("date")
    var dateText = x.innerText.slice(1, 27)
    x.innerText = " • " + dateText + " • Congrats, you've saved upto "+ request.CO2_saved +"kg of C02 • "
    var helpLink = document.createElement('a');
    helpLink.setAttribute('href',"https://anshulkharb.com/side_projects/yougreen");
    helpLink.setAttribute('target',"_blank");
    helpLink.setAttribute('style',"color: white");
    helpLink.innerText = "Help it spread ";
    x.appendChild(helpLink);
    x.setAttribute("style", "font-size: x-small")
})
