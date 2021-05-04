Feature: Mostrar instituições filtradas para a vítima e cadastrar ocorrência
    As a vitima cadastrando uma ocorrencia
    I want to Descobrir Instituições que eu necessito a partir dos meus problemas
    So that eu posso buscar a ajuda adequada


    ############################## GUI Scenario ##############################

    Scenario: Uma vítima cadastra sua ocorrência em Olinda e precisa de atendimento para uma necessidade médica e psicológica. O sistema retorna uma psicologa

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



    Scenario: A vítima necessita de atendimento médico e o nome de um hospital em sua cidade junto com seu endereço é informado

        Given Eu, uma vítima utilizando o sistema
        When Eu registro que moro em "Recife"
        And Eu indico que necessito de "atendimento médico"
        And Eu submeto a resposta
        Then o sistema mostra uma lista com "Hospital da Restauração" com o endereço "Av. Gov. Agamenon Magalhães, 55, Recife"

    Scenario: A vítima precisa de ajuda policial e uma delegacia em sua cidade é indicada

        Given Eu, uma vítima utilizando
        When Eu "submeto" minha resposta
        And Eu indico que "Preciso de ajuda policial"
        Then o sistema mostra uma lista com "Delegacia da Mulher" com o endereço "Praça do Campo Santo, 55 Recife"


    Scenario: A vítima  precisa de ajuda psicológica e o nome de um psicólogo que resida na mesma cidade da vítima é indicado junto com seu número


        Given Eu, uma vítima utilizando o sistema
        And Eu indico que necessito de "Atendimento psicológico"
        When Eu "submeto" minha resposta
        And Eu informo que moro em "Recife"
        Then o sistema mostra uma lista com "Cliníca psicológica Dra. Simone Paraíso" com o endereço "Av. Conselheiro Rosa e Silva, 670" e situada em "Recife"


    Scenario: A vítima precisa de ajuda médica porém não existe um hospital para sua necessidade na sua cidade. O sistema retornará uma lista vazia.

        Given Eu, uma vítima utilizando o sistema
        And o sistema não possui instituições "médicas" em "Paulista"
        When eu indico que estou situada em "Paulista"
        And Eu indico que necessito de "atendimento médico"
        When Eu "submeto" minha resposta
        Then o sistema retorna uma lista vazia

    Scenario: A vítima precisa de ajuda psicológica porém não existem psicólogos que residam em sua cidade. O sistema retorna uma lista vazia

        Given Eu, uma vítima utilizando o sistema
        When eu indico que estou situada em "Paulista"
        And Eu indico que necessito de "Atendimento psicológico"
        And Eu "submeto" minha resposta
        And o sistema não possui psicólogos em "Paulista"
        Then o sistema retorna uma lista vazia


    Scenario: A vítima precisa de ajuda psicológica e ajuda médica simultaneamente. O sistema retorna o nome de um psicólogo e um nome de um hospital.

        Given Eu, uma vítima utilizando o sistema
        When Eu indico que necessito de "Atendimento psicológico"
        And Eu indico que necessito de "atendimento médico"
        And Eu requisito do sistema para "Retornar instituições indicadas"
        And Eu informo que moro em "Recife"
        Then o sistema mostra uma lista com "Cliníca psicológica Dra. Simone Paraíso" com o endereço "Av. Conselheiro Rosa e Silva, 670,Recife"
        And o sistema mostra uma lista com "Hospital da Restauração" com o endereço "Av. Gov. Agamenon Magalhães, 86, Recife"
