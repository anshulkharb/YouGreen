let page = document.getElementById('buttonDiv');
const kButton = ['2160p:hd2160', '1440p:hd1440', '1080p:hd1080', '720p:hd720', '480p:large', '360p:medium', '240p:small', '144p:tiny'];
function constructOptions(kButton) {
    for (let item of kButton) {
        let button = document.createElement('button');
        res = item.split(":");
        button.innerText = res[0]
        chrome.storage.sync.get('defaultQuality', function(result) {
            res = result.defaultQuality.split(":")
            document.getElementById("current").innerText = res[0]
        })
        button.addEventListener('click', function () {
            chrome.storage.sync.set({ defaultQuality: item }, function () {
                res = item.split(":")
                document.getElementById("current").innerText = res[0]
            })

        });
        page.appendChild(button);
    }
}
constructOptions(kButton);