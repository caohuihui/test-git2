var btn = document.getElementsByTagName("button")[0];
var txt = 0;
btn.onclick = function () {
    txt++;
    alert(txt)
    this.innerText = txt
}
