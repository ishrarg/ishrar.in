function autoInit() {
    HSStaticMethods.autoInit();

    function mutationCallback(mutationsList, observer) {
        HSStaticMethods.autoInit();
        console.log('autoInit');
    }

    /** @type {MutationObserverInit} */
    const config = {
        childList: true,
        subtree: true
    };
    const observer = new MutationObserver(mutationCallback);
    observer.observe(document.body, config);
}

function closeSidebarOnMobile(id) {
    const {matches} = window.matchMedia('(min-width: 1024px)');
    // if not matches -> it's mobile 
    if (!matches) {
        HSOverlay.close(id)
    }
}

function openModal(modalId) {
    HSOverlay.open(modalId)
}

function closeModal(modalId) {
    HSOverlay.close(modalId)
}

function openDropdown(dropdownId) {
    HSDropdown.open(dropdownId)
}

function closeDropdown(dropdownId) {
    HSDropdown.close(dropdownId)
}

function setFocus() {
    const el = document.querySelector('[autofocus]');
    if (el) {
        el.focus();
    }
}

function makeTextareaAutoHeight() {
    console.log('makeTextareaAutoHeight')
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        const overlay = textarea.closest('.hs-overlay');
        if (!overlay) {
            textareaAutoHeight(textarea, 3);
        } else {
            const {element} = HSOverlay.getInstance(overlay, true);
            element.on('open', () => textareaAutoHeight(textarea, 3))
        }

        textarea.addEventListener('input', () => textareaAutoHeight(textarea, 3));
    })
}

function textareaAutoHeight(el, offsetTop = 0) {
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight + offsetTop}px`;
}

class LocalContinuationTokenStorage {
    static getToken(entityName) {
        return localStorage.getItem(`${entityName}Token`);
    }

    static setToken(entityName, token) {
        localStorage.setItem(`${entityName}Token`, token);
    }
}

window.LocalContinuationTokenStorage = LocalContinuationTokenStorage;