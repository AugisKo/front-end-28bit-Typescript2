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
        if (this.arTrikampisEgzistuoja) {
            console.log("trikampis egzistuoja!");
        }
        else {
            console.log("Trikampis neegzistuoja");
        }
        console.log(`Trikampis ${this.arTrikampisEgzistuoja ? "egzistuoja" : "neegzistuoja"}.`);
        if (this.arTrikampisStatus) {
            console.log("Trikampis status!");
        }
        else {
            console.log("Trikampis nėra status");
        }
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
const trikampis1 = new Triangle(2, 3, 4);
const trikampis2 = new Triangle(5, 6, 7);
trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();
const trikampiai = [];
trikampiai.push(new Triangle(6, 3, 8));
for (const trikampis of trikampiai) {
    trikampis.spausdintiDuomenis();
}
