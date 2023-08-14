import { CuentaBancaria } from "./cuentaBancaria";

export class CuentaAhorros extends CuentaBancaria {
  protected estaActiva: boolean;
  constructor(saldo: number, tasaAnual: number, estaActiva: boolean) {
    super(saldo, tasaAnual);
    this.estaActiva = estaActiva;
  }
  public estadoCuenta(): boolean {
    if (this.saldo >= 10000) {
      return (this.estaActiva = true);
    } else {
      return (this.estaActiva = false);
    }
  }
  consignar(vrConsignar: number) {
    console.log("\n");
    console.log("-------------------Consignacion----------------------");
    if (vrConsignar > 0 && this.estadoCuenta()) {
      /*this.numeroConsignacion += 1;
      this.saldo += vrConsignar;
      this.totalConsignaciones += vrConsignar
      console.log(
        `El numero de tu consignacion es ${this.numeroConsignacion}\n El valor consignado es = ${vrConsignar}\n Nuevo saldo = ${this.saldo}`
      );*/
      super.consignar(vrConsignar)
    } else {
      console.log("No es posible realizar la consignacion");
    }
  }
  retirar(vrRetirar: number): void {
    console.log("\n");
    console.log("----------------------Retiro-------------------------");
    if ((vrRetirar > 0 && this.estadoCuenta()) && vrRetirar <= this.saldo) {
      /*this.numeroRetiros += 1;
      this.saldo -= vrRetirar;
      this.totalRetiros += vrRetirar
      console.log(
        `El numero de tu retiro es ${this.numeroRetiros}\n El valor retirado es = ${vrRetirar}\n Nuevo saldo = ${this.saldo}`
      );*/
      super.retirar(vrRetirar)
    } else {
      console.log("No es posible realizar el retiro");
    }
  }
  public cantidadDeRetiros(): number {
    let cantRetiros: number;
    if (this.numeroRetiros > 4) {
      cantRetiros = this.numeroRetiros - 4;
      return cantRetiros;
    } else {
      return 0;
    }
  }
  ExtractoMensual(): void {
    super.ExtractoMensual();
    //const inicial = this.saldo;
    this.comisionMensual = this.cantidadDeRetiros() * 1000;

    if (this.estadoCuenta()) {
      console.log("La cuenta esta Activa");
    } else {
      console.log("La cuenta esta Inactiva");
    }
  }
  public imprimir(): void {
    let nTransacciones = this.numeroConsignacion + this.numeroRetiros;
    console.log(`saldo de cuenta = $${this.saldo.toFixed(2)}`);
    console.log(`Comision mensual = $${this.comisionMensual.toFixed(2)}`);
    console.log(`Numero de transacciones realizadas = ${nTransacciones}`);
  }
}