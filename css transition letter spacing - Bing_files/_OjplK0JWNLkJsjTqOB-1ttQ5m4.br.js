(function(){var f=_d.getElementsByClassName("b_entityTP"),n,t,e,u;if(f.length!==0&&(n=f[0].getElementsByClassName("cico"),n.length!==0&&n[0].getElementsByTagName("a")&&n[0].getElementsByTagName("a")[0])){var r=n[0].getElementsByTagName("a")[0],o=r.href,i=o.split("/")[2];if(i===_w.location.hostname)return;t="#";e=["www.google.com","duckduckgo.com","www.ecosia.org","www.yahoo.com","www.baidu.com","www.sogou.com","www.yandex.ru","www.youdao.com"];i=="www.youtube.com"?(t=_w.location.protocol+"//"+_w.location.hostname+"/videos/search"+_w.location.search,r.href=t,Log&&Log.Log("updated","entity","urlupdated",!1,"ID","serp")):e.indexOf(i)!=-1&&(u=i.split("."),t=_w.location.protocol+"//"+_w.location.hostname+"/images/search?q="+u[u.length-2],r.href=t,Log&&Log.Log("updated","entity","urlupdated",!1,"ID","serp"))}})()