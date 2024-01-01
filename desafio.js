function arvoreDeNatal() {
    let n = 5;
    let arvoreContainer = document.getElementById("arvore");

    let cores = ["red", "green", "yellow", "blue"];
    let corIndex = 0;

    function atualizarArvore() {
        let corAtual = cores[corIndex];
        let arvore = "";

        for (let i = 1; i <= n; i++) {
            for (let j = n; j > i; j--) {
                arvore += " ";
            }
            for (let k = 0; k < i * 2 - 1; k++) {
                arvore += `<span style="color:${corAtual}">*</span>`;
            }
            arvore += "<br>";
        }

        for (let i = 0; i < 2; i++) {
            arvore += " ".repeat(n - 1) + "*" + "<br>";
        }

        arvoreContainer.innerHTML = `<pre>${arvore}</pre>`;

        setTimeout(() => {
            corIndex = (corIndex + 1) % cores.length;
            atualizarArvore();
        }, 1500);
    }

    atualizarArvore();
}

arvoreDeNatal();