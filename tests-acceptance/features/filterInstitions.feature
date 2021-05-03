Feature: Mostrar instituições filtradas para a vítima
    As a vitima utilizar o sistema
    I want to Descobrir Instituições que eu necessito a partir dos meus problemas
    So that eu posso buscar a ajuda adequada


############################## GUI Scenario ##############################

Scenario: Uma vítima cadastra sua ocorrência em Recife e precisa de atendimento para uma necessidade médica e psicológica. 

    Given Eu estou no menu inicial
    When Eu adiciono que preciso de "Precisa de ajuda psicológica" e "Precisa de ajuda policial"
    And Eu insiro que estou em "Olinda"
    And Clico em "Submeter"
    Then Eu visualizo "Psicologo 2"

############################## Service Scenario ##############################

Scenario: O sistema não possui ocorrência em Recife. É realizada uma postagem de uma ocorrência em Recife

    Given O sistema não possui ocorrências
    When Eu envio para o sistema minha ocorrência situada em "Recife"
    Then O sistema possui alguma ocorrência situada em "Recife"

