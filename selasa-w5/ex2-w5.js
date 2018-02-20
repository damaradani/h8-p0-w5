//Exercise 2 week 5 Logic Challenge - Naik Angkot
/*Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter
berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000
setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']]
output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let arrRute = [];
  let arrHasil = [];
  let ObjHasil = {};
  let naikDari = '';
  let tujuan = '';
  let totalBayar = 0;

  if(arrPenumpang === undefined || arrPenumpang.length === 0){
      return arrPenumpang;
  }else{
      for(let i = 0 ; i < arrPenumpang.length; i++){
          naikDari = arrPenumpang[i][1];
          tujuan = arrPenumpang[i][2];
          //hitung jumlah rute
          for(let j = 0; j < rute.length; j++){
              if(naikDari === rute[j] || tujuan === rute[j]){
                  arrRute.push(j);
              }
          }

          //Hitung biaya perjalanan tiap lewat 1 rute bayar 2000
          totalBayar = (arrRute[1]-arrRute[0])*2000;

          //Memasukan nilai yang di proses ke dalam objek hasil
          ObjHasil.penumpang = arrPenumpang[i][0];//nama penumpang
          ObjHasil.naikDari = naikDari;
          ObjHasil.tujuan = tujuan;
          ObjHasil.bayar = totalBayar;

          //console.log(naikDari);
          //console.log('Tujuan: '+tujuan);
          //console.log(arrRute);
          //console.log(totalBayar);

          //Memasukan isi objek di atas ke dalam array hasil
          arrHasil.push(ObjHasil);

          //set arrRute dan ObjHasil menjadi kosong
          arrRute = [];
          ObjHasil = {};
      }
      return arrHasil;
  }
}

/*function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
}
*/
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
