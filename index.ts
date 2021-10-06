/**
 * 1. Susikurkite TypeScript projektą
 *
 * 2. Parašykite programą, kuri padeda dirbti su trikampiais
 *
 * 3. Aprašykite klasę "Trikampis", kuri turėtu tris atributus
 * simbolizuojančius visas tris trikampio kraštines (a, b, c).
 *
 * 4. Trikampio kraštinių reikšmės turi būti priskiriamos sukuriant
 * objektą (konstruktoriuje).
 *
 * 5. Aprašykite metodą "spausdintiDuomenis()", kuris atspausdina
 * visus trikampio duomenis (kraštines) į konsolę.
 *
 * 6. Papildykite klasę metodu, kuris apskaičiuoja ir grąžina
 * trikampio perimetrą. Spausdinant trikampio duomenis
 * atspausdinkite ir jo perimetrą.
 *
 * 7. Parašykite metodą, kuris nusako, ar toks trikampis gali
 * egzistuoti (metodas turi grąžinti boolean reikšmę).
 * Spausdindami duomenis pasakykite, ar toks trikampis gali
 * egzistuoti.
 *
 * 8. Papildykite klasę metodu, kuris nurodo, ar trikampis yra
 * statusis.
 *
 * 9. Sukurkite masyvą, kuris saugo trikampių reikšmes,
 * panaudodami ciklą atspausdinkite visų masyvę esančių trikampių
 * duomenis.
 *
 * 10. ND: Papildykite programą funkcionalumu, kuris trikampių
 * masyvą užpildo trikampiais (50 reikšmių), kurių kraštinės yra
 * atsitiktinės reikšmės.
 *
 * Papildoma: Vėliau programa masyvą prafiltravus
 * paliktų tik egzistuojančius trikampius ir atspausdintų jų duomenis.
 */


class Triangle {
  public a: number;
  public b: number;
  public c: number;

  public constructor (a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
 
  public spausdintiDuomenis(): void {
    console.log(`Krastine a: ${this.a}`);
    console.log(`Krastine b: ${this.b}`);
    console.log(`Krastine c: ${this.c}`);
    console.log(`Trikampio perimetras: ${this.perimeter}`)
/*
    if (this.arTrikampisEgzistuoja) {
      console.log("trikampis egzistuoja!");
    } else {
      console.log("Trikampis neegzistuoja");
    }
*/
    console.log(`Trikampis ${this.arTrikampisEgzistuoja ? "egzistuoja" : "neegzistuoja"}.`);
/*
     if (this.arTrikampisStatus) {
      console.log("Trikampis status!");
    } 
    else {
      console.log("Trikampis nėra status");
    }
*/
    console.log(`Trikampis ${this.arTrikampisStatus ? "yra" : "nera"} statusis.`);

    console.log(`------------------------`);
  }

  public get perimeter(): number {
    return this.a + this.b + this.c;
  }

  private get arTrikampisEgzistuoja(): boolean {
    return this.a + this.b > this.c && 
           this.b + this.c > this.a && 
           this.c + this.a > this.b
  }

  private get arTrikampisStatus(): boolean {
    return this.a ** 2 + this.b ** 2 === this.c ** 2||
           this.c ** 2 + this.b ** 2 === this.a ** 2||
           this.a ** 2 + this.c ** 2 === this.b ** 2
  }
}

const trikampiai: Triangle[] = [];

for (let i = 0; i <= 49; i++) {
  
  var rndA: number = Math.floor(Math.random() * 100);
  var rndB: number = Math.floor(Math.random() * 100);
  var rndC: number = Math.floor(Math.random() * 100);

  trikampiai.push(new Triangle(rndA, rndB, rndC));
}

console.table(trikampiai);

/*
for (const trikampis of trikampiai) {
  trikampis.spausdintiDuomenis();
}


/*
const trikampis1 = new Triangle(2, 3, 4);
const trikampis2 = new Triangle(5, 6, 7);

trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();

*/


