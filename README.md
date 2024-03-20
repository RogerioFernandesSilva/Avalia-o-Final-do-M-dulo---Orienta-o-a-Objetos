# Avalia-o-Final-do-Modulo Orientacao-a-Objetos

GrowTwitter Aplicação de rede social estilo twitter utilizando os conceitos de POO no Typescript.

Dados de um usuário:
○ Identificador
○ Nome
○ E-mail
○ Username
○ Senha

Dados de um tweet:
○ Identificador
○ Conteúdo
○ Tipo
Informações

Regras do Usuário
Regras para objetos do tipo Usuário:

- Devem ter id e username únicos.
- Podem criar tweets.
- Podem seguir outros usuários.
- Podem curtir e responder (reply) tweets de outros usuários.
- Podem visualizar os tweets dos usuários a quem seguem (estilo feed de tweets).

Regras do Tweet
Regras para objetos do tipo Tweet:

- Devem ter id único.
- Possui um tipo (normal ou reply).
- Devem ser de apenas 1 usuário.
- Podem conter likes e replies.
- Podem ser exibidos conforme regra
  estabelecida (ver próximos slides).

Regras Follower
Regras para a feature Follower:

- Um usuário poderá seguir outro usuário.
- O usuário que segue outro é chamado de Follower.
- Um usuário poderá ser capaz de visualizar os tweets de quem está seguindo.

Regras Like e Reply
Regras para as features Like e Reply:

- Um usuário poderá responder a um Tweet específico com outro Tweet.
- Um tweet reply conterá a propriedade
  tipo setada como “Reply”.
- Um usuário poderá curtir um Tweet específico.
- Um tweet pode ter zero ou vários likes e replies.

Regras exibição de Tweets
Para exibir um tweet, use o console.log( ).
A exibição de um tweet deve ser feita da seguinte forma:
@<username>: <conteúdo>
<likes>
<replies>

Essa aplicação está funcionando com NPM
npm run dev.
