(function (window, document, undefined) {
    'use strict';

    function Router () {
        this.route = /^\/group\/([\w-]+)\/?/i;
        this.groupElems = document.getElementsByClassName('tnsg-Group');
        window.addEventListener('hashchange', this.changeGroup.bind(this));
        this.changeGroup();
    }
    Router.prototype.getGroup = function (hash) {
        var group;
        group = this.route.exec(hash);
        if (group === null) { return false; }
        return group[1];
    };
    Router.prototype.changeGroup = function () {
        var group, classMatch;
        this.hash = window.location.hash.slice(1);
        group = this.getGroup(this.hash);
        classMatch = new RegExp('\\btnsg-Group-' + group + '\\b');
        this.classMatch = classMatch;
        Array.prototype.forEach.call(this.groupElems, function (e) {
            e.className = e.className
                .replace(/\son\b/, '')
                .replace(classMatch, 'tnsg-Group-' + group + ' on');
        });
    };

    window.tenzing = window.tenzing || {};
    window.tenzing.router = new Router();

}(window, document));
