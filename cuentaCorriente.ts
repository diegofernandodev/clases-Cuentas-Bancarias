import { CuentaBancaria } from "./cuentaBancaria";

export class CuentaCorriente extends CuentaBancaria {
  protected sobregiro: number;
  constructor(saldo: number, tasaAnual: number) {
    super(saldo, tasaAnual);
    this.sobregiro = 0;
  }
  retirar(vrRetirar:number) {
    console.log("\n");
    console.log("----------------------Retiro-------------------------");
    if (vrRetirar > this.saldo) {
      this.sobregiro = this.saldo - vrRetirar;
      this.saldo = 0;
      this.totalRetiros += (vrRetirar - this.saldo)
      this.numeroRetiros += 1;
      console.log(
        `El numero de tu retiro es ${this.numeroRetiros}\n El valor retirado es = ${vrRetirar}\n Nuevo saldo = ${this.saldo}\n Tienes un sobregiro por valor de $${this.sobregiro}`
      );
    } else {
      this.numeroRetiros += 1;
      this.saldo -= vrRetirar;
      this.totalRetiros += vrRetirar
      console.log(
        `El numero de tu retiro es ${this.numeroRetiros}\n El valor retirado es = ${vrRetirar}\n Nuevo saldo = ${this.saldo}`
      );
    }
  }
  consignar(vrConsignar: number) {
    console.log("\n");
    console.log("-------------------Consignacion----------------------");
    let diferencia = vrConsignar - this.sobregiro;
    if (this.sobregiro < 0) {
      if (vrConsignar > this.sobregiro) {
        this.sobregiro = 0;
        this.saldo += diferencia;
      } else {
        this.sobregiro -= diferencia;
      }
    } else if (this.sobregiro === 0) {
      this.numeroConsignacion += 1;
      this.saldo += vrConsignar;
      this.totalConsignaciones += vrConsignar
      console.log(
        `El numero de tu consignacion es ${this.numeroConsignacion}\n El valor consignado es = ${vrConsignar}\n Nuevo saldo = ${this.saldo}`
      );
    }
  }
  ExtractoMensual() {
    super.ExtractoMensual();
  }
}