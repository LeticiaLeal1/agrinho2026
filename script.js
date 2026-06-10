function saibaMais() {
    alert("A energia solar pode reduzir em até 95% os custos com eletricidade na propriedade rural.");
}

function calcular() {
    let gasto = parseFloat(document.getElementById("gasto").value);

    if (isNaN(gasto) || gasto <= 0) {
        document.getElementById("resultado").innerHTML =
            "Digite um valor válido.";
        return;
    }

    let economiaAnual = gasto * 12 * 0.85;

    document.getElementById("resultado").innerHTML =
        `Economia estimada por ano: R$ ${economiaAnual.toFixed(2)}`;
}
