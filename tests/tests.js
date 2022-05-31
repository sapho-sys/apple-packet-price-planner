describe("apple packet app testing", function(){
    describe("SET:",function(){
        it("should set the price of each box",function(){
            let Instance=Appleplanner();
    
            Instance.setPricebox(22.50);
            assert.equal(22.50,Instance.getPricebox());
        })
        it("should set the quantity of apples in each box", function(){
            let Instance=Appleplanner();
            Instance.setQuantity(10);
            assert.equal(10, Instance.getQuantity())

        })
        it("should set the quantity of apples in each packet", function(){
            let Instance=Appleplanner();
            Instance.setQuantityPacket(8);
            assert.equal(8, Instance.getQuantityPacket())
        })
    



    })


})