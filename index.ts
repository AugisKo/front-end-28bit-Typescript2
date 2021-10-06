class Triangle {
  public a: number;
  public b: number;
  public c: number;

  public constructor (a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
 
  public spausdintiDuomenys(): void {
    console.log(`Krastine a: ${this.a}`);
    console.log(`Krastine b: ${this.b}`);
    console.log(`Krastine c: ${this.c}`);
    console.log(`Trikampio perimetras: ${this.perimeter}`)

    if (this.arTrikampisEgzistuoja) {
      console.log("trikampis egzistuoja!");
    } else {
      console.log("Trikampis neegzistuoja");
    }

     if (this.arTrikampisStatus) {
      console.log("Trikampis status!");
    } else {
      console.log("Trikampis nėra status");
    }

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
    return this.a * this.a + this.b * this.b === this.c * this.c ||
           this.c * this.c + this.b * this.b === this.a * this.a ||
           this.a * this.a + this.c * this.c === this.b * this.b
  }
}

const trikampis1 = new Triangle(2, 3, 4);
const trikampis2 = new Triangle(5, 6, 7);

trikampis1.spausdintiDuomenys();
trikampis2.spausdintiDuomenys();
