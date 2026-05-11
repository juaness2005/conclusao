const btnTema = document.querySelector("#botao-tema");
const qr = document.querySelector("#qrCode");

btnTema.addEventListener("click", toggleDarkMode);

function gerarQR(isDark) {
    const corQR = isDark ? "FFFFFF" : "000000";
    const bg = isDark ? "000000" : "FFFFFF";

    qr.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent("https://meusite.com")}&size=200x200&color=${corQR}&bgcolor=${bg}`;
}

function toggleDarkMode(){
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    gerarQR(isDark);
}

gerarQR(false);