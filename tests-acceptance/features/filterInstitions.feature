Feature: Mostrar instituições filtradas para a vítima
    As a vitima utilizar o sistema
    I want to Descobrir Instituições que eu necessito a partir dos meus problemas
    So that eu posso buscar a ajuda adequada


############################## GUI Scenario ##############################

############################## Service Scenario ##############################

Scenario: A vítima precisa de ajuda médica porém não existe um hospital para sua necessidade na sua cidade. O sistema retornará uma mensagem de erro.

    Given O sistema não possui ocorrências situadas em "Recife"
    When Eu registro minha ocorrência situada em "Recife"
    Then O sistema possui alguma ocorrência situada em "Recife"

