Feature: Visualizar ocorrências por tempo
# NOVOS CENÁRIOS
        
    ###################################### Cenário de Serviço ######################################
    Scenario: seleção bem sucedida das ocorrências em um intervalo de datas
        Given O sistema possui "2" ocorrências armazenadas entre as datas "2021-04-24" e "2021-04-30"
        And O sistema possui armazenada "1" ocorrências na data "2021-05-02"
        When O usuário solicita as ocorrências entre as datas "2021-04-24" e "2021-04-30"
        Then O sistema retorna uma lista com "2" ocorrências
    
    ######################################## Cenário de GUI ########################################
    Scenario: visualização bem sucedida da quantidade de ocorrências por tipo em um ano
        Given O usuário está na página "admin/analytics" 
        And O usuário consegue ver "-,-,-" ocorrências para os tipos "needsMedicalAssistance,needsPsychologicalAssistance,needsSecurityAssistance"
        And O sistema possui "1,1,1" ocorrências para os tipos "needsMedicalAssistance,needsPsychologicalAssistance,needsSecurityAssistance" armazenadas com o ano "2021" 
        When O usuário filtra pelo ano de "2021"
        Then O usuário consegue ver "1,1,1" ocorrências para os tipos "needsMedicalAssistance,needsPsychologicalAssistance,needsSecurityAssistance"