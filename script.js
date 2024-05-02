const getColor = ()=>{
    //hex code(color code)
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;
    navigator.clipboard.writeText(randomCode);//to atomatically copy the code
}

document.getElementById("btn").addEventListener(
    "click", getColor
)

//intial call
getColor();