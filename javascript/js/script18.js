var inp = document.getElementsByTagName("input");
var btn = document.getElementsByTagName("button")[0];
var span = document.getElementsByTagName("span")[0];
var a = 0;
for (var i = 0; i < inp.length; i++) {
    inp[i].onkeyup = function () {
        this.value = this.value.replace(/[^\d]/, "")
        if (this.value * 1 > a) {
            a = this.value;
        }
    }

}
btn.onclick = function () {
    span.innerText = a;
}