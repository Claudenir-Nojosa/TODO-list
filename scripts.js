const form = document.getElementById("forms");
let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    const atividade = document.getElementById("nomeAtividade");
    let linha = "<ul>";
    linha += `<li>${atividade.value}</li>`;
    linha += "</ul>";
    linhas += linha;

    const corpoLista = document.querySelector("ul");
    corpoLista.innerHTML = linhas;
    resetForms();

    $("ul").on('click', 'li', function() {
        $(this).toggleClass('concluido');
    });
});

function resetForms() {
    document.getElementById("forms").reset();
}