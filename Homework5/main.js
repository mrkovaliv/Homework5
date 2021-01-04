window.addEventListener('DOMContentLoaded', () => {
    // 1
    function findNumber(n, m) {
        let result = '';
        if (!isNaN(n) && !isNaN(m)) {
            if (n < m) {
                while (n < m - 1) {
                    n++;
                    result += n + ' ';
                }

            } else {
                while (m < n - 1) {
                    m++;
                    result += m + ' ';
                }
            }
            alert(result);
        } else {
            alert("Введіть дані відповідного типу!");
        }

    }
    let n1 = +prompt('Введіть перше число n:', 0);
    let m1 = +prompt('Введіть друге число m:', 0);
    findNumber(n1, m1);


    // 2
    let powerNumber = (n, m = 2) => {
        return Math.pow(n, m);
    };

    let analogPowerNumber = function (n, m = 2) {
        return Math.pow(n, m);
    };

    let n2 = +prompt('Введіть число n:', 0);
    let m2 = +prompt('Введіть степінь для числа n:', 0);

    if (!isNaN(n2) && !isNaN(m2)) {
        alert(powerNumber(n2, m2));
        alert(analogPowerNumber(n2, m2));
    } else {
        alert("Введіть дані відповідного типу!");
    }

    //Number 1
    let n3 = +prompt('Введіть число з плаваючою точкою n :', 0);
    let m3 = +prompt('Введіть число з плаваючою точкою m :', 0);

    if (!isNaN(n3) && !isNaN(m3)) {
        n3 = Math.round((n3 * 0.3));
        m3 = Math.round((m3 * 0.3));
        alert(n3);
        alert(m3);

    } else {
        alert("Введіть дані відповідного типу!");
    }
    //2
    let n4 = +prompt('Введіть число n :', 0);
    let m4 = +prompt('Введіть число m :', 0);

    function getRandom(min, max) {
        return (Math.random() * (max - min) + min).toFixed(1);

        //Отримання цілого випадкового включаючи мінімум та максимум 
        // min = Math.ceil(min);
        // max = Math.floor(max);
        // return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (!isNaN(n4) && !isNaN(m4)) {
        alert(getRandom(n4, m4));

    } else {
        alert("Введіть дані відповідного типу!");
    }

    // String 1
    function findSame(str1, str2) {
        let pos = 0;
        let res = " Всі індекси: ";
        let count = 0;

        while (true) {
          let rightPos = str1.indexOf(str2, pos);
          if (rightPos == -1) break;
          
          res += rightPos + ' ';
          count++;
          pos = rightPos + 1;
        }
    
        if (count==0){
            res = 'Немає повторень'
        } else {
            res = 'Кількість повторень: ' + count + res;
        }
        return res;
    }

    str1 = prompt('Введіть першу стічку:', '');
    str2 = prompt('Введіть другу стічку:', '');
    if (str1 == null || str2 == null) {
        alert("Введіть коректно дані!");

    } else {
        alert(findSame(str1, str2));
    }
    
    //2
    let onlyNumber = 'ECMAScript 2015 (6th Edition, ECMA-262)'.match(/[0-9]+/g);
    console.log(onlyNumber.join());

    //3
    let onlyUpperLetters = 'ECMAScript 2015 (6th Edition, ECMA-262)'.match(/[A-Z]/g);
    console.log(onlyUpperLetters.join());  
    
    let color = '#123456#eee  #145';
    let allColors = color.match(/#([a-f0-9]{6})|([a-f0-9]{3})\b/gi);
    console.log(allColors);

    let numberPhone = "+ (380)-067 777 77 77 + (380) 097 777 77 77"
    let resNum= numberPhone.match(/[\+]\ \(380\)[\- ]0((6[6783])|(9[356789])|(73)|(50))[\- ][0-9]{3}[\- ][0-9]{2}[\- ][0-9]{2}/g);
    console.log(resNum);

    

});