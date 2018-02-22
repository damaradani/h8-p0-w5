//Exercise 4 week 5 Logic Challenge: Graduates
/*
Implementasikan function graduates untuk mendapatkan
daftar student yang lulus dengan aturan:

Student dapat dinyatakan lulus apabila score lebih besar dari 75.
Masukkan name dan score dari student ke class yang dia ikuti.
Student yang tidak lulus tidak perlu ditampilkan.
Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}

*/

function graduates (students) {
  let objHasil = {};

  if(students === undefined || students.length === 0){
      return objHasil;
  }else{
      var arrHasil = [];
      var j = 0;
      for(let i = 0; i < students.length; i++){
          //console.log(students[i]);
          if(students[i].score >= 75){
              //objHasil[students[i].class]
              var objAja = {
                name: students[i].name,
                score: students[i].score
              }

              if(Object.keys(objHasil).length === 0){
                  arrHasil.push(objAja);
                  objHasil[students[i].class] = arrHasil;
              //apabila keyname sudah ada di objek 'objHasil'
              }else if (objHasil.hasOwnProperty(students[i].class)) {
                  objHasil[students[i].class].push(objAja);
              }else{
                  arrHasil.push(objAja);
                  objHasil[students[i].class] = arrHasil;
              }

          }

          arrHasil = [];

      }
      var tes = Object.keys(objHasil)[0];
      return objHasil;
      return objHasil[tes][0];


  }

}

/*function graduates (students) {
  // Code disini
}
*/
console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
