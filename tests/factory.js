function Appleplanner(){
    var priceBox=0;
    var qtyApples=0;
    var qtyPerpacket=0
    var percentageRevenue=0;
    var costOfsales=0;

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

    function setcostOfSales(qty){
        // qtyApples=qty
        // if(qtyApples > 1){
        //     costOfsales= (priceBox.toFixed(2) / qtyApples) 

        // }

    }
    function getCostoFsales(){
        return costOfsales.toFixed(2)
    }
    function setPercentage(percentage){
        percentageRevenue=percentage;
    }

    function getPercentage(){
        percentageRevenue.toFixed(2)
    }



return{
    
    setcostOfSales,
    getCostoFsales,
    setPricebox,
    getPricebox,
    setPercentage,
    getPercentage,
    getQuantity,
    setQuantity,
    setQuantityPacket,
    getQuantityPacket

}






}