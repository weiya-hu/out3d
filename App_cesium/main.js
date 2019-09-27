// Get your own Bing Maps API key at https://www.bingmapsportal.com, prior to publishing your Cesium application:
Cesium.BingMapsApi.defaultKey = 'put your API key here';

// Construct the default list of terrain sources.
var terrainModels = Cesium.createDefaultTerrainProviderViewModels();

// Construct the viewer with just what we need for this base application
var viewer = new Cesium.Viewer('cesiumContainer', {
	timeline:false,//时间线
	animation:false,
	vrButton:true,
	sceneModePicker:true,
	infoBox:false,
	scene3DOnly:true,
	terrainProviderViewModels: terrainModels,
	selectedTerrainProviderViewModel: terrainModels[1], // Select STK high-res terrain
	FullscreenButton:true,
	selectionIndicator: false//设置绿色框框不可见
});
//视频图标位置配置信息
//var cars=[
//	{position:{x: -1583892.3710108064, y: 5337157.333200026, z: 3102501.131131291},
//	id:'0',
//	name:'bill0',
//	videoid:'46932b63cf3ef6633c38043e83d32a78',
//	videoname:'B2城开隧道出口左洞洞口'},
//	{position:{x: -1584131.6022369831, y: 5337081.511339643, z: 3102498.479855734},
//	id:'1',
//	name:'bill1',
//	videoid:'f40b10f3c6dc4681de3a3410eb4d220f',
//	videoname:'C2大树梁进口场外'},
//	{position:{x: -1584075.6972704916, y: 5337064.559083728, z: 3102529.359767544},
//	id:'2',
//	name:'bill2',
//	videoid:'54a7fed566b7e7d564253e690a55a2f4',
//	videoname:'B2城开隧道出口场外'},
//	{position:{x: -1583938.8416220148, y: 5337133.789440412, z: 3102471.818765951},
//	id:'3',
//	name:'bill3',
//	videoid:'e824ac4817f697c8dc533cf545570451',
//	videoname:'C2茶柳右洞'},
//	{position:{x: -1584100.8975712704, y: 5337087.7902023895, z: 3102481.4478512905},
//	id:'4',
//	name:'bill4',
//	videoid:'b46c753abe553aacaab5a0b658b14c5a',
//	videoname:'B2城开隧道进口值班室'}
////	{position:{x: -1583917.4200050905, y: 5337137.605965158, z: 3102489.8992226194},
////	id:'5',
////	name:'bill5',
////	videoid:'4aef8b389e314bc6bbeb082f6849941a',
////	videoname:'A3旗杆山出口左洞'},
////	{position:{x: -1584039.3656749437, y: 5337117.810953163, z: 3102469.349464115},
////	id:'6',
////	name:'bill6',
////	videoid:'16f08f1d06b64623b9d138b88088e78a',
////	videoname:'C2澎溪河南'}
//	
//];



var cars=[
	{position:{x: -1583892.3710108064, y: 5337157.333200026, z: 3102501.131131291},
	id:'0',
	name:'bill0',
	videoid:'487c2af612b234df44216b82607f81bf',
	videoname:'出口值班室朝路口'},
	{position:{x: -1584131.6022369831, y: 5337081.511339643, z: 3102498.479855734},
	id:'1',
	name:'bill1',
	videoid:'f40b10f3c6dc4681de3a3410eb4d220f',
	videoname:'进口场外'},
	{position:{x: -1584100.8975712704, y: 5337087.7902023895, z: 3102481.4478512905},
	id:'2',
	name:'bill2',
	videoid:'3a2a3ff8b7e3f287735e6d268269b268',
	videoname:'出口值班室朝钢筋场'},
	
	{position:{x: -1583938.8416220148, y: 5337133.789440412, z: 3102471.818765951},
	id:'3',
	name:'bill3',
	videoid:'13d692258a917da8f8f7f0ce855759cb',
	videoname:'出口值班室'},
	
//	{position:{x: -1583917.4200050905, y: 5337137.605965158, z: 3102489.8992226194},
//	id:'5',
//	name:'bill5',
//	videoid:'4aef8b389e314bc6bbeb082f6849941a',
//	videoname:'A3旗杆山出口左洞'},
//	{position:{x: -1584039.3656749437, y: 5337117.810953163, z: 3102469.349464115},
//	id:'6',
//	name:'bill6',
//	videoid:'16f08f1d06b64623b9d138b88088e78a',
//	videoname:'C2澎溪河南'}
	
];


var envircar={
	position:{x: -1584106.4485223696, y: 5337078.929830924, z: 3102480.58846417},
	name:'envir',
	id:'envir0'};
	
	
	
	
////点击
//var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
//
////todo：在显示地形情况下点击创建点
//
//handler.setInputAction(function (event) {
//	console.log('在显示地形情况下点击创建点')
//  if (!Cesium.Entity.supportsPolylinesOnTerrain(viewer.scene)) {
//      console.log('当前浏览器不支持地形图');
//      return;
//  }
//  var earthPosition = viewer.scene.pickPosition(event.position); //获取到地形图上面的坐标
//  if (Cesium.defined(earthPosition)) {
//      createPoint(earthPosition); //调用创建点的方法
//  }
//}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
//
////todo：在椭球下点击创建点
//handler.setInputAction(function (event) {
//		console.log('在椭球下点击创建点')
//  var earthPosition = viewer.camera.pickEllipsoid(event.position, viewer.scene.globe.ellipsoid); //返回在椭球上面的点的坐标
//  if (Cesium.defined(earthPosition)) {
//      createPoint(earthPosition); //在点击位置添加一个点
//  }
//}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
//
////todo：拾取模型表面的位置
//handler.setInputAction(function (evt) {
//		console.log('拾取模型表面的位置')
//  var scene = viewer.scene;
//  var pickedObject = scene.pick(evt.position); //判断是否拾取到模型
//  console.log(pickedObject)
//  if (scene.pickPositionSupported && Cesium.defined(pickedObject)) {
//      var cartesian = viewer.scene.pickPosition(evt.position);
//      var car={x: -1591173.0235232492, y: 5324557.107992506, z: 3120441.366390382}
//      console.log(cartesian)
//      if (Cesium.defined(cartesian)) {
//          var cartographic = Cesium.Cartographic.fromCartesian(cartesian); //根据笛卡尔坐标获取到弧度               
//          var lng = Cesium.Math.toDegrees(cartographic.longitude); //根据弧度获取到经度
//          var lat = Cesium.Math.toDegrees(cartographic.latitude); //根据弧度获取到纬度
//          var height = cartographic.height;//模型高度
//          annotate(cartesian, lng, lat, height);
//      }
//  } 
//}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
//label提示框
var annotations = viewer.scene.primitives.add(new Cesium.LabelCollection());
//label信息提示框
function annotate(cartesian, lng, lat, height) {
	console.log(3333333333333)
    createPoint(cartesian);
    annotations.add({
        position: cartesian,
        text:
            'Lon: ' + lng.toFixed(5) + '\u00B0' +
            '\n温度: ' + lat.toFixed(5) + '\u00B0' +
            "\n温度: " + height.toFixed(2) + "m",
//			'温度: ' + lng.toFixed(5),
        showBackground: true,
        font: '14px monospace',
        horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
         pixelOffset:new Cesium.Cartesian2(-25,-25),            //偏移
        disableDepthTestDistance: Number.POSITIVE_INFINITY
    });
}
//annotate(cars[2].position, 100, 100, 100)//描点
//label环境提示框
function labelenvir(cartesian, data) {
//	console.log(data)
    createPoint(cartesian);
    var test=''
    for(var i=0,lth=data.length;i<lth;i++){
    	test +=data[i].typeName+': '+data[i].value+data[i].unit+'\n'
    }
//  console.log(test)
    annotations.add({
        position: cartesian,
        text:test,
//          'Lon: ' + wd.toFixed(5) + '\u00B0' +
//          '\n温度: ' + sd.toFixed(5) + '\u00B0' +
//          "\n温度: " + fs.toFixed(2) + "m",
            
        showBackground: true,
        show:true,
        font: '14px monospace',
        horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
         pixelOffset:new Cesium.Cartesian2(0,-55),            //偏移
        disableDepthTestDistance: Number.POSITIVE_INFINITY
    });
    
	console.log(annotations)
}






//$("#banner").mouseenter(function(e) {
//  var obj = $('.moveBar');
//  obj.css("margin", "0px");
//  obj.css({
//      'left': $('div.moveBar').offset().left + 50,
//      'top': $('div.moveBar').offset().top + 50
//  });
//})
//$("#banner").mouseout(function() {
//  var obj = $('.moveBar');
//  //还原样式，并获取
//  obj.css({
//      'left': $('div.moveBar').offset().left - 50,
//      'top': $('div.moveBar').offset().top - 50
//  });
//  $(".moveBar").css("margin-left", "50px")
//  $(".moveBar").css("margin-top", "50px")
//})
//jQuery(document).ready(
//  function() {
//      $('#banner').mousedown(
//          function(event) {
//              /*$(".moveBar").css("margin","0px")*/
//              var isMove = true;
//              var abs_x;
//              var abs_y;
//               abs_x = event.pageX - $('div.moveBar').offset().left;
//               abs_y= event.pageY - $('div.moveBar').offset().top;
//              $(document).mousemove(function(event) {
//                  if(isMove) {
//                      var obj = $('.moveBar');
//                      obj.css({
//                          'left': event.pageX - abs_x,
//                          'top': event.pageY - abs_y
//                      });
//                  }
//              }).mouseup(
//                  function() {
//                      isMove = false;
//                  }
//              );
//          });
//  }
//);

$(function () {
    	document.onselectstart = function(){return false;}; //取消字段选择功能
        dragPanelMove("#banner","#moveBar");
        function dragPanelMove(downDiv,moveDiv){
            $(downDiv).mousedown(function (e) {
                    var isMove = true;
                    var div_x = e.pageX - $(moveDiv).offset().left;
                    var div_y = e.pageY - $(moveDiv).offset().top;
                    $(document).mousemove(function (e) {
                        if (isMove) {
                            var obj = $(moveDiv);
                            obj.css({"left":e.pageX - div_x, "top":e.pageY - div_y});
                        }
                    }).mouseup(
                        function () {
                        isMove = false;
                    });
            });

        }

    });





//添加点
function createPoint(worldPosition) {
//	console.log('tianjiadian')
    var point = viewer.entities.add({
        position: worldPosition,
        point: {
            color: Cesium.Color.WHITE,
            pixelSize: 4,
            pixelOffset:new Cesium.Cartesian2(25,25) 
        }
    });
    return point;
}
//生成视频图标函数
function annotate1(cars) {
	for(let i=0,length=cars.length;i<length;i++){
		createPoint(cars[i].position);
		var name='bill'+i;
		window[name]= viewer.entities.add({
			id:cars[i].id,
			name:cars[i].name,
			position:cars[i].position,
			billboard:{
				image:'Resources/video.png',
				width:50,
				height:50,
				verticalOrigin : Cesium.VerticalOrigin.BOTTOM,//垂直位置
		        horizontalOrigin :Cesium.HorizontalOrigin.LEFT,//水平位置
		        pixelOffset:new Cesium.Cartesian2(-25,-5)            //偏移
			},
		})
	}
}
//生成环境图标和label函数
function annotateenvir(cars) {
	//请求环境数据
	$.ajax({   
        url: 'https://kaijin.zhoumc.cn/jeecg-boot/air/zbhb1',
        type: 'get',
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        async: true,
		success:function(res){
			$('.loading').css('display','none');
			console.log(res)
			//环境label
			labelenvir(cars.position,res.result);
			labelenvir(cars.position,res.result)
		 },
		 error:function(res) {
		 	$('.loading').css('display','none');
			console.log(res)
		 }
    }); 
	
	
	
	//环境图标
	var envir= viewer.entities.add({
		id:'envir0',
		name:cars.name,
		position:cars.position,
		billboard:{
			image:'Resources/envir.png',
			width:40,
			height:40,
			verticalOrigin : Cesium.VerticalOrigin.BOTTOM,//垂直位置
	        horizontalOrigin :Cesium.HorizontalOrigin.LEFT,//水平位置
	        pixelOffset:new Cesium.Cartesian2(-25,-5)            //偏移
		},
	})
}
//视频右上角点击隐藏
$('.titlecha').click(function(){
	$('.trailer').hide()
})
//http://kj.rsltek.com:8080/stream/149-129-67-70-5555-streaming-channels-502/index.m3u8
//视频图标点击函数
viewer._selectedEntityChanged.addEventListener(function(entity){

	if(entity && entity.id!='noads'){
		$('.trailer').show();
		console.log(33333)
		var vid=entity.id.slice(0,1)
		console.log(vid)
		$('.titletxt').html(cars[entity.id].videoname)
		 videourl(cars[entity.id].videoid)
		console.log(entity.id)
		var entity = new Cesium.Entity({
	        name : "盲点位置信息",
	        id:'noads',
	        position:{x: -1584027.7601730903, y: 5337115.867838734, z: 3102461.3691844903},
        });
    	viewer.selectedEntity = entity;
	}else{
		return
	}
});

//点击显示隐藏视频实体按钮
$("#video").on("change",function(){
    var $checkbox = $(this);
    
    
    if($('input:checked').length>0 && $('input:checked')[0].name=='video'){
    	console.log('video');
    	annotate1(cars)
    }else{
    	console.log('novideo');
    	deleteLabel();
    	$('.loading').css('display','none');
    }    
});
//点击显示隐藏环境实体按钮
$("#envir").on("change",function(){
    var $checkbox = $(this);
    console.log($('input:checked'))
    let envir=false;
    if($('input:checked')[0] && $('input:checked')[0].name=='envir'){
    	envir=true;
    }else if($('input:checked')[1] && $('input:checked')[1].name=='envir'){
    	envir=true;
    }else{
    	envir=false;
    }
    if($('input:checked').length>0 && envir){
    	console.log('envir');
    	annotateenvir(envircar)
    }else{
    	console.log('noenvir');
    	viewer.entities.removeById('envir0');
    	for(var i=0;i<annotations._labels.length;i++){
	    	annotations._labels[i].show=false;
	    } 
    }    
});
//循环删除多个实体billboard
function deleteLabel() {
    for (var i = 0; i < cars.length; i++) {            
    	viewer.entities.removeById(i);
    }           
}

//请求视频地址
function videourl(videoId,token){
	$('.loading').css('display','block');
	var token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjcxMjU1NjAsInVzZXJuYW1lIjoia2FpamluIn0.T2f1VD-sPXKZbwRlVNBDvmqDyl5haJWdOkUhkG4FNOs';
	$.ajax({   
        url: 'https://kaijin.zhoumc.cn/jeecg-boot/infrastructure/video/videoAddress',
//      url: 'http://192.168.100.131:8080/jeecg-boot/infrastructure/video/videoAddress',
        data:JSON.stringify({videoId:videoId}),
        type: 'post',
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        async: true,
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("X-Access-Token", token);
        },
		success:function(data){
			$('.loading').css('display','none');
			console.log(data.message)
			//切换视频源
			var player = videojs('my-video'); 
			player.src(data.message); 
//			player.src('http://kj.rsltek.com:8080/stream/kj-rsltek-com-5562-streaming-channels-302/index.m3u8')
			player.load();
			
			$('.vjs-modal-dialog-content').html('由于服务器或网络故障或格式不受支持，无法加载媒体。')

		 },
		 error:function(res) {
		 	$('.loading').css('display','none');
			console.log(res)
		 }
    }); 
    
}






//地形默认设置
// No depth testing against the terrain to avoid z-fighting
viewer.scene.globe.depthTestAgainstTerrain = false;

// Add credit to Bentley
viewer.scene.frameState.creditDisplay.addDefaultCredit(new Cesium.Credit('Cesium 3D Tiles produced by Bentley ContextCapture', 'Resources/logoBentley.png', 'http://www.bentley.com/'));

// Bounding sphere
var boundingSphere = new Cesium.BoundingSphere(Cesium.Cartesian3.fromDegrees(106.5306334, 29.29379635, 286.0700419), 327.6478351);

// Override behavior of home button
viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function(commandInfo) {
	// Fly to custom position
	viewer.camera.flyToBoundingSphere(boundingSphere);

	// Tell the home button not to do anything
	commandInfo.cancel = true;
});

// Set custom initial position
viewer.camera.flyToBoundingSphere(boundingSphere, {duration: 0});

/*---------------------------------------------------------------------------------**//**
* @bsimethod
+---------------+---------------+---------------+---------------+---------------+------*/
// Functions to adapt screen space error and memory use to the device
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

// Add tileset. Do not forget to reduce the default screen space error to 1
var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
	url: '../Scene/Production_1.json',
	maximumScreenSpaceError : isMobile.any() ? 8 : 1, // Temporary workaround for low memory mobile devices - Increase maximum error to 8.
	maximumNumberOfLoadedTiles : isMobile.any() ? 10 : 1000 // Temporary workaround for low memory mobile devices - Decrease (disable) tile cache.
}));
