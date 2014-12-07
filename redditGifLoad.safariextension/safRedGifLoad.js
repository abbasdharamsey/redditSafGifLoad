function findGifs() {
    var titles = document.getElementById('siteTable').getElementsByClassName('thumbnail may-blank');
    for(i = 0; i < titles.length; i++) {
        if(titles[i].attributes.href.nodeValue.substr(titles[i].attributes.href.nodeValue.length-4) == '.gif') {
            img = new Image();
            img.src = titles[i].attributes.href.nodeValue;
        }
        
    }

}

var NERCount = 0;
function checkNER() {
    var ner = getElementsByClassName('NERPageMarker').length;
    while(ner > NERCount) {
        NERCount++;
        findGifs();
    }
}

window.addEventListener('load', findGifs());
window.setInterval(checkNER, 500);