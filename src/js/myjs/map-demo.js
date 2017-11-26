




/**
 *
 * @param data
 * is map option series
 * */

// createMap(mapdata);


function createMap(data) {
    require.config({
        baseUrl: "./src/js/echartsmap",
        paths: {
            echarts: "./",
        },
        packages: [
            {
                name: 'BMap',
                location:'./',
                main: 'main'
            }
        ]
    });

    require(
        [
            'echarts',
            'BMap',
            'echarts/chart/map',
        ],
        function (echarts,BMapExtension) {
            console.log(1111111);
            // $('#main').css({
            //     height:$('body').height(),
            //     width:$('body').width()
            // });

            // 初始化地图
            var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{
                enableMapClick: false
            });
            var map = BMapExt.getMap();
            var container = BMapExt.getEchartsContainer();

            var startPoint = {
                x: 116.594283,
                    y: 36.891089
            };


            var point = new BMap.Point(startPoint.x, startPoint.y);
            map.centerAndZoom(point, 10);
            map.enableScrollWheelZoom(true);
            // 地图自定义样式
            map.setMapStyle({
                styleJson: [
                    {
                        'featureType': 'land',     //调整土地颜色
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#081734'
                        }
                    },
                    {
                        'featureType': 'building',   //调整建筑物颜色
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#04406F'
                        }
                    },
                    {
                        'featureType': 'building',   //调整建筑物标签是否可视
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'highway',     //调整高速道路颜色
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#015B99'
                        }
                    },
                    {
                        'featureType': 'highway',    //调整高速名字是否可视
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'arterial',   //调整一些干道颜色
                        'elementType': 'geometry',
                        'stylers': {
                            'color':'#003051'
                        }
                    },
                    {
                        'featureType': 'arterial',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'green',
                        'elementType': 'geometry',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'water',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#044161'
                        }
                    },
                    {
                        'featureType': 'subway',    //调整地铁颜色
                        'elementType': 'geometry.stroke',
                        'stylers': {
                            'color': '#003051'
                        }
                    },
                    {
                        'featureType': 'subway',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'railway',
                        'elementType': 'geometry',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'railway',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'all',     //调整所有的标签的边缘颜色
                        'elementType': 'labels.text.stroke',
                        'stylers': {
                            'color': '#313131'
                        }
                    },
                    {
                        'featureType': 'all',     //调整所有标签的填充颜色
                        'elementType': 'labels.text.fill',
                        'stylers': {
                            'color': '#FFFFFF'
                        }
                    },
                    {
                        'featureType': 'manmade',
                        'elementType': 'geometry',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'manmade',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'local',
                        'elementType': 'geometry',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'local',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'subway',
                        'elementType': 'geometry',
                        'stylers': {
                            'lightness': -65
                        }
                    },
                    {
                        'featureType': 'railway',
                        'elementType': 'all',
                        'stylers': {
                            'lightness': -40
                        }
                    },
                    {
                        'featureType': 'boundary',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#8b8787',
                            'weight': '1',
                            'lightness': -29
                        }
                    }
                ]
            });

            option = {

                color: ['aqua','gold','lime'],
                title : {
                    text: '',
                    subtext: '',
                    x:'center',
                    textStyle : {
                        color: '#fff',
                        fontSize:20,
                        fontWeight:'bold',
                    }
                },
                // 鼠标移动上面的展示
                tooltip : {
                    show: true,
                    trigger:'item',
                    hideDelay:1000,
                    formatter: function(d) {
                        var jw= '经度：'+d.value[0]+'<br/>'
                        jw += '纬度：'+d.value[1]
                        return jw
                    }
                },
                //文字的颜色
                color:color,
                legend:{
                    data:(function () {
                        var temp =[];
                        data.map(function (item) {
                            temp.push(item.name);
                        })
                        // console.log(temp);
                        return temp;
                    })(),
                    x:'left',
                    orient:'vertical',
                    padding:[30,15,15,30],
                    textStyle:{
                        fontSize:17,
                        color:'auto',
                    },
                    selected:function () {
                        var temp={};
                        data.map(function (item) {
                            temp[item.name]=true
                        });
                        return temp;
                    },


                    selectedMode:'multiple',
                },
                /*
                 toolbox: {
                 show : true,
                 orient : 'vertical',
                 x: 'right',
                 y: 'center',
                 feature : {
                 mark : {show: true},
                 dataView : {show: true, readOnly: false},
                 restore : {show: true},
                 saveAsImage : {show: true}
                 }
                 },*/
                series :data
            };


            var myChart = BMapExt.initECharts(container);
            window.onresize = myChart.onresize;
            BMapExt.setOption(option);
        }
    );
}