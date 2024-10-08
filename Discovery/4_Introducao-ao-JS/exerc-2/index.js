// Criando a lista de estudantes
const estudantes = [
  { nome: 'Ana', nota1: 8, nota2: 9 },
  { nome: 'Beto', nota1: 7, nota2: 6 },
  { nome: 'Claudio', nota1: 5, nota2: 4 },
];

// Função para calcular a média e verificar aprovação
function calcularMediaEVerificarAprovacao(estudante) {
  const media = (estudante.nota1 + estudante.nota2) / 2;
  if (media >= 7) {
    alert(`${estudante.nome} foi aprovado(a)! Média: ${media}`);
  } else {
    alert(`${estudante.nome} não foi aprovado(a). Média: ${media}`);
  }
}

// Iterando sobre a lista de estudantes e chamando a função para cada um
estudantes.forEach(calcularMediaEVerificarAprovacao);
