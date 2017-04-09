var box = document.getElementsByClassName("box")[0];
var btn = document.getElementsByTagName("button");
btn[0].onclick = function () {
    alert(getComputedStyle(box, null).width)
}
btn[1].onclick = function () {
    box.style.width = 600 + 'px'
}
btn[2].onclick = function () {
    box.style.width = 490 + "px"
}