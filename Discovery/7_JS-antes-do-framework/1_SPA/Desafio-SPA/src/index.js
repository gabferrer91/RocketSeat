import { router } from "./router.js";

const routing = new router();
window.clickHandle = () => routing.clickHandle()

const defaultPath = '/Discovery/7_JS-antes-do-framework/1_SPA/Desafio-SPA/'
routing.add(defaultPath + "index.html", defaultPath+"pages/home.html")
routing.add("/", defaultPath + "pages/home.html")
routing.add("/universe", defaultPath + "pages/universe.html")
routing.add("/exploration", defaultPath + "pages/exploration.html")
routing.add(404, defaultPath + "pages/404.html")

routing.handle()

window.onpopstate = () => routing.handle()
window.route = () => routing.route()

