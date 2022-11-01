/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

// reset button
let resetButton = document.querySelector('#reset-button');
//d6-roll
let imageD6 = document.querySelector('#d6-roll');
let meanD6 = document.querySelector('#d6-rolls-mean');
let medianD6 = document.querySelector('#d6-rolls-median');
let modeD6 = document.querySelector('#d6-rolls-mode')


//double d-6 roll
let imageDoubleOne = document.querySelector('#double-d6-roll-1');
let imageDoubleTwo = document.querySelector('#double-d6-roll-2');
let boffum = document.querySelector('main')
let meanDouble = document.querySelector('#double-d6-rolls-mean')
let medianDouble = document.querySelector('#double-d6-rolls-median');
let modeDouble= document.querySelector('#double-d6-rolls-mode')


//d-12 roll
let imageD12 = document.querySelector('#d12-roll');
let meanD12 = document.querySelector('#d12-rolls-mean');
let medianD12 = document.querySelector('#d12-rolls-median');
let modeD12 = document.querySelector('#d12-rolls-mode')


//d-20 roll
let imageD20 = document.querySelector('#d20-roll');
let meanD20 = document.querySelector('#d20-rolls-mean');
let medianD20 = document.querySelector('#d20-rolls-median');
let modeD20 = document.querySelector('#d20-rolls-mode')





resetAll()

/*******************
 * EVENT LISTENERS *
 *******************/

//d6 event listener
imageD6.addEventListener('click',function(){
    console.log('d6 button clicked')
    d6RollFunction();
});

//double d6 event listener
boffum.addEventListener('click',function(){
    doubleRollFunction()

})



//d12 event listener
imageD12.addEventListener('click',function(){
    d12RollFunction()
});

//d20 event listener
imageD20.addEventListener('click',function(){
   d20RollFunction()

});
//reset button event listener
resetButton.addEventListener('click',function(){
console.log('reset working')
resetAll();
});




/******************
 * RESET FUNCTION *
 ******************/
function resetAll(){
    //empty global arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    //reset images
    imageD6.src =  './images/start/d6.png';
    imageDoubleOne.src = './images/start/d6.png';
    imageDoubleTwo.src = './images/start/d6.png';
    imageD12.src = './images/start/d12.jpeg';
    imageD20.src ='./images/start/d20.jpg';

    //reset Mean
    meanD6.innerText = 'NA';
    meanD12.innerText = 'NA';
    meanD20.innerText = 'NA';
    meanDouble.innerText = 'NA';
   //reset median
    medianD6.innerText = 'NA';
    medianDouble.innerText = 'NA';
    medianD12.innerText = 'NA';
    medianD20.innerText = 'NA';
    //reset mode
    modeD6.innerText = 'NA';
    modeDouble.innerText = 'NA';
    modeD12.innerText = 'NA';
    modeD20.innerText = 'NA';
   
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function d6RollFunction(){
    let result = getRandomNumber(6);
    console.log(result);
    imageD6.src =`./images/d6/${result}.png`;
    sixes.push(result);
    console.log(sixes);
    
    meanD6.innerText = calcMean(sixes).toFixed(2);
    medianD6.innerText = calcMedian(sixes);
    modeD6.innerText = calcMode(sixes);
}


function doubleRollFunction(){
    let result1 = getRandomNumber(6);

    let result2 = getRandomNumber(6);

    doubleSixes.push(result1+result2)

   // doubleSixes.push(result2)

    imageDoubleOne.src =`./images/d6/${result1}.png`;
    imageDoubleTwo.src=`./images/d6/${result2}.png`;

    meanDouble.innerText = calcMean(doubleSixes).toFixed(2);
    medianDouble.innerText = calcMedian(doubleSixes);
    modeDouble.innerText = calcMode(doubleSixes);
}

function d12RollFunction(){
    let result = getRandomNumber(12);
    console.log(result);
    imageD12.src =`./images/numbers/${result}.png`;
    twelves.push(result);
    
    
    meanD12.innerText = calcMean(twelves).toFixed(2);
    medianD12.innerText = calcMedian(twelves);
    modeD12.innerText = calcMedian(twelves);
}

function d20RollFunction(){
    let result = getRandomNumber(20);
    console.log(result);
    imageD20.src =`./images/numbers/${result}.png`;
    twenties.push(result);

    
    
    meanD20.innerText = calcMean(twenties).toFixed(2);
    medianD20.innerText = calcMedian(twenties);
    modeD20.innerText = calcMode(twenties);
}



/****************
 * MATH SECTION *
 ****************/
function calcMean(array){
    let total = 0;

    for (let i = 0; i<array.length; i++){
        total += array[i]
    }return total/array.length;
}



function calcMedian(array){
    let result=0;
    let index1= 0;
    let index2= 0;
    if(array.length%2!==0){
        //if the array is of odd length 
        //divide by 2 , and floor the result it will give you the element in the middle
     result = Math.floor(array.length/2);
     return array[result];
    }
    else if (array.length%2===0){
        //if the element is even
        //take  the two elements in the middle
        //add them together and divide by

    
         index1= array[(array.length/2)-1];
         index2= array[(array.length/2)];
         result = (index1 + index2 )/2;
         return result;
    }
    
    ;

}

function calcMode(array){
    let count= 0;
    let number = 0;
    let howMany =0;
    let mode = 0;
    let most = 0;
    for(let i = 0; i<array.length; i++){
       //number stores element for current cycle
        number = array[i];
        //resets counter at zero each cycle
        count = 0;
       
        for(let x=0; x<array.length; x++){
            howMany = array[x];
            if (number === howMany){
            // a nested loop that iterates through entire array , incrementing the counter for each match of the current cycle
                count++
            }
            //compares count to most /each time count is greater than most
            //most equals count
            if (count > most){
                most = count
            }
        //if most equals count on this cycle within the nested for loop
        //mode will equal number which updates it to the current element that has appeared the most
            if(most === count){
                mode = number
            }
            
        }
       



    } return mode

}

