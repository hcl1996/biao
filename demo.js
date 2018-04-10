
var clockCtx=document.getElementById('clock').getContext("2d"),
deg=Math.PI/180

//表盘
//更改原点的位置
    clockCtx.translate(300, 200);
 drawDail();
 drawclock()
 function drawDail(){ 
 	clockCtx.clearRect(-300,-200,600,400)//左上
 	
  //储存绘画
    clockCtx.save()
    //实心圆加边框
    clockCtx.beginPath();
    //渐变
    var gra=clockCtx.createLinearGradient(0,0, 70, 150);
        gra.addColorStop(0 ,'pink');
        gra.addColorStop(1,'purple');
        clockCtx.fillStyle=gra;
        
    var gra2=clockCtx.createLinearGradient(70,150, 0, 0);
        gra2.addColorStop(0 ,'pink');
        gra2.addColorStop(1,'purple');
       
        clockCtx.strokeStyle=gra2;
        //设置阴影
        clockCtx.shadowOffsetX=5;
        clockCtx.shadowOffsetY=5;
        clockCtx.shadowBlur=5;
        clockCtx.shadowColor="rgba(255,0,0,0.5)"
    clockCtx.lineWidth=20;
    //clockCtx.strokeStyle="#ccc";
    clockCtx.arc(0,0,150,0,360*deg);
    clockCtx.fill()
    clockCtx.stroke();
    //恢复原来状态
  clockCtx.restore();


   //所有变形都要储存
     clockCtx.save()
    //刻度
    for(let i=1;i<=60;i++){
    	clockCtx.rotate(6*deg)
    	//刻度没有阴影  存save
      if(i%15==0){
       clockCtx.beginPath();
       clockCtx.strokeStyle="yellow";
       clockCtx.lineWidth=3;
    	clockCtx.moveTo(0,-140);
    	clockCtx.lineTo(0, -120);
    	clockCtx.stroke();

      }else if(i%5==0){
      	clockCtx.beginPath();
    	clockCtx.strokeStyle="black";
       clockCtx.lineWidth=2;
    	clockCtx.moveTo(0,-140);
    	clockCtx.lineTo(0, -125);
    	clockCtx.stroke()
      }
      else{
      		//旋转画布
    	
    	clockCtx.beginPath();
    	clockCtx.strokeStyle="black";
       clockCtx.lineWidth=1;
    	clockCtx.moveTo(0,-140);
    	clockCtx.lineTo(0, -130);
    	clockCtx.stroke()
      }
    }
    clockCtx.restore();


   
 }


 //表针
  function drawclock(){
  	  var now=new Date(),
  	      h=now.getHours(),
  	      m=now.getMinutes(),
  	      s=now.getSeconds(),
  	      newH=h>12?h-12:h;
   //时钟
   clockCtx.save();
  	  clockCtx.rotate((s/3600+m/60+newH)*30*deg)
  	  clockCtx.beginPath();
  	  clockCtx.strokeStyle="black";
  	  clockCtx.lineCap+"round"
  	  clockCtx.lineWidth=5
  	  clockCtx.moveTo(0,20);
  	  clockCtx.lineTo(0,-60);
  	  clockCtx.stroke()
      clockCtx.restore()

    //分钟
      clockCtx.save();
  	  clockCtx.rotate((s/60+m)*6*deg)
  	  clockCtx.beginPath();
  	  clockCtx.strokeStyle="black";
  	  clockCtx.lineWidth=2
  	  clockCtx.moveTo(0,20);
  	  clockCtx.lineTo(0,-80);
  	  clockCtx.stroke()
      clockCtx.restore()

  	  //秒钟
  	  //转画布 rotate 须先存储绘画
  	  clockCtx.save();
  	  clockCtx.rotate(s*6*deg)
  	  clockCtx.beginPath();
  	  clockCtx.strokeStyle="red";
  	  clockCtx.lineWidth=1
  	  clockCtx.moveTo(0,20);
  	  clockCtx.lineTo(0,-100);
  	  clockCtx.stroke()
      clockCtx.restore()


       //画圆心
    clockCtx.beginPath()
    clockCtx.arc(0,0,10,0,360*deg);
    clockCtx.fill()
  }
  setInterval(function(){
  	drawDail()
  	drawclock()
  },1000)