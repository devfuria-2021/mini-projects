var button = document.getElementById('my-button');
var mybody = document.getElementById('my-body');

// element.style.backgroundColor = "black";
//document.body.style.backgroundColor = "black";
// console.log(element);

button.onclick = function() {
    if (mybody.style.backgroundColor.match("black")) {
        mybody.style.backgroundColor="white";
    } else {
        mybody.style.backgroundColor="black";
    }
};
