let btn = document.querySelectorAll(".box");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");
let tie = document.querySelector(".tie");
let count = 0;
turn0 = true;
const winpattern = [
    [0,1,2],                      // basically we make the possible win pattern this is 2d array with which 
                                   //we will check who is the winner
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];



const btndisabled=()=>{
    for(let box of btn){
        box.disabled=true;
        
    }
}

const resetgame=()=>{
    turn0=ture;
    for( let box of btn){
        box.disabled=false;
        box.innerText="";
    msgcontainer.classList.add("msgcontainer");
}
}



btn.forEach((box) => {

    box.addEventListener("click", () => { 
        count=count+1;               //here we used foreach function to access each element
        if (turn0 === true) {                             // and add evenlistener to it  , we will check who if
            box.innerText = "O";                         // playing 0, x to check we use the condition of true 
            turn0 = false;                               // false  if turn0 will be true then 0 is playing   
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    }
    )


})




const checkWinner = () => {
    for (let pattern of winpattern) {
       let pos1=btn[pattern[0]].innerText;
       let pos2=btn[pattern[1]].innerText;
       let pos3=btn[pattern[2]].innerText;

       if(pos1 != "" &&  pos2 != "" && pos3 != "" ){

        if( pos1 === pos2 && pos2=== pos3){
            console.log("winner",pos1);
            msg.innerText=`CONGRATULATIONS WINNER IS ${pos1}`
            msgcontainer.classList.remove("msgcontainer");
            btndisabled();
            break;
        }
        else if ( count===9 ){
            msg.innerText="IT IS A DRAW";
            msgcontainer.classList.remove("msgcontainer");
            count=0;

        }

             
       }
          
    }

};



let newgaame = document.querySelector(".newgame");
let reset = document.querySelector(".reset");


reset.addEventListener("click", ()=>{
    turn0=true;
    for( let box of btn){
        box.disabled=false;
        box.innerText="";}
    msgcontainer.classList.add("msgcontainer");
});

newgaame.addEventListener("click", ()=>{
    turn0=true;
    for( let box of btn){
        box.disabled=false;
        box.innerText="";}
    msgcontainer.classList.add("msgcontainer");
});

    