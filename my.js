function checkValue(){
    let fruit = +document.getElementById("fruit").value;

    switch(fruit){
        case 1:
            txt = "20000 VNĐ/kg";
            break;
        case 2:
            txt = "20000 VNĐ/kg";
            break;
        case 3:
            txt = "30000 VNĐ/kg";
            break;
        case 4:
            txt = "30000 VNĐ/kg";
            break;    
        case 5:
            txt = "40000 VNĐ/kg";
            break;
        case 6:
            txt = "40000 VNĐ/kg";
            break;
        case 7:
            txt = "50000 VNĐ/kg";
            break;
    }
    document.getElementById("value").innerHTML = txt;
}