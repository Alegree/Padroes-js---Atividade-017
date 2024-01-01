function padrao() {
    let n = 5;
    let linha = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                linha += "*";
            }
            else {
                if (j === 0 || j === n - 1) {
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

