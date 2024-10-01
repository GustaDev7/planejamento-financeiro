let receitas = 0;
let despesas = 0;
let investimentos = 0;

document.querySelector('.add-btn').addEventListener('click', addEntry);

function addEntry() {
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  // Validação para não permitir entradas sem descrição ou valor
  if (!description || isNaN(amount) || amount <= 0) {
    alert("Por favor, preencha todos os campos corretamente.");
    return; // Para se certificar de que não prossegue
  }

  const table = document.getElementById('entries');
  const newRow = table.insertRow();

  const descCell = newRow.insertCell(0);
  const amountCell = newRow.insertCell(1);
  const typeCell = newRow.insertCell(2);

  descCell.innerHTML = description;
  amountCell.innerHTML = 'R$ ' + amount.toFixed(2);
  typeCell.innerHTML = type.charAt(0).toUpperCase() + type.slice(1);

  updateTotals(amount, type);

  document.getElementById('finance-form').reset();
}

function updateTotals(amount, type) {
  if (type === 'receita') {
    receitas += amount;
    document.getElementById('total-receitas').innerText = receitas.toFixed(2);
  } else if (type === 'despesa') {
    despesas += amount;
    document.getElementById('total-despesas').innerText = despesas.toFixed(2);
  } else if (type === 'investimento') {
    investimentos += amount;
    document.getElementById('total-investimentos').innerText = investimentos.toFixed(2);
  }

  const saldoTotal = receitas - despesas - investimentos;
  const saldoTotalElement = document.getElementById('saldo-total');

  saldoTotalElement.innerText = saldoTotal.toFixed(2);

  // Verifica se o saldo total é negativo e muda a cor
  if (saldoTotal < 0) {
    saldoTotalElement.style.color = 'red';
  } else {
    saldoTotalElement.style.color = 'black'; // Ou outra cor para saldo positivo
  }
}
