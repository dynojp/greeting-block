(()=>{"use strict";var e,r={650:()=>{const e=window.wp.blocks,r=window.wp.i18n,o=window.wp.blockEditor,n=window.ReactJSXRuntime,t=JSON.parse('{"UU":"create-block/greeting-block"}');(0,e.registerBlockType)(t.UU,{edit:function(){return(0,n.jsx)("p",{...(0,o.useBlockProps)(),children:(0,r.__)("Greeting Block – hello from the editor!","greeting-block")})},save:function(){return(0,n.jsx)("p",{...o.useBlockProps.save(),children:"Greeting Block – hello from the saved content!"})}})}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,e=[],n.O=(r,o,t,i)=>{if(!o){var l=1/0;for(p=0;p<e.length;p++){o=e[p][0],t=e[p][1],i=e[p][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(c=!1,i<l&&(l=i));if(c){e.splice(p--,1);var a=t();void 0!==a&&(r=a)}}return r}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[o,t,i]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={57:0,350:0};n.O.j=r=>0===e[r];var r=(r,o)=>{var t,i,l=o[0],c=o[1],s=o[2],a=0;if(l.some((r=>0!==e[r]))){for(t in c)n.o(c,t)&&(n.m[t]=c[t]);if(s)var p=s(n)}for(r&&r(o);a<l.length;a++)i=l[a],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},o=self.webpackChunkgreeting_block=self.webpackChunkgreeting_block||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var t=n.O(void 0,[350],(()=>n(650)));t=n.O(t)})();