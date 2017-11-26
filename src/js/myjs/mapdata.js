/**
 * Created by weng on 2017/11/25.
 */



var color=['#facbc9','gold','#13d89d','#48aef5','#facbc9','#facbc9','#facbc9','#facbc9'];


var mapdata=[];


function addMapData(name,nodes) {
    mapdata.push({
        name:name,
        type:'map',
        mapType: 'none',
        data:[],

        markLine : {
            Symbol:['none', 'arrow'],
            symbolSize:['0', '0.1'],
            smooth:true,
            smooth:0,
            large:true,
            effect : {
                show: true,
                scaleSize: 1,
                period: 100,
                color: '#fff',
                shadowBlur: 10
            },
            itemStyle : {
                color: (function () {
                    return color[mapdata.length];
                })(),
                normal: {
                    // color:color[0],
                    borderWidth:3,
                    lineStyle: {
                        type: 'solid',
                        width: 3,
                        shadowBlur: 10
                    },
                    label:{show:false,value:''}
                }
            },

            data : (function () {
                    var temp=[];
                    nodes.map(function (item,index) {
                        if(index<2){
                            temp.push([{name:mapdata.length+'-'+nodes[index].id},{name:mapdata.length+'-'+nodes[index+1].id}])
                        }else{
                            temp.push([{name:mapdata.length+'-'+nodes[1].id},{name:mapdata.length+'-'+nodes[index].id}])
                        }
                    });
                    // console.log(temp)
                    return temp;
                 })()
        },
        markPoint:{
            // symbol:'image://./image/location.svg',
            // symbol:'emptyCircle',
            // symbolSize:function(v){
            //     return v/5
            // },
            effect:{
                show:true,
                type:'bounce',
                period:3,
            },
            itemStyle:{
                normal:{
                    label:{
                        show:false,
                    },
                },
                emphasis:{
                    label:{
                        show:false,
                    },
                },
            },
            data:(function () {
                    var temp=[];
                    nodes.map(function (item) {
                        temp.push({name:mapdata.length+'-'+item.id,tooltip:{
                            // formatter:'天河城<br/>经度:113.328755<br/>纬度:23.137588'
                            formatter:(function () {
                                var tempTip = item.type+'<br/>经度：'+item.lng+'<br/>纬度：'+item.lat;
                                if(item.SUBS_NAME!=undefined){
                                    tempTip+='<br/>变电站名：'+item.SUBS_NAME;
                                }
                                if(item.LINE_NAME!=undefined){
                                    tempTip+='<br/>线路名：'+item.LINE_NAME;
                                }
                                if(item.EQUIP_NAME!=undefined){
                                    tempTip+='<br/>配电站名：'+item.EQUIP_NAME;
                                }
                                return tempTip
                            })()
                        }})
                    });
                    // console.log(temp)
                    return temp;
                 })()


            //     [
            //     {name:'p1',value:50,
            //         tooltip:{
            //             formatter:'时间:8:30am<br/>出发地:中海锦城南苑'
            //         },
            //     },
            //     {name:'p12',value:100,
            //         tooltip:{
            //             formatter:'天河城<br/>经度:113.328755<br/>纬度:23.137588'
            //         },
            //     },
            //     {name:'p15',value:50,
            //         tooltip:{
            //             formatter:'时间:10:00am<br/>目的地:富力盈隆广场'
            //         },
            //     },
            // ],
        },
        geoCoord:(function () {
                    var temp = {};
                    nodes.map(function (item) {
                        temp[mapdata.length+'-'+item.id]=[item.lng,item.lat];
                    });
                    // console.log(temp)
                    return temp;
                })()



        // {
        //     'p1':[113.317568,23.135959],
        //     'p2':[113.317783,23.135278],
        //     'p3':[113.321489,23.135432],
        //     'p4':[113.321525,23.135282],
        //     'p5':[113.321592,23.13517],
        //     'p6':[113.321799,23.135083],
        //     'p7':[113.322158,23.135141],
        //     'p8':[113.322374,23.135378],
        //     'p9':[113.321992,23.135847],
        //     'p10':[113.322243,23.13949],
        //     'p11':[113.322396,23.1397],
        //     'p12':[113.328163,23.13943],
        //     'p13':[113.334945,23.139033],
        //     'p14':[113.334658,23.133217],
        //     'p15':[113.33313,23.13222],
        //     'p16':[113.328755, 23.137588]
        // }
    })
}

    // [
    // {"source":"营销",
    //     "nodes":[{"id":"100778414","type":"变电站","lng":"117.263449","lat":"36.394801", "SUBS_NO":"06M00000100778414","SUBS_NAME":"110kV北泉变电站"},
    //         {"id":"SBID000000923E567098A94D1000076","type":"线路","lng":"116.556233","lat":"36.221089","LINE_NO":"06M00000015437052","LINE_NAME":" 线路10076"},
    //         {"id":"100844774","type":"配电站","lng":"116.594283","lat":"36.891089","EQUIP_NO":"06M00000015437052","EQUIP_NAME":" 配电站478#"}
    //     ]
    // },
    // {"source":"PMS",
    //     "nodes":[{"id":"100778414","type":"变电站","lng":"117.263449","lat":"36.394801", "SUBS_NO":"06M00000100778414","SUBS_NAME":"110kV北泉变电站"},
    //         {"id":"SBID000000923E567098A94D1000076","type":"线路","lng":"116.444283","lat":"36.771089","LINE_NO":"06M00000015437052","LINE_NAME":" 线路10076"},
    //         {"id":"100844774","type":"配电站","lng":"116.594283","lat":"36.891089","LINE_NO":"06M00000015437052","EQUIP_NAME":" 配电站478#"},
    //         {"id":"100844779","type":"配电站","lng":"116.506336","lat":"36.687165","EQUIP_NO":"06M00000100844781","EQUIP_NAME":" 配电站488#"},
    //         {"id":"100844781","type":"配电站","lng":"116.674256","lat":"36.616244","EQUIP_NO":"06M00000100844779","EQUIP_NAME":" 配电站486#"}
    //     ]
    // }
    //
    // ]


function initMapChart() {
    mapdata=[];
    radioChartData=[];
    useData.map(function (item) {
        addMapData(item.source,item.nodes);
        addradioChartData(item.source,item.nodes);

    });
    createMap(mapdata);
    createMapchart(radioChartData);

}
