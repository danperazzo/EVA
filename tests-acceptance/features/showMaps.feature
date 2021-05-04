Feature: Mostrar a localização da instituição no mapa.

########## SERVIÇO ##########

Scenario: o mapa carrega o endereço

	Given O servidor possui a instituição de nome "Psicologo 2" com o endereço "Galeria Cordeiro - Praça Doze de Março"
	When Eu envio para o sistema o nome "Psicologo 2"
	Then O sistema me retorna o objeto com street "Galeria Cordeiro - Praça Doze de Março"

############ GUI ############

Scenario: a vítima vê o mapa após clicar no endereço de instituição

	Given Eu estou no menu inicial
	Given Eu adiciono que preciso de "Precisa de ajuda psicológica" e "Precisa de ajuda policial"
	Given Eu insiro que estou em "Olinda"
  Given Clico em "Submeter"
	Given Clico no endereço "0"
	Then Eu vou para a pagina "mapa"
	Then Eu vejo o mapa
