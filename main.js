//objects

var loc0 = {
  store: 'Pioneer Square',
  minCust: 17,
  maxCust: 88,
  avgSale: 5.2,
  hourlyRandom: [],
  hourlyCookies: [],
  total: 0,
  
  rndCustsHour: function () {
     for (i = 0; i < 8; i++) {
      x = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.hourlyRandom.push(x);
    }
  },
  
  cookiesHour: function () {
     for (i = 0; i < 8; i++) {
      y = Math.round(this.hourlyRandom[i]*this.avgSale);
      this.hourlyCookies.push(y);
      this.total += y;
    }
  },
  
  displayLists: function () {
    document.getElementById("listBegin").innerHTML += "<h3>" + this.store + "</h3>";
    var list = document.getElementById("listBegin");
    var info = "<table>";
    
    for (i = 0; i < 8; i++) {
      tm = i + 10;
      var dt = new Date();
      dt.setHours(tm);
      dt = dt.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      info += "<tr><td>"+dt+"</td><td>" +this.hourlyCookies[i]+" cookies</td></tr>";  
    } 
    info += "<tr><td><b>Total:</b></td><td><b>" +this.total+" cookies</b></td></tr></table>";
    list.innerHTML += info;    
  }    
    
}

var loc1 = {
  store: 'Portland Airport',
  minCust: 6,
  maxCust: 24,
  avgSale: 1.2,
  hourlyRandom: [],
  hourlyCookies: [],
  total: 0,
 
 rndCustsHour: function () {
     for (i = 0; i < 8; i++) {
      x = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.hourlyRandom.push(x);
    }
  },
  
  cookiesHour: function () {
     for (i = 0; i < 8; i++) {
      y = Math.round(this.hourlyRandom[i]*this.avgSale);
      this.hourlyCookies.push(y);
      this.total += y;
    }
  },
  
  displayLists: function () {
    document.getElementById("listBegin").innerHTML += "<h3>" + this.store + "</h3>";
    var list = document.getElementById("listBegin");
    var info = "<table>";
    
    for (i = 0; i < 8; i++) {
      tm = i + 10;
      var dt = new Date();
      dt.setHours(tm);
      dt = dt.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      info += "<tr><td>"+dt+"</td><td>" +this.hourlyCookies[i]+" cookies</td></tr>";  
    } 
    info += "<tr><td><b>Total:</b></td><td><b>" +this.total+" cookies</b></td></tr></table>";
    list.innerHTML += info;    
  }    
  
}

var loc2 = {
  store: 'Washington Square',
  minCust: 11,
  maxCust: 38,
  avgSale: 1.9,
  hourlyRandom: [],
  hourlyCookies: [],
  total: 0,
  
  rndCustsHour: function () {
     for (i = 0; i < 8; i++) {
      x = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.hourlyRandom.push(x);
    }
  },
  
  cookiesHour: function () {
     for (i = 0; i < 8; i++) {
      y = Math.round(this.hourlyRandom[i]*this.avgSale);
      this.hourlyCookies.push(y);
      this.total += y;
    }
  },
  
  displayLists: function () {
    document.getElementById("listBegin").innerHTML += "<h3>" + this.store + "</h3>";
    var list = document.getElementById("listBegin");
    var info = "<table>";
    
    for (i = 0; i < 8; i++) {
      tm = i + 10;
      var dt = new Date();
      dt.setHours(tm);
      dt = dt.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      info += "<tr><td>"+dt+"</td><td>" +this.hourlyCookies[i]+" cookies</td></tr>";  
    } 
    info += "<tr><td><b>Total:</b></td><td><b>" +this.total+" cookies</b></td></tr></table>";
    list.innerHTML += info;    
  }    
  
}

var loc3 = {
  store: 'Sellwood',
  minCust: 20,
  maxCust: 48,
  avgSale: 3.3,
  hourlyRandom: [],
  hourlyCookies: [],
  total: 0,
  
 rndCustsHour: function () {
     for (i = 0; i < 8; i++) {
      x = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.hourlyRandom.push(x);
    }
  },
  
  cookiesHour: function () {
     for (i = 0; i < 8; i++) {
      y = Math.round(this.hourlyRandom[i]*this.avgSale);
      this.hourlyCookies.push(y);
      this.total += y;
    }
  },
  
  displayLists: function () {
    document.getElementById("listBegin").innerHTML += "<h3>" + this.store + "</h3>";
    var list = document.getElementById("listBegin");
    var info = "<table>";
    
    for (i = 0; i < 8; i++) {
      tm = i + 10;
      var dt = new Date();
      dt.setHours(tm);
      dt = dt.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      info += "<tr><td>"+dt+"</td><td>" +this.hourlyCookies[i]+" cookies</td></tr>";  
    } 
    info += "<tr><td><b>Total:</b></td><td><b>" +this.total+" cookies</b></td></tr></table>";
    list.innerHTML += info;    
  }    
  
}

var loc4 = {
  store: 'Pearl District',
  minCust: 3,
  maxCust: 24,
  avgSale: 2.6,
  hourlyRandom: [],
  hourlyCookies: [],
  total: 0,
  
 rndCustsHour: function () {
     for (i = 0; i < 8; i++) {
      x = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.hourlyRandom.push(x);
    }
  },
  
  cookiesHour: function () {
     for (i = 0; i < 8; i++) {
      y = Math.round(this.hourlyRandom[i]*this.avgSale);
      this.hourlyCookies.push(y);
      this.total += y;
    }
  },
  
  displayLists: function () {
    document.getElementById("listBegin").innerHTML += "<h3>" + this.store + "</h3>";
    var list = document.getElementById("listBegin");
    var info = "<table>";
    
    for (i = 0; i < 8; i++) {
      tm = i + 10;
      var dt = new Date();
      dt.setHours(tm);
      dt = dt.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      info += "<tr><td>"+dt+"</td><td>" +this.hourlyCookies[i]+" cookies</td></tr>";  
    } 
    info += "<tr><td><b>Total:</b></td><td><b>" +this.total+" cookies</b></td></tr></table>";
    list.innerHTML += info;    
  }    
  
}

var locations = [loc0, loc1, loc2, loc3, loc4];

for (var index = 0; index < locations.length; index++) {
  var currentLocation = locations[index];
  currentLocation.rndCustsHour();
  currentLocation.cookiesHour();
  currentLocation.displayLists();
}









// Old, elegant code
////functions
//function hourlyEst() {
//
//  for (var index = 0; index < locations.length; index++) {
//  
//  for (i = 0; i < 8; i++) {
//    x = Math.round((Math.floor(Math.random() * (locations[index].maxCust - locations[index].minCust + 1)) + locations[index].minCust)*locations[index].avgSale);
//    locations[index].hourly.push(x);
//    locations[index].total += x;
//   }
//    
//  } 
//
//}
//
//
//function displayLists () {
//
//  for (var index = 0; index < locations.length; index++) {
//    document.getElementById("listBegin").innerHTML += "<h3>" + locations[index].store + "</h3>";
//    var list = document.getElementById("listBegin");
//    var info = "<table>";
//    
//    for (i = 0; i < 8; i++) {
//      tm = i + 10;
//      var dt = new Date();
//      dt.setHours(tm);
//      dt = dt.toLocaleString('en-US', { hour: 'numeric', hour12: true });
//      info += "<tr><td>"+dt+"</td><td>" +locations[index].hourly[i]+" cookies</td></tr>";  
//    }
// 
//    info += "<tr><td><b>Total:</b></td><td><b>" +locations[index].total+" cookies</b></td></tr></table>";
//    list.innerHTML += info;   
//  }
//
//}
//
//
////main program
//hourlyEst();
//displayLists();
//