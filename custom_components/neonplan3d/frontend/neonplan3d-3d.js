var $d=0,Ku=1,Zd=2;var vs=1,Kd=2,vo=3,ui=0,an=1,re=2,On=0,Rn=1,we=2,Ju=3,ys=4,Al=5;var _r=100,Jd=101,jd=102,Qd=103,tp=104,El=200,_s=201,ep=202,np=203,Ms=204,ju=205,ip=206,rp=207,op=208,sp=209,ap=210,lp=211,cp=212,up=213,hp=214,Xa=0,Ya=1,qa=2,ao=3,$a=4,Za=5,Ka=6,Ja=7,Qu=0,fp=1,dp=2,qn=0,th=1,eh=2,nh=3,ih=4,rh=5,oh=6,sh=7;var ah=300,$i=301,Mr=302,Rl=303,Cl=304,ws=306,gr=1e3,Tn=1001,ja=1002,en=1003,pp=1004;var Ss=1005;var Xe=1006,Pl=1007;var Zi=1008;var Cn=1009,lh=1010,ch=1011,yo=1012,Il=1013,$n=1014,Zn=1015,Kn=1016,Ll=1017,Fl=1018,_o=1020,uh=35902,hh=35899,fh=1021,dh=1022,Nn=1023,ri=1026,Ki=1027,ph=1028,Dl=1029,Ji=1030,Ol=1031;var Nl=1033,Ts=33776,As=33777,Es=33778,Rs=33779,Ul=35840,Bl=35841,kl=35842,zl=35843,Vl=36196,Gl=37492,Hl=37496,Wl=37488,Xl=37489,Cs=37490,Yl=37491,ql=37808,$l=37809,Zl=37810,Kl=37811,Jl=37812,jl=37813,Ql=37814,tc=37815,ec=37816,nc=37817,ic=37818,rc=37819,oc=37820,sc=37821,ac=36492,lc=36494,cc=36495,uc=36283,hc=36284,Ps=36285,fc=36286;var jo=2300,Qa=2301,Ga=2302,ku=2303,zu=2400,Vu=2401,Gu=2402;var mp=3200;var mh=0,gp=1,Ai="",Ne="srgb",Qo="srgb-linear",ts="linear",_e="srgb";var Ha=7680;var bp=519,xp=512,vp=513,yp=514,dc=515,_p=516,Mp=517,pc=518,wp=519,gh=35044,bh=35048;var xh="300 es",Xn=2e3,es=2001;function Cb(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){let i=lo("canvas");return i.style.display="block",i}var md={},co=null;function ns(...i){let t="THREE."+i.shift();co?co("log",t,...i):console.log(t,...i)}function Tp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=Tp(i);let t="THREE."+i.shift();if(co)co("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=Tp(i);let t="THREE."+i.shift();if(co)co("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function mr(...i){let t=i.join(" ");t in md||(md[t]=!0,Zt(...i))}function Ap(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var Ep={[Xa]:Ya,[qa]:Ka,[$a]:Ja,[ao]:Za,[Ya]:Xa,[Ka]:qa,[Ja]:$a,[Za]:ao},oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mu=Math.PI/180,tl=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function Ib(i,t){return(i%t+t)%t}function gu(i,t,e){return(1-e)*i+e*t}function ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wh=class wh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wh.prototype.isVector2=!0;var Qt=wh,si=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=o[s+0],d=o[s+1],m=o[s+2],b=o[s+3];if(u!==b||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*b;g<0&&(f=-f,d=-d,m=-m,b=-b,g=-g);let p=1-a;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);p=Math.sin(p*x)/_,a=Math.sin(a*x)/_,l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+b*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=o[s],f=o[s+1],d=o[s+2],m=o[s+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(o/2),f=l(n/2),d=l(r/2),m=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(s-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(s-r)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sh=class Sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*n),h=2*(a*e-o*r),u=2*(o*n-s*e);return this.x=e+l*c+s*u-a*h,this.y=n+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bu.copy(this).projectOnVector(t),this.sub(bu)}reflect(t){return this.sub(bu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sh.prototype.isVector3=!0;var $=Sh,bu=new $,gd=new si,Th=class Th{constructor(t,e,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c)}set(t,e,n,r,o,s,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],b=r[0],g=r[3],p=r[6],x=r[1],_=r[4],v=r[7],M=r[2],S=r[5],E=r[8];return o[0]=s*b+a*x+l*M,o[3]=s*g+a*_+l*S,o[6]=s*p+a*v+l*E,o[1]=c*b+h*x+u*M,o[4]=c*g+h*_+u*S,o[7]=c*p+h*v+u*E,o[2]=f*b+d*x+m*M,o[5]=f*g+d*_+m*S,o[8]=f*p+d*v+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*s*h-e*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*s-a*c,f=a*l-h*o,d=c*o-s*l,m=e*u+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*s)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*o-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(s*e-n*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xu.makeScale(t,e)),this}rotate(t){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xu.makeRotation(-t)),this}translate(t,e){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Th.prototype.isMatrix3=!0;var ne=Th,xu=new ne,bd=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){let i={enabled:!0,workingColorSpace:Qo,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===_e&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_e&&(r.r=so(r.r),r.g=so(r.g),r.b=so(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?ts:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qo]:{primaries:t,whitePoint:n,transfer:ts,toXYZ:bd,fromXYZ:xd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:bd,fromXYZ:xd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}var de=Lb();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function so(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gr,el=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Gr===void 0&&(Gr=lo("canvas")),Gr.width=t.width,Gr.height=t.height;let r=Gr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Gr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ti(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fb=0,uo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(vu(r[s].image)):o.push(vu(r[s]))}else o=vu(r);n.url=o}return e||(t.images[this.uuid]=n),n}};function vu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?el.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var Db=0,yu=new $,dn=class i extends oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Tn,r=Tn,o=Xe,s=Zi,a=Nn,l=Cn,c=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Gi(),this.name="",this.source=new uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yu).x}get height(){return this.source.getSize(yu).y}get depth(){return this.source.getSize(yu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ah;dn.DEFAULT_ANISOTROPY=1;var Ah=class Ah{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,M=(p+1)/2,S=(h+f)/4,E=(u+b)/4,y=(m+g)/4;return _>v&&_>M?_<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(_),r=S/n,o=E/n):v>M?v<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(v),n=S/r,o=y/r):M<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),n=E/o,r=y/o),this.set(n,r,o,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ah.prototype.isVector4=!0;var Be=Ah,nl=class extends oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},o=new dn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new uo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends nl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},is=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var il=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Tl=class Tl{constructor(t,e,n,r,o,s,a,l,c,h,u,f,d,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c,h,u,f,d,m,b,g)}set(t,e,n,r,o,s,a,l,c,h,u,f,d,m,b,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Hr.setFromMatrixColumn(t,0).length(),o=1/Hr.setFromMatrixColumn(t,1).length(),s=1/Hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let f=s*h,d=s*u,m=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=m+d*c,e[10]=s*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,b=c*u;e[0]=f+b*a,e[4]=m*a-d,e[8]=s*c,e[1]=s*u,e[5]=s*h,e[9]=-a,e[2]=d*a-m,e[6]=b+f*a,e[10]=s*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,b=c*u;e[0]=f-b*a,e[4]=-s*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=s*h,e[9]=b-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){let f=s*h,d=s*u,m=a*h,b=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){let f=s*l,d=s*c,m=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=m*u+d,e[1]=u,e[5]=s*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-b*u}else if(t.order==="XZY"){let f=s*l,d=s*c,m=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=s*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ob,t,Nb)}lookAt(t,e,n){let r=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ui.crossVectors(n,wn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ui.crossVectors(n,wn)),Ui.normalize(),pa.crossVectors(wn,Ui),r[0]=Ui.x,r[4]=pa.x,r[8]=wn.x,r[1]=Ui.y,r[5]=pa.y,r[9]=wn.y,r[2]=Ui.z,r[6]=pa.z,r[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],_=n[7],v=n[11],M=n[15],S=r[0],E=r[4],y=r[8],R=r[12],w=r[1],A=r[5],I=r[9],L=r[13],P=r[2],B=r[6],T=r[10],C=r[14],O=r[3],D=r[7],N=r[11],z=r[15];return o[0]=s*S+a*w+l*P+c*O,o[4]=s*E+a*A+l*B+c*D,o[8]=s*y+a*I+l*T+c*N,o[12]=s*R+a*L+l*C+c*z,o[1]=h*S+u*w+f*P+d*O,o[5]=h*E+u*A+f*B+d*D,o[9]=h*y+u*I+f*T+d*N,o[13]=h*R+u*L+f*C+d*z,o[2]=m*S+b*w+g*P+p*O,o[6]=m*E+b*A+g*B+p*D,o[10]=m*y+b*I+g*T+p*N,o[14]=m*R+b*L+g*C+p*z,o[3]=x*S+_*w+v*P+M*O,o[7]=x*E+_*A+v*B+M*D,o[11]=x*y+_*I+v*T+M*N,o[15]=x*R+_*L+v*C+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],b=t[7],g=t[11],p=t[15],x=l*d-c*f,_=a*d-c*u,v=a*f-l*u,M=s*d-c*h,S=s*f-l*h,E=s*u-a*h;return e*(b*x-g*_+p*v)-n*(m*x-g*M+p*S)+r*(m*_-b*M+p*E)-o*(m*v-b*S+g*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[1],s=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(s*h-a*c)-n*(o*h-a*l)+r*(o*c-s*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],b=t[13],g=t[14],p=t[15],x=e*a-n*s,_=e*l-r*s,v=e*c-o*s,M=n*l-r*a,S=n*c-o*a,E=r*c-o*l,y=h*b-u*m,R=h*g-f*m,w=h*p-d*m,A=u*g-f*b,I=u*p-d*b,L=f*p-d*g,P=x*L-_*I+v*A+M*w-S*R+E*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return t[0]=(a*L-l*I+c*A)*B,t[1]=(r*I-n*L-o*A)*B,t[2]=(b*E-g*S+p*M)*B,t[3]=(f*S-u*E-d*M)*B,t[4]=(l*w-s*L-c*R)*B,t[5]=(e*L-r*w+o*R)*B,t[6]=(g*v-m*E-p*_)*B,t[7]=(h*E-f*v+d*_)*B,t[8]=(s*I-a*w+c*y)*B,t[9]=(n*w-e*I-o*y)*B,t[10]=(m*S-b*v+p*x)*B,t[11]=(u*v-h*S-d*x)*B,t[12]=(a*R-s*A-l*y)*B,t[13]=(e*A-n*R+r*y)*B,t[14]=(b*_-m*M-g*x)*B,t[15]=(h*M-u*_+f*x)*B,this}scale(t){let e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,a=t.y,l=t.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,h=s+s,u=a+a,f=o*c,d=o*h,m=o*u,b=s*h,g=s*u,p=a*u,x=l*c,_=l*h,v=l*u,M=n.x,S=n.y,E=n.z;return r[0]=(1-(b+p))*M,r[1]=(d+v)*M,r[2]=(m-_)*M,r[3]=0,r[4]=(d-v)*S,r[5]=(1-(f+p))*S,r[6]=(g+x)*S,r[7]=0,r[8]=(m+_)*E,r[9]=(g-x)*E,r[10]=(1-(f+b))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let s=Hr.set(r[0],r[1],r[2]).length(),a=Hr.set(r[4],r[5],r[6]).length(),l=Hr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Vn.copy(this);let c=1/s,h=1/a,u=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,o,s,a=Xn,l=!1){let c=this.elements,h=2*o/(e-t),u=2*o/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),m,b;if(l)m=o/(s-o),b=s*o/(s-o);else if(a===Xn)m=-(s+o)/(s-o),b=-2*s*o/(s-o);else if(a===es)m=-s/(s-o),b=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,o,s,a=Xn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),m,b;if(l)m=1/(s-o),b=s/(s-o);else if(a===Xn)m=-2/(s-o),b=-(s+o)/(s-o);else if(a===es)m=-1/(s-o),b=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Tl.prototype.isMatrix4=!0;var Ae=Tl,Hr=new $,Vn=new Ae,Ob=new $(0,0,0),Nb=new $(1,1,1),Ui=new $,pa=new $,wn=new $,vd=new Ae,yd=new si,Hi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ge(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yd.setFromEuler(this),this.setFromQuaternion(yd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var ho=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ub=0,_d=new $,Wr=new si,vi=new Ae,ma=new $,Ho=new $,Bb=new $,kb=new si,Md=new $(1,0,0),wd=new $(0,1,0),Sd=new $(0,0,1),Td={type:"added"},zb={type:"removed"},Xr={type:"childadded",child:null},_u={type:"childremoved",child:null},vn=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,e=new Hi,n=new si,r=new $(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new ne}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.premultiply(Wr),this}rotateX(t){return this.rotateOnAxis(Md,t)}rotateY(t){return this.rotateOnAxis(wd,t)}rotateZ(t){return this.rotateOnAxis(Sd,t)}translateOnAxis(t,e){return _d.copy(t).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Md,t)}translateY(t){return this.translateOnAxis(wd,t)}translateZ(t){return this.translateOnAxis(Sd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ma.copy(t):ma.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ho,ma,this.up):vi.lookAt(ma,Ho,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(vi),this.quaternion.premultiply(Wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Td),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zb),_u.child=t,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Td),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,Bb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,kb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*r,o[13]+=n-o[1]*e-o[5]*n-o[9]*r,o[14]+=r-o[2]*e-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){let a=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),f=s(t.skeletons),d=s(t.animations),m=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new $(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ie=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vb={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Mu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=de.workingColorSpace){if(t=Ib(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=Mu(s,o,t+1/3),this.g=Mu(s,o,t),this.b=Mu(s,o,t-1/3)}return de.colorSpaceToWorking(this,r),this}setStyle(t,e=Ne){function n(o){o!==void 0&&parseFloat(o)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Rp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return de.workingToColorSpace(fn.copy(this),t),Math.round(ge(fn.r*255,0,255))*65536+Math.round(ge(fn.g*255,0,255))*256+Math.round(ge(fn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(fn.copy(this),e);let n=fn.r,r=fn.g,o=fn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-n)/u+2;break;case o:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Ne){de.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,r=fn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(ga);let n=gu(Bi.h,ga.h,e),r=gu(Bi.s,ga.s,e),o=gu(Bi.l,ga.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new tt;tt.NAMES=Rp;var po=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ai=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new $,yi=new $,wu=new $,_i=new $,Yr=new $,qr=new $,Ad=new $,Su=new $,Tu=new $,Au=new $,Eu=new Be,Ru=new Be,Cu=new Be,Si=class i{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Gn.subVectors(t,e),r.cross(Gn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Gn.subVectors(r,e),yi.subVectors(n,e),wu.subVectors(t,e);let s=Gn.dot(Gn),a=Gn.dot(yi),l=Gn.dot(wu),c=yi.dot(yi),h=yi.dot(wu),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(s*h-a*l)*f;return o.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,r,o,s,a,l){return this.getBarycoord(t,e,n,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,_i.x),l.addScaledVector(s,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,n,r,o,s){return Eu.setScalar(0),Ru.setScalar(0),Cu.setScalar(0),Eu.fromBufferAttribute(t,e),Ru.fromBufferAttribute(t,n),Cu.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(Eu,o.x),s.addScaledVector(Ru,o.y),s.addScaledVector(Cu,o.z),s}static isFrontFacing(t,e,n,r){return Gn.subVectors(n,e),yi.subVectors(t,e),Gn.cross(yi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Gn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,o=this.c,s,a;Yr.subVectors(r,n),qr.subVectors(o,n),Su.subVectors(t,n);let l=Yr.dot(Su),c=qr.dot(Su);if(l<=0&&c<=0)return e.copy(n);Tu.subVectors(t,r);let h=Yr.dot(Tu),u=qr.dot(Tu);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),e.copy(n).addScaledVector(Yr,s);Au.subVectors(t,o);let d=Yr.dot(Au),m=qr.dot(Au);if(m>=0&&d<=m)return e.copy(o);let b=d*c-l*m;if(b<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(qr,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Ad.subVectors(o,r),a=(u-h)/(u-h+(d-m)),e.copy(r).addScaledVector(Ad,a);let p=1/(g+b+f);return s=b*p,a=f*p,e.copy(n).addScaledVector(Yr,s).addScaledVector(qr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yn=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Hn):Hn.fromBufferAttribute(o,s),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}let r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),xa.subVectors(this.max,Wo),$r.subVectors(t.a,Wo),Zr.subVectors(t.b,Wo),Kr.subVectors(t.c,Wo),ki.subVectors(Zr,$r),zi.subVectors(Kr,Zr),hr.subVectors($r,Kr);let e=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-hr.z,hr.y,ki.z,0,-ki.x,zi.z,0,-zi.x,hr.z,0,-hr.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-hr.y,hr.x,0];return!Pu(e,$r,Zr,Kr,xa)||(e=[1,0,0,0,1,0,0,0,1],!Pu(e,$r,Zr,Kr,xa))?!1:(va.crossVectors(ki,zi),e=[va.x,va.y,va.z],Pu(e,$r,Zr,Kr,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mi=[new $,new $,new $,new $,new $,new $,new $,new $],Hn=new $,ba=new yn,$r=new $,Zr=new $,Kr=new $,ki=new $,zi=new $,hr=new $,Wo=new $,xa=new $,va=new $,fr=new $;function Pu(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){fr.fromArray(i,o);let a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=t.dot(fr),c=e.dot(fr),h=n.dot(fr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var We=new $,ya=new Qt,Gb=0,tn=class extends oi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array),o=Te(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var rs=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var br=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Lt=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hb=new yn,Xo=new $,Iu=new $,Wi=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hb.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);let e=Xo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Xo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Iu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(Iu)),this.expandByPoint(Xo.copy(t.center).sub(Iu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wb=0,Fn=new Ae,Lu=new vn,Jr=new $,Sn=new yn,Yo=new yn,je=new $,Ot=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cb(t)?br:rs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new ne().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Lu.lookAt(t),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,o=t.length;r<o;r++){let s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let o=e[n];Sn.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Sn.min,Yo.min),Sn.expandByPoint(je),je.addVectors(Sn.max,Yo.max),Sn.expandByPoint(je)):(Sn.expandByPoint(Yo.min),Sn.expandByPoint(Yo.max))}Sn.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)je.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(je));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Jr.fromBufferAttribute(t,c),je.add(Jr)),r=Math.max(r,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,o=e.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new $,l[y]=new $;let c=new $,h=new $,u=new $,f=new Qt,d=new Qt,m=new Qt,b=new $,g=new $;function p(y,R,w){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,w),f.fromBufferAttribute(o,y),d.fromBufferAttribute(o,R),m.fromBufferAttribute(o,w),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let A=1/(d.x*m.y-m.x*d.y);isFinite(A)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(A),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(A),a[y].add(b),a[R].add(b),a[w].add(b),l[y].add(g),l[R].add(g),l[w].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,R=x.length;y<R;++y){let w=x[y],A=w.start,I=w.count;for(let L=A,P=A+I;L<P;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new $,v=new $,M=new $,S=new $;function E(y){M.fromBufferAttribute(r,y),S.copy(M);let R=a[y];_.copy(R),_.sub(M.multiplyScalar(M.dot(R))).normalize(),v.crossVectors(S,R);let A=v.dot(l[y])<0?-1:1;s.setXYZW(y,_.x,_.y,_.z,A)}for(let y=0,R=x.length;y<R;++y){let w=x[y],A=w.start,I=w.count;for(let L=A,P=A+I;L<P;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new $,o=new $,s=new $,a=new $,l=new $,c=new $,h=new $,u=new $;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,b),s.fromBufferAttribute(e,g),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new tn(f,h,u)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},rl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},xn=new $,os=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array),o=Te(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){ns("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ns("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fu=new $,Xb=new $,Yb=new ne,Wn=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Fu.subVectors(n,e).cross(Xb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Fu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yb.getNormalMatrix(t),r=this.coplanarPoint(Fu).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},qb=0,li=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Rn,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ms,this.blendDst=ju,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(e){let o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},mo=class extends li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jr,qo=new $,Qr=new $,to=new $,eo=new Qt,$o=new Qt,Cp=new Ae,_a=new $,Zo=new $,Ma=new $,Ed=new Qt,Du=new Qt,Rd=new Qt,ss=class extends vn{constructor(t=new mo){if(super(),this.isSprite=!0,this.type="Sprite",jr===void 0){jr=new Ot;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rl(e,5);jr.setIndex([0,1,2,0,2,3]),jr.setAttribute("position",new os(n,3,0,!1)),jr.setAttribute("uv",new os(n,2,3,!1))}this.geometry=jr,this.material=t,this.center=new Qt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qr.setFromMatrixScale(this.matrixWorld),Cp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),to.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-to.z);let n=this.material.rotation,r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));let s=this.center;wa(_a.set(-.5,-.5,0),to,s,Qr,r,o),wa(Zo.set(.5,-.5,0),to,s,Qr,r,o),wa(Ma.set(.5,.5,0),to,s,Qr,r,o),Ed.set(0,0),Du.set(1,0),Rd.set(1,1);let a=t.ray.intersectTriangle(_a,Zo,Ma,!1,qo);if(a===null&&(wa(Zo.set(-.5,.5,0),to,s,Qr,r,o),Du.set(0,1),a=t.ray.intersectTriangle(_a,Ma,Zo,!1,qo),a===null))return;let l=t.ray.origin.distanceTo(qo);l<t.near||l>t.far||e.push({distance:l,point:qo.clone(),uv:Si.getInterpolation(qo,_a,Zo,Ma,Ed,Du,Rd,new Qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function wa(i,t,e,n,r,o){eo.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?($o.x=o*eo.x-r*eo.y,$o.y=r*eo.x+o*eo.y):$o.copy(eo),i.copy(t),i.x+=$o.x,i.y+=$o.y,i.applyMatrix4(Cp)}var wi=new $,Ou=new $,Sa=new $,Ta=new $,xr=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ou.copy(t).add(e).multiplyScalar(.5),Sa.copy(e).sub(t).normalize(),Ta.copy(this.origin).sub(Ou);let o=t.distanceTo(e)*.5,s=-this.direction.dot(Sa),a=Ta.dot(this.direction),l=-Ta.dot(Sa),c=Ta.lengthSq(),h=Math.abs(1-s*s),u,f,d,m;if(h>0)if(u=s*l-a,f=s*a-l,m=o*h,u>=0)if(f>=-m)if(f<=m){let b=1/h;u*=b,f*=b,d=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ou).addScaledVector(Sa,f),d}intersectSphere(t,e){if(t.radius<0)return null;wi.subVectors(t.center,this.origin);let n=wi.dot(this.direction),r=wi.dot(wi)-n*n,o=t.radius*t.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-s.x,f=t.y-s.y,d=t.z-s.z,m=e.x-s.x,b=e.y-s.y,g=e.z-s.z,p=n.x-s.x,x=n.y-s.y,_=n.z-s.z,v=Math.abs(l),M=Math.abs(c),S=Math.abs(h),E,y,R,w,A,I,L,P,B,T,C,O;if(v>=M&&v>=S?(R=l,I=u,B=m,O=p,l>=0?(E=c,y=h,w=f,A=d,L=b,P=g,T=x,C=_):(E=h,y=c,w=d,A=f,L=g,P=b,T=_,C=x)):M>=S?(R=c,I=f,B=b,O=x,c>=0?(E=h,y=l,w=d,A=u,L=g,P=m,T=_,C=p):(E=l,y=h,w=u,A=d,L=m,P=g,T=p,C=_)):(R=h,I=d,B=g,O=_,h>=0?(E=l,y=c,w=u,A=f,L=m,P=b,T=p,C=x):(E=c,y=l,w=f,A=u,L=b,P=m,T=x,C=p)),R===0)return null;let D=E/R,N=y/R,z=1/R,G=w-D*I,V=A-N*I,W=L-D*B,Q=P-N*B,it=T-D*O,q=C-N*O,Y=it*Q-q*W,X=G*q-V*it,et=W*V-Q*G;if(r){if(Y<0||X<0||et<0)return null}else if((Y<0||X<0||et<0)&&(Y>0||X>0||et>0))return null;let J=Y+X+et;if(J===0)return null;let rt=z*(Y*I+X*B+et*O);return(J>0?rt<0:rt>0)?null:this.at(rt/J,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Cd=new Ae,dr=new xr,Aa=new Wi,Pd=new $,Ea=new $,Ra=new $,Ca=new $,Nu=new $,Pa=new $,Id=new $,Ia=new $,Et=class extends vn{constructor(t=new Ot,e=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(o&&a){Pa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(Nu.fromBufferAttribute(u,t),s?Pa.addScaledVector(Nu,h):Pa.addScaledVector(Nu.sub(e),h))}e.add(Pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(o),dr.copy(t.ray).recast(t.near),!(Aa.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Aa,Pd)===null||dr.origin.distanceToSquared(Pd)>(t.far-t.near)**2))&&(Cd.copy(o).invert(),dr.copy(t.ray).applyMatrix4(Cd),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,dr)))}_computeIntersections(t,e,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,b=f.length;m<b;m++){let g=f[m],p=s[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let S=a.getX(v),E=a.getX(v+1),y=a.getX(v+2);r=La(this,p,t,n,c,h,u,S,E,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){let x=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);r=La(this,s,t,n,c,h,u,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,b=f.length;m<b;m++){let g=f[m],p=s[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let S=v,E=v+1,y=v+2;r=La(this,p,t,n,c,h,u,S,E,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){let x=g,_=g+1,v=g+2;r=La(this,s,t,n,c,h,u,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function $b(i,t,e,n,r,o,s,a){let l;if(t.side===an?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,t.side===ui,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ia);return c<e.near||c>e.far?null:{distance:c,point:Ia.clone(),object:i}}function La(i,t,e,n,r,o,s,a,l,c){i.getVertexPosition(a,Ea),i.getVertexPosition(l,Ra),i.getVertexPosition(c,Ca);let h=$b(i,t,e,n,Ea,Ra,Ca,Id);if(h){let u=new $;Si.getBarycoord(Id,Ea,Ra,Ca,u),r&&(h.uv=Si.getInterpolatedAttribute(r,a,l,c,u,new Qt)),o&&(h.uv1=Si.getInterpolatedAttribute(o,a,l,c,u,new Qt)),s&&(h.normal=Si.getInterpolatedAttribute(s,a,l,c,u,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};Si.getNormal(Ea,Ra,Ca,f.normal),h.face=f,h.barycoord=u}return h}var ol=class extends dn{constructor(t=null,e=1,n=1,r,o,s,a,l,c=en,h=en,u,f){super(null,s,a,l,c,h,r,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=new Wi,Zb=new Qt(.5,.5),Fa=new $,as=class{constructor(t=new Wn,e=new Wn,n=new Wn,r=new Wn,o=new Wn,s=new Wn){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let r=this.planes,o=t.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],m=o[8],b=o[9],g=o[10],p=o[11],x=o[12],_=o[13],v=o[14],M=o[15];if(r[0].setComponents(c-s,d-h,p-m,M-x).normalize(),r[1].setComponents(c+s,d+h,p+m,M+x).normalize(),r[2].setComponents(c+a,d+u,p+b,M+_).normalize(),r[3].setComponents(c-a,d-u,p-b,M-_).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,p-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-g,M-v).normalize(),e===Xn)r[5].setComponents(c+l,d+f,p+g,M+v).normalize();else if(e===es)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);let e=Zb.distanceTo(t.center);return pr.radius=.7071067811865476+e,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Fa.x=r.normal.x>0?t.max.x:t.min.x,Fa.y=r.normal.y>0?t.max.y:t.min.y,Fa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $e=class extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},sl=new $,al=new $,Ld=new Ae,Ko=new xr,Da=new Wi,Uu=new $,Fd=new $,ll=class extends vn{constructor(t=new Ot,e=new $e){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)sl.fromBufferAttribute(e,r-1),al.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=sl.distanceTo(al);t.setAttribute("lineDistance",new Lt(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Da.radius+=o,t.ray.intersectsSphere(Da)===!1)return;Ld.copy(r).invert(),Ko.copy(t.ray).applyMatrix4(Ld);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let b=d,g=m-1;b<g;b+=c){let p=h.getX(b),x=h.getX(b+1),_=Oa(this,t,Ko,l,p,x,b);_&&e.push(_)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(d),p=Oa(this,t,Ko,l,b,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let b=d,g=m-1;b<g;b+=c){let p=Oa(this,t,Ko,l,b,b+1,b);p&&e.push(p)}if(this.isLineLoop){let b=Oa(this,t,Ko,l,m-1,d,m-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Oa(i,t,e,n,r,o,s){let a=i.geometry.attributes.position;if(sl.fromBufferAttribute(a,r),al.fromBufferAttribute(a,o),e.distanceSqToSegment(sl,al,Uu,Fd)>n)return;Uu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Uu);if(!(c<t.near||c>t.far))return{distance:c,point:Fd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Dd=new $,Od=new $,qe=class extends ll{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)Dd.fromBufferAttribute(e,r),Od.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Dd.distanceTo(Od);t.setAttribute("lineDistance",new Lt(n,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _n=class extends li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nd=new Ae,Hu=new xr,Na=new Wi,Ua=new $,An=class extends vn{constructor(t=new Ot,e=new _n){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),Na.radius+=o,t.ray.intersectsSphere(Na)===!1)return;Nd.copy(r).invert(),Hu.copy(t.ray).applyMatrix4(Nd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let m=f,b=d;m<b;m++){let g=c.getX(m);Ua.fromBufferAttribute(u,g),Ud(Ua,g,l,r,t,e,this)}}else{let f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let m=f,b=d;m<b;m++)Ua.fromBufferAttribute(u,m),Ud(Ua,m,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Ud(i,t,e,n,r,o,s){let a=Hu.distanceSqToPoint(i);if(a<e){let l=new $;Hu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var ls=class extends dn{constructor(t=[],e=$i,n,r,o,s,a,l,c,h){super(t,e,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pn=class extends dn{constructor(t,e,n,r,o,s,a,l,c){super(t,e,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends dn{constructor(t,e,n=$n,r,o,s,a=en,l=en,c,h=ri,u=1){if(h!==ri&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},cl=class extends ci{constructor(t,e=$n,n=$i,r,o,s=en,a=en,l,c=ri){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,o,s,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},cs=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},go=class i extends Ot{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,s,o,0),m("z","y","x",1,-1,n,e,-t,s,o,1),m("x","z","y",1,1,t,n,e,r,s,2),m("x","z","y",1,-1,t,n,-e,r,s,3),m("x","y","z",1,-1,t,e,n,r,o,4),m("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function m(b,g,p,x,_,v,M,S,E,y,R){let w=v/E,A=M/y,I=v/2,L=M/2,P=S/2,B=E+1,T=y+1,C=0,O=0,D=new $;for(let N=0;N<T;N++){let z=N*A-L;for(let G=0;G<B;G++){let V=G*w-I;D[b]=V*x,D[g]=z*_,D[p]=P,c.push(D.x,D.y,D.z),D[b]=0,D[g]=0,D[p]=S>0?1:-1,h.push(D.x,D.y,D.z),u.push(G/E),u.push(1-N/y),C+=1}}for(let N=0;N<y;N++)for(let z=0;z<E;z++){let G=f+z+B*N,V=f+z+B*(N+1),W=f+(z+1)+B*(N+1),Q=f+(z+1)+B*N;l.push(G,V,Q),l.push(V,W,Q),O+=6}a.addGroup(d,O,R),d+=O,f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var us=class i extends Ot{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let o=[],s=[],a=[],l=[],c=new $,h=new Qt;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[f]/t+1)/2,h.y=(s[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function Kb(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,o=Pp(i,0,r,e,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=ex(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return hs(o,s,e,a,l,c,0),s}function Pp(i,t,e,n,r){let o;if(r===fx(i,t,e,n)>0)for(let s=t;s<e;s+=n)o=Bd(s/n|0,i[s],i[s+1],o);else for(let s=e-n;s>=t;s-=n)o=Bd(s/n|0,i[s],i[s+1],o);return o&&bo(o,o.next)&&(ds(o),o=o.next),o}function vr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bo(e,e.next)||Ue(e.prev,e,e.next)===0)){if(ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hs(i,t,e,n,r,o,s){if(!i)return;!s&&o&&sx(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?jb(i,n,r,o):Jb(i)){t.push(l.i,i.i,c.i),ds(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=Qb(vr(i),t),hs(i,t,e,n,r,o,2)):s===2&&tx(i,t,e,n,r,o):hs(vr(i),t,e,n,r,o,1);break}}}function Jb(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let r=t.x,o=e.x,s=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,o,s),u=Math.min(a,l,c),f=Math.max(r,o,s),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Jo(r,a,o,l,s,c,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function jb(i,t,e,n){let r=i.prev,o=i,s=i.next;if(Ue(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,h=r.y,u=o.y,f=s.y,d=Math.min(a,l,c),m=Math.min(h,u,f),b=Math.max(a,l,c),g=Math.max(h,u,f),p=Wu(d,m,t,e,n),x=Wu(b,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=x;){if(_.x>=d&&_.x<=b&&_.y>=m&&_.y<=g&&_!==r&&_!==s&&Jo(a,h,l,u,c,f,_.x,_.y)&&Ue(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=b&&v.y>=m&&v.y<=g&&v!==r&&v!==s&&Jo(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=b&&_.y>=m&&_.y<=g&&_!==r&&_!==s&&Jo(a,h,l,u,c,f,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=m&&v.y<=g&&v!==r&&v!==s&&Jo(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qb(i,t){let e=i;do{let n=e.prev,r=e.next.next;!bo(n,r)&&Lp(n,e,e.next,r)&&fs(n,r)&&fs(r,n)&&(t.push(n.i,e.i,r.i),ds(e),ds(e.next),e=i=r),e=e.next}while(e!==i);return vr(e)}function tx(i,t,e,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&cx(s,a)){let l=Fp(s,a);s=vr(s,s.next),l=vr(l,l.next),hs(s,t,e,n,r,o,0),hs(l,t,e,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function ex(i,t,e,n){let r=[];for(let o=0,s=t.length;o<s;o++){let a=t[o]*n,l=o<s-1?t[o+1]*n:i.length,c=Pp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(lx(c))}r.sort(nx);for(let o=0;o<r.length;o++)e=ix(r[o],e);return e}function nx(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function ix(i,t){let e=rx(i,t);if(!e)return t;let n=Fp(e,i);return vr(n,n.next),vr(e,e.next)}function rx(i,t){let e=t,n=i.x,r=i.y,o=-1/0,s;if(bo(i,e))return e;do{if(bo(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,s=e.x<e.next.x?e:e.next,u===n))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0;e=s;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ip(r<c?n:o,r,l,c,r<c?o:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);fs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&ox(s,e)))&&(s=e,h=u)}e=e.next}while(e!==a);return s}function ox(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function sx(i,t,e,n){let r=i;do r.z===0&&(r.z=Wu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ax(r)}function ax(i){let t,e=1;do{let n=i,r;i=null;let o=null;for(t=0;n;){t++;let s=n,a=0;for(let c=0;c<e&&(a++,s=s.nextZ,!!s);c++);let l=e;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,e*=2}while(t>1);return i}function Wu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ip(i,t,e,n,r,o,s,a){return(r-s)*(t-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(e-s)*(t-a)&&(e-s)*(o-a)>=(r-s)*(n-a)}function Jo(i,t,e,n,r,o,s,a){return!(i===s&&t===a)&&Ip(i,t,e,n,r,o,s,a)}function cx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ux(i,t)&&(fs(i,t)&&fs(t,i)&&hx(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||bo(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bo(i,t){return i.x===t.x&&i.y===t.y}function Lp(i,t,e,n){let r=ka(Ue(i,t,e)),o=ka(Ue(i,t,n)),s=ka(Ue(e,n,i)),a=ka(Ue(e,n,t));return!!(r!==o&&s!==a||r===0&&Ba(i,e,t)||o===0&&Ba(i,n,t)||s===0&&Ba(e,i,n)||a===0&&Ba(e,t,n))}function Ba(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ka(i){return i>0?1:i<0?-1:0}function ux(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Lp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fs(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function hx(i,t){let e=i,n=!1,r=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&r<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fp(i,t){let e=Xu(i.i,i.x,i.y),n=Xu(t.i,t.x,t.y),r=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Bd(i,t,e,n){let r=Xu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fx(i,t,e,n){let r=0;for(let o=t,s=e-n;o<e;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Yu=class{static triangulate(t,e,n=2){return Kb(t,e,n)}},ps=class i{static area(t){let e=t.length,n=0;for(let r=e-1,o=0;o<e;r=o++)n+=t[r].x*t[o].y-t[o].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],o=[];kd(t),zd(n,t);let s=t.length;e.forEach(kd);for(let l=0;l<e.length;l++)r.push(s),s+=e[l].length,zd(n,e[l]);let a=Yu.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function kd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Yn=class i extends Ot{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let o=t/2,s=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*f-s;for(let _=0;_<c;_++){let v=_*u-o;m.push(v,-x,0),b.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let _=x+c*p,v=x+c*(p+1),M=x+1+c*(p+1),S=x+1+c*p;d.push(_,v,S),d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(b,3)),this.setAttribute("uv",new Lt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ms=class i extends Ot{constructor(t=.5,e=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new $,m=new Qt;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let p=o+g/n*s;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let p=0;p<n;p++){let x=p+g,_=x,v=x+n+1,M=x+n+2,S=x+1;a.push(_,v,S),a.push(v,M,S)}}this.setIndex(a),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function wr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Vd(r))r.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Vd(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();t[e][n]=o}else t[e][n]=r.slice();else t[e][n]=r}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=wr(i[e]);for(let r in n)t[r]=n[r]}return t}function Vd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Dp={clone:wr,merge:gn},px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=dx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(r.value);break;case"v2":this.uniforms[n].value=new Qt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ul=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var hl=class extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fl=class extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function no(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Bu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Xi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let s;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=e[++n],t<r)break t}s=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=e[--n-1],t>=o)break t}s=n,n=0;break e}break n}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let s=0;s!==r;++s)e[s]=n[o+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends Xi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zu,endingEnd:zu}}intervalChanged_(t,e,n){let r=this.parameterPositions,o=t-2,s=t+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Vu:o=t,a=2*e-n;break;case Gu:o=r.length-2,a=e+r[o]-r[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vu:s=t,l=2*n-e;break;case Gu:s=1,l=n+r[1]-r[0];break;default:s=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=s*h}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(r-e),b=m*m,g=b*m,p=-f*g+2*f*b-f*m,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*m+1,_=(-1-d)*g+(1.5+d)*b+.5*m,v=d*g-d*b;for(let M=0;M!==a;++M)o[M]=p*s[h+M]+x*s[c+M]+_*s[l+M]+v*s[u+M];return o}},pl=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)o[f]=s[c+f]*u+s[l+f]*h;return o}},ml=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},gl=class extends Xi{interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(r-e),b=1-m;for(let g=0;g!==a;++g)o[g]=s[c+g]*b+s[l+g]*m;return o}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let b=s[c+m],g=s[l+m],p=d*f+m*2,x=u[p],_=u[p+1],v=t*f+m*2,M=h[v],S=h[v+1],E=bx(n,e,x,M,r);o[m]=Op(E,b,_,S,g)}return o}};function Op(i,t,e,n,r){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*r}function gx(i,t,e,n,r){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(r-n)}function bx(i,t,e,n,r){let o=(i-t)/(r-t);for(let s=0;s<8;s++){let a=Op(o,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=gx(o,t,e,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var En=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=no(e,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:no(t.times,Array),values:no(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Bu(t.settings)&&(n.settings={inTangents:no(t.settings.inTangents,Array),outTangents:no(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case jo:e=this.InterpolantFactoryMethodDiscrete;break;case Qa:e=this.InterpolantFactoryMethodLinear;break;case Ga:e=this.InterpolantFactoryMethodSmooth;break;case ku:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jo;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return Ga;case this.InterpolantFactoryMethodBezier:return ku}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Bu(this.settings)&&(Gd(this.settings.inTangents,t),Gd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<t;)++o;for(;s!==-1&&n[s]>e;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,o=n.length;o===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(r!==void 0&&Pb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ga,o=t.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let b=e[u+m];if(b!==e[f+m]||b!==e[d+m]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];let u=a*n,f=s*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++s}}if(o>0){t[s]=t[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Bu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Gd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Qa;var Yi=class extends En{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=jo;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};bl.prototype.ValueTypeName="color";var xl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};xl.prototype.ValueTypeName="number";var vl=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)si.slerpFlat(o,0,s,c-a,s,c,l);return o}},gs=class extends En{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}};gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends En{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=jo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};yl.prototype.ValueTypeName="vector";var Wa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Hd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Hd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Hd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var _l=class{constructor(t,e,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Np=new _l,xo=class{constructor(t){this.manager=t!==void 0?t:Np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=new WeakMap,Ml=class extends xo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,s=Wa.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(s),o.manager.itemEnd(t)},0);else{let u=io.get(s);u===void 0&&(u=[],io.set(s,u)),u.push({onLoad:e,onError:r})}return s}let a=lo("img");function l(){h(),e&&e(this);let u=io.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}io.delete(this),o.manager.itemEnd(t)}function c(u){h(),r&&r(u),Wa.remove(`image:${t}`);let f=io.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}io.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wa.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}};var yr=class extends xo{constructor(t){super(t)}load(t,e,n,r){let o=new dn,s=new Ml(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}};var za=new $,Va=new si,ni=new $,bs=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(za,Va,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(za,Va,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new $,Wd=new Qt,Xd=new Qt,Qe=class extends bs{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,Wd,Xd),e.subVectors(Xd,Wd)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Dn=class extends bs{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-t,s=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ro=-90,oo=1,wl=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qe(ro,oo,t,e);r.layers=this.layers,this.add(r);let o=new Qe(ro,oo,t,e);o.layers=this.layers,this.add(o);let s=new Qe(ro,oo,t,e);s.layers=this.layers,this.add(s);let a=new Qe(ro,oo,t,e);a.layers=this.layers,this.add(a);let l=new Qe(ro,oo,t,e);l.layers=this.layers,this.add(l);let c=new Qe(ro,oo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,o,s,a,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Sl=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var yh="\\[\\]\\.:\\/",xx=new RegExp("["+yh+"]","g"),_h="[^"+yh+"]",vx="[^"+yh.replace("\\.","")+"]",yx=/((?:WC+[\/:])*)/.source.replace("WC",_h),_x=/(WCOD+)?/.source.replace("WCOD",vx),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),Sx=new RegExp("^"+yx+_x+Mx+wx+"$"),Tx=["material","materials","bones","map"],qu=class{constructor(t,e,n){let r=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xx,"")}static parseTrackName(t){let e=Sx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);Tx.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[r];if(s===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=qu;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mT=new Float32Array(1);var Yd=new Ae,xs=class{constructor(t,e,n=0,r=1/0){this.ray=new xr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yd),this}intersectObject(t,e=!0,n=[]){return $u(t,this,n,e),n.sort(qd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)$u(t[r],this,n,e);return n.sort(qd),n}};function qd(i,t){return i.distance-t.distance}function $u(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)$u(o[s],t,e,!0)}}var Eh=class Eh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=r,this}};Eh.prototype.isMatrix2=!0;var Zu=Eh;function Mh(i,t,e,n){let r=Ax(n);switch(e){case fh:return i*t;case ph:return i*t/r.components*r.byteLength;case Dl:return i*t/r.components*r.byteLength;case Ji:return i*t*2/r.components*r.byteLength;case Ol:return i*t*2/r.components*r.byteLength;case dh:return i*t*3/r.components*r.byteLength;case Nn:return i*t*4/r.components*r.byteLength;case Nl:return i*t*4/r.components*r.byteLength;case Ts:case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Es:case Rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case zl:return Math.max(i,16)*Math.max(t,8)/4;case Ul:case kl:return Math.max(i,8)*Math.max(t,8)/2;case Vl:case Gl:case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hl:case Cs:case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ac:case lc:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case uc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ps:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ax(i){switch(i){case Cn:case lh:return{byteLength:1,components:1};case yo:case ch:case Kn:return{byteLength:2,components:1};case Ll:case Fl:return{byteLength:2,components:4};case $n:case Il:case Zn:return{byteLength:4,components:1};case uh:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function r0(){let i=null,t=!1,e=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),e(o,s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Rx(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],b=u[d];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
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
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
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
#endif`,Nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gx=`#ifdef USE_IRIDESCENCE
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
#endif`,Hx=`#ifdef USE_BUMPMAP
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tv=`vec3 transformedNormal = objectNormal;
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
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gv=`#ifdef USE_GRADIENTMAP
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
}`,bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yv=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,_v=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ev=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rv=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kv=`#if defined( USE_POINTS_UV )
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
#endif`,zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`#ifdef USE_MORPHTARGETS
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
#endif`,Yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$v=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jv=`#ifdef USE_NORMALMAP
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
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,o1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,p1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P1=`uniform sampler2D t2D;
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`#include <common>
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
}`,N1=`#if DEPTH_PACKING == 3200
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
}`,U1=`#define DISTANCE
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
}`,B1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`uniform float scale;
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
}`,G1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,W1=`uniform vec3 diffuse;
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
}`,X1=`#define LAMBERT
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
}`,Y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,q1=`#define MATCAP
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
}`,$1=`#define MATCAP
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
}`,Z1=`#define NORMAL
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
}`,K1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J1=`#define PHONG
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
}`,j1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Q1=`#define STANDARD
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
}`,ty=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,ey=`#define TOON
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
}`,ny=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,iy=`uniform float size;
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
}`,ry=`uniform vec3 diffuse;
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
}`,oy=`#include <common>
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
}`,sy=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,ay=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Cx,alphahash_pars_fragment:Px,alphamap_fragment:Ix,alphamap_pars_fragment:Lx,alphatest_fragment:Fx,alphatest_pars_fragment:Dx,aomap_fragment:Ox,aomap_pars_fragment:Nx,batching_pars_vertex:Ux,batching_vertex:Bx,begin_vertex:kx,beginnormal_vertex:zx,bsdfs:Vx,iridescence_fragment:Gx,bumpmap_pars_fragment:Hx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:Xx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:qx,color_fragment:$x,color_pars_fragment:Zx,color_pars_vertex:Kx,color_vertex:Jx,common:jx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:tv,displacementmap_pars_vertex:ev,displacementmap_vertex:nv,emissivemap_fragment:iv,emissivemap_pars_fragment:rv,colorspace_fragment:ov,colorspace_pars_fragment:sv,envmap_fragment:av,envmap_common_pars_fragment:lv,envmap_pars_fragment:cv,envmap_pars_vertex:uv,envmap_physical_pars_fragment:_v,envmap_vertex:hv,fog_vertex:fv,fog_pars_vertex:dv,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:gv,lightmap_pars_fragment:bv,lights_lambert_fragment:xv,lights_lambert_pars_fragment:vv,lights_pars_begin:yv,lights_toon_fragment:Mv,lights_toon_pars_fragment:wv,lights_phong_fragment:Sv,lights_phong_pars_fragment:Tv,lights_physical_fragment:Av,lights_physical_pars_fragment:Ev,lights_fragment_begin:Rv,lights_fragment_maps:Cv,lights_fragment_end:Pv,lightprobes_pars_fragment:Iv,logdepthbuf_fragment:Lv,logdepthbuf_pars_fragment:Fv,logdepthbuf_pars_vertex:Dv,logdepthbuf_vertex:Ov,map_fragment:Nv,map_pars_fragment:Uv,map_particle_fragment:Bv,map_particle_pars_fragment:kv,metalnessmap_fragment:zv,metalnessmap_pars_fragment:Vv,morphinstance_vertex:Gv,morphcolor_vertex:Hv,morphnormal_vertex:Wv,morphtarget_pars_vertex:Xv,morphtarget_vertex:Yv,normal_fragment_begin:qv,normal_fragment_maps:$v,normal_pars_fragment:Zv,normal_pars_vertex:Kv,normal_vertex:Jv,normalmap_pars_fragment:jv,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:e1,iridescence_pars_fragment:n1,opaque_fragment:i1,packing:r1,premultiplied_alpha_fragment:o1,project_vertex:s1,dithering_fragment:a1,dithering_pars_fragment:l1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:h1,shadowmap_pars_vertex:f1,shadowmap_vertex:d1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:b1,skinnormal_vertex:x1,specularmap_fragment:v1,specularmap_pars_fragment:y1,tonemapping_fragment:_1,tonemapping_pars_fragment:M1,transmission_fragment:w1,transmission_pars_fragment:S1,uv_pars_fragment:T1,uv_pars_vertex:A1,uv_vertex:E1,worldpos_vertex:R1,background_vert:C1,background_frag:P1,backgroundCube_vert:I1,backgroundCube_frag:L1,cube_vert:F1,cube_frag:D1,depth_vert:O1,depth_frag:N1,distance_vert:U1,distance_frag:B1,equirect_vert:k1,equirect_frag:z1,linedashed_vert:V1,linedashed_frag:G1,meshbasic_vert:H1,meshbasic_frag:W1,meshlambert_vert:X1,meshlambert_frag:Y1,meshmatcap_vert:q1,meshmatcap_frag:$1,meshnormal_vert:Z1,meshnormal_frag:K1,meshphong_vert:J1,meshphong_frag:j1,meshphysical_vert:Q1,meshphysical_frag:ty,meshtoon_vert:ey,meshtoon_frag:ny,points_vert:iy,points_frag:ry,shadow_vert:oy,shadow_frag:sy,sprite_vert:ay,sprite_frag:ly},Rt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},fi={basic:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:gn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:gn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:gn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:gn([Rt.points,Rt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:gn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:gn([Rt.common,Rt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:gn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:gn([Rt.sprite,Rt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:gn([Rt.common,Rt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:gn([Rt.lights,Rt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};fi.physical={uniforms:gn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var mc={r:0,b:0,g:0},cy=new Ae,o0=new ne;o0.set(-1,0,0,0,1,0,0,0,1);function uy(i,t,e,n,r,o){let s=new tt(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let v=x.backgroundBlurriness>0;_=t.get(_,v)}return _}function m(x){let _=!1,v=d(x);v===null?g(s,a):v&&v.isColor&&(g(v,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===ws)?(c===void 0&&(c=new Et(new go(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:wr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(o0),c.material.toneMapped=de.getTransfer(v.colorSpace)!==_e,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Et(new Yn(2,2),new mn({name:"BackgroundMaterial",uniforms:wr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=de.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,_){x.getRGB(mc,vh(i)),e.buffers.color.setClear(mc.r,mc.g,mc.b,_,o)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,_=1){s.set(x),a=_,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(s,a)},render:m,addToRenderList:b,dispose:p}}function hy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(A,I,L,P,B){let T=!1,C=u(A,P,L,I);o!==C&&(o=C,c(o.object)),T=d(A,P,L,B),T&&m(A,P,L,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(T||s)&&(s=!1,v(A,I,L,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function u(A,I,L,P){let B=P.wireframe===!0,T=n[I.id];T===void 0&&(T={},n[I.id]=T);let C=A.isInstancedMesh===!0?A.id:0,O=T[C];O===void 0&&(O={},T[C]=O);let D=O[L.id];D===void 0&&(D={},O[L.id]=D);let N=D[B];return N===void 0&&(N=f(l()),D[B]=N),N}function f(A){let I=[],L=[],P=[];for(let B=0;B<e;B++)I[B]=0,L[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:P,object:A,attributes:{},index:null}}function d(A,I,L,P){let B=o.attributes,T=I.attributes,C=0,O=L.getAttributes();for(let D in O)if(O[D].location>=0){let z=B[D],G=T[D];if(G===void 0&&(D==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),D==="instanceColor"&&A.instanceColor&&(G=A.instanceColor)),z===void 0||z.attribute!==G||G&&z.data!==G.data)return!0;C++}return o.attributesNum!==C||o.index!==P}function m(A,I,L,P){let B={},T=I.attributes,C=0,O=L.getAttributes();for(let D in O)if(O[D].location>=0){let z=T[D];z===void 0&&(D==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),D==="instanceColor"&&A.instanceColor&&(z=A.instanceColor));let G={};G.attribute=z,z&&z.data&&(G.data=z.data),B[D]=G,C++}o.attributes=B,o.attributesNum=C,o.index=P}function b(){let A=o.newAttributes;for(let I=0,L=A.length;I<L;I++)A[I]=0}function g(A){p(A,0)}function p(A,I){let L=o.newAttributes,P=o.enabledAttributes,B=o.attributeDivisors;L[A]=1,P[A]===0&&(i.enableVertexAttribArray(A),P[A]=1),B[A]!==I&&(i.vertexAttribDivisor(A,I),B[A]=I)}function x(){let A=o.newAttributes,I=o.enabledAttributes;for(let L=0,P=I.length;L<P;L++)I[L]!==A[L]&&(i.disableVertexAttribArray(L),I[L]=0)}function _(A,I,L,P,B,T,C){C===!0?i.vertexAttribIPointer(A,I,L,B,T):i.vertexAttribPointer(A,I,L,P,B,T)}function v(A,I,L,P){b();let B=P.attributes,T=L.getAttributes(),C=I.defaultAttributeValues;for(let O in T){let D=T[O];if(D.location>=0){let N=B[O];if(N===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(N=A.instanceColor)),N!==void 0){let z=N.normalized,G=N.itemSize,V=t.get(N);if(V===void 0)continue;let W=V.buffer,Q=V.type,it=V.bytesPerElement,q=Q===i.INT||Q===i.UNSIGNED_INT||N.gpuType===Il;if(N.isInterleavedBufferAttribute){let Y=N.data,X=Y.stride,et=N.offset;if(Y.isInstancedInterleavedBuffer){for(let J=0;J<D.locationSize;J++)p(D.location+J,Y.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let J=0;J<D.locationSize;J++)g(D.location+J);i.bindBuffer(i.ARRAY_BUFFER,W);for(let J=0;J<D.locationSize;J++)_(D.location+J,G/D.locationSize,Q,z,X*it,(et+G/D.locationSize*J)*it,q)}else{if(N.isInstancedBufferAttribute){for(let Y=0;Y<D.locationSize;Y++)p(D.location+Y,N.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Y=0;Y<D.locationSize;Y++)g(D.location+Y);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Y=0;Y<D.locationSize;Y++)_(D.location+Y,G/D.locationSize,Q,z,G*it,G/D.locationSize*Y*it,q)}}else if(C!==void 0){let z=C[O];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(D.location,z);break;case 3:i.vertexAttrib3fv(D.location,z);break;case 4:i.vertexAttrib4fv(D.location,z);break;default:i.vertexAttrib1fv(D.location,z)}}}}x()}function M(){R();for(let A in n){let I=n[A];for(let L in I){let P=I[L];for(let B in P){let T=P[B];for(let C in T)h(T[C].object),delete T[C];delete P[B]}}delete n[A]}}function S(A){if(n[A.id]===void 0)return;let I=n[A.id];for(let L in I){let P=I[L];for(let B in P){let T=P[B];for(let C in T)h(T[C].object),delete T[C];delete P[B]}}delete n[A.id]}function E(A){for(let I in n){let L=n[I];for(let P in L){let B=L[P];if(B[A.id]===void 0)continue;let T=B[A.id];for(let C in T)h(T[C].object),delete T[C];delete B[A.id]}}}function y(A){for(let I in n){let L=n[I],P=A.isInstancedMesh===!0?A.id:0,B=L[P];if(B!==void 0){for(let T in B){let C=B[T];for(let O in C)h(C[O].object),delete C[O];delete B[T]}delete L[P],Object.keys(L).length===0&&delete n[I]}}}function R(){w(),s=!0,o!==r&&(o=r,c(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function fy(i,t,e){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function s(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function dy(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Cn&&E!==Zn&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,maxSamples:M,samples:S}}function py(i){let t=this,e=null,n=0,r=!1,o=!1,s=new Wn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!r||m===null||m.length===0||o&&!g)o?h(null):c();else{let x=o?0:n,_=x*4,v=p.clippingState||null;l.value=v,v=h(m,f,_,d);for(let M=0;M!==_;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let p=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=d;_!==b;++_,v+=4)s.copy(u[_]).applyMatrix4(x,a),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var wo=4,my=6,gy=20,by=256,Is=new Dn,Up=new tt,Rh=null,Ch=0,Ph=0,Ih=!1,xy=new $,Sr=new $,bc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){let{size:s=256,position:a=xy}=o;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,Ch,Ph),this._renderer.xr.enabled=Ih,t.scissorTest=!1,Mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Kn,format:Nn,colorSpace:Qo,depthBuffer:!1},r=Bp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vy(o)),this._blurMaterial=_y(o,t,e),this._ggxMaterial=yy(o,t,e)}return r}_compileMaterial(t){let e=new Et(new Ot,t);this._renderer.compile(e,Is)}_sceneToCubeUV(t,e,n,r,o){let l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Up),u.toneMapping=qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new go,new Xt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(Up),p=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[_],o.y,o.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[_],o.z)):(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[_]));let M=this._cubeSize;Mo(r,v*M,_>2?M:0,M,M),u.setRenderTarget(r),p&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===$i||t.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kp());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;Mo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,Is)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,b=this._sizeLods[n],g=3*b*(n>m-wo?n-m+wo:0),p=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Mo(o,g,p,3*b,2*b),r.setRenderTarget(o),r.render(a,Is),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-n,Mo(t,g,p,3*b,2*b),r.setRenderTarget(t),r.render(a,Is)}_blur(t,e,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,s),this._blurPass(o,t,n,n,s)}_blurPass(t,e,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-wo?r-this._lodMax+wo:0),f=4*(this._cubeSize-h);Mo(e,u,f,3*h,2*h),s.setRenderTarget(e),s.render(l,Is)}};function vy(i){let t=[],e=[],n=i,r=i-wo+1+my;for(let o=0;o<r;o++){let s=Math.pow(2,n);t.push(s);let a=1/(s-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,_=p>2?0:-1,v=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];m.set(v,d*f*p);for(let M=0;M<f;M++){let S=h[M*2]*2-1,E=h[M*2+1]*2-1;p===0?Sr.set(1,E,S):p===1?Sr.set(-S,1,-E):p===2?Sr.set(-S,E,1):p===3?Sr.set(-1,E,-S):p===4?Sr.set(-S,-1,E):Sr.set(S,E,-1),Sr.toArray(b,(p*f+M)*d)}}let g=new Ot;g.setAttribute("position",new tn(m,d)),g.setAttribute("outputDirection",new tn(b,d)),e.push(new Et(g,null)),n>wo&&n--}return{lodMeshes:e,sizeLods:t}}function Bp(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function yy(i,t,e){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:by,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function _y(i,t,e){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:gy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function kp(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function zp(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xc=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ls(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new go(5,5,5),o=new mn({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:On});o.uniforms.tEquirect.value=e;let s=new Et(r,o),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=Xe),new wl(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}};function My(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?s(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===Rl||d===Cl)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let b=new xc(m.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,m=d===Rl||d===Cl,b=d===$i||d===Mr;if(m||b){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new bc(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return m&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new bc(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Rl?f.mapping=$i:d===Cl&&(f.mapping=Mr),f}function l(f){let d=0,m=6;for(let b=0;b<m;b++)f[b]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function wy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&mr("WebGLRenderer: "+n+" extension not supported."),r}}}function Sy(i,t,e,n){let r={},o=new WeakMap;function s(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete r[f.id];let d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,b=0;if(m===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let _=0,v=x.length;_<v;_+=3){let M=x[_+0],S=x[_+1],E=x[_+2];f.push(M,S,S,E,E,M)}}else{let x=m.array;b=m.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let M=_+0,S=_+1,E=_+2;f.push(M,S,S,E,E,M)}}let g=new(m.count>=65535?br:rs)(f,1);g.version=b;let p=o.get(u);p&&t.remove(p),o.set(u,g)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ty(i,t,e){let n;function r(u){n=u}let o,s;function a(u){o=u.type,s=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*s),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,o,u*s,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ay(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:Kt("WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ey(i,t,e){let n=new WeakMap,r=new Be;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let R=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),b===!0&&(_=3);let v=a.attributes.position.count*_,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*M*4*u),E=new is(S,v,M,u);E.type=Zn,E.needsUpdate=!0;let y=_*4;for(let w=0;w<u;w++){let A=g[w],I=p[w],L=x[w],P=v*M*4*w;for(let B=0;B<A.count;B++){let T=B*y;d===!0&&(r.fromBufferAttribute(A,B),S[P+T+0]=r.x,S[P+T+1]=r.y,S[P+T+2]=r.z,S[P+T+3]=0),m===!0&&(r.fromBufferAttribute(I,B),S[P+T+4]=r.x,S[P+T+5]=r.y,S[P+T+6]=r.z,S[P+T+7]=0),b===!0&&(r.fromBufferAttribute(L,B),S[P+T+8]=r.x,S[P+T+9]=r.y,S[P+T+10]=r.z,S[P+T+11]=L.itemSize===4?r.w:1)}}f={count:u,texture:E,size:new Qt(v,M)},n.set(a,f),a.addEventListener("dispose",R)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function Ry(i,t,e,n,r){let o=new WeakMap;function s(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var Cy={[th]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[ih]:"ACES_FILMIC_TONE_MAPPING",[oh]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function Py(i,t,e,n,r,o){let s=new Ye(t,e,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ot;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let h=new ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Et(c,h),f=new Dn(-1,1,1,-1,0,1),d=null,m=null,b=!1,g,p=null,x=[],_=!1;this.setSize=function(v,M){s.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let S=0;S<x.length;S++){let E=x[S];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){x=v,_=x.length>0&&x[0].isRenderPass===!0;let M=s.width,S=s.height;x.length>0&&a===null&&(a=new Ye(M,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(M,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<x.length;E++){let y=x[E];y.setSize&&y.setSize(M,S)}},this.begin=function(v,M){if(b||v.toneMapping===qn&&x.length===0)return!1;if(p=M,M!==null){let S=M.width,E=M.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return _===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=qn,!0},this.hasRenderPass=function(){return _},this.end=function(v,M){v.toneMapping=g,b=!0;let S=s,E=a;for(let y=0;y<x.length;y++){let R=x[y];R.enabled!==!1&&(R.render(v,E,S,M),R.needsSwap!==!1&&(S=E,E=E===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},de.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");let y=Cy[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(p),v.render(u,f),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var s0=new dn,Dh=new ci(1,1),a0=new is,l0=new il,c0=new ls,Vp=[],Gp=[],Hp=new Float32Array(16),Wp=new Float32Array(9),Xp=new Float32Array(4);function To(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,o=Vp[r];if(o===void 0&&(o=new Float32Array(r),Vp[r]=o),t!==0){n.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(o,a)}return o}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yc(i,t){let e=Gp[t];e===void 0&&(e=new Int32Array(t),Gp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Iy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Oy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Xp.set(n),i.uniformMatrix2fv(this.addr,!1,Xp),Ke(e,n)}}function Ny(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Wp.set(n),i.uniformMatrix3fv(this.addr,!1,Wp),Ke(e,n)}}function Uy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Hp.set(n),i.uniformMatrix4fv(this.addr,!1,Hp),Ke(e,n)}}function By(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function Gy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function Wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function Xy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function Yy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Dh.compareFunction=e.isReversedDepthBuffer()?pc:dc,o=Dh):o=s0,e.setTexture2D(t||o,r)}function qy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||l0,r)}function $y(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||c0,r)}function Zy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||a0,r)}function Ky(i){switch(i){case 5126:return Iy;case 35664:return Ly;case 35665:return Fy;case 35666:return Dy;case 35674:return Oy;case 35675:return Ny;case 35676:return Uy;case 5124:case 35670:return By;case 35667:case 35671:return ky;case 35668:case 35672:return zy;case 35669:case 35673:return Vy;case 5125:return Gy;case 36294:return Hy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Zy}}function Jy(i,t){i.uniform1fv(this.addr,t)}function jy(i,t){let e=To(t,this.size,2);i.uniform2fv(this.addr,e)}function Qy(i,t){let e=To(t,this.size,3);i.uniform3fv(this.addr,e)}function t_(i,t){let e=To(t,this.size,4);i.uniform4fv(this.addr,e)}function e_(i,t){let e=To(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function n_(i,t){let e=To(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function i_(i,t){let e=To(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function r_(i,t){i.uniform1iv(this.addr,t)}function o_(i,t){i.uniform2iv(this.addr,t)}function s_(i,t){i.uniform3iv(this.addr,t)}function a_(i,t){i.uniform4iv(this.addr,t)}function l_(i,t){i.uniform1uiv(this.addr,t)}function c_(i,t){i.uniform2uiv(this.addr,t)}function u_(i,t){i.uniform3uiv(this.addr,t)}function h_(i,t){i.uniform4uiv(this.addr,t)}function f_(i,t,e){let n=this.cache,r=t.length,o=yc(e,r);Ze(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=Dh:s=s0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||s,o[a])}function d_(i,t,e){let n=this.cache,r=t.length,o=yc(e,r);Ze(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||l0,o[s])}function p_(i,t,e){let n=this.cache,r=t.length,o=yc(e,r);Ze(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||c0,o[s])}function m_(i,t,e){let n=this.cache,r=t.length,o=yc(e,r);Ze(n,o)||(i.uniform1iv(this.addr,o),Ke(n,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||a0,o[s])}function g_(i){switch(i){case 5126:return Jy;case 35664:return jy;case 35665:return Qy;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return s_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return u_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}var Oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ky(e.type)}},Nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g_(e.type)}},Uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(t,e[a.id],n)}}},Lh=/(\w+)(\])?(\[|\.)?/g;function Yp(i,t){i.seq.push(t),i.map[t.id]=t}function b_(i,t,e){let n=i.name,r=n.length;for(Lh.lastIndex=0;;){let o=Lh.exec(n),s=Lh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Yp(e,c===void 0?new Oh(a,i,t):new Nh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Uh(a),Yp(e,u)),e=u}}}var So=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);b_(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){let o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,o=t.length;r!==o;++r){let s=t[r];s.id in e&&n.push(s)}return n}};function qp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var x_=37297,v_=0;function y_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}var $p=new ne;function __(i){de._getMatrix($p,de.workingColorSpace,i);let t=`mat3( ${$p.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case ts:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+y_(i.getShaderSource(t),a)}else return o}function M_(i,t){let e=__(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var w_={[th]:"Linear",[eh]:"Reinhard",[nh]:"Cineon",[ih]:"ACESFilmic",[oh]:"AgX",[sh]:"Neutral",[rh]:"Custom"};function S_(i,t){let e=w_[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gc=new $;function T_(){de.getLuminanceCoefficients(gc);let i=gc.x.toFixed(4),t=gc.y.toFixed(4),e=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function E_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(t,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function Fs(i){return i!==""}function Kp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(i){return i.replace(C_,I_)}var P_=new Map;function I_(i,t){let e=ce[t];if(e===void 0){let n=P_.get(t);if(n!==void 0)e=ce[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bh(e)}var L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(i){return i.replace(L_,F_)}function F_(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Qp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var D_={[vs]:"SHADOWMAP_TYPE_PCF",[vo]:"SHADOWMAP_TYPE_VSM"};function O_(i){return D_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var N_={[$i]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE_UV"};function U_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":N_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var B_={[Mr]:"ENVMAP_MODE_REFRACTION"};function k_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":B_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z_={[Qu]:"ENVMAP_BLENDING_MULTIPLY",[fp]:"ENVMAP_BLENDING_MIX",[dp]:"ENVMAP_BLENDING_ADD"};function V_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z_[i.combine]||"ENVMAP_BLENDING_NONE"}function G_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function H_(i,t,e,n){let r=i.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,l=O_(e),c=U_(e),h=k_(e),u=V_(e),f=G_(e),d=A_(e),m=E_(o),b=r.createProgram(),g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(g=[Qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[Qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?ce.tonemapping_pars_fragment:"",e.toneMapping!==qn?S_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,M_("linearToOutputTexel",e.outputColorSpace),T_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),s=Bh(s),s=Kp(s,e),s=Jp(s,e),a=Bh(a),a=Kp(a,e),a=Jp(a,e),s=jp(s),a=jp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=x+g+s,v=x+p+a,M=qp(r,r.VERTEX_SHADER,_),S=qp(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,S),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function E(A){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(b)||"",L=r.getShaderInfoLog(M)||"",P=r.getShaderInfoLog(S)||"",B=I.trim(),T=L.trim(),C=P.trim(),O=!0,D=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,S);else{let N=Zp(r,M,"vertex"),z=Zp(r,S,"fragment");Kt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+N+`
`+z)}else B!==""?Zt("WebGLProgram: Program Info Log:",B):(T===""||C==="")&&(D=!1);D&&(A.diagnostics={runnable:O,programLog:B,vertexShader:{log:T,prefix:g},fragmentShader:{log:C,prefix:p}})}r.deleteShader(M),r.deleteShader(S),y=new So(r,b),R=R_(r,b)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let R;this.getAttributes=function(){return R===void 0&&E(this),R};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(b,x_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v_++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=S,this}var W_=0,kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zh(t),e.set(t,n)),n}},zh=class{constructor(t){this.id=W_++,this.code=t,this.usedTimes=0}};function X_(i){return i===Ji||i===Cs||i===Ps}function Y_(i,t,e,n,r,o){let s=new ho,a=new kh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,R,w,A,I,L){let P=A.fog,B=I.geometry,T=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,C=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=t.get(y.envMap||T,C),D=O&&O.mapping===ws?O.image.height:null,N=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Zt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,G=z!==void 0?z.length:0,V=0;B.morphAttributes.position!==void 0&&(V=1),B.morphAttributes.normal!==void 0&&(V=2),B.morphAttributes.color!==void 0&&(V=3);let W,Q,it,q;if(N){let Ce=fi[N];W=Ce.vertexShader,Q=Ce.fragmentShader}else{W=y.vertexShader,Q=y.fragmentShader;let Ce=a.getVertexShaderStage(y),ve=a.getFragmentShaderStage(y);a.update(y,Ce,ve),it=Ce.id,q=ve.id}let Y=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),et=I.isInstancedMesh===!0,J=I.isBatchedMesh===!0,rt=!!y.map,pt=!!y.matcap,ct=!!O,ot=!!y.aoMap,gt=!!y.lightMap,vt=!!y.bumpMap&&y.wireframe===!1,qt=!!y.normalMap,he=!!y.displacementMap,fe=!!y.emissiveMap,jt=!!y.metalnessMap,Me=!!y.roughnessMap,Z=y.anisotropy>0,ke=y.clearcoat>0,me=y.dispersion>0,H=y.retroreflectivity>0,F=y.iridescence>0,nt=y.sheen>0,lt=y.transmission>0,ht=Z&&!!y.anisotropyMap,yt=ke&&!!y.clearcoatMap,_t=ke&&!!y.clearcoatNormalMap,ft=ke&&!!y.clearcoatRoughnessMap,mt=F&&!!y.iridescenceMap,Mt=F&&!!y.iridescenceThicknessMap,Gt=nt&&!!y.sheenColorMap,At=nt&&!!y.sheenRoughnessMap,wt=!!y.specularMap,Ht=!!y.specularColorMap,$t=!!y.specularIntensityMap,ae=lt&&!!y.transmissionMap,j=lt&&!!y.thicknessMap,St=!!y.gradientMap,dt=!!y.alphaMap,Tt=y.alphaTest>0,It=!!y.alphaHash,xt=!!y.extensions,Wt=qn;y.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let zt={shaderID:N,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:Q,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:J,batchingColor:J&&I._colorsTexture!==null,instancing:et,instancingColor:et&&I.instanceColor!==null,instancingMorph:et&&I.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:rt,matcap:pt,envMap:ct,envMapMode:ct&&O.mapping,envMapCubeUVHeight:D,aoMap:ot,lightMap:gt,bumpMap:vt,normalMap:qt,displacementMap:he,emissiveMap:fe,normalMapObjectSpace:qt&&y.normalMapType===gp,normalMapTangentSpace:qt&&y.normalMapType===mh,packedNormalMap:qt&&y.normalMapType===mh&&X_(y.normalMap.format),metalnessMap:jt,roughnessMap:Me,anisotropy:Z,anisotropyMap:ht,clearcoat:ke,clearcoatMap:yt,clearcoatNormalMap:_t,clearcoatRoughnessMap:ft,dispersion:me,retroreflection:H,iridescence:F,iridescenceMap:mt,iridescenceThicknessMap:Mt,sheen:nt,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:wt,specularColorMap:Ht,specularIntensityMap:$t,transmission:lt,transmissionMap:ae,thicknessMap:j,gradientMap:St,opaque:y.transparent===!1&&y.blending===Rn&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:Tt,alphaHash:It,combine:y.combine,mapUv:rt&&m(y.map.channel),aoMapUv:ot&&m(y.aoMap.channel),lightMapUv:gt&&m(y.lightMap.channel),bumpMapUv:vt&&m(y.bumpMap.channel),normalMapUv:qt&&m(y.normalMap.channel),displacementMapUv:he&&m(y.displacementMap.channel),emissiveMapUv:fe&&m(y.emissiveMap.channel),metalnessMapUv:jt&&m(y.metalnessMap.channel),roughnessMapUv:Me&&m(y.roughnessMap.channel),anisotropyMapUv:ht&&m(y.anisotropyMap.channel),clearcoatMapUv:yt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:_t&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&m(y.sheenRoughnessMap.channel),specularMapUv:wt&&m(y.specularMap.channel),specularColorMapUv:Ht&&m(y.specularColorMap.channel),specularIntensityMapUv:$t&&m(y.specularIntensityMap.channel),transmissionMapUv:ae&&m(y.transmissionMap.channel),thicknessMapUv:j&&m(y.thicknessMap.channel),alphaMapUv:dt&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(qt||Z),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(rt||dt),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&qt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:V,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:rt&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:fe&&y.emissiveMap.isVideoTexture===!0&&de.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===re,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&y.extensions.multiDraw===!0||J)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function g(y){let R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(let w in y.defines)R.push(w),R.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(p(R,y),x(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function p(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function x(y,R){s.disableAll(),R.instancing&&s.enable(0),R.instancingColor&&s.enable(1),R.instancingMorph&&s.enable(2),R.matcap&&s.enable(3),R.envMap&&s.enable(4),R.normalMapObjectSpace&&s.enable(5),R.normalMapTangentSpace&&s.enable(6),R.clearcoat&&s.enable(7),R.iridescence&&s.enable(8),R.alphaTest&&s.enable(9),R.vertexColors&&s.enable(10),R.vertexAlphas&&s.enable(11),R.vertexUv1s&&s.enable(12),R.vertexUv2s&&s.enable(13),R.vertexUv3s&&s.enable(14),R.vertexTangents&&s.enable(15),R.anisotropy&&s.enable(16),R.alphaHash&&s.enable(17),R.batching&&s.enable(18),R.dispersion&&s.enable(19),R.retroreflection&&s.enable(24),R.batchingColor&&s.enable(20),R.gradientMap&&s.enable(21),R.packedNormalMap&&s.enable(22),R.vertexNormals&&s.enable(23),y.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.reversedDepthBuffer&&s.enable(4),R.skinning&&s.enable(5),R.morphTargets&&s.enable(6),R.morphNormals&&s.enable(7),R.morphColors&&s.enable(8),R.premultipliedAlpha&&s.enable(9),R.shadowMapEnabled&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),R.decodeVideoTextureEmissive&&s.enable(20),R.alphaToCoverage&&s.enable(21),R.numLightProbeGrids>0&&s.enable(22),R.hasPositionAttribute&&s.enable(23),y.push(s.mask)}function _(y){let R=d[y.type],w;if(R){let A=fi[R];w=Dp.clone(A.uniforms)}else w=y.uniforms;return w}function v(y,R){let w=h.get(R);return w!==void 0?++w.usedTimes:(w=new H_(i,R,y,r),c.push(w),h.set(R,w)),w}function M(y){if(--y.usedTimes===0){let R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function E(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:E}}function q_(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function $_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function t0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function e0(){let i=[],t=0,e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,b,g,p){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:p},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.materialVariant=s(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=p),t++,x}function l(f,d,m,b,g,p,x){x.reversedDepth===!0&&(g=-g);let _=a(f,d,m,b,g,p);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):e.push(_)}function c(f,d,m,b,g,p){let x=a(f,d,m,b,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||$_),n.length>1&&n.sort(d||t0),r.length>1&&r.sort(d||t0)}function u(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:u,sort:h}}function Z_(){let i=new WeakMap;function t(n,r){let o=i.get(n),s;return o===void 0?(s=new e0,i.set(n,[s])):r>=o.length?(s=new e0,o.push(s)):s=o[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function K_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new tt};break;case"SpotLight":e={position:new $,direction:new $,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function J_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var j_=0;function Q_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tM(i){let t=new K_,e=J_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let r=new $,o=new Ae,s=new Ae;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,m=0,b=0,g=0,p=0,x=0,_=0,v=0,M=0,S=0,E=0,y=0,R=0,w=0;c.sort(Q_);for(let I=0,L=c.length;I<L;I++){let P=c[I],B=P.color,T=P.intensity,C=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ji?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*T,u+=B.g*T,f+=B.b*T;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],T);w++}else if(P.isSunLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let N=P.shadow,z=e.get(P);z.shadowIntensity=N.intensity,z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),n.sunShadow[m]=z,n.sunShadowMap[m]=O;let G=N.getViewportCount();for(let V=0;V<G;V++)n.sunShadowMatrix[b+V]=N.getMatrix(V),n.sunShadowCascade[b+V]=N._cascadeData[V];b+=G,m++}n.sun[d]=D,d++}else if(P.isDirectionalLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let N=P.shadow,z=e.get(P);z.shadowIntensity=N.intensity,z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=O,n.directionalShadowMatrix[g]=P.shadow.matrix,M++}n.directional[g]=D,g++}else if(P.isSpotLight){let D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(B).multiplyScalar(T),D.distance=C,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[x]=D;let N=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,N.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[x]=N.matrix,P.castShadow){let z=e.get(P);z.shadowIntensity=N.intensity,z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=O,E++}x++}else if(P.isRectAreaLight){let D=t.get(P);D.color.copy(B).multiplyScalar(T),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=D,_++}else if(P.isPointLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){let N=P.shadow,z=e.get(P);z.shadowIntensity=N.intensity,z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,z.shadowCameraNear=N.camera.near,z.shadowCameraFar=N.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=P.shadow.matrix,S++}n.point[p]=D,p++}else if(P.isHemisphereLight){let D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(T),D.groundColor.copy(P.groundColor).multiplyScalar(T),n.hemi[v]=D,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.sunLength!==d||A.directionalLength!==g||A.pointLength!==p||A.spotLength!==x||A.rectAreaLength!==_||A.hemiLength!==v||A.numSunShadows!==m||A.numDirectionalShadows!==M||A.numPointShadows!==S||A.numSpotShadows!==E||A.numSpotMaps!==y||A.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,A.sunLength=d,A.directionalLength=g,A.pointLength=p,A.spotLength=x,A.rectAreaLength=_,A.hemiLength=v,A.numSunShadows=m,A.numDirectionalShadows=M,A.numPointShadows=S,A.numSpotShadows=E,A.numSpotMaps=y,A.numLightProbes=w,n.version=j_++)}function l(c,h){let u=0,f=0,d=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){let v=c[x];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),s.identity(),o.copy(v.matrixWorld),o.premultiply(p),s.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function n0(i){let t=new tM(i),e=[],n=[],r=[];function o(f){u.camera=f,e.length=0,n.length=0,r.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function eM(i){let t=new WeakMap;function e(r,o=0){let s=t.get(r),a;return s===void 0?(a=new n0(i),t.set(r,[a])):o>=s.length?(a=new n0(i),s.push(a)):a=s[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rM=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],oM=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],i0=new Ae,Ls=new $,Fh=new $;function sM(i,t,e){let n=new as,r=new Qt,o=new Qt,s=new Be,a=new hl,l=new fl,c={},h=e.maxTextureSize,u={[ui]:an,[an]:ui,[re]:re},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ot;m.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Et(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let p=this.type;this.render=function(S,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Kd&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);let R=i.getRenderTarget(),w=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),I=i.state;I.setBlending(On),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let L=p!==this.type;L&&E.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=S.length;P<B;P++){let T=S[P],C=T.shadow;if(C===void 0){Zt("WebGLShadowMap:",T,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);let O=C.getFrameExtents();r.multiply(O),o.copy(C.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/O.x),r.x=o.x*O.x,C.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/O.y),r.y=o.y*O.y,C.mapSize.y=o.y));let D=i.state.buffers.depth.getReversed();if(C.camera._reversedDepth=D,C.map===null||L===!0){if(C.map!==null&&(C.map.depthTexture!==null&&(C.map.depthTexture.dispose(),C.map.depthTexture=null),C.map.dispose()),this.type===vo){if(T.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}C.map=new Ye(r.x,r.y,{format:Ji,type:Kn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),C.map.texture.name=T.name+".shadowMap",C.map.depthTexture=new ci(r.x,r.y,Zn),C.map.depthTexture.name=T.name+".shadowMapDepth",C.map.depthTexture.format=ri,C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=en,C.map.depthTexture.magFilter=en}else T.isPointLight?(C.map=new xc(r.x),C.map.depthTexture=new cl(r.x,$n)):(C.map=new Ye(r.x,r.y),C.map.depthTexture=new ci(r.x,r.y,$n)),C.map.depthTexture.name=T.name+".shadowMap",C.map.depthTexture.format=ri,this.type===vs?(C.map.depthTexture.compareFunction=D?pc:dc,C.map.depthTexture.minFilter=Xe,C.map.depthTexture.magFilter=Xe):(C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=en,C.map.depthTexture.magFilter=en);C.camera.updateProjectionMatrix()}C.map.isWebGLCubeRenderTarget!==!0&&(C.map.width!==r.x||C.map.height!==r.y)&&C.map.setSize(r.x,r.y);let N=C.map.isWebGLCubeRenderTarget?6:C.getViewportCount();T.isPointLight!==!0&&C.updateMatrices(T,y);for(let z=0;z<N;z++){let G=C.getCamera(z);if(T.isPointLight){let V=C.camera,W=C.matrix,Q=T.distance||V.far;Q!==V.far&&(V.far=Q,V.updateProjectionMatrix()),Ls.setFromMatrixPosition(T.matrixWorld),V.position.copy(Ls),Fh.copy(V.position),Fh.add(rM[z]),V.up.copy(oM[z]),V.lookAt(Fh),V.updateMatrixWorld(),W.makeTranslation(-Ls.x,-Ls.y,-Ls.z),i0.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),C._frustum.setFromProjectionMatrix(i0,V.coordinateSystem,V.reversedDepth)}if(C.map.isWebGLCubeRenderTarget)i.setRenderTarget(C.map,z),i.clear();else{z===0&&(i.setRenderTarget(C.map),i.clear());let V=C.getViewport(z);s.set(o.x*V.x,o.y*V.y,o.x*V.z,o.y*V.w),I.viewport(s)}n=C.getFrustum(z),v(E,y,G,T,this.type)}C.isPointLightShadow!==!0&&this.type===vo&&x(C,y),C.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(R,w,A)};function x(S,E){let y=t.update(b);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ye(r.x,r.y,{format:Ji,type:Kn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,y,f,b,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,y,d,b,null)}function _(S,E,y,R){let w=null,A=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)w=A;else if(w=y.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=w.uuid,L=E.uuid,P=c[I];P===void 0&&(P={},c[I]=P);let B=P[L];B===void 0&&(B=w.clone(),P[L]=B,E.addEventListener("dispose",M)),w=B}if(w.visible=E.visible,w.wireframe=E.wireframe,R===vo?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let I=i.properties.get(w);I.light=y}return w}function v(S,E,y,R,w){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===vo)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let L=t.update(S),P=S.material;if(Array.isArray(P)){let B=L.groups;for(let T=0,C=B.length;T<C;T++){let O=B[T],D=P[O.materialIndex];if(D&&D.visible){let N=_(S,D,R,w);S.onBeforeShadow(i,S,E,y,L,N,O),i.renderBufferDirect(y,null,L,N,S,O),S.onAfterShadow(i,S,E,y,L,N,O)}}}else if(P.visible){let B=_(S,P,R,w);S.onBeforeShadow(i,S,E,y,L,B,null),i.renderBufferDirect(y,null,L,B,S,null),S.onAfterShadow(i,S,E,y,L,B,null)}}let I=S.children;for(let L=0,P=I.length;L<P;L++)v(I[L],E,y,R,w)}function M(S){S.target.removeEventListener("dispose",M);for(let y in c){let R=c[y],w=S.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}function aM(i,t){function e(){let j=!1,St=new Be,dt=null,Tt=new Be(0,0,0,0);return{setMask:function(It){dt!==It&&!j&&(i.colorMask(It,It,It,It),dt=It)},setLocked:function(It){j=It},setClear:function(It,xt,Wt,zt,Ce){Ce===!0&&(It*=zt,xt*=zt,Wt*=zt),St.set(It,xt,Wt,zt),Tt.equals(St)===!1&&(i.clearColor(It,xt,Wt,zt),Tt.copy(St))},reset:function(){j=!1,dt=null,Tt.set(-1,0,0,0)}}}function n(){let j=!1,St=!1,dt=null,Tt=null,It=null;return{setReversed:function(xt){if(St!==xt){let Wt=t.get("EXT_clip_control");xt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),St=xt;let zt=It;It=null,this.setClear(zt)}},getReversed:function(){return St},setTest:function(xt){xt?Y(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(xt){dt!==xt&&!j&&(i.depthMask(xt),dt=xt)},setFunc:function(xt){if(St&&(xt=Ep[xt]),Tt!==xt){switch(xt){case Xa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case ao:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=xt}},setLocked:function(xt){j=xt},setClear:function(xt){It!==xt&&(It=xt,St&&(xt=1-xt),i.clearDepth(xt))},reset:function(){j=!1,dt=null,Tt=null,It=null,St=!1}}}function r(){let j=!1,St=null,dt=null,Tt=null,It=null,xt=null,Wt=null,zt=null,Ce=null;return{setTest:function(ve){j||(ve?Y(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(ve){St!==ve&&!j&&(i.stencilMask(ve),St=ve)},setFunc:function(ve,zn,ti){(dt!==ve||Tt!==zn||It!==ti)&&(i.stencilFunc(ve,zn,ti),dt=ve,Tt=zn,It=ti)},setOp:function(ve,zn,ti){(xt!==ve||Wt!==zn||zt!==ti)&&(i.stencilOp(ve,zn,ti),xt=ve,Wt=zn,zt=ti)},setLocked:function(ve){j=ve},setClear:function(ve){Ce!==ve&&(i.clearStencil(ve),Ce=ve)},reset:function(){j=!1,St=null,dt=null,Tt=null,It=null,xt=null,Wt=null,zt=null,Ce=null}}}let o=new e,s=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],b=null,g=!1,p=null,x=null,_=null,v=null,M=null,S=null,E=null,y=new tt(0,0,0),R=0,w=!1,A=null,I=null,L=null,P=null,B=null,T=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,O=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(D)[1]),C=O>=1):D.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),C=O>=2);let N=null,z={},G=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),W=new Be().fromArray(G),Q=new Be().fromArray(V);function it(j,St,dt,Tt){let It=new Uint8Array(4),xt=i.createTexture();i.bindTexture(j,xt),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<dt;Wt++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(St+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return xt}let q={};q[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),s.setFunc(ao),vt(!1),qt(Ku),Y(i.CULL_FACE),ot(On);function Y(j){h[j]!==!0&&(i.enable(j),h[j]=!0)}function X(j){h[j]!==!1&&(i.disable(j),h[j]=!1)}function et(j,St){return f[j]!==St?(i.bindFramebuffer(j,St),f[j]=St,j===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=St),j===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=St),!0):!1}function J(j,St){let dt=m,Tt=!1;if(j){dt=d.get(St),dt===void 0&&(dt=[],d.set(St,dt));let It=j.textures;if(dt.length!==It.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Wt=It.length;xt<Wt;xt++)dt[xt]=i.COLOR_ATTACHMENT0+xt;dt.length=It.length,Tt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(dt)}function rt(j){return b!==j?(i.useProgram(j),b=j,!0):!1}let pt={[_r]:i.FUNC_ADD,[Jd]:i.FUNC_SUBTRACT,[jd]:i.FUNC_REVERSE_SUBTRACT};pt[Qd]=i.MIN,pt[tp]=i.MAX;let ct={[El]:i.ZERO,[_s]:i.ONE,[ep]:i.SRC_COLOR,[Ms]:i.SRC_ALPHA,[ap]:i.SRC_ALPHA_SATURATE,[op]:i.DST_COLOR,[ip]:i.DST_ALPHA,[np]:i.ONE_MINUS_SRC_COLOR,[ju]:i.ONE_MINUS_SRC_ALPHA,[sp]:i.ONE_MINUS_DST_COLOR,[rp]:i.ONE_MINUS_DST_ALPHA,[lp]:i.CONSTANT_COLOR,[cp]:i.ONE_MINUS_CONSTANT_COLOR,[up]:i.CONSTANT_ALPHA,[hp]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(j,St,dt,Tt,It,xt,Wt,zt,Ce,ve){if(j===On){g===!0&&(X(i.BLEND),g=!1);return}if(g===!1&&(Y(i.BLEND),g=!0),j!==Al){if(j!==p||ve!==w){if((x!==_r||M!==_r)&&(i.blendEquation(i.FUNC_ADD),x=_r,M=_r),ve)switch(j){case Rn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case we:i.blendFunc(i.ONE,i.ONE);break;case Ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ys:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",j);break}else switch(j){case Rn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case we:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ju:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ys:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",j);break}_=null,v=null,S=null,E=null,y.set(0,0,0),R=0,p=j,w=ve}return}It=It||St,xt=xt||dt,Wt=Wt||Tt,(St!==x||It!==M)&&(i.blendEquationSeparate(pt[St],pt[It]),x=St,M=It),(dt!==_||Tt!==v||xt!==S||Wt!==E)&&(i.blendFuncSeparate(ct[dt],ct[Tt],ct[xt],ct[Wt]),_=dt,v=Tt,S=xt,E=Wt),(zt.equals(y)===!1||Ce!==R)&&(i.blendColor(zt.r,zt.g,zt.b,Ce),y.copy(zt),R=Ce),p=j,w=!1}function gt(j,St){j.side===re?X(i.CULL_FACE):Y(i.CULL_FACE);let dt=j.side===an;St&&(dt=!dt),vt(dt),j.blending===Rn&&j.transparent===!1?ot(On):ot(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),s.setFunc(j.depthFunc),s.setTest(j.depthTest),s.setMask(j.depthWrite),o.setMask(j.colorWrite);let Tt=j.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),fe(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(j){A!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),A=j)}function qt(j){j!==$d?(Y(i.CULL_FACE),j!==I&&(j===Ku?i.cullFace(i.BACK):j===Zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),I=j}function he(j){j!==L&&(C&&i.lineWidth(j),L=j)}function fe(j,St,dt){j?(Y(i.POLYGON_OFFSET_FILL),(P!==St||B!==dt)&&(P=St,B=dt,s.getReversed()&&(St=-St),i.polygonOffset(St,dt))):X(i.POLYGON_OFFSET_FILL)}function jt(j){j?Y(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function Me(j){j===void 0&&(j=i.TEXTURE0+T-1),N!==j&&(i.activeTexture(j),N=j)}function Z(j,St,dt){dt===void 0&&(N===null?dt=i.TEXTURE0+T-1:dt=N);let Tt=z[dt];Tt===void 0&&(Tt={type:void 0,texture:void 0},z[dt]=Tt),(Tt.type!==j||Tt.texture!==St)&&(N!==dt&&(i.activeTexture(dt),N=dt),i.bindTexture(j,St||q[j]),Tt.type=j,Tt.texture=St)}function ke(){let j=z[N];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function F(){try{i.texSubImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function nt(){try{i.texSubImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function yt(){try{i.texStorage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function _t(){try{i.texStorage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function ft(){try{i.texImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function mt(){try{i.texImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function Mt(j){return u[j]!==void 0?u[j]:i.getParameter(j)}function Gt(j,St){u[j]!==St&&(i.pixelStorei(j,St),u[j]=St)}function At(j){W.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),W.copy(j))}function wt(j){Q.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Q.copy(j))}function Ht(j,St){let dt=c.get(St);dt===void 0&&(dt=new WeakMap,c.set(St,dt));let Tt=dt.get(j);Tt===void 0&&(Tt=i.getUniformBlockIndex(St,j.name),dt.set(j,Tt))}function $t(j,St){let Tt=c.get(St).get(j);l.get(St)!==Tt&&(i.uniformBlockBinding(St,Tt,j.__bindingPointIndex),l.set(St,Tt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},N=null,z={},f={},d=new WeakMap,m=[],b=null,g=!1,p=null,x=null,_=null,v=null,M=null,S=null,E=null,y=new tt(0,0,0),R=0,w=!1,A=null,I=null,L=null,P=null,B=null,W.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:Y,disable:X,bindFramebuffer:et,drawBuffers:J,useProgram:rt,setBlending:ot,setMaterial:gt,setFlipSided:vt,setCullFace:qt,setLineWidth:he,setPolygonOffset:fe,setScissorTest:jt,activeTexture:Me,bindTexture:Z,unbindTexture:ke,compressedTexImage2D:me,compressedTexImage3D:H,texImage2D:ft,texImage3D:mt,pixelStorei:Gt,getParameter:Mt,updateUBOMapping:Ht,uniformBlockBinding:$t,texStorage2D:yt,texStorage3D:_t,texSubImage2D:F,texSubImage3D:nt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ht,scissor:At,viewport:wt,reset:ae}}function lM(i,t,e,n,r,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(H,F){return m?new OffscreenCanvas(H,F):lo("canvas")}function g(H,F,nt){let lt=1,ht=me(H);if((ht.width>nt||ht.height>nt)&&(lt=nt/Math.max(ht.width,ht.height)),lt<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let yt=Math.floor(lt*ht.width),_t=Math.floor(lt*ht.height);f===void 0&&(f=b(yt,_t));let ft=F?b(yt,_t):f;return ft.width=yt,ft.height=_t,ft.getContext("2d").drawImage(H,0,0,yt,_t),Zt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+yt+"x"+_t+")."),ft}else return"data"in H&&Zt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),H;return H}function p(H){return H.generateMipmaps}function x(H){i.generateMipmap(H)}function _(H){return H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?i.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(H,F,nt,lt,ht,yt=!1){if(H!==null){if(i[H]!==void 0)return i[H];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let _t;lt&&(_t=t.get("EXT_texture_norm16"),_t||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=F;if(F===i.RED&&(nt===i.FLOAT&&(ft=i.R32F),nt===i.HALF_FLOAT&&(ft=i.R16F),nt===i.UNSIGNED_BYTE&&(ft=i.R8),nt===i.UNSIGNED_SHORT&&_t&&(ft=_t.R16_EXT),nt===i.SHORT&&_t&&(ft=_t.R16_SNORM_EXT)),F===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.R8UI),nt===i.UNSIGNED_SHORT&&(ft=i.R16UI),nt===i.UNSIGNED_INT&&(ft=i.R32UI),nt===i.BYTE&&(ft=i.R8I),nt===i.SHORT&&(ft=i.R16I),nt===i.INT&&(ft=i.R32I)),F===i.RG&&(nt===i.FLOAT&&(ft=i.RG32F),nt===i.HALF_FLOAT&&(ft=i.RG16F),nt===i.UNSIGNED_BYTE&&(ft=i.RG8),nt===i.UNSIGNED_SHORT&&_t&&(ft=_t.RG16_EXT),nt===i.SHORT&&_t&&(ft=_t.RG16_SNORM_EXT)),F===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.RG8UI),nt===i.UNSIGNED_SHORT&&(ft=i.RG16UI),nt===i.UNSIGNED_INT&&(ft=i.RG32UI),nt===i.BYTE&&(ft=i.RG8I),nt===i.SHORT&&(ft=i.RG16I),nt===i.INT&&(ft=i.RG32I)),F===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),nt===i.UNSIGNED_INT&&(ft=i.RGB32UI),nt===i.BYTE&&(ft=i.RGB8I),nt===i.SHORT&&(ft=i.RGB16I),nt===i.INT&&(ft=i.RGB32I)),F===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),nt===i.UNSIGNED_INT&&(ft=i.RGBA32UI),nt===i.BYTE&&(ft=i.RGBA8I),nt===i.SHORT&&(ft=i.RGBA16I),nt===i.INT&&(ft=i.RGBA32I)),F===i.RGB&&(nt===i.UNSIGNED_SHORT&&_t&&(ft=_t.RGB16_EXT),nt===i.SHORT&&_t&&(ft=_t.RGB16_SNORM_EXT),nt===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),nt===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),F===i.RGBA){let mt=yt?ts:de.getTransfer(ht);nt===i.FLOAT&&(ft=i.RGBA32F),nt===i.HALF_FLOAT&&(ft=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(ft=mt===_e?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT&&_t&&(ft=_t.RGBA16_EXT),nt===i.SHORT&&_t&&(ft=_t.RGBA16_SNORM_EXT),nt===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function M(H,F){let nt;return H?F===null||F===$n||F===_o?nt=i.DEPTH24_STENCIL8:F===Zn?nt=i.DEPTH32F_STENCIL8:F===yo&&(nt=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===$n||F===_o?nt=i.DEPTH_COMPONENT24:F===Zn?nt=i.DEPTH_COMPONENT32F:F===yo&&(nt=i.DEPTH_COMPONENT16),nt}function S(H,F){return p(H)===!0||H.isFramebufferTexture&&H.minFilter!==en&&H.minFilter!==Xe?Math.log2(Math.max(F.width,F.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?F.mipmaps.length:1}function E(H){let F=H.target;F.removeEventListener("dispose",E),R(F),F.isVideoTexture&&h.delete(F),F.isHTMLTexture&&u.delete(F)}function y(H){let F=H.target;F.removeEventListener("dispose",y),A(F)}function R(H){let F=n.get(H);if(F.__webglInit===void 0)return;let nt=H.source,lt=d.get(nt);if(lt){let ht=lt[F.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&w(H),Object.keys(lt).length===0&&d.delete(nt)}n.remove(H)}function w(H){let F=n.get(H);i.deleteTexture(F.__webglTexture);let nt=H.source,lt=d.get(nt);delete lt[F.__cacheKey],s.memory.textures--}function A(H){let F=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(F.__webglFramebuffer[lt]))for(let ht=0;ht<F.__webglFramebuffer[lt].length;ht++)i.deleteFramebuffer(F.__webglFramebuffer[lt][ht]);else i.deleteFramebuffer(F.__webglFramebuffer[lt]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[lt])}else{if(Array.isArray(F.__webglFramebuffer))for(let lt=0;lt<F.__webglFramebuffer.length;lt++)i.deleteFramebuffer(F.__webglFramebuffer[lt]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let lt=0;lt<F.__webglColorRenderbuffer.length;lt++)F.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[lt]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let nt=H.textures;for(let lt=0,ht=nt.length;lt<ht;lt++){let yt=n.get(nt[lt]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),s.memory.textures--),n.remove(nt[lt])}n.remove(H)}let I=0;function L(){I=0}function P(){return I}function B(H){I=H}function T(){let H=I;return H>=r.maxTextures&&Zt("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,H}function C(H){let F=[];return F.push(H.wrapS),F.push(H.wrapT),F.push(H.wrapR||0),F.push(H.magFilter),F.push(H.minFilter),F.push(H.anisotropy),F.push(H.internalFormat),F.push(H.format),F.push(H.type),F.push(H.generateMipmaps),F.push(H.premultiplyAlpha),F.push(H.flipY),F.push(H.unpackAlignment),F.push(H.colorSpace),F.join()}function O(H,F){let nt=n.get(H);if(H.isVideoTexture&&Z(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&nt.__version!==H.version){let lt=H.image;if(lt===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(nt,H,F);return}}else H.isExternalTexture&&(nt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+F)}function D(H,F){let nt=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&nt.__version!==H.version){X(nt,H,F);return}else H.isExternalTexture&&(nt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+F)}function N(H,F){let nt=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&nt.__version!==H.version){X(nt,H,F);return}e.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+F)}function z(H,F){let nt=n.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&nt.__version!==H.version){et(nt,H,F);return}e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+F)}let G={[gr]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},V={[en]:i.NEAREST,[pp]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Pl]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},W={[xp]:i.NEVER,[wp]:i.ALWAYS,[vp]:i.LESS,[dc]:i.LEQUAL,[yp]:i.EQUAL,[pc]:i.GEQUAL,[_p]:i.GREATER,[Mp]:i.NOTEQUAL};function Q(H,F){if(F.type===Zn&&t.has("OES_texture_float_linear")===!1&&(F.magFilter===Xe||F.magFilter===Pl||F.magFilter===Ss||F.magFilter===Zi||F.minFilter===Xe||F.minFilter===Pl||F.minFilter===Ss||F.minFilter===Zi)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,G[F.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,G[F.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,G[F.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,V[F.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,V[F.minFilter]),F.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,W[F.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===en||F.minFilter!==Ss&&F.minFilter!==Zi||F.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||n.get(F).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(H,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,r.getMaxAnisotropy())),n.get(F).__currentAnisotropy=F.anisotropy}}}function it(H,F){let nt=!1;H.__webglInit===void 0&&(H.__webglInit=!0,F.addEventListener("dispose",E));let lt=F.source,ht=d.get(lt);ht===void 0&&(ht={},d.set(lt,ht));let yt=C(F);if(yt!==H.__cacheKey){ht[yt]===void 0&&(ht[yt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,nt=!0),ht[yt].usedTimes++;let _t=ht[H.__cacheKey];_t!==void 0&&(ht[H.__cacheKey].usedTimes--,_t.usedTimes===0&&w(F)),H.__cacheKey=yt,H.__webglTexture=ht[yt].texture}return nt}function q(H,F,nt){return Math.floor(Math.floor(H/nt)/F)}function Y(H,F,nt,lt){let yt=H.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,nt,lt,F.data);else{yt.sort((Gt,At)=>Gt.start-At.start);let _t=0;for(let Gt=1;Gt<yt.length;Gt++){let At=yt[_t],wt=yt[Gt],Ht=At.start+At.count,$t=q(wt.start,F.width,4),ae=q(At.start,F.width,4);wt.start<=Ht+1&&$t===ae&&q(wt.start+wt.count-1,F.width,4)===$t?At.count=Math.max(At.count,wt.start+wt.count-At.start):(++_t,yt[_t]=wt)}yt.length=_t+1;let ft=e.getParameter(i.UNPACK_ROW_LENGTH),mt=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,F.width);for(let Gt=0,At=yt.length;Gt<At;Gt++){let wt=yt[Gt],Ht=Math.floor(wt.start/4),$t=Math.ceil(wt.count/4),ae=Ht%F.width,j=Math.floor(Ht/F.width),St=$t,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,j),e.texSubImage2D(i.TEXTURE_2D,0,ae,j,St,dt,nt,lt,F.data)}H.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function X(H,F,nt){let lt=i.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),F.isData3DTexture&&(lt=i.TEXTURE_3D);let ht=it(H,F),yt=F.source;e.bindTexture(lt,H.__webglTexture,i.TEXTURE0+nt);let _t=n.get(yt);if(yt.version!==_t.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+nt),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let dt=de.getPrimaries(de.workingColorSpace),Tt=F.colorSpace===Ai?null:de.getPrimaries(F.colorSpace),It=F.colorSpace===Ai||dt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment);let mt=g(F.image,!1,r.maxTextureSize);mt=ke(F,mt);let Mt=o.convert(F.format,F.colorSpace),Gt=o.convert(F.type),At=v(F.internalFormat,Mt,Gt,F.normalized,F.colorSpace,F.isVideoTexture);Q(lt,F);let wt,Ht=F.mipmaps,$t=F.isVideoTexture!==!0,ae=_t.__version===void 0||ht===!0,j=yt.dataReady,St=S(F,mt);if(F.isDepthTexture)At=M(F.format===Ki,F.type),ae&&($t?e.texStorage2D(i.TEXTURE_2D,1,At,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,At,mt.width,mt.height,0,Mt,Gt,null));else if(F.isDataTexture)if(Ht.length>0){$t&&ae&&e.texStorage2D(i.TEXTURE_2D,St,At,Ht[0].width,Ht[0].height);for(let dt=0,Tt=Ht.length;dt<Tt;dt++)wt=Ht[dt],$t?j&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,wt.width,wt.height,Mt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,dt,At,wt.width,wt.height,0,Mt,Gt,wt.data);F.generateMipmaps=!1}else $t?(ae&&e.texStorage2D(i.TEXTURE_2D,St,At,mt.width,mt.height),j&&Y(F,mt,Mt,Gt)):e.texImage2D(i.TEXTURE_2D,0,At,mt.width,mt.height,0,Mt,Gt,mt.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){$t&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,At,Ht[0].width,Ht[0].height,mt.depth);for(let dt=0,Tt=Ht.length;dt<Tt;dt++)if(wt=Ht[dt],F.format!==Nn)if(Mt!==null)if($t){if(j)if(F.layerUpdates.size>0){let It=Mh(wt.width,wt.height,F.format,F.type);for(let xt of F.layerUpdates){let Wt=wt.data.subarray(xt*It/wt.data.BYTES_PER_ELEMENT,(xt+1)*It/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,xt,wt.width,wt.height,1,Mt,Wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,wt.width,wt.height,mt.depth,Mt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,At,wt.width,wt.height,mt.depth,0,wt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,wt.width,wt.height,mt.depth,Mt,Gt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,At,wt.width,wt.height,mt.depth,0,Mt,Gt,wt.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{$t&&ae&&e.texStorage2D(i.TEXTURE_2D,St,At,Ht[0].width,Ht[0].height);for(let dt=0,Tt=Ht.length;dt<Tt;dt++)wt=Ht[dt],F.format!==Nn?Mt!==null?$t?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,wt.width,wt.height,Mt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,At,wt.width,wt.height,0,wt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?j&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,wt.width,wt.height,Mt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,dt,At,wt.width,wt.height,0,Mt,Gt,wt.data)}else if(F.isDataArrayTexture)if($t){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,At,mt.width,mt.height,mt.depth),j)if(F.layerUpdates.size>0){let dt=Mh(mt.width,mt.height,F.format,F.type);for(let Tt of F.layerUpdates){let It=mt.data.subarray(Tt*dt/mt.data.BYTES_PER_ELEMENT,(Tt+1)*dt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,mt.width,mt.height,1,Mt,Gt,It)}F.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Mt,Gt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,mt.width,mt.height,mt.depth,0,Mt,Gt,mt.data);else if(F.isData3DTexture)$t?(ae&&e.texStorage3D(i.TEXTURE_3D,St,At,mt.width,mt.height,mt.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Mt,Gt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,At,mt.width,mt.height,mt.depth,0,Mt,Gt,mt.data);else if(F.isFramebufferTexture){if(ae)if($t)e.texStorage2D(i.TEXTURE_2D,St,At,mt.width,mt.height);else{let dt=mt.width,Tt=mt.height;for(let It=0;It<St;It++)e.texImage2D(i.TEXTURE_2D,It,At,dt,Tt,0,Mt,Gt,null),dt>>=1,Tt>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in i){let dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),mt.parentNode!==dt){dt.appendChild(mt),u.add(F),dt.onpaint=Tt=>{let It=Tt.changedElements;for(let xt of u)It.includes(xt.image)&&(xt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,mt);else{let It=i.RGBA,xt=i.RGBA,Wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,xt,Wt,mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if($t&&ae){let dt=me(Ht[0]);e.texStorage2D(i.TEXTURE_2D,St,At,dt.width,dt.height)}for(let dt=0,Tt=Ht.length;dt<Tt;dt++)wt=Ht[dt],$t?j&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt,Gt,wt):e.texImage2D(i.TEXTURE_2D,dt,At,Mt,Gt,wt);F.generateMipmaps=!1}else if($t){if(ae){let dt=me(mt);e.texStorage2D(i.TEXTURE_2D,St,At,dt.width,dt.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Gt,mt)}else e.texImage2D(i.TEXTURE_2D,0,At,Mt,Gt,mt);p(F)&&x(lt),_t.__version=yt.version,F.onUpdate&&F.onUpdate(F)}H.__version=F.version}function et(H,F,nt){if(F.image.length!==6)return;let lt=it(H,F),ht=F.source;e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+nt);let yt=n.get(ht);if(ht.version!==yt.__version||lt===!0){e.activeTexture(i.TEXTURE0+nt);let _t=de.getPrimaries(de.workingColorSpace),ft=F.colorSpace===Ai?null:de.getPrimaries(F.colorSpace),mt=F.colorSpace===Ai||_t===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Mt=F.isCompressedTexture||F.image[0].isCompressedTexture,Gt=F.image[0]&&F.image[0].isDataTexture,At=[];for(let xt=0;xt<6;xt++)!Mt&&!Gt?At[xt]=g(F.image[xt],!0,r.maxCubemapSize):At[xt]=Gt?F.image[xt].image:F.image[xt],At[xt]=ke(F,At[xt]);let wt=At[0],Ht=o.convert(F.format,F.colorSpace),$t=o.convert(F.type),ae=v(F.internalFormat,Ht,$t,F.normalized,F.colorSpace),j=F.isVideoTexture!==!0,St=yt.__version===void 0||lt===!0,dt=ht.dataReady,Tt=S(F,wt);Q(i.TEXTURE_CUBE_MAP,F);let It;if(Mt){j&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,wt.width,wt.height);for(let xt=0;xt<6;xt++){It=At[xt].mipmaps;for(let Wt=0;Wt<It.length;Wt++){let zt=It[Wt];F.format!==Nn?Ht!==null?j?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,0,0,zt.width,zt.height,Ht,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,ae,zt.width,zt.height,0,zt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,0,0,zt.width,zt.height,Ht,$t,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt,ae,zt.width,zt.height,0,Ht,$t,zt.data)}}}else{if(It=F.mipmaps,j&&St){It.length>0&&Tt++;let xt=me(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Gt){j?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,At[xt].width,At[xt].height,Ht,$t,At[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ae,At[xt].width,At[xt].height,0,Ht,$t,At[xt].data);for(let Wt=0;Wt<It.length;Wt++){let Ce=It[Wt].image[xt].image;j?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,0,0,Ce.width,Ce.height,Ht,$t,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,ae,Ce.width,Ce.height,0,Ht,$t,Ce.data)}}else{j?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ht,$t,At[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ae,Ht,$t,At[xt]);for(let Wt=0;Wt<It.length;Wt++){let zt=It[Wt];j?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,0,0,Ht,$t,zt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Wt+1,ae,Ht,$t,zt.image[xt])}}}p(F)&&x(i.TEXTURE_CUBE_MAP),yt.__version=ht.version,F.onUpdate&&F.onUpdate(F)}H.__version=F.version}function J(H,F,nt,lt,ht,yt){let _t=o.convert(nt.format,nt.colorSpace),ft=o.convert(nt.type),mt=v(nt.internalFormat,_t,ft,nt.normalized,nt.colorSpace),Mt=n.get(F),Gt=n.get(nt);if(Gt.__renderTarget=F,!Mt.__hasExternalTextures){let At=Math.max(1,F.width>>yt),wt=Math.max(1,F.height>>yt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,yt,mt,At,wt,F.depth,0,_t,ft,null):e.texImage2D(ht,yt,mt,At,wt,0,_t,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,H),Me(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ht,Gt.__webglTexture,0,jt(F)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,ht,Gt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(H,F,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,H),F.depthBuffer){let lt=F.depthTexture,ht=lt&&lt.isDepthTexture?lt.type:null,yt=M(F.stencilBuffer,ht),_t=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt(F),yt,F.width,F.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt(F),yt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,yt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,H)}else{let lt=F.textures;for(let ht=0;ht<lt.length;ht++){let yt=lt[ht],_t=o.convert(yt.format,yt.colorSpace),ft=o.convert(yt.type),mt=v(yt.internalFormat,_t,ft,yt.normalized,yt.colorSpace);Me(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt(F),mt,F.width,F.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt(F),mt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,mt,F.width,F.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(H,F,nt){let lt=F.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,H),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(F.depthTexture);if(ht.__renderTarget=F,(!ht.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),lt){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,F.depthTexture.addEventListener("dispose",E)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Q(i.TEXTURE_CUBE_MAP,F.depthTexture);let Mt=o.convert(F.depthTexture.format),Gt=o.convert(F.depthTexture.type),At;F.depthTexture.format===ri?At=i.DEPTH_COMPONENT24:F.depthTexture.format===Ki&&(At=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,At,F.width,F.height,0,Mt,Gt,null)}}else O(F.depthTexture,0);let yt=ht.__webglTexture,_t=jt(F),ft=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+nt:i.TEXTURE_2D,mt=F.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(F.depthTexture.format===ri)Me(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ft,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,mt,ft,yt,0);else if(F.depthTexture.format===Ki)Me(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ft,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,mt,ft,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(H){let F=n.get(H),nt=H.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==H.depthTexture){let lt=H.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),lt){let ht=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,lt.removeEventListener("dispose",ht)};lt.addEventListener("dispose",ht),F.__depthDisposeCallback=ht}F.__boundDepthTexture=lt}if(H.depthTexture&&!F.__autoAllocateDepthBuffer)if(nt)for(let lt=0;lt<6;lt++)pt(F.__webglFramebuffer[lt],H,lt);else{let lt=H.texture.mipmaps;lt&&lt.length>0?pt(F.__webglFramebuffer[0],H,0):pt(F.__webglFramebuffer,H,0)}else if(nt){F.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[lt]),F.__webglDepthbuffer[lt]===void 0)F.__webglDepthbuffer[lt]=i.createRenderbuffer(),rt(F.__webglDepthbuffer[lt],H,!1);else{let ht=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=F.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,yt)}}else{let lt=H.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=i.createRenderbuffer(),rt(F.__webglDepthbuffer,H,!1);else{let ht=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=F.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(H,F,nt){let lt=n.get(H);F!==void 0&&J(lt.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&ct(H)}function gt(H){let F=H.texture,nt=n.get(H),lt=n.get(F);H.addEventListener("dispose",y);let ht=H.textures,yt=H.isWebGLCubeRenderTarget===!0,_t=ht.length>1;if(_t||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=F.version,s.memory.textures++),yt){nt.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(F.mipmaps&&F.mipmaps.length>0){nt.__webglFramebuffer[ft]=[];for(let mt=0;mt<F.mipmaps.length;mt++)nt.__webglFramebuffer[ft][mt]=i.createFramebuffer()}else nt.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){nt.__webglFramebuffer=[];for(let ft=0;ft<F.mipmaps.length;ft++)nt.__webglFramebuffer[ft]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(_t)for(let ft=0,mt=ht.length;ft<mt;ft++){let Mt=n.get(ht[ft]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),s.memory.textures++)}if(H.samples>0&&Me(H)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let ft=0;ft<ht.length;ft++){let mt=ht[ft];nt.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[ft]);let Mt=o.convert(mt.format,mt.colorSpace),Gt=o.convert(mt.type),At=v(mt.internalFormat,Mt,Gt,mt.normalized,mt.colorSpace,H.isXRRenderTarget===!0),wt=jt(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,At,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,nt.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(nt.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Q(i.TEXTURE_CUBE_MAP,F);for(let ft=0;ft<6;ft++)if(F.mipmaps&&F.mipmaps.length>0)for(let mt=0;mt<F.mipmaps.length;mt++)J(nt.__webglFramebuffer[ft][mt],H,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,mt);else J(nt.__webglFramebuffer[ft],H,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(F)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ft=0,mt=ht.length;ft<mt;ft++){let Mt=ht[ft],Gt=n.get(Mt),At=i.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(At=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Gt.__webglTexture),Q(At,Mt),J(nt.__webglFramebuffer,H,Mt,i.COLOR_ATTACHMENT0+ft,At,0),p(Mt)&&x(At)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(ft=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,lt.__webglTexture),Q(ft,F),F.mipmaps&&F.mipmaps.length>0)for(let mt=0;mt<F.mipmaps.length;mt++)J(nt.__webglFramebuffer[mt],H,F,i.COLOR_ATTACHMENT0,ft,mt);else J(nt.__webglFramebuffer,H,F,i.COLOR_ATTACHMENT0,ft,0);p(F)&&x(ft),e.unbindTexture()}H.depthBuffer&&ct(H)}function vt(H){let F=H.textures;for(let nt=0,lt=F.length;nt<lt;nt++){let ht=F[nt];if(p(ht)){let yt=_(H),_t=n.get(ht).__webglTexture;e.bindTexture(yt,_t),x(yt),e.unbindTexture()}}}let qt=[],he=[];function fe(H){if(H.samples>0){if(Me(H)===!1){let F=H.textures,nt=H.width,lt=H.height,ht=i.COLOR_BUFFER_BIT,yt=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(H),ft=F.length>1;if(ft)for(let Mt=0;Mt<F.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let mt=H.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<F.length;Mt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(F[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,nt,lt,0,0,nt,lt,ht,i.NEAREST),l===!0&&(qt.length=0,he.length=0,qt.push(i.COLOR_ATTACHMENT0+Mt),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(qt.push(yt),he.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Mt=0;Mt<F.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(F[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&l){let F=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[F])}}}function jt(H){return Math.min(r.maxSamples,H.samples)}function Me(H){let F=n.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function Z(H){let F=s.render.frame;h.get(H)!==F&&(h.set(H,F),H.update())}function ke(H,F){let nt=H.colorSpace,lt=H.format,ht=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||nt!==Qo&&nt!==Ai&&(de.getTransfer(nt)===_e?(lt!==Nn||ht!==Cn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",nt)),F}function me(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(c.width=H.naturalWidth||H.width,c.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(c.width=H.displayWidth,c.height=H.displayHeight):(c.width=H.width,c.height=H.height),c}this.allocateTextureUnit=T,this.resetTextureUnits=L,this.getTextureUnits=P,this.setTextureUnits=B,this.setTexture2D=O,this.setTexture2DArray=D,this.setTexture3D=N,this.setTextureCube=z,this.rebindTextures=ot,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cM(i,t){function e(n,r=Ai){let o,s=de.getTransfer(r);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lh)return i.BYTE;if(n===ch)return i.SHORT;if(n===yo)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===fh)return i.ALPHA;if(n===dh)return i.RGB;if(n===Nn)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===ph)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===Ol)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===Ts||n===As||n===Es||n===Rs)if(s===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ts)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ts)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===As)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Bl||n===kl||n===zl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ul)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===Cs||n===Yl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Vl||n===Gl)return s===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Hl)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return o.COMPRESSED_R11_EAC;if(n===Xl)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Cs)return o.COMPRESSED_RG11_EAC;if(n===Yl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===$l||n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===rc||n===oc||n===sc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ql)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return s===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===lc||n===cc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ac)return s===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===hc||n===Ps||n===fc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===uc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ps)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_o?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var uM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hM=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new cs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:uM,fragmentShader:hM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gh=class extends oi{constructor(t,e){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,b=typeof XRWebGLBinding<"u",g=new Vh,p={},x=e.getContextAttributes(),_=null,v=null,M=[],S=[],E=new Qt,y=null,R=null,w=new Qe;w.viewport=new Be;let A=new Qe;A.viewport=new Be;let I=[w,A],L=new Sl,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=M[q];return Y===void 0&&(Y=new fo,M[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=M[q];return Y===void 0&&(Y=new fo,M[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=M[q];return Y===void 0&&(Y=new fo,M[q]=Y),Y.getHandSpace()};function T(q){let Y=S.indexOf(q.inputSource);if(Y===-1)return;let X=M[Y];X!==void 0&&(X.update(q.inputSource,q.frame,c||s),X.dispatchEvent({type:q.type,data:q.inputSource}))}function C(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",O);for(let q=0;q<M.length;q++){let Y=S[q];Y!==null&&(S[q]=null,M[q].disconnect(Y))}P=null,B=null,g.reset();for(let q in p)delete p[q];if(t.setRenderTarget(_),d=null,f=null,u=null,r=null,v=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),R!==null){let q=R.camera;q.fov=R.fov,q.zoom=R.zoom,q.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",C),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,et=null,J=null;x.depth&&(J=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=x.stencil?Ki:ri,et=x.stencil?_o:$n);let rt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(rt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ye(f.textureWidth,f.textureHeight,{format:Nn,type:Cn,depthTexture:new ci(f.textureWidth,f.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let X={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,e,X),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ye(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(q){for(let Y=0;Y<q.removed.length;Y++){let X=q.removed[Y],et=S.indexOf(X);et>=0&&(S[et]=null,M[et].disconnect(X))}for(let Y=0;Y<q.added.length;Y++){let X=q.added[Y],et=S.indexOf(X);if(et===-1){for(let rt=0;rt<M.length;rt++)if(rt>=S.length){S.push(X),et=rt;break}else if(S[rt]===null){S[rt]=X,et=rt;break}if(et===-1)break}let J=M[et];J&&J.connect(X)}}let D=new $,N=new $;function z(q,Y,X){D.setFromMatrixPosition(Y.matrixWorld),N.setFromMatrixPosition(X.matrixWorld);let et=D.distanceTo(N),J=Y.projectionMatrix.elements,rt=X.projectionMatrix.elements,pt=J[14]/(J[10]-1),ct=J[14]/(J[10]+1),ot=(J[9]+1)/J[5],gt=(J[9]-1)/J[5],vt=(J[8]-1)/J[0],qt=(rt[8]+1)/rt[0],he=pt*vt,fe=pt*qt,jt=et/(-vt+qt),Me=jt*-vt;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Me),q.translateZ(jt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),J[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let Z=pt+jt,ke=ct+jt,me=he-Me,H=fe+(et-Me),F=ot*ct/ke*Z,nt=gt*ct/ke*Z;q.projectionMatrix.makePerspective(me,H,F,nt,Z,ke),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function G(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Y=q.near,X=q.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(X=g.depthFar)),L.near=A.near=w.near=Y,L.far=A.far=w.far=X,(P!==L.near||B!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,B=L.far),L.layers.mask=q.layers.mask|6,w.layers.mask=L.layers.mask&-5,A.layers.mask=L.layers.mask&-3;let et=q.parent,J=L.cameras;G(L,et);for(let rt=0;rt<J.length;rt++)G(J[rt],et);J.length===2?z(L,w,A):L.projectionMatrix.copy(w.projectionMatrix),R===null&&q.isPerspectiveCamera&&(R={camera:q,fov:q.fov,zoom:q.zoom}),V(q,L,et)};function V(q,Y,X){X===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(X.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=tl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let W=null;function Q(q,Y){if(h=Y.getViewerPose(c||s),m=Y,h!==null){let X=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let et=!1;X.length!==L.cameras.length&&(L.cameras.length=0,et=!0);for(let ct=0;ct<X.length;ct++){let ot=X[ct],gt=null;if(d!==null)gt=d.getViewport(ot);else{let qt=u.getViewSubImage(f,ot);gt=qt.viewport,ct===0&&(t.setRenderTargetTextures(v,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(v))}let vt=I[ct];vt===void 0&&(vt=new Qe,vt.layers.enable(ct),vt.viewport=new Be,I[ct]=vt),vt.matrix.fromArray(ot.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(ot.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(gt.x,gt.y,gt.width,gt.height),ct===0&&(L.matrix.copy(vt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),et===!0&&L.cameras.push(vt)}let J=r.enabledFeatures;if(J&&J.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let ct=u.getDepthInformation(X[0]);ct&&ct.isValid&&ct.texture&&g.init(ct,r.renderState)}if(J&&J.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let ct=0;ct<X.length;ct++){let ot=X[ct].camera;if(ot){let gt=p[ot];gt||(gt=new cs,p[ot]=gt);let vt=u.getCameraImage(ot);gt.sourceTexture=vt}}}}for(let X=0;X<M.length;X++){let et=S[X],J=M[X];et!==null&&J!==void 0&&J.update(et,Y,c||s)}W&&W(q,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let it=new r0;it.setAnimationLoop(Q),this.setAnimationLoop=function(q){W=q},this.dispose=function(){}}},fM=new Ae,u0=new ne;u0.set(-1,0,0,0,1,0,0,0,1);function dM(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,vh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,_,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?o(g,p):p.isMeshLambertMaterial?(o(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(g,p),u(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),b(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=t.get(p),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(fM.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(u0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pM(i,t,e,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let S=M.program;n.uniformBlockBinding(v,S)}function c(v,M){let S=r[v.id];S===void 0&&(g(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",x));let E=M.program;n.updateUBOMapping(v,E);let y=t.render.frame;o[v.id]!==y&&(f(v),o[v.id]=y)}function h(v){let M=u();v.__bindingPointIndex=M;let S=i.createBuffer(),E=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],S=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,R=S.length;y<R;y++){let w=S[y];if(Array.isArray(w))for(let A=0,I=w.length;A<I;A++)d(w[A],y,A,E);else d(w,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,S,E){if(b(v,M,S,E)===!0){let y=v.__offset,R=v.value;if(Array.isArray(R)){let w=0;for(let A=0;A<R.length;A++){let I=R[A],L=p(I);m(I,v.__data,w),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(w+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function m(v,M,S){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,S)}function b(v,M,S,E){let y=v.value,R=M+"_"+S;if(E[R]===void 0)return typeof y=="number"||typeof y=="boolean"?E[R]=y:ArrayBuffer.isView(y)?E[R]=y.slice():E[R]=y.clone(),!0;{let w=E[R];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return E[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function g(v){let M=v.uniforms,S=0,E=16;for(let R=0,w=M.length;R<w;R++){let A=Array.isArray(M[R])?M[R]:[M[R]];for(let I=0,L=A.length;I<L;I++){let P=A[I],B=Array.isArray(P.value)?P.value:[P.value];for(let T=0,C=B.length;T<C;T++){let O=B[T],D=p(O),N=S%E,z=N%D.boundary,G=N+z;S+=z,G!==0&&E-G<D.storage&&(S+=E-G),P.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=D.storage}}}let y=S%E;return y>0&&(S+=E-y),v.__size=S,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let S=s.indexOf(M.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function _(){for(let v in r)i.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:_}}var mM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function gM(){return hi===null&&(hi=new ol(mM,16,16,Ji,Kn),hi.name="DFG_LUT",hi.minFilter=Xe,hi.magFilter=Xe,hi.wrapS=Tn,hi.wrapT=Tn,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Tr=class{constructor(t={}){let{canvas:e=Sp(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Cn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;let b=d,g=new Set([Nl,Ol,Dl]),p=new Set([Cn,$n,yo,_o,Ll,Fl]),x=new Uint32Array(4),_=new Int32Array(4),v=new $,M=null,S=null,E=[],y=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,A=!1,I=null,L=null,P=null,B=null;this._outputColorSpace=Ne;let T=0,C=0,O=null,D=-1,N=null,z=new Be,G=new Be,V=null,W=new tt(0),Q=0,it=e.width,q=e.height,Y=1,X=null,et=null,J=new Be(0,0,it,q),rt=new Be(0,0,it,q),pt=!1,ct=new as,ot=!1,gt=!1,vt=new Ae,qt=new $,he=new Be,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function Me(){return O===null?Y:1}let Z=n;function ke(k,K){return e.getContext(k,K)}let me,H,F,nt,lt,ht,yt,_t,ft,mt,Mt,Gt,At,wt,Ht,$t,ae,j,St,dt,Tt,It,xt;try{let k={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",zn,!1),Z===null){let K="webgl2";if(Z=ke(K,k),Z===null)throw ke(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(k){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),Kt("WebGLRenderer: "+k.message),k}function Wt(){me=new wy(Z),me.init(),Tt=new cM(Z,me),H=new dy(Z,me,t,Tt),F=new aM(Z,me),H.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),L=Z.createFramebuffer(),P=Z.createFramebuffer(),B=Z.createFramebuffer(),nt=new Ay(Z),lt=new q_,ht=new lM(Z,me,F,lt,H,Tt,nt),yt=new My(w),_t=new Rx(Z),It=new hy(Z,_t),ft=new Sy(Z,_t,nt,It),mt=new Ry(Z,ft,_t,It,nt),j=new Ey(Z,H,ht),Ht=new py(lt),Mt=new Y_(w,yt,me,H,It,Ht),Gt=new dM(w,lt),At=new Z_,wt=new eM(me),ae=new uy(w,yt,F,mt,m,l),$t=new sM(w,mt,H),xt=new pM(Z,nt,H,F),St=new fy(Z,me,nt),dt=new Ty(Z,me,nt),nt.programs=Mt.programs,w.capabilities=H,w.extensions=me,w.properties=lt,w.renderLists=At,w.shadowMap=$t,w.state=F,w.info=nt}b!==Cn&&(R=new Py(b,e.width,e.height,a,r,o));let zt=new Gh(w,Z);this.xr=zt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let k=me.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=me.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(k){k!==void 0&&(Y=k,this.setSize(it,q,!1))},this.getSize=function(k){return k.set(it,q)},this.setSize=function(k,K,ut=!0){if(zt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}it=k,q=K,e.width=Math.floor(k*Y),e.height=Math.floor(K*Y),ut===!0&&(e.style.width=k+"px",e.style.height=K+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,k,K)},this.getDrawingBufferSize=function(k){return k.set(it*Y,q*Y).floor()},this.setDrawingBufferSize=function(k,K,ut){it=k,q=K,Y=ut,e.width=Math.floor(k*ut),e.height=Math.floor(K*ut),this.setViewport(0,0,k,K)},this.setEffects=function(k){if(b===Cn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let K=0;K<k.length;K++)if(k[K].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(z)},this.getViewport=function(k){return k.copy(J)},this.setViewport=function(k,K,ut,st){k.isVector4?J.set(k.x,k.y,k.z,k.w):J.set(k,K,ut,st),F.viewport(z.copy(J).multiplyScalar(Y).round())},this.getScissor=function(k){return k.copy(rt)},this.setScissor=function(k,K,ut,st){k.isVector4?rt.set(k.x,k.y,k.z,k.w):rt.set(k,K,ut,st),F.scissor(G.copy(rt).multiplyScalar(Y).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(k){F.setScissorTest(pt=k)},this.setOpaqueSort=function(k){X=k},this.setTransparentSort=function(k){et=k},this.getClearColor=function(k){return k.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(k=!0,K=!0,ut=!0){let st=0;if(k){let at=!1;if(O!==null){let Pt=O.texture.format;at=g.has(Pt)}if(at){let Pt=O.texture.type,Dt=p.has(Pt),Ct=ae.getClearColor(),Bt=ae.getClearAlpha(),Vt=Ct.r,le=Ct.g,ue=Ct.b;Dt?(x[0]=Vt,x[1]=le,x[2]=ue,x[3]=Bt,Z.clearBufferuiv(Z.COLOR,0,x)):(_[0]=Vt,_[1]=le,_[2]=ue,_[3]=Bt,Z.clearBufferiv(Z.COLOR,0,_))}else st|=Z.COLOR_BUFFER_BIT}K&&(st|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ut&&(st|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&Z.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),I=k},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),ae.dispose(),At.dispose(),wt.dispose(),lt.dispose(),yt.dispose(),mt.dispose(),It.dispose(),xt.dispose(),Mt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",sd),zt.removeEventListener("sessionend",ad),ur.stop()};function Ce(k){k.preventDefault(),ns("WebGLRenderer: Context Lost."),A=!0}function ve(){ns("WebGLRenderer: Context Restored."),A=!1;let k=nt.autoReset,K=$t.enabled,ut=$t.autoUpdate,st=$t.needsUpdate,at=$t.type;Wt(),nt.autoReset=k,$t.enabled=K,$t.autoUpdate=ut,$t.needsUpdate=st,$t.type=at}function zn(k){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function ti(k){let K=k.target;K.removeEventListener("dispose",ti),Mb(K)}function Mb(k){wb(k),lt.remove(k)}function wb(k){let K=lt.get(k).programs;K!==void 0&&(K.forEach(function(ut){Mt.releaseProgram(ut)}),k.isShaderMaterial&&Mt.releaseShaderCache(k))}this.renderBufferDirect=function(k,K,ut,st,at,Pt){K===null&&(K=fe);let Dt=at.isMesh&&at.matrixWorld.determinantAffine()<0,Ct=Ab(k,K,ut,st,at);F.setMaterial(st,Dt);let Bt=ut.index,Vt=1;if(st.wireframe===!0){if(Bt=ft.getWireframeAttribute(ut),Bt===void 0)return;Vt=2}let le=ut.drawRange,ue=ut.attributes.position,kt=le.start*Vt,ye=(le.start+le.count)*Vt;Pt!==null&&(kt=Math.max(kt,Pt.start*Vt),ye=Math.min(ye,(Pt.start+Pt.count)*Vt)),Bt!==null?(kt=Math.max(kt,0),ye=Math.min(ye,Bt.count)):ue!=null&&(kt=Math.max(kt,0),ye=Math.min(ye,ue.count));let He=ye-kt;if(He<0||He===1/0)return;It.setup(at,st,Ct,ut,Bt);let Le,Ee=St;if(Bt!==null&&(Le=_t.get(Bt),Ee=dt,Ee.setIndex(Le)),at.isMesh)st.wireframe===!0?(F.setLineWidth(st.wireframeLinewidth*Me()),Ee.setMode(Z.LINES)):Ee.setMode(Z.TRIANGLES);else if(at.isLine){let un=st.linewidth;un===void 0&&(un=1),F.setLineWidth(un*Me()),at.isLineSegments?Ee.setMode(Z.LINES):at.isLineLoop?Ee.setMode(Z.LINE_LOOP):Ee.setMode(Z.LINE_STRIP)}else at.isPoints?Ee.setMode(Z.POINTS):at.isSprite&&Ee.setMode(Z.TRIANGLES);if(at.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Ee.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{let un=at._multiDrawStarts,Ft=at._multiDrawCounts,bn=at._multiDrawCount,be=Bt?_t.get(Bt).bytesPerElement:1,Ln=lt.get(st).currentProgram.getUniforms();for(let ei=0;ei<bn;ei++)Ln.setValue(Z,"_gl_DrawID",ei),Ee.render(un[ei]/be,Ft[ei])}else if(at.isInstancedMesh)Ee.renderInstances(kt,He,at.count);else if(ut.isInstancedBufferGeometry){let un=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Ft=Math.min(ut.instanceCount,un);Ee.renderInstances(kt,He,Ft)}else Ee.render(kt,He)};function od(k,K,ut,st){I!==null&&k.isNodeMaterial&&I.setObject(st,k),ot===!0&&Ht.setState(k,ut,!1),k.transparent===!0&&k.side===re&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,da(k,K,st),k.side=ui,k.needsUpdate=!0,da(k,K,st),k.side=re):da(k,K,st)}this.compile=function(k,K,ut=null){ut===null&&(ut=k),I!==null&&I.renderStart(k,K,ut),S=wt.get(ut),S.init(K),y.push(S),ut.traverseVisible(function(at){at.isLight&&at.layers.test(K.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),k!==ut&&k.traverseVisible(function(at){at.isLight&&at.layers.test(K.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),S.setupLights(),I!==null&&I.updateLights(S.state.lightsArray),gt=this.localClippingEnabled,ot=Ht.init(this.clippingPlanes,gt),ot===!0&&Ht.setGlobalState(this.clippingPlanes,K),I!==null&&$t.render(S.state.shadowsArray,ut,K);let st=new Set;return k.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;let Pt=at.material;if(Pt)if(Array.isArray(Pt))for(let Dt=0;Dt<Pt.length;Dt++){let Ct=Pt[Dt];od(Ct,ut,K,at),st.add(Ct)}else od(Pt,ut,K,at),st.add(Pt)}),S=y.pop(),I!==null&&I.renderEnd(),st},this.compileAsync=function(k,K,ut=null){let st=this.compile(k,K,ut);return new Promise(at=>{function Pt(){if(st.forEach(function(Dt){let Bt=lt.get(Dt).currentProgram;(Bt===void 0||Bt.isReady())&&st.delete(Dt)}),st.size===0){at(k);return}setTimeout(Pt,10)}me.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let du=null;function Sb(k){du&&du(k)}function sd(){ur.stop()}function ad(){ur.start()}let ur=new r0;ur.setAnimationLoop(Sb),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(k){du=k,zt.setAnimationLoop(k),k===null?ur.stop():ur.start()},zt.addEventListener("sessionstart",sd),zt.addEventListener("sessionend",ad),this.render=function(k,K){if(K!==void 0&&K.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;I!==null&&I.renderStart(k,K);let ut=zt.enabled===!0&&zt.isPresenting===!0,st=R!==null&&(O===null||ut)&&R.begin(w,O);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(K),K=zt.getCamera()),k.isScene===!0&&k.onBeforeRender(w,k,K,O),S=wt.get(k,y.length),S.init(K),S.state.textureUnits=ht.getTextureUnits(),y.push(S),vt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ct.setFromProjectionMatrix(vt,Xn,K.reversedDepth),gt=this.localClippingEnabled,ot=Ht.init(this.clippingPlanes,gt),M=At.get(k,E.length),M.init(),E.push(M),zt.enabled===!0&&zt.isPresenting===!0){let Dt=w.xr.getDepthSensingMesh();Dt!==null&&pu(Dt,K,-1/0,w.sortObjects)}pu(k,K,0,w.sortObjects),M.finish(),I!==null&&I.updateLights(S.state.lightsArray),w.sortObjects===!0&&M.sort(X,et),jt=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,jt&&ae.addToRenderList(M,k),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ht.beginShadows();let at=S.state.shadowsArray;if($t.render(at,k,K),ot===!0&&Ht.endShadows(),(st&&R.hasRenderPass())===!1){let Dt=M.opaque,Ct=M.transmissive;if(S.setupLights(),K.isArrayCamera){let Bt=K.cameras;if(Ct.length>0)for(let Vt=0,le=Bt.length;Vt<le;Vt++){let ue=Bt[Vt];cd(Dt,Ct,k,ue)}jt&&ae.render(k);for(let Vt=0,le=Bt.length;Vt<le;Vt++){let ue=Bt[Vt];ld(M,k,ue,ue.viewport)}}else Ct.length>0&&cd(Dt,Ct,k,K),jt&&ae.render(k),ld(M,k,K)}O!==null&&C===0&&(ht.updateMultisampleRenderTarget(O),ht.updateRenderTargetMipmap(O)),st&&R.end(w),k.isScene===!0&&k.onAfterRender(w,k,K),It.resetDefaultState(),D=-1,N=null,y.pop(),y.length>0?(S=y[y.length-1],ht.setTextureUnits(S.state.textureUnits),ot===!0&&Ht.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,I!==null&&I.renderEnd()};function pu(k,K,ut,st){if(k.visible===!1)return;if(k.layers.test(K.layers)){if(k.isGroup)ut=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(K);else if(k.isLightProbeGrid)S.pushLightProbeGrid(k);else if(k.isLight)S.pushLight(k),k.castShadow&&S.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||k.intersectsFrustum(ct)){st&&he.setFromMatrixPosition(k.matrixWorld).applyMatrix4(vt);let Dt=mt.update(k),Ct=k.material;Ct.visible&&M.push(k,Dt,Ct,ut,he.z,null,K)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||k.intersectsFrustum(ct))){let Dt=mt.update(k),Ct=k.material;if(st&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),he.copy(k.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),he.copy(Dt.boundingSphere.center)),he.applyMatrix4(k.matrixWorld).applyMatrix4(vt)),Array.isArray(Ct)){let Bt=Dt.groups;for(let Vt=0,le=Bt.length;Vt<le;Vt++){let ue=Bt[Vt],kt=Ct[ue.materialIndex];kt&&kt.visible&&M.push(k,Dt,kt,ut,he.z,ue,K)}}else Ct.visible&&M.push(k,Dt,Ct,ut,he.z,null,K)}}let Pt=k.children;for(let Dt=0,Ct=Pt.length;Dt<Ct;Dt++)pu(Pt[Dt],K,ut,st)}function ld(k,K,ut,st){let{opaque:at,transmissive:Pt,transparent:Dt}=k;S.setupLightsView(ut),ot===!0&&Ht.setGlobalState(w.clippingPlanes,ut),st&&F.viewport(z.copy(st)),at.length>0&&fa(at,K,ut),Pt.length>0&&fa(Pt,K,ut),Dt.length>0&&fa(Dt,K,ut),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function cd(k,K,ut,st){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[st.id]===void 0){let kt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[st.id]=new Ye(1,1,{generateMipmaps:!0,type:kt?Kn:Cn,minFilter:Zi,samples:Math.max(4,H.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let Pt=S.state.transmissionRenderTarget[st.id],Dt=st.viewport||z;Pt.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);let Ct=w.getRenderTarget(),Bt=w.getActiveCubeFace(),Vt=w.getActiveMipmapLevel();w.setRenderTarget(Pt),w.getClearColor(W),Q=w.getClearAlpha(),Q<1&&w.setClearColor(16777215,.5),w.clear(),jt&&ae.render(ut);let le=w.toneMapping;w.toneMapping=qn;let ue=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),S.setupLightsView(st),ot===!0&&Ht.setGlobalState(w.clippingPlanes,st),fa(k,ut,st),ht.updateMultisampleRenderTarget(Pt),ht.updateRenderTargetMipmap(Pt),me.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ye=0,He=K.length;ye<He;ye++){let Le=K[ye],{object:Ee,geometry:un,material:Ft,group:bn}=Le;if(Ft.side===re&&Ee.layers.test(st.layers)){let be=Ft.side;Ft.side=an,Ft.needsUpdate=!0,ud(Ee,ut,st,un,Ft,bn),Ft.side=be,Ft.needsUpdate=!0,kt=!0}}kt===!0&&(ht.updateMultisampleRenderTarget(Pt),ht.updateRenderTargetMipmap(Pt))}w.setRenderTarget(Ct,Bt,Vt),w.setClearColor(W,Q),ue!==void 0&&(st.viewport=ue),w.toneMapping=le}function fa(k,K,ut){let st=K.isScene===!0?K.overrideMaterial:null;for(let at=0,Pt=k.length;at<Pt;at++){let Dt=k[at],{object:Ct,geometry:Bt,group:Vt}=Dt,le=Dt.material;le.allowOverride===!0&&st!==null&&(le=st),Ct.layers.test(ut.layers)&&ud(Ct,K,ut,Bt,le,Vt)}}function ud(k,K,ut,st,at,Pt){I!==null&&at.isNodeMaterial&&I.setObject(k,at),k.onBeforeRender(w,K,ut,st,at,Pt),k.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),at.onBeforeRender(w,K,ut,st,k,Pt),at.transparent===!0&&at.side===re&&at.forceSinglePass===!1?(at.side=an,at.needsUpdate=!0,w.renderBufferDirect(ut,K,st,at,k,Pt),at.side=ui,at.needsUpdate=!0,w.renderBufferDirect(ut,K,st,at,k,Pt),at.side=re):w.renderBufferDirect(ut,K,st,at,k,Pt),k.onAfterRender(w,K,ut,st,at,Pt)}function da(k,K,ut){K.isScene!==!0&&(K=fe);let st=lt.get(k),at=S.state.lights,Pt=S.state.shadowsArray,Dt=at.state.version,Ct=Mt.getParameters(k,at.state,Pt,K,ut,S.state.lightProbeGridArray),Bt=Mt.getProgramCacheKey(Ct),Vt=st.programs;st.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?K.environment:null,st.fog=K.fog;let le=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;st.envMap=yt.get(k.envMap||st.environment,le),st.envMapRotation=st.environment!==null&&k.envMap===null?K.environmentRotation:k.envMapRotation,Vt===void 0&&(k.addEventListener("dispose",ti),Vt=new Map,st.programs=Vt);let ue=Vt.get(Bt);if(ue!==void 0){if(st.currentProgram===ue&&st.lightsStateVersion===Dt)return fd(k,Ct),ue}else Ct.uniforms=Mt.getUniforms(k),I!==null&&k.isNodeMaterial&&I.build(k,ut,Ct),k.onBeforeCompile(Ct,w),ue=Mt.acquireProgram(Ct,Bt),Vt.set(Bt,ue),st.uniforms=Ct.uniforms;let kt=st.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),fd(k,Ct),st.needsLights=Rb(k),st.lightsStateVersion=Dt,st.needsLights&&(kt.ambientLightColor.value=at.state.ambient,kt.lightProbe.value=at.state.probe,kt.sunLights.value=at.state.sun,kt.sunLightShadows.value=at.state.sunShadow,kt.directionalLights.value=at.state.directional,kt.directionalLightShadows.value=at.state.directionalShadow,kt.spotLights.value=at.state.spot,kt.spotLightShadows.value=at.state.spotShadow,kt.rectAreaLights.value=at.state.rectArea,kt.ltc_1.value=at.state.rectAreaLTC1,kt.ltc_2.value=at.state.rectAreaLTC2,kt.pointLights.value=at.state.point,kt.pointLightShadows.value=at.state.pointShadow,kt.hemisphereLights.value=at.state.hemi,kt.sunShadowMatrix.value=at.state.sunShadowMatrix,kt.sunShadowCascade.value=at.state.sunShadowCascade,kt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,kt.spotLightMatrix.value=at.state.spotLightMatrix,kt.spotLightMap.value=at.state.spotLightMap,kt.pointShadowMatrix.value=at.state.pointShadowMatrix),st.lightProbeGrid=S.state.lightProbeGridArray.length>0,st.currentProgram=ue,st.uniformsList=null,ue}function hd(k){if(k.uniformsList===null){let K=k.currentProgram.getUniforms();k.uniformsList=So.seqWithValue(K.seq,k.uniforms)}return k.uniformsList}function fd(k,K){let ut=lt.get(k);ut.outputColorSpace=K.outputColorSpace,ut.batching=K.batching,ut.batchingColor=K.batchingColor,ut.instancing=K.instancing,ut.instancingColor=K.instancingColor,ut.instancingMorph=K.instancingMorph,ut.skinning=K.skinning,ut.morphTargets=K.morphTargets,ut.morphNormals=K.morphNormals,ut.morphColors=K.morphColors,ut.morphTargetsCount=K.morphTargetsCount,ut.numClippingPlanes=K.numClippingPlanes,ut.numIntersection=K.numClipIntersection,ut.vertexAlphas=K.vertexAlphas,ut.vertexTangents=K.vertexTangents,ut.toneMapping=K.toneMapping}function Tb(k,K){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;v.setFromMatrixPosition(K.matrixWorld);for(let ut=0,st=k.length;ut<st;ut++){let at=k[ut];if(at.texture!==null&&at.boundingBox.containsPoint(v))return at}return null}function Ab(k,K,ut,st,at){K.isScene!==!0&&(K=fe),ht.resetTextureUnits();let Pt=K.fog,Dt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?K.environment:null,Ct=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:de.workingColorSpace,Bt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Vt=yt.get(st.envMap||Dt,Bt),le=st.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ue=!!ut.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!ut.morphAttributes.position,ye=!!ut.morphAttributes.normal,He=!!ut.morphAttributes.color,Le=qn;st.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Le=w.toneMapping);let Ee=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,un=Ee!==void 0?Ee.length:0,Ft=lt.get(st),bn=S.state.lights;if(ot===!0&&(gt===!0||k!==N)){let Pe=k===N&&st.id===D;Ht.setState(st,k,Pe)}let be=!1;st.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==bn.state.version||Ft.outputColorSpace!==Ct||at.isBatchedMesh&&Ft.batching===!1||!at.isBatchedMesh&&Ft.batching===!0||at.isBatchedMesh&&Ft.batchingColor===!0&&at._colorsTexture===null||at.isBatchedMesh&&Ft.batchingColor===!1&&at._colorsTexture!==null||at.isInstancedMesh&&Ft.instancing===!1||!at.isInstancedMesh&&Ft.instancing===!0||at.isSkinnedMesh&&Ft.skinning===!1||!at.isSkinnedMesh&&Ft.skinning===!0||at.isInstancedMesh&&Ft.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Ft.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Ft.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Ft.instancingMorph===!1&&at.morphTexture!==null||Ft.envMap!==Vt||st.fog===!0&&Ft.fog!==Pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Ht.numPlanes||Ft.numIntersection!==Ht.numIntersection)||Ft.vertexAlphas!==le||Ft.vertexTangents!==ue||Ft.morphTargets!==kt||Ft.morphNormals!==ye||Ft.morphColors!==He||Ft.toneMapping!==Le||Ft.morphTargetsCount!==un||!!Ft.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Ft.__version=st.version);let Ln=Ft.currentProgram;be===!0&&(Ln=da(st,K,at),I&&st.isNodeMaterial&&I.onUpdateProgram(st,Ln,Ft));let ei=!1,Di=!1,zr=!1,Se=Ln.getUniforms(),Ve=Ft.uniforms;if(F.useProgram(Ln.program)&&(ei=!0,Di=!0,zr=!0),st.id!==D&&(D=st.id,Di=!0),Ft.needsLights){let Pe=Tb(S.state.lightProbeGridArray,at);Ft.lightProbeGrid!==Pe&&(Ft.lightProbeGrid=Pe,Di=!0)}if(ei||N!==k){F.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),Se.setValue(Z,"projectionMatrix",k.projectionMatrix),Se.setValue(Z,"viewMatrix",k.matrixWorldInverse);let Ni=Se.map.cameraPosition;Ni!==void 0&&Ni.setValue(Z,qt.setFromMatrixPosition(k.matrixWorld)),H.logarithmicDepthBuffer&&Se.setValue(Z,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Se.setValue(Z,"isOrthographic",k.isOrthographicCamera===!0),N!==k&&(N=k,Di=!0,zr=!0)}if(Ft.needsLights&&(bn.state.sunShadowMap.length>0&&Se.setValue(Z,"sunShadowMap",bn.state.sunShadowMap,ht),bn.state.directionalShadowMap.length>0&&Se.setValue(Z,"directionalShadowMap",bn.state.directionalShadowMap,ht),bn.state.spotShadowMap.length>0&&Se.setValue(Z,"spotShadowMap",bn.state.spotShadowMap,ht),bn.state.pointShadowMap.length>0&&Se.setValue(Z,"pointShadowMap",bn.state.pointShadowMap,ht)),at.isSkinnedMesh){Se.setOptional(Z,at,"bindMatrix"),Se.setOptional(Z,at,"bindMatrixInverse");let Pe=at.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Se.setValue(Z,"boneTexture",Pe.boneTexture,ht))}at.isBatchedMesh&&(Se.setOptional(Z,at,"batchingTexture"),Se.setValue(Z,"batchingTexture",at._matricesTexture,ht),Se.setOptional(Z,at,"batchingIdTexture"),Se.setValue(Z,"batchingIdTexture",at._indirectTexture,ht),Se.setOptional(Z,at,"batchingColorTexture"),at._colorsTexture!==null&&Se.setValue(Z,"batchingColorTexture",at._colorsTexture,ht));let Oi=ut.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&j.update(at,ut,Ln),(Di||Ft.receiveShadow!==at.receiveShadow)&&(Ft.receiveShadow=at.receiveShadow,Se.setValue(Z,"receiveShadow",at.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&K.environment!==null&&(Ve.envMapIntensity.value=K.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=gM()),Di){if(Se.setValue(Z,"toneMappingExposure",w.toneMappingExposure),Ft.needsLights&&Eb(Ve,zr),Pt&&st.fog===!0&&Gt.refreshFogUniforms(Ve,Pt),Gt.refreshMaterialUniforms(Ve,st,Y,q,S.state.transmissionRenderTarget[k.id]),Ft.needsLights&&Ft.lightProbeGrid){let Pe=Ft.lightProbeGrid;Ve.probesSH.value=Pe.texture,Ve.probesMin.value.copy(Pe.boundingBox.min),Ve.probesMax.value.copy(Pe.boundingBox.max),Ve.probesResolution.value.copy(Pe.resolution)}So.upload(Z,hd(Ft),Ve,ht)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(So.upload(Z,hd(Ft),Ve,ht),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Se.setValue(Z,"center",at.center),Se.setValue(Z,"modelViewMatrix",at.modelViewMatrix),Se.setValue(Z,"normalMatrix",at.normalMatrix),Se.setValue(Z,"modelMatrix",at.matrixWorld),st.uniformsGroups!==void 0){let Pe=st.uniformsGroups;for(let Ni=0,Vr=Pe.length;Ni<Vr;Ni++){let pd=Pe[Ni];xt.update(pd,Ln),xt.bind(pd,Ln)}}return Ln}function Eb(k,K){k.ambientLightColor.needsUpdate=K,k.lightProbe.needsUpdate=K,k.sunLights.needsUpdate=K,k.sunLightShadows.needsUpdate=K,k.directionalLights.needsUpdate=K,k.directionalLightShadows.needsUpdate=K,k.pointLights.needsUpdate=K,k.pointLightShadows.needsUpdate=K,k.spotLights.needsUpdate=K,k.spotLightShadows.needsUpdate=K,k.rectAreaLights.needsUpdate=K,k.hemisphereLights.needsUpdate=K}function Rb(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(k,K,ut){let st=lt.get(k);st.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),lt.get(k.texture).__webglTexture=K,lt.get(k.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ut,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,K){let ut=lt.get(k);ut.__webglFramebuffer=K,ut.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(k,K=0,ut=0){O=k,T=K,C=ut;let st=null,at=!1,Pt=!1;if(k){let Ct=lt.get(k);if(Ct.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(Z.FRAMEBUFFER,Ct.__webglFramebuffer),z.copy(k.viewport),G.copy(k.scissor),V=k.scissorTest,F.viewport(z),F.scissor(G),F.setScissorTest(V),D=-1;return}else if(Ct.__webglFramebuffer===void 0)ht.setupRenderTarget(k);else if(Ct.__hasExternalTextures)ht.rebindTextures(k,lt.get(k.texture).__webglTexture,lt.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let le=k.depthTexture;if(Ct.__boundDepthTexture!==le){if(le!==null&&lt.has(le)&&(k.width!==le.image.width||k.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(k)}}let Bt=k.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Pt=!0);let Vt=lt.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(Vt[K])?st=Vt[K][ut]:st=Vt[K],at=!0):k.samples>0&&ht.useMultisampledRTT(k)===!1?st=lt.get(k).__webglMultisampledFramebuffer:Array.isArray(Vt)?st=Vt[ut]:st=Vt,z.copy(k.viewport),G.copy(k.scissor),V=k.scissorTest}else z.copy(J).multiplyScalar(Y).floor(),G.copy(rt).multiplyScalar(Y).floor(),V=pt;if(ut!==0&&(st=L),F.bindFramebuffer(Z.FRAMEBUFFER,st)&&F.drawBuffers(k,st),F.viewport(z),F.scissor(G),F.setScissorTest(V),at){let Ct=lt.get(k.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ct.__webglTexture,ut)}else if(Pt){let Ct=K;for(let Bt=0;Bt<k.textures.length;Bt++){let Vt=lt.get(k.textures[Bt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Bt,Vt.__webglTexture,ut,Ct)}}else if(k!==null&&ut!==0){let Ct=lt.get(k.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ct.__webglTexture,ut)}D=-1};function dd(k){let K=lt.get(k);return(K.__readFormat!==k.format||K.__readType!==k.type)&&(K.__readFormat=k.format,K.__readType=k.type,K.__formatReadable=H.textureFormatReadable(k.format),K.__typeReadable=H.textureTypeReadable(k.type)),K}this.readRenderTargetPixels=function(k,K,ut,st,at,Pt,Dt,Ct=0){if(!(k&&k.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=lt.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){F.bindFramebuffer(Z.FRAMEBUFFER,Bt);try{let Vt=k.textures[Ct],le=Vt.format,ue=Vt.type;k.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ct);let kt=dd(Vt);if(kt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=k.width-st&&ut>=0&&ut<=k.height-at&&Z.readPixels(K,ut,st,at,Tt.convert(le),Tt.convert(ue),Pt)}finally{let Vt=O!==null?lt.get(O).__webglFramebuffer:null;F.bindFramebuffer(Z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(k,K,ut,st,at,Pt,Dt,Ct=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=lt.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(K>=0&&K<=k.width-st&&ut>=0&&ut<=k.height-at){F.bindFramebuffer(Z.FRAMEBUFFER,Bt);let Vt=k.textures[Ct],le=Vt.format,ue=Vt.type;k.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ct);let kt=dd(Vt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ye),Z.bufferData(Z.PIXEL_PACK_BUFFER,Pt.byteLength,Z.STREAM_READ),Z.readPixels(K,ut,st,at,Tt.convert(le),Tt.convert(ue),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let He=O!==null?lt.get(O).__webglFramebuffer:null;F.bindFramebuffer(Z.FRAMEBUFFER,He);let Le=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Ap(Z,Le,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ye),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Pt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(ye),Z.deleteSync(Le),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,K=null,ut=0){let st=Math.pow(2,-ut),at=Math.floor(k.image.width*st),Pt=Math.floor(k.image.height*st),Dt=K!==null?K.x:0,Ct=K!==null?K.y:0;ht.setTexture2D(k,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ut,0,0,Dt,Ct,at,Pt),F.unbindTexture()},this.copyTextureToTexture=function(k,K,ut=null,st=null,at=0,Pt=0){let Dt,Ct,Bt,Vt,le,ue,kt,ye,He,Le=k.isCompressedTexture?k.mipmaps[Pt]:k.image;if(ut!==null)Dt=ut.max.x-ut.min.x,Ct=ut.max.y-ut.min.y,Bt=ut.isBox3?ut.max.z-ut.min.z:1,Vt=ut.min.x,le=ut.min.y,ue=ut.isBox3?ut.min.z:0;else{let Ve=Math.pow(2,-at);Dt=Math.floor(Le.width*Ve),Ct=Math.floor(Le.height*Ve),k.isDataArrayTexture?Bt=Le.depth:k.isData3DTexture?Bt=Math.floor(Le.depth*Ve):Bt=1,Vt=0,le=0,ue=0}st!==null?(kt=st.x,ye=st.y,He=st.z):(kt=0,ye=0,He=0);let Ee=Tt.convert(K.format),un=Tt.convert(K.type),Ft;K.isData3DTexture?(ht.setTexture3D(K,0),Ft=Z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ht.setTexture2DArray(K,0),Ft=Z.TEXTURE_2D_ARRAY):(ht.setTexture2D(K,0),Ft=Z.TEXTURE_2D),F.activeTexture(Z.TEXTURE0),F.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment);let bn=F.getParameter(Z.UNPACK_ROW_LENGTH),be=F.getParameter(Z.UNPACK_IMAGE_HEIGHT),Ln=F.getParameter(Z.UNPACK_SKIP_PIXELS),ei=F.getParameter(Z.UNPACK_SKIP_ROWS),Di=F.getParameter(Z.UNPACK_SKIP_IMAGES);F.pixelStorei(Z.UNPACK_ROW_LENGTH,Le.width),F.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Le.height),F.pixelStorei(Z.UNPACK_SKIP_PIXELS,Vt),F.pixelStorei(Z.UNPACK_SKIP_ROWS,le),F.pixelStorei(Z.UNPACK_SKIP_IMAGES,ue);let zr=k.isDataArrayTexture||k.isData3DTexture,Se=K.isDataArrayTexture||K.isData3DTexture;if(k.isDepthTexture){let Ve=lt.get(k),Oi=lt.get(K),Pe=lt.get(Ve.__renderTarget),Ni=lt.get(Oi.__renderTarget);F.bindFramebuffer(Z.READ_FRAMEBUFFER,Pe.__webglFramebuffer),F.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Vr=0;Vr<Bt;Vr++)zr&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,lt.get(k).__webglTexture,at,ue+Vr),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,lt.get(K).__webglTexture,Pt,He+Vr)),Z.blitFramebuffer(Vt,le,Dt,Ct,kt,ye,Dt,Ct,Z.DEPTH_BUFFER_BIT,Z.NEAREST);F.bindFramebuffer(Z.READ_FRAMEBUFFER,null),F.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(at!==0||k.isRenderTargetTexture||lt.has(k)){let Ve=lt.get(k),Oi=lt.get(K);F.bindFramebuffer(Z.READ_FRAMEBUFFER,P),F.bindFramebuffer(Z.DRAW_FRAMEBUFFER,B);for(let Pe=0;Pe<Bt;Pe++)zr?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ve.__webglTexture,at,ue+Pe):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ve.__webglTexture,at),Se?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Oi.__webglTexture,Pt,He+Pe):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Oi.__webglTexture,Pt),at!==0?Z.blitFramebuffer(Vt,le,Dt,Ct,kt,ye,Dt,Ct,Z.COLOR_BUFFER_BIT,Z.NEAREST):Se?Z.copyTexSubImage3D(Ft,Pt,kt,ye,He+Pe,Vt,le,Dt,Ct):Z.copyTexSubImage2D(Ft,Pt,kt,ye,Vt,le,Dt,Ct);F.bindFramebuffer(Z.READ_FRAMEBUFFER,null),F.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Se?k.isDataTexture||k.isData3DTexture?Z.texSubImage3D(Ft,Pt,kt,ye,He,Dt,Ct,Bt,Ee,un,Le.data):K.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ft,Pt,kt,ye,He,Dt,Ct,Bt,Ee,Le.data):Z.texSubImage3D(Ft,Pt,kt,ye,He,Dt,Ct,Bt,Ee,un,Le):k.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Pt,kt,ye,Dt,Ct,Ee,un,Le.data):k.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Pt,kt,ye,Le.width,Le.height,Ee,Le.data):Z.texSubImage2D(Z.TEXTURE_2D,Pt,kt,ye,Dt,Ct,Ee,un,Le);F.pixelStorei(Z.UNPACK_ROW_LENGTH,bn),F.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,be),F.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ln),F.pixelStorei(Z.UNPACK_SKIP_ROWS,ei),F.pixelStorei(Z.UNPACK_SKIP_IMAGES,Di),Pt===0&&K.generateMipmaps&&Z.generateMipmap(Ft),F.unbindTexture()},this.initRenderTarget=function(k){lt.get(k).__webglFramebuffer===void 0&&ht.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?ht.setTextureCube(k,0):k.isData3DTexture?ht.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?ht.setTexture2DArray(k,0):ht.setTexture2D(k,0),F.unbindTexture()},this.resetState=function(){T=0,C=0,O=null,F.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};function h0(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function f0(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let o=t[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function d0(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}function p0(i=new Date){let t=i.getFullYear(),e=i.getMonth();if(e===0&&i.getDate()<=6)return 4;if(e<10)return 0;let n=new Date(t,e,i.getDate()).getTime(),r=new Date(t,11,24),o=new Date(t,11,24-r.getDay()).getTime(),s=168*3600*1e3,a=0;for(let l=1;l<=4;l++)n>=o-(4-l)*s-3600*1e3&&(a=l);return a}var bM=[],Hh=new Map,xM=0;function Ds(i){bM=i,Hh=new Map(i.flatMap(t=>t.items.map(e=>[vM(t.id,e.id),e]))),xM++}function vM(i,t){return`pack:${i}:${t}`}function Wh(i){return i.startsWith("pack:")}function _c(i){return Wh(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Xh(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function m0(i){return i==="robot_vacuum"||Wh(i)&&i.endsWith(":robot_vacuum")}function Os(i){return i.z>.05}function g0(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Os(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var yM={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function b0(i){return xe(i)?.parts.find(t=>t.screen)}function xe(i){if(!Wh(i))return;let t=Hh.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=yM[e];return r?Hh.get(`pack:${r}:${n.join(":")}`):void 0}function ln(i,t){let e=xe(t.type);if(t.mount_y!=null)return t.mount_y;let n=_0(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return wc;if(x0.has(t.type))return Math.max(0,i.height-v0(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return Ao(i,t)+y0(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?Ao(i,t):Ar(t)||Ao(i,t)}}function Ao(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>Yt([t.x,t.z],n.points))?0:Mc(i,t.x,t.z)}function Sc(i){let t=i.attached;return t===!0?"above":t==="above"||t==="below"?t:null}function w0(i){let t=[],e=-1;return i.forEach((n,r)=>{r>0&&(Sc(i[r-1])==="above"||Sc(n)==="below")||e++,t.push(e)}),t}var Rr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Mn(i){return i==="hedge"||i==="fence"||i==="pergola"}function Yh(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Mn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Ac(i){return[...i.rooms,...Yh(i)]}function MM(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,s=1/0,a=-1/0;for(let[c,h]of i.points){let u=o(c,h);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function Er(i,t,e,n){return ji(i,t)+Rr[t.type]-Ro(i,t,e,n)}var qh=-.2,Tc={set:!1,level:qh};function S0(i){let t=i?.settings.terrain??null;Tc={set:t?.level!=null,level:t?.level??qh}}function Eo(i,t){return Tc.level}function $h(i){return i.elevation>.3?0:Tc.set?Tc.level-i.elevation:qh}function ji(i,t){return $h(i)+(t.offset??0)}function Ro(i,t,e,n){return t.type==="pool"?0:MM(t,e,n)}function Mc(i,t,e){let n=(i.outdoor??[]).filter(o=>!Mn(o.type)&&o.type!=="pool"&&Yt([t,e],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?Er(i,r,t,e):$h(i)}function T0(i,t,e){let n=(i.outdoor??[]).filter(o=>!Mn(o.type)&&o.type!=="pool"&&Yt([t,e],o.points)),r=[...n].reverse().find(o=>o.cut);return r?Er(i,r,t,e):n.length?Math.max(...n.map(o=>Er(i,o,t,e))):$h(i)}function Ec(i){if(i.type!=="fence"||!i.gates?.length)return[];let t=i.points.length,e=[];for(let n of i.gates){if(n.edge<0||n.edge>=t||i.open&&n.edge===t-1)continue;let r=i.points[n.edge],o=i.points[(n.edge+1)%t],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<.4)continue;let a=Math.min(Math.max(.3,n.width),s-.1),l=Math.min(Math.max(a/2+.05,n.at),s-a/2-.05);e.push({gate:n,p:r,q:o,s0:l-a/2,s1:l+a/2})}return e}function Rc(i,t){return ji(i,t)+(t.above?E0(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function wM(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?E0(i):1.5}function Zh(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Mn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Yt(n,e.points)))}function A0(i,t){return!t.above&&!Zh(i,t)?Cc(i,t)-.05:Rc(i,t)-wM(t)}function Cc(i,t){return Rc(i,t)-.15}function E0(i){return i.height&&i.height>.3?i.height:1.2}var SM={type:"none",pitch:35,overhang:.4},q3={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...SM}};var R0=.3;var C0=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),wc=1.75;var x0=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function v0(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var P0=new Set(["stairs","stairs_u"]);function Pc(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:h,rise:e/n}}function I0(i){return C0.has(i)||!!xe(i)?.light}var TM=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Ar(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var M0=.04,AM=1.2;function y0(i,t,e,n=0){let r=0;for(let o of i.furniture)!(TM.has(o.type)||xe(o.type)?.surface)||!Yt([t,e],Ri(o))||o.type==="worktop"&&n>0&&o.h-M0>=AM&&n<=o.h-M0-.02||(r=Math.max(r,o.h));return r}var Ic=new Set(["wall_switch","wall_socket"]),EM=4;function L0(i){let t=(i.gangs??[]).slice(0,EM);return t.length?t:[{entity:null}]}function _0(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var _M=new Set([...C0,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var RM=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],CM=["standard","bars","glass_wall","slide"];function Ei(i,t){return i.type==="door"?i.style&&RM.includes(i.style)?i.style:t?"front":"interior":i.style&&CM.includes(i.style)?i.style:"standard"}function F0(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=o-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function D0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Pn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[o,s]=i[(e+1)%i.length];t+=n*s-o*r}return t/2}function Jn(i){return Math.abs(Pn(i))}function di(i){let t=Pn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;e+=(o+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function O0(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,o]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function N0(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:t,z0:e,x1:n,z1:r}}function Ri(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*e-a*n,i.z+s*n+a*e])}function Yt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[o,s]=t[n],[a,l]=t[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(e=!e)}return e}function Cr(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],o=n*n+r*r,s=o>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/o)):0;return i.h0+(i.h1-i.h0)*s}var ze=(i,t)=>[i[0]-t[0],i[1]-t[1]],pi=(i,t)=>[i[0]+t[0],i[1]+t[1]],Un=(i,t)=>[i[0]*t,i[1]*t],Po=(i,t)=>i[0]*t[0]+i[1]*t[1],Co=(i,t)=>i[0]*t[1]-i[1]*t[0],Ns=i=>Math.hypot(i[0],i[1]),In=i=>{let t=Ns(i)||1;return[i[0]/t,i[1]/t]},Jh=i=>[-i[1],i[0]],U0=i=>[i[1],-i[0]];function mi(i,t,e=[]){let n=t.eps??.005,r=[],o=e.filter(w=>Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])>.05),s=[],a=w=>{for(let A=0;A<s.length;A++)if(Math.abs(s[A][0]-w[0])<=n&&Math.abs(s[A][1]-w[1])<=n)return A;return s.push([w[0],w[1]]),s.length-1},l=[];for(let w of i){let A=w.points;if(A.length<3||Math.abs(Pn(A))<1e-6)continue;let I=Pn(A)>0,L=A.map(a);for(let P=0;P<A.length;P++){let B=L[P],T=L[(P+1)%A.length];B!==T&&l.push(I?{u:B,v:T,room:w.id,edge:P,forward:!0}:{u:T,v:B,room:w.id,edge:P,forward:!1})}}let c=o.map(w=>[a(w.a),a(w.b)]),h=new Set;for(let w of i){let A=w.points;A.length<3||(w.wall_splits??[]).forEach((I,L)=>{if(!I||L>=A.length)return;let P=A[L],B=ze(A[(L+1)%A.length],P),T=Ns(B);for(let C of I)C>n&&C<T-n&&h.add(a(pi(P,Un(B,C/T))))})}let u=[];for(let w of l){let A=s[w.u],I=s[w.v],L=ze(I,A),P=Ns(L),B=Un(L,1/P),T=[];for(let O=0;O<s.length;O++){if(O===w.u||O===w.v)continue;let D=ze(s[O],A),N=Po(D,B);N<=n||N>=P-n||Math.abs(Co(B,D))<=n&&T.push({t:N,id:O})}T.sort((O,D)=>O.t-D.t);let C=[{t:0,id:w.u},...T,{t:P,id:w.v}];for(let O=0;O+1<C.length;O++){let D=C[O],N=C[O+1],z=w.forward?D.t:P-N.t,G=w.forward?N.t:P-D.t;u.push({u:D.id,v:N.id,room:w.room,edge:w.edge,t0:z,t1:G})}}let f=new Map;for(let w of u){let A=w.u<w.v?`${w.u}-${w.v}`:`${w.v}-${w.u}`,I=f.get(A);I||f.set(A,I=[]),I.push(w)}let d=w=>({room_id:w.room,edge:w.edge,t0:w.t0,t1:w.t1}),m=new Map;for(let w of u){let A=`${w.room}:${w.edge}`;m.set(A,[...m.get(A)??[],w.t0].sort((I,L)=>I-L))}let b=w=>{let A=i.find(L=>L.id===w.room)?.wall_heights?.[w.edge];if(!Array.isArray(A))return A;let I=m.get(`${w.room}:${w.edge}`)??[];return A[I.indexOf(w.t0)]??null},g=w=>{let A=w.map(b).filter(L=>typeof L=="number"&&L>0);if(A.length)return Math.min(...A);let I=w.map(L=>i.find(P=>P.id===L.room)?.ceiling_height);return I.every(L=>typeof L=="number"&&L>0)?Math.max(...I):void 0},p=w=>{let A=w.map(I=>i.find(L=>L.id===I.room)?.wall_thickness?.[I.edge]).filter(I=>typeof I=="number"&&I>0);return A.length?Math.max(...A):void 0},x=w=>{for(let A of w){let I=i.find(T=>T.id===A.room),L=I?.wall_slopes?.[A.edge];if(!I||!L)continue;let P=I.points[A.edge],B=I.points[(A.edge+1)%I.points.length];return{p:[P[0],P[1]],q:[B[0],B[1]],h0:Math.max(.05,L[0]),h1:Math.max(.05,L[1])}}},_=w=>w.some(A=>b(A)===0),v=w=>{let A=x(w);return A?{height:Math.max(A.h0,A.h1),slope:A}:{height:g(w)}},M=[],S=[];for(let w of f.values()){let A=w[0],I=w.find(L=>L!==A&&L.u===A.v&&L.v===A.u&&L.room!==A.room);for(let L of w)L!==A&&L!==I&&L.room!==A.room&&r.push(`overlap:${A.room}:${L.room}`);if(_(I?[A,I]:[A])){I&&M.push([A.room,I.room]);continue}if(I){let L=p([A,I])??t.interior;S.push({a:A.u,b:A.v,left:L/2,right:L/2,exterior:!1,roomLeft:A.room,roomRight:I.room,sources:[d(A),d(I)],...v([A,I])})}else S.push({a:A.u,b:A.v,left:0,right:p([A])??t.exterior,exterior:!0,roomLeft:A.room,roomRight:null,sources:[d(A)],...v([A])})}let E=w=>In(ze(s[w.b],s[w.a]));for(let w of S){if(w.exterior||w.free)continue;let A=new Set;for(let L of[w.a,w.b])for(let P of S)!P.exterior||P.free||P.a!==L&&P.b!==L||Math.abs(Co(E(w),E(P)))>1e-6||(P.roomLeft===w.roomLeft?A.add("left"):P.roomLeft===w.roomRight&&A.add("right"));if(A.size!==1)continue;let I=w.left+w.right;A.has("left")?(w.left=0,w.right=I):(w.left=I,w.right=0)}o.forEach((w,A)=>{let[I,L]=c[A];if(I===L)return;let P=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],B=i.find(N=>N.points.length>=3&&Yt(P,N.points))?.id??null,T=(w.thickness??t.interior)/2,C=typeof w.height=="number"&&w.height>0?w.height:void 0,O=w.slope,D=O?{p:[w.a[0],w.a[1]],q:[w.b[0],w.b[1]],h0:Math.max(.05,O[0]),h1:Math.max(.05,O[1])}:void 0;S.push({free:w.id,a:I,b:L,left:T,right:T,exterior:!1,roomLeft:B,roomRight:B,sources:[],...D?{height:Math.max(D.h0,D.h1),slope:D}:{height:C}})}),S=IM(S,s,h);let y=FM(S,s);return{walls:S.map((w,A)=>{let I=s[w.a],L=s[w.b],P=y.get(`${A}:a`),B=y.get(`${A}:b`),T=DM([P.right,B.left,L,B.right,P.left,I],1e-6);return{id:PM(I,L),a:[I[0],I[1]],b:[L[0],L[1]],left:w.left,right:w.right,exterior:w.exterior,roomLeft:w.roomLeft,roomRight:w.roomRight,sources:w.sources,footprint:T,...w.free?{free:w.free}:{},...w.height!==void 0?{height:w.height}:{},...w.slope?{slope:w.slope}:{}}}),warnings:[...new Set(r)],open:M}}function PM(i,t){let e=o=>Math.round(o*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function Kh(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function IM(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],c=n[a[1]],h=l.b!==s&&c.a!==s;if(l.b!==s&&(l=Kh(l)),c.a!==s&&(c=Kh(c)),l.a===c.b)continue;let u=In(ze(t[l.b],t[l.a])),f=In(ze(t[c.b],t[c.a]));if(Math.abs(Co(u,f))>1e-6||Po(u,f)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let d={...l,b:c.b,sources:LM(l.sources,c.sources)},m=h?Kh(d):d,b=n.filter((g,p)=>p!==a[0]&&p!==a[1]);b.push(m),n.length=0,n.push(...b),r=!0;break}}return n}function LM(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function FM(i,t){let e=new Map;i.forEach((r,o)=>{let s=In(ze(t[r.b],t[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:Un(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,o]of e){let s=t[r];o.sort((c,h)=>c.angle-h.angle);let a=c=>({left:pi(s,Un(Jh(c.d),c.left)),right:pi(s,Un(U0(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let h=o[c],u=o[(c+1)%o.length],f=pi(s,Un(Jh(h.d),h.left)),d=pi(s,Un(U0(u.d),u.right)),m=Co(h.d,u.d);if(Math.abs(m)<1e-4)continue;let b=Co(ze(d,f),u.d)/m,g=pi(f,Un(h.d,b));Ns(ze(g,s))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function DM(i,t){let e=i.filter((r,o)=>Ns(ze(r,i[(o+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let o=e[(r+e.length-1)%e.length],s=e[r],a=e[(r+1)%e.length],l=ze(s,o),c=ze(a,s);if(Math.abs(Co(In(l),In(c)))<1e-7&&Po(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function jh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],o=In(ze(r,n));return pi(n,Un(o,e))}function B0(i,t){let e=ze(i.b,i.a),n=Jh(In(e)),r=a=>t.some(l=>l.points.length>=3&&Yt(a,l.points)),o=0,s=0;for(let a of[.2,.5,.8]){let l=pi(i.a,Un(e,a));r(pi(l,Un(n,i.left+.2)))&&o++,r(ze(l,Un(n,i.right+.2)))&&s++}return o>=2&&s===0?!0:s>=2&&o===0?!1:null}function Io(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=In(ze(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,pi(r.a,[-o[1],o[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Lo(i,t,e){if(!t.wall)return OM(i,e.room,e.edge,t.offset);let n=i.find(o=>o.free===t.wall);if(!n)return null;let r=jh(e.room,0,t.offset);return{wall:n,s:Po(ze(r,n.a),In(ze(n.b,n.a)))}}function Qh(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=In(ze(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of i)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||a.exterior!==t.exterior||a.free||!o(e?a.a:a.b)||Po(In(ze(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function OM(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=jh(t,e,n);return{wall:r,s:Po(ze(s,r.a),In(ze(r.b,r.a)))}}return null}function Lc(i,t,e,n){let r=t.rotation*Math.PI/180,o=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],m=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=o[0]*d[0]+o[1]*d[1]>=0?1:-1;if(Math.abs(o[0]*d[0]+o[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,p=m>-c.right-1e-4&&m<c.left+1e-4,x=Math.abs(m-(g+b*(s/2)));if(!p&&x>.03||a&&x>=a.off)continue;let _=c.a[0]+u[0]*f,v=c.a[1]+u[1]*f,M=p?g+b*(s/2):m,S=c.slope?Cr(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:_+d[0]*M,z:v+d[1]*M,top:S,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var Qi=Math.PI/180;function Pr(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*Qi;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Dc(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],o=e?-i.s:i.s;return[i.p[0]+n*i.c-r*o,i.p[1]+n*o+r*i.c]}function nn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),o=Pr(i),s=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=o?(l,c)=>Dc(o,s(l,c)):s;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function z0(i,t,e,n=1e-6){let[r,o]=bi(i,t,e),s=nn({...i,rotation:0});return r>=s.u0-n&&r<=s.u1+n&&o>=-n&&o<=s.w+n}function cn(i){let t=nn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=X0(t,e,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(r+o))):t/2,a=e+s*r;return{vr:s,rh:a,y:l=>l<=s?e+l*r:n+(t-l)*o}}function ef(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var nf=.14;function V0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function rf(i,t){return cn(i).rh-nf>t+.01}function G0(i,t,e,n){let r=null,o=Math.max(0,i.settings.roof.overhang??0);for(let s of ef(i)){if(s.open||n!==void 0&&!rf(s,n))continue;let a=s.points&&s.points.length>=3?null:s.overhang_sides??null,l=p=>typeof a?.[p]=="number"?Math.max(0,a[p]):null,[c,h]=bi(s,t,e),u=nn({...s,rotation:0}),f=1e-6;if(c<u.u0-(l(2)??0)-f||c>u.u1+(l(3)??0)+f||h<-(l(0)??0)-f||h>u.w+(l(1)??0)+f||s.points&&s.points.length>=3&&!Yt([t,e],s.points))continue;let d=s.shape==="flat"||s.shape==="parapet",m=Math.max(0,s.overhang??o),g=((d?null:Vs(Ir(s,{a:l(0)??m,b:l(1)??m,u0:l(2)??m,u1:l(3)??m}),c,h))??cn(s).y(h))-nf;r=r===null?g:Math.max(r,g)}return r}function zs(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(o=>[o[0],o[1]]);let n=Jn(i)>=0?1:-1,r=[];for(let o=0;o<e;o++){let s=i[(o+e-1)%e],a=i[o],l=i[(o+1)%e],c=k0([a[0]-s[0],a[1]-s[1]]),h=k0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],m=u[1]+f[1],b=Math.hypot(d,m);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+m*u[1])/b,p=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*p,a[1]+m/b*t*p])}return r}function k0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function H0(i,t){if(i.points&&i.points.length>=3)return zs(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,o=Math.max(i.z0,i.z1)+t,s=Pr(i);return[[e,r],[n,r],[n,o],[e,o]].map(a=>Dc(s,a))}function W0(i,t,e,n){let r=mi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])s.set(o(f),[...s.get(o(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let m=(s.get(o(d))??[]).find(b=>!l.has(b));if(!m||(l.add(m),d=o(m.a)===o(d)?m.b:m.a,o(d)===o(f[0])))break;f.push(d)}f.length>=3&&o(d)===o(f[0])&&(!c||Math.abs(Jn(f))>Math.abs(Jn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],m=c[(u+1)%c.length],b=(d[0]-f[0])*(m[1]-d[1])-(d[1]-f[1])*(m[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?zs(h,e):null}var Us=Math.tan(30*Qi);function X0(i,t,e,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+o*n,l=e+s*r,c=Math.min(i-s,Math.max(o,(l-a+Us*(i-s+o))/(2*Us))),h=a+(c-o)*Us;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=o?t+f*n:f<=c?a+(f-o)*Us:f<=i-s?l+(i-s-f)*Us:e+(i-f)*r}}function Ir(i,t){let e=nn(i),n=cn(i),r=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(O,D)=>[O,D,n.y(D)],h=c(a,-o),u=c(l,-o),f=c(l,r+s),d=c(a,r+s),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi);if(i.shape==="pent"){let O=[h,u,f,d],D=[[0,n.y(0)],[r,n.y(r)]];return{faces:[O],rim:O,ridges:[[f,d]],gable:D,gables:[D,D]}}if(i.shape==="pyramid"){let O=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,O],[u,f,O],[f,d,O],[d,h,O]],rim:[h,u,f,d],ridges:[[h,O],[d,O],[u,O],[f,O]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let O=X0(r,i.eave_a,i.eave_b,m,b),D=[[0,n.y(0)],[O.vla,O.yla],[O.vr,O.rh],[r-O.vlb,O.ylb],[r,n.y(r)]],N=[a,O.vla,O.yla],z=[l,O.vla,O.yla],G=[a,r-O.vlb,O.ylb],V=[l,r-O.vlb,O.ylb],W=[a,O.vr,O.rh],Q=[l,O.vr,O.rh];return{faces:[[h,u,z,N],[N,z,Q,W],[W,Q,V,G],[G,V,f,d]],rim:[h,u,z,Q,V,f,d,G,W,N],ridges:[[W,Q],[N,z],[G,V]],gable:D,gables:[D,D]}}let[g,p]=Oc(i)??["gable","gable"],x=of(i,[g,p]),_=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=p==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],S=[a,x.vbh,x.yh],E=[l,x.vah,x.yh],y=[l,x.vbh,x.yh],R=g==="halfhip",w=p==="halfhip",A=[[h,u,...w?[E]:[],v,_,...R?[M]:[]],[_,v,...w?[y]:[],f,d,...R?[S]:[]]];g==="hip"&&A.push([d,h,_]),R&&A.push([S,M,_]),p==="hip"&&A.push([u,f,v]),w&&A.push([E,y,v]);let I=[h,u,...p==="gable"?[v]:w?[E,y]:[],f,d,...g==="gable"?[_]:R?[S,M]:[]],L=[[_,v]];g==="hip"&&L.push([h,_],[d,_]),R&&L.push([M,_],[S,_]),p==="hip"&&L.push([u,v],[f,v]),w&&L.push([E,v],[y,v]);let P=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],B=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],T=O=>O==="gable"?P:O==="halfhip"?B:null,C=[T(g),T(p)];return{faces:A,rim:I,ridges:L,gable:C[0]??C[1],gables:C}}function Oc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function of(i,t){let e=nn(i),n=cn(i),r=e.w,o=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=o>1e-6?Math.min(n.vr,(h-i.eave_a)/o):n.vr,f=s>1e-6?Math.max(n.vr,r-(h-i.eave_b)/s):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),m=Math.min(l-.1,(n.rh-h)/Math.max(.2,o)),b=g=>g==="hip"?d:g==="halfhip"?m:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function Vs(i,t,e){let n=null;for(let r of i.faces){if(!Yt([t,e],r.map(x=>[x[0],x[1]])))continue;let[o,s]=r,a=r.slice(2).find(x=>Math.abs((s[0]-o[0])*(x[1]-o[1])-(s[1]-o[1])*(x[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],h=s[1]-o[1],u=a[0]-o[0],f=a[2]-o[2],d=a[1]-o[1],m=c*d-h*f,b=h*u-l*d,g=l*f-c*u;if(Math.abs(b)<1e-9)continue;let p=o[2]-(m*(t-o[0])+g*(e-o[1]))/b;n=n===null?p:Math.min(n,p)}return n}function bi(i,t,e){let[n,r]=Dc(Pr(i),[t,e],!0),o=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?s-n:n-o]}function tf(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function tr(i,t){let[e,n]=Dc(Pr(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i)s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(t)*1.5||z0(s,e,n)&&(!o||r(s)<r(o))&&(o=s);return o}function sf(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=nn(t),n=cn(t).rh,r=Ir(i,{u0:0,u1:0,a:0,b:0}),o=cn(i),s=b=>{let[g,p]=e.at(b,e.w/2),[x,_]=bi(i,g,p);return Vs(r,x,_)??o.y(_)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let b=.5;b<u;b+=.05)if(s(l+h*b)>=n-.02){f=l+h*b;break}if(Math.abs(f-c)<.05)return t;let d=Pr(t),m={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?m.x1=f:m.x0=f:c===e.u1?m.z1=f:m.z0=f,m}function Y0(i,t){let e=sf(i,t),n=nn(e),r=cn(e),o=Ir(i,{u0:0,u1:0,a:0,b:0}),s=cn(i),a=f=>{let[d,m]=n.at(f,n.w/2),[b,g]=bi(i,d,m);return Vs(o,b,g)??s.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,m=c*(f+1)/u,b=l?n.u0+d:n.u1-d,g=l?n.u0+m:n.u1-m,p=a(g),x=1/0,_=-1/0;for(let y=0;y<=40;y++){let R=n.w*y/40;r.y(R)>p+.02&&(x=Math.min(x,R),_=Math.max(_,R))}if(!(_-x>.05))continue;let v=n.at(b,x),M=n.at(g,_),S=bi(i,v[0],v[1]),E=bi(i,M[0],M[1]);h.push({u0:Math.min(S[0],E[0]),u1:Math.max(S[0],E[0]),v0:Math.min(S[1],E[1]),v1:Math.max(S[1],E[1])})}return h}function gi(i,t,e,n){let r=s=>n?s[t]<=e+1e-9:s[t]>=e-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c&&o.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function af(i,t){let e=gi(i,0,t.u0,!0),n=gi(i,0,t.u1,!1),r=gi(gi(i,0,t.u0,!1),0,t.u1,!0),o=gi(r,1,t.v0,!0),s=gi(r,1,t.v1,!1);return[e,n,o,s].filter(a=>a.length>=3&&Math.abs(Jn(a.map(l=>[l[0],l[1]])))>1e-6)}function Nc(i,t,e){let n=nn(t),r=i.floors.flatMap(b=>b.rooms.filter(g=>g.points.length>=3&&b.elevation+b.height>t.base+.05)),o=i.settings.wall_exterior,s=r.map(b=>zs(b.points,Math.max(o,...(b.wall_thickness??[]).map(g=>g??0))+.01)),a=.35,l=(b,g)=>{if(r.some(x=>Yt(b(a),x.points)))return!0;let p=b(-Math.min(.3,g/2));return s.some(x=>!Yt(p,x)&&[.05,.2,a].some(_=>Yt(b(_),x)))},c=[.15,.5,.85],h=c.map(b=>n.u0+(n.u1-n.u0)*b),u=c.map(b=>n.w*b),f=b=>b==="a"?h.some(g=>l(p=>n.at(g,-p),n.w)):b==="b"?h.some(g=>l(p=>n.at(g,n.w+p),n.w)):b==="u0"?u.some(g=>l(p=>n.at(n.u0-p,g),n.u1-n.u0)):u.some(g=>l(p=>n.at(n.u1+p,g),n.u1-n.u0)),d=t.overhang_sides??null,m=(b,g)=>{let p=d?.[b];return typeof p=="number"?Math.max(0,p):f(g)?0:e};return{a:m(0,"a"),b:m(1,"b"),u0:m(2,"u0"),u1:m(3,"u1")}}function q0(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function NM(i){return cn(i).rh}function $0(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>tr(n,l)??l);if(!r.length)return t.id;let o=Math.max(...r.map(l=>NM(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,m)=>[d[0]+m[0]/c.points.length,d[1]+m[1]/c.points.length],[0,0]);return z0(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Fc(i,[t,e,n]){let r=s=>t*s[0]+e*s[1]+n,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function Bs(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],o=t,s=0;for(let d of i){let m=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(m)>Math.abs(s)&&(s=m,o=d)}if(Math.abs(s)<1e-9)return null;let a=o[0]-t[0],l=o[1]-t[1],c=e[2]-t[2],h=o[2]-t[2],u=(c*l-h*r)/s,f=(n*h-a*c)/s;return[u,f,t[2]-u*t[0]-f*t[1]]}var Fo=i=>Math.abs(Jn(i.map(t=>[t[0],t[1]])));function Uc(i){let t=Pn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<1e-7)continue;let a=-(o[1]-r[1])*t/s,l=(o[0]-r[0])*t/s;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function UM(i,t){let e=Bs(i),n=Bs(t.poly);if(!e||!n||Fo(t.poly)<1e-6)return null;let r=[...Uc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function Z0(i,t){let e=[i];for(let n of t){let r=[];for(let o of e){let s=UM(o,n),a=s?o:[];for(let c of s??[])a=Fc(a,c);if(a.length<3||Fo(a)<1e-6){r.push(o);continue}let l=o;for(let[c,h,u]of Uc(a)){let f=Fc(l,[-c,-h,-u]);if(f.length>=3&&Fo(f)>1e-6&&r.push(f),l=Fc(l,[c,h,u]),l.length<3)break}}e=r}return e}function lf(i,t,e){let n=[[0,1]],r=o=>[i[0]+(t[0]-i[0])*o,i[1]+(t[1]-i[1])*o,i[2]+(t[2]-i[2])*o];for(let o of e){let s=Bs(o.poly);if(!s||Fo(o.poly)<1e-6)continue;let a=Uc(o.poly).map(([d,m,b])=>[d*i[0]+m*i[1]+b,d*(t[0]-i[0])+m*(t[1]-i[1])]),l=d=>s[0]*d[0]+s[1]*d[1]+s[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(o.depth)&&a.push([o.depth-c,-h]);let u=0,f=1;for(let[d,m]of a){if(Math.abs(m)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/m;m>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,m])=>[[d,Math.min(m,u)],[Math.max(d,f),m]]).filter(([d,m])=>m-d>1e-6))}return n.map(([o,s])=>[r(o),r(s)])}function K0(i,t){let e=Bs(i),n=Bs(t);if(!e||!n||Fo(t)<1e-6)return null;let r=[...i];for(let c of Uc(t))r=Fc(r,c);if(r.length<3)return null;let o=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),s=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=o(h),d=o(u);if(f<0!=d<0){let m=f/(f-d);s.push([h[0]+(u[0]-h[0])*m,h[1]+(u[1]-h[1])*m,h[2]+(u[2]-h[2])*m])}}if(s.length<2)return null;let a=s[0],l=s[s.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function J0(i,t){let e=nn(i),n=o=>o.map(([s,a,l])=>{let[c,h]=e.at(s,a);return[c,h,l]}),r=[];for(let o of t){let s=gi(gi(gi(gi(o,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);s.length>=3&&Fo(s)>1e-6&&r.push({poly:n(s),depth:1/0});for(let a of af(o,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:nf})}return r}function cf(i,t){return t.map(e=>({poly:e.poly.map(([n,r,o])=>[...bi(i,n,r),o]),depth:e.depth}))}function j0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:(tr(i,t)!==e||ks(i,t))&&(tr(i,e)!==t||ks(i,e))}function ks(i,t){let e=tr(i,t);if(!e)return!1;let n=((t.rotation??0)-(e.rotation??0))%90+90;return Math.min(n%90,90-n%90)>.5}function Q0(i,t){if(t.dormer||t.open||!Oc(t)||Pr(t)||tr(i,t))return null;let e=nn(t),n=cn(t).rh,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===t||s.dormer||s.open||Pr(s)||s.axis===t.axis||s.shape==="flat"||s.shape==="parapet"||s.shape==="pent")continue;let a=cn(s).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(s)>r(t)||r(s)===r(t)&&i.indexOf(s)<i.indexOf(t))))continue;let c=tf(s),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],m=tf(t),[b,g]=t.axis==="x"?[m.z0,m.z1]:[m.x0,m.x1];if(b<f-.05||g>d+.05)continue;let p=tm(t,s),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=p+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=p-.05&&(x=0),x!==null&&(!o||r(s)>r(o.host))&&(o={host:s,end:x})}return o}function tm(i,t){let e=nn(t),n=e.at(e.u0,cn(t).vr);return i.axis==="x"?n[0]:n[1]}function em(i,t){let e=tm(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=tf(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}var im=.8,nm=.3;function uf(i,t){return t.rooms.some(e=>e.points.length>=3)?W0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function hf(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=uf(i,t);return!!e&&e.some(([n,r])=>Eo(n,r)-t.elevation>-.15)}function BM(i,t,e){let n=null;for(let r of i.floors)if(!(r.elevation>.3))for(let o of r.outdoor??[]){if(o.points.length<3||o.type==="pool"||o.type==="balcony"||Mn(o.type)||!Yt(e,o.points))continue;let s=r.elevation+Er(r,o,e[0],e[1])-t.elevation;n=n===null?s:Math.max(n,s)}return n}function rm(i,t,e,n,r,o){if(!e||!hf(i,t))return!1;let s=Eo(r[0],r[1])-t.elevation;return o&&(s=Math.max(s,BM(i,t,[r[0]+o[0]*nm,r[1]+o[1]*nm])??-1/0)),n<Math.min(t.height,s)-.05}function Lr(i,t){let e=Pn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let o=t[r],s=t[(r+1)%t.length],a=c=>e*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let m=f/(f-d);n.push([h[0]+(u[0]-h[0])*m,h[1]+(u[1]-h[1])*m])}}}return n}function ff(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}var jn=1e-4;function df(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function om(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],o=[n[0]-e[0],n[1]-e[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((e[0]-i[0])*o[1]-(e[1]-i[1])*o[0])/s,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/s;return a>jn&&a<1-jn&&l>-jn&&l<1+jn?a:null}function pf(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-t[0])*n+(i[1]-t[1])*r)/o;return s<=jn||s>=1-jn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(o)<jn?s:null}function kM(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let o=0;o<t.length;o++){let s=t[o],a=t[(o+1)%t.length];if(om(n,r,s,a)!==null||pf(s,n,r)!==null||pf(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<jn)return!0}}return Yt(i[0],t)||Yt(t[0],i)}function zM(i){let t=i.map(o=>df(o)>=0?o:[...o].reverse()),e=[];t.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],h=[0,1];t.forEach((u,f)=>{if(f!==s)for(let d=0;d<u.length;d++){let m=u[d],b=u[(d+1)%u.length],g=om(l,c,m,b)??pf(m,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<jn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],m=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/m*.001,(f[1]+d[1])/2-(d[0]-f[0])/m*.001];t.some((g,p)=>p!==s&&Yt(b,g))||e.some(([g,p])=>Math.hypot(g[0]-f[0],g[1]-f[1])<jn&&Math.hypot(p[0]-d[0],p[1]-d[1])<jn)||e.push([f,d])}}});let n=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;r.add(o);let s=[e[o][0]],a=e[o][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(e[c][0]),a=e[c][1]}s.length>=3&&df(s)>1e-6&&n.push(s)}return n}function sm(i){let t=i.filter(o=>o.length>=3),e=t.map((o,s)=>s),n=o=>e[o]===o?o:e[o]=n(e[o]);for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)n(o)!==n(s)&&kM(t[o],t[s])&&(e[n(s)]=n(o));let r=new Map;return t.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:zM(o))}function VM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o)):0;return Math.hypot(i[0]-t[0]-n*s,i[1]-t[1]-r*s)}function mf(i,t,e=.03){return i.every(n=>Yt(n,t)||t.some((r,o)=>VM(n,r,t[(o+1)%t.length])<=e))}function am(i,t){let e=df(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return e.map((r,o)=>{let s=n(e[(o-1+e.length)%e.length],r),a=n(r,e[(o+1)%e.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*t,r[1]+(s[1]+a[1])/l*t]})}function bf(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Do=(i,t)=>!!i.fix&&i.fix.includes(t);function gf(i,t,e,n){let r=new Map,o=i.filter(c=>Do(c,t)).map(c=>({p:c,e:bf(c,t,e)})),s=Math.min(.05,.1*e);for(let{p:c,e:h}of o)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||u[0]>a+(a===0?s:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:s)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of o)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Fr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function lm(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Bc(n))return[Fr(t,n),Fr(e,n)];let r=n.side.get(i)??"lo",o=e-t;if(r==="mid")return[n.s/2-o/2,n.s/2+o/2];if(r==="free"){let s=Fr((t+e)/2,n);return[s-o/2,s+o/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Bc(i){return i.lo>0||i.hi>0}function Gs(i,t,e,n){let[r,o,s]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-o)<.001&&Math.abs(n-s)<.001)return i.parts;let a={w:gf(i.parts,"w",r,t),d:gf(i.parts,"d",o,e),h:gf(i.parts,"h",s,n)},l={w:!Bc(a.w)&&i.parts.some(c=>Do(c,"w")),d:!Bc(a.d)&&i.parts.some(c=>Do(c,"d")),h:!Bc(a.h)&&i.parts.some(c=>Do(c,"h"))};return i.parts.map(c=>{let h=x=>{let _=a[x],[v,M]=bf(c,x,_.s0);return Do(c,x)&&!l[x]?lm(c,v,M,_):[Fr(v,_),Fr(M,_)]},[u,f]=h("w"),[d,m]=h("d"),[b,g]=h("h"),p={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+m)/2/e-.5,d:(m-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(E,y,R,w,A)=>{let I=a[E],L=y??w,P=R??A,B=(L-P/2+.5)*I.s0,T=(L+P/2+.5)*I.s0;if(!Do(c,E)||l[E])return[Fr(B,I),Fr(T,I)];let[C,O]=bf(c,E,I.s0),[D]=lm(c,C,O,I),N=D-C;return[B+N,T+N]},[_,v]=x("w",c.tx,c.tw,c.x,c.w),[M,S]=x("d",c.tz,c.td,c.z,c.d);p.tx=(_+v)/2/t-.5,p.tw=(v-_)/t,p.tz=(M+S)/2/e-.5,p.td=(S-M)/e}return p})}var GM=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var HM=["wall","pole","pillar","parcel","bank"];function um(i){return GM.includes(i.variant??"")?i.variant:"bin240"}function hm(i){return HM.includes(i.variant??"")?i.variant:"wall"}var Ge=["#3a3f47","#3a3f47"],Dr=["#23262b","#23262b"],Qn=["#5a3b25","#5a3b25"],De=["#1f4fa8","#1f4fa8"],er=["#e3b616","#e3b616"],pe=["#2f7d3b","#2f7d3b"],cm={default:{rest:Ge,bio:Qn,paper:De,plastic:er,glass:pe,garden:pe,recycling:er,other:Ge},DE:{rest:Dr,bio:Qn,paper:De,plastic:er,glass:pe,garden:pe,recycling:er},AT:{rest:Ge,bio:Qn,paper:[Ge[0],"#c0262d"],plastic:er,glass:pe,garden:pe},CH:{rest:["#d8d8d8","#d8d8d8"],bio:pe,paper:De,plastic:Ge,glass:pe,garden:pe},NL:{rest:Ge,bio:pe,paper:De,plastic:["#3a3f47","#e57a1f"],glass:pe,garden:pe},BE:{rest:Ge,bio:pe,paper:De,plastic:De,glass:pe,garden:pe},GB:{rest:Dr,bio:["#3a3f47","#5a3b25"],paper:De,plastic:De,glass:Dr,garden:Qn,recycling:De},US:{rest:Dr,bio:pe,paper:De,plastic:De,glass:De,garden:pe,recycling:De},CA:{rest:Dr,bio:pe,paper:De,plastic:De,glass:De,garden:pe,recycling:De},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ge,bio:Qn,paper:[Ge[0],"#e3b616"],plastic:[Ge[0],"#e3b616"],recycling:[Ge[0],"#e3b616"],glass:pe,garden:pe},IT:{rest:Ge,bio:Qn,paper:De,plastic:er,glass:pe,garden:pe},ES:{rest:Ge,bio:Qn,paper:De,plastic:er,glass:pe,garden:pe},PT:{rest:Ge,bio:Qn,paper:De,plastic:er,glass:pe,garden:pe},DK:{rest:Dr,bio:pe,paper:De,plastic:Ge,glass:pe,garden:pe},SE:{rest:Dr,bio:Qn,paper:De,plastic:Ge,glass:pe,garden:pe},NO:{rest:Ge,bio:Qn,paper:De,plastic:Ge,glass:pe,garden:pe},FI:{rest:Ge,bio:Qn,paper:De,plastic:Ge,glass:pe,garden:pe}},fm="DE";function dm(){return fm}function WM(i,t){return cm[t]?.[i]??cm.default[i]??Ge}function pm(i,t=fm){let e=WM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var nr=Nt(3662079,.95),xf=Nt(3662079,1),Ci=Nt(5995775,.34),mm=Nt(5995775,.22),kc=[-.55,.83],Jt=-1,zc=16,ir=32,gm=48,vf=64,te=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,o=r,s=r,a,l=Jt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Ot;return t.setAttribute("position",new Lt(this.p,3)),t.setAttribute("color",new Lt(this.c,3)),t.setAttribute("fold",new Lt(this.f,1)),this.uv&&t.setAttribute("uv",new Lt(this.uv,2)),this.tile&&t.setAttribute("tile",new Lt(this.tile,2)),t.computeBoundingSphere(),t}},Oe=class{p=[];c=[];f=[];seg(t,e,n=nr,r=Jt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,o){let[s,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,Jt);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,Jt),this.seg(c,a,n,o)}geometry(){let t=new Ot;return t.setAttribute("position",new Lt(this.p,3)),t.setAttribute("color",new Lt(this.c,3)),t.setAttribute("fold",new Lt(this.f,1)),t}};function bm(i,t,e,n){let o=i.uv?2:0,s=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((m,b)=>m+(f.p[b]-m)*d),c:u.c.map((m,b)=>m+(f.c[b]-m)*d),uv:u.uv&&f.uv?u.uv.map((m,b)=>m+(f.uv[b]-m)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let m=0;m<3;m++){let b=u*3+m;for(let g=0;g<3;g++)i.p[b*3+g]=f[m].p[g],i.c[b*3+g]=f[m].c[g];if(i.uv&&f[m].uv)for(let g=0;g<o;g++)i.uv[b*2+g]=f[m].uv[g];if(i.tile&&f[m].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[m].tile[g];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let m of u)i.p.push(...m.p),i.c.push(...m.c),i.f.push(f),i.uv&&i.uv.push(...m.uv??[.5,.5]),i.tile&&i.tile.push(...m.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[s(u,0),s(u,1),s(u,2)],d=f.map(y=>y.p[1]>e+1e-6),m=f.map(y=>y.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let y=0;y<3;y++)i.f[u*3+y]=n;continue}let b=i.f[u*3],g=(y,R)=>a(y,R,(e-y.p[1])/(R.p[1]-y.p[1])),p=d.filter(Boolean).length,x=p===1?d.indexOf(!0):d.indexOf(!1),_=f[x],v=f[(x+1)%3],M=f[(x+2)%3],S=g(_,v),E=g(M,_);p===1?(l(u,[_,S,E],n),c([S,v,M],b),c([S,M,E],b)):(l(u,[_,S,E],b),c([S,v,M],n),c([S,M,E],n))}}function xm(i,t,e,n){let r=i.p.length/6;for(let o=t;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[o*6+d]=l[d],i.p[o*6+3+d]=u[d];let f=i.c.slice(o*6,o*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ie=Math.PI/180;function Nt(i,t){let e=new tt(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function XM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function rn(i,t=[]){let e=i.map(([n,r])=>new Qt(n,r));return ps.triangulateShape(e,t.map(n=>n.map(([r,o])=>new Qt(r,o))))}function vm(i,t,e,n,r,o,s){let a=new tt(s),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=t[d],b=t[(d+1)%4],g=e[d],p=e[(d+1)%4],x=b[0]-m[0],_=b[1]-m[1],v=Math.hypot(x,_);if(v<1e-6)continue;let S=.8+.28*((_/v*kc[0]-x/v*kc[1]+1)/2),E=(g[0]+p[0]-m[0]-b[0])/2*(-_/v)+(g[1]+p[1]-m[1]-b[1])/2*(x/v),y=Math.max(0,Math.min(1,E/Math.max(1e-6,Math.hypot(E,r-n)))),R=Nt(o,l(n)*S).lerp(a,y),w=Nt(o,l(r)*S).lerp(a,y);i.tri([m[0],n,m[1]],[g[0],r,g[1]],[p[0],r,p[1]],R,w,w),i.tri([m[0],n,m[1]],[p[0],r,p[1]],[b[0],n,b[1]],R,w,R)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function ym(i,t,e,n,r,o,s,a,l,c){let h=new tt(l),u=[];for(let g=0;g<c;g++){let p=g/c*Math.PI*2;u.push({y:o+Math.cos(p)*s,s:r+Math.sin(p)*s})}let f=(g,p)=>{let x=t(g,u[p%c].s);return[x[0],u[p%c].y,x[1]]},d=t(e,r),m=t(n,r),b=(g,p,x,_,v)=>{let M=(p[1]-g[1])*(x[2]-g[2])-(p[2]-g[2])*(x[1]-g[1]),S=(p[2]-g[2])*(x[0]-g[0])-(p[0]-g[0])*(x[2]-g[2]),E=(p[0]-g[0])*(x[1]-g[1])-(p[1]-g[1])*(x[0]-g[0]);M*_[0]+S*_[1]+E*_[2]<0?i.tri(g,x,p,v):i.tri(g,p,x,v)};for(let g=0;g<c;g++){let p=(g+.5)/c*Math.PI*2,x=Nt(a,.62+.4*Math.max(0,Math.cos(p))),_=t((e+n)/2,r+Math.sin(p)*s),v=t((e+n)/2,r),M=[_[0]-v[0],Math.cos(p)*s,_[1]-v[1]];b(f(e,g),f(n,g+1),f(n,g),M,x),b(f(e,g),f(e,g+1),f(n,g+1),M,x)}for(let[g,p,x]of[[e,m,d],[n,d,m]]){let _=t(g,r),v=[_[0],o,_[1]],M=[x[0]-p[0],0,x[1]-p[1]];for(let S=0;S<c;S++)b(v,f(g,S),f(g,S+1),M,h)}}function Re(i,t,e,n,r,o,s={}){let a=typeof n=="number"?()=>n:m=>Math.max(e+.002,n(m[0],m[1])),l=s.aoFrom??e,c=s.fold??Jt,h=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),u=(s.holes??[]).map(m=>XM(m)>0?[...m].reverse():m),f=u.length?[...t,...u.flat()]:t,d=s.topFace===!1&&!s.bottom?[]:rn(t,u);if(s.topFace!==!1){let m=new tt(o);for(let[b,g,p]of d){let x=f[b],_=f[g],v=f[p];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[_[0],a(_),_[1]],m,m,m,void 0,s.topFold??c)}}if(s.bottom){let m=Nt(r,.55);for(let[b,g,p]of d){let x=f[b],_=f[g],v=f[p];i.tri([x[0],e,x[1]],[_[0],e,_[1]],[v[0],e,v[1]],m,m,m,void 0,c)}}for(let m of[t,...u])for(let b=0;b<m.length;b++){let g=m[b],p=m[(b+1)%m.length],x=p[0]-g[0],_=p[1]-g[1],v=Math.hypot(x,_);if(v<1e-6||s.skipSide?.(g,p))continue;let S=.8+.28*((_/v*kc[0]-x/v*kc[1]+1)/2),E=a(g),y=a(p),R=Nt(r,h(e)*S),w=Nt(r,h(E)*S),A=Nt(r,h(y)*S);i.tri([g[0],e,g[1]],[g[0],E,g[1]],[p[0],y,p[1]],R,w,A,void 0,c),i.tri([g[0],e,g[1]],[p[0],y,p[1]],[p[0],e,p[1]],R,A,R,void 0,c)}}var U={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},bt=Nt(5995775,.3),Ut=Nt(5995775,.17),ee=Nt(3662079,.45),or=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=_f(n)}rotated(t,e,n){let r=n*ie,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*o-(c-e)*s,e+(l-t)*s+(c-e)*o))}box(t,e,n,r,o,s,a,l=a,c=null){if(e-t<1e-4||s-o<1e-4||r-n<1e-4)return;let h=[this.tf(t,o),this.tf(t,s),this.tf(e,s),this.tf(e,o)];Re(this.buf,Vc(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}mesh(t,e,n){let r=t.map(([o,s,a])=>{let l=this.tf(o,a);return[l[0],s,l[1]]});for(let o of e){let s=r[o[0]],a=r[o[this.mirrored?2:1]],l=r[o[this.mirrored?1:2]],c=a[0]-s[0],h=a[1]-s[1],u=a[2]-s[2],f=l[0]-s[0],d=l[1]-s[1],m=l[2]-s[2],b=h*m-u*d,g=u*f-c*m,p=c*d-h*f,x=Math.hypot(b,g,p);if(x<1e-12)continue;let _=Nt(n,.68+.32*Math.max(0,(-.35*b+.8*g+.45*p)/x));this.buf.tri(s,a,l,_)}}polygon(t,e,n,r,o,s){let a=Vc(t.map(([l,c])=>this.tf(l,c)));Re(this.buf,a,e,n,r,o,{aoFrom:0,bottom:!0}),s&&this.outline(a,e,n,s)}loft(t,e,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Vc(l)&&(l.reverse(),c.reverse()),vm(this.buf,l,c,n,r,o,s),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,o,s,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,o,s,a,l,h);this.loft([t+c,e-c,o+c,s-c],[t,e,o,s],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,o,s,a,a,h),this.loft([t,e,o,s],[t+c,e-c,o+c,s-c],r-c,r,a,l)}lyingCyl(t,e,n,r,o,s,a,l,c=l,h=12,u=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let d=(r+o)/2,m=t==="x"?e:n,b=t==="x"?n:e,g=(p,x)=>t==="x"?this.tf(p,x):this.tf(x,p);if(ym(this.buf,g,m-s/2,m+s/2,b,d,f,l,c,h),u)for(let p of[m-s/2,m+s/2])for(let x=0;x<h;x++){let _=x/h*Math.PI*2,v=(x+1)/h*Math.PI*2;this.line(g(p,b+Math.sin(_)*f),g(p,b+Math.sin(v)*f),d+Math.cos(_)*f,d+Math.cos(v)*f,u)}}cyl(t,e,n,r,o,s,a=s,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Re(this.buf,Vc(h),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],o,o,c)}seg(t,e,n,r,o,s,a=bt){this.line(this.tf(t,n),this.tf(r,s),e,o,a)}line(t,e,n,r,o){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],o,Jt)}outline(t,e,n,r){for(let o=0;o<t.length;o++){let s=t[o],a=t[(o+1)%t.length];this.line(s,a,n,n,r),this.line(s,s,e,n,r)}}};function _f(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Vc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Or(i,t,e,n,r,o,s=U.metal,a=!1){let l=t/2-o-r,c=e/2-o-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,s)}}function Ws(i,t,e,n,r,o,s,a=null,l=!1){let c=(e-t)/s;for(let h=1;h<s;h++){let u=t+c*h;i.seg(u,n,o,u,r,o,Ut)}for(let h=0;h<s;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,o+.012,u+Math.min(.1,c/4),f,o+.012,ee);else{let d=s>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,o+.012,d,f+.08,o+.012,ee)}}}function _m(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Or(i,t,e,.07,.05,.05,U.wood,!0),i.pad(o,s,.07,h-.08,a+.02,l,U.fabric,U.fabricTop,.04,bt),i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,U.fabric,U.fabricTop,bt),i.pad(o,o+c,h-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,bt),i.pad(s-c,s,h-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,bt);let d=(s-c-(o+c))/r;for(let m=0;m<r;m++){let b=o+c+d*m+.02,g=b+d-.04;i.pad(b,g,h-.08,h+.05,a+u+.02,l-.06,U.cushion,U.cushion,.04),i.loft([b+.01,g-.01,a+u*.55,a+u+.14],[b+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,U.cushion)}}function Mm(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,m=r?[-1,1]:[-1],b=(y,R)=>i.loft([y-.015,y+.015,R-.015,R+.015],[y-.025,y+.025,R-.025,R+.025],0,.07,U.wood);b(o+.06,a+.06),b(s-.06,a+.06),r||b(s-.06,a+c-.06);for(let y of m)b(y*(t/2-.06),l-.06),b(y*(t/2-c+.06),l-.06);i.pad(o,s,.07,f-.08,a+.02,a+c,U.fabric,U.fabricTop,.04,bt);for(let y of m){let[R,w]=y<0?[o+.02,o+c]:[s-c,s-.02];i.pad(R,w,.07,f-.08,a+c-.02,l,U.fabric,U.fabricTop,.04,bt)}i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],f-.08,n,U.fabric,U.fabricTop,bt);for(let y of m)y<0?i.loft([o,o+h,a+h,l],[o,o+h*.5,a+h,l-.01],f-.08,n,U.fabric,U.fabricTop,bt):i.loft([s-h,s,a+h,l],[s-h*.5,s,a+h,l-.01],f-.08,n,U.fabric,U.fabricTop,bt);for(let y of m){let[R,w]=y<0?[o+h,o+c]:[s-c,s-h];i.pad(R,w,f-.08,d,l-u,l,U.fabric,U.fabricTop,.04,bt)}r||i.pad(s-u,s,f-.08,d,a+.02,a+c-.02,U.fabric,U.fabricTop,.04,bt);let g=o+h,p=r?s-h:s-u,x=Math.max(1,Math.round((p-g)/.62)),_=(p-g)/x;for(let y=0;y<x;y++){let R=g+_*y+.02,w=R+_-.04;i.pad(R,w,f-.08,f+.05,a+h+.02,a+c-.04,U.cushion,U.cushion,.04),i.loft([R+.01,w-.01,a+h*.55,a+h+.14],[R+.03,w-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,U.cushion)}let v=a+c,M=l-u;if(M-v<.2)return;let S=Math.max(1,Math.round((M-v)/.62)),E=(M-v)/S;for(let y of m)for(let R=0;R<S;R++){let w=v+E*R+.02,A=w+E-.04;y<0?(i.pad(o+h+.02,o+c-.04,f-.08,f+.05,w,A,U.cushion,U.cushion,.04),i.loft([o+h*.55,o+h+.14,w+.01,A-.01],[o+h*.4,o+h*.4+.06,w+.03,A-.03],f+.03,n*.93,U.cushion)):(i.pad(s-c+.04,s-h-.02,f-.08,f+.05,w,A,U.cushion,U.cushion,.04),i.loft([s-h-.14,s-h*.55,w+.01,A-.01],[s-h*.4-.06,s-h*.4,w+.03,A-.03],f+.03,n*.93,U.cushion))}}function YM(i,t,e,n){let r=-e/2,o=e/2,s=-t/2,a=t/2,l=Math.min(.32,n*.36);Or(i,t,e,.08,.06,.03,U.wood,!0),i.box(s,a,.08,l,r+.06,o,U.wood,U.woodTop,bt),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,U.white,U.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,U.wood,U.woodTop,bt),i.box(s,a,n-.05,n,r,r+.09,U.wood,U.woodTop,Ut);let c=l+.2,h=r+(e-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,h,o-.01,U.cushion,U.fabricTop,.025,Ut),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,U.cushion,U.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let m=s+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,b+p*.5,b+g-p*.5],[m+.03,m+f-.03,b,b+g],c,c+.06,U.whiteTop),i.loft([m+.03,m+f-.03,b,b+g],[m+.03+p,m+f-.03-p,b+p*.5,b+g-p*.5],c+.06,c+.12,U.whiteTop,U.whiteTop,Ut)}}function qM(i,t,e,n){let r=Math.min(.46,n*.52);Or(i,t,e,r-.04,.035,.02,U.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,U.wood,U.woodTop,bt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,U.cushion,U.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,U.wood,U.woodTop,bt)}function $M(i,t,e,n){Or(i,t,e,n-.04,.06,.05,U.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,ee),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,U.body)}function ZM(i,t,e,n){let r=-t/2,o=t/2;i.box(r,o,n-.035,n,-e/2,e/2,U.wood,U.woodTop,bt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,U.metal);let s=Math.min(.42,t*.32);i.box(o-s,o,0,n-.035,-e/2+.03,e/2-.02,U.body,U.bodyTop,bt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Ut);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,ee);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,U.dark,U.dark,ee),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,U.metal)}function rr(i,t,e,n,r,o=null,s=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,bt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),Ws(i,-t/2,t/2,.08,n,e/2-.02,r,o,s)}function KM(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,U.wood,U.woodTop,bt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,U.wood,U.woodTop,bt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,U.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,U.wood,U.woodTop,Ut),s<o){let l=-t/2+.025+.04,c=s*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?U.fabric:U.cushion,U.fabricTop),l+=h+.006,c++}}}}function JM(i,t,e,n){let r=Math.max(1,Math.round(t/.6));rr(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,bt)}function jM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,bt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Ut);let o=t/2-.06;i.seg(o,r+.08,e/2+.015,o,r+.4,e/2+.015,ee),i.seg(o,r-.4,e/2+.015,o,r-.08,e/2+.015,ee)}var Gc=(i,t)=>Nt(parseInt(i.slice(1),16),t).getHex(),Hs=!1;function Am(i){Hs=i}function Em(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let o=.62/n;i[e]*=o,i[e+1]*=o,i[e+2]*=o}}function QM(i,t,e,n,r,o){let s=f=>{let d=Math.max(...new tt(f).toArray());return Gc(f,d>.05?Math.max(1,.62/d):1)},a=Hs?s(o[0]):Gc(o[0],.55),l=Hs?s(o[1]):Gc(o[1],.8),c=Gc(o[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Ut),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Ut),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,bt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Ut),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,bt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Ut),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,U.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,U.metal,U.metal,Ut);return}if(r==="bin1100"){for(let d of[-1,1])for(let m of[-1,1])i.cyl(d*(t/2-.12),m*(e/2-.12),.05,0,.14,U.dark,U.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,bt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Ut),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Ut);return}let h=Math.min(.2,n*.19),u=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),u+h/2+.01,0,h,.05,h,U.dark,U.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,bt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Ut),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,ee),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Ut))}function t2(i,t,e,n,r,o,s){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,s?U.metal:U.white,s?U.metal:U.whiteTop,bt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Ut),!o)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,U.white,U.whiteTop,Ut),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Ut);else if(s)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,U.metal,U.metal,Ut),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Ut);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,U.dark,U.dark,14,Ut),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,bt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,bt)}}}function e2(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,bt);let s=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*s,n/2+Math.sin(l)*s,e/2+.002,Math.cos(c)*s,n/2+Math.sin(c)*s,e/2+.002,Ut)}return}let o=Math.min(t,e)/2;i.cyl(0,0,o,0,n,U.white,U.whiteTop,24,bt),i.cyl(0,0,o*.5,n,n+.01,U.metal,U.metal,12)}function n2(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,.05,bt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,U.dark);for(let s of[-t*.2,t*.2])i.cyl(s,0,.012,-.12,0,U.metal,U.metal,6);return}let o=Math.min(t,e)/2;i.cyl(0,0,o,.04,n-.05,U.white,U.whiteTop,20,bt),i.cyl(0,0,o*.85,n-.05,n,U.white,U.whiteTop,20);for(let s=0;s<3;s++){let a=s/3*Math.PI*2;i.cyl(Math.cos(a)*o*.7,Math.sin(a)*o*.7,.03,0,.04,U.dark,U.dark,6)}i.box(-o*.3,o*.3,n*.55,n*.65,o-.01,o+.01,U.dark)}function i2(i,t,e,n,r){let o=U.metal,s=Nt(U.metal,1.25).getHex(),a=Nt(U.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,U.wood,U.woodTop,Ut),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,o,s,bt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,o,s,14,bt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,U.dark,U.dark,Ut),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,o,s,12,Ut),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,o,s,bt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,U.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,bt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,s,Ut),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,U.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,bt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,s,Ut),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,U.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,o,s,bt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,o,s,bt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,U.dark)}function r2(i,t,e,n){let r=e/2-Rm;i.box(-t/2,t/2,.02,n,-e/2,r,U.body,U.bodyTop,bt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,U.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-t/2+.03,o,r+.001,-.03,o,r+.001,Ut),i.seg(.03,o,r+.001,t/2-.03,o,r+.001,Ut))}var Rm=.06;function Cm(i,t,e,n){let r=t.rotation*ie,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(P,B,T)=>[t.x+P*o-T*s,B,t.z+P*s+T*o],c=(P,B,T,C,O)=>{i.tri(P,B,T,O),i.tri(P,T,C,O),i.tri(P,T,B,O),i.tri(P,C,T,O)},h=(P,B,T,C)=>{let O=l(P[0],P[1],P[2]),D=l(B[0],B[1],B[2]),N=D[0]-O[0],z=D[1]-O[1],G=D[2]-O[2],V=Math.hypot(N,z,G)||1,W=[N/V,z/V,G/V],Q=Math.abs(W[1])>.9?[1,0,0]:[0,1,0],it=[W[1]*Q[2]-W[2]*Q[1],W[2]*Q[0]-W[0]*Q[2],W[0]*Q[1]-W[1]*Q[0]],q=Math.hypot(it[0],it[1],it[2])||1,Y=[it[0]/q*T,it[1]/q*T,it[2]/q*T],X=[W[1]*Y[2]-W[2]*Y[1],W[2]*Y[0]-W[0]*Y[2],W[0]*Y[1]-W[1]*Y[0]],et=[[1,1],[-1,1],[-1,-1],[1,-1]],J=(rt,pt)=>[rt[0]+Y[0]*et[pt][0]+X[0]*et[pt][1],rt[1]+Y[1]*et[pt][0]+X[1]*et[pt][1],rt[2]+Y[2]*et[pt][0]+X[2]*et[pt][1]];for(let rt=0;rt<4;rt++){let pt=(rt+1)%4;i.tri(J(O,rt),J(D,rt),J(D,pt),C),i.tri(J(O,rt),J(D,pt),J(O,pt),C)}},u=(P,B,T,C,O,D,N,z)=>{c(l(P,C,O),l(B,C,O),l(B,C,D),l(P,C,D),z),c(l(P,T,D),l(B,T,D),l(B,C,D),l(P,C,D),N),c(l(P,T,O),l(B,T,O),l(B,T,D),l(P,T,D),N),c(l(P,T,O),l(P,T,D),l(P,C,D),l(P,C,O),N),c(l(B,T,O),l(B,T,D),l(B,C,D),l(B,C,O),N)},f=new tt(U.body),d=new tt(U.bodyTop),m=new tt(U.accent),b=new tt(1929098),g=new tt(995141),p=(P,B,T,C,O)=>{let D=(N,z,G)=>[N[0]+(z[0]-N[0])*G,N[1]+(z[1]-N[1])*G,N[2]+(z[2]-N[2])*G];for(let N=0;N<O;N++){let z=D(P,B,N/O),G=D(P,B,(N+1)/O),V=D(T,C,(N+1)/O),W=D(T,C,N/O);c(l(z[0],z[1],z[2]),l(G[0],G[1],G[2]),l(V[0],V[1],V[2]),l(W[0],W[1],W[2]),N%2?b:g)}},x=t.w/2,_=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),S=(t.awning_pitch??12)*Math.PI/180,E=(P,B)=>{t.awning_valance!==!1&&p([-x+.04,P,B+.01],[x-.04,P,B+.01],[-x+.04,P-.2,B+.01],[x-.04,P-.2,B+.01],M)},y=t.variant??"arm";if(y==="side"){let P=e,B=.05,T=0,C=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,P+.05,T-.05,T+.05,f,d),u(x-.06,x,0,P+.05,T-.03,T+.03,f,d),a>.01&&p([-x+.1,P,T],[-x+.1,B,T],[C,P,T],[C,B,T],Math.max(4,Math.round((P-B)/.3))),h([C,B,T],[C,P,T],.02,m);return}if(y==="vertical"){let P=_,B=Math.min(t.d/2,_+v);u(-x,x,e,e+v,P,B,f,d);let T=(P+B)/2;for(let O of[-x+.02,x-.02])h([O,.02,T],[O,e,T],.02,m);let C=e-a*Math.max(0,e-.04);a>.01&&p([-x+.04,e,T],[x-.04,e,T],[-x+.04,C,T],[x-.04,C,T],M),h([-x+.03,C,T],[x-.03,C,T],.025,m);return}if(y==="pergola"){let P=t.d/2-.05,B=e+v,T=B-(P-_)*Math.tan(S);u(-x,x,e,B,_,_+v,f,d);for(let D of[-x+.05,x-.05])h([D,B,_+v],[D,T,P],.035,m),h([D,0,P],[D,T,P],.045,f);h([-x+.05,T,P],[x-.05,T,P],.035,m);let C=_+v+a*(P-_-v),O=B-(C-_)*Math.tan(S)+.04;a>.01&&p([-x+.08,B+.04,_+v],[x-.08,B+.04,_+v],[-x+.08,O,C],[x-.08,O,C],M),h([-x+.08,O,C],[x-.08,O,C],.025,m);return}let R=_,w=_+v;u(-x,x,e,e+v,R,w,f,d);let A=[w-.02,e+v*.35];if(y==="drop"){let P=Math.max(.3,t.d-v),B=[w,A[1]-P],T=a*(Math.PI/2+S),C=[B[0]+Math.sin(T)*P,B[1]+Math.cos(T)*P];for(let O of[-x+.08,x-.08])h([O,B[1],B[0]],[O,C[1],C[0]],.018,m);a>.01&&p([-x+.04,A[1],A[0]],[x-.04,A[1],A[0]],[-x+.04,C[1],C[0]],[x-.04,C[1],C[0]],M),h([-x+.02,C[1],C[0]],[x-.02,C[1],C[0]],.03,m),a>.05&&E(C[1],C[0]);return}let I=Math.max(0,t.d-v)*a,L=[A[0]+I,A[1]-I*Math.tan(S)];if(I>.01){p([-x+.04,A[1],A[0]],[x-.04,A[1],A[0]],[-x+.04,L[1],L[0]],[x-.04,L[1],L[0]],M);let P=Math.max(.3,(t.d-v)/2+.05);for(let B of[-1,1]){let T=B*(x-.12),C=[T,e+.02,w-.04],O=[T,L[1]-.02,L[0]],D=Math.hypot(O[2]-C[2],O[1]-C[1]),N=Math.sqrt(Math.max(0,P*P-(D/2)**2)),z=[T-B*Math.min(N,x-.15),(C[1]+O[1])/2,(C[2]+O[2])/2];h(C,z,.018,m),h(z,O,.018,m)}}h([-x+.02,L[1],L[0]],[x-.02,L[1],L[0]],.03,m),I>.05&&E(L[1],L[0])}function Pm(i,t,e,n,r){let o=i.p.length;o2(i,t,e,n,r),t.mirror&&Sf(i,o)}function o2(i,t,e,n,r){let o=t.rotation*ie,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*s-M*a,t.z+l*v*a+M*s],h=e+.05,u=e+t.h-.02,f=new tt(.75,.1,.14),d=new tt(U.dark),m=new tt(U.accent),b=t.w/2-.006,g=(v,M,S)=>{let E=S/p,y=new tt(2043212).lerp(f,E),R=new tt(U.body).lerp(f,E*.8),w=Math.cos(S),A=Math.sin(S),I=(B,T)=>c(v+M*(B*w-T*A),t.d/2+B*A+T*w),L=(B,T,C,O)=>{let[D,N,z,G]=B;i.tri([D[0],T,D[1]],[N[0],T,N[1]],[z[0],C,z[1]],O),i.tri([D[0],T,D[1]],[z[0],C,z[1]],[G[0],C,G[1]],O)},P=(B,T,C,O,D,N,z,G=z)=>{let V=[I(B,N),I(T,N),I(T,D),I(B,D)];L([V[0],V[1],V[1],V[0]],C,O,G),L([V[3],V[2],V[2],V[3]],C,O,z),L([V[0],V[3],V[3],V[0]],C,O,z),L([V[1],V[2],V[2],V[1]],C,O,z),L([V[0],V[1],V[2],V[3]],O,O,z),L([V[3],V[2],V[1],V[0]],C,C,z)};return P(0,b,h,u,-Rm,0,R,y),P(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,m),P},p=1.83;g(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*p)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function s2(i,t,e,n){rr(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.dark,U.dark,bt);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=o*e/.62;i.cyl(a,l,s,n,n+.004,U.dark,1451583,12,ee)}}function a2(i,t,e,n){rr(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,bt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,bt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,U.metal,U.metal,ee),i.cyl(0,-e/2+.05,.02,n,n+.28,U.metal,U.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,U.metal)}function l2(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,U.white,U.whiteTop,bt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,U.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,U.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,U.glass,U.glass,ee),i.cyl(-t/2+.04,0,.02,n,n+.12,U.metal,U.metal,8)}function c2(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,U.whiteTop,U.whiteTop,bt),i.cyl(0,0,.04,.05,.052,U.metal,U.metal,8);for(let[r,o,s,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,o,s,.05,a,ee),i.seg(r,n,o,s,n,a,ee),i.seg(s,.05,a,s,n,a,ee);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,U.metal,U.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,U.metal,U.metal,12,ee)}function u2(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,U.white,U.whiteTop,bt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,U.white,U.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,U.white,U.whiteTop,12,bt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,U.whiteTop)}function h2(i,t,e,n){rr(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,U.white,U.whiteTop,bt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,U.glass,U.glass,ee),i.cyl(0,-e/2+.06,.018,n,n+.2,U.metal,U.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,U.glass,U.glass,ee)}function f2(i,t,e,n){rr(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,U.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,U.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-e/2+.12,-e/2+.16,U.dark,U.dark,ee)}function d2(i,t,e,n){let r=Math.min(t,e)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,U.pot,U.pot,10,bt),i.cyl(0,0,r*.08,o,n*.55,U.wood,U.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),h=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-o)*.16,U.plant,U.plantTop,8,a===s-1?Ut:null)}}function p2(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,U.fabric,U.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,o,s,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,o,s,.014,a,bt)}function m2(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=e/r;for(let h=0;h<r;h++){let u=e/2-s*h,f=u-s,d=o*(h+1);i.box(-t/2,t/2,0,d,f,u,U.wood,U.woodTop),i.seg(-t/2,d,u,t/2,d,u,bt)}i.seg(-t/2,0,e/2,-t/2,o,e/2,bt);for(let h of[-t/2,t/2])i.seg(h,o,e/2,h,n,-e/2+s,Ut);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,e/2-s/2,l,o*c+a,e/2-s*(c-.5),ee);for(let h=0;h<c;h+=3){let u=e/2-s*(h+.5),f=o*(h+1);i.seg(l,f,u,l,f+a,u,Ut)}}function g2(i,t,e,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:h}=Pc(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,m=t/2,b=-e/2+l;for(let E=0;E<o;E++){let y=e/2-c*E,R=h*(E+1);i.box(u,f,0,R,y-c,y,U.wood,U.woodTop),i.seg(u,R,y,f,R,y,bt)}i.seg(u,0,e/2,u,h,e/2,bt);let g=h*r,p=.2;i.box(u,f,0,g,-e/2,b,U.wood,U.woodTop),i.box(f,m,Math.max(0,g-p),g,-e/2,b,U.wood,U.woodTop),i.seg(u,g,b,f,g,b,bt);for(let E=0;E<s;E++){let y=b+c*E,R=h*(r+1+E);i.box(d,m,Math.max(0,R-h-p),R,y,y+c,U.wood,U.woodTop),i.seg(d,R,y,m,R,y,bt)}i.seg(u,h,e/2,u,g,b,Ut),i.seg(m,g,b,m,n,b+c*(s-1),Ut);let x=.9,_=f-.03,v=d+.03,M=b-.03,S=Math.max(1,s-4);i.seg(_,h+x,e/2-c/2,_,g+x,M,ee),i.seg(_,g+x,M,v,g+x,M,ee),i.seg(v,g+x,M,v,h*(r+S)+x,b+c*(S-.5),ee);for(let E=0;E<o;E+=3){let y=e/2-c*(E+.5);i.seg(_,h*(E+1),y,_,h*(E+1)+x,y,Ut)}for(let E of[_,v])i.seg(E,g,M,E,g+x,M,Ut);for(let E=2;E<S;E+=3){let y=b+c*(E+.5);i.seg(v,h*(r+1+E),y,v,h*(r+1+E)+x,y,Ut)}}function b2(i,t,e,n){Or(i,t,e,.12,.03,.04,U.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,U.wood,U.woodTop,bt),Ws(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function x2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,U.wood,U.woodTop,bt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,U.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=e/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-t/2,a,o,t/2,a,o,Ut)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,ee)}}function v2(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,U.wood,U.woodTop,bt),Ws(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,U.body,U.bodyTop,bt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,bt);let r=Math.max(2,Math.round(t/.25));for(let o=0;o<r;o++){let s=-t/2+t/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,U.metal,U.metal)}}function wm(i,t,e,n,r){let s=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+s,U.wood,U.woodTop,bt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,U.wood,U.woodTop,bt),i.box(-t/2+(r?s:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+s,U.cushion,U.cushion,Ut),r&&(i.box(-t/2,-t/2+s,0,.45-.06,-e/2+s,e/2,U.wood,U.woodTop,bt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,U.wood,U.woodTop,bt),i.box(-t/2+a,-t/2+s,.45-.06,.45+.02,-e/2+a,e/2-.02,U.cushion,U.cushion,Ut))}function y2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,U.metal,U.metal,12),i.cyl(0,0,.025,.02,n-.05,U.metal,U.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,U.metal,U.metal,12,Ut),i.cyl(0,0,r,n-.05,n,U.cushion,U.fabricTop,14,bt)}function _2(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,U.metal),i.box(-.03,.03,.04,.08,-r,r,U.metal),i.cyl(0,0,.06,.02,.1,U.dark,U.dark,8),i.cyl(0,0,.025,.1,.44,U.metal,U.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,U.fabric,U.cushion,bt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,U.fabric,U.fabricTop,bt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,U.metal)}function M2(i,t,e,n){Or(i,t,e,.08,.04,.05,U.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,U.fabric,U.cushion,bt)}function w2(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,U.body,U.bodyTop,bt),Ws(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function S2(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,bt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,U.dark,U.dark,ee),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,ee);for(let o of[.85,1.45])i.seg(-t/2,o,r,t/2,o,r,Ut);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,ee),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,ee)}function T2(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,U.body,U.bodyTop,bt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,U.dark),Ws(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,bt)}function A2(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,U.body,U.bodyTop,bt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,ee),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,bt)}function Sm(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,U.white,U.whiteTop,bt);let o=e/2-.012;i.seg(-t/2,n-.14,o,t/2,n-.14,o,Ut),i.seg(t/2-.16,n-.07,o,t/2-.08,n-.07,o,ee);let s=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,s+Math.sin(h)*a,o,Math.cos(u)*a,s+Math.sin(u)*a,o,ee),r||i.seg(Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Ut)}}function E2(i,t,e,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(t/2)-(s>0?.05:0),s*(t/2)+(s<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),U.wood,U.woodTop);for(let s of[.25,n-.55])i.box(-t/2,t/2,s,s+.08,-e/2,e/2,U.wood,U.woodTop,bt),i.box(-t/2+.04,t/2-.04,s+.08,s+.24,-e/2+.05,e/2-.05,U.white,U.whiteTop,Ut),i.box(-t/2+.05,t/2-.05,s+.24,s+.33,-e/2+.08,-e/2+.4,U.whiteTop,U.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,U.wood,U.woodTop);let o=t/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,e/2+.02,s,n-.15,e/2+.02,bt);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,e/2+.02,o+.18,s,e/2+.02,Ut)}function R2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,U.metal,U.metal,12),i.cyl(0,0,.05,.03,n-.04,U.wood,U.wood,8),i.cyl(0,0,r,n-.04,n,U.wood,U.woodTop,20,bt)}function C2(i,t,e,n){Or(i,t,e,n-.03,.04,.03,U.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,U.wood,U.woodTop,bt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,U.body,U.bodyTop,Ut)}function P2(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,U.dark,U.dark,ee)}function I2(i,t,e,n){let r=Mf;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,U.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,U.white,U.whiteTop,bt);let o=Math.max(3,Math.round(t/.1));for(let s=1;s<o;s++){let a=-t/2+t/o*s;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Ut)}}function L2(i,t,e,n){let r=wf;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,U.white,U.whiteTop,bt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,U.white,U.white,bt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,U.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Ut),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,ee)}function Oo(i,t,e,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,ee)}}function F2(i,t,e,n,r){let s=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.dark,U.body,bt),i.seg(-t*.25,1.1+n*.15,s+.004,-t*.25,1.1+n*.85,s+.004,ee),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,s,s+.005,U.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,bt),Oo(i,0,1.1+n*.66,Math.min(t,n)*.22,s+.004),i.seg(-t*.08,1.1+n*.66,s+.005,t*.08,1.1+n*.66,s+.005,ee);for(let a of[-1,1])Oo(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,bt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,U.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,ee);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Ut)}function D2(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,U.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,U.metal,U.metal,bt);for(let s of[-t*.4,-t*.25,-t*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Ut);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,U.dark,U.body,14,bt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,U.glass,U.glass,14);let o=Math.min(t*.2,e*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,t*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,ee)}}function O2(i,t,e,n,r){let o=Math.min(t,e)/2;if(i.cyl(0,0,o*.95,0,n*.08,U.dark,U.dark,16),i.cyl(0,0,o,n*.08,n*.78,U.dark,U.body,18,bt),i.cyl(0,0,o*.75,n*.78,n*.84,U.dark,U.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,U.dark,U.metal,bt),Oo(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,U.dark,U.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,U.dark,U.metal,16,bt);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,ee)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,U.dark,U.body)}function N2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,U.white,U.whiteTop,bt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,U.dark);let r=Math.min(n*.38,t*.3),o=-t*.15,s=n*.53;Oo(i,o,s,r,e/2+.004,24),Oo(i,o,s,r*.55,e/2+.004,16),i.seg(o-r,s,e/2+.005,o+r,s,e/2+.005,Ut),i.seg(o,s-r,e/2+.005,o,s+r,e/2+.005,Ut),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,U.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,ee);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Ut)}function U2(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,U.white,U.whiteTop,bt);for(let o of[-1,1])Oo(i,o*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,ee);for(let o of[-1,1])i.box(o*t*.25-t*.18,o*t*.25+t*.18,0,n*.5,-e/2,e/2,U.white,U.glass,Ut)}function B2(i,t,e,n){let r=R0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,U.metal,U.metal,bt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,U.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,U.accent,U.accent)}function k2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.dark,U.body,bt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,U.dark,U.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,ee),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Ut)}function z2(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,U.dark,U.body,bt);let o=Math.min(t,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,e/2+.003,Math.cos(h)*o,s+Math.sin(h)*o,e/2+.003,ee)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,U.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,U.dark,U.body)}function V2(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,U.white,U.whiteTop,bt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Ut),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Ut),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,U.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,U.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,ee)}function G2(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,U.white,U.whiteTop,bt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,ee),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Ut);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,U.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,U.dark,U.body,bt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,ee),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,U.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,U.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-t/2,t/2,.06+a*s+.004,.06+(a+1)*s,-e/2,e/2,U.white,U.whiteTop,bt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,ee)}}var Mf=.12,wf=2.05;function Im(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function Tf(i,t){let e=H2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function H2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=b0(i.type);if(o){let l=t?ln(t,i):0,c=(o.x-o.w/2)*e,h=(o.x+o.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+o.y*r+u,y1:l+(o.y+o.h)*r-u,z:(o.z+o.d/2)*n}}let s=t&&i.type!=="fridge_smart"?ln(t,i)-Ar(i):0,a=W2(i,e,n,r,t);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function W2(i,t,e,n,r){if(i.type==="pool_pump"){let o=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let o=Math.min(t,e)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?ln(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Mf+.02,y1:Mf+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:wf+.015,y1:wf+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function X2(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=xe(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function Y2(i,t,e,n,r,o=!1,s=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new tt(1-r,1-r,1-r),c=new tt(1,1,1),h=s+.003;if(o){let b=v=>[v[0],h,v[1]],p=(v,M,S)=>t(Math.cos(v/24*2*Math.PI)*M,Math.sin(v/24*2*Math.PI)*S),x=i.p.length,_=b(t(0,0));for(let v=0;v<24;v++){let M=b(p(v,e/2,n/2)),S=b(p(v+1,e/2,n/2)),E=b(p(v,e/2+a,n/2+a)),y=b(p(v+1,e/2+a,n/2+a));i.tri(_,M,S,l),i.tri(M,E,y,l,c,c),i.tri(M,y,S,l,c,l)}_f(t)&&Sf(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],h,b[1]],m=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(u[b]),d(f[b]),d(f[g]),l,c,c),i.tri(d(u[b]),d(f[g]),d(u[g]),l,c,l)}_f(t)&&Sf(i,m)}function Hc(i,t,e,n,r=0,o=!1){q2(i,t,e,n,r,o)}function Sf(i,t){let e=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function q2(i,t,e,n,r,o=!1){let s=xe(n.type)?0:r-Ar(n);if(xe(n.type)||Math.abs(s)<.001)return Tm(i,t,e,n,r,o);let a=i.p.length,l=t.p.length,c=e.p.length;Tm(i,t,r<.05?e:new te,n,0);for(let h=a+1;h<i.p.length;h+=3)i.p[h]+=s;for(let h=l+1;h<t.p.length;h+=3)t.p[h]+=s;if(r<0)for(let h=c+1;h<e.p.length;h+=3)e.p[h]+=s}function Tm(i,t,e,n,r,o=!1){let s=n.rotation*ie,a=Math.cos(s),l=Math.sin(s),c=n.mirror?-1:1,h=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],u=new or(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),m=Math.max(.005,n.h);switch(n.type){case"sofa":_m(u,f,d,m,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":_m(u,f,d,m,1);break;case"sofa_l":Mm(u,f,d,m,!1);break;case"sofa_u":Mm(u,f,d,m,!0);break;case"bed":YM(u,f,d,m);break;case"chair":qM(u,f,d,m);break;case"table":$M(u,f,d,m);break;case"desk":ZM(u,f,d,m);break;case"nightstand":rr(u,f,d,m,1,m*.72,!0),u.seg(-f/2,m*.5,d/2-.02,f/2,m*.5,d/2-.02,Ut);break;case"wardrobe":rr(u,f,d,m,Math.max(2,Math.round(f/.5)),m*.5);break;case"shelf":KM(u,f,d,m);break;case"kitchen":JM(u,f,d,m);break;case"fridge":jM(u,f,d,m);break;case"fridge_smart":r2(u,f,d,m);break;case"waste_bin":{let b=i.c.length;QM(u,f,d,m,um(n),pm(n,dm())),Hs&&Em(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;i2(u,f,d,m,hm(n));let p=Ar(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=p;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=p;if(p>0)return;break}case"wifi_ap":e2(u,f,d,m,n.variant==="wall");return;case"water_heater":if(n2(u,f,d,m,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;t2(u,f,d,m,L0(n).length,n.type==="wall_socket",n.variant==="outdoor");let p=Ar(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=p;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=p;return}case"awning":return;case"stove":s2(u,f,d,m);break;case"sink":a2(u,f,d,m);break;case"bathtub":l2(u,f,d,m);break;case"shower":c2(u,f,d,m);break;case"wc":u2(u,f,d,m);break;case"washbasin":h2(u,f,d,m);break;case"tv_board":f2(u,f,d,m);break;case"plant":d2(u,f,d,m);break;case"rug":p2(u,f,d);return;case"stairs":m2(u,f,d,m);break;case"stairs_u":g2(u,f,d,m);break;case"stairwell":return;case"sideboard":b2(u,f,d,m);break;case"dresser":x2(u,f,d,m);break;case"tall_cabinet":rr(u,f,d,m,1,m*.5);break;case"coat_rack":v2(u,f,d,m);break;case"bench":wm(u,f,d,m,!1);break;case"corner_bench":wm(u,f,d,m,!0);break;case"bar_stool":y2(u,f,d,m);break;case"office_chair":_2(u,f,d,m);break;case"stool":M2(u,f,d,m);break;case"kitchen_wall":w2(u,f,d,m);return;case"kitchen_tall":S2(u,f,d,m);break;case"island":T2(u,f,d,m);break;case"worktop":u.box(-f/2,f/2,Math.max(0,m-.04),m,-d/2,d/2,U.whiteTop,U.whiteTop,bt);return;case"dishwasher":A2(u,f,d,m);break;case"washer":Sm(u,f,d,m,!1);break;case"dryer":Sm(u,f,d,m,!0);break;case"bunk_bed":E2(u,f,d,m);break;case"table_round":R2(u,f,d,m);break;case"coffee_table":C2(u,f,d,m);break;case"tv_wall":P2(u,f,d,m);return;case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let p=0;p<4;p++)u.seg(g[p][0],.012,g[p][1],g[(p+1)%4][0],.012,g[(p+1)%4][1],Ut);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,bt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,bt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,m,-d/2,-d/2+d*.3,U.white,U.whiteTop,bt),u.box(-f*.2,f*.2,m*.5,m*.62,-d/2+d*.3,-d/2+d*.31,U.accent);return;case"radiator":I2(u,f,d,m);return;case"ac_unit":L2(u,f,d,m);return;case"inverter":F2(u,f,d,m,n.variant??null);return;case"grid_point":k2(u,f,d,m);break;case"wallbox":z2(u,f,d,m);return;case"pool_pump":D2(u,f,d,m);break;case"pool_filter":O2(u,f,d,m,n.variant??null);break;case"pool_heat_pump":N2(u,f,d,m);break;case"pool_dosing":U2(u,f,d,m);break;case"pool_valve":B2(u,f,d,m);return;case"meter":V2(u,f,d,m);return;case"home_battery":if(G2(u,f,d,m,n.variant??null),n.variant==="wall")return;break;default:{let b=xe(n.type);if(b){let g=_c(n.type),p=g?x=>Xh(g,x):m0(n.type)&&!o?Os:null;if(Xs(u,b,f,d,m,r,null,null,p),r>.05)return}else u.box(-f/2,f/2,0,m,-d/2,d/2,U.body,U.bodyTop,bt)}}Y2(e,h,f,d,n.type==="plant"?.35:.5,X2(n),Math.min(0,r))}function Lm(i){return!!xe(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function yf(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=U;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Xs(i,t,e,n,r,o,s,a=null,l=null){let c=!!a,h=t.parts.some(u=>u.advent)?p0():4;for(let u of Gs(t,e,n,r)){if(l?.(u)||u.advent&&u.advent>h||a&&!a(u))continue;let f=c?{...u,glow:!0,w:u.w+.006/e,d:u.d+.006/n,y:Math.max(0,u.y-.002/r),h:u.h+.004/r}:u,d=f.glow&&s!==null,m=d?s:yf(f.color,!1)??U.body,b=d?s:yf(f.top,!1)??yf(f.color,!0)??Nt(m,1.25).getHex(),g=o+f.y*r,p=o+Math.min(r,(f.y+f.h)*r),x=i.colors.length,_=f.edges==="glow"?nr:f.edges==="faint"?Ut:f.edges?bt:null,v=f.rot?i.rotated(f.x*e,f.z*n,f.rot):i;if(f.shape==="mesh"&&f.vertices&&f.triangles)v.mesh(f.vertices.map(([M,S,E])=>[(f.x+M*f.w)*e,g+S*(p-g),(f.z+E*f.d)*n]),f.triangles,m);else if(f.shape==="poly"&&f.points)v.polygon(f.points.map(([M,S])=>[(f.x+M*f.w)*e,(f.z+S*f.d)*n]),g,p,m,b,_);else if(f.shape==="cyl"&&(f.axis==="x"||f.axis==="z"))v.lyingCyl(f.axis,f.x*e,f.z*n,g,p,f.axis==="x"?f.w*e:f.d*n,f.axis==="x"?f.d*n:f.w*e,m,b,14,_);else if(f.shape==="cyl")v.cyl(f.x*e,f.z*n,Math.min(f.w*e,f.d*n)/2,g,p,m,b,14,_);else if(f.shape==="loft"){let M=f.tx??f.x,S=f.tz??f.z,E=f.tw??f.w,y=f.td??f.d;v.loft([(f.x-f.w/2)*e,(f.x+f.w/2)*e,(f.z-f.d/2)*n,(f.z+f.d/2)*n],[(M-E/2)*e,(M+E/2)*e,(S-y/2)*n,(S+y/2)*n],g,p,m,b,_)}else v.box((f.x-f.w/2)*e,(f.x+f.w/2)*e,g,p,(f.z-f.d/2)*n,(f.z+f.d/2)*n,m,b,_);Hs&&!d&&!c&&(f.color?.startsWith("#")||f.top?.startsWith("#"))&&Em(i.colors,x)}}function Fm(i,t,e,n,r,o){let s=o*ie,a=Math.cos(s),l=Math.sin(s),c=(m,b)=>[e+m*a-b*l,r+m*l+b*a],h=new or(i,new Oe,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,U.accent,U.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,U.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Dm(i,t,e,n,r){let o=g0(t)*n,s=new or(i,new Oe,(c,h)=>[c,h-o]);Xs(s,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Os);let a=0,l=0;for(let c of Gs(t,e,n,r)){if(!Os(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function Ys(i,t,e,n,r,o=s=>!!s.glow){let s=e.rotation*ie,a=Math.cos(s),l=Math.sin(s),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Xs(new or(i,new Oe,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,o)}function Om(i,t,e,n,r,o){let s=$2(t,e,o,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ie,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];Xs(new or(i,new Oe,u),{...t,parts:s},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function $2(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),o=i.parts.filter(a=>Xh(t,a)),s;if(t==="curtain")s=o.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...o.map(c=>c.y+c.h)),l=Math.max(.02,1-r);s=o.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return s}function Nm(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=0,a=0,l=0,c=0;for(let g of Gs(i,n,r,o)){if(!g.glow)continue;let p=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,_=g.y*o,v=Math.min(o,(g.y+g.h)*o),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,v-_));s+=M,a+=p*M,l+=(_+v)/2*M,c+=x*M}if(!s)return null;let h=a/s,u=c/s,f=t.rotation*ie,d=Math.cos(f),m=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*m,e+l/s,t.z+b*h*m+u*d]}function Um(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=[];for(let u of Gs(i,n,r,o)){if(!u.glow)continue;let f=(u.x+(u.shape==="loft"?u.tx??u.x:u.x))/2*n,d=(u.z+(u.shape==="loft"?u.tz??u.z:u.z))/2*r,m=u.y*o,b=Math.min(o,(u.y+u.h)*o),g=Math.max(u.w*n,u.d*r)/2;s.find(x=>Math.hypot(x.x-f,x.z-d)<x.r+g+.01)||s.push({x:f,y:(m+b)/2,z:d,r:g})}let a=t.rotation*ie,l=Math.cos(a),c=Math.sin(a),h=t.mirror?-1:1;return s.map(u=>[t.x+h*u.x*l-u.z*c,e+u.y,t.z+h*u.x*c+u.z*l])}function Wc(i,t,e,n,r){let o=e.rotation*ie,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*s-u*a,e.z+l*h*a+u*s];Xs(new or(i,new Oe,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var Z2={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function K2(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],o=e[1]-t[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-o*u)/(s*d))>.05)return!1;let m=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*m-n[0],l[1]+f*m-n[1])<.4}))}var J2=3229309,j2=5995775;function Q2(i,t){let{p:e,q:n}=t,r=Math.hypot(n[0]-e[0],n[1]-e[1])||1,o=[-(n[1]-e[1])/r,(n[0]-e[0])/r],s=(t.s0+t.s1)/2/r,a=[e[0]+(n[0]-e[0])*s,e[1]+(n[1]-e[1])*s],l=[a[0]+o[0]*.05,a[1]+o[1]*.05],c=di(i.points),u=((i.open?(c[0]-a[0])*o[0]+(c[1]-a[1])*o[1]>0:Yt(l,i.points))?1:-1)*(t.gate.outward?-1:1);return[o[0]*u,o[1]*u]}function km(i,t,e,n,r){let{gate:o,p:s,q:a,s0:l,s1:c}=n,h=Math.hypot(a[0]-s[0],a[1]-s[1])||1,u=[(a[0]-s[0])/h,(a[1]-s[1])/h],f=Q2(e,n),d=y=>[s[0]+u[0]*y,s[1]+u[1]*y],m=d((l+c)/2),b=ji(t,e)-Ro(t,e,m[0],m[1]),g=Math.max(.4,(e.height??Rr.fence)-.05),p=Math.min(1,Math.max(0,r)),x=(y,R,w,A,I,L)=>{let P=[-R[1]*(A/2),R[0]*(A/2)],B=[y[0]+R[0]*w,y[1]+R[1]*w];Re(i,No([[y[0]+P[0],y[1]+P[1]],[B[0]+P[0],B[1]+P[1]],[B[0]-P[0],B[1]-P[1]],[y[0]-P[0],y[1]-P[1]]]),b+I,b+L,J2,j2)},_=(y,R,w)=>{if(w<.1)return;let A=[y[0]+R[0]*.03,y[1]+R[1]*.03],I=w-.06;x(A,R,I,.04,.08,.15),x(A,R,I,.04,g-.07,g);let L=Math.max(1,Math.round(I/.12));for(let P=0;P<=L;P++){let B=Math.min(I-.03,I*P/L);x([A[0]+R[0]*B,A[1]+R[1]*B],R,.03,P===0||P===L?.05:.025,.08,g)}},v=(y,R)=>[y[0]*Math.cos(R)+f[0]*Math.sin(R),y[1]*Math.cos(R)+f[1]*Math.sin(R)],M=p*Math.PI*.5,S=c-l,E=o.kind??"swing";if(E==="slide"){let y=o.flip?1:-1,R=d(l+y*p*S);_([R[0]+f[0]*.08,R[1]+f[1]*.08],u,S)}else E==="double"?(_(d(l),v(u,M),S/2),_(d(c),v([-u[0],-u[1]],M),S/2)):o.flip?_(d(c),v([-u[0],-u[1]],M),S):_(d(l),v(u,M),S)}function Af(i,t){return t.type==="pool"?Cc(i,t):ji(i,t)+(Mn(t.type)?.01:Rr[t.type])}function No(i){return Pn(i)>=0?i:[...i].reverse()}function tw(i,t){let e=i[t];if(Mn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===t||!(o.cut&&r>t||o.type==="pool")||o.points.length<3||o.points.every(s=>Yt(s,e.points))&&n.push(No(o.points))}return n}function Bm(i,t,e,n,r,o,s,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Re(i,No([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,o,s,a,{aoFrom:r-1});return}let m=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Jt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Jt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Jt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Jt)},p=new tt(a),x=new tt(Nt(s,.9)),_=new tt(Nt(s,.6));g([m(o,1),b(o,1),b(o,-1),m(o,-1)],p),g([m(r,1),b(r,1),b(r,-1),m(r,-1)],_),g([m(r,1),b(r,1),b(o,1),m(o,1)],x),g([m(r,-1),b(r,-1),b(o,-1),m(o,-1)],x),g([m(r,1),m(r,-1),m(o,-1),m(o,1)],x),g([b(r,1),b(r,-1),b(o,-1),b(o,1)],x)}function zm(i,t,e,n){let r=e.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=ji(e,o),l=(x,_)=>a-Ro(e,o,x,_),c=a-(o.type==="pool"?0:o.slope??0),h=Mn(o.type)&&o.height?o.height:Rr[o.type],u={...Z2[o.type],top:h},f=No(o.points),d=Nt(u.edge,u.edgeAlpha),m=o.open&&(o.type==="fence"||o.type==="pergola")?f.length-1:-1,b=x=>{if(o.outline!==!1)for(let _=0;_<f.length;_++){if(_===m)continue;let v=f[_],M=f[(_+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,Jt)}},g=n??i,p=new tt(n?1734832:u.color);switch(o.type){case"pool":{let x=new tt(u.side),_=new tt(Nt(u.side,.55)),v=new tt(932440),M=Cc(e,o),S=Rc(e,o),E=A0(e,o);for(let[y,R,w]of rn(f)){let A=f[y],I=f[R],L=f[w];(n?g:i).tri([A[0],M,A[1]],[L[0],M,L[1]],[I[0],M,I[1]],p,p,p,void 0,Jt),i.tri([A[0],E,A[1]],[L[0],E,L[1]],[I[0],E,I[1]],v,v,v,void 0,Jt)}for(let y=0;y<f.length;y++){let R=f[y],w=f[(y+1)%f.length];i.tri([w[0],E,w[1]],[w[0],S,w[1]],[R[0],S,R[1]],_,x,x,void 0,Jt),i.tri([w[0],E,w[1]],[R[0],S,R[1]],[R[0],E,R[1]],_,x,_,void 0,Jt)}if(!o.above&&Zh(e,o)){let y=new tt(660258),R=new tt(396054),w=E-.2,A=Math.min(a,S);for(let I=0;I<f.length;I++){let L=f[I],P=f[(I+1)%f.length];i.tri([L[0],w,L[1]],[L[0],A,L[1]],[P[0],A,P[1]],R,y,y,void 0,Jt),i.tri([L[0],w,L[1]],[P[0],A,P[1]],[P[0],w,P[1]],R,y,R,void 0,Jt)}for(let[I,L,P]of rn(f)){let B=f[I],T=f[L],C=f[P];i.tri([B[0],w,B[1]],[T[0],w,T[1]],[C[0],w,C[1]],R,R,R,void 0,Jt)}if(o.outline!==!1)for(let I=0;I<f.length;I++){let L=f[I],P=f[(I+1)%f.length];t.seg([L[0],w,L[1]],[P[0],w,P[1]],Nt(u.edge,u.edgeAlpha*.35),Jt),t.seg([L[0],w,L[1]],[L[0],A,L[1]],Nt(u.edge,u.edgeAlpha*.25),Jt)}}if(S>a+.02){let y=new tt(2044240),R=new tt(1187123);for(let w=0;w<f.length;w++){let A=f[w],I=f[(w+1)%f.length];i.tri([A[0],a,A[1]],[A[0],S,A[1]],[I[0],S,I[1]],R,y,y,void 0,Jt),i.tri([A[0],a,A[1]],[I[0],S,I[1]],[I[0],a,I[1]],R,y,R,void 0,Jt)}b(()=>a+.005)}if(b(()=>S),b(()=>M+.005),o.outline!==!1)for(let y=0;y<f.length;y++){let R=f[y],w=f[(y+1)%f.length];t.seg([R[0],E+.005,R[1]],[w[0],E+.005,w[1]],Nt(u.edge,u.edgeAlpha*.4),Jt)}break}case"fence":{let x=o.points,_=x.length-1,v=Ec(o),M=(S,E,y)=>{let R=l(S,E);Re(i,No([[S-y,E-y],[S+y,E-y],[S+y,E+y],[S-y,E+y]]),R,R+u.top,u.side,u.color)};for(let S=0;S<x.length;S++){if(o.open&&S===_)continue;let E=x[S],y=x[(S+1)%x.length],R=Math.hypot(y[0]-E[0],y[1]-E[1]);if(R<1e-6)continue;let w=B=>[E[0]+(y[0]-E[0])*B/R,E[1]+(y[1]-E[1])*B/R],A=v.filter(B=>B.gate.edge===S).sort((B,T)=>B.s0-T.s0),I=[],L=0;for(let B of A)B.s0>L+.01&&I.push([L,B.s0]),L=Math.max(L,B.s1);R>L+.01&&I.push([L,R]);let P=o.open&&S===_-1;for(let[B,T]of I){let C=Math.max(1,Math.round((T-B)/2)),O=B>1e-6?1:0,D=T>=R-1e-6&&P?C:C-1;for(let G=O;G<=D;G++){let[V,W]=w(B+(T-B)*G/C);M(V,W,.04)}let N=w(B),z=w(T);for(let G of[.35,.85])t.seg([N[0],l(N[0],N[1])+G*u.top,N[1]],[z[0],l(z[0],z[1])+G*u.top,z[1]],d,Jt)}for(let B of A)for(let T of[B.s0,B.s1])M(...w(T),.055)}break}case"pergola":{let x=u.top;for(let[_,v]of f){let M=l(_,v);Re(i,No([[_-.06,v-.06],[_+.06,v-.06],[_+.06,v+.06],[_-.06,v+.06]]),M,M+x,u.side,u.color)}for(let _=0;_<f.length;_++){if(_===m)continue;let v=f[_],M=f[(_+1)%f.length],S=l(v[0],v[1])+x;if(Bm(i,v,M,.12,S-.16,S,u.side,u.color,l(M[0],M[1])-l(v[0],v[1])),o.bracing){let E=l(v[0],v[1]),y=l(M[0],M[1]);t.seg([v[0],E+.25,v[1]],[M[0],y+x-.25,M[1]],d,Jt),t.seg([M[0],y+.25,M[1]],[v[0],E+x-.25,v[1]],d,Jt)}}if(O0(f)){let _=N0(f),v=_.x1-_.x0,M=_.z1-_.z0,S=v>=M,E=S?v:M,y=Math.max(1,Math.round(E/.6));for(let R=1;R<y;R++){let w=(S?_.x0:_.z0)+E*R/y,A=S?[w,_.z0+.06]:[_.x0+.06,w],I=S?[w,_.z1-.06]:[_.x1-.06,w],L=l(A[0],A[1])+x;Bm(i,A,I,.06,L-.04,L+.08,u.side,u.color,l(I[0],I[1])-l(A[0],A[1]))}}b((_,v)=>l(_,v)+x+.004);break}case"balcony":{Re(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let _=o.height&&o.height>.3?o.height:1,v=Nt(9417983,.42),M=Nt(3662079,.55);for(let S=0;S<f.length;S++){let E=f[S],y=f[(S+1)%f.length];if(K2(e,E,y))continue;let R=Math.hypot(y[0]-E[0],y[1]-E[1]),w=a+u.top;t.seg([E[0],w+_,E[1]],[y[0],w+_,y[1]],M,Jt),t.seg([E[0],w+.1,E[1]],[y[0],w+.1,y[1]],v,Jt);let A=Math.max(1,Math.round(R/.12));for(let I=0;I<=A;I++){let L=I/A,P=E[0]+(y[0]-E[0])*L,B=E[1]+(y[1]-E[1])*L;t.seg([P,w,B],[P,w+_,B],I===0||I===A?M:v,Jt)}}break}default:{let x=(v,M)=>l(v,M)+u.top,_=tw(r,s);if(Re(i,f,c,o.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:_}),b((v,M)=>x(v,M)+.004),o.type==="hedge"&&b((v,M)=>l(v,M)+.004),o.outline!==!1)for(let v of _)for(let M=0;M<v.length;M++){let S=v[M],E=v[(M+1)%v.length];t.seg([S[0],x(S[0],S[1])+.004,S[1]],[E[0],x(E[0],E[1])+.004,E[1]],d,Jt)}}}})}var Yc=Math.PI/180,ew=1.13,nw=1.72,Ef=.025,Nr=.07,Vm=.25;function Gm(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=mi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,h=-s/l,u=Math.min(n.height,o.height??n.height),f=o.sources.find(b=>b.room_id===o.roomLeft)?.edge??null,d={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},m=(b,g,p,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:p,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});m(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+h*o.right],[s/l,0,a/l],[c,0,h]),o.free&&m(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-h*o.left],[-s/l,0,-a/l],[-c,0,-h])}}return e}var Rf="ground";function ar(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Hm(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],o=ar(i),s=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:Mc(o,s,a)):t.base??0;return{key:Rf,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function iw(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Cf(i,t){let e=i.settings.roof?.frame;if(e&&e.length===4&&e.every(o=>Number.isFinite(o)))return e;let n=t.rooms.flatMap(o=>o.points.map(s=>s[0])),r=t.rooms.flatMap(o=>o.points.map(s=>s[1]));return[Math.min(...n),Math.min(...r),Math.max(...n),Math.max(...r)]}function Br(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>rw(v,Nc(i,v,v.overhang??t.overhang)));let e=iw(i);if(!e)return[];let[n,r,o,s]=Cf(i,e),a=i.settings.wall_exterior+t.overhang,l=n-a,c=o+a,h=r-a,u=s+a,f=e.elevation+e.height;if(t.type==="flat")return[Wm("main",null,l,h,c,u,f+Vm)];let d=c-l>=u-h,m=t.ridge==="short"?!d:d,b=(m?u-h:c-l)/2,g=b*Math.tan(t.pitch*Yc),p=(v,M,S)=>m?[v,f+S,(h+u)/2+M]:[(l+c)/2+M,f+S,v],[x,_]=m?[l,c]:[h,u];return[-1,1].map(v=>Xc(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",p(x,v*b,0),p(_,v*b,0),p(x,0,g),t.pitch,()=>[0,_-x]))}function rw(i,t){let e=nn(i),n=cn(i),r=(_,v,M)=>{let[S,E]=e.at(_,v);return[S,M,E]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-o),v=e.at(l,e.w+s);return[Wm(i.id,i.id,Math.min(_[0],v[0]),Math.min(_[1],v[1]),Math.max(_[0],v[0]),Math.max(_[1],v[1]),i.eave_a+Vm)]}if(i.shape==="pent")return[Xc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,e.w+s,n.y(e.w+s)),i.pitch_a,()=>[0,c])];let h=Oc(i),u=h?of(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",m=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,g=f?e.u0+m-a:0,p=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let _=Math.hypot(n.vr+o,n.rh-n.y(-o));x.push(Xc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,v=>[g*(v/_),c-p*(v/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));x.push(Xc(`${i.id}:b`,i.id,"b",r(l,e.w+s,n.y(e.w+s)),r(a,e.w+s,n.y(e.w+s)),r(l,n.vr,n.rh),i.pitch_b,v=>[p*(v/_),c-g*(v/_)]))}if(f||d){let _=n.y(-o),v=n.y(e.w+s),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+s,v),r(a,-o,_),r(e.u0+m,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-o,_),r(l,e.w+s,v),r(e.u1-b,n.vr,n.rh)]);for(let[S,E,y,R,w]of M){let A=ow(S,i.id,E,y,R,w);A&&x.push(A)}}return x}function ow(i,t,e,n,r,o){let s=qs(Ur(r,n));if(s<.3)return null;let a=sr(Ur(r,n)),l=Ur(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=qs(h);if(u<.3)return null;let f=sr(h),d=sr(qm(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=sr([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Yc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:s,ls:u,pitch:b,span:p=>{let x=Math.min(1,Math.max(0,p/u));return[c*x,s-(s-c)*x]},facing:[m[0],m[2]]}}function Xc(i,t,e,n,r,o,s,a){let l=sr(Ur(r,n)),c=sr(Ur(o,n)),h=sr(qm(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=sr([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:qs(Ur(r,n)),ls:qs(Ur(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function Wm(i,t,e,n,r,o,s){let a=r-e>=o-n,l=a?r-e:o-n,c=a?o-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Xm(i){let t=i.module_w||ew,e=i.module_h||nw;return i.portrait===!1?[e,t]:[t,e]}function sw(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Ym(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Yc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Yc:0}function aw(i,t){let[,e]=Xm(t),n=Ym(i,t);return i.wall?e*Math.cos(n)+Ef:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Ef}function $s(i,t,e=!1){let[n,r]=Xm(t),o=[],s=Ym(i,t),a=r*Math.cos(s),l=aw(i,t),c=sw(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,p)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*p,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*p,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*p],m=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[p,x]=i.span(g);return b>=p-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let p=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let _=`${g}:${x}`,v=u.has(_);if(v&&!e)continue;let M=t.u+(x+p)*(n+Ef),S=t.v+g*l,E=M+n,y=S+(i.flat||i.wall?a:r);if(f){if(!(m((M+E)/2,S)&&m((M+E)/2,y)))continue}else if(![[M,S],[E,S],[E,y],[M,y]].every(([P,B])=>m(P,B)))continue;if(i.wall&&s>.001){let P=Nr+r*Math.sin(s),[B,T]=t.flip?[P,Nr]:[Nr,P],C=[d(M,S,B),d(E,S,B),d(E,y,T),d(M,y,T)],O=t.flip?S:y,D=[M+.05,E-.05].map(N=>[d(N,O,0),d(N,O,P)]);o.push({corners:C,posts:D,cell:_,skipped:v});continue}if(!i.flat){o.push({corners:[d(M,S,Nr),d(E,S,Nr),d(E,y,Nr),d(M,y,Nr)],posts:[],cell:_,skipped:v});continue}let R=.15,w=R+r*Math.sin(s),[A,I]=t.flip?[y,S]:[S,y],L=[d(M,A,R),d(E,A,R),d(E,I,w),d(M,I,w)];o.push({corners:L,posts:[M+.05,E-.05].flatMap(P=>[[d(P,A,0),d(P,A,R)],[d(P,I,0),d(P,I,w)]]),cell:_,skipped:v})}}),o}function Ur(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function qs(i){return Math.hypot(i[0],i[1],i[2])}function sr(i){let t=qs(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function qm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var lw=.78,cw=1.18;function uw(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||lw,module_h:i.h||cw}}function qc(i,t){let e=$s(i,uw(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function $c(i,t,e){let n=t?qc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>Yt([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var Zs=1712952,Ks=2239816,Jm=1318193,lr=Nt(3662079,.9),Uo=Nt(5995775,.45),Je=.14,hw=9427199,fw=13226982,dw=14936565,pw={black:{glass:new tt(329483),edge:Nt(9082544,.32),cells:Nt(2766160,.22)},blue:{glass:new tt(1386842),edge:Nt(10467583,.55),cells:Nt(4025599,.35)}},mw=Nt(13226982,.5),gw=Nt(13226982,.85),bw=Nt(16757575,.95),$m=new tt(2845583),Zm=new tt(1713986),xw=new tt(3662079).multiplyScalar(.35),Km=new tt(4871791);function vw(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function jm(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:Mw(i),r=e?.type==="custom"?ww(i,e.sections??[],e.overhang):n?[n]:[];return _w(i,r),yw(i,r,t),r}function yw(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Br(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?qc(s,o):null;if(!s||!a)continue;let l=s.section?t.find(T=>T.sections?.includes(s.section)):t[0];if(!l)continue;let c=o.float?$c(i,s,o):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=T=>[T[0],T[1]-u,T[2]],[d,m,b,g]=a.map(f),p=e.get(o.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),_=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new te,lines:new Oe,glass:new te}).get(h.id):x?l.win??={solid:new te,lines:new Oe,glass:new te}:l.winRoof??={solid:new te,lines:new Oe,glass:new te},v=(T,C)=>[T[0]+s.n[0]*C,T[1]+s.n[1]*C,T[2]+s.n[2]*C],M=(T,C,O)=>[T[0]+(C[0]-T[0])*O,T[1]+(C[1]-T[1])*O,T[2]+(C[2]-T[2])*O],S=p.open>.02||p.tilt>.02?bw:gw,E=[d,m,b,g].map(T=>v(T,.06)),y=[d,m,b,g].map(T=>v(T,-.02));for(let T=0;T<4;T++){_.lines.seg(E[T],E[(T+1)%4],S);let C=(T+1)%4;_.solid.tri(y[T],y[C],E[C],Km),_.solid.tri(y[T],E[C],E[T],Km)}let R=(p.open>.02?30*Math.min(1,p.open):p.tilt>.5?12:0)*ie,w=Math.hypot(b[0]-m[0],b[1]-m[1],b[2]-m[2]),A=T=>{let C=s.es;return[T[0]-C[0]*w*Math.cos(R)+s.n[0]*w*Math.sin(R),T[1]-C[1]*w*Math.cos(R)+s.n[1]*w*Math.sin(R),T[2]-C[2]*w*Math.cos(R)+s.n[2]*w*Math.sin(R)]},I=v(g,.065),L=v(b,.065),P=A(I),B=A(L);_.glass.tri(P,B,L,$m),_.glass.tri(P,L,I,$m);for(let[T,C]of[[P,B],[B,L],[L,I],[I,P]])_.lines.seg(T,C,S);if(p.cover>.02){let T=Math.min(1,p.cover),C=v(M(I,P,T),.01),O=v(M(L,B,T),.01),D=v(I,.01),N=v(L,.01);_.solid.tri(C,O,N,Zm),_.solid.tri(C,N,D,Zm);let z=Math.max(1,Math.round(w*T/.05));for(let G=1;G<=z;G++){let V=G/z;_.lines.seg(v(M(D,C,V),.004),v(M(N,O,V),.004),xw)}}}}function _w(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Br(i).map(r=>[r.key,r]));for(let r of e){let o=n.get(r.face);if(!o)continue;let s=o.section?t.find(a=>a.sections?.includes(o.section)):t[0];s&&Pf(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function Pf(i,t,e,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=pw[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of $s(e,n)){let[h,u,f,d]=c.corners.map(o);i.tri(h,u,f,s.glass),i.tri(h,f,d,s.glass),i.tri(h,f,u,s.glass),i.tri(h,d,f,s.glass);let m=(p,x=.004)=>[p[0]+e.n[0]*x,p[1]+e.n[1]*x,p[2]+e.n[2]*x],b=(p,x,_)=>[p[0]+(x[0]-p[0])*_,p[1]+(x[1]-p[1])*_,p[2]+(x[2]-p[2])*_],g=[h,u,f,d].map(p=>m(p));for(let p=0;p<4;p++)t.seg(g[p],g[(p+1)%4],s.edge);for(let p=1;p<a;p++)t.seg(m(b(h,u,p/a)),m(b(d,f,p/a)),s.cells);for(let p=1;p<l;p++)t.seg(m(b(h,d,p/l)),m(b(u,f,p/l)),s.cells);for(let[p,x]of c.posts)t.seg(o(p),o(x),mw)}}function Mw(i){let t=i.settings.roof,e=vw(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let[n,r,o,s]=Cf(i,e),a=i.settings.wall_exterior+t.overhang,l=n-a,c=o+a,h=r-a,u=s+a,f=new te,d=new Oe;if(t.type==="flat"){Re(f,[[l,h],[c,h],[c,u],[l,u]],0,.25,Zs,Ks,{bottom:!0});let I=.252;for(let[L,P]of[[[l,h],[c,h]],[[c,h],[c,u]],[[c,u],[l,u]],[[l,u],[l,h]]])d.seg([L[0],I,L[1]],[P[0],I,P[1]],lr),d.seg([L[0],0,L[1]],[P[0],0,P[1]],Uo);return{floor:e,base:e.height,solid:f,lines:d,glass:new te}}let m=c-l>=u-h,b=t.ridge==="short"?!m:m,g=(b?u-h:c-l)/2,p=g*Math.tan(t.pitch*ie),x=(I,L,P)=>b?[I,P,(h+u)/2+L]:[(l+c)/2+L,P,I],[_,v]=b?[l,c]:[h,u],M=new tt(Ks),S=new tt(Zs),E=(I,L,P,B,T)=>{f.tri(I,L,P,T),f.tri(I,P,B,T)};for(let I of[-1,1]){E(x(_,I*g,0),x(v,I*g,0),x(v,0,p),x(_,0,p),M),E(x(_,I*g,-Je),x(_,0,p-Je),x(v,0,p-Je),x(v,I*g,-Je),S),E(x(_,I*g,-Je),x(v,I*g,-Je),x(v,I*g,0),x(_,I*g,0),S);for(let L of[_,v])E(x(L,I*g,-Je),x(L,I*g,0),x(L,0,p),x(L,0,p-Je),S);d.seg(x(_,I*g,0),x(v,I*g,0),Uo);for(let L of[_,v])d.seg(x(L,I*g,0),x(L,0,p),Uo)}let y=t.overhang,R=new tt(Jm),w=g-y,A=w*Math.tan(t.pitch*ie);for(let I of[_+y,v-y])f.tri(x(I,-w,-Je),x(I,w,-Je),x(I,0,A-Je),R),f.tri(x(I,w,-Je),x(I,-w,-Je),x(I,0,A-Je),R);return d.seg(x(_,0,p+.004),x(v,0,p+.004),lr),{floor:e,base:e.height,solid:f,lines:d,glass:new te}}function ww(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,o=new Map(Br(i).map(l=>[l.key,l])),s=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(s.map(l=>{let c=tr(t,l),h=c?null:Q0(t,l),u=c?ks(t,l)?l:sf(c,l):h?em(l,h):l,f=Nc(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,m=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:m?J0(u,Ir(u,d).faces):[]}]}));for(let l of s){let c=a.get(l),h=q0(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new te,lines:new Oe,glass:new te,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,m=h.elevation+h.height>l.base+.05&&!l.dormer&&!d,b=t.filter(v=>v!==l&&tr(t,v)===l&&!ks(t,v)).flatMap(v=>Y0(l,v));for(let v of i.settings.roof.windows??[]){let M=o.get(v.face),S=M&&M.section===l.id?qc(M,v):null;if(!S)continue;let E=S.map(y=>bi(l,y[0],y[2]));b.push({u0:Math.min(...E.map(y=>y[0])),u1:Math.max(...E.map(y=>y[0])),v0:Math.min(...E.map(y=>y[1])),v1:Math.max(...E.map(y=>y[1]))})}let g=c.drawn,p=c.junction?1-c.junction.end:null;if(d){let v=nn(g),M=Ir(d,{u0:0,u1:0,a:0,b:0}),S=E=>{let[y,R]=v.at(E,v.w/2),[w,A]=bi(d,y,R);return Vs(M,w,A)??cn(d).y(A)};p=S(v.u0)<=S(v.u1)?0:1}let x=s.filter(v=>j0(t,l,v)),_=x.length?{covers:cf(g,x.flatMap(v=>a.get(v).covers)),lines:cf(g,x.filter(v=>s.indexOf(v)>s.indexOf(l)).flatMap(v=>a.get(v).covers)),wallU:c.junction?[nn(l).u0,nn(l).u1]:null}:null;Sw(f.solid,f.lines,g,c.ov,h.elevation,f.glass,m,b,p,_)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function Sw(i,t,e,n,r,o=i,s=!1,a=[],l=null,c=null){let h=nn(e),u=cn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),m=Math.max(0,f.b),b=h.w,g=h.u0-Math.max(0,f.u0),p=h.u1+Math.max(0,f.u1),x=(T,C,O)=>{let[D,N]=h.at(T,C);return[D,O-r,N]},_=new tt(Ks),v=new tt(Zs),M=new tt(Jm),S=(T,C)=>{for(let O=1;O+1<T.length;O++)i.tri(T[0],T[O],T[O+1],C)},E=[],y=[],R=[],w=[null,null],A=[];if(e.shape==="flat"||e.shape==="parapet"){let T=e.eave_a,C=e.shape==="parapet",O=e.points&&e.points.length>=3?H0(e,C?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):C?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(g,-d),h.at(p,-d),h.at(p,b+m),h.at(g,b+m)];Re(i,O,T-r,T-r+.25,Zs,Ks,{bottom:!0});for(let D=0;D<O.length;D++){let N=O[D],z=O[(D+1)%O.length];t.seg([N[0],T-r+.252,N[1]],[z[0],T-r+.252,z[1]],lr),t.seg([N[0],T-r,N[1]],[z[0],T-r,z[1]],Uo)}if(C){let D=V=>Jn(V)>=0?V:[...V].reverse(),N=D(O),z=zs(N,-.2),G=N.length;for(let V=0;V<G;V++){let W=D([N[V],N[(V+1)%G],z[(V+1)%G],z[V]]);Re(i,W,T-r+.25,T-r+.65,Zs,Ks),t.seg([N[V][0],T-r+.652,N[V][1]],[N[(V+1)%G][0],T-r+.652,N[(V+1)%G][1]],lr),t.seg([z[V][0],T-r+.652,z[V][1]],[z[(V+1)%G][0],T-r+.652,z[(V+1)%G][1]],lr)}}}else{let T=Ir(e,f);E=T.faces;for(let C of a)E=E.flatMap(O=>af(O,C));if(y=T.rim,R=T.ridges,w=T.gables,c){for(let C of E)for(let O of c.lines){let D=K0(C,O.poly);if(D)for(let[N,z]of lf(D[0],D[1],c.covers.filter(G=>G!==O)))A.push([N,z])}E=E.flatMap(C=>Z0(C,c.covers))}}let I=!!e.open,L=new tt(hw);for(let T of E){if(I){for(let C=1;C+1<T.length;C++)o.tri(x(T[0][0],T[0][1],T[0][2]),x(T[C][0],T[C][1],T[C][2]),x(T[C+1][0],T[C+1][1],T[C+1][2]),L);continue}S(T.map(([C,O,D])=>x(C,O,D)),_),S(T.map(([C,O,D])=>x(C,O,D-Je)),v)}let P=(T,C)=>c?lf(T,C,c.covers):[[T,C]];for(let T=0;T<y.length;T++)for(let[[C,O,D],[N,z,G]]of P(y[T],y[(T+1)%y.length]))I||S([x(C,O,D),x(N,z,G),x(N,z,G-Je),x(C,O,D-Je)],v),t.seg(x(C,O,D),x(N,z,G),I?lr:Uo);if(I){Tw(i,t,h,u,f,x,r);return}for(let[T,C]of R)for(let[[O,D,N],[z,G,V]]of P(T,C))t.seg(x(O,D,N+.004),x(z,G,V+.004),lr);for(let[[T,C,O],[D,N,z]]of A)t.seg(x(T,C,O+.004),x(D,N,z+.004),lr);let B=e.base;if(!s){for(let T of[0,1]){let C=w[T];if(!C||l!==null&&l!==T)continue;let O=Aw(C,B-Je),D=T===0?h.u0:h.u1;O.length>=3&&S(O.map(([N,z])=>x(D,N,z)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[T,C]=c?.wallU??[h.u0,h.u1];for(let O of[0,b]){let D=u.y(O)-Je;D>B+.02&&S([x(T,O,B),x(C,O,B),x(C,O,D),x(T,O,D)],M)}}else if(e.eave_a>B+.02)for(let[T,C,O,D]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])S([x(T,C,B),x(O,D,B),x(O,D,e.eave_a),x(T,C,e.eave_a)],M)}}function Tw(i,t,e,n,r,o,s){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,m=(p,x,_,v,M,S)=>{let E=[e.at(p,_),e.at(x,_),e.at(x,v),e.at(p,v)],y=(E[1][0]-E[0][0])*(E[2][1]-E[0][1])-(E[2][0]-E[0][0])*(E[1][1]-E[0][1]);Re(i,y<0?[...E].reverse():E,M-s,S-s,fw,dw,{bottom:!0})},b=s;for(let[p,x]of[[0,h],[a,u]]){if(!x)continue;let _=n.y(p)-.03,v=p===0?0:a-l;m(e.u0,e.u1,v,v+l,_-c,_),t.seg(o(e.u0,p,_-c),o(e.u1,p,_-c),Uo)}for(let[p,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let _=0;_<6;_++){let v=a*_/6,M=a*(_+1)/6,S=Math.min(n.y(v),n.y(M))-.03;m(p,p+l,v,M,S-c,S)}let g=[];for(let[p,x]of[[0,h],[a-l,u]]){if(!x)continue;let _=e.u1-e.u0-l,v=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<=v;M++){let S=e.u0+_*M/v;M===0&&!f||M===v&&!d||g.push([S,p])}}if(!h&&!u)for(let p of[e.u0,e.u1-l])(p===e.u0&&f||p!==e.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,x]of g){let _=n.y(x+l/2)-.03-c;m(p,p+l,x,x+l,b,_)}}function Aw(i,t){let e=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=t&&e.push([s,a]);let l=i[o+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([s+(l[0]-s)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Js={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Qm={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},on=.2,tg=-.06,Ew=.01,js=8,Zc=.42,If=.42;function rg(i,t,e,n=[],r=[],o){let{walls:s,open:a}=mi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(T,C,O,D)=>{let N=D?.slope?Math.min(O,Cr(D.slope,T,C)):O,z=o?o(T,C):null;return z===null?N:Math.max(.05,Math.min(N,z))},c=(T,C)=>{let O=o?o(T,C):null;return O!==null&&O<tg},h=T=>{if(!o)return T;let C=T.map(([D,N])=>{let z=o(D,N);return z===null?1/0:z-tg});if(C.every(D=>D>=0))return T;if(C.every(D=>D<0))return[];let O=[];for(let D=0;D<T.length;D++){let N=(D+1)%T.length,[z,G]=[T[D],T[N]],[V,W]=[C[D],C[N]];if(V>=0&&O.push(z),V>=0!=W>=0&&Number.isFinite(V)&&Number.isFinite(W)){let Q=V/(V-W);O.push([z[0]+(G[0]-z[0])*Q,z[1]+(G[1]-z[1])*Q])}}return O},u=(T,C,O,D,N,z)=>{if(!o&&!z?.slope)return N;let G=N,V=Math.max(2,Math.ceil((D-O)/.25)+1);for(let W=0;W<V;W++){let Q=O+(D-O)*W/(V-1);G=Math.min(G,l(T[0]+C[0]*Q,T[1]+C[1]*Q,N,z))}return G},f=new te(!0,!0),d=[],m=new Oe,b=[];for(let T of i.rooms){if(T.points.length<3)continue;let C=Jc(T.points),O=Qm[T.floor_material]??Qm.wood,D=new tt(O.color),N=n.flatMap(it=>{if(mf(it,C)&&(!ff(it)||mf(it,C,.002)))return[it];if(!ff(it))return[];let q=Fw(Lr(C,it));return q.length>=3&&Math.abs(Jn(q))>.01?[Jc(q)]:[]}),z=sm(N).map(it=>am(Jc(it),.003));b.push(...z);let G=[...C,...z.flat()],V=f.count;for(let[it,q,Y]of rn(C,z)){let X=G[it],et=G[q],J=G[Y];f.tri([X[0],0,X[1]],[J[0],0,J[1]],[et[0],0,et[1]],D,D,D,[X[0],X[1],J[0],J[1],et[0],et[1]],Jt,O.tile)}d.push({roomId:T.id,start:V,end:f.count,color:O.color});let W=new tt(Js.slab),Q=it=>{for(let q=0;q<it.length;q++){let Y=it[q],X=it[(q+1)%it.length];f.tri([Y[0],-on,Y[1]],[Y[0],0,Y[1]],[X[0],0,X[1]],W),f.tri([Y[0],-on,Y[1]],[X[0],0,X[1]],[X[0],-on,X[1]],W)}};Q(C);for(let it of z){Q([...Jc(it)].reverse());for(let q=0;q<it.length;q++){let Y=it[q],X=it[(q+1)%it.length];m.seg([Y[0],.006,Y[1]],[X[0],.006,X[1]],nr),m.seg([Y[0],-on,Y[1]],[X[0],-on,X[1]],Ci)}}}let g=new Map,p=[],x=new Map,_=new Map;for(let T of s){if(!T.free)continue;let C=B0(T,i.rooms);C!==null&&_.set(T,C)}for(let T of s){let C="interior",O=null,D=_.get(T);if(T.exterior||D!==void 0){let z=T.b[0]-T.a[0],G=T.b[1]-T.a[1],V=Math.hypot(z,G)||1,W=D===!1?-1:1,Q=[W*G/V,-W*z/V],it=(Math.round(Math.atan2(Q[1],Q[0])/(2*Math.PI)*js)%js+js)%js;C=`s${it}`;let q=it/js*2*Math.PI;O=[Math.cos(q),Math.sin(q)]}let N=g.get(C);N===void 0&&(N=p.length,g.set(C,N),p.push(O)),x.set(T,N)}let v=new Map,M=[];for(let T of i.openings){let C=Io(T,i.rooms,i.walls??[]);if(!C)continue;let O=Lo(s,T,C);if(!O)continue;let{wall:D,s:N}=O,z=Qc([D.b[0]-D.a[0],D.b[1]-D.a[1]]),G=Math.hypot(D.b[0]-D.a[0],D.b[1]-D.a[1]),V=N-T.width/2<-1e-6?Qh(s,D,!1):null,W=N+T.width/2>G+1e-6?Qh(s,D,!0):null,Q=jt=>jt?Math.hypot(jt.b[0]-jt.a[0],jt.b[1]-jt.a[1]):0,it=-Q(V),q=G+Q(W),Y=Math.min(T.width,q-it),X=Math.max(it,Math.min(q-Y,N-Y/2)),et=C.room.points,J=_.get(D),rt=D.free?J??z[0]*(et[1][0]-et[0][0])+z[1]*(et[1][1]-et[0][1])>0:D.exterior||D.roomLeft===T.room_id,pt=[-z[1],z[0]],ct=rt?pt:[-pt[0],-pt[1]],ot=Math.min(u(D.a,z,X,X+Y,Qs(D,i.height),D)-.02,T.sill+T.height),gt=Math.max(0,Math.min(T.sill,ot-.1)),vt=[ct[1],-ct[0]],qt=z[0]*vt[0]+z[1]*vt[1]>0,he={opening:T,bucket:x.get(D),start:[D.a[0]+z[0]*X,D.a[1]+z[1]*X],axis:z,width:Y,toRoom:ct,faceRoom:rt?D.left:D.right,faceOut:rt?D.right:D.left,sill:gt,top:ot,hingeAtStart:T.hinge==="left"===qt,exterior:D.exterior||J!==void 0};M.push(he);let fe=v.get(D);fe||v.set(D,fe=[]),fe.push({s0:X,s1:X+Y,sill:gt,top:ot,info:he});for(let jt of[V,W]){if(!jt)continue;let Me=H=>(D.a[0]+z[0]*H-jt.a[0])*z[0]+(D.a[1]+z[1]*H-jt.a[1])*z[1],Z=Math.max(0,Me(X)),ke=Math.min(Q(jt),Me(X+Y));if(ke-Z<1e-4)continue;let me=v.get(jt);me||v.set(jt,me=[]),me.push({s0:Z,s1:ke,sill:gt,top:ot,info:he,cont:!0})}}let S=Math.min(i.cut_height,i.height),E=new te;for(let T of s){let C=x.get(T),O=Qc([T.b[0]-T.a[0],T.b[1]-T.a[1]]),D=(v.get(T)??[]).sort((X,et)=>X.s0-et.s0),N=Qs(T,i.height),z=[],G=[-1/0,...new Set(D.flatMap(X=>[X.s0,X.s1])).values(),1/0].sort((X,et)=>X-et);for(let X=0;X+1<G.length;X++){let et=G[X],J=G[X+1];if(J-et<1e-6)continue;let rt=Number.isFinite(et)&&Number.isFinite(J)?(et+J)/2:Number.isFinite(et)?et+1:J-1,pt=D.filter(gt=>gt.s0<rt&&gt.s1>rt).map(gt=>[gt.sill,gt.top]).sort((gt,vt)=>gt[0]-vt[0]),ct=[],ot=-on;for(let[gt,vt]of pt)gt>ot+1e-4&&ct.push([ot,gt<1e-4?-Ew:gt]),ot=Math.max(ot,vt);N>ot+1e-4&&ct.push([ot,N]),z.push({t0:et,t1:J,ranges:ct})}let V=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),W=(o||T.slope)&&u(T.a,O,0,V,N,T)<N-.001,Q=W?z.flatMap(X=>{let et=Math.max(X.t0,-.5),J=Math.min(X.t1,V+.5),rt=Math.max(1,Math.ceil((J-et)/.3));return Array.from({length:rt},(pt,ct)=>({t0:ct===0?X.t0:et+(J-et)*ct/rt,t1:ct===rt-1?X.t1:et+(J-et)*(ct+1)/rt,ranges:X.ranges,inner0:ct>0,inner1:ct<rt-1}))}):z.map(X=>({...X,inner0:!1,inner1:!1})),it=X=>(X[0]-T.a[0])*O[0]+(X[1]-T.a[1])*O[1],q=X=>{if(!o)return[X];let et=Kc(T.footprint,T.a,O,X.t0,X.t1),J=et.filter(([ot,gt])=>c(ot,gt)).length;if(J===0)return[X];if(J===et.length)return[];let rt=Math.max(X.t0,-.5),pt=Math.min(X.t1,V+.5),ct=Math.max(1,Math.ceil((pt-rt)/.05));return Array.from({length:ct},(ot,gt)=>({t0:gt===0?X.t0:rt+(pt-rt)*gt/ct,t1:gt===ct-1?X.t1:rt+(pt-rt)*(gt+1)/ct,ranges:X.ranges,inner0:gt>0||X.inner0,inner1:gt<ct-1||X.inner1})).filter(ot=>!Kc(T.footprint,T.a,O,ot.t0,ot.t1).every(([gt,vt])=>c(gt,vt)))},Y=X=>{let et=ot=>l(T.a[0]+O[0]*ot,T.a[1]+O[1]*ot,N,T),J=Math.max(X.t0,0),rt=Math.min(X.t1,V);if(rt-J<.01||(et(J)-S)*(et(rt)-S)>=0)return[X];let pt=et(rt)>S;for(let ot=0;ot<24;ot++){let gt=(J+rt)/2;et(gt)>S===pt?rt=gt:J=gt}let ct=pt?rt:J;return[{...X,t1:ct,inner1:!0},{...X,t0:ct,inner0:!0}]};for(let X of W?Q.flatMap(q).flatMap(Y):Q){let et=W?h(Kc(T.footprint,T.a,O,X.t0,X.t1)):Kc(T.footprint,T.a,O,X.t0,X.t1);if(et.length<3)continue;let J=(ct,ot)=>Math.abs(it(ct)-ot)<1e-4,rt=(ct,ot)=>X.inner0&&J(ct,X.t0)&&J(ot,X.t0)||X.inner1&&J(ct,X.t1)&&J(ot,X.t1),pt=W?Math.min(...et.map(([ct,ot])=>l(ct,ot,N,T))):N;for(let[ct,ot]of X.ranges){let gt=Math.min(ot,W?Math.max(...et.map(([fe,jt])=>l(fe,jt,N,T))):ot);if(gt-ct<1e-4||pt-ct<.01)continue;let vt=ct>.01,qt=W&&ot>pt,he=(fe,jt)=>Math.min(ot,l(fe,jt,N,T));if(ct<S-1e-6){let fe=gt>S+1e-6?gm+C:ir+C,jt=qt&&pt<S?(Me,Z)=>Math.min(S,he(Me,Z)):Math.min(gt,S);Re(E,et,ct,jt,Js.wall,Js.wallTop,{aoFrom:0,bottom:vt,fold:ir+C,topFold:fe,skipSide:rt})}gt>S+1e-6&&pt>S-1e-6&&Re(E,et,Math.max(ct,S),qt?he:gt,Js.wall,Js.wallTop,{aoFrom:0,fold:C,bottom:vt&&ct>=S,skipSide:rt})}}}let y=s.flatMap(T=>T.footprint),R=Pw(s,y),w=new Oe;w.p.push(...m.p),w.c.push(...m.c),w.f.push(...m.f);let A=(T,C)=>(v.get(T)??[]).filter(C);for(let T of R.edges){let C=x.get(T.wall);for(let[D,N]of jc(T,A(T.wall,z=>z.sill<=.005)))w.seg([D[0],.004,D[1]],[N[0],.004,N[1]],mm);for(let[D,N]of jc(T,A(T.wall,z=>z.sill<S&&z.top>S)))w.seg([D[0],S,D[1]],[N[0],S,N[1]],xf,zc+C);let O=Qs(T.wall,i.height);for(let[D,N]of jc(T,A(T.wall,z=>z.top>=O-.021))){if(!o&&!T.wall.slope){w.seg([D[0],O,D[1]],[N[0],O,N[1]],nr,O<=S+1e-6?ir+C:C);continue}let z=Math.max(1,Math.ceil(Math.hypot(N[0]-D[0],N[1]-D[1])/.3));for(let G=0;G<z;G++){let V=[D[0]+(N[0]-D[0])*G/z,D[1]+(N[1]-D[1])*G/z],W=[D[0]+(N[0]-D[0])*(G+1)/z,D[1]+(N[1]-D[1])*(G+1)/z];if(c(V[0],V[1])&&c(W[0],W[1]))continue;let Q=l(V[0],V[1],O,T.wall),it=l(W[0],W[1],O,T.wall);w.seg([V[0],Q,V[1]],[W[0],it,W[1]],nr,Math.max(Q,it)<=S+1e-6?ir+C:C)}}}let I=(T,C)=>l(C[0],C[1],Qs(T,i.height),T);for(let T of R.corners){if(c(T.p[0],T.p[1]))continue;let C=T.walls.reduce((D,N)=>I(N,T.p)>I(D,T.p)+1e-6?N:D,T.wall),O=l(T.p[0],T.p[1],Qs(C,i.height),C);w.segSplit([T.p[0],.004,T.p[1]],[T.p[0],O,T.p[1]],Ci,Math.min(S,O),x.get(C))}for(let T of R.joints){let[C,O]=T.walls,D=[I(C,T.a),I(O,T.a)],N=[I(C,T.b),I(O,T.b)];if(Math.abs(D[0]-D[1])<.01&&Math.abs(N[0]-N[1])<.01)continue;let z=D[1]+N[1]>=D[0]+N[0]?O:C,G=x.get(z),V=Math.max(...D),W=Math.max(...N);w.seg([T.a[0],V,T.a[1]],[T.b[0],W,T.b[1]],nr,Math.max(V,W)<=S+1e-6?ir+G:G);for(let[Q,it]of[[T.a,D],[T.b,N]]){let q=Math.min(...it),Y=Math.max(...it);Y-q>.01&&w.segSplit([Q[0],q,Q[1]],[Q[0],Y,Q[1]],Ci,S,G)}}for(let T of v.values())for(let C of T)C.cont||Rw(w,C,S);let L=Iw(R.edges,i.rooms,v),P=new te;zm(E,w,i,P);for(let T of r)Pf(E,w,T.face,T.field,i.elevation);let B=[];for(let T of i.furniture){if(I0(T.type))continue;let C=E.count,O=w.p.length/6,D=T,N=ln(i,D);if(Ic.has(D.type)){let z=Lc(s,D,i.height,N);D={...D,x:z.x,z:z.z},N=z.y}Hc(E,w,L,D,N),N+D.h>S+.05&&(bm(E,C,S,vf),xm(w,O,S,vf)),B.push({id:D.id,start:C,end:E.count})}return{floor:f.geometry(),roomTris:d,holes:b,walls:E.geometry(),water:P.geometry(),lines:w.geometry(),shadow:L.geometry(),buckets:p,openings:M,walls2d:s,openRooms:a,wallBuckets:s.map(T=>x.get(T)),furnitureTris:B,roofUnder:o}}function Rw(i,t,e){let{info:n}=t,r=n.bucket,o=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],s=l=>l>e+1e-6?r:Jt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(o(c,l,a),o(c,l,t.top),Ci,e,r);i.seg(o(t.s0,l,t.top),o(t.s1,l,t.top),Ci,s(t.top)),t.sill>.01&&i.seg(o(t.s0,l,t.sill),o(t.s1,l,t.sill),Ci,s(t.sill))}for(let l of[t.s0,t.s1])i.seg(o(l,n.faceRoom,t.top),o(l,-n.faceOut,t.top),Ci,s(t.top)),t.sill>.01&&i.seg(o(l,n.faceRoom,t.sill),o(l,-n.faceOut,t.sill),Ci,s(t.sill)),t.sill<e&&t.top>e&&i.seg(o(l,n.faceRoom,e),o(l,-n.faceOut,e),xf,zc+r)}function Kc(i,t,e,n,r){let o=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],s=i;return Number.isFinite(n)&&(s=eg(s,a=>o(a)-n)),Number.isFinite(r)&&(s=eg(s,a=>r-o(a))),s}function eg(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=t(r),a=t(o);if(s>=0&&e.push(r),s>=0!=a>=0){let l=s/(s-a);e.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return e}var ng=i=>Math.round(i*1e3),ta=i=>`${ng(i[0])},${ng(i[1])}`,ig=(i,t)=>{let e=ta(i),n=ta(t);return e<n?`${e}|${n}`:`${n}|${e}`};function Cw(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*s+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+s*u,r[1]+a*u];ta(f)!==ta(h)&&e.push([h,f]),h=f}e.push([h,o])}return e}function Pw(i,t){let e=i.map(h=>({wall:h,edges:Cw(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let m=ig(f,d);n.set(m,(n.get(m)??0)+1);let b=r.get(m);b?b.walls.push(h):r.set(m,{a:f,b:d,walls:[h]})}let o=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&o.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let s=[],a=new Map,l=(h,u,f)=>{let d=ta(h),m=a.get(d);m||a.set(d,m={p:h,wall:u,walls:[],d:[]}),m.d.push(f),m.walls.includes(u)||m.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(ig(f,d))!==1)continue;let m=Math.hypot(d[0]-f[0],d[1]-f[1]);if(m<1e-4)continue;s.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/m,(d[1]-f[1])/m];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(m=>d.some(b=>Math.abs(m[0]*b[1]-m[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:s,corners:c,joints:o}}function jc(i,t){if(!t.length)return[[i.a,i.b]];let e=Qc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Qc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let m=[];return u.s0>f&&m.push([f,u.s0]),u.s1<d&&m.push([u.s1,d]),m});let h=u=>{let f=(u-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>o<=s?[h(u),h(f)]:[h(f),h(u)])}function Iw(i,t,e){let n=new te,r=new tt(If,If,If),o=new tt(1,1,1),s=.002;for(let a of i)for(let[l,c]of jc(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&Yt(m,p.points)))continue;let b=[l[0]+d[0]*Zc,l[1]+d[1]*Zc],g=[c[0]+d[0]*Zc,c[1]+d[1]*Zc];n.tri([l[0],s,l[1]],[b[0],s,b[1]],[g[0],s,g[1]],r,o,o),n.tri([l[0],s,l[1]],[g[0],s,g[1]],[c[0],s,c[1]],r,o,r)}return n}function og(i,t){let e=t.furniture.filter(o=>o.type==="stairwell").map(Ri),n=i.filter(o=>o.elevation<t.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return e;let r=n.furniture.filter(o=>(P0.has(o.type)||xe(o.type)?.hole)&&n.elevation+o.h>=t.elevation-.3).flatMap(o=>o.type==="stairs_u"?Lw(o):[Ri(o)]);return[...e,...r]}function Lw(i){let{steps2:t,fw:e,landing:n,run:r}=Pc(i.w,i.d,i.h),o=-i.d/2+n+r*t;if(o>=i.d/2-1e-6)return[Ri(i)];let s=i.rotation*Math.PI/180,a=Math.cos(s),l=Math.sin(s),c=i.mirror?-1:1,h=(d,m)=>[i.x+c*d*a-m*l,i.z+c*d*l+m*a],u=(d,m,b,g)=>{let p=[h(d,m),h(b,m),h(b,g),h(d,g)];return i.mirror?p.reverse():p},f=i.w/2-e;return[u(-i.w/2,-i.d/2,f,i.d/2),u(f,-i.d/2,i.w/2,o)]}function Qs(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function Qc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Fw(i){return i.filter((t,e)=>{let n=i[(e+i.length-1)%i.length];return i.length<2||Math.hypot(t[0]-n[0],t[1]-n[1])>1e-6})}function Jc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var Dw=new tt(1516340),Ow=new tt(527897),Lf=new tt(1779256),ea=new tt(1120808),Nw=new tt(4163256),sg=new tt(5995161),Uw=new tt(2240842),Bw=new tt(1318704),kw=.35,zw=.2,ag=.1;function Vw(i,t,e,n){let r=-1/0;for(let o of i.floors)if(!(o.elevation>.3))for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||s.type==="balcony"||Mn(s.type)||!Yt(e,s.points)||(r=Math.max(r,o.elevation+ji(o,s)+Rr[s.type]-t.elevation));return r>n?r-n:0}function lg(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=uf(i,t);if(!r)return null;let o=(m,b)=>Eo(m,b)-t.elevation,s=n&&r.some(([m,b])=>o(m,b)<-on-.03);if(!s&&!hf(i,t))return null;let a=t.height,l=-kw,c=(m,b)=>Math.min(a,Eo(m,b)-t.elevation),h=new te,u=new te,f=new Oe,d=(m,b,g,p,x,_,v,M)=>{let S=[b[0]-m[0],b[2]-m[2]];-S[1]*x[0]+S[0]*x[1]>0?(M.tri(m,b,g,_,_,v),M.tri(m,g,p,_,v,v)):(M.tri(m,g,b,_,v,_),M.tri(m,p,g,_,v,v))};for(let m=0;m<r.length;m++){let b=r[m],g=r[(m+1)%r.length],p=Math.hypot(g[0]-b[0],g[1]-b[1]);if(p<1e-4)continue;let x=[(g[0]-b[0])/p,(g[1]-b[1])/p],_=[x[1],-x[0]],v=[(b[0]+g[0])/2+_[0]*.05,(b[1]+g[1])/2+_[1]*.05];Yt(v,r)&&(_=[-_[0],-_[1]]);let M=(w,A=.012)=>[b[0]+x[0]*w+_[0]*A,b[1]+x[1]*w+_[1]*A],S=[];for(let w of e){if(w.opening.type!=="window"||!w.exterior||w.opening.well===!1)continue;let A=w.start[0]+w.axis[0]*(w.width/2)-w.toRoom[0]*w.faceOut,I=w.start[1]+w.axis[1]*(w.width/2)-w.toRoom[1]*w.faceOut,L=(A-b[0])*x[0]+(I-b[1])*x[1],P=(A-b[0])*_[0]+(I-b[1])*_[1];if(Math.abs(w.axis[0]*x[0]+w.axis[1]*x[1])<.99||P<-.08||P>.6||L<-.05||L>p+.05||!rm(i,t,w.exterior,w.sill,[A,I],_))continue;let B=w.opening.well_depth??im;S.push({s0:Math.max(0,L-w.width/2-ag),s1:Math.min(p,L+w.width/2+ag),bottom:Math.max(l+.05,w.sill-zw),rim:w.opening.well_rim??0,off:Math.max(0,P),depth:B})}let E=new Set([0,p]);for(let w of S)E.add(w.s0),E.add(w.s1);let y=[...E].sort((w,A)=>w-A),R=[];for(let w=0;w<y.length-1;w++){let A=Math.max(1,Math.ceil((y[w+1]-y[w])/.5));for(let I=0;I<A;I++)R.push(y[w]+(y[w+1]-y[w])*I/A)}R.push(p);for(let w=0;w<R.length-1;w++){let A=R[w],I=R[w+1],L=S.find(G=>A>=G.s0-1e-6&&I<=G.s1+1e-6),P=M(A),B=M(I),T=c(P[0],P[1]),C=c(B[0],B[1]),O=L?Math.min(T,L.bottom):T,D=L?Math.min(C,L.bottom):C;if(O>l+.01||D>l+.01){let G=Math.min(O,l),V=Math.min(D,l);d([P[0],G,P[1]],[B[0],V,B[1]],[B[0],Math.max(D,l),B[1]],[P[0],Math.max(O,l),P[1]],_,Ow,Dw,h)}let N=o(P[0],P[1]),z=o(B[0],B[1]);if(s&&(N<-on-.01||z<-on-.01)&&d([P[0],Math.min(N,-on),P[1]],[B[0],Math.min(z,-on),B[1]],[B[0],-on,B[1]],[P[0],-on,P[1]],_,Bw,Uw,h),T>l||C>l||s&&(N<-on||z<-on)){let G=s?Math.min(N,Math.max(T,l)):Math.max(T,l),V=s?Math.min(z,Math.max(C,l)):Math.max(C,l);f.seg([P[0],G+.004,P[1]],[B[0],V+.004,B[1]],Nw)}}for(let w of S){let A=M(w.s0,w.off),I=M(w.s1,w.off),L=[A[0]+_[0]*w.depth,A[1]+_[1]*w.depth],P=[I[0]+_[0]*w.depth,I[1]+_[1]*w.depth],B=[(A[0]+I[0]+L[0]+P[0])/4,(A[1]+I[1]+L[1]+P[1])/4],T=Vw(i,t,B,c(B[0],B[1])),C=Math.max(w.rim,T>0?T+.02:0),O=W=>c(W[0],W[1])+C,D=w.bottom,N=(W,Q)=>[W[0],Q,W[1]];u.tri(N(A,D),N(I,D),N(P,D),ea),u.tri(N(A,D),N(P,D),N(L,D),ea);let z=(W,Q)=>{u.tri(N(W,D),N(Q,D),N(Q,O(Q)),ea,ea,Lf),u.tri(N(W,D),N(Q,O(Q)),N(W,O(W)),ea,Lf,Lf)};z(A,L),z(I,P),z(L,P);let G=W=>[W[0],O(W)+.01,W[1]];for(let[W,Q]of[[A,I],[I,P],[P,L],[L,A]])f.seg(G(W),G(Q),sg);let V=Math.max(3,Math.round((w.s1-w.s0)/.12));for(let W=1;W<V;W++){let Q=W/V,it=[A[0]+(I[0]-A[0])*Q,A[1]+(I[1]-A[1])*Q];f.seg(G(it),G([it[0]+_[0]*w.depth,it[1]+_[1]*w.depth]),sg)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var cg=i=>Math.round(i*1e3)/1e3;function Gw(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let o=[(n[0]-e[0])/r,(n[1]-e[1])/r],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function ug(i,t,e,n,r,o=.05){let s=i.rooms.find(f=>f.points.length>=3&&Yt([t.x,t.z],f.points));if(!s)return[e,n];let a=s.points,l=Pn(a)>=0?1:-1,c=Ri({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=Ri({...t,x:h,z:u});for(let m=0;m<a.length;m++){let b=a[m],g=a[(m+1)%a.length],p=Math.hypot(g[0]-b[0],g[1]-b[1]);if(p<.05)continue;let x=[(g[0]-b[0])/p,(g[1]-b[1])/p],_=[-x[1]*l,x[0]*l],v=Gw(i,s.id,b,g)?r/2:0,M=0;d.forEach((S,E)=>{let y=(S[0]-b[0])*x[0]+(S[1]-b[1])*x[1];if(y<-.01||y>p+.01)return;let R=(S[0]-b[0])*_[0]+(S[1]-b[1])*_[1]-v,w=c[E];(w[0]-b[0])*_[0]+(w[1]-b[1])*_[1]-v<-o||R<M&&(M=R)}),M<-1e-4&&(h-=_[0]*M,u-=_[1]*M)}}return[cg(h),cg(u)]}var Hw=500,Ww=1e3;function hg(i,t){let e=t-i.timeStamp;return e>Ww&&e<6e4}var fg=.12,dg=1.35,Xw=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,tu=class{view={target:new $,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;rightClickBack=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(o,s,a)=>{t.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=Xw(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Ff(this.view.phi+this.velocity.phi,fg,dg),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},o=t.theta??r.theta;for(;o-r.theta>Math.PI;)o-=2*Math.PI;for(;o-r.theta<-Math.PI;)o+=2*Math.PI;let s=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:o,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:r,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},Hw)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(hg(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let o=e.type==="mouse";if(o&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Ff(this.view.phi+c,fg,dg),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(t){let e=this.pointers.get(t.pointerId)?.button;if(e!==void 0){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let n=this.el.getBoundingClientRect(),r=t.clientX-n.left,o=t.clientY-n.top,s=performance.now();e===2&&this.rightClickBack&&this.events.back?(this.lastTap=0,this.events.back()):s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(r,o)):(this.lastTap=s,this.events.tap(r,o))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!hg(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=Ff(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new $(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new $(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-t*r),this.view.target.addScaledVector(s,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Ff(i,t,e){return Math.min(e,Math.max(t,i))}function xi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var iu=5,eu=512,pg=.7,nu=class{projectors=new Map;loader=new yr;loggedIds="";depthMaterial=new Xt({colorWrite:!1,side:re});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,o]of this.projectors)e.has(r)||this.drop(o);for(let[r,o]of e){let s=this.projectors.get(r);if(!s){let a=new Ye(eu,eu);a.depthTexture=new ci(eu,eu),s={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new Qe(60,16/9,pg,40),target:a,matrix:new Ae,uniforms:{uProjMat:{value:new Ae},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},s.camera.layers.set(iu),this.projectors.set(r,s)}s.url=o,this.fetch(s)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ne;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,o){for(let s of this.projectors.values()){let a=s.texture?r(s.id):null;if(s.texture&&!a&&!s.noPoseLogged&&(s.noPoseLogged=!0,console.warn(`NeonPlan lab: ${s.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of s.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of s.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),s.overlays.delete(b));for(let b of n){let g=s.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new Et(b.geometry,this.material(s,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),s.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${s.aspect.toFixed(3)},${o}`;if(c===s.poseKey)continue;s.poseKey=c;let h=s.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/s.aspect)*180/Math.PI,h.aspect=s.aspect,h.far=a.reach,h.near=pg,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),s.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),s.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),m=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(s.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=m;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Xt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?xi(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(o,s)=>{r?.(o,s),Object.assign(o.uniforms,t.uniforms),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function mg(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function gg(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=mg(o,s),c=mg(s,a),h=Math.min(t,l*.45,c*.45),u=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],f=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(s);continue}let d=[s[0]+u[0]*h,s[1]+u[1]*h,s[2]+u[2]*h],m=[s[0]+f[0]*h,s[1]+f[1]*h,s[2]+f[2]*h];for(let b=0;b<=e;b++){let g=b/e,p=(1-g)*(1-g),x=2*(1-g)*g,_=g*g;n.push([p*d[0]+x*s[0]+_*m[0],p*d[1]+x*s[1]+_*m[1],p*d[2]+x*s[2]+_*m[2]])}}return n.push(i[i.length-1]),n}var bg=new tt(7568261),xg=new tt(4869974),Yw=new tt(3116287),vg=new tt(3948872),Df=kr([.35,.85,.4]),yg=10;function kr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function na(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function _g(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=kr(na(i,t));return[e,kr(na(i,e))]}function Pi(i,t){let e=.5+.5*Math.max(0,t[0]*Df[0]+t[1]*Df[1]+t[2]*Df[2]);return i.clone().multiplyScalar(e)}function Bo(i,t,e,n,r,o=!1){let s=kr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=_g(s),c=(h,u)=>{let f=u/yg*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<yg;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),m=c(e,h+1);i.tri(u.p,m.p,d.p,Pi(r,u.n),Pi(r,m.n),Pi(r,d.n)),i.tri(u.p,f.p,m.p,Pi(r,u.n),Pi(r,f.n),Pi(r,m.n)),o&&(i.tri([...t],f.p,u.p,Pi(r,[-s[0],-s[1],-s[2]])),i.tri([...e],d.p,m.p,Pi(r,s)))}}function qw(i,t,e,n,r,o,s,a){let l=kr(na(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*o+l[0]*d*s,t[1]+e[1]*u*r+n[1]*f*o+l[1]*d*s,t[2]+e[2]*u*r+n[2]*f*o+l[2]*d*s],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Pi(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function Mg(i,t){if(t.points.length<2)return;let e=t.radius,n=gg(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?bg.clone().multiplyScalar(.55):bg;Bo(i,o,s,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Bo(i,s,a,e*1.22,xg,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Bo(i,s,a,e*1.08,t.water?new tt(...t.water).multiplyScalar(.9):new tt(10475240),!0);for(let l of o(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Bo(i,c,h,e*1.3,xg,!0)}}else{let[s,a]=o(.055);Bo(i,s,a,e*1.4,vg,!0);let[l]=_g(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Bo(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,vg,!0);let u=r.open===!1?kr(na(r.dir,c)):r.dir,f=kr(na(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];qw(i,d,u,f,.1,.028,.012,Yw)}}}function Of(i){return i.furnitureId?`${i.id}@${i.furnitureId}`:i.id}var Nf=1.62,ru=.2,Uf=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let o=mi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=o.walls;let s=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=Io(a,e.rooms,e.walls??[]);if(!c)continue;let h=Lo(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],m=Math.hypot(f,d)||1,b=f/m,g=d/m,p=[u.a[0]+b*h.s,u.a[1]+g*h.s],x=u.left+.45,_=u.right+.45,v=[[p[0]-g*x,p[1]+b*x],[p[0]+g*_,p[1]-b*_]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(S=>S.points.length>=3&&Yt(v[1],S.points)))continue;let M=s.get(u)??[];M.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),s.set(u,M),this.doors.push({centre:p,p:v})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:s.get(a)??[]})}}blocked(t,e=ru){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=ru){for(let n of this.obstacles){let r=t[0]-n.c[0],o=t[1]-n.c[1];if(Math.abs(r*n.u[0]+o*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+o*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=ru){for(let n of this.solids){let r=t[0]-n.a[0],o=t[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-e||s>n.len+e)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>s>l+e*.6&&s<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Yt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let m=this.path(d,e);return m?[d,...m]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let m=this.path(t,d);return m?[...m,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>$w(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let m=ru+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,p])=>[d.c[0]+d.u[0]*g*(d.hw+m)+b[0]*p*(d.hd+m),d.c[1]+d.u[1]*g*(d.hw+m)+b[1]*p*(d.hd+m)])}).filter(d=>!this.blocked(d)),o=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],s=o.length,a=new Array(s).fill(1/0),l=new Array(s).fill(-1),c=new Array(s).fill(!1);a[0]=0;let h=new Map,u=(d,m)=>{let b=d<m?`${d}:${m}`:`${m}:${d}`,g=h.get(b);return g===void 0&&(g=this.clear(o[d],o[m]),h.set(b,g)),g};for(;;){let d=-1;for(let m=0;m<s;m++)!c[m]&&a[m]<1/0&&(d<0||a[m]<a[d])&&(d=m);if(d<0)return null;if(d===1)break;c[d]=!0;for(let m=0;m<s;m++){if(c[m]||m===d)continue;let b=Math.hypot(o[d][0]-o[m][0],o[d][1]-o[m][1]);a[d]+b>=a[m]||u(d,m)&&(a[m]=a[d]+b,l[m]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(o[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let o=Io(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=Lo(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*s.s,a.a[1]+f*s.s],m=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(m))return{p:m,yaw:this.openYaw(m,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,o)=>wg(o)-wg(r))[0],n=e?this.freeNear(di(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),o=Math.sin(e);for(let s=.2;s<n;s+=.15)if(this.blocked([t[0]+r*s,t[1]+o*s],.05))return s;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(t,s);if(e!==null){let l=Math.abs(s-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function $w(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r||1,s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))}function wg(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,o]=e[n],[s,a]=e[(n+1)%e.length];t+=r*a-s*o}return Math.abs(t/2)}var Bf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=e.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let s of t.floors)s.mask.standing.value=65535,s.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Nf}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(t,o,e),this.v.camera.lookAt(t+Math.cos(n)*s,o+Math.sin(r),e+Math.sin(n)*s),this.v.controls.view.target.set(t,o-Nf,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(di(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,h=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,o=1-(e-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),m=[Math.cos(s)*d,Math.sin(a),Math.sin(s)*d],b=[-Math.sin(s),0,Math.cos(s)],g=[m[1]*b[2]-m[2]*b[1],m[2]*b[0]-m[0]*b[2],m[0]*b[1]-m[1]*b[0]],p=[-g[0],-g[1],-g[2]],x=[m[0]+b[0]*r*u*f+p[0]*o*u,m[1]+b[1]*r*u*f+p[1]*o*u,m[2]+b[2]*r*u*f+p[2]*o*u];if(x[1]>=-.02)return null;let _=Nf/-x[1];return[l+x[0]*_,c+x[2]*_]}bind(){let t=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",s=>{e||(e={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),t(this.surface,"pointermove",s=>{if(!e||s.pointerId!==e.id)return;let a=s.clientX-e.x,l=s.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=s.clientX,e.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!e||s.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function Zw(i,t){let e=xe(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function kf(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,o=r?Zw(n,r):null;return o?[n,o]:[n]});return{...i,furniture:e}}var Sg=8,Tg=1024,Ii=6,ou=class{group=new Ie;shadow;target=null;arc=new Ie;glow=jw();textures=[];constructor(){this.shadow=new Et(new Yn(1,1),new Xt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,o,s,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(Tg,Math.max(32,Math.ceil((h-l)*Sg))),d=Math.min(Tg,Math.max(32,Math.ceil((u-c)*Sg)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new Ye(f,d,{minFilter:Xe,magFilter:Xe,depthBuffer:!1});let S=this.shadow.material;S.map=this.target.texture,S.needsUpdate=!0}let m=new ai,b=S=>{let E=new Float32Array(S.length/2*3);for(let R=0,w=0;R<S.length;R+=2,w+=3)E.set([S[R],-S[R+1],0],w);let y=new Ot;return y.setAttribute("position",new Lt(E,3)),y},g=new Et(b(e),new Xt({color:16777215,side:re})),p=[];for(let S of r)for(let E of rn(S))for(let y of E)p.push(S[y][0],S[y][1]);let x=new Et(b(p),new Xt({color:0,transparent:!0,opacity:0,blending:On,side:re,forceSinglePass:!0}));x.renderOrder=1,m.add(g,x);let _=new Dn(l,h,-c,-u,.1,10);_.position.z=1;let v=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(m,_),t.setRenderTarget(v);for(let S of[g,x])S.geometry.dispose(),S.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,o,(c+u)/2);let M=this.shadow.material;M.opacity=s,M.color.set(a),this.shadow.visible=s>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?Rn:we,n=(o,s)=>{let a=Jw(t.points.map(c=>c.at),o,t.points.map(c=>Kw(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new Et(a,new Xt({vertexColors:!0,transparent:!0,opacity:s*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new An(Ag(t.hours.flat()),new _n({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let o=this.sprite(Qw(t.light),t.size*5,t.size*5,t.fade,e);o.position.set(...t.sun),this.arc.add(o)}for(let o of t.labels){let s=this.sprite(tS(`${o.rising?"\u2191":"\u2193"} ${o.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,Rn,!0);s.position.set(...o.at),this.arc.add(s)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:o}=t.ring,s=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,s,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new qe(Ag(l),new $e({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?Rn:we,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),o.forEach((h,u)=>{let f=this.sprite(eS(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,Rn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,o,s=!1){this.textures.push(t);let a=new ss(new mo({map:t,transparent:!0,opacity:r,blending:o,depthWrite:!1,depthTest:!s}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function Ag(i){let t=new Ot;return t.setAttribute("position",new Lt(i,3)),t}function Kw(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new tt(t?13778970:16730666),r=new tt(t?14711552:16753978),o=new tt(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(o,(e-.4)/.6)}function Jw(i,t,e){let n=[],r=[],o=[],s=new $(0,1,0);for(let l=0;l<i.length;l++){let c=new $(...i[l]),h=new $(...i[Math.max(0,l-1)]),f=new $(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new $().crossVectors(f,s);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let m=new $().crossVectors(d,f).normalize();for(let b=0;b<Ii;b++){let g=b/Ii*Math.PI*2,p=c.clone().addScaledVector(d,Math.cos(g)*t).addScaledVector(m,Math.sin(g)*t);n.push(p.x,p.y,p.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Ii;b++){let g=(l-1)*Ii+b,p=(l-1)*Ii+(b+1)%Ii,x=l*Ii+b,_=l*Ii+(b+1)%Ii;o.push(g,x,_,g,_,p)}}let a=new Ot;return a.setAttribute("position",new Lt(n,3)),a.setAttribute("color",new Lt(r,3)),a.setIndex(o),a}function su(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function jw(){let[i,t]=su(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new pn(i)}function Qw(i){let[t,e]=su(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let o=r%2===0?124:92,s=e.createLinearGradient(0,0,0,-o);s.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),s.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-o),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new pn(t)}function tS(i,t){let[e,n]=su(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),o=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(o,10,r,84,42):n.rect(o,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new pn(e)}function eS(i,t,e){let[n,r]=su(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new pn(n)}var nS=40;function Eg(i,t,e,n,r){let o=[];if(n<=0)return o;let s=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(nS,Math.max(0,h-r)*s);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>o.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([b,g])=>a(b,f,g)),m=h.points.map(([b,g])=>a(b,u,g));for(let[b,g,p]of rn(h.points))l(d[b],d[g],d[p]),l(m[b],m[g],m[p]);for(let b=0;b<h.points.length;b++){let g=(b+1)%h.points.length;l(d[b],d[g],m[g]),l(d[b],m[g],m[b])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return o}function Rg(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let o=0;o<i.length;o+=2)t=Math.min(t,i[o]),n=Math.max(n,i[o]),e=Math.min(e,i[o+1]),r=Math.max(r,i[o+1]);return[t,e,n,r]}function ia(i,t,e=.3){if(!(t>0))return 0;let n=Math.min(e,t/2),r=Math.min(1,i/n,(t-i)/n);return r>0?r:0}var iS=150;function Cg(i){let t=i?ar(i):null;if(!i||!t)return null;let e=i.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points));if(!e.length)return null;let n=i.settings.sun_arc==="plot",r=n?[...e,...i.floors.flatMap(h=>[...h.rooms.flatMap(u=>u.points),...(h.outdoor??[]).flatMap(u=>u.points),...(h.walls??[]).flatMap(u=>[u.a,u.b])])]:e,[o,s,a,l]=[1/0,-1/0,1/0,-1/0];for(let[h,u]of r)o=Math.min(o,h),s=Math.max(s,h),a=Math.min(a,u),l=Math.max(l,u);let c=Math.max(7,Math.hypot(s-o,l-a)*.62);return{x:(o+s)/2,z:(a+l)/2,y:t.elevation,r:n?Math.min(iS,c):c}}function zf(i,t){let e=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=rS(c.id)%1e3/1e3;for(let b of $s(l,c)){let[g,p,x,_]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[p,1,0],[x,1,1],[_,0,1]];for(let M of[0,1,2,0,2,3]){let[S,E,y]=v[M];e.push(S[0],S[1],S[2]),n.push(E,y),r.push(u,f),o.push(d)}}let m=e.length/3-h;m&&s.push({id:c.id,start:h,count:m})}if(!e.length)return null;let a=new Ot;return a.setAttribute("position",new Lt(e,3)),a.setAttribute("uv",new Lt(n,2)),a.setAttribute("aCells",new Lt(r,2)),a.setAttribute("aPhase",new Lt(o,1)),a.setAttribute("aLevel",new Lt(new Float32Array(e.length/3),1)),{geometry:a,ranges:s}}function ra(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,t.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return e.needsUpdate=!0,r}function Vf(i){let t=new Xt({transparent:!0,blending:we,depthWrite:!1,side:re,forceSinglePass:!0});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function rS(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var oS=[1,.78,.42],Pg=[[1,.25,.3],[1,.8,.25],[.3,1,.45],[.3,.55,1]];function Ig(i,t,e,n=!0){let r=[],o=[],s=new Set,a=0,l=(u,f,d)=>{let m=`${Math.round(u/.08)},${Math.round(f/.08)},${Math.round(d/.08)}`;s.has(m)||(s.add(m),r.push(u,f-t,d),o.push(...e?Pg[a++%Pg.length]:oS))},c=(u,f,d,m=-.04)=>{let b=Math.hypot(d[0],d[2]),g=b?d[0]/b*.05:0,p=b?d[2]/b*.05:0,x=Math.hypot(f[0]-u[0],f[1]-u[1],f[2]-u[2]),_=Math.max(2,Math.round(x/.25)+1);for(let v=0;v<_;v++){let M=v/(_-1);l(u[0]+(f[0]-u[0])*M+g,u[1]+(f[1]-u[1])*M+m,u[2]+(f[2]-u[2])*M+p)}},h=(u,f,d)=>[u.o[0]+u.eu[0]*f+u.es[0]*d,u.o[1]+u.eu[1]*f+u.es[1]*d,u.o[2]+u.eu[2]*f+u.es[2]*d];for(let u of i){if(u.unbounded||u.wall)continue;let[f,d]=u.span(0);if(!u.flat){if(c(h(u,f,0),h(u,d,0),[-u.es[0],0,-u.es[2]]),n&&u.ls>0){let[g,p]=u.span(u.ls);c(h(u,f,0),h(u,g,u.ls),[-u.eu[0],0,-u.eu[2]]),c(h(u,d,0),h(u,p,u.ls),[u.eu[0],0,u.eu[2]]),p-g>.05&&c(h(u,g,u.ls),h(u,p,u.ls),[0,0,0],.04)}continue}let m=[h(u,f,0),h(u,d,0),h(u,d,u.ls),h(u,f,u.ls)],b=h(u,(f+d)/2,u.ls/2);for(let g=0;g<4;g++){let p=m[g],x=m[(g+1)%4];c(p,x,[(p[0]+x[0])/2-b[0],0,(p[2]+x[2])/2-b[2]])}}return r.length?{positions:new Float32Array(r),colors:new Float32Array(o)}:null}function Lg(i,t){let e=[];for(let s of i){if(s.unbounded||s.wall||s.ls<=0)continue;let a=(l,c)=>[s.o[0]+s.eu[0]*l+s.es[0]*c+s.n[0]*.035,s.o[1]+s.eu[1]*l+s.es[1]*c+s.n[1]*.035-t,s.o[2]+s.eu[2]*l+s.es[2]*c+s.n[2]*.035];for(let l=0;l<6;l++){let c=s.ls*l/6,h=s.ls*(l+1)/6,[u,f]=s.span(c),[d,m]=s.span(h);if(f<=u&&m<=d)continue;let b=[a(u,c),a(f,c),a(m,h),a(d,h)];for(let g of[0,1,2,0,2,3])e.push(...b[g])}}if(!e.length)return null;let o=new Ot;return o.setAttribute("position",new tn(new Float32Array(e),3)),o}var au=null;function oa(){if(au)return au;if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");if(!t)return null;let e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),au=new pn(i),au}var sa=90,aa=6,Gf=sa*aa,Hf=[[.22,.88,1],[1,.3,.75],[1,.8,.25],[.45,1,.5],[.7,.45,1]],lu=class{points;pos=new Float32Array(Gf*3);col=new Float32Array(Gf*3);vel=new Float32Array(Gf*3);age=new Float32Array(aa).fill(99);tint=Array.from({length:aa},()=>Hf[0]);next=0;wait=0;box;constructor(t){this.box=t;let e=new Ot;e.setAttribute("position",new tn(this.pos,3)),e.setAttribute("color",new tn(this.col,3));let n=new _n({size:.35,vertexColors:!0,transparent:!0,depthWrite:!1,blending:we,sizeAttenuation:!0,map:oa()});this.points=new An(e,n),this.points.frustumCulled=!1,this.points.renderOrder=30}burst(t){let e=this.box,n=e.x0+Math.random()*(e.x1-e.x0),r=e.z0+Math.random()*(e.z1-e.z0),o=e.top+3+Math.random()*3;this.age[t]=0,this.tint[t]=Hf[Math.floor(Math.random()*Hf.length)];for(let s=0;s<sa;s++){let a=(t*sa+s)*3,l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),u=3.2+Math.random()*1.6;this.pos[a]=n,this.pos[a+1]=o,this.pos[a+2]=r,this.vel[a]=h*Math.cos(c)*u,this.vel[a+1]=l*u+.6,this.vel[a+2]=h*Math.sin(c)*u}}step(t){let e=Math.min(.05,Math.max(0,t));this.wait-=e,this.wait<=0&&(this.burst(this.next),this.next=(this.next+1)%aa,this.wait=.45+Math.random()*.6);for(let n=0;n<aa;n++){this.age[n]+=e;let r=this.age[n],o=r>2.2?0:Math.max(0,1-r/2.2)**1.4,[s,a,l]=this.tint[n];for(let c=0;c<sa;c++){let h=(n*sa+c)*3;r<2.2&&(this.vel[h]*=1-1.2*e,this.vel[h+1]=this.vel[h+1]*(1-1.2*e)-2.4*e,this.vel[h+2]*=1-1.2*e,this.pos[h]+=this.vel[h]*e,this.pos[h+1]+=this.vel[h+1]*e,this.pos[h+2]+=this.vel[h+2]*e),this.col[h]=s*o,this.col[h+1]=a*o,this.col[h+2]=l*o}}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}};var Dg=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,sS=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,aS=Dg,lS=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Fg(i,t){let e=[];for(let[r,o,s]of rn(i))for(let a of[r,s,o])e.push(i[a][0],t,i[a][1]);let n=new Ot;return n.setAttribute("position",new Lt(e,3)),n}function Og(i,t){let e=new Ie;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new Et(Fg(n.points,s),new mn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Dg,fragmentShader:sS,transparent:!0,blending:we,depthWrite:!1,side:re}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,h,u]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),m=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=Lr(n.points,m);if(b.length>=3){let g=new Et(Fg(b,n.y+.03),new mn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:aS,fragmentShader:lS,transparent:!0,side:re,forceSinglePass:!0}));g.renderOrder=6,e.add(g);let p=[];for(let _=0;_<b.length;_++){let v=b[_],M=b[(_+1)%b.length];p.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Ot;x.setAttribute("position",new Lt(p,3)),e.add(new qe(x,new $e({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Ng(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var Ug=["neon","blueprint","day"];function Bg(i){return Ug.indexOf(i)}var ko={value:new $(.22,.88,1)},zo={value:0};function kg(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var cS=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line, bool accent) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (accent && uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function sn(i,t,e=!1,n=!0){let r=i.onBeforeCompile.bind(i),o=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,a)=>{r(s,a),s.uniforms.uTheme=t,s.uniforms.uAccent=ko,s.uniforms.uAccentOn=zo,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${cS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e}, ${n});`)},i.customProgramCacheKey=()=>`${o()}-themed-${e?"l":"s"}${n?"":"-na"}`,i}function la(i){return i==="day"?Rn:we}var Li=.012,uS=.012;function Gg(i,t,e,n,r,o=[],s){let a=[],l=[],c=[],h=[],u=(p,x,_,v,M,S,E)=>{for(let y of[p,x,_,p,_,v])a.push(y[0],y[1],y[2]),l.push(M[0],M[1],M[2]),c.push(S),h.push(E)};i.rooms.forEach((p,x)=>{if(p.points.length<3)return;let _=p.points.map(A=>A[0]),v=p.points.map(A=>A[1]),M=Math.min(..._),S=Math.min(...v),E=Math.max(..._),y=Math.max(...v),R=Math.max(1,Math.ceil((E-M)/r)),w=Math.max(1,Math.ceil((y-S)/r));for(let A=0;A<R;A++)for(let I=0;I<w;I++){let L=M+A*r,P=S+I*r,B=Math.min(L+r,E),T=Math.min(P+r,y),C=Lr(p.points,[[L,P],[B,P],[B,T],[L,T]]),O=C.length>=3?Math.abs(ca(C)):0;if(O<1e-4)continue;let D=vS(C);if(!o.some(N=>Yt(D,N))){if(O>(B-L)*(T-P)-1e-6){u([L,Li,P],[L,Li,T],[B,Li,T],[B,Li,P],[0,1,0],x,-1);continue}for(let[N,z,G]of rn(C)){let V=C[N],W=C[G],Q=C[z];(Q[1]-V[1])*(W[0]-V[0])-(Q[0]-V[0])*(W[1]-V[1])<0&&([V,W]=[W,V]),u([V[0],Li,V[1]],[Q[0],Li,Q[1]],[W[0],Li,W[1]],[W[0],Li,W[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(p=>p.points.length>=3&&!Mn(p.type));if(d.length){let p=d.flatMap(w=>w.points.map(A=>A[0])),x=d.flatMap(w=>w.points.map(A=>A[1])),_=Math.floor(Math.min(...p)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...p)-_)/r)),S=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),E=(w,A,I)=>Af(i,w)-Ro(i,w,A,I)+Li,y=d.map((w,A)=>({a:w,i:A,top:Af(i,w),box:yS(w.points),convex:_S(w.points)})).sort((w,A)=>+(A.a.type==="pool")-+(w.a.type==="pool")||+!!A.a.cut-+!!w.a.cut||A.top-w.top||A.i-w.i).map(w=>({...w,parts:w.convex?[w.a.points]:rn([...w.a.points]).map(A=>A.map(I=>w.a.points[I]))})),R=(w,A)=>{for(let[I,L,P]of rn(A)){let B=A[I],T=A[P],C=A[L];(C[1]-B[1])*(T[0]-B[0])-(C[0]-B[0])*(T[1]-B[1])<0&&([B,T]=[T,B]);let O=[T[0],E(w,T[0],T[1]),T[1]];u([B[0],E(w,B[0],B[1]),B[1]],[C[0],E(w,C[0],C[1]),C[1]],O,O,[0,1,0],f,-1)}};for(let w=0;w<M;w++)for(let A=0;A<S;A++){let I=_+w*r,L=v+A*r,P=[[I,L],[I+r,L],[I+r,L+r],[I,L+r]],B=[P];for(let T of y){if(!B.length)break;if(T.box[0]>=I+r||T.box[2]<=I||T.box[1]>=L+r||T.box[3]<=L)continue;let C=[];for(let O of B){let D=Lr(T.a.points,O),N=D.length>=3?Math.abs(ca(D)):0;if(N<1e-4){C.push(O);continue}if(O===P&&N>r*r-1e-6){let G=(V,W)=>[V,E(T.a,V,W),W];u(G(I,L),G(I,L+r),G(I+r,L+r),G(I+r,L),[0,1,0],f,-1);continue}R(T.a,D);let z=[O];for(let G of T.parts)z=z.flatMap(V=>MS(V,G));C.push(...z.filter(G=>G.length>=3&&Math.abs(ca(G))>1e-4))}B=C}}}let m=Math.min(i.cut_height,i.height),b=[];t.forEach((p,x)=>{let _=Math.min(i.height,p.height??i.height),v=Math.min(m,_-.02),M=p.b[0]-p.a[0],S=p.b[1]-p.a[1],E=Math.hypot(M,S);if(E<.05)return;let y=[M/E,S/E],R=[-y[1],y[0]],w=e[x],A=pS(p,y,E,n),I=(C,O)=>C?i.rooms.findIndex(D=>D.id===C):O?f:-1,L=p.slope?{h:Math.min(_,Cr(p.slope,p.a[0],p.a[1])),h1:Math.min(_,Cr(p.slope,p.b[0],p.b[1]))}:{h:_};b.push({a:p.a,b:p.b,...L,ra:I(p.roomLeft,!1),rb:I(p.roomRight,p.exterior),gaps:A,...p.footprint?.length>=3?{outline:p.footprint}:{}});let P=(C,O,D)=>[O,D,...C.filter(N=>N>O+.005&&N<D-.005)].sort((N,z)=>N-z).filter((N,z,G)=>z===0||N>G[z-1]+.005),B=P([v,(v+_)/2,...A.flatMap(C=>[C.y0+.01,C.y1-.01])],.02,_-.02),T=P(A.flatMap(C=>[C.s0,C.s1]),0,E);for(let C of[1,-1]){let O=C>0?p.roomLeft:p.roomRight,D=O?i.rooms.findIndex(W=>W.id===O):p.exterior?f:-1;if(D<0)continue;let N=(C>0?p.left:p.right)+uS,z=[R[0]*C,R[1]*C],G=(W,Q)=>[p.a[0]+y[0]*W+z[0]*N,Q,p.a[1]+y[1]*W+z[1]*N],V=W=>{let Q=G(W,0),it=s?.(Q[0],Q[2]),q=p.slope?Cr(p.slope,p.a[0]+y[0]*W,p.a[1]+y[1]*W)-.02:1/0;return Math.min(it==null?1/0:it-.02,q)};for(let W=0;W<T.length-1;W++){let Q=T[W+1]-T[W],it=Math.max(1,Math.ceil(Q/r));for(let q=0;q<it;q++){let Y=T[W]+Q/it*q,X=T[W]+Q/it*(q+1),et=(Y+X)/2;for(let J=0;J<B.length-1;J++){let rt=B[J],pt=B[J+1];if(pt-rt<.01)continue;let ct=(rt+pt)/2;if(A.some(qt=>et>qt.s0&&et<qt.s1&&ct>qt.y0&&ct<qt.y1))continue;let ot=rt>=m-1e-6?w:ir+w,gt=Math.min(pt,V(Y)),vt=Math.min(pt,V(X));if(!(gt<=rt+.005&&vt<=rt+.005)){if(gt<rt||vt<rt){let qt=Y+(X-Y)*(rt-gt)/(vt-gt);gt<rt?u(G(qt,rt),G(X,rt),G(X,vt),G(qt,rt),[z[0],0,z[1]],D,ot):u(G(Y,rt),G(qt,rt),G(qt,rt),G(Y,gt),[z[0],0,z[1]],D,ot);continue}u(G(Y,rt),G(X,rt),G(X,vt),G(Y,gt),[z[0],0,z[1]],D,ot)}}}}}});for(let p of i.furniture??[]){let x=dS(p);if(!x)continue;let _=i.rooms.findIndex(S=>S.points.length>=3&&Yt([p.x,p.z],S.points)),v=_<0?f:_,M=[p.x,p.z];b.push({a:M,b:M,h:(p.mount_y??0)+p.h,ra:v,rb:v,gaps:[],outline:x})}let g=[];for(let p of n){if(p.opening.type!=="door")continue;let x=t.find(M=>Hg(M,p)&&hS(M,p));if(!x||!x.roomLeft||!x.roomRight)continue;let _=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);_<0||v<0||g.push({id:p.opening.id,a:_,b:v,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:b,outside:f}}function Hg(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function hS(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,o=t.start[0]+t.axis[0]*(t.width/2),s=t.start[1]+t.axis[1]*(t.width/2),a=((o-i.a[0])*e+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}var fS=/(^|[:_])(column|pillar|saeule)(_|$)/i;function dS(i){if(!fS.test(i.type)||i.w<=0||i.d<=0||(i.mount_y??0)>.3)return null;let t=(i.rotation??0)*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=(o,s)=>[i.x+o*e-s*n,i.z+o*n+s*e];return/round|circle|rund/i.test(i.type)?Array.from({length:16},(s,a)=>r(Math.cos(2*Math.PI*a/16)*i.w/2,Math.sin(2*Math.PI*a/16)*i.d/2)):[r(-i.w/2,-i.d/2),r(i.w/2,-i.d/2),r(i.w/2,i.d/2),r(-i.w/2,i.d/2)]}function pS(i,t,e,n){let r=[];for(let o of n){if(!Hg(i,o))continue;let s=(o.start[0]-i.a[0])*t[0]+(o.start[1]-i.a[1])*t[1],l=o.axis[0]*t[0]+o.axis[1]*t[1]>0?s:s-o.width;l>e||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function mS(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function gS(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Wg(i,t,e,n,r,o,s){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=gS(i),d=1/(1+h/(f*f)),m=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*o+c*s)/u);return i.level*m*(.2+.8*b)*mS(i.kind,l/u)}function Xg(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,f)=>{let d=n[f]??.5;if(!(d<=.01))for(let[m,b]of[[u.a,u.b],[u.b,u.a]]){let g=[0,0,0],p=i.blockers.filter(_=>_.ra===m||_.rb===m);for(let _ of t){if(_.room!==m||p.length&&cu(_,p,u.x,u.y,u.z))continue;let v=_.x-u.x,M=_.y-u.y,S=_.z-u.z,E=Math.hypot(v,M,S)||1,y=Wg(_,u.x,u.y,u.z,v/E,M/E,S/E);g[0]+=_.color[0]*y,g[1]+=_.color[1]*y,g[2]+=_.color[2]*y}let x=Math.max(g[0],g[1],g[2]);x<.01||r.push({x:u.x,y:u.y,z:u.z,color:[g[0]/x,g[1]/x,g[2]/x],level:Math.round(Math.min(1,x*.9*(.35+.65*d))*50)/50,kind:"wall",room:b})}});let o=bS(i),{pos:s,room:a}=i,l=new Float32Array(s.length),c=new Set;for(let u of r){let f=xS(i,o,u);c.add(f.key);let d=u.color.map(g=>Math.pow(g,1.5)),{verts:m,k:b}=f;for(let g=0;g<m.length;g++){let p=m[g]*3;l[p]+=d[0]*b[g],l[p+1]+=d[1]*b[g],l[p+2]+=d[2]*b[g]}}for(let u of o.weights.keys())c.has(u)||o.weights.delete(u);let h=new Float32Array(s.length);for(let u=0;u<a.length;u++){let f=u*3;(l[f]||l[f+1]||l[f+2])&&(h[f]=1-Math.exp(-l[f]*e*1.6),h[f+1]=1-Math.exp(-l[f+1]*e*1.6),h[f+2]=1-Math.exp(-l[f+2]*e*1.6))}return h}var zg=new WeakMap;function bS(i){let t=zg.get(i);if(!t){let e=new Map;i.room.forEach((n,r)=>{let o=e.get(n);o?o.push(r):e.set(n,[r])}),t={roomVerts:new Map([...e].map(([n,r])=>[n,Uint32Array.from(r)])),weights:new Map},zg.set(i,t)}return t}function xS(i,t,e){let n=`${e.x},${e.y},${e.z},${e.kind},${e.level},${e.room}`,r=t.weights.get(n);if(r)return r;let o=t.roomVerts.get(e.room)??new Uint32Array(0),s=i.outside??-2,a=i.blockers.filter(f=>e.room===s||f.ra===e.room||f.rb===e.room),{pos:l,normal:c}=i,h=new Float32Array(o.length);for(let f=0;f<o.length;f++){let d=o[f]*3;a.length&&cu(e,a,l[d],l[d+1],l[d+2])||(h[f]=Wg(e,l[d],l[d+1],l[d+2],c[d],c[d+1],c[d+2]))}let u={key:n,verts:o,k:h};return t.weights.set(n,u),u}function cu(i,t,e,n,r){let o=e-i.x,s=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=o*c-s*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let m=(u*s-f*o)/h;if(m<0||m>1)continue;let b=i.y+(n-i.y)*d;if(b>=(a.h1===void 0?a.h:a.h+(a.h1-a.h)*m))continue;let g=m*Math.hypot(l,c);if(!a.gaps.some(p=>g>p.s0&&g<p.s1&&b>p.y0&&b<p.y1))return!0}for(let a of t){let l=a.outline;if(!l||Yt([i.x,i.z],l))continue;let c=a.b[0]-a.a[0],h=a.b[1]-a.a[1],u=Math.hypot(c,h);for(let f=0;f<l.length;f++){let d=l[f],m=l[(f+1)%l.length],b=m[0]-d[0],g=m[1]-d[1],p=o*g-s*b;if(Math.abs(p)<1e-12)continue;let x=d[0]-i.x,_=d[1]-i.z,v=(x*g-_*b)/p;if(v<=1e-6||v>=1-1e-6)continue;let M=(x*s-_*o)/p;if(M<0||M>1)continue;let S=i.y+(n-i.y)*v,E=i.x+o*v-a.a[0],y=i.z+s*v-a.a[1],R=u>1e-6?(E*c+y*h)/u:0,w=a.h1===void 0||u<=1e-6?a.h:a.h+(a.h1-a.h)*Math.min(1,Math.max(0,R/u));if(!(S>=w)&&!(u>1e-6&&a.gaps.some(A=>R>A.s0&&R<A.s1&&S>A.y0&&S<A.y1)))return!0}}return!1}function Yg(i,t,e){for(let n=.1;n<e;n+=.1)if([.1,.5,.9].some(r=>Math.abs(i(r,n)-t)>.1))return n-.05;return e}function Wf(i,t,e,n){let r=i.x-t.start[0],o=i.z-t.start[1],s=-(r*t.out[0]+o*t.out[1]),a=r*t.axis[0]+o*t.axis[1];if(s<.05||i.y<=t.sill+.05)return null;let l=s*(t.sill-e)/(i.y-t.sill);if(l>=n)return null;let c=i.y>t.top+.05?Math.min(n,s*(t.top-e)/(i.y-t.top)):n;if(c-l<.1)return null;let h=Math.max(s,1);return{d0:l,d1:c,D:s,ls:a,edge(u){let f=1+u/h;return[a-a*f,a+(t.width-a)*f]}}}function Xf(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Yt([t,e],r.points));return n<0?i.rooms.length:n}function Vo(i,t){return i&&t>=0&&t<i.length?i[t]:t}function ca(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function vS(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}function yS(i){let t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function _S(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}function Vg(i,t,e,n){let r=s=>n*((e[0]-t[0])*(s[1]-t[1])-(e[1]-t[1])*(s[0]-t[0])),o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=0&&o.push(a),c>=0!=h>=0){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u])}}return o}function MS(i,t){let e=ca(t)>0?1:-1,n=[],r=[...i];for(let o=0;o<t.length&&r.length>=3;o++){let s=t[o],a=t[(o+1)%t.length],l=Vg(r,s,a,e===1?-1:1);l.length>=3&&Math.abs(ca(l))>1e-7&&n.push(l),r=Vg(r,s,a,e)}return n}var ua={open:0,open2:0,tilt:0,tilt2:0,cover:null},qg=2043986,$g=2769520,Yf=2242399,Kf=1845831,wS=1450554,Bn=16758087,uu=3662079,SS=1.2,TS=1.5,AS=.5,ES=1846349,RS=2572395,CS=1120816,PS=1845831,qf=5995775,$f=9085695,cr=Nt(3662079,.08),IS=.2,LS=.45;function hu(i,t,e,n,r,o,s,a,l,c,h){let u=(d,m,b)=>t(d,m,b),f=[[u(e,r,a),u(n,r,a),u(n,o,a),u(e,o,a),c],[u(e,r,s),u(n,r,s),u(n,o,s),u(e,o,s),Nt(l.getHex(),.6)],[u(e,o,s),u(n,o,s),u(n,o,a),u(e,o,a),l],[u(e,r,s),u(n,r,s),u(n,r,a),u(e,r,a),Nt(l.getHex(),.85)],[u(e,r,s),u(e,o,s),u(e,o,a),u(e,r,a),Nt(l.getHex(),.92)],[u(n,r,s),u(n,o,s),u(n,o,a),u(n,r,a),Nt(l.getHex(),.92)]];for(let[d,m,b,g,p]of f)i.tri(d,m,b,p,p,p,void 0,h),i.tri(d,b,g,p,p,p,void 0,h)}function oe(i,t,e,n,r,o,s,a,l,c,h,u){if(a<=h+1e-6)return hu(i,t,e,n,r,o,s,a,l,c,Jt);if(s>=h-1e-6)return hu(i,t,e,n,r,o,s,a,l,c,u);hu(i,t,e,n,r,o,s,h,l,c,Jt),hu(i,t,e,n,r,o,h,a,l,c,u)}function Fi(i,t,e,n,r,o,s,a,l,c,h=0){let u=(f,d,m)=>{let b=v=>h?(s-v)/h:.5,g=t(e,r,f),p=t(n,r,f),x=t(n,r,d),_=t(e,r,d);i.tri(g,p,x,a,a,a,[0,b(f),1,b(f),1,b(d)],m),i.tri(g,x,_,a,a,a,[0,b(f),1,b(d),0,b(d)],m)};s<=l+1e-6?u(o,s,Jt):o>=l-1e-6?u(o,s,c):(u(o,l,Jt),u(l,s,c))}function FS(i,t,e,n,r,o,s,a,l,c){let h=t(e,r,s),u=t(n,r,s),f=t(n,o,s),d=t(e,o,s),m=0,b=(o-r)/c;i.tri(h,u,f,a,a,a,[0,m,1,m,1,b],l),i.tri(h,f,d,a,a,a,[0,m,1,b,0,b],l)}function DS(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let o=e*r.axis[0]+n*r.axis[1];if(Math.abs(o)<.999)continue;let s=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(s*n-a*e)>.03)continue;let l=s*e+a*n,c=o>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function OS(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!DS(i,t)&&Ei(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function NS(i){let t=(i.faceRoom-i.faceOut)/2;if(i.opening.type!=="window")return t;let e=i.opening.frame_pos??"middle";return e==="outside"?Math.min(t,-i.faceOut+.035):e==="inside"?Math.max(t,i.faceRoom-.095):t}function Zf(i,t,e,n,r,o,s,a,l){let c=OS(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&oe(e,n,-.04,h+.04,r+o,i.faceRoom+.07,u-.03,u,new tt(Kf),s,a,l),c.outside&&oe(e,n,-.03,h+.03,-i.faceOut-.06,r-o,u-.04,u-.02,new tt(Kf),s,a,l)}function Zg(i,t,e){let n=new te,r=new te,o=new te(!0),s=new tt(qg),a=new tt($g),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,m=o.count,b=t.get(u.opening.id)??ua,g=u.width,{sill:p,top:x,bucket:_}=u,v=(y,R,w)=>[u.start[0]+u.axis[0]*y+u.toRoom[0]*R,w,u.start[1]+u.axis[1]*y+u.toRoom[1]*R],M=NS(u),S=u.opening.mark==="closed",E=u.opening.type==="door"&&Ei(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!E||u.opening.type==="garage"){let y=-u.faceOut-.012,R=u.faceRoom+.012,w=u.opening.type==="garage"&&(S?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),A=w?Nt(Bn,.8):new tt(qg),I=w?Nt(Bn,1):new tt($g);oe(n,v,-.045,.02,y,R,0,x+.045,A,I,e,_),oe(n,v,g-.02,g+.045,y,R,0,x+.045,A,I,e,_),oe(n,v,.02,g-.02,y,R,x-.02,x+.045,A,I,e,_)}if(u.opening.type==="door"){let y=Ei(u.opening,u.exterior),R=D0(y),w=u.opening.swing==="out"?-1:1,A=w>0?u.faceRoom:-u.faceOut,I=u.opening.leaves===2,L=.02,P=g-.02,B=F0(g,y,u.hingeAtStart,u.opening);if(B){let N=-u.faceOut-.012,z=u.faceRoom+.012,G=A-w*(R?.06:.04)/2,V=.06;for(let[W,Q]of B.panels)oe(n,v,W,W+V,N,z,.02,x-.02,s,a,e,_),oe(n,v,Q-V,Q,N,z,.02,x-.02,s,a,e,_),oe(n,v,W+V,Q-V,N,z,.02,.12,s,a,e,_),Fi(r,v,W+V,Q-V,G,.12,x-.02,cr,e,_);L=B.x0,P=B.x1}let T=I?(P-L)/2-.004:P-L,C=R?.06:.04;R&&(oe(n,v,.02,g-.02,-u.faceOut-.02,u.faceRoom,0,.02,new tt(Kf),a,e,_),u.exterior&&oe(n,v,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,Nt(Bn,.55),Nt(Bn,.85),e,Jt));let O=E?[]:[[u.hingeAtStart,b.open]];I&&!E&&O.push([!u.hingeAtStart,b.open2??0]);let D=u.opening.open_angle;for(let[N,z]of O){let G=Math.min(1,Math.max(0,z)),V=y==="sliding"?0:D!=null&&D>0?(b.sensed?G:Math.min(1,G/AS))*Math.min(170,D)*(Math.PI/180):G*TS,W=y==="sliding"?G*T:0,Q=(ct,ot,gt)=>{let vt=ct*Math.cos(V)-ot*Math.sin(V)-W,qt=A+w*(ot*Math.cos(V)+ct*Math.sin(V)+(W?.05:0));return v(N?L+vt:P-vt,qt,gt)},it=G>.05?Jt:_,q=S?!!b.sensed&&G<.05:G>.9,Y=q?Nt(Bn,.7):new tt(R?CS:ES),X=q?Nt(Bn,.9):new tt(R?PS:RS);y==="glass"?(oe(n,Q,0,.05,-C,0,.01,x-.01,Y,X,e,it),oe(n,Q,T-.05,T,-C,0,.01,x-.01,Y,X,e,it),oe(n,Q,.05,T-.05,-C,0,.01,.12,Y,X,e,it),oe(n,Q,.05,T-.05,-C,0,x-.08,x-.01,Y,X,e,it),Fi(r,Q,.05,T-.05,-C/2,.12,x-.08,cr,e,it)):oe(n,Q,0,T,-C,0,.01,x-.01,Y,X,e,it);for(let ct of[.001,-C-.001])y==="front_glass"?Fi(r,Q,.12,T-.12,ct,x*.55,x-.18,cr,e,it):R&&Fi(r,Q,.1,.18,ct,.3,x-.3,cr,e,it);let et=Math.min(1.05,x*.5),J=R?.3:.012,rt=R?T-.11:T-.16,pt=R?T-.08:T-.05;oe(n,Q,rt,pt,.004,.05,et-J,et+J,new tt(qf),new tt($f),e,it),oe(n,Q,rt,pt,-C-.05,-C-.004,et-J,et+J,new tt(qf),new tt($f),e,it),b.unlocked&&N===u.hingeAtStart&&oe(n,Q,T-.022,T+.004,-C-.006,.006,.03,x-.03,Nt(uu,.85),Nt(uu,1),e,it)}}else if(u.opening.type==="garage"){let y=Math.min(1,Math.max(0,b.cover??1)),R=new tt(13951231),w=u.faceRoom-.03,A=x*(1-y);y>.01&&Fi(o,v,.02,g-.02,w,A,x,R,e,_,.5);let I=(1-y)*x;I>.01&&FS(o,v,.02,g-.02,w,w+I,x+.03,R,_,.5)}else if(Ei(u.opening,u.exterior)==="slide"){oe(n,v,0,.06,M-.05,M+.05,p,x,s,a,e,_),oe(n,v,g-.06,g,M-.05,M+.05,p,x,s,a,e,_),oe(n,v,.06,g-.06,M-.05,M+.05,p,p+(p>.05?.06:.03),s,a,e,_),oe(n,v,.06,g-.06,M-.05,M+.05,x-.06,x,s,a,e,_),Zf(u,i,n,v,M,.05,a,e,_);let w=p+(p>.05?.06:.03),A=x-.06,I=(g-2*.06)/2+.03,L=Math.min(1,Math.max(b.open,b.tilt*.12)),P=S?!!b.sensed&&L<.02:L>.02,B=P?Nt(Bn,.75):new tt(Yf),T=P?Nt(Bn,.95):a,C=.06,O=(W,Q,it,q,Y,X)=>{let et=(pt,ct,ot)=>v(pt+it,ct,ot),J=W+I,rt=it?Jt:_;oe(n,et,W,W+C,Q,Q+.04,w,A,q,Y,e,rt),oe(n,et,J-C,J,Q,Q+.04,w,A,q,Y,e,rt),oe(n,et,W+C,J-C,Q,Q+.04,w,w+C,q,Y,e,rt),oe(n,et,W+C,J-C,Q,Q+.04,A-C,A,q,Y,e,rt),Fi(r,et,W+C,J-C,Q+.02,w+C,A-C,X,e,rt)},D=u.hingeAtStart?.06:g-.06-I,N=u.hingeAtStart?g-.06-I:.06,z=L*(I-.08)*(u.hingeAtStart?-1:1);O(D,M-.05+.005,0,new tt(Yf),a,cr),O(N,M+.005,z,B,T,P?Nt(Bn,.16):cr);let G=u.hingeAtStart?N+.025:N+I-.035,V=Math.min(1.05,(p+x)/2);oe(n,(W,Q,it)=>v(W+z,Q,it),G,G+.012,M+.045,M+.07,V-.15,V+.15,new tt(qf),new tt($f),e,Jt)}else if(Ei(u.opening,u.exterior)==="glass_wall"){oe(n,v,0,.04,M-.025,M+.025,p,x,s,a,e,_),oe(n,v,g-.04,g,M-.025,M+.025,p,x,s,a,e,_),oe(n,v,.04,g-.04,M-.025,M+.025,p,p+.03,s,a,e,_),oe(n,v,.04,g-.04,M-.025,M+.025,x-.04,x,s,a,e,_),Zf(u,i,n,v,M,.025,a,e,_);let w=Math.max(1,Math.round((g-2*.04)/.9)),A=(g-2*.04)/w;for(let I=1;I<w;I++){let L=.04+I*A;oe(n,v,L-.02,L+.02,M-.025,M+.025,p+.03,x-.04,s,a,e,_)}for(let I=0;I<w;I++){let L=.04+I*A+(I?.02:0),P=.04+(I+1)*A-(I<w-1?.02:0);Fi(r,v,L,P,M,p+.03,x-.04,cr,e,_)}}else{oe(n,v,0,.06,M-.035,M+.035,p,x,s,a,e,_),oe(n,v,g-.06,g,M-.035,M+.035,p,x,s,a,e,_),oe(n,v,.06,g-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),s,a,e,_),oe(n,v,.06,g-.06,M-.035,M+.035,x-.06,x,s,a,e,_),Zf(u,i,n,v,M,.035,a,e,_);let w=.055,A=p+(p>.05?.06:.03),I=x-.06,L=M+.035,P=M+.035+.06,T=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let C of T){let O=C.open>.02||C.tilt>.02,D=S?!!b.sensed&&!O:O,N=D?Nt(Bn,.75):new tt(Yf),z=D?Nt(Bn,.95):a,G=C.x0,V=C.x1,W=V-G,Q=!!u.opening.top_hung,it=Q?0:C.open*SS*(u.opening.swing==="out"?-1:1),q=Q?0:C.tilt*IS,Y=Q?Math.max(C.open,C.tilt)*LS:0,X=(J,rt,pt)=>{if(Y){let he=rt-L,fe=pt-I,jt=C.atStart?G+J:V-J;return v(jt,L+he*Math.cos(Y)+fe*Math.sin(Y),I-he*Math.sin(Y)+fe*Math.cos(Y))}let ct=pt-A,ot=rt+ct*Math.sin(q),gt=A+ct*Math.cos(q),vt=J*Math.cos(it)-(ot-L)*Math.sin(it);ot=L+(ot-L)*Math.cos(it)+J*Math.sin(it);let qt=C.atStart?G+vt:V-vt;return v(qt,ot,gt)},et=Math.abs(it)>.05||Y>.05?Jt:_;if(oe(n,X,0,w,L,P,A,I,N,z,e,et),oe(n,X,W-w,W,L,P,A,I,N,z,e,et),oe(n,X,w,W-w,L,P,A,A+w,N,z,e,et),oe(n,X,w,W-w,L,P,I-w,I,N,z,e,et),Fi(r,X,w,W-w,(L+P)/2,A+w,I-w,D?Nt(Bn,.16):cr,e,et),b.unlocked&&C.atStart===u.hingeAtStart&&oe(n,X,W-.022,W+.004,L-.006,P+.006,A+.02,I-.02,Nt(uu,.85),Nt(uu,1),e,et),Ei(u.opening,u.exterior)==="bars"){let J=(A+I)/2,rt=(L+P)/2;oe(n,X,w,W-w,rt-.012,rt+.012,J-.012,J+.012,N,z,e,et),oe(n,X,W/2-.012,W/2+.012,rt-.012,rt+.012,A+w,I-w,N,z,e,et)}}}if(b.cover!==null){let y=-u.faceOut,R=x+.2;oe(n,v,-.05,g+.05,y-.15,y,x,R,new tt(wS),a,e,_);let w=Math.min(1,Math.max(0,b.cover));if(w>.01){let A=x-w*(x-p);Fi(o,v,0,g,y-.07,A,x,new tt(16777215),e,_,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:m,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:h}}var US=.3,Kg=2.6;function Jg(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),o=i.map(M=>M[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),h=c-l>=a-s,u=e*.7071,f=M=>{let S=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],E=[...S,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return S.every(y=>Yt(y,i))&&!n.some(y=>E.some(R=>Yt(R,y)))},d=(M,S)=>f(h?[M,S]:[S,M]),m=(M,S)=>{let E=Math.ceil(Math.hypot(S[0]-M[0],S[1]-M[1])/.05);for(let y=1;y<E;y++)if(!f([M[0]+(S[0]-M[0])*y/E,M[1]+(S[1]-M[1])*y/E]))return!1;return!0},[b,g,p,x]=h?[s,a,l,c]:[l,c,s,a],_=[],v=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let S=null,E=null,y=.05;for(let I=p;I<=x+1e-6;I+=y)if(d(M,I)&&(E??=I),(!d(M,I)||I+y>x+1e-6)&&E!==null){let L=d(M,I)?I:I-y;(!S||L-E>S[1]-S[0])&&(S=[E,L]),E=null}if(!S||S[1]-S[0]<.2)continue;let R=I=>{let[L,P]=I?S:[S[1],S[0]];return[h?[M,L]:[L,M],h?[M,P]:[P,M]]},w=R(v),A=_[_.length-1];if(A&&n.length&&!m(A,w[0])){let I=R(!v);if(!m(A,I[0]))continue;w=I,v=!v}_.push(w[0],w[1]),v=!v}return _}function jf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let o=r/e*Math.PI*2;return[i[0]+Math.cos(o)*t,i[1]+Math.sin(o)*t]})}var Jf=i=>Math.atan2(Math.sin(i),Math.cos(i));function jg(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Jf(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Kg*e),!0)}let a=Math.atan2(r,o),l=Jf(a-i.heading);if(i.heading=Jf(i.heading+Math.sign(l)*Math.min(Math.abs(l),Kg*e)),Math.abs(l)<.35){let c=Math.min(s,US*e);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}function Qg(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var BS=66,kS=250;function tb(i,t){return i?t>=3e4?kS:BS:0}function eb(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var zS=50,Qf=90,nb=4e3;function ib(i){if(i.length<Qf)return!1;let t=[...i].sort((e,n)=>e-n);return t[Math.floor(t.length/2)]>zS}var td="neonplan3d.slow_device";var kn=null,rb=new Map;function sb(i,t=0){let e=new te,n=new Oe,r=xe(i.type);if(r?.light)Wc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)ed(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Hc(e,n,new te,o,0,!0)}return{buf:e,lines:n}}function VS(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,o=rb.get(r);if(o)return o;e&&Ds(e),kn??=new Tr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),kn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),kn.setSize(t,t,!1),kn.setClearColor(0,0);let{buf:s,lines:a}=sb(i),l=new ai,c=new Et(s.geometry(),new Xt({vertexColors:!0,color:new tt(n,n,n)})),h=new qe(a.geometry(),new $e({vertexColors:!0,color:new tt(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new yn().setFromObject(c),f=u.getCenter(new $),d=new Dn(-1,1,1,-1,.01,100);d.position.copy(f).add(new $(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let m=.05;for(let p of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let _ of[u.min.z,u.max.z]){let v=new $(p,x,_).applyMatrix4(d.matrixWorldInverse);m=Math.max(m,Math.abs(v.x),Math.abs(v.y))}let b=m*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),kn.render(l,d);let g=kn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),rb.set(r,g),g}function GS(i,t,e=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,s=ob.get(o);if(s)return s;n&&Ds(n);let{buf:a,lines:l}=sb(i,t),c=new Et(a.geometry(),new Xt({vertexColors:!0,color:new tt(r,r,r)})),h=new qe(l.geometry(),new $e({vertexColors:!0,color:new tt(r*1.8,r*1.8,r*1.8)})),u=new yn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,m=Math.max(0,u.min.y),b=u.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),p=Math.max(1,Math.min(1024,Math.round((b-m)*e)));kn??=new Tr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),kn.setPixelRatio(1),kn.setSize(g,p,!1),kn.setClearColor(0,0);let x=new ai;x.add(c,h);let _=new Dn(f,d,b,m,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),kn.render(x,_);let v=kn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:v,x0:f,x1:d,y0:m,y1:b};return ob.set(o,M),M}var ob=new Map;var RP={Group:Ie,Mesh:Et,MeshBasicMaterial:Xt,CanvasTexture:pn,Color:tt,PlaneGeometry:Yn,BufferGeometry:Ot,Float32BufferAttribute:Lt,DoubleSide:re},lb={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},HS=[.22,.88,1],WS=2.4,cb=1.4,XS=.22,ub=.94,hb=140,fb=1.5;function YS(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[o,s]=e[r],[a,l]=e[(r+1)%e.length],c=a-o,h=l-s,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-o)*c+(t-s)*h)/u));n=Math.min(n,Math.hypot(i-(o+c*f),t-(s+h*f)))}return n}var id=32,qS=500,db=160;function pb(i,t){return i.furniture.some(e=>t.has(e.id))||(i.outdoor??[]).some(e=>(e.gates??[]).some(n=>t.has(n.id)))}var $S=33,mb=.028,ZS=.026,KS=.012,JS=.09,se=2767456,jS=2240847,QS=3096944,tT=1911110,eT=1,gb=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),fu=450,bb=125,nT=200,iT=.08,Go={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},rT=new tt(1714765);function oT(){let i=navigator;return eb(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)||sT()}var vb=!1;function sT(){if(vb)return!0;try{return localStorage.getItem(td)==="1"}catch{return!1}}var rd=class{host;options;renderer;scene=new ai;camera=new Qe(38,1,.1,400);controls;labels;root=new Ie;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new ou;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];hourCycle={};flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;slowWatch=null;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;pendingFurniture=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new qe(new Ot,new $e({color:10471679,transparent:!0,opacity:.4,blending:we,depthWrite:!1}));snow=new An(new Ot,new _n({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));mist=new An(new Ot,new _n({color:14542064,size:13,transparent:!0,opacity:.2,depthWrite:!1,fog:!1}));skyDisc=new Et(new us(1,28),new Xt({color:16767370,transparent:!0,opacity:0,blending:we,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;roofSnow=0;snowMat=null;roofLights="off";roofOutline=!0;lightsMat=null;lightsHalo=null;firework=null;fireworkTimer;fireworkAt=0;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fitted=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.renderer.domElement.addEventListener("webglcontextlost",()=>{this.disposed||this.options.onContextLost?.()}),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=lT(),this.blindTexture=uT(),this.haloTexture=dT(),this.ground=new Et(new Yn(1,1),new Xt({transparent:!1,blending:we,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.mist.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.mist.visible=!1,this.mist.material.map=this.haloTexture,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.mist,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=tb(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return Qg(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Ds(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,this.controls.rightClickBack=!!t.settings.right_click_back,S0(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&this.fitted&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>Ac(h.floor).some(u=>u.id===t)),n=e?Ac(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=di(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new $(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[o,s]=di(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new $(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new $(o,e.floor.elevation+e.ty+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){let r=Of(n);e.add(r);let o=this.devicePins.get(r);o||(o={el:this.makeDevicePin(n.id,n.furnitureId),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r,o),this.labels.append(o.el));let s=o.el;o.icon!==n.icon&&(o.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),o.text!==n.text&&(o.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let a=n.caption??"";o.caption!==a&&(o.caption=a,s.querySelector(".fp3d-dev-name").textContent=a);let l=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";o.watt!==l&&(o.watt=l,s.querySelector(".fp3d-dev-watt").textContent=l);let c=`${n.name}: ${n.text}`;o.label!==c&&(o.label=c,s.title=n.name,s.setAttribute("aria-label",c)),o.active!==n.active&&(o.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),o.unavailable!==n.unavailable&&(o.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let h=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";o.glow!==h&&(o.glow=h,h?s.style.setProperty("--fp3d-glow",h):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])ra(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&ra(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Ng(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Og(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ie;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=t.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let h=0;h<3;h++){let u=new Et(new ms(.92,1,48),new Xt({color:3662079,transparent:!0,opacity:0,blending:we,depthWrite:!1,side:re,forceSinglePass:!0}));u.rotation.x=-Math.PI/2,u.position.set(c.x,s+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of o)for(let h of c.members){let u=o.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,u.x,s+.02,u.z))}if(a.length){let c=new Ot;c.setAttribute("position",new Lt(a,3));let h=new qe(c,new $e({color:3662079,transparent:!0,opacity:.45,blending:we,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(e*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let o=ha(r),s=nd(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?e*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setRoofSnow(t){let e=Math.round(Math.max(0,Math.min(1,t))*10)/10;e!==this.roofSnow&&(this.roofSnow=e,this.buildRoofMesh(),this.invalidate())}setRoofLights(t,e=!0){t===this.roofLights&&e===this.roofOutline||(this.roofLights=t,this.roofOutline=e,this.buildRoofMesh(),this.invalidate())}setFirework(t){if(t===!!this.firework)return;if(!t){this.scene.remove(this.firework.points),this.firework.dispose(),this.firework=null;return}let e=(this.building?.floors??[]).flatMap(s=>s.rooms.flatMap(a=>a.points));if(!e.length)return;let n=Math.max(...(this.building?.floors??[]).map(s=>s.elevation+s.height)),r=e.map(s=>s[0]),o=e.map(s=>s[1]);this.firework=new lu({x0:Math.min(...r),z0:Math.min(...o),x1:Math.max(...r),z1:Math.max(...o),top:n}),this.scene.add(this.firework.points),this.fireworkAt=performance.now(),this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let o=[],s=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity),u=c.follow?(t.floor.outdoor??[]).find(f=>f.id===c.follow.areaId):void 0;for(let f of rn(c.points))for(let d of f){let[m,b]=c.points[d];o.push(m,u?Er(t.floor,u,m,b)+c.follow.lift:c.y,b),s.push(c.color[0],c.color[1],c.color[2],h)}}let a=r?t.patchGlowMesh:t.patchMesh,l=new Ot;l.setAttribute("position",new Lt(o,3)),l.setAttribute("color",new Lt(s,4)),a.geometry.dispose(),a.geometry=l,a.visible=o.length>0}}}buildPipes(t){let e=this.pipes.filter(o=>o.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new te;for(let o of e)Mg(r,o);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=s=>{let a=[],l=(f,d,m,b,g)=>{let p=Math.hypot(m-f,b-d)||1,x=-(b-d)/p*(g/2+s),_=(m-f)/p*(g/2+s);a.push(f+x,d+_,0,m+x,b+_,0,m-x,b-_,0,f+x,d+_,0,m-x,b-_,0,f-x,d-_,0)},h=.14+s;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,m=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(m)*h,1.47+Math.sin(m)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Ot;return u.setAttribute("position",new Lt(a,3)),u},n=new Et(e(0),new Xt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:re,forceSinglePass:!0})),r=new Et(e(.05),new Xt({color:t,transparent:!0,opacity:.22,blending:we,depthWrite:!1,side:re,forceSinglePass:!0}));n.renderOrder=6,r.renderOrder=5;let o=new Ie;return o.add(r,n),o.visible=!1,o}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let o=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",o);let s=this.figures.get(n.id);if(o&&(!s||s.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!o&&s&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=kg(t),n=e?1:0;n===zo.value&&(!e||ko.value.equals(new $(...e)))||(zo.value=n,e&&ko.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Bg(t),Am(t!=="neon"),this.building?.floors.some(o=>o.furniture.some(s=>s.type==="waste_bin"||Lm(s.type)))&&this.rebuild();let n=la(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.buildSunFx(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.invalidate()}setSunPath(t,e,n){this.sunPath=t,e&&(this.compassLetters=e),n&&(this.hourCycle=n),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new tt(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new po(n,1,2):null,this.placeFog();let r=e?Math.round(700*t.rain):0,o=e?Math.round(450*t.snow):0,s=e&&t.fog>0?Math.round(18+30*t.fog):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.seedMist(s),this.rain.visible=r>0,this.snow.visible=o>0,this.mist.visible=s>0}seedMist(t){if((this.mist.geometry.getAttribute("position")?.count??0)===t)return;let n=this.weatherBox,[r,o,s,a]=[n.x0+6,n.x1-6,n.z0+6,n.z1-6],l=new Float32Array(t*3);for(let h=0;h<t;h++){let u=0,f=0;for(let d=0;d<12&&(u=n.x0-3+Math.random()*(n.x1-n.x0+6),f=n.z0-3+Math.random()*(n.z1-n.z0+6),!(u<r-1||u>o+1||f<s-1||f>a+1));d++);l.set([u,n.y0+.4+Math.random()*1.6,f],h*3)}this.mist.geometry.dispose();let c=new Ot;c.setAttribute("position",new Lt(l,3)),this.mist.geometry=c}placeFog(){let t=this.scene.fog;if(!(t instanceof po))return;let e=this.weatherBox,n=Math.hypot((e.x1-e.x0)/2-6,(e.z1-e.z0)/2-6,(e.y1-e.y0)/2),r=this.camera.position.distanceTo(new $((e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.z0+e.z1)/2));t.near=r+n,t.far=t.near+8+50*(1-(this.weather?.fog??0))}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let o=this.weatherBox,s=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=o.x0+Math.random()*(o.x1-o.x0),u=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([h,u,f],c*3),n&&s.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Ot;l.setAttribute("position",new Lt(s,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible&&!this.mist.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+s*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-s*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(s+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}if(this.mist.visible){let a=this.mist.geometry.getAttribute("position"),l=a.array,c=t/1e3,h=.12+s*.12;for(let u=0;u<l.length;u+=3){let f=l[u]+h*n,d=l[u+2]+Math.sin(c*.3+u)*.05*n;f>r.x1+3&&(f=r.x0-3),l[u]=f,l[u+2]=d}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*ie,s=(r?t.azimuth+180:t.azimuth)*ie,a=Math.max(10,Math.abs(t.elevation))*ie,{center:l,r:c}=this.skyFrame(),h=new $(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new $((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1&&!this.options.safeFx,r=(t?.settings.north??0)*ie,o=this.weather?.cloud??0,s=n&&!this.lowQuality&&e.elevation>1&&o<.9&&!this.roomTint,a=s?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${o.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,s?this.drawShadow(t,e,r,o):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${this.hourCycle.hourCycle??""},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${o.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(p,x,_=0)=>{let v=Math.max(0,x)*ie,M=r+p*ie;return[h.x+Math.sin(M)*Math.cos(v)*h.r,h.y+Math.sin(v)*h.r+_,h.z-Math.cos(M)*Math.cos(v)*h.r]},d=1-.7*o,m=Date.now(),b=p=>new Date(p).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...this.hourCycle}),g=h.r*.03;this.sunFx.setArc({points:l.points.map(p=>({at:f(p.azimuth,p.elevation),t:p.t,elevation:p.elevation})),now:m,hours:l.points.filter(p=>p!==l.rise&&p!==l.set&&new Date(p.t).getMinutes()===0).map(p=>f(p.azimuth,p.elevation)),labels:[l.rise,l.set].flatMap(p=>p?[{text:b(p.t),at:f(p.azimuth,p.elevation,g*2.2),rising:p===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:g,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=Cg(this.building);if(!t||!this.building)return t;let e=ar(this.building),n=e?this.floorMap.get(e.id):void 0;return n?.y?{...t,y:t.y+n.y}:t}cameraBusy(){return this.controls.busy||this.lastFrame>0&&performance.now()-this.lastFrame<100}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1||this.options.safeFx?0:this.nightFactor(),o=n&&r>0?ar(n):null,s=!!o&&Math.abs(t.floor.elevation-o.elevation)<.5,a=f=>Math.pow(Math.max(0,(f-.2)/.8),2),l=s?e.filter(f=>a(f.level)>.02):[],c=[...t.openings.values()].map(f=>(f.cover??0).toFixed(1)).join(","),h=l.length?`${r.toFixed(2)}|${l.map(f=>`${f.room}:${f.x.toFixed(2)},${f.y.toFixed(2)},${f.z.toFixed(2)},${f.level.toFixed(2)},${f.color.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${c}|${t.lightSurface?1:0}`:"";if(h===t.spillSig)return;t.spillSig=h;let u=new te;if(h){let f=t.lightSurface?.blockers??[],d=t.floor.rooms.filter(p=>p.points.length>=3),m=(p,x)=>{let _=d.find(v=>Yt([p,x],v.points));return _?_.outdoor?0:99:T0(t.floor,p,x)},b=5,g=[[0,0],[.18,1],[.82,1],[1,0]];for(let p of t.geo.openings){if(p.opening.type!=="window"||!p.exterior)continue;let x=t.floor.rooms.findIndex(L=>L.id===p.opening.room_id);if(x<0)continue;let _=Vo(t.lightZones,x),M=1-(t.openings.get(p.opening.id)?.cover??0),S=p.top-p.sill;if(M<.05||S<.1)continue;let E=[-p.toRoom[0],-p.toRoom[1]],y=(L,P)=>[p.start[0]+p.axis[0]*L+E[0]*P,p.start[1]+p.axis[1]*L+E[1]*P],[R,w]=y(p.width/2,p.faceOut+.05),A=m(R,w);if(A>50)continue;let I=(p.sill+p.top)/2;for(let L of l){if(L.room!==_)continue;let P=[.1,.3,.5,.7,.9].filter(rt=>{let[pt,ct]=y(rt*p.width,-.02);return!cu(L,f,pt,I,ct)});if(!P.length)continue;let B=Math.max(0,P[0]-.1),T=Math.min(1,P[P.length-1]+.1),C={start:y(B*p.width,0),axis:p.axis,out:E,width:(T-B)*p.width,sill:p.sill,top:p.top},O=Wf(L,C,A,b);if(!O)continue;let D=Math.max(O.d0,p.faceOut+.02),N=m(...y(B*p.width+C.width/2,D));if(N>50||Math.abs(N-A)>.1&&(O=Wf(L,C,N,b),!O))continue;let z=Math.max(O.d0,p.faceOut+.02);if(O.d1-z<.15)continue;let G=(rt,pt)=>{let[ct,ot]=O.edge(pt);return B*p.width+ct+rt*(ot-ct)},V=Yg((rt,pt)=>m(...y(G(rt,z+pt),z+pt)),N,O.d1-z);if(V<.15)continue;let W=O.d1>=b&&z+V>b-.1,Q=Math.max(L.color[0],L.color[1],L.color[2],1e-6),it=.3*r*a(L.level)*M*Math.min(1,S/1.2)/Math.sqrt(l.filter(rt=>rt.room===_).length),q=new tt(L.color[0]/Q*it,L.color[1]/Q*it,L.color[2]/Q*it),Y=(rt,pt,ct)=>{let ot=(rt-L.x)**2+(pt-L.y)**2+(ct-L.z)**2,gt=1/(1+ot/9),vt=Math.max(0,L.y-pt)/Math.sqrt(ot||1e-6);return Math.min(1,gt*Math.sqrt(gt)*vt/.15)},X=(rt,pt)=>{let[ct,ot]=y(G(rt,pt),pt),gt=m(ct,ot);return[ct,(gt>50?N:Math.max(N,gt))+.014,ot]},et=(rt,pt)=>{let ct=Math.min(1,(pt-z)/.25+.3),ot=W?Math.min(1,(z+V-pt)/1.2):1;return Y(rt[0],rt[1],rt[2])*ct*ot},J=Math.max(4,Math.ceil(V/.3));for(let rt=0;rt<J;rt++){let pt=z+V*rt/J,ct=z+V*(rt+1)/J;for(let ot=0;ot+1<g.length;ot++){let[gt,vt]=g[ot],[qt,he]=g[ot+1],fe=X(gt,pt),jt=X(qt,pt),Me=X(qt,ct),Z=X(gt,ct),ke=q.clone().multiplyScalar(et(fe,pt)*vt),me=q.clone().multiplyScalar(et(jt,pt)*he),H=q.clone().multiplyScalar(et(Me,ct)*he),F=q.clone().multiplyScalar(et(Z,ct)*vt);u.tri(fe,jt,Me,ke,me,H),u.tri(fe,Me,Z,ke,H,F)}}}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=u.geometry(),t.spillMesh.visible=u.count>0}drawShadow(t,e,n,r){let o=ar(t),s=o?.rooms.filter(g=>!g.outdoor&&g.points.length>=3)??[];if(!o||!s.length)return this.sunFx.hideShadow();let a=s.flatMap(g=>g.points.map(p=>p[0])),l=s.flatMap(g=>g.points.map(p=>p[1])),c=o.elevation+Ao(o,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*ie,u=Eg(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=Rg(u);if(!f)return this.sunFx.hideShadow();let d=o.elevation-c<=.35?o.elevation+.012:c+.012,m=t.floors.filter(g=>Math.abs(g.elevation-o.elevation)<.5).flatMap(g=>g.rooms.filter(p=>!p.outdoor&&p.points.length>=3).map(p=>p.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,m,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){t.textContent="";let r=document.createElement("span");if(r.className="fp3d-pin-name",r.textContent=e||"\u2013",t.append(r),n){let o=document.createElement("small");o.textContent=n,t.append(o),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=t.get(o)??ua,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed&&!!l.unlocked==!!s.unlocked||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let o=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};o.tl=r.left?1:0,o.tr=r.right?1:0,this.fridges.set(n,o)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let o=r.out??(r.settled&&r.moving>0?1:0),s=this.awnings.get(n)??{cur:o,to:o,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)pb(e.floor,t)&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,e.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*t/1e3):o.cur+s*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/db),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)pb(r.floor,n)&&this.buildFridges(r);return!0}buildFridges(t){let e=new te;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Pm(e,n,ln(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&Cm(e,n,ln(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=_c(n.type),o=r?xe(n.type):void 0;r&&o&&Om(e,o,r,n,ln(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.gateTris=[];for(let n of t.floor.outdoor??[])for(let r of Ec(n)){let o=e.count;km(e,t.floor,n,r,this.awnings.get(r.gate.id)?.cur??0);let s=r.gate.entity&&r.gate.entity!=="none"?r.gate.entity:r.gate.contact&&r.gate.contact!=="none"?r.gate.contact:null;s&&t.gateTris.push({id:s,start:o,end:e.count})}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new nu(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*ie,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.05,(e.tilt??(o?65:20))*ie)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y);return{position:new $(e.x,a,e.z),direction:new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s)),fov:Math.min(e.fov??(o?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(o?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let o of[n.floorMesh,n.wallMesh])o.layers.enable(iu);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(iu),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.firework?.dispose(),this.snowMat?.dispose(),this.lightsMat?.dispose(),this.lightsHalo?.dispose(),clearTimeout(this.fireworkTimer),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&oT();this.lowQuality=e,this.slowWatch=t==="auto"&&!e?{quality:t,since:performance.now(),last:0,ms:[]}:null,this.applyWeather(),this.highQuality=t==="high";let n=new Tr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ne,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new tu(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),back:()=>this.options.onBack?.(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t,e){let n=document.createElement("button");n.className="fp3d-dev",n.dataset.entity=t;let r=document.createElement("span");r.className="fp3d-dev-icon";let o=document.createElement("span");o.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let a=document.createElement("span");a.className="fp3d-dev-name",n.append(r,o,s,a);let l,c=!1;n.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t,this.pendingFurniture=e??null;return}u.stopPropagation(),c=!1,clearTimeout(l),l=setTimeout(()=>{c=!0;let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)},qS)});let h=()=>clearTimeout(l);return n.addEventListener("pointerleave",h),n.addEventListener("pointercancel",h),n.addEventListener("pointerup",h),n.addEventListener("contextmenu",u=>u.preventDefault()),n.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(c)return;let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();if(this.tapOpens){let m=this.devices.find(b=>b.id===t);return m?this.options.onRoomTap?.(m.floorId,m.roomId??null):this.onTap(f.left+f.width/2-d.left,f.bottom-d.top)}this.options.onDeviceTap?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)}),n.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)}}),n}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Gg(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=xb(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Vo(r,a.ra),a.rb=Vo(r,a.rb)}t.lightSurface=n;let o=new Ot;o.setAttribute("position",new Lt(n.pos,3)),o.setAttribute("color",new Lt(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new Lt(n.fold,1));let s=new br(new Uint32Array(n.pos.length/3),1);s.setUsage(bh),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=o,t.glowSig="",this.buildGlow(t)}packLightsAt(t){if(!t.pack||t.lamp==="wall"||t.lamp==="strip")return[];let e=xe(t.pack);if(!e)return[];let[n,r,o]=t.size??Go[t.lamp??"ceiling"],s=Um(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0);return s.length>1?s:[]}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=xe(t.pack);if(!e)return null;let[n,r,o]=t.size??Go.wall;return Nm(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let o=n.top??t.floor.height,s=Xf(t.floor,n.x,n.z),a=Vo(t.lightZones,s),[l,,c]=n.size??(n.lamp?Go[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[o-.12,"ceiling"],downlight:[o-.03,"spot"],spot:[o-c,"spot"],panel:[o-.05,"ceiling"],pendant:[Math.max(.5,o-c),"pendant"],fan:[Math.max(.5,o-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<eT?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],m=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*ie,p=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*ie;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(_),y:m+Math.sin(_)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(_),color:b,level:r.level*.55,kind:p||_?"omni":d,room:a})}}else{let g=this.packLightsAt(n);if(g.length){for(let x of g)e.push({x:x[0],y:Math.min(m,x[1]),z:x[2],color:b,level:r.level*.8,kind:d,room:a});continue}let p=this.packLightAt(n);e.push({x:p?p[0]:n.x,y:p?p[1]:m,z:p?p[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(o=>o!==t&&Math.abs(o.floor.elevation-e)<.8&&o.geo.holes.length);if(!n)return[];let r=[];for(let o of n.geo.holes){if(o.length<3)continue;let s=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=Yt([h.x,h.z],o)?0:YS(h.x,h.z,o);if(f>fb)continue;let d=u.level*(1-f/fb);for(let m=0;m<3;m++)a[m]+=u.color[m]*d;s+=d}if(s<.02)continue;let[l,c]=di(o);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/s,a[1]/s,a[2]/s],level:Math.min(1,s)*.6,kind:"ceiling",room:Vo(t.lightZones,Xf(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(m=>m.opening.id===u.id);if(f&&Ei(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),o=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(o===t.glowSig)return;t.glowSig=o;let s=t.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=Xg(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}s.index.needsUpdate=!0,s.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:sn(new Xt({vertexColors:!0}),this.themeUniform,!1,!1),pattern:cT(this.patternTexture),wall:sn(xi(new Xt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:xi(new Xt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Xt({vertexColors:!0,blending:ys,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:re,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-1}),lines:sn(xi(new $e({vertexColors:!0,transparent:!0,blending:la(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:xi(new Xt({vertexColors:!0,transparent:!0,blending:we,depthWrite:!1,side:re,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:sn(xi(new Xt({vertexColors:!0,side:re}),t),this.themeUniform),glass:xi(new Xt({vertexColors:!0,transparent:!0,blending:we,depthWrite:!1,side:re,forceSinglePass:!0}),t),blinds:sn(xi(new Xt({map:this.blindTexture,vertexColors:!0,side:re}),t),this.themeUniform),water:sn(new Xt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:re,forceSinglePass:!0}),this.themeUniform),flow:fT(this.flowTime),pipeLine:hT(this.flowTime),patch:new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:re,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Xt({vertexColors:!0,transparent:!0,blending:we,depthWrite:!1,side:re,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Vf(this.flowTime),lamps:sn(new Xt({vertexColors:!0}),this.themeUniform),halos:new _n({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:we,depthWrite:!1}),cones:new Xt({vertexColors:!0,transparent:!0,blending:Al,blendSrc:Ms,blendDst:_s,blendSrcAlpha:El,blendDstAlpha:_s,depthWrite:!1,side:re,forceSinglePass:!0}),screens:new Xt({vertexColors:!0,transparent:!0,blending:we,depthWrite:!1,side:re,forceSinglePass:!0}),earth:sn(new Xt({vertexColors:!0}),this.themeUniform),earthWell:sn(new Xt({vertexColors:!0,side:re}),this.themeUniform),earthLines:sn(new $e({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),e=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=ar(n)?.id===o.id?s.filter(ot=>ot.face===Rf).map(ot=>({field:ot,face:Hm(n,ot)})):[],l=s.filter(ot=>ot.face.startsWith(`wall:${o.id}:`));if(l.length){let ot=new Map(Gm(n,o.id).map(gt=>[gt.key,gt]));for(let gt of l){let vt=ot.get(gt.face);vt&&a.push({field:gt,face:vt})}}let h=ef(n).some(ot=>V0(ot,o.elevation+o.height)&&rf(ot,o.elevation))?(ot,gt)=>{let vt=G0(n,ot,gt,o.elevation);return vt===null?null:vt-o.elevation}:void 0,u=rg(kf(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,og(n.floors,o),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new Ie,b=new Et(u.floor,d.floor),g=new Et(u.shadow,d.shadow);g.renderOrder=1;let p=new Et(u.floor,d.pattern);p.renderOrder=2;let x=new Et(new Ot,d.glow);x.renderOrder=3,x.visible=!1;let _=new Et(new Ot,d.frames),v=new Et(new Ot,d.blinds),M=new Et(new Ot,d.glass);M.renderOrder=4;let S=new Et(new Ot,d.lamps);S.visible=!1;let E=new Et(new Ot,d.cones);E.visible=!1,E.renderOrder=3;let y=new Et(new Ot,d.cones);y.visible=!1,y.renderOrder=3;let R=new An(new Ot,d.halos);R.visible=!1,R.renderOrder=7;let w=new Et(new Ot,d.cones);w.visible=!1,w.renderOrder=7;let A=new Et(new Ot,d.cones);A.visible=!1,A.renderOrder=7;let I=new Et(new Ot,d.lamps);I.visible=!1;let L=new Et(new Ot,d.lamps);L.visible=!1;let P=new Et(new Ot,d.patch);P.visible=!1,P.renderOrder=3;let B=new Et(new Ot,d.patchGlow);B.visible=!1,B.renderOrder=3;let T=new Et(new Ot,d.screens);T.visible=!1,T.renderOrder=5;let C=new Et(new Ot,d.flow);C.renderOrder=5,C.frustumCulled=!1;let O=new Et(new Ot,d.pipeLine),D=new Et(new Ot,d.pipeLine),N=new Et(new Ot,d.pipeLine);for(let ot of[O,D,N])ot.renderOrder=4,ot.frustumCulled=!1,ot.visible=!1;let z=zf(a,o.elevation),G=z?new Et(z.geometry,d.solarLive):null;G&&(G.renderOrder=6,ra(z,this.solarLevels));for(let ot of[_,v,M])ot.frustumCulled=!1;let V=new Et(u.walls,d.glassWall),W=new Et(u.walls,d.wall);V.renderOrder=6;let Q=new Et(u.water,d.water);Q.renderOrder=4;let it=Math.min(...n.floors.filter(ot=>ot.rooms.length).map(ot=>ot.elevation)),q=lg(n,o,u.openings,o.elevation===it),Y=q?[new Et(q.earth.geometry(),d.earth),new Et(q.wells.geometry(),d.earthWell),new qe(q.lines.geometry(),d.earthLines)]:[];for(let ot of Y)ot.userData.earth=!0;m.add(b,g,p,x,W,Q,new qe(u.lines,d.lines),_,v,M,C,O,D,N,S,E,y,R,w,A,I,L,P,B,T,V,...G?[G]:[],...Y),this.root.add(m);let X=document.createElement("button");X.className="fp3d-pin fp3d-pin-floor",X.dataset.floor=o.id;let et=document.createElement("b");et.textContent=o.name||"\u2013";let J=document.createElement("span");J.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",X.append(et,J),X.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(X);let rt=t.get(o.id),pt=[],ct=null;for(let ot of Ac(o)){let gt=document.createElement("button");gt.className="fp3d-pin",gt.dataset.room=ot.id,gt.dataset.floor=o.id,this.fillRoomPin(gt,ot.name,this.roomInfo.get(ot.id)),gt.addEventListener("click",()=>this.options.onRoomTap?.(o.id,ot.id)),this.labels.append(gt);let[vt,qt]=di(ot.points);if(pt.push({pin:gt,room:ot,cx:vt,cz:qt}),!ot.outdoor)for(let[he,fe]of ot.points)ct??={x0:he,x1:he,z0:fe,z1:fe},ct.x0=Math.min(ct.x0,he),ct.x1=Math.max(ct.x1,he),ct.z0=Math.min(ct.z0,fe),ct.z1=Math.max(ct.z1,fe)}this.floors.push({floor:o,rank:r.indexOf(o),group:m,geo:u,floorMesh:b,shadowMesh:g,patternMesh:p,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:_,glassMesh:M,blindsMesh:v,flowMesh:C,pipeLineMesh:O,pipeHouseMesh:D,pipeFloorMesh:N,pipeLineSig:"",solarMesh:G,solarLive:z,lampMesh:S,sunMesh:E,sunSig:"",spillMesh:y,spillSig:"",haloMesh:R,coneMesh:w,trailMesh:A,fridgeMesh:I,pipeMesh:L,pipeSig:"",patchMesh:P,patchGlowMesh:B,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],gateTris:[],glassTris:[],blindTris:[],wallMesh:W,screenMesh:T,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:ct,roomPins:pt,labelSize:null,materials:d,mask:f,openings:new Map,y:rt?.y??0,o:rt?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:X})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o),this.buildPatches(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=e.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??ua);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(p=>p.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(p=>p.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?jm(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(Br(this.building).map(p=>[p.key,p])),n=this.building.settings.roof?.solar??[],r=Vf(this.flowTime),o=[],s=new Ie,a=sn(new Xt({vertexColors:!0,transparent:!0,side:re,forceSinglePass:!0}),this.themeUniform),l=sn(new $e({vertexColors:!0,transparent:!0,blending:la(this.theme),depthWrite:!1}),this.themeUniform,!0),c=sn(new Xt({vertexColors:!0,transparent:!0,side:re,forceSinglePass:!0,depthWrite:!1}),this.themeUniform),h=new Ie,u=sn(new Xt({vertexColors:!0,side:re}),this.themeUniform),f=sn(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:re,forceSinglePass:!0,depthWrite:!1}),this.themeUniform),d=sn(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:re,forceSinglePass:!0,depthWrite:!1}),this.themeUniform),m=sn(new $e({vertexColors:!0,transparent:!0,blending:la(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(p=>{let x=new Ie;x.add(new Et(p.solid.geometry(),a),new qe(p.lines.geometry(),l)),p.glass.count&&x.add(new Et(p.glass.geometry(),c));let _=n.flatMap(S=>{let E=e.get(S.face);return E&&(E.section?p.sections?.includes(E.section):p===t[0])?[{face:E,field:S}]:[]}),v=zf(_,p.floor.elevation+p.base);if(v){let S=new Et(v.geometry,r);S.renderOrder=9,x.add(S),o.push(v),ra(v,this.solarLevels)}if(this.roofSnow>0){let S=[...e.values()].filter(y=>y.section?p.sections?.includes(y.section):p===t[0]),E=Lg(S,p.floor.elevation+p.base);if(E){this.snowMat??=new Xt({color:15857151,transparent:!0,side:re,forceSinglePass:!0,depthWrite:!1}),this.snowMat.opacity=.85*this.roofSnow;let y=new Et(E,this.snowMat);y.renderOrder=8,x.add(y)}}if(this.roofLights!=="off"){let S=[...e.values()].filter(y=>y.section?p.sections?.includes(y.section):p===t[0]),E=Ig(S,p.floor.elevation+p.base,this.roofLights==="color",this.roofOutline);if(E){let y=new Ot;y.setAttribute("position",new Lt(E.positions,3)),y.setAttribute("color",new Lt(E.colors,3)),this.lightsMat??=new _n({size:.24,vertexColors:!0,sizeAttenuation:!0,map:oa(),alphaTest:.35,transparent:!0}),this.lightsHalo??=new _n({size:.8,vertexColors:!0,transparent:!0,opacity:.4,depthWrite:!1,blending:we,sizeAttenuation:!0,map:oa()});let R=new An(y,this.lightsMat),w=new An(y,this.lightsHalo);R.renderOrder=10,w.renderOrder=11,x.add(R,w)}}p.winRoof?.solid.count&&x.add(new Et(p.winRoof.solid.geometry(),u),new qe(p.winRoof.lines.geometry(),m)),p.winRoof?.glass.count&&x.add(new Et(p.winRoof.glass.geometry(),d)),x.renderOrder=8,s.add(x);let M=null;(p.win?.solid.count||p.win?.glass.count)&&(M=new Ie,M.add(new Et(p.win.solid.geometry(),u),new qe(p.win.lines.geometry(),m)),p.win.glass.count&&M.add(new Et(p.win.glass.geometry(),f)),h.add(M));for(let[S,E]of p.winBelow??[]){if(!E.solid.count&&!E.glass.count)continue;let y=new Ie;y.add(new Et(E.solid.geometry(),u),new qe(E.lines.geometry(),m)),E.glass.count&&y.add(new Et(E.glass.geometry(),f)),h.add(y),b.push({floorId:S,win:y})}return{group:x,floorId:p.floor.id,rideId:$0(this.building,p.floor,p.sections??[]),base:p.base,lift:p.lift!==!1,win:M}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:o,wins:h,winSolid:u,winLines:m,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/ub)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),o=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?ub*n:0,s=1-Math.exp(-t/hb),a=this.roofO;this.roofO+=(o-this.roofO)*s,Math.abs(o-this.roofO)<.004&&(this.roofO=o),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*cb:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*cb:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==o}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}levels(){let t=[...this.floors].sort((e,n)=>e.rank-n.rank);return w0(t.map(e=>e.floor))}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0,n=this.levels();for(let r of this.floors){let o=0,s=1;e?n[r.rank]===n[e.rank]||(r.rank>e.rank?(o=5+r.rank,s=0):r.rank<e.rank&&(this.floorStack==="stacked"?o=0:(o=-.4,s=this.floorStack==="single"?0:XS))):o=this.explode?n[r.rank]*WS:0,r.ty=o,r.to=s;let l=e===r?an:ui;r.materials.earth.side!==l&&(r.materials.earth.side=l,r.materials.earth.needsUpdate=!0),t&&(r.y=o,r.o=s),this.applyFloor(r)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let o=r.mesh.material;o.transparent=t.o<.999,o.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/hb);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,e=!0,this.applyFloor(r)}return e&&this.sunFx&&this.buildSunFx(),e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/db);for(let r of this.floors){let o=!1,s=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??ua,h=(d,m)=>(d??null)===(m??null)||typeof d=="number"&&typeof m=="number"&&Math.abs(d-m)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let m=c[d]??0,b=l[d]??0,g=m-b;Math.abs(g)<.003?u[d]=m:(u[d]=b+g*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),o=!0),e||=f,s||=f}if(o){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!s||a-r.lightAt>=nT)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new tt(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*iT+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>fu?.5+.5*Math.sin(f/140):f/fu;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0},${h.ownLook?1:0}`).join(";"),s=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${s[u]?`${s[u].level.toFixed(3)},${s[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}${h.motion?",m":""}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let h=new te,u=[],f=[],d=new Map,m=t.floor.height;for(let b of r){let g=b.lamp==="strip"?(b.base??m)>Math.min(t.floor.cut_height,m):b.lamp?gb.has(b.lamp)&&(b.top??m)>Math.min(t.floor.cut_height,m):b.model==="camera_ceiling";if(!b.lamp&&!b.model||g&&this.wallMode==="cut")continue;let p=h.count,x=b.pack?xe(b.pack):void 0,[_,v,M]=b.size??[.3,.3,.3];b.model?b.ownLook||Fm(h,b.model,b.x,b.model==="camera_ceiling"?m:b.y,b.z,b.rotation??0):x?Wc(h,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:_,d:v,h:M,mirror:b.mirror},b.base??0,65280):ed(h,{...b,lamp:b.lamp},b.top??m,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:p,end:h.count}),b.pickable!==!1&&u.push({id:b.id,start:p,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:p,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=h0(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=s[u],m=d?.55+.45*d.level:0,b=d?new tt(...d.color.map(x=>Math.min(1,x*m))):new tt(tT),g=n(h.id);g>0&&b.lerp(new tt(1,1,1),.7*g);let p=new tt(b.getHex());f0(c,t.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ie,r=this.weather?.cloud??0,o=xb(t.floor,t.geo.openRooms),s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===t.sunSig)return;t.sunSig=s;let a=new te;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*ie,h=e.azimuth*ie,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c),d=new Set;for(let m of t.geo.openings){if(m.opening.type!=="window"||!m.exterior||!(m.width>.05))continue;let b=[-m.toRoom[0],-m.toRoom[1]],g=b[0]*u[0]+b[1]*u[1];if(g<.05)continue;let p=t.openings.get(m.opening.id),x=Math.max(0,m.sill),_=m.top-(p?.cover??0)*(m.top-x);if(_-x<.05)continue;let v=[m.start,m.axis,m.width,x,_].join();if(d.has(v))continue;d.add(v);let M=C=>Math.min(7,C*f),S=(C,O)=>{let D=M(O);return[m.start[0]+m.axis[0]*C+m.toRoom[0]*m.faceRoom-u[0]*D,.02,m.start[1]+m.axis[1]*C+m.toRoom[1]*m.faceRoom-u[1]*D]},E=.085*l*Math.min(1,g*1.5),y=new tt(1*E,.72*E,.36*E),R=y.clone().multiplyScalar(.5),w=M(_)-M(x),A=(C,O)=>y.clone().lerp(R,(O-x)/(_-x)).multiplyScalar(ia(C,m.width)*ia(M(O)-M(x),w)),I=t.floor.rooms.findIndex(C=>C.id===m.opening.room_id);if(I<0||t.floor.rooms[I].points.length<3)continue;let L=o[I],P=t.floor.rooms.filter((C,O)=>o[O]===L&&C.points.length>=3).map(C=>C.points),B=Math.max(2,Math.ceil(Math.min(7,_*f)/.25)),T=Math.max(2,Math.ceil(m.width/.3));for(let C=0;C<B;C++){let O=x+(_-x)*C/B,D=x+(_-x)*(C+1)/B;for(let N=0;N<T;N++){let z=m.width*N/T,G=m.width*(N+1)/T,V=S((z+G)/2,(O+D)/2);if(!P.some(Y=>Yt([V[0],V[2]],Y)))continue;let W=S(z,O),Q=S(G,D),it=A(z,O),q=A(G,D);a.tri(W,S(G,O),Q,it,A(G,O),q),a.tri(W,Q,S(z,D),it,q,A(z,D))}}}this.pushRoofSun(t,a,o,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,o,s){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Br(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(o),Math.sin(o),r[1]*Math.cos(o)];for(let u of l){let f=c.get(u.face),d=$c(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let m=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,g,p,x]=d.corners,_=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(_>.95)continue;let v=(P,B,T)=>[P[0]+(B[0]-P[0])*T,P[1]+(B[1]-P[1])*T,P[2]+(B[2]-P[2])*T],M=v(x,b,_),S=v(p,g,_),E=t.floor.rooms.findIndex(P=>P.id===d.roomId);if(E<0)continue;let y=t.floor.rooms.filter((P,B)=>n[B]===n[E]&&P.points.length>=3).map(P=>P.points),R=(P,B)=>{let C=(D,N)=>v(v(P[0],P[1],D/6),v(P[3],P[2],D/6),N/6),O=(D,N)=>B.clone().multiplyScalar(ia(D,6,1)*ia(N,6,1));for(let D=0;D<6;D++)for(let N=0;N<6;N++){let z=C(D+.5,N+.5);y.some(G=>Yt([z[0],z[2]],G))&&(e.tri(C(D,N),C(D+1,N),C(D+1,N+1),O(D,N),O(D+1,N),O(D+1,N+1)),e.tri(C(D,N),C(D+1,N+1),C(D,N+1),O(D,N),O(D+1,N+1),O(D,N+1)))}},w=P=>[P[0],.019,P[2]],A=.04*s;if(R([w(b),w(g),w(S),w(M)],new tt(.75*A,.85*A,1*A)),m<.05)continue;let I=P=>{let B=Math.min(7,(P[1]-t.floor.elevation)/Math.tan(o));return[P[0]-r[0]*B,.02,P[2]-r[1]*B]},L=.1*s*Math.min(1,m*1.5);R([I(b),I(g),I(S),I(M)],new tt(1*L,.72*L,.36*L))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],o=new te,s=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let _=(l.rotation??0)*ie,v=[-Math.sin(_),Math.cos(_)],M=l.model==="camera_ceiling",S=l.reach??(M?3:4.5),E=(l.fov??(M?360:90))*ie/2,y=l.motion?new tt(.9,.12,.16):new tt(.04,.22,.28),R=new tt(0,0,0),w=Math.max(4,Math.round(E/.15)),A=.015,I=t.geo.walls2d,L=N=>{let z=N.b[0]-N.a[0],G=N.b[1]-N.a[1],V=z*z+G*G||1,W=Math.max(0,Math.min(1,((l.x-N.a[0])*z+(l.z-N.a[1])*G)/V));return Math.hypot(l.x-(N.a[0]+z*W),l.z-(N.a[1]+G*W))},P=null;for(let N of I)L(N)<.45&&(!P||L(N)<L(P))&&(P=N);let B=N=>{let z=v[0]*Math.cos(N)-v[1]*Math.sin(N),G=v[1]*Math.cos(N)+v[0]*Math.sin(N),V=S;for(let W of I){let Q=W.b[0]-W.a[0],it=W.b[1]-W.a[1],q=z*it-G*Q;if(Math.abs(q)<1e-9)continue;let Y=((W.a[0]-l.x)*it-(W.a[1]-l.z)*Q)/q,X=((W.a[0]-l.x)*G-(W.a[1]-l.z)*z)/q;W===P&&Y<=.45||Y>.02&&Y<V&&X>=0&&X<=1&&(V=Y)}return V},T=(N,z)=>A+Ao(t.floor,{x:N,z}),C=N=>{let z=B(N),G=l.x+(v[0]*Math.cos(N)-v[1]*Math.sin(N))*z,V=l.z+(v[1]*Math.cos(N)+v[0]*Math.sin(N))*z;return[G,T(G,V),V]},O=[l.x,Math.max(T(l.x,l.z),M?-1/0:T(l.x+v[0]*.3,l.z+v[1]*.3)),l.z],D=o.count;for(let N=0;N<w;N++)o.tri(O,C(-E+2*E*(N+1)/w),C(-E+2*E*N/w),y,R,R);s.push({id:l.id,start:D,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||gb.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??Go[l.lamp],m=l.base??0,b=(l.rotation??0)*ie,g={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:m+d-.15,uplight:m+d,table:m+d-.09,wall:m+d/2,strip:m+Math.max(.02,d)-.01,bollard:m+d-.08,garden:m+d-.03}[l.lamp],p=this.packLightsAt(l),x=(_,v,M=1)=>{n.push(_,g,v),r.push(...c.color.map(S=>S*c.level*.7*M))};if(l.lamp==="strip")for(let _ of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,m+u*(.5+_),l.z),r.push(...c.color.map(v=>v*c.level*.7*.6));else if(l.rise){let v=l.rise*ie;n.push(l.x+Math.cos(b)*u*_*Math.cos(v),g+Math.sin(v)*u*_,l.z+Math.sin(b)*u*_*Math.cos(v)),r.push(...c.color.map(M=>M*c.level*.7*.6))}else x(l.x+Math.cos(b)*u*_,l.z+Math.sin(b)*u*_,.6);else if(l.lamp==="wall"){let _=this.packLightAt(l);_?(n.push(..._),r.push(...c.color.map(v=>v*c.level*.7))):x(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else if(p.length)for(let _ of p)x(_[0],_[2],.8);else x(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let _=new tt(...c.color.map(y=>y*.09*c.level)),v=new tt(0,0,0),M=Math.max(.03,p.length?Math.min(u,f)/2:u/2),S=(.45+.35*c.level)*(p.length?.8:1),E=16;for(let[y,R]of p.length?p.map(w=>[w[0],w[2]]):[[l.x,l.z]])for(let w=0;w<E;w++){let A=w/E*Math.PI*2,I=(w+1)/E*Math.PI*2,L=[y+Math.cos(A)*M,g,R+Math.sin(A)*M],P=[y+Math.cos(I)*M,g,R+Math.sin(I)*M],B=[y+Math.cos(A)*S,.02,R+Math.sin(A)*S],T=[y+Math.cos(I)*S,.02,R+Math.sin(I)*S];o.tri(L,B,T,_,v,v),o.tri(L,T,P,_,v,_)}}}let a=new Ot;a.setAttribute("position",new Lt(n,3)),a.setAttribute("color",new Lt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=o.geometry(),t.coneMesh.visible=o.count>0,t.coneTris=s}buildScreens(t){let e=kf(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),r=(zo.value?ko.value.toArray().map(s=>Math.round(s*255)).join(","):"")+"|"+e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let o=new te;for(let s of e){let a=this.screens.get(s.id),l=Ic.has(s.type)?Lc(t.geo.walls2d,s,t.floor.height,ln(t.floor,s)):null,c=l?{...s,x:l.x,z:l.z,mount_y:l.y}:s,h=c.rotation*ie,u=Math.cos(h),f=Math.sin(h),d=(E,y,R)=>[c.x+E*u-R*f,y,c.z+E*f+R*u];if(a.faces){let E=Math.max(.05,c.w)*(c.mirror?-1:1),y=Math.max(.05,c.d),R=Math.max(.005,c.h),w=ln(t.floor,c);for(let A of a.faces){if(A.part==="lights"){let G=xe(c.type),V=W=>["#e8f4ff","#ff3b4f"].includes(W.color.toLowerCase());if(G&&G.parts.some(V)){let W=new tt(...A.color.map(Q=>Math.min(1,Q*(.4+.6*A.level))));Ys(o,G,c,w,W.getHex(),V)}continue}if(A.part==="cabin"){let G=xe(c.type),V=W=>W.color.toLowerCase()==="#13283a"||W.color==="glass";if(G&&G.parts.some(V)){let W=new tt(...A.color.map(Q=>Math.min(1,Q*(.3+.5*A.level))));Ys(o,G,c,w,W.getHex(),V);continue}}if(A.part==="burners"&&xe(c.type)){let G=xe(c.type),V=new tt(...A.color.map(W=>Math.min(1,W*(.25+.6*A.level))));Ys(o,G,c,w,V.getHex(),d0);continue}if(A.part==="burners"){let G=new tt(...A.color.map(W=>Math.min(1,W*(.25+.6*A.level)))),V=w+R+.008;for(let[W,Q,it]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let q=W*Math.abs(E)/.6,Y=Q*y/.62,X=14;for(let et=0;et<X;et++){let J=et/X*Math.PI*2,rt=(et+1)/X*Math.PI*2;o.tri(d(q,V,Y),d(q+Math.cos(J)*it,V,Y+Math.sin(J)*it),d(q+Math.cos(rt)*it,V,Y+Math.sin(rt)*it),G)}}continue}if(A.part==="plate"){let G=new tt(...A.color.map(X=>Math.min(1,X*(.3+.45*A.level)))),V=Math.abs(E)/2+.008,W=y/2+.008,Q=w+R+.006,it=Math.sign(E)||1;o.tri(d(-V*it,Q,-W),d(V*it,Q,-W),d(V*it,Q,W),G),o.tri(d(-V*it,Q,-W),d(V*it,Q,W),d(-V*it,Q,W),G);let q=w+R-.035,Y=[[-V,-W],[V,-W],[V,W],[-V,W]];for(let X=0;X<4;X++){let et=Y[X],J=Y[(X+1)%4];o.tri(d(et[0]*it,q,et[1]),d(J[0]*it,q,J[1]),d(J[0]*it,Q,J[1]),G),o.tri(d(et[0]*it,q,et[1]),d(J[0]*it,Q,J[1]),d(et[0]*it,Q,et[1]),G)}continue}if(A.part==="band"||A.part==="cabin"){let G=A.part==="cabin",V=w+R*(G?.6:.42),W=G?w+R*.86:V+.07,Q=new tt(...A.color.map(X=>Math.min(1,X*(.3+.45*A.level)))),it=Math.abs(E)/2+(G?.012:.02),q=y/2+(G?.012:.02),Y=[[-it,-q],[it,-q],[it,q],[-it,q]];for(let X=0;X<4;X++){let et=Y[X],J=Y[(X+1)%4],rt=d(et[0]*Math.sign(E),V,et[1]),pt=d(J[0]*Math.sign(E),V,J[1]),ct=d(J[0]*Math.sign(E),W,J[1]),ot=d(et[0]*Math.sign(E),W,et[1]);o.tri(rt,pt,ct,Q),o.tri(rt,ct,ot,Q)}continue}if(A.part==="strata"){let G=A.top??A.color,V=.22+.4*A.level,W=new tt(...A.color.map(J=>Math.min(1,J*V))),Q=new tt(...G.map(J=>Math.min(1,J*V))),it=w+R*.06,q=w+R*.94,Y=Math.abs(E)/2+.012,X=y/2+.012,et=20;for(let J=0;J<et;J++){let rt=J/et*Math.PI*2,pt=(J+1)/et*Math.PI*2,ct=[Math.cos(rt)*Y,Math.sin(rt)*X],ot=[Math.cos(pt)*Y,Math.sin(pt)*X];o.tri(d(ct[0],it,ct[1]),d(ot[0],it,ot[1]),d(ot[0],q,ot[1]),W,W,Q),o.tri(d(ct[0],it,ct[1]),d(ot[0],q,ot[1]),d(ct[0],q,ct[1]),W,Q,Q)}continue}if(A.part==="apring"){let G=c.variant==="wall",V=Math.abs(E),W=G?Math.min(V,R)*.3:Math.min(V,y)*.3,Q=new tt(...A.color.map(X=>Math.min(1,X*(.4+.6*A.level)))),it=new tt(0,0,0),q=24,Y=(X,et)=>G?d(Math.cos(X)*et,w+R/2+Math.sin(X)*et,y/2+.004):d(Math.cos(X)*et,w-.003,Math.sin(X)*et);for(let X=0;X<q;X++){let et=X/q*Math.PI*2,J=(X+1)/q*Math.PI*2;o.tri(Y(et,W*.8),Y(et,W),Y(J,W),Q),o.tri(Y(et,W*.8),Y(J,W),Y(J,W*.8),Q),o.tri(Y(et,W),Y(et,W*1.5),Y(J,W*1.5),Q,it,it),o.tri(Y(et,W),Y(J,W*1.5),Y(J,W),Q,it,Q)}continue}if(A.part==="drum"){let G=Math.abs(E),V=Math.min(G*.36,(R-.2)*.42),W=w+(R-.14)/2+.04,Q=y/2-.006,it=new tt(...A.color.map(J=>Math.min(1,J*(.35+.65*A.level)))),q=it.clone().multiplyScalar(.12),Y=new tt(0,0,0),X=28,et=(J,rt)=>d(Math.cos(J)*rt,W+Math.sin(J)*rt,Q);for(let J=0;J<X;J++){let rt=J/X*Math.PI*2,pt=(J+1)/X*Math.PI*2;o.tri(d(0,W,Q),et(rt,V*.78),et(pt,V*.78),q),o.tri(et(rt,V*.78),et(rt,V),et(pt,V),it),o.tri(et(rt,V*.78),et(pt,V),et(pt,V*.78),it),o.tri(et(rt,V),et(rt,V*1.18),et(pt,V*1.18),it,Y,Y),o.tri(et(rt,V),et(pt,V*1.18),et(pt,V),it,Y,it)}continue}if(A.part==="gang"){let G=Math.max(1,A.of??1),V=Math.abs(E),W=V/G,Q=(-V/2+W*((A.index??0)+.5))*Math.sign(E),it=y/2+(c.variant==="outdoor"?.02:.008),q=A.accent?zo.value?ko.value.toArray():HS:A.color,Y=new tt(...q.map(vt=>Math.min(1,vt*(.35+.65*A.level)))),X=Y.clone().multiplyScalar(.5),et=new tt(0,0,0),J=W*.34,rt=w+R*.16,pt=w+R*.84,ct=[d(Q-J,rt,it),d(Q+J,rt,it),d(Q+J,pt,it),d(Q-J,pt,it)];o.tri(ct[0],ct[1],ct[2],Y),o.tri(ct[0],ct[2],ct[3],Y);let ot=.012+.015*A.level,gt=[d(Q-J-ot,rt-ot,it-.001),d(Q+J+ot,rt-ot,it-.001),d(Q+J+ot,pt+ot,it-.001),d(Q-J-ot,pt+ot,it-.001)];for(let vt=0;vt<4;vt++){let qt=(vt+1)%4;o.tri(ct[vt],gt[qt],gt[vt],X,et,et),o.tri(ct[vt],ct[qt],gt[qt],X,X,et)}continue}if(A.part==="beacon"){let G=new tt(...A.color.map(pt=>Math.min(1,pt*(.25+.45*A.level)))),V=new tt(0,0,0),W=w+R+.01,Q=.6+.6*A.level,it=Math.min(Math.abs(E),y)*.38;for(let[pt,ct]of[[it,0],[0,it]]){let ot=d(-pt,W,-ct),gt=d(pt,W,ct),vt=d(pt*.4,W+Q,ct*.4),qt=d(-pt*.4,W+Q,-ct*.4);o.tri(ot,gt,vt,G,G,V),o.tri(ot,vt,qt,G,V,V)}let q=ln(t.floor,{...c,mount_y:0})+.012,Y=Math.abs(E)/2+.03,X=y/2+.03,et=.22+.18*A.level,J=(pt,ct,ot)=>d(pt*(Y+ot),q,ct*(X+ot)),rt=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let pt=0;pt<4;pt++){let[ct,ot]=rt[pt],[gt,vt]=rt[(pt+1)%4];o.tri(J(ct,ot,0),J(gt,vt,0),J(gt,vt,et),G,G,V),o.tri(J(ct,ot,0),J(gt,vt,et),J(ct,ot,et),G,V,V)}continue}let I=A.part==="right"?.03:-Math.abs(E)/2+.03,L=A.part==="left"?-.03:Math.abs(E)/2-.03,P=w+(A.part==="bottom"?R*.45:R)+.006,B=new tt(...A.color.map(G=>Math.min(1,G*(.35+.65*A.level)))),T=new tt(0,0,0),C=(G,V,W=P)=>d(G*Math.sign(E),W,V),O=[C(I,-y/2+.03),C(L,-y/2+.03),C(L,y/2-.03),C(I,y/2-.03)];o.tri(O[0],O[2],O[1],B),o.tri(O[0],O[3],O[2],B);let D=A.part==="lid"?.025+.02*A.level:.12+.1*A.level,N=B.clone().multiplyScalar(A.part==="lid"?.7:.5),z=[C(I-D,-y/2-D,P+.004),C(L+D,-y/2-D,P+.004),C(L+D,y/2+D,P+.004),C(I-D,y/2+D,P+.004)];for(let G=0;G<4;G++){let V=(G+1)%4;o.tri(O[G],z[V],z[G],N,T,T),o.tri(O[G],O[V],z[V],N,N,T)}}continue}let m=xe(c.type);if(m&&!m.light&&a.ring&&m.parts.some(E=>E.glow)){let E=new tt(...a.color.map(y=>Math.min(1,y*(.45+.55*a.level))));Ys(o,m,c,ln(t.floor,c),E.getHex())}let b=Tf(c,t.floor);if(!b)continue;let g=new tt(...a.color.map(E=>Math.min(1,E*(.35+.65*a.level)))),p=new tt(0,0,0),x=b.z+.004;if(o.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),g),o.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),g),a.plain)continue;let _=.18+.12*a.level,v=g.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],S=[d(b.x0-_,b.y0-_,x+.01),d(b.x1+_,b.y0-_,x+.01),d(b.x1+_,b.y1+_,x+.01),d(b.x0-_,b.y1+_,x+.01)];for(let E=0;E<4;E++){let y=(E+1)%4;o.tri(M[E],S[E],S[y],v,p,p),o.tri(M[E],S[y],M[y],v,p,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=o.geometry(),t.screenMesh.visible=o.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of t.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),t.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=Tf(o,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Et(new Yn(1,1),new Xt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new yr().load(s.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Ne,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(t,e,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,{w:a,h:l}=Im(n.x1-n.x0,n.y1-n.y0,s),c=e.rotation*ie,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(h=>h.floorId===t.floor.id&&!h.pipe).map(ha).join(";"),n=[],r=[],o=[],s=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id||h.pipe)continue;let u=this.flowPhase.get(ha(h))??{speed:nd(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(x=>x*f),m=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(m<1e-4)continue;let b=[(h.b[0]-h.a[0])/m,(h.b[1]-h.a[1])/m,(h.b[2]-h.a[2])/m],g=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;g.push([-b[2]/x,0,b[0]/x])}else g.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[mb*1.4,1]]:[[JS,.25],[mb,1]];for(let[x,_]of p)for(let v of g){let M=x*(h.width??1)/2,S=(y,R)=>[y[0]+v[0]*M*R,y[1]+v[1]*M*R,y[2]+v[2]*M*R],E=[[S(h.a,-1),h.dist,0],[S(h.b,-1),h.dist+m,0],[S(h.b,1),h.dist+m,1],[S(h.a,1),h.dist,1]];for(let y of[0,1,2,0,2,3]){let[R,w,A]=E[y];n.push(R[0],R[1],R[2]),r.push(d[0]*_,d[1]*_,d[2]*_),o.push(w,A),s.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Ot;c.setAttribute("position",new Lt(n,3)),c.setAttribute("color",new Lt(r,3)),c.setAttribute("uv",new Lt(o,2)),c.setAttribute("flowSpeed",new Lt(s,1)),c.setAttribute("flowOffset",new Lt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(ha(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let o=[],s=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let m=this.flowPhase.get(ha(f))??{speed:nd(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;g.push([-b[2]/v,0,b[0]/v])}else g.push([1,0,0],[0,0,1]);let p=ZS*(f.width??1),x=f.power>.5?1:.62,_=[[p+KS*2,[.02,.025,.05],.78,2],[p,f.color.map(v=>v*x),1,0]];for(let[v,M,S,E]of _)for(let y of g){let R=v/2,w=E===0?.002:0,A=(L,P)=>[L[0]+y[0]*R*P,L[1]+y[1]*R*P+w,L[2]+y[2]*R*P],I=[[A(f.a,-1),f.dist,E],[A(f.b,-1),f.dist+d,E],[A(f.b,1),f.dist+d,E+1],[A(f.a,1),f.dist,E+1]];for(let L of[0,1,2,0,2,3]){let[P,B,T]=I[L];o.push(P[0],P[1],P[2]),s.push(M[0],M[1],M[2],S),a.push(B,T),l.push(m.speed),c.push(m.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Ot;u.setAttribute("position",new Lt(o,3)),u.setAttribute("color",new Lt(s,4)),u.setAttribute("uv",new Lt(a,2)),u.setAttribute("flowSpeed",new Lt(l,1)),u.setAttribute("flowOffset",new Lt(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=o.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=Zg(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let o=new tt(r.color),s=this.roomTint?.get(r.roomId);s&&o.lerp(new tt(...s).multiplyScalar(.6),.9),r.roomId===this.roomId&&o.lerp(rT,s?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,o.r,o.g,o.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new yn;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[m,b]of d.points)e.expandByPoint(new $(m,f,b)),e.expandByPoint(new $(m,f+u.floor.height,b))}e.isEmpty()&&e.set(new $(-4,0,-4),new $(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new $),r=e.getSize(new $),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.fitted=!0,this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new $(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new yn,e=1/0;for(let s of this.floors){e=Math.min(e,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=pT();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=t.getCenter(new $),r=t.getSize(new $),o=id*Math.ceil((Math.max(r.x,r.z)+16)/id);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,e-on-.02,n.z)}distanceFor(t){let e=this.camera.fov*ie,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new xs;return r.setFromCamera(new Qt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e,n=!0){let r=this.rayAt(t,e),o=this.activeFloors(),s=o.flatMap(l=>[l.lampMesh,l.coneMesh,l.framesMesh,l.glassMesh,l.blindsMesh,l.fridgeMesh,l.wallMesh,l.floorMesh].filter(c=>c.visible)),a=(l,c)=>l.find(h=>c>=h.start&&c<h.end)?.id;for(let l of r.intersectObjects(s,!1)){if(l.faceIndex==null)continue;let c=l.faceIndex,h=o.find(u=>u.group===l.object.parent);if(l.object===h.fridgeMesh){let u=a(h.gateTris,c);if(u&&n)return{entity:u}}else if(l.object===h.lampMesh||l.object===h.coneMesh){let u=a(l.object===h.lampMesh?h.lampTris:h.coneTris,c);if(u&&n)return{entity:u}}else if(l.object===h.framesMesh||l.object===h.blindsMesh||l.object===h.glassMesh){if(this.wallMode==="cut"&&l.face){let d=l.object.geometry.getAttribute("fold")?.getX(l.face.a)??Jt;if(d!==Jt&&Math.floor(d/16)===0)continue}let u=a(l.object===h.framesMesh?h.frameTris:l.object===h.glassMesh?h.glassTris:h.blindTris,c),f=u?this.pickOpenings.get(u):void 0;if(f&&n)return{entity:f}}else if(l.object===h.wallMesh){let u=a(h.geo.furnitureTris,c),f=u?this.pickFurniture.get(u):void 0;if(f&&n)return{entity:f};if(!u&&l.face&&l.face.normal.y>.7){let d=Yh(h.floor).find(m=>Yt([l.point.x,l.point.z],m.points));if(d)return{floorId:h.floor.id,roomId:d.id}}if(l.face&&!u){let d=h.wallMesh.geometry.getAttribute("fold")?.getX(l.face.a)??32,m=Math.floor(d/16),b=d%16,g=this.wallMode==="cut"&&m===0,p=(h.mask.glass.value&1<<b)!==0;if(!g){let x=r.ray.direction,_=Math.hypot(x.x,x.z)||1,v=[l.point.x-x.x/_*.3,l.point.z-x.z/_*.3],M=h.floor.rooms.find(S=>S.points.length>=3&&Yt(v,S.points))?.id??null;if(this.roomId!==null){if(M===this.roomId)return{floorId:h.floor.id,roomId:M}}else if(!p&&M)return{floorId:h.floor.id,roomId:M}}}}else if(l.object===h.floorMesh)return{floorId:h.floor.id,roomId:a(h.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),c)??null}}return null}get tapOpens(){return!!this.building?.settings.tap_in_room&&this.roomId===null&&!this.furnish}onTap(t,e){let n=this.pick(t,e,!this.tapOpens);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+fu),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||o(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let o of t.floor.furniture){let s=o.rotation*ie,a=e-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,h=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:o.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let o=this.rayAt(e,n),s=r??t.floor.elevation+t.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice,r=this.pendingFurniture;this.pendingDevice=null,this.pendingFurniture=null;let o=this.furnishTypes;if(o){let a=n?r??this.devices.find(f=>f.id===n)?.furnitureId:void 0,l=a?null:this.furnitureAt(t,e),c=a??l?.id,h=c?this.floors.find(f=>f.floor.furniture.some(d=>d.id===c)):void 0,u=h?.floor.furniture.find(f=>f.id===c)?.type;return!!(h&&c&&u&&o.has(u))&&this.grabItem(h,c,t,e)}if(n){let a=r??this.devices.find(c=>c.id===n)?.furnitureId,l=a?this.floors.find(c=>c.floor.furniture.some(h=>h.id===a)):void 0;return!a||!l?this.grabDevice(n,t,e):this.grabItem(l,a,t,e)}let s=this.furnitureAt(t,e);if(!s){let a=this.pick(t,e);return a&&"entity"in a?this.grabDevice(a.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,o){let s=t.floor.furniture.find(u=>u.id===e),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!s||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(o!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new $),d=Math.hypot(f.x,f.z)||1,m=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),g=this.renderer.domElement.getBoundingClientRect().height||1,p=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-m[1],m[0]],fwd:m,perPx:p,gain:Math.min(2,1/Math.max(.5,-h.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,e,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let e of this.devicePins.values())e.el.classList.toggle("fp3d-dev-sel",e.el.dataset.entity===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),m=f&&this.floorPoint(f,t,e);if(!f||!d||!m)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((m[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((m[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let f=(t-s.x0)*s.perPx,d=(e-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*f-s.fwd[0]*d-r.offset[0],s.fz+s.right[1]*f-s.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(o,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?ug(o.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Oe,n;for(let r of t){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(e,o,s,r===this.selectedFurniture?new tt(.25,.9,1):new tt(1,.71,.28)))}n&&(this.ghost=new qe(e.geometry(),new $e({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let o=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=xe(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?ln(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:ln(e.floor,n),u=n.rotation*ie,f=Math.cos(u),d=Math.sin(u),m=(g,p,x)=>[o+g*f-p*d,x,s+g*d+p*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[p,x]=b[g],[_,v]=b[(g+1)%4];t.seg(m(p,x,h+.01),m(_,v,h+.01),r),t.seg(m(p,x,h+c),m(_,v,h+c),r),t.seg(m(p,x,h+.01),m(p,x,h+c),r)}t.seg(m(-n.w/2,n.d/2+.03,h+.02),m(n.w/2,n.d/2+.03,h+.02),new tt(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||this.tapOpens||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(t,e);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:o.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(t*r),s=Math.round(e*r),a=new Ye(o,s);a.texture.colorSpace=Ne;let l=new Dn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(o*s*4),m=document.createElement("canvas");m.width=o,m.height=s;let b=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let L of this.floors)L.group.visible=L===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let x=p.floor.rooms.flatMap(L=>L.points),_=p.floor.elevation,v=new yn(new $(Math.min(...x.map(L=>L[0]))-.3,_,Math.min(...x.map(L=>L[1]))-.3),new $(Math.max(...x.map(L=>L[0]))+.3,_+Math.min(p.floor.cut_height,p.floor.height),Math.max(...x.map(L=>L[1]))+.3)),M=v.getCenter(new $),S=-.6,E=.8,y=new $(Math.sin(E)*Math.sin(S),Math.cos(E),Math.sin(E)*Math.cos(S));l.position.copy(M).addScaledVector(y,100),l.lookAt(M),l.updateMatrixWorld();let R=.5,w=.5;for(let L of[v.min.x,v.max.x])for(let P of[v.min.y,v.max.y])for(let B of[v.min.z,v.max.z]){let T=new $(L,P,B).applyMatrix4(l.matrixWorldInverse);R=Math.max(R,Math.abs(T.x)),w=Math.max(w,Math.abs(T.y))}let A=o/s;R/w>A?w=R/A:R=w*A,l.left=-R*1.05,l.right=R*1.05,l.top=w*1.05,l.bottom=-w*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,d);let I=b.createImageData(o,s);for(let L=0;L<s;L++)I.data.set(d.subarray((s-1-L)*o*4,(s-L)*o*4),L*o*4);b.putImageData(I,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?Jg(n.room,void 0,void 0,n.obstacles):jf(n.rest),l=a.length?a:jf(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!Yt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(lb[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let o of r.own)o.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&xe(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Xt({color:lb[t.mode]}),r=this.robotModelKey(t),o=t.model?xe(t.model.type):void 0;if(t.model&&o&&r){let{w:a,d:l,h:c}=t.model,h=new te,{radius:u,top:f}=Dm(h,o,a,l,c),d=new te,m=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Re(d,[[-m,b],[m,b],[m,b+m*.8],[-m,b+m*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Xt({vertexColors:!0});let g=[h.geometry(),d.geometry()],p=new Ie;return p.add(new Et(g[0],this.robotMat),new Et(g[1],n)),{info:t,motion:e,group:p,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new te,l=(h,u,f,d,m)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*h,Math.sin(g/20*Math.PI*2)*h]);Re(a,b,u,f,d,m,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Xt({vertexColors:!0});let c=new te;Re(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let s=new Ie;return s.add(new Et(this.robotGeo,this.robotMat),new Et(this.robotLedGeo,n)),{info:t,motion:e,group:s,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[o,,s]=n.size??Go.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=o/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new te;_b(h,0,0,0,l,0),this.fanMat??=new Xt({vertexColors:!0});let u=new Et(h.geometry(),this.fanMat),f=new Ie;f.add(u),f.rotation.y=-((n.rotation??0)*ie),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=yb(a,s),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let o=this.floorMap.get(r.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(o.floor.cut_height,o.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),e>0?n=jg(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new tt(.25-.2*a,.95-.83*a,1-.7*a),r=new tt(0,0,0),o=new tt(.3,1,.6),s=.02;for(let a of this.floors){let l=new te;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let m=h.points[d-1];if(m){let b=Math.hypot(u-m[0],f-m[1])||1,g=-(f-m[1])/b*.1,p=(u-m[0])/b*.1;l.tri([m[0]+g,s,m[1]+p],[u+g,s,f+p],[u-g,s,f-p],o,o,o),l.tri([m[0]+g,s,m[1]+p],[u-g,s,f-p],[m[0]-g,s,m[1]-p],o,o,o)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,p=(b+1)/10*Math.PI*2;l.tri([u,s,f],[u+Math.cos(p)*.35,s,f+Math.sin(p)*.35],[u+Math.cos(g)*.35,s,f+Math.sin(g)*.35],o,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,m=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,s,c.z+m],[h.x+d,s,h.z+m],[h.x-d,s,h.z-m],b,u,u),l.tri([c.x+d,s,c.z+m],[h.x-d,s,h.z-m],[c.x-d,s,c.z-m],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,m=(f+1)/12*Math.PI*2;l.tri([h.x,s,h.z],[h.x+Math.cos(m)*.22,s,h.z+Math.sin(m)*.22],[h.x+Math.cos(d)*.22,s,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ie,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(e.tilt??(o?65:20))*ie)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y),l=new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new $(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+fu;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,o,s){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new $(e,a.floor.elevation+a.ty+r,n),radius:s?.radius??5.5,phi:s?.phi??.78,...s?.theta!==void 0?{theta:s.theta}:{}},900),o){this.flashes.set(o,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),o=this.stepFloors(e),s=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let p=new Set;for(let[x,_]of this.flashes){let v=this.deviceFloor.get(x);v&&p.add(v),_<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)p.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=r||o||s||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),o&&d.push("floors"),s&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.placeFog(),this.firework&&(this.firework.step((t-this.fireworkAt)/1e3),this.fireworkAt=t),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),this.watchSlow(t,r||this.controls.busy),f&&this.invalidate();let m=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;m&&!this.decorWas&&(this.lastWake=t),this.decorWas=m;let b=this.effectFloors.size?this.decor(this.lowQuality?2*bb:bb):null;if(b!==null&&!this.effectTimer&&!document.hidden&&!f){let p=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.decorTimer||this.invalidate()},p)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),this.firework&&!this.fireworkTimer&&!document.hidden&&(this.fireworkTimer=setTimeout(()=>{this.fireworkTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let g=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let p=c||g||h?this.decor(h?83:0,h?83:void 0):null;!f&&p!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},p));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&g&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},$S))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/o+h[1]*r/o>=.25:a;!l&&f&&(c|=1<<u)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new $,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)||Sc(s.floor)){this.place(s.label,null);continue}let l=null,c=null,h=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,h,g).project(this.camera);let p=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:x}),(!c||p>c.x)&&(c={x:p,y:x})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let u=s.labelSize.w,f=8+this.labelInset,d=l.x-u-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),o.push({fv:s,left:Math.max(f,Math.min(t-u-8,d)),y:m,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new $(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),s.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(s.near!==void 0&&u>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new $(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,m=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*s.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,m,f)}),this.updateDevicePins(t,e);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new $,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId),l=this.figures.get(o.id);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(o.id);if(!c||c.floorId!==o.floorId)c={floorId:o.floorId,x:o.x,z:o.z};else{let f=o.x-c.x,d=o.z-c.z;Math.hypot(f,d)>.02?(c={floorId:o.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(Of(o))?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==h&&(this.pinMode.set(s,h),s.classList.toggle("fp3d-dev-full",h==="full"),s.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(s,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}watchSlow(t,e){let n=this.slowWatch;if(n){if(!e||t-n.since<nb){n.last=0;return}if(n.last&&t-n.last<1e3&&n.ms.push(t-n.last),n.last=t,!ib(n.ms)){n.ms.length>=2*Qf&&(this.slowWatch=null);return}this.slowWatch=null,vb=!0;try{localStorage.setItem(td,"1")}catch{}setTimeout(()=>!this.disposed&&this.setQuality(n.quality),0)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=aT(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function aT(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function lT(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(s,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(s,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(s,a,l)=>{e.save(),e.beginPath(),e.rect(s*256,a*256,256,256),e.clip(),l(s*256,a*256),e.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let h=s+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(s+u+.75,c,s+u+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new pn(t);return o.flipY=!1,o.wrapS=Tn,o.wrapT=Tn,o.anisotropy=4,o.colorSpace=Ne,o}function cT(i){let t=new Xt({map:i,transparent:!0,blending:we,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function uT(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new pn(i);return e.wrapS=gr,e.wrapT=gr,e.colorSpace=Ne,e}function ha(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function nd(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function hT(i){let t=new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:re,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function fT(i){let t=new Xt({vertexColors:!0,transparent:!0,blending:we,depthWrite:!1,side:re,forceSinglePass:!0});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function xb(i,t){let e=i.rooms.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,o]of t){let s=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,o)=>n(o))}function dT(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new pn(t);return r.colorSpace=Ne,r}function pT(){let t=id,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=t;s++){let a=Math.round(s/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new pn(e);return o.anisotropy=4,o.colorSpace=Ne,o}function YP(i,t){return new rd(i,t)}function yb(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function _b(i,t,e,n,r,o){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=o+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([m,b])=>[t+m*h-b*u,n+m*u+b*h]);Re(i,d,e-.006,e+.006,jS,QS,{aoFrom:0,bottom:!0})}}function ed(i,t,e,n,r=!0){let[o,s,a]=t.size??Go[t.lamp],l=t.base??0,c=(t.rotation??0)*ie,h=Math.cos(c),u=Math.sin(c),f=(g,p)=>[t.x+g*h-p*u,t.z+g*u+p*h],d=(g,p,x,_,v,M=14)=>{let S=[];for(let E=0;E<M;E++){let y=E/M*Math.PI*2;S.push([t.x+Math.cos(y)*g,t.z+Math.sin(y)*g])}Re(i,S,p,x,_,v,{aoFrom:0,bottom:!0})},m=(g,p,x,_,v,M,S,E=S)=>Re(i,[f(g,x),f(p,x),f(p,_),f(g,_)],v,M,S,E,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(o,s)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,se,se,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,se,se,8);let p=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,p,e-.02,se,se,5),t.variant==="globe")for(let _=0;_<7;_++){let v=Math.PI*(_/7),M=Math.PI*((_+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),g+b-b*Math.cos(v),g+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)d(b*(.25+.75*(4-_)/4),g+.06*_,g+.06*(_+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,se,se,10),d(.012,g+.16,e-.03,se,se,6),d(.13,g+.07,g+.16,se,se,16),d(.11,g,g+.07,n,n,16),r&&_b(i,t.x,yb(e,a),t.z,o/2,c);break}case"downlight":d(b,e-.012,e,se,se,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,se,se,10),d(b,e-Math.max(.06,a),e-.02,se,se,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":m(-o/2,o/2,-s/2,s/2,e-Math.max(.015,a),e,se,se),m(-o/2+.02,o/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,se,se),d(.014,l+.03,l+a-.12,se,se,6),d(b,l+a-.14,l+a-.02,se,se),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,se,se,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,se,se,10);break;case"garden":d(.012,l,l+a-.08,se,se,5),d(b,l+a-.08,l+a-.01,se,se,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,se,se),d(.014,l+.03,l+a-.28,se,se,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,se,se),d(.012,l+.03,l+a-.16,se,se,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??wc;m(-o/2+.03,o/2-.03,-s/2,-s/2+.02,g,g+a,se),m(-o/2,o/2,-s/2+.02,s/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),p=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){m(-o/2,o/2,-s/2,s/2,p-g,p,n);break}let x=(t.roll??0)*ie,_=Math.cos(x),v=Math.sin(x),M=t.upright?l+o/2:p-g/2,S=(t.upright?0:t.rise??0)*ie,E=(I,L,P)=>{let B=I,T=L*_-P*v,C=L*v+P*_;return S&&([B,T]=[B*Math.cos(S)-T*Math.sin(S),B*Math.sin(S)+T*Math.cos(S)]),t.upright&&([B,T]=[-T,B]),[t.x+B*h-C*u,M+T,t.z+B*u+C*h]},y=[E(-o/2,-g/2,-s/2),E(o/2,-g/2,-s/2),E(o/2,-g/2,s/2),E(-o/2,-g/2,s/2),E(-o/2,g/2,-s/2),E(o/2,g/2,-s/2),E(o/2,g/2,s/2),E(-o/2,g/2,s/2)],R=new tt(n),w=[t.x,M,t.z],A=(I,L,P,B)=>{let[T,C,O]=[y[I],y[L],y[P]],D=[(C[1]-T[1])*(O[2]-T[2])-(C[2]-T[2])*(O[1]-T[1]),(C[2]-T[2])*(O[0]-T[0])-(C[0]-T[0])*(O[2]-T[2]),(C[0]-T[0])*(O[1]-T[1])-(C[1]-T[1])*(O[0]-T[0])],N=[T[0]-w[0],T[1]-w[1],T[2]-w[2]],z=D[0]*N[0]+D[1]*N[1]+D[2]*N[2]<0,[G,V,W,Q]=z?[y[B],y[P],y[L],y[I]]:[y[I],y[L],y[P],y[B]];i.tri(G,V,W,R,R,R),i.tri(G,W,Q,R,R,R)};A(0,1,2,3),A(4,5,6,7),A(0,1,5,4),A(1,2,6,5),A(2,3,7,6),A(3,0,4,7);break}}}export{Uf as FloorMap,rd as FloorplanViewer,Bf as WalkCamera,YP as createViewer,RP as funLib,GS as furnitureFront,VS as furniturePreview,oT as isLowEnd,_b as pushFanBlades,ed as pushLampModel};
