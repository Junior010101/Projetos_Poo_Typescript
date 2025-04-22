//inicio do programa
console.clear();

//criando a classe
class Produto {
  private nome: string;
  private preco: number;
  public quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  set_produto(): number {
    let nome: string = String(prompt("Digite um novo nome para o produto:"));
    let preco: number = Number(prompt("Digite um novo preço para o produto:"));

    return (this.nome = nome), (this.preco = preco);
  }

  get_produto(): void {
    return console.log(
      `Nome: ${this.nome}\nPreço: ${this.preco}\nQuantidade: ${this.quantidade}\n`
    );
  }
}

const produto01: Produto = new Produto("arroz", 20, 5);

produto01.get_produto();
produto01.set_produto();
produto01.get_produto();
