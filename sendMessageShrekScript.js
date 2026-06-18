/**
 * Função para enviar mensagens automáticas no WhatsApp Web
 * @param {string} scriptText - Texto contendo as mensagens a serem enviadas (separadas por quebras de linha ou tabs)
 * @returns {Promise<number>} - Retorna uma promise que resolve com o número de mensagens enviadas
 */
async function enviarScript(scriptText) {
    // Configuração dos intervalos de tempo (em milissegundos)
    const TEMPO_ENTRE_MENSAGENS = 250; // Intervalo entre o envio de uma mensagem e outra
    const TEMPO_APOS_DIGITAR = 100;   // Intervalo após digitar antes de clicar no botão enviar
    const TEMPO_ESPERA_FINAL = 250;   // Intervalo de espera após última mensagem

    // Processa o texto: divide em linhas, remove espaços e linhas vazias
    const lines = scriptText.split(/[\n\t]+/)
                            .map(line => line.trim())
                            .filter(line => line);
    
    // Obtém elementos da interface do WhatsApp
    const main = document.querySelector("#main");
    const textarea = main.querySelector(`div[contenteditable="true"]`);
    
    if (!textarea) throw new Error("Não há uma conversa aberta");
    
    // Envia cada linha como uma mensagem separada
    for (const line of lines) {
        console.log(line); // Log para depuração
    
        // Digita a mensagem no campo de texto
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        // Envia a mensagem após um pequeno intervalo
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || 
             main.querySelector(`[data-icon="wds-ic-send-filled"]`)).click();
        }, TEMPO_APOS_DIGITAR);
        
        // Aguarda intervalo entre mensagens (exceto após a última)
        if (lines.indexOf(line) !== lines.length - 1) {
            await new Promise(resolve => setTimeout(resolve, TEMPO_ENTRE_MENSAGENS));
        }
    }
    
    // Aguarda um tempo final antes de retornar
    await new Promise(resolve => setTimeout(resolve, TEMPO_ESPERA_FINAL));
    return lines.length;
}

enviarScript(`
Here lies Charlie
You can tell it's him 'cause we put his name on the stone
He kept his showers ice cold, used eco-friendly lightbulbs
Rode his bicycle to work when the gasoline price rose
He'd judge with no pretense, fish on the weekends
Each morning, get up, do the Pledge of Allegiance
Never swim in the ocean, for fear of shark attacks
Bi-monthly get his wife a rose with a card attached
Avoiding all the little things that were hard to ask
Had a car crash, cardiac arrest, died of a heart attack
Golden escalator, all his friends and neighbors
Huddled there in prayer around the respirator
Catch you later, I'm off to see the man upstairs
They all look like ants from here, stars and crystal chandeliers
There was an angel at the entrance, checking off a guest list
Charlie wasn't on it, and was ushered to the exit
His heart sank
He was breathless
Excuse me, sir, there must be someone you've confused me for
If I could see someone who knew me or someone in uniform
I go to church on Sunday, truly, usually more
Screaming at the angels while they pushed him through the door
Excuse me, sir, there must be someone you've confused me for
If I could see someone who knew me or someone in uniform
I go to church on Sunday, truly, usually more
Screaming at the angels while they pushed him through the door
Abandon all hope, all ye who enter
It was a horrifying sign, but sounded like a neat adventure
Far beyond the halos and the castles in the clouds
Fatsos squealing, shackled with some apples in their mouths
Attention whores in padded bras hanging from extension cords
Tortured with the products from their favorite catalogs
Here, we buy and sell a million kinds of Hell
Imagination is the limit to the devil's clientele
Up a dingy elevator, no televised debate
The Savior saves you from the Hell you paid for, sorry, but it's, "smell you later"
Side-stepped fate, went right for the gate
But you know the devil, he loves a good chase
There was a demon at the entrance, making X's on a checklist
Who would kick you in the ass when you begged him for repentance
Those tempted by the senses with the cruelest of intentions
Charlie's heart sank
He was breathless
Excuse me, sir, there must be someone you've confused me for
If I could see someone who knew me or someone in uniform
I really don't belong here, I know you've heard the tune before
Screaming at the demons while they pushed him through the door
Excuse me, sir, there must be someone you've confused me for
If I could see someone who knew me or someone in uniform
I really don't belong here, I know you've heard the tune before
Screaming at the demons while they pushed him through the door
You can run from your demons until you are exhausted
One day you will have to stop and find out what they wanted
Keep on running from those demons until you are exhausted
You can run to those angels 'til you are exhausted
One day you will have to stop and question what they wanted
Keep on running to those angels until you are exhausted
Excuse me, sir, there must be someone you've confused me for (I don't want to die)
If I could see someone who knew me or someone in uniform
I really don't belong here, I know you've heard the tune before (please, don't let me die)
Excuse me, sir, there must be someone you've confused me for (I don't want to die)
If I could see someone who knew me or someone in uniform
I really don't belong here, I know you've heard the tune before (please, don't let me die)Here lies Charlie
You can tell it's him 'cause we put his name on the stone
He kept his showers ice cold, used eco-friendly lightbulbs
Rode his bicycle to work when the gasoline price rose
He'd judge with no pretense, fish on the weekends
Each morning, get up, do the Pledge of Allegiance
Never swim in the ocean, for fear of shark attacks
Bi-monthly get his wife a rose with a card attached
Avoiding all the little things that were hard to ask
Had a car crash, cardiac arrest, died of a heart attack
Golden escalator, all his friends and neighbors
Huddled there in prayer around the respirator
Catch you later, I'm off to see the man upstairs
They all look like ants from here, stars and crystal chandeliers
There was an angel at the entrance, checking off a guest list
Charlie wasn't on it, and was ushered to the exit
His heart sank
He was breathless
Excuse me, sir, there must be someone you've confused me for
If I could see someone who knew me or someone in uniform
I go to church on Sunday, truly, usually more
Screaming at the angels while they pushed him through the door
Excuse me, sir, there must be someone you've confused me for
If I could see someone who knew me or someone in uniform
I go to church on Sunday, truly, usually more
Screaming at the angels while they pushed him through the door
Abandon all hope, all ye who enter
It was a horrifying sign, but sounded like a neat adventure
Far beyond the halos and the castles in the clouds
Fatsos squealing, shackled with some apples in their mouths
Attention whores in padded bras hanging from extension cords
Tortured with the products from their favorite catalogs
Here, we buy and sell a million kinds of Hell
Imagination is the limit to the devil's clientele
Up a dingy elevator, no televised debate
The Savior saves you from the Hell you paid for, sorry, but it's, "smell you later"
Side-stepped fate, went right for the gate
But you know the devil, he loves a good chase
There was a demon at the entrance, making X's on a checklist
Who would kick you in the ass when you begged him for repentance
Those tempted by the senses with the cruelest of intentions
Charlie's heart sank
He was breathless
Excuse me, sir, there must be someone you've confused me for
If I could see someone who knew me or someone in uniform
I really don't belong here, I know you've heard the tune before
Screaming at the demons while they pushed him through the door
Excuse me, sir, there must be someone you've confused me for
If I could see someone who knew me or someone in uniform
I really don't belong here, I know you've heard the tune before
Screaming at the demons while they pushed him through the door
You can run from your demons until you are exhausted
One day you will have to stop and find out what they wanted
Keep on running from those demons until you are exhausted
You can run to those angels 'til you are exhausted
One day you will have to stop and question what they wanted
Keep on running to those angels until you are exhausted
Excuse me, sir, there must be someone you've confused me for (I don't want to die)
If I could see someone who knew me or someone in uniform
I really don't belong here, I know you've heard the tune before (please, don't let me die)
Excuse me, sir, there must be someone you've confused me for (I don't want to die)
If I could see someone who knew me or someone in uniform
I really don't belong here, I know you've heard the tune before (please, don't let me die)
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
