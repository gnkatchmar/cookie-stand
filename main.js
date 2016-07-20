function genReport () {

  var grandTotal = 0;

  //object constructor

  var CookieStore = function(store, minCust, maxCust, avgSale) {
    this.store = store;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.hourlyRandom = [];
    this.hourlyCookies = [];
    this.total = 0;

    this.rndCustsHour = function () {
       for (i = 0; i < 8; i++) {
        x = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.hourlyRandom.push(x);
      };
    }

    this.cookiesHour = function () {
       for (i = 0; i < 8; i++) {
        y = Math.round(this.hourlyRandom[i]*this.avgSale);
        this.hourlyCookies.push(y);
        this.total += y;
      };
    }

    this.generate_table = function () {

      var hdg = document.createElement("h3");
      document.body.appendChild(hdg);
      var hdgtext = document.createTextNode(this.store);
      hdg.appendChild(hdgtext);
      var table = document.createElement("table");
      document.body.appendChild(table);

      for(var i = 0; i < 8; i++) {
        tm = i + 10;
        var dt = new Date();
        dt.setHours(tm);
        dt = dt.toLocaleString('en-US', { hour: 'numeric', hour12: true });

        function rows (cell1, cell2) {
          var row = document.createElement("tr");
          var timeCell = document.createElement("td");
          var salesCell = document.createElement("td");
          var time = document.createTextNode(cell1);
          var sales = document.createTextNode(cell2 + " cookies");
          timeCell.appendChild(time);
          salesCell.appendChild(sales);
          row.appendChild(timeCell);
          row.appendChild(salesCell);
          table.appendChild(row);
        };
        rows (dt, this.hourlyCookies[i]);
       };

      rows ("Total:", this.total);
      grandTotal += this.total;

     };

  }

  var locations = [
    new CookieStore("Pioneer Square", 17, 88, 5.2),
    new CookieStore("Portland Airport", 6, 24, 1.2),
    new CookieStore("Washington Square", 11, 38, 1.9),
    new CookieStore("Sellwood", 20, 48, 3.3),
    new CookieStore("Pearl District", 3, 24, 2.6),
  ];

  //main program
  for (var index = 0; index < locations.length; index++) {
    var currentLocation = locations[index];
    currentLocation.rndCustsHour();
    currentLocation.cookiesHour();
    currentLocation.generate_table();
  }

  var gt = document.createElement("h3");
  document.body.appendChild(gt);
  var gttext = document.createTextNode(grandTotal + " cookies sold in all stores");
  gt.appendChild(gttext);

}