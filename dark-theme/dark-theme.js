// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on
let black = "black"
let white = "white"
let color = white;
function changeTheme() {
    const element = document.getElementById("content")
    if(color === white) {
        color = black;
    }else{
        color = white;
    }
    element.style.backgroundColor = `${color}`

}