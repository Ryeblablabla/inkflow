(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Mr="181",Ts={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bf=0,Gl=1,Of=2,Uh=1,kf=2,Qn=3,Pn=0,Kt=1,kt=2,si=0,As=1,Hl=2,Wl=3,Xl=4,Fh=5,gi=100,zf=101,Vf=102,Gf=103,Hf=104,Wf=200,Qo=201,Xf=202,qf=203,ec=204,tc=205,Yf=206,jf=207,Kf=208,Zf=209,$f=210,Jf=211,Qf=212,ed=213,td=214,nc=0,ic=1,sc=2,Rs=3,rc=4,ac=5,oc=6,cc=7,Bh=0,nd=1,id=2,yi=0,sd=1,rd=2,ad=3,od=4,cd=5,ld=6,ud=7,ql="attached",hd="detached",Oh=300,Cs=301,Ps=302,lc=303,uc=304,Va=306,Mi=1e3,En=1001,Pa=1002,Zt=1003,kh=1004,ar=1005,Ft=1006,Ma=1007,ni=1008,In=1009,zh=1010,Vh=1011,dr=1012,tl=1013,Si=1014,wn=1015,Hi=1016,nl=1017,il=1018,pr=1020,Gh=35902,Hh=35899,Wh=1021,Xh=1022,on=1023,mr=1026,xr=1027,sl=1028,rl=1029,al=1030,ol=1031,cl=1033,Sa=33776,Ta=33777,Aa=33778,Ea=33779,hc=35840,fc=35841,dc=35842,pc=35843,mc=36196,xc=37492,gc=37496,_c=37808,vc=37809,yc=37810,bc=37811,Mc=37812,Sc=37813,Tc=37814,Ac=37815,Ec=37816,wc=37817,Rc=37818,Cc=37819,Pc=37820,Ic=37821,Dc=36492,Lc=36494,Nc=36495,Uc=36283,Fc=36284,Bc=36285,Oc=36286,fd=2200,dd=2201,pd=2202,gr=2300,_r=2301,$a=2302,bs=2400,Ms=2401,Ia=2402,ll=2500,md=2501,xd=0,qh=1,kc=2,gd=3200,_d=3201,ul=0,vd=1,ti="",Ut="srgb",$t="srgb-linear",Da="linear",ot="srgb",qi=7680,Yl=519,yd=512,bd=513,Md=514,Yh=515,Sd=516,Td=517,Ad=518,Ed=519,zc=35044,Rr=35048,jl="300 es",Vn=2e3,La=2001;function jh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wd(){const s=vr("canvas");return s.style.display="block",s}const Kl={};function Na(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ae(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ke(...s){const e="THREE."+s.shift();console.error(e,...s)}function yr(...s){const e=s.join(" ");e in Kl||(Kl[e]=!0,Ae(...s))}function Rd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zl=1234567;const lr=Math.PI/180,Is=180/Math.PI;function Rn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function hl(s,e){return(s%e+e)%e}function Cd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pd(s,e,t){return s!==e?(t-s)/(e-s):0}function ur(s,e,t){return(1-t)*s+t*e}function Id(s,e,t,n){return ur(s,e,1-Math.exp(-t*n))}function Dd(s,e=1){return e-Math.abs(hl(s,e*2)-e)}function Ld(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ud(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Fd(s,e){return s+Math.random()*(e-s)}function Bd(s){return s*(.5-Math.random())}function Od(s){s!==void 0&&(Zl=s);let e=Zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kd(s){return s*lr}function zd(s){return s*Is}function Vd(s){return(s&s-1)===0&&s!==0}function Gd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*f,o*l);break;case"YZY":s.set(c*f,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*f,o*u,o*l);break;case"XZX":s.set(o*u,c*x,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*x,o*l);break;case"ZYZ":s.set(c*x,c*d,o*u,o*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Wt={DEG2RAD:lr,RAD2DEG:Is,generateUUID:Rn,clamp:ke,euclideanModulo:hl,mapLinear:Cd,inverseLerp:Pd,lerp:ur,damp:Id,pingpong:Dd,smoothstep:Ld,smootherstep:Nd,randInt:Ud,randFloat:Fd,randFloatSpread:Bd,seededRandom:Od,degToRad:kd,radToDeg:zd,isPowerOfTwo:Vd,ceilPowerOfTwo:Gd,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:Wd,normalize:it,denormalize:An};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=r[a+0],d=r[a+1],x=r[a+2],_=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==x){let m=c*f+l*d+u*x+h*_;m<0&&(f=-f,d=-d,x=-x,_=-_,m=-m);let p=1-o;if(m<.9995){const g=Math.acos(m),v=Math.sin(g);p=Math.sin(p*g)/v,o=Math.sin(o*g)/v,c=c*p+f*o,l=l*p+d*o,u=u*p+x*o,h=h*p+_*o}else{c=c*p+f*o,l=l*p+d*o,u=u*p+x*o,h=h*p+_*o;const g=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=g,l*=g,u*=g,h*=g}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+u*h+c*d-l*f,e[t+1]=c*x+u*f+l*h-o*d,e[t+2]=l*x+u*d+o*f-c*h,e[t+3]=u*x-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),f=c(n/2),d=c(i/2),x=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h-f*d*x;break;case"YXZ":this._x=f*u*h+l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h+f*d*x;break;case"ZXY":this._x=f*u*h-l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h-f*d*x;break;case"ZYX":this._x=f*u*h-l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h+f*d*x;break;case"YZX":this._x=f*u*h+l*d*x,this._y=l*d*h+f*u*x,this._z=l*u*x-f*d*h,this._w=l*u*h-f*d*x;break;case"XZY":this._x=f*u*h-l*d*x,this._y=l*d*h-f*u*x,this._z=l*u*x+f*d*h,this._w=l*u*h+f*d*x;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new I,$l=new cn;class qe{constructor(e,t,n,i,r,a,o,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],x=n[8],_=i[0],m=i[3],p=i[6],g=i[1],v=i[4],y=i[7],M=i[2],S=i[5],A=i[8];return r[0]=a*_+o*g+c*M,r[3]=a*m+o*v+c*S,r[6]=a*p+o*y+c*A,r[1]=l*_+u*g+h*M,r[4]=l*m+u*v+h*S,r[7]=l*p+u*y+h*A,r[2]=f*_+d*g+x*M,r[5]=f*m+d*v+x*S,r[8]=f*p+d*y+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,x=t*h+n*f+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new qe,Jl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xd(){const s={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?Da:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$t]:{primaries:e,whitePoint:n,transfer:Da,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),s}const Je=Xd();function ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Yi;class qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=vr("canvas")),Yi.width=e.width,Yi.height=e.height;const i=Yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yd=0;class fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(eo(i[a].image)):r.push(eo(i[a]))}else r=eo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function eo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let jd=0;const to=new I;class Ot extends Ai{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=En,i=En,r=Ft,a=ni,o=on,c=In,l=Ot.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Rn(),this.name="",this.source=new fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(to).x}get height(){return this.source.getSize(to).y}get depth(){return this.source.getSize(to).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Oh;Ot.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],x=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(x+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(d+1)/2,M=(p+1)/2,S=(u+f)/4,A=(h+_)/4,E=(x+m)/4;return v>y&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=S/n,r=A/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=E/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=E/r),this.set(n,i,r,t),this}let g=Math.sqrt((m-x)*(m-x)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(h-_)/g,this.z=(f-u)/g,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kd extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Ot(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new fl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends Kd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kh extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zd extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Pr.subVectors(this.max,Ws),ji.subVectors(e.a,Ws),Ki.subVectors(e.b,Ws),Zi.subVectors(e.c,Ws),ci.subVectors(Ki,ji),li.subVectors(Zi,Ki),Ri.subVectors(ji,Zi);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,li.z,0,-li.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ri.y,Ri.x,0];return!no(t,ji,Ki,Zi,Pr)||(t=[1,0,0,0,1,0,0,0,1],!no(t,ji,Ki,Zi,Pr))?!1:(Ir.crossVectors(ci,li),t=[Ir.x,Ir.y,Ir.z],no(t,ji,Ki,Zi,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,Cr=new Et,ji=new I,Ki=new I,Zi=new I,ci=new I,li=new I,Ri=new I,Ws=new I,Pr=new I,Ir=new I,Ci=new I;function no(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ci.fromArray(s,r);const o=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),c=e.dot(Ci),l=t.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const $d=new Et,Xs=new I,io=new I;class Ln{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$d.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(io)),this.expandByPoint(Xs.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new I,so=new I,Dr=new I,ui=new I,ro=new I,Lr=new I,ao=new I;class Wi{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){so.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(so);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=ui.dot(this.direction),c=-ui.dot(Dr),l=ui.lengthSq(),u=Math.abs(1-a*a);let h,f,d,x;if(u>0)if(h=a*c-o,f=a*o-c,x=r*u,h>=0)if(f>=-x)if(f<=x){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-x?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=x?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(so).addScaledVector(Dr,f),d}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,i,r){ro.subVectors(t,e),Lr.subVectors(n,e),ao.crossVectors(ro,Lr);let a=this.direction.dot(ao),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const c=o*this.direction.dot(Lr.crossVectors(ui,Lr));if(c<0)return null;const l=o*this.direction.dot(ro.cross(ui));if(l<0||c+l>a)return null;const u=-o*ui.dot(ao);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,r,a,o,c,l,u,h,f,d,x,_,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,f,d,x,_,m)}set(e,t,n,i,r,a,o,c,l,u,h,f,d,x,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=x,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,x=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+x*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=x+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,x=l*u,_=l*h;t[0]=f+_*o,t[4]=x*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-x,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,x=l*u,_=l*h;t[0]=f-_*o,t[4]=-a*h,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,x=o*u,_=o*h;t[0]=c*u,t[4]=x*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,x=o*c,_=o*l;t[0]=c*u,t[4]=_-f*h,t[8]=x*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+x,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*c,d=a*l,x=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-x,t[2]=x*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jd,e,Qd)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),hi.crossVectors(n,rn),hi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),hi.crossVectors(n,rn)),hi.normalize(),Nr.crossVectors(rn,hi),i[0]=hi.x,i[4]=Nr.x,i[8]=rn.x,i[1]=hi.y,i[5]=Nr.y,i[9]=rn.y,i[2]=hi.z,i[6]=Nr.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],x=n[2],_=n[6],m=n[10],p=n[14],g=n[3],v=n[7],y=n[11],M=n[15],S=i[0],A=i[4],E=i[8],T=i[12],b=i[1],C=i[5],w=i[9],D=i[13],N=i[2],B=i[6],k=i[10],H=i[14],O=i[3],j=i[7],J=i[11],ne=i[15];return r[0]=a*S+o*b+c*N+l*O,r[4]=a*A+o*C+c*B+l*j,r[8]=a*E+o*w+c*k+l*J,r[12]=a*T+o*D+c*H+l*ne,r[1]=u*S+h*b+f*N+d*O,r[5]=u*A+h*C+f*B+d*j,r[9]=u*E+h*w+f*k+d*J,r[13]=u*T+h*D+f*H+d*ne,r[2]=x*S+_*b+m*N+p*O,r[6]=x*A+_*C+m*B+p*j,r[10]=x*E+_*w+m*k+p*J,r[14]=x*T+_*D+m*H+p*ne,r[3]=g*S+v*b+y*N+M*O,r[7]=g*A+v*C+y*B+M*j,r[11]=g*E+v*w+y*k+M*J,r[15]=g*T+v*D+y*H+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],x=e[3],_=e[7],m=e[11],p=e[15];return x*(+r*c*h-i*l*h-r*o*f+n*l*f+i*o*d-n*c*d)+_*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*u-r*c*u)+m*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+p*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],x=e[12],_=e[13],m=e[14],p=e[15],g=h*m*l-_*f*l+_*c*d-o*m*d-h*c*p+o*f*p,v=x*f*l-u*m*l-x*c*d+a*m*d+u*c*p-a*f*p,y=u*_*l-x*h*l+x*o*d-a*_*d-u*o*p+a*h*p,M=x*h*c-u*_*c-x*o*f+a*_*f+u*o*m-a*h*m,S=t*g+n*v+i*y+r*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=g*A,e[1]=(_*f*r-h*m*r-_*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*p+n*c*p)*A,e[3]=(h*c*r-o*f*r-h*i*l+n*f*l+o*i*d-n*c*d)*A,e[4]=v*A,e[5]=(u*m*r-x*f*r+x*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(x*c*r-a*m*r-x*i*l+t*m*l+a*i*p-t*c*p)*A,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*d+t*c*d)*A,e[8]=y*A,e[9]=(x*h*r-u*_*r-x*n*d+t*_*d+u*n*p-t*h*p)*A,e[10]=(a*_*r-x*o*r+x*n*l-t*_*l-a*n*p+t*o*p)*A,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*d-t*o*d)*A,e[12]=M*A,e[13]=(u*_*i-x*h*i+x*n*f-t*_*f-u*n*m+t*h*m)*A,e[14]=(x*o*i-a*_*i-x*n*c+t*_*c+a*n*m-t*o*m)*A,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,x=r*h,_=a*u,m=a*h,p=o*h,g=c*l,v=c*u,y=c*h,M=n.x,S=n.y,A=n.z;return i[0]=(1-(_+p))*M,i[1]=(d+y)*M,i[2]=(x-v)*M,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(f+p))*S,i[6]=(m+g)*S,i[7]=0,i[8]=(x+v)*A,i[9]=(m-g)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=$i.set(i[0],i[1],i[2]).length();const a=$i.set(i[4],i[5],i[6]).length(),o=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);const l=1/r,u=1/a,h=1/o;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Vn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let x,_;if(c)x=r/(a-r),_=a*r/(a-r);else if(o===Vn)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===La)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Vn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let x,_;if(c)x=1/(a-r),_=a/(a-r);else if(o===Vn)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===La)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new I,bn=new Pe,Jd=new I(0,0,0),Qd=new I(1,1,1),hi=new I,Nr=new I,rn=new I,eu=new Pe,tu=new cn;class Wn{constructor(e=0,t=0,n=0,i=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ep=0;const nu=new I,Ji=new cn,jn=new Pe,Ur=new I,qs=new I,tp=new I,np=new cn,iu=new I(1,0,0),su=new I(0,1,0),ru=new I(0,0,1),au={type:"added"},ip={type:"removed"},Qi={type:"childadded",child:null},oo={type:"childremoved",child:null};class ft extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new I,t=new Wn,n=new cn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new qe}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(qs,Ur,this.up):jn.lookAt(Ur,qs,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(jn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(au),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(au),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new I(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new I,Kn=new I,co=new I,Zn=new I,es=new I,ts=new I,ou=new I,lo=new I,uo=new I,ho=new I,fo=new et,po=new et,mo=new et;class Rt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Mn.subVectors(i,t),Kn.subVectors(n,t),co.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(Kn),c=Mn.dot(co),l=Kn.dot(Kn),u=Kn.dot(co),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,x=(a*u-o*c)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(e,t),po.fromBufferAttribute(e,n),mo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),Kn.subVectors(e,t),Mn.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Mn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Rt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Rt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;es.subVectors(i,n),ts.subVectors(r,n),lo.subVectors(e,n);const c=es.dot(lo),l=ts.dot(lo);if(c<=0&&l<=0)return t.copy(n);uo.subVectors(e,i);const u=es.dot(uo),h=ts.dot(uo);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(es,a);ho.subVectors(e,r);const d=es.dot(ho),x=ts.dot(ho);if(x>=0&&d<=x)return t.copy(r);const _=d*l-c*x;if(_<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(ts,o);const m=u*x-d*h;if(m<=0&&h-u>=0&&d-x>=0)return ou.subVectors(r,i),o=(h-u)/(h-u+(d-x)),t.copy(i).addScaledVector(ou,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function xo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=hl(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xo(a,r,e+1/3),this.g=xo(a,r,e),this.b=xo(a,r,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=$h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Je.workingToColorSpace(Gt.copy(this),e),Math.round(ke(Gt.r*255,0,255))*65536+Math.round(ke(Gt.g*255,0,255))*256+Math.round(ke(Gt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,r=Gt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Ut){Je.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Fr);const n=ur(fi.h,Fr.h,t),i=ur(fi.s,Fr.s,t),r=ur(fi.l,Fr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Re;Re.NAMES=$h;let sp=0;class Cn extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=As,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ec&&(n.blendSrc=this.blendSrc),this.blendDst!==tc&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zi extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new I,Br=new pe;let rp=0;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}}class dl extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jh extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ap=0;const fn=new Pe,go=new ft,ns=new I,an=new Et,Ys=new Et,Nt=new I;class Lt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?Jh:dl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(an.min,Ys.min),an.expandByPoint(Nt),Nt.addVectors(an.max,Ys.max),an.expandByPoint(Nt)):(an.expandByPoint(Ys.min),an.expandByPoint(Ys.max))}an.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Nt.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(e,l),Nt.add(ns)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let E=0;E<n.count;E++)o[E]=new I,c[E]=new I;const l=new I,u=new I,h=new I,f=new pe,d=new pe,x=new pe,_=new I,m=new I;function p(E,T,b){l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,T),x.fromBufferAttribute(r,b),u.sub(l),h.sub(l),d.sub(f),x.sub(f);const C=1/(d.x*x.y-x.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-x.x).multiplyScalar(C),o[E].add(_),o[T].add(_),o[b].add(_),c[E].add(m),c[T].add(m),c[b].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let E=0,T=g.length;E<T;++E){const b=g[E],C=b.start,w=b.count;for(let D=C,N=C+w;D<N;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new I,y=new I,M=new I,S=new I;function A(E){M.fromBufferAttribute(i,E),S.copy(M);const T=o[E];v.copy(T),v.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(S,T);const C=y.dot(c[E])<0?-1:1;a.setXYZW(E,v.x,v.y,v.z,C)}for(let E=0,T=g.length;E<T;++E){const b=g[E],C=b.start,w=b.count;for(let D=C,N=C+w;D<N;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const x=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,x=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*u;for(let p=0;p<u;p++)f[x++]=l[d++]}return new yt(f,u,h)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new Pe,Pi=new Wi,Or=new Ln,lu=new I,kr=new I,zr=new I,Vr=new I,_o=new I,Gr=new I,uu=new I,Hr=new I;class At extends ft{constructor(e=new Lt,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(_o.fromBufferAttribute(h,e),a?Gr.addScaledVector(_o,u):Gr.addScaledVector(_o.sub(t),u))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Or.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Or,lu)===null||Pi.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(cu.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(cu),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){const m=f[x],p=a[m.materialIndex],g=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=g,M=v;y<M;y+=3){const S=o.getX(y),A=o.getX(y+1),E=o.getX(y+2);i=Wr(this,p,e,n,l,u,h,S,A,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=x,p=_;m<p;m+=3){const g=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);i=Wr(this,a,e,n,l,u,h,g,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){const m=f[x],p=a[m.materialIndex],g=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=g,M=v;y<M;y+=3){const S=y,A=y+1,E=y+2;i=Wr(this,p,e,n,l,u,h,S,A,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const x=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=x,p=_;m<p;m+=3){const g=m,v=m+1,y=m+2;i=Wr(this,a,e,n,l,u,h,g,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function op(s,e,t,n,i,r,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Pn,o),c===null)return null;Hr.copy(o),Hr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Hr);return l<t.near||l>t.far?null:{distance:l,point:Hr.clone(),object:s}}function Wr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,kr),s.getVertexPosition(c,zr),s.getVertexPosition(l,Vr);const u=op(s,e,t,n,kr,zr,Vr,uu);if(u){const h=new I;Rt.getBarycoord(uu,kr,zr,Vr,h),i&&(u.uv=Rt.getInterpolatedAttribute(i,o,c,l,h,new pe)),r&&(u.uv1=Rt.getInterpolatedAttribute(r,o,c,l,h,new pe)),a&&(u.normal=Rt.getInterpolatedAttribute(a,o,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new I,materialIndex:0};Rt.getNormal(kr,zr,Vr,f.normal),u.face=f,u.barycoord=h}return u}class Sr extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function x(_,m,p,g,v,y,M,S,A,E,T){const b=y/A,C=M/E,w=y/2,D=M/2,N=S/2,B=A+1,k=E+1;let H=0,O=0;const j=new I;for(let J=0;J<k;J++){const ne=J*C-D;for(let Se=0;Se<B;Se++){const fe=Se*b-w;j[_]=fe*g,j[m]=ne*v,j[p]=N,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=S>0?1:-1,u.push(j.x,j.y,j.z),h.push(Se/A),h.push(1-J/E),H+=1}}for(let J=0;J<E;J++)for(let ne=0;ne<A;ne++){const Se=f+ne+B*J,fe=f+ne+B*(J+1),ze=f+(ne+1)+B*(J+1),Ve=f+(ne+1)+B*J;c.push(Se,fe,Ve),c.push(fe,ze,Ve),O+=6}o.addGroup(d,O,T),d+=O,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const n=Ds(s[t]);for(const i in n)e[i]=n[i]}return e}function cp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const lp={clone:Ds,merge:Yt};var up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ga extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new I,hu=new pe,fu=new pe;class jt extends Ga{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,hu,fu),t.subVectors(fu,hu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,ss=1;class fp extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(is,ss,e,t);i.layers=this.layers,this.add(i);const r=new jt(is,ss,e,t);r.layers=this.layers,this.add(r);const a=new jt(is,ss,e,t);a.layers=this.layers,this.add(a);const o=new jt(is,ss,e,t);o.layers=this.layers,this.add(o);const c=new jt(is,ss,e,t);c.layers=this.layers,this.add(c);const l=new jt(is,ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ef extends Ot{constructor(e=[],t=Cs,n,i,r,a,o,c,l,u){super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dp extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ef(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Sr(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:si});r.uniforms.tEquirect.value=t;const a=new At(i,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=Ft),new fp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Gn extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pp={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ua extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new I;class pl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const du=new I,pu=new et,mu=new et,xp=new I,xu=new Pe,Xr=new I,yo=new Ln,gu=new Pe,bo=new Wi;class ml extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ql,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Et),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingBox.expandByPoint(Xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingSphere.expandByPoint(Xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(i),e.ray.intersectsSphere(yo)!==!1&&(gu.copy(i).invert(),bo.copy(e.ray).applyMatrix4(gu),!(this.boundingBox!==null&&bo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ql?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;pu.fromBufferAttribute(i.attributes.skinIndex,e),mu.fromBufferAttribute(i.attributes.skinWeight,e),du.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=mu.getComponent(r);if(a!==0){const o=pu.getComponent(r);xu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(xp.copy(du).applyMatrix4(xu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class xl extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tr extends Ot{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Zt,u=Zt,h,f){super(null,a,o,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _u=new Pe,gp=new Pe;class Ha{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:gp;_u.multiplyMatrices(o,t[r]),_u.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ha(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tr(t,e,e,on,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new xl),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Vi extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rs=new Pe,vu=new Pe,qr=[],yu=new Et,_p=new Pe,js=new At,Ks=new Ln;class vp extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_p)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Et),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),yu.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(yu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Ks.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),e.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,rs),vu.multiplyMatrices(n,rs),js.matrixWorld=vu,js.raycast(e,qr);for(let a=0,o=qr.length;a<o;a++){const c=qr[a];c.instanceId=r,c.object=this,t.push(c)}qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(i*this.count),i,this.count,sl,wn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mo=new I,yp=new I,bp=new qe;class kn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mo.subVectors(n,t).cross(yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bp.getNormalMatrix(e),i=this.coplanarPoint(Mo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Ln,Mp=new pe(.5,.5),Yr=new I;class gl{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],x=r[8],_=r[9],m=r[10],p=r[11],g=r[12],v=r[13],y=r[14],M=r[15];if(i[0].setComponents(l-a,d-u,p-x,M-g).normalize(),i[1].setComponents(l+a,d+u,p+x,M+g).normalize(),i[2].setComponents(l+o,d+h,p+_,M+v).normalize(),i[3].setComponents(l-o,d-h,p-_,M-v).normalize(),n)i[4].setComponents(c,f,m,y).normalize(),i[5].setComponents(l-c,d-f,p-m,M-y).normalize();else if(i[4].setComponents(l-c,d-f,p-m,M-y).normalize(),t===Vn)i[5].setComponents(l+c,d+f,p+m,M+y).normalize();else if(t===La)i[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);const t=Mp.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yr.x=i.normal.x>0?e.max.x:e.min.x,Yr.y=i.normal.y>0?e.max.y:e.min.y,Yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tf extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fa=new I,Ba=new I,bu=new Pe,Zs=new Wi,jr=new Ln,So=new I,Mu=new I;class _l extends ft{constructor(e=new Lt,t=new tf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fa.fromBufferAttribute(t,i-1),Ba.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fa.distanceTo(Ba);e.setAttribute("lineDistance",new lt(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;bu.copy(i).invert(),Zs.copy(e.ray).applyMatrix4(bu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let _=d,m=x-1;_<m;_+=l){const p=u.getX(_),g=u.getX(_+1),v=Kr(this,e,Zs,c,p,g,_);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(x-1),m=u.getX(d),p=Kr(this,e,Zs,c,_,m,x-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let _=d,m=x-1;_<m;_+=l){const p=Kr(this,e,Zs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Kr(this,e,Zs,c,x-1,d,x-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Fa.fromBufferAttribute(o,i),Ba.fromBufferAttribute(o,r),t.distanceSqToSegment(Fa,Ba,So,Mu)>n)return;So.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(So);if(!(l<e.near||l>e.far))return{distance:l,point:Mu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Su=new I,Tu=new I;class Sp extends _l{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Su.fromBufferAttribute(t,i),Tu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Su.distanceTo(Tu);e.setAttribute("lineDistance",new lt(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tp extends _l{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nf extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Au=new Pe,Vc=new Wi,Zr=new Ln,$r=new I;class Ap extends ft{constructor(e=new Lt,t=new nf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;Au.copy(i).invert(),Vc.copy(e.ray).applyMatrix4(Au);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let x=f,_=d;x<_;x++){const m=l.getX(x);$r.fromBufferAttribute(h,m),Eu($r,m,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let x=f,_=d;x<_;x++)$r.fromBufferAttribute(h,x),Eu($r,x,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Eu(s,e,t,n,i,r,a){const o=Vc.distanceSqToPoint(s);if(o<t){const c=new I;Vc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class vl extends Ot{constructor(e,t,n=Si,i,r,a,o=Zt,c=Zt,l,u=mr,h=1){if(u!==mr&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sf extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yl extends Lt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let x=0;const _=[],m=n/2;let p=0;g(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function g(){const y=new I,M=new I;let S=0;const A=(t-e)/n;for(let E=0;E<=r;E++){const T=[],b=E/r,C=b*(t-e)+e;for(let w=0;w<=i;w++){const D=w/i,N=D*c+o,B=Math.sin(N),k=Math.cos(N);M.x=C*B,M.y=-b*n+m,M.z=C*k,h.push(M.x,M.y,M.z),y.set(B,A,k).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-b),T.push(x++)}_.push(T)}for(let E=0;E<i;E++)for(let T=0;T<r;T++){const b=_[T][E],C=_[T+1][E],w=_[T+1][E+1],D=_[T][E+1];(e>0||T!==0)&&(u.push(b,C,D),S+=3),(t>0||T!==r-1)&&(u.push(C,w,D),S+=3)}l.addGroup(p,S,0),p+=S}function v(y){const M=x,S=new pe,A=new I;let E=0;const T=y===!0?e:t,b=y===!0?1:-1;for(let w=1;w<=i;w++)h.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),x++;const C=x;for(let w=0;w<=i;w++){const N=w/i*c+o,B=Math.cos(N),k=Math.sin(N);A.x=T*k,A.y=m*b,A.z=T*B,h.push(A.x,A.y,A.z),f.push(0,b,0),S.x=B*.5+.5,S.y=k*.5*b+.5,d.push(S.x,S.y),x++}for(let w=0;w<i;w++){const D=M+w,N=C+w;y===!0?u.push(N,N+1,D):u.push(N+1,N,D),E+=3}l.addGroup(p,E,y===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ep{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new pe:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,i=[],r=[],a=[],o=new I,c=new Pe;for(let d=0;d<=e;d++){const x=d/e;i[d]=this.getTangentAt(x,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(ke(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,x))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(ke(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(i[x],d*x)),a[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function bl(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Jr=new I,To=new bl,Ao=new bl,Eo=new bl;class wp extends Ep{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(Jr.subVectors(i[0],i[1]).add(i[0]),l=Jr);const h=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Jr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),x<1e-4&&(x=_),m<1e-4&&(m=_),To.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,x,_,m),Ao.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,x,_,m),Eo.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,x,_,m)}else this.curveType==="catmullrom"&&(To.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ao.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Eo.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(To.calc(c),Ao.calc(c),Eo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Bs extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,d=[],x=[],_=[],m=[];for(let p=0;p<u;p++){const g=p*f-a;for(let v=0;v<l;v++){const y=v*h-r;x.push(y,-g,0),_.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let g=0;g<o;g++){const v=g+l*p,y=g+l*(p+1),M=g+1+l*(p+1),S=g+1+l*p;d.push(v,y,S),d.push(y,M,S)}this.setIndex(d),this.setAttribute("position",new lt(x,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Os extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends Os{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Rp extends Cn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Cp extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pp extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Qr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ip(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Dp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function rf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Ar{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Lp extends Ar{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bs,endingEnd:bs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ms:r=e,o=2*t-n;break;case Ia:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ms:a=e,c=2*n-t;break;case Ia:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(i-t),_=x*x,m=_*x,p=-f*m+2*f*_-f*x,g=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*x+1,v=(-1-d)*m+(1.5+d)*_+.5*x,y=d*m-d*_;for(let M=0;M!==o;++M)r[M]=p*a[u+M]+g*a[l+M]+v*a[c+M]+y*a[h+M];return r}}class af extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}}class Np extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Np(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new af(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case _r:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return $a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ke("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ke("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Ip(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Ke("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$a,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,f=h-n,d=h+n;for(let x=0;x!==n;++x){const _=t[h+x];if(_!==t[f+x]||_!==t[d+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=_r;class ks extends Nn{constructor(e,t,n){super(e,t,n)}}ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=gr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class of extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}of.prototype.ValueTypeName="color";class Ls extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Ls.prototype.ValueTypeName="number";class Up extends Ar{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)cn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Ns extends Nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Up(this.times,this.values,this.getValueSize(),e)}}Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Nn{constructor(e,t,n){super(e,t,n)}}zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=gr;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Nn{constructor(e,t,n,i){super(e,t,n,i)}}Us.prototype.ValueTypeName="vector";class Gc{constructor(e="",t=-1,n=[],i=ll){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Bp(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Dp(c);c=wu(c,1,u),l=wu(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ls(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Ae("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ke("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,x,_){if(d.length!==0){const m=[],p=[];rf(d,m,p,x),m.length!==0&&_.push(new h(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)d[f[x].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let g=0;g!==f[x].morphTargets.length;++g){const v=f[x];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Ls(".morphTargetInfluence["+_+"]",m,p))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(Us,d+".position",f,"pos",i),n(Ns,d+".quaternion",f,"rot",i),n(Us,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Fp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return of;case"quaternion":return Ns;case"bool":case"boolean":return ks;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fp(s.type);if(s.times===void 0){const t=[],n=[];rf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ii={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Op{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],x=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kp=new Op;class Vs{constructor(e){this.manager=e!==void 0?e:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class zp extends Error{constructor(e,t){super(e),this.response=t}}class cf extends Vs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ii.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=$n[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0;let _=0;const m=new ReadableStream({start(p){g();function g(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:d});for(let S=0,A=u.length;S<A;S++){const E=u[S];E.onProgress&&E.onProgress(M)}p.enqueue(y),g()}},v=>{p.error(v)})}}});return new Response(m)}else throw new zp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{ii.add(`file:${e}`,l);const u=$n[e];delete $n[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=$n[e];if(u===void 0)throw this.manager.itemError(e),l;delete $n[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const as=new WeakMap;class Vp extends Vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ii.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=as.get(a);h===void 0&&(h=[],as.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=vr("img");function c(){u(),t&&t(this);const h=as.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}as.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),ii.remove(`image:${e}`);const f=as.get(this)||[];for(let d=0;d<f.length;d++){const x=f[d];x.onError&&x.onError(h)}as.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ii.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class lf extends Vs{constructor(e){super(e)}load(e,t,n,i){const r=new Ot,a=new Vp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Wa extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gp extends Wa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wo=new Pe,Ru=new I,Cu=new I;class Ml{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hp extends Ml{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wp extends Wa{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Hp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pu=new Pe,$s=new I,Ro=new I;class Xp extends Ml{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$s.setFromMatrixPosition(e.matrixWorld),n.position.copy($s),Ro.copy(n.position),Ro.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ro),n.updateMatrixWorld(),i.makeTranslation(-$s.x,-$s.y,-$s.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu,n.coordinateSystem,n.reversedDepth)}}class qp extends Wa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sl extends Ga{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yp extends Ml{constructor(){super(new Sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uf extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Yp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class jp extends Lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Co=new WeakMap;class Kp extends Vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ii.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Co.has(a)===!0)i&&i(Co.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ii.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Co.set(c,l),ii.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ii.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Zp extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $p{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){cn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;cn.multiplyQuaternionsFlat(e,a,e,t,e,n),cn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Tl="\\[\\]\\.:\\/",Jp=new RegExp("["+Tl+"]","g"),Al="[^"+Tl+"]",Qp="[^"+Tl.replace("\\.","")+"]",em=/((?:WC+[\/:])*)/.source.replace("WC",Al),tm=/(WCOD+)?/.source.replace("WCOD",Qp),nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Al),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Al),sm=new RegExp("^"+em+tm+nm+im+"$"),rm=["material","materials","bones","map"];class am{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jp,"")}static parseTrackName(e){const t=sm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=am;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class om{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:bs,endingEnd:bs};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=dd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case md:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case ll:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===pd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===fd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ms,i.endingEnd=Ms):(e?i.endingStart=this.zeroSlopeAtStart?Ms:bs:i.endingStart=Ia,t?i.endingEnd=this.zeroSlopeAtEnd?Ms:bs:i.endingEnd=Ia)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const cm=new Float32Array(1);class lm extends Ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const f=i[h],d=f.name;let x=u[d];if(x!==void 0)++x.referenceCount,a[h]=x;else{if(x=a[h],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,c,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;x=new $p(tt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,c,d),a[h]=x}o[h].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new af(new Float32Array(2),new Float32Array(2),1,cm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Gc.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ll),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new om(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Gc.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Iu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Du=new I,ea=new I,os=new I,cs=new I,Po=new I,um=new I,hm=new I;class ai{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Du.subVectors(e,this.start),ea.subVectors(this.end,this.start);const n=ea.dot(ea);let r=ea.dot(Du)/n;return t&&(r=ke(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=um,n=hm){const i=10000000000000001e-32;let r,a;const o=this.start,c=e.start,l=this.end,u=e.end;os.subVectors(l,o),cs.subVectors(u,c),Po.subVectors(o,c);const h=os.dot(os),f=cs.dot(cs),d=cs.dot(Po);if(h<=i&&f<=i)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(h<=i)r=0,a=d/f,a=ke(a,0,1);else{const x=os.dot(Po);if(f<=i)a=0,r=ke(-x/h,0,1);else{const _=os.dot(cs),m=h*f-_*_;m!==0?r=ke((_*d-x*f)/m,0,1):r=0,a=(_*r+d)/f,a<0?(a=0,r=ke(-x/h,0,1)):a>1&&(a=1,r=ke((_-x)/h,0,1))}}return t.copy(o).add(os.multiplyScalar(r)),n.copy(c).add(cs.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class fm extends Ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Lu(s,e,t,n){const i=dm(n);switch(t){case Wh:return s*e;case sl:return s*e/i.components*i.byteLength;case rl:return s*e/i.components*i.byteLength;case al:return s*e*2/i.components*i.byteLength;case ol:return s*e*2/i.components*i.byteLength;case Xh:return s*e*3/i.components*i.byteLength;case on:return s*e*4/i.components*i.byteLength;case cl:return s*e*4/i.components*i.byteLength;case Sa:case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fc:case pc:return Math.max(s,16)*Math.max(e,8)/4;case hc:case dc:return Math.max(s,8)*Math.max(e,8)/2;case mc:case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dc:case Lc:case Nc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Uc:case Fc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Bc:case Oc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dm(s){switch(s){case In:case zh:return{byteLength:1,components:1};case dr:case Vh:case Hi:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Si:case tl:case wn:return{byteLength:4,components:1};case Gh:case Hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mr}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mr);function hf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function pm(s){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<h.length;d++){const x=h[f],_=h[d];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,x=h.length;d<x;d++){const _=h[d];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Om=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,km=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:mm,alphahash_pars_fragment:xm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:vm,alphatest_pars_fragment:ym,aomap_fragment:bm,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:Tm,begin_vertex:Am,beginnormal_vertex:Em,bsdfs:wm,iridescence_fragment:Rm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Pm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Dm,clipping_planes_vertex:Lm,color_fragment:Nm,color_pars_fragment:Um,color_pars_vertex:Fm,color_vertex:Bm,common:Om,cube_uv_reflection_fragment:km,defaultnormal_vertex:zm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Gm,emissivemap_fragment:Hm,emissivemap_pars_fragment:Wm,colorspace_fragment:Xm,colorspace_pars_fragment:qm,envmap_fragment:Ym,envmap_common_pars_fragment:jm,envmap_pars_fragment:Km,envmap_pars_vertex:Zm,envmap_physical_pars_fragment:o0,envmap_vertex:$m,fog_vertex:Jm,fog_pars_vertex:Qm,fog_fragment:e0,fog_pars_fragment:t0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:l0,lights_phong_fragment:u0,lights_phong_pars_fragment:h0,lights_physical_fragment:f0,lights_physical_pars_fragment:d0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:x0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:y0,map_fragment:b0,map_pars_fragment:M0,map_particle_fragment:S0,map_particle_pars_fragment:T0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:E0,morphinstance_vertex:w0,morphcolor_vertex:R0,morphnormal_vertex:C0,morphtarget_pars_vertex:P0,morphtarget_vertex:I0,normal_fragment_begin:D0,normal_fragment_maps:L0,normal_pars_fragment:N0,normal_pars_vertex:U0,normal_vertex:F0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:V0,opaque_fragment:G0,packing:H0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:q0,dithering_pars_fragment:Y0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:$0,shadowmap_vertex:J0,shadowmask_pars_fragment:Q0,skinbase_vertex:ex,skinning_pars_vertex:tx,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ax,tonemapping_pars_fragment:ox,transmission_fragment:cx,transmission_pars_fragment:lx,uv_pars_fragment:ux,uv_pars_vertex:hx,uv_vertex:fx,worldpos_vertex:dx,background_vert:px,background_frag:mx,backgroundCube_vert:xx,backgroundCube_frag:gx,cube_vert:_x,cube_frag:vx,depth_vert:yx,depth_frag:bx,distanceRGBA_vert:Mx,distanceRGBA_frag:Sx,equirect_vert:Tx,equirect_frag:Ax,linedashed_vert:Ex,linedashed_frag:wx,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Px,meshlambert_frag:Ix,meshmatcap_vert:Dx,meshmatcap_frag:Lx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:Fx,meshphong_frag:Bx,meshphysical_vert:Ox,meshphysical_frag:kx,meshtoon_vert:zx,meshtoon_frag:Vx,points_vert:Gx,points_frag:Hx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:qx,sprite_frag:Yx},le={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},zn={basic:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Yt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Yt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Yt([le.points,le.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Yt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Yt([le.common,le.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Yt([le.sprite,le.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Yt([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Yt([le.lights,le.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};zn.physical={uniforms:Yt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ta={r:0,b:0,g:0},Di=new Wn,jx=new Pe;function Kx(s,e,t,n,i,r,a){const o=new Re(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function x(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const M=x(v);M===null?p(o,c):M&&M.isColor&&(p(M,1),y=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,y){const M=x(y);M&&(M.isCubeTexture||M.mapping===Va)?(u===void 0&&(u=new At(new Sr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ds(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Di.copy(y.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(Di)),u.material.toneMapped=Je.getTransfer(M.colorSpace)!==ot,(h!==M||f!==M.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new At(new Bs(2,2),new un({name:"BackgroundMaterial",uniforms:Ds(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(ta,Qh(s)),n.buffers.color.setClear(ta.r,ta.g,ta.b,y,a)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:_,addToRenderList:m,dispose:g}}function Zx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(b,C,w,D,N){let B=!1;const k=h(D,w,C);r!==k&&(r=k,l(r.object)),B=d(b,D,w,N),B&&x(b,D,w,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(b,C,w,D),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function h(b,C,w){const D=w.wireframe===!0;let N=n[b.id];N===void 0&&(N={},n[b.id]=N);let B=N[C.id];B===void 0&&(B={},N[C.id]=B);let k=B[D];return k===void 0&&(k=f(c()),B[D]=k),k}function f(b){const C=[],w=[],D=[];for(let N=0;N<t;N++)C[N]=0,w[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:w,attributeDivisors:D,object:b,attributes:{},index:null}}function d(b,C,w,D){const N=r.attributes,B=C.attributes;let k=0;const H=w.getAttributes();for(const O in H)if(H[O].location>=0){const J=N[O];let ne=B[O];if(ne===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),J===void 0||J.attribute!==ne||ne&&J.data!==ne.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function x(b,C,w,D){const N={},B=C.attributes;let k=0;const H=w.getAttributes();for(const O in H)if(H[O].location>=0){let J=B[O];J===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(J=b.instanceColor));const ne={};ne.attribute=J,J&&J.data&&(ne.data=J.data),N[O]=ne,k++}r.attributes=N,r.attributesNum=k,r.index=D}function _(){const b=r.newAttributes;for(let C=0,w=b.length;C<w;C++)b[C]=0}function m(b){p(b,0)}function p(b,C){const w=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;w[b]=1,D[b]===0&&(s.enableVertexAttribArray(b),D[b]=1),N[b]!==C&&(s.vertexAttribDivisor(b,C),N[b]=C)}function g(){const b=r.newAttributes,C=r.enabledAttributes;for(let w=0,D=C.length;w<D;w++)C[w]!==b[w]&&(s.disableVertexAttribArray(w),C[w]=0)}function v(b,C,w,D,N,B,k){k===!0?s.vertexAttribIPointer(b,C,w,N,B):s.vertexAttribPointer(b,C,w,D,N,B)}function y(b,C,w,D){_();const N=D.attributes,B=w.getAttributes(),k=C.defaultAttributeValues;for(const H in B){const O=B[H];if(O.location>=0){let j=N[H];if(j===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),j!==void 0){const J=j.normalized,ne=j.itemSize,Se=e.get(j);if(Se===void 0)continue;const fe=Se.buffer,ze=Se.type,Ve=Se.bytesPerElement,q=ze===s.INT||ze===s.UNSIGNED_INT||j.gpuType===tl;if(j.isInterleavedBufferAttribute){const K=j.data,ae=K.stride,Ee=j.offset;if(K.isInstancedInterleavedBuffer){for(let _e=0;_e<O.locationSize;_e++)p(O.location+_e,K.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<O.locationSize;_e++)m(O.location+_e);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let _e=0;_e<O.locationSize;_e++)v(O.location+_e,ne/O.locationSize,ze,J,ae*Ve,(Ee+ne/O.locationSize*_e)*Ve,q)}else{if(j.isInstancedBufferAttribute){for(let K=0;K<O.locationSize;K++)p(O.location+K,j.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let K=0;K<O.locationSize;K++)m(O.location+K);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let K=0;K<O.locationSize;K++)v(O.location+K,ne/O.locationSize,ze,J,ne*Ve,ne/O.locationSize*K*Ve,q)}}else if(k!==void 0){const J=k[H];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(O.location,J);break;case 3:s.vertexAttrib3fv(O.location,J);break;case 4:s.vertexAttrib4fv(O.location,J);break;default:s.vertexAttrib1fv(O.location,J)}}}}g()}function M(){E();for(const b in n){const C=n[b];for(const w in C){const D=C[w];for(const N in D)u(D[N].object),delete D[N];delete C[w]}delete n[b]}}function S(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const w in C){const D=C[w];for(const N in D)u(D[N].object),delete D[N];delete C[w]}delete n[b.id]}function A(b){for(const C in n){const w=n[C];if(w[b.id]===void 0)continue;const D=w[b.id];for(const N in D)u(D[N].object),delete D[N];delete w[b.id]}}function E(){T(),a=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:T,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:g}}function $x(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let x=0;x<h;x++)d+=u[x];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)a(l[x],u[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=u[_]*f[_];t.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Jx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==on&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const E=A===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==In&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wn&&!E)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ae("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=x>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:M,maxSamples:S}}function Qx(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new kn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const x=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||x===null||x.length===0||r&&!m)r?u(null):l();else{const g=r?0:n,v=g*4;let y=p.clippingState||null;c.value=y,y=u(x,f,v,d);for(let M=0;M!==v;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,x){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,x!==!0||m===null){const p=d+_*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function eg(s){let e=new WeakMap;function t(a,o){return o===lc?a.mapping=Cs:o===uc&&(a.mapping=Ps),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===lc||o===uc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new dp(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const _i=4,Nu=[.125,.215,.35,.446,.526,.582],ki=20,tg=256,Js=new Sl,Uu=new Re;let Io=null,Do=0,Lo=0,No=!1;const ng=new I;class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=ng}=r;Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Do,Lo),this._renderer.xr.enabled=No,e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Hi,format:on,colorSpace:$t,depthBuffer:!1},i=Bu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ig(r)),this._blurMaterial=rg(r,e,t),this._ggxMaterial=sg(r,e,t)}return i}_compileMaterial(e){const t=new At(new Lt,e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,n,i,r){const c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Uu),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new Sr,new zi({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,p=!0):(m.color.copy(Uu),p=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):y===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));const M=this._cubeSize;ls(i,y*M,v>2?M:0,M,M),h.setRenderTarget(i),p&&h.render(_,c),h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Cs||e.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ls(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=.05+l*.95,d=h*f,{_lodMax:x}=this,_=this._sizeLods[n],m=3*_*(n>x-_i?n-x+_i:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=x-t,ls(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(o,Js),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,ls(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,Js)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=l;const f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),_=r/x,m=isFinite(r)?1+Math.floor(u*_):ki;m>ki&&Ae(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let g=0;for(let A=0;A<ki;++A){const E=A/_,T=Math.exp(-E*E/2);p.push(T),A===0?g+=T:A<m&&(g+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-n;const y=this._sizeLods[i],M=3*y*(i>v-_i?i-v+_i:0),S=4*(this._cubeSize-y);ls(t,M,S,3*y,2*y),c.setRenderTarget(t),c.render(h,Js)}}function ig(s){const e=[],t=[],n=[];let i=s;const r=s-_i+1+Nu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-_i?c=Nu[a-s+_i-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,x=6,_=3,m=2,p=1,g=new Float32Array(_*x*d),v=new Float32Array(m*x*d),y=new Float32Array(p*x*d);for(let S=0;S<d;S++){const A=S%3*2/3-1,E=S>2?0:-1,T=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];g.set(T,_*x*S),v.set(f,m*x*S);const b=[S,S,S,S,S,S];y.set(b,p*x*S)}const M=new Lt;M.setAttribute("position",new yt(g,_)),M.setAttribute("uv",new yt(v,m)),M.setAttribute("faceIndex",new yt(y,p)),n.push(new At(M,null)),i>_i&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Bu(s,e,t){const n=new xn(s,e,t);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function sg(s,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function rg(s,e,t){const n=new Float32Array(ki),i=new I(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ou(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ku(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ag(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===lc||c===uc,u=c===Cs||c===Ps;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Fu(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Fu(s)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function og(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&yr("WebGLRenderer: "+n+" extension not supported."),i}}}function cg(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,x=h.attributes.position;let _=0;if(d!==null){const g=d.array;_=d.version;for(let v=0,y=g.length;v<y;v+=3){const M=g[v+0],S=g[v+1],A=g[v+2];f.push(M,S,S,A,A,M)}}else if(x!==void 0){const g=x.array;_=x.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const M=v+0,S=v+1,A=v+2;f.push(M,S,S,A,A,M)}}else return;const m=new(jh(f)?Jh:dl)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function lg(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,x){x!==0&&(s.drawElementsInstanced(n,d,r,f*a,x),t.update(d,n,x))}function u(f,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];t.update(m,n,1)}function h(f,d,x,_){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,x);let p=0;for(let g=0;g<x;g++)p+=d[g]*_[g];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ug(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hg(s,e,t){const n=new WeakMap,i=new et;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const S=new Float32Array(y*M*4*h),A=new Kh(S,y,M,h);A.type=wn,A.needsUpdate=!0;const E=v*4;for(let b=0;b<h;b++){const C=m[b],w=p[b],D=g[b],N=y*M*4*b;for(let B=0;B<C.count;B++){const k=B*E;d===!0&&(i.fromBufferAttribute(C,B),S[N+k+0]=i.x,S[N+k+1]=i.y,S[N+k+2]=i.z,S[N+k+3]=0),x===!0&&(i.fromBufferAttribute(w,B),S[N+k+4]=i.x,S[N+k+5]=i.y,S[N+k+6]=i.z,S[N+k+7]=0),_===!0&&(i.fromBufferAttribute(D,B),S[N+k+8]=i.x,S[N+k+9]=i.y,S[N+k+10]=i.z,S[N+k+11]=D.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new pe(y,M)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const x=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function fg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const ff=new Ot,zu=new vl(1,1),df=new Kh,pf=new Zd,mf=new ef,Vu=[],Gu=[],Hu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function Gs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Vu[i];if(r===void 0&&(r=new Float32Array(i),Vu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function qa(s,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function dg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function gg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Xu.set(n),s.uniformMatrix2fv(this.addr,!1,Xu),Dt(t,n)}}function _g(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Wu.set(n),s.uniformMatrix3fv(this.addr,!1,Wu),Dt(t,n)}}function vg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Hu.set(n),s.uniformMatrix4fv(this.addr,!1,Hu),Dt(t,n)}}function yg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function Mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function Tg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function Eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function wg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function Rg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(zu.compareFunction=Yh,r=zu):r=ff,t.setTexture2D(e||r,i)}function Cg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pf,i)}function Pg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mf,i)}function Ig(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||df,i)}function Dg(s){switch(s){case 5126:return dg;case 35664:return pg;case 35665:return mg;case 35666:return xg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return yg;case 35667:case 35671:return bg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return Tg;case 36294:return Ag;case 36295:return Eg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Lg(s,e){s.uniform1fv(this.addr,e)}function Ng(s,e){const t=Gs(e,this.size,2);s.uniform2fv(this.addr,t)}function Ug(s,e){const t=Gs(e,this.size,3);s.uniform3fv(this.addr,t)}function Fg(s,e){const t=Gs(e,this.size,4);s.uniform4fv(this.addr,t)}function Bg(s,e){const t=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Og(s,e){const t=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function kg(s,e){const t=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zg(s,e){s.uniform1iv(this.addr,e)}function Vg(s,e){s.uniform2iv(this.addr,e)}function Gg(s,e){s.uniform3iv(this.addr,e)}function Hg(s,e){s.uniform4iv(this.addr,e)}function Wg(s,e){s.uniform1uiv(this.addr,e)}function Xg(s,e){s.uniform2uiv(this.addr,e)}function qg(s,e){s.uniform3uiv(this.addr,e)}function Yg(s,e){s.uniform4uiv(this.addr,e)}function jg(s,e,t){const n=this.cache,i=e.length,r=qa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ff,r[a])}function Kg(s,e,t){const n=this.cache,i=e.length,r=qa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||pf,r[a])}function Zg(s,e,t){const n=this.cache,i=e.length,r=qa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||mf,r[a])}function $g(s,e,t){const n=this.cache,i=e.length,r=qa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||df,r[a])}function Jg(s){switch(s){case 5126:return Lg;case 35664:return Ng;case 35665:return Ug;case 35666:return Fg;case 35674:return Bg;case 35675:return Og;case 35676:return kg;case 5124:case 35670:return zg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Hg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return $g}}class Qg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}}class e1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}}class t1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function qu(s,e){s.seq.push(e),s.map[e.id]=e}function n1(s,e,t){const n=s.name,i=n.length;for(Uo.lastIndex=0;;){const r=Uo.exec(n),a=Uo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){qu(t,l===void 0?new Qg(o,s,e):new e1(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new t1(o),qu(t,h)),t=h}}}class wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);n1(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Yu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const i1=37297;let s1=0;function r1(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ju=new qe;function a1(s){Je._getMatrix(ju,Je.workingColorSpace,s);const e=`mat3( ${ju.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case Da:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ku(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+r1(s.getShaderSource(e),o)}else return r}function o1(s,e){const t=a1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function c1(s,e){let t;switch(e){case sd:t="Linear";break;case rd:t="Reinhard";break;case ad:t="Cineon";break;case od:t="ACESFilmic";break;case ld:t="AgX";break;case ud:t="Neutral";break;case cd:t="Custom";break;default:Ae("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const na=new I;function l1(){Je.getLuminanceCoefficients(na);const s=na.x.toFixed(4),e=na.y.toFixed(4),t=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function h1(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f1(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function or(s){return s!==""}function Zu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(s){return s.replace(d1,m1)}const p1=new Map;function m1(s,e){let t=je[e];if(t===void 0){const n=p1.get(e);if(n!==void 0)t=je[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hc(t)}const x1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(s){return s.replace(x1,g1)}function g1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function v1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function b1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bh:e="ENVMAP_BLENDING_MULTIPLY";break;case nd:e="ENVMAP_BLENDING_MIX";break;case id:e="ENVMAP_BLENDING_ADD";break}return e}function M1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function S1(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=_1(t),l=v1(t),u=y1(t),h=b1(t),f=M1(t),d=u1(t),x=h1(r),_=i.createProgram();let m,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?je.tonemapping_pars_fragment:"",t.toneMapping!==yi?c1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,o1("linearToOutputTexel",t.outputColorSpace),l1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),a=Hc(a),a=Zu(a,t),a=$u(a,t),o=Hc(o),o=Zu(o,t),o=$u(o,t),a=Ju(a),o=Ju(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=g+m+a,y=g+p+o,M=Yu(i,i.VERTEX_SHADER,v),S=Yu(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(C){if(s.debug.checkShaderErrors){const w=i.getProgramInfoLog(_)||"",D=i.getShaderInfoLog(M)||"",N=i.getShaderInfoLog(S)||"",B=w.trim(),k=D.trim(),H=N.trim();let O=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,S);else{const J=Ku(i,M,"vertex"),ne=Ku(i,S,"fragment");Ke("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+J+`
`+ne)}else B!==""?Ae("WebGLProgram: Program Info Log:",B):(k===""||H==="")&&(j=!1);j&&(C.diagnostics={runnable:O,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(M),i.deleteShader(S),E=new wa(i,_),T=f1(i,_)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,i1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=S,this}let T1=0;class A1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new E1(e),t.set(e,n)),n}}class E1{constructor(e){this.id=T1++,this.code=e,this.usedTimes=0}}function w1(s,e,t,n,i,r,a){const o=new Zh,c=new A1,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,b,C,w,D){const N=w.fog,B=D.geometry,k=T.isMeshStandardMaterial?w.environment:null,H=(T.isMeshStandardMaterial?t:e).get(T.envMap||k),O=H&&H.mapping===Va?H.image.height:null,j=x[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&Ae("WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=J!==void 0?J.length:0;let Se=0;B.morphAttributes.position!==void 0&&(Se=1),B.morphAttributes.normal!==void 0&&(Se=2),B.morphAttributes.color!==void 0&&(Se=3);let fe,ze,Ve,q;if(j){const rt=zn[j];fe=rt.vertexShader,ze=rt.fragmentShader}else fe=T.vertexShader,ze=T.fragmentShader,c.update(T),Ve=c.getVertexShaderID(T),q=c.getFragmentShaderID(T);const K=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),Ee=D.isInstancedMesh===!0,_e=D.isBatchedMesh===!0,ee=!!T.map,Me=!!T.matcap,xe=!!H,Fe=!!T.aoMap,U=!!T.lightMap,We=!!T.bumpMap,Ye=!!T.normalMap,nt=!!T.displacementMap,ve=!!T.emissiveMap,dt=!!T.metalnessMap,Ie=!!T.roughnessMap,Xe=T.anisotropy>0,L=T.clearcoat>0,R=T.dispersion>0,G=T.iridescence>0,Z=T.sheen>0,Q=T.transmission>0,Y=Xe&&!!T.anisotropyMap,we=L&&!!T.clearcoatMap,ue=L&&!!T.clearcoatNormalMap,De=L&&!!T.clearcoatRoughnessMap,Te=G&&!!T.iridescenceMap,te=G&&!!T.iridescenceThicknessMap,re=Z&&!!T.sheenColorMap,Be=Z&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,me=!!T.specularColorMap,Ge=!!T.specularIntensityMap,F=Q&&!!T.transmissionMap,he=Q&&!!T.thicknessMap,oe=!!T.gradientMap,ce=!!T.alphaMap,ie=T.alphaTest>0,$=!!T.alphaHash,ye=!!T.extensions;let He=yi;T.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(He=s.toneMapping);const ht={shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:fe,fragmentShader:ze,defines:T.defines,customVertexShaderID:Ve,customFragmentShaderID:q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:_e,batchingColor:_e&&D._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,instancingMorph:Ee&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:$t,alphaToCoverage:!!T.alphaToCoverage,map:ee,matcap:Me,envMap:xe,envMapMode:xe&&H.mapping,envMapCubeUVHeight:O,aoMap:Fe,lightMap:U,bumpMap:We,normalMap:Ye,displacementMap:f&&nt,emissiveMap:ve,normalMapObjectSpace:Ye&&T.normalMapType===vd,normalMapTangentSpace:Ye&&T.normalMapType===ul,metalnessMap:dt,roughnessMap:Ie,anisotropy:Xe,anisotropyMap:Y,clearcoat:L,clearcoatMap:we,clearcoatNormalMap:ue,clearcoatRoughnessMap:De,dispersion:R,iridescence:G,iridescenceMap:Te,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:re,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:me,specularIntensityMap:Ge,transmission:Q,transmissionMap:F,thicknessMap:he,gradientMap:oe,opaque:T.transparent===!1&&T.blending===As&&T.alphaToCoverage===!1,alphaMap:ce,alphaTest:ie,alphaHash:$,combine:T.combine,mapUv:ee&&_(T.map.channel),aoMapUv:Fe&&_(T.aoMap.channel),lightMapUv:U&&_(T.lightMap.channel),bumpMapUv:We&&_(T.bumpMap.channel),normalMapUv:Ye&&_(T.normalMap.channel),displacementMapUv:nt&&_(T.displacementMap.channel),emissiveMapUv:ve&&_(T.emissiveMap.channel),metalnessMapUv:dt&&_(T.metalnessMap.channel),roughnessMapUv:Ie&&_(T.roughnessMap.channel),anisotropyMapUv:Y&&_(T.anisotropyMap.channel),clearcoatMapUv:we&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(T.sheenRoughnessMap.channel),specularMapUv:Ne&&_(T.specularMap.channel),specularColorMapUv:me&&_(T.specularColorMap.channel),specularIntensityMapUv:Ge&&_(T.specularIntensityMap.channel),transmissionMapUv:F&&_(T.transmissionMap.channel),thicknessMapUv:he&&_(T.thicknessMap.channel),alphaMapUv:ce&&_(T.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ye||Xe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(ee||ce),fog:!!N,useFog:T.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:ee&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:ve&&T.emissiveMap.isVideoTexture===!0&&Je.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===kt,flipSided:T.side===Kt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ye&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&T.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)b.push(C),b.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(g(b,T),v(b,T),b.push(s.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function g(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function v(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){const b=x[T.type];let C;if(b){const w=zn[b];C=lp.clone(w.uniforms)}else C=T.uniforms;return C}function M(T,b){let C;for(let w=0,D=u.length;w<D;w++){const N=u[w];if(N.cacheKey===b){C=N,++C.usedTimes;break}}return C===void 0&&(C=new S1(s,b,T,r),u.push(C)),C}function S(T){if(--T.usedTimes===0){const b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function A(T){c.remove(T)}function E(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:E}}function R1(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function C1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function eh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function th(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,x,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:x,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,x,_,m){const p=a(h,f,d,x,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,x,_,m){const p=a(h,f,d,x,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||C1),n.length>1&&n.sort(f||eh),i.length>1&&i.sort(f||eh)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function P1(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new th,s.set(n,[a])):i>=r.length?(a=new th,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function I1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Re};break;case"SpotLight":t={position:new I,direction:new I,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function D1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let L1=0;function N1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function U1(s){const e=new I1,t=D1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new Pe,a=new Pe;function o(l){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,x=0,_=0,m=0,p=0,g=0,v=0,y=0,M=0,S=0,A=0;l.sort(N1);for(let T=0,b=l.length;T<b;T++){const C=l[T],w=C.color,D=C.intensity,N=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=w.r*D,h+=w.g*D,f+=w.b*D;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],D);A++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,O=t.get(C);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=C.shadow.matrix,g++}n.directional[d]=k,d++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(w).multiplyScalar(D),k.distance=N,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[_]=k;const H=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,H.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[_]=H.matrix,C.castShadow){const O=t.get(C);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=B,y++}_++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(w).multiplyScalar(D),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const H=C.shadow,O=t.get(C);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,O.shadowCameraNear=H.camera.near,O.shadowCameraFar=H.camera.far,n.pointShadow[x]=O,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=C.shadow.matrix,v++}n.point[x]=k,x++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(D),k.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const E=n.hash;(E.directionalLength!==d||E.pointLength!==x||E.spotLength!==_||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==g||E.numPointShadows!==v||E.numSpotShadows!==y||E.numSpotMaps!==M||E.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+M-S,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,E.directionalLength=d,E.pointLength=x,E.spotLength=_,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=g,E.numPointShadows=v,E.numSpotShadows=y,E.numSpotMaps=M,E.numLightProbes=A,n.version=L1++)}function c(l,u){let h=0,f=0,d=0,x=0,_=0;const m=u.matrixWorldInverse;for(let p=0,g=l.length;p<g;p++){const v=l[p];if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function nh(s){const e=new U1(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function F1(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new nh(s),e.set(i,[o])):r>=a.length?(o=new nh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const B1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k1(s,e,t){let n=new gl;const i=new pe,r=new pe,a=new et,o=new Cp({depthPacking:_d}),c=new Pp,l={},u=t.maxTextureSize,h={[Pn]:Kt,[Kt]:Pn,[kt]:kt},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:B1,fragmentShader:O1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new Lt;x.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(S,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const T=s.getRenderTarget(),b=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),w=s.state;w.setBlending(si),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const D=p!==Qn&&this.type===Qn,N=p===Qn&&this.type!==Qn;for(let B=0,k=S.length;B<k;B++){const H=S[B],O=H.shadow;if(O===void 0){Ae("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const j=O.getFrameExtents();if(i.multiply(j),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,O.mapSize.y=r.y)),O.map===null||D===!0||N===!0){const ne=this.type!==Qn?{minFilter:Zt,magFilter:Zt}:{};O.map!==null&&O.map.dispose(),O.map=new xn(i.x,i.y,ne),O.map.texture.name=H.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const J=O.getViewportCount();for(let ne=0;ne<J;ne++){const Se=O.getViewport(ne);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),w.viewport(a),O.updateMatrices(H,ne),n=O.getFrustum(),y(A,E,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===Qn&&g(O,E),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,b,C)};function g(S,A){const E=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new xn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(A,null,E,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(A,null,E,d,_,null)}function v(S,A,E,T){let b=null;const C=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)b=C;else if(b=E.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const w=b.uuid,D=A.uuid;let N=l[w];N===void 0&&(N={},l[w]=N);let B=N[D];B===void 0&&(B=b.clone(),N[D]=B,A.addEventListener("dispose",M)),b=B}if(b.visible=A.visible,b.wireframe=A.wireframe,T===Qn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const w=s.properties.get(b);w.light=E}return b}function y(S,A,E,T,b){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===Qn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const D=e.update(S),N=S.material;if(Array.isArray(N)){const B=D.groups;for(let k=0,H=B.length;k<H;k++){const O=B[k],j=N[O.materialIndex];if(j&&j.visible){const J=v(S,j,T,b);S.onBeforeShadow(s,S,A,E,D,J,O),s.renderBufferDirect(E,null,D,J,S,O),S.onAfterShadow(s,S,A,E,D,J,O)}}}else if(N.visible){const B=v(S,N,T,b);S.onBeforeShadow(s,S,A,E,D,B,null),s.renderBufferDirect(E,null,D,B,S,null),S.onAfterShadow(s,S,A,E,D,B,null)}}const w=S.children;for(let D=0,N=w.length;D<N;D++)y(w[D],A,E,T,b)}function M(S){S.target.removeEventListener("dispose",M);for(const E in l){const T=l[E],b=S.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const z1={[nc]:ic,[sc]:oc,[rc]:cc,[Rs]:ac,[ic]:nc,[oc]:sc,[cc]:rc,[ac]:Rs};function V1(s,e){function t(){let F=!1;const he=new et;let oe=null;const ce=new et(0,0,0,0);return{setMask:function(ie){oe!==ie&&!F&&(s.colorMask(ie,ie,ie,ie),oe=ie)},setLocked:function(ie){F=ie},setClear:function(ie,$,ye,He,ht){ht===!0&&(ie*=He,$*=He,ye*=He),he.set(ie,$,ye,He),ce.equals(he)===!1&&(s.clearColor(ie,$,ye,He),ce.copy(he))},reset:function(){F=!1,oe=null,ce.set(-1,0,0,0)}}}function n(){let F=!1,he=!1,oe=null,ce=null,ie=null;return{setReversed:function($){if(he!==$){const ye=e.get("EXT_clip_control");$?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),he=$;const He=ie;ie=null,this.setClear(He)}},getReversed:function(){return he},setTest:function($){$?K(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function($){oe!==$&&!F&&(s.depthMask($),oe=$)},setFunc:function($){if(he&&($=z1[$]),ce!==$){switch($){case nc:s.depthFunc(s.NEVER);break;case ic:s.depthFunc(s.ALWAYS);break;case sc:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case rc:s.depthFunc(s.EQUAL);break;case ac:s.depthFunc(s.GEQUAL);break;case oc:s.depthFunc(s.GREATER);break;case cc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=$}},setLocked:function($){F=$},setClear:function($){ie!==$&&(he&&($=1-$),s.clearDepth($),ie=$)},reset:function(){F=!1,oe=null,ce=null,ie=null,he=!1}}}function i(){let F=!1,he=null,oe=null,ce=null,ie=null,$=null,ye=null,He=null,ht=null;return{setTest:function(rt){F||(rt?K(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(rt){he!==rt&&!F&&(s.stencilMask(rt),he=rt)},setFunc:function(rt,Un,vn){(oe!==rt||ce!==Un||ie!==vn)&&(s.stencilFunc(rt,Un,vn),oe=rt,ce=Un,ie=vn)},setOp:function(rt,Un,vn){($!==rt||ye!==Un||He!==vn)&&(s.stencilOp(rt,Un,vn),$=rt,ye=Un,He=vn)},setLocked:function(rt){F=rt},setClear:function(rt){ht!==rt&&(s.clearStencil(rt),ht=rt)},reset:function(){F=!1,he=null,oe=null,ce=null,ie=null,$=null,ye=null,He=null,ht=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],x=null,_=!1,m=null,p=null,g=null,v=null,y=null,M=null,S=null,A=new Re(0,0,0),E=0,T=!1,b=null,C=null,w=null,D=null,N=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,H=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),k=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),k=H>=2);let j=null,J={};const ne=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),fe=new et().fromArray(ne),ze=new et().fromArray(Se);function Ve(F,he,oe,ce){const ie=new Uint8Array(4),$=s.createTexture();s.bindTexture(F,$),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ye=0;ye<oe;ye++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(he+ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return $}const q={};q[s.TEXTURE_2D]=Ve(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=Ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=Ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=Ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(Rs),We(!1),Ye(Gl),K(s.CULL_FACE),Fe(si);function K(F){u[F]!==!0&&(s.enable(F),u[F]=!0)}function ae(F){u[F]!==!1&&(s.disable(F),u[F]=!1)}function Ee(F,he){return h[F]!==he?(s.bindFramebuffer(F,he),h[F]=he,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=he),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=he),!0):!1}function _e(F,he){let oe=d,ce=!1;if(F){oe=f.get(he),oe===void 0&&(oe=[],f.set(he,oe));const ie=F.textures;if(oe.length!==ie.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let $=0,ye=ie.length;$<ye;$++)oe[$]=s.COLOR_ATTACHMENT0+$;oe.length=ie.length,ce=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,ce=!0);ce&&s.drawBuffers(oe)}function ee(F){return x!==F?(s.useProgram(F),x=F,!0):!1}const Me={[gi]:s.FUNC_ADD,[zf]:s.FUNC_SUBTRACT,[Vf]:s.FUNC_REVERSE_SUBTRACT};Me[Gf]=s.MIN,Me[Hf]=s.MAX;const xe={[Wf]:s.ZERO,[Qo]:s.ONE,[Xf]:s.SRC_COLOR,[ec]:s.SRC_ALPHA,[$f]:s.SRC_ALPHA_SATURATE,[Kf]:s.DST_COLOR,[Yf]:s.DST_ALPHA,[qf]:s.ONE_MINUS_SRC_COLOR,[tc]:s.ONE_MINUS_SRC_ALPHA,[Zf]:s.ONE_MINUS_DST_COLOR,[jf]:s.ONE_MINUS_DST_ALPHA,[Jf]:s.CONSTANT_COLOR,[Qf]:s.ONE_MINUS_CONSTANT_COLOR,[ed]:s.CONSTANT_ALPHA,[td]:s.ONE_MINUS_CONSTANT_ALPHA};function Fe(F,he,oe,ce,ie,$,ye,He,ht,rt){if(F===si){_===!0&&(ae(s.BLEND),_=!1);return}if(_===!1&&(K(s.BLEND),_=!0),F!==Fh){if(F!==m||rt!==T){if((p!==gi||y!==gi)&&(s.blendEquation(s.FUNC_ADD),p=gi,y=gi),rt)switch(F){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hl:s.blendFunc(s.ONE,s.ONE);break;case Wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ke("WebGLState: Invalid blending: ",F);break}else switch(F){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wl:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",F);break}g=null,v=null,M=null,S=null,A.set(0,0,0),E=0,m=F,T=rt}return}ie=ie||he,$=$||oe,ye=ye||ce,(he!==p||ie!==y)&&(s.blendEquationSeparate(Me[he],Me[ie]),p=he,y=ie),(oe!==g||ce!==v||$!==M||ye!==S)&&(s.blendFuncSeparate(xe[oe],xe[ce],xe[$],xe[ye]),g=oe,v=ce,M=$,S=ye),(He.equals(A)===!1||ht!==E)&&(s.blendColor(He.r,He.g,He.b,ht),A.copy(He),E=ht),m=F,T=!1}function U(F,he){F.side===kt?ae(s.CULL_FACE):K(s.CULL_FACE);let oe=F.side===Kt;he&&(oe=!oe),We(oe),F.blending===As&&F.transparent===!1?Fe(si):Fe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const ce=F.stencilWrite;o.setTest(ce),ce&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ve(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(F){b!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),b=F)}function Ye(F){F!==Bf?(K(s.CULL_FACE),F!==C&&(F===Gl?s.cullFace(s.BACK):F===Of?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),C=F}function nt(F){F!==w&&(k&&s.lineWidth(F),w=F)}function ve(F,he,oe){F?(K(s.POLYGON_OFFSET_FILL),(D!==he||N!==oe)&&(s.polygonOffset(he,oe),D=he,N=oe)):ae(s.POLYGON_OFFSET_FILL)}function dt(F){F?K(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function Ie(F){F===void 0&&(F=s.TEXTURE0+B-1),j!==F&&(s.activeTexture(F),j=F)}function Xe(F,he,oe){oe===void 0&&(j===null?oe=s.TEXTURE0+B-1:oe=j);let ce=J[oe];ce===void 0&&(ce={type:void 0,texture:void 0},J[oe]=ce),(ce.type!==F||ce.texture!==he)&&(j!==oe&&(s.activeTexture(oe),j=oe),s.bindTexture(F,he||q[F]),ce.type=F,ce.texture=he)}function L(){const F=J[j];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function R(){try{s.compressedTexImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Z(){try{s.texSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Q(){try{s.texSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function ue(){try{s.texStorage2D(...arguments)}catch(F){F("WebGLState:",F)}}function De(){try{s.texStorage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Te(){try{s.texImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function te(){try{s.texImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function re(F){fe.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),fe.copy(F))}function Be(F){ze.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),ze.copy(F))}function Ne(F,he){let oe=l.get(he);oe===void 0&&(oe=new WeakMap,l.set(he,oe));let ce=oe.get(F);ce===void 0&&(ce=s.getUniformBlockIndex(he,F.name),oe.set(F,ce))}function me(F,he){const ce=l.get(he).get(F);c.get(he)!==ce&&(s.uniformBlockBinding(he,ce,F.__bindingPointIndex),c.set(he,ce))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},j=null,J={},h={},f=new WeakMap,d=[],x=null,_=!1,m=null,p=null,g=null,v=null,y=null,M=null,S=null,A=new Re(0,0,0),E=0,T=!1,b=null,C=null,w=null,D=null,N=null,fe.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ae,bindFramebuffer:Ee,drawBuffers:_e,useProgram:ee,setBlending:Fe,setMaterial:U,setFlipSided:We,setCullFace:Ye,setLineWidth:nt,setPolygonOffset:ve,setScissorTest:dt,activeTexture:Ie,bindTexture:Xe,unbindTexture:L,compressedTexImage2D:R,compressedTexImage3D:G,texImage2D:Te,texImage3D:te,updateUBOMapping:Ne,uniformBlockBinding:me,texStorage2D:ue,texStorage3D:De,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:we,scissor:re,viewport:Be,reset:Ge}}function G1(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,R){return d?new OffscreenCanvas(L,R):vr("canvas")}function _(L,R,G){let Z=1;const Q=Xe(L);if((Q.width>G||Q.height>G)&&(Z=G/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Y=Math.floor(Z*Q.width),we=Math.floor(Z*Q.height);h===void 0&&(h=x(Y,we));const ue=R?x(Y,we):h;return ue.width=Y,ue.height=we,ue.getContext("2d").drawImage(L,0,0,Y,we),Ae("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+we+")."),ue}else return"data"in L&&Ae("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function g(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(L,R,G,Z,Q=!1){if(L!==null){if(s[L]!==void 0)return s[L];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Y=R;if(R===s.RED&&(G===s.FLOAT&&(Y=s.R32F),G===s.HALF_FLOAT&&(Y=s.R16F),G===s.UNSIGNED_BYTE&&(Y=s.R8)),R===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(Y=s.R8UI),G===s.UNSIGNED_SHORT&&(Y=s.R16UI),G===s.UNSIGNED_INT&&(Y=s.R32UI),G===s.BYTE&&(Y=s.R8I),G===s.SHORT&&(Y=s.R16I),G===s.INT&&(Y=s.R32I)),R===s.RG&&(G===s.FLOAT&&(Y=s.RG32F),G===s.HALF_FLOAT&&(Y=s.RG16F),G===s.UNSIGNED_BYTE&&(Y=s.RG8)),R===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(Y=s.RG8UI),G===s.UNSIGNED_SHORT&&(Y=s.RG16UI),G===s.UNSIGNED_INT&&(Y=s.RG32UI),G===s.BYTE&&(Y=s.RG8I),G===s.SHORT&&(Y=s.RG16I),G===s.INT&&(Y=s.RG32I)),R===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),G===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),G===s.UNSIGNED_INT&&(Y=s.RGB32UI),G===s.BYTE&&(Y=s.RGB8I),G===s.SHORT&&(Y=s.RGB16I),G===s.INT&&(Y=s.RGB32I)),R===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),G===s.UNSIGNED_INT&&(Y=s.RGBA32UI),G===s.BYTE&&(Y=s.RGBA8I),G===s.SHORT&&(Y=s.RGBA16I),G===s.INT&&(Y=s.RGBA32I)),R===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),R===s.RGBA){const we=Q?Da:Je.getTransfer(Z);G===s.FLOAT&&(Y=s.RGBA32F),G===s.HALF_FLOAT&&(Y=s.RGBA16F),G===s.UNSIGNED_BYTE&&(Y=we===ot?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(L,R){let G;return L?R===null||R===Si||R===pr?G=s.DEPTH24_STENCIL8:R===wn?G=s.DEPTH32F_STENCIL8:R===dr&&(G=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Si||R===pr?G=s.DEPTH_COMPONENT24:R===wn?G=s.DEPTH_COMPONENT32F:R===dr&&(G=s.DEPTH_COMPONENT16),G}function M(L,R){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Zt&&L.minFilter!==Ft?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function S(L){const R=L.target;R.removeEventListener("dispose",S),E(R),R.isVideoTexture&&u.delete(R)}function A(L){const R=L.target;R.removeEventListener("dispose",A),b(R)}function E(L){const R=n.get(L);if(R.__webglInit===void 0)return;const G=L.source,Z=f.get(G);if(Z){const Q=Z[R.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(L),Object.keys(Z).length===0&&f.delete(G)}n.remove(L)}function T(L){const R=n.get(L);s.deleteTexture(R.__webglTexture);const G=L.source,Z=f.get(G);delete Z[R.__cacheKey],a.memory.textures--}function b(L){const R=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(R.__webglFramebuffer[Z]))for(let Q=0;Q<R.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(R.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(R.__webglFramebuffer[Z]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[Z])}else{if(Array.isArray(R.__webglFramebuffer))for(let Z=0;Z<R.__webglFramebuffer.length;Z++)s.deleteFramebuffer(R.__webglFramebuffer[Z]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Z=0;Z<R.__webglColorRenderbuffer.length;Z++)R.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[Z]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const G=L.textures;for(let Z=0,Q=G.length;Z<Q;Z++){const Y=n.get(G[Z]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(L)}let C=0;function w(){C=0}function D(){const L=C;return L>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),C+=1,L}function N(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function B(L,R){const G=n.get(L);if(L.isVideoTexture&&dt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const Z=L.image;if(Z===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,L,R);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+R)}function k(L,R){const G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){q(G,L,R);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+R)}function H(L,R){const G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){q(G,L,R);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+R)}function O(L,R){const G=n.get(L);if(L.version>0&&G.__version!==L.version){K(G,L,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+R)}const j={[Mi]:s.REPEAT,[En]:s.CLAMP_TO_EDGE,[Pa]:s.MIRRORED_REPEAT},J={[Zt]:s.NEAREST,[kh]:s.NEAREST_MIPMAP_NEAREST,[ar]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[Ma]:s.LINEAR_MIPMAP_NEAREST,[ni]:s.LINEAR_MIPMAP_LINEAR},ne={[yd]:s.NEVER,[Ed]:s.ALWAYS,[bd]:s.LESS,[Yh]:s.LEQUAL,[Md]:s.EQUAL,[Ad]:s.GEQUAL,[Sd]:s.GREATER,[Td]:s.NOTEQUAL};function Se(L,R){if(R.type===wn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ft||R.magFilter===Ma||R.magFilter===ar||R.magFilter===ni||R.minFilter===Ft||R.minFilter===Ma||R.minFilter===ar||R.minFilter===ni)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,j[R.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,j[R.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,j[R.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,J[R.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,J[R.minFilter]),R.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ne[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Zt||R.minFilter!==ar&&R.minFilter!==ni||R.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function fe(L,R){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",S));const Z=R.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const Y=N(R);if(Y!==L.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[Y].usedTimes++;const we=Q[L.__cacheKey];we!==void 0&&(Q[L.__cacheKey].usedTimes--,we.usedTimes===0&&T(R)),L.__cacheKey=Y,L.__webglTexture=Q[Y].texture}return G}function ze(L,R,G){return Math.floor(Math.floor(L/G)/R)}function Ve(L,R,G,Z){const Y=L.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,R.width,R.height,G,Z,R.data);else{Y.sort((te,re)=>te.start-re.start);let we=0;for(let te=1;te<Y.length;te++){const re=Y[we],Be=Y[te],Ne=re.start+re.count,me=ze(Be.start,R.width,4),Ge=ze(re.start,R.width,4);Be.start<=Ne+1&&me===Ge&&ze(Be.start+Be.count-1,R.width,4)===me?re.count=Math.max(re.count,Be.start+Be.count-re.start):(++we,Y[we]=Be)}Y.length=we+1;const ue=s.getParameter(s.UNPACK_ROW_LENGTH),De=s.getParameter(s.UNPACK_SKIP_PIXELS),Te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,R.width);for(let te=0,re=Y.length;te<re;te++){const Be=Y[te],Ne=Math.floor(Be.start/4),me=Math.ceil(Be.count/4),Ge=Ne%R.width,F=Math.floor(Ne/R.width),he=me,oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,Ge,F,he,oe,G,Z,R.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,De),s.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function q(L,R,G){let Z=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Z=s.TEXTURE_3D);const Q=fe(L,R),Y=R.source;t.bindTexture(Z,L.__webglTexture,s.TEXTURE0+G);const we=n.get(Y);if(Y.version!==we.__version||Q===!0){t.activeTexture(s.TEXTURE0+G);const ue=Je.getPrimaries(Je.workingColorSpace),De=R.colorSpace===ti?null:Je.getPrimaries(R.colorSpace),Te=R.colorSpace===ti||ue===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let te=_(R.image,!1,i.maxTextureSize);te=Ie(R,te);const re=r.convert(R.format,R.colorSpace),Be=r.convert(R.type);let Ne=v(R.internalFormat,re,Be,R.colorSpace,R.isVideoTexture);Se(Z,R);let me;const Ge=R.mipmaps,F=R.isVideoTexture!==!0,he=we.__version===void 0||Q===!0,oe=Y.dataReady,ce=M(R,te);if(R.isDepthTexture)Ne=y(R.format===xr,R.type),he&&(F?t.texStorage2D(s.TEXTURE_2D,1,Ne,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Ne,te.width,te.height,0,re,Be,null));else if(R.isDataTexture)if(Ge.length>0){F&&he&&t.texStorage2D(s.TEXTURE_2D,ce,Ne,Ge[0].width,Ge[0].height);for(let ie=0,$=Ge.length;ie<$;ie++)me=Ge[ie],F?oe&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,me.width,me.height,re,Be,me.data):t.texImage2D(s.TEXTURE_2D,ie,Ne,me.width,me.height,0,re,Be,me.data);R.generateMipmaps=!1}else F?(he&&t.texStorage2D(s.TEXTURE_2D,ce,Ne,te.width,te.height),oe&&Ve(R,te,re,Be)):t.texImage2D(s.TEXTURE_2D,0,Ne,te.width,te.height,0,re,Be,te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){F&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ne,Ge[0].width,Ge[0].height,te.depth);for(let ie=0,$=Ge.length;ie<$;ie++)if(me=Ge[ie],R.format!==on)if(re!==null)if(F){if(oe)if(R.layerUpdates.size>0){const ye=Lu(me.width,me.height,R.format,R.type);for(const He of R.layerUpdates){const ht=me.data.subarray(He*ye/me.data.BYTES_PER_ELEMENT,(He+1)*ye/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,He,me.width,me.height,1,re,ht)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,te.depth,re,me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Ne,me.width,me.height,te.depth,0,me.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,te.depth,re,Be,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Ne,me.width,me.height,te.depth,0,re,Be,me.data)}else{F&&he&&t.texStorage2D(s.TEXTURE_2D,ce,Ne,Ge[0].width,Ge[0].height);for(let ie=0,$=Ge.length;ie<$;ie++)me=Ge[ie],R.format!==on?re!==null?F?oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,me.width,me.height,re,me.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Ne,me.width,me.height,0,me.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?oe&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,me.width,me.height,re,Be,me.data):t.texImage2D(s.TEXTURE_2D,ie,Ne,me.width,me.height,0,re,Be,me.data)}else if(R.isDataArrayTexture)if(F){if(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ne,te.width,te.height,te.depth),oe)if(R.layerUpdates.size>0){const ie=Lu(te.width,te.height,R.format,R.type);for(const $ of R.layerUpdates){const ye=te.data.subarray($*ie/te.data.BYTES_PER_ELEMENT,($+1)*ie/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,re,Be,ye)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,re,Be,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,te.width,te.height,te.depth,0,re,Be,te.data);else if(R.isData3DTexture)F?(he&&t.texStorage3D(s.TEXTURE_3D,ce,Ne,te.width,te.height,te.depth),oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,re,Be,te.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,te.width,te.height,te.depth,0,re,Be,te.data);else if(R.isFramebufferTexture){if(he)if(F)t.texStorage2D(s.TEXTURE_2D,ce,Ne,te.width,te.height);else{let ie=te.width,$=te.height;for(let ye=0;ye<ce;ye++)t.texImage2D(s.TEXTURE_2D,ye,Ne,ie,$,0,re,Be,null),ie>>=1,$>>=1}}else if(Ge.length>0){if(F&&he){const ie=Xe(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ce,Ne,ie.width,ie.height)}for(let ie=0,$=Ge.length;ie<$;ie++)me=Ge[ie],F?oe&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,re,Be,me):t.texImage2D(s.TEXTURE_2D,ie,Ne,re,Be,me);R.generateMipmaps=!1}else if(F){if(he){const ie=Xe(te);t.texStorage2D(s.TEXTURE_2D,ce,Ne,ie.width,ie.height)}oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re,Be,te)}else t.texImage2D(s.TEXTURE_2D,0,Ne,re,Be,te);m(R)&&p(Z),we.__version=Y.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function K(L,R,G){if(R.image.length!==6)return;const Z=fe(L,R),Q=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+G);const Y=n.get(Q);if(Q.version!==Y.__version||Z===!0){t.activeTexture(s.TEXTURE0+G);const we=Je.getPrimaries(Je.workingColorSpace),ue=R.colorSpace===ti?null:Je.getPrimaries(R.colorSpace),De=R.colorSpace===ti||we===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Te=R.isCompressedTexture||R.image[0].isCompressedTexture,te=R.image[0]&&R.image[0].isDataTexture,re=[];for(let $=0;$<6;$++)!Te&&!te?re[$]=_(R.image[$],!0,i.maxCubemapSize):re[$]=te?R.image[$].image:R.image[$],re[$]=Ie(R,re[$]);const Be=re[0],Ne=r.convert(R.format,R.colorSpace),me=r.convert(R.type),Ge=v(R.internalFormat,Ne,me,R.colorSpace),F=R.isVideoTexture!==!0,he=Y.__version===void 0||Z===!0,oe=Q.dataReady;let ce=M(R,Be);Se(s.TEXTURE_CUBE_MAP,R);let ie;if(Te){F&&he&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,Ge,Be.width,Be.height);for(let $=0;$<6;$++){ie=re[$].mipmaps;for(let ye=0;ye<ie.length;ye++){const He=ie[ye];R.format!==on?Ne!==null?F?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,He.width,He.height,Ne,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Ge,He.width,He.height,0,He.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,He.width,He.height,Ne,me,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Ge,He.width,He.height,0,Ne,me,He.data)}}}else{if(ie=R.mipmaps,F&&he){ie.length>0&&ce++;const $=Xe(re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(te){F?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,re[$].width,re[$].height,Ne,me,re[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,re[$].width,re[$].height,0,Ne,me,re[$].data);for(let ye=0;ye<ie.length;ye++){const ht=ie[ye].image[$].image;F?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,ht.width,ht.height,Ne,me,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Ge,ht.width,ht.height,0,Ne,me,ht.data)}}else{F?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ne,me,re[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,Ne,me,re[$]);for(let ye=0;ye<ie.length;ye++){const He=ie[ye];F?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Ne,me,He.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Ge,Ne,me,He.image[$])}}}m(R)&&p(s.TEXTURE_CUBE_MAP),Y.__version=Q.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function ae(L,R,G,Z,Q,Y){const we=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),De=v(G.internalFormat,we,ue,G.colorSpace),Te=n.get(R),te=n.get(G);if(te.__renderTarget=R,!Te.__hasExternalTextures){const re=Math.max(1,R.width>>Y),Be=Math.max(1,R.height>>Y);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,De,re,Be,R.depth,0,we,ue,null):t.texImage2D(Q,Y,De,re,Be,0,we,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ve(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,te.__webglTexture,0,nt(R)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,te.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(L,R,G){if(s.bindRenderbuffer(s.RENDERBUFFER,L),R.depthBuffer){const Z=R.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,Y=y(R.stencilBuffer,Q),we=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=nt(R);ve(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,Y,R.width,R.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,Y,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Y,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,L)}else{const Z=R.textures;for(let Q=0;Q<Z.length;Q++){const Y=Z[Q],we=r.convert(Y.format,Y.colorSpace),ue=r.convert(Y.type),De=v(Y.internalFormat,we,ue,Y.colorSpace),Te=nt(R);G&&ve(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,De,R.width,R.height):ve(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,De,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,De,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(R.depthTexture);Z.__renderTarget=R,(!Z.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),B(R.depthTexture,0);const Q=Z.__webglTexture,Y=nt(R);if(R.depthTexture.format===mr)ve(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(R.depthTexture.format===xr)ve(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ee(L){const R=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const Z=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Z){const Q=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),R.__depthDisposeCallback=Q}R.__boundDepthTexture=Z}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=L.texture.mipmaps;Z&&Z.length>0?_e(R.__webglFramebuffer[0],L):_e(R.__webglFramebuffer,L)}else if(G){R.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[Z]),R.__webglDepthbuffer[Z]===void 0)R.__webglDepthbuffer[Z]=s.createRenderbuffer(),Ee(R.__webglDepthbuffer[Z],L,!1);else{const Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=R.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Y)}}else{const Z=L.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),Ee(R.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Me(L,R,G){const Z=n.get(L);R!==void 0&&ae(Z.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ee(L)}function xe(L){const R=L.texture,G=n.get(L),Z=n.get(R);L.addEventListener("dispose",A);const Q=L.textures,Y=L.isWebGLCubeRenderTarget===!0,we=Q.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=R.version,a.memory.textures++),Y){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(R.mipmaps&&R.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let De=0;De<R.mipmaps.length;De++)G.__webglFramebuffer[ue][De]=s.createFramebuffer()}else G.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<R.mipmaps.length;ue++)G.__webglFramebuffer[ue]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(we)for(let ue=0,De=Q.length;ue<De;ue++){const Te=n.get(Q[ue]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&ve(L)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){const De=Q[ue];G.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const Te=r.convert(De.format,De.colorSpace),te=r.convert(De.type),re=v(De.internalFormat,Te,te,De.colorSpace,L.isXRRenderTarget===!0),Be=nt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,re,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ee(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Se(s.TEXTURE_CUBE_MAP,R);for(let ue=0;ue<6;ue++)if(R.mipmaps&&R.mipmaps.length>0)for(let De=0;De<R.mipmaps.length;De++)ae(G.__webglFramebuffer[ue][De],L,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De);else ae(G.__webglFramebuffer[ue],L,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(R)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ue=0,De=Q.length;ue<De;ue++){const Te=Q[ue],te=n.get(Te);let re=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(re=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,te.__webglTexture),Se(re,Te),ae(G.__webglFramebuffer,L,Te,s.COLOR_ATTACHMENT0+ue,re,0),m(Te)&&p(re)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),Se(ue,R),R.mipmaps&&R.mipmaps.length>0)for(let De=0;De<R.mipmaps.length;De++)ae(G.__webglFramebuffer[De],L,R,s.COLOR_ATTACHMENT0,ue,De);else ae(G.__webglFramebuffer,L,R,s.COLOR_ATTACHMENT0,ue,0);m(R)&&p(ue),t.unbindTexture()}L.depthBuffer&&ee(L)}function Fe(L){const R=L.textures;for(let G=0,Z=R.length;G<Z;G++){const Q=R[G];if(m(Q)){const Y=g(L),we=n.get(Q).__webglTexture;t.bindTexture(Y,we),p(Y),t.unbindTexture()}}}const U=[],We=[];function Ye(L){if(L.samples>0){if(ve(L)===!1){const R=L.textures,G=L.width,Z=L.height;let Q=s.COLOR_BUFFER_BIT;const Y=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(L),ue=R.length>1;if(ue)for(let Te=0;Te<R.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const De=L.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Te=0;Te<R.length;Te++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[Te]);const te=n.get(R[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,G,Z,0,0,G,Z,Q,s.NEAREST),c===!0&&(U.length=0,We.length=0,U.push(s.COLOR_ATTACHMENT0+Te),L.depthBuffer&&L.resolveDepthBuffer===!1&&(U.push(Y),We.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,We)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Te=0;Te<R.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,we.__webglColorRenderbuffer[Te]);const te=n.get(R[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const R=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function nt(L){return Math.min(i.maxSamples,L.samples)}function ve(L){const R=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function dt(L){const R=a.render.frame;u.get(L)!==R&&(u.set(L,R),L.update())}function Ie(L,R){const G=L.colorSpace,Z=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==$t&&G!==ti&&(Je.getTransfer(G)===ot?(Z!==on||Q!==In)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",G)),R}function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=w,this.setTexture2D=B,this.setTexture2DArray=k,this.setTexture3D=H,this.setTextureCube=O,this.rebindTextures=Me,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ve}function H1(s,e){function t(n,i=ti){let r;const a=Je.getTransfer(i);if(n===In)return s.UNSIGNED_BYTE;if(n===nl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===il)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return s.BYTE;if(n===Vh)return s.SHORT;if(n===dr)return s.UNSIGNED_SHORT;if(n===tl)return s.INT;if(n===Si)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===Hi)return s.HALF_FLOAT;if(n===Wh)return s.ALPHA;if(n===Xh)return s.RGB;if(n===on)return s.RGBA;if(n===mr)return s.DEPTH_COMPONENT;if(n===xr)return s.DEPTH_STENCIL;if(n===sl)return s.RED;if(n===rl)return s.RED_INTEGER;if(n===al)return s.RG;if(n===ol)return s.RG_INTEGER;if(n===cl)return s.RGBA_INTEGER;if(n===Sa||n===Ta||n===Aa||n===Ea)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===fc||n===dc||n===pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mc||n===xc||n===gc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mc||n===xc)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_c||n===vc||n===yc||n===bc||n===Mc||n===Sc||n===Tc||n===Ac||n===Ec||n===wc||n===Rc||n===Cc||n===Pc||n===Ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_c)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dc||n===Lc||n===Nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Dc)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uc||n===Fc||n===Bc||n===Oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const W1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new sf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new un({vertexShader:W1,fragmentShader:X1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y1 extends Ai{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,x=null;const _=typeof XRWebGLBinding<"u",m=new q1,p={},g=t.getContextAttributes();let v=null,y=null;const M=[],S=[],A=new pe;let E=null;const T=new jt;T.viewport=new et;const b=new jt;b.viewport=new et;const C=[T,b],w=new Zp;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=M[q];return K===void 0&&(K=new vo,M[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=M[q];return K===void 0&&(K=new vo,M[q]=K),K.getGripSpace()},this.getHand=function(q){let K=M[q];return K===void 0&&(K=new vo,M[q]=K),K.getHandSpace()};function B(q){const K=S.indexOf(q.inputSource);if(K===-1)return;const ae=M[K];ae!==void 0&&(ae.update(q.inputSource,q.frame,l||a),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",H);for(let q=0;q<M.length;q++){const K=S[q];K!==null&&(S[q]=null,M[q].disconnect(K))}D=null,N=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(v),d=null,f=null,h=null,i=null,y=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",k),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ee=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?xr:mr,Ee=g.stencil?pr:Si);const ee={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ee),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new xn(f.textureWidth,f.textureHeight,{format:on,type:In,depthTexture:new vl(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new xn(d.framebufferWidth,d.framebufferHeight,{format:on,type:In,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(q){for(let K=0;K<q.removed.length;K++){const ae=q.removed[K],Ee=S.indexOf(ae);Ee>=0&&(S[Ee]=null,M[Ee].disconnect(ae))}for(let K=0;K<q.added.length;K++){const ae=q.added[K];let Ee=S.indexOf(ae);if(Ee===-1){for(let ee=0;ee<M.length;ee++)if(ee>=S.length){S.push(ae),Ee=ee;break}else if(S[ee]===null){S[ee]=ae,Ee=ee;break}if(Ee===-1)break}const _e=M[Ee];_e&&_e.connect(ae)}}const O=new I,j=new I;function J(q,K,ae){O.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(ae.matrixWorld);const Ee=O.distanceTo(j),_e=K.projectionMatrix.elements,ee=ae.projectionMatrix.elements,Me=_e[14]/(_e[10]-1),xe=_e[14]/(_e[10]+1),Fe=(_e[9]+1)/_e[5],U=(_e[9]-1)/_e[5],We=(_e[8]-1)/_e[0],Ye=(ee[8]+1)/ee[0],nt=Me*We,ve=Me*Ye,dt=Ee/(-We+Ye),Ie=dt*-We;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(dt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_e[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Xe=Me+dt,L=xe+dt,R=nt-Ie,G=ve+(Ee-Ie),Z=Fe*xe/L*Xe,Q=U*xe/L*Xe;q.projectionMatrix.makePerspective(R,G,Z,Q,Xe,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let K=q.near,ae=q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),w.near=b.near=T.near=K,w.far=b.far=T.far=ae,(D!==w.near||N!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,N=w.far),w.layers.mask=q.layers.mask|6,T.layers.mask=w.layers.mask&3,b.layers.mask=w.layers.mask&5;const Ee=q.parent,_e=w.cameras;ne(w,Ee);for(let ee=0;ee<_e.length;ee++)ne(_e[ee],Ee);_e.length===2?J(w,T,b):w.projectionMatrix.copy(T.projectionMatrix),Se(q,w,Ee)};function Se(q,K,ae){ae===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Is*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(w)},this.getCameraTexture=function(q){return p[q]};let fe=null;function ze(q,K){if(u=K.getViewerPose(l||a),x=K,u!==null){const ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ee=!1;ae.length!==w.cameras.length&&(w.cameras.length=0,Ee=!0);for(let xe=0;xe<ae.length;xe++){const Fe=ae[xe];let U=null;if(d!==null)U=d.getViewport(Fe);else{const Ye=h.getViewSubImage(f,Fe);U=Ye.viewport,xe===0&&(e.setRenderTargetTextures(y,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(y))}let We=C[xe];We===void 0&&(We=new jt,We.layers.enable(xe),We.viewport=new et,C[xe]=We),We.matrix.fromArray(Fe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Fe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(U.x,U.y,U.width,U.height),xe===0&&(w.matrix.copy(We.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ee===!0&&w.cameras.push(We)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const xe=h.getDepthInformation(ae[0]);xe&&xe.isValid&&xe.texture&&m.init(xe,i.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let xe=0;xe<ae.length;xe++){const Fe=ae[xe].camera;if(Fe){let U=p[Fe];U||(U=new sf,p[Fe]=U);const We=h.getCameraImage(Fe);U.sourceTexture=We}}}}for(let ae=0;ae<M.length;ae++){const Ee=S[ae],_e=M[ae];Ee!==null&&_e!==void 0&&_e.update(Ee,K,l||a)}fe&&fe(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}const Ve=new hf;Ve.setAnimationLoop(ze),this.setAnimationLoop=function(q){fe=q},this.dispose=function(){}}}const Li=new Wn,j1=new Pe;function K1(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,g,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,g,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const g=e.get(p),v=g.envMap,y=g.envMapRotation;v&&(m.envMap.value=v,Li.copy(y),Li.x*=-1,Li.y*=-1,Li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Li)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,g,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,g){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const g=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Z1(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(g,v){const y=v.program;n.uniformBlockBinding(g,y)}function l(g,v){let y=i[g.id];y===void 0&&(x(g),y=u(g),i[g.id]=y,g.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(g,M);const S=e.render.frame;r[g.id]!==S&&(f(g),r[g.id]=S)}function u(g){const v=h();g.__bindingPointIndex=v;const y=s.createBuffer(),M=g.__size,S=g.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function h(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=i[g.id],y=g.uniforms,M=g.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let S=0,A=y.length;S<A;S++){const E=Array.isArray(y[S])?y[S]:[y[S]];for(let T=0,b=E.length;T<b;T++){const C=E[T];if(d(C,S,T,M)===!0){const w=C.__offset,D=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let B=0;B<D.length;B++){const k=D[B],H=_(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,w+N,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,N),N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,w,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(g,v,y,M){const S=g.value,A=v+"_"+y;if(M[A]===void 0)return typeof S=="number"||typeof S=="boolean"?M[A]=S:M[A]=S.clone(),!0;{const E=M[A];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return M[A]=S,!0}else if(E.equals(S)===!1)return E.copy(S),!0}return!1}function x(g){const v=g.uniforms;let y=0;const M=16;for(let A=0,E=v.length;A<E;A++){const T=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,C=T.length;b<C;b++){const w=T[b],D=Array.isArray(w.value)?w.value:[w.value];for(let N=0,B=D.length;N<B;N++){const k=D[N],H=_(k),O=y%M,j=O%H.boundary,J=O+j;y+=j,J!==0&&M-J<H.storage&&(y+=M-J),w.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,y+=H.storage}}}const S=y%M;return S>0&&(y+=M-S),g.__size=y,g.__cache={},this}function _(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const g in i)s.deleteBuffer(i[g]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}const $1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Jn=null;function J1(){return Jn===null&&(Jn=new Tr($1,32,32,al,Hi),Jn.minFilter=Ft,Jn.magFilter=Ft,Jn.wrapS=En,Jn.wrapT=En,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class Q1{constructor(e={}){const{canvas:t=wd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const x=new Set([cl,ol,rl]),_=new Set([In,Si,dr,pr,nl,il]),m=new Uint32Array(4),p=new Int32Array(4);let g=null,v=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=Ut;let E=0,T=0,b=null,C=-1,w=null;const D=new et,N=new et;let B=null;const k=new Re(0);let H=0,O=t.width,j=t.height,J=1,ne=null,Se=null;const fe=new et(0,0,O,j),ze=new et(0,0,O,j);let Ve=!1;const q=new gl;let K=!1,ae=!1;const Ee=new Pe,_e=new I,ee=new et,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Fe(){return b===null?J:1}let U=n;function We(P,z){return t.getContext(P,z)}try{const P={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",ye,!1),U===null){const z="webgl2";if(U=We(z,P),U===null)throw We(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw P("WebGLRenderer: "+P.message),P}let Ye,nt,ve,dt,Ie,Xe,L,R,G,Z,Q,Y,we,ue,De,Te,te,re,Be,Ne,me,Ge,F,he;function oe(){Ye=new og(U),Ye.init(),Ge=new H1(U,Ye),nt=new Jx(U,Ye,e,Ge),ve=new V1(U,Ye),nt.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),dt=new ug(U),Ie=new R1,Xe=new G1(U,Ye,ve,Ie,nt,Ge,dt),L=new eg(S),R=new ag(S),G=new pm(U),F=new Zx(U,G),Z=new cg(U,G,dt,F),Q=new fg(U,Z,G,dt),Be=new hg(U,nt,Xe),Te=new Qx(Ie),Y=new w1(S,L,R,Ye,nt,F,Te),we=new K1(S,Ie),ue=new P1,De=new F1(Ye),re=new Kx(S,L,R,ve,Q,d,c),te=new k1(S,Q,nt),he=new Z1(U,dt,nt,ve),Ne=new $x(U,Ye,dt),me=new lg(U,Ye,dt),dt.programs=Y.programs,S.capabilities=nt,S.extensions=Ye,S.properties=Ie,S.renderLists=ue,S.shadowMap=te,S.state=ve,S.info=dt}oe();const ce=new Y1(S,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const P=Ye.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ye.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(P){P!==void 0&&(J=P,this.setSize(O,j,!1))},this.getSize=function(P){return P.set(O,j)},this.setSize=function(P,z,W=!0){if(ce.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,j=z,t.width=Math.floor(P*J),t.height=Math.floor(z*J),W===!0&&(t.style.width=P+"px",t.style.height=z+"px"),this.setViewport(0,0,P,z)},this.getDrawingBufferSize=function(P){return P.set(O*J,j*J).floor()},this.setDrawingBufferSize=function(P,z,W){O=P,j=z,J=W,t.width=Math.floor(P*W),t.height=Math.floor(z*W),this.setViewport(0,0,P,z)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,z,W,X){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,z,W,X),ve.viewport(D.copy(fe).multiplyScalar(J).round())},this.getScissor=function(P){return P.copy(ze)},this.setScissor=function(P,z,W,X){P.isVector4?ze.set(P.x,P.y,P.z,P.w):ze.set(P,z,W,X),ve.scissor(N.copy(ze).multiplyScalar(J).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(P){ve.setScissorTest(Ve=P)},this.setOpaqueSort=function(P){ne=P},this.setTransparentSort=function(P){Se=P},this.getClearColor=function(P){return P.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(P=!0,z=!0,W=!0){let X=0;if(P){let V=!1;if(b!==null){const se=b.texture.format;V=x.has(se)}if(V){const se=b.texture.type,de=_.has(se),be=re.getClearColor(),ge=re.getClearAlpha(),Ue=be.r,Oe=be.g,Ce=be.b;de?(m[0]=Ue,m[1]=Oe,m[2]=Ce,m[3]=ge,U.clearBufferuiv(U.COLOR,0,m)):(p[0]=Ue,p[1]=Oe,p[2]=Ce,p[3]=ge,U.clearBufferiv(U.COLOR,0,p))}else X|=U.COLOR_BUFFER_BIT}z&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),re.dispose(),ue.dispose(),De.dispose(),Ie.dispose(),L.dispose(),R.dispose(),Q.dispose(),F.dispose(),he.dispose(),Y.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ul),ce.removeEventListener("sessionend",Fl),Ei.stop()};function ie(P){P.preventDefault(),Na("WebGLRenderer: Context Lost."),A=!0}function $(){Na("WebGLRenderer: Context Restored."),A=!1;const P=dt.autoReset,z=te.enabled,W=te.autoUpdate,X=te.needsUpdate,V=te.type;oe(),dt.autoReset=P,te.enabled=z,te.autoUpdate=W,te.needsUpdate=X,te.type=V}function ye(P){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function He(P){const z=P.target;z.removeEventListener("dispose",He),ht(z)}function ht(P){rt(P),Ie.remove(P)}function rt(P){const z=Ie.get(P).programs;z!==void 0&&(z.forEach(function(W){Y.releaseProgram(W)}),P.isShaderMaterial&&Y.releaseShaderCache(P))}this.renderBufferDirect=function(P,z,W,X,V,se){z===null&&(z=Me);const de=V.isMesh&&V.matrixWorld.determinant()<0,be=If(P,z,W,X,V);ve.setMaterial(X,de);let ge=W.index,Ue=1;if(X.wireframe===!0){if(ge=Z.getWireframeAttribute(W),ge===void 0)return;Ue=2}const Oe=W.drawRange,Ce=W.attributes.position;let $e=Oe.start*Ue,at=(Oe.start+Oe.count)*Ue;se!==null&&($e=Math.max($e,se.start*Ue),at=Math.min(at,(se.start+se.count)*Ue)),ge!==null?($e=Math.max($e,0),at=Math.min(at,ge.count)):Ce!=null&&($e=Math.max($e,0),at=Math.min(at,Ce.count));const gt=at-$e;if(gt<0||gt===1/0)return;F.setup(V,X,be,W,ge);let _t,ut=Ne;if(ge!==null&&(_t=G.get(ge),ut=me,ut.setIndex(_t)),V.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*Fe()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(V.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),ve.setLineWidth(Le*Fe()),V.isLineSegments?ut.setMode(U.LINES):V.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else V.isPoints?ut.setMode(U.POINTS):V.isSprite&&ut.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)yr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Le=V._multiDrawStarts,pt=V._multiDrawCounts,Qe=V._multiDrawCount,nn=ge?G.get(ge).bytesPerElement:1,Xi=Ie.get(X).currentProgram.getUniforms();for(let sn=0;sn<Qe;sn++)Xi.setValue(U,"_gl_DrawID",sn),ut.render(Le[sn]/nn,pt[sn])}else if(V.isInstancedMesh)ut.renderInstances($e,gt,V.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pt=Math.min(W.instanceCount,Le);ut.renderInstances($e,gt,pt)}else ut.render($e,gt)};function Un(P,z,W){P.transparent===!0&&P.side===kt&&P.forceSinglePass===!1?(P.side=Kt,P.needsUpdate=!0,wr(P,z,W),P.side=Pn,P.needsUpdate=!0,wr(P,z,W),P.side=kt):wr(P,z,W)}this.compile=function(P,z,W=null){W===null&&(W=P),v=De.get(W),v.init(z),M.push(v),W.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),P!==W&&P.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),v.setupLights();const X=new Set;return P.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const se=V.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const be=se[de];Un(be,W,V),X.add(be)}else Un(se,W,V),X.add(se)}),v=M.pop(),X},this.compileAsync=function(P,z,W=null){const X=this.compile(P,z,W);return new Promise(V=>{function se(){if(X.forEach(function(de){Ie.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){V(P);return}setTimeout(se,10)}Ye.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let vn=null;function Pf(P){vn&&vn(P)}function Ul(){Ei.stop()}function Fl(){Ei.start()}const Ei=new hf;Ei.setAnimationLoop(Pf),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(P){vn=P,ce.setAnimationLoop(P),P===null?Ei.stop():Ei.start()},ce.addEventListener("sessionstart",Ul),ce.addEventListener("sessionend",Fl),this.render=function(P,z){if(z!==void 0&&z.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,z,b),v=De.get(P,M.length),v.init(z),M.push(v),Ee.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(Ee,Vn,z.reversedDepth),ae=this.localClippingEnabled,K=Te.init(this.clippingPlanes,ae),g=ue.get(P,y.length),g.init(),y.push(g),ce.enabled===!0&&ce.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&Ka(se,z,-1/0,S.sortObjects)}Ka(P,z,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(ne,Se),xe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,xe&&re.addToRenderList(g,P),this.info.render.frame++,K===!0&&Te.beginShadows();const W=v.state.shadowsArray;te.render(W,P,z),K===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,V=g.transmissive;if(v.setupLights(),z.isArrayCamera){const se=z.cameras;if(V.length>0)for(let de=0,be=se.length;de<be;de++){const ge=se[de];Ol(X,V,P,ge)}xe&&re.render(P);for(let de=0,be=se.length;de<be;de++){const ge=se[de];Bl(g,P,ge,ge.viewport)}}else V.length>0&&Ol(X,V,P,z),xe&&re.render(P),Bl(g,P,z);b!==null&&T===0&&(Xe.updateMultisampleRenderTarget(b),Xe.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(S,P,z),F.resetDefaultState(),C=-1,w=null,M.pop(),M.length>0?(v=M[M.length-1],K===!0&&Te.setGlobalState(S.clippingPlanes,v.state.camera)):v=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Ka(P,z,W,X){if(P.visible===!1)return;if(P.layers.test(z.layers)){if(P.isGroup)W=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(z);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){X&&ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ee);const de=Q.update(P),be=P.material;be.visible&&g.push(P,de,be,W,ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){const de=Q.update(P),be=P.material;if(X&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ee.copy(P.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ee.copy(de.boundingSphere.center)),ee.applyMatrix4(P.matrixWorld).applyMatrix4(Ee)),Array.isArray(be)){const ge=de.groups;for(let Ue=0,Oe=ge.length;Ue<Oe;Ue++){const Ce=ge[Ue],$e=be[Ce.materialIndex];$e&&$e.visible&&g.push(P,de,$e,W,ee.z,Ce)}}else be.visible&&g.push(P,de,be,W,ee.z,null)}}const se=P.children;for(let de=0,be=se.length;de<be;de++)Ka(se[de],z,W,X)}function Bl(P,z,W,X){const{opaque:V,transmissive:se,transparent:de}=P;v.setupLightsView(W),K===!0&&Te.setGlobalState(S.clippingPlanes,W),X&&ve.viewport(D.copy(X)),V.length>0&&Er(V,z,W),se.length>0&&Er(se,z,W),de.length>0&&Er(de,z,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ol(P,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[X.id]===void 0&&(v.state.transmissionRenderTarget[X.id]=new xn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Hi:In,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=v.state.transmissionRenderTarget[X.id],de=X.viewport||D;se.setSize(de.z*S.transmissionResolutionScale,de.w*S.transmissionResolutionScale);const be=S.getRenderTarget(),ge=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(se),S.getClearColor(k),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),S.clear(),xe&&re.render(W);const Oe=S.toneMapping;S.toneMapping=yi;const Ce=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),v.setupLightsView(X),K===!0&&Te.setGlobalState(S.clippingPlanes,X),Er(P,W,X),Xe.updateMultisampleRenderTarget(se),Xe.updateRenderTargetMipmap(se),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let at=0,gt=z.length;at<gt;at++){const _t=z[at],{object:ut,geometry:Le,material:pt,group:Qe}=_t;if(pt.side===kt&&ut.layers.test(X.layers)){const nn=pt.side;pt.side=Kt,pt.needsUpdate=!0,kl(ut,W,X,Le,pt,Qe),pt.side=nn,pt.needsUpdate=!0,$e=!0}}$e===!0&&(Xe.updateMultisampleRenderTarget(se),Xe.updateRenderTargetMipmap(se))}S.setRenderTarget(be,ge,Ue),S.setClearColor(k,H),Ce!==void 0&&(X.viewport=Ce),S.toneMapping=Oe}function Er(P,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let V=0,se=P.length;V<se;V++){const de=P[V],{object:be,geometry:ge,group:Ue}=de;let Oe=de.material;Oe.allowOverride===!0&&X!==null&&(Oe=X),be.layers.test(W.layers)&&kl(be,z,W,ge,Oe,Ue)}}function kl(P,z,W,X,V,se){P.onBeforeRender(S,z,W,X,V,se),P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),V.onBeforeRender(S,z,W,X,P,se),V.transparent===!0&&V.side===kt&&V.forceSinglePass===!1?(V.side=Kt,V.needsUpdate=!0,S.renderBufferDirect(W,z,X,V,P,se),V.side=Pn,V.needsUpdate=!0,S.renderBufferDirect(W,z,X,V,P,se),V.side=kt):S.renderBufferDirect(W,z,X,V,P,se),P.onAfterRender(S,z,W,X,V,se)}function wr(P,z,W){z.isScene!==!0&&(z=Me);const X=Ie.get(P),V=v.state.lights,se=v.state.shadowsArray,de=V.state.version,be=Y.getParameters(P,V.state,se,z,W),ge=Y.getProgramCacheKey(be);let Ue=X.programs;X.environment=P.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(P.isMeshStandardMaterial?R:L).get(P.envMap||X.environment),X.envMapRotation=X.environment!==null&&P.envMap===null?z.environmentRotation:P.envMapRotation,Ue===void 0&&(P.addEventListener("dispose",He),Ue=new Map,X.programs=Ue);let Oe=Ue.get(ge);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===de)return Vl(P,be),Oe}else be.uniforms=Y.getUniforms(P),P.onBeforeCompile(be,S),Oe=Y.acquireProgram(be,ge),Ue.set(ge,Oe),X.uniforms=be.uniforms;const Ce=X.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ce.clippingPlanes=Te.uniform),Vl(P,be),X.needsLights=Lf(P),X.lightsStateVersion=de,X.needsLights&&(Ce.ambientLightColor.value=V.state.ambient,Ce.lightProbe.value=V.state.probe,Ce.directionalLights.value=V.state.directional,Ce.directionalLightShadows.value=V.state.directionalShadow,Ce.spotLights.value=V.state.spot,Ce.spotLightShadows.value=V.state.spotShadow,Ce.rectAreaLights.value=V.state.rectArea,Ce.ltc_1.value=V.state.rectAreaLTC1,Ce.ltc_2.value=V.state.rectAreaLTC2,Ce.pointLights.value=V.state.point,Ce.pointLightShadows.value=V.state.pointShadow,Ce.hemisphereLights.value=V.state.hemi,Ce.directionalShadowMap.value=V.state.directionalShadowMap,Ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ce.spotShadowMap.value=V.state.spotShadowMap,Ce.spotLightMatrix.value=V.state.spotLightMatrix,Ce.spotLightMap.value=V.state.spotLightMap,Ce.pointShadowMap.value=V.state.pointShadowMap,Ce.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function zl(P){if(P.uniformsList===null){const z=P.currentProgram.getUniforms();P.uniformsList=wa.seqWithValue(z.seq,P.uniforms)}return P.uniformsList}function Vl(P,z){const W=Ie.get(P);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function If(P,z,W,X,V){z.isScene!==!0&&(z=Me),Xe.resetTextureUnits();const se=z.fog,de=X.isMeshStandardMaterial?z.environment:null,be=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$t,ge=(X.isMeshStandardMaterial?R:L).get(X.envMap||de),Ue=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ce=!!W.morphAttributes.position,$e=!!W.morphAttributes.normal,at=!!W.morphAttributes.color;let gt=yi;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=S.toneMapping);const _t=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=_t!==void 0?_t.length:0,Le=Ie.get(X),pt=v.state.lights;if(K===!0&&(ae===!0||P!==w)){const Xt=P===w&&X.id===C;Te.setState(X,P,Xt)}let Qe=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==pt.state.version||Le.outputColorSpace!==be||V.isBatchedMesh&&Le.batching===!1||!V.isBatchedMesh&&Le.batching===!0||V.isBatchedMesh&&Le.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Le.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Le.instancing===!1||!V.isInstancedMesh&&Le.instancing===!0||V.isSkinnedMesh&&Le.skinning===!1||!V.isSkinnedMesh&&Le.skinning===!0||V.isInstancedMesh&&Le.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Le.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Le.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Le.instancingMorph===!1&&V.morphTexture!==null||Le.envMap!==ge||X.fog===!0&&Le.fog!==se||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Te.numPlanes||Le.numIntersection!==Te.numIntersection)||Le.vertexAlphas!==Ue||Le.vertexTangents!==Oe||Le.morphTargets!==Ce||Le.morphNormals!==$e||Le.morphColors!==at||Le.toneMapping!==gt||Le.morphTargetsCount!==ut)&&(Qe=!0):(Qe=!0,Le.__version=X.version);let nn=Le.currentProgram;Qe===!0&&(nn=wr(X,z,V));let Xi=!1,sn=!1,Hs=!1;const mt=nn.getUniforms(),Qt=Le.uniforms;if(ve.useProgram(nn.program)&&(Xi=!0,sn=!0,Hs=!0),X.id!==C&&(C=X.id,sn=!0),Xi||w!==P){ve.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),mt.setValue(U,"projectionMatrix",P.projectionMatrix),mt.setValue(U,"viewMatrix",P.matrixWorldInverse);const en=mt.map.cameraPosition;en!==void 0&&en.setValue(U,_e.setFromMatrixPosition(P.matrixWorld)),nt.logarithmicDepthBuffer&&mt.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),w!==P&&(w=P,sn=!0,Hs=!0)}if(V.isSkinnedMesh){mt.setOptional(U,V,"bindMatrix"),mt.setOptional(U,V,"bindMatrixInverse");const Xt=V.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),mt.setValue(U,"boneTexture",Xt.boneTexture,Xe))}V.isBatchedMesh&&(mt.setOptional(U,V,"batchingTexture"),mt.setValue(U,"batchingTexture",V._matricesTexture,Xe),mt.setOptional(U,V,"batchingIdTexture"),mt.setValue(U,"batchingIdTexture",V._indirectTexture,Xe),mt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&mt.setValue(U,"batchingColorTexture",V._colorsTexture,Xe));const hn=W.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Be.update(V,W,nn),(sn||Le.receiveShadow!==V.receiveShadow)&&(Le.receiveShadow=V.receiveShadow,mt.setValue(U,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Qt.envMap.value=ge,Qt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(Qt.envMapIntensity.value=z.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=J1()),sn&&(mt.setValue(U,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&Df(Qt,Hs),se&&X.fog===!0&&we.refreshFogUniforms(Qt,se),we.refreshMaterialUniforms(Qt,X,J,j,v.state.transmissionRenderTarget[P.id]),wa.upload(U,zl(Le),Qt,Xe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(wa.upload(U,zl(Le),Qt,Xe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(U,"center",V.center),mt.setValue(U,"modelViewMatrix",V.modelViewMatrix),mt.setValue(U,"normalMatrix",V.normalMatrix),mt.setValue(U,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Xt=X.uniformsGroups;for(let en=0,Za=Xt.length;en<Za;en++){const wi=Xt[en];he.update(wi,nn),he.bind(wi,nn)}}return nn}function Df(P,z){P.ambientLightColor.needsUpdate=z,P.lightProbe.needsUpdate=z,P.directionalLights.needsUpdate=z,P.directionalLightShadows.needsUpdate=z,P.pointLights.needsUpdate=z,P.pointLightShadows.needsUpdate=z,P.spotLights.needsUpdate=z,P.spotLightShadows.needsUpdate=z,P.rectAreaLights.needsUpdate=z,P.hemisphereLights.needsUpdate=z}function Lf(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,z,W){const X=Ie.get(P);X.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ie.get(P.texture).__webglTexture=z,Ie.get(P.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,z){const W=Ie.get(P);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Nf=U.createFramebuffer();this.setRenderTarget=function(P,z=0,W=0){b=P,E=z,T=W;let X=!0,V=null,se=!1,de=!1;if(P){const ge=Ie.get(P);if(ge.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(ge.__webglFramebuffer===void 0)Xe.setupRenderTarget(P);else if(ge.__hasExternalTextures)Xe.rebindTextures(P,Ie.get(P.texture).__webglTexture,Ie.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ce=P.depthTexture;if(ge.__boundDepthTexture!==Ce){if(Ce!==null&&Ie.has(Ce)&&(P.width!==Ce.image.width||P.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(P)}}const Ue=P.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(de=!0);const Oe=Ie.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?V=Oe[z][W]:V=Oe[z],se=!0):P.samples>0&&Xe.useMultisampledRTT(P)===!1?V=Ie.get(P).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[W]:V=Oe,D.copy(P.viewport),N.copy(P.scissor),B=P.scissorTest}else D.copy(fe).multiplyScalar(J).floor(),N.copy(ze).multiplyScalar(J).floor(),B=Ve;if(W!==0&&(V=Nf),ve.bindFramebuffer(U.FRAMEBUFFER,V)&&X&&ve.drawBuffers(P,V),ve.viewport(D),ve.scissor(N),ve.setScissorTest(B),se){const ge=Ie.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge.__webglTexture,W)}else if(de){const ge=z;for(let Ue=0;Ue<P.textures.length;Ue++){const Oe=Ie.get(P.textures[Ue]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,W,ge)}}else if(P!==null&&W!==0){const ge=Ie.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ge.__webglTexture,W)}C=-1},this.readRenderTargetPixels=function(P,z,W,X,V,se,de,be=0){if(!(P&&P.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){ve.bindFramebuffer(U.FRAMEBUFFER,ge);try{const Ue=P.textures[be],Oe=Ue.format,Ce=Ue.type;if(!nt.textureFormatReadable(Oe)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ce)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=P.width-X&&W>=0&&W<=P.height-V&&(P.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),U.readPixels(z,W,X,V,Ge.convert(Oe),Ge.convert(Ce),se))}finally{const Ue=b!==null?Ie.get(b).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(P,z,W,X,V,se,de,be=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge)if(z>=0&&z<=P.width-X&&W>=0&&W<=P.height-V){ve.bindFramebuffer(U.FRAMEBUFFER,ge);const Ue=P.textures[be],Oe=Ue.format,Ce=Ue.type;if(!nt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.bufferData(U.PIXEL_PACK_BUFFER,se.byteLength,U.STREAM_READ),P.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),U.readPixels(z,W,X,V,Ge.convert(Oe),Ge.convert(Ce),0);const at=b!==null?Ie.get(b).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,at);const gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Rd(U,gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,se),U.deleteBuffer($e),U.deleteSync(gt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,z=null,W=0){const X=Math.pow(2,-W),V=Math.floor(P.image.width*X),se=Math.floor(P.image.height*X),de=z!==null?z.x:0,be=z!==null?z.y:0;Xe.setTexture2D(P,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,de,be,V,se),ve.unbindTexture()};const Uf=U.createFramebuffer(),Ff=U.createFramebuffer();this.copyTextureToTexture=function(P,z,W=null,X=null,V=0,se=null){se===null&&(V!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=V,V=0):se=0);let de,be,ge,Ue,Oe,Ce,$e,at,gt;const _t=P.isCompressedTexture?P.mipmaps[se]:P.image;if(W!==null)de=W.max.x-W.min.x,be=W.max.y-W.min.y,ge=W.isBox3?W.max.z-W.min.z:1,Ue=W.min.x,Oe=W.min.y,Ce=W.isBox3?W.min.z:0;else{const hn=Math.pow(2,-V);de=Math.floor(_t.width*hn),be=Math.floor(_t.height*hn),P.isDataArrayTexture?ge=_t.depth:P.isData3DTexture?ge=Math.floor(_t.depth*hn):ge=1,Ue=0,Oe=0,Ce=0}X!==null?($e=X.x,at=X.y,gt=X.z):($e=0,at=0,gt=0);const ut=Ge.convert(z.format),Le=Ge.convert(z.type);let pt;z.isData3DTexture?(Xe.setTexture3D(z,0),pt=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Xe.setTexture2DArray(z,0),pt=U.TEXTURE_2D_ARRAY):(Xe.setTexture2D(z,0),pt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Qe=U.getParameter(U.UNPACK_ROW_LENGTH),nn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xi=U.getParameter(U.UNPACK_SKIP_PIXELS),sn=U.getParameter(U.UNPACK_SKIP_ROWS),Hs=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),U.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ce);const mt=P.isDataArrayTexture||P.isData3DTexture,Qt=z.isDataArrayTexture||z.isData3DTexture;if(P.isDepthTexture){const hn=Ie.get(P),Xt=Ie.get(z),en=Ie.get(hn.__renderTarget),Za=Ie.get(Xt.__renderTarget);ve.bindFramebuffer(U.READ_FRAMEBUFFER,en.__webglFramebuffer),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,Za.__webglFramebuffer);for(let wi=0;wi<ge;wi++)mt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(P).__webglTexture,V,Ce+wi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(z).__webglTexture,se,gt+wi)),U.blitFramebuffer(Ue,Oe,de,be,$e,at,de,be,U.DEPTH_BUFFER_BIT,U.NEAREST);ve.bindFramebuffer(U.READ_FRAMEBUFFER,null),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||P.isRenderTargetTexture||Ie.has(P)){const hn=Ie.get(P),Xt=Ie.get(z);ve.bindFramebuffer(U.READ_FRAMEBUFFER,Uf),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ff);for(let en=0;en<ge;en++)mt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hn.__webglTexture,V,Ce+en):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hn.__webglTexture,V),Qt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.__webglTexture,se,gt+en):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xt.__webglTexture,se),V!==0?U.blitFramebuffer(Ue,Oe,de,be,$e,at,de,be,U.COLOR_BUFFER_BIT,U.NEAREST):Qt?U.copyTexSubImage3D(pt,se,$e,at,gt+en,Ue,Oe,de,be):U.copyTexSubImage2D(pt,se,$e,at,Ue,Oe,de,be);ve.bindFramebuffer(U.READ_FRAMEBUFFER,null),ve.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Qt?P.isDataTexture||P.isData3DTexture?U.texSubImage3D(pt,se,$e,at,gt,de,be,ge,ut,Le,_t.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(pt,se,$e,at,gt,de,be,ge,ut,_t.data):U.texSubImage3D(pt,se,$e,at,gt,de,be,ge,ut,Le,_t):P.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,se,$e,at,de,be,ut,Le,_t.data):P.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,se,$e,at,_t.width,_t.height,ut,_t.data):U.texSubImage2D(U.TEXTURE_2D,se,$e,at,de,be,ut,Le,_t);U.pixelStorei(U.UNPACK_ROW_LENGTH,Qe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xi),U.pixelStorei(U.UNPACK_SKIP_ROWS,sn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Hs),se===0&&z.generateMipmaps&&U.generateMipmap(pt),ve.unbindTexture()},this.initRenderTarget=function(P){Ie.get(P).__webglFramebuffer===void 0&&Xe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Xe.setTextureCube(P,0):P.isData3DTexture?Xe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Xe.setTexture2DArray(P,0):Xe.setTexture2D(P,0),ve.unbindTexture()},this.resetState=function(){E=0,T=0,b=null,ve.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const ih={type:"change"},El={type:"start"},xf={type:"end"},ia=new Wi,sh=new kn,e_=Math.cos(70*Wt.DEG2RAD),wt=new I,tn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fo=1e-6;class t_ extends fm{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new cn,this._lastTargetPosition=new I,this._quat=new cn().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Iu,this._sphericalDelta=new Iu,this._scale=1,this._panOffset=new I,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new I,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=i_.bind(this),this._onPointerDown=n_.bind(this),this._onPointerUp=s_.bind(this),this._onContextMenu=h_.bind(this),this._onMouseWheel=o_.bind(this),this._onKeyDown=c_.bind(this),this._onTouchStart=l_.bind(this),this._onTouchMove=u_.bind(this),this._onMouseDown=r_.bind(this),this._onMouseMove=a_.bind(this),this._interceptControlDown=f_.bind(this),this._interceptControlUp=d_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ih),this.update(),this.state=ct.NONE}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=wt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ia.origin.copy(this.object.position),ia.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ia.direction))<e_?this.object.lookAt(this.target):(sh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ia.intersectPlane(sh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fo||this._lastTargetPosition.distanceToSquared(this.target)>Fo?(this.dispatchEvent(ih),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;wt.copy(i).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function n_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function i_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function s_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xf),this.state=ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function r_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ct.DOLLY;break;case Ts.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ct.ROTATE}break;case Ts.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(El)}function a_(s){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function o_(s){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(s.preventDefault(),this.dispatchEvent(El),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(xf))}function c_(s){this.enabled!==!1&&this._handleKeyDown(s)}function l_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ct.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ct.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(El)}function u_(s){switch(this._trackPointer(s),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ct.NONE}}function h_(s){this.enabled!==!1&&s.preventDefault()}function f_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function p_(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Lt;let l=0;for(let u=0;u<s.length;++u){const h=s[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0;const h=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let x=0;x<d.count;++x)h.push(d.getX(x)+u);u+=s[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=rh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<a[u].length;++_)d.push(a[u][_][f]);const x=rh(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(x)}}return c}function rh(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new yt(a,t,n);let c=0;for(let l=0;l<s.length;++l){const u=s[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let f=0,d=u.count;f<d;f++)for(let x=0;x<t;x++){const _=u.getComponent(f,x);o.setComponent(f+h,x,_)}}else a.set(u.array,c);c+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function m_(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let a=0;const o=Object.keys(s.attributes),c={},l={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let g=0,v=o.length;g<v;g++){const y=o[g],M=s.attributes[y];c[y]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);const S=s.morphAttributes[y];S&&(l[y]||(l[y]=[]),S.forEach((A,E)=>{const T=new A.array.constructor(A.count*A.itemSize);l[y][E]=new A.constructor(T,A.itemSize,A.normalized)}))}const d=e*.5,x=Math.log10(1/e),_=Math.pow(10,x),m=d*_;for(let g=0;g<r;g++){const v=n?n.getX(g):g;let y="";for(let M=0,S=o.length;M<S;M++){const A=o[M],E=s.getAttribute(A),T=E.itemSize;for(let b=0;b<T;b++)y+=`${~~(E[h[b]](v)*_+m)},`}if(y in t)u.push(t[y]);else{for(let M=0,S=o.length;M<S;M++){const A=o[M],E=s.getAttribute(A),T=s.morphAttributes[A],b=E.itemSize,C=c[A],w=l[A];for(let D=0;D<b;D++){const N=h[D],B=f[D];if(C[B](a,E[N](v)),T)for(let k=0,H=T.length;k<H;k++)w[k][B](a,T[k][N](v))}}t[y]=a,u.push(a),a++}}const p=s.clone();for(const g in s.attributes){const v=c[g];if(p.setAttribute(g,new v.constructor(v.array.slice(0,a*v.itemSize),v.itemSize,v.normalized)),g in l)for(let y=0;y<l[g].length;y++){const M=l[g][y];p.morphAttributes[g][y]=new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(u),p}function ah(s,e){if(e===xd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===kc||e===qh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===kc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class x_ extends Vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new b_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new U_(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=hr.extractUrlBase(e);a=hr.resolveURL(l,this.path)}else a=hr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new cf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gf){try{a[Ze.KHR_BINARY_GLTF]=new F_(e)}catch(h){i&&i(h);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new K_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:a[h]=new v_;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[h]=new B_(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[h]=new O_;break;case Ze.KHR_MESH_QUANTIZATION:a[h]=new k_;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function g_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class __{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Re(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],$t);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new uf(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qp(u),l.distance=h;break;case"spot":l=new Wp(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Bn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class v_{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return zi}extendParams(e,t,n){const i=[];e.color=new Re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],$t),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(i)}}class y_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class b_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(o,o)}return Promise.all(r)}}class M_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class S_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class T_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],$t)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ut)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class A_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class E_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(o[0],o[1],o[2],$t),Promise.all(r)}}class w_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class R_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(o[0],o[1],o[2],$t),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ut)),Promise.all(r)}}class C_{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class P_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class I_{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class D_{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class L_{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class N_{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class U_{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==pn.TRIANGLES&&l.mode!==pn.TRIANGLE_STRIP&&l.mode!==pn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const x of h){const _=new Pe,m=new I,p=new cn,g=new I(1,1,1),v=new vp(x.geometry,x.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&g.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,_.compose(m,p,g));for(const y in c)if(y==="_COLOR_0"){const M=c[y];v.instanceColor=new Vi(M.array,M.itemSize,M.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,c[y]);ft.prototype.copy.call(v,x),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const gf="glTF",Qs=12,oh={JSON:1313821514,BIN:5130562};class F_{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Qs,r=new DataView(e,Qs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===oh.JSON){const l=new Uint8Array(e,Qs+a,o);this.content=n.decode(l)}else if(c===oh.BIN){const l=Qs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class B_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Wc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Wc[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ws[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const x in d.attributes){const _=d.attributes[x],m=c[x];m!==void 0&&(_.normalized=m)}h(d)},o,l,$t,f)})})}}class O_{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class k_{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class _f extends Ar{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,x=e*l,_=x-l,m=-2*d+3*f,p=d-f,g=1-m,v=p-f+h;for(let y=0;y!==o;y++){const M=a[_+y+o],S=a[_+y+c]*u,A=a[x+y+o],E=a[x+y]*u;r[y]=g*M+v*S+m*A+p*E}return r}}const z_=new cn;class V_ extends _f{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return z_.fromArray(r).normalize().toArray(r),r}}const pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ch={9728:Zt,9729:Ft,9984:kh,9985:Ma,9986:ar,9987:ni},lh={33071:En,33648:Pa,10497:Mi},Bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},G_={CUBICSPLINE:void 0,LINEAR:_r,STEP:gr},Oo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function H_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Os({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pn})),s.DefaultMaterial}function Ni(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function W_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function X_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function q_(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ko(t.attributes):e=s.indices+":"+ko(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ko(s.targets[n]);return e}function ko(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Xc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Y_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const j_=new Pe;class K_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new g_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new lf(this.options.manager):this.textureLoader=new Kp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ni(r,o,i),Bn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(hr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Bo[i.type],o=ws[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new yt(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Bo[i.type],l=ws[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(g);v||(_=new l(o,p*d,i.count*d/u),v=new mp(_,d/u),t.cache.add(g,v)),m=new pl(v,c,f%d/u,x)}else o===null?_=new l(i.count*c):_=new l(o,f,i.count*c),m=new yt(_,c,x);if(i.sparse!==void 0){const p=Bo.SCALAR,g=ws[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new g(a[1],v,i.sparse.count*p),S=new l(a[2],y,i.sparse.count*c);o!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,E=M.length;A<E;A++){const T=M[A];if(m.setX(T,S[A*c]),c>=2&&m.setY(T,S[A*c+1]),c>=3&&m.setZ(T,S[A*c+2]),c>=4&&m.setW(T,S[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=ch[f.magFilter]||Ft,u.minFilter=ch[f.minFilter]||ni,u.wrapS=lh[f.wrapS]||Mi,u.wrapT=lh[f.wrapT]||Mi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Zt&&u.minFilter!==Ft,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let x=f;t.isImageBitmapLoader===!0&&(x=function(_){const m=new Ot(_);m.needsUpdate=!0,f(m)}),t.load(hr.resolveURL(h,r.path),x,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Bn(h,a),h.userData.mimeType=a.mimeType||Y_(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new nf,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new tf,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Os}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const h=i[Ze.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],$t),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Ut)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=kt);const u=r.alphaMode||Oo.OPAQUE;if(u===Oo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Oo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==zi&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==zi&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==zi){const h=r.emissiveFactor;o.emissive=new Re().setRGB(h[0],h[1],h[2],$t)}return r.emissiveTexture!==void 0&&a!==zi&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Bn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ni(i,h,r),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return uh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=q_(l),h=i[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=uh(new Lt,l,t),i[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?H_(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,x=u.length;d<x;d++){const _=u[d],m=a[d];let p;const g=l[d];if(m.mode===pn.TRIANGLES||m.mode===pn.TRIANGLE_STRIP||m.mode===pn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ml(_,g):new At(_,g),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===pn.TRIANGLE_STRIP?p.geometry=ah(p.geometry,qh):m.mode===pn.TRIANGLE_FAN&&(p.geometry=ah(p.geometry,kc));else if(m.mode===pn.LINES)p=new Sp(_,g);else if(m.mode===pn.LINE_STRIP)p=new _l(_,g);else if(m.mode===pn.LINE_LOOP)p=new Tp(_,g);else if(m.mode===pn.POINTS)p=new Ap(_,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&X_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Bn(p,r),m.extensions&&Ni(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,x=h.length;d<x;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ni(i,h[0],r),h[0];const f=new Gn;r.extensions&&Ni(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,x=h.length;d<x;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Wt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Sl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const f=new Pe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ha(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],x=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[x.input]:x.input,g=i.parameters!==void 0?i.parameters[x.output]:x.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",g)),l.push(x),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],x=h[2],_=h[3],m=h[4],p=[];for(let v=0,y=f.length;v<y;v++){const M=f[v],S=d[v],A=x[v],E=_[v],T=m[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const b=n._createAnimationTracks(M,S,A,E,T);if(b)for(let C=0;C<b.length;C++)p.push(b[C])}const g=new Gc(r,void 0,p);return Bn(g,i),g})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,j_)});for(let d=0,x=h.length;d<x;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new xl:l.length>1?u=new Gn:l.length===1?u=l[0]:u=new ft,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Bn(u,r),r.extensions&&Ni(n,u,r),r.matrix!==void 0){const h=new Pe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Gn;n.name&&(r.name=i.createUniqueName(n.name)),Bn(r,n),n.extensions&&Ni(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Cn||f instanceof Ot)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];pi[r.path]===pi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(pi[r.path]){case pi.weights:l=Ls;break;case pi.rotation:l=Ns;break;case pi.translation:case pi.scale:l=Us;break;default:switch(n.itemSize){case 1:l=Ls;break;case 2:case 3:default:l=Us;break}break}const u=i.interpolation!==void 0?G_[i.interpolation]:_r,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const x=new l(c[f]+"."+pi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Xc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ns?V_:_f;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Z_(s,e,t){const n=e.attributes,i=new Et;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){const u=Xc(ws[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,c=new I;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){const _=Xc(ws[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Ln;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function uh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Wc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Je.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Bn(s,e),Z_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?W_(s,e.targets,t):s})}const xt=new Rt,sa=new I,hh=new pe,fh=new pe,dh=new pe;class $_{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,i=e?e.count/3:t.count/3,r=new Float32Array(i);for(let c=0;c<i;c++){let l=1,u=3*c,h=3*c+1,f=3*c+2;e&&(u=e.getX(u),h=e.getX(h),f=e.getX(f)),n&&(l=n.getX(u)+n.getX(h)+n.getX(f)),xt.a.fromBufferAttribute(t,u),xt.b.fromBufferAttribute(t,h),xt.c.fromBufferAttribute(t,f),l*=xt.getArea(),r[c]=l}const a=new Float32Array(i);let o=0;for(let c=0;c<i;c++)o+=r[c],a[c]=o;return this.distribution=a,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,i){const r=this._sampleFaceIndex();return this._sampleFace(r,e,t,n,i)}_sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){const t=this.distribution;let n=0,i=t.length-1,r=-1;for(;n<=i;){const a=Math.ceil((n+i)/2);if(a===0||t[a-1]<=e&&t[a]>e){r=a;break}else e<t[a]?i=a-1:n=a+1}return r}_sampleFace(e,t,n,i,r){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);const c=this.indexAttribute;let l=e*3,u=e*3+1,h=e*3+2;return c&&(l=c.getX(l),u=c.getX(u),h=c.getX(h)),xt.a.fromBufferAttribute(this.positionAttribute,l),xt.b.fromBufferAttribute(this.positionAttribute,u),xt.c.fromBufferAttribute(this.positionAttribute,h),t.set(0,0,0).addScaledVector(xt.a,a).addScaledVector(xt.b,o).addScaledVector(xt.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(xt.a.fromBufferAttribute(this.normalAttribute,l),xt.b.fromBufferAttribute(this.normalAttribute,u),xt.c.fromBufferAttribute(this.normalAttribute,h),n.set(0,0,0).addScaledVector(xt.a,a).addScaledVector(xt.b,o).addScaledVector(xt.c,1-(a+o)).normalize()):xt.getNormal(n)),i!==void 0&&this.colorAttribute!==void 0&&(xt.a.fromBufferAttribute(this.colorAttribute,l),xt.b.fromBufferAttribute(this.colorAttribute,u),xt.c.fromBufferAttribute(this.colorAttribute,h),sa.set(0,0,0).addScaledVector(xt.a,a).addScaledVector(xt.b,o).addScaledVector(xt.c,1-(a+o)),i.r=sa.x,i.g=sa.y,i.b=sa.z),r!==void 0&&this.uvAttribute!==void 0&&(hh.fromBufferAttribute(this.uvAttribute,l),fh.fromBufferAttribute(this.uvAttribute,u),dh.fromBufferAttribute(this.uvAttribute,h),r.set(0,0).addScaledVector(hh,a).addScaledVector(fh,o).addScaledVector(dh,1-(a+o))),this}}const vf=`
uniform float uInkTime;
uniform float uInkFlow;
vec3 inkPhases(vec3 p){
  float phase=fract(uInkTime*.12+noise3(p*3.0+vec3(7.1,2.3,4.7))*.23);
  return vec3(phase,fract(phase+.5),1.0-abs(phase*2.0-1.0));
}
vec3 inkFlowPoint(vec3 p,vec3 normal,vec3 preferred,float phase){
  vec3 n=normalize(normal);
  vec3 tangent=preferred-n*dot(preferred,n);
  vec3 curl=cross(n,vec3(sin(p.y*11.0+1.7),cos(p.z*9.0+3.1),sin(p.x*10.0+2.4)));
  vec3 velocity=tangent*.8+curl*.32;
  velocity/=max(length(velocity),.25);
  return p-velocity*(phase-.5)*uInkFlow*.28;
}
float movingInkFbm(vec3 p,vec3 normal,vec3 preferred,vec3 frequency,vec3 offset){
  if(uInkFlow<.0001)return fbm(p*frequency+offset);
  vec3 phases=inkPhases(p);
  float a=fbm(inkFlowPoint(p,normal,preferred,phases.x)*frequency+offset);
  float b=fbm(inkFlowPoint(p,normal,preferred,phases.y)*frequency+offset);
  return mix(b,a,phases.z);
}
`;function J_(s,e){const t=s.attributes.position,n=s.attributes.normal,i=t.count,r=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i*3),c=new Float32Array(i*3),l=new I,u=new I,h=new I,f=new I;for(let m=0;m<i;m++)l.fromBufferAttribute(n,m).normalize(),u.copy(e).addScaledVector(l,-l.dot(e)),u.lengthSq()<.025&&(f.set(Math.abs(l.y)<.9?0:1,Math.abs(l.y)<.9?1:0,0),u.crossVectors(l,f)),u.normalize(),h.crossVectors(l,u).normalize(),u.toArray(r,m*3),h.toArray(a,m*3);function d(m,p){const g=m*3,v=t.getX(p)-t.getX(m),y=t.getY(p)-t.getY(m),M=t.getZ(p)-t.getZ(m),S=v*v+y*y+M*M;if(S<1e-16)return;const A=n.getX(p)-n.getX(m),E=n.getY(p)-n.getY(m),T=n.getZ(p)-n.getZ(m),b=v*r[g]+y*r[g+1]+M*r[g+2],C=v*a[g]+y*a[g+1]+M*a[g+2],w=A*r[g]+E*r[g+1]+T*r[g+2],D=A*a[g]+E*a[g+1]+T*a[g+2];o[g]+=w*b/S,o[g+1]+=(w*C+D*b)*.5/S,o[g+2]+=D*C/S}const x=s.index,_=x?x.count:i;for(let m=0;m<_;m+=3){const p=x?x.getX(m):m,g=x?x.getX(m+1):m+1,v=x?x.getX(m+2):m+2;d(p,g),d(g,p),d(p,v),d(v,p),d(g,v),d(v,g)}for(let m=0;m<i;m++){const p=m*3,g=o[p],v=o[p+1],y=o[p+2],M=Math.sqrt((g-y)**2*.25+v*v),S=(g+y)*.5,A=S+M,E=S-M;let T=Math.atan2(2*v,g-y)*.5;Math.abs(E)<Math.abs(A)&&(T+=Math.PI*.5);const b=Wt.clamp((Math.max(Math.abs(A),Math.abs(E))-Math.min(Math.abs(A),Math.abs(E)))/(Math.abs(A)+Math.abs(E)+.001),0,1);u.fromArray(r,p),h.fromArray(a,p),l.copy(u).multiplyScalar(Math.cos(T)).addScaledVector(h,Math.sin(T)),l.dot(u)<0&&l.negate(),u.lerp(l,b*.82).normalize().toArray(c,p)}return c}const Q_=`
attribute vec3 aAnchor;
attribute vec3 aNormal;
attribute vec3 aFlow;
attribute vec3 aSize;
attribute vec4 aGeometry;
varying vec3 vAnchor;
varying vec3 vRestAnchor;
varying vec3 vRestNormal;
varying vec3 vRestFlow;
varying vec3 vSurfaceNormal;
varying vec3 vFlow;
varying vec3 vSize;
varying vec3 vGeometry;
varying float vReserve;
uniform float uScale;
uniform float uCoarseRatio;
uniform float uInkFlow;
#include <skinning_pars_vertex>
#ifdef USE_SKINNING
attribute vec4 aSkinIndexB;
attribute vec4 aSkinWeightB;
attribute vec4 aSkinIndexC;
attribute vec4 aSkinWeightC;
attribute vec3 aDeltaA;
attribute vec3 aDeltaB;
#endif
void main(){
  vec3 anchor=aAnchor,surfaceNormal=aNormal,tangent=normalize(aFlow);
  vec3 side=normalize(cross(aNormal,tangent));
  vec2 stretch=vec2(1.0);
  vRestAnchor=aAnchor;vRestNormal=aNormal;vRestFlow=aFlow;
  #ifdef USE_SKINNING
    #include <skinbase_vertex>
    mat4 skinA=boneMatX*skinWeight.x+boneMatY*skinWeight.y+boneMatZ*skinWeight.z+boneMatW*skinWeight.w;
    mat4 skinB=getBoneMatrix(aSkinIndexB.x)*aSkinWeightB.x+getBoneMatrix(aSkinIndexB.y)*aSkinWeightB.y+getBoneMatrix(aSkinIndexB.z)*aSkinWeightB.z+getBoneMatrix(aSkinIndexB.w)*aSkinWeightB.w;
    mat4 skinC=getBoneMatrix(aSkinIndexC.x)*aSkinWeightC.x+getBoneMatrix(aSkinIndexC.y)*aSkinWeightC.y+getBoneMatrix(aSkinIndexC.z)*aSkinWeightC.z+getBoneMatrix(aSkinIndexC.w)*aSkinWeightC.w;
    mat4 deform=bindMatrixInverse*(skinA+skinB+skinC)*bindMatrix;
    // Each vertex keeps its own four weights, multiplied by the anchor's
    // triangle barycentric coordinate. No bone influences are discarded.
    float baryA=dot(skinWeight,vec4(1.0)),baryB=dot(aSkinWeightB,vec4(1.0)),baryC=dot(aSkinWeightC,vec4(1.0));
    vec3 deltaC=-(aDeltaA*baryA+aDeltaB*baryB)/max(baryC,.0000001);
    anchor=(bindMatrixInverse*(skinA*bindMatrix*vec4(aAnchor+aDeltaA,1.0)+skinB*bindMatrix*vec4(aAnchor+aDeltaB,1.0)+skinC*bindMatrix*vec4(aAnchor+deltaC,1.0))).xyz;
    vec3 longAxis=mat3(deform)*tangent,wideAxis=mat3(deform)*side;
    stretch=vec2(length(longAxis),length(wideAxis));
    surfaceNormal=normalize(mat3(deform)*aNormal);
    tangent=normalize(longAxis-surfaceNormal*dot(longAxis,surfaceNormal));
    side=normalize(cross(surfaceNormal,tangent));
  #endif
  float factor=fract(aSize.z*.731)<uCoarseRatio?2.8:1.0;
  vAnchor=anchor;vSurfaceNormal=surfaceNormal;vFlow=tangent;vSize=vec3(aSize.xy*factor*stretch,aSize.z);
  vGeometry=aGeometry.xyz;
  vReserve=aGeometry.w;
  // Rasterize a conservative screen rectangle around the fixed 3D brush
  // volume; the fragment shader still evaluates the real surface position.
  vec4 center=modelViewMatrix*vec4(anchor,1.0);
  vec3 e1=mat3(modelViewMatrix)*(tangent*vSize.x/uScale);
  vec3 e2=mat3(modelViewMatrix)*(side*vSize.y*1.3/uScale);
  vec3 e3=mat3(modelViewMatrix)*(surfaceNormal*vSize.y*.85/uScale);
  vec3 extent=(abs(e1)+abs(e2))*(1.0+uInkFlow*.65)+abs(e3);
  vec2 bounds=(extent.xy*abs(center.z)+abs(center.xy)*extent.z)/max(abs(center.z)-extent.z,.01);
  gl_Position=projectionMatrix*vec4(center.xy+position.xy*bounds,center.z,1.0);
}`;class ev{constructor(e,{shared:t,noise:n,flow:i,analysis:r,objectSize:a}){this.source=e;let o=7919;const c=()=>(o=1664525*o+1013904223>>>0,o/4294967296),l=e.geometry.clone();l.setAttribute("color",new lt(J_(e.geometry,i),3));const u=new $_(new At(l)).setRandomGenerator(c).build(),h=u.distribution[u.distribution.length-1]/(a*a),f=Math.round(Wt.clamp(h*1400,180,4200)),d=new Float32Array(f*3),x=new Float32Array(f*3),_=new Float32Array(f*3),m=new Float32Array(f*3),p=new Float32Array(f*4),g=new Float32Array(f),v=e.isSkinnedMesh?[0,1,2].map(()=>new Uint16Array(f*4)):null,y=e.isSkinnedMesh?[0,1,2].map(()=>new Float32Array(f*4)):null,M=e.isSkinnedMesh?[0,1,2].map(()=>new Float32Array(f*3)):null;this.skinning={enabled:!!e.isSkinnedMesh,interpolation:"exact triangle barycentric, all 12 vertex influences",maximumDiscardedWeight:0};const S=new I,A=new I,E=new I,T=new Re,b=new I,C=new I,w={point:new I,distance:0,faceIndex:-1},D=new I,N=new Rt,B=e.geometry,k=B.index;for(let O=0;O<f;O++){u.sample(S,A,T),A.normalize(),E.set(T.r,T.g,T.b),E.addScaledVector(A,-E.dot(A)),E.lengthSq()<.025&&(b.set(Math.abs(A.y)<.9?0:1,Math.abs(A.y)<.9?1:0,0),E.crossVectors(A,b)),E.normalize(),C.crossVectors(A,E).normalize(),E.addScaledVector(C,(c()-.5)*.55).normalize(),S.toArray(d,O*3),A.toArray(x,O*3),E.toArray(_,O*3);const j=(.028+c()*.052)*a;m.set([j,j*(.2+c()*.22),c()*100],O*3),r.bvh.closestPointToPoint(S,w);const J=w.faceIndex*3,ne=[0,1,2].map(fe=>k?k.getX(J+fe):J+fe);if(N.a.fromBufferAttribute(B.attributes.position,ne[0]),N.b.fromBufferAttribute(B.attributes.position,ne[1]),N.c.fromBufferAttribute(B.attributes.position,ne[2]),N.getBarycoord(S,D),v)for(let fe=0;fe<3;fe++){const ze=ne[fe],Ve=D.getComponent(fe);M[fe].set([B.attributes.position.getX(ze)-S.x,B.attributes.position.getY(ze)-S.y,B.attributes.position.getZ(ze)-S.z],O*3);for(let q=0;q<4;q++)v[fe][O*4+q]=B.attributes.skinIndex.getComponent(ze,q),y[fe][O*4+q]=B.attributes.skinWeight.getComponent(ze,q)*Ve}for(let fe=0;fe<3;fe++)p[O*4+fe]=r.attribute.array[ne[0]*3+fe]*D.x+r.attribute.array[ne[1]*3+fe]*D.y+r.attribute.array[ne[2]*3+fe]*D.z;const Se=B.attributes.inkGuides;g[O]=Se.getY(ne[0])*D.x+Se.getY(ne[1])*D.y+Se.getY(ne[2])*D.z,p[O*4+3]=g[O]}l.dispose();const H=new jp;H.setAttribute("position",new lt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),H.setIndex([0,1,2,0,2,3]),H.instanceCount=f;for(const[O,j]of Object.entries({aAnchor:d,aNormal:x,aFlow:_,aSize:m,aGeometry:p}))H.setAttribute(O,new Vi(j,O==="aGeometry"?4:3));if(v)for(let O=0;O<3;O++)H.setAttribute(["skinIndex","aSkinIndexB","aSkinIndexC"][O],new Vi(v[O],4)),H.setAttribute(["skinWeight","aSkinWeightB","aSkinWeightC"][O],new Vi(y[O],4)),O<2&&H.setAttribute(["aDeltaA","aDeltaB"][O],new Vi(M[O],3));this.material=new un({uniforms:{...t,tSurfaceDepth:{value:null},uViewport:{value:new pe(1,1)},uInverseProjection:{value:new Pe},uInverseView:{value:new Pe},uWorldToModel:{value:new Pe}},vertexShader:Q_,fragmentShader:`
        varying vec3 vAnchor;
        varying vec3 vRestAnchor;
        varying vec3 vRestNormal;
        varying vec3 vRestFlow;
        varying vec3 vSurfaceNormal;
        varying vec3 vFlow;
        varying vec3 vSize;
        varying vec3 vGeometry;
        varying float vReserve;
        uniform sampler2D tSurfaceDepth;
        uniform vec2 uViewport;
        uniform mat4 uInverseProjection;
        uniform mat4 uInverseView;
        uniform mat4 uWorldToModel;
        uniform vec3 uLightView;
        uniform float uDensity;
        uniform float uDry;
        uniform float uScale;
        uniform float uGranulation;
        uniform sampler2D uBrushAtlas;
        uniform vec2 uAtlasGrid;
        uniform float uBrushMix;
        uniform float uStrokeStrength;
        uniform float uInkStorageScale;
        uniform float uTonalContrast;
        uniform float uTonalSoftness;
        uniform vec2 uToneRange;
        uniform float uTwoSidedInk;
        uniform float uGeometryInfluence;
        uniform vec3 uCenter;
        uniform float uObjectScale;
        uniform vec3 uReserveDirection;
        uniform float uReserveStrength;
        ${n}
        ${vf}
        float brushFootprint(vec2 q,float seed){
          if(any(greaterThan(abs(q),vec2(1.0))))return 0.0;
          float taper=pow(max(0.0,1.0-q.x*q.x),.38);
          float rough=(noise3(vec3(q*vec2(11,19),seed))-.5)*.16;
          float footprint=(1.0-smoothstep(taper-.15,taper+.05,abs(q.y)+rough))*(1.0-smoothstep(.78,1.0,abs(q.x)));
          if(uBrushMix>.001){
            float slot=mod(floor(seed*23.17),uAtlasGrid.x*uAtlasGrid.y);
            vec2 tile=vec2(mod(slot,uAtlasGrid.x),floor(slot/uAtlasGrid.x));
            float mask=texture2D(uBrushAtlas,(tile+clamp(q*.5+.5,vec2(.015),vec2(.985)))/uAtlasGrid).r;
            footprint=mix(footprint,mask,uBrushMix);
          }
          return footprint;
        }
        vec2 brushDeposit(vec2 q,float seed){
          q.y+=(noise3(vec3(q.x*1.7,seed,3.7))-.5)*.28;
          float footprint=brushFootprint(q,seed);
          float fiber=noise3(vec3(q*vec2(1.5,42),seed));
          float pressure=.76+.24*noise3(vec3(q*vec2(2,5),seed+3.7));
          float bristles=smoothstep(.27,.59,fiber);
          float dryCoverage=mix(1.0,bristles,uDry*.90);
          float ragged=noise3(vec3(q*vec2(10,25),seed+9.4));
          float transition=max(.015,uTonalSoftness);
          float mark=smoothstep(.07+uDry*.07,.24+transition,footprint*pressure+(ragged-.5)*.08);
          float coverage=mix(footprint,mark,uTonalContrast)*dryCoverage;
          float pooling=.72+.28*noise3(vec3(q*vec2(5,9),seed));
          return vec2(coverage*pooling,footprint);
        }
        void main(){
          vec2 uv=gl_FragCoord.xy/uViewport;
          float depth=texture2D(tSurfaceDepth,uv).r;
          if(depth>.999999)discard;
          vec4 view=uInverseProjection*vec4(uv*2.0-1.0,depth*2.0-1.0,1.0);
          view/=view.w;
          vec3 surface=(uWorldToModel*uInverseView*view).xyz;
          vec3 delta=surface-vAnchor;
          vec3 across=normalize(cross(vSurfaceNormal,vFlow));
          float length=vSize.x/uScale,width=vSize.y/uScale;
          if(abs(dot(delta,vSurfaceNormal))>width*.85)discard;
          vec2 q=vec2(dot(delta,vFlow)/length,dot(delta,across)/width);
          float seed=vSize.z;
          vec3 massPosition=(vRestAnchor-uCenter)*uObjectScale;
          vec2 brush;
          if(uInkFlow<.0001)brush=brushDeposit(q,seed);
          else{
            vec3 phases=inkPhases(massPosition);
            vec2 shift=vec2(uInkFlow,uInkFlow*.12);
            vec2 a=brushDeposit(q-shift*(phases.x-.5),seed);
            vec2 b=brushDeposit(q-shift*(phases.y-.5),seed);
            brush=mix(b,a,phases.z);
          }
          if(brush.y<.001)discard;
          float orientation=dot(normalize(vRestNormal),-normalize(uReserveDirection));
          float dorsal=mix(orientation*.5+.5,abs(orientation),uTwoSidedInk);
          float field=mix(uToneRange.x,uToneRange.y,pow(dorsal,1.1));
          field+=(vGeometry.z*.12+clamp(vGeometry.x/.12,0.0,1.0)*.16)*uGeometryInfluence;
          float massNoise=movingInkFbm(massPosition,normalize(vRestNormal),normalize(vRestFlow),vec3(5,8,5),vec3(2.7,8.3,1.9));
          field+=(massNoise-.5)*.52;
          float strokeChoice=hash(vec3(seed,18.7,4.1));
          // A stroke is dipped once: coherent pale wash or concentrated ink,
          // with short transitions. Do not quantize the final rendered image.
          float transition=max(.015,uTonalSoftness);
          float loaded=smoothstep(.30-transition,.44+transition,field);
          float load=mix(.07+field*.28,.06+loaded*(.72+strokeChoice*.28),uTonalContrast);
          float pigment=load*uDensity*uStrokeStrength;
          float reserve=smoothstep(.05,.85,dot(normalize(vRestNormal),normalize(uReserveDirection)));
          pigment*=1.0-reserve*uReserveStrength;
          float deposit=brush.x*pigment*(1.0-vReserve);
          float lift=brush.y*smoothstep(.14,.30,vGeometry.y)*(1.0-vGeometry.z*.5)*.13;
          gl_FragColor=vec4(deposit*uInkStorageScale,lift*uInkStorageScale,0.0,1.0);
        }`,transparent:!0,depthTest:!1,depthWrite:!1,side:kt,blending:Fh,blendSrc:Qo,blendDst:Qo,blendEquation:gi}),this.mesh=e.isSkinnedMesh?new ml(H,this.material):new At(H,this.material),e.isSkinnedMesh&&(this.mesh.bind(e.skeleton,e.bindMatrix),this.mesh.bindMode=e.bindMode),this.mesh.matrixAutoUpdate=!1,this.mesh.frustumCulled=!1,this.count=f}update(e,t,n,i){let r=!0;for(let o=this.source;o;o=o.parent)if(!o.visible){r=!1;break}if(this.mesh.visible=r,!r)return;this.mesh.matrix.copy(this.source.matrixWorld);const a=this.material.uniforms;a.tSurfaceDepth.value=t,a.uViewport.value.set(n,i),a.uInverseProjection.value.copy(e.projectionMatrixInverse),a.uInverseView.value.copy(e.matrixWorld),a.uWorldToModel.value.copy(this.source.matrixWorld).invert()}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}}const yf=0,tv=1,nv=2,ph=2,zo=1.25,mh=1,ln=32,St=ln/4,bf=65535,Ra=Math.pow(2,-24),wl=Symbol("SKIP_GENERATION"),Mf={strategy:yf,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[wl]:!1};function vt(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function qc(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function xh(s,e,t){for(let n=0;n<3;n++){const i=e[s+2*n],r=e[s+2*n+1],a=i-r,o=i+r;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Vo(s){const e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}function bt(s,e){return e[s+15]===bf}function Bt(s,e){return e[s+6]}function Ht(s,e){return e[s+14]}function Ct(s){return s+St}function Pt(s,e){const t=e[s+6];return s+t*St}function Rl(s,e){return e[s+7]}function Go(s,e,t,n,i){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,x=-1/0,_=-1/0,m=-1/0;const p=s.offset||0;for(let g=(e-p)*6,v=(e+t-p)*6;g<v;g+=6){const y=s[g+0],M=s[g+1],S=y-M,A=y+M;S<r&&(r=S),A>c&&(c=A),y<h&&(h=y),y>x&&(x=y);const E=s[g+2],T=s[g+3],b=E-T,C=E+T;b<a&&(a=b),C>l&&(l=C),E<f&&(f=E),E>_&&(_=E);const w=s[g+4],D=s[g+5],N=w-D,B=w+D;N<o&&(o=N),B>u&&(u=B),w<d&&(d=w),w>m&&(m=w)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,i[0]=h,i[1]=f,i[2]=d,i[3]=x,i[4]=_,i[5]=m}const On=8,Cl=8,Ho=new Int32Array(On),Fn=new Float32Array(On*6),us=new Float32Array(On*6),Sn=new Float32Array(6),ra=new Float32Array(6),mi=new Int32Array(Cl),gh=new Float32Array(Cl*6);function iv(s,e,t,n){for(let i=0;i<3;i++){const r=e[s+2*i],a=e[s+2*i+1],o=r-a,c=r+a;o<t[n+i]&&(t[n+i]=o),c>t[n+i+3]&&(t[n+i+3]=c)}}function _h(s,e){const t=s[e+3]-s[e],n=s[e+4]-s[e+1],i=s[e+5]-s[e+2];return 2*(t*n+n*i+i*t)}function sv(s,e,t,n,i,r){let a=-1,o=0;if(r===yf)a=qc(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(r===tv)a=qc(s),a!==-1&&(o=rv(t,n,i,a));else if(r===nv){const c=Vo(s);let l=zo*i;const u=t.offset||0,h=(n-u)*6,f=(n+i-u)*6;for(let d=0;d<3;d++){const x=e[d],p=(e[d+3]-x)/On;if(i<Cl){for(let g=0;g<i;g++){const v=h+g*6,y=t[v+2*d];let M=g;for(;M>0&&t[mi[M-1]+2*d]>y;)mi[M]=mi[M-1],M--;mi[M]=v}for(let g=0;g<3;g++)Sn[g]=1/0,Sn[g+3]=-1/0,ra[g]=1/0,ra[g+3]=-1/0;for(let g=i-1;g>=0;g--)xh(mi[g],t,ra),gh.set(ra,g*6);for(let g=0;g<i-1;g++){xh(mi[g],t,Sn);const v=t[mi[g+1]+2*d];if(t[mi[g]+2*d]===v)continue;const y=g+1,M=i-y,S=Vo(Sn)/c,A=_h(gh,y*6)/c,E=mh+zo*(S*y+A*M);E<l&&(a=d,l=E,o=v)}}else{for(let y=0;y<On;y++){Ho[y]=0;for(let M=0;M<3;M++)Fn[y*6+M]=1/0,Fn[y*6+M+3]=-1/0}for(let y=h;y<f;y+=6){let A=~~((t[y+2*d]-x)/p);A>=On&&(A=On-1),Ho[A]++,iv(y,t,Fn,A*6)}const g=(On-1)*6;for(let y=0;y<6;y++)us[g+y]=Fn[g+y];for(let y=On-2;y>=0;y--){const M=y*6,S=M+6;for(let A=0;A<3;A++)us[M+A]=Math.min(Fn[M+A],us[S+A]),us[M+A+3]=Math.max(Fn[M+A+3],us[S+A+3])}let v=0;for(let y=0;y<On-1;y++){const M=y*6,S=Ho[y];if(S!==0)for(let C=0;C<3;C++)v===0?(Sn[C]=Fn[M+C],Sn[C+3]=Fn[M+C+3]):(Sn[C]=Math.min(Sn[C],Fn[M+C]),Sn[C+3]=Math.max(Sn[C+3],Fn[M+C+3]));v+=S;let A=0,E=0;v!==0&&(A=Vo(Sn)/c);const T=i-v;T!==0&&(E=_h(us,M+6)/c);const b=mh+zo*(A*v+E*T);b<l&&(a=d,l=b,o=x+p+y*p)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function rv(s,e,t,n){let i=0;const r=s.offset;for(let a=e,o=e+t;a<o;a++)i+=s[(a-r)*6+n*2];return i/t}function av(s,e,t,n,i,r){let a=n,o=n+i-1;const c=r.pos,l=r.axis*2,u=t.offset||0;for(;;){for(;a<=o&&t[(a-u)*6+l]<c;)a++;for(;a<=o&&t[(o-u)*6+l]>=c;)o--;if(a<o){for(let h=0;h<e;h++){let f=s[a*e+h];s[a*e+h]=s[o*e+h],s[o*e+h]=f}for(let h=0;h<6;h++){const f=a-u,d=o-u,x=t[f*6+h];t[f*6+h]=t[d*6+h],t[d*6+h]=x}a++,o--}else return a}}const ov=Math.pow(2,32),hs=new Float32Array(6),aa=new Float32Array(6);function cv(s,e,t,n,i,r){const{maxDepth:a,verbose:o,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:h,useSharedArrayBuffer:f=!1}=i,d=s.primitiveBuffer,x=s.primitiveBufferStride,_=f?SharedArrayBuffer:ArrayBuffer,m=new _(ln*Math.max(1,2*Math.ceil(n)-1)),p=new Float32Array(m),g=new Uint32Array(m),v=new Uint16Array(m);let y=0,M=!1;return Go(e,t,n,hs,aa),E(t,n,0),m.slice(0,y*ln);function S(T){h&&h((T-r.offset)/r.count)}function A(T,b,C){const w=T*2;g[T+6]=b,v[w+14]=C,v[w+15]=bf,S(b+C)}function E(T,b,C){const w=y++,D=w*St;p.set(hs,D),!M&&C>=a&&(M=!0,o&&console.warn(`BVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`));const N=b>l;if(b<=c&&!N||C>=a){A(D,T,b);return}const B=sv(hs,aa,e,T,b,u);let k=B.axis===-1?-1:av(d,x,e,T,b,B);if(B.axis===-1||k===T||k===T+b){if(!N){A(D,T,b);return}B.axis=Math.max(0,qc(hs)),k=T+Math.max(1,Math.floor(b/2))}g[D+7]=B.axis;const H=k-T;Go(e,T,H,hs,aa),E(T,H,C+1);const O=y-w;if(O>ov)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");g[D+6]=O;const j=b-H;Go(e,k,j,hs,aa),E(k,j,C+1)}}function lv(s,e){const t=s.getRootRanges(e.range),n=t[0],i=t[t.length-1],r={offset:n.offset,count:i.offset+i.count-n.offset},a=new Float32Array(6*r.count);a.offset=r.offset,s.computePrimitiveBounds(r.offset,r.count,a),s._roots=t.map(o=>cv(s,a,o.offset,o.count,e,r))}class Pl{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class uv{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const st=new uv;let vi,Ss;const fs=[],oa=new Pl(()=>new Et);function hv(s,e,t,n,i,r){vi=oa.getPrimitive(),Ss=oa.getPrimitive(),fs.push(vi,Ss),st.setBuffer(s._roots[e]);const a=Yc(0,s.geometry,t,n,i,r);st.clearBuffer(),oa.releasePrimitive(vi),oa.releasePrimitive(Ss),fs.pop(),fs.pop();const o=fs.length;return o>0&&(Ss=fs[o-1],vi=fs[o-2]),a}function Yc(s,e,t,n,i=null,r=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=st;let u=s*2;if(bt(u,c)){const f=Bt(s,l),d=Ht(u,c);return vt(s,o,vi),n(f,d,!1,a,r+s/St,vi)}else{let b=function(w){const{uint16Array:D,uint32Array:N}=st;let B=w*2;for(;!bt(B,D);)w=Ct(w),B=w*2;return Bt(w,N)},C=function(w){const{uint16Array:D,uint32Array:N}=st;let B=w*2;for(;!bt(B,D);)w=Pt(w,N),B=w*2;return Bt(w,N)+Ht(B,D)};const f=Ct(s),d=Pt(s,l);let x=f,_=d,m,p,g,v;if(i&&(g=vi,v=Ss,vt(x,o,g),vt(_,o,v),m=i(g),p=i(v),p<m)){x=d,_=f;const w=m;m=p,p=w,g=v}g||(g=vi,vt(x,o,g));const y=bt(x*2,c),M=t(g,y,m,a+1,r+x/St);let S;if(M===ph){const w=b(x),N=C(x)-w;S=n(w,N,!0,a+1,r+x/St,g)}else S=M&&Yc(x,e,t,n,i,r,a+1);if(S)return!0;v=Ss,vt(_,o,v);const A=bt(_*2,c),E=t(v,A,p,a+1,r+_/St);let T;if(E===ph){const w=b(_),N=C(_)-w;T=n(w,N,!0,a+1,r+_/St,v)}else T=E&&Yc(_,e,t,n,i,r,a+1);return!!T}}const fr=new st.constructor,Oa=new st.constructor,xi=new Pl(()=>new Et),ds=new Et,ps=new Et,Wo=new Et,Xo=new Et;let qo=!1;function fv(s,e,t,n){if(qo)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");qo=!0;const i=s._roots,r=e._roots;let a,o=0,c=0;const l=new Pe().copy(t).invert();for(let u=0,h=i.length;u<h;u++){fr.setBuffer(i[u]),c=0;const f=xi.getPrimitive();vt(0,fr.float32Array,f),f.applyMatrix4(l);for(let d=0,x=r.length;d<x&&(Oa.setBuffer(r[d]),a=Tn(0,0,t,l,n,o,c,0,0,f),Oa.clearBuffer(),c+=r[d].byteLength/ln,!a);d++);if(xi.releasePrimitive(f),fr.clearBuffer(),o+=i[u].byteLength/ln,a)break}return qo=!1,a}function Tn(s,e,t,n,i,r=0,a=0,o=0,c=0,l=null,u=!1){let h,f;u?(h=Oa,f=fr):(h=fr,f=Oa);const d=h.float32Array,x=h.uint32Array,_=h.uint16Array,m=f.float32Array,p=f.uint32Array,g=f.uint16Array,v=s*2,y=e*2,M=bt(v,_),S=bt(y,g);let A=!1;if(S&&M)u?A=i(Bt(e,p),Ht(e*2,g),Bt(s,x),Ht(s*2,_),c,a+e/St,o,r+s/St):A=i(Bt(s,x),Ht(s*2,_),Bt(e,p),Ht(e*2,g),o,r+s/St,c,a+e/St);else if(S){const E=xi.getPrimitive();vt(e,m,E),E.applyMatrix4(t);const T=Ct(s),b=Pt(s,x);vt(T,d,ds),vt(b,d,ps);const C=E.intersectsBox(ds),w=E.intersectsBox(ps);A=C&&Tn(e,T,n,t,i,a,r,c,o+1,E,!u)||w&&Tn(e,b,n,t,i,a,r,c,o+1,E,!u),xi.releasePrimitive(E)}else{const E=Ct(e),T=Pt(e,p);vt(E,m,Wo),vt(T,m,Xo);const b=l.intersectsBox(Wo),C=l.intersectsBox(Xo);if(b&&C)A=Tn(s,E,t,n,i,r,a,o,c+1,l,u)||Tn(s,T,t,n,i,r,a,o,c+1,l,u);else if(b)if(M)A=Tn(s,E,t,n,i,r,a,o,c+1,l,u);else{const w=xi.getPrimitive();w.copy(Wo).applyMatrix4(t);const D=Ct(s),N=Pt(s,x);vt(D,d,ds),vt(N,d,ps);const B=w.intersectsBox(ds),k=w.intersectsBox(ps);A=B&&Tn(E,D,n,t,i,a,r,c,o+1,w,!u)||k&&Tn(E,N,n,t,i,a,r,c,o+1,w,!u),xi.releasePrimitive(w)}else if(C)if(M)A=Tn(s,T,t,n,i,r,a,o,c+1,l,u);else{const w=xi.getPrimitive();w.copy(Xo).applyMatrix4(t);const D=Ct(s),N=Pt(s,x);vt(D,d,ds),vt(N,d,ps);const B=w.intersectsBox(ds),k=w.intersectsBox(ps);A=B&&Tn(T,D,n,t,i,a,r,c,o+1,w,!u)||k&&Tn(T,N,n,t,i,a,r,c,o+1,w,!u),xi.releasePrimitive(w)}}return A}const Yo=new class{constructor(){let s=null,e=null,t=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,a)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=a,this.buffer=s=r._roots[a],this.uint16Array=t=new Uint16Array(s),this.uint32Array=e=new Uint32Array(s)},this.reset=()=>{this.root=null,this.buffer=s=null,this.uint16Array=t=null,this.uint32Array=e=null},this.getRangeStart=r=>{let a=r*2;for(;!bt(a,t);)r=Ct(r),a=r*2;return Bt(r,e)},this.getRangeEnd=r=>{let a=r*2;for(;!bt(a,t);)r=Pt(r,e),a=r*2;return Bt(r,e)+Ht(a,t)};const i=(r,a,o)=>{const c=a*2,l=bt(c,t);if(!r(o,l,a)&&!l){const h=Ct(a),f=Pt(a,e);i(r,h,o+1),i(r,f,o+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((a,o,c)=>{if(o){const l=c*2,u=e[c+6],h=t[l+14];return r(a,o,new Float32Array(s,c*4,6),u,h)}else{const l=Rl(c,e);return r(a,o,new Float32Array(s,c*4,6),l)}})}}},vh=new Et,ms=new Float32Array(6);class dv{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...Mf,...e},"maxLeafSize"in e&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafSize}),lv(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,n,i){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0;for(let h=e,f=e+t;h<f;h++){this.writePrimitiveBounds(h,ms,0);const[d,x,_,m,p,g]=ms;d<r&&(r=d),m>c&&(c=m),x<a&&(a=x),p>l&&(l=p),_<o&&(o=_),g>u&&(u=g)}return n[i+0]=r,n[i+1]=a,n[i+2]=o,n[i+3]=c,n[i+4]=l,n[i+5]=u,n}computePrimitiveBounds(e,t,n){const i=n.offset||0;for(let r=e,a=e+t;r<a;r++){this.writePrimitiveBounds(r,ms,0);const[o,c,l,u,h,f]=ms,d=(o+u)/2,x=(c+h)/2,_=(l+f)/2,m=(u-o)/2,p=(h-c)/2,g=(f-l)/2,v=(r-i)*6;n[v+0]=d,n[v+1]=m+(Math.abs(d)+m)*Ra,n[v+2]=x,n[v+3]=p+(Math.abs(x)+p)*Ra,n[v+4]=_,n[v+5]=g+(Math.abs(_)+g)*Ra}return n}shiftPrimitiveOffsets(e){const t=this._indirectBuffer;if(t)for(let n=0,i=t.length;n<i;n++)t[n]+=e;else{const n=this._roots;for(let i=0;i<n.length;i++){const r=n[i],a=new Uint32Array(r),o=new Uint16Array(r),c=r.byteLength/ln;for(let l=0;l<c;l++){const u=St*l,h=2*u;bt(h,o)&&(a[u+6]+=e)}}}}traverse(e,t=0){Yo.setBVH(this,t),Yo.traverse(e),Yo.reset()}refit(){const e=this._roots;for(let t=0,n=e.length;t<n;t++){const i=e[t],r=new Uint32Array(i),a=new Uint16Array(i),o=new Float32Array(i),c=i.byteLength/ln;for(let l=c-1;l>=0;l--){const u=l*St,h=u*2;if(bt(h,a)){const d=Bt(u,r),x=Ht(h,a);this.writePrimitiveRangeBounds(d,x,ms,0),o.set(ms,u)}else{const d=Ct(u),x=Pt(u,r);for(let _=0;_<3;_++){const m=o[d+_],p=o[d+_+3],g=o[x+_],v=o[x+_+3];o[u+_]=m<g?m:g,o[u+_+3]=p>v?p:v}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{vt(0,new Float32Array(n),vh),e.union(vh)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:r,scratchPrimitive:a,iterate:o}=e;if(i&&r){const h=i;i=(f,d,x,_,m)=>h(f,d,x,_,m)?!0:o(f,d,this,r,x,_,a)}else i||(r?i=(h,f,d,x)=>o(h,f,this,r,d,x,a):i=(h,f,d)=>d);let c=!1,l=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const d=u[h];if(c=hv(this,h,n,i,t,l),c)break;l+=d.byteLength/ln}return c}bvhcast(e,t,n){let{intersectsRanges:i}=n;return fv(this,e,t,i)}}function pv(){return typeof SharedArrayBuffer<"u"}function Il(s){return s.index?s.index.count:s.attributes.position.count}function Ya(s){return Il(s)/3}function mv(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function xv(s,e){if(!s.index){const t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=mv(t,n);s.setIndex(new yt(i,1));for(let r=0;r<t;r++)i[r]=r}}function gv(s,e,t){const n=Il(s)/t,i=e||s.drawRange,r=i.start/t,a=(i.start+i.count)/t,o=Math.max(0,r),c=Math.min(n,a)-o;return{offset:Math.floor(o),count:Math.floor(c)}}function _v(s,e){return s.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function yh(s,e,t){const n=gv(s,e,t),i=_v(s,t);if(!i.length)return[n];const r=[],a=n.offset,o=n.offset+n.count,c=Il(s)/t,l=[];for(const f of i){const{offset:d,count:x}=f,_=d,m=isFinite(x)?x:c-d,p=d+m;_<o&&p>a&&(l.push({pos:Math.max(a,_),isStart:!0}),l.push({pos:Math.min(o,p),isStart:!1}))}l.sort((f,d)=>f.pos!==d.pos?f.pos-d.pos:f.type==="end"?-1:1);let u=0,h=null;for(const f of l){const d=f.pos;u!==0&&d!==h&&r.push({offset:h,count:d-h}),u+=f.isStart?1:-1,h=d}return r}function vv(s,e){const t=s[s.length-1],n=t.offset+t.count>2**16,i=s.reduce((l,u)=>l+u.count,0),r=n?4:2,a=e?new SharedArrayBuffer(i*r):new ArrayBuffer(i*r),o=n?new Uint32Array(a):new Uint16Array(a);let c=0;for(let l=0;l<s.length;l++){const{offset:u,count:h}=s[l];for(let f=0;f<h;f++)o[c+f]=u+f;c+=h}return o}class yv extends dv{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!pv())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...Mf,...t},t[wl]||this.init(t)}init(e){const{geometry:t,primitiveStride:n}=this;if(e.indirect){const i=yh(t,e.range,n),r=vv(i,e.useSharedArrayBuffer);this._indirectBuffer=r}else xv(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Et))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:yh(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class oi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,a=e.length;r<a;r++){const c=e[r][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,a=t.length;r<a;r++){const o=t[r],c=e.dot(o);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}oi.prototype.setFromBox=(function(){const s=new I;return function(t,n){const i=n.min,r=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*u+r.z*(1-u);const h=t.dot(s);a=Math.min(h,a),o=Math.max(h,o)}this.min=a,this.max=o}})();const bv=(function(){const s=new I,e=new I,t=new I;return function(i,r,a){const o=i.start,c=s,l=r.start,u=e;t.subVectors(o,l),s.subVectors(i.end,i.start),e.subVectors(r.end,r.start);const h=t.dot(u),f=u.dot(c),d=u.dot(u),x=t.dot(c),m=c.dot(c)*d-f*f;let p,g;m!==0?p=(h*f-x*d)/m:p=0,g=(h+p*f)/d,a.x=p,a.y=g}})(),Dl=(function(){const s=new pe,e=new I,t=new I;return function(i,r,a,o){bv(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),i.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?i.at(0,a):i.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=i.start:u=i.end;let h;l<0?h=r.start:h=r.end;const f=e,d=t;if(i.closestPointToPoint(h,!0,e),r.closestPointToPoint(u,!0,t),f.distanceToSquared(h)<=d.distanceToSquared(u)){a.copy(f),o.copy(h);return}else{a.copy(u),o.copy(d);return}}}})(),Mv=(function(){const s=new I,e=new I,t=new kn,n=new ai;return function(r,a){const{radius:o,center:c}=r,{a:l,b:u,c:h}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=o||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=o)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=o))return!0;const _=a.getPlane(t);if(Math.abs(_.distanceToPoint(c))<=o){const p=_.projectPoint(c,e);if(a.containsPoint(p))return!0}return!1}})(),Sv=["x","y","z"],ei=1e-15,bh=ei*ei;function dn(s){return Math.abs(s)<ei}class Dn extends Rt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new oi),this.points=[this.a,this.b,this.c],this.plane=new kn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ai,this.needsUpdate=!0}intersectsSphere(e){return Mv(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,i);const l=r[1],u=a[1];l.subVectors(e,t),u.setFromPoints(l,i);const h=r[2],f=a[2];h.subVectors(t,n),f.setFromPoints(h,i);const d=r[3],x=a[3];d.subVectors(n,e),x.setFromPoints(d,i);const _=l.length(),m=h.length(),p=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,_<ei?m<ei||p<ei?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<ei?p<ei?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<ei&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Dn.prototype.closestPointToSegment=(function(){const s=new I,e=new I,t=new ai;return function(i,r=null,a=null){this.needsUpdate&&this.update();const{start:o,end:c}=i,l=this.points;let u,h=1/0;const f=this.plane.distanceToPoint(o),d=this.plane.distanceToPoint(c);if(f*d<0&&this.plane.intersectLine(i,s)!==null&&this.containsPoint(s))return r&&r.copy(s),a&&a.copy(s),0;for(let x=0;x<3;x++){const _=(x+1)%3;t.start.copy(l[x]),t.end.copy(l[_]),Dl(t,i,s,e),u=s.distanceToSquared(e),u<h&&(h=u,r&&r.copy(s),a&&a.copy(e))}return this.closestPointToPoint(o,s),u=o.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),a&&a.copy(o)),this.closestPointToPoint(c,s),u=c.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),a&&a.copy(c)),Math.sqrt(h)}})();Dn.prototype.intersectsTriangle=(function(){const s=new Dn,e=new oi,t=new oi,n=new I,i=new I,r=new I,a=new I,o=new ai,c=new ai,l=new I,u=new pe,h=new pe;function f(v,y,M,S){const A=n;!v.isDegenerateIntoPoint&&!v.isDegenerateIntoSegment?A.copy(v.plane.normal):A.copy(y.plane.normal);const E=v.satBounds,T=v.satAxes;for(let w=1;w<4;w++){const D=E[w],N=T[w];if(e.setFromPoints(N,y.points),D.isSeparated(e)||(a.copy(A).cross(N),e.setFromPoints(a,v.points),t.setFromPoints(a,y.points),e.isSeparated(t)))return!1}const b=y.satBounds,C=y.satAxes;for(let w=1;w<4;w++){const D=b[w],N=C[w];if(e.setFromPoints(N,v.points),D.isSeparated(e)||(a.crossVectors(A,N),e.setFromPoints(a,v.points),t.setFromPoints(a,y.points),e.isSeparated(t)))return!1}return M&&(S||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),M.start.set(0,0,0),M.end.set(0,0,0)),!0}function d(v,y,M,S,A,E,T,b,C,w,D){let N=T/(T-b);w.x=S+(A-S)*N,D.start.subVectors(y,v).multiplyScalar(N).add(v),N=T/(T-C),w.y=S+(E-S)*N,D.end.subVectors(M,v).multiplyScalar(N).add(v)}function x(v,y,M,S,A,E,T,b,C,w,D){if(A>0)d(v.c,v.a,v.b,S,y,M,C,T,b,w,D);else if(E>0)d(v.b,v.a,v.c,M,y,S,b,T,C,w,D);else if(b*C>0||T!=0)d(v.a,v.b,v.c,y,M,S,T,b,C,w,D);else if(b!=0)d(v.b,v.a,v.c,M,y,S,b,T,C,w,D);else if(C!=0)d(v.c,v.a,v.b,S,y,M,C,T,b,w,D);else return!0;return!1}function _(v,y,M,S){const A=y.degenerateSegment,E=v.plane.distanceToPoint(A.start),T=v.plane.distanceToPoint(A.end);return dn(E)?dn(T)?f(v,y,M,S):(M&&(M.start.copy(A.start),M.end.copy(A.start)),v.containsPoint(A.start)):dn(T)?(M&&(M.start.copy(A.end),M.end.copy(A.end)),v.containsPoint(A.end)):v.plane.intersectLine(A,n)!=null?(M&&(M.start.copy(n),M.end.copy(n)),v.containsPoint(n)):!1}function m(v,y,M){const S=y.a;return dn(v.plane.distanceToPoint(S))&&v.containsPoint(S)?(M&&(M.start.copy(S),M.end.copy(S)),!0):!1}function p(v,y,M){const S=v.degenerateSegment,A=y.a;return S.closestPointToPoint(A,!0,n),A.distanceToSquared(n)<bh?(M&&(M.start.copy(A),M.end.copy(A)),!0):!1}function g(v,y,M,S){if(v.isDegenerateIntoSegment)if(y.isDegenerateIntoSegment){const A=v.degenerateSegment,E=y.degenerateSegment,T=i,b=r;A.delta(T),E.delta(b);const C=n.subVectors(E.start,A.start),w=T.x*b.y-T.y*b.x;if(dn(w))return!1;const D=(C.x*b.y-C.y*b.x)/w,N=-(T.x*C.y-T.y*C.x)/w;if(D<0||D>1||N<0||N>1)return!1;const B=A.start.z+T.z*D,k=E.start.z+b.z*N;return dn(B-k)?(M&&(M.start.copy(A.start).addScaledVector(T,D),M.end.copy(A.start).addScaledVector(T,D)),!0):!1}else return y.isDegenerateIntoPoint?p(v,y,M):_(y,v,M,S);else{if(v.isDegenerateIntoPoint)return y.isDegenerateIntoPoint?y.a.distanceToSquared(v.a)<bh?(M&&(M.start.copy(v.a),M.end.copy(v.a)),!0):!1:y.isDegenerateIntoSegment?p(y,v,M):m(y,v,M);if(y.isDegenerateIntoPoint)return m(v,y,M);if(y.isDegenerateIntoSegment)return _(v,y,M,S)}}return function(y,M=null,S=!1){this.needsUpdate&&this.update(),y.isExtendedTriangle?y.needsUpdate&&y.update():(s.copy(y),s.update(),y=s);const A=g(this,y,M,S);if(A!==void 0)return A;const E=this.plane,T=y.plane;let b=T.distanceToPoint(this.a),C=T.distanceToPoint(this.b),w=T.distanceToPoint(this.c);dn(b)&&(b=0),dn(C)&&(C=0),dn(w)&&(w=0);const D=b*C,N=b*w;if(D>0&&N>0)return!1;let B=E.distanceToPoint(y.a),k=E.distanceToPoint(y.b),H=E.distanceToPoint(y.c);dn(B)&&(B=0),dn(k)&&(k=0),dn(H)&&(H=0);const O=B*k,j=B*H;if(O>0&&j>0)return!1;i.copy(E.normal),r.copy(T.normal);const J=i.cross(r);let ne=0,Se=Math.abs(J.x);const fe=Math.abs(J.y);fe>Se&&(Se=fe,ne=1),Math.abs(J.z)>Se&&(ne=2);const Ve=Sv[ne],q=this.a[Ve],K=this.b[Ve],ae=this.c[Ve],Ee=y.a[Ve],_e=y.b[Ve],ee=y.c[Ve];if(x(this,q,K,ae,D,N,b,C,w,u,o))return f(this,y,M,S);if(x(y,Ee,_e,ee,O,j,B,k,H,h,c))return f(this,y,M,S);if(u.y<u.x){const Me=u.y;u.y=u.x,u.x=Me,l.copy(o.start),o.start.copy(o.end),o.end.copy(l)}if(h.y<h.x){const Me=h.y;h.y=h.x,h.x=Me,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<h.x||h.y<u.x?!1:(M&&(h.x>u.x?M.start.copy(c.start):M.start.copy(o.start),h.y<u.y?M.end.copy(c.end):M.end.copy(o.end)),!0)}})();Dn.prototype.distanceToPoint=(function(){const s=new I;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();Dn.prototype.distanceToTriangle=(function(){const s=new I,e=new I,t=["a","b","c"],n=new ai,i=new ai;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l,!0))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=t[h],x=a[d];this.closestPointToPoint(x,s),f=x.distanceToSquared(s),f<u&&(u=f,o&&o.copy(s),c&&c.copy(x));const _=this[d];a.closestPointToPoint(_,s),f=_.distanceToSquared(s),f<u&&(u=f,o&&o.copy(_),c&&c.copy(s))}for(let h=0;h<3;h++){const f=t[h],d=t[(h+1)%3];n.set(this[f],this[d]);for(let x=0;x<3;x++){const _=t[x],m=t[(x+1)%3];i.set(a[_],a[m]),Dl(n,i,s,e);const p=s.distanceToSquared(e);p<u&&(u=p,o&&o.copy(s),c&&c.copy(e))}}return Math.sqrt(u)}})();class Jt{constructor(e,t,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Pe,this.invMatrix=new Pe,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new oi),this.alignedSatBounds=new Array(3).fill().map(()=>new oi),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Jt.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*l|2*u|4*h,d=i[f];d.x=l?n.x:t.x,d.y=u?n.y:t.y,d.z=h?n.z:t.z,d.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,o=i[0];for(let l=0;l<3;l++){const u=a[l],h=r[l],f=1<<l,d=i[f];u.subVectors(o,d),h.setFromPoints(u,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Jt.prototype.intersectsBox=(function(){const s=new oi;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,o[0].isSeparated(s)||(s.min=n.y,s.max=i.y,o[1].isSeparated(s))||(s.min=n.z,s.max=i.z,o[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){const l=a[c],u=r[c];if(s.setFromBox(l,t),u.isSeparated(s))return!1}return!0}})();Jt.prototype.intersectsTriangle=(function(){const s=new Dn,e=new Array(3),t=new oi,n=new oi,i=new I;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(s.copy(a),s.update(),a=s);const o=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let f=0;f<3;f++){const d=o[f],x=c[f];if(t.setFromPoints(x,e),d.isSeparated(t))return!1}const l=a.satBounds,u=a.satAxes,h=this.points;for(let f=0;f<3;f++){const d=l[f],x=u[f];if(t.setFromPoints(x,h),d.isSeparated(t))return!1}for(let f=0;f<3;f++){const d=c[f];for(let x=0;x<4;x++){const _=u[x];if(i.crossVectors(d,_),t.setFromPoints(i,e),n.setFromPoints(i,h),t.isSeparated(n))return!1}}return!0}})();Jt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Jt.prototype.distanceToPoint=(function(){const s=new I;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();Jt.prototype.distanceToBox=(function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new ai),t=new Array(12).fill().map(()=>new ai),n=new I,i=new I;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(i),this.closestPointToPoint(i,n),a.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const u=o*o,h=a.min,f=a.max,d=this.points;let x=1/0;for(let m=0;m<8;m++){const p=d[m];i.copy(p).clamp(h,f);const g=p.distanceToSquared(i);if(g<x&&(x=g,c&&c.copy(p),l&&l.copy(i),g<u))return Math.sqrt(g)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let g=0;g<=1;g++){const v=(m+1)%3,y=(m+2)%3,M=p<<v|g<<y,S=1<<m|p<<v|g<<y,A=d[M],E=d[S];e[_].set(A,E);const b=s[m],C=s[v],w=s[y],D=t[_],N=D.start,B=D.end;N[b]=h[b],N[C]=p?h[C]:f[C],N[w]=g?h[w]:f[w],B[b]=f[b],B[C]=p?h[C]:f[C],B[w]=g?h[w]:f[w],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let g=0;g<=1;g++){i.x=m?f.x:h.x,i.y=p?f.y:h.y,i.z=g?f.z:h.z,this.closestPointToPoint(i,n);const v=i.distanceToSquared(n);if(v<x&&(x=v,c&&c.copy(n),l&&l.copy(i),v<u))return Math.sqrt(v)}for(let m=0;m<12;m++){const p=e[m];for(let g=0;g<12;g++){const v=t[g];Dl(p,v,n,i);const y=n.distanceToSquared(i);if(y<x&&(x=y,c&&c.copy(n),l&&l.copy(i),y<u))return Math.sqrt(y)}}return Math.sqrt(x)}})();class Tv extends Pl{constructor(){super(()=>new Dn)}}const gn=new Tv,er=new I,jo=new I;function Av(s,e,t={},n=0,i=1/0){const r=n*n,a=i*i;let o=1/0,c=null;if(s.shapecast({boundsTraverseOrder:u=>(er.copy(e).clamp(u.min,u.max),er.distanceToSquared(e)),intersectsBounds:(u,h,f)=>f<o&&f<a,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,er);const f=e.distanceToSquared(er);return f<o&&(jo.copy(er),o=f,c=h),f<r}}),o===1/0)return null;const l=Math.sqrt(o);return t.point?t.point.copy(jo):t.point=jo.clone(),t.distance=l,t.faceIndex=c,t}const ca=parseInt(Mr)>=169,Ev=parseInt(Mr)<=161,Ui=new I,Fi=new I,Bi=new I,la=new pe,ua=new pe,ha=new pe,Mh=new I,Sh=new I,Th=new I,tr=new I;function wv(s,e,t,n,i,r,a,o){let c;if(r===Kt?c=s.intersectTriangle(n,t,e,!0,i):c=s.intersectTriangle(e,t,n,r!==kt,i),c===null)return null;const l=s.origin.distanceTo(i);return l<a||l>o?null:{distance:l,point:i.clone()}}function Ah(s,e,t,n,i,r,a,o,c,l,u){Ui.fromBufferAttribute(e,r),Fi.fromBufferAttribute(e,a),Bi.fromBufferAttribute(e,o);const h=wv(s,Ui,Fi,Bi,tr,c,l,u);if(h){if(n){la.fromBufferAttribute(n,r),ua.fromBufferAttribute(n,a),ha.fromBufferAttribute(n,o),h.uv=new pe;const d=Rt.getInterpolation(tr,Ui,Fi,Bi,la,ua,ha,h.uv);ca||(h.uv=d)}if(i){la.fromBufferAttribute(i,r),ua.fromBufferAttribute(i,a),ha.fromBufferAttribute(i,o),h.uv1=new pe;const d=Rt.getInterpolation(tr,Ui,Fi,Bi,la,ua,ha,h.uv1);ca||(h.uv1=d),Ev&&(h.uv2=h.uv1)}if(t){Mh.fromBufferAttribute(t,r),Sh.fromBufferAttribute(t,a),Th.fromBufferAttribute(t,o),h.normal=new I;const d=Rt.getInterpolation(tr,Ui,Fi,Bi,Mh,Sh,Th,h.normal);h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1),ca||(h.normal=d)}const f={a:r,b:a,c:o,normal:new I,materialIndex:0};if(Rt.getNormal(Ui,Fi,Bi,f.normal),h.face=f,h.faceIndex=r,ca){const d=new I;Rt.getBarycoord(tr,Ui,Fi,Bi,d),h.barycoord=d}}return h}function Eh(s){return s&&s.isMaterial?s.side:s}function ja(s,e,t,n,i,r,a){const o=n*3;let c=o+0,l=o+1,u=o+2;const{index:h,groups:f}=s;s.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:d,normal:x,uv:_,uv1:m}=s.attributes;if(Array.isArray(e)){const p=n*3;for(let g=0,v=f.length;g<v;g++){const{start:y,count:M,materialIndex:S}=f[g];if(p>=y&&p<y+M){const A=Eh(e[S]),E=Ah(t,d,x,_,m,c,l,u,A,r,a);if(E)if(E.faceIndex=n,E.face.materialIndex=S,i)i.push(E);else return E}}}else{const p=Eh(e),g=Ah(t,d,x,_,m,c,l,u,p,r,a);if(g)if(g.faceIndex=n,g.face.materialIndex=0,i)i.push(g);else return g}return null}function Tt(s,e,t,n){const i=s.a,r=s.b,a=s.c;let o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),i.x=n.getX(o),i.y=n.getY(o),i.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function Rv(s,e,t,n,i,r,a,o){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++)ja(c,e,t,u,r,a,o)}function Cv(s,e,t,n,i,r,a){const{geometry:o,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let d;d=ja(o,e,t,h,null,r,a),d&&d.distance<l&&(u=d,l=d.distance)}return u}function Pv(s,e,t,n,i,r,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let u=s,h=e+s;u<h;u++){let f;if(f=u,Tt(a,f*3,c,l),a.needsUpdate=!0,n(a,f,i,r))return!0}return!1}function Iv(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,a,o,c,l=0;const u=s._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,x=!1){const _=f*2;if(bt(_,o)){const m=Bt(f,a),p=Ht(_,o);let g=1/0,v=1/0,y=1/0,M=-1/0,S=-1/0,A=-1/0;for(let E=3*m,T=3*(m+p);E<T;E++){let b=n[E];const C=i.getX(b),w=i.getY(b),D=i.getZ(b);C<g&&(g=C),C>M&&(M=C),w<v&&(v=w),w>S&&(S=w),D<y&&(y=D),D>A&&(A=D)}return c[f+0]!==g||c[f+1]!==v||c[f+2]!==y||c[f+3]!==M||c[f+4]!==S||c[f+5]!==A?(c[f+0]=g,c[f+1]=v,c[f+2]=y,c[f+3]=M,c[f+4]=S,c[f+5]=A,!0):!1}else{const m=Ct(f),p=Pt(f,a);let g=x,v=!1,y=!1;if(e){if(!g){const b=m/St+d/ln,C=p/St+d/ln;v=e.has(b),y=e.has(C),g=!v&&!y}}else v=!0,y=!0;const M=g||v,S=g||y;let A=!1;M&&(A=h(m,d,g));let E=!1;S&&(E=h(p,d,g));const T=A||E;if(T)for(let b=0;b<3;b++){const C=m+b,w=p+b,D=c[C],N=c[C+3],B=c[w],k=c[w+3];c[f+b]=D<B?D:B,c[f+b+3]=N>k?N:k}return T}}}function _n(s,e,t,n,i){let r,a,o,c,l,u;const h=1/t.direction.x,f=1/t.direction.y,d=1/t.direction.z,x=t.origin.x,_=t.origin.y,m=t.origin.z;let p=e[s],g=e[s+3],v=e[s+1],y=e[s+3+1],M=e[s+2],S=e[s+3+2];return h>=0?(r=(p-x)*h,a=(g-x)*h):(r=(g-x)*h,a=(p-x)*h),f>=0?(o=(v-_)*f,c=(y-_)*f):(o=(y-_)*f,c=(v-_)*f),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),d>=0?(l=(M-m)*d,u=(S-m)*d):(l=(S-m)*d,u=(M-m)*d),r>u||l>a)?!1:((l>r||r!==r)&&(r=l),(u<a||a!==a)&&(a=u),r<=i&&a>=n)}function Dv(s,e,t,n,i,r,a,o){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++){let f=l?l[u]:u;ja(c,e,t,f,r,a,o)}}function Lv(s,e,t,n,i,r,a){const{geometry:o,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let d;d=ja(o,e,t,c?c[h]:h,null,r,a),d&&d.distance<l&&(u=d,l=d.distance)}return u}function Nv(s,e,t,n,i,r,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let u=s,h=e+s;u<h;u++){let f;if(f=t.resolveTriangleIndex(u),Tt(a,f*3,c,l),a.needsUpdate=!0,n(a,f,i,r))return!0}return!1}function Uv(s,e,t,n,i,r,a){st.setBuffer(s._roots[e]),_n(0,st.float32Array,n,r,a)&&jc(0,s,t,n,i,r,a),st.clearBuffer()}function jc(s,e,t,n,i,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=st,u=s*2;if(bt(u,c)){const f=Bt(s,l),d=Ht(u,c);Rv(e,t,n,f,d,i,r,a)}else{const f=Ct(s);_n(f,o,n,r,a)&&jc(f,e,t,n,i,r,a);const d=Pt(s,l);_n(d,o,n,r,a)&&jc(d,e,t,n,i,r,a)}}const Fv=["x","y","z"];function Bv(s,e,t,n,i,r){st.setBuffer(s._roots[e]);let a=null;return _n(0,st.float32Array,n,i,r)&&(a=Kc(0,s,t,n,i,r)),st.clearBuffer(),a}function Kc(s,e,t,n,i,r){const{float32Array:a,uint16Array:o,uint32Array:c}=st;let l=s*2;if(bt(l,o)){const h=Bt(s,c),f=Ht(l,o);return Cv(e,t,n,h,f,i,r)}else{const h=Rl(s,c),f=Fv[h],x=n.direction[f]>=0;let _,m;x?(_=Ct(s),m=Pt(s,c)):(_=Pt(s,c),m=Ct(s));const g=_n(_,a,n,i,r)?Kc(_,e,t,n,i,r):null;if(g){const M=g.point[f];if(x?M<=a[m+h]:M>=a[m+h+3])return g}const y=_n(m,a,n,i,r)?Kc(m,e,t,n,i,r):null;return g&&y?g.distance<=y.distance?g:y:g||y||null}}const fa=new Et,xs=new Dn,gs=new Dn,nr=new Pe,wh=new Jt,da=new Jt;function Ov(s,e,t,n){st.setBuffer(s._roots[e]);const i=Zc(0,s,t,n);return st.clearBuffer(),i}function Zc(s,e,t,n,i=null){const{float32Array:r,uint16Array:a,uint32Array:o}=st;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),wh.set(t.boundingBox.min,t.boundingBox.max,n),i=wh),bt(c,a)){const u=e.geometry,h=u.index,f=u.attributes.position,d=t.index,x=t.attributes.position,_=Bt(s,o),m=Ht(c,a);if(nr.copy(n).invert(),t.boundsTree)return vt(s,r,da),da.matrix.copy(nr),da.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:g=>da.intersectsBox(g),intersectsTriangle:g=>{g.a.applyMatrix4(n),g.b.applyMatrix4(n),g.c.applyMatrix4(n),g.needsUpdate=!0;for(let v=_*3,y=(m+_)*3;v<y;v+=3)if(Tt(gs,v,h,f),gs.needsUpdate=!0,g.intersectsTriangle(gs))return!0;return!1}});{const p=Ya(t);for(let g=_*3,v=(m+_)*3;g<v;g+=3){Tt(xs,g,h,f),xs.a.applyMatrix4(nr),xs.b.applyMatrix4(nr),xs.c.applyMatrix4(nr),xs.needsUpdate=!0;for(let y=0,M=p*3;y<M;y+=3)if(Tt(gs,y,d,x),gs.needsUpdate=!0,xs.intersectsTriangle(gs))return!0}}}else{const u=Ct(s),h=Pt(s,o);return vt(u,r,fa),!!(i.intersectsBox(fa)&&Zc(u,e,t,n,i)||(vt(h,r,fa),i.intersectsBox(fa)&&Zc(h,e,t,n,i)))}}const pa=new Pe,Ko=new Jt,ir=new Jt,kv=new I,zv=new I,Vv=new I,Gv=new I;function Hv(s,e,t,n={},i={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Ko.set(e.boundingBox.min,e.boundingBox.max,t),Ko.needsUpdate=!0;const o=s.geometry,c=o.attributes.position,l=o.index,u=e.attributes.position,h=e.index,f=gn.getPrimitive(),d=gn.getPrimitive();let x=kv,_=zv,m=null,p=null;i&&(m=Vv,p=Gv);let g=1/0,v=null,y=null;return pa.copy(t).invert(),ir.matrix.copy(pa),s.shapecast({boundsTraverseOrder:M=>Ko.distanceToBox(M),intersectsBounds:(M,S,A)=>A<g&&A<a?(S&&(ir.min.copy(M.min),ir.max.copy(M.max),ir.needsUpdate=!0),!0):!1,intersectsRange:(M,S)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:E=>ir.distanceToBox(E),intersectsBounds:(E,T,b)=>b<g&&b<a,intersectsRange:(E,T)=>{for(let b=E,C=E+T;b<C;b++){Tt(d,3*b,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let w=M,D=M+S;w<D;w++){Tt(f,3*w,l,c),f.needsUpdate=!0;const N=f.distanceToTriangle(d,x,m);if(N<g&&(_.copy(x),p&&p.copy(m),g=N,v=w,y=b),N<r)return!0}}}});{const A=Ya(e);for(let E=0,T=A;E<T;E++){Tt(d,3*E,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let b=M,C=M+S;b<C;b++){Tt(f,3*b,l,c),f.needsUpdate=!0;const w=f.distanceToTriangle(d,x,m);if(w<g&&(_.copy(x),p&&p.copy(m),g=w,v=b,y=E),w<r)return!0}}}}}),gn.releasePrimitive(f),gn.releasePrimitive(d),g===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=g,n.faceIndex=v,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(pa),_.applyMatrix4(pa),i.distance=_.sub(i.point).length(),i.faceIndex=y),n)}function Wv(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,a,o,c,l=0;const u=s._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,x=!1){const _=f*2;if(bt(_,o)){const m=Bt(f,a),p=Ht(_,o);let g=1/0,v=1/0,y=1/0,M=-1/0,S=-1/0,A=-1/0;for(let E=m,T=m+p;E<T;E++){const b=3*s.resolveTriangleIndex(E);for(let C=0;C<3;C++){let w=b+C;w=n?n[w]:w;const D=i.getX(w),N=i.getY(w),B=i.getZ(w);D<g&&(g=D),D>M&&(M=D),N<v&&(v=N),N>S&&(S=N),B<y&&(y=B),B>A&&(A=B)}}return c[f+0]!==g||c[f+1]!==v||c[f+2]!==y||c[f+3]!==M||c[f+4]!==S||c[f+5]!==A?(c[f+0]=g,c[f+1]=v,c[f+2]=y,c[f+3]=M,c[f+4]=S,c[f+5]=A,!0):!1}else{const m=Ct(f),p=Pt(f,a);let g=x,v=!1,y=!1;if(e){if(!g){const b=m/St+d/ln,C=p/St+d/ln;v=e.has(b),y=e.has(C),g=!v&&!y}}else v=!0,y=!0;const M=g||v,S=g||y;let A=!1;M&&(A=h(m,d,g));let E=!1;S&&(E=h(p,d,g));const T=A||E;if(T)for(let b=0;b<3;b++){const C=m+b,w=p+b,D=c[C],N=c[C+3],B=c[w],k=c[w+3];c[f+b]=D<B?D:B,c[f+b+3]=N>k?N:k}return T}}}function Xv(s,e,t,n,i,r,a){st.setBuffer(s._roots[e]),_n(0,st.float32Array,n,r,a)&&$c(0,s,t,n,i,r,a),st.clearBuffer()}function $c(s,e,t,n,i,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=st,u=s*2;if(bt(u,c)){const f=Bt(s,l),d=Ht(u,c);Dv(e,t,n,f,d,i,r,a)}else{const f=Ct(s);_n(f,o,n,r,a)&&$c(f,e,t,n,i,r,a);const d=Pt(s,l);_n(d,o,n,r,a)&&$c(d,e,t,n,i,r,a)}}const qv=["x","y","z"];function Yv(s,e,t,n,i,r){st.setBuffer(s._roots[e]);let a=null;return _n(0,st.float32Array,n,i,r)&&(a=Jc(0,s,t,n,i,r)),st.clearBuffer(),a}function Jc(s,e,t,n,i,r){const{float32Array:a,uint16Array:o,uint32Array:c}=st;let l=s*2;if(bt(l,o)){const h=Bt(s,c),f=Ht(l,o);return Lv(e,t,n,h,f,i,r)}else{const h=Rl(s,c),f=qv[h],x=n.direction[f]>=0;let _,m;x?(_=Ct(s),m=Pt(s,c)):(_=Pt(s,c),m=Ct(s));const g=_n(_,a,n,i,r)?Jc(_,e,t,n,i,r):null;if(g){const M=g.point[f];if(x?M<=a[m+h]:M>=a[m+h+3])return g}const y=_n(m,a,n,i,r)?Jc(m,e,t,n,i,r):null;return g&&y?g.distance<=y.distance?g:y:g||y||null}}const ma=new Et,_s=new Dn,vs=new Dn,sr=new Pe,Rh=new Jt,xa=new Jt;function jv(s,e,t,n){st.setBuffer(s._roots[e]);const i=Qc(0,s,t,n);return st.clearBuffer(),i}function Qc(s,e,t,n,i=null){const{float32Array:r,uint16Array:a,uint32Array:o}=st;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Rh.set(t.boundingBox.min,t.boundingBox.max,n),i=Rh),bt(c,a)){const u=e.geometry,h=u.index,f=u.attributes.position,d=t.index,x=t.attributes.position,_=Bt(s,o),m=Ht(c,a);if(sr.copy(n).invert(),t.boundsTree)return vt(s,r,xa),xa.matrix.copy(sr),xa.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:g=>xa.intersectsBox(g),intersectsTriangle:g=>{g.a.applyMatrix4(n),g.b.applyMatrix4(n),g.c.applyMatrix4(n),g.needsUpdate=!0;for(let v=_,y=m+_;v<y;v++)if(Tt(vs,3*e.resolveTriangleIndex(v),h,f),vs.needsUpdate=!0,g.intersectsTriangle(vs))return!0;return!1}});{const p=Ya(t);for(let g=_,v=m+_;g<v;g++){const y=e.resolveTriangleIndex(g);Tt(_s,3*y,h,f),_s.a.applyMatrix4(sr),_s.b.applyMatrix4(sr),_s.c.applyMatrix4(sr),_s.needsUpdate=!0;for(let M=0,S=p*3;M<S;M+=3)if(Tt(vs,M,d,x),vs.needsUpdate=!0,_s.intersectsTriangle(vs))return!0}}}else{const u=Ct(s),h=Pt(s,o);return vt(u,r,ma),!!(i.intersectsBox(ma)&&Qc(u,e,t,n,i)||(vt(h,r,ma),i.intersectsBox(ma)&&Qc(h,e,t,n,i)))}}const ga=new Pe,Zo=new Jt,rr=new Jt,Kv=new I,Zv=new I,$v=new I,Jv=new I;function Qv(s,e,t,n={},i={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Zo.set(e.boundingBox.min,e.boundingBox.max,t),Zo.needsUpdate=!0;const o=s.geometry,c=o.attributes.position,l=o.index,u=e.attributes.position,h=e.index,f=gn.getPrimitive(),d=gn.getPrimitive();let x=Kv,_=Zv,m=null,p=null;i&&(m=$v,p=Jv);let g=1/0,v=null,y=null;return ga.copy(t).invert(),rr.matrix.copy(ga),s.shapecast({boundsTraverseOrder:M=>Zo.distanceToBox(M),intersectsBounds:(M,S,A)=>A<g&&A<a?(S&&(rr.min.copy(M.min),rr.max.copy(M.max),rr.needsUpdate=!0),!0):!1,intersectsRange:(M,S)=>{if(e.boundsTree){const A=e.boundsTree;return A.shapecast({boundsTraverseOrder:E=>rr.distanceToBox(E),intersectsBounds:(E,T,b)=>b<g&&b<a,intersectsRange:(E,T)=>{for(let b=E,C=E+T;b<C;b++){const w=A.resolveTriangleIndex(b);Tt(d,3*w,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let D=M,N=M+S;D<N;D++){const B=s.resolveTriangleIndex(D);Tt(f,3*B,l,c),f.needsUpdate=!0;const k=f.distanceToTriangle(d,x,m);if(k<g&&(_.copy(x),p&&p.copy(m),g=k,v=D,y=b),k<r)return!0}}}})}else{const A=Ya(e);for(let E=0,T=A;E<T;E++){Tt(d,3*E,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let b=M,C=M+S;b<C;b++){const w=s.resolveTriangleIndex(b);Tt(f,3*w,l,c),f.needsUpdate=!0;const D=f.distanceToTriangle(d,x,m);if(D<g&&(_.copy(x),p&&p.copy(m),g=D,v=b,y=E),D<r)return!0}}}}}),gn.releasePrimitive(f),gn.releasePrimitive(d),g===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=g,n.faceIndex=v,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(ga),_.applyMatrix4(ga),i.distance=_.sub(i.point).length(),i.faceIndex=y),n)}function Ch(s,e,t){return s===null?null:(s.point.applyMatrix4(e.matrixWorld),s.distance=s.point.distanceTo(t.ray.origin),s.object=e,s)}const _a=new Jt,va=new Wi,Ph=new I,Ih=new Pe,Dh=new I,$o=["getX","getY","getZ"];class br extends yv{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,r=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=i.map(c=>c.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=r?r.slice():null):(o.roots=i,o.index=a?a.array:null,o.indirectBuffer=r),o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:r,indirectBuffer:a}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));const o=new br(t,{...n,[wl]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const l=t.getIndex();if(l===null){const u=new yt(e.index,1,!1);t.setIndex(u)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return o;function c(l){for(let u=0;u<l.length;u++){const h=l[u],f=new Uint32Array(h),d=new Uint16Array(h);for(let x=0,_=h.byteLength/ln;x<_;x++){const m=St*x,p=2*m;bt(p,d)||(f[m+6]=f[m+6]/St-x)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){const i=this.geometry,r=this._indirectBuffer,a=i.attributes.position,o=i.index?i.index.array:null,l=(r?r[e]:e)*3;let u=l+0,h=l+1,f=l+2;o&&(u=o[u],h=o[h],f=o[f]);for(let d=0;d<3;d++){const x=a[$o[d]](u),_=a[$o[d]](h),m=a[$o[d]](f);let p=x;_<p&&(p=_),m<p&&(p=m);let g=x;_>g&&(g=_),m>g&&(g=m),t[n+d]=p,t[n+d+3]=g}return t}computePrimitiveBounds(e,t,n){const i=this.geometry,r=this._indirectBuffer,a=i.attributes.position,o=i.index?i.index.array:null,c=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const l=a.array,u=a.offset||0;let h=3;a.isInterleavedBufferAttribute&&(h=a.data.stride);const f=["getX","getY","getZ"],d=n.offset;for(let x=e,_=e+t;x<_;x++){const p=(r?r[x]:x)*3,g=(x-d)*6;let v=p+0,y=p+1,M=p+2;o&&(v=o[v],y=o[y],M=o[M]),c||(v=v*h+u,y=y*h+u,M=M*h+u);for(let S=0;S<3;S++){let A,E,T;c?(A=a[f[S]](v),E=a[f[S]](y),T=a[f[S]](M)):(A=l[v+S],E=l[y+S],T=l[M+S]);let b=A;E<b&&(b=E),T<b&&(b=T);let C=A;E>C&&(C=E),T>C&&(C=T);const w=(C-b)/2,D=S*2;n[g+D+0]=b+w,n[g+D+1]=w+(Math.abs(b)+w)*Ra}}return n}raycastObject3D(e,t,n=[]){const{material:i}=e;if(i===void 0)return;Ih.copy(e.matrixWorld).invert(),va.copy(t.ray).applyMatrix4(Ih),Dh.setFromMatrixScale(e.matrixWorld),Ph.copy(va.direction).multiply(Dh);const r=Ph.length(),a=t.near/r,o=t.far/r;if(t.firstHitOnly===!0){let c=this.raycastFirst(va,i,a,o);c=Ch(c,e,t),c&&n.push(c)}else{const c=this.raycast(va,i,a,o);for(let l=0,u=c.length;l<u;l++){const h=Ch(c[l],e,t);h&&n.push(h)}}return n}refit(e=null){return(this.indirect?Wv:Iv)(this,e)}raycast(e,t=Pn,n=0,i=1/0){const r=this._roots,a=[],o=this.indirect?Xv:Uv;for(let c=0,l=r.length;c<l;c++)o(this,c,t,e,a,n,i);return a}raycastFirst(e,t=Pn,n=0,i=1/0){const r=this._roots;let a=null;const o=this.indirect?Yv:Bv;for(let c=0,l=r.length;c<l;c++){const u=o(this,c,t,e,n,i);u!=null&&(a==null||u.distance<a.distance)&&(a=u)}return a}intersectsGeometry(e,t){let n=!1;const i=this._roots,r=this.indirect?jv:Ov;for(let a=0,o=i.length;a<o&&(n=r(this,a,e,t),!n);a++);return n}shapecast(e){const t=gn.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?Nv:Pv});return gn.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const a=gn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?x=>{const _=this.resolveTriangleIndex(x);Tt(a,_*3,o,c)}:x=>{Tt(a,x*3,o,c)},u=gn.getPrimitive(),h=e.geometry.index,f=e.geometry.attributes.position,d=e.indirect?x=>{const _=e.resolveTriangleIndex(x);Tt(u,_*3,h,f)}:x=>{Tt(u,x*3,h,f)};if(r){if(!(e instanceof br))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const x=(_,m,p,g,v,y,M,S)=>{for(let A=p,E=p+g;A<E;A++){d(A),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let T=_,b=_+m;T<b;T++)if(l(T),a.needsUpdate=!0,r(a,u,T,A,v,y,M,S))return!0}return!1};if(i){const _=i;i=function(m,p,g,v,y,M,S,A){return _(m,p,g,v,y,M,S,A)?!0:x(m,p,g,v,y,M,S,A)}}else i=x}return super.bvhcast(e,t,{intersectsRanges:i})}intersectsBox(e,t){return _a.set(e.min,e.max,t),_a.needsUpdate=!0,this.shapecast({intersectsBounds:n=>_a.intersectsBox(n),intersectsTriangle:n=>_a.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,a=1/0){return(this.indirect?Qv:Hv)(this,e,t,n,i,r,a)}closestPointToPoint(e,t={},n=0,i=1/0){return Av(this,e,t,n,i)}}const Jo=new WeakMap;function ey(s,e=null,t=null){if(Jo.has(s))return Jo.get(s);const n=performance.now();s.computeBoundingBox();const i=s.boundingBox.getSize(new I),r=Math.max(...i.toArray(),1e-6),a=s.attributes.position,o=s.attributes.normal,c=a.count,l=new Map,u=new Uint32Array(c),h=[],f=1/(r*1e-5);for(let ee=0;ee<c;ee++){const Me=[a.getX(ee),a.getY(ee),a.getZ(ee)].map(xe=>Math.round(xe*f)).join(",");l.has(Me)||(l.set(Me,h.length),h.push({members:[],neighbors:new Set})),u[ee]=l.get(Me),h[u[ee]].members.push(ee)}const d=s.index,x=d?d.count:c;for(let ee=0;ee<x;ee+=3){const Me=[0,1,2].map(xe=>u[d?d.getX(ee+xe):ee+xe]);for(let xe=0;xe<3;xe++)for(let Fe=0;Fe<3;Fe++)Me[xe]!==Me[Fe]&&h[Me[xe]].neighbors.add(Me[Fe])}const _=h.map(ee=>new I().fromBufferAttribute(a,ee.members[0])),m=new Float32Array(h.length),p=new Float32Array(h.length),g=new Float32Array(h.length),v=new Float32Array(h.length),y=new Float32Array(h.length),M=new Float32Array(h.length),S=new I,A=new I,E=new I,T=new I;for(let ee=0;ee<h.length;ee++){const Me=h[ee];S.set(0,0,0);for(const Fe of Me.members)E.fromBufferAttribute(o,Fe),S.add(E);S.normalize(),T.set(0,0,0);let xe=0;for(const Fe of Me.neighbors)T.add(_[Fe]),xe+=A.copy(_[Fe]).sub(_[ee]).length();if(Me.neighbors.size){T.multiplyScalar(1/Me.neighbors.size).sub(_[ee]),xe/=Me.neighbors.size;const Fe=T.dot(S)/Math.max(xe,1e-8);m[ee]=Math.max(0,Fe),g[ee]=Math.max(0,-Fe),p[ee]=Math.min(512,Math.max(0,Fe)*r/Math.max(xe,1e-7)),v[ee]=Math.min(512,Math.max(0,-Fe)*r/Math.max(xe,1e-7))}}for(const ee of[m,p,g,v])for(let Me=0;Me<2;Me++){const xe=ee.slice();for(let Fe=0;Fe<h.length;Fe++){let U=ee[Fe]*2,We=2;for(const Ye of h[Fe].neighbors)U+=ee[Ye],We++;xe[Fe]=U/We}ee.set(xe)}const b=new br(s,{indirect:!0}),C=new Wi,w=new I,D=new I,N=new I,B=new I,k=8,H=e?.bvh??b,O=e?.length??r,j=t??new Pe,J=new qe().getNormalMatrix(j);for(let ee=0;ee<h.length;ee++){const Me=h[ee];S.set(0,0,0);for(const U of Me.members)E.fromBufferAttribute(o,U),S.add(E);S.normalize(),S.applyMatrix3(J).normalize(),B.set(Math.abs(S.y)<.9?0:1,Math.abs(S.y)<.9?1:0,0),w.crossVectors(S,B).normalize(),D.crossVectors(S,w),C.origin.copy(_[ee]).applyMatrix4(j).addScaledVector(S,O*7e-4);let xe=0,Fe=0;for(let U=0;U<k;U++){const We=Math.sqrt(1-(U+.5)/k),Ye=Math.sqrt(1-We*We),nt=U*2.39996323;N.copy(S).multiplyScalar(We).addScaledVector(w,Ye*Math.cos(nt)).addScaledVector(D,Ye*Math.sin(nt)),C.direction.copy(N);const ve=H.raycastFirst(C,kt,O*5e-4,O*.28);ve&&(xe+=Math.exp(-ve.distance/(O*.028)),Fe+=Math.exp(-ve.distance/(O*.11)))}y[ee]=xe/k,M[ee]=Fe/k}const ne=Array.from(p).filter(ee=>ee>.05&&Number.isFinite(ee)).sort((ee,Me)=>ee-Me),Se=ne[Math.floor(ne.length*.3)]??0,fe=Math.max(Se+.01,ne[Math.floor(ne.length*.8)]??1),ze=new Float32Array(c*3);for(let ee=0;ee<c;ee++){const Me=u[ee],xe=Wt.smoothstep(p[Me],Se,fe);ze.set([xe*.12,g[Me],y[Me]],ee*3)}const Ve=new lt(ze,3);s.setAttribute("inkGeometry",Ve);const q=new lt(Float32Array.from(u,ee=>v[ee]),1);s.setAttribute("inkCurvature",q);const K=new lt(Float32Array.from(u,ee=>M[ee]),1);s.setAttribute("inkMacroOcclusion",K);const ae=Array.from(v).filter(Number.isFinite).sort((ee,Me)=>ee-Me),Ee=[ae[Math.floor(ae.length*.65)]||0,ae[Math.min(ae.length-1,Math.floor(ae.length*.92))]||1];Ee[1]=Math.max(Ee[1],Ee[0]+.01);const _e={attribute:Ve,curvature:q,curvatureRange:Ee,macro:K,bvh:b,surfaceGraph:{groups:h,positions:_,ids:u},vertices:c,uniqueVertices:h.length,raySamples:h.length*k,milliseconds:performance.now()-n};return Jo.set(s,_e),_e}class Sf{constructor(){this.items=[]}push(e,t){const n={node:e,priority:t},i=this.items;let r=i.length;for(i.push(n);r>0;){const a=r-1>>1;if(i[a].priority<=t)break;i[r]=i[a],r=a}i[r]=n}pop(){const e=this.items;if(!e.length)return null;const t=e[0],n=e.pop();if(e.length){let i=0;for(;;){let r=i*2+1;if(r>=e.length||(r+1<e.length&&e[r+1].priority<e[r].priority&&r++,e[r].priority>=n.priority))break;e[i]=e[r],i=r}e[i]=n}return t}get length(){return this.items.length}}function ty(s,e,t){if(e===t)return[e];const{groups:n,positions:i}=s,r=n.length,a=new Float64Array(r).fill(1/0),o=new Int32Array(r).fill(-1),c=new Uint8Array(r),l=new Sf;for(a[e]=0,l.push(e,i[e].distanceTo(i[t]));l.length;){const{node:h}=l.pop();if(!c[h]){if(c[h]=1,h===t)break;for(const f of n[h].neighbors){if(c[f])continue;const d=a[h]+i[h].distanceTo(i[f]);d<a[f]&&(a[f]=d,o[f]=h,l.push(f,d+i[f].distanceTo(i[t])))}}}if(o[t]===-1)return[];const u=[t];for(;u.at(-1)!==e;)u.push(o[u.at(-1)]);return u.reverse()}function ny(s,e=17){if(s.length<=e)return s.map((r,a)=>a);const t=[0,s.length-1],n=new I,i=new I;for(;t.length<e;){let r=-1,a=-1;for(let o=1;o<t.length;o++){const c=t[o-1],l=t[o];n.copy(s[l]).sub(s[c]);for(let u=c+1;u<l;u++){i.copy(s[u]).sub(s[c]);const h=Wt.clamp(i.dot(n)/Math.max(n.lengthSq(),1e-12),0,1),f=i.addScaledVector(n,-h).lengthSq();f>a&&(a=f,r=u)}}if(r<0||a<1e-10)break;t.push(r),t.sort((o,c)=>o-c)}return t}function iy(s,e,t,n,i,r){const a=[],o={point:new I,distance:0,faceIndex:-1},c=s.map(d=>d.map(x=>e.positions[x].clone()));for(const d of c)for(let x=0;x<3;x++){const _=d.map(m=>m.clone());for(let m=1;m<d.length-1;m++){const p=d[m-1].clone().add(d[m+1]).multiplyScalar(.5).lerp(d[m],.3);t.bvh.closestPointToPoint(p,o),_[m].copy(o.point)}d.forEach((m,p)=>m.copy(_[p]))}const l=c.map(d=>{const x=[0];for(let _=1;_<d.length;_++)x.push(x.at(-1)+d[_].distanceTo(d[_-1]));return x}),u=Math.max(1e-8,l.reduce((d,x)=>d+x.at(-1),0));let h=0;const f=Math.max(1,Math.floor(r/Math.max(1,c.length)));for(let d=0;d<c.length;d++){const x=c[d],_=l[d];if(!x.length)continue;const m=ny(x,f+1);m.length===1&&m.push(m[0]);for(let p=1;p<m.length;p++){const g=m[p-1],v=m[p],y=n.radius*Math.max(.08,i((h+_[g])/u)),M=n.radius*Math.max(.08,i((h+_[v])/u));a.push({a:[...x[g].toArray(),y],b:[...x[v].toArray(),M],kind:n.kind==="ink"?0:1,amount:n.amount??1})}h+=_.at(-1)}return a}function sy(s,e=[],t){if(s.hasAttribute("inkGuides")&&!e.length)return{paths:0,preserved:!0};const n=performance.now(),i=s.attributes.position.count,r=new Float32Array(i*2),a={paths:e.length,connectedSegments:0,missingSegments:0,coveredVertices:0,milliseconds:0,gpuSegments:[]};if(!e.length)return s.setAttribute("inkGuides",new lt(r,2)),a;const o=t.surfaceGraph,c=o.groups.length,l=s.attributes.position,u=e.map(y=>{let M=0;for(let S=1;S<y.points.length;S++)M+=new I(...y.points[S]).distanceTo(new I(...y.points[S-1]));return Math.max(M,.001)*(y.importance??1)}),h=u.reduce((y,M)=>y+M,0),f=Math.max(0,64-e.length*2),d=u.map(y=>2+Math.floor(f*y/h));let x=64-d.reduce((y,M)=>y+M,0);for(let y=0;x>0;y++,x--)d[y%d.length]++;const _={point:new I,distance:0,faceIndex:-1},m=new I,p=s.index,g=new Float32Array(c*2);function v(y){t.bvh.closestPointToPoint(new I(...y),_);let M=0,S=1/0;for(let A=0;A<3;A++){const E=p?p.getX(_.faceIndex*3+A):_.faceIndex*3+A,T=m.fromBufferAttribute(l,E).distanceToSquared(_.point);T<S&&(S=T,M=o.ids[E])}return M}for(let y=0;y<e.length;y++){const M=e[y];if(M.points.length<2||!(M.radius>0))continue;const S=M.points.map(v),A=[],E=[];let T=[];for(let H=1;H<S.length;H++){const O=ty(o,S[H-1],S[H]);if(O.length){a.connectedSegments++,T.length&&T.at(-1)!==O[0]&&(E.push(T),T=[]);for(const j of O)A.at(-1)!==j&&A.push(j),T.at(-1)!==j&&T.push(j)}else a.missingSegments++,T.length&&(E.push(T),T=[])}if(T.length&&E.push(T),!E.length)for(const H of S)E.push([H]);A.length||A.push(...S);const b=[0];for(let H=1;H<A.length;H++)b.push(b.at(-1)+o.positions[A[H]].distanceTo(o.positions[A[H-1]]));const C=Math.max(b.at(-1),1e-8),w=H=>{if(M.pressure?.length){const O=H*(M.pressure.length-1),j=Math.min(M.pressure.length-2,Math.floor(O));return Wt.lerp(M.pressure[j],M.pressure[j+1],O-j)}return .25+.75*Math.pow(Math.sin(Math.PI*H),.55)};a.gpuSegments.push(...iy(E,o,t,M,w,d[y]));const D=new Float64Array(c).fill(1/0),N=new Float32Array(c),B=new Sf,k=M.kind==="ink"?0:1;for(let H=0;H<A.length;H++){const O=A[H],j=M.radius*Math.max(.08,w(b[H]/C));(D[O]>0||j>N[O])&&(D[O]=0,N[O]=j,B.push(O,0))}for(;B.length;){const{node:H,priority:O}=B.pop();if(O>D[H]||O>1)continue;const j=(1-Wt.smoothstep(O,.7,1))*(M.amount??1);g[H*2+k]=Math.max(g[H*2+k],j);for(const J of o.groups[H].neighbors){const ne=O+o.positions[H].distanceTo(o.positions[J])/N[H];ne<=1&&ne<D[J]&&(D[J]=ne,N[J]=N[H],B.push(J,ne))}}}for(let y=0;y<i;y++)r[y*2]=g[o.ids[y]*2],r[y*2+1]=g[o.ids[y]*2+1],(r[y*2]>.01||r[y*2+1]>.01)&&a.coveredVertices++;return a.gpuSegments=a.gpuSegments.slice(0,64),s.setAttribute("inkGuides",new lt(r,2)),a.milliseconds=performance.now()-n,a}function ry(s){s.updateWorldMatrix(!0,!0);const e=s.matrixWorld.clone().invert(),t=[];let n=0;if(s.traverse(l=>{if(!l.isMesh)return;let u=!0;for(let d=l;d&&d!==s;d=d.parent)if(!d.visible){u=!1;break}if(!u)return;const h=l.geometry,f=h.index?.count??h.attributes.position.count;t.push({mesh:l,count:f,matrix:e.clone().multiply(l.matrixWorld)}),n+=f}),!n)return null;const i=new Float32Array(n*3),r=new I;let a=0;for(const{mesh:l,count:u,matrix:h}of t){const f=l.geometry,d=f.attributes.position;for(let x=0;x<u;x++){const _=f.index?f.index.getX(x):x;r.fromBufferAttribute(d,_).applyMatrix4(h),r.toArray(i,a),a+=3}}const o=new Lt;o.setAttribute("position",new lt(i,3)),o.computeBoundingBox();const c=o.boundingBox.getSize(new I);return{geometry:o,bvh:new br(o,{indirect:!0}),inverse:e,length:Math.max(...c.toArray(),1e-6)}}const ay="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}",oy=`
varying vec2 vUv;
uniform sampler2D tInput;
uniform sampler2D tNoise;
uniform float uAspect;
uniform float uAmount;
uniform float uBlurWidth;
uniform float uBlurFrequency;
uniform float uInterval;
uniform float uEdgeContrast;
uniform float uEdgeStrength;
uniform vec3 uInkColor;
uniform float uSplit;
vec2 toScreen(vec2 uv){vec2 p=uv-.5;p.x*=uAspect;return p;}
vec2 toUV(vec2 p){p.x/=uAspect;return p+.5;}
vec3 sampleColor(vec2 p){return texture2D(tInput,clamp(toUV(p),vec2(0.0),vec2(1.0))).rgb;}
float luminance(vec2 p){return dot(sampleColor(p),vec3(.2126,.7152,.0722));}
vec3 sampleNoise(vec2 p){return texture2D(tNoise,p).rgb;}
vec2 gradient(vec2 p,float frequency){
  vec2 dx=vec2(uInterval/200.0,0.0);
  vec2 g=vec2(luminance(p+dx.xy)-luminance(p-dx.xy),luminance(p+dx.yx)-luminance(p-dx.yx));
  return g+(sampleNoise(p*.4*frequency).gb-.5)*.05;
}
vec2 direction(vec2 v){return v/max(length(v),.00001);}
float edgeStep(inout vec2 p,float stride){
  vec2 g=gradient(p,1.0);float edge=clamp(length(g)*10.0,0.0,1.0),pattern=sampleNoise(p*.8).r;
  p+=direction(vec2(-g.y,g.x))*stride;return pattern*edge;
}
vec3 fillStep(inout vec2 p,float stride){p+=direction(gradient(p,uBlurFrequency))*stride;return sampleColor(p);}
void main(){
  vec2 origin=toScreen(vUv),en=origin,ep=origin,cn=origin,cp=origin;
  float edges=0.0,edgeWeights=0.0,colorWeights=0.0;vec3 colors=vec3(0.0);
  const float stride=.04/6.0;
  for(int i=0;i<6;i++){
    float t=float(i)/6.0,we=1.5-t,wc=.2+t;
    edges+=(edgeStep(en,-stride)+edgeStep(ep,stride))*we;edgeWeights+=we*2.0;
    colors+=(fillStep(cn,-stride*uBlurWidth)+fillStep(cp,stride*uBlurWidth)*.3)*wc;colorWeights+=wc*1.3;
  }
  edges=clamp((edges/edgeWeights-.5)*uEdgeContrast+.5,0.0,1.0);
  vec3 processed=mix(vec3(1.0),uInkColor,uEdgeStrength*edges)*(colors/colorWeights);
  vec3 original=texture2D(tInput,vUv).rgb;
  gl_FragColor=vec4(vUv.x<uSplit?original:mix(original,processed,uAmount),1.0);
  #include <colorspace_fragment>
}`;function cy(){const e=new Uint8Array(65536),t=(r,a,o)=>{let c=Math.imul(r,374761393)^Math.imul(a,668265263)^o;return c=Math.imul(c^c>>>13,1274126177),((c^c>>>16)>>>0)/4294967295};function n(r,a,o,c){const l=r/128*o,u=a/128*o,h=Math.floor(l),f=Math.floor(u);let d=l-h,x=u-f;d=d*d*(3-2*d),x=x*x*(3-2*x);const _=(m,p)=>t((h+m)%o,(f+p)%o,c);return Wt.lerp(Wt.lerp(_(0,0),_(1,0),d),Wt.lerp(_(0,1),_(1,1),d),x)}for(let r=0;r<128;r++)for(let a=0;a<128;a++){for(let o=0;o<3;o++)e[(r*128+a)*4+o]=Math.round(255*(n(a,r,4,o*331+17)*.35+n(a,r,8,o*731+29)*.3+n(a,r,16,o*919+37)*.22+n(a,r,32,o*127+41)*.13));e[(r*128+a)*4+3]=255}const i=new Tr(e,128,128,on);return i.wrapS=i.wrapT=Mi,i.magFilter=i.minFilter=Ft,i.needsUpdate=!0,i.userData.inkResourceKind="generated-flow-noise",i}class ly{constructor(){this.target=new xn(1,1,{depthBuffer:!1}),this.noise=cy(),this.material=new un({vertexShader:ay,fragmentShader:oy,depthTest:!1,depthWrite:!1,uniforms:{tInput:{value:this.target.texture},tNoise:{value:this.noise},uAspect:{value:1},uAmount:{value:0},uBlurWidth:{value:.7},uBlurFrequency:{value:.5},uInterval:{value:1},uEdgeContrast:{value:1.2},uEdgeStrength:{value:.45},uInkColor:{value:new Re("#182025")},uSplit:{value:0}}}),this.scene=new Ua,this.camera=new Ga,this.quad=new At(new Bs(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad)}setSize(e,t){this.target.setSize(e,t),this.material.uniforms.uAspect.value=e/t}setNoise(e){this.material.uniforms.tNoise.value=e}render(e,t,n){this.material.uniforms.uAmount.value=n,e.setRenderTarget(t),e.render(this.scene,this.camera)}dispose(){this.target.dispose(),this.noise.dispose(),this.material.dispose(),this.quad.geometry.dispose()}}const uy=`
uniform sampler2D tNormals;
uniform float uOutline;
uniform float uOutlineWidth;
uniform float uOutlineDetail;
uniform float uOutlineBreak;
vec3 outlineNormal(vec2 uv){
  vec4 encoded=texture2D(tNormals,uv);
  return encoded.a>.01?normalize(encoded.rgb/encoded.a*2.0-1.0):vec3(0,0,1);
}
float inkOutlineAt(vec2 uv,float centerInk,float fiber){
  vec2 pixel=1.0/uResolution;
  vec4 center=texture2D(tColor,uv);
  float low=center.a,high=center.a,internal=0.0;
  float centerDepth=linearDepth(uv),mass=centerInk;
  vec3 normal=vec3(0,0,1);
  if(uOutlineDetail>.001&&center.a>.5)normal=outlineNormal(uv);
  for(int i=0;i<8;i++){
    float angle=float(i)*.78539816;
    vec2 q=uv+vec2(cos(angle),sin(angle))*pixel*uOutlineWidth;
    vec4 other=texture2D(tColor,q);
    low=min(low,other.a);high=max(high,other.a);
    mass=max(mass,pigmentAt(other)*other.a);
    if(uOutlineDetail>.001&&min(center.a,other.a)>.5){
      float normalEdge=smoothstep(.22,.58,length(normal-outlineNormal(q)));
      float depthEdge=smoothstep(.012,.045,abs(centerDepth-linearDepth(q))/max(centerDepth,.01));
      internal=max(internal,max(normalEdge,depthEdge));
    }
  }
  float silhouette=smoothstep(.03,.80,high-low);
  float line=max(silhouette,internal*uOutlineDetail);
  float broken=mix(1.0,.25+.75*smoothstep(.30,.64,fiber),uOutlineBreak);
  float pressure=.55+.45*smoothstep(.08,.80,mass);
  return clamp(line*uOutline*broken*pressure,0.0,.95);
}
`,hy=`
varying vec3 vPaint;
varying vec3 vNormal;
varying vec3 vFormNormal;
attribute vec3 inkGeometry;
varying vec3 vGeometry;
attribute vec2 inkGuides;
varying vec2 vGuides;
attribute float inkCurvature;
varying float vCurvature;
attribute float inkMacroOcclusion;
varying float vMacroOcclusion;
uniform vec3 uCenter;
uniform float uObjectScale;
#include <skinning_pars_vertex>
void main() {
  vPaint = (position - uCenter) * uObjectScale;
  vec3 objectNormal=normal;
  vec3 transformed=position;
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <skinning_vertex>
  vNormal = normalize(normalMatrix * objectNormal);
  vFormNormal=normal;
  vGeometry=inkGeometry;
  vGuides=inkGuides;
  vCurvature=inkCurvature;
  vMacroOcclusion=inkMacroOcclusion;
  #include <project_vertex>
}`,Ll=`
float hash(vec3 p) {
  p = fract(p * .1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}
float noise3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
                 mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                 mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p) {
  return noise3(p) * .57 + noise3(p * 2.03 + 9.2) * .28 + noise3(p * 4.07 + 3.1) * .15;
}`,fy=`
varying vec3 vPaint;
varying vec3 vNormal;
varying vec3 vFormNormal;
varying vec3 vGeometry;
varying vec2 vGuides;
varying float vCurvature;
varying float vMacroOcclusion;
uniform vec3 uLightView;
uniform vec3 uFlow;
uniform float uDensity;
uniform float uDry;
uniform float uScale;
uniform float uGranulation;
uniform vec3 uReserveDirection;
uniform float uReserveStrength;
uniform vec2 uToneRange;
uniform float uGeometryInfluence;
uniform float uTwoSidedInk;
uniform float uWetness;
uniform float uRidgeReserve;
uniform vec2 uCurvatureRange;
uniform float uMacroInk;
uniform float uInkPooling;
uniform float uBaseWash;
#if INK_GUIDE_COUNT > 0
uniform vec4 uGuideStart[INK_GUIDE_COUNT];
uniform vec4 uGuideEnd[INK_GUIDE_COUNT];
uniform vec2 uGuidePaint[INK_GUIDE_COUNT];
#endif
${Ll}
${vf}
vec2 guideCoverage(vec3 p){
  vec2 guides=vec2(0.0);
  #if INK_GUIDE_COUNT > 0
  float ragged=(noise3(p*180.0+vec3(3.1,7.2,1.8))-.5)*(.10+uDry*.25);
  float fiber=noise3(p*420.0+vec3(1.3,8.1,5.5));
  float inkLoad=(.88+.12*noise3(p*42.0+vec3(4.7,2.2,8.1)))*(1.0-(1.0-fiber)*uDry*uGranulation*.35);
  for(int i=0;i<INK_GUIDE_COUNT;i++){
    vec3 edge=uGuideEnd[i].xyz-uGuideStart[i].xyz;
    float t=clamp(dot(p-uGuideStart[i].xyz,edge)/max(dot(edge,edge),.00000001),0.0,1.0);
    float radius=mix(uGuideStart[i].w,uGuideEnd[i].w,t);
    float distance=length(p-mix(uGuideStart[i].xyz,uGuideEnd[i].xyz,t))/max(radius,.000001);
    float coverage=(1.0-smoothstep(mix(.82,.45,uWetness),1.0,distance+ragged))*uGuidePaint[i].y*inkLoad;
    if(uGuidePaint[i].x<.5)guides.x=max(guides.x,coverage);else guides.y=max(guides.y,coverage);
  }
  #else
  guides=vGuides;
  #endif
  return guides;
}
void main() {
  vec3 n = normalize(vNormal) * (gl_FrontFacing ? 1.0 : -1.0);
  vec3 direction = normalize(uFlow);
  vec3 a = normalize(cross(direction, abs(direction.y) < .9 ? vec3(0,1,0) : vec3(1,0,0)));
  vec3 b = cross(direction, a);
  vec3 p = vec3(dot(vPaint,a), dot(vPaint,b), dot(vPaint,direction));
  vec3 q = p * uScale;
  vec3 formNormal=normalize(vFormNormal);
  vec3 paintNormal=vec3(dot(formNormal,a),dot(formNormal,b),dot(formNormal,direction));
  float wash = movingInkFbm(p,paintNormal,vec3(0,0,1),vec3(8.0,9.0,5.5)*uScale,vec3(2.7,8.3,1.9));
  float pooling = movingInkFbm(p,paintNormal,vec3(0,0,1),vec3(19.0)*uScale,vec3(12.3,4.1,7.8));
  float light = dot(n, normalize(uLightView)) * .5 + .5;
  // Ink is organized in object space; lighting only gently modulates it.
  float orientation=dot(normalize(vFormNormal),-normalize(uReserveDirection));
  float dorsal=mix(orientation*.5+.5,abs(orientation),uTwoSidedInk);
  float cavity=smoothstep(.015,.12,vGeometry.x);
  float ridge=smoothstep(.17,.32,vGeometry.y);
  float occlusion=smoothstep(.03,.62,vGeometry.z);
  float pigment=mix(uToneRange.x,uToneRange.y,pow(dorsal,1.05));
  pigment*=.88+.24*wash;
  pigment+=(cavity*uInkPooling+occlusion*.16-ridge*.19)*uGeometryInfluence;
  pigment+=smoothstep(.05,.55,vMacroOcclusion)*uMacroInk;
  float ridgePaper=smoothstep(uCurvatureRange.x,uCurvatureRange.y,vCurvature)*(1.0-smoothstep(.25,.85,vGeometry.z))*uRidgeReserve;
  pigment*=uBaseWash;
  vec2 guides=guideCoverage(vPaint);
  pigment=mix(pigment,.90,clamp(guides.x,0.0,1.0));
  float reserveMask=clamp(guides.y,0.0,1.0);
  reserveMask=clamp(reserveMask+(wash-.5)*reserveMask*(1.0-reserveMask)*.8,0.0,1.0);
  pigment+=((1.0-light)-.5)*.035;
  pigment*=.94+.12*pooling;
  float bristle = fbm(q * vec3(155.0, 86.0, 15.0) + vec3(3,1,7));
  float broken = smoothstep(.46,.69,bristle + .14 * (wash - .5));
  // Flying-white changes pigment coverage, not the geometry or depth buffer.
  pigment *= 1.0 - broken * uDry * .20;
  float grain = noise3(q * 560.0);
  pigment *= 1.0 + (grain - .5) * uGranulation * .55;
  float reserve=smoothstep(.05,.85,dot(normalize(vFormNormal),normalize(uReserveDirection)));
  pigment *= 1.0-reserve*uReserveStrength;
  pigment = clamp(pigment * uDensity, 0.0, 1.6);
  float paperReserve=max(reserveMask*.96,ridgePaper);
  float reflectance=exp(-pigment*3.1);
  // R: reflectance, G: reserved paper, B: object-attached ink grain, A: coverage.
  gl_FragColor = vec4(reflectance,paperReserve,grain,1.0);
}`,dy=`
varying vec2 vUv;
void main() { vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }
`,py=`
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tGray;
uniform sampler2D tDepth;
uniform sampler2D tStrokes;
uniform vec2 uResolution;
uniform vec3 uPaperColor;
uniform vec3 uInkColor;
uniform float uWet;
uniform float uEdge;
uniform float uPaper;
uniform float uNear;
uniform float uFar;
uniform float uCameraType;
uniform float uCompare;
uniform float uSplit;
uniform float uRaw;
uniform float uStrokeDecode;
${Ll}
float linearDepth(vec2 uv) {
  float d = texture2D(tDepth,uv).r;
  return mix(uNear * uFar / (uFar - d * (uFar - uNear)), mix(uNear,uFar,d), uCameraType);
}
float reflectanceAt(vec4 c){return c.a>.00001?clamp(c.r/c.a,0.0,1.0):1.0;}
float pigmentAt(vec4 c) { return 1.0-reflectanceAt(c); }
float composedInk(vec4 c,vec2 strokes){
  float reserve=c.a>.00001?clamp(c.g/c.a,0.0,1.0):0.0;
  float optical=-log(max(reflectanceAt(c),.005));
  optical=max(0.0,optical+strokes.r*uStrokeDecode*.9-strokes.g*uStrokeDecode*1.4);
  // Distinct ink loads and bristle coverage are generated by each surface
  // brush. Preserve their internal variation through optical compositing.
  return (1.0-exp(-optical))*(1.0-reserve)*c.a;
}
${uy}
void main() {
  vec2 pixel = 1.0 / uResolution;
  vec2 paperUV = gl_FragCoord.xy;
  float fiber = fbm(vec3(paperUV * vec2(.044,.105),2.0));
  float fine = noise3(vec3(paperUV*.73,7.0));
  vec3 paper = uPaperColor * (1.0 + ((fiber-.5)*.065 + (fine-.5)*.035) * uPaper);
  vec2 ragged=vec2(noise3(vec3(paperUV*.12,1.7)),noise3(vec3(paperUV*.12,8.3)))-.5;
  vec2 paintUV=vUv+ragged*pixel*(.65+uWet*3.6);
  vec4 c = texture2D(tColor,paintUV);
  vec2 strokes=texture2D(tStrokes,paintUV).rg;
  float ink=composedInk(c,strokes);
  float blurInk = ink * 2.0;
  float minimumAlpha = c.a;
  float depth = linearDepth(paintUV);
  float crease = 0.0;
  float radius = .75 + uWet * 3.7;
  // Fixed kernel: cost is bounded, with no iterative fluid simulation.
  for (int i=0; i<8; i++) {
    float angle = float(i) * .78539816;
    vec2 offset = vec2(cos(angle),sin(angle));
    vec4 nearColor = texture2D(tColor, paintUV + offset * pixel * 1.2);
    vec4 wetColor = texture2D(tColor, paintUV + offset * pixel * radius);
    minimumAlpha = min(minimumAlpha, nearColor.a);
    float otherDepth = linearDepth(paintUV + offset * pixel * 1.4);
    // Suppress the smooth surface gradient, keep actual depth jumps.
    crease = max(crease, smoothstep(.018,.065,abs(depth-otherDepth)/max(depth,.01)) * nearColor.a * c.a);
    // Bleed cannot paint through a closer, different surface.
    float wetDepth = linearDepth(paintUV + offset * pixel * radius);
    float allowed = c.a < .1 ? 1.0 : 1.0 - smoothstep(.02,.09,abs(wetDepth-depth)/max(depth,.01));
    vec2 wetStrokes=texture2D(tStrokes,paintUV+offset*pixel*radius).rg;
    blurInk += composedInk(wetColor,wetStrokes)*allowed;
  }
  blurInk /= 10.0;
  float rim = c.a * (1.0 - minimumAlpha);
  float edgeInk = (rim * .29 + crease * .15) * uEdge * smoothstep(.27,.67,fiber)*smoothstep(.08,.65,ink);
  float spread = blurInk * (1.0-c.a) * uWet * .78;
  ink = mix(ink, max(ink,blurInk), uWet*.12) + edgeInk + spread;
  if(uOutline>.001&&uRaw<.5){
    float line=inkOutlineAt(paintUV,ink,fiber);
    ink=1.0-(1.0-clamp(ink,0.0,1.0))*(1.0-line);
  }
  ink = clamp(ink,0.0,1.0);
  vec3 color = mix(paper,uInkColor,ink);
  if(uRaw > .5) {vec4 raw=texture2D(tColor,vUv);color = mix(paper,raw.rgb/max(raw.a,.00001),raw.a);}
  if(uCompare > .5 && vUv.x < uSplit) {
    vec4 gray = texture2D(tGray,vUv);
    color = mix(paper,gray.rgb/max(gray.a,.00001),gray.a);
  }
  gl_FragColor=vec4(color,1.0);
  #include <colorspace_fragment>
}`,my={expressive:{density:1.16,dry:.5,wet:.55,edge:.3,paper:.68,scale:1,brushMix:.85,washBase:.18,strokeStrength:1.4,coarseRatio:.06,tonalContrast:.95,tonalSoftness:.025}};class xy{constructor(e,t={}){this.renderer=e,this.parameters={flow:0,brushMix:0,washBase:1,strokeStrength:1,coarseRatio:0,flowBlur:.7,flowInterval:1,flowEdge:.45,outline:0,outlineWidth:1.1,outlineDetail:.35,outlineBreak:.55,inkFlow:0,inkFlowSpeed:.75,...my.expressive,...t},this.time=0,this.motionPaused=!1,this.floatInk=e.extensions.has("EXT_color_buffer_float"),this.strokeStorageScale=this.floatInk?1:.2,this.size=new pe(1,1),this.flowPass=null,this.sharedResources={};const n=new Tr(new Uint8Array([255,255,255,255]),1,1);n.needsUpdate=!0,this.fallbackBrush=n,this.brushUniforms={uBrushAtlas:{value:n},uAtlasGrid:{value:new pe(4,2)},uBrushMix:{value:0}},this.records=[],this.lightDirection=new I(.65,.75,.4).normalize(),this.lightView=new I,this.shared={uLightView:{value:this.lightView},uDensity:{value:this.parameters.density},uDry:{value:this.parameters.dry},uScale:{value:this.parameters.scale},uGranulation:{value:this.parameters.paper},uWetness:{value:this.parameters.wet},uStrokeStrength:{value:this.parameters.strokeStrength},uCoarseRatio:{value:this.parameters.coarseRatio},uInkStorageScale:{value:this.strokeStorageScale},uTonalContrast:{value:this.parameters.tonalContrast},uTonalSoftness:{value:this.parameters.tonalSoftness},uInkTime:{value:0},uInkFlow:{value:this.parameters.inkFlow}};const i={minFilter:Ft,magFilter:Ft,depthBuffer:!0};this.target=new xn(1,1,i),this.target.samples=Math.min(4,e.capabilities.maxSamples),this.target.depthTexture=new vl(1,1,Si),this.grayTarget=new xn(1,1,i),this.grayTarget.samples=this.target.samples,this.normalTarget=new xn(1,1,i),this.normalTarget.samples=this.target.samples,this.normalMaterial=new Rp({side:kt}),this.strokeTarget=new xn(1,1,{...i,depthBuffer:!1,type:this.floatInk?Hi:In}),this.strokeScene=new Ua,this.postMaterial=new un({vertexShader:dy,fragmentShader:py,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:this.target.texture},tGray:{value:this.grayTarget.texture},tDepth:{value:this.target.depthTexture},tStrokes:{value:this.strokeTarget.texture},uResolution:{value:new pe(1,1)},uPaperColor:{value:new Re("#f3f0e6")},uInkColor:{value:new Re("#101716")},uWet:{value:this.parameters.wet},uEdge:{value:this.parameters.edge},uPaper:{value:this.parameters.paper},uNear:{value:.01},uFar:{value:100},uCameraType:{value:0},uCompare:{value:0},uSplit:{value:.5},uRaw:{value:0},uStrokeDecode:{value:1/this.strokeStorageScale},tNormals:{value:this.normalTarget.texture},uOutline:{value:this.parameters.outline},uOutlineWidth:{value:this.parameters.outlineWidth*e.getPixelRatio()},uOutlineDetail:{value:this.parameters.outlineDetail},uOutlineBreak:{value:this.parameters.outlineBreak}}}),this.postScene=new Ua,this.postCamera=new Ga,this.quad=new At(new Bs(2,2),this.postMaterial),this.quad.frustumCulled=!1,this.postScene.add(this.quad),this.grayMaterial=new Os({color:"#afb3b3",roughness:1,metalness:0,side:kt}),this.savedClear=new Re}register(e,t={}){const n={flow:new I(0,0,1),reserveDirection:new I(0,-1,0),reserveStrength:0,toneRange:[.1,.65],geometryInfluence:1,strokes:!0,twoSidedInk:!1,ridgeReserve:0,macroInk:.3,inkPooling:.3,brushPaths:[],...t},i=ry(e);e.traverse(r=>{if(!r.isMesh||this.records.some(w=>w.mesh===r))return;if(r.morphTargetInfluences?.length)throw new Error("Morph targets are not supported; bake them or use skeletal animation.");const{flow:a,reserveDirection:o,reserveStrength:c,toneRange:l,geometryInfluence:u,strokes:h,twoSidedInk:f,ridgeReserve:d,macroInk:x,inkPooling:_,brushPaths:m}={...n,...r.userData.inkProfile},p=r.geometry;r.geometry=p.clone(),r.geometry.attributes.normal||r.geometry.computeVertexNormals();let g;if(!h&&u===0&&!m.length){const w=new lt(new Float32Array(r.geometry.attributes.position.count*3),3);r.geometry.setAttribute("inkGeometry",w),r.geometry.setAttribute("inkCurvature",new lt(new Float32Array(r.geometry.attributes.position.count),1)),r.geometry.setAttribute("inkMacroOcclusion",new lt(new Float32Array(r.geometry.attributes.position.count),1)),g={attribute:w,curvatureRange:[0,1],milliseconds:0,raySamples:0}}else g=ey(r.geometry,i,i?i.inverse.clone().multiply(r.matrixWorld):null);r.geometry.computeBoundingBox();const v=r.geometry.boundingBox.getCenter(new I),y=r.geometry.boundingBox.getSize(new I),M=sy(r.geometry,m,g),S=Math.max(y.x,y.y,y.z,1e-4),A=M?.gpuSegments||[],E=w=>new et((w[0]-v.x)/S,(w[1]-v.y)/S,(w[2]-v.z)/S,w[3]/S),T={uReserveDirection:{value:o.clone()},uReserveStrength:{value:Wt.clamp(c,0,1)}},b=new un({defines:{INK_GUIDE_COUNT:A.length},uniforms:{...this.shared,...T,uBaseWash:{value:h?this.parameters.washBase:1},uCenter:{value:v},uObjectScale:{value:1/S},uFlow:{value:a.clone()},uToneRange:{value:new pe(...l)},uGeometryInfluence:{value:u},uTwoSidedInk:{value:Number(f)},uRidgeReserve:{value:d},uMacroInk:{value:x},uInkPooling:{value:_},uCurvatureRange:{value:new pe(...g.curvatureRange)},uGuideStart:{value:A.map(w=>E(w.a))},uGuideEnd:{value:A.map(w=>E(w.b))},uGuidePaint:{value:A.map(w=>new pe(w.kind,w.amount))}},vertexShader:hy,fragmentShader:fy,side:kt}),C=h?new ev(r,{shared:{...this.shared,...T,...this.brushUniforms,uCenter:{value:v},uObjectScale:{value:1/S},uToneRange:{value:new pe(...l)},uTwoSidedInk:{value:Number(f)},uGeometryInfluence:{value:u}},noise:Ll,flow:a,analysis:g,objectSize:Math.max(y.x,y.y,y.z,1e-4)}):null;C&&this.strokeScene.add(C.mesh),this.records.push({mesh:r,material:b,brush:C,analysis:g,guideReport:M,original:r.material,originalGeometry:p,usesSurfaceStrokes:h})}),i?.geometry.dispose()}unregister(e){const t=new Set;e.traverse(n=>t.add(n)),this.records=this.records.filter(n=>t.has(n.mesh)?(n.mesh.material=n.original,n.mesh.geometry.dispose(),n.mesh.geometry=n.originalGeometry,n.material.dispose(),n.brush&&(this.strokeScene.remove(n.brush.mesh),n.brush.dispose()),!1):!0)}configure(e){for(const i of["density","dry","wet","edge","paper","scale","flow","brushMix","washBase","strokeStrength","coarseRatio","flowBlur","flowInterval","flowEdge","outline","outlineWidth","outlineDetail","outlineBreak","tonalContrast","tonalSoftness","inkFlow","inkFlowSpeed"])Number.isFinite(e[i])&&(this.parameters[i]=e[i]);const t=this.parameters,n=this.postMaterial.uniforms;this.shared.uDensity.value=t.density,this.shared.uDry.value=t.dry,this.shared.uScale.value=t.scale,this.shared.uGranulation.value=t.paper,this.shared.uWetness.value=t.wet,this.brushUniforms.uBrushMix.value=this.sharedResources.brushAtlas?t.brushMix:0,this.shared.uStrokeStrength.value=t.strokeStrength,this.shared.uCoarseRatio.value=t.coarseRatio,this.shared.uTonalContrast.value=t.tonalContrast,this.shared.uTonalSoftness.value=t.tonalSoftness,this.shared.uInkFlow.value=Wt.clamp(t.inkFlow,0,1);for(const i of this.records)i.material.uniforms.uBaseWash.value=i.usesSurfaceStrokes?t.washBase:1;n.uWet.value=t.wet,n.uEdge.value=t.edge,n.uPaper.value=t.paper,n.uOutline.value=t.outline,n.uOutlineWidth.value=t.outlineWidth*this.renderer.getPixelRatio(),n.uOutlineDetail.value=t.outlineDetail,n.uOutlineBreak.value=t.outlineBreak}setTime(e){Number.isFinite(e)&&(this.time=Math.max(0,e),this.shared.uInkTime.value=this.time)}advance(e){!this.motionPaused&&this.parameters.inkFlow>0&&Number.isFinite(e)&&this.setTime(this.time+Math.max(0,e)*Math.max(0,this.parameters.inkFlowSpeed))}setMotionPaused(e){this.motionPaused=!!e}setSharedResources(e){this.sharedResources=e,this.brushUniforms.uBrushAtlas.value=e.brushAtlas??this.fallbackBrush,e.atlasGrid&&this.brushUniforms.uAtlasGrid.value.copy(e.atlasGrid),this.brushUniforms.uBrushMix.value=e.brushAtlas?this.parameters.brushMix:0,this.flowPass&&e.flowNoise&&this.flowPass.setNoise(e.flowNoise)}setSize(e,t){this.size.set(e,t),this.flowPass?.setSize(e,t),this.target.setSize(e,t),this.grayTarget.setSize(e,t),this.strokeTarget.setSize(e,t),this.normalTarget.setSize(e,t),this.postMaterial.uniforms.uResolution.value.set(e,t),this.postMaterial.uniforms.uOutlineWidth.value=this.parameters.outlineWidth*this.renderer.getPixelRatio()}render(e,t,{mode:n="ink",split:i=.5}={}){const r=this.renderer,a=this.postMaterial.uniforms,o=r.getRenderTarget(),c=r.getClearAlpha(),l=r.autoClear,u=r.info.autoReset;r.getClearColor(this.savedClear);const h=e.background;e.background=null,r.autoClear=!0,r.setClearColor(0,0),r.info.autoReset=!1,r.info.reset(),t.updateMatrixWorld(),this.lightView.copy(this.lightDirection).transformDirection(t.matrixWorldInverse),a.uNear.value=t.near,a.uFar.value=t.far,a.uCameraType.value=t.isOrthographicCamera?1:0,a.uCompare.value=n==="compare"?1:0,a.uSplit.value=i,a.uRaw.value=n==="gray"?1:0;try{if(n==="compare"){for(const f of this.records)f.mesh.material=this.grayMaterial;r.setRenderTarget(this.grayTarget),r.render(e,t)}for(const f of this.records)f.mesh.material=n==="gray"?this.grayMaterial:f.material;if(r.setRenderTarget(this.target),r.render(e,t),this.parameters.outline>.001&&this.parameters.outlineDetail>.001&&n!=="gray"){const f=e.overrideMaterial;try{e.overrideMaterial=this.normalMaterial,r.setRenderTarget(this.normalTarget),r.render(e,t)}finally{e.overrideMaterial=f}}if(r.setRenderTarget(this.strokeTarget),r.setClearColor(0,1),r.clear(),n!=="gray"){for(const d of this.records)d.brush?.update(t,this.target.depthTexture,this.target.width,this.target.height);const f=r.autoClear;r.autoClear=!1,r.render(this.strokeScene,t),r.autoClear=f}if(this.parameters.flow>0&&n!=="gray"){this.flowPass||(this.flowPass=new ly,this.flowPass.setSize(this.size.x,this.size.y),this.sharedResources.flowNoise&&this.flowPass.setNoise(this.sharedResources.flowNoise));const f=this.flowPass.material.uniforms;f.uBlurWidth.value=this.parameters.flowBlur,f.uInterval.value=this.parameters.flowInterval,f.uEdgeStrength.value=this.parameters.flowEdge,f.uSplit.value=n==="compare"?i:0,r.setRenderTarget(this.flowPass.target),r.render(this.postScene,this.postCamera),this.flowPass.render(r,o,this.parameters.flow)}else r.setRenderTarget(o),r.render(this.postScene,this.postCamera);this.stats={drawCalls:r.info.render.calls,triangles:r.info.render.triangles}}finally{for(const f of this.records)f.mesh.material=f.original;e.background=h,r.setRenderTarget(o),r.setClearColor(this.savedClear,c),r.autoClear=l,r.info.autoReset=u}}dispose(){for(const e of this.records)e.mesh.material=e.original,e.mesh.geometry.dispose(),e.mesh.geometry=e.originalGeometry,e.material.dispose(),e.brush?.dispose();this.records.length=0,this.target.dispose(),this.grayTarget.dispose(),this.strokeTarget.dispose(),this.normalTarget.dispose(),this.normalMaterial.dispose(),this.grayMaterial.dispose(),this.quad.geometry.dispose(),this.postMaterial.dispose(),this.flowPass?.dispose(),this.fallbackBrush.dispose()}}async function gy(s){const e=new URL(s,globalThis.location?.href||import.meta.url),t=new lf,[n,i]=await Promise.all(["shared-ink-brush-atlas.png","shared-ink-flow-noise.png"].map(r=>t.loadAsync(new URL(r,e).href)));for(const r of[n,i])r.colorSpace=ti,r.flipY=!1,r.userData.license="CC0-1.0",r.userData.source="David Revoy, Krita 2023-01";return n.wrapS=n.wrapT=En,i.wrapS=i.wrapT=Mi,{brushAtlas:n,flowNoise:i,atlasGrid:new pe(4,2)}}class _y{constructor(e,{size:t=36,density:n=1.16,dry:i=.5,wet:r=.55,paper:a=.68,paperColor:o="#f3f0e6"}={}){this.canvas=e,this.context=e.getContext("2d"),this.parameters={size:t,density:n,dry:i,wet:r,paper:a,paperColor:o},this.count=0,this.last=null,this.listeners=[],this.pigment=document.createElement("canvas"),this.pigment.width=e.width,this.pigment.height=e.height,this.paint=this.pigment.getContext("2d");const c=(u,h)=>{e.addEventListener(u,h),this.listeners.push([u,h])},l=u=>{const h=e.getBoundingClientRect();return{x:(u.clientX-h.left)*e.width/h.width,y:(u.clientY-h.top)*e.height/h.height,time:u.timeStamp,pressure:u.pointerType==="pen"?u.pressure:.66}};c("pointerdown",u=>{u.preventDefault(),e.setPointerCapture(u.pointerId),this.last=l(u),this.stamp(this.last.x,this.last.y,this.parameters.size,0,this.last.pressure,0),this.render()}),c("pointermove",u=>{if(this.last){u.preventDefault();for(const h of u.getCoalescedEvents?.().length?u.getCoalescedEvents():[u]){const f=l(h),d=f.x-this.last.x,x=f.y-this.last.y,_=Math.hypot(d,x),m=Math.min(1,_/Math.max(1,f.time-this.last.time)/3.5),p=this.parameters.size*(.26+f.pressure*.85)*(1-m*.25),g=Math.max(1,Math.ceil(_/Math.max(1,p*.13)));for(let v=1;v<=g;v++)this.stamp(this.last.x+d*v/g,this.last.y+x*v/g,p,Math.atan2(x,d),f.pressure,m);this.last=f}this.render()}});for(const u of["pointerup","pointercancel","lostpointercapture"])c(u,()=>{this.last=null});this.render()}configure(e){Object.assign(this.parameters,e),this.render()}random(e){const t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)}stamp(e,t,n,i,r=1,a=0){const o=this.parameters,c=this.paint;if(c.save(),c.translate(e,t),c.rotate(i),o.wet>.01){c.save(),c.scale(1.1,1);const l=c.createRadialGradient(0,0,n*.25,0,0,n*(1.2+o.wet*.5)),u=Math.min(.2,.065*o.density*r*o.wet);l.addColorStop(0,`rgba(22,31,35,${u})`),l.addColorStop(.65,`rgba(22,31,35,${u*.65})`),l.addColorStop(1,"rgba(22,31,35,0)"),c.fillStyle=l,c.beginPath(),c.arc(0,0,n*(1.2+o.wet*.5),0,Math.PI*2),c.fill(),c.restore()}for(let l=0;l<25;l++){const u=(l/24*2-1)*n,h=Math.sqrt(Math.max(0,1-(u/n)**2)),f=this.random(l*7+this.count*.15);if(f<o.dry*(.18+a*.2))continue;const d=Math.min(.66,(.08+.23*r)*o.density*h*(.6+.4*f));c.strokeStyle=`rgba(22,31,35,${d})`,c.lineWidth=n*2/25*(.65+.45*f),c.lineCap="round",c.beginPath(),c.moveTo(-n*.24*h,u),c.lineTo(n*.24*h,u),c.stroke()}c.restore(),this.count++}render(){const e=this.context,t=this.parameters;e.fillStyle=t.paperColor,e.fillRect(0,0,this.canvas.width,this.canvas.height),e.globalAlpha=.025*t.paper;for(let n=0;n<2400;n++)e.fillStyle=n%2?"#4e493f":"#ffffff",e.fillRect(this.random(n+1)*this.canvas.width,this.random(n+7001)*this.canvas.height,1+this.random(n+3)*3,.7);e.globalAlpha=1,e.drawImage(this.pigment,0,0)}clear(){this.paint.clearRect(0,0,this.pigment.width,this.pigment.height),this.render()}dispose(){for(const[e,t]of this.listeners)this.canvas.removeEventListener(e,t);this.listeners=[]}}class vy extends At{constructor(e,t,n=!1,i=!1,r=1e4){const a=new Lt;super(a,t),this.isMarchingCubes=!0;const o=this,c=new Float32Array(36),l=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=i,this.init=function(g){this.resolution=g,this.isolation=80,this.size=g,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const v=r*3;this.positionArray=new Float32Array(v*3);const y=new yt(this.positionArray,3);y.setUsage(Rr),a.setAttribute("position",y),this.normalArray=new Float32Array(v*3);const M=new yt(this.normalArray,3);if(M.setUsage(Rr),a.setAttribute("normal",M),this.enableUvs){this.uvArray=new Float32Array(v*2);const S=new yt(this.uvArray,2);S.setUsage(Rr),a.setAttribute("uv",S)}if(this.enableColors){this.colorArray=new Float32Array(v*3);const S=new yt(this.colorArray,3);S.setUsage(Rr),a.setAttribute("color",S)}a.boundingSphere=new Ln(new I,1)};function h(g,v,y){return g+(v-g)*y}function f(g,v,y,M,S,A,E,T,b,C){const w=(y-E)/(T-E),D=o.normal_cache;c[v+0]=M+w*o.delta,c[v+1]=S,c[v+2]=A,l[v+0]=h(D[g+0],D[g+3],w),l[v+1]=h(D[g+1],D[g+4],w),l[v+2]=h(D[g+2],D[g+5],w),u[v+0]=h(o.palette[b*3+0],o.palette[C*3+0],w),u[v+1]=h(o.palette[b*3+1],o.palette[C*3+1],w),u[v+2]=h(o.palette[b*3+2],o.palette[C*3+2],w)}function d(g,v,y,M,S,A,E,T,b,C){const w=(y-E)/(T-E),D=o.normal_cache;c[v+0]=M,c[v+1]=S+w*o.delta,c[v+2]=A;const N=g+o.yd*3;l[v+0]=h(D[g+0],D[N+0],w),l[v+1]=h(D[g+1],D[N+1],w),l[v+2]=h(D[g+2],D[N+2],w),u[v+0]=h(o.palette[b*3+0],o.palette[C*3+0],w),u[v+1]=h(o.palette[b*3+1],o.palette[C*3+1],w),u[v+2]=h(o.palette[b*3+2],o.palette[C*3+2],w)}function x(g,v,y,M,S,A,E,T,b,C){const w=(y-E)/(T-E),D=o.normal_cache;c[v+0]=M,c[v+1]=S,c[v+2]=A+w*o.delta;const N=g+o.zd*3;l[v+0]=h(D[g+0],D[N+0],w),l[v+1]=h(D[g+1],D[N+1],w),l[v+2]=h(D[g+2],D[N+2],w),u[v+0]=h(o.palette[b*3+0],o.palette[C*3+0],w),u[v+1]=h(o.palette[b*3+1],o.palette[C*3+1],w),u[v+2]=h(o.palette[b*3+2],o.palette[C*3+2],w)}function _(g){const v=g*3;o.normal_cache[v]===0&&(o.normal_cache[v+0]=o.field[g-1]-o.field[g+1],o.normal_cache[v+1]=o.field[g-o.yd]-o.field[g+o.yd],o.normal_cache[v+2]=o.field[g-o.zd]-o.field[g+o.zd])}function m(g,v,y,M,S){const A=M+1,E=M+o.yd,T=M+o.zd,b=A+o.yd,C=A+o.zd,w=M+o.yd+o.zd,D=A+o.yd+o.zd;let N=0;const B=o.field[M],k=o.field[A],H=o.field[E],O=o.field[b],j=o.field[T],J=o.field[C],ne=o.field[w],Se=o.field[D];B<S&&(N|=1),k<S&&(N|=2),H<S&&(N|=8),O<S&&(N|=4),j<S&&(N|=16),J<S&&(N|=32),ne<S&&(N|=128),Se<S&&(N|=64);const fe=yy[N];if(fe===0)return 0;const ze=o.delta,Ve=g+ze,q=v+ze,K=y+ze;fe&1&&(_(M),_(A),f(M*3,0,S,g,v,y,B,k,M,A)),fe&2&&(_(A),_(b),d(A*3,3,S,Ve,v,y,k,O,A,b)),fe&4&&(_(E),_(b),f(E*3,6,S,g,q,y,H,O,E,b)),fe&8&&(_(M),_(E),d(M*3,9,S,g,v,y,B,H,M,E)),fe&16&&(_(T),_(C),f(T*3,12,S,g,v,K,j,J,T,C)),fe&32&&(_(C),_(D),d(C*3,15,S,Ve,v,K,J,Se,C,D)),fe&64&&(_(w),_(D),f(w*3,18,S,g,q,K,ne,Se,w,D)),fe&128&&(_(T),_(w),d(T*3,21,S,g,v,K,j,ne,T,w)),fe&256&&(_(M),_(T),x(M*3,24,S,g,v,y,B,j,M,T)),fe&512&&(_(A),_(C),x(A*3,27,S,Ve,v,y,k,J,A,C)),fe&1024&&(_(b),_(D),x(b*3,30,S,Ve,q,y,O,Se,b,D)),fe&2048&&(_(E),_(w),x(E*3,33,S,g,q,y,H,ne,E,w)),N<<=4;let ae,Ee,_e,ee=0,Me=0;for(;ya[N+Me]!=-1;)ae=N+Me,Ee=ae+1,_e=ae+2,p(c,l,u,3*ya[ae],3*ya[Ee],3*ya[_e]),Me+=3,ee++;return ee}function p(g,v,y,M,S,A){const E=o.count*3;if(o.positionArray[E+0]=g[M],o.positionArray[E+1]=g[M+1],o.positionArray[E+2]=g[M+2],o.positionArray[E+3]=g[S],o.positionArray[E+4]=g[S+1],o.positionArray[E+5]=g[S+2],o.positionArray[E+6]=g[A],o.positionArray[E+7]=g[A+1],o.positionArray[E+8]=g[A+2],o.material.flatShading===!0){const T=(v[M+0]+v[S+0]+v[A+0])/3,b=(v[M+1]+v[S+1]+v[A+1])/3,C=(v[M+2]+v[S+2]+v[A+2])/3;o.normalArray[E+0]=T,o.normalArray[E+1]=b,o.normalArray[E+2]=C,o.normalArray[E+3]=T,o.normalArray[E+4]=b,o.normalArray[E+5]=C,o.normalArray[E+6]=T,o.normalArray[E+7]=b,o.normalArray[E+8]=C}else o.normalArray[E+0]=v[M+0],o.normalArray[E+1]=v[M+1],o.normalArray[E+2]=v[M+2],o.normalArray[E+3]=v[S+0],o.normalArray[E+4]=v[S+1],o.normalArray[E+5]=v[S+2],o.normalArray[E+6]=v[A+0],o.normalArray[E+7]=v[A+1],o.normalArray[E+8]=v[A+2];if(o.enableUvs){const T=o.count*2;o.uvArray[T+0]=g[M+0],o.uvArray[T+1]=g[M+2],o.uvArray[T+2]=g[S+0],o.uvArray[T+3]=g[S+2],o.uvArray[T+4]=g[A+0],o.uvArray[T+5]=g[A+2]}o.enableColors&&(o.colorArray[E+0]=y[M+0],o.colorArray[E+1]=y[M+1],o.colorArray[E+2]=y[M+2],o.colorArray[E+3]=y[S+0],o.colorArray[E+4]=y[S+1],o.colorArray[E+5]=y[S+2],o.colorArray[E+6]=y[A+0],o.colorArray[E+7]=y[A+1],o.colorArray[E+8]=y[A+2]),o.count+=3}this.addBall=function(g,v,y,M,S,A){const E=Math.sign(M);M=Math.abs(M);const T=A!=null;let b=new Re(g,v,y);if(T)try{b=A instanceof Re?A:Array.isArray(A)?new Re(Math.min(Math.abs(A[0]),1),Math.min(Math.abs(A[1]),1),Math.min(Math.abs(A[2]),1)):new Re(A)}catch{b=new Re(g,v,y)}const C=this.size*Math.sqrt(M/S),w=y*this.size,D=v*this.size,N=g*this.size;let B=Math.floor(w-C);B<1&&(B=1);let k=Math.floor(w+C);k>this.size-1&&(k=this.size-1);let H=Math.floor(D-C);H<1&&(H=1);let O=Math.floor(D+C);O>this.size-1&&(O=this.size-1);let j=Math.floor(N-C);j<1&&(j=1);let J=Math.floor(N+C);J>this.size-1&&(J=this.size-1);let ne,Se,fe,ze,Ve,q,K,ae,Ee,_e,ee;for(fe=B;fe<k;fe++)for(Ve=this.size2*fe,ae=fe/this.size-y,Ee=ae*ae,Se=H;Se<O;Se++)for(ze=Ve+this.size*Se,K=Se/this.size-v,_e=K*K,ne=j;ne<J;ne++)if(q=ne/this.size-g,ee=M/(1e-6+q*q+_e+Ee)-S,ee>0){this.field[ze+ne]+=ee*E;const Me=Math.sqrt((ne-N)*(ne-N)+(Se-D)*(Se-D)+(fe-w)*(fe-w))/C,xe=1-Me*Me*Me*(Me*(Me*6-15)+10);this.palette[(ze+ne)*3+0]+=b.r*xe,this.palette[(ze+ne)*3+1]+=b.g*xe,this.palette[(ze+ne)*3+2]+=b.b*xe}},this.addPlaneX=function(g,v){const y=this.size,M=this.yd,S=this.zd,A=this.field;let E,T,b,C,w,D,N,B=y*Math.sqrt(g/v);for(B>y&&(B=y),E=0;E<B;E++)if(D=E/y,C=D*D,w=g/(1e-4+C)-v,w>0)for(T=0;T<y;T++)for(N=E+T*M,b=0;b<y;b++)A[S*b+N]+=w},this.addPlaneY=function(g,v){const y=this.size,M=this.yd,S=this.zd,A=this.field;let E,T,b,C,w,D,N,B,k=y*Math.sqrt(g/v);for(k>y&&(k=y),T=0;T<k;T++)if(D=T/y,C=D*D,w=g/(1e-4+C)-v,w>0)for(N=T*M,E=0;E<y;E++)for(B=N+E,b=0;b<y;b++)A[S*b+B]+=w},this.addPlaneZ=function(g,v){const y=this.size,M=this.yd,S=this.zd,A=this.field;let E,T,b,C,w,D,N,B,k=y*Math.sqrt(g/v);for(k>y&&(k=y),b=0;b<k;b++)if(D=b/y,C=D*D,w=g/(1e-4+C)-v,w>0)for(N=S*b,T=0;T<y;T++)for(B=N+T*M,E=0;E<y;E++)A[B+E]+=w},this.setCell=function(g,v,y,M){const S=this.size2*y+this.size*v+g;this.field[S]=M},this.getCell=function(g,v,y){const M=this.size2*y+this.size*v+g;return this.field[M]},this.blur=function(g=1){const v=this.field,y=v.slice(),M=this.size,S=this.size2;for(let A=0;A<M;A++)for(let E=0;E<M;E++)for(let T=0;T<M;T++){const b=S*T+M*E+A;let C=y[b],w=1;for(let D=-1;D<=1;D+=2){const N=D+A;if(!(N<0||N>=M))for(let B=-1;B<=1;B+=2){const k=B+E;if(!(k<0||k>=M))for(let H=-1;H<=1;H+=2){const O=H+T;if(O<0||O>=M)continue;const j=S*O+M*k+N,J=y[j];w++,C+=g*(J-C)/w}}}v[b]=C}},this.reset=function(){for(let g=0;g<this.size3;g++)this.normal_cache[g*3]=0,this.field[g]=0,this.palette[g*3]=this.palette[g*3+1]=this.palette[g*3+2]=0},this.update=function(){this.count=0;const g=this.size-2;for(let v=1;v<g;v++){const y=this.size2*v,M=(v-this.halfsize)/this.halfsize;for(let S=1;S<g;S++){const A=y+this.size*S,E=(S-this.halfsize)/this.halfsize;for(let T=1;T<g;T++){const b=(T-this.halfsize)/this.halfsize,C=A+T;m(b,E,M,C,this.isolation)}}}this.geometry.setDrawRange(0,this.count),a.getAttribute("position").needsUpdate=!0,a.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(a.getAttribute("uv").needsUpdate=!0),this.enableColors&&(a.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const yy=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),ya=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),el=()=>new Os({color:"#adb1ae",roughness:1,side:kt}),Oi=s=>{const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)};function by(){const e=el(),t=new vy(48,e,!1,!1,4e4);t.isolation=0;const n=(u,h,f)=>{const d=Wt.clamp(.5+.5*(h-u)/f,0,1);return Wt.lerp(h,u,d)-f*d*(1-d)},i=(u,h,f,d,x)=>(Math.sqrt(((u-d[0])/x[0])**2+((h-d[1])/x[1])**2+((f-d[2])/x[2])**2)-1)*Math.min(...x);for(let u=0;u<48;u++)for(let h=0;h<48;h++)for(let f=0;f<48;f++){const d=f/48*2-1,x=h/48*2-1,_=u/48*2-1;let m=i(d,x,_,[0,-.02,0],[.68,.83,.5]);m=n(m,i(d,x,_,[-.34,-.53,.1],[.43,.28,.34]),.15),m=n(m,i(d,x,_,[.2,.42,-.05],[.37,.39,.3]),.13),m+=.024*Math.sin(d*16+x*7+_*11)+.013*Math.sin(x*27-_*18+d*6);const p=(Math.hypot((d+.1+.025*Math.sin(_*9))/.21,(x-.25)/.28)-1)*.21,g=(Math.hypot((d+.3)/.17,(x+.33+.025*Math.sin(_*8))/.2)-1)*.17,v=(Math.hypot((x+.09)/.17,(_+.06)/.15)-1)*.15;m=Math.max(m,-p,-g,-v,-.79-x),t.field[f+h*48+u*48*48]=-m}t.update();const r=t.geometry.drawRange.count,a=new Lt;a.setAttribute("position",new lt(t.geometry.attributes.position.array.slice(0,r*3),3)),a.setAttribute("normal",new lt(t.geometry.attributes.normal.array.slice(0,r*3),3));const o=m_(a);a.dispose(),t.geometry.dispose();const c=new At(o,e);c.name="Eroded three-dimensional ink stone",c.userData.inkProfile={flow:new I(.2,1,.12),reserveDirection:new I(1,-.4,.2).normalize(),toneRange:[.08,.7],reserveStrength:.05,geometryInfluence:.7,ridgeReserve:.55,macroInk:.65,inkPooling:.65};const l=new Gn;return l.add(c),l.userData.specimen={kind:"eroded stone",source:"signed-distance sculpting and MarchingCubes; no image input",imageInputs:0},l}function ba(s,e,t,n){const i=new wp(s.map(f=>new I(...f)),!1,"centripetal"),r=32,a=9,o=i.computeFrenetFrames(r,!1),c=[],l=[];for(let f=0;f<=r;f++){const d=f/r,x=i.getPointAt(d),_=t+(e-t)*Math.pow(1-d,.9);for(let m=0;m<a;m++){const p=m/a*Math.PI*2,g=1+.1*Math.sin(p*4+d*29+n),v=x.clone().addScaledVector(o.normals[f],Math.cos(p)*_*g).addScaledVector(o.binormals[f],Math.sin(p)*_*g);c.push(...v.toArray())}}for(let f=0;f<r;f++)for(let d=0;d<a;d++){const x=f*a+d,_=f*a+(d+1)%a,m=_+a,p=x+a;l.push(x,_,p,_,m,p)}const u=c.length/3;c.push(...i.getPointAt(0).toArray(),...i.getPointAt(1).toArray());for(let f=0;f<a;f++){const d=(f+1)%a;l.push(u,d,f,u+1,r*a+f,r*a+d)}const h=new Lt;return h.setAttribute("position",new lt(c,3)),h.setIndex(l),h.computeVertexNormals(),h}function My(s,e,t,n,i,r,a){const o=n.clone().normalize(),c=new I().crossVectors(o,new I(0,1,0));c.lengthSq()<.01&&c.set(1,0,0),c.normalize();const l=s.length/3;for(let u=0;u<4;u++){const h=u/3,f=t.clone().addScaledVector(o,i*h);f.y+=Math.sin(Math.PI*h)*i*.1;const d=r*Math.pow(1-h,.7);s.push(...f.clone().addScaledVector(c,-d).toArray(),...f.clone().addScaledVector(c,d).toArray())}for(let u=0;u<3;u++){const h=l+u*2,f=h+1,d=h+2,x=h+3;e.push(h,d,f,f,d,x)}}function Sy(){const s=[],e=[],t=[],n=[[-.12,-1.5,0],[-.2,-.9,.05],[-.38,-.35,.03],[-.03,.25,-.04],[-.2,.88,.02],[.16,1.46,.02]];s.push(ba(n,.15,.023,1));const i=[{points:[[-.35,-.35,.03],[-.64,-.22,.05],[-1.14,-.15,.12],[-1.34,.04,.15]],crown:[-1.18,.15,.16],spread:.52},{points:[[-.04,.22,-.04],[.37,.12,-.12],[.81,.25,-.16],[1.11,.55,-.1]],crown:[.98,.63,-.1],spread:.66},{points:[[-.18,.76,.02],[-.44,.82,.1],[-.71,1.02,.14],[-.95,1.14,.15]],crown:[-.83,1.26,.15],spread:.52},{points:[[-.02,1.18,0],[.3,1.18,-.09],[.56,1.4,-.12]],crown:[.55,1.49,-.1],spread:.45},{points:[[.05,1.32,0],[.16,1.5,.02],[.15,1.63,.03]],crown:[.11,1.74,.04],spread:.56},{points:[[-.23,-.1,0],[-.29,.02,.52],[-.28,.2,.84]],crown:[-.28,.28,.88],spread:.44},{points:[[-.17,.83,0],[-.06,1.02,-.48],[.15,1.16,-.79]],crown:[.15,1.24,-.84],spread:.48}];for(let u=0;u<i.length;u++){const h=i[u];s.push(ba(h.points,.065-u*.007,.012,u+4));const f=new I(...h.crown);for(let d=0;d<12;d++){const x=d*2.39996323,_=Math.sqrt((d+.5)/12)*h.spread,m=f.clone().add(new I(Math.cos(x)*_,(Oi(u*40+d)-.5)*.13,Math.sin(x)*_*.53)),p=new I(...h.points.at(-2));s.push(ba([p.toArray(),m.clone().add(new I(0,-.08,0)).toArray(),m.toArray()],.012,.003,u*50+d));for(let g=0;g<120;g++){const v=g*2.39996323+x*.3,y=.06+Oi(g+u*700+d*43)*.24,M=m.clone().sub(p).normalize();M.y*=.25,M.normalize();const S=new I().crossVectors(M,new I(0,1,0)).normalize(),A=M.clone().multiplyScalar(.68).addScaledVector(S,Math.cos(v)*.48).add(new I(0,y*.8,Math.sin(v)*.15)).normalize(),E=m.clone().addScaledVector(M,-Oi(g+d*17)*.1).addScaledVector(S,(Oi(g*3+u)-.5)*.045);My(e,t,E,A,.18+Oi(g*7+d*17+u)*.2,.0035+Oi(g+d)*.003)}}}for(let u=0;u<6;u++){const h=u/6*Math.PI*2,f=[-.12+Math.cos(h)*(.32+Oi(u)*.14),-1.55,Math.sin(h)*.3];s.push(ba([n[0],[-.12+Math.cos(h)*.18,-1.43,Math.sin(h)*.12],f],.075,.012,u+50))}const r=p_(s,!1);s.forEach(u=>u.dispose());const a=new At(r,el());a.name="Pine trunk and branches",a.userData.inkProfile={flow:new I(0,1,0),reserveDirection:new I(.5,-.1,1).normalize(),toneRange:[.36,.92],reserveStrength:0,geometryInfluence:.35,ridgeReserve:.1,brushPaths:[{kind:"reserve",points:n.map((u,h)=>[u[0]+.025,u[1],u[2]+.15*(1-h/(n.length-1))+.025]),radius:.025,amount:.65,pressure:[.15,.85,.2,.95,.1,.75,.1]}]};const o=new Lt;o.setAttribute("position",new lt(e,3)),o.setIndex(t),o.computeVertexNormals();const c=new At(o,el());c.name="Volumetric pine needle groups",c.userData.inkProfile={toneRange:[.35,.72],twoSidedInk:!0,geometryInfluence:0,strokes:!1,reserveStrength:0};const l=new Gn;return l.add(a,c),l.userData.specimen={kind:"pine tree",source:"procedural 3D branches and needle ribbons",imageInputs:0},l}function Ty(){const s=new yl(.095,.17,3,16,72).rotateZ(Math.PI/2),e=s.attributes.position,t=[],n=[],i=13,r=3/(i-1);for(let l=0;l<e.count;l++){const u=e.getX(l),h=Wt.clamp((u+1.5)/r,0,i-1),f=Math.min(i-2,Math.floor(h)),d=h-f;t.push(f,f+1,0,0),n.push(1-d,d,0,0)}s.setAttribute("skinIndex",new dl(t,4)),s.setAttribute("skinWeight",new lt(n,4)),s.deleteAttribute("uv");const a=Array.from({length:i},()=>new xl);a[0].position.x=-1.5;for(let l=1;l<i;l++)a[l].position.x=r,a[l-1].add(a[l]);const o=new ml(s,new Os({color:"#aeb5b2",roughness:1}));o.add(a[0]),o.bind(new Ha(a)),o.userData.inkProfile={flow:new I(1,0,0),toneRange:[.08,.6],ridgeReserve:.1};const c=new Gn;return c.add(o),{root:c,bones:a,update(l){for(let u=1;u<i;u++)a[u].rotation.z=Math.sin(l*1.6-u*.43)*.12;c.updateMatrixWorld(!0)}}}const zt=s=>document.querySelector(s),Ti=new Q1({canvas:zt("#world"),antialias:!0,preserveDrawingBuffer:!0});Ti.setPixelRatio(Math.min(devicePixelRatio,1.6));Ti.outputColorSpace=Ut;const Gi=new Ua,bi=new jt(35,1,.01,100),ka=new t_(bi,Ti.domElement);ka.enableDamping=!0;Gi.add(new Gp("#ffffff","#65796e",2));const Tf=new uf("#ffffff",2.5);Tf.position.set(5,8,4);Gi.add(Tf);const mn=new xy(Ti,{outline:.55,outlineWidth:1.1,outlineDetail:.3,inkFlow:.68,inkFlowSpeed:.8}),Af=new _y(zt("#pad")),Ef=Ty(),Hn=new Map([["pine",Sy()],["rock",by()],["serpent",Ef.root]]);let Fs="pine",Nl="ink",cr=!1,Ca=null,Lh=0,Nh=performance.now();function wf(s){const e=new Et().setFromObject(s,!0),t=e.getCenter(new I),n=e.getSize(new I),i=Math.max(n.y,n.x/bi.aspect,n.z)*.5;bi.position.copy(t).add(new I(.38,.13,1).normalize().multiplyScalar(i/Math.tan(bi.fov*Math.PI/360)*1.24)),ka.target.copy(t),ka.update()}function za(s){Fs=s;for(const[e,t]of Hn)t.visible=e===s;zt("#world").hidden=s==="brush",zt("#pad").hidden=s!=="brush";for(const e of document.querySelectorAll("[data-subject]"))e.classList.toggle("active",e.dataset.subject===s);Hn.has(s)&&wf(Hn.get(s))}function Rf(){Ti.setSize(innerWidth,innerHeight),bi.aspect=innerWidth/innerHeight,bi.updateProjectionMatrix();const s=Ti.getDrawingBufferSize(new pe);mn.setSize(s.x,s.y),Hn.has(Fs)&&wf(Hn.get(Fs))}addEventListener("resize",Rf);async function Ay(){mn.setSharedResources(await gy(new URL("./ink/",location.href).href));for(const s of Hn.values())Gi.add(s),mn.register(s);Rf(),za("pine"),zt("#status").textContent="",window.__inkflow={ready:!0,ink:mn,renderer:Ti,scene:Gi,camera:bi,subjects:Hn,pad:Af,choose:za,inspect:()=>({subject:Fs,mode:Nl,drawCalls:mn.stats?.drawCalls,skinnedBrushes:mn.records.filter(s=>s.mesh.isSkinnedMesh).map(s=>s.brush?.skinning)})}}for(const s of document.querySelectorAll("[data-subject]"))s.onclick=()=>za(s.dataset.subject);for(const s of document.querySelectorAll("[data-mode]"))s.onclick=()=>{Nl=s.dataset.mode;for(const e of document.querySelectorAll("[data-mode]"))e.classList.toggle("active",e===s)};for(const[s,e]of[["density","density"],["dry","dry"],["flow","inkFlow"]])zt("#"+s).oninput=t=>{mn.configure({[e]:Number(t.target.value)}),Af.configure({[e]:Number(t.target.value)})};zt("#pause").onclick=()=>{cr=!cr,zt("#pause").textContent=cr?"继续":"暂停",mn.setMotionPaused(cr)};zt("#import").onclick=()=>zt("#file").click();zt("#file").onchange=async s=>{const e=s.target.files[0];if(e){zt("#status").textContent="正在读取模型…";try{const t=await new x_().parseAsync(await e.arrayBuffer(),"");if(Hn.has("custom")){const i=Hn.get("custom");mn.unregister(i),Gi.remove(i)}const n=t.scene;Gi.add(n),mn.register(n),Hn.set("custom",n),Ca=t.animations.length?new lm(n):null,Ca&&Ca.clipAction(t.animations[0]).play(),za("custom"),zt("#status").textContent=""}catch(t){zt("#status").textContent=t.message}}};zt("#save").onclick=()=>{(Fs==="brush"?zt("#pad"):Ti.domElement).toBlob(e=>{const t=document.createElement("a"),n=URL.createObjectURL(e);t.href=n,t.download="inkflow.png",t.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)})};function Cf(s){const e=Math.min(.05,(s-Nh)/1e3);Nh=s,cr||(Lh+=e,Ef.update(Lh),Ca?.update(e),mn.advance(e)),ka.update(),window.__inkflow?.ready&&Fs!=="brush"&&mn.render(Gi,bi,{mode:Nl}),requestAnimationFrame(Cf)}Ay().catch(s=>zt("#status").textContent=s.message);requestAnimationFrame(Cf);
