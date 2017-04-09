var box = document.getElementsByClassName("box16")[0];
var ul = document.getElementsByTagName("ul")[0];
var lis = ul.getElementsByTagName("li");
var num = document.getElementsByClassName("num")[0];
var span = num.getElementsByTagName("span");
var timer = null;
var i = 0;

function auto() {
    timer = setInterval(function () {

        if (i < lis.length - 1) {
            i++;
        } else {
            i = 0;
        }
        className(i)
    }, 2000)
}
auto();

function className(i) {
    for (var j = 0; j < lis.length; j++) {
        lis[j].className = "";
        span[j].className = "";

    }
    lis[i].className = "on";
    span[i].className = "bg";

}
box.onmouseover = function () {
    clearInterval(timer);
}
box.onmouseout = function () {
    auto();
}
for (var j = 0; j < span.length; j++) {
    span[j].index = j;
    span[j].onmouseover = function () {
        i = this.index
        className(i)
    }


}