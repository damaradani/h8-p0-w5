//Exercise 3 week 5 Logic Challenge: Highest Score
/*
Implementasikan function highestScore untuk mendapatkan student
dengan nilai tertinggi dari setiap class:

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

    {
      <class>: { name: <name>, score: <score> },
      <class>: { name: <name>, score: <score> },
      <class>: { name: <name>, score: <score> }
    }

*/

function highestScore (students) {
  let objHasil = {};

  if(students.length === 0 || students === undefined){
      return objHasil;
  }else{
      let kelas = [];
      //memasukan kelas yang ada
      for (let i = 0; i < students.length; i++) {
          kelas.push(students[i].class);
      }

      //menghapus kelas yang sama
      for(let i = 0; i < kelas.length; i++){
          for(let j = 0; j < kelas.length; j++){
              if(i !== j){
                  if(kelas[i] === kelas[j]){
                      kelas.splice(j, 1);
                  }
              }
          }
      }

      //return students[0].class;
      //variabel untuk siswa yang memiliki nilai paling tinggi dalam 1 kelas
      let highestScore = 0;
      let studentName = '';

      //Mencari siswa yang memiliki nilai paling tinggi dalam 1 kelas
      for(let i = 0; i < kelas.length; i++){

          for(let j = 0; j < students.length; j++){
              //apabila siswa memiliki kelas yang sama dengan kelas[i]
              if(students[j].class === kelas[i]){
                  //kondisi untuk mencari nilai tertinggi
                  if(highestScore < students[j].score){
                      highestScore = students[j].score;
                      studentName = students[j].name;
                  }
              }
          }

          //memasukan hasil setelah perulangan kedalam objek
          //kelas[i] => nama kelas dari array kelas, contoh 'foxes'
          objHasil[kelas[i]] = {
                                  name: studentName,
                                  score: highestScore
                               };
          //console.log(studentName+' '+highestScore);

          highestScore = 0;//di set ke 0 karena akan mencari nilai tertinggi
      }

      return objHasil;
  }

}

/*function highestScore (students) {
  // Code disini
}*/

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
