import { CuentaBancaria } from "./cuentaBancaria";
import { CuentaAhorros } from "./cuentaAhorros";
import { CuentaCorriente } from "./cuentaCorriente";

const cuentaBancari1 = new CuentaBancaria(20000,24)
/*console.log("-----------------CUENTA BANCARIA-----------------");
console.log("\n");

const consignacion1 = cuentaBancari1.consignar(100000)
const consignacion2 = cuentaBancari1.consignar(-30000)

const retiro1 = cuentaBancari1.retirar(25000)
const retiro2 = cuentaBancari1.retirar(-25000)

const consignacion3 = cuentaBancari1.consignar(40000)
const consignacion4 = cuentaBancari1.consignar(50000)
const consignacion5 = cuentaBancari1.consignar(60000)

const retiro3 = cuentaBancari1.retirar(15000)
const retiro4 = cuentaBancari1.retirar(30000)
const retiro5 = cuentaBancari1.retirar(300000)

console.log("-------------------Interes mensual--------------------");
const interesM = cuentaBancari1.interesMensual()
console.log(interesM);

console.log("\n");
const extracto1 = cuentaBancari1.ExtractoMensual()


const imprimirAcb = cuentaBancari1.imprimirAtributos()*/

/*const cuentaAhorro1 = new CuentaAhorros(100000,18,true)

console.log("-----------------CUENTA AHORROS-----------------");
console.log("\n");

const consinarA1 = cuentaAhorro1.consignar(50000)
const consinarA2 = cuentaAhorro1.consignar(-20000)

const retiroA1 = cuentaAhorro1.retirar(60000)
const retiroA2 = cuentaAhorro1.retirar(200000)

const consinarA3 = cuentaAhorro1.consignar(200000)
const consinarA4 = cuentaAhorro1.consignar(60000)

const retiroA3 = cuentaAhorro1.retirar(100000)
const retiroA4 = cuentaAhorro1.retirar(20000)

console.log("-------------------Interes mensual--------------------");
const interesMA = cuentaAhorro1.interesMensual()
console.log(interesMA);

console.log("\n");
const extractoA1 = cuentaAhorro1.ExtractoMensual()*/

const cuentaCorriente1 = new CuentaCorriente(100000,12)

console.log("-----------------CUENTA CORRIENTE-----------------");
console.log("\n");

const consinarC1 = cuentaCorriente1.consignar(60000)
const consinarC2 = cuentaCorriente1.consignar(-20000)

const retiroC1 = cuentaCorriente1.retirar(80000)
const retiroC2 = cuentaCorriente1.retirar(200000)

const consinarC3 = cuentaCorriente1.consignar(200000)
const consinarC4 = cuentaCorriente1.consignar(60000)

const retiroC3 = cuentaCorriente1.retirar(100000)
const retiroC4 = cuentaCorriente1.retirar(20000)

console.log("-------------------Interes mensual--------------------");
const interesMC = cuentaCorriente1.interesMensual()
console.log(interesMC);

console.log("\n");
const extractoA1 = cuentaCorriente1.ExtractoMensual()

const imprimirACC = cuentaCorriente1.imprimirAtributos()



