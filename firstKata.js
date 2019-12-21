// Exercise 1
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

const numberDivisible = value =>{
    let word = '' ;
    let text = ''; 
    let cont = '';
    let result =0;
    let numtostr ='';
    let denominator = 0 ; 
    let numerator = parseInt(value);
    for (let i=1; i<numerator; i++){
      word='';
      text='';
      cont='';
      numtostr ='';
      numtostr=i.toString();
      
        if (i % 3 == 0) { 
          word +='Foo';
          text +=' divisible 3';
        }
        if (numtostr.includes('3')) {
          cont += ' content 3';
        }
    
        if (i % 5 == 0)  {
          word += 'Bar';
          text +=' divisible 5'; 
        }

        if (numtostr.includes('5')) {
          cont += ' content 5';
        }

        if (i % 7 == 0)  {
          word +='Quix';
          text +=' divisible 7';         
        }
        if (numtostr.includes('7')) {
          cont += ' content 7';
        }
        console.log(`*${i} -> ${word} ${text} ${cont} `) ;
    }
  console.log(`Exercise1 `) ;
  console.log(`Word : ${result}`) ;
  console.log(`Text Value: ${numerator}`) ;
}

let num=getRandomInt(0, 101);
numberDivisible(num);