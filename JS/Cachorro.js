"use strict";
console.clear();
class Cachorro {
    nome;
    raca;
    comida;
    acordado;
    feliz;
    energia;
    constructor(nome, raca, comida, acordado, feliz) {
        this.nome = nome;
        this.comida = comida;
        this.acordado = acordado;
        this.feliz = feliz;
        this.energia = 10;
        this.raca = "";
        if (raca == "vira-lata") {
            this.raca = `\u001b[33m \u{1F415}`;
        }
        else if (raca == "poodle") {
            this.raca = `\u001b[34m \u{1F429}`;
        }
    }
    comer() {
        if (this.acordado) {
            if (this.comida > 0) {
                this.comida -= 1;
                console.log(`${this.raca} ${this.nome} comeu!, quantidade de comida restante é ${this.comida}kg.\u001b[37m`);
            }
            else {
                console.log(`${this.raca} ${this.nome} não tem comida para comer.\u001b[37m`);
            }
        }
        else {
            console.log(`${this.raca} ${this.nome} está dormindo.\u001b[37m`);
        }
    }
    dormir() {
        if (this.acordado) {
            this.acordado = false;
            console.log(`${this.raca} ${this.nome} foi dormir.\u001b[37m`);
        }
        else {
            console.log(`${this.raca} ${this.nome} já está dormindo.\u001b[37m`);
        }
    }
    acordar() {
        if (!this.acordado) {
            this.acordado = true;
            console.log(`${this.raca} ${this.nome} acordou.\u001b[37m`);
        }
        else {
            console.log(`${this.raca} ${this.nome} já está acordado.\u001b[37m`);
        }
    }
    brincar() {
        if (this.acordado) {
            if (this.energia > 0) {
                this.feliz = true;
                console.log(`${this.raca} Você brincou com ${this.nome}.\u001b[37m`);
            }
            else {
                console.log(`${this.raca} ${this.nome} está cansado.\u001b[37m`);
            }
        }
        else {
            console.log(`${this.raca} ${this.nome} está dormindo.\u001b[37m`);
        }
    }
    ignorar() {
        if (this.acordado) {
            this.feliz = false;
            console.log(`${this.raca} ${this.nome} ficou triste.\u001b[37m`);
        }
        else {
            console.log(`${this.raca} ${this.nome} está dormindo.\u001b[37m`);
        }
    }
    latir() {
        if (this.acordado) {
            console.log(`${this.raca} ${this.nome} está latindo!!.\u001b[37m`);
        }
        else {
            console.log(`${this.raca} ${this.nome} está dormindo.\u001b[37m`);
        }
    }
}
const cachorro1 = new Cachorro("Caramelo", "vira-lata", 10, false, true);
const cachorro2 = new Cachorro("Poodle", "poodle", 0, true, false);
cachorro1.comer();
cachorro1.dormir();
cachorro1.acordar();
cachorro1.brincar();
cachorro1.ignorar();
cachorro1.latir();
console.log();
cachorro2.comer();
cachorro2.dormir();
cachorro2.acordar();
cachorro2.brincar();
cachorro2.ignorar();
cachorro2.latir();
