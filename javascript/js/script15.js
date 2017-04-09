var box = document.getElementsByClassName("box20")[0];
var p = document.getElementsByTagName("p");
var div = box.getElementsByTagName("div");
var btn = box.getElementsByTagName("button");
var arr = [];
var flag1 = true;
var flag2 = true;
btn[0].onclick = function () {
    if (flag1) {
        arr = p[0].innerText.split(",")
        arr.shift()
        p[0].innerText = arr.join(",")
        flag1 = !flag1;
        this.innerText = "添加第一项"
    } else {
        arr = p[0].innerText.split(",")
        arr.unshift("January(1)")
        p[0].innerText = arr.join(",")
        flag1 = !flag1;
        this.innerText = "删除第一项"
    }
}
btn[1].onclick = function () {
    if (flag2) {
        arr = p[0].innerText.split(",")
        arr.pop()
        p[0].innerText = arr.join(",")
        flag2 = !flag2;
        this.innerText = "添加最后一项"
    } else {
        arr = p[0].innerText.split(",")
        arr.push("December(12)")
        p[0].innerText = arr.join(",")
        flag2 = !flag2;
        this.innerText = "删除最后一项"
    }
}
btn[2].onclick = function () {
    p[1].innerText += "," + p[1].innerText
}
btn[3].onclick = function () {
    p[1].innerText = p[1].innerText.substring(0, 19)
}
btn[4].onclick = function () {
    p[2].innerText = "red,green,blue,white,yellow,black,brown";
}
btn[5].onclick = function () {
    arr = p[2].innerText.split(",")
    arr.splice(0, 3)
    p[2].innerText = arr.join(",")
}
btn[6].onclick = function () {
    arr = p[2].innerText.split(",")
    arr.splice(1, 2)
    p[2].innerText = arr.join(",")
}
btn[7].onclick = function () {
    arr = p[2].innerText.split(",")
    arr.splice(2, 0, "orange", "purple")
    p[2].innerText = arr.join(",")
}
btn[8].onclick = function () {
    arr = p[2].innerText.split(",")
    arr.splice(1, 2, "替换1", "替换2")
    p[2].innerText = arr.join(",")
}