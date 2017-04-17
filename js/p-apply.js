$(function(){
  
	$("#text1").picker({
	  title: "选择对应班级",
	  cols: [
		{
		  textAlign: 'center',
		  values: ['一年级', '二年级','三年级','四年级', '五级','六年级','初一','初二','初三','高一','高二','高三']
		},
		{
		  textAlign: 'center',
		  values: ['一班', '二班', '三班', '四班']
		},
		 
	  ]
	});
	$("#text2").picker({
	  title: "选择学年学期",
	  cols: [
		{
		  textAlign: 'center',
		  values: ['2011-2012年', '2012-2013年','2013-2014年','2014-2015年', '2015-2016年','2016-2017年']
		},
		{
		  textAlign: 'center',
		  values: ['第一学期', '第二学期']
		},
		 
	  ]
	});
	$("#text3").picker({
	  title: "选择获奖项目",
	  cols: [
		{
		  textAlign: 'center',
		  values: ['国家级','省级', '市级','区级','校级']
		},
		{
		  textAlign: 'center',
		  values: ['武术比赛', '舞蹈比赛','计算机比赛','歌唱比赛']
		},
	  ]
	});
$("#text3").picker({
        title: "你喜欢的国家",
        toolbarCloseText:'确定',
        cols: [
          {
            textAlign: 'center',
            values: [1,2,3],
            displayValues:['新西兰','美国','日本'],
          }
        ]
      });
      
  
      $("#date").datetimePicker({title:"选择日期",m:1});
$("#time").datetimePicker({title:"选择日期时间"});
$("#time2").picker({title:"选择时间",
        cols: [
          {
            textAlign: 'center',
            values: (function () {
                var arr = [];
                for (var i = 0; i <= 23; i++) { arr.push(i < 10 ? '0' + i : i); }
                return arr;
            })()
            
          },
          {
            textAlign: 'center',
            values:  (function () {
                var arr = [];
                for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                return arr;
            })(),
          }
        ]});          
	  });      
         
