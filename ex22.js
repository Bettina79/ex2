let test = 10;

console.log(test)

const func = async () => {
    return "Success";
}

(async () => {
    console.log(func())
})()