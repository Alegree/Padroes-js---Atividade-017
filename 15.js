function padrao() {
    var n = 6;
    var linha = "";
    // 2 primeiras linhas
    for (let i = n / 2; i < n; i += 2) {
        for (let j = 1; j < n - i; j += 2) {
            linha += " ";
        }
        for (let j = 1; j < i + 1; j++) {
            linha += "*";
        }
        for (let j = 1; j < n - i + 1; j++) {
            linha += " ";
        }
        for (let j = 1; j < i + 1; j++) {
            linha += "*";
        }
        linha += "\n";
    }
    // baixo
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < n - i; j++) {
            linha += " ";
        }
        for (let j = 1; j < i * 2; j++) {
            linha += "*";
        }
        linha += "\n";
    }
    document.write(`<pre>${linha}</pre>`);
}
padrao();
