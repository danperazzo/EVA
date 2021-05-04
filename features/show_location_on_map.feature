Feature: Mostrar a localização da instituição no mapa.

Scenario: o mapa carrega o endereço

	Given O servidor possui a instituição de nome "Psicologo 2" com o endereço "Galeria Cordeiro - Praça Doze de Março"
	When Eu envio para o sistema o nome "Psicologo 2"
	Then O sistema me retorna o objeto com street "Galeria Cordeiro - Praça Doze de Março"

Scenario: a vítima vê o mapa após clicar no endereço de instituição

	Given Eu estou no menu inicial
	Given Eu adiciono que preciso de "Precisa de ajuda psicológica" e "Precisa de ajuda policial"
	Given Eu insiro que estou em "Olinda"
  Given Clico em "Submeter"
	Given Clico no endereço "0"
	Then Eu vou para a pagina "mapa"
	Then Eu vejo o mapa

Scenario: a vítima tenta ver a instituição no mapa, mas sua internet é lenta

	Given Eu, uma vítima utilizando o sistema
	When Eu clico em uma das instituições
	And O mapa não carrega por falta de internet
	Then o sistema retorna a mensagem "falta de internet"

Scenario: a vítima tenta acessar uma instituição com endereço não encontrado

	Given, eu, uma vítima utilizando o sistema
	When eu clico em uma das instituições
	And a instituição não possui endereço encontrado no maps
	Then o sistema retornma a mensagem "endereço da instituição não encontrado"

Scenario: a vítima olha para o mapa e usa a ferramenta de zoom para se situar melhor

	Given Eu, uma vítima, terminei de fazer a triagem
	When Eu clico numa das opções de instituições
	Then Aparece na tela um mini mapa com a localização da instituição
	And eu posso clicar na ferramenta de zoom para dar zoom-in ou zoom-out no mapa
