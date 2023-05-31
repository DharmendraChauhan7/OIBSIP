const calculateTemp = () =>{
    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const ValueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celcius To Fahrenhit

    const celToFah = (cel) =>{
        let Fahrenhit = ((cel * 9 / 5) + 32 ).toFixed(1);
        return Fahrenhit;
    }
    // Celcius To Fahrenhit

    const FahToCel = (fah) =>{
        let Celcius = ((fah - 32 ) * 5/9 ).toFixed(1);
        return Celcius;
    }

    if (ValueTemp == 'cel'){
        document.getElementById("result").innerHTML = celToFah
        (inputTemp) + "&#176; Fahrenhit";
    }
    else{
        document.getElementById("result").innerHTML = FahToCel
        (inputTemp) + "&#176; Celcius";
    }
}