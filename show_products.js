var array;
var x = "product_details";

/*$(document).ready(function(){
	alert("Hello Sanket");
});*/

$('body').on('change', 'input', function() {
	console.log("input change");
	//$(this).parent().parent().attr('id');
    var li = this.parentNode.parentNode.id;
	//alert(li[2]);
	
	var name = document.getElementById('span'+li[2]+'1').innerHTML;
	//alert(name);
	
	var price = document.getElementById('span'+li[2]+'2').innerHTML;
	//alert(price.substring(4));
	
	var quantity = document.getElementById('inp'+li[2]).value;
	//alert(quantity);
	
	var a = parseInt(price.substring(4));
	var b = parseInt(quantity);
	
	var cost = a*b;
	
	var costs = document.getElementById('span'+li[2]+'4');
	costs.innerHTML = cost;
	
	if (x == "") {
		x = "[name="+name+",price="+a+",quantity="+quantity+",cost="+cost+"]";
	}
	else {
		x = x + ":[name="+name+",price="+a+",quantity="+quantity+",cost="+cost+"]";
	}
	document.cookie = x;
	//alert(cost);
	//alert(document.cookie);
});

function handleChange(input) {
	if(input.value < 0) input.value = 0;
	if(input.value > 100) input.value = 100;
}

function sendData() {
	var list1 = document.getElementById('list_products');
	
	alert(list1.getElementsByName('li').length);
}

function makeUL3() {
	
	var message;
	
	var xhr = new XMLHttpRequest();
	var url = "http://localhost:8080/product/list";
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-type','application/json');
	xhr.send();
	
	xhr.onload = function () {
		if(this.status == 200) {
			var array = JSON.parse(this.responseText);
			//console.log(array[0]);
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
			}
			
		}
		else if(this.status == 400) {
			alert("Error 400");
		}
		else {
			alert("Invalid Request");
		}
	}
}
