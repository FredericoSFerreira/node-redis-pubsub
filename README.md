# node-redis-pubsub

Exemplos simples de utilização do mecanismo de pubsub do redis usando nodeJS.

```sh
npm install
npm start dev
```

Ligar o Worker subscriber

```sh
node subscriber.js
```

Chamar o endpoint para publicar a mensagem

```sh
curl --location 'localhost:3000/publish/chat' \
--header 'Content-Type: application/json' \
--data '{
    "message": "Olá Mundo."
}'

```