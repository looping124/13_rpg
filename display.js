export default class Display{
  constructor(text){
  this.text = text;
  this.displayText(this.text);
  }
  displayText(text){
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode(text);
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);

    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById('last_div');
    document.body.insertBefore(newDiv, currentDiv);
  }

  displayChoice(){
    for (var i = 0; i < arguments.length; i++) {
      this.displayText(arguments[i]);
    }
  }
}

export class DisplayButtons {
  constructor(arrayButtons){
    arrayButtons.forEach(objectButton => {
      this.createButton(objectButton); 
    });
  }

  createButton(objectButton){
    let btn = document.createElement("button");
    btn.innerHTML = objectButton.text;
    var currentDiv = document.getElementById('last_div');
    document.body.insertBefore(btn, currentDiv);
    btn.setAttribute("id", objectButton.text);

    //create event listener
    btn.addEventListener('click', e => {
      objectButton.action();

    })
  }

  value(){
    return "AZEAZEZEEAZEZA";
  }

  resetId(){

  }

}