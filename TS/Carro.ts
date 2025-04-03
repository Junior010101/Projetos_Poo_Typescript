//inicio do programa.
console.clear();

//criando a classe carro.
class Carro {
    //criando atributos.
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
    combustivel: number;
    ligado: boolean;
    velocidade: number;

    //definindo atributos.
    constructor(marca: string, modelo: string, ano: number, cor: string, combustivel: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.combustivel = combustivel;
        this.ligado = false;
        this.velocidade = 0;
    }

    //criando o metodo ligar.
    ligar(): void {
        if (!this.ligado) {
            if (this.combustivel > 0) {
                this.ligado = true;
                console.log(`\u001b[33mVocê ligou seu ${this.marca} ${this.modelo}.`);
            } else {
                console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, está sem combustivel.`);
            }
        } else {
            console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, já está ligado.`);
        }
    }

    //criando o metodo desligar.
    desligar(): void {
        if (this.ligado) {
            if (this.velocidade <= 0) {
                this.ligado = false;
                console.log(`\u001b[33mVocê desligou seu ${this.marca} ${this.modelo}.`);
            } else {
                console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, está em movimento.`);
            }
        } else {
            console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, já está desligado.`);
        }
    }

    //criando o metodo acelerar.
    acelerar(): void {
        if (this.ligado) {
            if (this.combustivel > 0) {
                this.combustivel -= 20;
                console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, acelerou para ${this.velocidade + 10} km/h.`);
                this.velocidade += 10;
            } else {
                console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, está sem combustivel.`);
            }
        } else {
            console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, está desligado.`);
        }
    }

    // Método para frear o carro.
    frear(): void {
        if (this.ligado) {
            if (this.velocidade > 0) {
                console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, reduziu para ${this.velocidade - 10} km/h.`);
                this.velocidade -= 10;
            } else {
                console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, está parado.`);
            }
        } else {
            console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, está desligado.`);
        }
    }

    // Método para abastecer o carro.
    abastecer(quantidade: number): void {
        if (!this.ligado){
            if (this.combustivel !> 100) {
                this.combustivel += quantidade;
                console.log(`\u001b[33mVocê abasteceu ${quantidade} litros, do seu ${this.marca} ${this.modelo}.`);
            } else {
                console.log(`\u001b[33mO tanque do seu ${this.marca} ${this.modelo}, já está cheio.`);
            }
        } else {
            console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, está ligado.`);
        }
    }

    // Método para buzinar.
    buzinar(): void {
        if (this.ligado) {
            console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, buzinou`);
        } else {
            console.log(`\u001b[33mSeu ${this.marca} ${this.modelo}, está desligado.`);
        }
    }

    // Metodo para ver o status.
    status(): void {
        const Array: string[] = [
            `\n \u001b[32mMarca: \u001b[37m${this.marca}\n`,
            `\u001b[32mModelo: \u001b[37m${this.modelo}\n`,
            `\u001b[32mAno: \u001b[37m${this.ano}\n`,
            `\u001b[32mCor: \u001b[37m${this.cor}\n`,
            `\u001b[32mCombustivel: \u001b[37m${this.combustivel}\n`,
            `\u001b[32mVelocidade: \u001b[37m${this.velocidade}\n`,
            `\u001b[32mLigado: \u001b[37m${this.ligado}\n`
        ]
        console.log(Array[0],Array[1],Array[2],Array[3],Array[4],Array[5],Array[6]);
    }
}

// Instanciando carro.
const Carro01 = new Carro("Fiat", "Uno", 2022, "Prata", 50);

Carro01.status();
Carro01.ligar();
Carro01.acelerar();
Carro01.status();
Carro01.frear();
Carro01.status();
Carro01.desligar();
Carro01.abastecer(30);
Carro01.status();
Carro01.ligar();
Carro01.buzinar();
Carro01.desligar();
Carro01.status();
