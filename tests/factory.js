function Appleplanner(){
    var priceBox=0;
    var qtyApples=0;
    var qtyPerpacket=0
    var percentageRevenue=0;
    var costPerUnit=0;
    var costPerPacket=0;
    var numberOfPackets=0;
    var revenue=0;

    function setPricebox(price){
        priceBox=price;

    }

    function getPricebox(){
        return priceBox.toFixed(2);
    }

    function setQuantity(qty){
        qtyApples=qty;
    }
    function getQuantity(){
        return qtyApples;
    }

    function setQuantityPacket(qty2){
        qtyPerpacket=qty2
    }

    function getQuantityPacket(){
        return qtyPerpacket;
    }

    
    function setPercentage(percentage){
        percentageRevenue=(percentage / 100);
    }

    function getPercentage(){
        return percentageRevenue.toFixed(2)
    }
    function setRevenue(){
        revenue=(costPerPacket * percentageRevenue.toFixed(2))

    }
    function getRevenue(){
        return revenue.toFixed(2);
    }


    function setcostOfSales(){
        costPerUnit= (qtyApples/priceBox.toFixed(2))
       
    }
    function getCostPerUnit(){
        return costPerUnit.toFixed(2)
    }
    function setCostPerPacket(){
        costPerPacket=(costPerUnit.toFixed(2) * qtyPerpacket)
    }
    function getCostPerPacket(){
        return costPerPacket.toFixed(2);
    }
    function setNoOfPackets(){
        numberOfPackets= (qtyApples/qtyPerpacket)

    }
    function getNoOfPackets(){
        return numberOfPackets;
    }



return{
    
    setcostOfSales,
    getCostPerUnit,
    setPricebox,
    getPricebox,
    setPercentage,
    getPercentage,
    getQuantity,
    setQuantity,
    setQuantityPacket,
    getQuantityPacket,
    setCostPerPacket,
    getCostPerPacket,
    setNoOfPackets,
    getNoOfPackets,
    setRevenue,
    getRevenue

}






}