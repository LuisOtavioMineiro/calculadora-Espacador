document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let ladoX = parseFloat(document.getElementById("ladox").value);
    let ladoY = parseFloat(document.getElementById("ladoy").value);
    let espacadoresPorPiso = parseFloat(document.getElementById("espacador").value);
    let areaTotal = parseFloat(document.getElementById("areatotal").value);

    if (isNaN(ladoX) || isNaN(ladoY) || isNaN(espacadoresPorPiso) || isNaN(areaTotal) || ladoX <= 0 || ladoY <= 0 || espacadoresPorPiso <= 0 || areaTotal <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calcular a área do piso
    let areaPiso = (ladoX * ladoY) / 10000;  // Convertendo cm² para m²

    // Calcular a quantidade de pisos necessários
    let quantidadePisos = areaTotal / areaPiso;

    // Calcular o número total de espaçadores
    let totalEspacadores = Math.ceil(quantidadePisos * espacadoresPorPiso);  // Arredondar para cima

    // Exibir o resultado
    document.getElementById("spacersCount").textContent = totalEspacadores;
});
