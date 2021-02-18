Feature: Visualizar dados das ocorrências em um dado período de tempo
    
    As a gestora do centro de encaminhamento de suporte às ocorrências
    I want to visualizar uma lista com dados das ocorrências dado um 
    período de tempo, filtrar/agrupar por informações 
    relevantes e gerar relatórios
    so that eu posso preparar melhor o meu centro para atender as 
    ocorrências e ajudar as instituições de ajuda a se preparar 
    melhor também

    ############################## Cenários de GUI ##############################
    Scenario: visualização bem sucedida do breakdown de ocorrências em um dia
        Given eu estou no página "dados das ocorrências"
        And apenas as ocorrências "1, Policial, 09, 02, 2020, 08:37, 0, Espinheiro, 
        Delegacia da Mulher - Praça do Campo Santo - Recife" e "2, Médica, 
        09, 02, 2020, 10:15, 5, Madalena, Hospital da Restauração - Av. Gov. 
        Agamenon Magalhães - Recife" estão armazenadas no sistema com o 
        dia "09", mês "02" e ano "2020"
        When eu seleciono "breakdown das ocorrências"
        And eu escolho filtrar pela data "09/02/2020"
        Then eu vejo uma lista com as informações de id, tipo, horário, grau de 
        urgência, local e resposta das ocorrências contendo as linhas "1, 
        Policial, 08:37, 0, Espinheiro, Delegacia da Mulher - Praça do Campo 
        Santo - Recife" e "2, Médica, 10:15, 5, Madalena, Hospital da 
        Restauração - Av. Gov. Agamenon Magalhães - Recife"
        And vejo a data selecionada como "09/02/2020"


    Scenario: visualização mal sucedida do breakdown de ocorrências em um dia por escolher um dia no futuro
        Given eu estou no página "dados das ocorrências"
        And a data de hoje é "09/02/2021"
        When eu seleciono "breakdown das ocorrências"
        And eu escolho filtrar pela data "10/02/2021"
        Then eu vejo uma mensagem de erro
        And vejo a data selecionada como "10/02/2020"


    Scenario: filtragem bem sucedida das ocorrências urgentes em uma semana
        Given eu estou na página "dados das ocorrências"
        And a ocorrência "3, Psicológica, 10, 05, 2020, 19:43, 4, Aflitos, Cliníca 
        psicológica Dra. Simone Paraíso - Av. Conselheiro Rosa e Silva, 670 - 
        Recife" está armazenada no sistema
        And o sistema possui armazenadas "100, 150, 75, 92" ocorrências com data 
        entre "01/02/2021-07/02/2021, 08/02/2021-14/02/2021, 
        15/02/2021-21/02/2021, 22/02/2021-28/02/2021" 
        And o sistema possui armazenadas "90, 55, 47, 80" ocorrências com data 
        entre "01/02/2021-07/02/2021, 08/02/2021-14/02/2021, 
        15/02/2021-21/02/2021, 22/02/2021-28/02/2021" e grau de urgência "5"
        And eu estou vendo uma lista com as semanas "01/02/2021-07/02/2021,
        08/02/2021-14/02/2021, 15/02/2021-21/02/2021, 
        22/02/2021-28/02/2021" e as quantidades totais de ocorrência na 
        semana "100, 150, 75, 92"
        When eu filtro por "ocorrências urgentes"
        Then eu vejo uma lista com as semanas "01/02/2021-07/02/2021, 
        08/02/2021-14/02/2021, 15/02/2021-21/02/2021, 
        22/02/2021-28/02/2021" e as quantidades totais de ocorrências na 
        semana "90, 55, 47, 80"


    Scenario: visualização bem sucedida da quantidade de ocorrências por tipo no ano
        Given eu estou no página "dados das ocorrências"
        And a ocorrência "3, Psicológica, 10, 05, 2020, 19:43, 4, Aflitos, Cliníca 
        psicológica Dra. Simone Paraíso - Av. Conselheiro Rosa e Silva, 670 - 
        Recife" está armazenada no sistema
        And o sistema possui "3.517, 1.208, 786, 80" ocorrências com os tipos 
        "Policial, Médica, Psicológica, Erro" e o ano de "2021" na data
        When eu seleciono "quantidade por tipo de ocorrências"
        And eu escolho filtrar pelo ano "2021"
        Then eu vejo uma lista com os tipos "Policial, Médica, Psicológica, Erro" e as 
        quantidades "3.517, 1.208, 786, 80"
        And vejo o ano selecionado como "2021"


    Scenario: visualização mal sucedida da quantidade de ocorrências por tipo no ano por escolher ano no futuro
        Given eu estou no página "dados das ocorrências"
        And estamos no ano de "2021"
        When eu seleciono "quantidade por tipo de ocorrências"
        And eu escolho filtrar pelo ano "2022"
        Then eu vejo uma mensagem de erro
        And vejo o ano selecionado como "2022"


    Scenario: visualização bem sucedida do relatório mensal
        Given eu estou no página "dados das ocorrências"
        And a ocorrência "3, Psicológica, 10, 05, 2020, 19:43, 4, Aflitos, Cliníca 
        psicológica Dra. Simone Paraíso - Av. Conselheiro Rosa e Silva, 670 - 
        Recife" está armazenada no sistema
        And o sistema possui "417" ocorrências com o mês "02"
        And o sistema possui "88, 115, 214" ocorrências com o mês "02" e horários 
        dentro do intervalo "6:00 - 11:59, 12:00 - 16:59, 17:00 - 22:59"
        And o sistema possui "207,146, 60, 4" ocorrências com o mês "02" e tipo 
        "Policial, Médica, Psicológica, Erro"
        When eu seleciono "gerar relatório"
        And eu escolho filtrar pelo mês "02" do ano "2021"
        Then eu vejo as informações como mês, ano, quantidade total de ocorrências, turno de 
        pico e tipo principal com os valores "Fevereiro, 2021, 417, 17 - 22, Policial"


    Scenario: visualização mal sucedida do relatório mensal por escolher um mês no futuro
        Given eu estou no página "dados das ocorrências"
        And estamos no mês "01" do ano "2021"
        When eu seleciono "gerar relatório"
        And eu escolho filtrar pelo mês "02" do ano "2021"
        Then eu vejo uma mensagem de erro


    ############################## Cenários de Serviço ##############################
    Scenario: calculo bem sucedida da quantidade de ocorrências urgentes 
        Given as ocorrências "1, Policial, 09, 02, 2020, 08:37, 4, Espinheiro, 
        Delegacia da Mulher - Praça do Campo Santo - Recife" e "2, Médica, 
        09, 02, 2020, 10:15, 5, Madalena, Hospital da Restauração - Av. Gov. 
        Agamenon Magalhães - Recife" estão armazenadas no sistema
        When o usuário solicita o cálculo da quantidade de ocorrências
        And o usuário seleciona um filtro de ocorrências urgentes
        Then o sistema retorna a quantidade "1"


    Scenario: geração bem sucedida do relatório mensal
        Given a ocorrência "3, Psicológica, 10, 05, 2021, 19:43, 4, Aflitos, Cliníca 
        psicológica Dra. Simone Paraíso - Av. Conselheiro Rosa e Silva, 670 - 
        Recife" está armazenada no sistema
        And o sistema possui "417" ocorrências com o mês "02" e ano "2021"
        And o sistema possui "88, 115, 214" ocorrências com o mês "02", ano "2021" e horários 
        dentro do intervalo "6:00 - 11:59, 12:00 - 16:59, 17:00 - 22:59"
        And o sistema possui "207, 146, 60, 4" ocorrências com o mês "02", ano "2021" e tipo 
        "Policial, Médica, Psicológica, Erro"
        When o usuário solicita o relatório mensal do mês "02" do ano "2021"
        Then o sistema retorna um relatório incluindo informações como mês, ano, 
        quantidade total de ocorrências, turno de pico e tipo principal de 
        ocorrência no período avaliado com os valores "Fevereiro, 2021, 417, 17 - 
        22, Policial"
        And o sistema emite uma mensagem de sucesso


    Scenario: seleção bem sucedida das ocorrências urgentes em uma semana
        Given a ocorrência "3, Psicológica, 10, 05, 2020, 19:43, 4, Aflitos, Cliníca 
        psicológica Dra. Simone Paraíso - Av. Conselheiro Rosa e Silva, 670 - 
        Recife" está armazenada no sistema
        And o sistema possui armazenadas "100, 150, 75, 92" ocorrências com data 
        entre "01/02/2021-07/02/2021, 08/02/2021-14/02/2021, 
        15/02/2021-21/02/2021, 22/02/2021-28/02/2021" 
        And o sistema possui armazenadas "90, 55, 47, 80" ocorrências com data 
        entre "01/02/2021-07/02/2021, 08/02/2021-14/02/2021, 
        15/02/2021-21/02/2021, 22/02/2021-28/02/2021" e grau de urgência "5"
        When o usuário seleciona o filtro por "ocorrências urgentes"
        Then o sistema retorna uma lista com as semanas "01/02/2021-07/02/2021, 
        08/02/2021-14/02/2021, 15/02/2021-21/02/2021, 
        22/02/2021-28/02/2021" e as quantidades totais de ocorrências na 
        semana "90, 55, 47, 80"


    Scenario: exportação bem sucedida do relatório mensal por email
        Given o relatório mensal do mês "02" do ano "2021" contendo informações como mês, 
        quantidade total de ocorrências, turno de pico e tipo principal de 
        ocorrência no período avaliado com os valores "Fevereiro, 417, 17 - 
        22, Policial" está armazenadas no sistema
        And o usuário "Natália Soares" está logado com o email "nss2@cin.ufpe.br"
        When o usuário solicita o envio, por email, do relatório mensal do mês "02" do ano "2021"
        Then o sistema envia um email com o relatório contendo informações como mês, 
        quantidade total de ocorrências, turno de pico e tipo principal de 
        ocorrência no período avaliado com os valores "Fevereiro, 417, 17 - 
        22, Policial" para o email "nss2@cin.ufpe.br"
