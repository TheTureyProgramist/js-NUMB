// 1. Цельсія = Фаренгейти
let celsia = 31; // Цельсій
let fahrencheit = (celsia * 9 / 5) + 32; // Фаренгейт (правильне значення для Фаренгейта)
console.log(celsia + 'C = ' + fahrencheit + 'F');

// 2. Годин та хвилин бонус секунд у місяці
let daysinminth = 28;
let hoursinminth = daysinminth * 24;
let minutesinminth = hoursinminth * 60;
let secondsinminth = minutesinminth * 60;
console.log(daysinminth + ' днів, ' + hoursinminth + ' годин, ' + minutesinminth + ' хвилин, ' + secondsinminth + ' секунд.');

// 3. Здоров'я та енергія гравця
let health = 40000; // Максимум здоров'я гравця
let energy = 950; // Максимум енергії гравця
health -= 39008; // Втрата рівня здоров'я
energy -= 400; // Втрата рівня енергії
console.log('здоровя: ' + health + ', енергії: ' + energy);

// 4. Ціна індика
let turkey = 150; // Звична ціна індика
let discount = 0.10; // Знижка за покупку 10%
let discountedturkey = turkey * (1 - discount);
console.log('Ціна після знижки 10%: ' + discountedturkey + ' Грн за індика');

// 5. Рядок в десяткове число
let linestring = "845.5";
let tensnumber = parseFloat(linestring);
console.log('Рядок: ' + linestring + ' десяткове число: ' + tensnumber);

// 6. Рядок в ціле число
let numberline = "763";
let number = parseInt(numberline);
console.log('Рядок: ' + numberline + ' ціле число: ' + number);

// 7. Рядка в ціле число і навпаки
let onenumber = 456;
let secondnumber = "789";
let thirdnumber = parseInt(secondnumber);
let lastnumber = onenumber.toString();
console.log('Рядок: ' + secondnumber + ' ціле число: ' + thirdnumber);
console.log('Ціле число: ' + onenumber + ' рядок: ' + lastnumber);