console.log("entry");

var prod;

$(document).ready(function(){
	prod = "";
	console.log("hello");
	x = document.cookie;
	orig = x.split(";");
	//alert(orig.length);
	for(i=0;i<orig.length;i++) {
		//alert(orig[i]);
		if(orig[i].substring(0, 17)==" product_details:") {
			//alert(i);
			break;
		}
	}
	//alert(orig[i].substring(16));
	data = orig[i].substring(17);
	separatedData = data.split(":");
	//alert(separatedData[0]);
	//alert(separatedData[1]);
	//orig = orig[0].replace(/,/g,"");
	//orig = orig.replace(/ = /g,"=");
	//alert(orig);
	for(j=0;j<separatedData.length;j++) {
		data_new = separatedData[j].split(",");
		MyTable = document.getElementById("tab");
		var NewRow = MyTable.insertRow();
		//alert(table);
		for(i=0;i<4;i++) {
			subData = data_new[i].split("=");
			//alert(subData);
			key = subData[0];
			value = subData[1];
			value = value.replace(/]/g,"");
	        var Newcell = NewRow.insertCell(i); 
			var newText  = document.createTextNode(value);
			var temp_prod;
			if(i==0) {
				temp_prod = "_" + value;
			}
			else if(i==2) {
				prod += " " + value;
				prod += temp_prod;
			}
			Newcell.appendChild(newText);
			//alert(key);
			//alert(value);
		}
		//alert(data);
	}
	makeUL3();
});

function sam() {
	var street1 = document.getElementById("street1").value;
	var street2 = ", " + document.getElementById("street2").value;
	var city = ", " + document.getElementById("city").value;
	var pin = ", " +document.getElementById("pin").value;
	var addr = street1 + street2 + city + pin;
	//alert(prod);
	var message;
	//alert("sam1")	
	var xhr = new XMLHttpRequest();
	
	var url = "http://localhost:8080/product/final";
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-type','application/json');
	xhr.send(JSON.stringify({"prod":prod, "addr":addr}));
	console.log("sankeu");
	
	xhr.onload = function () {
		if(this.status == 200) {
			//var user = JSON.parse(this.responseText);
			alert("Order Placed");
			location.href = "dashboard.html";
		}
		else if(this.status == 400) {
			alert("Error 400");
		}
		else {
			alert("Invalid Request");
		}
	}
}


function makeUL3() {
	
	var message;
	var xhr = new XMLHttpRequest();
	var url = "http://localhost:8080/product/";
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-type','application/json');
	xhr.send('{"UserName":"survir"}');
	
	xhr.onload = function () {
		if(this.status == 200) {
			var user = JSON.parse(this.responseText);
			//alert(user.UserName);

			var name = user.FName + " " + user.MName + " " + user.LName;
			var temp = document.getElementById('fname');
			//alert(temp);
			temp.value = name;
			//alert(name);
			var temp = document.getElementById('email');
			temp.value = user.Email;
			//alert(user.Email);
			var temp = document.getElementById('mobile');
			temp.value = user.contact;
			//alert(user.contact);
			/*console.log(array[0]);
			//console.log(array[1]);
			
			var list1 = document.getElementById('list_products')
			//console.log(list1);
			
			for (var i = 0; i < array.length; i++) {
				// Create the list item:
				console.log(i);
				var item = document.createElement('li');
				item.setAttribute('id','li'+i);
				
				// Set its contents:
				for (var j = 0; j < 5; j++) {
					// Create the span item inside list item:
					var subItem = document.createElement('span');
					subItem.setAttribute('id','span'+i+j);
					
					if(j==0) {
						var imageItem = document.createElement('img');
						imageItem.src = array[i].img;
						imageItem.setAttribute('width', '60px');
						imageItem.setAttribute('height', '80px');
						subItem.appendChild(imageItem);
					}
					else if(j==1) {
						subItem.appendChild(document.createTextNode(array[i].name));
					}
					else if(j==2) {
						subItem.appendChild(document.createTextNode(array[i].cost));
					}
					else if(j==3) {
						var inp = document.createElement('input');
						inp.setAttribute('placeholder', '0');
						inp.style.width = "50px";
						inp.setAttribute('onchange', 'handleChange(this)');
						inp.setAttribute('id',"inp"+i);
						subItem.appendChild(inp);
					}
					else if(j==4) {
						subItem.appendChild(document.createTextNode(""))
					}
					
					// Add subList element to the list:
					item.appendChild(subItem);
				}
				list1.appendChild(item);
			}*/
			
		}
		else if(this.status == 400) {
			alert("Error 400");
		}
		else {
			alert("Invalid Request");
		}
	}
}
