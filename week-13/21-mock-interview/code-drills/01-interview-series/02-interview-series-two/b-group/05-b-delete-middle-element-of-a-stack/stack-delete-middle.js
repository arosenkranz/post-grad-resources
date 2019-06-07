function Stack(){

  this.data = [];

  this.add = function(record) {
    this.data.push(record)
  }

  this.remove = function() {
   return this.data.shift()
  }

  this.peek = function() {
    return this.data[0]
  }
  this.deleteMid= function(){
  	// If stack is empty or all items 
    // are traversed 
    if (this.data.length === 0 ){
    	return "Nothing in your Stack";
    }
    // var temp = [];
    // var midPoint = Math.floor(this.data.length / 2); 
    // for(var i =0; i< this.data.length){
    // 	if(i !== midPoint){
    // 		temp.push(temp.push(this.data.length))
    // 	}	
    // }
    // this.data = temp;
    
    //another way- In place

    var midPoint = Math.floor(this.data.length / 2); 
    for(var i = midPoint; i < this.data.length-1; i++){
    	this.data[midPoint] = this.data[midPoint + 1]
    }
    this.remove();
  }

} 
    
           