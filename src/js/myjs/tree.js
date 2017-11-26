

function createTree() {

    var myChart = echarts.init(document.getElementById("tree"));
    myChart.showLoading();


    var data1={
        "name": "青阳变电站",
        "children": [
            {
                "name": "线路10001",
                "children": [
                    {"name": "配电站1#", "value": 4116},
                    {"name": "配电站2#", "value": 4116},
                    {"name": "配电站3#", "value": 4116},
                    {"name": "配电站4#", "value": 4116},
                    {"name": "配电站5#", "value": 4116},
                    {"name": "配电站6#", "value": 4116}
                ]
            },
            {
                "name": "线路10002",
                "children": [
                    {"name": "配电站7#", "value": 2105},
                    {"name": "配电站8#", "value": 1316},
                    {"name": "配电站9#", "value": 3151},
                    {"name": "配电站10#", "value": 3770},
                    {"name": "配电站11#", "value": 2435},
                    {"name": "配电站14#", "value": 4268},
                    {"name": "配电站15#", "value": 1821},
                    {"name": "配电站16#", "value": 5833}
                ]
            },
            {
                "name": "线路10003",
                "children": [
                    {"name": "配电站17#", "value": 2105},
                    {"name": "配电站18#", "value": 1316},
                    {"name": "配电站19#", "value": 3151},
                    {"name": "配电站20#", "value": 3770},
                    {"name": "配电站12#", "value": 2435},
                    {"name": "配电站13#", "value": 4839},
                    {"name": "配电站23#", "value": 1756},
                    {"name": "配电站24#", "value": 4268},
                    {"name": "配电站26#", "value": 5833}
                ]
            },
            {
                "name": "线路10005",
                "children": [
                    {"name": "配电站32#", "value": 2105},
                    {"name": "配电站33#", "value": 1316},
                    {"name": "配电站34#", "value": 3151},
                    {"name": "配电站35#", "value": 3770},
                    {"name": "配电站36#", "value": 2435}
                ]
            }
        ]
    }

    var data2 = {
        "name": "青阳变电站",
        "children": [
            {
                "name": "线路10001",
                "children": [
                    {"name": "配电站1#", "value": 4116},
                    {"name": "配电站2#", "value": 4116},
                    {"name": "配电站3#", "value": 4116},
                    {"name": "配电站4#", "value": 4116},
                    {"name": "配电站5#", "value": 4116},
                    {"name": "配电站6#", "value": 4116}
                ]
            },
            {
                "name": "线路10002",
                "children": [
                    {"name": "配电站7#", "value": 2105},
                    {"name": "配电站8#", "value": 1316},
                    {"name": "配电站9#", "value": 3151},
                    {"name": "配电站10#", "value": 3770},
                    {"name": "配电站11#", "value": 2435},
                    {"name": "配电站12#", "value": 4839},
                    {"name": "配电站13#", "value": 1756},
                    {"name": "配电站14#", "value": 4268},
                    {"name": "配电站15#", "value": 1821},
                    {"name": "配电站16#", "value": 5833}
                ]
            },
            {
                "name": "线路10003",
                "children": [
                    {"name": "配电站17#", "value": 2105},
                    {"name": "配电站18#", "value": 1316},
                    {"name": "配电站19#", "value": 3151},
                    {"name": "配电站20#", "value": 3770},
                    {"name": "配电站21#", "value": 2435},
                    {"name": "配电站22#", "value": 4839},
                    {"name": "配电站23#", "value": 1756},
                    {"name": "配电站24#", "value": 4268},
                    {"name": "配电站25#", "value": 1821},
                    {"name": "配电站26#", "value": 5833}
                ]
            },
            {
                "name": "线路10004",
                "children": [
                    {"name": "配电站27#", "value": 2105},
                    {"name": "配电站28#", "value": 1316},
                    {"name": "配电站29#", "value": 3151},
                    {"name": "配电站30#", "value": 3770},
                    {"name": "配电站31#", "value": 2435}
                ]
            }
        ]
    }



    myChart.hideLoading();
    inputValue1=data1.name;
    inputValue2=data2.name;
    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        legend: {
            top: '2%',
            left: '3%',
            orient: 'vertical',
            data: [{
                name: 'PMS',
                icon: 'rectangle',textStyle:{color:'#00588b'}
            } ,
                {
                    name: '营销库',
                    icon: 'rectangle',textStyle:{color:'#EB1C24'}
                }],
            borderColor: '#c23531'
        },
        series:[
            {
                type: 'tree',

                name: 'PMS',

                data: [data1],

                top: '5%',
                left: '7%',
                bottom: '2%',
                right: '60%',

                symbolSize: 7,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    }
                },
                lineStyle: {
                    normal: {
                        color:'#00588b'
                    }
                },
                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: true,

                animationDuration: 550,
                animationDurationUpdate: 750

            },
            {
                type: 'tree',
                name: '营销库',
                data: [data2],

                top: '5%',
                left: '60%',
                bottom: '2%',
                right: '18%',

                symbolSize: 7,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    }
                },
                lineStyle: {
                    normal: {
                        color:'#EB1C24'
                    }
                },
                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: true,

                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    };


// 为echarts对象加载数据
    myChart.setOption(option);
    myChart.on('click',function (param) {
        treeClick(param);
    })
}
