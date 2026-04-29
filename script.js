// script.js
document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".btn-proximo");
    const passos = document.querySelectorAll(".passo");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            // pega o id do próximo passo
            const proximoId = botao.getAttribute("data-proximo");

            // remove a classe ativo de todos
            passos.forEach(p => p.classList.remove("ativo"));

            // adiciona ativo no próximo passo
            const proximoPasso = document.getElementById(`passo-${proximoId}`);
            if (proximoPasso) {
                proximoPasso.classList.add("ativo");
            }
        });
    });
});
