var box = document.getElementsByClassName("box")[0];
var inp = document.getElementsByTagName("input");
for (var i = 0; i < inp.length; i++) {
    inp[i].onfocus = function () {
        this.style.background = "#0f0"
    }
    inp[i].onblur = function () {
        this.style.background = ""
    }
}