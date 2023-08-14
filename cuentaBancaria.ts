export class CuentaBancaria {
  protected totalConsignaciones: number
  protected totalRetiros: number
  protected inicial: number
  protected saldo: number;
  protected numeroConsignacion: number;
  protected numeroRetiros: number;
  protected tasaAnual: number;
  protected comisionMensual: number;
  protected consignaciones: number[] = []
  protected retiros: number[] = []
  constructor(saldo: number, tasaAnual: number) {
    this.totalConsignaciones = 0
    this.totalRetiros = 0
    this.inicial = saldo;
    this.saldo = saldo;
    this.tasaAnual = tasaAnual;
    this.numeroConsignacion = 0;
    this.numeroRetiros = 0;
    this.comisionMensual = 0;
    this.consignaciones = []
    this.retiros = []
  }
  
  public consignar(vrConsignar: number) {
    console.log("\n");
    console.log("-------------------Consignacion----------------------");
    if (vrConsignar > 0) {
      this.numeroConsignacion += 1;
      this.saldo += vrConsignar;
      this.consignaciones.push(vrConsignar)
      this.totalConsignaciones += vrConsignar
      console.log(
        `El numero de tu consignacion es ${this.numeroConsignacion}\n El valor consignado es = ${vrConsignar}\n Nuevo saldo = ${this.saldo}`
      );
    } else {
      console.log("El valor ingresado no es valido");
    }
    //return this.saldo;
  }
  public retirar(vrRetirar: number) {
    console.log("\n");
    console.log("----------------------Retiro-------------------------");
    if (vrRetirar <= 0 || vrRetirar > this.saldo) {
      console.log("No es posible retirar el valor ingresado");
    } else {
      this.numeroRetiros += 1;
      this.saldo -= vrRetirar;
      this.retiros.push(vrRetirar)
      this.totalRetiros += vrRetirar
      console.log(
        `El numero de tu retiro es ${this.numeroRetiros}\n El valor retirado es = ${vrRetirar}\n Nuevo saldo = ${this.saldo}`
      );
    }
  }
  public interesMensual(): number {
    const intMes = (this.saldo * (this.tasaAnual / 12)) / 100;
    return intMes;
  }

  public movimientoCuenta() {
    console.log("\n");
    console.log("-------------------Movimiento Cuenta----------------");
    
    for (let i = 0; i < this.consignaciones.length; i++) {
        console.log(`Consignacion # ${i + 1} = ${this.consignaciones[i]}`);
    }

    for (let i = 0; i < this.retiros.length; i++) {
        console.log(`--------------------------Retiro # ${i + 1} = ${this.retiros[i]}`);
    }
}


  public ExtractoMensual(): void {
    
    this.comisionMensual = this.saldo * 0.02; // Comisión fija del 2%

    const abonosEnCuenta = this.totalConsignaciones;
    const valorInteres = this.interesMensual();
    const valorRetiros = this.totalRetiros;
    

    const nuevoSaldo =
      this.inicial +
      abonosEnCuenta +
      valorInteres -
      valorRetiros -
      this.comisionMensual;

    console.log("----------------- Extracto mensual -----------------");
    console.log(`Saldo inicial = $${this.inicial.toFixed(2)}`);
    console.log(`Abonos en cuenta = $${abonosEnCuenta.toFixed(2)}`);
    console.log(`Valor interés retornado = $${valorInteres.toFixed(2)}`);
    console.log(`Valor retiros = $${valorRetiros.toFixed(2)}`);
    console.log(`Comisión descontada = $${this.comisionMensual.toFixed(2)}`);
    console.log(`Saldo actual = $${nuevoSaldo.toFixed(2)}`);
    this.movimientoCuenta()
  }
  public imprimirAtributos(): void {
    console.log("\n");
    console.log("-------------------- Impresion --------------------");
    console.log(`Saldo = $${this.saldo}`);
    console.log(`Numero de consignaciones = ${this.numeroConsignacion}`);
    console.log(`Numero de retiros = ${this.numeroRetiros}`);
    console.log(`Tasa de interes anual = ${this.tasaAnual}%`);
    console.log(`Comision mensual = ${this.comisionMensual}`);
  }
}