/* your code should go here */


// You can modify this object, add functions that you need
var MailModel = {
    filteringOn : false,
    
    rules : [],
    
    messages : [],
  /**
   * Initialises the model with the "database" of filter rules
   * and messages. This function is already implemented.
   */
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   }, 
  
   /**
    * Filters out messages in the "database" that match the spam rules.
    * @return an array of messages, excluding those that match the filter rules.
    */
    filter : function(){
        var temp = this.messages.slice(0);
        for(var i=0; i<this.messages.length; i++){
            for(var j=0; j<this.rules.length; j++){
                var t = this.messages[i].substring(this.messages[i].indexOf('@')+1, this.messages[i].length);
                if(t==this.rules[j]){
                    temp.splice(temp.indexOf(this.messages[i]), 1);
                }
            }
        }
        return temp;
    }

  
};

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]


// We suggest to use js patters. 
// you can add here your views and controllers if you decide to do so.



$(document).ready(function(){
    MailModel.init();
    for(var i=0; i<MailModel.messages.length; i++){
        $(".result").append("<li>"+MailModel.messages[i]+"</li>");    
    }
    $(".btn-filter").click(function(){
        if(MailModel.filteringOn==false){
            var filtered = MailModel.filter();
            $(".result").empty();
            for(var i=0; i<filtered.length; i++){
                $(".result").append("<li>"+filtered[i]+"</li>");
            }
            MailModel.filteringOn=true;
        } else {
            MailModel.init();
            $(".result").empty();
            for(var i=0; i<MailModel.messages.length; i++){
                $(".result").append("<li>"+MailModel.messages[i]+"</li>");    
            }
            MailModel.filteringOn=false;
        }
    });
});