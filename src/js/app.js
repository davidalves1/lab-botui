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
}).then(() => {
	botui.action.button({
		delay: 1500,
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
	})
});

function planMessage() {
	botui.message.bot({
		delay: 500,
		content: 'Ok, vou te explicar um pouco mais sobre os nossos planos.'			
	});
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
		})
	});
}