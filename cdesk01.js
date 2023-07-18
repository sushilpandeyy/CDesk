var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter" || event.key === "Return") {
      //console.log(document.getElementById("myInput").value)}});
      click();
       document.getElementById("myInput").value="";
      }
      
      });
function click(){
  if(document.getElementById("myInput").value=="Scrimba" || document.getElementById("myInput").value=="scrimba"){
    window.open("https://scrimba.com/learn/learnreact", "_self")   
  }
  else if(document.getElementById("myInput").value=="Codechef" || document.getElementById("myInput").value=="codechef" || document.getElementById("myInput").value=="cc"){
    window.open("https://www.codechef.com/learn/dashboard", "_self")   
  }
  else if(document.getElementById("myInput").value=="mail" || document.getElementById("myInput").value=="gmail" || document.getElementById("myInput").value=="Gmail"){
    window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl", "_self")   
  }
  else if(document.getElementById("myInput").value=="medium"){
    window.open("https://medium.com/me/stories/drafts", "_self")
  }
  else if(document.getElementById("myInput").value=="help"){
    window.open("https://chat.openai.com/", "_self")
  }
  else if(document.getElementById("myInput").value=="dev"){
    window.open("https://devfolio.co/hackathons", "_self")
  }
  else if(document.getElementById("myInput").value=="github"){
    window.open("https://github.com/sushilpandeyy/", "_self")
  }
  else{
    window.open("https://www.google.com/search?q="+document.getElementById("myInput").value, "_self")
  }
}
      