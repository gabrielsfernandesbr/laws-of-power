const leis_do_poder = [
    {
        lei: "Nunca ofusque o mestre.",
        explicacao: "Não faça seu superior parecer menos inteligente ou capaz. Isso pode gerar ressentimento e tornar você um alvo de ataques. Sempre evite humilhar ou ofuscar aqueles acima de você."
    },
    {
        lei: "Nunca confie demais nos amigos, aprenda a usar os inimigos.",
        explicacao: "Amigos podem trair, pois têm interesses próprios. Já os inimigos, quando bem manipulados, podem ser aliados poderosos, pois possuem motivos para se aproximar e mudar sua lealdade."
    },
    {
        lei: "Oculte suas intenções.",
        explicacao: "Nunca revele seus verdadeiros planos. Manter os outros na incerteza sobre suas intenções dá a você vantagem estratégica."
    },
    {
        lei: "Diga sempre menos do que o necessário.",
        explicacao: "Falar demais pode dar informações valiosas para os outros, o que pode ser usado contra você. Quanto menos você falar, mais poderoso parecerá."
    },
    {
        lei: "Tanto depende da reputação – defenda-a com a vida.",
        explicacao: "Sua reputação é um ativo valioso e vulnerável. Qualquer ataque a ela pode ser devastador, então proteja-a com todas as forças."
    },
    {
        lei: "Chame a atenção a todo custo.",
        explicacao: "Ser visível é essencial para alcançar poder. Quanto mais você for notado, mais difícil será de ignorar, e você atrairá as oportunidades para si."
    },
    {
        lei: "Faça os outros trabalharem por você, mas sempre leve o crédito.",
        explicacao: "Use as habilidades e os esforços dos outros a seu favor, mas seja você quem recebe a recompensa. Isso solidifica sua posição sem que precise trabalhar tanto."
    },
    {
        lei: "Faça as pessoas virem até você – use uma isca, se necessário.",
        explicacao: "Nunca corra atrás das pessoas. Se você mantiver uma posição forte e estratégica, serão os outros que virão até você."
    },
    {
        lei: "Vença por suas ações, nunca por argumentos.",
        explicacao: "Disputas verbais são muitas vezes improdutivas. A verdadeira vitória está em alcançar seus objetivos por meio de ações concretas."
    },
    {
        lei: "Contágio: evite os infelizes e os azarados.",
        explicacao: "A negatividade é contagiosa. Evite se associar a pessoas que constantemente falham ou que têm uma visão pessimista, pois isso pode prejudicar seu progresso."
    },
    {
        lei: "Aprenda a manter as pessoas dependentes de você.",
        explicacao: "Para garantir que as pessoas não possam fazer nada sem você, crie situações onde elas precisem de sua ajuda e orientação."
    },
    {
        lei: "Use a honestidade e a generosidade seletivas para desarmar sua vítima.",
        explicacao: "A honestidade e a generosidade, quando usadas de maneira estratégica, podem enganar e desarmar aqueles que poderiam ser seus inimigos."
    },
    {
        lei: "Quando pedir ajuda, apela para os interesses das pessoas.",
        explicacao: "As pessoas estão mais dispostas a ajudar quando vêem algo em troca para si. Apelar para o que elas desejam pode fazer com que se envolvam."
    },
    {
        lei: "Seja ousado, mas nunca ultrapasse o limite da prudência.",
        explicacao: "Ousadia pode atrair poder, mas é importante reconhecer os limites. Nunca tome riscos imprudentes que possam comprometer sua posição."
    },
    {
        lei: "Entre em ação com grandeza.",
        explicacao: "Sempre que agir, faça-o com grandeza. Mostre confiança e determinação, para que os outros reconheçam sua força e capacidade."
    },
    {
        lei: "Evite a infecção dos perdedores e fracassados.",
        explicacao: "A companhia de pessoas que falharam repetidamente pode infectá-lo com sua energia negativa. Afaste-se de indivíduos que não têm sucesso ou visão."
    },
    {
        lei: "Domine a arte da manipulação.",
        explicacao: "A manipulação, quando feita com habilidade, é uma ferramenta poderosa para alcançar seus objetivos. Aprenda a influenciar os outros sem que percebam."
    },
    {
        lei: "Faça os outros se sentirem superiores e você será o verdadeiro líder.",
        explicacao: "Elogiar os outros de forma genuína e fazer com que se sintam importantes faz com que as pessoas confiem e o sigam mais facilmente."
    },
    {
        lei: "Não se deixe envolver em um jogo de rivalidade.",
        explicacao: "Engajar-se em disputas desnecessárias pode consumir sua energia. Mantenha o foco em seus próprios objetivos, sem se distrair com a rivalidade."
    },
    {
        lei: "Use a distração para vencer a guerra.",
        explicacao: "Desviar a atenção dos outros pode ser uma técnica eficaz. Quando as pessoas estão distraídas, você pode agir sem ser detectado."
    },
    {
        lei: "Controle as opções: faça com que as pessoas escolham entre o que você deseja.",
        explicacao: "Quando você controla as opções disponíveis para os outros, pode direcioná-los para as escolhas que mais lhe convêm."
    },
    {
        lei: "Conquiste com ações, nunca com argumentos.",
        explicacao: "Falar muito pode ser visto como insegurança ou fraqueza. Conquiste as pessoas por meio de suas ações e resultados, não por palavras."
    },
    {
        lei: "Transforme a fraqueza em força.",
        explicacao: "Use suas fraquezas e limitações de forma estratégica. Ao mostrar que você superou desafios, você se torna mais admirado e respeitado."
    },
    {
        lei: "Use a superioridade do inimigo a seu favor.",
        explicacao: "Se um inimigo for mais forte ou mais influente, use essa superioridade para seu benefício, manipulando a situação a seu favor."
    },
    {
        lei: "Seja imprevisível para criar uma aura de poder.",
        explicacao: "Ser imprevisível gera respeito e medo. Quando ninguém sabe o que você fará a seguir, as pessoas tendem a hesitar antes de agir contra você."
    },
    {
        lei: "Seja o espelho da vaidade e da fraqueza dos outros.",
        explicacao: "A melhor maneira de manipular alguém é refletir as suas fraquezas ou desejos. Mostre aos outros o que eles querem ver para ganhar vantagem."
    },
    {
        lei: "Enfrente os problemas de frente e mostre seu poder.",
        explicacao: "Não fuja de problemas ou desafios. Enfrente-os de cabeça erguida e mostre que você tem poder para superá-los."
    },
    {
        lei: "Deixe que os outros façam o trabalho sujo.",
        explicacao: "Quando possível, faça os outros realizarem tarefas difíceis ou impopulares, enquanto você mantém sua imagem intacta e sua energia focada em objetivos maiores."
    },
    {
        lei: "Torne-se indispensável para os outros.",
        explicacao: "Crie uma posição onde os outros não possam funcionar sem você. Isso cria uma dependência que fortalece sua posição e influência."
    },
    {
        lei: "Mantenha a distância estratégica de seus inimigos.",
        explicacao: "Fique distante de pessoas que são hostis ou prejudiciais a você. Isso dá tempo para você se preparar e evitar confrontos desnecessários."
    },
    {
        lei: "Faça as outras pessoas acreditarem que você é um mestre da persuasão.",
        explicacao: "Se as pessoas acreditarem que você é uma pessoa persuasiva, elas serão mais propensas a seguir suas orientações e agir conforme seu desejo."
    },
    {
        lei: "Deixe os outros correrem atrás de você.",
        explicacao: "Sempre faça com que as pessoas venham até você, ao invés de ir atrás delas. Isso coloca você em uma posição de controle."
    },
    {
        lei: "Aja com frieza e calcule cada movimento.",
        explicacao: "Tomar decisões impetuosas pode ser arriscado. Mantenha a calma e faça escolhas cuidadosas para garantir o melhor resultado."
    },
    {
        lei: "Diga sempre a verdade, mas apenas o suficiente.",
        explicacao: "A verdade pode ser uma arma poderosa, mas revelá-la em excesso pode ser prejudicial. Diga apenas o necessário para alcançar seu objetivo."
    },
    {
        lei: "Mantenha o foco naquilo que você pode controlar.",
        explicacao: "Concentre-se no que você pode controlar e evite desperdiçar energia com situações ou pessoas que estão fora do seu alcance."
    },
    {
        lei: "Entre nas mentes das pessoas sem que elas percebam.",
        explicacao: "Usar psicologia para influenciar as pessoas sem que elas percebam pode ser uma forma eficaz de alcançar seus objetivos de maneira estratégica."
    },
    {
        lei: "Cuidado com o poder das palavras – escolha-as com sabedoria.",
        explicacao: "As palavras têm poder, e sua escolha pode criar alianças ou destruição. Use-as sabiamente para evitar mal-entendidos ou resistência."
    },
    {
        lei: "Imponha respeito com ações, não com palavras.",
        explicacao: "O respeito se conquista com atitudes, não com discursos. Seja firme e confiável nas suas ações."
    },
    {
        lei: "Alimente os desejos dos outros para se beneficiar.",
        explicacao: "Alimente os desejos das pessoas e você terá o controle. Se você atender suas necessidades, as pessoas se tornarão leais a você."
    },
    {
        lei: "Não seja previsível – sempre mantenha os outros adivinhando.",
        explicacao: "Ser previsível dá vantagem aos outros. Se você manter os outros adivinhando, ficará sempre um passo à frente."
    },
    {
        lei: "Ganhe sem lutar: as batalhas psicológicas podem ser mais eficazes.",
        explicacao: "Às vezes, vencer um inimigo não exige confrontos diretos. Manipular a mente de seus adversários pode ser mais eficaz."
    },
    {
        lei: "Transforme qualquer fraqueza em uma vantagem estratégica.",
        explicacao: "O que parece ser uma fraqueza pode, na verdade, ser uma oportunidade estratégica se for aproveitado de maneira inteligente."
    },
    {
        lei: "Nunca ponha tudo em risco em uma só carta.",
        explicacao: "Evite tomar grandes riscos que poderiam comprometer tudo de uma vez. Sempre tenha um plano de contingência."
    },
    {
        lei: "Planeje tudo minuciosamente antes de agir.",
        explicacao: "O planejamento é essencial. Antes de agir, pense em todas as possibilidades e prepare-se para qualquer resultado."
    },
    {
        lei: "Nunca se apegue ao passado, olhe sempre para o futuro.",
        explicacao: "O passado não deve prender você. Sempre siga em frente e concentre-se no que pode ser alcançado no futuro."
    },
    {
        lei: "Mostre seu poder apenas quando necessário, mantenha um perfil baixo.",
        explicacao: "Exibir seu poder sem necessidade pode ser prejudicial. Use-o estrategicamente e só quando for essencial."
    },
    {
        lei: "Use as emoções a seu favor.",
        explicacao: "Entenda as emoções das pessoas ao seu redor e use-as para manipulá-las ou persuadi-las a agir conforme seus desejos."
    },
    {
        lei: "Observe e aprenda com os grandes mestres da manipulação.",
        explicacao: "Estude e aprenda com os maiores manipuladores da história para aprimorar sua própria habilidade de influenciar os outros."
    },
    {
        lei: "Nunca revele suas verdadeiras intenções.",
        explicacao: "Manter suas intenções ocultas garante que você sempre tenha a vantagem, pois ninguém saberá como você agirá a seguir."
    },
    {
        lei: "Desarme seus inimigos com generosidade calculada.",
        explicacao: "Uma generosidade estratégica pode desarmar seus inimigos e torná-los vulneráveis a suas manipulações."
    }
];

function leis_randomicas() {
    const indice = Math.floor(Math.random() * leis_do_poder.length);
    const lei_atual = leis_do_poder[indice];
    
    document.getElementById("lei-do-poder").innerHTML = `<strong>${lei_atual.lei}</strong>`;
    document.getElementById("explicacao-lei").innerHTML = `<em>${lei_atual.explicacao}</em>`;
}

leis_randomicas();
