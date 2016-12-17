'use strict';

(function () {

    var docRef = document.currentScript.ownerDocument;

    function setActive(tabsBox, btn, tab) {
        tabsBox
            .querySelector('ui-tab[visible=true]')
            .setAttribute('visible', 'false');
        tab.setAttribute('visible', 'true');

        tabsBox
            .querySelector('button.selected')
            .className = '';
        btn.className = 'selected';
    }

    function createButtons(tabsBox) {
        tabsBox
            .querySelectorAll('ui-tab')
            .forEach(function (tab) {
                var tabName = tab.getAttribute('tab-name');
                var btn = Helpers.createEl('button', tabsBox, {'data-target': tabName, innerHTML: tabName});
                tab.getAttribute('visible') && (btn.className = 'selected');
                btn.addEventListener('click', function (evt) {
                    setActive(tabsBox, evt.target, tab);
                });
            }, this);
    }

    /**
     * tabs
     * @type {HTMLElement}
     */
    var UITabsProto = Object.create(HTMLElement.prototype);
    UITabsProto.createdCallback = function () {
        var root = this.createShadowRoot();
        var tpl = document.importNode(docRef.querySelector('#tabs-tpl').content, true);
        root.appendChild(tpl);
        createButtons(this);
    };

    document.registerElement('ui-tabs', {
        prototype: UITabsProto
    });


    /**
     * tab
     * @type {HTMLElement}
     */
    var UITabProto = Object.create(HTMLElement.prototype);

    UITabProto.createdCallback = function () {
        var root = this.createShadowRoot();
        var tpl = document.importNode(docRef.querySelector('#tab-tpl').content, true);
        root.appendChild(tpl);
    };

    document.registerElement('ui-tab', {
        prototype: UITabProto
    });
}());