window.addEventListener('load', function () {
	const signInBtn = document.getElementById("signIn");
	const signUpBtn = document.getElementById("signUp");
	const fistForm = document.getElementById("form1");
	const secondForm = document.getElementById("form2");
	const container = document.querySelector(".container");
	signInBtn.addEventListener("click", () => {
		container.classList.remove("right-panel-active");
	});

	signUpBtn.addEventListener("click", () => {
		container.classList.add("right-panel-active");
	});

	fistForm.addEventListener("submit", (e) => e.preventDefault());
	secondForm.addEventListener("submit", (e) => e.preventDefault());

	var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;/*邮箱格式正则表达式*/
	var reg1=/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,16}$/; /*密码格式正则表达式*/
	var reg2=/([\u4e00-\u9fa5a-zA-Z0-9]{4,12})$/;/*用户名正则表达式*/

	document.getElementById("denglu").addEventListener("click", clicklogin);
	function clicklogin() {
		if (document.getElementById("Name").value == "") {
			window.alert("用户名不能为空！");
			document.getElementById("Name").focus();
			return;
		}else if(!reg2.test(document.getElementById("Name").value)){
			window.alert("用户名必须是4-12位!");
		}
		else if (document.getElementById("Email").value == "") {
			window.alert("邮箱不能为空！");
			document.getElementById("Email").focus();
			return;
		}
		else if(!reg.test(document.getElementById("Email").value)){
			window.alert("邮箱格式不正确");
		}
		else if (document.getElementById("pwd").value == "") {
			window.alert("密码不能为空！");
			document.getElementById("pwd").focus();
			return;
		} else if(!reg1.test(document.getElementById("pwd").value)){
			window.alert("密码必须是8-16位字母大小写、数字中的任意两种!")
		}
		else {
			window.location.href = "./web.html"
		}
	}
	var reg_1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;/*邮箱格式正则表达式*/
	var reg_2=/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,16}$/; /*密码格式正则表达式*/
	document.getElementById("zhuce").addEventListener("click", ClickLogin);
	function ClickLogin() {
		if (document.getElementById("EMAIL").value == "") {
			window.alert("邮箱不能为空！");
			document.getElementById("EMAIL").focus();
			return;
		}
		else if(!reg_1.test(document.getElementById("EMAIL").value)){
			window.alert("邮箱格式不正确");
		}
		else if (document.getElementById("PWD").value == "") {
			window.alert("密码不能为空！");
			document.getElementById("PWD").focus();
			return;
		}else if(!reg_2.test(document.getElementById("PWD").value)){
			window.alert("密码格式不正确，必须是8-16位字母大小写、数字的任意两种")
		}
		else {
			window.alert("注册成功")
		}
	}
})