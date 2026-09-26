(()=>{var bm=Object.defineProperty;var bn=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Ma=(i,e)=>{for(var t in e)bm(i,t,{get:e[t],enumerable:!0})};function Tm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sf(){let i=Ls("canvas");return i.style.display="block",i}function Er(...i){let e="THREE."+i.shift();Ds?Ds("log",e,...i):console.log(e,...i)}function wf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=wf(i);let e="THREE."+i.shift();if(Ds)Ds("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=wf(i);let e="THREE."+i.shift();if(Ds)Ds("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ji(...i){let e=i.join(" ");e in Zu||(Zu[e]=!0,Re(...i))}function Ef(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function vn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function Rm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Im(i,e,t){return i!==e?(t-i)/(e-i):0}function yr(i,e,t){return(1-t)*i+t*e}function Pm(i,e,t,n){return yr(i,e,1-Math.exp(-t*n))}function Lm(i,e=1){return e-Math.abs(dh(i,e*2)-e)}function Dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Um(i,e){return i+Math.random()*(e-i)}function Bm(i){return i*(.5-Math.random())}function Om(i){i!==void 0&&($u=i);let e=$u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function km(i){return i*vr}function Gm(i){return i*ji}function zm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qm(){let i={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qt]:{primaries:e,whitePoint:n,transfer:wr,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}function sl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function dl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wi.fromArray(i,r);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function og(i,e,t,n,s,r,a,o){let c;if(e.side===zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Jn,o),c===null)return null;za.copy(o),za.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(za);return l<t.near||l>t.far?null:{distance:l,point:za.clone(),object:i}}function Va(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ba),i.getVertexPosition(c,Oa),i.getVertexPosition(l,ka);let h=og(i,e,t,n,Ba,Oa,ka,fd);if(h){let u=new P;Ei.getBarycoord(fd,Ba,Oa,ka,u),s&&(h.uv=Ei.getInterpolatedAttribute(s,o,c,l,u,new oe)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,o,c,l,u,new oe)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};Ei.getNormal(Ba,Oa,ka,d.normal),h.face=d,h.barycoord=u}return h}function Ja(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(po.fromBufferAttribute(o,s),mo.fromBufferAttribute(o,r),t.distanceSqToSegment(po,mo,_l,yd)>n)return;_l.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_l);if(!(l<e.near||l>e.far))return{distance:l,point:yd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function Ed(i,e,t,n,s,r,a){let o=Pl.distanceSqToPoint(i);if(o<t){let c=new P;Pl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function fh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}function Rd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function dg(i,e){let t=1-i;return t*t*e}function fg(i,e){return 2*(1-i)*i*e}function pg(i,e){return i*i*e}function Mr(i,e,t,n){return dg(i,e)+fg(i,t)+pg(i,n)}function mg(i,e){let t=1-i;return t*t*t*e}function gg(i,e){let t=1-i;return 3*t*t*i*e}function Ag(i,e){return 3*(1-i)*i*i*e}function bg(i,e){return i*i*i*e}function Sr(i,e,t,n,s){return mg(i,e)+gg(i,t)+Ag(i,n)+bg(i,s)}function xg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Rf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Sg(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return zr(r,a,t,o,c,l,0),a}function Rf(i,e,t,n,s){let r;if(s===Ng(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Id(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Id(a/n|0,i[a],i[a+1],r);return r&&Xs(r,r.next)&&(Hr(r),r=r.next),r}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xs(t,t.next)||yt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Rg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?vg(i,n,s,r):_g(i)){e.push(c.i,i.i,l.i),Hr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=yg(Zi(i),e),zr(i,e,t,n,s,r,2)):a===2&&Mg(i,e,t,n,s,r):zr(Zi(i),e,t,n,s,r,1);break}}}function _g(i){let e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&_r(s,o,r,c,a,l,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(yt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(h,u,d),_=Math.max(o,c,l),m=Math.max(h,u,d),p=Dl(f,g,e,t,n),y=Dl(_,m,e,t,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=p&&b&&b.z<=y;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&_r(o,h,c,u,l,d,w.x,w.y)&&yt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&_r(o,h,c,u,l,d,b.x,b.y)&&yt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&_r(o,h,c,u,l,d,w.x,w.y)&&yt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&_r(o,h,c,u,l,d,b.x,b.y)&&yt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function yg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Xs(n,s)&&Pf(n,t,t.next,s)&&Vr(n,s)&&Vr(s,n)&&(e.push(n.i,t.i,s.i),Hr(t),Hr(t.next),t=i=s),t=t.next}while(t!==i);return Zi(t)}function Mg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lg(a,o)){let c=Lf(a,o);a=Zi(a,a.next),c=Zi(c,c.next),zr(a,e,t,n,s,r,0),zr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Sg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Rf(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Pg(l))}s.sort(wg);for(let r=0;r<s.length;r++)t=Eg(s[r],t);return t}function wg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Eg(i,e){let t=Tg(i,e);if(!t)return e;let n=Lf(t,i);return Zi(n,n.next),Zi(t,t.next)}function Tg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Xs(i,t))return t;do{if(Xs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&If(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Vr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Cg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Cg(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function Rg(i,e,t,n){let s=i;do s.z===0&&(s.z=Dl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ig(s)}function Ig(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Dl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Pg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function If(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function _r(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&If(i,e,t,n,s,r,a,o)}function Lg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Dg(i,e)&&(Vr(i,e)&&Vr(e,i)&&Fg(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Xs(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xs(i,e){return i.x===e.x&&i.y===e.y}function Pf(i,e,t,n){let s=Qa(yt(i,e,t)),r=Qa(yt(i,e,n)),a=Qa(yt(t,n,i)),o=Qa(yt(t,n,e));return!!(s!==r&&a!==o||s===0&&ja(i,t,e)||r===0&&ja(i,n,e)||a===0&&ja(t,i,n)||o===0&&ja(t,e,n))}function ja(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qa(i){return i>0?1:i<0?-1:0}function Dg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vr(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function Fg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Lf(i,e){let t=Fl(i.i,i.x,i.y),n=Fl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Id(i,e,t,n){let s=Fl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ng(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}function Pd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ld(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function Bg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Og(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Dd(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Dd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=rs(i[t]);for(let s in n)e[s]=n[s]}return e}function Dd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ph(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}function wi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function no(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Vg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Fd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Hg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function Ff(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Wg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function qg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ff(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Wg(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function Nd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function Xg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ci;case"vector":case"vector2":case"vector3":case"vector4":return Di;case"color":return Jr;case"quaternion":return li;case"bool":case"boolean":return oi;case"string":return hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Jg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Xg(i.type);if(i.times===void 0){let n=[],s=[];Hg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),no(i.settings)&&(t.settings={inTangents:wi(i.settings.inTangents,Float32Array),outTangents:wi(i.settings.outTangents,Float32Array)}),t}function Ud(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Vd(i,e){return i.distance-e.distance}function zl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)zl(r[a],e,t,!0)}}function Ah(i,e,t,n){let s=n0(n);switch(t){case oh:return i*e;case Ho:return i*e/s.components*s.byteLength;case Wo:return i*e/s.components*s.byteLength;case Oi:return i*e*2/s.components*s.byteLength;case qo:return i*e*2/s.components*s.byteLength;case ch:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case Xo:return i*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:case jo:return Math.max(i,16)*Math.max(e,8)/4;case Jo:case Yo:return Math.max(i,8)*Math.max(e,8)/2;case Qo:case Zo:case ec:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $o:case sa:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ac:case bc:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _c:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ra:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function n0(i){switch(i){case on:case ih:return{byteLength:1,components:1};case Qs:case sh:case Fn:return{byteLength:2,components:1};case zo:case Vo:return{byteLength:2,components:4};case Dn:case Go:case pn:return{byteLength:4,components:1};case rh:case ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Hd,Hl,Wd,Zr,qd,Ys,Jn,zt,an,Kn,Ni,Wl,ql,Xl,Xd,ns,Jd,Kd,Yd,jd,Qd,Zd,$d,ef,Jl,Kl,tf,nf,sf,rf,af,of,cf,lf,hf,io,so,ro,Rs,ao,oo,co,lo,Uo,uf,df,Ln,Yl,jl,Ql,Zl,$l,eh,th,El,ff,nh,Ui,is,Bo,Oo,$r,Ti,_n,Is,wt,ko,ss,Et,js,fn,on,ih,sh,Qs,Go,Dn,pn,Fn,zo,Vo,Zs,rh,ah,oh,ch,mn,Gn,Bi,Ho,Wo,Oi,qo,Xo,ea,ta,na,ia,Jo,Ko,Yo,jo,Qo,Zo,$o,ec,tc,sa,nc,ic,sc,rc,ac,oc,cc,lc,hc,uc,dc,fc,pc,mc,gc,Ac,bc,xc,_c,vc,ra,yc,Ki,Yi,eo,Tl,Cl,Rl,Il,pf,lh,aa,$s,mf,oa,gf,pi,Mt,Qt,wr,ct,to,Af,bf,xf,_f,Mc,vf,yf,Sc,Mf,hh,ki,uh,Cn,Ps,Zu,Ds,Tf,zn,Wt,$u,vr,ji,ca,bh,oe,un,xh,P,$c,ed,_h,We,el,td,nd,je,ps,ho,Xm,Fs,Jm,nl,Ft,vh,dt,uo,tn,Tr,fo,No,Xe,ms,Sn,Km,Ym,_i,Ta,cn,id,sd,Vn,Ns,jm,rd,gs,$n,Ca,dr,Qm,Zm,ad,od,cd,ld,$m,As,il,ft,Xt,eg,Us,Cf,vi,Ra,De,qt,Rn,wn,ei,rl,ti,bs,xs,hd,al,ol,cl,ll,hl,ul,Ei,Zt,ni,En,Ia,_s,vs,ys,yi,Mi,Hi,fr,Pa,La,Wi,Pt,Da,tg,ut,Cr,Rr,Lt,ng,pr,fl,nn,ig,xn,pl,Ms,ln,mr,Bt,Tt,Bs,jt,Os,ml,sg,rg,hn,ag,$t,ii,gl,Fa,Na,Ci,In,ud,qi,Ua,dd,Ba,Oa,ka,Al,Ga,fd,za,pt,gr,pd,md,cg,gd,Ha,bl,Ad,xl,Ir,ks,Gs,bd,lg,Pr,ai,Ss,xd,Wa,_d,hg,Ar,br,Hn,Xi,ug,qa,zs,Vs,po,mo,vd,xr,Xa,_l,yd,Qi,Md,Sd,Lr,Dr,Hs,wd,Pl,Ka,Ya,Ri,Fr,Ws,Ii,go,Nr,Wn,dn,qs,Ao,Td,Cd,vl,yl,Ml,bo,Ur,xo,Br,_o,Or,vo,kr,Ll,yo,Gr,Pi,Nl,On,Wr,Ug,Li,qr,Df,Gg,zg,Ot,Mo,Gt,sn,Xr,So,wo,qn,Eo,To,Co,Ro,rn,oi,Jr,ci,Io,li,hi,Di,Kr,kn,Po,Nf,Xn,si,Ul,Js,ws,Lo,$i,es,ui,Sl,Bd,Od,Ks,Za,$a,Bn,Yr,Si,kd,Gd,vt,Bl,jr,Ol,di,Fi,kl,Pn,fi,wl,Qr,Es,Ts,Do,Fo,mh,Kg,gh,Yg,jg,Qg,Zg,$g,e0,t0,Gl,At,qv,zd,ts,yh,Vl,Mh=bn(()=>{Hd=0,Hl=1,Wd=2,Zr=1,qd=2,Ys=3,Jn=0,zt=1,an=2,Kn=0,Ni=1,Wl=2,ql=3,Xl=4,Xd=5,ns=100,Jd=101,Kd=102,Yd=103,jd=104,Qd=200,Zd=201,$d=202,ef=203,Jl=204,Kl=205,tf=206,nf=207,sf=208,rf=209,af=210,of=211,cf=212,lf=213,hf=214,io=0,so=1,ro=2,Rs=3,ao=4,oo=5,co=6,lo=7,Uo=0,uf=1,df=2,Ln=0,Yl=1,jl=2,Ql=3,Zl=4,$l=5,eh=6,th=7,El="attached",ff="detached",nh=300,Ui=301,is=302,Bo=303,Oo=304,$r=306,Ti=1e3,_n=1001,Is=1002,wt=1003,ko=1004,ss=1005,Et=1006,js=1007,fn=1008,on=1009,ih=1010,sh=1011,Qs=1012,Go=1013,Dn=1014,pn=1015,Fn=1016,zo=1017,Vo=1018,Zs=1020,rh=35902,ah=35899,oh=1021,ch=1022,mn=1023,Gn=1026,Bi=1027,Ho=1028,Wo=1029,Oi=1030,qo=1031,Xo=1033,ea=33776,ta=33777,na=33778,ia=33779,Jo=35840,Ko=35841,Yo=35842,jo=35843,Qo=36196,Zo=37492,$o=37496,ec=37488,tc=37489,sa=37490,nc=37491,ic=37808,sc=37809,rc=37810,ac=37811,oc=37812,cc=37813,lc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,Ac=36492,bc=36494,xc=36495,_c=36283,vc=36284,ra=36285,yc=36286,Ki=2300,Yi=2301,eo=2302,Tl=2303,Cl=2400,Rl=2401,Il=2402,pf=2500,lh=0,aa=1,$s=2,mf=3200,oa=0,gf=1,pi="",Mt="srgb",Qt="srgb-linear",wr="linear",ct="srgb",to=7680,Af=519,bf=512,xf=513,_f=514,Mc=515,vf=516,yf=517,Sc=518,Mf=519,hh=35044,ki=35048,uh="300 es",Cn=2e3,Ps=2001;Zu={},Ds=null;Tf={[io]:so,[ro]:co,[ao]:lo,[Rs]:oo,[so]:io,[co]:ro,[lo]:ao,[oo]:Rs},zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=1234567,vr=Math.PI/180,ji=180/Math.PI;ca={DEG2RAD:vr,RAD2DEG:ji,generateUUID:vn,clamp:Qe,euclideanModulo:dh,mapLinear:Rm,inverseLerp:Im,lerp:yr,damp:Pm,pingpong:Lm,smoothstep:Dm,smootherstep:Fm,randInt:Nm,randFloat:Um,randFloatSpread:Bm,seededRandom:Om,degToRad:km,radToDeg:Gm,isPowerOfTwo:zm,ceilPowerOfTwo:Vm,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:Wm,normalize:ht,denormalize:Tn},bh=class bh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bh.prototype.isVector2=!0;oe=bh,un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);p=Math.sin(p*y)/w,o=Math.sin(o*y)/w,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+_*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+_*o;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xh=class xh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xh.prototype.isVector3=!0;P=xh,$c=new P,ed=new un,_h=class _h{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],w=s[4],b=s[7],M=s[2],S=s[5],C=s[8];return r[0]=a*_+o*y+c*M,r[3]=a*m+o*w+c*S,r[6]=a*p+o*b+c*C,r[1]=l*_+h*y+u*M,r[4]=l*m+h*w+u*S,r[7]=l*p+h*b+u*C,r[2]=d*_+f*y+g*M,r[5]=d*m+f*w+g*S,r[8]=d*p+f*b+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(el.makeScale(e,t)),this}rotate(e){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(el.makeRotation(-e)),this}translate(e,t){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_h.prototype.isMatrix3=!0;We=_h,el=new We,td=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je=qm();ho=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=Ls("canvas")),ps.width=e.width,ps.height=e.height;let s=ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ls("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xm=0,Fs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tl(s[a].image)):r.push(tl(s[a]))}else r=tl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Jm=0,nl=new P,Ft=class i extends zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=_n,s=_n,r=Et,a=fn,o=mn,c=on,l=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=vn(),this.name="",this.source=new Fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=nh;Ft.DEFAULT_ANISOTROPY=1;vh=class vh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,b=(f+1)/2,M=(p+1)/2,S=(h+d)/4,C=(u+_)/4,x=(g+m)/4;return w>b&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=C/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=x/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vh.prototype.isVector4=!0;dt=vh,uo=class extends zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ft(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends uo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Tr=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},fo=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},No=class No{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new No().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Km,e,Ym)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),_i.crossVectors(n,cn),_i.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),_i.crossVectors(n,cn)),_i.normalize(),Ta.crossVectors(cn,_i),s[0]=_i.x,s[4]=Ta.x,s[8]=cn.x,s[1]=_i.y,s[5]=Ta.y,s[9]=cn.y,s[2]=_i.z,s[6]=Ta.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],w=n[7],b=n[11],M=n[15],S=s[0],C=s[4],x=s[8],T=s[12],I=s[1],F=s[5],z=s[9],V=s[13],N=s[2],k=s[6],Y=s[10],W=s[14],ie=s[3],q=s[7],Z=s[11],te=s[15];return r[0]=a*S+o*I+c*N+l*ie,r[4]=a*C+o*F+c*k+l*q,r[8]=a*x+o*z+c*Y+l*Z,r[12]=a*T+o*V+c*W+l*te,r[1]=h*S+u*I+d*N+f*ie,r[5]=h*C+u*F+d*k+f*q,r[9]=h*x+u*z+d*Y+f*Z,r[13]=h*T+u*V+d*W+f*te,r[2]=g*S+_*I+m*N+p*ie,r[6]=g*C+_*F+m*k+p*q,r[10]=g*x+_*z+m*Y+p*Z,r[14]=g*T+_*V+m*W+p*te,r[3]=y*S+w*I+b*N+M*ie,r[7]=y*C+w*F+b*k+M*q,r[11]=y*x+w*z+b*Y+M*Z,r[15]=y*T+w*V+b*W+M*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=c*f-l*d,w=o*f-l*u,b=o*d-c*u,M=a*f-l*h,S=a*d-c*h,C=a*u-o*h;return t*(_*y-m*w+p*b)-n*(g*y-m*M+p*S)+s*(g*w-_*M+p*C)-r*(g*b-_*S+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=t*o-n*a,w=t*c-s*a,b=t*l-r*a,M=n*c-s*o,S=n*l-r*o,C=s*l-r*c,x=h*_-u*g,T=h*m-d*g,I=h*p-f*g,F=u*m-d*_,z=u*p-f*_,V=d*p-f*m,N=y*V-w*z+b*F+M*I-S*T+C*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return e[0]=(o*V-c*z+l*F)*k,e[1]=(s*z-n*V-r*F)*k,e[2]=(_*C-m*S+p*M)*k,e[3]=(d*S-u*C-f*M)*k,e[4]=(c*I-a*V-l*T)*k,e[5]=(t*V-s*I+r*T)*k,e[6]=(m*b-g*C-p*w)*k,e[7]=(h*C-d*b+f*w)*k,e[8]=(a*z-o*I+l*x)*k,e[9]=(n*I-t*z-r*x)*k,e[10]=(g*S-_*b+p*y)*k,e[11]=(u*b-h*S-f*y)*k,e[12]=(o*T-a*F-c*x)*k,e[13]=(t*F-n*T+s*x)*k,e[14]=(_*w-g*M-m*y)*k,e[15]=(h*M-u*w+d*y)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=c*l,w=c*h,b=c*u,M=n.x,S=n.y,C=n.z;return s[0]=(1-(_+p))*M,s[1]=(f+b)*M,s[2]=(g-w)*M,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(d+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+w)*C,s[9]=(m-y)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),c=ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);let l=1/a,h=1/o,u=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Cn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Cn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ps)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Cn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Cn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ps)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};No.prototype.isMatrix4=!0;Xe=No,ms=new P,Sn=new Xe,Km=new P(0,0,0),Ym=new P(1,1,1),_i=new P,Ta=new P,cn=new P,id=new Xe,sd=new un,Vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";Ns=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jm=0,rd=new P,gs=new un,$n=new Xe,Ca=new P,dr=new P,Qm=new P,Zm=new un,ad=new P(1,0,0),od=new P(0,1,0),cd=new P(0,0,1),ld={type:"added"},$m={type:"removed"},As={type:"childadded",child:null},il={type:"childremoved",child:null},ft=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Vn,n=new un,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(dr,Ca,this.up):$n.lookAt(Ca,dr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),gs.setFromRotationMatrix($n),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),As.child=e,this.dispatchEvent(As),As.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($m),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ft.DEFAULT_UP=new P(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Xt=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},eg={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=dh(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sl(a,r,e+1/3),this.g=sl(a,r,e),this.b=sl(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return je.workingToColorSpace(qt.copy(this),e),Math.round(Qe(qt.r*255,0,255))*65536+Math.round(Qe(qt.g*255,0,255))*256+Math.round(Qe(qt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(qt.copy(this),t);let n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Mt){je.workingToColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,s=qt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Ra);let n=yr(vi.h,Ra.h,t),s=yr(vi.s,Ra.s,t),r=yr(vi.l,Ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new De;De.NAMES=Cf;Rn=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wn=new P,ei=new P,rl=new P,ti=new P,bs=new P,xs=new P,hd=new P,al=new P,ol=new P,cl=new P,ll=new dt,hl=new dt,ul=new dt,Ei=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wn.subVectors(e,t),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wn.subVectors(s,t),ei.subVectors(n,t),rl.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(ei),c=wn.dot(rl),l=ei.dot(ei),h=ei.dot(rl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ll.setScalar(0),hl.setScalar(0),ul.setScalar(0),ll.fromBufferAttribute(e,t),hl.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ll,r.x),a.addScaledVector(hl,r.y),a.addScaledVector(ul,r.z),a}static isFrontFacing(e,t,n,s){return wn.subVectors(n,t),ei.subVectors(e,t),wn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),wn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;bs.subVectors(s,n),xs.subVectors(r,n),al.subVectors(e,n);let c=bs.dot(al),l=xs.dot(al);if(c<=0&&l<=0)return t.copy(n);ol.subVectors(e,s);let h=bs.dot(ol),u=xs.dot(ol);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(bs,a);cl.subVectors(e,r);let f=bs.dot(cl),g=xs.dot(cl);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(xs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return hd.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(hd,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(bs,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Pa.subVectors(this.max,fr),_s.subVectors(e.a,fr),vs.subVectors(e.b,fr),ys.subVectors(e.c,fr),yi.subVectors(vs,_s),Mi.subVectors(ys,vs),Hi.subVectors(_s,ys);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Hi.z,Hi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Hi.z,0,-Hi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Hi.y,Hi.x,0];return!dl(t,_s,vs,ys,Pa)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,_s,vs,ys,Pa))?!1:(La.crossVectors(yi,Mi),t=[La.x,La.y,La.z],dl(t,_s,vs,ys,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ni=[new P,new P,new P,new P,new P,new P,new P,new P],En=new P,Ia=new Zt,_s=new P,vs=new P,ys=new P,yi=new P,Mi=new P,Hi=new P,fr=new P,Pa=new P,La=new P,Wi=new P;Pt=new P,Da=new oe,tg=0,ut=class extends zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Cr=class extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Rr=class extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Lt=class extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},ng=new Zt,pr=new P,fl=new P,nn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ng.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(fl)),this.expandByPoint(pr.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ig=0,xn=new Xe,pl=new ft,Ms=new P,ln=new Zt,mr=new Zt,Bt=new P,Tt=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tm(e)?Rr:Cr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(ln.min,mr.min),ln.expandByPoint(Bt),Bt.addVectors(ln.max,mr.max),ln.expandByPoint(Bt)):(ln.expandByPoint(mr.min),ln.expandByPoint(mr.max))}ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Bt.fromBufferAttribute(o,l),c&&(Ms.fromBufferAttribute(e,l),Bt.add(Ms)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new P,c[x]=new P;let l=new P,h=new P,u=new P,d=new oe,f=new oe,g=new oe,_=new P,m=new P;function p(x,T,I){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(F),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(F),o[x].add(_),o[T].add(_),o[I].add(_),c[x].add(m),c[T].add(m),c[I].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){let I=y[x],F=I.start,z=I.count;for(let V=F,N=F+z;V<N;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let w=new P,b=new P,M=new P,S=new P;function C(x){M.fromBufferAttribute(s,x),S.copy(M);let T=o[x];w.copy(T),w.sub(M.multiplyScalar(M.dot(T))).normalize(),b.crossVectors(S,T);let F=b.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,F)}for(let x=0,T=y.length;x<T;++x){let I=y[x],F=I.start,z=I.count;for(let V=F,N=F+z;V<N;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ut(d,h,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},jt=new P,Os=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ml=new P,sg=new P,rg=new We,hn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ml.subVectors(n,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rg.getNormalMatrix(e),s=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ag=0,$t=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=Ni,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Kl,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ii=new P,gl=new P,Fa=new P,Na=new P,Ci=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gl.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),Na.copy(this.origin).sub(gl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fa),o=Na.dot(this.direction),c=-Na.dot(Fa),l=Na.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gl).addScaledVector(Fa,d),f}intersectSphere(e,t){if(e.radius<0)return null;ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,y=n.y-a.y,w=n.z-a.z,b=Math.abs(c),M=Math.abs(l),S=Math.abs(h),C,x,T,I,F,z,V,N,k,Y,W,ie;if(b>=M&&b>=S?(T=c,z=u,k=g,ie=p,c>=0?(C=l,x=h,I=d,F=f,V=_,N=m,Y=y,W=w):(C=h,x=l,I=f,F=d,V=m,N=_,Y=w,W=y)):M>=S?(T=l,z=d,k=_,ie=y,l>=0?(C=h,x=c,I=f,F=u,V=m,N=g,Y=w,W=p):(C=c,x=h,I=u,F=f,V=g,N=m,Y=p,W=w)):(T=h,z=f,k=m,ie=w,h>=0?(C=c,x=l,I=u,F=d,V=g,N=_,Y=p,W=y):(C=l,x=c,I=d,F=u,V=_,N=g,Y=y,W=p)),T===0)return null;let q=C/T,Z=x/T,te=1/T,Ie=I-q*z,Se=F-Z*z,st=V-q*k,$e=N-Z*k,nt=Y-q*ie,K=W-Z*ie,$=nt*$e-K*st,Ae=Ie*K-Se*nt,ze=st*Se-$e*Ie;if(s){if($<0||Ae<0||ze<0)return null}else if(($<0||Ae<0||ze<0)&&($>0||Ae>0||ze>0))return null;let ve=$+Ae+ze;if(ve===0)return null;let Ve=te*($*z+Ae*k+ze*ie);return(ve>0?Ve<0:Ve>0)?null:this.at(Ve/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends $t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ud=new Xe,qi=new Ci,Ua=new nn,dd=new P,Ba=new P,Oa=new P,ka=new P,Al=new P,Ga=new P,fd=new P,za=new P,pt=class extends ft{constructor(e=new Tt,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Al.fromBufferAttribute(u,e),a?Ga.addScaledVector(Al,h):Ga.addScaledVector(Al.sub(t),h))}t.add(Ga)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(Ua.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Ua,dd)===null||qi.origin.distanceToSquared(dd)>(e.far-e.near)**2))&&(ud.copy(r).invert(),qi.copy(e.ray).applyMatrix4(ud),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,M=w;b<M;b+=3){let S=o.getX(b),C=o.getX(b+1),x=o.getX(b+2);s=Va(this,p,e,n,l,h,u,S,C,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);s=Va(this,a,e,n,l,h,u,y,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,M=w;b<M;b+=3){let S=b,C=b+1,x=b+2;s=Va(this,p,e,n,l,h,u,S,C,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,w=m+1,b=m+2;s=Va(this,a,e,n,l,h,u,y,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};gr=new dt,pd=new dt,md=new dt,cg=new dt,gd=new Xe,Ha=new P,bl=new nn,Ad=new Xe,xl=new Ci,Ir=class extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=El,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingBox.expandByPoint(Ha)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingSphere.expandByPoint(Ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(s),e.ray.intersectsSphere(bl)!==!1&&(Ad.copy(s).invert(),xl.copy(e.ray).applyMatrix4(Ad),!(this.boundingBox!==null&&xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===El?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ff?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;pd.fromBufferAttribute(s.attributes.skinIndex,e),md.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(gr.copy(t),t.set(0,0,0,0)):(gr.set(...t,1),t.set(0,0,0)),gr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=md.getComponent(r);if(a!==0){let o=pd.getComponent(r);gd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cg.copy(gr).applyMatrix4(gd),a)}}return t.isVector4&&(t.w=gr.w),t.applyMatrix4(this.bindMatrixInverse)}},ks=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Gs=class extends Ft{constructor(e=null,t=1,n=1,s,r,a,o,c,l=wt,h=wt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bd=new Xe,lg=new Xe,Pr=class i{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:lg;bd.multiplyMatrices(o,t[r]),bd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Gs(t,e,e,mn,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Re("Skeleton: No bone found with UUID:",r),a=new ks),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ai=class extends ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ss=new Xe,xd=new Xe,Wa=[],_d=new Zt,hg=new Xe,Ar=new pt,br=new nn,Hn=class extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),_d.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(_d)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),br.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),xd.multiplyMatrices(n,Ss),Ar.matrixWorld=xd,Ar.raycast(e,Wa);for(let a=0,o=Wa.length;a<o;a++){let c=Wa[a];c.instanceId=r,c.object=this,t.push(c)}Wa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gs(new Float32Array(s*this.count),s,this.count,Ho,pn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new nn,ug=new oe(.5,.5),qa=new P,zs=class{constructor(e=new hn,t=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],w=r[13],b=r[14],M=r[15];if(s[0].setComponents(l-a,f-h,p-g,M-y).normalize(),s[1].setComponents(l+a,f+h,p+g,M+y).normalize(),s[2].setComponents(l+o,f+u,p+_,M+w).normalize(),s[3].setComponents(l-o,f-u,p-_,M-w).normalize(),n)s[4].setComponents(c,d,m,b).normalize(),s[5].setComponents(l-c,f-d,p-m,M-b).normalize();else if(s[4].setComponents(l-c,f-d,p-m,M-b).normalize(),t===Cn)s[5].setComponents(l+c,f+d,p+m,M+b).normalize();else if(t===Ps)s[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);let t=ug.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Vs=class extends $t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},po=new P,mo=new P,vd=new Xe,xr=new Ci,Xa=new nn,_l=new P,yd=new P,Qi=class extends ft{constructor(e=new Tt,t=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)po.fromBufferAttribute(t,s-1),mo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=po.distanceTo(mo);e.setAttribute("lineDistance",new Lt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;vd.copy(s).invert(),xr.copy(e.ray).applyMatrix4(vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){let p=h.getX(_),y=h.getX(_+1),w=Ja(this,e,xr,c,p,y,_);w&&t.push(w)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=Ja(this,e,xr,c,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){let p=Ja(this,e,xr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Ja(this,e,xr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Md=new P,Sd=new P,Lr=class extends Qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Md.fromBufferAttribute(t,s),Sd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Md.distanceTo(Sd);e.setAttribute("lineDistance",new Lt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Dr=class extends Qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hs=class extends $t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wd=new Xe,Pl=new Ci,Ka=new nn,Ya=new P,Ri=class extends ft{constructor(e=new Tt,t=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;wd.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(wd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=l.getX(g);Ya.fromBufferAttribute(u,m),Ed(Ya,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ya.fromBufferAttribute(u,g),Ed(Ya,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Fr=class extends Ft{constructor(e=[],t=Ui,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ws=class extends Ft{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ii=class extends Ft{constructor(e,t,n=Dn,s,r,a,o=wt,c=wt,l,h=Gn,u=1){if(h!==Gn&&h!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},go=class extends Ii{constructor(e,t=Dn,n=Ui,s,r,a=wt,o=wt,c,l=Gn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Nr=class extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wn=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function g(_,m,p,y,w,b,M,S,C,x,T){let I=b/C,F=M/x,z=b/2,V=M/2,N=S/2,k=C+1,Y=x+1,W=0,ie=0,q=new P;for(let Z=0;Z<Y;Z++){let te=Z*F-V;for(let Ie=0;Ie<k;Ie++){let Se=Ie*I-z;q[_]=Se*y,q[m]=te*w,q[p]=N,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=S>0?1:-1,h.push(q.x,q.y,q.z),u.push(Ie/C),u.push(1-Z/x),W+=1}}for(let Z=0;Z<x;Z++)for(let te=0;te<C;te++){let Ie=d+te+k*Z,Se=d+te+k*(Z+1),st=d+(te+1)+k*(Z+1),$e=d+(te+1)+k*Z;c.push(Ie,Se,$e),c.push(Se,st,$e),ie+=6}o.addGroup(f,ie,T),f+=ie,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new oe:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,c=new Xe;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qs=class extends dn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ao=class extends qs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Td=new P,Cd=new P,vl=new fh,yl=new fh,Ml=new fh,bo=class extends dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Cd.subVectors(s[0],s[1]).add(s[0]),l=Cd);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Td.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Td),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),vl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),yl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Ml.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),yl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ml.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(vl.calc(c),yl.calc(c),Ml.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ur=class extends dn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(e,s.x,r.x,a.x,o.x),Sr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xo=class extends dn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(e,s.x,r.x,a.x,o.x),Sr(e,s.y,r.y,a.y,o.y),Sr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Br=class extends dn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends dn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Or=class extends dn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,s.x,r.x,a.x),Mr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends dn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,s.x,r.x,a.x),Mr(e,s.y,r.y,a.y),Mr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Rd(o,c.x,l.x,h.x,u.x),Rd(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Ll=Object.freeze({__proto__:null,ArcCurve:Ao,CatmullRomCurve3:bo,CubicBezierCurve:Ur,CubicBezierCurve3:xo,EllipseCurve:qs,LineCurve:Br,LineCurve3:_o,QuadraticBezierCurve:Or,QuadraticBezierCurve3:vo,SplineCurve:kr}),yo=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ll[s.type]().fromJSON(s))}return this}},Gr=class extends yo{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Br(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Or(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ur(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new kr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new qs(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pi=class extends Gr{constructor(e){super(e),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Gr().fromJSON(s))}return this}};Nl=class{static triangulate(e,t,n=2){return xg(e,t,n)}},On=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Pd(e),Ld(n,e);let a=e.length;t.forEach(Pd);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Ld(n,t[c]);let o=Nl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};Wr=class i extends Tt{constructor(e=new Pi([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Lt(s,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ug,w,b=!1,M,S,C,x;if(p){w=p.getSpacedPoints(h),b=!0,d=!1;let ee=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(h,ee),S=new P,C=new P,x=new P}d||(m=0,f=0,g=0,_=0);let T=o.extractPoints(l),I=T.shape,F=T.holes;if(!On.isClockWise(I)){I=I.reverse();for(let ee=0,se=F.length;ee<se;ee++){let re=F[ee];On.isClockWise(re)&&(F[ee]=re.reverse())}}function V(ee){let re=10000000000000001e-36,ae=ee[0];for(let he=1;he<=ee.length;he++){let Be=he%ee.length,Ue=ee[Be],He=Ue.x-ae.x,qe=Ue.y-ae.y,R=He*He+qe*qe,rt=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(ae.x),Math.abs(ae.y)),et=re*rt*rt;if(R<=et){ee.splice(Be,1),he--;continue}ae=Ue}}V(I),F.forEach(V);let N=F.length,k=I;for(let ee=0;ee<N;ee++){let se=F[ee];I=I.concat(se)}function Y(ee,se,re){return se||Ge("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,re)}let W=I.length;function ie(ee,se,re){let ae,he,Be,Ue=ee.x-se.x,He=ee.y-se.y,qe=re.x-ee.x,R=re.y-ee.y,rt=Ue*Ue+He*He,et=Ue*R-He*qe;if(Math.abs(et)>Number.EPSILON){let E=Math.sqrt(rt),A=Math.sqrt(qe*qe+R*R),U=se.x-He/E,G=se.y+Ue/E,X=re.x-R/A,ce=re.y+qe/A,le=((X-U)*R-(ce-G)*qe)/(Ue*R-He*qe);ae=U+Ue*le-ee.x,he=G+He*le-ee.y;let J=ae*ae+he*he;if(J<=2)return new oe(ae,he);Be=Math.sqrt(J/2)}else{let E=!1;Ue>Number.EPSILON?qe>Number.EPSILON&&(E=!0):Ue<-Number.EPSILON?qe<-Number.EPSILON&&(E=!0):Math.sign(He)===Math.sign(R)&&(E=!0),E?(ae=-He,he=Ue,Be=Math.sqrt(rt)):(ae=Ue,he=He,Be=Math.sqrt(rt/2))}return new oe(ae/Be,he/Be)}let q=[];for(let ee=0,se=k.length,re=se-1,ae=ee+1;ee<se;ee++,re++,ae++)re===se&&(re=0),ae===se&&(ae=0),q[ee]=ie(k[ee],k[re],k[ae]);let Z=[],te,Ie=q.concat();for(let ee=0,se=N;ee<se;ee++){let re=F[ee];te=[];for(let ae=0,he=re.length,Be=he-1,Ue=ae+1;ae<he;ae++,Be++,Ue++)Be===he&&(Be=0),Ue===he&&(Ue=0),te[ae]=ie(re[ae],re[Be],re[Ue]);Z.push(te),Ie=Ie.concat(te)}let Se;if(m===0)Se=On.triangulateShape(k,F);else{let ee=[],se=[];for(let re=0;re<m;re++){let ae=re/m,he=f*Math.cos(ae*Math.PI/2),Be=g*Math.sin(ae*Math.PI/2)+_;for(let Ue=0,He=k.length;Ue<He;Ue++){let qe=Y(k[Ue],q[Ue],Be);Ae(qe.x,qe.y,-he),ae===0&&ee.push(qe)}for(let Ue=0,He=N;Ue<He;Ue++){let qe=F[Ue];te=Z[Ue];let R=[];for(let rt=0,et=qe.length;rt<et;rt++){let E=Y(qe[rt],te[rt],Be);Ae(E.x,E.y,-he),ae===0&&R.push(E)}ae===0&&se.push(R)}}Se=On.triangulateShape(ee,se)}let st=Se.length,$e=g+_;for(let ee=0;ee<W;ee++){let se=d?Y(I[ee],Ie[ee],$e):I[ee];b?(C.copy(M.normals[0]).multiplyScalar(se.x),S.copy(M.binormals[0]).multiplyScalar(se.y),x.copy(w[0]).add(C).add(S),Ae(x.x,x.y,x.z)):Ae(se.x,se.y,0)}for(let ee=1;ee<=h;ee++)for(let se=0;se<W;se++){let re=d?Y(I[se],Ie[se],$e):I[se];b?(C.copy(M.normals[ee]).multiplyScalar(re.x),S.copy(M.binormals[ee]).multiplyScalar(re.y),x.copy(w[ee]).add(C).add(S),Ae(x.x,x.y,x.z)):Ae(re.x,re.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){let se=ee/m,re=f*Math.cos(se*Math.PI/2),ae=g*Math.sin(se*Math.PI/2)+_;for(let he=0,Be=k.length;he<Be;he++){let Ue=Y(k[he],q[he],ae);Ae(Ue.x,Ue.y,u+re)}for(let he=0,Be=F.length;he<Be;he++){let Ue=F[he];te=Z[he];for(let He=0,qe=Ue.length;He<qe;He++){let R=Y(Ue[He],te[He],ae);b?Ae(R.x,R.y+w[h-1].y,w[h-1].x+re):Ae(R.x,R.y,u+re)}}}nt(),K();function nt(){let ee=s.length/3;if(d){let se=0,re=W*se;for(let ae=0;ae<st;ae++){let he=Se[ae];ze(he[2]+re,he[1]+re,he[0]+re)}se=h+m*2,re=W*se;for(let ae=0;ae<st;ae++){let he=Se[ae];ze(he[0]+re,he[1]+re,he[2]+re)}}else{for(let se=0;se<st;se++){let re=Se[se];ze(re[2],re[1],re[0])}for(let se=0;se<st;se++){let re=Se[se];ze(re[0]+W*h,re[1]+W*h,re[2]+W*h)}}n.addGroup(ee,s.length/3-ee,0)}function K(){let ee=s.length/3,se=0;$(k,se),se+=k.length;for(let re=0,ae=F.length;re<ae;re++){let he=F[re];$(he,se),se+=he.length}n.addGroup(ee,s.length/3-ee,1)}function $(ee,se){let re=ee.length;for(;--re>=0;){let ae=re,he=re-1;he<0&&(he=ee.length-1);for(let Be=0,Ue=h+m*2;Be<Ue;Be++){let He=W*Be,qe=W*(Be+1),R=se+ae+He,rt=se+he+He,et=se+he+qe,E=se+ae+qe;ve(R,rt,et,E)}}}function Ae(ee,se,re){c.push(ee),c.push(se),c.push(re)}function ze(ee,se,re){Ve(ee),Ve(se),Ve(re);let ae=s.length/3,he=y.generateTopUV(n,s,ae-3,ae-2,ae-1);lt(he[0]),lt(he[1]),lt(he[2])}function ve(ee,se,re,ae){Ve(ee),Ve(se),Ve(ae),Ve(se),Ve(re),Ve(ae);let he=s.length/3,Be=y.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);lt(Be[0]),lt(Be[1]),lt(Be[3]),lt(Be[1]),lt(Be[2]),lt(Be[3])}function Ve(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function lt(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ll[s.type]().fromJSON(s)),new i(n,e.options)}},Ug={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,c),new oe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new oe(a,1-c),new oe(l,1-u),new oe(d,1-g),new oe(_,1-p)]:[new oe(o,1-c),new oe(h,1-u),new oe(f,1-g),new oe(m,1-p)]}};Li=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let w=0;w<l;w++){let b=w*u-r;g.push(b,-y,0),_.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let w=y+l*p,b=y+l*(p+1),M=y+1+l*(p+1),S=y+1+l*p;f.push(w,b,S),f.push(b,M,S)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qr=class i extends Tt{constructor(e=new Pi([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(a,2));function l(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;On.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];On.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=On.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){let y=_[m],w=y[0]+u,b=y[1]+u,M=y[2]+u;n.push(w,b,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Og(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};Df={clone:rs,merge:Jt},Gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends $t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=kg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mo=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends $t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sn=class extends Gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Xr=class extends $t{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Uo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},So=class extends $t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wo=class extends $t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};qn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Eo=class extends qn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rl:r=e,o=2*t-n;break;case Il:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rl:a=e,c=2*n-t;break;case Il:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*_+.5*g,b=f*m-f*_;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+y*a[l+M]+w*a[c+M]+b*a[u+M];return r}},To=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Co=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ro=class extends qn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*_+a[c+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[l+g],m=a[c+g],p=f*d+g*2,y=u[p],w=u[p+1],b=e*d+g*2,M=h[b],S=h[b+1],C=qg(n,t,y,M,s);r[g]=Ff(C,_,w,S,m)}return r}};rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wi(t,this.TimeBufferType),this.values=wi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wi(e.times,Array),values:wi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),no(e.settings)&&(n.settings={inTangents:wi(e.settings.inTangents,Array),outTangents:wi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ro(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ki:t=this.InterpolantFactoryMethodDiscrete;break;case Yi:t=this.InterpolantFactoryMethodLinear;break;case eo:t=this.InterpolantFactoryMethodSmooth;break;case Tl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ki;case this.InterpolantFactoryMethodLinear:return Yi;case this.InterpolantFactoryMethodSmooth:return eo;case this.InterpolantFactoryMethodBezier:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;no(this.settings)&&(Nd(this.settings.inTangents,e),Nd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ge("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ge("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Cm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ge("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===eo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,no(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Yi;oi=class extends rn{constructor(e,t,n){super(e,t,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Ki;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;Jr=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};Jr.prototype.ValueTypeName="color";ci=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};ci.prototype.ValueTypeName="number";Io=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)un.slerpFlat(r,0,a,l-o,a,l,c);return r}},li=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}};li.prototype.ValueTypeName="quaternion";li.prototype.InterpolantFactoryMethodSmooth=void 0;hi=class extends rn{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ki;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;Di=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};Di.prototype.ValueTypeName="vector";Kr=class{constructor(e="",t=-1,n=[],s=pf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Jg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(rn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Vg(c);c=Fd(c,1,h),l=Fd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ci(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ud(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ud(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};Po=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nf=new Po,Xn=class{constructor(e){this.manager=e!==void 0?e:Nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xn.DEFAULT_MATERIAL_NAME="__DEFAULT";si={},Ul=class extends Error{constructor(e,t){super(e),this.response=t}},Js=class extends Xn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=kn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:s});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=si[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:w,value:b})=>{if(w)p.close();else{_+=b.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let S=0,C=h.length;S<C;S++){let x=h[S];x.onProgress&&x.onProgress(M)}p.enqueue(b),y()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Ul(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{kn.add(`file:${e}`,l);let h=si[e];delete si[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=si[e];if(h===void 0)throw this.manager.itemError(e),l;delete si[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ws=new WeakMap,Lo=class extends Xn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ws.get(a);u===void 0&&(u=[],ws.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Ls("img");function c(){h(),t&&t(this);let u=ws.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ws.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),kn.remove(`image:${e}`);let d=ws.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}ws.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),kn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},$i=class extends Xn{constructor(e){super(e)}load(e,t,n,s){let r=new Ft,a=new Lo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},es=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ui=class extends es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Sl=new Xe,Bd=new P,Od=new P,Ks=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bd),Od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Od),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Sl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ps||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Za=new P,$a=new un,Bn=new P,Yr=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,$a,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,$a,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Za,$a,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,$a,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new P,kd=new oe,Gd=new oe,vt=class extends Yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,kd,Gd),t.subVectors(Gd,kd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bl=class extends Ks{constructor(){super(new vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ji*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},jr=class extends es{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ol=class extends Ks{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0}},di=class extends es{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fi=class extends Yr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kl=class extends Ks{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pn=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new kl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},wl=new WeakMap,Qr=class extends Xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=kn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{wl.has(a)===!0?(s&&s(wl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return kn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),wl.set(c,l),kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Es=-90,Ts=1,Do=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vt(Es,Ts,e,t);s.layers=this.layers,this.add(s);let r=new vt(Es,Ts,e,t);r.layers=this.layers,this.add(r);let a=new vt(Es,Ts,e,t);a.layers=this.layers,this.add(a);let o=new vt(Es,Ts,e,t);o.layers=this.layers,this.add(o);let c=new vt(Es,Ts,e,t);c.layers=this.layers,this.add(c);let l=new vt(Es,Ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fo=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},mh="\\[\\]\\.:\\/",Kg=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",Yg="[^"+mh.replace("\\.","")+"]",jg=/((?:WC+[\/:])*)/.source.replace("WC",gh),Qg=/(WCOD+)?/.source.replace("WCOD",Yg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),$g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),e0=new RegExp("^"+jg+Qg+Zg+$g+"$"),t0=["material","materials","bones","map"],Gl=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kg,"")}static parseTrackName(e){let t=e0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);t0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Gl;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];qv=new Float32Array(1),zd=new Xe,ts=class{constructor(e,t,n=0,s=1/0){this.ray=new Ci(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zd),this}intersectObject(e,t=!0,n=[]){return zl(e,this,n,t),n.sort(Vd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)zl(e[s],this,n,t);return n.sort(Vd),n}};yh=class yh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};yh.prototype.isMatrix2=!0;Vl=yh;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function ip(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function s0(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function Gb(i,e,t,n,s,r){let a=new De(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let b=y.backgroundBlurriness>0;w=e.get(w,b)}return w}function g(y){let w=!1,b=f(y);b===null?m(a,o):b&&b.isColor&&(m(b,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,w){let b=f(w);b&&(b.isCubeTexture||b.mapping===$r)?(l===void 0&&(l=new pt(new Wn(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:rs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(kb.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sp),l.material.toneMapped=je.getTransfer(b.colorSpace)!==ct,(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new pt(new Li(2,2),new Ot({name:"BackgroundMaterial",uniforms:rs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=je.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,w){y.getRGB(wc,ph(i)),t.buffers.color.setClear(wc.r,wc.g,wc.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:_,dispose:p}}function zb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(F,z,V,N,k){let Y=!1,W=u(F,N,V,z);r!==W&&(r=W,l(r.object)),Y=f(F,N,V,k),Y&&g(F,N,V,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(F,z,V,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function u(F,z,V,N){let k=N.wireframe===!0,Y=n[z.id];Y===void 0&&(Y={},n[z.id]=Y);let W=F.isInstancedMesh===!0?F.id:0,ie=Y[W];ie===void 0&&(ie={},Y[W]=ie);let q=ie[V.id];q===void 0&&(q={},ie[V.id]=q);let Z=q[k];return Z===void 0&&(Z=d(c()),q[k]=Z),Z}function d(F){let z=[],V=[],N=[];for(let k=0;k<t;k++)z[k]=0,V[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:N,object:F,attributes:{},index:null}}function f(F,z,V,N){let k=r.attributes,Y=z.attributes,W=0,ie=V.getAttributes();for(let q in ie)if(ie[q].location>=0){let te=k[q],Ie=Y[q];if(Ie===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(Ie=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(Ie=F.instanceColor)),te===void 0||te.attribute!==Ie||Ie&&te.data!==Ie.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function g(F,z,V,N){let k={},Y=z.attributes,W=0,ie=V.getAttributes();for(let q in ie)if(ie[q].location>=0){let te=Y[q];te===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(te=F.instanceColor));let Ie={};Ie.attribute=te,te&&te.data&&(Ie.data=te.data),k[q]=Ie,W++}r.attributes=k,r.attributesNum=W,r.index=N}function _(){let F=r.newAttributes;for(let z=0,V=F.length;z<V;z++)F[z]=0}function m(F){p(F,0)}function p(F,z){let V=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;V[F]=1,N[F]===0&&(i.enableVertexAttribArray(F),N[F]=1),k[F]!==z&&(i.vertexAttribDivisor(F,z),k[F]=z)}function y(){let F=r.newAttributes,z=r.enabledAttributes;for(let V=0,N=z.length;V<N;V++)z[V]!==F[V]&&(i.disableVertexAttribArray(V),z[V]=0)}function w(F,z,V,N,k,Y,W){W===!0?i.vertexAttribIPointer(F,z,V,k,Y):i.vertexAttribPointer(F,z,V,N,k,Y)}function b(F,z,V,N){_();let k=N.attributes,Y=V.getAttributes(),W=z.defaultAttributeValues;for(let ie in Y){let q=Y[ie];if(q.location>=0){let Z=k[ie];if(Z===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){let te=Z.normalized,Ie=Z.itemSize,Se=e.get(Z);if(Se===void 0)continue;let st=Se.buffer,$e=Se.type,nt=Se.bytesPerElement,K=$e===i.INT||$e===i.UNSIGNED_INT||Z.gpuType===Go;if(Z.isInterleavedBufferAttribute){let $=Z.data,Ae=$.stride,ze=Z.offset;if($.isInstancedInterleavedBuffer){for(let ve=0;ve<q.locationSize;ve++)p(q.location+ve,$.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ve=0;ve<q.locationSize;ve++)m(q.location+ve);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ve=0;ve<q.locationSize;ve++)w(q.location+ve,Ie/q.locationSize,$e,te,Ae*nt,(ze+Ie/q.locationSize*ve)*nt,K)}else{if(Z.isInstancedBufferAttribute){for(let $=0;$<q.locationSize;$++)p(q.location+$,Z.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let $=0;$<q.locationSize;$++)m(q.location+$);i.bindBuffer(i.ARRAY_BUFFER,st);for(let $=0;$<q.locationSize;$++)w(q.location+$,Ie/q.locationSize,$e,te,Ie*nt,Ie/q.locationSize*$*nt,K)}}else if(W!==void 0){let te=W[ie];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(q.location,te);break;case 3:i.vertexAttrib3fv(q.location,te);break;case 4:i.vertexAttrib4fv(q.location,te);break;default:i.vertexAttrib1fv(q.location,te)}}}}y()}function M(){T();for(let F in n){let z=n[F];for(let V in z){let N=z[V];for(let k in N){let Y=N[k];for(let W in Y)h(Y[W].object),delete Y[W];delete N[k]}}delete n[F]}}function S(F){if(n[F.id]===void 0)return;let z=n[F.id];for(let V in z){let N=z[V];for(let k in N){let Y=N[k];for(let W in Y)h(Y[W].object),delete Y[W];delete N[k]}}delete n[F.id]}function C(F){for(let z in n){let V=n[z];for(let N in V){let k=V[N];if(k[F.id]===void 0)continue;let Y=k[F.id];for(let W in Y)h(Y[W].object),delete Y[W];delete k[F.id]}}}function x(F){for(let z in n){let V=n[z],N=F.isInstancedMesh===!0?F.id:0,k=V[N];if(k!==void 0){for(let Y in k){let W=k[Y];for(let ie in W)h(W[ie].object),delete W[ie];delete k[Y]}delete V[N],Object.keys(V).length===0&&delete n[z]}}}function T(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Vb(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==on&&C!==pn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Re("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:M,samples:S}}function Wb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new hn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,w=y*4,b=p.clippingState||null;c.value=b,b=h(g,d,w,f);for(let M=0;M!==w;++M)b[M]=t[M];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=f;w!==_;++w,b+=4)a.copy(u[w]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Yb(i){let e=[],t=[],n=i,s=i-tr+1+qb;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,g=new Float32Array(f*d*u),_=new Float32Array(f*d*u);for(let p=0;p<u;p++){let y=p%3*2/3-1,w=p>2?0:-1,b=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];g.set(b,f*d*p);for(let M=0;M<d;M++){let S=h[M*2]*2-1,C=h[M*2+1]*2-1;p===0?as.set(1,C,S):p===1?as.set(-S,1,-C):p===2?as.set(-S,C,1):p===3?as.set(-1,C,-S):p===4?as.set(-S,-1,C):as.set(S,C,-1),as.toArray(_,(p*d+M)*f)}}let m=new Tt;m.setAttribute("position",new ut(g,f)),m.setAttribute("outputDirection",new ut(_,f)),t.push(new pt(m,null)),n>tr&&n--}return{lodMeshes:t,sizeLods:e}}function Bf(i,e,t){let n=new tn(i,e,t);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jb(i,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Qb(i,e,t){return new Ot({name:"SphericalGaussianBlur",defines:{SAMPLES:Xb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Of(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function kf(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Bo||f===Oo)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new Tc(g.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Bo||f===Oo,_=f===Ui||f===is;if(g||_){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Gi(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||_&&y&&c(y)?(n===null&&(n=new Gi(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Bo?d.mapping=Ui:f===Oo&&(d.mapping=is),d}function c(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function $b(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ji("WebGLRenderer: "+n+" extension not supported."),s}}}function ex(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(g===void 0)return;if(f!==null){let y=f.array;_=f.version;for(let w=0,b=y.length;w<b;w+=3){let M=y[w+0],S=y[w+1],C=y[w+2];d.push(M,S,S,C,C,M)}}else{let y=g.array;_=g.version;for(let w=0,b=y.length/3-1;w<b;w+=3){let M=w+0,S=w+1,C=w+2;d.push(M,S,S,C,C,M)}}let m=new(g.count>=65535?Rr:Cr)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function tx(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function nx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ix(i,e,t){let n=new WeakMap,s=new dt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let b=o.attributes.position.count*w,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*M*4*u),C=new Tr(S,b,M,u);C.type=pn,C.needsUpdate=!0;let x=w*4;for(let I=0;I<u;I++){let F=m[I],z=p[I],V=y[I],N=b*M*4*I;for(let k=0;k<F.count;k++){let Y=k*x;f===!0&&(s.fromBufferAttribute(F,k),S[N+Y+0]=s.x,S[N+Y+1]=s.y,S[N+Y+2]=s.z,S[N+Y+3]=0),g===!0&&(s.fromBufferAttribute(z,k),S[N+Y+4]=s.x,S[N+Y+5]=s.y,S[N+Y+6]=s.z,S[N+Y+7]=0),_===!0&&(s.fromBufferAttribute(V,k),S[N+Y+8]=s.x,S[N+Y+9]=s.y,S[N+Y+10]=s.z,S[N+Y+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new oe(b,M)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function sx(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function ax(i,e,t,n,s,r){let a=new tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Tt;l.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let h=new Mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new pt(l,h),d=new Fi(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,y=[],w=!1;this.setSize=function(b,M){a.setSize(b,M),o!==null&&o.setSize(b,M),c!==null&&c.setSize(b,M);for(let S=0;S<y.length;S++){let C=y[S];C.setSize&&C.setSize(b,M)}},this.setEffects=function(b){y=b,w=y.length>0&&y[0].isRenderPass===!0;let M=a.width,S=a.height;y.length>0&&o===null&&(o=new tn(M,S,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new tn(M,S,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){let x=y[C];x.setSize&&x.setSize(M,S)}},this.begin=function(b,M){if(_||b.toneMapping===Ln&&y.length===0)return!1;if(p=M,M!==null){let S=M.width,C=M.height;(a.width!==S||a.height!==C)&&this.setSize(S,C)}return w===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Ln,!0},this.hasRenderPass=function(){return w},this.end=function(b,M){b.toneMapping=m,_=!0;let S=a,C=o;for(let x=0;x<y.length;x++){let T=y[x];T.enabled!==!1&&(T.render(b,C,S,M),T.needsSwap!==!1&&(S=C,C=C===o?c:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,h.defines={},je.getTransfer(f)===ct&&(h.defines.SRGB_TRANSFER="");let x=rx[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(u,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}function sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gf[s];if(r===void 0&&(r=new Float32Array(s),Gf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rc(i,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Wf.set(n),i.uniformMatrix2fv(this.addr,!1,Wf),Ut(t,n)}}function dx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Hf.set(n),i.uniformMatrix3fv(this.addr,!1,Hf),Ut(t,n)}}function fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Vf.set(n),i.uniformMatrix4fv(this.addr,!1,Vf),Ut(t,n)}}function px(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function bx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function _x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ih.compareFunction=t.isReversedDepthBuffer()?Sc:Mc,r=Ih):r=rp,t.setTexture2D(e||r,s)}function Mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||op,s)}function Sx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||cp,s)}function wx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ap,s)}function Ex(i){switch(i){case 5126:return ox;case 35664:return cx;case 35665:return lx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return Ax;case 5125:return bx;case 36294:return xx;case 36295:return _x;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return wx}}function Tx(i,e){i.uniform1fv(this.addr,e)}function Cx(i,e){let t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function Rx(i,e){let t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ix(i,e){let t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function Px(i,e){let t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lx(i,e){let t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dx(i,e){let t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fx(i,e){i.uniform1iv(this.addr,e)}function Nx(i,e){i.uniform2iv(this.addr,e)}function Ux(i,e){i.uniform3iv(this.addr,e)}function Bx(i,e){i.uniform4iv(this.addr,e)}function Ox(i,e){i.uniform1uiv(this.addr,e)}function kx(i,e){i.uniform2uiv(this.addr,e)}function Gx(i,e){i.uniform3uiv(this.addr,e)}function zx(i,e){i.uniform4uiv(this.addr,e)}function Vx(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ih:a=rp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hx(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||op,r[a])}function Wx(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||cp,r[a])}function qx(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ap,r[a])}function Xx(i){switch(i){case 5126:return Tx;case 35664:return Cx;case 35665:return Rx;case 35666:return Ix;case 35674:return Px;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Fx;case 35667:case 35671:return Nx;case 35668:case 35672:return Ux;case 35669:case 35673:return Bx;case 5125:return Ox;case 36294:return kx;case 36295:return Gx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return qx}}function qf(i,e){i.seq.push(e),i.map[e.id]=e}function Jx(i,e,t){let n=i.name,s=n.length;for(Ch.lastIndex=0;;){let r=Ch.exec(n),a=Ch.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){qf(t,l===void 0?new Ph(o,i,e):new Lh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Dh(o),qf(t,u)),t=u}}}function Xf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function jx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Qx(i){je._getMatrix(Jf,je.workingColorSpace,i);let e=`mat3( ${Jf.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case wr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jx(i.getShaderSource(e),o)}else return r}function Zx(i,e){let t=Qx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function e_(i,e){let t=$x[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function t_(){je.getLuminanceCoefficients(Ec);let i=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function i_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function s_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ua(i){return i!==""}function Yf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Fh(i){return i.replace(r_,o_)}function o_(i,e){let t=Ye[e];if(t===void 0){let n=a_.get(e);if(n!==void 0)t=Ye[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fh(t)}function Qf(i){return i.replace(c_,l_)}function l_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zf(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u_(i){return h_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function f_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":d_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function m_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":p_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function A_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":g_[i.combine]||"ENVMAP_BLENDING_NONE"}function b_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function x_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=u_(t),l=f_(t),h=m_(t),u=A_(t),d=b_(t),f=n_(t),g=i_(r),_=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ua).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ua).join(`
`),p.length>0&&(p+=`
`)):(m=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),p=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ln?e_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Zx("linearToOutputTexel",t.outputColorSpace),t_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),a=Fh(a),a=Yf(a,t),a=jf(a,t),o=Fh(o),o=Yf(o,t),o=jf(o,t),a=Qf(a),o=Qf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=y+m+a,b=y+p+o,M=Xf(s,s.VERTEX_SHADER,w),S=Xf(s,s.FRAGMENT_SHADER,b);s.attachShader(_,M),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(F){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(S)||"",k=z.trim(),Y=V.trim(),W=N.trim(),ie=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,S);else{let Z=Kf(s,M,"vertex"),te=Kf(s,S,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+Z+`
`+te)}else k!==""?Re("WebGLProgram: Program Info Log:",k):(Y===""||W==="")&&(q=!1);q&&(F.diagnostics={runnable:ie,programLog:k,vertexShader:{log:Y,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(M),s.deleteShader(S),x=new nr(s,_),T=s_(s,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,Kx)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=S,this}function v_(i){return i===Oi||i===sa||i===ra}function y_(i,e,t,n,s,r){let a=new Ns,o=new Nh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,T,I,F,z,V){let N=F.fog,k=z.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||Y,W),q=ie&&ie.mapping===$r?ie.image.height:null,Z=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ie=te!==void 0?te.length:0,Se=0;k.morphAttributes.position!==void 0&&(Se=1),k.morphAttributes.normal!==void 0&&(Se=2),k.morphAttributes.color!==void 0&&(Se=3);let st,$e,nt,K;if(Z){let bt=jn[Z];st=bt.vertexShader,$e=bt.fragmentShader}else{st=x.vertexShader,$e=x.fragmentShader;let bt=o.getVertexShaderStage(x),at=o.getFragmentShaderStage(x);o.update(x,bt,at),nt=bt.id,K=at.id}let $=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),ze=z.isInstancedMesh===!0,ve=z.isBatchedMesh===!0,Ve=!!x.map,lt=!!x.matcap,ee=!!ie,se=!!x.aoMap,re=!!x.lightMap,ae=!!x.bumpMap&&x.wireframe===!1,he=!!x.normalMap,Be=!!x.displacementMap,Ue=!!x.emissiveMap,He=!!x.metalnessMap,qe=!!x.roughnessMap,R=x.anisotropy>0,rt=x.clearcoat>0,et=x.dispersion>0,E=x.retroreflectivity>0,A=x.iridescence>0,U=x.sheen>0,G=x.transmission>0,X=R&&!!x.anisotropyMap,ce=rt&&!!x.clearcoatMap,le=rt&&!!x.clearcoatNormalMap,J=rt&&!!x.clearcoatRoughnessMap,Q=A&&!!x.iridescenceMap,ue=A&&!!x.iridescenceThicknessMap,Pe=U&&!!x.sheenColorMap,me=U&&!!x.sheenRoughnessMap,de=!!x.specularMap,Le=!!x.specularColorMap,Oe=!!x.specularIntensityMap,Je=G&&!!x.transmissionMap,D=G&&!!x.thicknessMap,fe=!!x.gradientMap,j=!!x.alphaMap,pe=x.alphaTest>0,_e=!!x.alphaHash,ne=!!x.extensions,Fe=Ln;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let Te={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:$e,defines:x.defines,customVertexShaderID:nt,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ve,batchingColor:ve&&z._colorsTexture!==null,instancing:ze,instancingColor:ze&&z.instanceColor!==null,instancingMorph:ze&&z.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:lt,envMap:ee,envMapMode:ee&&ie.mapping,envMapCubeUVHeight:q,aoMap:se,lightMap:re,bumpMap:ae,normalMap:he,displacementMap:Be,emissiveMap:Ue,normalMapObjectSpace:he&&x.normalMapType===gf,normalMapTangentSpace:he&&x.normalMapType===oa,packedNormalMap:he&&x.normalMapType===oa&&v_(x.normalMap.format),metalnessMap:He,roughnessMap:qe,anisotropy:R,anisotropyMap:X,clearcoat:rt,clearcoatMap:ce,clearcoatNormalMap:le,clearcoatRoughnessMap:J,dispersion:et,retroreflection:E,iridescence:A,iridescenceMap:Q,iridescenceThicknessMap:ue,sheen:U,sheenColorMap:Pe,sheenRoughnessMap:me,specularMap:de,specularColorMap:Le,specularIntensityMap:Oe,transmission:G,transmissionMap:Je,thicknessMap:D,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Ni&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:pe,alphaHash:_e,combine:x.combine,mapUv:Ve&&g(x.map.channel),aoMapUv:se&&g(x.aoMap.channel),lightMapUv:re&&g(x.lightMap.channel),bumpMapUv:ae&&g(x.bumpMap.channel),normalMapUv:he&&g(x.normalMap.channel),displacementMapUv:Be&&g(x.displacementMap.channel),emissiveMapUv:Ue&&g(x.emissiveMap.channel),metalnessMapUv:He&&g(x.metalnessMap.channel),roughnessMapUv:qe&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:ce&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(x.sheenRoughnessMap.channel),specularMapUv:de&&g(x.specularMap.channel),specularColorMapUv:Le&&g(x.specularColorMap.channel),specularIntensityMapUv:Oe&&g(x.specularIntensityMap.channel),transmissionMapUv:Je&&g(x.transmissionMap.channel),thicknessMapUv:D&&g(x.thicknessMap.channel),alphaMapUv:j&&g(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(he||R),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Ve||j),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Se,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(T,x),y(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let T=f[x.type],I;if(T){let F=jn[T];I=Df.clone(F.uniforms)}else I=x.uniforms;return I}function b(x,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new x_(i,T,x,s),l.push(I),h.set(T,I)),I}function M(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:b,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:C}}function M_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function S_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function $f(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ep(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,m,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=a(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function c(d,f,g,_,m,p,y){y.reversedDepth===!0&&(m=-m);let w=o(d,f,g,_,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function l(d,f,g,_,m,p){let y=o(d,f,g,_,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||S_),n.length>1&&n.sort(f||$f),s.length>1&&s.sort(f||$f)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function w_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ep,i.set(n,[a])):s>=r.length?(a=new ep,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function E_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function T_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function R_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function I_(i){let e=new E_,t=T_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Xe,a=new Xe;function o(l){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,w=0,b=0,M=0,S=0,C=0,x=0,T=0,I=0;l.sort(R_);for(let z=0,V=l.length;z<V;z++){let N=l[z],k=N.color,Y=N.intensity,W=N.distance,ie=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Oi?ie=N.shadow.map.texture:ie=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*Y,u+=k.g*Y,d+=k.b*Y;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],Y);I++}else if(N.isSunLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,te=t.get(N);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ie;let Ie=Z.getViewportCount();for(let Se=0;Se<Ie;Se++)n.sunShadowMatrix[_+Se]=Z.getMatrix(Se),n.sunShadowCascade[_+Se]=Z._cascadeData[Se];_+=Ie,g++}n.sun[f]=q,f++}else if(N.isDirectionalLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,te=t.get(N);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=N.shadow.matrix,M++}n.directional[m]=q,m++}else if(N.isSpotLight){let q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(k).multiplyScalar(Y),q.distance=W,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[y]=q;let Z=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,Z.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[y]=Z.matrix,N.castShadow){let te=t.get(N);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,n.spotShadow[y]=te,n.spotShadowMap[y]=ie,C++}y++}else if(N.isRectAreaLight){let q=e.get(N);q.color.copy(k).multiplyScalar(Y),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=q,w++}else if(N.isPointLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let Z=N.shadow,te=t.get(N);te.shadowIntensity=Z.intensity,te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=N.shadow.matrix,S++}n.point[p]=q,p++}else if(N.isHemisphereLight){let q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(Y),q.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[b]=q,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==y||F.rectAreaLength!==w||F.hemiLength!==b||F.numSunShadows!==g||F.numDirectionalShadows!==M||F.numPointShadows!==S||F.numSpotShadows!==C||F.numSpotMaps!==x||F.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=y,F.rectAreaLength=w,F.hemiLength=b,F.numSunShadows=g,F.numDirectionalShadows=M,F.numPointShadows=S,F.numSpotShadows=C,F.numSpotMaps=x,F.numLightProbes=I,n.version=C_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let y=0,w=l.length;y<w;y++){let b=l[y];if(b.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(b.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function tp(i){let e=new I_(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function P_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new tp(i),e.set(s,[o])):r>=a.length?(o=new tp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function U_(i,e,t){let n=new zs,s=new oe,r=new oe,a=new dt,o=new So,c=new wo,l={},h=t.maxTextureSize,u={[Jn]:zt,[zt]:Jn,[an]:an},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:L_,fragmentShader:D_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let p=this.type;this.render=function(S,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===qd&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zr);let T=i.getRenderTarget(),I=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Kn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=p!==this.type;V&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=S.length;N<k;N++){let Y=S[N],W=Y.shadow;if(W===void 0){Re("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ie=W.getFrameExtents();s.multiply(ie),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,W.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||V===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ys){if(Y.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new tn(s.x,s.y,{format:Oi,type:Fn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new Ii(s.x,s.y,pn),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=Gn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=wt,W.map.depthTexture.magFilter=wt}else Y.isPointLight?(W.map=new Tc(s.x),W.map.depthTexture=new go(s.x,Dn)):(W.map=new tn(s.x,s.y),W.map.depthTexture=new Ii(s.x,s.y,Dn)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=Gn,this.type===Zr?(W.map.depthTexture.compareFunction=q?Sc:Mc,W.map.depthTexture.minFilter=Et,W.map.depthTexture.magFilter=Et):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=wt,W.map.depthTexture.magFilter=wt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Z=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,x);for(let te=0;te<Z;te++){let Ie=W.getCamera(te);if(Y.isPointLight){let Se=W.camera,st=W.matrix,$e=Y.distance||Se.far;$e!==Se.far&&(Se.far=$e,Se.updateProjectionMatrix()),ha.setFromMatrixPosition(Y.matrixWorld),Se.position.copy(ha),Rh.copy(Se.position),Rh.add(F_[te]),Se.up.copy(N_[te]),Se.lookAt(Rh),Se.updateMatrixWorld(),st.makeTranslation(-ha.x,-ha.y,-ha.z),np.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),W._frustum.setFromProjectionMatrix(np,Se.coordinateSystem,Se.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,te),i.clear();else{te===0&&(i.setRenderTarget(W.map),i.clear());let Se=W.getViewport(te);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),z.viewport(a)}n=W.getFrustum(te),b(C,x,Ie,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Ys&&y(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,I,F)};function y(S,C){let x=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new tn(s.x,s.y,{format:Oi,type:Fn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,x,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,x,f,_,null)}function w(S,C,x,T){let I=null,F=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)I=F;else if(I=x.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=I.uuid,V=C.uuid,N=l[z];N===void 0&&(N={},l[z]=N);let k=N[V];k===void 0&&(k=I.clone(),N[V]=k,C.addEventListener("dispose",M)),I=k}if(I.visible=C.visible,I.wireframe=C.wireframe,T===Ys?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:u[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=i.properties.get(I);z.light=x}return I}function b(S,C,x,T,I){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Ys)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let V=e.update(S),N=S.material;if(Array.isArray(N)){let k=V.groups;for(let Y=0,W=k.length;Y<W;Y++){let ie=k[Y],q=N[ie.materialIndex];if(q&&q.visible){let Z=w(S,q,T,I);S.onBeforeShadow(i,S,C,x,V,Z,ie),i.renderBufferDirect(x,null,V,Z,S,ie),S.onAfterShadow(i,S,C,x,V,Z,ie)}}}else if(N.visible){let k=w(S,N,T,I);S.onBeforeShadow(i,S,C,x,V,k,null),i.renderBufferDirect(x,null,V,k,S,null),S.onAfterShadow(i,S,C,x,V,k,null)}}let z=S.children;for(let V=0,N=z.length;V<N;V++)b(z[V],C,x,T,I)}function M(S){S.target.removeEventListener("dispose",M);for(let x in l){let T=l[x],I=S.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function B_(i,e){function t(){let D=!1,fe=new dt,j=null,pe=new dt(0,0,0,0);return{setMask:function(_e){j!==_e&&!D&&(i.colorMask(_e,_e,_e,_e),j=_e)},setLocked:function(_e){D=_e},setClear:function(_e,ne,Fe,Te,bt){bt===!0&&(_e*=Te,ne*=Te,Fe*=Te),fe.set(_e,ne,Fe,Te),pe.equals(fe)===!1&&(i.clearColor(_e,ne,Fe,Te),pe.copy(fe))},reset:function(){D=!1,j=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,fe=!1,j=null,pe=null,_e=null;return{setReversed:function(ne){if(fe!==ne){let Fe=e.get("EXT_clip_control");ne?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),fe=ne;let Te=_e;_e=null,this.setClear(Te)}},getReversed:function(){return fe},setTest:function(ne){ne?$(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ne){j!==ne&&!D&&(i.depthMask(ne),j=ne)},setFunc:function(ne){if(fe&&(ne=Tf[ne]),pe!==ne){switch(ne){case io:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ro:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ne}},setLocked:function(ne){D=ne},setClear:function(ne){_e!==ne&&(_e=ne,fe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){D=!1,j=null,pe=null,_e=null,fe=!1}}}function s(){let D=!1,fe=null,j=null,pe=null,_e=null,ne=null,Fe=null,Te=null,bt=null;return{setTest:function(at){D||(at?$(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(at){fe!==at&&!D&&(i.stencilMask(at),fe=at)},setFunc:function(at,Mn,Nn){(j!==at||pe!==Mn||_e!==Nn)&&(i.stencilFunc(at,Mn,Nn),j=at,pe=Mn,_e=Nn)},setOp:function(at,Mn,Nn){(ne!==at||Fe!==Mn||Te!==Nn)&&(i.stencilOp(at,Mn,Nn),ne=at,Fe=Mn,Te=Nn)},setLocked:function(at){D=at},setClear:function(at){bt!==at&&(i.clearStencil(at),bt=at)},reset:function(){D=!1,fe=null,j=null,pe=null,_e=null,ne=null,Fe=null,Te=null,bt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,w=null,b=null,M=null,S=null,C=null,x=new De(0,0,0),T=0,I=!1,F=null,z=null,V=null,N=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ie=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ie>=2);let Z=null,te={},Ie=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),st=new dt().fromArray(Ie),$e=new dt().fromArray(Se);function nt(D,fe,j,pe){let _e=new Uint8Array(4),ne=i.createTexture();i.bindTexture(D,ne),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<j;Fe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(fe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ne}let K={};K[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Rs),ae(!1),he(Hl),$(i.CULL_FACE),se(Kn);function $(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ae(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ze(D,fe){return d[D]!==fe?(i.bindFramebuffer(D,fe),d[D]=fe,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=fe),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function ve(D,fe){let j=g,pe=!1;if(D){j=f.get(fe),j===void 0&&(j=[],f.set(fe,j));let _e=D.textures;if(j.length!==_e.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Fe=_e.length;ne<Fe;ne++)j[ne]=i.COLOR_ATTACHMENT0+ne;j.length=_e.length,pe=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,pe=!0);pe&&i.drawBuffers(j)}function Ve(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let lt={[ns]:i.FUNC_ADD,[Jd]:i.FUNC_SUBTRACT,[Kd]:i.FUNC_REVERSE_SUBTRACT};lt[Yd]=i.MIN,lt[jd]=i.MAX;let ee={[Qd]:i.ZERO,[Zd]:i.ONE,[$d]:i.SRC_COLOR,[Jl]:i.SRC_ALPHA,[af]:i.SRC_ALPHA_SATURATE,[sf]:i.DST_COLOR,[tf]:i.DST_ALPHA,[ef]:i.ONE_MINUS_SRC_COLOR,[Kl]:i.ONE_MINUS_SRC_ALPHA,[rf]:i.ONE_MINUS_DST_COLOR,[nf]:i.ONE_MINUS_DST_ALPHA,[of]:i.CONSTANT_COLOR,[cf]:i.ONE_MINUS_CONSTANT_COLOR,[lf]:i.CONSTANT_ALPHA,[hf]:i.ONE_MINUS_CONSTANT_ALPHA};function se(D,fe,j,pe,_e,ne,Fe,Te,bt,at){if(D===Kn){m===!0&&(Ae(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),D!==Xd){if(D!==p||at!==I){if((y!==ns||M!==ns)&&(i.blendEquation(i.FUNC_ADD),y=ns,M=ns),at)switch(D){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",D);break}else switch(D){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ql:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",D);break}w=null,b=null,S=null,C=null,x.set(0,0,0),T=0,p=D,I=at}return}_e=_e||fe,ne=ne||j,Fe=Fe||pe,(fe!==y||_e!==M)&&(i.blendEquationSeparate(lt[fe],lt[_e]),y=fe,M=_e),(j!==w||pe!==b||ne!==S||Fe!==C)&&(i.blendFuncSeparate(ee[j],ee[pe],ee[ne],ee[Fe]),w=j,b=pe,S=ne,C=Fe),(Te.equals(x)===!1||bt!==T)&&(i.blendColor(Te.r,Te.g,Te.b,bt),x.copy(Te),T=bt),p=D,I=!1}function re(D,fe){D.side===an?Ae(i.CULL_FACE):$(i.CULL_FACE);let j=D.side===zt;fe&&(j=!j),ae(j),D.blending===Ni&&D.transparent===!1?se(Kn):se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(D){F!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),F=D)}function he(D){D!==Hd?($(i.CULL_FACE),D!==z&&(D===Hl?i.cullFace(i.BACK):D===Wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),z=D}function Be(D){D!==V&&(W&&i.lineWidth(D),V=D)}function Ue(D,fe,j){D?($(i.POLYGON_OFFSET_FILL),(N!==fe||k!==j)&&(N=fe,k=j,a.getReversed()&&(fe=-fe),i.polygonOffset(fe,j))):Ae(i.POLYGON_OFFSET_FILL)}function He(D){D?$(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function qe(D){D===void 0&&(D=i.TEXTURE0+Y-1),Z!==D&&(i.activeTexture(D),Z=D)}function R(D,fe,j){j===void 0&&(Z===null?j=i.TEXTURE0+Y-1:j=Z);let pe=te[j];pe===void 0&&(pe={type:void 0,texture:void 0},te[j]=pe),(pe.type!==D||pe.texture!==fe)&&(Z!==j&&(i.activeTexture(j),Z=j),i.bindTexture(D,fe||K[D]),pe.type=D,pe.texture=fe)}function rt(){let D=te[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function A(){try{i.texSubImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function U(){try{i.texSubImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function ce(){try{i.texStorage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function le(){try{i.texStorage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function J(){try{i.texImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Q(){try{i.texImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function ue(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function Pe(D,fe){u[D]!==fe&&(i.pixelStorei(D,fe),u[D]=fe)}function me(D){st.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function de(D){$e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$e.copy(D))}function Le(D,fe){let j=l.get(fe);j===void 0&&(j=new WeakMap,l.set(fe,j));let pe=j.get(D);pe===void 0&&(pe=i.getUniformBlockIndex(fe,D.name),j.set(D,pe))}function Oe(D,fe){let pe=l.get(fe).get(D);c.get(fe)!==pe&&(i.uniformBlockBinding(fe,pe,D.__bindingPointIndex),c.set(fe,pe))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,te={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,w=null,b=null,M=null,S=null,C=null,x=new De(0,0,0),T=0,I=!1,F=null,z=null,V=null,N=null,k=null,st.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:Ae,bindFramebuffer:ze,drawBuffers:ve,useProgram:Ve,setBlending:se,setMaterial:re,setFlipSided:ae,setCullFace:he,setLineWidth:Be,setPolygonOffset:Ue,setScissorTest:He,activeTexture:qe,bindTexture:R,unbindTexture:rt,compressedTexImage2D:et,compressedTexImage3D:E,texImage2D:J,texImage3D:Q,pixelStorei:Pe,getParameter:ue,updateUBOMapping:Le,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:le,texSubImage2D:A,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:me,viewport:de,reset:Je}}function O_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,A){return g?new OffscreenCanvas(E,A):Ls("canvas")}function m(E,A,U){let G=1,X=et(E);if((X.width>U||X.height>U)&&(G=U/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ce=Math.floor(G*X.width),le=Math.floor(G*X.height);d===void 0&&(d=_(ce,le));let J=A?_(ce,le):d;return J.width=ce,J.height=le,J.getContext("2d").drawImage(E,0,0,ce,le),Re("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ce+"x"+le+")."),J}else return"data"in E&&Re("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function p(E){return E.generateMipmaps}function y(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,A,U,G,X,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le;G&&(le=e.get("EXT_texture_norm16"),le||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=A;if(A===i.RED&&(U===i.FLOAT&&(J=i.R32F),U===i.HALF_FLOAT&&(J=i.R16F),U===i.UNSIGNED_BYTE&&(J=i.R8),U===i.UNSIGNED_SHORT&&le&&(J=le.R16_EXT),U===i.SHORT&&le&&(J=le.R16_SNORM_EXT)),A===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.R8UI),U===i.UNSIGNED_SHORT&&(J=i.R16UI),U===i.UNSIGNED_INT&&(J=i.R32UI),U===i.BYTE&&(J=i.R8I),U===i.SHORT&&(J=i.R16I),U===i.INT&&(J=i.R32I)),A===i.RG&&(U===i.FLOAT&&(J=i.RG32F),U===i.HALF_FLOAT&&(J=i.RG16F),U===i.UNSIGNED_BYTE&&(J=i.RG8),U===i.UNSIGNED_SHORT&&le&&(J=le.RG16_EXT),U===i.SHORT&&le&&(J=le.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RG8UI),U===i.UNSIGNED_SHORT&&(J=i.RG16UI),U===i.UNSIGNED_INT&&(J=i.RG32UI),U===i.BYTE&&(J=i.RG8I),U===i.SHORT&&(J=i.RG16I),U===i.INT&&(J=i.RG32I)),A===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RGB8UI),U===i.UNSIGNED_SHORT&&(J=i.RGB16UI),U===i.UNSIGNED_INT&&(J=i.RGB32UI),U===i.BYTE&&(J=i.RGB8I),U===i.SHORT&&(J=i.RGB16I),U===i.INT&&(J=i.RGB32I)),A===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),U===i.UNSIGNED_INT&&(J=i.RGBA32UI),U===i.BYTE&&(J=i.RGBA8I),U===i.SHORT&&(J=i.RGBA16I),U===i.INT&&(J=i.RGBA32I)),A===i.RGB&&(U===i.UNSIGNED_SHORT&&le&&(J=le.RGB16_EXT),U===i.SHORT&&le&&(J=le.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),A===i.RGBA){let Q=ce?wr:je.getTransfer(X);U===i.FLOAT&&(J=i.RGBA32F),U===i.HALF_FLOAT&&(J=i.RGBA16F),U===i.UNSIGNED_BYTE&&(J=Q===ct?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&le&&(J=le.RGBA16_EXT),U===i.SHORT&&le&&(J=le.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(E,A){let U;return E?A===null||A===Dn||A===Zs?U=i.DEPTH24_STENCIL8:A===pn?U=i.DEPTH32F_STENCIL8:A===Qs&&(U=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Dn||A===Zs?U=i.DEPTH_COMPONENT24:A===pn?U=i.DEPTH_COMPONENT32F:A===Qs&&(U=i.DEPTH_COMPONENT16),U}function S(E,A){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==wt&&E.minFilter!==Et?Math.log2(Math.max(A.width,A.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?A.mipmaps.length:1}function C(E){let A=E.target;A.removeEventListener("dispose",C),T(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function x(E){let A=E.target;A.removeEventListener("dispose",x),F(A)}function T(E){let A=n.get(E);if(A.__webglInit===void 0)return;let U=E.source,G=f.get(U);if(G){let X=G[A.__cacheKey];X.usedTimes--,X.usedTimes===0&&I(E),Object.keys(G).length===0&&f.delete(U)}n.remove(E)}function I(E){let A=n.get(E);i.deleteTexture(A.__webglTexture);let U=E.source,G=f.get(U);delete G[A.__cacheKey],a.memory.textures--}function F(E){let A=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(A.__webglFramebuffer[G]))for(let X=0;X<A.__webglFramebuffer[G].length;X++)i.deleteFramebuffer(A.__webglFramebuffer[G][X]);else i.deleteFramebuffer(A.__webglFramebuffer[G]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[G])}else{if(Array.isArray(A.__webglFramebuffer))for(let G=0;G<A.__webglFramebuffer.length;G++)i.deleteFramebuffer(A.__webglFramebuffer[G]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let G=0;G<A.__webglColorRenderbuffer.length;G++)A.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[G]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let U=E.textures;for(let G=0,X=U.length;G<X;G++){let ce=n.get(U[G]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(U[G])}n.remove(E)}let z=0;function V(){z=0}function N(){return z}function k(E){z=E}function Y(){let E=z;return E>=s.maxTextures&&Re("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function W(E){let A=[];return A.push(E.wrapS),A.push(E.wrapT),A.push(E.wrapR||0),A.push(E.magFilter),A.push(E.minFilter),A.push(E.anisotropy),A.push(E.internalFormat),A.push(E.format),A.push(E.type),A.push(E.generateMipmaps),A.push(E.premultiplyAlpha),A.push(E.flipY),A.push(E.unpackAlignment),A.push(E.colorSpace),A.join()}function ie(E,A){let U=n.get(E);if(E.isVideoTexture&&R(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){let G=E.image;if(G===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(U,E,A);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+A)}function q(E,A){let U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Ae(U,E,A);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+A)}function Z(E,A){let U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Ae(U,E,A);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+A)}function te(E,A){let U=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){ze(U,E,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+A)}let Ie={[Ti]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Is]:i.MIRRORED_REPEAT},Se={[wt]:i.NEAREST,[ko]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[fn]:i.LINEAR_MIPMAP_LINEAR},st={[bf]:i.NEVER,[Mf]:i.ALWAYS,[xf]:i.LESS,[Mc]:i.LEQUAL,[_f]:i.EQUAL,[Sc]:i.GEQUAL,[vf]:i.GREATER,[yf]:i.NOTEQUAL};function $e(E,A){if(A.type===pn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Et||A.magFilter===js||A.magFilter===ss||A.magFilter===fn||A.minFilter===Et||A.minFilter===js||A.minFilter===ss||A.minFilter===fn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ie[A.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ie[A.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ie[A.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Se[A.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Se[A.minFilter]),A.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,st[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===wt||A.minFilter!==ss&&A.minFilter!==fn||A.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function nt(E,A){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,A.addEventListener("dispose",C));let G=A.source,X=f.get(G);X===void 0&&(X={},f.set(G,X));let ce=W(A);if(ce!==E.__cacheKey){X[ce]===void 0&&(X[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[ce].usedTimes++;let le=X[E.__cacheKey];le!==void 0&&(X[E.__cacheKey].usedTimes--,le.usedTimes===0&&I(A)),E.__cacheKey=ce,E.__webglTexture=X[ce].texture}return U}function K(E,A,U){return Math.floor(Math.floor(E/U)/A)}function $(E,A,U,G){let ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,U,G,A.data);else{ce.sort((Pe,me)=>Pe.start-me.start);let le=0;for(let Pe=1;Pe<ce.length;Pe++){let me=ce[le],de=ce[Pe],Le=me.start+me.count,Oe=K(de.start,A.width,4),Je=K(me.start,A.width,4);de.start<=Le+1&&Oe===Je&&K(de.start+de.count-1,A.width,4)===Oe?me.count=Math.max(me.count,de.start+de.count-me.start):(++le,ce[le]=de)}ce.length=le+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Pe=0,me=ce.length;Pe<me;Pe++){let de=ce[Pe],Le=Math.floor(de.start/4),Oe=Math.ceil(de.count/4),Je=Le%A.width,D=Math.floor(Le/A.width),fe=Oe,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Je,D,fe,j,U,G,A.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function Ae(E,A,U){let G=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(G=i.TEXTURE_3D);let X=nt(E,A),ce=A.source;t.bindTexture(G,E.__webglTexture,i.TEXTURE0+U);let le=n.get(ce);if(ce.version!==le.__version||X===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let j=je.getPrimaries(je.workingColorSpace),pe=A.colorSpace===pi?null:je.getPrimaries(A.colorSpace),_e=A.colorSpace===pi||j===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let Q=m(A.image,!1,s.maxTextureSize);Q=rt(A,Q);let ue=r.convert(A.format,A.colorSpace),Pe=r.convert(A.type),me=b(A.internalFormat,ue,Pe,A.normalized,A.colorSpace,A.isVideoTexture);$e(G,A);let de,Le=A.mipmaps,Oe=A.isVideoTexture!==!0,Je=le.__version===void 0||X===!0,D=ce.dataReady,fe=S(A,Q);if(A.isDepthTexture)me=M(A.format===Bi,A.type),Je&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,me,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,me,Q.width,Q.height,0,ue,Pe,null));else if(A.isDataTexture)if(Le.length>0){Oe&&Je&&t.texStorage2D(i.TEXTURE_2D,fe,me,Le[0].width,Le[0].height);for(let j=0,pe=Le.length;j<pe;j++)de=Le[j],Oe?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,ue,Pe,de.data):t.texImage2D(i.TEXTURE_2D,j,me,de.width,de.height,0,ue,Pe,de.data);A.generateMipmaps=!1}else Oe?(Je&&t.texStorage2D(i.TEXTURE_2D,fe,me,Q.width,Q.height),D&&$(A,Q,ue,Pe)):t.texImage2D(i.TEXTURE_2D,0,me,Q.width,Q.height,0,ue,Pe,Q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Oe&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,Le[0].width,Le[0].height,Q.depth);for(let j=0,pe=Le.length;j<pe;j++)if(de=Le[j],A.format!==mn)if(ue!==null)if(Oe){if(D)if(A.layerUpdates.size>0){let _e=Ah(de.width,de.height,A.format,A.type);for(let ne of A.layerUpdates){let Fe=de.data.subarray(ne*_e/de.data.BYTES_PER_ELEMENT,(ne+1)*_e/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ne,de.width,de.height,1,ue,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,Q.depth,ue,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,me,de.width,de.height,Q.depth,0,de.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,Q.depth,ue,Pe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,me,de.width,de.height,Q.depth,0,ue,Pe,de.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Oe&&Je&&t.texStorage2D(i.TEXTURE_2D,fe,me,Le[0].width,Le[0].height);for(let j=0,pe=Le.length;j<pe;j++)de=Le[j],A.format!==mn?ue!==null?Oe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(i.TEXTURE_2D,j,me,de.width,de.height,0,de.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,ue,Pe,de.data):t.texImage2D(i.TEXTURE_2D,j,me,de.width,de.height,0,ue,Pe,de.data)}else if(A.isDataArrayTexture)if(Oe){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,me,Q.width,Q.height,Q.depth),D)if(A.layerUpdates.size>0){let j=Ah(Q.width,Q.height,A.format,A.type);for(let pe of A.layerUpdates){let _e=Q.data.subarray(pe*j/Q.data.BYTES_PER_ELEMENT,(pe+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,Q.width,Q.height,1,ue,Pe,_e)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,Pe,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,Q.width,Q.height,Q.depth,0,ue,Pe,Q.data);else if(A.isData3DTexture)Oe?(Je&&t.texStorage3D(i.TEXTURE_3D,fe,me,Q.width,Q.height,Q.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,Pe,Q.data)):t.texImage3D(i.TEXTURE_3D,0,me,Q.width,Q.height,Q.depth,0,ue,Pe,Q.data);else if(A.isFramebufferTexture){if(Je)if(Oe)t.texStorage2D(i.TEXTURE_2D,fe,me,Q.width,Q.height);else{let j=Q.width,pe=Q.height;for(let _e=0;_e<fe;_e++)t.texImage2D(i.TEXTURE_2D,_e,me,j,pe,0,ue,Pe,null),j>>=1,pe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),u.add(A),j.onpaint=pe=>{let _e=pe.changedElements;for(let ne of u)_e.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let _e=i.RGBA,ne=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,ne,Fe,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Oe&&Je){let j=et(Le[0]);t.texStorage2D(i.TEXTURE_2D,fe,me,j.width,j.height)}for(let j=0,pe=Le.length;j<pe;j++)de=Le[j],Oe?D&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ue,Pe,de):t.texImage2D(i.TEXTURE_2D,j,me,ue,Pe,de);A.generateMipmaps=!1}else if(Oe){if(Je){let j=et(Q);t.texStorage2D(i.TEXTURE_2D,fe,me,j.width,j.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Pe,Q)}else t.texImage2D(i.TEXTURE_2D,0,me,ue,Pe,Q);p(A)&&y(G),le.__version=ce.version,A.onUpdate&&A.onUpdate(A)}E.__version=A.version}function ze(E,A,U){if(A.image.length!==6)return;let G=nt(E,A),X=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);let ce=n.get(X);if(X.version!==ce.__version||G===!0){t.activeTexture(i.TEXTURE0+U);let le=je.getPrimaries(je.workingColorSpace),J=A.colorSpace===pi?null:je.getPrimaries(A.colorSpace),Q=A.colorSpace===pi||le===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ue=A.isCompressedTexture||A.image[0].isCompressedTexture,Pe=A.image[0]&&A.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!ue&&!Pe?me[ne]=m(A.image[ne],!0,s.maxCubemapSize):me[ne]=Pe?A.image[ne].image:A.image[ne],me[ne]=rt(A,me[ne]);let de=me[0],Le=r.convert(A.format,A.colorSpace),Oe=r.convert(A.type),Je=b(A.internalFormat,Le,Oe,A.normalized,A.colorSpace),D=A.isVideoTexture!==!0,fe=ce.__version===void 0||G===!0,j=X.dataReady,pe=S(A,de);$e(i.TEXTURE_CUBE_MAP,A);let _e;if(ue){D&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Je,de.width,de.height);for(let ne=0;ne<6;ne++){_e=me[ne].mipmaps;for(let Fe=0;Fe<_e.length;Fe++){let Te=_e[Fe];A.format!==mn?Le!==null?D?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,0,0,Te.width,Te.height,Le,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,Je,Te.width,Te.height,0,Te.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,0,0,Te.width,Te.height,Le,Oe,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe,Je,Te.width,Te.height,0,Le,Oe,Te.data)}}}else{if(_e=A.mipmaps,D&&fe){_e.length>0&&pe++;let ne=et(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Je,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Pe){D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Le,Oe,me[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Je,me[ne].width,me[ne].height,0,Le,Oe,me[ne].data);for(let Fe=0;Fe<_e.length;Fe++){let bt=_e[Fe].image[ne].image;D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,0,0,bt.width,bt.height,Le,Oe,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,Je,bt.width,bt.height,0,Le,Oe,bt.data)}}else{D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,Oe,me[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Je,Le,Oe,me[ne]);for(let Fe=0;Fe<_e.length;Fe++){let Te=_e[Fe];D?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,0,0,Le,Oe,Te.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Fe+1,Je,Le,Oe,Te.image[ne])}}}p(A)&&y(i.TEXTURE_CUBE_MAP),ce.__version=X.version,A.onUpdate&&A.onUpdate(A)}E.__version=A.version}function ve(E,A,U,G,X,ce){let le=r.convert(U.format,U.colorSpace),J=r.convert(U.type),Q=b(U.internalFormat,le,J,U.normalized,U.colorSpace),ue=n.get(A),Pe=n.get(U);if(Pe.__renderTarget=A,!ue.__hasExternalTextures){let me=Math.max(1,A.width>>ce),de=Math.max(1,A.height>>ce);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,ce,Q,me,de,A.depth,0,le,J,null):t.texImage2D(X,ce,Q,me,de,0,le,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),qe(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,X,Pe.__webglTexture,0,He(A)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,X,Pe.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(E,A,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),A.depthBuffer){let G=A.depthTexture,X=G&&G.isDepthTexture?G.type:null,ce=M(A.stencilBuffer,X),le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qe(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(A),ce,A.width,A.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(A),ce,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ce,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,E)}else{let G=A.textures;for(let X=0;X<G.length;X++){let ce=G[X],le=r.convert(ce.format,ce.colorSpace),J=r.convert(ce.type),Q=b(ce.internalFormat,le,J,ce.normalized,ce.colorSpace);qe(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(A),Q,A.width,A.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(A),Q,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Q,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(E,A,U){let G=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(A.depthTexture);if(X.__renderTarget=A,(!X.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,A.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),$e(i.TEXTURE_CUBE_MAP,A.depthTexture);let ue=r.convert(A.depthTexture.format),Pe=r.convert(A.depthTexture.type),me;A.depthTexture.format===Gn?me=i.DEPTH_COMPONENT24:A.depthTexture.format===Bi&&(me=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,me,A.width,A.height,0,ue,Pe,null)}}else ie(A.depthTexture,0);let ce=X.__webglTexture,le=He(A),J=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Q=A.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Gn)qe(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,ce,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,ce,0);else if(A.depthTexture.format===Bi)qe(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,ce,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(E){let A=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),G){let X=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),A.__depthDisposeCallback=X}A.__boundDepthTexture=G}if(E.depthTexture&&!A.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)lt(A.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;G&&G.length>0?lt(A.__webglFramebuffer[0],E,0):lt(A.__webglFramebuffer,E,0)}else if(U){A.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[G]),A.__webglDepthbuffer[G]===void 0)A.__webglDepthbuffer[G]=i.createRenderbuffer(),Ve(A.__webglDepthbuffer[G],E,!1);else{let X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ce)}}else{let G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ve(A.__webglDepthbuffer,E,!1);else{let X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(E,A,U){let G=n.get(E);A!==void 0&&ve(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&ee(E)}function re(E){let A=E.texture,U=n.get(E),G=n.get(A);E.addEventListener("dispose",x);let X=E.textures,ce=E.isWebGLCubeRenderTarget===!0,le=X.length>1;if(le||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=A.version,a.memory.textures++),ce){U.__webglFramebuffer=[];for(let J=0;J<6;J++)if(A.mipmaps&&A.mipmaps.length>0){U.__webglFramebuffer[J]=[];for(let Q=0;Q<A.mipmaps.length;Q++)U.__webglFramebuffer[J][Q]=i.createFramebuffer()}else U.__webglFramebuffer[J]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){U.__webglFramebuffer=[];for(let J=0;J<A.mipmaps.length;J++)U.__webglFramebuffer[J]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(le)for(let J=0,Q=X.length;J<Q;J++){let ue=n.get(X[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&qe(E)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let J=0;J<X.length;J++){let Q=X[J];U.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[J]);let ue=r.convert(Q.format,Q.colorSpace),Pe=r.convert(Q.type),me=b(Q.internalFormat,ue,Pe,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),de=He(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,me,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,U.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),$e(i.TEXTURE_CUBE_MAP,A);for(let J=0;J<6;J++)if(A.mipmaps&&A.mipmaps.length>0)for(let Q=0;Q<A.mipmaps.length;Q++)ve(U.__webglFramebuffer[J][Q],E,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else ve(U.__webglFramebuffer[J],E,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(A)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let J=0,Q=X.length;J<Q;J++){let ue=X[J],Pe=n.get(ue),me=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(me=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Pe.__webglTexture),$e(me,ue),ve(U.__webglFramebuffer,E,ue,i.COLOR_ATTACHMENT0+J,me,0),p(ue)&&y(me)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,G.__webglTexture),$e(J,A),A.mipmaps&&A.mipmaps.length>0)for(let Q=0;Q<A.mipmaps.length;Q++)ve(U.__webglFramebuffer[Q],E,A,i.COLOR_ATTACHMENT0,J,Q);else ve(U.__webglFramebuffer,E,A,i.COLOR_ATTACHMENT0,J,0);p(A)&&y(J),t.unbindTexture()}E.depthBuffer&&ee(E)}function ae(E){let A=E.textures;for(let U=0,G=A.length;U<G;U++){let X=A[U];if(p(X)){let ce=w(E),le=n.get(X).__webglTexture;t.bindTexture(ce,le),y(ce),t.unbindTexture()}}}let he=[],Be=[];function Ue(E){if(E.samples>0){if(qe(E)===!1){let A=E.textures,U=E.width,G=E.height,X=i.COLOR_BUFFER_BIT,ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(E),J=A.length>1;if(J)for(let ue=0;ue<A.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let Q=E.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ue=0;ue<A.length;ue++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);let Pe=n.get(A[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,U,G,0,0,U,G,X,i.NEAREST),c===!0&&(he.length=0,Be.length=0,he.push(i.COLOR_ATTACHMENT0+ue),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(he.push(ce),Be.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<A.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);let Pe=n.get(A[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let A=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function He(E){return Math.min(s.maxSamples,E.samples)}function qe(E){let A=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function R(E){let A=a.render.frame;h.get(E)!==A&&(h.set(E,A),E.update())}function rt(E,A){let U=E.colorSpace,G=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Qt&&U!==pi&&(je.getTransfer(U)===ct?(G!==mn||X!==on)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",U)),A}function et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=se,this.setupRenderTarget=re,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function k_(i,e){function t(n,s=pi){let r,a=je.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===ch)return i.RGB;if(n===mn)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===ea||n===ta||n===na||n===ia)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Ko||n===Yo||n===jo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===Zo||n===$o||n===ec||n===tc||n===sa||n===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qo||n===Zo)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$o)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ec)return r.COMPRESSED_R11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ac||n===bc||n===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ac)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===vc||n===ra||n===yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function H_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ph(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),w=y.envMap,b=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let S=M.program;n.uniformBlockBinding(b,S)}function l(b,M){let S=s[b.id];S===void 0&&(m(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",y));let C=M.program;n.updateUBOMapping(b,C);let x=e.render.frame;r[b.id]!==x&&(d(b),r[b.id]=x)}function h(b){let M=u();b.__bindingPointIndex=M;let S=i.createBuffer(),C=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let M=s[b.id],S=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,T=S.length;x<T;x++){let I=S[x];if(Array.isArray(I))for(let F=0,z=I.length;F<z;F++)f(I[F],x,F,C);else f(I,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,M,S,C){if(_(b,M,S,C)===!0){let x=b.__offset,T=b.value;if(Array.isArray(T)){let I=0;for(let F=0;F<T.length;F++){let z=T[F],V=p(z);g(z,b.__data,I),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function g(b,M,S){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,S)}function _(b,M,S,C){let x=b.value,T=M+"_"+S;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{let I=C[T];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(b){let M=b.uniforms,S=0,C=16;for(let T=0,I=M.length;T<I;T++){let F=Array.isArray(M[T])?M[T]:[M[T]];for(let z=0,V=F.length;z<V;z++){let N=F[z],k=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,W=k.length;Y<W;Y++){let ie=k[Y],q=p(ie),Z=S%C,te=Z%q.boundary,Ie=Z+te;S+=te,Ie!==0&&C-Ie<q.storage&&(S+=C-Ie),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=q.storage}}}let x=S%C;return x>0&&(S+=C-x),b.__size=S,b.__cache={},this}function p(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",b),M}function y(b){let M=b.target;M.removeEventListener("dispose",y);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}function X_(){return Yn===null&&(Yn=new Gs(q_,16,16,Oi,Fn),Yn.name="DFG_LUT",Yn.minFilter=Et,Yn.magFilter=Et,Yn.wrapS=_n,Yn.wrapT=_n,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var r0,a0,o0,c0,l0,h0,u0,d0,f0,p0,m0,g0,A0,b0,x0,_0,v0,y0,M0,S0,w0,E0,T0,C0,R0,I0,P0,L0,D0,F0,N0,U0,B0,O0,k0,G0,z0,V0,H0,W0,q0,X0,J0,K0,Y0,j0,Q0,Z0,$0,eA,tA,nA,iA,sA,rA,aA,oA,cA,lA,hA,uA,dA,fA,pA,mA,gA,AA,bA,xA,_A,vA,yA,MA,SA,wA,EA,TA,CA,RA,IA,PA,LA,DA,FA,NA,UA,BA,OA,kA,GA,zA,VA,HA,WA,qA,XA,JA,KA,YA,jA,QA,ZA,$A,eb,tb,nb,ib,sb,rb,ab,ob,cb,lb,hb,ub,db,fb,pb,mb,gb,Ab,bb,xb,_b,vb,yb,Mb,Sb,wb,Eb,Tb,Cb,Rb,Ib,Pb,Lb,Db,Fb,Nb,Ub,Bb,Ob,Ye,ge,jn,wc,kb,sp,tr,qb,Xb,Jb,la,Uf,Sh,wh,Eh,Th,Kb,as,Gi,Tc,rx,rp,Ih,ap,op,cp,Gf,zf,Vf,Hf,Wf,Ph,Lh,Dh,Ch,nr,Kx,Yx,Jf,$x,Ec,r_,a_,c_,h_,d_,p_,g_,__,Nh,Uh,C_,L_,D_,F_,N_,np,ha,Rh,G_,z_,Bh,Oh,V_,lp,q_,Yn,ir,mi=bn(()=>{Mh();Mh();r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a0=`#ifdef USE_ALPHAHASH
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
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,x0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,C0=`#define PI 3.141592653589793
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
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I0=`vec3 transformedNormal = objectNormal;
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
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Q0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nA=`PhysicalMaterial material;
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
#endif`,iA=`uniform sampler2D dfgLUT;
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
}`,sA=`
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
#endif`,rA=`#if defined( RE_IndirectDiffuse )
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
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,cA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mA=`#if defined( USE_POINTS_UV )
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
#endif`,gA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_A=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vA=`#ifdef USE_MORPHTARGETS
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
#endif`,yA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CA=`#ifdef USE_NORMALMAP
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
#endif`,RA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WA=`float getShadowMask() {
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
}`,qA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XA=`#ifdef USE_SKINNING
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
#endif`,JA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KA=`#ifdef USE_SKINNING
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
#endif`,YA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$A=`#ifdef USE_TRANSMISSION
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
#endif`,eb=`#ifdef USE_TRANSMISSION
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ab=`uniform sampler2D t2D;
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`#include <common>
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
}`,db=`#if DEPTH_PACKING == 3200
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
}`,fb=`#define DISTANCE
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
}`,pb=`#define DISTANCE
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`uniform float scale;
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
}`,bb=`uniform vec3 diffuse;
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
}`,xb=`#include <common>
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
}`,_b=`uniform vec3 diffuse;
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
}`,vb=`#define LAMBERT
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
}`,yb=`#define LAMBERT
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
}`,Mb=`#define MATCAP
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
}`,Sb=`#define MATCAP
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
}`,wb=`#define NORMAL
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
}`,Eb=`#define NORMAL
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
}`,Tb=`#define PHONG
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
}`,Cb=`#define PHONG
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
}`,Rb=`#define STANDARD
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
}`,Ib=`#define STANDARD
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
}`,Pb=`#define TOON
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
}`,Lb=`#define TOON
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
}`,Db=`uniform float size;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Nb=`#include <common>
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
}`,Ub=`uniform vec3 color;
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
}`,Bb=`uniform float rotation;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:r0,alphahash_pars_fragment:a0,alphamap_fragment:o0,alphamap_pars_fragment:c0,alphatest_fragment:l0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:d0,batching_pars_vertex:f0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:A0,iridescence_fragment:b0,bumpmap_pars_fragment:x0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:w0,color_pars_vertex:E0,color_vertex:T0,common:C0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:I0,displacementmap_pars_vertex:P0,displacementmap_vertex:L0,emissivemap_fragment:D0,emissivemap_pars_fragment:F0,colorspace_fragment:N0,colorspace_pars_fragment:U0,envmap_fragment:B0,envmap_common_pars_fragment:O0,envmap_pars_fragment:k0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:Q0,envmap_vertex:z0,fog_vertex:V0,fog_pars_vertex:H0,fog_fragment:W0,fog_pars_fragment:q0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:J0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:Y0,lights_pars_begin:j0,lights_toon_fragment:Z0,lights_toon_pars_fragment:$0,lights_phong_fragment:eA,lights_phong_pars_fragment:tA,lights_physical_fragment:nA,lights_physical_pars_fragment:iA,lights_fragment_begin:sA,lights_fragment_maps:rA,lights_fragment_end:aA,lightprobes_pars_fragment:oA,logdepthbuf_fragment:cA,logdepthbuf_pars_fragment:lA,logdepthbuf_pars_vertex:hA,logdepthbuf_vertex:uA,map_fragment:dA,map_pars_fragment:fA,map_particle_fragment:pA,map_particle_pars_fragment:mA,metalnessmap_fragment:gA,metalnessmap_pars_fragment:AA,morphinstance_vertex:bA,morphcolor_vertex:xA,morphnormal_vertex:_A,morphtarget_pars_vertex:vA,morphtarget_vertex:yA,normal_fragment_begin:MA,normal_fragment_maps:SA,normal_pars_fragment:wA,normal_pars_vertex:EA,normal_vertex:TA,normalmap_pars_fragment:CA,clearcoat_normal_fragment_begin:RA,clearcoat_normal_fragment_maps:IA,clearcoat_pars_fragment:PA,iridescence_pars_fragment:LA,opaque_fragment:DA,packing:FA,premultiplied_alpha_fragment:NA,project_vertex:UA,dithering_fragment:BA,dithering_pars_fragment:OA,roughnessmap_fragment:kA,roughnessmap_pars_fragment:GA,shadowmap_pars_fragment:zA,shadowmap_pars_vertex:VA,shadowmap_vertex:HA,shadowmask_pars_fragment:WA,skinbase_vertex:qA,skinning_pars_vertex:XA,skinning_vertex:JA,skinnormal_vertex:KA,specularmap_fragment:YA,specularmap_pars_fragment:jA,tonemapping_fragment:QA,tonemapping_pars_fragment:ZA,transmission_fragment:$A,transmission_pars_fragment:eb,uv_pars_fragment:tb,uv_pars_vertex:nb,uv_vertex:ib,worldpos_vertex:sb,background_vert:rb,background_frag:ab,backgroundCube_vert:ob,backgroundCube_frag:cb,cube_vert:lb,cube_frag:hb,depth_vert:ub,depth_frag:db,distance_vert:fb,distance_frag:pb,equirect_vert:mb,equirect_frag:gb,linedashed_vert:Ab,linedashed_frag:bb,meshbasic_vert:xb,meshbasic_frag:_b,meshlambert_vert:vb,meshlambert_frag:yb,meshmatcap_vert:Mb,meshmatcap_frag:Sb,meshnormal_vert:wb,meshnormal_frag:Eb,meshphong_vert:Tb,meshphong_frag:Cb,meshphysical_vert:Rb,meshphysical_frag:Ib,meshtoon_vert:Pb,meshtoon_frag:Lb,points_vert:Db,points_frag:Fb,shadow_vert:Nb,shadow_frag:Ub,sprite_vert:Bb,sprite_frag:Ob},ge={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},jn={basic:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Jt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Jt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new De(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Jt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Jt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Jt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Jt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Jt([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Jt([ge.lights,ge.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};jn.physical={uniforms:Jt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};wc={r:0,b:0,g:0},kb=new Xe,sp=new We;sp.set(-1,0,0,0,1,0,0,0,1);tr=4,qb=6,Xb=20,Jb=256,la=new Fi,Uf=new De,Sh=null,wh=0,Eh=0,Th=!1,Kb=new P,as=new P,Gi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Kb}=r;Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,wh,Eh),this._renderer.xr.enabled=Th,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Fn,format:mn,colorSpace:Qt,depthBuffer:!1},s=Bf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yb(r)),this._blurMaterial=Qb(r,e,t),this._ggxMaterial=jb(r,e,t)}return s}_compileMaterial(e){let t=new pt(new Tt,e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,s,r){let c=new vt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Uf),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Wn,new In({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Uf),p=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):b===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let M=this._cubeSize;er(s,b*M,w>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(_,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ui||e.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;er(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,la)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-tr?n-g+tr:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,er(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,la),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,er(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,la)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-tr?s-this._lodMax+tr:0),d=4*(this._cubeSize-h);er(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,la)}};Tc=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wn(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Kn});r.uniforms.tEquirect.value=t;let a=new pt(s,r),o=t.minFilter;return t.minFilter===fn&&(t.minFilter=Et),new Do(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};rx={[Yl]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[Ql]:"CINEON_TONE_MAPPING",[Zl]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[$l]:"CUSTOM_TONE_MAPPING"};rp=new Ft,Ih=new Ii(1,1),ap=new Tr,op=new fo,cp=new Fr,Gf=[],zf=[],Vf=new Float32Array(16),Hf=new Float32Array(9),Wf=new Float32Array(4);Ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ex(t.type)}},Lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xx(t.type)}},Dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ch=/(\w+)(\])?(\[|\.)?/g;nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Jx(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};Kx=37297,Yx=0;Jf=new We;$x={[Yl]:"Linear",[jl]:"Reinhard",[Ql]:"Cineon",[Zl]:"ACESFilmic",[eh]:"AgX",[th]:"Neutral",[$l]:"Custom"};Ec=new P;r_=/^[ \t]*#include +<([\w\d./]+)>/gm;a_=new Map;c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;h_={[Zr]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};d_={[Ui]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE_UV"};p_={[is]:"ENVMAP_MODE_REFRACTION"};g_={[Uo]:"ENVMAP_BLENDING_MULTIPLY",[uf]:"ENVMAP_BLENDING_MIX",[df]:"ENVMAP_BLENDING_ADD"};__=0,Nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uh(e),t.set(e,n)),n}},Uh=class{constructor(e){this.id=__++,this.code=e,this.usedTimes=0}};C_=0;L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`,F_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],N_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],np=new Xe,ha=new P,Rh=new P;G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ot({vertexShader:G_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends zn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Bh,p={},y=t.getContextAttributes(),w=null,b=null,M=[],S=[],C=new oe,x=null,T=null,I=new vt;I.viewport=new dt;let F=new vt;F.viewport=new dt;let z=[I,F],V=new Fo,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=M[K];return $===void 0&&($=new Us,M[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=M[K];return $===void 0&&($=new Us,M[K]=$),$.getGripSpace()},this.getHand=function(K){let $=M[K];return $===void 0&&($=new Us,M[K]=$),$.getHandSpace()};function Y(K){let $=S.indexOf(K.inputSource);if($===-1)return;let Ae=M[$];Ae!==void 0&&(Ae.update(K.inputSource,K.frame,l||a),Ae.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ie);for(let K=0;K<M.length;K++){let $=S[K];$!==null&&(S[K]=null,M[K].disconnect($))}N=null,k=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(w),f=null,d=null,u=null,s=null,b=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),T!==null){let K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ze=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=y.stencil?Bi:Gn,ze=y.stencil?Zs:Dn);let Ve={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new tn(d.textureWidth,d.textureHeight,{format:mn,type:on,depthTexture:new Ii(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new tn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(K){for(let $=0;$<K.removed.length;$++){let Ae=K.removed[$],ze=S.indexOf(Ae);ze>=0&&(S[ze]=null,M[ze].disconnect(Ae))}for(let $=0;$<K.added.length;$++){let Ae=K.added[$],ze=S.indexOf(Ae);if(ze===-1){for(let Ve=0;Ve<M.length;Ve++)if(Ve>=S.length){S.push(Ae),ze=Ve;break}else if(S[Ve]===null){S[Ve]=Ae,ze=Ve;break}if(ze===-1)break}let ve=M[ze];ve&&ve.connect(Ae)}}let q=new P,Z=new P;function te(K,$,Ae){q.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(Ae.matrixWorld);let ze=q.distanceTo(Z),ve=$.projectionMatrix.elements,Ve=Ae.projectionMatrix.elements,lt=ve[14]/(ve[10]-1),ee=ve[14]/(ve[10]+1),se=(ve[9]+1)/ve[5],re=(ve[9]-1)/ve[5],ae=(ve[8]-1)/ve[0],he=(Ve[8]+1)/Ve[0],Be=lt*ae,Ue=lt*he,He=ze/(-ae+he),qe=He*-ae;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qe),K.translateZ(He),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ve[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let R=lt+He,rt=ee+He,et=Be-qe,E=Ue+(ze-qe),A=se*ee/rt*R,U=re*ee/rt*R;K.projectionMatrix.makePerspective(et,E,A,U,R,rt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ie(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,Ae=K.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),V.near=F.near=I.near=$,V.far=F.far=I.far=Ae,(N!==V.near||k!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,k=V.far),V.layers.mask=K.layers.mask|6,I.layers.mask=V.layers.mask&-5,F.layers.mask=V.layers.mask&-3;let ze=K.parent,ve=V.cameras;Ie(V,ze);for(let Ve=0;Ve<ve.length;Ve++)Ie(ve[Ve],ze);ve.length===2?te(V,I,F):V.projectionMatrix.copy(I.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Se(K,V,ze)};function Se(K,$,Ae){Ae===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(Ae.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ji*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(K){return p[K]};let st=null;function $e(K,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let Ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ze=!1;Ae.length!==V.cameras.length&&(V.cameras.length=0,ze=!0);for(let ee=0;ee<Ae.length;ee++){let se=Ae[ee],re=null;if(f!==null)re=f.getViewport(se);else{let he=u.getViewSubImage(d,se);re=he.viewport,ee===0&&(e.setRenderTargetTextures(b,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(b))}let ae=z[ee];ae===void 0&&(ae=new vt,ae.layers.enable(ee),ae.viewport=new dt,z[ee]=ae),ae.matrix.fromArray(se.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(se.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(re.x,re.y,re.width,re.height),ee===0&&(V.matrix.copy(ae.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ze===!0&&V.cameras.push(ae)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let ee=u.getDepthInformation(Ae[0]);ee&&ee.isValid&&ee.texture&&m.init(ee,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let ee=0;ee<Ae.length;ee++){let se=Ae[ee].camera;if(se){let re=p[se];re||(re=new Nr,p[se]=re);let ae=u.getCameraImage(se);re.sourceTexture=ae}}}}for(let Ae=0;Ae<M.length;Ae++){let ze=S[Ae],ve=M[Ae];ze!==null&&ve!==void 0&&ve.update(ze,$,l||a)}st&&st(K,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let nt=new ip;nt.setAnimationLoop($e),this.setAnimationLoop=function(K){st=K},this.dispose=function(){}}},V_=new Xe,lp=new We;lp.set(-1,0,0,0,1,0,0,0,1);q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;ir=class{constructor(e={}){let{canvas:t=Sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=on}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,m=new Set([Xo,qo,Wo]),p=new Set([on,Dn,Qs,Zs,zo,Vo]),y=new Uint32Array(4),w=new Int32Array(4),b=new P,M=null,S=null,C=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,z=null,V=null,N=null,k=null;this._outputColorSpace=Mt;let Y=0,W=0,ie=null,q=-1,Z=null,te=new dt,Ie=new dt,Se=null,st=new De(0),$e=0,nt=t.width,K=t.height,$=1,Ae=null,ze=null,ve=new dt(0,0,nt,K),Ve=new dt(0,0,nt,K),lt=!1,ee=new zs,se=!1,re=!1,ae=new Xe,he=new P,Be=new dt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function qe(){return ie===null?$:1}let R=n;function rt(v,L){return t.getContext(v,L)}let et,E,A,U,G,X,ce,le,J,Q,ue,Pe,me,de,Le,Oe,Je,D,fe,j,pe,_e,ne;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),R===null){let L="webgl2";if(R=rt(L,v),R===null)throw rt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(v){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),Ge("WebGLRenderer: "+v.message),v}function Fe(){et=new $b(R),et.init(),pe=new k_(R,et),E=new Hb(R,et,e,pe),A=new B_(R,et),E.reversedDepthBuffer&&d&&A.buffers.depth.setReversed(!0),V=R.createFramebuffer(),N=R.createFramebuffer(),k=R.createFramebuffer(),U=new nx(R),G=new M_,X=new O_(R,et,A,G,E,pe,U),ce=new Zb(I),le=new s0(R),_e=new zb(R,le),J=new ex(R,le,U,_e),Q=new sx(R,J,le,_e,U),D=new ix(R,E,X),Le=new Wb(G),ue=new y_(I,ce,et,E,_e,Le),Pe=new H_(I,G),me=new w_,de=new P_(et),Je=new Gb(I,ce,A,Q,g,c),Oe=new U_(I,Q,E),ne=new W_(R,U,E,A),fe=new Vb(R,et,U),j=new tx(R,et,U),U.programs=ue.programs,I.capabilities=E,I.extensions=et,I.properties=G,I.renderLists=me,I.shadowMap=Oe,I.state=A,I.info=U}_!==on&&(T=new ax(_,t.width,t.height,o,s,r));let Te=new Oh(I,R);this.xr=Te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let v=et.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=et.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(v){v!==void 0&&($=v,this.setSize(nt,K,!1))},this.getSize=function(v){return v.set(nt,K)},this.setSize=function(v,L,H=!0){if(Te.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=v,K=L,t.width=Math.floor(v*$),t.height=Math.floor(L*$),H===!0&&(t.style.width=v+"px",t.style.height=L+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(nt*$,K*$).floor()},this.setDrawingBufferSize=function(v,L,H){nt=v,K=L,$=H,t.width=Math.floor(v*H),t.height=Math.floor(L*H),this.setViewport(0,0,v,L)},this.setEffects=function(v){if(_===on){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let L=0;L<v.length;L++)if(v[L].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(ve)},this.setViewport=function(v,L,H,B){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,L,H,B),A.viewport(te.copy(ve).multiplyScalar($).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,L,H,B){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,L,H,B),A.scissor(Ie.copy(Ve).multiplyScalar($).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(v){A.setScissorTest(lt=v)},this.setOpaqueSort=function(v){Ae=v},this.setTransparentSort=function(v){ze=v},this.getClearColor=function(v){return v.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,H=!0){let B=0;if(v){let O=!1;if(ie!==null){let xe=ie.texture.format;O=m.has(xe)}if(O){let xe=ie.texture.type,Me=p.has(xe),be=Je.getClearColor(),we=Je.getClearAlpha(),Ce=be.r,Ke=be.g,tt=be.b;Me?(y[0]=Ce,y[1]=Ke,y[2]=tt,y[3]=we,R.clearBufferuiv(R.COLOR,0,y)):(w[0]=Ce,w[1]=Ke,w[2]=tt,w[3]=we,R.clearBufferiv(R.COLOR,0,w))}else B|=R.COLOR_BUFFER_BIT}L&&(B|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),Je.dispose(),me.dispose(),de.dispose(),G.dispose(),ce.dispose(),Q.dispose(),_e.dispose(),ne.dispose(),ue.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Gu),Te.removeEventListener("sessionend",zu),Vi.stop()};function bt(v){v.preventDefault(),Er("WebGLRenderer: Context Lost."),F=!0}function at(){Er("WebGLRenderer: Context Restored."),F=!1;let v=U.autoReset,L=Oe.enabled,H=Oe.autoUpdate,B=Oe.needsUpdate,O=Oe.type;Fe(),U.autoReset=v,Oe.enabled=L,Oe.autoUpdate=H,Oe.needsUpdate=B,Oe.type=O}function Mn(v){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Nn(v){let L=v.target;L.removeEventListener("dispose",Nn),um(L)}function um(v){dm(v),G.remove(v)}function dm(v){let L=G.get(v).programs;L!==void 0&&(L.forEach(function(H){ue.releaseProgram(H)}),v.isShaderMaterial&&ue.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,H,B,O,xe){L===null&&(L=Ue);let Me=O.isMesh&&O.matrixWorld.determinantAffine()<0,be=mm(v,L,H,B,O);A.setMaterial(B,Me);let we=H.index,Ce=1;if(B.wireframe===!0){if(we=J.getWireframeAttribute(H),we===void 0)return;Ce=2}let Ke=H.drawRange,tt=H.attributes.position,Ee=Ke.start*Ce,ot=(Ke.start+Ke.count)*Ce;xe!==null&&(Ee=Math.max(Ee,xe.start*Ce),ot=Math.min(ot,(xe.start+xe.count)*Ce)),we!==null?(Ee=Math.max(Ee,0),ot=Math.min(ot,we.count)):tt!=null&&(Ee=Math.max(Ee,0),ot=Math.min(ot,tt.count));let Rt=ot-Ee;if(Rt<0||Rt===1/0)return;_e.setup(O,B,be,H,we);let _t,gt=fe;if(we!==null&&(_t=le.get(we),gt=j,gt.setIndex(_t)),O.isMesh)B.wireframe===!0?(A.setLineWidth(B.wireframeLinewidth*qe()),gt.setMode(R.LINES)):gt.setMode(R.TRIANGLES);else if(O.isLine){let Ht=B.linewidth;Ht===void 0&&(Ht=1),A.setLineWidth(Ht*qe()),O.isLineSegments?gt.setMode(R.LINES):O.isLineLoop?gt.setMode(R.LINE_LOOP):gt.setMode(R.LINE_STRIP)}else O.isPoints?gt.setMode(R.POINTS):O.isSprite&&gt.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(et.get("WEBGL_multi_draw"))gt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ht=O._multiDrawStarts,ye=O._multiDrawCounts,Yt=O._multiDrawCount,it=we?le.get(we).bytesPerElement:1,An=G.get(B).currentProgram.getUniforms();for(let Un=0;Un<Yt;Un++)An.setValue(R,"_gl_DrawID",Un),gt.render(Ht[Un]/it,ye[Un])}else if(O.isInstancedMesh)gt.renderInstances(Ee,Rt,O.count);else if(H.isInstancedBufferGeometry){let Ht=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ye=Math.min(H.instanceCount,Ht);gt.renderInstances(Ee,Rt,ye)}else gt.render(Ee,Rt)};function ku(v,L,H,B){z!==null&&v.isNodeMaterial&&z.setObject(B,v),se===!0&&Le.setState(v,H,!1),v.transparent===!0&&v.side===an&&v.forceSinglePass===!1?(v.side=zt,v.needsUpdate=!0,ya(v,L,B),v.side=Jn,v.needsUpdate=!0,ya(v,L,B),v.side=an):ya(v,L,B)}this.compile=function(v,L,H=null){H===null&&(H=v),z!==null&&z.renderStart(v,L,H),S=de.get(H),S.init(L),x.push(S),H.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),v!==H&&v.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),S.setupLights(),z!==null&&z.updateLights(S.state.lightsArray),re=this.localClippingEnabled,se=Le.init(this.clippingPlanes,re),se===!0&&Le.setGlobalState(this.clippingPlanes,L),z!==null&&Oe.render(S.state.shadowsArray,H,L);let B=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let xe=O.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){let be=xe[Me];ku(be,H,L,O),B.add(be)}else ku(xe,H,L,O),B.add(xe)}),S=x.pop(),z!==null&&z.renderEnd(),B},this.compileAsync=function(v,L,H=null){let B=this.compile(v,L,H);return new Promise(O=>{function xe(){if(B.forEach(function(Me){let we=G.get(Me).currentProgram;(we===void 0||we.isReady())&&B.delete(Me)}),B.size===0){O(v);return}setTimeout(xe,10)}et.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Yc=null;function fm(v){Yc&&Yc(v)}function Gu(){Vi.stop()}function zu(){Vi.start()}let Vi=new ip;Vi.setAnimationLoop(fm),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(v){Yc=v,Te.setAnimationLoop(v),v===null?Vi.stop():Vi.start()},Te.addEventListener("sessionstart",Gu),Te.addEventListener("sessionend",zu),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(v,L);let H=Te.enabled===!0&&Te.isPresenting===!0,B=T!==null&&(ie===null||H)&&T.begin(I,ie);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(L),L=Te.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,L,ie),S=de.get(v,x.length),S.init(L),S.state.textureUnits=X.getTextureUnits(),x.push(S),ae.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ee.setFromProjectionMatrix(ae,Cn,L.reversedDepth),re=this.localClippingEnabled,se=Le.init(this.clippingPlanes,re),M=me.get(v,C.length),M.init(),C.push(M),Te.enabled===!0&&Te.isPresenting===!0){let Me=I.xr.getDepthSensingMesh();Me!==null&&jc(Me,L,-1/0,I.sortObjects)}jc(v,L,0,I.sortObjects),M.finish(),z!==null&&z.updateLights(S.state.lightsArray),I.sortObjects===!0&&M.sort(Ae,ze),He=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,He&&Je.addToRenderList(M,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Le.beginShadows();let O=S.state.shadowsArray;if(Oe.render(O,v,L),se===!0&&Le.endShadows(),(B&&T.hasRenderPass())===!1){let Me=M.opaque,be=M.transmissive;if(S.setupLights(),L.isArrayCamera){let we=L.cameras;if(be.length>0)for(let Ce=0,Ke=we.length;Ce<Ke;Ce++){let tt=we[Ce];Hu(Me,be,v,tt)}He&&Je.render(v);for(let Ce=0,Ke=we.length;Ce<Ke;Ce++){let tt=we[Ce];Vu(M,v,tt,tt.viewport)}}else be.length>0&&Hu(Me,be,v,L),He&&Je.render(v),Vu(M,v,L)}ie!==null&&W===0&&(X.updateMultisampleRenderTarget(ie),X.updateRenderTargetMipmap(ie)),B&&T.end(I),v.isScene===!0&&v.onAfterRender(I,v,L),_e.resetDefaultState(),q=-1,Z=null,x.pop(),x.length>0?(S=x[x.length-1],X.setTextureUnits(S.state.textureUnits),se===!0&&Le.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,z!==null&&z.renderEnd()};function jc(v,L,H,B){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(ee)){B&&Be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ae);let Me=Q.update(v),be=v.material;be.visible&&M.push(v,Me,be,H,Be.z,null,L)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(ee))){let Me=Q.update(v),be=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Be.copy(v.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Be.copy(Me.boundingSphere.center)),Be.applyMatrix4(v.matrixWorld).applyMatrix4(ae)),Array.isArray(be)){let we=Me.groups;for(let Ce=0,Ke=we.length;Ce<Ke;Ce++){let tt=we[Ce],Ee=be[tt.materialIndex];Ee&&Ee.visible&&M.push(v,Me,Ee,H,Be.z,tt,L)}}else be.visible&&M.push(v,Me,be,H,Be.z,null,L)}}let xe=v.children;for(let Me=0,be=xe.length;Me<be;Me++)jc(xe[Me],L,H,B)}function Vu(v,L,H,B){let{opaque:O,transmissive:xe,transparent:Me}=v;S.setupLightsView(H),se===!0&&Le.setGlobalState(I.clippingPlanes,H),B&&A.viewport(te.copy(B)),O.length>0&&va(O,L,H),xe.length>0&&va(xe,L,H),Me.length>0&&va(Me,L,H),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Hu(v,L,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){let Ee=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new tn(1,1,{generateMipmaps:!0,type:Ee?Fn:on,minFilter:fn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let xe=S.state.transmissionRenderTarget[B.id],Me=B.viewport||te;xe.setSize(Me.z*I.transmissionResolutionScale,Me.w*I.transmissionResolutionScale);let be=I.getRenderTarget(),we=I.getActiveCubeFace(),Ce=I.getActiveMipmapLevel();I.setRenderTarget(xe),I.getClearColor(st),$e=I.getClearAlpha(),$e<1&&I.setClearColor(16777215,.5),I.clear(),He&&Je.render(H);let Ke=I.toneMapping;I.toneMapping=Ln;let tt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),se===!0&&Le.setGlobalState(I.clippingPlanes,B),va(v,H,B),X.updateMultisampleRenderTarget(xe),X.updateRenderTargetMipmap(xe),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ot=0,Rt=L.length;ot<Rt;ot++){let _t=L[ot],{object:gt,geometry:Ht,material:ye,group:Yt}=_t;if(ye.side===an&&gt.layers.test(B.layers)){let it=ye.side;ye.side=zt,ye.needsUpdate=!0,Wu(gt,H,B,Ht,ye,Yt),ye.side=it,ye.needsUpdate=!0,Ee=!0}}Ee===!0&&(X.updateMultisampleRenderTarget(xe),X.updateRenderTargetMipmap(xe))}I.setRenderTarget(be,we,Ce),I.setClearColor(st,$e),tt!==void 0&&(B.viewport=tt),I.toneMapping=Ke}function va(v,L,H){let B=L.isScene===!0?L.overrideMaterial:null;for(let O=0,xe=v.length;O<xe;O++){let Me=v[O],{object:be,geometry:we,group:Ce}=Me,Ke=Me.material;Ke.allowOverride===!0&&B!==null&&(Ke=B),be.layers.test(H.layers)&&Wu(be,L,H,we,Ke,Ce)}}function Wu(v,L,H,B,O,xe){z!==null&&O.isNodeMaterial&&z.setObject(v,O),v.onBeforeRender(I,L,H,B,O,xe),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(I,L,H,B,v,xe),O.transparent===!0&&O.side===an&&O.forceSinglePass===!1?(O.side=zt,O.needsUpdate=!0,I.renderBufferDirect(H,L,B,O,v,xe),O.side=Jn,O.needsUpdate=!0,I.renderBufferDirect(H,L,B,O,v,xe),O.side=an):I.renderBufferDirect(H,L,B,O,v,xe),v.onAfterRender(I,L,H,B,O,xe)}function ya(v,L,H){L.isScene!==!0&&(L=Ue);let B=G.get(v),O=S.state.lights,xe=S.state.shadowsArray,Me=O.state.version,be=ue.getParameters(v,O.state,xe,L,H,S.state.lightProbeGridArray),we=ue.getProgramCacheKey(be),Ce=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;let Ke=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=ce.get(v.envMap||B.environment,Ke),B.envMapRotation=B.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",Nn),Ce=new Map,B.programs=Ce);let tt=Ce.get(we);if(tt!==void 0){if(B.currentProgram===tt&&B.lightsStateVersion===Me)return Xu(v,be),tt}else be.uniforms=ue.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,H,be),v.onBeforeCompile(be,I),tt=ue.acquireProgram(be,we),Ce.set(we,tt),B.uniforms=be.uniforms;let Ee=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=Le.uniform),Xu(v,be),B.needsLights=Am(v),B.lightsStateVersion=Me,B.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.sunLights.value=O.state.sun,Ee.sunLightShadows.value=O.state.sunShadow,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.sunShadowMatrix.value=O.state.sunShadowMatrix,Ee.sunShadowCascade.value=O.state.sunShadowCascade,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=tt,B.uniformsList=null,tt}function qu(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=nr.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Xu(v,L){let H=G.get(v);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function pm(v,L){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;b.setFromMatrixPosition(L.matrixWorld);for(let H=0,B=v.length;H<B;H++){let O=v[H];if(O.texture!==null&&O.boundingBox.containsPoint(b))return O}return null}function mm(v,L,H,B,O){L.isScene!==!0&&(L=Ue),X.resetTextureUnits();let xe=L.fog,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,be=ie===null?I.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:je.workingColorSpace,we=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ce=ce.get(B.envMap||Me,we),Ke=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,tt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!H.morphAttributes.position,ot=!!H.morphAttributes.normal,Rt=!!H.morphAttributes.color,_t=Ln;B.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(_t=I.toneMapping);let gt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ht=gt!==void 0?gt.length:0,ye=G.get(B),Yt=S.state.lights;if(se===!0&&(re===!0||v!==Z)){let xt=v===Z&&B.id===q;Le.setState(B,v,xt)}let it=!1;B.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Yt.state.version||ye.outputColorSpace!==be||O.isBatchedMesh&&ye.batching===!1||!O.isBatchedMesh&&ye.batching===!0||O.isBatchedMesh&&ye.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&ye.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&ye.instancing===!1||!O.isInstancedMesh&&ye.instancing===!0||O.isSkinnedMesh&&ye.skinning===!1||!O.isSkinnedMesh&&ye.skinning===!0||O.isInstancedMesh&&ye.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ye.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ye.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ye.instancingMorph===!1&&O.morphTexture!==null||ye.envMap!==Ce||B.fog===!0&&ye.fog!==xe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Le.numPlanes||ye.numIntersection!==Le.numIntersection)||ye.vertexAlphas!==Ke||ye.vertexTangents!==tt||ye.morphTargets!==Ee||ye.morphNormals!==ot||ye.morphColors!==Rt||ye.toneMapping!==_t||ye.morphTargetsCount!==Ht||!!ye.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,ye.__version=B.version);let An=ye.currentProgram;it===!0&&(An=ya(B,L,O),z&&B.isNodeMaterial&&z.onUpdateProgram(B,An,ye));let Un=!1,Ai=!1,ds=!1,mt=An.getUniforms(),St=ye.uniforms;if(A.useProgram(An.program)&&(Un=!0,Ai=!0,ds=!0),B.id!==q&&(q=B.id,Ai=!0),ye.needsLights){let xt=pm(S.state.lightProbeGridArray,O);ye.lightProbeGrid!==xt&&(ye.lightProbeGrid=xt,Ai=!0)}if(Un||Z!==v){A.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),mt.setValue(R,"projectionMatrix",v.projectionMatrix),mt.setValue(R,"viewMatrix",v.matrixWorldInverse);let xi=mt.map.cameraPosition;xi!==void 0&&xi.setValue(R,he.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&mt.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&mt.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),Z!==v&&(Z=v,Ai=!0,ds=!0)}if(ye.needsLights&&(Yt.state.sunShadowMap.length>0&&mt.setValue(R,"sunShadowMap",Yt.state.sunShadowMap,X),Yt.state.directionalShadowMap.length>0&&mt.setValue(R,"directionalShadowMap",Yt.state.directionalShadowMap,X),Yt.state.spotShadowMap.length>0&&mt.setValue(R,"spotShadowMap",Yt.state.spotShadowMap,X),Yt.state.pointShadowMap.length>0&&mt.setValue(R,"pointShadowMap",Yt.state.pointShadowMap,X)),O.isSkinnedMesh){mt.setOptional(R,O,"bindMatrix"),mt.setOptional(R,O,"bindMatrixInverse");let xt=O.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),mt.setValue(R,"boneTexture",xt.boneTexture,X))}O.isBatchedMesh&&(mt.setOptional(R,O,"batchingTexture"),mt.setValue(R,"batchingTexture",O._matricesTexture,X),mt.setOptional(R,O,"batchingIdTexture"),mt.setValue(R,"batchingIdTexture",O._indirectTexture,X),mt.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&mt.setValue(R,"batchingColorTexture",O._colorsTexture,X));let bi=H.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&D.update(O,H,An),(Ai||ye.receiveShadow!==O.receiveShadow)&&(ye.receiveShadow=O.receiveShadow,mt.setValue(R,"receiveShadow",O.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(St.envMapIntensity.value=L.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=X_()),Ai){if(mt.setValue(R,"toneMappingExposure",I.toneMappingExposure),ye.needsLights&&gm(St,ds),xe&&B.fog===!0&&Pe.refreshFogUniforms(St,xe),Pe.refreshMaterialUniforms(St,B,$,K,S.state.transmissionRenderTarget[v.id]),ye.needsLights&&ye.lightProbeGrid){let xt=ye.lightProbeGrid;St.probesSH.value=xt.texture,St.probesMin.value.copy(xt.boundingBox.min),St.probesMax.value.copy(xt.boundingBox.max),St.probesResolution.value.copy(xt.resolution)}nr.upload(R,qu(ye),St,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(nr.upload(R,qu(ye),St,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&mt.setValue(R,"center",O.center),mt.setValue(R,"modelViewMatrix",O.modelViewMatrix),mt.setValue(R,"normalMatrix",O.normalMatrix),mt.setValue(R,"modelMatrix",O.matrixWorld),B.uniformsGroups!==void 0){let xt=B.uniformsGroups;for(let xi=0,fs=xt.length;xi<fs;xi++){let Ku=xt[xi];ne.update(Ku,An),ne.bind(Ku,An)}}return An}function gm(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.sunLights.needsUpdate=L,v.sunLightShadows.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Am(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(v,L,H){let B=G.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=L,G.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let H=G.get(v);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,H=0){ie=v,Y=L,W=H;let B=null,O=!1,xe=!1;if(v){let be=G.get(v);if(be.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(R.FRAMEBUFFER,be.__webglFramebuffer),te.copy(v.viewport),Ie.copy(v.scissor),Se=v.scissorTest,A.viewport(te),A.scissor(Ie),A.setScissorTest(Se),q=-1;return}else if(be.__webglFramebuffer===void 0)X.setupRenderTarget(v);else if(be.__hasExternalTextures)X.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ke=v.depthTexture;if(be.__boundDepthTexture!==Ke){if(Ke!==null&&G.has(Ke)&&(v.width!==Ke.image.width||v.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(v)}}let we=v.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);let Ce=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ce[L])?B=Ce[L][H]:B=Ce[L],O=!0):v.samples>0&&X.useMultisampledRTT(v)===!1?B=G.get(v).__webglMultisampledFramebuffer:Array.isArray(Ce)?B=Ce[H]:B=Ce,te.copy(v.viewport),Ie.copy(v.scissor),Se=v.scissorTest}else te.copy(ve).multiplyScalar($).floor(),Ie.copy(Ve).multiplyScalar($).floor(),Se=lt;if(H!==0&&(B=V),A.bindFramebuffer(R.FRAMEBUFFER,B)&&A.drawBuffers(v,B),A.viewport(te),A.scissor(Ie),A.setScissorTest(Se),O){let be=G.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,H)}else if(xe){let be=L;for(let we=0;we<v.textures.length;we++){let Ce=G.get(v.textures[we]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+we,Ce.__webglTexture,H,be)}}else if(v!==null&&H!==0){let be=G.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,be.__webglTexture,H)}q=-1};function Ju(v){let L=G.get(v);return(L.__readFormat!==v.format||L.__readType!==v.type)&&(L.__readFormat=v.format,L.__readType=v.type,L.__formatReadable=E.textureFormatReadable(v.format),L.__typeReadable=E.textureTypeReadable(v.type)),L}this.readRenderTargetPixels=function(v,L,H,B,O,xe,Me,be=0){if(!(v&&v.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){A.bindFramebuffer(R.FRAMEBUFFER,we);try{let Ce=v.textures[be],Ke=Ce.format,tt=Ce.type;v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+be);let Ee=Ju(Ce);if(Ee.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-B&&H>=0&&H<=v.height-O&&R.readPixels(L,H,B,O,pe.convert(Ke),pe.convert(tt),xe)}finally{let Ce=ie!==null?G.get(ie).__webglFramebuffer:null;A.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,L,H,B,O,xe,Me,be=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(L>=0&&L<=v.width-B&&H>=0&&H<=v.height-O){A.bindFramebuffer(R.FRAMEBUFFER,we);let Ce=v.textures[be],Ke=Ce.format,tt=Ce.type;v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+be);let Ee=Ju(Ce);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ot),R.bufferData(R.PIXEL_PACK_BUFFER,xe.byteLength,R.STREAM_READ),R.readPixels(L,H,B,O,pe.convert(Ke),pe.convert(tt),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let Rt=ie!==null?G.get(ie).__webglFramebuffer:null;A.bindFramebuffer(R.FRAMEBUFFER,Rt);let _t=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ef(R,_t,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ot),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,xe),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(ot),R.deleteSync(_t),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,H=0){let B=Math.pow(2,-H),O=Math.floor(v.image.width*B),xe=Math.floor(v.image.height*B),Me=L!==null?L.x:0,be=L!==null?L.y:0;X.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,Me,be,O,xe),A.unbindTexture()},this.copyTextureToTexture=function(v,L,H=null,B=null,O=0,xe=0){let Me,be,we,Ce,Ke,tt,Ee,ot,Rt,_t=v.isCompressedTexture?v.mipmaps[xe]:v.image;if(H!==null)Me=H.max.x-H.min.x,be=H.max.y-H.min.y,we=H.isBox3?H.max.z-H.min.z:1,Ce=H.min.x,Ke=H.min.y,tt=H.isBox3?H.min.z:0;else{let St=Math.pow(2,-O);Me=Math.floor(_t.width*St),be=Math.floor(_t.height*St),v.isDataArrayTexture?we=_t.depth:v.isData3DTexture?we=Math.floor(_t.depth*St):we=1,Ce=0,Ke=0,tt=0}B!==null?(Ee=B.x,ot=B.y,Rt=B.z):(Ee=0,ot=0,Rt=0);let gt=pe.convert(L.format),Ht=pe.convert(L.type),ye;L.isData3DTexture?(X.setTexture3D(L,0),ye=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(X.setTexture2DArray(L,0),ye=R.TEXTURE_2D_ARRAY):(X.setTexture2D(L,0),ye=R.TEXTURE_2D),A.activeTexture(R.TEXTURE0),A.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);let Yt=A.getParameter(R.UNPACK_ROW_LENGTH),it=A.getParameter(R.UNPACK_IMAGE_HEIGHT),An=A.getParameter(R.UNPACK_SKIP_PIXELS),Un=A.getParameter(R.UNPACK_SKIP_ROWS),Ai=A.getParameter(R.UNPACK_SKIP_IMAGES);A.pixelStorei(R.UNPACK_ROW_LENGTH,_t.width),A.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_t.height),A.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),A.pixelStorei(R.UNPACK_SKIP_ROWS,Ke),A.pixelStorei(R.UNPACK_SKIP_IMAGES,tt);let ds=v.isDataArrayTexture||v.isData3DTexture,mt=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let St=G.get(v),bi=G.get(L),xt=G.get(St.__renderTarget),xi=G.get(bi.__renderTarget);A.bindFramebuffer(R.READ_FRAMEBUFFER,xt.__webglFramebuffer),A.bindFramebuffer(R.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let fs=0;fs<we;fs++)ds&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,G.get(v).__webglTexture,O,tt+fs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,G.get(L).__webglTexture,xe,Rt+fs)),R.blitFramebuffer(Ce,Ke,Me,be,Ee,ot,Me,be,R.DEPTH_BUFFER_BIT,R.NEAREST);A.bindFramebuffer(R.READ_FRAMEBUFFER,null),A.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||G.has(v)){let St=G.get(v),bi=G.get(L);A.bindFramebuffer(R.READ_FRAMEBUFFER,N),A.bindFramebuffer(R.DRAW_FRAMEBUFFER,k);for(let xt=0;xt<we;xt++)ds?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,St.__webglTexture,O,tt+xt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,St.__webglTexture,O),mt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bi.__webglTexture,xe,Rt+xt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bi.__webglTexture,xe),O!==0?R.blitFramebuffer(Ce,Ke,Me,be,Ee,ot,Me,be,R.COLOR_BUFFER_BIT,R.NEAREST):mt?R.copyTexSubImage3D(ye,xe,Ee,ot,Rt+xt,Ce,Ke,Me,be):R.copyTexSubImage2D(ye,xe,Ee,ot,Ce,Ke,Me,be);A.bindFramebuffer(R.READ_FRAMEBUFFER,null),A.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else mt?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(ye,xe,Ee,ot,Rt,Me,be,we,gt,Ht,_t.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(ye,xe,Ee,ot,Rt,Me,be,we,gt,_t.data):R.texSubImage3D(ye,xe,Ee,ot,Rt,Me,be,we,gt,Ht,_t):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,xe,Ee,ot,Me,be,gt,Ht,_t.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,xe,Ee,ot,_t.width,_t.height,gt,_t.data):R.texSubImage2D(R.TEXTURE_2D,xe,Ee,ot,Me,be,gt,Ht,_t);A.pixelStorei(R.UNPACK_ROW_LENGTH,Yt),A.pixelStorei(R.UNPACK_IMAGE_HEIGHT,it),A.pixelStorei(R.UNPACK_SKIP_PIXELS,An),A.pixelStorei(R.UNPACK_SKIP_ROWS,Un),A.pixelStorei(R.UNPACK_SKIP_IMAGES,Ai),xe===0&&L.generateMipmaps&&R.generateMipmap(ye),A.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&X.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?X.setTextureCube(v,0):v.isData3DTexture?X.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?X.setTexture2DArray(v,0):X.setTexture2D(v,0),A.unbindTexture()},this.resetState=function(){Y=0,W=0,ie=null,A.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}});function rr(i){return new Xr({color:0,emissive:16777215,emissiveIntensity:i})}var ar,kh=bn(()=>{mi();ar=class extends Rn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Wn;e.deleteAttribute("uv");let t=new Gt({side:zt}),n=new Gt,s=new di(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new pt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Hn(e,n,6),o=new ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new pt(e,rr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new pt(e,rr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new pt(e,rr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new pt(e,rr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new pt(e,rr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new pt(e,rr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var hp={};Ma(hp,{Stage:()=>Gh,watchBox:()=>da});function da(i,e){let t={w:i.clientWidth,h:i.clientHeight,visible:!1};return new ResizeObserver(n=>{let s=n[0].contentRect;t.w=s.width,t.h=s.height,e&&e(t)}).observe(i),new IntersectionObserver(n=>{t.visible=n[0].isIntersecting},{rootMargin:"80px"}).observe(i),t}var Gh,Ic=bn(()=>{mi();kh();Gh=class{constructor({dpr:e=1.5}={}){this.canvas=document.createElement("canvas"),this.renderer=new ir({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"default"}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(1),this.renderer.autoClear=!1,this.renderer.setScissorTest(!0),this.dpr=e,this.bw=0,this.bh=0,this._env=null}get env(){if(!this._env){let e=new Gi(this.renderer);this._env=e.fromScene(new ar,.04).texture,e.dispose()}return this._env}setDpr(e){this.dpr=e}_ensure(e,t){e<=this.bw&&t<=this.bh||(this.bw=Math.max(this.bw,Math.ceil(e/64)*64),this.bh=Math.max(this.bh,Math.ceil(t/64)*64),this.renderer.setSize(this.bw,this.bh,!1))}draw(e,t,n,s,r){let a=Math.max(1,Math.round(s*this.dpr)),o=Math.max(1,Math.round(r*this.dpr));this._ensure(a,o),(e.width!==a||e.height!==o)&&(e.width=a,e.height=o);let c=this.renderer;c.setViewport(0,0,a,o),c.setScissor(0,0,a,o),c.clear(),n.aspect=s/r,n.updateProjectionMatrix(),c.render(t,n);let l=e._ctx||(e._ctx=e.getContext("2d"));l.clearRect(0,0,a,o),l.drawImage(this.canvas,0,this.bh-o,a,o,0,0,a,o)}}});function up(i=10){let e=new Pi;e.moveTo(5,5),e.bezierCurveTo(5,5,4,0,0,0),e.bezierCurveTo(-6,0,-6,7,-6,7),e.bezierCurveTo(-6,11,-3,15.4,5,19),e.bezierCurveTo(12,15.4,16,11,16,7),e.bezierCurveTo(16,7,16,0,10,0),e.bezierCurveTo(7,0,5,5,5,5);let t=new Wr(e,{depth:3.2,bevelEnabled:!0,bevelThickness:2.2,bevelSize:1.6,bevelSegments:4,curveSegments:i});return t.center(),t.rotateZ(Math.PI),t.scale(1/22,1/22,1/22),t.computeVertexNormals(),t}function dp(){let i=new Pi;i.moveTo(0,-.5),i.bezierCurveTo(.46,-.32,.56,.2,.18,.46),i.quadraticCurveTo(0,.56,-.18,.46),i.bezierCurveTo(-.56,.2,-.46,-.32,0,-.5);let e=new qr(i,10),t=e.attributes.position;for(let n=0;n<t.count;n++){let s=t.getX(n),r=t.getY(n);t.setZ(n,.55*s*s+.12*(r+.5)*(r+.5))}return e.computeVertexNormals(),e}var fp=bn(()=>{mi()});var mp={};Ma(mp,{World3D:()=>Vh});function $_(i){return 1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)}var J_,pp,K_,ke,zh,Y_,j_,Q_,Z_,Vh,gp=bn(()=>{mi();kh();fp();J_=["#c9a15f","#d8bf8f","#e2b4ae","#c98a93","#fff6e6","#b76e79","#9b4a58"],pp=["#8d0f2c","#6e2a35","#b76e79","#d9a9a4","#e8c3be","#c9a15f"],K_=["#e8c3be","#d9a9a4","#f3e3dc","#c98a93","#fbf3ea","#8d0f2c"],ke=(i,e)=>i+Math.random()*(e-i),zh=i=>i[Math.random()*i.length|0],Y_=`
attribute float aSize; attribute float aPhase; attribute float aSpeed; attribute vec3 aColor;
uniform float uTime; uniform float uPixel; uniform float uBeat; uniform float uLevel; uniform float uBass;
uniform float uHeight; uniform float uCamY;
varying vec3 vColor; varying float vAlpha;
void main() {
  vec3 p = position;
  float h = uHeight;
  p.y = mod(p.y + uTime * aSpeed - uCamY + h * 0.5, h) - h * 0.5 + uCamY;
  p.x += sin(uTime * 0.25 + aPhase * 6.2831) * 0.35;
  p.z += cos(uTime * 0.2 + aPhase * 4.0) * 0.25;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float tw = 0.55 + 0.45 * sin(uTime * (1.2 + aPhase) + aPhase * 6.2831);
  float s = aSize * (1.0 + uBass * 0.9 + uBeat * 0.7);
  gl_PointSize = s * uPixel * (20.0 / -mv.z);
  vColor = aColor;
  float edge = smoothstep(h * 0.5, h * 0.38, abs(p.y - uCamY));
  vAlpha = tw * (0.5 + uLevel * 0.35 + uBeat * 0.35) * edge;
}`,j_=`
varying vec3 vColor; varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = pow(smoothstep(0.5, 0.0, d), 1.7);
  float core = smoothstep(0.16, 0.0, d);
  vec3 c = vColor + core * 0.35;
  float alpha = a * vAlpha;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(c, alpha);
}`,Q_=`
attribute float aSize; attribute float aAlpha; attribute vec3 aColor;
uniform float uPixel;
varying vec3 vColor; varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPixel * (18.0 / -mv.z);
  vColor = aColor; vAlpha = aAlpha;
}`,Z_=`
varying vec3 vColor; varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float star = max(0.0, 1.0 - abs(c.x * c.y) * 60.0) * smoothstep(0.5, 0.0, d);
  float a = max(pow(smoothstep(0.5, 0.0, d), 2.2), star * 0.8) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor + smoothstep(0.15, 0.0, d) * 0.4, a);
}`,Vh=class{constructor(e,{reduced:t=!1,mobile:n=!1,quality:s}={}){this.canvas=e,this.reduced=t,this.mobile=n,this.renderer=new ir({canvas:e,alpha:!0,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setClearColor(0,0),this.q=s||{worldDpr:1,dust:1,petals:1,roses:4},this.dpr=Math.min(window.devicePixelRatio||1,this.q.worldDpr),this.renderer.setPixelRatio(this.dpr),this.scene=new Rn;try{let r=new Gi(this.renderer);this.scene.environment=r.fromScene(new ar,.04).texture,this.scene.environmentIntensity=.55,r.dispose()}catch{}this.camera=new vt(50,1,.1,60),this.camera.position.set(0,0,10),this.camY=0,this.look=new P,this.time=0,this.hemi=new ui(16774894,15123390,.8),this.key=new Pn(16773600,1.8),this.key.position.set(3,5,7),this.rim=new di(14264740,18,30,1.6),this.rim.position.set(-5,-2,4),this.scene.add(this.hemi,this.key,this.rim),this._buildDust(),this._buildPetals(),this._buildHearts(),this._buildSparks(),this.raycaster=new ts,this.plane=new hn(new P(0,0,1),0),this._v2=new oe,this._v3=new P,this._o=new ft,this.resize()}_buildDust(){let e=this.mobile?170:320;this.dustH=16;let t=new Float32Array(e*3),n=new Float32Array(e),s=new Float32Array(e),r=new Float32Array(e),a=new Float32Array(e*3),o=new De;for(let h=0;h<e;h++)t[h*3]=ke(-11,11),t[h*3+1]=ke(-this.dustH/2,this.dustH/2),t[h*3+2]=ke(-8,4.5),n[h]=Math.random()<.14?ke(8,15):ke(1.6,5),s[h]=Math.random(),r[h]=ke(.05,.22),o.set(zh(J_)),a.set([o.r,o.g,o.b],h*3);let c=new Tt;c.setAttribute("position",new ut(t,3)),c.setAttribute("aSize",new ut(n,1)),c.setAttribute("aPhase",new ut(s,1)),c.setAttribute("aSpeed",new ut(r,1)),c.setAttribute("aColor",new ut(a,3)),this.dustU={uTime:{value:0},uPixel:{value:this.dpr},uBeat:{value:0},uLevel:{value:0},uBass:{value:0},uHeight:{value:this.dustH},uCamY:{value:0}};let l=new Ot({uniforms:this.dustU,vertexShader:Y_,fragmentShader:j_,transparent:!0,depthWrite:!1,blending:Ni});this.dust=new Ri(c,l),this.dust.frustumCulled=!1,this.dustCount=e,this.scene.add(this.dust)}_buildPetals(){let e=this.mobile?16:26,t=new Gt({roughness:.55,metalness:0,side:an,transparent:!0,opacity:.92});this.petals=new Hn(dp(),t,e),this.petals.instanceMatrix.setUsage(ki),this.petals.frustumCulled=!1,this.petalState=[];let n=new De;for(let s=0;s<e;s++)this.petalState.push({x:ke(-9,9),y:ke(-8,8),z:ke(-6,3),vy:ke(.18,.45),sway:ke(.4,1.1),sp:ke(.3,.9),ph:ke(0,6.28),rx:ke(0,6.28),ry:ke(0,6.28),rz:ke(0,6.28),wx:ke(-.9,.9),wy:ke(-.7,.7),wz:ke(-.6,.6),s:ke(.42,.78)}),this.petals.setColorAt(s,n.set(zh(K_)));this.scene.add(this.petals)}_buildHearts(){let t=new Gt({roughness:.28,metalness:.08,envMapIntensity:1.3});this.hearts=new Hn(up(this.mobile?8:12),t,90),this.hearts.instanceMatrix.setUsage(ki),this.hearts.frustumCulled=!1,this.heartState=[];let n=new ft;n.scale.setScalar(0),n.updateMatrix();let s=new De;for(let r=0;r<90;r++)this.heartState.push({alive:!1,age:0,life:1,p:new P,v:new P,r:new P,w:new P,s:1,ph:0}),this.hearts.setMatrixAt(r,n.matrix),this.hearts.setColorAt(r,s.set(pp[r%pp.length]));this.heartCursor=0,this.scene.add(this.hearts)}_buildSparks(){this.sparkN=260;let t=new Tt;this.sparkPos=new Float32Array(260*3),this.sparkAlpha=new Float32Array(260),this.sparkSize=new Float32Array(260),this.sparkCol=new Float32Array(260*3),this.sparkState=Array.from({length:260},()=>({alive:!1,age:0,life:1,v:new P,s:1})),t.setAttribute("position",new ut(this.sparkPos,3).setUsage(ki)),t.setAttribute("aAlpha",new ut(this.sparkAlpha,1).setUsage(ki)),t.setAttribute("aSize",new ut(this.sparkSize,1).setUsage(ki)),t.setAttribute("aColor",new ut(this.sparkCol,3).setUsage(ki)),this.sparkU={uPixel:{value:this.dpr}};let n=new Ot({uniforms:this.sparkU,vertexShader:Q_,fragmentShader:Z_,transparent:!0,depthWrite:!1});this.sparks=new Ri(t,n),this.sparks.frustumCulled=!1,this.sparkCursor=0,this.scene.add(this.sparks)}addRoses(e){let t=Math.min(this.mobile?3:4,this.q.roses);this.roses=[],this.roseTemplate=e,e.traverse(s=>{s.isMesh&&s.material&&(s.material=s.material.clone(),s.material.color.setScalar(1.45),s.material.roughness=.65,s.material.envMapIntensity=1.2)});let n=()=>(Math.random()<.5?-1:1)*ke(this.mobile?1.9:3.2,this.mobile?3.4:6.5);for(let s=0;s<t;s++){let r=e.clone(!0),a={obj:r,x:n(),y:this.camY+s/t*18-9,z:ke(-3.5,.6),side:n,vy:ke(.12,.24),ph:ke(0,6.28),sway:ke(.2,.5),rx:ke(0,6.28),ry:ke(0,6.28),wx:ke(-.3,.3),wy:ke(-.45,.45),s:ke(1.3,2)};r.scale.setScalar(1e-4),this.scene.add(r),this.roses.push(a)}this.roseIn=0}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e<t?58:48,this.camera.updateProjectionMatrix(),this.reduced&&this.render()}screenToWorld(e,t,n){return this._v2.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),this.raycaster.setFromCamera(this._v2,this.camera),this.plane.constant=0,this.raycaster.ray.intersectPlane(this.plane,n)||n.set(0,this.camY,0)}burst(e,t,{count:n=14,power:s=1,sparks:r=26}={}){if(this.reduced)return;let a=this.screenToWorld(e,t,new P);for(let c=0;c<n;c++){let l=this.heartState[this.heartCursor];this.heartCursor=(this.heartCursor+1)%this.heartState.length;let h=ke(0,Math.PI*2),u=ke(1.6,4.2)*s;l.alive=!0,l.age=0,l.life=ke(2.2,3.6),l.p.copy(a).add(this._v3.set(ke(-.15,.15),ke(-.15,.15),ke(-.3,.3))),l.v.set(Math.cos(h)*u,Math.sin(h)*u*.8+1.4*s,ke(-1.2,2.2)*s),l.r.set(ke(-.4,.4),ke(-.6,.6),ke(-.3,.3)),l.w.set(ke(-1.5,1.5),ke(-3,3),ke(-1.2,1.2)),l.s=ke(.22,.46)*(.8+s*.25),l.ph=ke(0,6.28)}let o=new De;for(let c=0;c<r;c++){let l=this.sparkCursor;this.sparkCursor=(this.sparkCursor+1)%this.sparkN;let h=this.sparkState[l],u=ke(0,Math.PI*2),d=ke(1.5,6)*s;h.alive=!0,h.age=0,h.life=ke(.7,1.6),h.s=ke(3,9),h.v.set(Math.cos(u)*d,Math.sin(u)*d+.8,ke(-1,2)),this.sparkPos.set([a.x,a.y,a.z],l*3),o.set(zh(["#c9a15f","#e6c98f","#fff3dc","#d9a9a4"])),this.sparkCol.set([o.r,o.g,o.b],l*3)}this.sparks.geometry.attributes.aColor.needsUpdate=!0}update(e,t,n,s){if(this.reduced&&this._renderedOnce)return;this.time+=e;let r=this.time,a=-s*.0035;this.camY+=(a-this.camY)*(1-Math.exp(-e*6));let o=n.x*.7,c=this.camY+n.y*-.45;this.camera.position.x+=(o-this.camera.position.x)*(1-Math.exp(-e*2.5)),this.camera.position.y+=(c-this.camera.position.y)*(1-Math.exp(-e*2.5)),this.look.set(0,this.camY,0),this.camera.lookAt(this.look);let l=t.beat,h=t.level,u=this.dustU;u.uTime.value=r,u.uBeat.value=l,u.uLevel.value=h,u.uBass.value=t.bass,u.uCamY.value=this.camY,this.key.intensity=1.6+l*1.1+h*.4,this.rim.intensity=14+l*30+t.mid*10;let d=this._o,f=18;for(let m=0;m<this.petals.count;m++){let p=this.petalState[m];p.y-=p.vy*e*(1+t.level*.6),p.y<this.camY-f/2&&(p.y+=f,p.x=ke(-9,9)),p.y>this.camY+f/2&&(p.y-=f),p.rx+=p.wx*e,p.ry+=p.wy*e,p.rz+=p.wz*e,d.position.set(p.x+Math.sin(r*p.sp+p.ph)*p.sway,p.y,p.z),d.rotation.set(p.rx,p.ry,p.rz+Math.sin(r*p.sp+p.ph)*.6),d.scale.setScalar(p.s*(1+l*.08)),d.updateMatrix(),this.petals.setMatrixAt(m,d.matrix)}if(this.petals.instanceMatrix.needsUpdate=!0,this.roses){this.roseIn=Math.min(1,this.roseIn+e*.5);for(let m of this.roses)m.obj.visible&&(m.y-=m.vy*e,m.y<this.camY-9&&(m.y+=18,m.x=m.side()),m.y>this.camY+9&&(m.y-=18),m.rx+=m.wx*e,m.ry+=m.wy*e,m.obj.position.set(m.x+Math.sin(r*.4+m.ph)*m.sway,m.y,m.z),m.obj.rotation.set(m.rx,m.ry,Math.sin(r*.3+m.ph)*.3),m.obj.scale.setScalar(m.s*this.roseIn*(1+l*.05)))}let g=!1;for(let m=0;m<this.heartState.length;m++){let p=this.heartState[m];if(!p.alive)continue;g=!0,p.age+=e;let y=p.age/p.life;if(y>=1){p.alive=!1,d.scale.setScalar(0),d.updateMatrix(),this.hearts.setMatrixAt(m,d.matrix);continue}let w=Math.exp(-e*2.4);p.v.multiplyScalar(w),p.v.y+=1.1*e,p.v.x+=Math.sin(r*2.2+p.ph)*.9*e,p.p.addScaledVector(p.v,e),p.r.addScaledVector(p.w,e),p.w.multiplyScalar(Math.exp(-e*.8));let b=y<.12?$_(y/.12):1,M=y>.72?1-(y-.72)/.28:1;d.position.copy(p.p),d.rotation.set(p.r.x,p.r.y+Math.sin(r*1.5+p.ph)*.4,p.r.z),d.scale.setScalar(Math.max(1e-4,p.s*b*M*(1+l*.12))),d.updateMatrix(),this.hearts.setMatrixAt(m,d.matrix)}g&&(this.hearts.instanceMatrix.needsUpdate=!0),this.hearts.visible=g;let _=!1;for(let m=0;m<this.sparkN;m++){let p=this.sparkState[m];if(!p.alive)continue;_=!0,p.age+=e;let y=p.age/p.life;if(y>=1){p.alive=!1,this.sparkAlpha[m]=0;continue}p.v.multiplyScalar(Math.exp(-e*3.2)),p.v.y-=.6*e,this.sparkPos[m*3]+=p.v.x*e,this.sparkPos[m*3+1]+=p.v.y*e,this.sparkPos[m*3+2]+=p.v.z*e,this.sparkAlpha[m]=(1-y)*(.6+.4*Math.sin(p.age*30+m)),this.sparkSize[m]=p.s*(1-y*.5)}if(this.sparks.visible=_,_){let m=this.sparks.geometry.attributes;m.position.needsUpdate=m.aAlpha.needsUpdate=m.aSize.needsUpdate=!0}this.render()}render(){this.renderer.render(this.scene,this.camera),this._renderedOnce=!0}setQuality(e){if(this.q=e,this.dpr=Math.min(window.devicePixelRatio||1,e.worldDpr),this.renderer.setPixelRatio(this.dpr),this.dustU.uPixel.value=this.dpr,this.sparkU.uPixel.value=this.dpr,this.dust.geometry.setDrawRange(0,Math.floor(this.dustCount*e.dust)),this.petals.count=Math.max(4,Math.floor(this.petalState.length*e.petals)),this.roses){let t=Math.min(this.roses.length,e.roses);this.roses.forEach((n,s)=>{n.obj.visible=s<t})}this.resize()}}});var Ap={};Ma(Ap,{Gallery3D:()=>Hh});var ev,tv,or,Hh,bp=bn(()=>{Ic();mi();ev=`
varying vec2 vUv;
uniform vec2 uRepeat; uniform vec2 uOffset;
void main() { vUv = uv * uRepeat + uOffset; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,tv=`
uniform sampler2D map; uniform float uSat; uniform float uGlow; uniform float uFade;
varying vec2 vUv;
void main() {
  vec4 c = texture2D(map, vUv);
  float g = dot(c.rgb, vec3(0.299, 0.587, 0.114));
  vec3 sepia = vec3(g) * vec3(1.06, 0.98, 0.88);
  vec3 col = mix(sepia, c.rgb, uSat);
  col += vec3(0.06, 0.035, 0.03) * uGlow;
  col = mix(vec3(0.96, 0.94, 0.91), col, uFade);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,or=Math.PI*2,Hh=class{constructor(e,t,n,{reduced:s=!1,onTap:r}={}){this.canvas=e,this.stage=n,this.reduced=s,this.onTap=r,this.box=da(e,()=>this.resize()),this.scene=new Rn,this.camera=new vt(32,1,.1,50),this.ring=new Xt,this.scene.add(this.ring),this.scene.add(new ui(16775922,15323081,1.6));let a=new Pn(16777215,1.4);a.position.set(2,4,6),this.scene.add(a),this.R=1.75,this.step=or/t.length,this.angle=0,this.target=0,this.vel=0,this.idle=0,this.index=0,this.frames=[];let o=new $i,c=this._backTexture(),l=new Gt({color:16645370,roughness:.85}),h=new Gt({color:16777215,roughness:.9,map:c});t.forEach((d,f)=>{let g={group:new Xt,uni:null,sat:0,ready:!1},_={map:{value:null},uSat:{value:0},uGlow:{value:0},uFade:{value:0},uRepeat:{value:new oe(1,1)},uOffset:{value:new oe(0,0)}};g.uni=_,this._buildFrame(g,.75,l,h),o.load(d,p=>{p.colorSpace=Mt,p.minFilter=fn,p.anisotropy=Math.min(4,this.stage.renderer.capabilities.getMaxAnisotropy()),_.map.value=p;let y=p.image.width/p.image.height;this._buildFrame(g,y,l,h),g.ready=!0});let m=f*this.step;g.group.position.set(Math.sin(m)*this.R,0,Math.cos(m)*this.R),g.group.rotation.y=m,g.theta=m,g.bob=Math.random()*or,this.ring.add(g.group),this.frames.push(g)});let u=new pt(new Li(4.6,3.2),new Gt({map:this._shadowTexture(),transparent:!0,depthWrite:!1,color:7219765,opacity:.3}));u.rotation.x=-Math.PI/2,u.position.y=-1.32,this.scene.add(u),this._bindInput(),this.resize()}_buildFrame(e,t,n,s){e.group.clear();let r=1.62,a=1.62,o=a*t,c=a;o>r&&(o=r,c=r/t);let l=.085,h=.085,u=.34,d=o+l*2,f=c+h+u,g=new pt(new Wn(d,f,.035),[n,n,n,n,n,s]),_=new pt(new Li(o,c),new Ot({uniforms:e.uni,vertexShader:ev,fragmentShader:tv}));_.position.set(0,(u-h)/2,.019),g.userData.frame=e,_.userData.frame=e,e.group.add(g,_),e.hit=[g,_]}_backTexture(){let e=document.createElement("canvas");e.width=512,e.height=640;let t=e.getContext("2d"),n=()=>{t.fillStyle="#fbf8f3",t.fillRect(0,0,512,640),t.strokeStyle="rgba(184,147,90,.55)",t.lineWidth=3,t.strokeRect(34,34,444,572),t.fillStyle="#6e2a35",t.textAlign="center",t.font='150px "Luxurious Script", cursive',t.fillText("J & S",256,340),t.font='500 26px "Jost", sans-serif',t.fillStyle="#5f6b47",t.fillText("1 0 \xB7 0 4 \xB7 2 0 2 7",256,430)};n();let s=new Ws(e);return s.colorSpace=Mt,document.fonts&&document.fonts.load&&Promise.all([document.fonts.load('150px "Luxurious Script"'),document.fonts.load('500 26px "Jost"')]).then(()=>{n(),s.needsUpdate=!0}).catch(()=>{}),s}_shadowTexture(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,"rgba(255,255,255,.9)"),n.addColorStop(.5,"rgba(255,255,255,.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new Ws(e)}_bindInput(){let e=this.canvas,t=null;e.addEventListener("pointerdown",s=>{t={x:s.clientX,y:s.clientY,t:performance.now(),last:s.clientX,lastT:performance.now(),drag:!1,id:s.pointerId}}),e.addEventListener("pointermove",s=>{if(!t||s.pointerId!==t.id)return;let r=s.clientX-t.last;if(!t.drag&&Math.abs(s.clientX-t.x)>6&&Math.abs(s.clientX-t.x)>Math.abs(s.clientY-t.y)&&(t.drag=!0,e.setPointerCapture(s.pointerId)),t.drag){let a=performance.now(),o=2.6/e.clientWidth*Math.PI;this.angle-=r*o,this.vel=-r*o/Math.max(1,a-t.lastT)*1e3,t.last=s.clientX,t.lastT=a,this.idle=0,this.dragging=!0}});let n=s=>{if(t){if(t.drag){let r=this.angle+this.vel*.25;this.target=Math.round(r/this.step)*this.step}else performance.now()-t.t<450&&this._tap(s);this.dragging=!1,this.vel=0,t=null}};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",()=>{t=null,this.dragging=!1,this.target=Math.round(this.angle/this.step)*this.step})}_tap(e){let t=this.canvas.getBoundingClientRect(),n=new oe((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),s=new ts;s.setFromCamera(n,this.camera);let r=s.intersectObjects(this.frames.flatMap(h=>h.hit||[]),!1);if(!r.length)return;let a=r[0].object.userData.frame,o=this.frames.indexOf(a),l=((a.theta-this.target)%or+or*1.5)%or-or/2;this.target+=l,this.idle=0,this.onTap&&this.onTap(e.clientX,e.clientY,o)}go(e){this.target=Math.round(this.target/this.step)*this.step+e*this.step,this.idle=0}resize(){let e=this.box?this.box.w:this.canvas.clientWidth,t=this.box?this.box.h:this.canvas.clientHeight;if(!e||!t)return;let n=e/t;this.camera.aspect=n;let s=Math.tan(ca.degToRad(this.camera.fov/2)),r=1.45/(s*n),a=1.3/s;this.camDist=this.R+Math.max(r,a),this.camera.position.set(0,.55,this.camDist),this.camera.lookAt(0,-.05,0),this.camera.updateProjectionMatrix()}update(e,t,n){let s=performance.now(),r=Math.min(.25,this._lastT?(s-this._lastT)/1e3:.016);if(this._lastT=s,this.idle+=r,!this.dragging){!this.reduced&&this.idle>4.5&&this.go(1);let c=1-Math.exp(-r*(this.reduced?30:4.2));this.angle+=(this.target-this.angle)*c}this.ring.rotation.y=-this.angle,this.ring.rotation.x=.05+n.y*.04,this.ring.rotation.z=n.x*-.02;let a=(Math.round(this.angle/this.step)%this.frames.length+this.frames.length)%this.frames.length;this.index=a;let o=performance.now()/1e3;this.frames.forEach((c,l)=>{let h=l===a,u=Math.cos(c.theta-this.angle);c.sat+=((h?1:.12)-c.sat)*(1-Math.exp(-r*3)),c.uni.uSat.value=c.sat,c.uni.uGlow.value=t.beat*Math.max(0,u),c.uni.uFade.value=Math.min(1,c.uni.uFade.value+(c.ready?r*1.5:0));let d=this.reduced?0:Math.sin(o*.9+c.bob)*.04;c.group.position.y=d;let f=1+Math.max(0,u)*.06+t.beat*.015*Math.max(0,u);c.group.scale.setScalar(f),c.group.rotation.z=Math.sin(o*.6+c.bob)*.02}),this.box.w>1&&this.box.h>1&&this.stage.draw(this.canvas,this.scene,this.camera,this.box.w,this.box.h)}}});function Wh(i,e){if(e===lh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===$s||e===aa){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===$s)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var xp=bn(()=>{mi()});function _p(i){let e=new Map,t=new Map,n=i.clone();return vp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function vp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)vp(i.children[n],e.children[n],t)}var yp=bn(()=>{});function nv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ct(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function rv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Gt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function os(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function av(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ov(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cv(i){let e,t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jh(t.attributes):e=i.indices+":"+Jh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Jh(i.targets[n]);return e}function Jh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Au(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function uv(i,e,t){let n=e.attributes,s=new Zt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=Au(cr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=Au(cr[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new nn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Ep(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=gu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return je.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Qn(i,e),uv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?av(i,e.targets,t):i})}var Pc,Ze,Kh,Yh,jh,Qh,Zh,$h,eu,tu,nu,iu,su,ru,au,ou,cu,lu,Lc,hu,Tp,fa,Mp,uu,du,fu,pu,Dc,iv,mu,yn,cr,Sp,wp,qh,gu,zi,sv,Xh,hv,bu,Cp=bn(()=>{mi();xp();yp();Pc=class extends Xn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Lc(t,Ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Lc(t,Ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new hu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=fi.extractUrlBase(e);a=fi.resolveURL(l,this.path)}else a=fi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Js(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Tp){try{a[Ze.KHR_BINARY_GLTF]=new uu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new bu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new Yh;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new du(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new fu;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new pu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Kh=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new De(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Qt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Pn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new di(h),l.distance=u;break;case"spot":l=new jr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Qn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Yh=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,n){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}},jh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Qh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},Zh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},eu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Qt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},tu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},nu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],Qt),Promise.all(s)}},iu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],Qt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(s)}},ru=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},au=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},ou=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},cu=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},lu=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Lc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},hu=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==yn.TRIANGLES&&l.mode!==yn.TRIANGLE_STRIP&&l.mode!==yn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let _=new Xe,m=new P,p=new un,y=new P(1,1,1),w=new Hn(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),w.setMatrixAt(M,_.compose(m,p,y));let b=null;for(let M in c)if(M==="_COLOR_0"){let S=c[M];w.instanceColor=new ai(S.array,S.itemSize,S.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(b===null){let C=w.geometry;b=new Tt,b.name=C.name;for(let x in C.attributes)b.setAttribute(x,C.attributes[x]);for(let x in C.morphAttributes)b.morphAttributes[x]=C.morphAttributes[x];C.index!==null&&b.setIndex(C.index),b.morphTargetsRelative=C.morphTargetsRelative;for(let x of C.groups)b.addGroup(x.start,x.count,x.materialIndex);C.boundingBox!==null&&(b.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(b.boundingSphere=C.boundingSphere.clone()),b.drawRange.start=C.drawRange.start,b.drawRange.count=C.drawRange.count,b.userData=Object.assign({},C.userData),w.geometry=b}let S=c[M];b.setAttribute(M,new ai(S.array,S.itemSize,S.normalized))}ft.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Tp="glTF",fa=12,Mp={JSON:1313821514,BIN:5130562},uu=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,fa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-fa,r=new DataView(e,fa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Mp.JSON){let l=new Uint8Array(e,fa+a,o);this.content=n.decode(l)}else if(c===Mp.BIN){let l=fa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},du=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=gu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=gu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=cr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,Qt,d)})})}},fu=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},pu=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},Dc=class extends qn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,y=1-m,w=p-d+u;for(let b=0;b!==o;b++){let M=a[_+b+o],S=a[_+b+c]*h,C=a[g+b+o],x=a[g+b]*h;r[b]=y*M+w*S+m*C+p*x}return r}},iv=new un,mu=class extends Dc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return iv.fromArray(r).normalize().toArray(r),r}},yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sp={9728:wt,9729:Et,9984:ko,9985:js,9986:ss,9987:fn},wp={33071:_n,33648:Is,10497:Ti},qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sv={CUBICSPLINE:void 0,LINEAR:Yi,STEP:Ki},Xh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};hv=new Xe,bu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new $i(this.options.manager):this.textureLoader=new Qr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return os(r,o,s),Qn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(fi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=qh[s.type],o=cr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new ut(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=qh[s.type],l=cr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,w=t.cache.get(y);w||(_=new l(o,p*f,s.count*f/h),w=new Bs(_,f/h),t.cache.add(y,w)),m=new Os(w,c,d%f/h,g)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),m=new ut(_,c,g);if(s.sparse!==void 0){let p=qh.SCALAR,y=cr[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,M=new y(a[1],w,s.sparse.count*p),S=new l(a[2],b,s.sparse.count*c);o!==null&&(m=new ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,x=M.length;C<x;C++){let T=M[C];if(m.setX(T,S[C*c]),c>=2&&m.setY(T,S[C*c+1]),c>=3&&m.setZ(T,S[C*c+2]),c>=4&&m.setW(T,S[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Sp[d.magFilter]||Et,h.minFilter=Sp[d.minFilter]||fn,h.wrapS=wp[d.wrapS]||Ti,h.wrapT=wp[d.wrapT]||Ti,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==wt&&h.minFilter!==Et,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Ft(_);m.needsUpdate=!0,d(m)}),t.load(fi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Qn(u,a),u.userData.mimeType=a.mimeType||lv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Hs,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Vs,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Gt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){let u=s[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Qt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=an);let h=r.alphaMode||Xh.OPAQUE;if(h===Xh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Xh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==In&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==In&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==In){let u=r.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],Qt)}return r.emissiveTexture!==void 0&&a!==In&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Qn(u,r),t.associations.set(u,{materials:e}),r.extensions&&os(s,u,r),u})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ep(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=cv(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Ep(new Tt,l,t),l.mode===yn.TRIANGLE_STRIP?d=d.then(f=>Wh(f,aa)):l.mode===yn.TRIANGLE_FAN&&(d=d.then(f=>Wh(f,$s))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?rv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=a[f],p,y=l[f];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,b=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&b?new Ir(_,y):new pt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===yn.LINES)p=new Lr(_,y);else if(m.mode===yn.LINE_STRIP)p=new Qi(_,y);else if(m.mode===yn.LINE_LOOP)p=new Dr(_,y);else if(m.mode===yn.POINTS)p=new Ri(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ov(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Qn(p,r),m.extensions&&os(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&os(s,u[0],r),u[0];let d=new Xt;r.extensions&&os(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vt(ca.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Fi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Xe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Pr(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let w=0,b=d.length;w<b;w++){let M=d[w],S=f[w],C=g[w],x=_[w],T=m[w];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let I=n._createAnimationTracks(M,S,C,x,T);if(I)for(let F=0;F<I.length;F++)p.push(I[F])}let y=new Kr(r,void 0,p);return Qn(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,hv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ks:l.length>1?h=new Xt:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Qn(h,r),r.extensions&&os(n,h,r),r.matrix!==void 0){let u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Xt;n.name&&(r.name=s.createUniqueName(n.name)),Qn(r,n),n.extensions&&os(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(_p(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof $t||d instanceof Ft)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}zi[r.path]===zi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(zi[r.path]){case zi.weights:h=ci;break;case zi.rotation:h=li;break;case zi.translation:case zi.scale:h=Di;break;default:n.itemSize===1?h=ci:h=Di;break}let u=s.interpolation!==void 0?sv[s.interpolation]:Yi,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let _=new h(c[f]+"."+zi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Au(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof li?mu:Dc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var Rp,Ip=bn(()=>{Rp=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),w=0;w<p.length;++w){var b=p.charCodeAt(w);y[w]=b>96?b-97:b>64?b-39:b+4}for(var M=0,w=0;w<p.length;++w)y[M++]=y[w]<60?n[y[w]]:(y[w]-60)*64+y[++w];return y.buffer.slice(0,M)}function c(p,y,w,b,M,S,C){var x=p.exports.sbrk,T=b+3&-4,I=x(T*M),F=x(S.length),z=new Uint8Array(p.exports.memory.buffer);z.set(S,F);var V=y(I,b,M,F,S.length);if(V==0&&C&&C(I,T,M),w.set(z.subarray(I,I+b*M)),x(I-x(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(w){var b=w.data;y.pending-=b.count,y.requests[b.id][b.action](b.value),delete y.requests[b.id]},y}function g(p){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),w=new Blob([y],{type:"text/javascript"}),b=URL.createObjectURL(w),M=u.length;M<p;++M)u[M]=f(b);for(var M=p;M<u.length;++M)u[M].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function _(p,y,w,b,M){for(var S=u[0],C=1;C<u.length;++C)u[C].pending<S.pending&&(S=u[C]);return new Promise(function(x,T){var I=new Uint8Array(w),F=++d;S.pending+=p,S.requests[F]={resolve:x,reject:T},S.object.postMessage({id:F,count:p,size:y,source:I,mode:b,filter:M},[I.buffer])})}function m(p){var y=p.data;self.ready.then(function(w){if(!y.id)return self.close();try{var b=new Uint8Array(y.count*y.size);c(w,w.exports[y.mode],b,y.count,y.size,y.source,w.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(M){self.postMessage({id:y.id,count:y.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,w,b,M){c(r,r.exports.meshopt_decodeVertexBuffer,p,y,w,b,r.exports[l[M]])},decodeIndexBuffer:function(p,y,w,b){c(r,r.exports.meshopt_decodeIndexBuffer,p,y,w,b)},decodeIndexSequence:function(p,y,w,b){c(r,r.exports.meshopt_decodeIndexSequence,p,y,w,b)},decodeGltfBuffer:function(p,y,w,b,M,S){c(r,r.exports[h[M]],p,y,w,b,r.exports[l[S]])},decodeGltfBufferAsync:function(p,y,w,b,M){return u.length>0?_(p,y,w,h[b],l[M]):a.then(function(){var S=new Uint8Array(p*y);return c(r,r.exports[h[b]],S,p,y,w,r.exports[l[M]]),S})}}})()});var Lp={};Ma(Lp,{ModelViews:()=>xu,gltfLoader:()=>_u,loadModel:()=>dv,normalize:()=>vu});function _u(){return Fc||(Fc=new Pc,Fc.setMeshoptDecoder(Rp)),Fc}function vu(i,e=1){let t=new Zt().setFromObject(i),n=t.getSize(new P),s=t.getCenter(new P),r=e/Math.max(n.x,n.y,n.z||1e-6);i.position.sub(s.multiplyScalar(r)),i.scale.setScalar(r);let a=new Xt;return a.add(i),a}function dv(i,e=1){return new Promise(t=>{_u().load(i,n=>t(vu(n.scene,e)),void 0,()=>t(null))})}var Fc,Pp,xu,Dp=bn(()=>{mi();Cp();Ip();Ic();Fc=null;Pp={heart:{fit:1,dist:2.05,fov:30,yaw:-Math.PI/2,spin:0,sway:.38,swaySpeed:.9,tilt:.12,float:.03,pulse:.07,rotX:.05,env:.55},rings:{fit:1,dist:2.3,fov:30,yaw:-Math.PI/2,spin:.45,sway:0,tilt:.18,float:.04,pulse:.03,rotX:.12,env:1},floral:{fit:1,dist:2,fov:30,yaw:-Math.PI/2,spin:0,sway:.42,swaySpeed:.35,tilt:.1,float:.025,pulse:.02,rotX:.18,env:.8}},xu=class{constructor(e,{reduced:t=!1}={}){this.stage=e,this.reduced=t,this.views=[],this.time=0}add(e,t,n){let s=Pp[n]||Pp.heart,r=new Rn;r.environment=this.stage.env,r.environmentIntensity=s.env??.9,r.add(new ui(16774894,15123390,.9));let a=new Pn(16773600,1.8);a.position.set(2,3,4),r.add(a);let o=new vt(s.fov,1,.05,50);o.position.set(0,0,s.dist);let c=document.createElement("canvas");c.className="model-canvas",c.setAttribute("aria-hidden","true"),e.appendChild(c);let l={slot:e,canvas:c,scene:r,camera:o,key:a,p:s,model:null,phase:Math.random()*6.28,spin:0,hover:0,box:da(e)};return this.views.push(l),e.addEventListener("pointerenter",()=>{l.hover=1}),e.addEventListener("pointerleave",()=>{l.hover=0}),new Promise(h=>{_u().load(t,u=>{let d=vu(u.scene,s.fit);l.model=d,r.add(d),e.classList.add("has-model"),h(!0)},void 0,()=>h(!1))})}update(e,t,n){this.time+=e;let s=this.time;for(let r of this.views){if(!r.model||!r.box.visible||r.box.w<2||r.box.h<2)continue;let a=r.p,o=r.model;if(this.reduced)o.rotation.set(a.rotX,a.yaw||0,0);else{r.spin+=e*(a.spin+(a.spin?r.hover*.8:0));let c=Math.sin(s*(a.swaySpeed||.6)+r.phase)*a.sway;o.rotation.set(a.rotX+n.y*a.tilt,(a.yaw||0)+r.spin+c+n.x*a.tilt*2,Math.sin(s*.5+r.phase)*.04),o.position.y=Math.sin(s*1.1+r.phase)*a.float,o.scale.setScalar(1+t.beat*a.pulse+r.hover*.05)}r.key.intensity=1.6+t.beat*1.4+t.level*.4,this.stage.draw(r.canvas,r.scene,r.camera,r.box.w,r.box.h)}}}});var Yu="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AgIBAQABAQEBAAEBAQAAAQABAAAAAAAAAAAAAAAAAAAAAAEAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABACsBAAABFwAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";function _m(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}var Sa=class{constructor(e){this.el=e,this.data=_m(Yu),this.frames=this.data.length/5,this.volume=.8,this.muted=!1,this.ctx=null,this.gain=null,this.listeners=new Set,this.f={level:0,bass:0,mid:0,high:0,onset:0,beat:0,playing:0},this._lastOnsetFrame=-1,e.volume=this.volume,["play","pause","ended"].forEach(n=>e.addEventListener(n,()=>this._emit()));let t=!1;document.addEventListener("visibilitychange",()=>{document.hidden?e.paused||(e.pause(),t=!0):t&&(t=!1,this.play())})}get playing(){return!this.el.paused&&!this.el.ended}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}_emit(){this.listeners.forEach(e=>e(this))}_ensureGraph(){if(this.ctx||location.protocol==="file:")return;let e=window.AudioContext||window.webkitAudioContext;if(e)try{this.ctx=new e;let t=this.ctx.createMediaElementSource(this.el);this.gain=this.ctx.createGain(),this.gain.gain.value=this._effectiveVolume(),t.connect(this.gain).connect(this.ctx.destination),this.el.volume=1}catch{this.ctx=null,this.gain=null}}play(){this._ensureGraph(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});let e=this.el.play();return e&&e.catch?e.catch(()=>{}):Promise.resolve()}pause(){this.el.pause()}toggle(){return this.playing?this.pause():this.play()}_effectiveVolume(){return this.muted?0:this.volume}_applyVolume(){let e=this._effectiveVolume();this.gain?this.gain.gain.setTargetAtTime(e,this.ctx.currentTime,.03):this.el.volume=e,this._emit()}setVolume(e){this.volume=Math.min(1,Math.max(0,e)),this.volume>0&&this.muted&&(this.muted=!1),this._applyVolume()}toggleMute(){this.muted=!this.muted,this._applyVolume()}sample(e,t){let n=Math.max(0,e*30),s=Math.min(this.frames-2,Math.floor(n)),r=n-s,a=this.data,o=s*5,c=o+5;return t.level=(a[o]*(1-r)+a[c]*r)/255,t.bass=(a[o+1]*(1-r)+a[c+1]*r)/255,t.mid=(a[o+2]*(1-r)+a[c+2]*r)/255,t.high=(a[o+3]*(1-r)+a[c+3]*r)/255,t.onset=Math.max(a[o+4],a[c+4])/255,t.frame=s,t}update(e){let t=this.f,n=1-Math.exp(-e*14),s=this._tmp||(this._tmp={}),r=this.playing&&!this.muted?1:0;if(this.playing){this.sample(this.el.currentTime,s);let a=this._effectiveVolume()>0?.55+.45*this._effectiveVolume():0;t.level+=(s.level*a-t.level)*n,t.bass+=(s.bass*a-t.bass)*n,t.mid+=(s.mid*a-t.mid)*n,t.high+=(s.high*a-t.high)*n,s.onset>.18&&s.frame!==this._lastOnsetFrame&&a>0&&(this._lastOnsetFrame=s.frame,t.beat=Math.max(t.beat,Math.min(1,.35+s.onset*.9)*a))}else t.level+=(0-t.level)*n*.4,t.bass+=(0-t.bass)*n*.4,t.mid+=(0-t.mid)*n*.4,t.high+=(0-t.high)*n*.4;return t.beat*=Math.exp(-e*4.2),t.playing+=(r-t.playing)*(1-Math.exp(-e*3)),t}progress(){let e=this.el.duration;return e&&isFinite(e)?this.el.currentTime/e:0}};var ju=["#c9a15f","#d8bf8f","#e2b4ae","#c98a93","#b76e79"],vm=["#8d0f2c","#6e2a35","#b76e79","#d9a9a4","#c9a15f"],ym=["#e8c3be","#d9a9a4","#f3e3dc","#c98a93"],It=(i,e)=>i+Math.random()*(e-i),Qu=i=>i[Math.random()*i.length|0];function Mm(i){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"#fffaf0"),n.addColorStop(.18,i),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),e}function Sm(i,e){i.beginPath(),i.moveTo(0,e*.35),i.bezierCurveTo(-e*.1,e*.25,-e*.5,0,-e*.5,-e*.22),i.bezierCurveTo(-e*.5,-e*.48,-e*.12,-e*.55,0,-e*.28),i.bezierCurveTo(e*.12,-e*.55,e*.5,-e*.48,e*.5,-e*.22),i.bezierCurveTo(e*.5,0,e*.1,e*.25,0,e*.35),i.closePath()}var wa=class{constructor(e,{reduced:t=!1,mobile:n=!1}={}){this.canvas=e,this.g=e.getContext("2d"),this.reduced=t,this.sprites=ju.map(Mm),this.dust=Array.from({length:n?70:120},()=>({x:Math.random(),y:Math.random(),z:It(.3,1),s:It(4,16),sp:It(.008,.03),ph:It(0,6.28),i:Math.random()*ju.length|0})),this.petals=Array.from({length:n?10:16},()=>({x:Math.random(),y:Math.random(),s:It(8,16),sp:It(.02,.05),rot:It(0,6.28),w:It(-1,1),ph:It(0,6.28),c:Qu(ym)})),this.hearts=[],this.sparks=[],this.time=0,this.scrollY=0,this.resize()}resize(){let e=Math.min(window.devicePixelRatio||1,1.5);this.w=window.innerWidth,this.h=window.innerHeight,this.canvas.width=this.w*e,this.canvas.height=this.h*e,this.g.setTransform(e,0,0,e,0,0),this._drawn=!1}burst(e,t,{count:n=14,power:s=1,sparks:r=20}={}){if(!this.reduced){for(let a=0;a<n;a++){let o=It(0,Math.PI*2),c=It(120,320)*s;this.hearts.push({x:e,y:t,vx:Math.cos(o)*c,vy:Math.sin(o)*c*.8-120*s,s:It(14,30),rot:It(-.5,.5),w:It(-3,3),age:0,life:It(2,3.2),c:Qu(vm),ph:It(0,6.28)})}for(let a=0;a<r;a++){let o=It(0,Math.PI*2),c=It(80,380)*s;this.sparks.push({x:e,y:t,vx:Math.cos(o)*c,vy:Math.sin(o)*c,age:0,life:It(.6,1.3),s:It(6,14),i:Math.random()*2|0})}this.hearts.length>120&&this.hearts.splice(0,this.hearts.length-120),this.sparks.length>200&&this.sparks.splice(0,this.sparks.length-200)}}update(e,t,n,s){if(this.reduced&&this._drawn)return;this.time+=e;let r=this.g,a=this.w,o=this.h,c=this.time,l=(s-this.scrollY)/o;this.scrollY=s,r.clearRect(0,0,a,o);for(let h of this.dust){h.y-=(h.sp*e+l*.35)*h.z,h.y<-.05&&(h.y+=1.1),h.y>1.05&&(h.y-=1.1);let u=.5+.5*Math.sin(c*1.4+h.ph),d=h.s*h.z*(1+t.bass*.8+t.beat*.6);r.globalAlpha=(.35+u*.4)*(.7+t.level*.3),r.drawImage(this.sprites[h.i],(h.x+n.x*.02*h.z)*a-d/2,h.y*o-d/2,d,d)}for(let h of this.petals){h.y+=h.sp*e,h.y>1.05&&(h.y=-.05,h.x=Math.random()),h.rot+=h.w*e;let u=(h.x+Math.sin(c*.6+h.ph)*.03)*a,d=h.y*o;r.save(),r.translate(u,d),r.rotate(h.rot),r.scale(1,Math.abs(Math.sin(c*.8+h.ph))*.6+.4),r.globalAlpha=.75,r.fillStyle=h.c,r.beginPath(),r.ellipse(0,0,h.s*.45,h.s,0,0,Math.PI*2),r.fill(),r.restore()}r.globalAlpha=1,this.hearts=this.hearts.filter(h=>(h.age+=e)<h.life);for(let h of this.hearts){let u=h.age/h.life,d=Math.exp(-e*2.4);h.vx=h.vx*d+Math.sin(c*2+h.ph)*40*e,h.vy=h.vy*d-90*e,h.x+=h.vx*e,h.y+=h.vy*e,h.rot+=h.w*e*.3;let f=Math.min(1,u/.12),g=u>.7?1-(u-.7)/.3:1;r.save(),r.translate(h.x,h.y),r.rotate(h.rot),r.globalAlpha=g;let _=h.s*f*(1+t.beat*.1);Sm(r,_);let m=r.createLinearGradient(-_/2,-_/2,_/2,_/2);m.addColorStop(0,"#ffffff"),m.addColorStop(.25,h.c),m.addColorStop(1,h.c),r.fillStyle=m,r.fill(),r.restore()}this.sparks=this.sparks.filter(h=>(h.age+=e)<h.life);for(let h of this.sparks){let u=h.age/h.life;h.vx*=Math.exp(-e*3),h.vy=h.vy*Math.exp(-e*3)+40*e,h.x+=h.vx*e,h.y+=h.vy*e,r.globalAlpha=1-u;let d=h.s*(1-u*.5);r.drawImage(this.sprites[h.i],h.x-d/2,h.y-d/2,d,d)}r.globalAlpha=1,this._drawn=!0}};var Zc=[{name:"high",worldDpr:1.5,stageDpr:1.5,dust:1,petals:1,roses:4,waveFps:60},{name:"medium",worldDpr:1,stageDpr:1.25,dust:.7,petals:.7,roses:2,waveFps:30},{name:"low",worldDpr:.75,stageDpr:1,dust:.45,petals:.45,roses:0,waveFps:20}];function wm(){try{let i=document.createElement("canvas"),e=i.getContext("webgl2")||i.getContext("webgl");if(!e)return"";let t=e.getExtension("WEBGL_debug_renderer_info"),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER),s=e.getExtension("WEBGL_lose_context");return s&&s.loseContext(),String(n||"")}catch{return""}}function Em({mobile:i}){let e=new URLSearchParams(location.search).get("quality"),t=Zc.findIndex(c=>c.name===e);if(t>=0)return{index:t,forced:!0,gpu:""};let n=wm(),s=n.toLowerCase(),r=navigator.hardwareConcurrency||4,a=navigator.deviceMemory||8,o=0;return(/intel|uhd|iris|hd graphics|radeon\(tm\) graphics|vega|mali|adreno|powervr|apple gpu/.test(s)||r<=4||a<=4||i)&&(o=1),/swiftshader|llvmpipe|software|basic render/.test(s)&&(o=2),{index:o,forced:!1,gpu:n}}var Ea=class{constructor({mobile:e,onChange:t}){let n=Em({mobile:e});this.index=n.index,this.forced=n.forced,this.gpu=n.gpu,this.onChange=t,this.samples=[],this.windowTime=0,this.grace=2.5,document.addEventListener("visibilitychange",()=>{this.samples=[],this.windowTime=0,this.grace=1.5})}get tier(){return Zc[this.index]}pause(e){this.grace=Math.max(this.grace,e),this.samples=[],this.windowTime=0}frame(e){if(this.forced||this.index>=Zc.length-1)return;if(this.grace>0){this.grace-=e;return}if(e>.25||(this.samples.push(e),this.windowTime+=e,this.windowTime<1.5))return;let t=this.samples.slice().sort((s,r)=>s-r);t.pop();let n=t.reduce((s,r)=>s+r,0)/Math.max(1,t.length);this.samples=[],this.windowTime=0,n>1/50&&(this.index++,this.grace=1.2,this.onChange&&this.onChange(this.tier,this.index))}};var fv=["assets/img/wed-1.webp","assets/img/wed-2.webp","assets/img/wed-3.webp"],Ne=(i,e=document)=>e.querySelector(i),ur=(i,e=document)=>Array.from(e.querySelectorAll(i)),Qp=new URLSearchParams(location.search),Kt=matchMedia("(prefers-reduced-motion: reduce)").matches||Qp.has("reduced"),Ru=matchMedia("(pointer: coarse)").matches||Math.min(screen.width,screen.height)<600;function pv(){if(Qp.get("render")==="2d")return!1;try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}var Zn=document.body,cs=Ne("#envelope"),Gc=Ne(".envelope-video"),Aa=Ne("#invite"),kt=Ne("#rsvp-letter"),Oc=Ne("#song-disc"),mv=Ne(".disc-record"),zc=Ne("#player"),Iu=Ne("#player-play"),Pu=Ne("#player-mute"),xa=Ne("#player-volume"),gv=Ne("#player-progress-bar"),Dt=new Sa(Ne("#song")),Vt={x:0,y:0,tx:0,ty:0},en=null,Vc=pv(),lr=null,hs=new Ea({mobile:Ru,onChange:i=>{en&&en.setQuality&&en.setQuality(i),lr&&lr.setDpr(Math.min(window.devicePixelRatio||1,i.stageDpr))}});async function Zp(){if(!lr){let{Stage:i}=await Promise.resolve().then(()=>(Ic(),hp));lr=new i({dpr:Math.min(window.devicePixelRatio||1,hs.tier.stageDpr)})}return lr}async function Av(){let i=Ne("#world");if(Vc)try{let{World3D:e}=await Promise.resolve().then(()=>(gp(),mp));en=new e(i,{reduced:Kt,mobile:Ru,quality:hs.tier}),document.documentElement.classList.add("webgl");return}catch(e){console.warn("WebGL world unavailable, using 2D fallback",e),Vc=!1;let t=i.cloneNode();i.replaceWith(t)}en=new wa(Ne("#world"),{reduced:Kt,mobile:Ru}),document.documentElement.classList.add("no-webgl")}function Uu(i,e,t){en&&en.burst(i,e,t)}function _a(i,e){let t=i.getBoundingClientRect();Uu(t.left+t.width/2,t.top+t.height/2,e)}var Hc=!1,Lu=[],kc=(i,e)=>Lu.push(setTimeout(i,e)),$p=()=>{for(;Lu.length;)clearTimeout(Lu.pop())};function em(){let i=location.hash;if(i==="#page-2"&&(i="#details"),i==="#page-1"||i==="#invite")Fp();else if(i===""||i==="#"||i==="#page-0")bv();else{let e=document.querySelector(i.replace(/[^#\w-]/g,""));Zn.classList.contains("is-open")||Fp(),e&&setTimeout(()=>e.scrollIntoView({behavior:Kt?"auto":"smooth",block:"start"}),60)}}function bv(){$p(),Hc=!1,Zn.classList.remove("is-open","is-leaving"),Zn.classList.add("is-sealed"),cs.classList.remove("is-opening","is-playing","is-zooming"),Aa.classList.remove("is-entered"),Mv();try{Gc.pause(),Gc.currentTime=0}catch{}window.scrollTo(0,0)}function Fp(){$p(),Hc=!1,Zn.classList.remove("is-sealed","is-leaving"),Zn.classList.add("is-open"),window.scrollTo(0,0),Aa.classList.remove("is-entered"),Aa.offsetWidth,Aa.classList.add("is-entered"),Aa.focus({preventScroll:!0}),zc.classList.add("is-visible"),kc(()=>tm(),Kt?600:4200),Pv(),Dv()}function xv(){if(!Hc){if(Hc=!0,hs.pause(3.5),Dt.play(),_a(cs,{count:34,power:1.35,sparks:60}),Kt){location.hash="page-1";return}cs.classList.add("is-opening"),kc(()=>{cs.classList.add("is-playing");try{Gc.currentTime=0,Gc.play().catch(()=>{})}catch{}},260),kc(()=>{cs.classList.add("is-zooming"),Zn.classList.add("is-leaving")},1650),kc(()=>{location.hash="page-1"},2350)}}cs.addEventListener("click",xv);Ne("#go-back").addEventListener("click",()=>{location.hash="page-0"});window.addEventListener("hashchange",em);var Nc=Ne(".envelope-tilt");function Du(i,e){Nc.style.setProperty("--ry",(i*12).toFixed(2)+"deg"),Nc.style.setProperty("--rx",(-e*10).toFixed(2)+"deg"),Nc.style.setProperty("--mx",(50+i*40).toFixed(1)+"%"),Nc.style.setProperty("--my",(40+e*40).toFixed(1)+"%")}Kt||(Ne("#intro").addEventListener("pointermove",i=>{let e=cs.getBoundingClientRect(),t=Math.max(-1,Math.min(1,(i.clientX-(e.left+e.width/2))/(e.width*.8))),n=Math.max(-1,Math.min(1,(i.clientY-(e.top+e.height/2))/(e.height*1.2)));Du(t,n)}),Ne("#intro").addEventListener("pointerleave",()=>Du(0,0)));window.addEventListener("pointermove",i=>{Vt.tx=i.clientX/window.innerWidth*2-1,Vt.ty=i.clientY/window.innerHeight*2-1},{passive:!0});window.addEventListener("deviceorientation",i=>{i.gamma!=null&&(Vt.tx=Math.max(-1,Math.min(1,i.gamma/30)),Vt.ty=Math.max(-1,Math.min(1,(i.beta-45)/30)),Zn.classList.contains("is-sealed")&&Du(Vt.tx*.6,Vt.ty*.6))},{passive:!0});var _v=ur(".c-layer[data-depth]").map(i=>({el:i,d:parseFloat(i.dataset.depth),x:0,y:0})),Wc=!0;new IntersectionObserver(i=>{Wc=i[0].isIntersecting}).observe(Ne("#collage"));function vv(){for(let i of _v){let e=Vt.x*i.d*12,t=Vt.y*i.d*9;Math.abs(e-i.x)<.05&&Math.abs(t-i.y)<.05||(i.x=e,i.y=t,i.el.style.translate=`${e.toFixed(2)}px ${t.toFixed(2)}px`)}}var yv=kt.dataset.rsvpHref;function tm(){kt.classList.add("is-flipped"),kt.href=yv,kt.target="_blank",kt.rel="noopener",kt.removeAttribute("role"),kt.setAttribute("aria-label","RSVP \u2014 click here if you can make it")}function Mv(){kt.classList.remove("is-flipped"),kt.removeAttribute("href"),kt.setAttribute("role","button"),kt.setAttribute("aria-label","A date to remember. Tap to RSVP")}kt.addEventListener("click",i=>{if(!kt.classList.contains("is-flipped")){i.preventDefault(),tm();return}_a(kt,{count:18,power:1.1})});kt.addEventListener("keydown",i=>{(i.key===" "||i.key==="Enter"&&!kt.hasAttribute("href"))&&(i.preventDefault(),kt.click())});Ne("#rsvp-btn").addEventListener("click",i=>_a(i.currentTarget,{count:22,power:1.2}));Oc.addEventListener("click",()=>Dt.toggle());Iu.addEventListener("click",()=>Dt.toggle());Pu.addEventListener("click",()=>Dt.toggleMute());function Bu(){xa.style.setProperty("--fill",xa.value+"%")}xa.addEventListener("input",()=>{Dt.setVolume(xa.value/100),Bu()});Bu();function nm(){let i=Dt.playing;zc.classList.toggle("is-playing",i),Oc.classList.toggle("is-playing",i),Iu.setAttribute("aria-pressed",String(i)),Iu.setAttribute("aria-label",i?"Pause our song":"Play our song"),Oc.setAttribute("aria-pressed",String(i)),Oc.setAttribute("aria-label",i?"Pause our song":"Play our song"),Pu.setAttribute("aria-pressed",String(Dt.muted||Dt.volume===0)),Pu.setAttribute("aria-label",Dt.muted?"Unmute":"Mute"),xa.value=String(Math.round((Dt.muted?0:Dt.volume)*100)),Bu()}Dt.onChange(nm);nm();document.addEventListener("keydown",i=>{if(!Zn.classList.contains("is-open")||i.metaKey||i.ctrlKey||i.altKey)return;let e=i.target.closest&&i.target.closest("button, a, input, [role=button]");(i.key==="k"||i.key===" "&&!e)&&(i.preventDefault(),Dt.toggle()),i.key==="m"&&Dt.toggleMute()});document.addEventListener("click",i=>{!i.isTrusted||i.detail===0||i.target.closest("#envelope, #gallery-canvas, #rsvp-letter, #rsvp-btn, .player, .c-details, .gift-card, .palette-thumb, .lightbox")||Uu(i.clientX,i.clientY,{count:10,power:.85,sparks:18})});var Kc=Ne("#the-day"),ls=Kc.dataset.date,Ou=Kc.dataset.tz||"+08:00",hr=ur(".event",Kc).map(i=>{let e=(i.dataset.time||"").trim(),t=e?new Date(`${ls}T${e.padStart(5,"0")}:00${Ou}`):null;return{el:i,kind:i.dataset.kind,time:e,start:t,minutes:parseInt(i.dataset.duration||"120",10)}});function qc(i){return i.toLocaleTimeString("en-PH",{hour:"numeric",minute:"2-digit",timeZone:"Asia/Manila"})}for(let i of hr){let e=Ne(".event-time-value",i.el);i.start&&!isNaN(i.start)?(e.textContent=qc(i.start),e.setAttribute("datetime",i.start.toISOString())):(i.el.classList.add("is-tbc"),e.textContent="Time to follow",e.setAttribute("datetime",ls))}var ba=hr.find(i=>i.start&&!isNaN(i.start)),Sv=ba?ba.start:new Date(`${ls}T00:00:00${Ou}`);function pa(i){return i.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"")}(function(){let e=hr.find(u=>u.kind==="ceremony"),t=hr.find(u=>u.kind==="reception"),n="Josh & Sandra's Wedding",s="St Clements Church, Iloilo City",r=["Ceremony: St Clements Church, Iloilo City"+(e&&e.start?" at "+qc(e.start):""),"Reception: Sam's 21 Hotel, Benigno Aquino Avenue (Diversion Road), Mandurriao, Iloilo City"+(t&&t.start?" at "+qc(t.start):""),"RSVP: "+kt.dataset.rsvpHref].join(`
`),a,o;if(ba){let u=[...hr].filter(f=>f.start).sort((f,g)=>g.start-f.start)[0],d=new Date(u.start.getTime()+u.minutes*6e4);a=`${pa(ba.start)}/${pa(d)}`,o=[`DTSTART:${pa(ba.start)}`,`DTEND:${pa(d)}`]}else{let u=ls.replace(/-/g,""),d=new Date(`${ls}T12:00:00Z`);d.setUTCDate(d.getUTCDate()+1);let f=d.toISOString().slice(0,10).replace(/-/g,"");a=`${u}/${f}`,o=[`DTSTART;VALUE=DATE:${u}`,`DTEND;VALUE=DATE:${f}`]}let c=new URL("https://calendar.google.com/calendar/render");c.searchParams.set("action","TEMPLATE"),c.searchParams.set("text",n),c.searchParams.set("dates",a),c.searchParams.set("location",s),c.searchParams.set("details",r),Ne("#cal-google").href=c.toString();let l=u=>u.replace(/([,;\\])/g,"\\$1").replace(/\n/g,"\\n"),h=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Josh & Sandra//Wedding//EN","BEGIN:VEVENT",`UID:josh-sandra-${ls}@athousandyears`,`DTSTAMP:${pa(new Date)}`,...o,`SUMMARY:${l(n)}`,`LOCATION:${l(s)}`,`DESCRIPTION:${l(r)}`,"END:VEVENT","END:VCALENDAR"].join(`\r
`);Ne("#cal-ics").href="data:text/calendar;charset=utf-8,"+encodeURIComponent(h)})();var us=Ne("#timeline"),Xc=ur(".tl-item",us).map(i=>({el:i,top:0,h:0})),wv=Ne(".tl-fill",us);(function(){let e=!1;for(let{el:t}of Xc){let n=null,s=(t.dataset.time||"").trim();if(s)n=new Date(`${ls}T${s.padStart(5,"0")}:00${Ou}`);else if(t.dataset.from){let a=hr.find(o=>o.kind===t.dataset.from);n=a&&a.start}let r=Ne(".tl-time",t);n&&!isNaN(n)?(e=!0,r.textContent=qc(n),r.setAttribute("datetime",n.toISOString())):r.textContent="To follow"}e||ur(".tl-time",us).forEach(t=>{t.hidden=!0}),us.classList.toggle("has-times",e),Ne("#tl-note").hidden=e})();function Ev(){for(let i of Xc)i.top=i.el.offsetTop,i.h=i.el.offsetHeight}new ResizeObserver(Ev).observe(us);var im=!1,Np=-1;new IntersectionObserver(i=>{im=i[0].isIntersecting},{rootMargin:"100px"}).observe(us);function Tv(){let i=us.getBoundingClientRect(),e=Kt?i.height:Math.min(i.height,Math.max(0,window.innerHeight*.62-i.top)),t=i.height?e/i.height:0;if(Math.abs(t-Np)<.002)return;Np=t,wv.style.transform=`scaleY(${t.toFixed(4)})`;let n=-1;Xc.forEach((s,r)=>{let a=s.top+s.h/2<=e+4;a&&(n=r),s.el.classList.toggle("is-lit",a)}),Xc.forEach((s,r)=>s.el.classList.toggle("is-current",r===n&&!Kt))}var yu=Ne("#dress-note");yu.textContent.trim()||(yu.textContent="Details to follow",yu.classList.add("is-tbc"));var gi=Ne("#palette-dialog"),Mu=Ne("#palette-open");gi&&Mu&&(Mu.addEventListener("click",()=>{typeof gi.showModal=="function"?gi.showModal():window.open(gi.querySelector("img").src,"_blank","noopener")}),Ne("#palette-close").addEventListener("click",()=>gi.close()),gi.addEventListener("click",i=>{i.target===gi&&gi.close()}),gi.addEventListener("close",()=>Mu.focus({preventScroll:!0})));var Up=Ne("#gift"),ma=Ne("#gift-card"),Su=Ne("#gift-qr-img"),Cv=Ne("#gift-qr-empty");Up.dataset.qr&&(Su.onload=()=>{Su.hidden=!1,Cv.hidden=!0},Su.src=Up.dataset.qr);ma.addEventListener("click",()=>{let i=ma.getAttribute("aria-pressed")!=="true";ma.setAttribute("aria-pressed",String(i)),ma.setAttribute("aria-label",i?"Gifts: QR code shown, tap to flip back":"Gifts: tap to show the QR code"),i&&_a(ma,{count:14,power:.9})});var Bp=Ne("#contact-email"),ga=Ne("#copy-status");Ne("#copy-email").addEventListener("click",async()=>{let i=Bp.textContent.trim();try{await navigator.clipboard.writeText(i),ga.textContent="Email copied"}catch{let t=document.createRange();t.selectNodeContents(Bp);let n=getSelection();n.removeAllRanges(),n.addRange(t),ga.textContent="Selected \u2014 press Ctrl+C (\u2318C on Mac) to copy"}clearTimeout(ga._t),ga._t=setTimeout(()=>{ga.textContent=""},3e3)});var Rv={days:Ne("#cd-days"),hours:Ne("#cd-hours"),mins:Ne("#cd-mins"),secs:Ne("#cd-secs")},Iv=Ne("#cd-sr"),Op=-1;function sm(i,e){let t=Math.max(0,i.getTime()-e.getTime()),n=Math.floor(t/1e3);return{days:Math.floor(n/86400),hours:Math.floor(n%86400/3600),mins:Math.floor(n%3600/60),secs:n%60}}var Uc=(i,e=2)=>String(i).padStart(e,"0");function rm(){let i=sm(Sv,new Date),e={days:Uc(i.days,i.days>=100?3:2),hours:Uc(i.hours),mins:Uc(i.mins),secs:Uc(i.secs)};for(let t in e){let n=Rv[t];n.textContent!==e[t]&&(n.textContent=e[t],Kt||(n.classList.remove("tick"),n.offsetWidth,n.classList.add("tick")))}i.mins!==Op&&(Op=i.mins,Iv.textContent=`${i.days} days, ${i.hours} hours and ${i.mins} minutes to go.`)}rm();setInterval(rm,1e3);var am=new IntersectionObserver(i=>{for(let e of i)e.isIntersecting&&(e.target.classList.add("in-view"),am.unobserve(e.target))},{threshold:.12,rootMargin:"0px 0px -8% 0px"});ur("[data-reveal]").forEach(i=>am.observe(i));var gn=null,Fu=!1,kp=!1,wu=Ne("#gallery");function Pv(){if(kp)return;kp=!0;let i=new IntersectionObserver(async e=>{if(e.some(t=>t.isIntersecting)&&(i.disconnect(),Vc))try{let{Gallery3D:t}=await Promise.resolve().then(()=>(bp(),Ap));gn=new t(Ne("#gallery-canvas"),fv,await Zp(),{reduced:Kt,onTap:(n,s)=>Uu(n,s,{count:12,power:.9})}),wu.classList.add("is-webgl"),gn.resize()}catch(t){console.warn("3D gallery unavailable, using fallback",t)}},{rootMargin:"600px 0px"});i.observe(wu),new IntersectionObserver(e=>{Fu=e[0].isIntersecting,gn&&!Fu&&(gn._lastT=0)}).observe(wu)}var Gp=Ne("#gallery-fallback");function om(i){let e=Gp.querySelector("li");e&&Gp.scrollBy({left:i*(e.offsetWidth+22),behavior:Kt?"auto":"smooth"})}Ne("#g-prev").addEventListener("click",()=>gn?gn.go(-1):om(-1));Ne("#g-next").addEventListener("click",()=>gn?gn.go(1):om(1));var Lv=window.MODEL_EXT||".glb",Eu=Object.fromEntries(["heart","rings","floral","rose"].map(i=>[i,`assets/models/${i}${Lv}`])),Jc=null,zp=!1;async function Dv(){if(!(zp||!Vc)){zp=!0;try{let{ModelViews:i,loadModel:e}=await Promise.resolve().then(()=>(Dp(),Lp));Jc=new i(await Zp(),{reduced:Kt}),ur("[data-model]").forEach(t=>{let n=t.dataset.model;Eu[n]&&Jc.add(t,Eu[n],n)}),en&&en.addRoses&&!Kt&&hs.tier.roses>0&&e(Eu.rose,.9).then(t=>t&&en.addRoses(t))}catch(i){console.warn("3D models unavailable",i)}}}Ne(".c-details").addEventListener("click",i=>{i.preventDefault(),_a(i.currentTarget,{count:16,power:1}),Kc.scrollIntoView({behavior:Kt?"auto":"smooth",block:"start"})});var Vp=new Map;function Fv(i){let e=Vp.get(i);if(e||(e={g:i.getContext("2d"),w:i.clientWidth,h:i.clientHeight,dirty:!0},new ResizeObserver(t=>{let n=t[0].contentRect;e.w=n.width,e.h=n.height,e.dirty=!0}).observe(i),Vp.set(i,e)),e.dirty){let t=Math.min(window.devicePixelRatio||1,2);i.width=Math.max(1,Math.round(e.w*t)),i.height=Math.max(1,Math.round(e.h*t)),e.g.setTransform(t,0,0,t,0,0),e.dirty=!1}return e}var Nv=[{color:"rgba(184,147,90,.85)",freq:1.6,speed:1.1,band:"mid",amp:1,width:1.3},{color:"rgba(183,110,121,.7)",freq:2.4,speed:-1.6,band:"high",amp:.7,width:1.1},{color:"rgba(110,42,53,.55)",freq:1.1,speed:.7,band:"bass",amp:.85,width:1}];function Hp(i,e,t,{quiet:n=.12,lines:s=Nv}={}){let{g:r,w:a,h:o}=Fv(i);r.clearRect(0,0,a,o);let c=o/2,l=Math.max(24,Math.floor(a/4));for(let h of s){let u=n+(e[h.band]*.7+e.beat*.5)*e.playing,d=o*.42*Math.min(1,u)*h.amp;r.beginPath();for(let f=0;f<=l;f++){let g=f/l,_=Math.sin(Math.PI*g),m=c+Math.sin(g*Math.PI*2*h.freq+t*h.speed)*d*_*(.75+.25*Math.sin(g*9+t*2));f?r.lineTo(g*a,m):r.moveTo(g*a,m)}r.strokeStyle=h.color,r.lineWidth=h.width,r.stroke()}}var cm=Ne("#ribbon"),Uv=Ne("#player-wave"),lm=!1;new IntersectionObserver(i=>{lm=i[0].isIntersecting}).observe(cm);var Wp=Ne(".aura"),qp=Ne(".disc-glow"),Bv=Ne(".cd-glow"),Xp=Ne(".play-ring"),Jp=-1;function Ov(i){let e=Math.min(1,i.beat*.85+i.level*.3*i.playing);Math.abs(e-Jp)<.01||(Jp=e,Wp.style.opacity=(.45+e*.45).toFixed(3),Wp.style.transform=`scale(${(.92+e*.14).toFixed(3)})`,Zn.classList.contains("is-open")&&(Wc&&(qp.style.opacity=(.25+e*.75).toFixed(3),qp.style.transform=`scale(${(1+e*.05).toFixed(3)})`),Bv.style.opacity=e.toFixed(3)),Xp.style.opacity=e.toFixed(3),Xp.style.transform=`scale(${(.85+e*.25).toFixed(3)})`)}var Nu=performance.now(),Tu=0,Bc=0,Cu=0,Kp=-1,Yp=!1;function hm(i){requestAnimationFrame(hm);let e=(i-Nu)/1e3,t=Math.min(.05,e);Nu=i;let n=i/1e3;hs.frame(e);let s=Dt.update(t);Vt.x+=(Vt.tx-Vt.x)*(1-Math.exp(-t*4)),Vt.y+=(Vt.ty-Vt.y)*(1-Math.exp(-t*4));let r=Zn.classList.contains("is-open");r&&im&&Tv(),en&&en.update(t,s,Vt,window.scrollY),r&&!Kt&&Wc&&vv(),Ov(s);let a=Dt.playing?Math.PI*2/3.6:0;if(Bc+=(a-Bc)*(1-Math.exp(-t*(Dt.playing?2.2:.9))),Bc>.001&&(!Kt||Dt.playing)&&(Tu=(Tu+Bc*t)%(Math.PI*2),r&&Wc&&(mv.style.transform=`rotate(${Tu.toFixed(4)}rad)`)),Cu+=e,Cu>=1/hs.tier.waveFps){Cu=0;let c=s.playing>.02||s.beat>.01;r&&lm&&Hp(cm,s,n,{quiet:.14}),zc.classList.contains("is-visible")&&(c||!Yp)&&(Hp(Uv,s,n,{quiet:.08}),Yp=!c)}let o=Math.round(Dt.progress()*1e3);o!==Kp&&zc.classList.contains("is-visible")&&(Kp=o,gv.style.transform=`scaleX(${(o/1e3).toFixed(3)})`),gn&&Fu&&r&&gn.update(t,s,Vt),Jc&&r&&Jc.update(t,s,Vt)}var jp;window.addEventListener("resize",()=>{clearTimeout(jp),jp=setTimeout(()=>{en&&en.resize(),gn&&gn.resize()},120)});Av().then(()=>{em(),requestAnimationFrame(i=>{Nu=i,hm(i)})});window.__jsInvite={audio:Dt,quality:hs,get world(){return en},get gallery(){return gn},get stage(){return lr},timeParts:sm};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
