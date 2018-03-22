let sel; //variable for the dropdown box
let currency = "GBP"; //variable for the currency
let coin = ["bitcoin", "ethereum", "ripple", "bitcoin-cash", "cardano", "nem",
"litecoin", "stellar", "iota", "tron", "dash", "neo", "monero", "eos", "icon",
"qtum", "deepbrain-chain", "ethereum-classic"]; //array for the coins
let jsondata; //array for the jsondata
let mapColor = []; //array for the colours
let finalColor1; //variable for the first bar chart
let finalColor2; //for the second bar chart
let finalColor3; //for the third
function preloadX() {
  background(200, 255, 255); //refreshes the background once the currency is changed
  for (let i=0; i<coin.length; i++) {
    //For each position of the array, load a JSON object
    let url = "https://api.coinmarketcap.com/v1/ticker/"+coin[i]+"/?convert="+currency;
    loadJSON ("https://api.coinmarketcap.com/v1/ticker/"+coin[i]+"/?convert="+currency, getData);
    //currency can be selected from the drop down box menu and will show the price of the coin
    //in that currency (e.g: euro, or pound)
  }
}

function getData(data){
  jsondata = data; //read json data
  for (let i = 0; i < jsondata.length; i++) {
    //for each position of the array, load the currencies

    if (jsondata[i].percent_change_7d<-10){
      //this one is for percentage change in 24h
      finalColor1 = mapColor[0];
      //if the perentage change is below -10 then it will be dark red
    } else if (jsondata[i].percent_change_7d>-10 && jsondata[i].percent_change_7d<0){
      finalColor1 = mapColor[1];
      //if the perentage change is below 0 then it will be light red
    } else if (jsondata[i].percent_change_7d>0 && jsondata[i].percent_change_7d<10){
      finalColor1 = mapColor[2];
      //if the perentage change is between 0 and 10 then it will be light green
    } else if (jsondata[i].percent_change_7d>10){
      finalColor1 = mapColor[3];
      //if the perentage change is above 10 then it will be green
    }

    if (jsondata[i].percent_change_24h<-10){
      //this one is for percentage change in 24h
      finalColor2 = mapColor[0];
      //if the perentage change is below -10 then it will be dark red
    } else if (jsondata[i].percent_change_24h>-10 && jsondata[i].percent_change_24h<0){
      finalColor2 = mapColor[1];
      //if the perentage change is below 0 then it will be light red
    } else if (jsondata[i].percent_change_24h>0 && jsondata[i].percent_change_24h<10){
      finalColor2 = mapColor[2];
      //if the perentage change is between 0 and 10 then it will be light green
    } else if (jsondata[i].percent_change_24h>10){
      finalColor2 = mapColor[3];
      //if the perentage change is above 10 then it will be green
    }

    if (jsondata[i].percent_change_1h<-10){
      //this one is for percentage change in 24h
      finalColor3 = mapColor[0];
      //if the perentage change is below -10 then it will be dark red
    } else if (jsondata[i].percent_change_1h>-10 && jsondata[i].percent_change_1h<0){
      finalColor3 = mapColor[1];
      //if the perentage change is below 0 then it will be light red
    } else if (jsondata[i].percent_change_1h>0 && jsondata[i].percent_change_1h<10){
      finalColor3 = mapColor[2];
      //if the perentage change is between 0 and 10 then it will be light green
    } else if (jsondata[i].percent_change_1h>10){
      finalColor3 = mapColor[3];
      //if the perentage change is above 10 then it will be green
    }
  }
  getCoins(jsondata, "bitcoin", 0, 0); //if the coin is bitcoin, don't change the position
  getCoins(jsondata, "ethereum", 200, 0); //the next one is moved 200px to the right
  getCoins(jsondata, "ripple", 400, 0); //and so on
  getCoins(jsondata, "bitcoin-cash", 600, 0);
  getCoins(jsondata, "cardano", 800, 0);
  getCoins(jsondata, "nem", 1000, 0); //each row contains 6 different coins
  getCoins(jsondata, "litecoin", 0, 200); //the next one is positioned 200px down
  getCoins(jsondata, "stellar", 200, 200);
  getCoins(jsondata, "iota", 400, 200);
  getCoins(jsondata, "tron", 600, 200);
  getCoins(jsondata, "dash", 800, 200);
  getCoins(jsondata, "neo", 1000, 200);
  getCoins(jsondata, "monero", 0, 400); //and so on
  getCoins(jsondata, "eos", 200, 400);
  getCoins(jsondata, "icon", 400, 400);
  getCoins(jsondata, "qtum", 600, 400);
  getCoins(jsondata, "deepbrain-chain", 800, 400);
  getCoins(jsondata, "ethereum-classic", 1000, 400);

}
function mousePressed() {
  if (mouseX>60 && mouseX<250 && mouseY>40 &&mouseY<225){
    //if you press inside the box of each currency it should open a new tab/window
    // with a website that contains more information
    window.open("https://coinmarketcap.com/currencies/bitcoin/");
  } else if (mouseX>260 && mouseX<450 && mouseY>40 &&mouseY<225){
      window.open("https://coinmarketcap.com/currencies/ethereum/");
  } else if (mouseX>460 && mouseX<650 && mouseY>40 &&mouseY<225){
      window.open("https://coinmarketcap.com/currencies/ripple/");
  } else if (mouseX>660 && mouseX<850 && mouseY>40 &&mouseY<225){
      window.open("https://coinmarketcap.com/currencies/bitcoin-cash/");
  } else if (mouseX>860 && mouseX<1050 && mouseY>40 &&mouseY<225){
      window.open("https://coinmarketcap.com/currencies/cardano/");
  } else if (mouseX>1060 && mouseX<1250 && mouseY>40 &&mouseY<225){
      window.open("https://coinmarketcap.com/currencies/nem/");
  } else if (mouseX>60 && mouseX<250 && mouseY>240 &&mouseY<425){
      window.open("https://coinmarketcap.com/currencies/litecoin/");
  } else if (mouseX>260 && mouseX<450 && mouseY>240 &&mouseY<425){
      window.open("https://coinmarketcap.com/currencies/stellar/");
  } else if (mouseX>460 && mouseX<650 && mouseY>240 &&mouseY<425){
      window.open("https://coinmarketcap.com/currencies/iota/");
  } else if (mouseX>660 && mouseX<850 && mouseY>240 &&mouseY<425){
      window.open("https://coinmarketcap.com/currencies/tron/");
  } else if (mouseX>860 && mouseX<1050 && mouseY>240 &&mouseY<425){
      window.open("https://coinmarketcap.com/currencies/dash/");
  } else if (mouseX>1060 && mouseX<1250 && mouseY>240 &&mouseY<425){
      window.open("https://coinmarketcap.com/currencies/neo/");
  } else if (mouseX>60 && mouseX<250 && mouseY>440 &&mouseY<625){
      window.open("https://coinmarketcap.com/currencies/monero/");
  } else if (mouseX>260 && mouseX<450 && mouseY>440 &&mouseY<625){
      window.open("https://coinmarketcap.com/currencies/eos/");
  } else if (mouseX>460 && mouseX<650 && mouseY>440 &&mouseY<625){
      window.open("https://coinmarketcap.com/currencies/icon/");
  } else if (mouseX>660 && mouseX<850 && mouseY>440 &&mouseY<625){
      window.open("https://coinmarketcap.com/currencies/qtum/");
  } else if (mouseX>860 && mouseX<1050 && mouseY>440 &&mouseY<625){
      window.open("https://coinmarketcap.com/currencies/deepbrain-chain/");
  } else if (mouseX>1060 && mouseX<1250 && mouseY>440 &&mouseY<625){
      window.open("https://coinmarketcap.com/currencies/ethereum-classic/");
  }
}
function getCoins(dataIn, coinToCheck, x, y){
  //dataIn = jsondata, coinToCheck = each coin from the code above, x = width, y = height
  push(); //starts a new state
  translate(x, y); //moves each coin to the desired position

  for (let i = 0; i < dataIn.length; i++) {
    //for each coin, load the information below
    if (dataIn[i].id == coinToCheck){
      //do this for each coin
      strokeWeight(0.1); //changes the strokeWeight, in this case it's very thin
      fill(255, 150); //slightly transparent white
      rect(55, 35, 190, 190, 20); //this rectangle has rounded edges and is behind the text and bar chart
      strokeWeight(1); //normal strokeWeight
      stroke(0, 100); //stroke is black
      line(80, height/4-40, 220, height/4-40) //create a line for the bar chart

      noStroke(); //removes the stroke
      fill(finalColor1); //the colour for the bar chart, which I have created an interactive loop for
      rect(95, height/4-40, 30, -(dataIn[i].percent_change_7d * 1.3));
      //bar chart for for the percentage change in 7 days
      fill(finalColor2);
      rect(135, height/4-40, 30, -(dataIn[i].percent_change_24h * 1.5));
      //bar chart for the percentage change in 24 hours
      fill(finalColor3);
      rect(175, height/4-40, 30, -(dataIn[i].percent_change_1h * 1.5));
      //bar chart for the percentage change in 1 hour
      fill(0); //fill for the text is black
      text(dataIn[i].name, 150, height/4-110); //name of the coin
      text("Price: $" + dataIn[i].price_usd, 150, height/4-90); //price of the coin in us dollars
      text("Market Cap: $" + dataIn[i].market_cap_usd, 150, height/4-70);
      //market cap of the coin in us dollars
      text("% Change in 1h: " + dataIn[i].percent_change_1h + "%", 150, height/4-50);
      //percentage change of the price of the coin in 1 hour
      text("% Change in 24h: " + dataIn[i].percent_change_24h + "%", 150, height/4-30);
      //percentage change of the price of the coin in 24 hours
      text("% Change in 7d: " + dataIn[i].percent_change_7d + "%", 150, height/4-10);
      //percentage change of the price of the coin in 7 days
      text("Price: £" + dataIn[i].price_gbp, 150, height/4+10);
      //this is where i show the price of the coin in the chosen currency
      fill(0, 0, 255);
      text("Click here for more data", 150, height/4+30);
    }
  }
  pop(); //end of the drawing state, return to the original state for each coin
}

function setup() {
  mapColor[0] = color(200, 0, 0, 150); //first colour is red
  mapColor[1] = color(255, 120, 120, 150); //second is light red
  mapColor[2] = color(120, 255, 120, 150); //third is light green
  mapColor[3] = color(0, 200, 0, 150); //fourth is green
  preloadX(); //load the page

  var canvas = createCanvas(1280, 720); //canvas is 1280x720px
  canvas.parent("CanvasContainer"); //CanvasContainer to position it in the middle
  noLoop(); //don't loop
  background(200, 255, 255); //background colour is light cyan
  textAlign(CENTER); //align text to the centre
}
