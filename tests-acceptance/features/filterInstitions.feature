Feature: Mostrar instituições filtradas para a vítima
    As a vitima utilizar o sistema
    I want to Descobrir Instituições que eu necessito a partir dos meus problemas
    So that eu posso buscar a ajuda adequada


############################## GUI Scenario ##############################

Scenario: Uma vítima cadastra sua ocorrência em Recife e precisa de atendimento para uma necessidade médica e psicológica. 

    Given O usuário está no menu inicial
############################## Service Scenario ##############################

Scenario: O sistema não possui ocorrência em Recife. É realizada uma postagem de uma ocorrência em Recife

    Given O sistema não possui ocorrências situadas em "Recife"
    When Eu registro minha ocorrência situada em "Recife"
    Then O sistema possui alguma ocorrência situada em "Recife"

