const lightTheme = {
    primary: "white",
    text: "white",
    buttonBackground: "black",
    borderColor:"black",
    color:'black'
}
const darkTheme = {
    primary: "black",
    text: "black",
    buttonBackground: "white",
    borderColor:"white",
    color:'white'
}

const colors = (main) => main ? lightTheme : darkTheme

export {
    colors
}