
var dId = 1;

fetching("data1.json");

function fetching(jsonstr){
    fetch(jsonstr)
        .then(response => response.json())
        .then(data => {
            indata = data.list
            BadApple(indata);
        })
}

/*
data1 = frames 1-2000
data2 = frames 2001-4000
data3 = frames 4001-6000
data4 = frames 6001-6572
*/

var Drawing = 0;
var cf = 1;

//BadApple();
async function BadApple(data){

    // fr = first row of current frame
    // sr = second row
    // er = end row : last row of current frame

    //var fps = 30;
    var fr = 0;
    var sr = 1;
    var er;


    for(let z = 2000; z>0;) {
        Drawing = 1;
        er = sr+35;
        //console.log("First row in data of current frame:",fr,"|Last row in data of current frame:",er,"| Current frame:",cf)
        //console.log("f:",cf)
        Draw(data, fr, er)
        fr+=36;
        sr+=36;
        cf++;
        z--;       
        await sleep(30)
    }
    dId++;
    fetching("data"+dId+".json")
}

/*
var colorArray1 = [
    "darkred",
    "crimson",
    "indianred"
]
var colorArray2 = [
    "midnightblue",
    "navy",
    "darkblue"
]*/


async function Draw(frame, fr, er){
    var color;
    var pcolor; // previous color
    var idNr = 1;
    for(let i = fr; i<er; i++) {

        for(let j = 0; j<48; j++) {
            var y = "p"+idNr;

            if(frame[i][j]==true){
                //color = colorArray1[Math.floor(Math.random() * 3) + 1]
                color="white";
            }
            else if(frame[i][j]==false){
                //color = colorArray2[Math.floor(Math.random() * 3) + 1]
                color="black"
            }
            pixels = document.getElementById(y);
            pcolor = pixels.style.background;
            if(pcolor !== color){
                pixels.style.background = color;
            }
            idNr++;
        }
    }
    Drawing = 0;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
