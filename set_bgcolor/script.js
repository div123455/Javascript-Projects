//generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalid = null;
const StartChange = function(){
    intervalid = setInterval(changebgcolor,1000)

    function changebgcolor(){
        document.body.style.backgroundColor = randomColor();
    }

}

const stopChange = function(){
    clearInterval(intervalid)
    intervalid = null
}

document.querySelector("#start").addEventListener('click',StartChange)

document.querySelector('#stop').addEventListener('click',stopChange)

