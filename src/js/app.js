const botui = new BotUI('bot-app');

botui.message.bot({
	delay: 300,
	content: 'Olá, tudo bem?'
}).then(() => {
	botui.message.bot({
		delay: 1000,
		content: 'Meu nome é Gilson e irei te auxiliar nos primeiros passos. Vamos?!'
	})
}).then(() => {
	botui.message.bot({
		delay: 2000,
		content: 'Por favor, me diga o seu nome'
	})
});
	
botui.action.text({
	delay: 2500,
	action: {
		placeholder: 'Seu nome aqui'
	}
}).then(res => {
	botui.message.bot({
		delay: 500,
		content: `Muito bem ${res.value}, por onde quer começar?`
	})
}).then(showMainOptions);

function showMainOptions() {
	botui.message.bot({
		delay: 1000,
		content: 'As opções são:'
	}).then(() => {
		botui.action.button({
			delay: 500,
			action: [
				{
					text: 'Planos',
					value: 'planos'
				},
				{
					text: 'Dúvidas',
					value: 'duvidas'
				}
			]
		}).then(res => {
			switch(res.value) {
				case 'planos': planMessage();
					break;

				case 'duvidas': questionMessage();
					break;

				default: botui.message.bot({
					delay: 500,
					content: 'Não entendi o que você quer. Vamos começar novamente. :|'
				});
			}
		});
	});
}

function checkContinue() {
	botui.message.bot({
		delay: 500,
		content: 'Tem mais alguma dúvida?'
	}).then(() => {
		botui.action.button({
			delay: 1000,
			action: [
				{
					text: 'Sim',
					value: 'sim'
				},
				{
					text: 'Nao',
					value: 'nao'
				}
			]
		}).then(res => {
			switch(res.value) {
				case 'sim': showMainOptions();
					break;

				case 'nao': botui.message.bot({
						delay: 500,
						content: 'Obrigado. Qualquer dúvida pode nos procurar! ;)'
					});
					break;

				default: botui.message.bot({
					delay: 500,
					content: 'Não entendi o que você quer. Vamos começar novamente. :|'
				});
			}
		});
	})
}

function planMessage() {
	botui.message.bot({
		delay: 500,
		content: 'Ok, vou te explicar um pouco mais sobre os nossos planos.'			
	}).then(checkContinue);
}

function questionMessage() {
	botui.message.bot({
		delay: 500,
		content: 'Qual a sua dúvida?'			
	}).then(() => {
		botui.action.button({
			action: [
				{
					text: 'Quem descobriu o Brasil?',
					value: 'brasil'
				},
				{
					text: 'Qual a fórmula de Báscara?',
					value: 'bascara'
				},
				{
					text: 'Como comprar uma Tekpix?',
					value: 'tekpix'
				},
				{
					text: 'Hum, não sei. Prefiro falar com alguém por telefone.',
					value: 'telefone'
				}
			]
		}).then(checkContinue);
	})
}