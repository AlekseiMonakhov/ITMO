function setStyle(fontColor, fontSize) {
    let nodes = document.getElementsByClassName('listNumbers')[0].childNodes;
    nodes.forEach(item => {
        if (item.nodeType == 1) {
            item.style.color = fontColor;
            item.style.fontSize = fontSize;      
        }
    });
}