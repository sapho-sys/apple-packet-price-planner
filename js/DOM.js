var costPrice=document.querySelector(".cost");
var numApples=document.querySelector(".number");
var packetSize=document.querySelector(".size");
var revenue=document.querySelector(".revenue")

var dispNumPacks=document.querySelector(".packets");
var dispCost=document.querySelector(".costApple");
var dispCostPerPack=document.querySelector(".costPacket");
var dispRev=document.querySelector(".revenue")

var calcBtn= document.querySelector(".entry");

let instanceFactory=Appleplanner();


calcBtn.addEventListener("click", function(){


    instanceFactory.setPricebox(Number(costPrice.value))
    instanceFactory.setQuantity(Number(numApples.value))
    instanceFactory.setcostOfSales();
    dispCost.innerHTML=instanceFactory.getCostPerUnit();



    
        
        instanceFactory.setQuantity(Number(numApples.value))
        instanceFactory.setQuantityPacket(Number(packetSize.value))
        instanceFactory.setNoOfPackets();

        dispNumPacks.innerHTML=instanceFactory.getNoOfPackets();


        instanceFactory.setPricebox(Number(costPrice.value))

        instanceFactory.setQuantity(Number(numApples.value))
        instanceFactory.setQuantityPacket(Number(packetSize.value))
        
        instanceFactory.setRevenue();
        instanceFactory.setcostOfSales();
        instanceFactory.setNoOfPackets();
        instanceFactory.setCostPerPacket();
        dispCostPerPack.innerHTML=instanceFactory.getCostPerPacket();



        instanceFactory.setPercentage(Number(revenue.value))
        instanceFactory.setPricebox(Number(costPrice.value))
        instanceFactory.setQuantity(Number(numApples.value))
        instanceFactory.setQuantityPacket(Number(packetSize.value))
        instanceFactory.setRevenue();
        instanceFactory.setcostOfSales();
        instanceFactory.setNoOfPackets();
        instanceFactory.setCostPerPacket();
        
        dispRev.innerHTML=instanceFactory.getRevenue();
        

        

    

   






})