function log(s) {    
    console.log("[bn] - " + s)
}

function init() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let title = tabs[0].title
    let url = tabs[0].url
    log("title: " + title)
    log("url: " + url)
    document.getElementById("title").innerHTML = title
    document.getElementById("url").innerHTML = url
    // use `url` here inside the callback because it's asynchronous!
});
}

init()
