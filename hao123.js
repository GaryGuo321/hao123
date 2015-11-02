////////保存数组和更改样式

function changeColor() {
	var button = document.getElementsByTagName("button");
	var contentNav = document.getElementById("ct-nav-border");
	for (var i = 0; i < button.length; i++) {
		button[i] = ppp(i);
		function ppp(num) {
			function clickButton() {
				alert(num);
				var wordColor = document.getElementsByClassName("mf-b-green");
				var values = button[num].getAttribute("value");
				if (values == "green") {
					contentNav.className = "content-nav content-nav-green";
					localStorage.setItem("border", contentNav.getAttribute("class"));
					var colorGreen = "#34a637";
					for (var j = 0; j < wordColor.length; j++) {
						wordColor[j].style.color = "#34a637";
					}
					localStorage.setItem("wc", colorGreen);
					j = 0;
				}
				if (values == "blue") {
					contentNav.className = "content-nav content-nav-blue";
					localStorage.setItem("border", contentNav.getAttribute("class"));
					var colorBlue = "#5ca8dd";
					for (var k = 0; k < wordColor.length; k++) {
						wordColor[k].style.color = "#5ca8dd";
					}
					localStorage.setItem("wc", colorBlue);
					k = 0;
				}
				if (values == "yellow") {
					contentNav.className = "content-nav content-nav-yellow";
					localStorage.setItem("border", contentNav.getAttribute("class"));
					var colorYellow = "#ffda00";
					for (var t = 0; t < wordColor.length; t++) {
						wordColor[t].style.color = "#ffda00";
					}
					localStorage.setItem("wc", colorYellow);
					k = 0;
				}
			}
			//////////绑定事件
			if (button[num].addEventListener) {
				button[num].addEventListener("click", clickButton, false);
			} else if (button[num].attachEvent) {
				button[num].attachEvent("click", clickButton);
			}
		}
	}
}

////////////获取保存的数据

function getdata() {
	var navBorder = localStorage.getItem("border");
	var contentNav = document.getElementById("ct-nav-border");
	if (navBorder != null) {
		contentNav.className = navBorder;
	}
	var colorWord = localStorage.getItem("wc");
	var wordColor = document.getElementsByClassName("mf-b-green");
	for (var s = 0; s < wordColor.length; s++) {
		wordColor[s].style.color = colorWord;
	}
}

////////////取消a标签默认操作

function defaultOperate() {
	var aLink = document.getElementsByTagName("a");
	for (var t = 0; t < aLink.length; t++) {
		aLink[t] = function(num1) {
			aLink[num1].onclick = function(e) {
				e.preventDefault();
			}
		}(t);
	}
}

////////////使页面在加载后执行函数

window.onload = function() {
	changeColor();
	getdata();
	defaultOperate();
}