Feature: Mostrar instituições filtradas para a vítima

Cenário 1: A vítima necessita de atendimento médico por conta de fraturas ósseas e o nome de um hospital em sua cidade junto com seu endereço é informado

Given Eu, uma vítima utilizando o sistema
When Eu termino de registrar uma ocorrência
And Eu registro que moro em “Recife”
And Eu indico que necessito de “atendimento médico por fratura óssea” 
And Eu requisito o sistema para “retornar instituições indicadas”
Then o sistema mostra uma lista com “Hospital da Restauração” com o endereço “Av. Gov. Agamenon Magalhães” situada em “Recife”


Cenário 2: A vítima precisa de ajuda policial e uma delegacia em sua cidade é indicada junto com o nome e telefone de uma advogada

Given Eu, uma vítima utilizando
When Eu termino de registrar uma ocorrência
And Eu requisito do sistema para “retornar instituições indicadas”
And Eu indico que “Tenho risco de violências futuras
Then o sistema mostra uma lista com “Delegacia da Mulher” com o endereço “Praça do Campo Santo” situado em “Recife”
And o nome da advogada “Beatriz Maia dos Anjos” com o número de contato “985187234” 
Cenário 5: A vítima precisa de ajuda psicológica porém não existem psicólogos que residam em sua cidade. O sistema retorna uma mensagem de erro

Cenário 3: A vítima  precisa de ajuda psicológica e o nome de um psicólogo que resida na mesma cidade da vítima é indicado junto com seu número 


Given Eu, uma vítima utilizando o sistema
When Eu termino de registrar uma ocorrência
And Eu indico que necessito de “Atendimento psicológico”
And Eu requisito do sistema para “retornar instituições indicadas”
And Eu informo que moro em “Recife”
Then o sistema mostra uma lista com “Cliníca psicológica Dra. Simone Paraíso” com o endereço “Av. Conselheiro Rosa e Silva, 670” e situada em “Recife”


Cenário 4: A vítima precisa de ajuda médica porém não existe um hospital para sua necessidade na sua cidade. O sistema retornará uma mensagem de erro.

Given Eu, uma vítima utilizando o sistema
When Eu termino de registrar uma ocorrência
And eu indico que estou situada em “Paulista”
And Eu indico que necessito de “atendimento médico para queimaduras”
And Eu requisito do sistema para “retornar instituições indicadas”
And o sistema não possui hospitais em “Paulista”
Then o sistema retorna uma mensagem de erro
And informa o “Hospital da Restauração” situado em “Recife”
And informa a distancia de "Recife" para "Paulista"


Cenário 5: A vítima precisa de ajuda psicológica porém não existem psicólogos que residam em sua cidade. O sistema retorna uma mensagem de erro

    Given Eu, uma vítima utilizando o sistema
    When Eu registro meu nome como "Sandra"
    And meu telefone como "99878718"    
    And eu indico que estou situada em “Paulista”
    And Eu indico que necessito de “Atendimento psicológico”
    And Eu requisito do sistema para “retornar instituições indicadas”
    And o sistema não possui psicólogos em “Paulista”
    Then o sistema retorna uma mensagem de erro


Cenário 6: A vítima precisa de ajuda psicológica e ajuda médica simultaneamente. O sistema retorna o nome de um psicólogo e um nome de um hospital.

    Given Eu, uma vítima utilizando o sistema
    When Eu registro meu nome como "Sandra"
    And meu telefone como "99878718"
    And coloco meu nome "Manuela"
    And Eu indico que necessito de “Atendimento psicológico”
    And Eu indico que necessito de “atendimento médico por fratura óssea” 
    And Eu requisito do sistema para “Retornar instituições indicadas”
    And Eu informo que moro em “Recife”
    Then o sistema mostra uma lista com “Cliníca psicológica Dra. Simone Paraíso” com o endereço “Av. Conselheiro Rosa e Silva, 670” e situada em “Recife”
    And o sistema mostra uma lista com “Hospital da Restauração” com o endereço “Av. Gov. Agamenon Magalhães” situada em “Recife”
