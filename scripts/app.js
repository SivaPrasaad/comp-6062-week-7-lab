let inputElement = document.querySelector("#numberInput"); //queryselects the numberInput to input
inputElement.addEventListener("input",Conduct);     //eventlistener where it calls the function Conduct
function Conduct()
{
    if(inputElement.value>=10||inputElement.value<=-10)
        {
            alert("The number should be between -10 and 10");
        }
}

const Fruit={
    Name:"Apple",
    Color:"Red",
    Taste:"Sweet/Sour"
}

let fruitName = document.querySelector("#frtname");
fruitName.innerHTML=`Name: ${Fruit.Name}`;

let fruitColor=document.querySelector("#frtcolor");
fruitColor.innerHTML=`Color: ${Fruit.Color}`;

let fruitTaste=document.querySelector("#frttaste");
fruitTaste.innerHTML=`Taste: ${Fruit.Taste}`;