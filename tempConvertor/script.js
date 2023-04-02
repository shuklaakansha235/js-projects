const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
   
    const tempSelected = document.getElementById('temp_diff')
   const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;// index num return karne ke liye

const celToFah = (cel) =>{
    let fahrenheit =Math.round((cel*9/5) + 32) ;
    return fahrenheit;
}


const fehToCel = (feh) =>{
    let celcius =Math.round((feh - 32) * 5/9) ;
    return celcius;
}

   let result;

   if (valueTemp == 'cel') {
  result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML= ` ${result}&#xb0 Fahrenheit`
   }else{
    result = fehToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML= ` ${result}&#xb0 Calcious`
   }
}