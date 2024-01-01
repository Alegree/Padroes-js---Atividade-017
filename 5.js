function padrao() {
    let n = 5;
    let linha = "";
    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n - i; k++) {
            linha += "*";
        }
        linha += "<br>";
    }
    document.write(`<pre>${linha}</pre>`);
}
padrao();
