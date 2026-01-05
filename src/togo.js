export function togo(a) {
	location.href = `${a}`;
}

let shop = document.getElementById("to_shop");
let general = document.getElementById("site_general");

if (shop != null) {
	shop.onclick = () => togo("./shop.html");
}

if (general != null) {
	general.onclick = () => togo("./index.html");
}
