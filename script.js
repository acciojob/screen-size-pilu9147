//your JS code here. If required.
let ans = document.getElementById("sizeInfo");
ans.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
document.body.append(ans);


window.onresize = function() {
	ans.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}