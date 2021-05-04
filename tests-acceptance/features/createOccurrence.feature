Feature: Mostrar instituições filtradas para a vítima e cadastrar ocorrência
    As a vitima cadastrando uma ocorrencia
    I want to Descobrir Instituições que eu necessito a partir dos meus problemas
    So that eu posso buscar a ajuda adequada


    ############################## GUI Scenario ##############################

    Scenario: Uma vítima cadastra sua ocorrência em Olinda e precisa de atendimento para uma necessidade médica e psicológica. O sistema retorna uma psicologa

        Given Eu estou no menu inicial e o sistema possui uma "psicóloga" em "Olinda"
        When Eu adiciono que preciso de "Precisa de ajuda psicológica" e "Precisa de ajuda policial"
        And Eu insiro que estou em "Olinda"
        And Clico em "Submeter"
        Then Eu visualizo "Psicologo 2"

    ############################## Service Scenario ##############################

    Scenario: O sistema não possui ocorrência em Recife. É realizada uma postagem de uma ocorrência em Recife

        Given O sistema não possui ocorrências
        When Eu envio para o sistema minha ocorrência situada em "Recife"
        Then O sistema possui alguma ocorrência situada em "Recife"

