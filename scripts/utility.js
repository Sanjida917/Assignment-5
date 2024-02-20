


// function getARendomAlphabet() {

//     //get or create an alphabe array
//     const alphaString = 'A1 A2 A3 A4 B1 B2 B3 B4 C1 C2 C3 C4 D1 D2 D3 D4 E1 E2 E3 E4 F1 F2 F3 F4 G1 G2 G3 G4 H1 H2 H3 H4 I1 I2 I3 I4 J1 J2 J3 J4 ';
//     const alphabets = alphaString.split(' ');
//     console.log(alphabets[39]);

//     for (let i = 0; i <= 39; i++) {

//         const ids = alphabets[i];

//         console.log(getElementById(ids))


//     document.getElementById(ids).addEventListener('click', function() {

        
    
//     })
    
//     }


//     }



const test = document.getElementsByClassName('my-btn-class')

        // console.log(test);

        
           for(let i=0 ; i<4 ; i++){

           
        for (const tests of test) {

            // console.log(tests.innerText);

            // let count = 0;





            tests.addEventListener(('click'), function(){
            console.log("Clicked In : ",tests.innerText);

            })

           }


           }

            // count+=1;
           
        

        // document.getElementsByClassName(tests).addEventListener('click',function() {

        //     console.log(tests.innerText);

        // })
   
    

//     // get a random number between 0-39

//     // const randomNumber = Math.random() * 39;
//     // const index = Math.round(randomNumber);


//     // const alphabet = alphabets[index];
//     // console.log(alphabet);

//     // return alphabet;



// }

// getARendomAlphabet();


// // function getElementValueById(elementId) {

   


// // }

