'use strict';

// function f1 (ff){
//     for (let i = 0; i < 4; i++){
//         console.log(i);
//     }
//     ff();
// }

//  function f2 (){
//     console.log('Папам!');
// }
// f1(f2);



const apartmentOptions = {
    area: 35,
    length: 7,
    width: 5,
    roomColour: {
        window: "white",
        door: "black"
    },
};
let counter = 1;
for (let key in apartmentOptions){
    if (typeof apartmentOptions[key] === 'object'){
        for (let i in apartmentOptions[key]){
            console.log(`${counter}. Значение свойства ${i}: ${apartmentOptions[key][i]}.` );
            counter++;
        }
    } else {
        console.log(`${counter}. Значение свойства ${key}: ${apartmentOptions[key]}.` );
        counter++;
    }
    
}





