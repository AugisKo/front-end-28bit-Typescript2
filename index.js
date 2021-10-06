class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    spausdintiDuomenis() {
        console.log(`Krastine a: ${this.a}`);
        console.log(`Krastine b: ${this.b}`);
        console.log(`Krastine c: ${this.c}`);
        console.log(`Trikampio perimetras: ${this.perimeter}`);
        console.log(`Trikampis ${this.arTrikampisEgzistuoja ? "egzistuoja" : "neegzistuoja"}.`);
        console.log(`Trikampis ${this.arTrikampisStatus ? "yra" : "nera"} statusis.`);
        console.log(`------------------------`);
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get arTrikampisEgzistuoja() {
        return this.a + this.b > this.c &&
            this.b + this.c > this.a &&
            this.c + this.a > this.b;
    }
    get arTrikampisStatus() {
        return Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2) ||
            Math.pow(this.c, 2) + Math.pow(this.b, 2) === Math.pow(this.a, 2) ||
            Math.pow(this.a, 2) + Math.pow(this.c, 2) === Math.pow(this.b, 2);
    }
}
const trikampiai = [];
for (let i = 0; i <= 49; i++) {
    var rndA = Math.floor(Math.random() * 100);
    var rndB = Math.floor(Math.random() * 100);
    var rndC = Math.floor(Math.random() * 100);
    trikampiai.push(new Triangle(rndA, rndB, rndC));
}
console.table(trikampiai);
