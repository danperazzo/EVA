Feature: Mostrar instituições filtradas para a vítima
    As a vitima utilizar o sistema
    I want to Descobrir Instituições que eu necessito a partir dos meus problemas
    So that eu posso buscar a ajuda adequada


############################## GUI Scenario ##############################
Scenario: A vítima necessita de atendimento médico por conta de fraturas ósseas e o nome de um hospital em sua cidade junto com seu endereço é informado

    Given Eu, uma vítima utilizando o sistema
    When Eu registro meu nome como "Sandra"
    And meu telefone como "99878718"
    And Eu registro que moro em "Recife"
    And Eu indico que necessito de "atendimento médico por fratura óssea" 
    And Eu requisito o sistema para "retornar instituições indicadas"
    Then o sistema mostra uma lista com "Hospital da Restauração" com o endereço "Av. Gov. Agamenon Magalhães" situada em "Recife"

############################## Service Scenario ##############################

Scenario: A vítima precisa de ajuda médica porém não existe um hospital para sua necessidade na sua cidade. O sistema retornará uma mensagem de erro.

    Given O sistema possui "1" instituições "Médica" situadas em "Recife"
    When Eu registro minha ocorrência situada em "Recife"
    Then O sistema retorna "1" instituição "Médica"
