<!DOCTYPE html>
<html>
<body>


<button onclick="myFunction()">Click me</button>

<p id="demo"></p>

<script>
var arrayObj = [{a:1,b:2,c:3},{a:4,b:5,c:6}];

function myFunction() {
	
    var newArray = [];
    
    for (i = 0; i < arrayObj.length; i++) {
    newArray.push(arrayObj[i].a);
}
    
    
    document.getElementById("demo").innerHTML = JSON.stringify(newArray);
}
</script>

</body>
</html>
