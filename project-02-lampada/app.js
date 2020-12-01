var element = document.getElementById('myimage');

element.onclick = function() {
    if (element.src.match("off")) {
        element.src="lampada-on.gif";
    } else {
        element.src="lampada-off.gif";
    }
};
