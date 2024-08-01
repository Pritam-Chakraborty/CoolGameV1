
colourlist = ['red','green','blue','pink','magenta','violet']
currentcolour = []
userchoice = []


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}



function play(){
    document.getElementById("game").style.visibility = "visible";
    
    countdown = 10
    if(countdown == 10){
        let interval1 = setInterval(()=>{
            countdown--
            document.getElementById("currentColour").innerHTML = "Starting in :" + countdown
            if(countdown == 0){
                clearInterval(interval1)
                colourselect()
                if(userchoice.length == currentcolour.length){
                    submit()
                }
            }
        },1000)
    }
    
}
function colourselect(){
    count = 4
    while(count > 0){
        x = getRandomNumber(0,5)
        currentcolour.push(colourlist[x])
        count--
    }
    console.log(currentcolour)
}

function red(){
    userchoice.push('red')
    console.log('red')
}
function green(){
    userchoice.push('green')
    console.log('green')
}
function blue(){
    userchoice.push('blue')
    console.log('blue')
}
function pink(){
    userchoice.push('pink')
    console.log('pink')
}
function magenta(){
    userchoice.push('magenta')
    console.log('magenta')
}
function violet(){
    userchoice.push('violet')
    console.log('violet')
}

function submit(){
    console.log(userchoice)
    if(arraysEqual(currentcolour,userchoice) == true){
        console.log("You win!")
        document.getElementById("currentColour").innerHTML = "YOU WINN"
        
    }
}