!function(e){var o=!1;if("function"==typeof define&&define.amd&&(define(e),o=!0),"object"==typeof exports&&(module.exports=e(),o=!0),!o){var t=window.Cookies,i=window.Cookies=e();i.noConflict=function(){return window.Cookies=t,i}}}(function(){function g(){for(var e=0,o={};e<arguments.length;e++){var t=arguments[e];for(var i in t)o[i]=t[i]}return o}return function e(m){function p(e,o,t){var i;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(t=g({path:"/"},p.defaults,t)).expires){var n=new Date;n.setMilliseconds(n.getMilliseconds()+864e5*t.expires),t.expires=n}t.expires=t.expires?t.expires.toUTCString():"";try{i=JSON.stringify(o),/^[\{\[]/.test(i)&&(o=i)}catch(e){}o=m.write?m.write(o,e):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var a in t)t[a]&&(s+="; "+a,!0!==t[a]&&(s+="="+t[a]));return document.cookie=e+"="+o+s}e||(i={});for(var r=document.cookie?document.cookie.split("; "):[],c=/(%[0-9A-Z]{2})+/g,l=0;l<r.length;l++){var d=r[l].split("="),k=d.slice(1).join("=");this.json||'"'!==k.charAt(0)||(k=k.slice(1,-1));try{var u=d[0].replace(c,decodeURIComponent);if(k=m.read?m.read(k,u):m(k,u)||k.replace(c,decodeURIComponent),this.json)try{k=JSON.parse(k)}catch(e){}if(e===u){i=k;break}e||(i[u]=k)}catch(e){}}return i}}return(p.set=p).get=function(e){return p.call(p,e)},p.getJSON=function(){return p.apply({json:!0},[].slice.call(arguments))},p.defaults={},p.remove=function(e,o){p(e,"",g(o,{expires:-1}))},p.withConverter=e,p}(function(){})}),window["gdpr-cookie-notice-templates"]={},window["gdpr-cookie-notice-templates"]["bar.html"]='<div class="gdpr-cookie-notice">\n  <p class="gdpr-cookie-notice-description">{description}</p>\n  <nav class="gdpr-cookie-notice-nav">\n    <a href="#" class="gdpr-cookie-notice-nav-item gdpr-cookie-notice-nav-item-settings">{settings}</a>\n    <a href="#" class="gdpr-cookie-notice-nav-item gdpr-cookie-notice-nav-item-accept gdpr-cookie-notice-nav-item-btn">{accept}</a>\n  </nav>\n</div>\n',window["gdpr-cookie-notice-templates"]["category.html"]='<li class="gdpr-cookie-notice-modal-cookie">\n  <div class="gdpr-cookie-notice-modal-cookie-row">\n    <h3 class="gdpr-cookie-notice-modal-cookie-title">{title}</h3>\n    <input type="checkbox" name="gdpr-cookie-notice-{prefix}" checked="checked" id="gdpr-cookie-notice-{prefix}" class="gdpr-cookie-notice-modal-cookie-input">\n    <label class="gdpr-cookie-notice-modal-cookie-input-switch" for="gdpr-cookie-notice-{prefix}"></label>\n  </div>\n  <p class="gdpr-cookie-notice-modal-cookie-info">{desc}</p>\n</li>\n',window["gdpr-cookie-notice-templates"]["modal.html"]='<div class="gdpr-cookie-notice-modal">\n  <div class="gdpr-cookie-notice-modal-content">\n    <div class="gdpr-cookie-notice-modal-header">\n      <h2 class="gdpr-cookie-notice-modal-title">{settings}</h2>\n      <button type="button" class="gdpr-cookie-notice-modal-close"></button>\n    </div>\n    <ul class="gdpr-cookie-notice-modal-cookies"></ul>\n    <div class="gdpr-cookie-notice-modal-footer">\n      <a href="#" class="gdpr-cookie-notice-modal-footer-item gdpr-cookie-notice-modal-footer-item-statement">{statement}</a>\n      <a href="#" class="gdpr-cookie-notice-modal-footer-item gdpr-cookie-notice-modal-footer-item-save gdpr-cookie-notice-modal-footer-item-btn"><span>{save}</span></a>\n    </div>\n  </div>\n</div>\n';var gdprCookieNoticeLocales={};function gdprCookieNotice(s){var i="gdprcookienotice",a="gdpr-cookie-notice",r=window[a+"-templates"],n=Cookies.noConflict(),c=!1,l=!1,d=!1,k=["performance","analytics","marketing"];s.locale||(s.locale="en"),s.timeout||(s.timeout=500),s.domain||(s.domain=null),s.expiration||(s.expiration=30);var u=n.getJSON(i),m=new CustomEvent("gdprCookiesEnabled",{detail:u});function p(e){for(var o=0;o<k.length;o++)if(s[k[o]]&&!e[k[o]])for(var t=0;t<s[k[o]].length;t++)n.remove(s[k[o]][t]);g()}function g(){document.documentElement.classList.remove(a+"-loaded")}function v(e){var o={date:new Date,necessary:!0,performance:!0,analytics:!0,marketing:!0};if(e)for(var t=0;t<k.length;t++)id=a+"-cookie_"+k[t],null!==document.getElementById(id)&&(o[k[t]]=document.getElementById(id).checked);n.set(i,o,{expires:s.expiration,domain:s.domain}),p(o),m=new CustomEvent("gdprCookiesEnabled",{detail:o}),document.dispatchEvent(m)}function e(){if(l)return!1;var e,o,t=f("bar.html");document.body.insertAdjacentHTML("beforeend",t),e=document.querySelectorAll("."+a+"-nav-item-settings")[0],o=document.querySelectorAll("."+a+"-nav-item-accept")[0],e.addEventListener("click",function(e){e.preventDefault(),b()}),o.addEventListener("click",function(e){e.preventDefault(),v()}),l=!0}function o(){e(),setTimeout(function(){document.documentElement.classList.add(a+"-loaded")},s.timeout)}function f(e,t){var o=r[e],i=gdprCookieNoticeLocales[s.locale];if(t?t+="_":t="",!("string"==typeof o&&i instanceof Object))return!1;for(var n in i)return o.replace(/({([^}]+)})/g,function(e){var o=e.replace(/{/,"").replace(/}/,"");return"prefix"==o?t.slice(0,-1):i[o]?i[o]:i[t+o]?i[t+o]:e})}function t(){if(c)return!1;var e=f("modal.html");document.body.insertAdjacentHTML("beforeend",e);var o=document.querySelector("."+a+"-modal-cookies");o.innerHTML+=f("category.html","cookie_essential");var t=document.querySelector("."+a+"-modal-cookie-input"),i=document.querySelector("."+a+"-modal-cookie-input-switch");i.innerHTML=gdprCookieNoticeLocales[s.locale].always_on,i.classList.add(a+"-modal-cookie-state"),i.classList.remove(a+"-modal-cookie-input-switch"),t.remove();for(var n=0;n<k.length;n++)s[k[n]]&&(o.innerHTML+=f("category.html","cookie_"+k[n]));if(function(){var e=document.querySelectorAll("."+a+"-modal-close")[0],o=document.querySelectorAll("."+a+"-modal-footer-item-statement")[0],t=document.querySelectorAll("."+a+"-modal-cookie-title"),i=document.querySelectorAll("."+a+"-modal-footer-item-save")[0];e.addEventListener("click",function(){return document.documentElement.classList.remove(a+"-show-modal"),!1}),o.addEventListener("click",function(e){e.preventDefault(),window.location.href=s.statement});for(var n=0;n<t.length;n++)t[n].addEventListener("click",function(){return this.parentNode.parentNode.classList.toggle("open"),!1});i.addEventListener("click",function(e){e.preventDefault(),i.classList.add("saved"),setTimeout(function(){i.classList.remove("saved"),g()},1e3),v(!0)})}(),u)for(n=0;n<k.length;n++)s[k[n]]&&(id=a+"-cookie_"+k[n],null!==document.getElementById(id)&&(document.getElementById(id).checked=u[k[n]]));c=!0}function b(){t(),document.documentElement.classList.add(a+"-show-modal")}u?(p(u),document.dispatchEvent(m)):(o(),s.implicit&&window.addEventListener("scroll",function e(){var o,t,i,n,s;o=window.innerHeight||(document.documentElement||document.body).clientHeight,s=document,t=Math.max(s.body.scrollHeight,s.documentElement.scrollHeight,s.body.offsetHeight,s.documentElement.offsetHeight,s.body.clientHeight,s.documentElement.clientHeight),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,n=t-o,25<Math.floor(i/n*100)&&!d&&(d=!0)&&(v(),window.removeEventListener("click",e))}));var h=document.querySelectorAll("."+a+"-settings-button");if(h)for(var y=0;y<h.length;y++)h[y].addEventListener("click",function(e){e.preventDefault(),b()})}gdprCookieNoticeLocales.cz={description:"K tomu, abychom vylepšili váš pozitivní zážitek z procházení našeho webu, využíváme soubory cookies. Soubory cookies používáme k personalizaci obsahu a reklam, poskytování funkcí sociálních médií a analýze naší návštěvnosti. Informace o tom, jak náš web používáte, sdílíme se svými partnery pro sociální média, inzerci a analýzy. Partneři tyto údaje mohou zkombinovat s dalšími informacemi, které jste jim poskytli nebo které získali v důsledku toho, že používáte jejich služby.",settings:"Nastavení cookies",accept:"Přijmout cookies",statement:"Prohlášení o cookies",save:"Uložit",always_on:"Vždy zapnuto",cookie_essential_title:"Nutné",cookie_essential_desc:"Nutné cookies pomáhají, aby byla webová stránka použitelná tak, že umožní základní funkce jako navigace stránky a přístup k zabezpečeným sekcím webové stránky. Webová stránka nemůže správně fungovat bez těchto cookies.",cookie_performance_title:"Preferenční",cookie_performance_desc:"Preferenční cookies umožňují, aby si webová stránka zapamatovala informace, které mění, jak se webová stránka chová nebo jak vypadá. Je to například preferovaný jazyk nebo region, kde se nacházíte.",cookie_analytics_title:"Analytické",cookie_analytics_desc:"Analytické cookies pomáhají majitelům webových stránek, aby porozuměli, jak návštěvníci používají webové stránky. Anonymně sbírají a sdělují informace.",cookie_marketing_title:"Marketingové",cookie_marketing_desc:"Marketingové cookies jsou používány pro sledování návštěvníků na webových stránkách. Záměrem je zobrazit reklamu, která je relevantní a zajímavá pro jednotlivého uživatele a tímto hodnotnější pro vydavatele a inzerenty třetích stran."},gdprCookieNoticeLocales.da={description:"Vi bruger cookies til at forbedre din oplevelse på siden, personalisere indhold og reklamer, til sociale mediers funktioner og til at analysere vores trafik. Læs om vores cookies og om hvordan du kan fravælge dem ved at klikke på Cookie Indstillinger. Du accepterer vores cookies hvis du fortsætter med at bruge vores site.",settings:"Cookie Indstillinger",accept:"Accepter cookies",statement:"Vores cookie politik",save:"Gem indstillinger",always_on:"Altid aktiveret",cookie_essential_title:"Nødvendige cookies",cookie_essential_desc:"Nødvendige cookies gør websitet brugbart og sørger for basale funktioner som navigation og adgang til låste sektioner på sitet. Websitet fungerer ikke uden disse cookies.",cookie_performance_title:"Præference cookies",cookie_performance_desc:"Disse cookies bruges til at forbedre oplevelsen og funktionaliteten men er ikke essentielle. For eksempel kan de gemme dit foretrukne sprog og/eller hvilken region du er i.",cookie_analytics_title:"Analytics cookies",cookie_analytics_desc:"Vi bruger analytics cookies til at måle hvordan websitets indhold bruges, hvilket hjælper os med at skræddersy websitet til dig så du får den bedste oplevelse.",cookie_marketing_title:"Marketing cookies",cookie_marketing_desc:"Disse cookies bruges til at gøre reklamer mere relevante for dig. Det er meningen at de reklamer der vises er relevante for den individuelle bruger og derved mere værdifulde for udbydere og tredjeparts annoncører."},gdprCookieNoticeLocales.en={description:"We use cookies to offer you a better browsing experience, personalise content and ads, to provide social media features and to analyse our traffic. Read about how we use cookies and how you can control them by clicking Cookie Settings. You consent to our cookies if you continue to use this website.",settings:"Cookie settings",accept:"Accept cookies",statement:"Our cookie statement",save:"Save settings",always_on:"Always on",cookie_essential_title:"Essential website cookies",cookie_essential_desc:"Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",cookie_performance_title:"Performance cookies",cookie_performance_desc:"These cookies are used to enhance the performance and functionality of our websites but are non-essential to their use. For example it stores your preferred language or the region that you are in.",cookie_analytics_title:"Analytics cookies",cookie_analytics_desc:"We use analytics cookies to help us measure how users interact with website content, which helps us customize our websites and application for you in order to enhance your experience.",cookie_marketing_title:"Marketing cookies",cookie_marketing_desc:"These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers."},gdprCookieNoticeLocales.fr={description:"Nous utilisons des cookies pour vous offrir une meilleure expérience de navigation, personnaliser le contenu et les annonces, fournir des fonctionnalités de médias sociaux et analyser notre trafic. Lisez comment nous utilisons les cookies et comment vous pouvez les contrôler en cliquant sur Réglage des cookies. Vous consentez à nos cookies si vous continuez à utiliser ce site.",settings:"Paramètres des cookies",accept:"Accepter",statement:"Conditions d'utilisations",save:"Enregistrer",always_on:"Toujours actif",cookie_essential_title:"Cookies indispensables au site web",cookie_essential_desc:"Les cookies nécessaires permttant de rendre un site Web utilisable en activant des fonctions de base telles que la navigation au sein des pages et l'accès à des zones sécurisées du site Web. Le site Web ne peut pas fonctionner correctement sans ces cookies.",cookie_performance_title:"Cookies de performance",cookie_performance_desc:"Ces cookies sont utilisés pour améliorer les performances et les fonctionnalités des sites Web, mais ils ne sont pas indispensables à leur utilisation. Par exemple, il stocke votre langue préférée ou la région dans laquelle vous vous trouvez.",cookie_analytics_title:"Cookies de statistiques",cookie_analytics_desc:"Nous utilisons des cookies d'analyse pour nous aider à mesurer la manière dont les utilisateurs interagissent avec le contenu du site Web, ce qui nous aide à personnaliser nos sites Web et notre application afin d'améliorer votre expérience.",cookie_marketing_title:"Cookies marketing",cookie_marketing_desc:"Ces cookies sont utilisés pour rendre les messages publicitaires plus pertinents pour vous et pour vos centres d'intérêt. L'objectifs est d'afficher des publicités pertinentes et engageantes pour l'utilisateur individuel et, par conséquent, plus utiles pour les éditeurs et les annonceurs tiers."},gdprCookieNoticeLocales.hu={description:"Ez a weboldal sütiket(cookie-kat) használ azért, hogy a weboldal működjön és jobb felhasználió élményt nyújtson. A Süti beállítások gombra kattintva több információt is megtudhat erről. Az oldal további használatával beleegyezik a sütik használatába.",settings:"Süti beállítások",accept:"Elfogadom",statement:"Süti nyilatkozatunk",save:"Mentés",always_on:"Mindig betölt",cookie_essential_title:"Szükséges sütik",cookie_essential_desc:"Ezek a weboldal megfelelő megjelenéséhez szükséges sütik, amelyek nélkül nem működne a weboldal.",cookie_performance_title:"Teljesítmény sütik",cookie_performance_desc:"Ezek a sütik kiegészítő funkciókat támogatnak az oldalon, például eltárolja, hogy milyen nyelven böngészi a weboldalt. Ezek nélkül nem biztos, hogy minden megfelelően fog működni.",cookie_analytics_title:"Statisztika sütik",cookie_analytics_desc:"Ezeket azért használjuk, hogy tájékozódni tudjunk arról, mikor, hányan és hogyan használják a weboldalunkat. Ezekkel az adatokkal tudjuk később optimalizálni a weboldalunkat a megfelelő felhasználói élményért.",cookie_marketing_title:"Marketing sütik",cookie_marketing_desc:"Ezek a sütik segítenek nekünk a hirdetések kezelésében, célzásában."},gdprCookieNoticeLocales.nl={description:"Wij gebruiken cookies om u deze website optimaal te kunnen gebruiken, inhoud en advertenties te personaliseren, social media-functies te bieden en ons verkeer te analyseren. Lees meer over hoe wij cookies gebruiken en hoe u ze kunt beheren door op Cookie instellingen te klikken. U gaat akkoord met onze cookies als u deze website blijft gebruiken.",settings:"Cookie instellingen",accept:"Accepteer cookies",statement:"Onze cookie verklaring",save:"Bewaar instellingen",always_on:"Altijd aan",cookie_essential_title:"Essentiële cookies",cookie_essential_desc:"Essentiële (noodzakelijke) cookies helpen een website bruikbaar te maken door basisfuncties zoals paginanavigatie en toegang tot beveiligde delen van de website in te schakelen. De website kan niet goed functioneren zonder deze cookies.",cookie_performance_title:"Prestatie cookies",cookie_performance_desc:"Deze cookies worden gebruikt om de prestaties en functionaliteit van onze websites te verbeteren, maar zijn niet essentieel voor gebruik. Het slaat bijvoorbeeld de taal van uw voorkeur op of de regio waarin u zich bevindt.",cookie_analytics_title:"Analytische cookies",cookie_analytics_desc:"We gebruiken analytische cookies om te meten hoe gebruikers omgaan met website en inhoud, waardoor we onze websites en applicaties voor u kunnen aanpassen om uw ervaring te verbeteren.",cookie_marketing_title:"Marketing cookies",cookie_marketing_desc:"Deze cookies worden gebruikt om advertenties te kunnen tonen die aansluit bij uw interesses. Het is de bedoeling advertenties weer te geven die relevant en aantrekkelijk zijn voor de individuele gebruiker en daardoor waardevoller voor uitgevers en externe adverteerders."};
//# sourceMappingURL=script.js.map
