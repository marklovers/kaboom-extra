var i=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var K=Object.prototype.hasOwnProperty;var a=(t,e)=>i(t,"name",{value:e,configurable:!0});var l=(t,e)=>{for(var r in e)i(t,r,{get:e[r],enumerable:!0})},m=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of f(e))!K.call(t,o)&&o!==r&&i(t,o,{get:()=>e[o],enumerable:!(n=d(e,o))||n.enumerable});return t};var p=t=>m(i({},"__esModule",{value:!0}),t);var x={};l(x,{default:()=>b,layerPlugin:()=>y,moreKeysPlugin:()=>u});module.exports=p(x);function y(t){let e=[],r="",n=t.add;return{layers(o,s){e=o,r=s??o[0]},layer(o){return{id:"layer",add(){if(e.indexOf(o)==-1)throw new Error(`no layer "${o}"`);let s=e.indexOf(o);this.z=s*1e3+(this.userZ??0)},inspect(){return o}}},z(o){return{id:"z",userZ:o}},add(o){if(e.length==0)return n(o);let s=n(o);return s.use(this.layer(r)),s}}}a(y,"layerPlugin");function u(t){return{areKeysPressed(e){for(let r of e)if(t.isKeyPressed(r))return!0;return!1},areKeysDown(e){for(let r of e)if(t.isKeyDown(r))return!0;return!1},areKeysReleased(e){for(let r of e)if(t.isKeyReleased(r))return!0;return!1},onKeysPressed(e,r){return t.onUpdate(()=>{this.areKeysPressed(e)&&r()})},onKeysDown(e,r){return t.onUpdate(()=>{this.areKeysDown(e)&&r()})},onKeysReleased(e,r){return t.onUpdate(()=>{this.areKeysReleased(e)&&r()})}}}a(u,"moreKeysPlugin");var b={layerPlugin:y,moreKeysPlugin:u};
//# sourceMappingURL=kaboom-extra.cjs.map
