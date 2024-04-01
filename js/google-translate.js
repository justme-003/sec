/*!***************************************************
 * google-translate.js v1.0.2
 * https://Get-Web.Site/
 * author: L2Banners
 *****************************************************/

let langActive = document.getElementById('lang')

const googleTranslateConfig = {
    lang: "ru",
    domain: "kpa.gov.kz"
};

let langKZ = document.querySelector('.lang-item-kz').querySelector('a')
langKZ.onclick = function (event) {
    event.preventDefault()
    
    TranslateCookieHandler(null, googleTranslateConfig.domain);
    
    // document.cookie = "googtrans=ru; max-age=0"
    // document.cookie = "googtrans=null; domain=.domdm.kz"
    // document.cookie = "googtrans=null; domain=.kpa.gov.kz.domdm.kz"
    
    
}

function TranslateInit() {
    let code = TranslateGetCode();
    // Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
    if (document.querySelector('[data-google-lang="' + code + '"]') !== null) {
        document.querySelector('[data-google-lang="' + code + '"]').classList.add('active');
        setActiveLangHeader()
    }


    if (code == googleTranslateConfig.lang) {
        // Если язык по умолчанию, совпадает с языком на который переводим
        // То очищаем куки
        TranslateCookieHandler(null, googleTranslateConfig.domain);
    }

    if (langActive.innerText === 'kz') {
        // document.cookie = "googtrans=ru; max-age=0"
        //document.cookie = "googtrans=null; domain=.domdm.kz"
		
		TranslateCookieHandler(null, googleTranslateConfig.domain);
        
    }
    

    // Инициализируем виджет с языком по умолчанию
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // Вешаем событие  клик на флаги
    TranslateEventHandler('click', '[data-google-lang]', function (e) {
        let newLink
        let link = window.location.pathname
        let langSelected = e.getAttribute('data-google-lang')
        let linkRu = document.querySelector('.lang-item-ru').querySelector('a')

        if (langActive.innerText !== 'kz') {
            if (e.getAttribute('data-google-lang') !== 'kz') {
                TranslateCookieHandler("/" + googleTranslateConfig.lang + "/" + e.getAttribute("data-google-lang"), googleTranslateConfig.domain);
                // Перезагружаем страницу
                location.href = link
            } else {
                // newLink = `/${langSelected}${link}`
                // location.href = newLink
                // document.cookie = "googtrans=ru; max-age=0"
                // document.cookie = "googtrans=null; domain=.domdm.kz"
                
                location.href = langKZ.href
                
            }
        } else {
            TranslateCookieHandler(null, googleTranslateConfig.domain);
            // document.cookie = "googtrans=ru; max-age=0"
            // document.cookie = "googtrans=null; domain=.domdm.kz"
            // document.cookie = "googtrans=null; domain=.kpa.gov.kz.domdm.kz"
            newLink = `${linkRu}?langSelected=${langSelected}`
            location.href = newLink
        }

    });
}

function TranslateGetCode() {
    // Если куки нет, то передаем дефолтный язык
    let lang = (Cookies.get('googtrans') !== undefined && Cookies.get('googtrans') !== "null") ?
        Cookies.get('googtrans') : googleTranslateConfig.lang;
    return lang.match(/(?!^\/)[^\/]*$/gm)[0];

}

function TranslateCookieHandler(val, domain) {
    // Записываем куки /язык_который_переводим/язык_на_который_переводим
    // document.cookie = "googtrans=ru; max-age=0"
    // document.cookie = "googtrans="+val + ";" + " domain=.domdm.kz"

    // document.cookie = `googtrans = ${val}`
    
    
    Cookies.set('googtrans', val);
    Cookies.set("googtrans", val, {
        domain: "." + document.domain,
    });

    // if (domain === "undefined") return;
    // записываем куки для домена, если он назначен в конфиге

    Cookies.set("googtrans", val, {
        domain: domain,
    });

    Cookies.set("googtrans", val, {
        domain: "." + domain,
    });
    
    
    
    

}

function TranslateEventHandler(event, selector, handler) {
    document.addEventListener(event, function (e) {
        let el = e.target.closest(selector);
        if (el) handler(el);
    });
}

function setActiveLangHeader() {
    const LANG = document.querySelector('.lang-block').querySelectorAll('.lang')
    const CURRENT_LANG = document.querySelector('.current-lang')

    LANG.forEach( (LANG) => {
        if (LANG.classList.contains('active')) {
            CURRENT_LANG.querySelector('.lang-icon').src =
                LANG.querySelector('.lang-icon').src
            CURRENT_LANG.querySelector('.lang-name').innerText =
                LANG.querySelector('.lang-name').innerText
        }
    })
}

function deleteCookie (cookieName) {
    let cookieDate = new Date ( );
    cookieDate.setTime ( cookieDate.getTime() - 1 );
    document.cookie = cookieName += "=; expires=" + cookieDate.toGMTString();
}
