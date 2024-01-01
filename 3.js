function padrao() {
    let n = 5;
    let linha = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            linha += " ";
        }
        for (let k = 0; k < i; k++) {
            linha += "*";
        }
        linha += "<br>";
    }
    document.write(`<pre>${linha}</pre>`);
}

padrao();

