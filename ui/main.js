var button = document.getElementById('counter') ;
button.onclick  = function () {
	//create a request to counter endpoint
     var request = new XMLHttpRequest() ;
	//capture the request and store the value in variable
        request.onreadystatechange = function () {
        	console.log('<0>') ;
        	if(request.readyState === 4){
        		console.log('<1>') ;
        		//take some action
        		if(request.status === 200){
        			console.log('<2>') ;
        			var counter = request.responseText ;
        			//render the variable in the correct span
					counter = counter + 1;
					var span  = document.getElementById('count') ;
					span.innerHTML = counter.toString() ;

        		}
        	}
        } ;
        console.log('<3>') ;
 //make a request
 //request.open('GET','http://localhost:8080/counter',true) ;
 request.open('GET','http://khursheedali38.imad.hasura-app.io/counter',true) ;
 request.send(null) ;
} ;

//Submit Name
var submit = document.getElementById('submit_btn') ;
submit.onclick = function (){
	//make a request to server and send the name
	//capture the list of name from server and render the list
    var request = new XMLHttpRequest() ;
	//capture the request and store the value in variable
        request.onreadystatechange = function () {
        	console.log('<0>') ;
        	if(request.readyState === 4){
        		console.log('<1>') ;
        		//take some action
        		if(request.status === 200){
        			console.log('<2>') ;
        			var names = request.responseText ;

        			names = JSON.parse(names) ;
					var list = '' ;
					for (var i = 0; i<names.length ; i++)
						list += '<li>' + names[i] + '</li>' ;
					var ol = document.getElementById('nameList') ;
					ol.innerHTML = list ;


        		}
        	}
        } ;
        console.log('<3>') ;
 //make a request
 var nameInput = document.getElementById('name') ;
 var name = nameInput.value ;
 //request.open('GET','http://localhost:8080/submit-name?name=' + name,true) ;
 request.open('GET','http://khursheedali38.imad.hasura-app.io/submit-name?name=' + name,true) ;
 request.send(null) ;
} ;
