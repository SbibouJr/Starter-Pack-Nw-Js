let fs = require('fs');

nw.Window.get().showDevTools();

window.addEventListener("load", function(e) {

  const mainElt = document.getElementById("container-fluid");

  let circlesElt = document.querySelectorAll('.circle');

  for (let i = 0; i < circlesElt.length;i++){
    let cpt = 0;
    window.setInterval( e => {
      if (cpt < 360){
        cpt += 2;
      }
      else{
        cpt = 0;
      }
      circlesElt[i].style.transform = 'rotate('+cpt+'deg)';
    }, 200);
  }

  function injectElement(data, title){
    let element = document.createElement('div');

    let h2Elt = document.createElement('h2');
    h2Elt.appendChild(document.createTextNode(title));

    let preElt = document.createElement('pre');
    let codeElt = document.createElement('code');
    codeElt.appendChild(document.createTextNode(data));

    preElt.appendChild(codeElt);
    element.appendChild(h2Elt);
    element.appendChild(preElt);
    mainElt.appendChild(element);
  }

  fs.readFile('index.html', "utf-8", (err, data) => {
    if (err) throw err;
    injectElement(data, "Contenu du fichier Html");
  });

  fs.readFile('style.css', "utf-8", (err, data) => {
    if (err) throw err;
    injectElement(data, "Contenu du fichier Css");
  });

  fs.readFile('index.js', "utf-8", (err, data) => {
    if (err) throw err;
    injectElement(data, "Contenu du fichier Javascript");
  });

});
