var inp = document.getElementsByTagName("input")[0];
var btn = document.getElementsByTagName("button")[0];
inp.onkeyup = function () {
    this.value = this.value.replace(/[^\d]/, "")
}
btn.onclick = function () {
    console.log(inp.value.length)
    if (inp.value.length == 2) {
        alert("✔是两位数")
    } else {
        alert("这是" + inp.value.length + "位数")
    }
}