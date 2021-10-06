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
    console.log(`Trikampio perimetras: ${this.perimetras()}`)
  }

  public perimetras(): number {
    return this.a + this.b + this.c;
  }
 }

const trikampis1 = new Triangle(2, 3, 4);
const trikampis2 = new Triangle(5, 6, 7);

trikampis1.spausdintiDuomenys();
trikampis2.spausdintiDuomenys();
