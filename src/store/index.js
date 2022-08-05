import { createStore } from 'vuex'
import * as Cesium from "cesium/Cesium";

export default createStore({
  state(){
    return{
    //路径漫游轨迹
      flyLoadArr: [
        {
            "name": "轨迹一",
            "modelType": "0",
            "height": 40,
            "flyPoints": [
                {
                    "lon": 121.60845083304737,
                    "lat": 31.250826062660067,
                    "height": 40,
                    "showHeight": 0.14056796219469062
                },
                {
                    "lon": 121.60681678424766,
                    "lat": 31.25046424198543,
                    "height": 40,
                    "showHeight": 0.14169279675710983
                },
                {
                    "lon": 121.60601253574364,
                    "lat": 31.250326339996015,
                    "height": 40,
                    "showHeight": 0.14370647803898448
                },
                {
                    "lon": 121.60592815460905,
                    "lat": 31.250822529002,
                    "height": 40,
                    "showHeight": 0.14201853130766803
                },
                {
                    "lon": 121.60614300414069,
                    "lat": 31.251210745937083,
                    "height": 40,
                    "showHeight": 0.14041583249443576
                },
                {
                    "lon": 121.60628055127904,
                    "lat": 31.251343687934042,
                    "height": 40,
                    "showHeight": 0.29001553207390507
                },
                {
                    "lon": 121.60697192382956,
                    "lat": 31.251401518893783,
                    "height": 40,
                    "showHeight": 0.13857873015918312
                },
                {
                    "lon": 121.60766509189673,
                    "lat": 31.251550547422905,
                    "height": 40,
                    "showHeight": 0.13795658241754064
                },
                {
                    "lon": 121.60798488589721,
                    "lat": 31.25163141649704,
                    "height": 40,
                    "showHeight": 0.1380009309937373
                },
                {
                    "lon": 121.60829591926067,
                    "lat": 31.251704619034836,
                    "height": 40,
                    "showHeight": 0.137970295965226
                },
                {
                    "lon": 121.60822072944501,
                    "lat": 31.251975530872656,
                    "height": 40,
                    "showHeight": 0.13764474169839178
                },
                {
                    "lon": 121.60809699106528,
                    "lat": 31.25240572684016,
                    "height": 40,
                    "showHeight": 0.1370812797132089
                },
                {
                    "lon": 121.60797701406943,
                    "lat": 31.25271549603241,
                    "height": 40,
                    "showHeight": 0.13698424473386253
                },
                {
                    "lon": 121.60792316781423,
                    "lat": 31.252783091415573,
                    "height": 40,
                    "showHeight": 0.13689186050375943
                },
                {
                    "lon": 121.60725844523513,
                    "lat": 31.25270055035378,
                    "height": 40,
                    "showHeight": 0.13665296596595602
                },
                {
                    "lon": 121.6067816360725,
                    "lat": 31.25258755648347,
                    "height": 40,
                    "showHeight": 0.13719036842273863
                },
                {
                    "lon": 121.60598527852137,
                    "lat": 31.252404009324056,
                    "height": 40,
                    "showHeight": 0.13859751808487566
                },
                {
                    "lon": 121.60600850885649,
                    "lat": 31.252636184656648,
                    "height": 40,
                    "showHeight": -0.011792928739101321
                },
                {
                    "lon": 121.60729463798997,
                    "lat": 31.25301950992768,
                    "height": 40,
                    "showHeight": 0.2868441515437342
                },
                {
                    "lon": 121.60753384199033,
                    "lat": 31.253246751168348,
                    "height": 40,
                    "showHeight": 0.13700168710637536
                },
                {
                    "lon": 121.60744961852967,
                    "lat": 31.25377721470917,
                    "height": 40,
                    "showHeight": 0.13786671527908445
                },
                {
                    "lon": 121.60730739285364,
                    "lat": 31.254274660694264,
                    "height": 40,
                    "showHeight": 4.2141145507867535
                },
                {
                    "lon": 121.60719417528756,
                    "lat": 31.254640949023447,
                    "height": 40,
                    "showHeight": 7.464902860207048
                },
                {
                    "lon": 121.60701123750151,
                    "lat": 31.25486087401466,
                    "height": 40,
                    "showHeight": 7.966414374333367
                },
                {
                    "lon": 121.60690240119912,
                    "lat": 31.254925095534865,
                    "height": 40,
                    "showHeight": 0.1420485259936644
                },
                {
                    "lon": 121.60663428891003,
                    "lat": 31.254931237988988,
                    "height": 40,
                    "showHeight": 0.29235047972783457
                },
                {
                    "lon": 121.60620810623122,
                    "lat": 31.254866543316822,
                    "height": 40,
                    "showHeight": 0.2926046864618073
                },
                {
                    "lon": 121.60561119957771,
                    "lat": 31.254740198767873,
                    "height": 40,
                    "showHeight": 0.2936385263652668
                },
                {
                    "lon": 121.60520363606237,
                    "lat": 31.254727228635584,
                    "height": 40,
                    "showHeight": 0.14480046451412795
                },
                {
                    "lon": 121.60495672514247,
                    "lat": 31.25462796065764,
                    "height": 40,
                    "showHeight": 0.29509221775594063
                },
                {
                    "lon": 121.6048984674148,
                    "lat": 31.254580247794976,
                    "height": 40,
                    "showHeight": 0.2951803848239683
                }
            ]
        },
        {
            "name": "轨迹二",
            "modelType": "0",
            "height": 40,
            "flyPoints": [
                {
                    "lon": 121.60672116580481,
                    "lat": 31.251350728513152,
                    "height": 40,
                    "showHeight": 0.03513561326914057
                },
                {
                    "lon": 121.60715139002527,
                    "lat": 31.251456247595,
                    "height": 40,
                    "showHeight": 0.04286194641845884
                },
                {
                    "lon": 121.60727038649728,
                    "lat": 31.2515027862145,
                    "height": 40,
                    "showHeight": 0.12043826906030189
                },
                {
                    "lon": 121.60750927409669,
                    "lat": 31.251529588843223,
                    "height": 40,
                    "showHeight": 0.04982800658946742
                },
                {
                    "lon": 121.60768626046425,
                    "lat": 31.251563922429455,
                    "height": 40,
                    "showHeight": 0.05347399025483082
                },
                {
                    "lon": 121.60791499106844,
                    "lat": 31.251606376529615,
                    "height": 40,
                    "showHeight": 0.05795620079801167
                },
                {
                    "lon": 121.60812543257336,
                    "lat": 31.251653989859772,
                    "height": 40,
                    "showHeight": 0.06172984385939463
                },
                {
                    "lon": 121.6082508901239,
                    "lat": 31.25168556136105,
                    "height": 40,
                    "showHeight": 0.06469405286183848
                },
                {
                    "lon": 121.60823889152019,
                    "lat": 31.251826358517004,
                    "height": 40,
                    "showHeight": 0.06573260978261186
                },
                {
                    "lon": 121.6082213007455,
                    "lat": 31.251991817372655,
                    "height": 40,
                    "showHeight": 0.06759107838449174
                },
                {
                    "lon": 121.60813254293555,
                    "lat": 31.252162347198436,
                    "height": 40,
                    "showHeight": 0.0683675629506284
                },
                {
                    "lon": 121.6080720690789,
                    "lat": 31.252331837538286,
                    "height": 40,
                    "showHeight": 0.06954384530911893
                },
                {
                    "lon": 121.60803004049204,
                    "lat": 31.25253371371211,
                    "height": 40,
                    "showHeight": 0.07121519776310319
                },
                {
                    "lon": 121.60793195570473,
                    "lat": 31.252709305359687,
                    "height": 40,
                    "showHeight": 0.07187971955580404
                },
                {
                    "lon": 121.60784936403724,
                    "lat": 31.252797429837113,
                    "height": 40,
                    "showHeight": 0.07173696643355626
                },
                {
                    "lon": 121.60767732178935,
                    "lat": 31.25277580418354,
                    "height": 40,
                    "showHeight": 0.06856426770035867
                },
                {
                    "lon": 121.60740776813441,
                    "lat": 31.25271667756134,
                    "height": 40,
                    "showHeight": 0.05932444548115968
                },
                {
                    "lon": 121.60730612634354,
                    "lat": 31.252884880603602,
                    "height": 40,
                    "showHeight": -0.0899723562699152
                },
                {
                    "lon": 121.60731163700459,
                    "lat": 31.253064369089362,
                    "height": 40,
                    "showHeight": 0.21312420223699066
                },
                {
                    "lon": 121.60749534369604,
                    "lat": 31.253231700219676,
                    "height": 40,
                    "showHeight": 0.0608929302190344
                },
                {
                    "lon": 121.60764592764042,
                    "lat": 31.25334595072802,
                    "height": 40,
                    "showHeight": 0.06483762222068418
                },
                {
                    "lon": 121.60763196834166,
                    "lat": 31.253544094479473,
                    "height": 40,
                    "showHeight": 0.06774344432712794
                },
                {
                    "lon": 121.60755982632791,
                    "lat": 31.253802568487057,
                    "height": 40,
                    "showHeight": 0.07045695478440354
                },
                {
                    "lon": 121.60730310547021,
                    "lat": 31.25401813126658,
                    "height": 40,
                    "showHeight": 0.06555246127906916
                },
                {
                    "lon": 121.60723703162108,
                    "lat": 31.253974163699368,
                    "height": 40,
                    "showHeight": 0.06358228122724431
                },
                {
                    "lon": 121.60787751546954,
                    "lat": 31.25410314330725,
                    "height": 40,
                    "showHeight": 0.053800210013649985
                },
                {
                    "lon": 121.60820492113605,
                    "lat": 31.254106384588567,
                    "height": 40,
                    "showHeight": 0.05983157458142335
                },
                {
                    "lon": 121.60865323643425,
                    "lat": 31.254230909541924,
                    "height": 40,
                    "showHeight": 0.06965908845640952
                },
                {
                    "lon": 121.60868779451899,
                    "lat": 31.25442206770919,
                    "height": 40,
                    "showHeight": 0.06582158392414712
                },
                {
                    "lon": 121.60862316420943,
                    "lat": 31.25470147426975,
                    "height": 40,
                    "showHeight": 0.0692046520090024
                },
                {
                    "lon": 121.60865548067335,
                    "lat": 31.254869012396544,
                    "height": 40,
                    "showHeight": 0.07290207011829908
                },
                {
                    "lon": 121.60868730427211,
                    "lat": 31.25514452563341,
                    "height": 40,
                    "showHeight": 2.7067805534258667
                },
                {
                    "lon": 121.6086222833966,
                    "lat": 31.25525965005854,
                    "height": 40,
                    "showHeight": 0.22590408177451446
                },
                {
                    "lon": 121.60837710412498,
                    "lat": 31.25537660890278,
                    "height": 40,
                    "showHeight": 0.07382382271706159
                },
                {
                    "lon": 121.60777754111322,
                    "lat": 31.255225713733736,
                    "height": 40,
                    "showHeight": 0.21021927812384408
                },
                {
                    "lon": 121.60734409761321,
                    "lat": 31.255094387969223,
                    "height": 40,
                    "showHeight": 0.2005048906383918
                },
                {
                    "lon": 121.60673998135762,
                    "lat": 31.25495023991155,
                    "height": 40,
                    "showHeight": 0.22717764983682037
                },
                {
                    "lon": 121.60657533621027,
                    "lat": 31.25490917334898,
                    "height": 40,
                    "showHeight": 0.07382560870297167
                },
                {
                    "lon": 121.60636028095104,
                    "lat": 31.25486288533068,
                    "height": 40,
                    "showHeight": 0.06979450771936173
                },
                {
                    "lon": 121.60605208278051,
                    "lat": 31.254786904121307,
                    "height": 40,
                    "showHeight": 0.06391469425904266
                },
                {
                    "lon": 121.60585880174835,
                    "lat": 31.25478323011182,
                    "height": 40,
                    "showHeight": 0.21072947980743723
                },
                {
                    "lon": 121.60547432461661,
                    "lat": 31.254690632206422,
                    "height": 40,
                    "showHeight": 0.05356892780299271
                },
                {
                    "lon": 121.6051524472029,
                    "lat": 31.25460319065088,
                    "height": 40,
                    "showHeight": 0.04759209757030039
                },
                {
                    "lon": 121.60483881228646,
                    "lat": 31.254501894723568,
                    "height": 40,
                    "showHeight": 0.07456437178566921
                },
                {
                    "lon": 121.60482160475894,
                    "lat": 31.254259880358987,
                    "height": 40,
                    "showHeight": 0.22083444598015115
                },
                {
                    "lon": 121.60724521761665,
                    "lat": 31.253676017904198,
                    "height": 40,
                    "showHeight": -250.89959046625216
                },
                {
                    "lon": 121.60494145099042,
                    "lat": 31.253770676985273,
                    "height": 40,
                    "showHeight": 0.23096256438319923
                },
                {
                    "lon": 121.60504836431745,
                    "lat": 31.253472049948044,
                    "height": 40,
                    "showHeight": 0.22520830698706845
                },
                {
                    "lon": 121.60513714320564,
                    "lat": 31.25321068421136,
                    "height": 40,
                    "showHeight": 0.07010190542993887
                },
                {
                    "lon": 121.6051973911932,
                    "lat": 31.252953805999436,
                    "height": 40,
                    "showHeight": 0.2160242787620213
                },
                {
                    "lon": 121.6053042183645,
                    "lat": 31.252778667856315,
                    "height": 40,
                    "showHeight": 0.2121143684451874
                },
                {
                    "lon": 121.60540606954122,
                    "lat": 31.252640499028587,
                    "height": 40,
                    "showHeight": 0.2087047554042054
                },
                {
                    "lon": 121.60537924737933,
                    "lat": 31.252182192964536,
                    "height": 40,
                    "showHeight": 0.06150318715686694
                },
                {
                    "lon": 121.60549853688845,
                    "lat": 31.25171681164117,
                    "height": 40,
                    "showHeight": 0.05976123057394109
                },
                {
                    "lon": 121.60571059156129,
                    "lat": 31.251020760585586,
                    "height": 40,
                    "showHeight": 0.059485719949597046
                },
                {
                    "lon": 121.60586582861717,
                    "lat": 31.250420921808875,
                    "height": 40,
                    "showHeight": 0.06057655725619074
                },
                {
                    "lon": 121.60597514780568,
                    "lat": 31.250184208545797,
                    "height": 40,
                    "showHeight": -0.08960377292305345
                },
                {
                    "lon": 121.60746383440915,
                    "lat": 31.25044997990775,
                    "height": 40,
                    "showHeight": -0.1775230076128207
                },
                {
                    "lon": 121.60807597573964,
                    "lat": 31.25063289153922,
                    "height": 40,
                    "showHeight": 0.050294309240458135
                }
            ]
        }
      ],
      isFlyFlag:false,
      flyExection:undefined
    }

  },
  getters: {
  },
  mutations: {
    //开始飞行
    //#region
    // FLYTOMODEL(state,name){
    //     console.log("FLYTOMODEL");
    //     var flyRoad=null;
    //     var flyEntity;  //飞行实体
    //     var modelUri = "./static/model/CesiumAir/Cesium_Air.glb"; //默认飞机模型
    //     for(var i=0;i<state.flyLoadArr.length;i++){
    //         if(state.flyLoadArr[i].name===name){
    //             flyRoad=state.flyLoadArr[i]
    //             break
    //         }
    //     }
    //     viewer.camera.setView({
    //         destination : Cesium.Cartesian3.fromDegrees(flyRoad.flyPoints[0].lon, flyRoad.flyPoints[0].lat, flyRoad.flyPoints[0].height+1000),
    //         orientation: {
    //             heading : Cesium.Math.toRadians(0.0), //默认值north
    //             pitch : Cesium.Math.toRadians(-90.0), // 默认值down
    //             roll : 0.0 //默认值
    //         }
    //     });
    //     //运动暂停
    //     viewer.clock.shouldAnimate   = false;
    //     var info = flyRoad.flyPoints; //飞行点信息
    //     //设置初始位置
    //     viewer.camera.flyTo({
    //         destination: Cesium.Cartesian3.fromDegrees(info[0].lon,info[0].lat,info[0].height), // 设置位置
    //         orientation:{
    //             heading: Cesium.Math.toRadians(20.0), // 方向
    //             pitch: Cesium.Math.toRadians(-90.0), // 倾斜角度
    //             roll: 0
    //         },
    //         duration: 0, // 设置飞行持续时间，默认会根据距离来计算
    //         complete: function() {
    //             // 到达位置后执行的回调函数
    //         },
    //         cancle: function() {
    //             // 取消飞行回调函数
    //         },
    //         pitchAdjustHeight: -90, // 如果摄像机飞越高于该值，则调整俯仰的俯仰角度，并将地球保持在视口中
    //         maximumHeight: 500, // 相机最大飞行高度
    //         //flyOverLongitude: 100, // 如果到达目的地有2种方式，设置具体值后会强制选择方向飞过这个经度
    //     });
    //     //给时间差值,并绘制原始点   /*拓展，差值应该用距离比计算*/
    //     var distance = 0;
    //     info[0].distance = 0;
    //     info[0].allDistance = 0;
    //     for (var j = 1; j < info.length; j++) {
    //         var point1cartographic = Cesium.Cartographic.fromDegrees(info[j-1].lon, info[j-1].lat, info[j-1].height);
    //         var point2cartographic = Cesium.Cartographic.fromDegrees(info[j].lon, info[j].lat, info[j].height);
    //         var geodesic = new Cesium.EllipsoidGeodesic();
    //         geodesic.setEndPoints(point1cartographic, point2cartographic);
    //         var s = geodesic.surfaceDistance;
    //         //返回两点之间的距离
    //         s = Math.sqrt(Math.pow(s, 2) + Math.pow(point2cartographic.height - point1cartographic.height, 2));
    //         info[j].distance = s;
    //         info[j].allDistance = info[j-1].allDistance+s;
    //         distance = distance + s;
    //     }
    //     /*根据差值计算时间*/
    //     for (var j = 0; j < info.length; j++) {
    //         info[j].time = (info.length - 1) * 500 * info[j].allDistance/distance;
    //         viewer.entities.add({
    //             id:"flyPoints"+j,
    //             position: Cesium.Cartesian3.fromDegrees(info[j].lon, info[j].lat, info[j].height),
    //             //clampToGround: true, //开启贴地
    //             label: {
    //                 text: "飞行点"+(j+1),
    //                 font: '18px Helvetica'
    //             },
    //             point: {
    //                 pixelSize: 8,
    //                 color: Cesium.Color.CHARTREUSE
    //             }
    //         });
    //     }
    //     // 飞行路径数据示例
    //     /*var data  = [{ longitude: 116.492339, dimension: 39.980411, height: 0, time: 0 }, { longitude: 101.909418, dimension: 39.649198, height: 0, time: 40 }, { longitude: 114.272402, dimension: 25.575537, height: 0, time: 80 }, { longitude: 85.572619, dimension: 40.046271, height: 0, time: 120 }, { longitude: 128.695882, dimension: 47.197037, height: 0, time: 160 }];*/
    //     // 起始时间
    //     var start =  Cesium.JulianDate.fromIso8601('2020-12-10T10:00:00Z')
    //     // 结束时间
    //     var stop = Cesium.JulianDate.fromIso8601('2020-12-10T12:00:00Z')
    //     // 设置始时钟始时间
    //     viewer.clock.startTime = start.clone();
    //     // 设置时钟当前时间
    //     viewer.clock.currentTime = start.clone();
    //     // 设置始终停止时间
    //     viewer.clock.stopTime = stop.clone();
    //     // 时间速率，数字越大时间过的越快
    //     viewer.clock.multiplier = {
    //         "value":200,
    //         "min":150,
    //         "max":400
    //     };   //拓展，速度控制
    //     //给时间线设置边界1
    //     //viewer.timeline.zoomTo(start, stop);
    //     // 循环执行 
    //     viewer.clock.clockRange = Cesium.ClockRange.CLAMPED; //行为方式 CLAMPED可停止、LOOP_STOP循环、UNBOUNDED 一直沿着时间行进
    //     var property = computeFlight(info, start);
    //     // 添加模型
    //     flyEntity = viewer.entities.add({
    //         // 和时间轴关联
    //         availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
    //             start: start,
    //             stop: stop
    //         })]),
    //         // 位置信息
    //         position: property,
    //         //基于位置移动自动计算方向.
    //         orientation: new Cesium.VelocityOrientationProperty(property),
    //         // 飞机模型数据
    //         model: {
    //             uri: modelUri,
    //             id: "plane",
    //             minimumPixelSize: 128, //模型最小像素大小
    //             //maximumScale : 1
    //         },
    //         //路径
    //         path: {
    //             resolution: 1,
    //             material: new Cesium.PolylineGlowMaterialProperty({
    //                 glowPower: 0.1,
    //                 color: Cesium.Color.CORNFLOWERBLUE
    //             }),
    //             width: 15 //路径线宽
    //         }
    //     });
    //     flyEntity.position.setInterpolationOptions({
    //         interpolationDegree : 2,
    //         interpolationAlgorithm : Cesium.HermitePolynomialApproximation
    //     });
    //     viewer.trackedEntity = flyEntity; //跟随1
    //     viewer.trackedEntity.model.horizontalOrigin = undefined;
    //     viewer.trackedEntity.model.verticalOrigin = undefined;
    //     state.isFlyFlag = true;
    //     console.log(state.isFlyFlag);
    //     //时间终止捕捉
    //     var flyExection=undefined
    //     flyExection = function TimeExecution() {
    //         // 当前已经过去的时间，单位s
    //         //var delTime = Cesium.JulianDate.secondsDifference(viewer.clock.currentTime, viewer.clock.startTime);
    //         if (Cesium.JulianDate.compare(viewer.clock.currentTime, viewer.clock.stopTime) >= 0) {
    //             // ViewFlyModeClear();
    //         }
    //     };
    //     viewer.clock.onTick.addEventListener(flyExection);
        
    //     function computeFlight(source, start) {
    //         // 取样位置 相当于一个集合
    //         var property = new Cesium.SampledPositionProperty();
    //         for (var i = 0; i < source.length; i++) {
    //             var time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate);
    //             var position = Cesium.Cartesian3.fromDegrees(source[i].lon, source[i].lat, source[i].height);
    //             // 添加位置，和时间对应
    //             property.addSample(time, position);
    //         }
    //         return property;
    //     }
    // },
    //#endregion
    FLYTOMODEL(state,name){
        var flyRoad=null;
        var flyEntity;  //飞行实体
        for(var i=0;i<state.flyLoadArr.length;i++){
            if(state.flyLoadArr[i].name===name){
                flyRoad=state.flyLoadArr[i]
                break
            }
        }
        //清除所有绘制与添加痕迹
        viewer.entities.removeAll();
        viewer.camera.setView({
            destination : Cesium.Cartesian3.fromDegrees(flyRoad.flyPoints[0].lon, flyRoad.flyPoints[0].lat, flyRoad.flyPoints[0].height+1000),
            orientation: {
                heading : Cesium.Math.toRadians(0.0), //默认值north
                pitch : Cesium.Math.toRadians(-90.0), // 默认值down
                roll : 0.0 //默认值
            }
        });
        var info = flyRoad.flyPoints; //飞行点信息
        //设置初始位置
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(info[0].lon,info[0].lat,info[0].height), // 设置位置
            orientation:{
                heading: Cesium.Math.toRadians(20.0), // 方向
                pitch: Cesium.Math.toRadians(-90.0), // 倾斜角度
                roll: 0
            },
            duration: 0, // 设置飞行持续时间，默认会根据距离来计算
            complete: function() {
                // 到达位置后执行的回调函数
            },
            cancle: function() {
                // 取消飞行回调函数
            },
            pitchAdjustHeight: -90, // 如果摄像机飞越高于该值，则调整俯仰的俯仰角度，并将地球保持在视口中
            maximumHeight: 500, // 相机最大飞行高度
            //flyOverLongitude: 100, // 如果到达目的地有2种方式，设置具体值后会强制选择方向飞过这个经度
        });

        //给时间差值,并绘制原始点   /*拓展，差值应该用距离比计算*/
        var distance = 0;
        info[0].distance = 0;
        info[0].allDistance = 0;
        for (var j = 1; j < info.length; j++) {
            var point1cartographic = Cesium.Cartographic.fromDegrees(info[j-1].lon, info[j-1].lat, info[j-1].height);
            var point2cartographic = Cesium.Cartographic.fromDegrees(info[j].lon, info[j].lat, info[j].height);
            var geodesic = new Cesium.EllipsoidGeodesic();
            geodesic.setEndPoints(point1cartographic, point2cartographic);
            var s = geodesic.surfaceDistance;
            //返回两点之间的距离
            s = Math.sqrt(Math.pow(s, 2) + Math.pow(point2cartographic.height - point1cartographic.height, 2));
            info[j].distance = s;
            info[j].allDistance = info[j-1].allDistance+s;
            distance = distance + s;
        }

        /*根据差值计算时间*/
        for (var j = 0; j < info.length; j++) {
            info[j].time = (info.length - 1) * 500 * info[j].allDistance/distance;
            viewer.entities.add({
                id:"flyPoints"+j,
                position: Cesium.Cartesian3.fromDegrees(info[j].lon, info[j].lat, info[j].height),
                //clampToGround: true, //开启贴地
                label: {
                    text: "飞行点"+(j+1),
                    font: '18px Helvetica'
                },
                point: {
                    pixelSize: 8,
                    color: Cesium.Color.CHARTREUSE
                }
            });
        }

        // 飞行路径数据示例
        /*var data  = [{ longitude: 116.492339, dimension: 39.980411, height: 0, time: 0 }, { longitude: 101.909418, dimension: 39.649198, height: 0, time: 40 }, { longitude: 114.272402, dimension: 25.575537, height: 0, time: 80 }, { longitude: 85.572619, dimension: 40.046271, height: 0, time: 120 }, { longitude: 128.695882, dimension: 47.197037, height: 0, time: 160 }];*/
        // 起始时间
        var start =  Cesium.JulianDate.fromIso8601('2020-12-10T10:00:00Z')
        // 结束时间
        var stop = Cesium.JulianDate.fromIso8601('2020-12-10T12:00:00Z')
        // this.theFlyStopTime = stop;
        // 设置始时钟始时间
        viewer.clock.startTime = start.clone();
        // 设置时钟当前时间
        viewer.clock.currentTime = start.clone();
        // 设置始终停止时间
        viewer.clock.stopTime = stop.clone();
        // 时间速率，数字越大时间过的越快
        viewer.clock.multiplier = {
            "value":200,
            "min":150,
            "max":400
        };   //拓展，速度控制
        //给时间线设置边界1
        //viewer.timeline.zoomTo(start, stop);
        // 循环执行 
        viewer.clock.clockRange = Cesium.ClockRange.CLAMPED; //行为方式 CLAMPED可停止、LOOP_STOP循环、UNBOUNDED 一直沿着时间行进
        // var property =computeFlight(info, start);
        var computedProperty=new Cesium.SampledPositionProperty();
        for (var i = 0; i < info.length; i++) {
            var time = Cesium.JulianDate.addSeconds(start, info[i].time, new Cesium.JulianDate);
            var position = Cesium.Cartesian3.fromDegrees(info[i].lon, info[i].lat, info[i].height);
            // 添加位置，和时间对应
            computedProperty.addSample(time, position);
        }
        var property=computedProperty


        // 添加模型
        flyEntity = viewer.entities.add({
            // 和时间轴关联
            availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                start: start,
                stop: stop
            })]),
            // 位置信息
            position: property,
            //基于位置移动自动计算方向.
            orientation: new Cesium.VelocityOrientationProperty(property),
            // 飞机模型数据
            model: {
                uri: modelUri,
                id: "plane",
                minimumPixelSize: 128, //模型最小像素大小
                //maximumScale : 1
            },
            //路径
            path: {
                resolution: 1,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.1,
                    color: Cesium.Color.CORNFLOWERBLUE
                }),
                width: 15 //路径线宽
            }
        });
        flyEntity.position.setInterpolationOptions({
            interpolationDegree : 2,
            interpolationAlgorithm : Cesium.HermitePolynomialApproximation
        });

        viewer.trackedEntity = flyEntity; //跟随1
        viewer.trackedEntity.model.horizontalOrigin = undefined;
        viewer.trackedEntity.model.verticalOrigin = undefined;
        state.isFlyFlag = true;
        //时间终止捕捉
        state.flyExection = function TimeExecution() {
            // 当前已经过去的时间，单位s
            //var delTime = Cesium.JulianDate.secondsDifference(viewer.clock.currentTime, viewer.clock.startTime);
            if (Cesium.JulianDate.compare(viewer.clock.currentTime, viewer.clock.stopTime) >= 0) {
                // ViewFlyModeClear();
            }
        };

        viewer.clock.onTick.addEventListener(state.flyExection);
    
    },
    //飞行暂停
    MOVENPAUSE(){
        if(viewer.clock.shouldAnimate){
            viewer.clock.shouldAnimate   = false;
        }else{
            viewer.clock.shouldAnimate   = true;
        }
    },
    DELETEFLYROUTE(state,name){
      state.flyLoadArr=state.flyLoadArr.filter((route)=>{
        return route.name!==name
      })
      console.log('删除漫游路径');
    },
    FLYTOPOINT(state,rowData){
      viewer.camera.flyTo({
        destination : {x:rowData.camera[0].x, y:rowData.camera[0].y, z:rowData.camera[0].z},
        orientation : {
            heading : rowData.camera[3].x,
            pitch :rowData.camera[3].y,
            roll :rowData.camera[3].z
        }
    });
    }
  },
  actions: {
    //开始飞行
    flyToModel(context,name){
        viewer.entities.removeAll();
        context.commit('FLYTOMODEL',name)
    },
    //飞行暂停
    MoveNPause(context){
        context.commit('MOVENPAUSE')
    },
    deleteFlyRoute(context,name){
      context.commit('DELETEFLYROUTE',name)
    },
    clearArrAll(){
      console.log("全部清空");
      viewer.dataSources.removeAll();
      viewer.trackedEntity = undefined;
      viewer.entities.removeAll();

      // 释放鼠标事件
      handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
      this.dispatch('clearDis');
    },
    clearDis(){
      if(window.shapeEditMenu != undefined){
          shapeEditMenu.style.display = "none";
      }
      if (previousPickedEntity.feature != undefined) {
          previousPickedEntity.feature.color = Cesium.Color.WHITE;
      }
    }
  },
  modules: {
  }
})
