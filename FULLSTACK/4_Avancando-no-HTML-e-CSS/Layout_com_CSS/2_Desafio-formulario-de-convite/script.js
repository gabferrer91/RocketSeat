// switch
const switchBtn = document.querySelector(".switch input");
const switchPar = document.querySelector(".theme-color p");

switchBtn.addEventListener("change", (e) => {
    switchPar.textContent = e.target.checked ? "Claro" : "Escuro";
});


// input file
const fileInput = document.getElementById('file-upload');
const fileText = document.getElementById('file-upload-text');

fileInput.addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : "Nenhum arquivo selecionado";
    fileText.textContent = fileName;
});


// telefone
document.getElementById('phone').addEventListener('input', function (e) {
    // Remove tudo que não for dígito
    let input = e.target.value.replace(/\D/g, '');

    // Limitar a entrada a 11 dígitos (DDD + Número)
    if (input.length > 11) {
        input = input.slice(0, 11);
    }

    // Formata o número
    const match = input.match(/^(\d{2})(\d{5})(\d{0,4})$/);
    if (match) {
        e.target.value = `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`;
    } else {
        // Se o formato não for atingido, limpar ou manter
        e.target.value = input.length > 2 ? `(${input.slice(0, 2)}) ${input.slice(2)}` : input;
    }
});

