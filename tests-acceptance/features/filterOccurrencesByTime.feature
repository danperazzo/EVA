Feature: Visualizar ocorrências por tempo
# NOVOS CENÁRIOS
   ################################# GUI Scenario #################################
    # Scenario: visualização bem sucedida da quantidade de ocorrências por nível de
    # urgênciaem um dia
    #     Given eu estou no página "admin analytics" na aba "Visão Mensal"
    #     And o sistema possui "3" ocorrências armazenadas com a data "2021-02-10"
    #         com os níveis de urgência "3", "4" e "5"
    #     When eu filtro pelo período de "2021-02-10" até "2021-02-10"
    #     Then eu vejo "1,1,1" ocorrências com o nível de urgência "3,4,5"
        
    ############################### Service Scenario ###############################
    Scenario: seleção bem sucedida das ocorrências em um intervalo de datas
        Given O sistema possui "2" ocorrências armazenadas entre as datas "2021-04-24" e "2021-04-30"
        When O usuário solicita as ocorrências entre as datas "2021-04-24" e "2021-04-30"
        Then O sistema retorna uma lista com "2" ocorrências