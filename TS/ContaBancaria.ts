//inicio do programa
console.clear();

//criando a classe
class ContaBancaria {
  private titular: string;
  private saldo: number;
  private limite: number;

  constructor(nome: string, saldo: number, limite: number) {
    this.titular = nome;
    this.saldo = saldo;
    this.limite = limite;
  }

  depositar(valor: number): void {
    if (valor + this.saldo < this.limite) {
      return (
        (this.saldo += valor),
        console.log(
          `${
            this.titular
          }, você depositou: ${valor}. Agora seu saldo é: ${this.saldo.toFixed(
            2
          )}\n`
        )
      );
    } else {
      return (
        this.saldo,
        console.log(
          `${this.titular}, Seu saldo chegou no limite, não é posivel depositar mais\n`
        )
      );
    }
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      return (
        (this.saldo -= valor),
        console.log(
          `${this.titular}, sacou R$${valor.toFixed(
            2
          )}. Agorá seu saldo restante é: ${this.saldo.toFixed(2)}\n`
        )
      );
    } else {
      return (
        this.saldo,
        console.log(
          `${this.titular}, seu saldo é menor que o valor que pretendia sacar.\n`
        )
      );
    }
  }

  get_saldo(): void {
    return console.log(`Seu saldo é: R$${this.saldo.toFixed(2)}.\n`);
  }

  set_limite(novoLimite: number): void {
    if (novoLimite > 0) {
      this.limite = novoLimite;
      console.log(
        `${
          this.titular
        }, alterou o limite de sua conta para: ${this.limite.toFixed(2)}\n`
      );
    } else {
      console.log(
        `${
          this.titular
        }, tentou colocar um limite invalido para seu cartão. O limite de ${
          this.titular
        } continuará: ${this.limite.toFixed(2)}\n`
      );
    }
  }
}
const conta01: ContaBancaria = new ContaBancaria("Marcondes", 400, 600);

conta01.get_saldo();
conta01.sacar(Number(prompt("Digite o valor à ser sacado:")));
conta01.depositar(Number(prompt("Digite o valor à ser depositado:")));
conta01.set_limite(Number(prompt("Digite o novo limite:")));
conta01.get_saldo();
