{"mappings":"C,A,WCEA,IAAI,EAAU,SAAS,cAAc,CAAC,aAClC,EAAW,SAAS,cAAc,CAAC,cAKvC,SAAS,IACL,IAAI,EAAY,SAAS,cAAc,CAAC,WAIzC,AAAkB,CAAA,SAAlB,AAFa,OAAO,gBAAgB,CAAC,GAE/B,OAAO,CACZ,EAAU,KAAK,CAAC,OAAO,CAAG,QAG1B,EAAU,KAAK,CAAC,OAAO,CAAG,MAG9B,CAfA,EAAQ,gBAAgB,CAAC,QAAS,GAClC,EAAS,gBAAgB,CAAC,QAAS,E","sources":["<anon>","src/js/main.js"],"sourcesContent":["(function () {\nvar $51fd2d4f53243c44$exports = {};\n\"use strict\";\nlet $51fd2d4f53243c44$var$openBtn = document.getElementById(\"open-menu\");\nlet $51fd2d4f53243c44$var$closeBtn = document.getElementById(\"close-menu\");\n$51fd2d4f53243c44$var$openBtn.addEventListener(\"click\", $51fd2d4f53243c44$var$toggleMenu);\n$51fd2d4f53243c44$var$closeBtn.addEventListener(\"click\", $51fd2d4f53243c44$var$toggleMenu);\nfunction $51fd2d4f53243c44$var$toggleMenu() {\n    let navMenuEl = document.getElementById(\"nav-menu\");\n    let style = window.getComputedStyle(navMenuEl);\n    if (style.display === \"none\") navMenuEl.style.display = \"block\";\n    else navMenuEl.style.display = \"none\";\n}\n\n})();\n//# sourceMappingURL=index.631fd72e.js.map\n","\"use strict\"\r\n\r\nlet openBtn = document.getElementById(\"open-menu\");\r\nlet closeBtn = document.getElementById(\"close-menu\");\r\n\r\nopenBtn.addEventListener('click', toggleMenu);\r\ncloseBtn.addEventListener('click', toggleMenu);\r\n\r\nfunction toggleMenu(){\r\n    let navMenuEl = document.getElementById(\"nav-menu\");\r\n\r\n    let style = window.getComputedStyle(navMenuEl);\r\n\r\nif(style.display === \"none\") {\r\n    navMenuEl.style.display = \"block\";\r\n}\r\nelse {\r\n    navMenuEl.style.display = \"none\";\r\n}\r\n\r\n}"],"names":["$51fd2d4f53243c44$var$openBtn","document","getElementById","$51fd2d4f53243c44$var$closeBtn","$51fd2d4f53243c44$var$toggleMenu","navMenuEl","style","window","getComputedStyle","display","addEventListener"],"version":3,"file":"index.631fd72e.js.map"}