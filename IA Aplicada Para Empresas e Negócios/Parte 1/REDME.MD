Anotações:

Estudo de caso 1 - Otimizando Fluxos de Armazém:

Você tem um determinado cliente que é uma loja on line e ela vende vários produtos.
E quando é feito um novo pedido o cliente vai lá no site faz um pedido você precisa fazer a separação automática dos produtos que o cliente pediu. 

1. Definição do ambiente
 - Definição dos Estados ------------------- Definição do estado atual do robo em números ex. localização A = 0, B =1, C = 2 etc...

 - Definição das Ações --------------------- Definição das possíveis ações do robo ex. o estado 0 só pode ir para o estado 1, o estabo 1 pode ir para o 0 ou 2 ou 3 etc...
                                             S(estado) = {0,1,2,3,4,5,6,7,8,9,10,11}
                                             A(ação) = {0,1,2,3,4,5,6,7,8,9,10,11}

 - Definição das Recompensas --------------- Definição das recompesas até chegar ao local que o robo terá a reconpensa maior ex: S   0|1|2|3|4|5|6|7|8|9|10|11
                                                                                                                                   0|0,1,0,0,0,0,0,0,0,0, 0, 0
                                                                                                                                   1|1,0,1,0,0,1,0,0,0,0, 0, 0
                                             OBS: A reconpensa para o valor de destino deve ser maior que o comum (1)!

2. Descrição das apredizagens
 - O que é aprendizagem por reforço     CONCEITO Aprendizagem por Reforço = O robo (agente) aprende conforme suas recompensas, nesse processo o agente aprenderá explorando
                                                 ambiente.
                                                 Aprendizagem Supervisionada = Apredizagem que exige um Banco de Dados, onde o algoritmo processa e retorna o valor.

 - A equação de Bellman                 CONCEITO s-ESTADO
                                                 a-AÇÃO
                                                 R-RECOMPENSA
                                                 y-DESCONTO
                                                 V=VALORES

                                                 Por Exemplo o agente ao finalizar a rota ele precisa traçar a rota que ele fez com os valores os valores pode ser 1, porém se o valor for 1, se o agente decidir iniciar por outro local ele não saberá qual lado deve seguir por conta de ambos estarem com 1.

                                                 Para resolver isso deve se dar valores progressivos para cada bloco da rota que o agente traçou para que ele saiba para onde ele deve serguir neste caso o valor que representa uma fórmula.

                                                 V(s) = max(R(s,a)+yV(s'))
                                                         ª

                                                        V(s) = Valor para estar em um determinado estado

                                                        max = Máximo de uma ação
                                                         ª

                                                        R(s,a) = Tomando uma ação a, eu vou para um estado s e vou ganhar uma recomempensa R Por ex. O agente está no bloco A e  decide se vai para o estado B ou C

                                                        yV(s') = Somátorio como V que é o valor do estado seguinte, s' representa o estado seguinte há também a multiplicação pelo gama que reprenta o y no caso o estado atual é 1 multiplicado pelo gama y = 0.9 o resultado será 0.9 ou seja próximo estado será o valor de 0.9, se multiplicar novamente pelo fator gama o valor será estado seguinte será 0.81 e assim por diante.
                                                        
 - O "Plano"                            CONCEITO É o que determina qual o caminho ou a té mesmo o termo plano para o agente seguir, neste caso o "plano" se da em base os valores
                                                 maiores que o estado atual por ex. Se eu estou no estado 0.81 eu vou para o estado 0.9, ou seja funciona como se fosse uma flecha que indica para qual lado o agente deve ir.

 - Markov Decision Processes (MDP)      CONCEITO Um processo estocástico possui a propriedade Markov se a distribuição de probabilidade condicional de estados futuros do processo
                                                 depender apenas do estado presente, não da sequência de eventos que o precedeu ou eventos passados. Um processo com essa propriedade é chamado de processo de Markov.

                                                 MDP (Processo de DEcisão de Markov) fornecem uma estrutura matemática para modelar a tomada de decisões em situações onde os resultados são parcialmente aleatórios e parcialmente sob o controle de um tomador de decisão.

                                                 Busca Determinística quando o agente tende a ter uma decisão de ir para cima com 100% de convicção exemplo.

                                                 A fórmula abaixo reprenta a busca Determinística
                                                 V(s) = max(R(s,a)+yV(s'))
                                                         ª

                                                 Busca Não-Determinística quando o agente tende a ter uma decisão de ir pra cima com 80% de convicção, e tem as opções de ir para ambos os lados com 10% exemplo, ou seja tem um fator randômico.
                                                 Randômica significa algo que é aleatório, ou seja, que depende de situações incertas e não de um evento específico

                                                 ∑ = SOMATÓRIO
                                                 P = PROBABILIDADE
                                                 A fórmula abaixo reprenta a busca não Determinística /*0.8*V(s'1) + 0.1*V(s'1) + 0.1*V(s'1)*/
                                                 V(s) = max(R(s,a)+y ∑ P(s,a,s')V(S'))
                                                         ª          's

 - Política x Plano                     CONCEITO Política irá tratar o ambiente e os valores de cada bloco com descontos diferentes, no caso do plano é tratado apenas com uma porcentagem fixa de desconto.
                                                
 - Adição de penalidade                 CONCEITO Criação de penalidades para o agent, isto serve para que o agende não perca tempo em um local, quanto maior a penalidade mais o agente se arriscará e não ficará empacado no bloco.

 - Q-Learning - Intuição                CONCEITO O "Q" reprenta a qualidade, "Learning" reprenta apredizado.
                                                 
                                                 O "Q" vai medir qual é a ação mais lucrativa, como se fosse uma métrica que diz qual é a melhor ação

                                                 Fórmula Q(s,a) = R(s,a)+y ∑ (P(s,a,s') max Q(s'a'))
                                                                           s'            a'
                                                                REESCREVENDO A FÓRMULA
                                                            Q(s,a) = R(s,a) + y max Q(s',a')
                                                                                 ª

 - Diferença Temporal                   CONCEITO TD(a,s) = R(s,a) + y max Q(s',a')-Qt-1(s,a)
                                                                       ª
                                                           REESCREVENDO A FÓRMULA
                                           Qt(s,a) = Qt-1(s,a) + α(R(s,a) + y max Q(s',a')-Qt-1(s,a))

3. Implementação em IA (Python)
 - Construção da Solução de IA
 - Entrando em Produção
 - Melhorias da Solução de IA

4. Está sendo usado o Anaconda com a IDE do Spyder, após foi criado um ambiente chamado "grid_world" e ativado este ambiente via prompt 
   do Anaconda comando usado "activate grid_world".
   Também é necessário realizar o direcionamento do repositório que a IDE Spyder vai utilizar neste caso o repositório de "https://ai.berkeley.edu/reinforcement.html" adaptado para o Python 3.

Arquivos que você vai editar:

        valueIterationAgents.py: um agente de iteração de valor para resolver MDPs conhecidos.
        qlearningAgents.py: agentes Q-learning para o Gridworld, Crawler e Pacman.
        analysis.py: um arquivo para preencher com suas respostas às perguntas deste projeto.

Arquivos que você deve ler, mas NÃO editar:

        mdp.py Define métodos gerais de MDPs.
        learningAgents.py Define as classes base ValueEstimationAgent e QLearningAgent, que seus agentes irão estender.
        util.py Utilitários, incluindo util.Counter, que é particularmente útil para Q-learners.
        gridworld.py A implementação do Gridworld.
        featureExtractors.py Classes para extrair recursos em pares (estado, ação). Usado para o agente Q-learning aproximado (em qlearningAgents.py).

Arquivos que você pode ignorar:

        environment.py: Classe abstrata para ambientes gerais de aprendizagem por reforço. Usado por gridworld.py.
        graphicsGridworldDisplay.py: Exibição gráfica do Gridworld.
        graphicsUtils.py: utilitários gráficos.
        textGridworldDisplay.py: Plug-in para a interface de texto Gridworld.
        crawler.py: O código do crawler e o artefatos de teste. Você vai executá-lo, mas não vai editá-lo.
        graphicsCrawlerDisplay.py: GUI para o robô rastreador.
        autograder.py: autograder do projeto.
        testParser.py: Parser de arquivos de solução e testes do autograder
        testClasses.py: Classes de teste gerais de autocorreção (autograding)
        test_cases/: diretório contendo os casos de teste para cada questão
        reforcementTestClasses.py: Classes de teste de autograding específicas do Projeto 3