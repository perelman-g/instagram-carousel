/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 *
 * Taken from: https://gist.github.com/gre/1650294
 *
 * No license attached to gist; assumed MIT based on
 * http://greweb.me/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
 */

var EasingFunctions = {
  linear: function (t) { return t },

  quad: {
    in: function (t) { return t*t },
    out: function (t) { return t*(2-t) },
    inOut: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
  },

  cubic: {
    in: function (t) { return t*t*t },
    out: function (t) { return (--t)*t*t+1 },
    inOut: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  },

  quart: {
    in: function (t) { return t*t*t*t },
    out: function (t) { return 1-(--t)*t*t*t },
    inOut: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
  },

  quint: {
    in: function (t) { return t*t*t*t*t },
    out: function (t) { return 1+(--t)*t*t*t*t },
    inOut: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
  }
};

module.exports = EasingFunctions;