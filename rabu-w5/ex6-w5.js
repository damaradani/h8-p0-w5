//Exercise 6 week 5 Logic Challenge: Melee Ranged Grouping
/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string,
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional
array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-, ...

Output yang diharapkan:
[
  [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ]
]

Jika input adalah string kosong ('') maka return array kosong

Submit Tugas Disini https://github.com/deathmitri/melee-ranged-grouping-git
*/

function meleeRangedGrouping (str) {
  let arrStr = [];
  let dataArr = '';

  //memisahkan data tanpa split
  for(let i = 0; i < str.length; i++){
      if(str[i] === ','){
          arrStr.push(dataArr);
          dataArr = '';
      }else{
          dataArr += str[i];
      }
  }
  arrStr.push(dataArr);
  //return arrStr;
  let arrHasil = [[], []];
  let heroClass = '';
  let namaHero = '';
  //Memisahkan hero yang memiliki class berbeda tanpa split
  for(let i = 0; i < arrStr.length; i++){
      for(let j = 0; j < arrStr[i].length; j++){
        if(arrStr[i][j-1] === '-'){
            heroClass = arrStr[i].slice(j);
            namaHero = arrStr[i].slice(0, j-1);
        }
      }
      //console.log(heroClass);
      //console.log(namaHero);
      if(heroClass === 'Ranged'){
          arrHasil[0].push(namaHero);
      }else if(heroClass === 'Melee'){
          arrHasil[1].push(namaHero);
      }else{
          arrHasil.splice(0,2);
      }
  }

  return arrHasil;
}

/*function meleeRangedGrouping (str) {
  //your code here
}*/

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
