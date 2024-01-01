function padrao() {
    let n = 5;
    let linha = "";

    // cima
    for (let i = 1; i <= n; i++) {
        for (let j = n; j > i; j--) {
            linha += " ";
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            if (k === 0 || k === 2 * i - 2) {
                linha += "*";
            }
            else {
                linha += " ";
            }
        }
        linha += "\n";
    }
    // baixo
    for (let i = 1; i <= n - 1; i++) {
        for (let j = 0; j < i; j++) {
            linha += " ";
        }
        for (let k = (n - i) * 2 - 1; k >= 1; k--) {
            if (k === 1 || k === (n - i) * 2 - 1) {
                linha += "*";
            }
            else {
                linha += " ";
            }
        }
        linha += "\n";
    }
    document.write(`<pre>${linha}</pre>`);

}
padrao();
