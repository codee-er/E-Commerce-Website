
// menu icon


let navbar = document.getElementById('navbar');
let bars = document.getElementById('bar');
let closeBtn = document.getElementById("closeBtn")
let closeBtn1 = document.getElementsByClassName("close")

bars.onclick =()=>{

    navbar.classList.add('show')
    
}

closeBtn.onclick =()=>{
    
    navbar.classList.remove('show')

}



//  change the product image


function Chng(val){

document.getElementById("Spro-main-img").src =val;
}


// cart 

const cartBox = document.getElementById("cart-box");

cartBox.children[0].children[0].onclick =()=>{
    cartBox.children[0].style.display = "none";
}
cartBox.children[1].children[0].onclick =()=>{
    cartBox.children[1].style.display = "none";
}
cartBox.children[2].children[0].onclick =()=>{
    cartBox.children[2].style.display = "none";
}
