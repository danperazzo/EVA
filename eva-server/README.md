# eva-server

## Rodando

1. Faça uma cópia do `.env.example` e reonomeie ela para `.env`

2. Rode `yarn`, depois `yarn dev`.

## Rotas

### GET /institutions

Enviar um json pelo body da request.


Atributo | Tipo
--- | ---
name | string
email | string
phoneNumber | string
type | `hospital` \| `police`
address | string