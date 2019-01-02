document.getElementById("button").onclick = function() {
		
    var x = document.getElementById("finger").value
    
    var gotIt = false;
    
    var noOfCounts = 1;
    
    while (gotIt == false) {
    
        var y = Math.floor((Math.random()*10));
        
        if (y == x){
        
            gotIt = true;
            
            alert ("Got it..it was " + y + ".It took me " + noOfCounts + " trials to get it!!");
            
        } else {
            
            noOfCounts++;
            
        }
        
    }

}