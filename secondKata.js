// Exercise 2

//Roman numeral validator
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

const validator = value =>{
    let countI = 0;
    let countX = 0;
    let countC = 0;
    let countM = 0; 
    let countV = 0;
    let countL = 0;
    let countD = 0;
    let ant ='';
    let resultValidation = true; 
    for (let cat of value) {
        // The symbols V, L and D cannot be placed to the left of another major
        if  (ant!='') {
            if (ant== 'V'){
               if (cat!='I' & cat!='V') {
                resultValidation= false;
               } 
             } else if (ant== 'L'){
                if (cat!='I' & cat!='V' & cat!='X' & cat!='L') {
                resultValidation= false;
                     }
               } else if (ant== 'D'){
                if (cat!='I' & cat!='V' & cat!='X' & cat!='L') {
                    resultValidation= false;
                 }
                }
            }
        ant = cat;
        // * The symbols I, X, C and M can be repeated up to three times.
        // * The symbols V, L and D cannot be repeated.
       switch (cat) {
        case 'I':{
             countI++;
            break; }
        case 'X':{
            countX++; 
            break; }    
        case 'C':{
            countC++; 
            break;
           }              
        case 'M':{
            countM++;
            break;
        }
        case 'V':{
            countV++; 
            break;
        }
        case 'L':{
            countL++;
            break;
        }
        case 'D':{
            countD++;
            break;
        }
      }   
        if (countI>3|countX>3|countC>3|countM>3|countV>1|countL>1|countD>1){
            console.log('Validation error');
            resultValidation = false;
        break;
        }
    }
console.log(`Validación: ${resultValidation}`) ;
  return resultValidation;
}

//Conversión of roman numbers to arabic
let char_to_int = character =>{
    switch(character){
    case "I": return 1;
    case "V": return 5;
    case "X": return 10;
    case "L": return 50;
    case "C": return 100;
    case "D": return 500;
    case "M": return 1000;
    default: return 0;
    }
}

const convertRomToArabic = value =>{
    let actual;
    let siguiente;
        if(value == null)
        return -1;
        numArabic = 0;
        for(let i=0;i<value.length;i++){
            actual = value.charAt(i);
            siguiente =value.charAt(i+1)
            current = char_to_int(value.charAt(i));
            next = char_to_int(value.charAt(i+1));
            if (i<value.length-1){
                if (current >= next & (siguiente =='I'|siguiente=='X'|siguiente=='C')) {
                    numArabic = numArabic + current;
                }
                else {
                    if (actual =='I' &  (siguiente=='V'|siguiente=='X')) {
                        numArabic =  numArabic- current;
                    }
                    if (actual =='X' & (siguiente=='L'|siguiente=='C')) {
                        numArabic = numArabic - current ;
                    }
                    if (actual =='C' &  (siguiente=='D'|siguiente=='M')) {
                        numArabic = numArabic - current;
                    }
                }      
             }
             else numArabic= numArabic + current;
         }
        console.log(`Conversion from Roman number  ${value} to Aravic numeral is: ${numArabic} `) ;
        return numArabic;
    }


    //Conversion from Arabic number  to Roman numeral 
    const arabicToRoman = numArabic =>{
        if (numArabic < 1 || numArabic > 3999) {
            return -1;
        }
    
        var result = '';
        var numArabicS = numArabic.toString();
        var romanNumbers = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M', 2000: 'MM', 3000: 'MMM'};
        var digit = '';
    
        for (var i = numArabicS.length - 1; i >= 0; i-- ) {
            if (numArabicS[i] === '0') {
                digit += '0';
                continue;
            }
            var num = numArabicS[i] + digit;
            result = romanNumbers[num] + result;
            digit += '0';
        }
         console.log(`Conversion from Arabic number  ${numArabic} to Roman numeral is: ${result} `) ;
        return result;
    }

//Roman numbers validation
let validation = validator('VD');

//Conversión of roman numbers to arabic
if (validation){
    let romanNumbers = convertRomToArabic('VD');
}

 //Conversion from Arabic number  to Roman numeral 
 let conversionRoman=arabicToRoman(500);
