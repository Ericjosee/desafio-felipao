// Variáveis
const nomeHeroi = "EricTreinadordedragoes"; // Substitua pelo nome do seu herói
const xpHeroi = 2000; // Substitua pela quantidade de XP do seu herói

// Estrutura de decisão
let nivelHeroi;
if (xpHeroi <1000){nivelHeroi= "ferro";}
else if(xpHeroi >=1001 && xpHeroi <=2000){nivelHeroi="Prata";}
else if(xpHeroi >=2001 && xpHeroi <=5000){nivelHeroi="Ouro";}
else if(xpHeroi >=5001 && xpHeroi <=7000){nivelHeroi="Platina";}
else if(xpHeroi >=8001 && xpHeroi <=9000){nivelHeroi="Ascedente";}
else if(xpHeroi >=9001 && xpHeroi <=10000){nivelHeroi="Imortal"}
else if(xpHeroi >=10001){nivelHeroi="Radiante"}

// Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}.`);
