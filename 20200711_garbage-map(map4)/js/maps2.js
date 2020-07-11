function loadTextFile() {
	httpObj = new XMLHttpRequest();
	httpObj.onload = displayData;
	httpObj.open("GET", "position.txt", true);
	httpObj.send(null);
};

function displayData(){
	document.ajaxForm.result.value = httpObj.responseText
		
	var file = document.ajaxForm.result.value;
  	var reader = new FileReader();
  	reader.readAsText(file[0]);
  	reader.onload = function(ev){
  		var separatorString = ",";
  		var arrayString = reader.result.split(separatorString);
		document.test.txt.value = arrayStrig[0];

		var latlng = new google.maps.LatLng(arrayStrig[0],arrayStrig[1]);
   		var opts = {
    		zoom: 14,
    		center: latlng,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
	   	};
	   
  		var map = new google.maps.Map(document.getElementById("map_canvas"), opts);

  		var m_latlng1 = new google.maps.LatLng(35.632605,139.88132);
  		var marker1 = new google.maps.Marker({
    		position: m_latlng1,
			map: map,
			icon: {
				fillColor: "#FF0000",                //塗り潰し色
				fillOpacity: 0.8,                    //塗り潰し透過率
				path: google.maps.SymbolPath.CIRCLE, //円を指定
				scale: 16,                           //円のサイズ
				strokeColor: "#FF0000",              //枠の色
				strokeWeight: 1.0                    //枠の透過率
			}
		});
		   

		var m_latlng2 = new google.maps.LatLng(35.625663,139.884238);
  		var marker2 = new google.maps.Marker({
    		position: m_latlng2,
    		map: map
  		});

  		var m_latlng3 = new google.maps.LatLng(35.615663,139.885238);
  		var marker3 = new google.maps.Marker({
    		position: m_latlng3,
    		map: map
  		});

  		var m_latlng4 = new google.maps.LatLng(35.425663,137.884238);
  		var marker4 = new google.maps.Marker({
    		position: m_latlng4,
    		map: map
  		});

  		var m_latlng5 = new google.maps.LatLng(35.725663,138.884238);
  		var marker5 = new google.maps.Marker({
    		position: m_latlng5,
    		map: map
  		});
	};
};
	


