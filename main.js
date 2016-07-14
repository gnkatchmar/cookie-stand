//objects
var loc0 = {
  store: 'Pioneer Square',
  minCust: 17,
  maxCust: 88,
  avgSale: 5.2,
  hourly: [],
  total: 0
};

var loc1 = {
  store: 'Portland Airport',
  minCust: 6,
  maxCust: 24,
  avgSale: 1.2,
  hourly: [],
  total: 0
};

var loc2 = {
  store: 'Washington Square',
  minCust: 11,
  maxCust: 38,
  avgSale: 1.9,
  hourly: [],
  total: 0
};

var loc3 = {
  store: 'Sellwood',
  minCust: 20,
  maxCust: 48,
  avgSale: 3.3,
  hourly: [],
  total: 0
};

var loc4 = {
  store: 'Pearl District',
  minCust: 3,
  maxCust: 24,
  avgSale: 2.6,
  hourly: [],
  total: 0
};

var locations = [loc0, loc1, loc2, loc3, loc4];

//functions
function hourlyEst() {

  for (var index = 0; index < locations.length; index++) {
  
  for (i = 0; i < 8; i++) {
    x = Math.round((Math.floor(Math.random() * (locations[index].maxCust - locations[index].minCust + 1)) + locations[index].minCust)*locations[index].avgSale);
    locations[index].hourly.push(x);
    locations[index].total += x;
   }
    
  } 

}


function displayLists () {

  for (var index = 0; index < locations.length; index++) {
    document.getElementById("listBegin").innerHTML += "<h2>" + locations[index].store + "</h2>";
      
    for (i = 0; i < 8; i++) {
      tm = i + 10;
      var dt = new Date();
      dt.setHours(tm);
      dt = dt.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      document.getElementById("listBegin").innerHTML += "<ul><li>"+dt+": " +locations[index].hourly[i]+" cookies</li>";
          
    }
 
    document.getElementById("listBegin").innerHTML += "<ul><li>Total: " +locations[index].total+" cookies</li>";    
    
  }

}


//main program
hourlyEst();
displayLists();


