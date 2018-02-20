//Exercise 9 week 5 Logic Challenge - Cari Pelaku (Regex)

/*Problem
Diberikan sebuah function cariPelaku(kalimat) yang menerima satu parameter
berupa string. Function akan me-return jumlah berapa kali ditemukan
kata "abc" secara berturut-turut di dalam kalimat tersebut.
Gunakan regex untuk melatih kemampuan regex.
*/

function cariPelaku(str) {
  var pelaku = str.match(/abc/g);
  return pelaku.length;

  /*Tanpa Regex
  var count = 0;

  for(let i = 0;  i < str.length; i++){
      if(str.substring(i,i+3) === 'abc'){
          count += 1;
      }
  }
  return count;
  */
}

/*function cariPelaku(str) {
  // you can only write your code here!
}*/

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
