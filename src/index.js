import "./css/base.scss";

// import menuTemplate from './tempaltes/menu.handlebars'
import menuTemplate from './templates/menu.hbs'
import menuData from './js/menu-data'
import refs from './js/refs'



let markup = menuTemplate(menuData)
refs.root.innerHTML = markup




// npm i handlebars handlebars-loader --save