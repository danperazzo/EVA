Feature: Mostrar as instituições de ajuda 
    
    As a pessoa que precisa de informações sobre as instituições de ajuda,
    I want to visualizar dados sobre as instituições,
    filtrar/agrupar por lugar e tipo de instituição,
    So that eu possa ir a essas instituições e pedir ajuda, ou fornecer as informações
    sobre esses lugares para outras pessoas que estejam precisando ser atendidas.

############################## Service Scenarios ##############################
    Scenario: busca bem sucedida por instituições filtradas por tipo e por cidade  
        Given O sistema possui as instituições "Psicologo 1, psi@data.com, 312345-1223,
        Psi, Recife, Rua das Pernambucanas, 407" e "Psicologo 2, psi2@data.com, 
        31312122345-1223, Psi, Olinda, Galeria Cordeiro - Praça Doze de Março, 23"
        When o usuário solicita as instituições filtradas por cidade e por tipo
        And o usuário seleciona o filtro "Recife" e "Psi"
        Then o sistema retorna a instituição "Psicologo 1, psi@data.com, 312345-1223,
        Psi, Recife, Rua das Pernambucanas, 407"




    ############################## GUI Scenarios  ##############################

    Scenario: visualização bem sucedida da instituição filtrada por tipo de instituição e por cidade
        Given eu estou no página "instituições"
        And apenas as instituições "Hospital das Graças, hospitalgracas@gmail.com, 8133333331,
        Hospital, Recife, Rua das Graças, 12, 50610-220" e "Delegacia da Mulher, dpmul@gmail.com, 
        8133335555, Delegacia, Recife, Rua da Independência, 36, 12345-55" e 
        "Delegacia da Mulher, delegaciajoaopessoa@gmail.com, 8333335555, Delegacia, 
        João Pessoa, Av. Dom Pedro II, 853, 58013-420" estão armazenadas no sistema 
        When eu seleciono "filtrar"
        And eu escolho filtrar pela cidade "Recife" e pelo tipo "Delegacia"
        Then eu vejo uma lista com as instituições de nome, email, telefone, tipo, 
        cidade e endereço "Delegacia da Mulher, dpmul@gmail.com, 
        8133335555, Delegacia, Recife, Rua da Independência, 36, 12345-55"

    Scenario: visualização bem sucedida da instituição filtrada por tipo
        Given eu estou no página "inicial"
        And apenas as instituições "Hospital das Graças, hospitalgracas@gmail.com, 8133333331,
        Hospital, Recife, Rua das Graças, 12, 50610-220" e "Delegacia da Mulher, dpmul@gmail.com, 
        8133335555, Delegacia, Recife, Rua da Independência, 36, 12345-55" e 
        "Delegacia da Mulher, delegaciajoaopessoa@gmail.com, 8333335555, Delegacia, 
        João Pessoa, Av. Dom Pedro II, 853, 58013-420" estão armazenadas no sistema 
        When eu seleciono "buscar instituições"
        And eu escolho filtrar pelo tipo "Delegacia"
        Then eu vejo uma lista com as instituições de nome, email, telefone, tipo, 
        cidade e endereço "Delegacia da Mulher, dpmul@gmail.com, 
        8133335555, Delegacia, Recife, Rua da Independência, 36, 12345-55" e 
        "Delegacia da Mulher, delegaciajoaopessoa@gmail.com, 8333335555, Delegacia, 
        João Pessoa, Av. Dom Pedro II, 853, 58013-420"

  
   

    


    