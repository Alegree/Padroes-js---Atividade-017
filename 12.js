function padrao() {
    let n = 5;
    let linha = "";
    // cima
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            linha += " ";
        }
        for (let k = 0; k < (n - i) * 2 - 1; k++) {
            linha += "*";
        }
        linha += "\n";
    }
    // baixo
    for (let i = 2; i <= n; i++) {
        for (let j = n; j > i; j--) {
            linha += " ";
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            linha += "*";
        }
        linha += "\n";
    }
    document.write(`<pre>${linha}</pre>`);
}
padrao();
