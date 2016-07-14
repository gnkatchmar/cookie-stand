var loc0 = {
  store: 'Pioneer Square',
  minCust: 17,
  maxCust: 88,
  avgSale: 5.2,
  hourly: []
};

var loc1 = {
  store: 'Portland Airport',
  minCust: 6,
  maxCust: 24,
  avgSale: 1.2,
  hourly: []
};

var loc2 = {
  store: 'Washington Square',
  minCust: 11,
  maxCust: 38,
  avgSale: 1.9,
  hourly: []
};

var loc3 = {
  store: 'Sellwood',
  minCust: 20,
  maxCust: 48,
  avgSale: 3.3,
  hourly: []
};

var loc4 = {
  store: 'Pearl District',
  minCust: 3,
  maxCust: 24,
  avgSale: 2.6,
  hourly: []
};

var locations = [loc0, loc1, loc2, loc3, loc4];



function hourlyEst() {

  for (var index = 0; index < locations.length; index++) {
  
  for (i = 0; i < 8; i++) {
    x = Math.round((Math.floor(Math.random() * (locations[index].maxCust - locations[index].minCust + 1)) + locations[index].minCust)*locations[index].avgSale);
    locations[index].hourly.push(x);
    //console.log(locations[index].hourly);
  }
    
  } 

}

function displayLists () {

  for (var index = 0; index < locations.length; index++) {
    
    for (i = 0; i < 8; i++) {
//      document.getElementById("tableStart").innerHTML += "<h2>" + locations[index].store + "</h2>";
      console.log(locations[index].store);
          
  }
    
    
  }

}

hourlyEst();
displayLists();


//
//
//var list = document.getElementById("students");
//    var info = "<li>"+this.name;
//    info += "<ul><li>"+this.email+"</li>";
//    info += "<li>"+this.phone+"</li></ul></li>";
//    list.innerHTML += info;
//
