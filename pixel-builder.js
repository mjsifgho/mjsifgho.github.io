
// Max width in screen = 1902
// Max height in screen = 1078

var Screen = false;

var xP = 48;
var yP = 36;

var pixelW;
var pixelH;

var colorP;

var mainFrame = document.getElementById("mainframe");

//mainFrame.style.width = "1902px";
//mainFrame.style.height = "1078px";

mainFrame.style.width = "192px";
mainFrame.style.height = "144px";

// Function which creates the pixels
function createScreen(){

    if(Screen == false){
        var idd = 1;
        var rowId = 1;

        // for loop, creating the Rows
        for(let i = 0; i<yP; i++){

            var Row = document.createElement("div");
            Row.className = "Row";

            Row.id = "Row"+rowId;
            Row.style.width = "192px";
            Row.style.height = "4px";
            mainFrame.appendChild(Row);

            // nested for loop, creating the pixels within every Row
            for(let i = 0; i<xP; i++){
                var RowElement = document.getElementById("Row"+rowId)

                var pixel = document.createElement("div");
                pixel.style.backgroundColor = colorP;
                pixel.className = "p";
                //pixel.id = "pixel"+rowId+","+pixelId;
                pixel.id = "p"+idd;
                //pixel.style.background = "white"
                RowElement.appendChild(pixel);
                idd++;
            }
            Screen = true;
            rowId++;

        }

    }
    else{

        const elements = document.getElementsByClassName("row");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        Screen = false;
        createScreen();
    }


}

createScreen();
