function padrao() {
    let n = 5;
    let linha = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            linha += "*";
        }
        linha += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
        for (let j = 0; j < n - i; j++) {
            linha += "*";
        }
        linha += "\n";
    }
    document.write(`<pre>${linha}</pre>`);
}
padrao();
