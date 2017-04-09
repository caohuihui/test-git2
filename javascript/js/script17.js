var inp = document.getElementsByTagName("input");
var btn = document.getElementsByTagName("button")[0];
var span = document.getElementsByTagName("span")[0];
for (var i = 0; i < inp.length; i++) {
    inp[i].onkeyup = function () {
        this.value = this.value.replace(/[^\d]/, "")
    }
}
btn.onclick = function () {
    span.innerText = inp[0].value * 1 + inp[1].value * 1
}