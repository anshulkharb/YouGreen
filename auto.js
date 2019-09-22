var now = new Date().getTime();
var saved_q = {
    data: "auto",
    creation: now,
    expiration: now + 2592000000 // one month
};


localStorage['yt-player-quality'] = JSON.stringify(saved_q);