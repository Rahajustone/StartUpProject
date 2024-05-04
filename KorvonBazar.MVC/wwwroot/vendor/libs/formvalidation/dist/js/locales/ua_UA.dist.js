/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./wwwroot/vendor/libs/formvalidation/dist/js/locales/ua_UA.js":
/*!*********************************************************************!*\
  !*** ./wwwroot/vendor/libs/formvalidation/dist/js/locales/ua_UA.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);\n})(this, function () {\n  'use strict';\n\n  /**\n   * Ukrainian language package\n   * Translated by @oleg-voloshyn\n   */\n  var ua_UA = {\n    base64: {\n      default: 'Будь ласка, введіть коректний рядок base64'\n    },\n    between: {\n      default: 'Будь ласка, введіть значення від %s до %s',\n      notInclusive: 'Будь ласка, введіть значення між %s і %s'\n    },\n    bic: {\n      default: 'Будь ласка, введіть правильний номер BIC'\n    },\n    callback: {\n      default: 'Будь ласка, введіть коректне значення'\n    },\n    choice: {\n      between: 'Будь ласка, виберіть %s - %s опцій',\n      default: 'Будь ласка, введіть коректне значення',\n      less: 'Будь ласка, виберіть хоча б %s опцій',\n      more: 'Будь ласка, виберіть не більше %s опцій'\n    },\n    color: {\n      default: 'Будь ласка, введіть правильний номер кольору'\n    },\n    creditCard: {\n      default: 'Будь ласка, введіть правильний номер кредитної картки'\n    },\n    cusip: {\n      default: 'Будь ласка, введіть правильний номер CUSIP'\n    },\n    date: {\n      default: 'Будь ласка, введіть правильну дату',\n      max: 'Будь ласка, введіть дату перед %s',\n      min: 'Будь ласка, введіть дату після %s',\n      range: 'Будь ласка, введіть дату у діапазоні %s - %s'\n    },\n    different: {\n      default: 'Будь ласка, введіть інше значення'\n    },\n    digits: {\n      default: 'Будь ласка, введіть тільки цифри'\n    },\n    ean: {\n      default: 'Будь ласка, введіть правильний номер EAN'\n    },\n    ein: {\n      default: 'Будь ласка, введіть правильний номер EIN'\n    },\n    emailAddress: {\n      default: 'Будь ласка, введіть правильну адресу e-mail'\n    },\n    file: {\n      default: 'Будь ласка, виберіть файл'\n    },\n    greaterThan: {\n      default: 'Будь ласка, введіть значення більше або рівне %s',\n      notInclusive: 'Будь ласка, введіть значення більше %s'\n    },\n    grid: {\n      default: 'Будь ласка, введіть правильний номер GRId'\n    },\n    hex: {\n      default: 'Будь ласка, введіть правильний шістнадцятковий(16) номер'\n    },\n    iban: {\n      countries: {\n        AD: 'Андоррі',\n        AE: \"Об'єднаних Арабських Еміратах\",\n        AL: 'Албанії',\n        AO: 'Анголі',\n        AT: 'Австрії',\n        AZ: 'Азербайджані',\n        BA: 'Боснії і Герцеговині',\n        BE: 'Бельгії',\n        BF: 'Буркіна-Фасо',\n        BG: 'Болгарії',\n        BH: 'Бахрейні',\n        BI: 'Бурунді',\n        BJ: 'Беніні',\n        BR: 'Бразилії',\n        CH: 'Швейцарії',\n        CI: \"Кот-д'Івуарі\",\n        CM: 'Камеруні',\n        CR: 'Коста-Ріці',\n        CV: 'Кабо-Верде',\n        CY: 'Кіпрі',\n        CZ: 'Чехії',\n        DE: 'Германії',\n        DK: 'Данії',\n        DO: 'Домінікані',\n        DZ: 'Алжирі',\n        EE: 'Естонії',\n        ES: 'Іспанії',\n        FI: 'Фінляндії',\n        FO: 'Фарерських островах',\n        FR: 'Франції',\n        GB: 'Великобританії',\n        GE: 'Грузії',\n        GI: 'Гібралтарі',\n        GL: 'Гренландії',\n        GR: 'Греції',\n        GT: 'Гватемалі',\n        HR: 'Хорватії',\n        HU: 'Венгрії',\n        IE: 'Ірландії',\n        IL: 'Ізраїлі',\n        IR: 'Ірані',\n        IS: 'Ісландії',\n        IT: 'Італії',\n        JO: 'Йорданії',\n        KW: 'Кувейті',\n        KZ: 'Казахстані',\n        LB: 'Лівані',\n        LI: 'Ліхтенштейні',\n        LT: 'Литві',\n        LU: 'Люксембурзі',\n        LV: 'Латвії',\n        MC: 'Монако',\n        MD: 'Молдові',\n        ME: 'Чорногорії',\n        MG: 'Мадагаскарі',\n        MK: 'Македонії',\n        ML: 'Малі',\n        MR: 'Мавританії',\n        MT: 'Мальті',\n        MU: 'Маврикії',\n        MZ: 'Мозамбіку',\n        NL: 'Нідерландах',\n        NO: 'Норвегії',\n        PK: 'Пакистані',\n        PL: 'Польщі',\n        PS: 'Палестині',\n        PT: 'Португалії',\n        QA: 'Катарі',\n        RO: 'Румунії',\n        RS: 'Сербії',\n        SA: 'Саудівської Аравії',\n        SE: 'Швеції',\n        SI: 'Словенії',\n        SK: 'Словаччині',\n        SM: 'Сан-Марино',\n        SN: 'Сенегалі',\n        TL: 'східний Тимор',\n        TN: 'Тунісі',\n        TR: 'Туреччині',\n        VG: 'Британських Віргінських островах',\n        XK: 'Республіка Косово'\n      },\n      country: 'Будь ласка, введіть правильний номер IBAN в %s',\n      default: 'Будь ласка, введіть правильний номер IBAN'\n    },\n    id: {\n      countries: {\n        BA: 'Боснії і Герцеговині',\n        BG: 'Болгарії',\n        BR: 'Бразилії',\n        CH: 'Швейцарії',\n        CL: 'Чилі',\n        CN: 'Китаї',\n        CZ: 'Чехії',\n        DK: 'Данії',\n        EE: 'Естонії',\n        ES: 'Іспанії',\n        FI: 'Фінляндії',\n        HR: 'Хорватії',\n        IE: 'Ірландії',\n        IS: 'Ісландії',\n        LT: 'Литві',\n        LV: 'Латвії',\n        ME: 'Чорногорії',\n        MK: 'Македонії',\n        NL: 'Нідерландах',\n        PL: 'Польщі',\n        RO: 'Румунії',\n        RS: 'Сербії',\n        SE: 'Швеції',\n        SI: 'Словенії',\n        SK: 'Словаччині',\n        SM: 'Сан-Марино',\n        TH: 'Таїланді',\n        TR: 'Туреччині',\n        ZA: 'ПАР'\n      },\n      country: 'Будь ласка, введіть правильний ідентифікаційний номер в %s',\n      default: 'Будь ласка, введіть правильний ідентифікаційний номер'\n    },\n    identical: {\n      default: 'Будь ласка, введіть таке ж значення'\n    },\n    imei: {\n      default: 'Будь ласка, введіть правильний номер IMEI'\n    },\n    imo: {\n      default: 'Будь ласка, введіть правильний номер IMO'\n    },\n    integer: {\n      default: 'Будь ласка, введіть правильне ціле значення'\n    },\n    ip: {\n      default: 'Будь ласка, введіть правильну IP-адресу',\n      ipv4: 'Будь ласка введіть правильну IPv4-адресу',\n      ipv6: 'Будь ласка введіть правильну IPv6-адресу'\n    },\n    isbn: {\n      default: 'Будь ласка, введіть правильний номер ISBN'\n    },\n    isin: {\n      default: 'Будь ласка, введіть правильний номер ISIN'\n    },\n    ismn: {\n      default: 'Будь ласка, введіть правильний номер ISMN'\n    },\n    issn: {\n      default: 'Будь ласка, введіть правильний номер ISSN'\n    },\n    lessThan: {\n      default: 'Будь ласка, введіть значення менше або рівне %s',\n      notInclusive: 'Будь ласка, введіть значення менше ніж %s'\n    },\n    mac: {\n      default: 'Будь ласка, введіть правильну MAC-адресу'\n    },\n    meid: {\n      default: 'Будь ласка, введіть правильний номер MEID'\n    },\n    notEmpty: {\n      default: 'Будь ласка, введіть значення'\n    },\n    numeric: {\n      default: 'Будь ласка, введіть коректне дійсне число'\n    },\n    phone: {\n      countries: {\n        AE: \"Об'єднаних Арабських Еміратах\",\n        BG: 'Болгарії',\n        BR: 'Бразилії',\n        CN: 'Китаї',\n        CZ: 'Чехії',\n        DE: 'Германії',\n        DK: 'Данії',\n        ES: 'Іспанії',\n        FR: 'Франції',\n        GB: 'Великобританії',\n        IN: 'Індія',\n        MA: 'Марокко',\n        NL: 'Нідерландах',\n        PK: 'Пакистані',\n        RO: 'Румунії',\n        RU: 'Росії',\n        SK: 'Словаччині',\n        TH: 'Таїланді',\n        US: 'США',\n        VE: 'Венесуелі'\n      },\n      country: 'Будь ласка, введіть правильний номер телефону в %s',\n      default: 'Будь ласка, введіть правильний номер телефону'\n    },\n    promise: {\n      default: 'Будь ласка, введіть коректне значення'\n    },\n    regexp: {\n      default: 'Будь ласка, введіть значення відповідне до шаблону'\n    },\n    remote: {\n      default: 'Будь ласка, введіть правильне значення'\n    },\n    rtn: {\n      default: 'Будь ласка, введіть правильний номер RTN'\n    },\n    sedol: {\n      default: 'Будь ласка, введіть правильний номер SEDOL'\n    },\n    siren: {\n      default: 'Будь ласка, введіть правильний номер SIREN'\n    },\n    siret: {\n      default: 'Будь ласка, введіть правильний номер SIRET'\n    },\n    step: {\n      default: 'Будь ласка, введіть правильний крок %s'\n    },\n    stringCase: {\n      default: 'Будь ласка, вводите тільки малі літери',\n      upper: 'Будь ласка, вводите тільки заголовні букви'\n    },\n    stringLength: {\n      between: 'Будь ласка, введіть рядок довжиною від %s до %s символів',\n      default: 'Будь ласка, введіть значення коректної довжини',\n      less: 'Будь ласка, введіть не більше %s символів',\n      more: 'Будь ласка, введіть, не менше %s символів'\n    },\n    uri: {\n      default: 'Будь ласка, введіть правильний URI'\n    },\n    uuid: {\n      default: 'Будь ласка, введіть правильний номер UUID',\n      version: 'Будь ласка, введіть правильний номер UUID версії %s'\n    },\n    vat: {\n      countries: {\n        AT: 'Австрії',\n        BE: 'Бельгії',\n        BG: 'Болгарії',\n        BR: 'Бразилії',\n        CH: 'Швейцарії',\n        CY: 'Кіпрі',\n        CZ: 'Чехії',\n        DE: 'Германії',\n        DK: 'Данії',\n        EE: 'Естонії',\n        EL: 'Греції',\n        ES: 'Іспанії',\n        FI: 'Фінляндії',\n        FR: 'Франції',\n        GB: 'Великобританії',\n        GR: 'Греції',\n        HR: 'Хорватії',\n        HU: 'Венгрії',\n        IE: 'Ірландії',\n        IS: 'Ісландії',\n        IT: 'Італії',\n        LT: 'Литві',\n        LU: 'Люксембургі',\n        LV: 'Латвії',\n        MT: 'Мальті',\n        NL: 'Нідерландах',\n        NO: 'Норвегії',\n        PL: 'Польщі',\n        PT: 'Португалії',\n        RO: 'Румунії',\n        RS: 'Сербії',\n        RU: 'Росії',\n        SE: 'Швеції',\n        SI: 'Словенії',\n        SK: 'Словаччині',\n        VE: 'Венесуелі',\n        ZA: 'ПАР'\n      },\n      country: 'Будь ласка, введіть правильний номер VAT в %s',\n      default: 'Будь ласка, введіть правильний номер VAT'\n    },\n    vin: {\n      default: 'Будь ласка, введіть правильний номер VIN'\n    },\n    zipCode: {\n      countries: {\n        AT: 'Австрії',\n        BG: 'Болгарії',\n        BR: 'Бразилії',\n        CA: 'Канаді',\n        CH: 'Швейцарії',\n        CZ: 'Чехії',\n        DE: 'Германії',\n        DK: 'Данії',\n        ES: 'Іспанії',\n        FR: 'Франції',\n        GB: 'Великобританії',\n        IE: 'Ірландії',\n        IN: 'Індія',\n        IT: 'Італії',\n        MA: 'Марокко',\n        NL: 'Нідерландах',\n        PL: 'Польщі',\n        PT: 'Португалії',\n        RO: 'Румунії',\n        RU: 'Росії',\n        SE: 'Швеції',\n        SG: 'Сингапурі',\n        SK: 'Словаччині',\n        US: 'США'\n      },\n      country: 'Будь ласка, введіть правильний поштовий індекс в %s',\n      default: 'Будь ласка, введіть правильний поштовий індекс'\n    }\n  };\n  return ua_UA;\n});\n\n//# sourceURL=webpack://Sneat/./wwwroot/vendor/libs/formvalidation/dist/js/locales/ua_UA.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./wwwroot/vendor/libs/formvalidation/dist/js/locales/ua_UA.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});