
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    
    counter.innerHTML= 0;

    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target');
       // console.log(targetCount);

     const startingCount =  Number(counter.innerHTML);
    
     const incr = targetCount / 100;

     if (startingCount < targetCount) {
        counter.innerHTML = `${Math.round(startingCount + incr)}`;
        setTimeout(updateCounter, 10);
     }else{
        counter.innerHTML = targetCount;
     }

    }

    updateCounter();
});



// // convert string to num
// there are several ways to achieve it :

// using the unary plus operator:
// var n = +str;

// the number constructor :
// var n = number(str);

// the parseFloat function:
// var n = parseFloat(str);