const MY_TOKEN = "pk.eyJ1Ijoienhpb25hIiwiYSI6ImNsdnVleHl5ODFnNTcybHJyYjJsZDU5NjkifQ.HeXvYeoC5E3Pik99lTgxYQ";


// Function to dynamically create a table from fetched JSON data
function outputTable(json) {
    let element = document.getElementById("results");
    element.innerHTML = "";
    let features = json.features;
    for (let i = 0; i < features.length; i++) {
      let a = features[i].attributes;
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      td.innerHTML = a.NAME;
      tr.appendChild(td);
      td = document.createElement('td');
      td.innerHTML = a.AREA_NAME;
      tr.appendChild(td);
      element.appendChild(tr);
      td = document.createElement('td');
      td.innerHTML = a.OPERATOR;
      tr.appendChild(td);
      element.appendChild(tr);
      td = document.createElement('td');
      td.innerHTML = a.OPERATING_TIMES;
      tr.appendChild(td);
      element.appendChild(tr);
      td = document.createElement('td');
      td.innerHTML = a.TYPE_DESCRIPTION;
      tr.appendChild(td);
      element.appendChild(tr);
      td = document.createElement('td');
      td.innerHTML = a.CCTV;
      tr.appendChild(td);
      element.appendChild(tr);
      td = document.createElement('td');
      td.innerHTML = a.EASTINGS;
      tr.appendChild(td);
      element.appendChild(tr);
      td = document.createElement('td');
      td.innerHTML = a.NORTHINGS;
      tr.appendChild(td);
      element.appendChild(tr);
      td = document.createElement('td');
      td.innerHTML = a.OCCUPANCY;
      tr.appendChild(td);
      element.appendChild(tr);
      td = document.createElement('td');
      td.innerHTML = a.OCCUPANCY_CURRENT;
      tr.appendChild(td);
      element.appendChild(tr);
    }
}
// Function to fetch and use the user's location or default if declined/not available
function getLocation(page) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          // permission granted
          location.href = `${page}?lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
        },
        function() {
          // permission denied
          // location defaults to central Bristol
          location.href = `${page}?lat=51.454514&lon=-2.587910`;
        }
      );
    } else {
      // unsupported feature
      alert("Geolocation is not supported by this browser.");
      // location defaults to central Bristol
      location.href = `${page}?lat=51.454514&lon=-2.587910`;
    }
  }