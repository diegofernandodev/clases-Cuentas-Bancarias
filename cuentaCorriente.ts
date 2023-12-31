import { CuentaBancaria } from "./cuentaBancaria";

export class CuentaCorriente extends CuentaBancaria {
  protected sobregiro: number;
  constructor(saldo: number, tasaAnual: number) {
    super(saldo, tasaAnual);
    this.sobregiro = 0;
  }
  retirar(vrRetirar: number) {
    console.log("\n");
    console.log("----------------------Retiro-------------------------");
    const retiro: number = this.saldo;
    if (vrRetirar > this.saldo) {
      this.sobregiro = this.saldo - vrRetirar;
      this.saldo = 0;
      this.totalRetiros += retiro;
      this.numeroRetiros += 1;
      this.retiros.push(vrRetirar)
      console.log(
        `El numero de tu retiro es ${this.numeroRetiros}\n El valor retirado es = ${vrRetirar}\n Nuevo saldo = ${this.saldo}\n Tienes un sobregiro por valor de $${this.sobregiro}`
      );
    } else {
      this.numeroRetiros += 1;
      this.saldo -= vrRetirar;
      this.totalRetiros += vrRetirar;
      this.retiros.push(vrRetirar)
      console.log(
        `El numero de tu retiro es ${this.numeroRetiros}\n El valor retirado es = ${vrRetirar}\n Nuevo saldo = ${this.saldo}`
      );
    }
  }
  consignar(vrConsignar: number) {
    console.log("\n");
    console.log("-------------------Consignacion----------------------");
    let diferencia = vrConsignar + this.sobregiro;
    if (diferencia >= 0 && this.sobregiro < 0) {
      this.sobregiro -= this.sobregiro;
      this.saldo += diferencia
      this.consignaciones.push(diferencia)
      console.log(`El saldo de tu sobregiro es = ${this.sobregiro} valor consignado  ${diferencia} nuevo saldo ${this.saldo}`);
    } else {
      if (vrConsignar > 0) {
      this.saldo += diferencia;
      this.sobregiro = 0;
      this.numeroConsignacion += 1;
      this.totalConsignaciones += vrConsignar;
      this.consignaciones.push(diferencia)
      console.log(
        `El numero de tu consignacion es ${this.numeroConsignacion}\n El valor consignado es = ${diferencia}\n Nuevo saldo = ${this.saldo}`
      );
      } else {
        console.log("El valor ingresado no es valido");
        
      }
      
    }
  }
  ExtractoMensual() {
    
    super.ExtractoMensual();
    const nuevoSaldo =
      this.saldo +
      this.interesMensual() -
      this.comisionMensual;
  }
}
