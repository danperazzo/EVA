Feature: Mostrar as instituições de ajuda filtradas
    
    ##As a pessoa que precisa de informações sobre as instituições de ajuda,
    ##I want to visualizar dados sobre as instituições,
    ##filtrar/agrupar por lugar e tipo de instituição,
    ##So that eu possa ir a essas instituições e pedir ajuda, ou fornecer as informações
    ##sobre esses lugares para outras pessoas que estejam precisando ser atendidas.

############################## Service Scenarios ##############################
    Scenario: busca bem sucedida por instituições filtradas por nome e por cidade 
        Given O sistema possui instituicoes 
        When Eu solicito as instituições filtradas por "Recife" e "Psic"
        Then O sistema retorna a instituição com os parâmetros "Psicologo" e "Recife"


############################## GUI Scenario ##############################

    Scenario: visualização bem sucedida da instituição filtrada por nome da instituição
        Given Eu estou na página "institutions"
        When Eu insiro nome da instituição "Medic 1"
        And Clico em "filtrar"
        Then Eu visualizo instituições "Medic 1" 

   

  
   

    


    