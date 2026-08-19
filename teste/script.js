const input = document.getElementById('userInput');
const btnEnviar = document.getElementById('btnEnviar');
const chatContent = document.getElementById('chatContent');

function enviarMensagem() {
  const texto = input.value.trim();
  if (texto === '') return;

  // 1. Adiciona a mensagem do usuário na tela
  const msgUsuario = document.createElement('div');
  msgUsuario.style.textAlign = 'right';
  msgUsuario.style.marginBottom = '10px';
  msgUsuario.innerHTML = `<p style="background: #2563eb; display: inline-block; padding: 8px 14px; border-radius: 15px;">${texto}</p>`;
  chatContent.appendChild(msgUsuario);

  input.value = '';

  // 2. Resposta automática do Bot (Simulação)
  setTimeout(() => {
    const msgBot = document.createElement('div');
    msgBot.style.textAlign = 'left';
    msgBot.style.marginBottom = '10px';
    msgBot.innerHTML = `<p style="background: #2a2a2a; display: inline-block; padding: 8px 14px; border-radius: 15px;">Recebi sua mensagem! Em breve teremos respostas automáticas integradas.</p>`;
    chatContent.appendChild(msgBot);
    
    // Rola para a mensagem mais recente
    chatContent.scrollTop = chatContent.scrollHeight;
  }, 1000);
}

// Eventos de clique no botão e tecla Enter
btnEnviar.addEventListener('click', enviarMensagem);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') enviarMensagem();
});