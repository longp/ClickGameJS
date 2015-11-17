
var btn = document.getElementsByTagName("button");
var counter= 0;
//var finalCount=[];


 function start() {
  setTimeout(timer, 20000)
}

function timer () {
  alert("You got "+ counter)
}

for (i=0; i<btn.length; i++) {
   
        btn[i].addEventListener("click", countClick);
   
  }

function countClick() {
      var clicks = false;
      

      while (clicks != true && counter <=19){
        clicks =true;
        counter++;
        
  


        
        
        return;

      }
      }
  
  

/* Tried to make another array to read boolean values, didnt know how 2
for(var i= 0, l = btn.length; i< l; i++){
    if(btn[i] === "true" ){
    finalCount.push(btn[i]);
    counter++;
    alert(counter);
  }
}
*/




 