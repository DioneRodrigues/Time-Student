let timer;
let timeLeft;
let isPaused = false;
let isRunning = false;
let sessionCount = 1;
const totalSessions = 4;
let pomodoroTime = 25 * 60; // Valor padrão de 25 minutos
let breakTime = 5 * 60; // 5 minutos de pausa
let initialTime = pomodoroTime;

const timerInput = document.getElementById('timerDisplay');
const alarmSound = document.getElementById('alarmSound');
const alertDiv = document.getElementById('alert');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

// Atualiza o display do tempo
function updateDisplay(minutes, seconds) {
  timerInput.value = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Função para habilitar/desabilitar botões
function toggleButtons(isActive) {
  startButton.disabled = !isActive;
  pauseButton.disabled = !isActive;
  resetButton.disabled = !isActive;
}

// Função para iniciar o temporizador
function startTimer(duration) {
  let startTime = Date.now();
  let endTime = startTime + duration * 1000;
  
  timer = setInterval(() => {
    if (!isPaused) {
      timeLeft = Math.round((endTime - Date.now()) / 1000);
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;

      if (timeLeft <= 0) {
        clearInterval(timer);
        alarmSound.play(); // Tocar o som quando o tempo acabar
        alertDiv.classList.remove('hidden'); // Mostrar alerta visual
        
        // Alterna entre Pomodoro e Pausa
        if (document.getElementById('status').textContent === "Time Student") {
          sessionCount++;
          if (sessionCount > totalSessions) {
            sessionCount = 1;
          }
          initialTime = breakTime;
          document.getElementById('status').textContent = "Short Break"; // Mudando para o modo de pausa
        } else {
          initialTime = pomodoroTime;
          document.getElementById('status').textContent = "Time Student"; // Voltando ao modo Pomodoro
        }

        document.getElementById('sessionInfo').textContent = `${sessionCount} / ${totalSessions} sessions`;
        updateDisplay(Math.floor(initialTime / 60), initialTime % 60);
        
        // Habilita o botão play para iniciar a próxima sessão
        toggleButtons(true);
        isRunning = false; // Marcar que o timer não está rodando
        isPaused = false; // Garantir que não está pausado
      } else {
        updateDisplay(minutes, seconds);
      }
    }
  }, 1000);
}

// Iniciar ou continuar temporizador
startButton.addEventListener('click', () => {
  if (!isRunning) {
    isPaused = false;
    isRunning = true;
    // Se o timer estiver na pausa, o tempo de pausa deve ser usado
    if (document.getElementById('status').textContent === "Pausa") {
      initialTime = breakTime; // Define o tempo de pausa
    } else {
      initialTime = parseInt(timerInput.value.split(':')[0]) * 60; // Pega o valor editado no timer para o Pomodoro
    }
    timeLeft = initialTime;
    startTimer(timeLeft);
    alertDiv.classList.add('hidden'); // Esconde o alerta ao reiniciar
    toggleButtons(true); // Habilita os botões ao iniciar
  } else if (isPaused) {
    isPaused = false;
    startTimer(timeLeft);
  }
});

// Pausar temporizador
pauseButton.addEventListener('click', () => {
  if (isRunning) {
    isPaused = true;
    clearInterval(timer);
    toggleButtons(true); // Permite retomar ou resetar
  }
});

// Reiniciar temporizador
resetButton.addEventListener('click', () => {
  clearInterval(timer);
  isPaused = false;
  isRunning = false;

  // Reinicia o tempo com base no valor do campo de entrada
  pomodoroTime = parseInt(timerInput.value.split(':')[0]) * 60;
  initialTime = pomodoroTime;
  timeLeft = initialTime;

  updateDisplay(Math.floor(initialTime / 60), initialTime % 60);
  document.getElementById('status').textContent = "Time Student";
  document.getElementById('sessionInfo').textContent = `1 / ${totalSessions} sessions`;
  sessionCount = 1;
  alertDiv.classList.add('hidden'); // Esconde o alerta ao resetar
  toggleButtons(true); // Habilita os botões novamente
});
