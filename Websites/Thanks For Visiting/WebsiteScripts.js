function LocatorPager() {
	window.location="pog.html"
}


function GotoShrimp() {
 window.location="BabyDied.html";
}
function GotoFakeMain() {
 window.location="FakeMain.html";
}
function GotoMain() {
 window.location="Main.html";
}
function GotoPassword() {
 window.location="Password.html";
}
function GotoPasswordHint() {
 window.location="PasswordHint.html";
}
function GotoPasswordReset() {
 window.location="PasswordReset.html";
}

function checkPswd() {
        var confirmPassword = "aa513";
        var password = document.getElementById("PassCode").value;
        if (password == confirmPassword) {
             window.location="AnalCode.html";
        }
        else{
            alert("Password is Incorrect");
        }
}
function gsPswd() {
        var confirmPassword = "yotsuba nakano";
        var password = document.getElementById("PassCode").value;
        if (password == confirmPassword) {
             window.location="Analpass.html";
        }
        else{
            alert("Password is Incorrect");
        }
}