document.addEventListener('DOMContentLoaded', () => {
    const selectPagamento = document.getElementById('pagamento');
  
    // Exemplo de ação ao selecionar uma forma de pagamento
    selectPagamento.addEventListener('change', (e) => {
      const opcaoSelecionada = e.target.value;
      console.log(`Forma de pagamento selecionada: ${opcaoSelecionada}`);
    });
  });