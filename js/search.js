var searchFunc=function(e,i,l){$.ajax({url:e,dataType:"xml",success:function(e){var r=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("link",this).attr("href")}}).get(),t=document.getElementById(i);if(t){var n=document.getElementById(l);t.addEventListener("input",function(){var h=[],p=function(e){var t,r,n=[];for(t=0;t<e.length;t++)for(r=t+1;r<e.length+1;r++)n.push(e.slice(t,r).join(" "));return n}(this.value.trim().toLowerCase().split(" ")).sort(function(e,t){return t.split(" ").length-e.split(" ").length});if(n.innerHTML="",!(this.value.trim().length<=0)&&(r.forEach(function(e){var t=0;e.title&&""!==e.title.trim()||(e.title="Untitled");var r=e.title.trim().toLowerCase(),n=e.content.trim().replace(/<style([\s\S]*?)<\/style>/gi,"").replace(/<script([\s\S]*?)<\/script>/gi,"").replace(/<figure([\s\S]*?)<\/figure>/gi,"").replace(/<\/div>/gi,"\n").replace(/<\/li>/gi,"\n").replace(/<li>/gi,"  *  ").replace(/<\/ul>/gi,"\n").replace(/<\/p>/gi,"\n").replace(/<br\s*[\/]?>/gi,"\n").replace(/<[^>]+>/gi,""),i=e.url,l=-1,s=-1,a=-1;if(""!==n&&p.forEach(function(e){l=r.indexOf(e),s=n.indexOf(e),(0<=l||0<=s)&&(t+=1,s<0&&(s=0),a<0&&(a=s))}),0<t){var c={};if(c.rank=t,c.str="<li><a href='"+i+"' class='search-result-title'>"+r+"</a>",0<=a){var u=a-20,o=a+80;u<0&&(u=0),0==u&&(o=100),o>n.length&&(o=n.length);var g=n.substr(u,o),f=new RegExp(p.join("|"),"gi");g=g.replace(f,function(e){return'<em class="search-keyword">'+e+"</em>"}),c.str+='<p class="search-result">'+g+"...</p>"}c.str+="</li>",h.push(c)}}),h.length)){h.sort(function(e,t){return t.rank-e.rank});for(var e='<ul class="search-result-list">',t=0;t<h.length;t++)e+=h[t].str;e+="</ul>",n.innerHTML=e}})}}})};