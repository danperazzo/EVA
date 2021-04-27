import { Institution } from "../common/models";

export class CadastroDeInstitutions {
  institutions: Institution[] = [];

  cadastrar(institution: Institution): Institution {
    var result = null;
    if (this.instituicaoNaoCadastrada(institution.name)) {
      result = new Institution(
        "Hospital das Freiras",
        "hospitaldasfreiras@gmail.com",
        "8199999912",
        "medico",
        "Rua falsa",
        "123",
        "123654-3"
      );
      result.copyFrom(institution);
      this.institutions.push(result);
    }
    return result;
  }

  instituicaoNaoCadastrada(name: string): boolean {
    return !this.institutions.find((a) => a.name == name);
  }

  atualizar(institution: Institution): Institution {
    var result: Institution = this.institutions.find(
      (inst) => inst.name == institution.name
    );
    if (result) result.copyFrom(institution);
    return result;
  }

  getAlunos(): Institution[] {
    return this.institutions;
  }
}
