function padrao() {
    let n = 5;
    let linha = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            linha += "*";
        }
        linha += "<br>";
    }
    document.write(`<pre>${linha}</pre>`);
}
padrao();