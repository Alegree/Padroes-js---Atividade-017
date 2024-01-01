function padrao() {
    let n = 5;
    let linha = "";

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i - 6; j++) {
            linha += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            if (i === 1 || i === n) {
                linha += "*";
            }
            else {
                if (k === 0 || k === 2 * i - 2) {
                    linha += "*";
                }
                else {
                    linha += " ";
                }
            }
        }
        linha += "\n";
    }
    document.write(`<pre>${linha}</pre>`);
}
padrao();
