question();

function question() {
    var inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    
    var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    //1.Filter the list of inventors for those who were born in the 1500’s 我們要去取得1500~1600年代出生的人
    var question_1 = inventors.filter( item => {
        return item.year >= 1500 && item.year < 1600
    });
    
    console.table(question_1);

    //2.Give us an array of the inventors’ first and last names 我們要做一筆資料，只含他們的姓名就好
    var question_2 = inventors.map( item => {
        return {
          first: item.first,
          last: item.last
        }
      })
    console.log(question_2);

    //3.Sort the inventors by birthdate, oldest to youngest 。由老到年輕排列 
    var question_3=inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.log(question_3);

    //4.How many years did all the inventors live? 所有人的年紀加總
    var question_4 = inventors.reduce((temp,inventors)=> {
      return temp+(inventors.passed-inventors.year)
    },0)
    //item.passed-item.year = 年齡
    console.log(question_4);

    //5.Sort the inventors by years lived 　根據這些發明家的年紀做排序
    var question_5 = inventors.sort((a,b)=>{
      return (a.passed-a.year) -(b.passed-b.year)
    })
    console.log(question_5) ;

   //6.reate a list of Boulevards in Paris that contain ‘de’ anywhere in the name  到這個網站去抓名字裡面含有'de'的清單
   /* var peoples = document.querySelectorAll('.mw-category-group a');
    var array = Array.from(peoples);
    var de = array  
    .map(array => array.textContent)
    .filter(streetName => streetName.includes('de'))
    console.log(de) ;
  */

    //7. Sort the people alphabetically by last name 。 透過last name排序長度去排序people這筆陣列
    var question_7 = people.map(name=>{
      return name.split(', ')//從逗號和空白這邊切開
    })
    question_7.sort((a,b)=> a[1] > b[1] ? 1 : -1);
    console.log(question_7);

    //8.Sum up the instances of each of these 以下陣列每個項目各有幾個,做統計
    var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    var question_8 =  data.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0; //假如物件中還沒有該屬性 變設值為0
      }
      obj[item]++; //累加
      return obj;
    }, {});
    console.log(question_8);

}


