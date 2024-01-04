(this["webpackJsonpwifi-connect-ui"]=this["webpackJsonpwifi-connect-ui"]||[]).push([[0],{1212:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(54),r=n.n(o),s=(n(488),n(489),n(80)),l=n(424),c=n(425),u=n.n(c),m=n(1223),d=n(1221),f=n(475),p=n(33),h=n(81),g=n(1222),b=function(e){var t;return{type:"object",properties:{ssid:{title:"SSID",type:"string",default:null===(t=e[0])||void 0===t?void 0:t.ssid,oneOf:e.map((function(e){return{const:e.ssid,title:e.ssid}}))},identity:{title:"User",type:"string",default:""},passphrase:{title:"Passphrase",type:"string",default:""}},required:["ssid"]}},w=function(e){var t,n,i,o=e.availableNetworks,r=e.onSubmit,l=a.useState({}),c=Object(s.a)(l,2),u=c[0],m=c[1],d=(t=o,n=u.ssid,t.some((function(e){return e.ssid===n&&"enterprise"===e.security})));return a.createElement(p.a,{flexDirection:"column",alignItems:"center",justifyContent:"center",m:4,mt:5},a.createElement(h.a.h3,{align:"center",mb:4},"Hi! Please choose your WiFi from the list"),a.createElement(g.a,{width:["100%","80%","60%","40%"],onFormChange:function(e){var t=e.formData;m(t)},onFormSubmit:function(e){var t=e.formData;return r(t)},value:u,schema:b(o),uiSchema:(i=d,{ssid:{"ui:placeholder":"Select SSID","ui:options":{emphasized:!0}},identity:{"ui:options":{emphasized:!0},"ui:widget":i?void 0:"hidden"},passphrase:{"ui:widget":"password","ui:options":{emphasized:!0}}}),submitButtonProps:{width:"60%",mx:"20%",mt:3,disabled:o.length<=0},submitButtonText:"Connect"}))},y=n(478),E=n(18),v=function(e){var t=e.hasAvailableNetworks,n=e.attemptedConnect,i=e.error;return a.createElement(a.Fragment,null,n&&a.createElement(y.a,{m:2,info:!0},a.createElement(E.d.span,null,"Applying changes... "),a.createElement(E.d.span,null,"Your device will soon be online. If connection is unsuccessful, the Access Point will be back up in a few minutes, and reloading this page will allow you to try again.")),!t&&a.createElement(y.a,{m:2,warning:!0},a.createElement(E.d.span,null,"No wifi networks available.\xa0"),a.createElement(E.d.span,null,"Please ensure there is a network within range and reload the page.")),!!i&&a.createElement(y.a,{m:2,danger:!0},a.createElement(E.d.span,null,i)))},S=n(1);function k(){var e=Object(l.a)(["\n\tbody {\n\t\tmargin: 0;\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n\t\t\t'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n\t\t\tsans-serif;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t}\n\n\tcode {\n\t\tfont-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n\t}\n"]);return k=function(){return e},e}var j=Object(S.createGlobalStyle)(k()),O=function(){var e=i.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],o=i.a.useState(!0),r=Object(s.a)(o,2),l=r[0],c=r[1],p=i.a.useState(""),h=Object(s.a)(p,2),g=h[0],b=h[1],y=i.a.useState([]),E=Object(s.a)(y,2),S=E[0],k=E[1];i.a.useEffect((function(){fetch("/networks").then((function(e){if(200!==e.status)throw new Error(e.statusText);return e.json()})).then(k).catch((function(e){b("Failed to fetch available networks. ".concat(e.message||e))})).finally((function(){c(!1)}))}),[]);return i.a.createElement(m.a,null,i.a.createElement(j,null),i.a.createElement(d.a,{brand:i.a.createElement("img",{src:u.a,style:{height:30},alt:"logo"})}),i.a.createElement(f.a,null,i.a.createElement(v,{attemptedConnect:n,hasAvailableNetworks:l||S.length>0,error:g}),i.a.createElement(w,{availableNetworks:S,onSubmit:function(e){a(!0),b(""),fetch("/connect",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status)throw new Error(e.statusText)})).catch((function(e){b("Failed to connect to the network. ".concat(e.message||e))}))}})))};r.a.render(i.a.createElement(O,null),document.getElementById("root"))},425:function(e,t,n){e.exports=n.p+"static/media/logo.34c0c94e.svg"},483:function(e,t,n){e.exports=n(1212)}},[[483,1,2]]]);