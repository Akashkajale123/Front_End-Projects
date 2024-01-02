let input = document.getElementById('input');

// Numeric buttons (0-9)
for (let i = 0; i <= 9; i++) {
    const button = document.getElementById(`block${i}`);
    button.addEventListener('click', () => {
        if (input.value === '0') {
            input.value = i.toString();
        } else {
            input.value += i;
        }
        console.log(`Clicked ${i}`);
    });
}

// operation buttons
plus.addEventListener('click', () => {
    input.value += plus.innerHTML;
    console.log('Clicked pulse');
});
minus.addEventListener('click',()=>{
    input.value += minus.innerHTML;
    console.log('clicked minus');
})
mul.addEventListener('click',()=>{
    input.value += mul.innerHTML;
    console.log('clicked multiply');
})
divide.addEventListener('click',()=>{
    input.value+=divide.innerHTML;
    console.log('clicked divide btn');
})
dot.addEventListener('click',()=>{
    input.value += dot.innerHTML;
    console.log('clicked dot');
})




//  equals button
ans.addEventListener('click', () => {
    try {
        input.value = eval(input.value);
        console.log(eval(input.value));
        if (input.value === Infinity) {
            input.value = 'Infinity';
        } else if (isNaN(input.value)) {
            input.value = 'NaN';
        }
    } catch (error) {
        input.value = 'Error';
    }
});

   // clear button
   clr.addEventListener('click', () => {
    input.value = '0';
});