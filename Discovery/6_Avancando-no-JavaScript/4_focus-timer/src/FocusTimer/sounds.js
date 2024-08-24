export const btnPressAudio = new Audio('./assets/button-press.wav')
export const kitchenTimer = new Audio('./assets/kitchen-timer.mp3')
export const bgAudio = new Audio('./assets/bg-audio.mp3')

bgAudio.loop = true

/**
 NOTAS

 new Audio() é a mesma coisa que criar uma tag HTML <audio>:
 <audio controls src="assets/bg-audio.mp3"></audio>                controls faz aparecer na pag os controles de reproducao


 Outro ponto é com relação aos caminhos. Quando você usa um caminho relativo 
 em um script JavaScript, o caminho é resolvido em relação à URL da página que 
 está carregando o script e não ao próprio arquivo de script. Isso significa que, 
 se você estiver servindo um arquivo HTML que está na raiz do seu projeto, 
 o caminho ./assets/bg-audio.mp3 é tratado como a partir da raiz da URL.
 */