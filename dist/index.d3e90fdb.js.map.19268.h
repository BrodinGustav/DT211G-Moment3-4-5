{"mappings":"ACEA,IAAI,EAAU,SAAS,cAAc,CAAC,aAClC,EAAW,SAAS,cAAc,CAAC,cAKvC,SAAS,IACL,IAAI,EAAY,SAAS,cAAc,CAAC,WAIzC,AAAkB,CAAA,SAAlB,AAFa,OAAO,gBAAgB,CAAC,GAE/B,OAAO,CACZ,EAAU,KAAK,CAAC,OAAO,CAAG,QAG1B,EAAU,KAAK,CAAC,OAAO,CAAG,MAG9B,CAfA,EAAQ,gBAAgB,CAAC,QAAS,GAClC,EAAS,gBAAgB,CAAC,QAAS","sources":["<anon>","src/js/main.js"],"sourcesContent":["var $7c2a5a49b18ccd9c$exports = {};\n\"use strict\";\nlet $7c2a5a49b18ccd9c$var$openBtn = document.getElementById(\"open-menu\");\nlet $7c2a5a49b18ccd9c$var$closeBtn = document.getElementById(\"close-menu\");\n$7c2a5a49b18ccd9c$var$openBtn.addEventListener(\"click\", $7c2a5a49b18ccd9c$var$toggleMenu);\n$7c2a5a49b18ccd9c$var$closeBtn.addEventListener(\"click\", $7c2a5a49b18ccd9c$var$toggleMenu);\nfunction $7c2a5a49b18ccd9c$var$toggleMenu() {\n    let navMenuEl = document.getElementById(\"nav-menu\");\n    let style = window.getComputedStyle(navMenuEl);\n    if (style.display === \"none\") navMenuEl.style.display = \"block\";\n    else navMenuEl.style.display = \"none\";\n}\n\n\n//# sourceMappingURL=index.d3e90fdb.js.map\n","\"use strict\"\r\n\r\nlet openBtn = document.getElementById(\"open-menu\");\r\nlet closeBtn = document.getElementById(\"close-menu\");\r\n\r\nopenBtn.addEventListener('click', toggleMenu);\r\ncloseBtn.addEventListener('click', toggleMenu);\r\n\r\nfunction toggleMenu(){\r\n    let navMenuEl = document.getElementById(\"nav-menu\");\r\n\r\n    let style = window.getComputedStyle(navMenuEl);\r\n\r\nif(style.display === \"none\") {\r\n    navMenuEl.style.display = \"block\";\r\n}\r\nelse {\r\n    navMenuEl.style.display = \"none\";\r\n}\r\n\r\n}"],"names":["$7c2a5a49b18ccd9c$var$openBtn","document","getElementById","$7c2a5a49b18ccd9c$var$closeBtn","$7c2a5a49b18ccd9c$var$toggleMenu","navMenuEl","style","window","getComputedStyle","display","addEventListener"],"version":3,"file":"index.d3e90fdb.js.map"}