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
    var objHasil = {};

    if(students === undefined || students.length === 0){
        return objHasil;
    }else{
        /*var objStud = {};
        var highScore = 0;
        var kelas = '';

        for(let i = 0; i < students.length; i++){

            kelas = students[i].class;

            for(let j = 0; j < students.length; j++){

                if(kelas === students[j].class){
                    if(highScore < students[j].score){
                        highScore = students[j].score;
                        nama = students[j].name;
                    }else{
                        students.splice(j ,1);
                    }
                }

            }
            highScore = 0;
        }

        for(let i = 0; i < students.length; i++){
            objStud.name = students[i].name;
            objStud.score = students[i].score;
            objHasil[students[i].class] = objStud;
        }

        return objHasil;*/

        for(let i = 0; i < students.length; i++){
            //apabila objHasil masih kosong
            if(Object.keys(objHasil).length === 0){
                objHasil[students[i].class] = {
                    name: students[i].name,
                    score: students[i].score
                }
            //apabila keyname sudah ada di objek 'objHasil'
            }else if(objHasil.hasOwnProperty(students[i].class)){
                //apabila score di dalam keyname yang sama memiliki score lebih Kecil
                //dari current score di kelas yang sama
                if(objHasil[students[i].class].score < students[i].score ){
                    objHasil[students[i].class] = {
                        name: students[i].name,
                        score: students[i].score
                    }
                }
            //apabila keyname belum ada di 'objHasil'
            }else{
              objHasil[students[i].class] = {
                  name: students[i].name,
                  score: students[i].score
              };
            }
        }
        return objHasil;

    }
}

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
