var aboutIconDiv=document.getElementById("icon-divs");
var aboutIcon=document.getElementById("iconabout");
let allView=document.getElementsByClassName("view-div")

function showAboutSection(view)
 {
    console.log(allView);
    

    for(let i=0;i<allView.length;i++){
        if(view==i){
            console.log("equal",view);
            
            allView[i].style.display ="block";
        }
        else{
            console.log("not",view);
            allView[i].style.display ="none";
        }
    }
  
  
    
}
