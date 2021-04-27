import express = require("express");
import bodyParser = require("body-parser");

import { Aluno } from "../common/institution";
import { CadastroDeAlunos } from "./cadastrodealunos";

import { Institution } from "../common/models";
import { CadastroDeInstitutions } from "./cadastrodeinstitutions";

var taserver = express();

var cadastro: CadastroDeAlunos = new CadastroDeAlunos();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
taserver.use(allowCrossDomain);

taserver.use(bodyParser.json());

taserver.get("/alunos", function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(cadastro.getAlunos()));
});

taserver.post("/aluno", function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno>req.body; //verificar se é mesmo Aluno!
  aluno = cadastro.cadastrar(aluno);
  if (aluno) {
    res.send({ success: "O aluno foi cadastrado com sucesso" });
  } else {
    res.send({ failure: "O aluno não pode ser cadastrado" });
  }
});

taserver.put("/aluno", function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno>req.body;
  aluno = cadastro.atualizar(aluno);
  if (aluno) {
    res.send({ success: "O aluno foi atualizado com sucesso" });
  } else {
    res.send({ failure: "O aluno não pode ser atualizado" });
  }
});

var server = taserver.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

function closeServer(): void {
  server.close();
}

class MockServer {
  institutions: Institution[];
  constructor() {
    this.institutions = [];

    // todo usar cadastro de insititutions
    const inst = new Institution(
      "Hospital das Freiras",
      "hospitaldasfreiras@gmail.com",
      "8199999912",
      "medico",
      "Rua falsa",
      "123",
      "123654-3"
    );
    
    this.institutions.push(inst);
  }

  getInstitutions(): Institution[] {
    return this.institutions;
  }
}

export { server, closeServer, MockServer };
