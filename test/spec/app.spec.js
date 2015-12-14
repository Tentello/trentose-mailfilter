describe("MailModel", function() {
    it("should init properly", function(){
        MailModel.init();
    });
    
    it("should filter properly", function(){
        MailModel.filter();
    });
    it("button test", function(){
       bottoneCliccato(false);
    });
    it("button test twice", function(){
       bottoneCliccato(true);
    });
    it("should raise alert error", function(){
       bottoneCliccato(23);
    });
});
