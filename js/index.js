// 设置一个立即执行函数进行数据的配置设置
// 采用立即执行函数，可以减少变量污染，减少命名的冲突
// 左1柱状图
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector('.bar .chart'))
  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    // 修改图表大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签的样式
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12'
        },
        // 不显示x坐标轴的样式
        axisLine: {

          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12'
        },
        // y轴的相关配置
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: '2'
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5

        }
      }
    ]
  };
  // 把对象实例化
  myChart.setOption(option)
  // 图表跟随屏幕进行适配
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
// 前一个图表结束需要加入分号，右1柱形图

(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var myChart = echarts.init(document.querySelector('.bar2 .chart'))
  var option = {
    grid: {
      // 调整图表的大小
      top: '10%',
      leftt: '22%',
      bottom: '10%',
      containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false,


    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        // 刻度标签中颜色显示为白色
        axisLabel: {
          color: '#fff'
        },
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
      },
      {
        type: 'category',
        // 实现数据图的翻转
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        // 刻度标签中颜色显示为白色
        axisLabel: {
          color: '#fff'
        },
        data: [702, 350, 610, 793, 664],
      },
    ],
    series: [
      {
        // 修改第一个bar的样式
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: [70, 34, 60, 78, 69],
        itemStyle: {
          barBorderRadius: 20,
          // 可以修改bar的颜色
          color: function (param) {
            // param中存在一个dateIndex的值
            return myColor[param.dataIndex]
          }
        },
        // bar之间的距离
        barCategoryGap: 50,
        // bar的宽度
        barWidth: 10,
        // 图形上的文本标签样式的显示
        label: {
          show: true,
          position: 'inside',
          // {c}%会自定解析数据data中的数据
          formatter: '{c}%',
        }
      },

      {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: '3',
          barBorderRadius: 20,
        }
      }
    ]
  };
  myChart.setOption(option);
  // 图表跟随屏幕进行适配
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
// 左侧1折线图的实现
(function () {
  // 定义获取的数据列表
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  // color:['#00f2f1', '#ed3f35'],
  var myChart = echarts.init(document.querySelector('.line .chart'))
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data: ['Email', 'Union Ads'],
      // 修改图中的图例的标签颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%'
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      // 要求显示当前的一个边框
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLabel: {
        color: '#4c9bfd'

      },
      axisLine: {
        show: false

      },
      axisTick: {
        show: false
      },
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'

      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      },
      // color: ['#00f2f1', '#ed3f35'],
    },
    series: [

      {
        name: '新增粉丝',
        type: 'line',
        stack: 'Total',
        itemStyle: {
          color: '#00f2f1'
        },
        // 折线修饰为圆滑
        smooth: true,
        data: yearData[0].data[0],
      },
      {
        name: '新增游客',
        itemStyle: {
          color: '#ed3f35'
        },
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: yearData[0].data[1],
      },
    ]
  };
  myChart.setOption(option);
  // 图表跟随屏幕进行适配
  window.addEventListener('resize', function () {
    myChart.resize();
  })
  //  点击切换效果
  $(".line h2").on("click", "a", function () {
    //  点击a之后，找到对应的yearDate相关的数据
    //  console.log($(this).index())
    var obj = yearData[$(this).index()]
    option.series[0].data = obj.data[0]
    option.series[1].data = obj.data[1]
    //  里面的数据发生变化之后，图表中的内容需要进行重新渲染
    myChart.setOption(option)
  })

})();
  // 右侧折线图的实现
  // 立即执行函数的实现
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'))

  let base = +new Date(1968, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let date = [];
  let data = [Math.random() * 300];
  for (let i = 1; i < 20000; i++) {
    var now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }

  var option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    legend: {
      top: '0%',
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: "12",
      }
    },
    // 修改图表中的大小
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
      axisLabel: {
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12'
        }
          
      },
      axisLine: {
        lineStyle: {
          color: ' rgba(255,255,255,.2)'
        }
      }
       
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12',
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        }
      }
    },
    series: [
      {
        name: '播放量',
        type: 'line',
        smooth: true,
        // 单独修改当前线条样式
        lineStyle: {
          color: '#0184d5',
          width: 2
            
        },
        //  填充区域
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(1, 132, 213, 0.4)'
            },
            {
              offset: 1,
              color: 'rgba(1, 132, 213, 0.1)'
            }
          ], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        // symbol: 'circle',
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
        symbol: 'circle',
        symbolSize: 12,
        showSymbol: false,
        // 设置拐点的样式
        itemStyle: {
          color: '#0184d5',
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
        // 设置开始的时候不显示拐点，鼠标经过的时候才显示当前的拐点内容
        showSymbol: false,
          
      },
      {
        name: '转发量',
        type: 'line',
        smooth: true,
        // 单独修改当前线条样式
        lineStyle: {
          normal: {
              
            color: '#00d887',
            width: '2'
          },
            
        },
        //  填充区域
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              // 起始的颜色和偏移
              offset: 0,
              color: 'rgba(1, 132, 213, 0.4)'
            },
            {
              offset: 0.8,
              color: 'rgba(1, 132, 213, 0.1)'
            }
          ],
            false
          ),
          // 设置阴影的颜色
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        // 设置拐点
        symbol: 'circle',
        symbolSize: 12,
        showSymbol: false,
        // 设置拐点的样式
        itemStyle: {
          color: '#0184d5',
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
          
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
        showSymbol: false,
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
// 左饼形图的设置
(function () {

  var myChart = echarts.init(document.querySelector('.pie .chart'))
  
  var option = {
    // 添加每一个饼图区域的颜色设置
    color: [
      "#065aab",
      "#066eab",
      "#0682ab",
      "#0696ab",
      "#06a0ab",
    ],
    tooltip: {
      trigger: 'item',
      // 设置为图表中的占比
      formatter: "{a} <br/>{b}:{c}({d}%)"
    
    },
    // 图例组件的
    legend: {
      // 图例的位置
      bottom: '5%',
      // left: 'center',
      // data:['直接访问','直接访问','直接访问','直接访问','直接访问'],
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      },
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
    },
    series: [
     
      {
        name: '年龄分布',
        type: 'pie',
        // 修改pie图表为居中显示
        center: ['50%', '40%'],
        radius: ['50%', '70%'],//分别显示为内原的半径，和外圆的半径
        avoidLabelOverlap: false,
        // 表示为图形中的文字
        label: {
          show: false,
          position: 'center'
        },
       
        labelLine: {
          // 链接图形和文字的一条线
          show: false
        },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ],
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize()
  })

})();
// 设置右侧的饼形图
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'))
  var option = {
    //修改图形的颜色
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    legend: {
      bottom: '0',
      itemHeight: 10,
      itemWidth: 10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: "12",
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        // 修改饼图的大小
        radius: [10, 70],
        center: ['50%', '50%'],
        // 饼图修改为半径模式，同时还存在一种area模式
        roseType: 'radius',
        itemStyle: {
          borderRadius: 8
        },
        // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
        label: {
          fontSize: 10
        },
        // 连接图形和文字的线条
        labelLine: {
          
          // 链接扇形图的线长
          length: 6,
          // 连接文字的线长
          length2: 8,
          
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
// 模拟飞机航线板块
// 模拟飞行路线模块地图模块
(function() {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028]
  };

  var XAData = [
    [{ name: "成都" }, { name: "拉萨", value: 100 }],
    [{ name: "成都" }, { name: "上海", value: 100 }],
    [{ name: "成都" }, { name: "广州", value: 100 }],
    [{ name: "成都" }, { name: "西宁", value: 100 }],
    [{ name: "成都" }, { name: "银川", value: 100 }]
  ];

  var XNData = [
    [{ name: "西宁" }, { name: "北京", value: 100 }],
    [{ name: "西宁" }, { name: "上海", value: 100 }],
    [{ name: "西宁" }, { name: "广州", value: 100 }],
    [{ name: "西宁" }, { name: "西安", value: 100 }],
    [{ name: "西宁" }, { name: "银川", value: 100 }]
  ];

  var YCData = [
    [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
    [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
    [{ name: "银川" }, { name: "上海", value: 100 }],
    [{ name: "银川" }, { name: "西安", value: 100 }],
    [{ name: "银川" }, { name: "西宁", value: 100 }]
  ];

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
  var series = [];
  [
    ["成都", XAData],
    ["西宁", XNData],
    ["银川", YCData]
  ].forEach(function(item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: function(val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: item[1].map(function(dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function(params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: "vertical",
      top: "bottom",
      left: "right",
      data: ["成都 Top3", "西宁 Top3", "银川 Top3"],
      textStyle: {
        color: "#fff"
      },
      selectedMode: "multiple"
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      // 实现地图放大倍数
      zoom: 1.2,
      roam: true,
      itemStyle: {
        normal: {
          // 地图省份的背景颜色
          areaColor: "rgba(20, 41, 87,0.6)",
          borderColor: "#195BB9",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  // 图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

