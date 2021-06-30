

    import {jsonTreeFromURL} from "edam2json";

    var mainContainer = document.getElementById("myData");

    var url = prompt("Enter your url e.g https://raw.githubusercontent.com/edamontology/edamontology/main/EDAM_dev.owl")


    jsonTreeFromURL(
     url,
      (tree) => {
        mainContainer.textContent = JSON.stringify(tree, undefined, 4);
        ;
      }
    );  

  
  


  