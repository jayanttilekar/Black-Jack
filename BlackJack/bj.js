let cards = [];
let card_counter;
let sum ;


function btstart(){
      cards.length = 0
      let first = card_gen();
      cards[0] = first
      let sec = card_gen();
      cards[1] = sec
      sum=0;
      card_counter = 2;
     
    if(cards[0]+cards[1]===21)
    { 
        document.getElementById("instruc").innerHTML="You have got Black-Jack";
        document.getElementById("bjnewcard").style="display:none";    

    }else{
        document.getElementById("instruc").innerHTML="You are still in game";
        document.getElementById("bjnewcard").style="display:block";    
    }  
    card_display();
    sum_gen();
}

function card_display(){
    let disp = " ";
    let prev_cards = " ";
    for(let i=0;i<cards.length;i++)
    {
        disp = prev_cards+cards[i]+"  ";
        prev_cards = disp;
    }
    document.getElementById("bjcard").innerHTML = disp;
}

function btnewcard(){ 
  cards[card_counter] = card_gen();
  card_display();
  sum_gen();
  card_counter++;
  if(sum===21)
  {
    document.getElementById("instruc").innerHTML="You have got Black-Jack";   
   document.getElementById("bjnewcard").style="display:none";    
  }
  else if(sum > 21)
  {
    document.getElementById("instruc").innerHTML="You are out of the game";   
    document.getElementById("bjnewcard").style="display:none";
  }
}

function card_gen(){
    let num = Math.floor((Math.random()*10))+1;
    if(num===1)
    {
      return 11;  
    }
    return num;
}

function sum_gen(){
    sum=0;
    for(let i=0;i<cards.length;i++)
    {
      sum = sum + cards[i];
    }
    document.getElementById("bjsum").innerHTML= sum;
}