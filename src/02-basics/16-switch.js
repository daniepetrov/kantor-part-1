// 1
var browser = "SafariIE";

if (browser === "IE") {
  console.log("О, да у вас IE!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Да, и эти браузеры мы поддерживаем");
} else {
  console.log("Мы надеемся, что и в вашем браузере все ок!");
}

var a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
}
