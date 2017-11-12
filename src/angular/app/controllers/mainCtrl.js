/*global angular */

angular
.module('app.controllers', [])
.controller('mainCtrl', ['$window', function mainCtrl($window) {
    var _ctrl = this;
    _ctrl.showNav = false;

    _ctrl.init = function() {
        $window.showNav = false;
         
        $window.onscroll = function () {
            if ($window.showNav === false) {
                var val = 1 - ($window.outerHeight - $window.scrollY) / $window.outerHeight;
                var nav = document.getElementById("ru-nav-scroll");

                if (nav.hasAttribute("style")) {
                    nav.removeAttribute("style");
                }

                nav.setAttribute("style", "background: rgba(0, 76, 155, " + val +");");
            }
        }
    };

    // Show nav
    _ctrl.toggleNav = function() {
        _ctrl.showNav = !_ctrl.showNav;
        $window.showNav = _ctrl.showNav;

        var val = 1 - ($window.outerHeight - $window.scrollY) / $window.outerHeight;
        var nav = document.getElementById("ru-nav-scroll");

        if (nav.hasAttribute("style")) {
            nav.removeAttribute("style");
        }

        if (_ctrl.showNav) {
            nav.setAttribute("style", "background: rgba(0, 76, 155, 1);");
        } else {
            nav.setAttribute("style", "background: rgba(0, 76, 155, " + val +");");
        }
    }
}]);