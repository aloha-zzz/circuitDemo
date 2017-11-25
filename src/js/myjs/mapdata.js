/**
 * Created by weng on 2017/11/25.
 */



var color=['#facbc9','gold','#13d89d','#48aef5','#facbc9','#facbc9','#facbc9','#facbc9'];


var mapdata=[
    {
        name:'上班轨迹(甲)',
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
                color: function (i) {
                    return color[i.seriesIndex];
                },
                normal: {
                    color:color[0],
                    borderWidth:3,
                    lineStyle: {
                        type: 'solid',
                        width: 3,
                        shadowBlur: 10
                    },
                    label:{show:true,value:'天河城'}
                }
            },

            data : [
                [{name:'p1'}, {name:'p2'}],
                [{name:'p2'}, {name:'p3'}],
                [{name:'p3'}, {name:'p4'}],
                [{name:'p4'}, {name:'p5'}],
                [{name:'p5'}, {name:'p6'}],
                [{name:'p6'}, {name:'p7'}],
                [{name:'p7'}, {name:'p8'}],
                [{name:'p8'}, {name:'p9'}],
                [{name:'p9'}, {name:'p10'}],
                [{name:'p10'}, {name:'p11'}],
                [{name:'p11'}, {name:'p12'}],
                [{name:'p12'}, {name:'p13'}],
                [{name:'p13'}, {name:'p14'}],
                [{name:'p14'}, {name:'p15'}]
            ]
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
            data:[
                {name:'p1',value:50,
                    tooltip:{
                        formatter:'时间:8:30am<br/>出发地:中海锦城南苑'
                    },
                },
                {name:'p12',value:100,
                    tooltip:{
                        formatter:'天河城<br/>经度:113.328755<br/>纬度:23.137588'
                    },
                },
                {name:'p15',value:50,
                    tooltip:{
                        formatter:'时间:10:00am<br/>目的地:富力盈隆广场'
                    },
                },
            ],
        },
        geoCoord:{
            'p1':[113.317568,23.135959],
            'p2':[113.317783,23.135278],
            'p3':[113.321489,23.135432],
            'p4':[113.321525,23.135282],
            'p5':[113.321592,23.13517],
            'p6':[113.321799,23.135083],
            'p7':[113.322158,23.135141],
            'p8':[113.322374,23.135378],
            'p9':[113.321992,23.135847],
            'p10':[113.322243,23.13949],
            'p11':[113.322396,23.1397],
            'p12':[113.328163,23.13943],
            'p13':[113.334945,23.139033],
            'p14':[113.334658,23.133217],
            'p15':[113.33313,23.13222],
            'p16':[113.328755, 23.137588]
        }
    },



    {
        name:'逛街购物轨迹(乙,丙)',
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
                color: 'red',
                normal: {
                    color: function (i) {
                        return color[i.seriesIndex];
                    },
                    borderWidth:3,
                    lineStyle: {
                        type: 'solid',
                        width: 3,
                        shadowBlur: 10
                    },
                    label:{show:false,value:'天河城'}
                }
            },

            data : [
                [{name:'s1'}, {name:'s2'}],
                [{name:'s2'}, {name:'s3'}],
                [{name:'s3'}, {name:'s4'}],
                [{name:'s4'}, {name:'s10'}],
                [{name:'s10'}, {name:'s11'}],
                [{name:'s5'}, {name:'s6'}],
                [{name:'s6'}, {name:'s7'}],
                [{name:'s7'}, {name:'s8'}],
                [{name:'s8'}, {name:'s9'}],
                [{name:'s9'}, {name:'s10'}],
                [{name:'s10'}, {name:'s11'}],
            ]
        },
        markPoint:{
            symbol:'emptyCircle',
            symbolSize:function(v){
                return v/5
            },
            effect:{
                show:true,
                type:'scale',
                period:10,
                color:'gold',
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
            data:[
                {name:'s1',value:50,
                    tooltip:{
                        formatter:'小乙<br/>时间:8:30am<br/>出发地:东兴小区'
                    },
                },
                {name:'s5',value:50,
                    tooltip:{
                        formatter:'小丙<br/>时间:8:10am<br/>出发地:冼村'
                    },
                },
                {name:'s10',value:50,
                    //tooltip:{
                    //   formatter:'目的地天河城<br/>经度:113.328755<br/>纬度:23.137588'
                    //},
                },
                {name:'s11',value:100,
                    tooltip:{
                        formatter:'时间:10:00am<br/>目的地:天河城购物广场<br/>小乙与小丙成功会合<br/>开始一天的逛街之旅'
                    },
                },
            ],
        },
        geoCoord:{
            's1':[113.319283,23.129146],
            's2':[113.321817,23.129877],
            's3':[113.32776,23.129612],
            's4':[113.328069,23.136798],
            's5':[113.336953,23.131398],
            's6':[113.336163,23.132711],
            's7':[113.331384,23.132976],
            's8':[113.330916,23.132212],
            's9':[113.330701,23.13681],
            's10':[113.329749,23.137463],
            's11':[113.328976,23.137949],
        }
    },

];


var truedata=[];