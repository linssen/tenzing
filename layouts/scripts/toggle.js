(function (window, document, undefined) {
    function Toggle () {
        var slice;
        slice = Array.prototype.slice;
        this.activeClass = 'tnsg-ToggleActive';
        this.button = document.getElementsByClassName('tnsg-Nav-toggle')[0];
        this.target = document.getElementsByClassName('tnsg-Wrapper')[0];

        document.addEventListener('keyup', this.keyUp.bind(this), false);
        this.button.addEventListener('click', this.toggleWrapper.bind(this), false);
    }

    Toggle.prototype.toggleWrapper = function () {
        if (this.target.className.split(' ').indexOf(this.activeClass) >= 0) {
            this.toggleOff();
        } else {
            this.toggleOn();
        }
    };
    Toggle.prototype.toggleOff = function () {
        this.target.className = this.target.className.replace(' ' + this.activeClass, '');
    };
    Toggle.prototype.toggleOn = function () {
        this.target.className += ' ' + this.activeClass;
    };
    Toggle.prototype.keyUp = function (e) {
        var keyCode;
        keyCode = e.keyCode || e.which;
        switch (keyCode) {
        case 27:
            return this.toggleOff();
        }
    };

    window.tsngToggle = new Toggle();
}(window, document));
