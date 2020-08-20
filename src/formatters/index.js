export function formatDate(text) {
  const mesesAno = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const anoMes = text.substring(0, 10);
  const mes = mesesAno[Number(anoMes.split("-")[1]) - 1];
  const dia = anoMes.split("-")[2];

  return `${dia} de ${mes}`;
}

export function formatDate2(text) {
  const dataBanco = text.substring(0, 20);

  const hora = dataBanco.split(" ")[1];
  const data = dataBanco.split(" ")[0];

  const dia = data.split("-")[2];
  const mes = data.split("-")[1];
  const ano = data.split("-")[0];

  return `${dia}/${mes}/${ano}`;
}
