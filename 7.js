function padrao() {
    let n = 5;
    let linha = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n; j > i; j--) {
            linha += " ";
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            linha += "*";
        }
        linha += "<br>";
    }
    document.write(`<pre>${linha}</pre>`);
}
padrao();
