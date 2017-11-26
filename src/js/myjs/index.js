

//false 代表三层 true 代表二层
function processData(input1,input2,input3,input4,bool1,bool2) {
    console.log(arguments);
    var PMS=[];
    var Sale=[];
    useData=[];
    mockData.mapdata.map(function (item) {
        if(item.source=='PMS'){
            PMS.push(item);
        };
        if(item.source=='营销'){
            Sale.push(item);
        }
    })

    console.log(PMS);
    console.log(Sale);
    var obj={PMS:[],Sale:[]};
    if(bool1){
        PMS.map(function (item) {
            if(item.nodes[1].LINE_NAME.trim()==input2){
                item.nodes.map(function (item) {
                    obj.PMS.push(item)
                })
            }
        })
    }else {
        PMS.map(function (item) {
            for(var i=2;i<item.nodes.length;i++){
                if(item.nodes[i].EQUIP_NAME.trim()==input2){
                    obj.PMS.push(item.nodes[0])
                    obj.PMS.push(item.nodes[1])
                    obj.PMS.push(item.nodes[i])
                    break;
                }
            }
        })
    }

    if(bool2){
        Sale.map(function (item) {
            if(item.nodes[1].LINE_NAME.trim()==input4){
                item.nodes.map(function (item) {
                    obj.Sale.push(item)
                })
            }
        })
    }else {
        Sale.map(function (item) {
            for(var i=2;i<item.nodes.length;i++){
                if(item.nodes[i].EQUIP_NAME.trim()==input4){
                    obj.Sale.push(item.nodes[0])
                    obj.Sale.push(item.nodes[1])
                    obj.Sale.push(item.nodes[i])
                    break;
                }
            }
        })
    }
    console.log(obj);
    useData.push({"source":"PMS","nodes":obj.PMS});
    useData.push({"source":"营销库","nodes":obj.Sale});



}