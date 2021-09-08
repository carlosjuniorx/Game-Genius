let playPc = []
let playPlayer= []
let score = 0;

const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')
const meio = document.querySelector('.meio')
const over = document.querySelector('.lose')
const button = document.querySelector('.reload')
let stop = 0

const fa = document.getElementById("fa")
const mi = document.getElementById("mi")
const re = document.getElementById("re")
const sol = document.getElementById("sol")
const buttons = document.getElementById("buttons")
const go = document.getElementById('go')


const pcplaying = ()=>{
    
    if(stop == 1){
         return
    }

    let choseePc = Math.floor(Math.random()*4)
    playPc[playPc.length] = choseePc
    playPlayer = []

    for(let i in playPc){
        let colorPC = numberToColor(playPc[i])
        actionPc(colorPC, Number(i)+1)         
    }
}

const actionPc=(color, time)=>{
    time=time*800
    setTimeout(()=>{
        color.classList.add('selected')
        playmusica(color)
    },time-250)
    setTimeout(()=>{
        color.classList.remove('selected')
    },time+300)

}

const actionPlayer = (color)=>{
    playPlayer[playPlayer.length]=color
    numberToColor(color).classList.add('selected')
    playmusica(numberToColor(color))
    setTimeout(()=>{
        numberToColor(color).classList.remove('selected')
    },250)
    checkedPlay()
}
const numberToColor= (num)=>{
    if(num ==0){
        return green
    }else if(num==1){
        return red
    }else if(num==2){
        return yellow
    }else{
        return blue
    }
}

const playmusica = (m)=>{
    if(m==green){
        fa.play()
    }
    else if(m==red){
        mi.play()
    }
    else if(m==yellow){
        re.play()
    }
    else{
        sol.play()
    }
}
const checkedPlay=()=>{
    for(let i in playPlayer){
        if(playPlayer[i]!=playPc[i]){

            gameOver()           
        }
    }
        
    if(playPlayer.length==playPc.length){
        setTimeout(()=>{
            nextLevel()
        },700)
    }
    
    
}
const nextLevel=()=>{
    score++
    pcplaying()
}
const clickMeio = ()=>{
    playPc=[]
    playPlayer=[]
    score=0
    buttons.play()
    setTimeout(()=>{
        pcplaying()  
    },500)
    meio.classList.add('selected')
    setTimeout(()=>{
        meio.classList.remove('selected')
    },250)
    
}
const gameOver=()=>{
    //let scoreFinal = document.createTextNode(score)
    go.play()
    stop=1
    over.append(score)
    over.classList.remove('none')
    meio.classList.add('none')

}
const clickReload=  ()=>{
    button.classList.add('selected')
    buttons.play()
    setTimeout(()=>{
        document.location.reload(true)
    },800)
}

green.onclick = () => actionPlayer(0)
red.onclick = () => actionPlayer(1)
yellow.onclick = () => actionPlayer(2)
blue.onclick = () => actionPlayer(3)
meio.onclick = () => clickMeio()
button.onclick = () => clickReload()


/* const lightColor = (element,time)=>{
    time=time*800
    setTimeout(()=>{
        element.classList.add('selected')
    },time-250)
    clearTimeout()
    setTimeout(()=>{
        element.classList.remove('selected')
    },time+250)      
        
} */

/* const checkOrder=()=>{
    for(let i in clickOrders){
        if(clickOrders[i] != orders[i]){
            gameOver()
            break
        }
    }
    if(clickOrders.length == orders.length){
        setTimeout(()=>{
            nextLevel()
        },1000)
    }
}

const click = (num)=>{
    clickOrders[clickOrders.length] = num
    if(num ==0){
        controlLight(green)
    }else if(num==1){
        controlLight(red)
    }else if(num==2){
        controlLight(yellow)
    }else{
        controlLight(blue)
    }
    checkOrder()
}

const createColorElement = (num)=>{
    if(num ==0){

        controlLight(green)
    }else if(num==1){
 
        controlLight(red)
    }else if(num==2){
 
        controlLight(yellow)
    }else{

        controlLight(blue)
    }
}

const controlLight=(colory)=>{
    setTimeout(()=>{
        colory.classList.add('selected')
        playmusica(colory)
    },100)
    setTimeout(()=>{
        colory.classList.remove('selected')
    },400)
}

const nextLevel=()=>{
    score++
    shuffleOrder()
    
}

const gameOver=()=>{
    alert('Pontuação '+ score + '\n Você Perdeu o Jogo.\n click em OK para reiniciar')
    orders=[]
    clickOrders=[]
    score=0
    document.location.reload(true)
}

const playGame=()=>{
    orders=[]
    clickOrders=[]
    score=0
    shuffleOrder()
}


green.onclick = () => createColorElement(0)
red.onclick = () => createColorElement(1)
yellow.onclick = () => createColorElement(2)
blue.onclick = () => createColorElement(3)
meio.onclick = () => {
    playGame()   
    meio.classList.add('selected')
    setTimeout(()=>{
        meio.classList.remove('selected')
    },250)
} */


