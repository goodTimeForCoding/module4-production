/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: ARTICLE_COUNT, Urls, ALERT_SHOW_TIME, Pages, ArticlePositions, isFullData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLE_COUNT", function() { return ARTICLE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Urls", function() { return Urls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_SHOW_TIME", function() { return ALERT_SHOW_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return Pages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePositions", function() { return ArticlePositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullData", function() { return isFullData; });
const ARTICLE_COUNT = 3;

const ALERT_SHOW_TIME = 3000;

const Urls = {
  ABOUT: 'https://course.vue.panfilov.academy/rest/v1/about',
  ARTICLES: 'https://course.vue.panfilov.academy/rest/v1/blog/articles',
  ARTICLE: 'https://course.vue.panfilov.academy/rest/v1/blog/article/',
  FEATURED: 'https://course.vue.panfilov.academy/rest/v1/blog/featured',
};

const Pages = {
  HOME: 'home',
  ARTICLE: 'article',
  BLOG: 'blog',
}

const ArticlePositions = {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
};

const isFullData = {
  YES: true,
  NO: false,
};




/***/ }),

/***/ "./src/controller/controller.js":
/*!**************************************!*\
  !*** ./src/controller/controller.js ***!
  \**************************************/
/*! exports provided: homeRoute, blogRoute, aboutRoute, articleRoute, errorRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRoute", function() { return homeRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogRoute", function() { return blogRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutRoute", function() { return aboutRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleRoute", function() { return articleRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRoute", function() { return errorRoute; });
/* harmony import */ var _model_fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/fetch.js */ "./src/model/fetch.js");
/* harmony import */ var _view_render_featured_article_bottom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/render/featured-article-bottom.js */ "./src/view/render/featured-article-bottom.js");
/* harmony import */ var _view_render_featured_article_top_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/render/featured-article-top.js */ "./src/view/render/featured-article-top.js");
/* harmony import */ var _view_render_home_articles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/render/home-articles.js */ "./src/view/render/home-articles.js");
/* harmony import */ var _view_render_articles_container_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/render/articles-container.js */ "./src/view/render/articles-container.js");
/* harmony import */ var _view_render_error_page_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/render/error-page.js */ "./src/view/render/error-page.js");
/* harmony import */ var _view_render_about_page_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/render/about-page.js */ "./src/view/render/about-page.js");
/* harmony import */ var _view_render_article_page_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/render/article-page.js */ "./src/view/render/article-page.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../const.js */ "./src/const.js");











const homeNavNode = document.querySelector('[data-role=nav-home]');
const blogNavNode = document.querySelector('[data-role=nav-blog]');
const aboutNavNode = document.querySelector('[data-role=nav-about]');
const siteMainElement = document.querySelector('.page-main');

let activeNavNode;

const setActiveNavNode = (node) => {
  if (activeNavNode) {
    activeNavNode.classList.remove('site-list__item--active');
  }
  activeNavNode = node;
  activeNavNode.classList.add('site-list__item--active');
};

const homeRoute = () => {
  siteMainElement.classList.add('page__body--main');
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__["removeElements"])(siteMainElement);
  Object(_view_render_articles_container_js__WEBPACK_IMPORTED_MODULE_4__["renderArticlesContainer"])();
  Object(_model_fetch_js__WEBPACK_IMPORTED_MODULE_0__["loadFeaturedData"])(_view_render_featured_article_top_js__WEBPACK_IMPORTED_MODULE_2__["renderFeaturedArticleTop"], _view_render_featured_article_bottom_js__WEBPACK_IMPORTED_MODULE_1__["renderFeaturedArticleBottom"]);
  Object(_model_fetch_js__WEBPACK_IMPORTED_MODULE_0__["loadArticlesData"])(_view_render_home_articles_js__WEBPACK_IMPORTED_MODULE_3__["renderHomeArticles"], _const_js__WEBPACK_IMPORTED_MODULE_9__["isFullData"].NO);
  setActiveNavNode(homeNavNode);
};

const blogRoute = () => {
  siteMainElement.classList.remove('page__body--main');
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__["removeElements"])(siteMainElement);
  Object(_view_render_articles_container_js__WEBPACK_IMPORTED_MODULE_4__["renderArticlesContainer"])();
  Object(_model_fetch_js__WEBPACK_IMPORTED_MODULE_0__["loadFeaturedData"])(_view_render_featured_article_top_js__WEBPACK_IMPORTED_MODULE_2__["renderFeaturedArticleTop"]);
  Object(_model_fetch_js__WEBPACK_IMPORTED_MODULE_0__["loadArticlesData"])(_view_render_home_articles_js__WEBPACK_IMPORTED_MODULE_3__["renderHomeArticles"], _const_js__WEBPACK_IMPORTED_MODULE_9__["isFullData"].YES);
  setActiveNavNode(blogNavNode);
};

const aboutRoute = () => {
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__["removeElements"])(siteMainElement);
  Object(_model_fetch_js__WEBPACK_IMPORTED_MODULE_0__["loadAboutData"])(_view_render_about_page_js__WEBPACK_IMPORTED_MODULE_6__["renderAboutPage"]);
  setActiveNavNode(aboutNavNode);
};

const articleRoute = (params) => {
  siteMainElement.classList.remove('page__body--main');
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__["removeElements"])(siteMainElement);
  if (activeNavNode) {
    activeNavNode.classList.remove('site-list__item--active');
  }
  Object(_model_fetch_js__WEBPACK_IMPORTED_MODULE_0__["loadArticleData"])(_view_render_article_page_js__WEBPACK_IMPORTED_MODULE_7__["renderArticlePage"], params);
};

const errorRoute = () => {
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__["removeElements"])(siteMainElement);
  Object(_view_render_error_page_js__WEBPACK_IMPORTED_MODULE_5__["renderErrorPage"])();
};




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/router.js */ "./src/router/router.js");


Object(_router_router_js__WEBPACK_IMPORTED_MODULE_0__["init"])();


/***/ }),

/***/ "./src/model/fetch.js":
/*!****************************!*\
  !*** ./src/model/fetch.js ***!
  \****************************/
/*! exports provided: loadArticlesData, loadFeaturedData, loadAboutData, loadArticleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticlesData", function() { return loadArticlesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFeaturedData", function() { return loadFeaturedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAboutData", function() { return loadAboutData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadArticleData", function() { return loadArticleData; });
/* harmony import */ var _view_alerts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/alerts.js */ "./src/view/alerts.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const loadArticlesData = async (renderArticles, isFullData) => {
  try {
    const response = await fetch(_const_js__WEBPACK_IMPORTED_MODULE_1__["Urls"].ARTICLES);
    const data = await response.json();
    isFullData ? renderArticles(data) : renderArticles(data.slice(0, 3));
  } catch(e) {
    Object(_view_alerts_js__WEBPACK_IMPORTED_MODULE_0__["showAlert"])('Не удалось загрузить данные с сервера', _const_js__WEBPACK_IMPORTED_MODULE_1__["ALERT_SHOW_TIME"]);
  }
};

const loadFeaturedData = async (renderFeaturedAticleTop, renderFeaturedAticleBottom = null) => {
  try {
    const response = await fetch(_const_js__WEBPACK_IMPORTED_MODULE_1__["Urls"].FEATURED);
    const data = await response.json();
    if (renderFeaturedAticleBottom) {
      renderFeaturedAticleTop(data);
      renderFeaturedAticleBottom(data);
    }
    renderFeaturedAticleTop(data);
  } catch(e) {
    Object(_view_alerts_js__WEBPACK_IMPORTED_MODULE_0__["showAlert"])('Не удалось загрузить данные с сервера', _const_js__WEBPACK_IMPORTED_MODULE_1__["ALERT_SHOW_TIME"]);
  }
};

const loadAboutData = async (renderAboutPage) => {
  try {
    const response = await fetch(_const_js__WEBPACK_IMPORTED_MODULE_1__["Urls"].ABOUT);
    const data = await response.json();
    renderAboutPage(data);
  } catch(e) {
    Object(_view_alerts_js__WEBPACK_IMPORTED_MODULE_0__["showAlert"])('Не удалось загрузить данные с сервера', _const_js__WEBPACK_IMPORTED_MODULE_1__["ALERT_SHOW_TIME"]);
  }
};

const loadArticleData = async (renderArticle, id) => {
  try {
    const response = await fetch(_const_js__WEBPACK_IMPORTED_MODULE_1__["Urls"].ARTICLE + id);
    const data = await response.json();
    const responsePrevData = await fetch(_const_js__WEBPACK_IMPORTED_MODULE_1__["Urls"].ARTICLE + data.prevId);
    const prevData = await responsePrevData.json();
    const responseNextData = await fetch(_const_js__WEBPACK_IMPORTED_MODULE_1__["Urls"].ARTICLE + data.nextId);
    const nextData = await responseNextData.json();
    renderArticle(data, prevData.title, nextData.title);
  } catch(e) {
    Object(_view_alerts_js__WEBPACK_IMPORTED_MODULE_0__["showAlert"])('Не удалось загрузить данные с сервера', _const_js__WEBPACK_IMPORTED_MODULE_1__["ALERT_SHOW_TIME"]);
  }
};




/***/ }),

/***/ "./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _controller_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/controller.js */ "./src/controller/controller.js");
/* harmony import */ var _view_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/burger.js */ "./src/view/burger.js");



const getRouteInfo = () => {
  const hash = location.hash ? location.hash.slice(1) : '';
  const [name, id] = hash.split('/');

  return {name, params: {id}};
};

const handleHash = () => {
  //информация о текущем маршруте
  const {name, params} = getRouteInfo();

  if (name) {
    const routeName = name;
    const id = params.id;
    switch (routeName) {
      case '':
        Object(_controller_controller_js__WEBPACK_IMPORTED_MODULE_0__["homeRoute"])();
        break;
      case 'home':
        Object(_controller_controller_js__WEBPACK_IMPORTED_MODULE_0__["homeRoute"])();
        break;
      case 'blog':
        Object(_controller_controller_js__WEBPACK_IMPORTED_MODULE_0__["blogRoute"])();
        break;
      case 'about':
        Object(_controller_controller_js__WEBPACK_IMPORTED_MODULE_0__["aboutRoute"])();
        break;
      case 'article':
        Object(_controller_controller_js__WEBPACK_IMPORTED_MODULE_0__["articleRoute"])(id);
        break;
      default:
        Object(_controller_controller_js__WEBPACK_IMPORTED_MODULE_0__["errorRoute"])();
        break;
    }
  }
};

const init = () => {
  if (getRouteInfo().name === '') {
    document.location = '#home';
  }
  Object(_view_burger_js__WEBPACK_IMPORTED_MODULE_1__["addBurgerFunction"])();
  addEventListener('hashchange', handleHash);
  handleHash();
};




/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: render, remove, secToMinConvert, removeElements, convertSecToDate, convertSecToNewDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secToMinConvert", function() { return secToMinConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElements", function() { return removeElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSecToDate", function() { return convertSecToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSecToNewDate", function() { return convertSecToNewDate; });
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const remove = (component) => {
  if (component === null) {
    return;
  }
  component.remove();
};

const secToMinConvert = (secTime) => {
  return Math.round(secTime / 60);
};

const removeElements = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const convertSecToDate = (createdDate) => {
  const newDate = new Date(createdDate * 1000);
  const year = newDate.getFullYear();
  let month = newDate.getMonth();
  let date = newDate.getMonth();
  if (month < 10) {
    month = '0' + month;
  }
  if (date < 10) {
    date = '0' + date;
  }
  return year + '-' + month + '-' + date;
};

const convertSecToNewDate = (createdDate) => {
  const newDate = new Date(createdDate * 1000);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const date = newDate.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[month - 1] + ' ' + date + ', ' + year;
};




/***/ }),

/***/ "./src/view/alerts.js":
/*!****************************!*\
  !*** ./src/view/alerts.js ***!
  \****************************/
/*! exports provided: showAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlert", function() { return showAlert; });
const showAlert = (message, time) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, time);
};




/***/ }),

/***/ "./src/view/burger.js":
/*!****************************!*\
  !*** ./src/view/burger.js ***!
  \****************************/
/*! exports provided: addBurgerFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBurgerFunction", function() { return addBurgerFunction; });
const addBurgerFunction = () => {
  const navMain = document.querySelector('.main-nav');
  const navToggle = navMain.querySelector('.main-nav__toggle');

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
};





/***/ }),

/***/ "./src/view/components/about.js":
/*!**************************************!*\
  !*** ./src/view/components/about.js ***!
  \**************************************/
/*! exports provided: createAboutTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAboutTemplate", function() { return createAboutTemplate; });
const createAboutTemplate = (data) => {

  const {content, title} = data;

  return `<section class="about about__wrap">
  <h1 class="about__header">${title}</h1>
  <div class="about__text">${content}</div>
</section>`;
};


/***/ }),

/***/ "./src/view/components/article-detail.js":
/*!***********************************************!*\
  !*** ./src/view/components/article-detail.js ***!
  \***********************************************/
/*! exports provided: createArticleTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArticleTemplate", function() { return createArticleTemplate; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");


const createArticleTemplate = (data, prevData, nextData) => {

  const {author, createdAt, description, nextId, prevId, readTime, title, tag} = data;
  const {name, about, nick} = author;
  const nextItem = nextId ? nextId : 1;
  const prevItem = prevId ? prevId : 9;
  const createDate = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["convertSecToDate"])(createdAt);
  const createNewDate = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["convertSecToNewDate"])(createdAt);

  return `<section class="article-detail">
  <h1 class="visually-hidden">Full info about article</h1>
    <div class="article-detail__banner">
      <picture>
        <source media="(min-width: 1366px)" srcset="assets/Article-top-Image(desktop).jpg">
        <source media="(min-width: 768px)" srcset="assets/Article-top-Image(tablet).jpg"><img
          class="article-detail__img" src="assets/Article-top-Image(mobile).jpg" alt="Article banner image">
      </picture>
    </div>
    <div class="article-detail__info">
      <h2 class="article-detail__header">${title}</h2>
      <small class="article-detail__brief-inform">${name} &#8226; <time datetime="${createDate}">${createNewDate}</time>(${readTime}
        mins read)<br></small><small class="article-detail__tag">#${tag.name}</small>
        <div class="article-detail__text">${description}</div>
    </div>
    <div class="article-detail__author author">
      <h2 class="author__header">ABOUT THE AUTHOR</h2>
      <div class="author__wrap">
        <div class="author__avatar">
            <img class="author__img" src="assets/Profile-Picture.png" alt="${name} avatar">
        </div>
        <div class="author__info">
          <p class="author__name">${name}</p><small class="author__email">@${nick}</small>
        </div>
        <p class="author__text">${about}</p>
      </div>
    </div>
  </section>
  <div class="article-slider article-slider__wrap">
    <a class="article-slider__link" href="#article/${prevItem}">
      <span class="article-slider__btn-text article-slider__back-btn-text">Go back: <b>${prevData}</b></span>
    </a>
    <form action="#article/${prevItem}" style="position:absolute">
      <button class="button article-slider__button article-slider__button-back" type="submit"></button>
    </form>
    <a class="article-slider__link" href="#article/${nextItem}">
      <span class="article-slider__btn-text article-slider__next-btn-text">Next up: <b>${nextData}</b></span>
    </a>
    <form action="#article/${nextItem}" style="position:absolute; right:0px">
      <button class="button article-slider__button article-slider__button-next" type="submit"></button>
    </form>
  </div>`;
};


/***/ }),

/***/ "./src/view/components/article-temp.js":
/*!*********************************************!*\
  !*** ./src/view/components/article-temp.js ***!
  \*********************************************/
/*! exports provided: createArticleItemTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArticleItemTemplate", function() { return createArticleItemTemplate; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");


const createArticleItemTemplate = (articleData) => {
  const {author, createdAt, description, id, readTime, tag, title} = articleData;
  const time = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["secToMinConvert"])(readTime);
  const createDate = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["convertSecToDate"])(createdAt);
  const createClientDate = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["convertSecToNewDate"])(createdAt);

  return `<li class="article articles__item">
    <div class="article__wrap articles__item-wrap"><a class="article__link" href="#article/${id}">
        <h3 class="article__header">${title}</h3>
      </a>
      <p class="article__tag">${tag}</p><small class="article__author">${author} &#8226; <time
          datetime="${createDate}">${createClientDate}</time>(${time} mins read)</small>
      <div class="article__text articles__text">${description}</div>
    </div><a class="articles__item-img-link" href="#article/${id}"><img class="articles__item-img" src="http://placekitten.com/g/370/300"
        width="370" height="300" alt="Minimalism image"></a>
  </li>`;
};


/***/ }),

/***/ "./src/view/components/board.js":
/*!**************************************!*\
  !*** ./src/view/components/board.js ***!
  \**************************************/
/*! exports provided: createBoardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBoardTemplate", function() { return createBoardTemplate; });
const createBoardTemplate = () => {
  return `<section class="articles">
    <h2 class="articles__header">Editor’s Picks</h2>
    <ul class="articles__list ">
    </ul>
  </section>`;
};


/***/ }),

/***/ "./src/view/components/error.js":
/*!**************************************!*\
  !*** ./src/view/components/error.js ***!
  \**************************************/
/*! exports provided: createErrorTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErrorTemplate", function() { return createErrorTemplate; });
const createErrorTemplate = () => {
  return `
          <section>
            <h1 className="visually-hidden">Error</h1>
            <div>
              <b>404 Not Found.</b>
              <a href="#home">
                Перейти на главную
              </a>
            </div>
          </section>`;
};


/***/ }),

/***/ "./src/view/components/featured-article.js":
/*!*************************************************!*\
  !*** ./src/view/components/featured-article.js ***!
  \*************************************************/
/*! exports provided: createFeaturedArticleTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeaturedArticleTemplate", function() { return createFeaturedArticleTemplate; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");


const createFeaturedArticleTemplate = (data, position) => {

  const {image, title, tag, author, readTime, createdAt, description, id} = data;
  const time = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["secToMinConvert"])(readTime);
  const sectionAtr = (position === 'TOP') ? '<section class="article article__custom">' : '<section class="article article__custom article__bottom">';
  const createDate = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["convertSecToDate"])(createdAt);
  const createClientDate = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["convertSecToNewDate"])(createdAt);

  return `
  <style id="bg-img">
  @media (min-width: 768px) {
    .article__custom {
      background-image: url(${image});
    }
  }
  </style>
  ${sectionAtr}
  <h2 class="visually-hidden">Top article</h2>
  <div class="article__wrap">
    <a class="article__link" href="#article/${id}">
      <h3 class="article__header">${title.slice(17)}</h3>
    </a>
    <p class="article__tag">${tag}</p><small class="article__author">${author} &#8226; <time
        datetime="${createDate}">${createClientDate}</time> (${time} mins read)</small>
    <p class="article__text">${description}</p>
  </div>
</section>`;
};


/***/ }),

/***/ "./src/view/render/about-page.js":
/*!***************************************!*\
  !*** ./src/view/render/about-page.js ***!
  \***************************************/
/*! exports provided: renderAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAboutPage", function() { return renderAboutPage; });
/* harmony import */ var _components_about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/about.js */ "./src/view/components/about.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");



const renderAboutPage = (aboutDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainElement, Object(_components_about_js__WEBPACK_IMPORTED_MODULE_0__["createAboutTemplate"])(aboutDatum), 'beforeend');
};




/***/ }),

/***/ "./src/view/render/article-page.js":
/*!*****************************************!*\
  !*** ./src/view/render/article-page.js ***!
  \*****************************************/
/*! exports provided: renderArticlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderArticlePage", function() { return renderArticlePage; });
/* harmony import */ var _components_article_detail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/article-detail.js */ "./src/view/components/article-detail.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");



const renderArticlePage = (articleDatum, prevArticleDatum, nextArticleDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainElement, Object(_components_article_detail_js__WEBPACK_IMPORTED_MODULE_0__["createArticleTemplate"])(articleDatum, prevArticleDatum, nextArticleDatum), 'beforeend');
};




/***/ }),

/***/ "./src/view/render/articles-container.js":
/*!***********************************************!*\
  !*** ./src/view/render/articles-container.js ***!
  \***********************************************/
/*! exports provided: renderArticlesContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderArticlesContainer", function() { return renderArticlesContainer; });
/* harmony import */ var _components_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/board.js */ "./src/view/components/board.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");



const renderArticlesContainer = () => {
  const siteMainElement = document.querySelector('.page-main');
  const articlesContainerElement = siteMainElement.querySelector('.articles');
  if (articlesContainerElement != null) {
    articlesContainerElement.remove();
  }
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainElement, Object(_components_board_js__WEBPACK_IMPORTED_MODULE_0__["createBoardTemplate"])(), 'beforeend');
};




/***/ }),

/***/ "./src/view/render/error-page.js":
/*!***************************************!*\
  !*** ./src/view/render/error-page.js ***!
  \***************************************/
/*! exports provided: renderErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderErrorPage", function() { return renderErrorPage; });
/* harmony import */ var _components_error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/error.js */ "./src/view/components/error.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");



const renderErrorPage = () => {
  const siteMainElement = document.querySelector('.page-main');
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(siteMainElement, Object(_components_error_js__WEBPACK_IMPORTED_MODULE_0__["createErrorTemplate"])(), 'beforeend');
};




/***/ }),

/***/ "./src/view/render/featured-article-bottom.js":
/*!****************************************************!*\
  !*** ./src/view/render/featured-article-bottom.js ***!
  \****************************************************/
/*! exports provided: renderFeaturedArticleBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFeaturedArticleBottom", function() { return renderFeaturedArticleBottom; });
/* harmony import */ var _components_featured_article_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/featured-article.js */ "./src/view/components/featured-article.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const.js */ "./src/const.js");




const renderFeaturedArticleBottom = (featuredDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  const articlesContainerElement = siteMainElement.querySelector('.articles');
  const featuredArticleElement = siteMainElement.querySelector('.article__bottom');
  const bgStyleElement = siteMainElement.querySelector('#bg-img');
  if (featuredArticleElement != null) {
    featuredArticleElement.remove();
    bgStyleElement.remove();
  }
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(articlesContainerElement, Object(_components_featured_article_js__WEBPACK_IMPORTED_MODULE_0__["createFeaturedArticleTemplate"])(featuredDatum, _const_js__WEBPACK_IMPORTED_MODULE_2__["ArticlePositions"].BOTTOM), 'afterend');
};




/***/ }),

/***/ "./src/view/render/featured-article-top.js":
/*!*************************************************!*\
  !*** ./src/view/render/featured-article-top.js ***!
  \*************************************************/
/*! exports provided: renderFeaturedArticleTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFeaturedArticleTop", function() { return renderFeaturedArticleTop; });
/* harmony import */ var _components_featured_article_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/featured-article.js */ "./src/view/components/featured-article.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const.js */ "./src/const.js");




const renderFeaturedArticleTop = (featuredDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  const articlesContainerElement = siteMainElement.querySelector('.articles');
  const featuredArticleElementTop = siteMainElement.querySelector('.article__custom');
  const bgStyleElement = siteMainElement.querySelector('#bg-img');
  if (featuredArticleElementTop != null) {
    featuredArticleElementTop.remove();
    bgStyleElement.remove();
  }
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(articlesContainerElement, Object(_components_featured_article_js__WEBPACK_IMPORTED_MODULE_0__["createFeaturedArticleTemplate"])(featuredDatum, _const_js__WEBPACK_IMPORTED_MODULE_2__["ArticlePositions"].TOP), 'beforebegin');
};




/***/ }),

/***/ "./src/view/render/home-articles.js":
/*!******************************************!*\
  !*** ./src/view/render/home-articles.js ***!
  \******************************************/
/*! exports provided: renderHomeArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderHomeArticles", function() { return renderHomeArticles; });
/* harmony import */ var _components_article_temp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/article-temp.js */ "./src/view/components/article-temp.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");



const renderHomeArticles = (articlesDatum) => {
  const siteMainElement = document.querySelector('.page-main');
  const articlesListElement = siteMainElement.querySelector('.articles__list');
  const articlesItemElement = siteMainElement.querySelector('.articles__item');

  if (articlesItemElement != null) {
    while (articlesListElement.firstChild) {
      articlesListElement.removeChild(articlesListElement.firstChild);
    }
  }

  articlesDatum.forEach((articleData) => {
    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["render"])(articlesListElement, Object(_components_article_temp_js__WEBPACK_IMPORTED_MODULE_0__["createArticleItemTemplate"])(articleData), 'beforeend');
  });

};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map