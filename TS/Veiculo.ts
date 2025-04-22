class Veiculo {
  public modelo: string;
  public ano: number;

  constructor(modelo: string, ano: number) {
    this.modelo = modelo;
    this.ano = ano;
  }
}

class Carro extends Veiculo {
  constructor(modelo: string, ano: number) {
    super(modelo, ano);
  }
}

class Moto extends Veiculo {
  constructor(modelo: string, ano: number) {
    super(modelo, ano);
  }
}
