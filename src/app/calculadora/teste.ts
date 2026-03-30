export class Teste {
  valor1 = 10;
  valor2 = 20;

  soma() {
    const resultado = this.valor1 + this.valor2;
    console.log('Resultado:', resultado);
    return resultado;
  }

  calcularMedia() {
    const total = this.soma();
    const media = total / 2;
    return media;
  }
}
