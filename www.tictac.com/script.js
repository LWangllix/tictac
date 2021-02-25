const a=[null,'x','O']
const lentele=[
[00,01,02,03,04],
[10,11,12,13,14],
[20,21,22,23,24],
[30,31,32,33,34],
[40,41,42,43,44]]
console.log(a)
var turn=true;
var start=false;
var boardSize=0;
function onClicked(e)
{
    
    if(e.target.innerHTML=="" && start==true)
    {
    if(turn)
    {
    e.target.innerHTML='X'
    }
    else{
        e.target.innerHTML='O'
    }
    turn= !turn;   

   someoneWin()
}
else{
    alert("negali ")
}
}

function someoneWin()
{
    for(let i=0;i<boardSize;i++){
        let count=0;
       
         for(let j=0;j<boardSize;j++){
            
         if(document.getElementById("box").childNodes[i].childNodes[j].innerHTML=='X') 
         {
           
             count++
             
             if(count==3)
             {
                 
                 alert('laimejo iksas')
                 calc(boardSize)//1
                 break;
             }
           
             
         }
         else{
           
             count=0
         }
         
        
         }
         count=0;
        
     }
    
    for(let i=0;i<boardSize;i++){
       let count=0;
      
        for(let j=0;j<boardSize;j++){
           
        if(document.getElementById("box").childNodes[j].childNodes[i].innerHTML=='X') 
        {
          
            count++
            
            if(count==3)
            {
                
                alert('laimejo iksas')
                calc(boardSize)//2
                break;
            }
          
            
        }
        else{
          
            count=0
        }
        
       
        }
        count=0;
       
    }

    for(let i=boardSize-1;i>0;i--){
        let count=0;
        for(let j=0;j<boardSize-i;j++)
        {
            if(document.getElementById("box").childNodes[i+j].childNodes[j].innerHTML=='X') 
            {
              
                count++
                
                if(count==3)
                {      
                    alert('laimejo iksas')
                    calc(boardSize) //3
                    break;
                }
              
                
            }
            else{
              
                count=0
            }
            
        }
        count=0
        
    }

    for(let i=0;i<boardSize;i++)
{          let count=0;
    for(let j=0;j<boardSize-i;j++)
    {
        if(document.getElementById("box").childNodes[j].childNodes[i+j].innerHTML=='X') 
        {
          
            count++
            
            if(count==3)
            {
                
                alert('laimejo iksas')
                calc(boardSize)//4
               
                break;
            }
          
            
        }
        else{
          
            count=0
        }
        
    }
    count=0
}

for(let i=0;i<boardSize;i++){
    let count=0;
    for(let j=0;j<i+1;j++)
    {
        if(document.getElementById("box").childNodes[j].childNodes[i-j].innerHTML=='X') 
        {
          
            count++
            
            if(count==3)
            {
                
                alert('laimejo iksas')
                calc(boardSize)//5
                
                break;
            }
          
            
        }
        else{
          
            count=0
        }
        
    }
    count=0
}

for(let i=0;i<boardSize;i++){
    let k=0;
    let count=0;
    for(let j=boardSize-1;j>i-1;j--)
    {

        if(document.getElementById("box").childNodes[i+k].childNodes[j].innerHTML=='X') 
        {
          
            count++
            
            if(count==3)
            {
                
                alert('laimejo iksas')
                calc(boardSize)//6
                break;
            }
          
            
        }
        else{
          
            count=0
        }
        k++;
    }
    k=0
    count=0;
}

for(let i=0;i<boardSize;i++){
    let count=0;
   
     for(let j=0;j<boardSize;j++){
        
     if(document.getElementById("box").childNodes[i].childNodes[j].innerHTML=='O') 
     {
       
         count++
         
         if(count==3)
         {
            
            alert('laimejo nuliukas')
             calc(boardSize)//7
             break;
         }
       
         
     }
     else{
       
         count=0
     }
     
    
     }
     count=0;
    
 }

for(let i=0;i<boardSize;i++){
   let count=0;
  
    for(let j=0;j<boardSize;j++){
       
    if(document.getElementById("box").childNodes[j].childNodes[i].innerHTML=='O') 
    {
      
        count++
        
        if(count==3)
        {
            
            alert('laimejo nuliukas')
            calc(boardSize)//8
            break;
        }
      
        
    }
    else{
      
        count=0
    }
    
   
    }
    count=0;
   
}

for(let i=boardSize-1;i>0;i--){
    let count=0;
    for(let j=0;j<boardSize-i;j++)
    {
        if(document.getElementById("box").childNodes[i+j].childNodes[j].innerHTML=='O') 
        {
          
            count++
            
            if(count==3)
            {      
                alert('laimejo nuliukas')
                calc(boardSize)  //9
                break;
            }
          
            
        }
        else{
          
            count=0
        }
        
    }
    count=0
    
}

for(let i=0;i<boardSize;i++)
{     let count=0;
for(let j=0;j<boardSize-i;j++)
{
    if(document.getElementById("box").childNodes[j].childNodes[i+j].innerHTML=='O') 
    {
      
        count++
        
        if(count==3)
        {
            
            alert('laimejo nuliukas')
            calc(boardSize)//10
           
            break;
        }
      
        
    }
    else{
      
        count=0
    }
    
}
count=0
}

for(let i=0;i<boardSize;i++){
    let count=0;
for(let j=0;j<i+1;j++)
{
    if(document.getElementById("box").childNodes[j].childNodes[i-j].innerHTML=='O') 
    {
      
        count++
        
        if(count==3)
        {
            
            alert('laimejo nuliukas')
            calc(boardSize)//11
            
            break;
        }
      
        
    }
    else{
      
        count=0
    }
    
}
count=0
}

for(let i=0;i<boardSize;i++){
let k=0;
let count=0;
for(let j=boardSize-1;j>i-1;j--)
{

    if(document.getElementById("box").childNodes[i+k].childNodes[j].innerHTML=='O') 
    {
      
        count++
        
        if(count==3)
        {
            
            alert('laimejo nuliukas')
            calc(boardSize)//12
            
            break;
        }
      
        
    }
    else{
      
        count=0
    }
    k++;
}
k=0
count=0;
}
 let full=0
for(let i=0;i<boardSize;i++){
    
   
     for(let j=0;j<boardSize;j++){
        
     if(document.getElementById("box").childNodes[i].childNodes[j].innerHTML!="") 
     {
       
         full++
         
     }
    
 }

}
if(full==boardSize*boardSize)
{
    alert("lygiosios")
    calc(boardSize)
}
}

function change(){
    start=false;
    var select = document.getElementById('select').value;
    if(select=='3x3')
    {
       calc(3)
    }
    if(select=='4x4')
    {
        calc(4) 
    }
    if(select=='5x5')
    {
      calc(5)
    }
}

function calc(size)
{

    start=false

    boardSize=size;
    var c = document.getElementById("box").childElementCount;
    while(c!=0)
    {
        document.getElementById("box").removeChild(document.getElementById("box").lastElementChild);
        c = document.getElementById("box").childElementCount;
    }
    
    while(c!=size)
    {
        var div = document.createElement("div");
         div.classList.add('row');
        
        let s=div.childElementCount;
       while(s!=size)
    {

        var dix=document.createElement("div")
        dix.classList.add("column")
        dix.onclick = onClicked
        div.appendChild(dix);
        s=div.childElementCount;
    
    }
        document.getElementById("box").appendChild(div)
        c = document.getElementById("box").childElementCount;
    }
   var mygtukai=document.createElement("div")
    var button=document.createElement("button")
    button.innerHTML="X"
    button.onclick=clickas
    mygtukai.appendChild(button)
    var button0=document.createElement("button")
    button0.innerHTML="O"
    button0.onclick=clickas0
    mygtukai.appendChild(button0)
    document.getElementById('box').appendChild(mygtukai)

  

}

function clickas(e)
{
    turn=true
    start=true
    document.getElementById('box').removeChild(document.getElementById("box").lastElementChild);
   

}
function clickas0(e)
{
    turn=false
    start=true;
    alert(turn)
    document.getElementById('box').removeChild(document.getElementById("box").lastElementChild);
    

}



for(let i=0;i<lentele;i++){
    for(let j=0;j<lentele[i].length;j++){
       console.log(lentele[j][i])
    }
   
}

console.log(lentele)

for(let i=0;i<lentele.length;i++){
    for(let j=0;j<lentele[i].length;j++){
       console.log(lentele[j][i])
    }
   
}

console.log(lentele)
for(let i=lentele.length-1;i>0;i--){
    for(let j=0;j<lentele.length-i;j++)
    {
        console.log(lentele[i+j][j])
    }
    console.log('/n')
}

for(let i=0;i<lentele.length;i++)
{
    for(let j=0;j<lentele.length-i;j++)
    {
        console.log(lentele[j][i+j])
    }
    console.log('/naa')
}

for(let i=0;i<lentele.length;i++){
    for(let j=0;j<i+1;j++)
    {
        console.log(lentele[j][i-j])
    }
    console.log('/m')
}

for(let i=0;i<lentele.length;i++){
    let k=0;
    for(let j=lentele.length-1;j>i-1;j--)
    {
         
        console.log(lentele[i+k][j])
        k++;
    }
    k=0
    console.log('/mnn')
}
