let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')
let box5 = document.querySelector('.box5')
let box6 = document.querySelector('.box6')
let box7 = document.querySelector('.box7')
let box8 = document.querySelector('.box8')
let box9 = document.querySelector('.box9')
let box10 = document.querySelector('.box10')
let box11 = document.querySelector('.box11')
let box12 = document.querySelector('.box12')

//makes the buttons change the box color to the button color this code sucks ik
box1ChangeColor1 = () =>{
    box1.style.background = '#19191a' //1
}

box1ChangeColor2 = () =>{
    box1.style.background = '#3e2152' //2
}

box1ChangeColor3 = () =>{   
    box1.style.background = '#68f760' //3
}


//box2
box2ChangeColor1 = () =>{
    box2.style.background = '#731818' //4
}

box2ChangeColor2 = () =>{
    box2.style.background = '#141414' //5
}

box2ChangeColor3 = () =>{
    box2.style.background = '#383685' //6
}


//box3
box3ChangeColor1 = () =>{
    box3.style.background = '#2e752a' //7
}

box3ChangeColor2 = () =>{
    box3.style.background = '#3f5252' //8
}

box3ChangeColor3 = () =>{
    box3.style.background = '#857a18' //9
}


//box4
box4ChangeColor1 = () =>{
    box4.style.background = '#4a43fa' //10
}

box4ChangeColor2 = () =>{
    box4.style.background = '#3e1063' //11
}

box4ChangeColor3 = () =>{
    box4.style.background = '#1b1b1b' //12
}



//box5
box5ChangeColor1 = () =>{
    box5.style.background = '#12b57c'
}

box5ChangeColor2 = () =>{
    box5.style.background = '#2d12b5'
}

box5ChangeColor3 = () =>{
    box5.style.background = '#7d5280'
}

//box6
box6ChangeColor1 = () =>{
    box6.style.background = '#ad508d'
}

box6ChangeColor2 = () =>{
    box6.style.background = '#6112b5'
}

box6ChangeColor3 = () =>{
    box6.style.background = '#690a25'
}

//box7
box7ChangeColor1 = () =>{
    box7.style.background = '#506aad'
}

box7ChangeColor2 = () =>{
    box7.style.background = '#5093ad'
}

box7ChangeColor3 = () =>{
    box7.style.background = '#570e42'
}

//box8
box8ChangeColor1 = () =>{
    box8.style.background = '#50a7ad'
}

box8ChangeColor2 = () =>{
    box8.style.background = '#50ad86'
}

box8ChangeColor3 = () =>{
    box8.style.background = '#bd774f'
}

//box9
box9ChangeColor1 = () =>{
    box9.style.background = '#f3ff52'
}

box9ChangeColor2 = () =>{
    box9.style.background = '#171616'
}

box9ChangeColor3 = () =>{
    box9.style.background = '#38542f'
}

//box10
box10ChangeColor1 = () =>{
    box10.style.background = '#1b1b1b'
}

box10ChangeColor2 = () =>{
    box10.style.background = '#992820'
}

box10ChangeColor3 = () =>{
    box10.style.background = '#b5ad12'
}


//to change the text and have it cycle different paragraphs and headers
textCycle = () => {
    const h1P1 = document.querySelector('.h1P1')
    const p1H1 = document.querySelector('.p1H1')

    if(h1P1.textContent == "header"){
        h1P1.textContent = "Why us?"
        p1H1.textContent = "because we are the best when it comes to blah blah, we are comited to bringing you the best when it comes to blah blah"
    }

    else if(h1P1.textContent == "Why us?"){
        h1P1.textContent = "we do it better"
        p1H1.textContent = "because we are the best when it comes to blah blah, we are comited to bringing you the best when it comes to blah blah"
    }

    else{
        h1P1.textContent = "header"
        p1H1.textContent = "because we are the best when it comes to blah blah, we are comited to bringing you the best when it comes to blah blah Recusandae excepturi nihil fugiat tenetur error vitae perspiciatis sit, illum impedit."
    }
}

let pizza = 24
let button = 3

console.log(pizza * button);
