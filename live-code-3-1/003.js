/**
=====================================
Modular Functions: Calculate Number in Object
=====================================

[INSTRUKSI]

Diberikan function kali, tambah, bagi, kurang, dan calculate

Implementasikan function calculate untuk menghitung angka-angka yang ada di dalam object, operator perhitungan tersedia di dalam object.
ASUMSI:
 - keyName operand1, operand2 dan operator selalu ada
 - value dari operand1 dan operand2 selalu number
 - value dari operator berupa string: '+', '-', '*' atau '/'

 Function calculate akan me-return sebuah array yang berisi hasil perhitungan dari object tersebut.

contoh 1:
input: [ {
              operand1: 5,
              operand2: 10,
              operator: '*'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '-'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '/'
            }
          ];
output: [50, -7, 0.3]

contoh 2:
input: []
output: []

*/

function kali(operand1, operand2) {
  return operand1 * operand2;
}

function tambah(operand1, operand2) {
  return operand1 + operand2;
}

function kurang(operand1, operand2) {
  return operand1 - operand2;
}

function bagi(operand1, operand2) {
  return operand1 / operand2;
}

function calculate(arrNumber) {
  let hasil = [];
  let oper1 = 0;
  let oper2 = 0;
  //return arrNumber[0].operand1;
  if(arrNumber.length === 0){
      return hasil;
  }else{
      for(let i = 0; i < arrNumber.length; i++){
          if(arrNumber[i].operator === '*'){
              oper1 = arrNumber[i].operand1;
              oper2 = arrNumber[i].operand2;
              var hasilKali = kali(oper1, oper2);
              hasil.push(hasilKali);
          }else if(arrNumber[i].operator === '+') {
              oper1 = arrNumber[i].operand1;
              oper2 = arrNumber[i].operand2;
              var hasilTambah = tambah(oper1, oper2);
              hasil.push(hasilTambah);
          }else if (arrNumber[i].operator === '-') {
              oper1 = arrNumber[i].operand1;
              oper2 = arrNumber[i].operand2;
              var hasilKurang = kurang(oper1, oper2);
              hasil.push(hasilKurang);
          }else if (arrNumber[i].operator === '/') {
              oper1 = arrNumber[i].operand1;
              oper2 = arrNumber[i].operand2;
              var hasilBagi = bagi(oper1, oper2);
              hasil.push(hasilBagi);
          }else{
              return 'operator tersebut tidak ada';
          }
          oper1 = 0;
          oper2 = 0;
      }

      return hasil;
  }

}

console.log(calculate([{ operand1: 5, operand2: 10, operator: '*' }, { operand1: 3, operand2: 10, operator: '-'}]));
//[50, -7]
console.log(calculate([])); //[]
