var p = document.getElementsByTagName("p")[0];
var ols = document.getElementsByTagName("ol")[0];
var flag = false;
p.onclick = function () {
    flag = !flag;
    ols.style.display = flag ? "block" : "none";
    this.className = flag ? "up" : "";
}