"use strict";

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, n) {
    for (var t = 0; t < n.length; t++) {
        var i = n[t];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, n, t) {
    return n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e
}

!function () {
    var e = function () {
        function e(n) {
            _classCallCheck(this, e), this.name = n.name, this.age = n.age, this.gender = n.gender, this.height = n.height, this.weight = n.weight
        }

        return _createClass(e, [{
            key: "greeting", value: function () {
                console.log("Hi, I am " + this.name)
            }
        }]), e
    }();
    void 0 === window.practice && (window.practice = {}), window.practice.Person = e
}(), document.addEventListener("DOMContentLoaded", (function () {
    var e;
    e = "igarashi", console.log(e), new window.practice.Person({
        name: "Jon",
        age: 20,
        gender: "male",
        height: 180,
        weight: 80
    }).greeting()
}));
//# sourceMappingURL=../_maps/app.js.map