function T(t,l=!1,r=8){const s=t instanceof Date?t:new Date(t),i=new Date(s.getTime()+r*60*60*1e3).toISOString();return l?i.slice(0,i.indexOf("T")):i.replace("T"," ").slice(0,i.indexOf("."))}const a={year:"年",month:"个月",day:"天",hour:"小时",minute:"分钟",second:"秒"};function g(t){const c=new Date().getTime()>=new Date(t).getTime();let o=!0,n={key:"year",value:0},e=new Date().getTime()-new Date(t).getTime();c||(e=new Date(t).getTime()-new Date().getTime());const f=Math.floor(e/31536e6);e=e%31536e6,f!==0&&o&&(n.key=a.year,n.value=f,o=!1);const u=Math.floor(e/2592e6);e=e%2592e6,u!==0&&o&&(n.key=a.month,n.value=u,o=!1);const y=Math.floor(e/864e5);e=e%864e5,y!==0&&o&&(n.key=a.day,n.value=y,o=!1);const D=Math.floor(e/36e5);e=e%36e5,D!==0&&o&&(n.key=a.hour,n.value=D,o=!1);const h=Math.floor(e/6e4);e=e%6e4,h!==0&&o&&(n.key=a.minute,n.value=h,o=!1);const m=Math.floor(e/1e3);return m!==0&&o&&(n.key=a.second,n.value=m,o=!1),`${n.value}${n.key}${c?"前":"后"}`}export{T as f,g as t};