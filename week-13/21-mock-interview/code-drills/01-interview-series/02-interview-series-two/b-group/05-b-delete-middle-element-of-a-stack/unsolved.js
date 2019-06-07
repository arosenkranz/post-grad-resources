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
    
  }

} 
    
           