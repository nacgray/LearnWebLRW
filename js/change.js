window.addEventListener('load', function () {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;/*邮箱格式正则表达式*/
    var reg1 = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,16}$/; /*密码格式正则表达式*/
    var reg2 = /([\u4e00-\u9fa5a-zA-Z0-9]{4,12})$/;/*用户名正则表达式*/
    document.getElementById("OK").addEventListener("click", Clickchange);
    function Clickchange() {
        if (document.getElementById("name").value == "") {
            window.alert("用户名不能为空！");
            document.getElementById("Name").focus();
            return;
        } else if (!reg2.test(document.getElementById("name").value)) {
            window.alert("用户名必须是4-12位!");
        } else if (document.getElementById("email").value == "") {
            window.alert("邮箱不能为空！");
            document.getElementById("Email").focus();
            return;
        }
        else if (!reg.test(document.getElementById("email").value)) {
            window.alert("邮箱格式不正确");
        } else {
            window.alert("修改成功");
            window.location.href = "./self.html"
        }
    }
})