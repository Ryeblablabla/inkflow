/** Directional 2D ink brush. A stylized deposit model, not paper-fluid physics. */
export class InkBrushCanvas {
  constructor(canvas,{size=36,density=1.16,dry=.5,wet=.55,paper=.68,paperColor='#f3f0e6'}={}){
    this.canvas=canvas;this.context=canvas.getContext('2d');this.parameters={size,density,dry,wet,paper,paperColor};this.count=0;this.last=null;this.listeners=[];
    this.pigment=document.createElement('canvas');this.pigment.width=canvas.width;this.pigment.height=canvas.height;this.paint=this.pigment.getContext('2d');
    const listen=(name,handler)=>{canvas.addEventListener(name,handler);this.listeners.push([name,handler]);};
    const point=e=>{const b=canvas.getBoundingClientRect();return{x:(e.clientX-b.left)*canvas.width/b.width,y:(e.clientY-b.top)*canvas.height/b.height,time:e.timeStamp,pressure:e.pointerType==='pen'?e.pressure:.66};};
    listen('pointerdown',e=>{e.preventDefault();canvas.setPointerCapture(e.pointerId);this.last=point(e);this.stamp(this.last.x,this.last.y,this.parameters.size,0,this.last.pressure,0);this.render();});
    listen('pointermove',e=>{if(!this.last)return;e.preventDefault();for(const sample of e.getCoalescedEvents?.().length?e.getCoalescedEvents():[e]){const p=point(sample),dx=p.x-this.last.x,dy=p.y-this.last.y,distance=Math.hypot(dx,dy),velocity=Math.min(1,distance/Math.max(1,p.time-this.last.time)/3.5),size=this.parameters.size*(.26+p.pressure*.85)*(1-velocity*.25),steps=Math.max(1,Math.ceil(distance/Math.max(1,size*.13)));for(let j=1;j<=steps;j++)this.stamp(this.last.x+dx*j/steps,this.last.y+dy*j/steps,size,Math.atan2(dy,dx),p.pressure,velocity);this.last=p;}this.render();});
    for(const name of ['pointerup','pointercancel','lostpointercapture'])listen(name,()=>{this.last=null;});this.render();
  }
  configure(values){Object.assign(this.parameters,values);this.render();}
  random(n){const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x);}
  stamp(x,y,r,angle,pressure=1,velocity=0){
    const p=this.parameters,c=this.paint;c.save();c.translate(x,y);c.rotate(angle);
    if(p.wet>.01){c.save();c.scale(1.1,1);const g=c.createRadialGradient(0,0,r*.25,0,0,r*(1.2+p.wet*.5)),a=Math.min(.2,.065*p.density*pressure*p.wet);g.addColorStop(0,`rgba(22,31,35,${a})`);g.addColorStop(.65,`rgba(22,31,35,${a*.65})`);g.addColorStop(1,'rgba(22,31,35,0)');c.fillStyle=g;c.beginPath();c.arc(0,0,r*(1.2+p.wet*.5),0,Math.PI*2);c.fill();c.restore();}
    for(let i=0;i<25;i++){const offset=(i/24*2-1)*r,edge=Math.sqrt(Math.max(0,1-(offset/r)**2)),n=this.random(i*7+this.count*.15);if(n<p.dry*(.18+velocity*.2))continue;const alpha=Math.min(.66,(.08+.23*pressure)*p.density*edge*(.6+.4*n));c.strokeStyle=`rgba(22,31,35,${alpha})`;c.lineWidth=r*2/25*(.65+.45*n);c.lineCap='round';c.beginPath();c.moveTo(-r*.24*edge,offset);c.lineTo(r*.24*edge,offset);c.stroke();}c.restore();this.count++;
  }
  render(){const c=this.context,p=this.parameters;c.fillStyle=p.paperColor;c.fillRect(0,0,this.canvas.width,this.canvas.height);c.globalAlpha=.025*p.paper;for(let i=0;i<2400;i++){c.fillStyle=i%2?'#4e493f':'#ffffff';c.fillRect(this.random(i+1)*this.canvas.width,this.random(i+7001)*this.canvas.height,1+this.random(i+3)*3,.7);}c.globalAlpha=1;c.drawImage(this.pigment,0,0);}
  clear(){this.paint.clearRect(0,0,this.pigment.width,this.pigment.height);this.render();}
  dispose(){for(const [name,handler]of this.listeners)this.canvas.removeEventListener(name,handler);this.listeners=[];}
}
