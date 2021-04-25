"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Card = /** @class */ (function () {
    function Card(hreo, mine) {
        if (hero) {
            return new Hero(mine);
        }
        else {
            this.att = Math.ceil(Math.random() * 5);
            this.hp = Math.ceil(Math.random() * 5);
            this.cost = Math.floor((this.att + this.hp) / 2);
        }
        if (mine) {
            this.mine = true;
        }
    }
    return Card;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(mine) {
        var _this = _super.call(this, true, mine) || this;
        _this.att = Math.ceil(Math.random() * 2);
        _this.hp = Math.ceil(Math.random() * 5) + 25;
        _this.mine = mine;
        _this.field = true;
        return _this;
    }
    return Hero;
}(Card));
var opponent = {
    hero: document.getElementById('rival-hero'),
    deck: document.getElementById('rival-deck'),
    field: document.getElementById('rival-cards'),
    cost: document.getElementById('rival-cost'),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null
};
var me = {
    hero: document.getElementById('my-hero'),
    deck: document.getElementById('my-deck'),
    field: document.getElementById('my-cards'),
    cost: document.getElementById('my-cost'),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null
};
