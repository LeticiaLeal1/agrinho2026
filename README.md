# agrinho2026
energia-solar-rural/
│
├── index.html
├── style.css
└── script.js
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Energia Solar Rural</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Energia Solar em Propriedades Rurais</h1>
        <p>Economia, sustentabilidade e autonomia energética no campo.</p>
    </header>

    <nav>
        <a href="#beneficios">Benefícios</a>
        <a href="#calculadora">Calculadora</a>
        <a href="#contato">Contato</a>
    </nav>

    <section class="hero">
        <h2>Produza sua própria energia</h2>
        <p>Reduza custos e aumente a eficiência da sua propriedade rural.</p>
        <button onclick="saibaMais()">Saiba Mais</button>
    </section>

    <section id="beneficios">
        <h2>Benefícios da Energia Solar Rural</h2>

        <div class="cards">
            <div class="card">
                <h3>Economia</h3>
                <p>Redução significativa da conta de energia elétrica.</p>
            </div>

            <div class="card">
                <h3>Sustentabilidade</h3>
                <p>Fonte limpa e renovável, sem emissão de poluentes.</p>
            </div>

            <div class="card">
                <h3>Valorização</h3>
                <p>Aumenta o valor da propriedade e reduz custos operacionais.</p>
            </div>
        </div>
    </section>

    <section id="calculadora">
        <h2>Calculadora de Economia</h2>

        <label>Gasto mensal com energia (R$):</label>
        <input type="number" id="gasto">

        <button onclick="calcular()">Calcular Economia Anual</button>

        <h3 id="resultado"></h3>
    </section>

    <section id="contato">
        <h2>Solicite uma Avaliação</h2>

        <form>
            <input type="text" placeholder="Nome" required>
            <input type="email" placeholder="E-mail" required>
            <textarea placeholder="Descreva sua propriedade"></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>

    <footer>
        <p>© 2026 Energia Solar Rural</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f4f7f2;
    color: #333;
}

header {
    background: #2e7d32;
    color: white;
    text-align: center;
    padding: 40px;
}

nav {
    background: #1b5e20;
    text-align: center;
    padding: 15px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 15px;
    font-weight: bold;
}

.hero {
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(to right, #81c784, #a5d6a7);
}

.hero button {
    margin-top: 15px;
    padding: 10px 20px;
    border: none;
    background: #1b5e20;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

section {
    padding: 40px 20px;
}

.cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    flex: 1;
    min-width: 250px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

#calculadora {
    background: #e8f5e9;
}

input, textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
}

button {
    padding: 10px 20px;
    background: #2e7d32;
    color: white;
    border: none;
    cursor: pointer;
}

footer {
    background: #1b5e20;
    color: white;
    text-align: center;
    padding: 20px;
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
