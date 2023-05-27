window.addEventListener('load', function () {
	var reg1 = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,16}$/; /*密码格式正则表达式*/
	document.getElementById("finish").addEventListener("click", Change);
	function Change() {
		if (document.getElementById("new").value == "") {
			window.alert("新密码不能为空！");
			document.getElementById("new").focus();
			return;
		} else if (!reg1.test(document.getElementById("new").value)) {
			window.alert("新密码必须是8-16位字母大小写、数字中的任意两种!")
		}
		else if (document.getElementById("old").value == "") {
			window.alert("旧密码不能为空！");
			document.getElementById("old").focus();
			return;
		} else if (!reg1.test(document.getElementById("old").value)) {
			window.alert("旧密码必须是8-16位字母大小写、数字中的任意两种!")
		} else if (document.getElementById("old").value == document.getElementById("new").value) {
			window.alert("新密码与旧密码一致,请重新输入")
		} else {
			window.alert("修改成功");
			window.location.href = "./self.html"
		}
	}
})