function Helpers() {
}

Helpers.createEl = function (tagName, target, params) {
    var el = document.createElement(tagName);
    if (params) {
        Object.keys(params).forEach(function (key) {
            if (el[key] === undefined) {
                el.setAttribute(key, params[key]);
            } else {
                el[key] = params[key];
            }
        })
    }
    target instanceof HTMLElement
        ? target.appendChild(el)
        : document.querySelector(target).appendChild(el);

    return el;
};