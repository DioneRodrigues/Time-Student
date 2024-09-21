# ⏱ Time Student - Extensão do Chrome

O *Time Student* é uma extensão simples e funcional para o Google Chrome que te ajuda a gerenciar seu tempo usando a técnica Pomodoro! 🍅 Ele oferece um timer de 25 minutos para focar em suas tarefas, com botões intuitivos para iniciar e parar a contagem.

## 🌟 Funcionalidades

- *⏳ Timer de 25 minutos*: Uma contagem regressiva perfeita para seus ciclos de foco.
- *▶️ Botão Iniciar*: Inicia a contagem regressiva de 25 minutos.
- *⏸️ Botão Parar*: Pausa a sessão antes do termino.
- *🔄 Botão Resetar*: Redefini a sessão.

## 📂 Estrutura do Projeto

bash
TIME STUDENT/
│
├── assets/               # Pasta contendo arquivos de áudio utilizados pela extensão
│   └── kichen-timer.mp3  # Som que toca quando o tempo do cronômetro acaba
│
├── icons/                # Pasta com o ícone da extensão
│   └── icon.png          # Ícone principal da extensão
│
├── img/                  # Pasta contendo imagens usadas na interface da extensão
│   ├── circle-pause.png  # Imagem para o botão de pausa
│   ├── play.png          # Imagem para o botão de iniciar o timer
│   └── timer-reset.png   # Imagem para o botão de reset do timer
│
├── src/                  # Diretório principal com os arquivos fonte da extensão
│   ├── css/              # Pasta contendo os estilos CSS da extensão
│   │   └── styles.css    # Arquivo de estilos para o layout da extensão
│   │
│   ├── js/               # Pasta contendo os scripts JavaScript
│   │   ├── background.js # Lógica de execução em background da extensão
│   │   └── popup.js      # Lógica da interface popup
│   │
│   └── popup.html        # HTML da interface do popup da extensão
│
├── manifest.json         # Arquivo de configuração da extensão do navegador
└── readme.md             # Documento de instruções e explicações sobre a extensão



## 🚀 Como Instalar Localmente

1. Faça o download ou clone este repositório no seu computador.
2. Abra o *Google Chrome* e navegue até chrome://extensions/.
3. Ative o *Modo do Desenvolvedor* (localizado no canto superior direito).
4. Clique em *Carregar sem compactação* e selecione a pasta onde o projeto da extensão está localizado.
5. A extensão será carregada e aparecerá na lista de extensões do Chrome.

## 🎯 Como Usar

1. Clique no ícone do *Time Student* na barra de ferramentas do Chrome.
2. Pressione o botão *Iniciar* para iniciar uma sessão de 25 minutos.
3. Pressione *Parar* para pausar a sessão a qualquer momento.
4. Pressione *Resetar* para redefinir o tempo.


💡 *Dica:* Após concluir um ciclo, faça uma pausa curta antes de iniciar outro Pomodoro para manter seu foco e produtividade!

## 🚧 Melhorias Futuras

- Adicionar suporte para sessões personalizáveis.

## 📜 Licença

Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---
