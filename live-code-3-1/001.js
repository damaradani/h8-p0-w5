/**
================================
Array Mastery: Add Evens and Odds
================================

[INSTRUKSI]

Function addEvenOdd akan menerima satu parameter berupa array of number.
Kelompokkanlah hasil penjumlahan bilangan yang genap dan bilangan yang ganjil dan
return array 2 dimensi di mana array pertama merupakan hasil penjumlahan angka ganjil dan
array selanjutnya adalah hasil penjumlahan angka genap

Contoh:
input: [3, 5, 7, 8]
output: [[15], [8]]

input: [2, 4, 6, 10]
output: [[0], [22]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/

/*Pseudocode
  CREATE FUNCTION 'addEvenOdd' with parameter 'arrNum'
    SET 'odd' with empty array // []
    SET 'even' with empty array // []

    IF 'arrNum' equals with empty THEN
        STORE 'odd' with 0
        STORE 'even' with 0
    ELSE
        SET 'i' with 0
        FOR 'i' TO length of arrNum DO
            IF 'arrNum[i]' modulo 2 not equals with 0 THEN
                STORE 'odd' with value of 'arrNum[i]'
            ELSE
                STORE 'even' with value of 'arrNum[i]'
            END IF
        END FOR
    END IF

    SET 'tambahOdd' with 0
    SET 'tambahEven' with 0
    SET 'arrHasil' with [[], []]

    SET 'j' with 0
    FOR 'j' TO length of 'odd' DO
        STORE 'tambahOdd' with 'tambahOdd' + 'odd[j]'
    END FOR

    SET 'k' with 0
    FOR 'k' TO length of 'even' DO
        STORE 'tambahEven' with 'tambahEven' + 'even[k]'
    END FOR

    STORE 'arrHasil[0]' with 'tambahOdd'
    STORE 'arrHasil[1]' with 'tambahEven'

    DISPLAY 'arrHasil'

  END FUNCTION


*/

function addEvenOdd (arrNum) {
  var odd = [];
  var even = [];
  if(arrNum.length === 0 || arrNum === undefined){
    odd.push(0);
    even.push(0)
  }else{
    for( var i = 0; i < arrNum.length; i++){
      if(arrNum[i] % 2 !== 0){
          odd.push(arrNum[i]);
      }else{
          even.push(arrNum[i]);
      }
    }
  }

  var tambahOdd = 0;
  var tambahEven = 0;
  var arrHasil = [[], []];

  //untuk odd
  for(var j = 0; j < odd.length; j++){
      tambahOdd += odd[j];
  }

  //untuk Evens
  for(var k = 0; k < even.length; k++){
      tambahEven += even[k];
  }

  arrHasil[0].push(tambahOdd);
  arrHasil[1].push(tambahEven);
  return arrHasil;

}

console.log(addEvenOdd([3, 5, 7, 8])); // [ [15], [8] ]

console.log(addEvenOdd([2, 4, 6, 10])); // [ [0], [22] ]

console.log(addEvenOdd([])); // [ [0], [0] ]
