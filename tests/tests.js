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
        it("should set the revenue percentage they want for returns", function(){
            let Instance=Appleplanner();
            Instance.setPercentage(3.44);
            assert.equal(0.03, Instance.getPercentage())
        })

    })
    describe("CALCULATE", function(){
        it("should calculate the COST per apple", function(){
            let Instance=Appleplanner();
            Instance.setPricebox(22.50);
            Instance.setQuantity(10);
            Instance.setcostOfSales();


            assert.equal(10, Instance.getQuantity())
            assert.equal(22.50,Instance.getPricebox());
            assert.equal(0.44, Instance.getCostPerUnit())

        })
        it("should calculate the COST per packet", function(){
            let Instance=Appleplanner();
            Instance.setPricebox(22.50);
            Instance.setQuantity(10);

            Instance.setQuantityPacket(10);
            Instance.setcostOfSales();
            Instance.setCostPerPacket();


            assert.equal(10, Instance.getQuantityPacket())
            assert.equal(22.50,Instance.getPricebox());
            assert.equal(0.44, Instance.getCostPerUnit())
            assert.equal(4.40, Instance.getCostPerPacket())


        })
        it("should calculate the number packets you can make from one box", function(){
            let Instance=Appleplanner();
            Instance.setQuantity(20);
            Instance.setQuantityPacket(4);
            Instance.setNoOfPackets();
            assert.equal(20,Instance.getQuantity())
            assert.equal(4, Instance.getQuantityPacket())
            assert.equal(5, Instance.getNoOfPackets())
        })
    })



})