Template._justVerifiedEmailDialog.events({
    'click #just-verified-dismiss-button': function (e,t) {
                Router.go('/faq');
                ga('send', 'event', 'button', 'click', 'registerDismiss', 1);
    }
});

Template.home.rendered = function () { Meteor.defer(function(){

    window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.cssanimations=function(){return F("animationName")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
    /* ===================================================
     * bootstrap-transition.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#transitions
     * ===================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
         * ======================================================= */

        $(function () {

            $.support.transition = (function () {

                var transitionEnd = (function () {

                    var el = document.createElement('bootstrap')
                        , transEndEventNames = {
                            'WebkitTransition' : 'webkitTransitionEnd'
                            ,  'MozTransition'    : 'transitionend'
                            ,  'OTransition'      : 'oTransitionEnd otransitionend'
                            ,  'transition'       : 'transitionend'
                        }
                        , name

                    for (name in transEndEventNames){
                        if (el.style[name] !== undefined) {
                            return transEndEventNames[name]
                        }
                    }

                }())

                return transitionEnd && {
                        end: transitionEnd
                    }

            })()

        })

    }(window.jQuery);/* ==========================================================
     * bootstrap-alert.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#alerts
     * ==========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* ALERT CLASS DEFINITION
         * ====================== */

        var dismiss = '[data-dismiss="alert"]'
            , Alert = function (el) {
                $(el).on('click', dismiss, this.close)
            }

        Alert.prototype.close = function (e) {
            var $this = $(this)
                , selector = $this.attr('data-target')
                , $parent

            if (!selector) {
                selector = $this.attr('href')
                selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
            }

            $parent = $(selector)

            e && e.preventDefault()

            $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

            $parent.trigger(e = $.Event('close'))

            if (e.isDefaultPrevented()) return

            $parent.removeClass('in')

            function removeElement() {
                $parent
                    .trigger('closed')
                    .remove()
            }

            $.support.transition && $parent.hasClass('fade') ?
                $parent.on($.support.transition.end, removeElement) :
                removeElement()
        }


        /* ALERT PLUGIN DEFINITION
         * ======================= */

        var old = $.fn.alert

        $.fn.alert = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('alert')
                if (!data) $this.data('alert', (data = new Alert(this)))
                if (typeof option == 'string') data[option].call($this)
            })
        }

        $.fn.alert.Constructor = Alert


        /* ALERT NO CONFLICT
         * ================= */

        $.fn.alert.noConflict = function () {
            $.fn.alert = old
            return this
        }


        /* ALERT DATA-API
         * ============== */

        $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

    }(window.jQuery);/* ============================================================
     * bootstrap-button.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#buttons
     * ============================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ============================================================ */


    !function ($) {

        "use strict"; // jshint ;_;


        /* BUTTON PUBLIC CLASS DEFINITION
         * ============================== */

        var Button = function (element, options) {
            this.$element = $(element)
            this.options = $.extend({}, $.fn.button.defaults, options)
        }

        Button.prototype.setState = function (state) {
            var d = 'disabled'
                , $el = this.$element
                , data = $el.data()
                , val = $el.is('input') ? 'val' : 'html'

            state = state + 'Text'
            data.resetText || $el.data('resetText', $el[val]())

            $el[val](data[state] || this.options[state])

            // push to event loop to allow forms to submit
            setTimeout(function () {
                state == 'loadingText' ?
                    $el.addClass(d).attr(d, d) :
                    $el.removeClass(d).removeAttr(d)
            }, 0)
        }

        Button.prototype.toggle = function () {
            var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

            $parent && $parent
                .find('.active')
                .removeClass('active')

            this.$element.toggleClass('active')
        }


        /* BUTTON PLUGIN DEFINITION
         * ======================== */

        var old = $.fn.button

        $.fn.button = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('button')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('button', (data = new Button(this, options)))
                if (option == 'toggle') data.toggle()
                else if (option) data.setState(option)
            })
        }

        $.fn.button.defaults = {
            loadingText: 'loading...'
        }

        $.fn.button.Constructor = Button


        /* BUTTON NO CONFLICT
         * ================== */

        $.fn.button.noConflict = function () {
            $.fn.button = old
            return this
        }


        /* BUTTON DATA-API
         * =============== */

        $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
            var $btn = $(e.target)
            if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
            $btn.button('toggle')
        })

    }(window.jQuery);/* ==========================================================
     * bootstrap-carousel.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#carousel
     * ==========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* CAROUSEL CLASS DEFINITION
         * ========================= */

        var Carousel = function (element, options) {
            this.$element = $(element)
            this.$indicators = this.$element.find('.carousel-indicators')
            this.options = options
            this.options.pause == 'hover' && this.$element
                .on('mouseenter', $.proxy(this.pause, this))
                .on('mouseleave', $.proxy(this.cycle, this))
        }

        Carousel.prototype = {

            cycle: function (e) {
                if (!e) this.paused = false
                if (this.interval) clearInterval(this.interval);
                this.options.interval
                && !this.paused
                && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
                return this
            }

            , getActiveIndex: function () {
                this.$active = this.$element.find('.item.active')
                this.$items = this.$active.parent().children()
                return this.$items.index(this.$active)
            }

            , to: function (pos) {
                var activeIndex = this.getActiveIndex()
                    , that = this

                if (pos > (this.$items.length - 1) || pos < 0) return

                if (this.sliding) {
                    return this.$element.one('slid', function () {
                        that.to(pos)
                    })
                }

                if (activeIndex == pos) {
                    return this.pause().cycle()
                }

                return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
            }

            , pause: function (e) {
                if (!e) this.paused = true
                if (this.$element.find('.next, .prev').length && $.support.transition.end) {
                    this.$element.trigger($.support.transition.end)
                    this.cycle(true)
                }
                clearInterval(this.interval)
                this.interval = null
                return this
            }

            , next: function () {
                if (this.sliding) return
                return this.slide('next')
            }

            , prev: function () {
                if (this.sliding) return
                return this.slide('prev')
            }

            , slide: function (type, next) {
                var $active = this.$element.find('.item.active')
                    , $next = next || $active[type]()
                    , isCycling = this.interval
                    , direction = type == 'next' ? 'left' : 'right'
                    , fallback  = type == 'next' ? 'first' : 'last'
                    , that = this
                    , e

                this.sliding = true

                isCycling && this.pause()

                $next = $next.length ? $next : this.$element.find('.item')[fallback]()

                e = $.Event('slide', {
                    relatedTarget: $next[0]
                    , direction: direction
                })

                if ($next.hasClass('active')) return

                if (this.$indicators.length) {
                    this.$indicators.find('.active').removeClass('active')
                    this.$element.one('slid', function () {
                        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
                        $nextIndicator && $nextIndicator.addClass('active')
                    })
                }

                if ($.support.transition && this.$element.hasClass('slide')) {
                    this.$element.trigger(e)
                    if (e.isDefaultPrevented()) return
                    $next.addClass(type)
                    $next[0].offsetWidth // force reflow
                    $active.addClass(direction)
                    $next.addClass(direction)
                    this.$element.one($.support.transition.end, function () {
                        $next.removeClass([type, direction].join(' ')).addClass('active')
                        $active.removeClass(['active', direction].join(' '))
                        that.sliding = false
                        setTimeout(function () { that.$element.trigger('slid') }, 0)
                    })
                } else {
                    this.$element.trigger(e)
                    if (e.isDefaultPrevented()) return
                    $active.removeClass('active')
                    $next.addClass('active')
                    this.sliding = false
                    this.$element.trigger('slid')
                }

                isCycling && this.cycle()

                return this
            }

        }


        /* CAROUSEL PLUGIN DEFINITION
         * ========================== */

        var old = $.fn.carousel

        $.fn.carousel = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('carousel')
                    , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
                    , action = typeof option == 'string' ? option : options.slide
                if (!data) $this.data('carousel', (data = new Carousel(this, options)))
                if (typeof option == 'number') data.to(option)
                else if (action) data[action]()
                else if (options.interval) data.pause().cycle()
            })
        }

        $.fn.carousel.defaults = {
            interval: 5000
            , pause: 'hover'
        }

        $.fn.carousel.Constructor = Carousel


        /* CAROUSEL NO CONFLICT
         * ==================== */

        $.fn.carousel.noConflict = function () {
            $.fn.carousel = old
            return this
        }

        /* CAROUSEL DATA-API
         * ================= */

        $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
            var $this = $(this), href
                , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
                , options = $.extend({}, $target.data(), $this.data())
                , slideIndex

            $target.carousel(options)

            if (slideIndex = $this.attr('data-slide-to')) {
                $target.data('carousel').pause().to(slideIndex).cycle()
            }

            e.preventDefault()
        })

    }(window.jQuery);/* =============================================================
     * bootstrap-collapse.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#collapse
     * =============================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ============================================================ */


    !function ($) {

        "use strict"; // jshint ;_;


        /* COLLAPSE PUBLIC CLASS DEFINITION
         * ================================ */

        var Collapse = function (element, options) {
            this.$element = $(element)
            this.options = $.extend({}, $.fn.collapse.defaults, options)

            if (this.options.parent) {
                this.$parent = $(this.options.parent)
            }

            this.options.toggle && this.toggle()
        }

        Collapse.prototype = {

            constructor: Collapse

            , dimension: function () {
                var hasWidth = this.$element.hasClass('width')
                return hasWidth ? 'width' : 'height'
            }

            , show: function () {
                var dimension
                    , scroll
                    , actives
                    , hasData

                if (this.transitioning || this.$element.hasClass('in')) return

                dimension = this.dimension()
                scroll = $.camelCase(['scroll', dimension].join('-'))
                actives = this.$parent && this.$parent.find('> .accordion-group > .in')

                if (actives && actives.length) {
                    hasData = actives.data('collapse')
                    if (hasData && hasData.transitioning) return
                    actives.collapse('hide')
                    hasData || actives.data('collapse', null)
                }

                this.$element[dimension](0)
                this.transition('addClass', $.Event('show'), 'shown')
                $.support.transition && this.$element[dimension](this.$element[0][scroll])
            }

            , hide: function () {
                var dimension
                if (this.transitioning || !this.$element.hasClass('in')) return
                dimension = this.dimension()
                this.reset(this.$element[dimension]())
                this.transition('removeClass', $.Event('hide'), 'hidden')
                this.$element[dimension](0)
            }

            , reset: function (size) {
                var dimension = this.dimension()

                this.$element
                    .removeClass('collapse')
                    [dimension](size || 'auto')
                    [0].offsetWidth

                this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

                return this
            }

            , transition: function (method, startEvent, completeEvent) {
                var that = this
                    , complete = function () {
                        if (startEvent.type == 'show') that.reset()
                        that.transitioning = 0
                        that.$element.trigger(completeEvent)
                    }

                this.$element.trigger(startEvent)

                if (startEvent.isDefaultPrevented()) return

                this.transitioning = 1

                this.$element[method]('in')

                $.support.transition && this.$element.hasClass('collapse') ?
                    this.$element.one($.support.transition.end, complete) :
                    complete()
            }

            , toggle: function () {
                this[this.$element.hasClass('in') ? 'hide' : 'show']()
            }

        }


        /* COLLAPSE PLUGIN DEFINITION
         * ========================== */

        var old = $.fn.collapse

        $.fn.collapse = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('collapse')
                    , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
                if (!data) $this.data('collapse', (data = new Collapse(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.collapse.defaults = {
            toggle: true
        }

        $.fn.collapse.Constructor = Collapse


        /* COLLAPSE NO CONFLICT
         * ==================== */

        $.fn.collapse.noConflict = function () {
            $.fn.collapse = old
            return this
        }


        /* COLLAPSE DATA-API
         * ================= */

        $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
            var $this = $(this), href
                , target = $this.attr('data-target')
                    || e.preventDefault()
                    || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
                , option = $(target).data('collapse') ? 'toggle' : $this.data()
            $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
            $(target).collapse(option)
        })

    }(window.jQuery);/* ============================================================
     * bootstrap-dropdown.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#dropdowns
     * ============================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ============================================================ */


    !function ($) {

        "use strict"; // jshint ;_;


        /* DROPDOWN CLASS DEFINITION
         * ========================= */

        var toggle = '[data-toggle=dropdown]'
            , Dropdown = function (element) {
                var $el = $(element).on('click.dropdown.data-api', this.toggle)
                $('html').on('click.dropdown.data-api', function () {
                    $el.parent().removeClass('open')
                })
            }

        Dropdown.prototype = {

            constructor: Dropdown

            , toggle: function (e) {
                var $this = $(this)
                    , $parent
                    , isActive

                if ($this.is('.disabled, :disabled')) return

                $parent = getParent($this)

                isActive = $parent.hasClass('open')

                clearMenus()

                if (!isActive) {
                    if ('ontouchstart' in document.documentElement) {
                        // if mobile we we use a backdrop because click events don't delegate
                        $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
                    }
                    $parent.toggleClass('open')
                }

                $this.focus()

                return false
            }

            , keydown: function (e) {
                var $this
                    , $items
                    , $active
                    , $parent
                    , isActive
                    , index

                if (!/(38|40|27)/.test(e.keyCode)) return

                $this = $(this)

                e.preventDefault()
                e.stopPropagation()

                if ($this.is('.disabled, :disabled')) return

                $parent = getParent($this)

                isActive = $parent.hasClass('open')

                if (!isActive || (isActive && e.keyCode == 27)) {
                    if (e.which == 27) $parent.find(toggle).focus()
                    return $this.click()
                }

                $items = $('[role=menu] li:not(.divider):visible a', $parent)

                if (!$items.length) return

                index = $items.index($items.filter(':focus'))

                if (e.keyCode == 38 && index > 0) index--                                        // up
                if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
                if (!~index) index = 0

                $items
                    .eq(index)
                    .focus()
            }

        }

        function clearMenus() {
            $('.dropdown-backdrop').remove()
            $(toggle).each(function () {
                getParent($(this)).removeClass('open')
            })
        }

        function getParent($this) {
            var selector = $this.attr('data-target')
                , $parent

            if (!selector) {
                selector = $this.attr('href')
                selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
            }

            $parent = selector && $(selector)

            if (!$parent || !$parent.length) $parent = $this.parent()

            return $parent
        }


        /* DROPDOWN PLUGIN DEFINITION
         * ========================== */

        var old = $.fn.dropdown

        $.fn.dropdown = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('dropdown')
                if (!data) $this.data('dropdown', (data = new Dropdown(this)))
                if (typeof option == 'string') data[option].call($this)
            })
        }

        $.fn.dropdown.Constructor = Dropdown


        /* DROPDOWN NO CONFLICT
         * ==================== */

        $.fn.dropdown.noConflict = function () {
            $.fn.dropdown = old
            return this
        }


        /* APPLY TO STANDARD DROPDOWN ELEMENTS
         * =================================== */

        $(document)
            .on('click.dropdown.data-api', clearMenus)
            .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
            .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
            .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

    }(window.jQuery);
    /* =========================================================
     * bootstrap-modal.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#modals
     * =========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================= */


    !function ($) {

        "use strict"; // jshint ;_;


        /* MODAL CLASS DEFINITION
         * ====================== */

        var Modal = function (element, options) {
            this.options = options
            this.$element = $(element)
                .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
            this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
        }

        Modal.prototype = {

            constructor: Modal

            , toggle: function () {
                return this[!this.isShown ? 'show' : 'hide']()
            }

            , show: function () {
                var that = this
                    , e = $.Event('show')

                this.$element.trigger(e)

                if (this.isShown || e.isDefaultPrevented()) return

                this.isShown = true

                this.escape()

                this.backdrop(function () {
                    var transition = $.support.transition && that.$element.hasClass('fade')

                    if (!that.$element.parent().length) {
                        that.$element.appendTo(document.body) //don't move modals dom position
                    }

                    that.$element.show()

                    if (transition) {
                        that.$element[0].offsetWidth // force reflow
                    }

                    that.$element
                        .addClass('in')
                        .attr('aria-hidden', false)

                    that.enforceFocus()

                    transition ?
                        that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
                        that.$element.focus().trigger('shown')

                })
            }

            , hide: function (e) {
                e && e.preventDefault()

                var that = this

                e = $.Event('hide')

                this.$element.trigger(e)

                if (!this.isShown || e.isDefaultPrevented()) return

                this.isShown = false

                this.escape()

                $(document).off('focusin.modal')

                this.$element
                    .removeClass('in')
                    .attr('aria-hidden', true)

                $.support.transition && this.$element.hasClass('fade') ?
                    this.hideWithTransition() :
                    this.hideModal()
            }

            , enforceFocus: function () {
                var that = this
                $(document).on('focusin.modal', function (e) {
                    if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
                        that.$element.focus()
                    }
                })
            }

            , escape: function () {
                var that = this
                if (this.isShown && this.options.keyboard) {
                    this.$element.on('keyup.dismiss.modal', function ( e ) {
                        e.which == 27 && that.hide()
                    })
                } else if (!this.isShown) {
                    this.$element.off('keyup.dismiss.modal')
                }
            }

            , hideWithTransition: function () {
                var that = this
                    , timeout = setTimeout(function () {
                        that.$element.off($.support.transition.end)
                        that.hideModal()
                    }, 500)

                this.$element.one($.support.transition.end, function () {
                    clearTimeout(timeout)
                    that.hideModal()
                })
            }

            , hideModal: function () {
                var that = this
                this.$element.hide()
                this.backdrop(function () {
                    that.removeBackdrop()
                    that.$element.trigger('hidden')
                })
            }

            , removeBackdrop: function () {
                this.$backdrop && this.$backdrop.remove()
                this.$backdrop = null
            }

            , backdrop: function (callback) {
                var that = this
                    , animate = this.$element.hasClass('fade') ? 'fade' : ''

                if (this.isShown && this.options.backdrop) {
                    var doAnimate = $.support.transition && animate

                    this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
                        .appendTo(document.body)

                    this.$backdrop.click(
                        this.options.backdrop == 'static' ?
                            $.proxy(this.$element[0].focus, this.$element[0])
                            : $.proxy(this.hide, this)
                    )

                    if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

                    this.$backdrop.addClass('in')

                    if (!callback) return

                    doAnimate ?
                        this.$backdrop.one($.support.transition.end, callback) :
                        callback()

                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass('in')

                    $.support.transition && this.$element.hasClass('fade')?
                        this.$backdrop.one($.support.transition.end, callback) :
                        callback()

                } else if (callback) {
                    callback()
                }
            }
        }


        /* MODAL PLUGIN DEFINITION
         * ======================= */

        var old = $.fn.modal

        $.fn.modal = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('modal')
                    , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
                if (!data) $this.data('modal', (data = new Modal(this, options)))
                if (typeof option == 'string') data[option]()
                else if (options.show) data.show()
            })
        }

        $.fn.modal.defaults = {
            backdrop: true
            , keyboard: true
            , show: true
        }

        $.fn.modal.Constructor = Modal


        /* MODAL NO CONFLICT
         * ================= */

        $.fn.modal.noConflict = function () {
            $.fn.modal = old
            return this
        }


        /* MODAL DATA-API
         * ============== */

        $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
            var $this = $(this)
                , href = $this.attr('href')
                , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
                , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

            e.preventDefault()

            $target
                .modal(option)
                .one('hide', function () {
                    $this.focus()
                })
        })

    }(window.jQuery);
    /* ===========================================================
     * bootstrap-tooltip.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#tooltips
     * Inspired by the original jQuery.tipsy by Jason Frame
     * ===========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* TOOLTIP PUBLIC CLASS DEFINITION
         * =============================== */

        var Tooltip = function (element, options) {
            this.init('tooltip', element, options)
        }

        Tooltip.prototype = {

            constructor: Tooltip

            , init: function (type, element, options) {
                var eventIn
                    , eventOut
                    , triggers
                    , trigger
                    , i

                this.type = type
                this.$element = $(element)
                this.options = this.getOptions(options)
                this.enabled = true

                triggers = this.options.trigger.split(' ')

                for (i = triggers.length; i--;) {
                    trigger = triggers[i]
                    if (trigger == 'click') {
                        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
                    } else if (trigger != 'manual') {
                        eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
                        eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
                        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
                    }
                }

                this.options.selector ?
                    (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
                    this.fixTitle()
            }

            , getOptions: function (options) {
                options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

                if (options.delay && typeof options.delay == 'number') {
                    options.delay = {
                        show: options.delay
                        , hide: options.delay
                    }
                }

                return options
            }

            , enter: function (e) {
                var defaults = $.fn[this.type].defaults
                    , options = {}
                    , self

                this._options && $.each(this._options, function (key, value) {
                    if (defaults[key] != value) options[key] = value
                }, this)

                self = $(e.currentTarget)[this.type](options).data(this.type)

                if (!self.options.delay || !self.options.delay.show) return self.show()

                clearTimeout(this.timeout)
                self.hoverState = 'in'
                this.timeout = setTimeout(function() {
                    if (self.hoverState == 'in') self.show()
                }, self.options.delay.show)
            }

            , leave: function (e) {
                var self = $(e.currentTarget)[this.type](this._options).data(this.type)

                if (this.timeout) clearTimeout(this.timeout)
                if (!self.options.delay || !self.options.delay.hide) return self.hide()

                self.hoverState = 'out'
                this.timeout = setTimeout(function() {
                    if (self.hoverState == 'out') self.hide()
                }, self.options.delay.hide)
            }

            , show: function () {
                var $tip
                    , pos
                    , actualWidth
                    , actualHeight
                    , placement
                    , tp
                    , e = $.Event('show')

                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e)
                    if (e.isDefaultPrevented()) return
                    $tip = this.tip()
                    this.setContent()

                    if (this.options.animation) {
                        $tip.addClass('fade')
                    }

                    placement = typeof this.options.placement == 'function' ?
                        this.options.placement.call(this, $tip[0], this.$element[0]) :
                        this.options.placement

                    $tip
                        .detach()
                        .css({ top: 0, left: 0, display: 'block' })

                    this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

                    pos = this.getPosition()

                    actualWidth = $tip[0].offsetWidth
                    actualHeight = $tip[0].offsetHeight

                    switch (placement) {
                        case 'bottom':
                            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
                            break
                        case 'top':
                            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
                            break
                        case 'left':
                            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
                            break
                        case 'right':
                            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
                            break
                    }

                    this.applyPlacement(tp, placement)
                    this.$element.trigger('shown')
                }
            }

            , applyPlacement: function(offset, placement){
                var $tip = this.tip()
                    , width = $tip[0].offsetWidth
                    , height = $tip[0].offsetHeight
                    , actualWidth
                    , actualHeight
                    , delta
                    , replace

                $tip
                    .offset(offset)
                    .addClass(placement)
                    .addClass('in')

                actualWidth = $tip[0].offsetWidth
                actualHeight = $tip[0].offsetHeight

                if (placement == 'top' && actualHeight != height) {
                    offset.top = offset.top + height - actualHeight
                    replace = true
                }

                if (placement == 'bottom' || placement == 'top') {
                    delta = 0

                    if (offset.left < 0){
                        delta = offset.left * -2
                        offset.left = 0
                        $tip.offset(offset)
                        actualWidth = $tip[0].offsetWidth
                        actualHeight = $tip[0].offsetHeight
                    }

                    this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
                } else {
                    this.replaceArrow(actualHeight - height, actualHeight, 'top')
                }

                if (replace) $tip.offset(offset)
            }

            , replaceArrow: function(delta, dimension, position){
                this
                    .arrow()
                    .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
            }

            , setContent: function () {
                var $tip = this.tip()
                    , title = this.getTitle()

                $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
                $tip.removeClass('fade in top bottom left right')
            }

            , hide: function () {
                var that = this
                    , $tip = this.tip()
                    , e = $.Event('hide')

                this.$element.trigger(e)
                if (e.isDefaultPrevented()) return

                $tip.removeClass('in')

                function removeWithAnimation() {
                    var timeout = setTimeout(function () {
                        $tip.off($.support.transition.end).detach()
                    }, 500)

                    $tip.one($.support.transition.end, function () {
                        clearTimeout(timeout)
                        $tip.detach()
                    })
                }

                $.support.transition && this.$tip.hasClass('fade') ?
                    removeWithAnimation() :
                    $tip.detach()

                this.$element.trigger('hidden')

                return this
            }

            , fixTitle: function () {
                var $e = this.$element
                if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
                    $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
                }
            }

            , hasContent: function () {
                return this.getTitle()
            }

            , getPosition: function () {
                var el = this.$element[0]
                return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
                    width: el.offsetWidth
                    , height: el.offsetHeight
                }, this.$element.offset())
            }

            , getTitle: function () {
                var title
                    , $e = this.$element
                    , o = this.options

                title = $e.attr('data-original-title')
                || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

                return title
            }

            , tip: function () {
                return this.$tip = this.$tip || $(this.options.template)
            }

            , arrow: function(){
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }

            , validate: function () {
                if (!this.$element[0].parentNode) {
                    this.hide()
                    this.$element = null
                    this.options = null
                }
            }

            , enable: function () {
                this.enabled = true
            }

            , disable: function () {
                this.enabled = false
            }

            , toggleEnabled: function () {
                this.enabled = !this.enabled
            }

            , toggle: function (e) {
                var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
                self.tip().hasClass('in') ? self.hide() : self.show()
            }

            , destroy: function () {
                this.hide().$element.off('.' + this.type).removeData(this.type)
            }

        }


        /* TOOLTIP PLUGIN DEFINITION
         * ========================= */

        var old = $.fn.tooltip

        $.fn.tooltip = function ( option ) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('tooltip')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.tooltip.Constructor = Tooltip

        $.fn.tooltip.defaults = {
            animation: true
            , placement: 'top'
            , selector: false
            , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
            , trigger: 'hover focus'
            , title: ''
            , delay: 0
            , html: false
            , container: false
        }


        /* TOOLTIP NO CONFLICT
         * =================== */

        $.fn.tooltip.noConflict = function () {
            $.fn.tooltip = old
            return this
        }

    }(window.jQuery);
    /* ===========================================================
     * bootstrap-popover.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#popovers
     * ===========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* POPOVER PUBLIC CLASS DEFINITION
         * =============================== */

        var Popover = function (element, options) {
            this.init('popover', element, options)
        }


        /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
         ========================================== */

        Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

            constructor: Popover

            , setContent: function () {
                var $tip = this.tip()
                    , title = this.getTitle()
                    , content = this.getContent()

                $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
                $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

                $tip.removeClass('fade top bottom left right in')
            }

            , hasContent: function () {
                return this.getTitle() || this.getContent()
            }

            , getContent: function () {
                var content
                    , $e = this.$element
                    , o = this.options

                content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
                || $e.attr('data-content')

                return content
            }

            , tip: function () {
                if (!this.$tip) {
                    this.$tip = $(this.options.template)
                }
                return this.$tip
            }

            , destroy: function () {
                this.hide().$element.off('.' + this.type).removeData(this.type)
            }

        })


        /* POPOVER PLUGIN DEFINITION
         * ======================= */

        var old = $.fn.popover

        $.fn.popover = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('popover')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('popover', (data = new Popover(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.popover.Constructor = Popover

        $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
            placement: 'right'
            , trigger: 'click'
            , content: ''
            , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        })


        /* POPOVER NO CONFLICT
         * =================== */

        $.fn.popover.noConflict = function () {
            $.fn.popover = old
            return this
        }

    }(window.jQuery);
    /* =============================================================
     * bootstrap-scrollspy.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#scrollspy
     * =============================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ============================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* SCROLLSPY CLASS DEFINITION
         * ========================== */

        function ScrollSpy(element, options) {
            var process = $.proxy(this.process, this)
                , $element = $(element).is('body') ? $(window) : $(element)
                , href
            this.options = $.extend({}, $.fn.scrollspy.defaults, options)
            this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
            this.selector = (this.options.target
            || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
            || '') + ' .nav li > a'
            this.$body = $('body')
            this.refresh()
            this.process()
        }

        ScrollSpy.prototype = {

            constructor: ScrollSpy

            , refresh: function () {
                var self = this
                    , $targets

                this.offsets = $([])
                this.targets = $([])

                $targets = this.$body
                    .find(this.selector)
                    .map(function () {
                        var $el = $(this)
                            , href = $el.data('target') || $el.attr('href')
                            , $href = /^#\w/.test(href) && $(href)
                        return ( $href
                            && $href.length
                            && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
                    })
                    .sort(function (a, b) { return a[0] - b[0] })
                    .each(function () {
                        self.offsets.push(this[0])
                        self.targets.push(this[1])
                    })
            }

            , process: function () {
                var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
                    , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
                    , maxScroll = scrollHeight - this.$scrollElement.height()
                    , offsets = this.offsets
                    , targets = this.targets
                    , activeTarget = this.activeTarget
                    , i

                if (scrollTop >= maxScroll) {
                    return activeTarget != (i = targets.last()[0])
                        && this.activate ( i )
                }

                for (i = offsets.length; i--;) {
                    activeTarget != targets[i]
                    && scrollTop >= offsets[i]
                    && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
                    && this.activate( targets[i] )
                }
            }

            , activate: function (target) {
                var active
                    , selector

                this.activeTarget = target

                $(this.selector)
                    .parent('.active')
                    .removeClass('active')

                selector = this.selector
                + '[data-target="' + target + '"],'
                + this.selector + '[href="' + target + '"]'

                active = $(selector)
                    .parent('li')
                    .addClass('active')

                if (active.parent('.dropdown-menu').length)  {
                    active = active.closest('li.dropdown').addClass('active')
                }

                active.trigger('activate')
            }

        }


        /* SCROLLSPY PLUGIN DEFINITION
         * =========================== */

        var old = $.fn.scrollspy

        $.fn.scrollspy = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('scrollspy')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.scrollspy.Constructor = ScrollSpy

        $.fn.scrollspy.defaults = {
            offset: 10
        }


        /* SCROLLSPY NO CONFLICT
         * ===================== */

        $.fn.scrollspy.noConflict = function () {
            $.fn.scrollspy = old
            return this
        }


        /* SCROLLSPY DATA-API
         * ================== */

        $(window).on('load', function () {
            $('[data-spy="scroll"]').each(function () {
                var $spy = $(this)
                $spy.scrollspy($spy.data())
            })
        })

    }(window.jQuery);/* ========================================================
     * bootstrap-tab.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#tabs
     * ========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ======================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* TAB CLASS DEFINITION
         * ==================== */

        var Tab = function (element) {
            this.element = $(element)
        }

        Tab.prototype = {

            constructor: Tab

            , show: function () {
                var $this = this.element
                    , $ul = $this.closest('ul:not(.dropdown-menu)')
                    , selector = $this.attr('data-target')
                    , previous
                    , $target
                    , e

                if (!selector) {
                    selector = $this.attr('href')
                    selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
                }

                if ( $this.parent('li').hasClass('active') ) return

                previous = $ul.find('.active:last a')[0]

                e = $.Event('show', {
                    relatedTarget: previous
                })

                $this.trigger(e)

                if (e.isDefaultPrevented()) return

                $target = $(selector)

                this.activate($this.parent('li'), $ul)
                this.activate($target, $target.parent(), function () {
                    $this.trigger({
                        type: 'shown'
                        , relatedTarget: previous
                    })
                })
            }

            , activate: function ( element, container, callback) {
                var $active = container.find('> .active')
                    , transition = callback
                        && $.support.transition
                        && $active.hasClass('fade')

                function next() {
                    $active
                        .removeClass('active')
                        .find('> .dropdown-menu > .active')
                        .removeClass('active')

                    element.addClass('active')

                    if (transition) {
                        element[0].offsetWidth // reflow for transition
                        element.addClass('in')
                    } else {
                        element.removeClass('fade')
                    }

                    if ( element.parent('.dropdown-menu') ) {
                        element.closest('li.dropdown').addClass('active')
                    }

                    callback && callback()
                }

                transition ?
                    $active.one($.support.transition.end, next) :
                    next()

                $active.removeClass('in')
            }
        }


        /* TAB PLUGIN DEFINITION
         * ===================== */

        var old = $.fn.tab

        $.fn.tab = function ( option ) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('tab')
                if (!data) $this.data('tab', (data = new Tab(this)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.tab.Constructor = Tab


        /* TAB NO CONFLICT
         * =============== */

        $.fn.tab.noConflict = function () {
            $.fn.tab = old
            return this
        }


        /* TAB DATA-API
         * ============ */

        $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
            e.preventDefault()
            $(this).tab('show')
        })

    }(window.jQuery);/* =============================================================
     * bootstrap-typeahead.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#typeahead
     * =============================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ============================================================ */


    !function($){

        "use strict"; // jshint ;_;


        /* TYPEAHEAD PUBLIC CLASS DEFINITION
         * ================================= */

        var Typeahead = function (element, options) {
            this.$element = $(element)
            this.options = $.extend({}, $.fn.typeahead.defaults, options)
            this.matcher = this.options.matcher || this.matcher
            this.sorter = this.options.sorter || this.sorter
            this.highlighter = this.options.highlighter || this.highlighter
            this.updater = this.options.updater || this.updater
            this.source = this.options.source
            this.$menu = $(this.options.menu)
            this.shown = false
            this.listen()
        }

        Typeahead.prototype = {

            constructor: Typeahead

            , select: function () {
                var val = this.$menu.find('.active').attr('data-value')
                this.$element
                    .val(this.updater(val))
                    .change()
                return this.hide()
            }

            , updater: function (item) {
                return item
            }

            , show: function () {
                var pos = $.extend({}, this.$element.position(), {
                    height: this.$element[0].offsetHeight
                })

                this.$menu
                    .insertAfter(this.$element)
                    .css({
                        top: pos.top + pos.height
                        , left: pos.left
                    })
                    .show()

                this.shown = true
                return this
            }

            , hide: function () {
                this.$menu.hide()
                this.shown = false
                return this
            }

            , lookup: function (event) {
                var items

                this.query = this.$element.val()

                if (!this.query || this.query.length < this.options.minLength) {
                    return this.shown ? this.hide() : this
                }

                items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

                return items ? this.process(items) : this
            }

            , process: function (items) {
                var that = this

                items = $.grep(items, function (item) {
                    return that.matcher(item)
                })

                items = this.sorter(items)

                if (!items.length) {
                    return this.shown ? this.hide() : this
                }

                return this.render(items.slice(0, this.options.items)).show()
            }

            , matcher: function (item) {
                return ~item.toLowerCase().indexOf(this.query.toLowerCase())
            }

            , sorter: function (items) {
                var beginswith = []
                    , caseSensitive = []
                    , caseInsensitive = []
                    , item

                while (item = items.shift()) {
                    if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
                    else if (~item.indexOf(this.query)) caseSensitive.push(item)
                    else caseInsensitive.push(item)
                }

                return beginswith.concat(caseSensitive, caseInsensitive)
            }

            , highlighter: function (item) {
                var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
                return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                    return '<strong>' + match + '</strong>'
                })
            }

            , render: function (items) {
                var that = this

                items = $(items).map(function (i, item) {
                    i = $(that.options.item).attr('data-value', item)
                    i.find('a').html(that.highlighter(item))
                    return i[0]
                })

                items.first().addClass('active')
                this.$menu.html(items)
                return this
            }

            , next: function (event) {
                var active = this.$menu.find('.active').removeClass('active')
                    , next = active.next()

                if (!next.length) {
                    next = $(this.$menu.find('li')[0])
                }

                next.addClass('active')
            }

            , prev: function (event) {
                var active = this.$menu.find('.active').removeClass('active')
                    , prev = active.prev()

                if (!prev.length) {
                    prev = this.$menu.find('li').last()
                }

                prev.addClass('active')
            }

            , listen: function () {
                this.$element
                    .on('focus',    $.proxy(this.focus, this))
                    .on('blur',     $.proxy(this.blur, this))
                    .on('keypress', $.proxy(this.keypress, this))
                    .on('keyup',    $.proxy(this.keyup, this))

                if (this.eventSupported('keydown')) {
                    this.$element.on('keydown', $.proxy(this.keydown, this))
                }

                this.$menu
                    .on('click', $.proxy(this.click, this))
                    .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
                    .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
            }

            , eventSupported: function(eventName) {
                var isSupported = eventName in this.$element
                if (!isSupported) {
                    this.$element.setAttribute(eventName, 'return;')
                    isSupported = typeof this.$element[eventName] === 'function'
                }
                return isSupported
            }

            , move: function (e) {
                if (!this.shown) return

                switch(e.keyCode) {
                    case 9: // tab
                    case 13: // enter
                    case 27: // escape
                        e.preventDefault()
                        break

                    case 38: // up arrow
                        e.preventDefault()
                        this.prev()
                        break

                    case 40: // down arrow
                        e.preventDefault()
                        this.next()
                        break
                }

                e.stopPropagation()
            }

            , keydown: function (e) {
                this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
                this.move(e)
            }

            , keypress: function (e) {
                if (this.suppressKeyPressRepeat) return
                this.move(e)
            }

            , keyup: function (e) {
                switch(e.keyCode) {
                    case 40: // down arrow
                    case 38: // up arrow
                    case 16: // shift
                    case 17: // ctrl
                    case 18: // alt
                        break

                    case 9: // tab
                    case 13: // enter
                        if (!this.shown) return
                        this.select()
                        break

                    case 27: // escape
                        if (!this.shown) return
                        this.hide()
                        break

                    default:
                        this.lookup()
                }

                e.stopPropagation()
                e.preventDefault()
            }

            , focus: function (e) {
                this.focused = true
            }

            , blur: function (e) {
                this.focused = false
                if (!this.mousedover && this.shown) this.hide()
            }

            , click: function (e) {
                e.stopPropagation()
                e.preventDefault()
                this.select()
                this.$element.focus()
            }

            , mouseenter: function (e) {
                this.mousedover = true
                this.$menu.find('.active').removeClass('active')
                $(e.currentTarget).addClass('active')
            }

            , mouseleave: function (e) {
                this.mousedover = false
                if (!this.focused && this.shown) this.hide()
            }

        }


        /* TYPEAHEAD PLUGIN DEFINITION
         * =========================== */

        var old = $.fn.typeahead

        $.fn.typeahead = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('typeahead')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.typeahead.defaults = {
            source: []
            , items: 8
            , menu: '<ul class="typeahead dropdown-menu"></ul>'
            , item: '<li><a href="#"></a></li>'
            , minLength: 1
        }

        $.fn.typeahead.Constructor = Typeahead


        /* TYPEAHEAD NO CONFLICT
         * =================== */

        $.fn.typeahead.noConflict = function () {
            $.fn.typeahead = old
            return this
        }


        /* TYPEAHEAD DATA-API
         * ================== */

        $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
            var $this = $(this)
            if ($this.data('typeahead')) return
            $this.typeahead($this.data())
        })

    }(window.jQuery);
    /* ==========================================================
     * bootstrap-affix.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#affix
     * ==========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* AFFIX CLASS DEFINITION
         * ====================== */

        var Affix = function (element, options) {
            this.options = $.extend({}, $.fn.affix.defaults, options)
            this.$window = $(window)
                .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
                .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
            this.$element = $(element)
            this.checkPosition()
        }

        Affix.prototype.checkPosition = function () {
            if (!this.$element.is(':visible')) return

            var scrollHeight = $(document).height()
                , scrollTop = this.$window.scrollTop()
                , position = this.$element.offset()
                , offset = this.options.offset
                , offsetBottom = offset.bottom
                , offsetTop = offset.top
                , reset = 'affix affix-top affix-bottom'
                , affix

            if (typeof offset != 'object') offsetBottom = offsetTop = offset
            if (typeof offsetTop == 'function') offsetTop = offset.top()
            if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

            affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
                false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
                'bottom' : offsetTop != null && scrollTop <= offsetTop ?
                'top'    : false

            if (this.affixed === affix) return

            this.affixed = affix
            this.unpin = affix == 'bottom' ? position.top - scrollTop : null

            this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
        }


        /* AFFIX PLUGIN DEFINITION
         * ======================= */

        var old = $.fn.affix

        $.fn.affix = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('affix')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('affix', (data = new Affix(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.affix.Constructor = Affix

        $.fn.affix.defaults = {
            offset: 0
        }


        /* AFFIX NO CONFLICT
         * ================= */

        $.fn.affix.noConflict = function () {
            $.fn.affix = old
            return this
        }


        /* AFFIX DATA-API
         * ============== */

        $(window).on('load', function () {
            $('[data-spy="affix"]').each(function () {
                var $spy = $(this)
                    , data = $spy.data()

                data.offset = data.offset || {}

                data.offsetBottom && (data.offset.bottom = data.offsetBottom)
                data.offsetTop && (data.offset.top = data.offsetTop)

                $spy.affix(data)
            })
        })


    }(window.jQuery);

    /* ===================================================
     * bootstrap-transition.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#transitions
     * ===================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
         * ======================================================= */

        $(function () {

            $.support.transition = (function () {

                var transitionEnd = (function () {

                    var el = document.createElement('bootstrap')
                        , transEndEventNames = {
                            'WebkitTransition' : 'webkitTransitionEnd'
                            ,  'MozTransition'    : 'transitionend'
                            ,  'OTransition'      : 'oTransitionEnd otransitionend'
                            ,  'transition'       : 'transitionend'
                        }
                        , name

                    for (name in transEndEventNames){
                        if (el.style[name] !== undefined) {
                            return transEndEventNames[name]
                        }
                    }

                }())

                return transitionEnd && {
                        end: transitionEnd
                    }

            })()

        })

    }(window.jQuery);
    /* ==========================================================
     * bootstrap-alert.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#alerts
     * ==========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* ALERT CLASS DEFINITION
         * ====================== */

        var dismiss = '[data-dismiss="alert"]'
            , Alert = function (el) {
                $(el).on('click', dismiss, this.close)
            }

        Alert.prototype.close = function (e) {
            var $this = $(this)
                , selector = $this.attr('data-target')
                , $parent

            if (!selector) {
                selector = $this.attr('href')
                selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
            }

            $parent = $(selector)

            e && e.preventDefault()

            $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

            $parent.trigger(e = $.Event('close'))

            if (e.isDefaultPrevented()) return

            $parent.removeClass('in')

            function removeElement() {
                $parent
                    .trigger('closed')
                    .remove()
            }

            $.support.transition && $parent.hasClass('fade') ?
                $parent.on($.support.transition.end, removeElement) :
                removeElement()
        }


        /* ALERT PLUGIN DEFINITION
         * ======================= */

        var old = $.fn.alert

        $.fn.alert = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('alert')
                if (!data) $this.data('alert', (data = new Alert(this)))
                if (typeof option == 'string') data[option].call($this)
            })
        }

        $.fn.alert.Constructor = Alert


        /* ALERT NO CONFLICT
         * ================= */

        $.fn.alert.noConflict = function () {
            $.fn.alert = old
            return this
        }


        /* ALERT DATA-API
         * ============== */

        $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

    }(window.jQuery);
    /* =========================================================
     * bootstrap-modal.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#modals
     * =========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================= */


    !function ($) {

        "use strict"; // jshint ;_;


        /* MODAL CLASS DEFINITION
         * ====================== */

        var Modal = function (element, options) {
            this.options = options
            this.$element = $(element)
                .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
            this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
        }

        Modal.prototype = {

            constructor: Modal

            , toggle: function () {
                return this[!this.isShown ? 'show' : 'hide']()
            }

            , show: function () {
                var that = this
                    , e = $.Event('show')

                this.$element.trigger(e)

                if (this.isShown || e.isDefaultPrevented()) return

                this.isShown = true

                this.escape()

                this.backdrop(function () {
                    var transition = $.support.transition && that.$element.hasClass('fade')

                    if (!that.$element.parent().length) {
                        that.$element.appendTo(document.body) //don't move modals dom position
                    }

                    that.$element.show()

                    if (transition) {
                        that.$element[0].offsetWidth // force reflow
                    }

                    that.$element
                        .addClass('in')
                        .attr('aria-hidden', false)

                    that.enforceFocus()

                    transition ?
                        that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
                        that.$element.focus().trigger('shown')

                })
            }

            , hide: function (e) {
                e && e.preventDefault()

                var that = this

                e = $.Event('hide')

                this.$element.trigger(e)

                if (!this.isShown || e.isDefaultPrevented()) return

                this.isShown = false

                this.escape()

                $(document).off('focusin.modal')

                this.$element
                    .removeClass('in')
                    .attr('aria-hidden', true)

                $.support.transition && this.$element.hasClass('fade') ?
                    this.hideWithTransition() :
                    this.hideModal()
            }

            , enforceFocus: function () {
                var that = this
                $(document).on('focusin.modal', function (e) {
                    if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
                        that.$element.focus()
                    }
                })
            }

            , escape: function () {
                var that = this
                if (this.isShown && this.options.keyboard) {
                    this.$element.on('keyup.dismiss.modal', function ( e ) {
                        e.which == 27 && that.hide()
                    })
                } else if (!this.isShown) {
                    this.$element.off('keyup.dismiss.modal')
                }
            }

            , hideWithTransition: function () {
                var that = this
                    , timeout = setTimeout(function () {
                        that.$element.off($.support.transition.end)
                        that.hideModal()
                    }, 500)

                this.$element.one($.support.transition.end, function () {
                    clearTimeout(timeout)
                    that.hideModal()
                })
            }

            , hideModal: function () {
                var that = this
                this.$element.hide()
                this.backdrop(function () {
                    that.removeBackdrop()
                    that.$element.trigger('hidden')
                })
            }

            , removeBackdrop: function () {
                this.$backdrop && this.$backdrop.remove()
                this.$backdrop = null
            }

            , backdrop: function (callback) {
                var that = this
                    , animate = this.$element.hasClass('fade') ? 'fade' : ''

                if (this.isShown && this.options.backdrop) {
                    var doAnimate = $.support.transition && animate

                    this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
                        .appendTo(document.body)

                    this.$backdrop.click(
                        this.options.backdrop == 'static' ?
                            $.proxy(this.$element[0].focus, this.$element[0])
                            : $.proxy(this.hide, this)
                    )

                    if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

                    this.$backdrop.addClass('in')

                    if (!callback) return

                    doAnimate ?
                        this.$backdrop.one($.support.transition.end, callback) :
                        callback()

                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass('in')

                    $.support.transition && this.$element.hasClass('fade')?
                        this.$backdrop.one($.support.transition.end, callback) :
                        callback()

                } else if (callback) {
                    callback()
                }
            }
        }


        /* MODAL PLUGIN DEFINITION
         * ======================= */

        var old = $.fn.modal

        $.fn.modal = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('modal')
                    , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
                if (!data) $this.data('modal', (data = new Modal(this, options)))
                if (typeof option == 'string') data[option]()
                else if (options.show) data.show()
            })
        }

        $.fn.modal.defaults = {
            backdrop: true
            , keyboard: true
            , show: true
        }

        $.fn.modal.Constructor = Modal


        /* MODAL NO CONFLICT
         * ================= */

        $.fn.modal.noConflict = function () {
            $.fn.modal = old
            return this
        }


        /* MODAL DATA-API
         * ============== */

        $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
            var $this = $(this)
                , href = $this.attr('href')
                , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
                , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

            e.preventDefault()

            $target
                .modal(option)
                .one('hide', function () {
                    $this.focus()
                })
        })

    }(window.jQuery);
    /* ============================================================
     * bootstrap-dropdown.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#dropdowns
     * ============================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ============================================================ */


    !function ($) {

        "use strict"; // jshint ;_;


        /* DROPDOWN CLASS DEFINITION
         * ========================= */

        var toggle = '[data-toggle=dropdown]'
            , Dropdown = function (element) {
                var $el = $(element).on('click.dropdown.data-api', this.toggle)
                $('html').on('click.dropdown.data-api', function () {
                    $el.parent().removeClass('open')
                })
            }

        Dropdown.prototype = {

            constructor: Dropdown

            , toggle: function (e) {
                var $this = $(this)
                    , $parent
                    , isActive

                if ($this.is('.disabled, :disabled')) return

                $parent = getParent($this)

                isActive = $parent.hasClass('open')

                clearMenus()

                if (!isActive) {
                    if ('ontouchstart' in document.documentElement) {
                        // if mobile we we use a backdrop because click events don't delegate
                        $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
                    }
                    $parent.toggleClass('open')
                }

                $this.focus()

                return false
            }

            , keydown: function (e) {
                var $this
                    , $items
                    , $active
                    , $parent
                    , isActive
                    , index

                if (!/(38|40|27)/.test(e.keyCode)) return

                $this = $(this)

                e.preventDefault()
                e.stopPropagation()

                if ($this.is('.disabled, :disabled')) return

                $parent = getParent($this)

                isActive = $parent.hasClass('open')

                if (!isActive || (isActive && e.keyCode == 27)) {
                    if (e.which == 27) $parent.find(toggle).focus()
                    return $this.click()
                }

                $items = $('[role=menu] li:not(.divider):visible a', $parent)

                if (!$items.length) return

                index = $items.index($items.filter(':focus'))

                if (e.keyCode == 38 && index > 0) index--                                        // up
                if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
                if (!~index) index = 0

                $items
                    .eq(index)
                    .focus()
            }

        }

        function clearMenus() {
            $('.dropdown-backdrop').remove()
            $(toggle).each(function () {
                getParent($(this)).removeClass('open')
            })
        }

        function getParent($this) {
            var selector = $this.attr('data-target')
                , $parent

            if (!selector) {
                selector = $this.attr('href')
                selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
            }

            $parent = selector && $(selector)

            if (!$parent || !$parent.length) $parent = $this.parent()

            return $parent
        }


        /* DROPDOWN PLUGIN DEFINITION
         * ========================== */

        var old = $.fn.dropdown

        $.fn.dropdown = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('dropdown')
                if (!data) $this.data('dropdown', (data = new Dropdown(this)))
                if (typeof option == 'string') data[option].call($this)
            })
        }

        $.fn.dropdown.Constructor = Dropdown


        /* DROPDOWN NO CONFLICT
         * ==================== */

        $.fn.dropdown.noConflict = function () {
            $.fn.dropdown = old
            return this
        }


        /* APPLY TO STANDARD DROPDOWN ELEMENTS
         * =================================== */

        $(document)
            .on('click.dropdown.data-api', clearMenus)
            .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
            .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
            .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

    }(window.jQuery);
    /* =============================================================
     * bootstrap-scrollspy.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#scrollspy
     * =============================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ============================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* SCROLLSPY CLASS DEFINITION
         * ========================== */

        function ScrollSpy(element, options) {
            var process = $.proxy(this.process, this)
                , $element = $(element).is('body') ? $(window) : $(element)
                , href
            this.options = $.extend({}, $.fn.scrollspy.defaults, options)
            this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
            this.selector = (this.options.target
            || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
            || '') + ' .nav li > a'
            this.$body = $('body')
            this.refresh()
            this.process()
        }

        ScrollSpy.prototype = {

            constructor: ScrollSpy

            , refresh: function () {
                var self = this
                    , $targets

                this.offsets = $([])
                this.targets = $([])

                $targets = this.$body
                    .find(this.selector)
                    .map(function () {
                        var $el = $(this)
                            , href = $el.data('target') || $el.attr('href')
                            , $href = /^#\w/.test(href) && $(href)
                        return ( $href
                            && $href.length
                            && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
                    })
                    .sort(function (a, b) { return a[0] - b[0] })
                    .each(function () {
                        self.offsets.push(this[0])
                        self.targets.push(this[1])
                    })
            }

            , process: function () {
                var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
                    , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
                    , maxScroll = scrollHeight - this.$scrollElement.height()
                    , offsets = this.offsets
                    , targets = this.targets
                    , activeTarget = this.activeTarget
                    , i

                if (scrollTop >= maxScroll) {
                    return activeTarget != (i = targets.last()[0])
                        && this.activate ( i )
                }

                for (i = offsets.length; i--;) {
                    activeTarget != targets[i]
                    && scrollTop >= offsets[i]
                    && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
                    && this.activate( targets[i] )
                }
            }

            , activate: function (target) {
                var active
                    , selector

                this.activeTarget = target

                $(this.selector)
                    .parent('.active')
                    .removeClass('active')

                selector = this.selector
                + '[data-target="' + target + '"],'
                + this.selector + '[href="' + target + '"]'

                active = $(selector)
                    .parent('li')
                    .addClass('active')

                if (active.parent('.dropdown-menu').length)  {
                    active = active.closest('li.dropdown').addClass('active')
                }

                active.trigger('activate')
            }

        }


        /* SCROLLSPY PLUGIN DEFINITION
         * =========================== */

        var old = $.fn.scrollspy

        $.fn.scrollspy = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('scrollspy')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.scrollspy.Constructor = ScrollSpy

        $.fn.scrollspy.defaults = {
            offset: 10
        }


        /* SCROLLSPY NO CONFLICT
         * ===================== */

        $.fn.scrollspy.noConflict = function () {
            $.fn.scrollspy = old
            return this
        }


        /* SCROLLSPY DATA-API
         * ================== */

        $(window).on('load', function () {
            $('[data-spy="scroll"]').each(function () {
                var $spy = $(this)
                $spy.scrollspy($spy.data())
            })
        })

    }(window.jQuery);
    /* ========================================================
     * bootstrap-tab.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#tabs
     * ========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ======================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* TAB CLASS DEFINITION
         * ==================== */

        var Tab = function (element) {
            this.element = $(element)
        }

        Tab.prototype = {

            constructor: Tab

            , show: function () {
                var $this = this.element
                    , $ul = $this.closest('ul:not(.dropdown-menu)')
                    , selector = $this.attr('data-target')
                    , previous
                    , $target
                    , e

                if (!selector) {
                    selector = $this.attr('href')
                    selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
                }

                if ( $this.parent('li').hasClass('active') ) return

                previous = $ul.find('.active:last a')[0]

                e = $.Event('show', {
                    relatedTarget: previous
                })

                $this.trigger(e)

                if (e.isDefaultPrevented()) return

                $target = $(selector)

                this.activate($this.parent('li'), $ul)
                this.activate($target, $target.parent(), function () {
                    $this.trigger({
                        type: 'shown'
                        , relatedTarget: previous
                    })
                })
            }

            , activate: function ( element, container, callback) {
                var $active = container.find('> .active')
                    , transition = callback
                        && $.support.transition
                        && $active.hasClass('fade')

                function next() {
                    $active
                        .removeClass('active')
                        .find('> .dropdown-menu > .active')
                        .removeClass('active')

                    element.addClass('active')

                    if (transition) {
                        element[0].offsetWidth // reflow for transition
                        element.addClass('in')
                    } else {
                        element.removeClass('fade')
                    }

                    if ( element.parent('.dropdown-menu') ) {
                        element.closest('li.dropdown').addClass('active')
                    }

                    callback && callback()
                }

                transition ?
                    $active.one($.support.transition.end, next) :
                    next()

                $active.removeClass('in')
            }
        }


        /* TAB PLUGIN DEFINITION
         * ===================== */

        var old = $.fn.tab

        $.fn.tab = function ( option ) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('tab')
                if (!data) $this.data('tab', (data = new Tab(this)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.tab.Constructor = Tab


        /* TAB NO CONFLICT
         * =============== */

        $.fn.tab.noConflict = function () {
            $.fn.tab = old
            return this
        }


        /* TAB DATA-API
         * ============ */

        $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
            e.preventDefault()
            $(this).tab('show')
        })

    }(window.jQuery);
    /* ===========================================================
     * bootstrap-tooltip.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#tooltips
     * Inspired by the original jQuery.tipsy by Jason Frame
     * ===========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* TOOLTIP PUBLIC CLASS DEFINITION
         * =============================== */

        var Tooltip = function (element, options) {
            this.init('tooltip', element, options)
        }

        Tooltip.prototype = {

            constructor: Tooltip

            , init: function (type, element, options) {
                var eventIn
                    , eventOut
                    , triggers
                    , trigger
                    , i

                this.type = type
                this.$element = $(element)
                this.options = this.getOptions(options)
                this.enabled = true

                triggers = this.options.trigger.split(' ')

                for (i = triggers.length; i--;) {
                    trigger = triggers[i]
                    if (trigger == 'click') {
                        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
                    } else if (trigger != 'manual') {
                        eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
                        eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
                        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
                    }
                }

                this.options.selector ?
                    (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
                    this.fixTitle()
            }

            , getOptions: function (options) {
                options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

                if (options.delay && typeof options.delay == 'number') {
                    options.delay = {
                        show: options.delay
                        , hide: options.delay
                    }
                }

                return options
            }

            , enter: function (e) {
                var defaults = $.fn[this.type].defaults
                    , options = {}
                    , self

                this._options && $.each(this._options, function (key, value) {
                    if (defaults[key] != value) options[key] = value
                }, this)

                self = $(e.currentTarget)[this.type](options).data(this.type)

                if (!self.options.delay || !self.options.delay.show) return self.show()

                clearTimeout(this.timeout)
                self.hoverState = 'in'
                this.timeout = setTimeout(function() {
                    if (self.hoverState == 'in') self.show()
                }, self.options.delay.show)
            }

            , leave: function (e) {
                var self = $(e.currentTarget)[this.type](this._options).data(this.type)

                if (this.timeout) clearTimeout(this.timeout)
                if (!self.options.delay || !self.options.delay.hide) return self.hide()

                self.hoverState = 'out'
                this.timeout = setTimeout(function() {
                    if (self.hoverState == 'out') self.hide()
                }, self.options.delay.hide)
            }

            , show: function () {
                var $tip
                    , pos
                    , actualWidth
                    , actualHeight
                    , placement
                    , tp
                    , e = $.Event('show')

                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e)
                    if (e.isDefaultPrevented()) return
                    $tip = this.tip()
                    this.setContent()

                    if (this.options.animation) {
                        $tip.addClass('fade')
                    }

                    placement = typeof this.options.placement == 'function' ?
                        this.options.placement.call(this, $tip[0], this.$element[0]) :
                        this.options.placement

                    $tip
                        .detach()
                        .css({ top: 0, left: 0, display: 'block' })

                    this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

                    pos = this.getPosition()

                    actualWidth = $tip[0].offsetWidth
                    actualHeight = $tip[0].offsetHeight

                    switch (placement) {
                        case 'bottom':
                            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
                            break
                        case 'top':
                            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
                            break
                        case 'left':
                            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
                            break
                        case 'right':
                            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
                            break
                    }

                    this.applyPlacement(tp, placement)
                    this.$element.trigger('shown')
                }
            }

            , applyPlacement: function(offset, placement){
                var $tip = this.tip()
                    , width = $tip[0].offsetWidth
                    , height = $tip[0].offsetHeight
                    , actualWidth
                    , actualHeight
                    , delta
                    , replace

                $tip
                    .offset(offset)
                    .addClass(placement)
                    .addClass('in')

                actualWidth = $tip[0].offsetWidth
                actualHeight = $tip[0].offsetHeight

                if (placement == 'top' && actualHeight != height) {
                    offset.top = offset.top + height - actualHeight
                    replace = true
                }

                if (placement == 'bottom' || placement == 'top') {
                    delta = 0

                    if (offset.left < 0){
                        delta = offset.left * -2
                        offset.left = 0
                        $tip.offset(offset)
                        actualWidth = $tip[0].offsetWidth
                        actualHeight = $tip[0].offsetHeight
                    }

                    this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
                } else {
                    this.replaceArrow(actualHeight - height, actualHeight, 'top')
                }

                if (replace) $tip.offset(offset)
            }

            , replaceArrow: function(delta, dimension, position){
                this
                    .arrow()
                    .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
            }

            , setContent: function () {
                var $tip = this.tip()
                    , title = this.getTitle()

                $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
                $tip.removeClass('fade in top bottom left right')
            }

            , hide: function () {
                var that = this
                    , $tip = this.tip()
                    , e = $.Event('hide')

                this.$element.trigger(e)
                if (e.isDefaultPrevented()) return

                $tip.removeClass('in')

                function removeWithAnimation() {
                    var timeout = setTimeout(function () {
                        $tip.off($.support.transition.end).detach()
                    }, 500)

                    $tip.one($.support.transition.end, function () {
                        clearTimeout(timeout)
                        $tip.detach()
                    })
                }

                $.support.transition && this.$tip.hasClass('fade') ?
                    removeWithAnimation() :
                    $tip.detach()

                this.$element.trigger('hidden')

                return this
            }

            , fixTitle: function () {
                var $e = this.$element
                if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
                    $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
                }
            }

            , hasContent: function () {
                return this.getTitle()
            }

            , getPosition: function () {
                var el = this.$element[0]
                return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
                    width: el.offsetWidth
                    , height: el.offsetHeight
                }, this.$element.offset())
            }

            , getTitle: function () {
                var title
                    , $e = this.$element
                    , o = this.options

                title = $e.attr('data-original-title')
                || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

                return title
            }

            , tip: function () {
                return this.$tip = this.$tip || $(this.options.template)
            }

            , arrow: function(){
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }

            , validate: function () {
                if (!this.$element[0].parentNode) {
                    this.hide()
                    this.$element = null
                    this.options = null
                }
            }

            , enable: function () {
                this.enabled = true
            }

            , disable: function () {
                this.enabled = false
            }

            , toggleEnabled: function () {
                this.enabled = !this.enabled
            }

            , toggle: function (e) {
                var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
                self.tip().hasClass('in') ? self.hide() : self.show()
            }

            , destroy: function () {
                this.hide().$element.off('.' + this.type).removeData(this.type)
            }

        }


        /* TOOLTIP PLUGIN DEFINITION
         * ========================= */

        var old = $.fn.tooltip

        $.fn.tooltip = function ( option ) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('tooltip')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.tooltip.Constructor = Tooltip

        $.fn.tooltip.defaults = {
            animation: true
            , placement: 'top'
            , selector: false
            , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
            , trigger: 'hover focus'
            , title: ''
            , delay: 0
            , html: false
            , container: false
        }


        /* TOOLTIP NO CONFLICT
         * =================== */

        $.fn.tooltip.noConflict = function () {
            $.fn.tooltip = old
            return this
        }

    }(window.jQuery);
    /* ===========================================================
     * bootstrap-popover.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#popovers
     * ===========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* POPOVER PUBLIC CLASS DEFINITION
         * =============================== */

        var Popover = function (element, options) {
            this.init('popover', element, options)
        }


        /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
         ========================================== */

        Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

            constructor: Popover

            , setContent: function () {
                var $tip = this.tip()
                    , title = this.getTitle()
                    , content = this.getContent()

                $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
                $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

                $tip.removeClass('fade top bottom left right in')
            }

            , hasContent: function () {
                return this.getTitle() || this.getContent()
            }

            , getContent: function () {
                var content
                    , $e = this.$element
                    , o = this.options

                content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
                || $e.attr('data-content')

                return content
            }

            , tip: function () {
                if (!this.$tip) {
                    this.$tip = $(this.options.template)
                }
                return this.$tip
            }

            , destroy: function () {
                this.hide().$element.off('.' + this.type).removeData(this.type)
            }

        })


        /* POPOVER PLUGIN DEFINITION
         * ======================= */

        var old = $.fn.popover

        $.fn.popover = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('popover')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('popover', (data = new Popover(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.popover.Constructor = Popover

        $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
            placement: 'right'
            , trigger: 'click'
            , content: ''
            , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        })


        /* POPOVER NO CONFLICT
         * =================== */

        $.fn.popover.noConflict = function () {
            $.fn.popover = old
            return this
        }

    }(window.jQuery);
    /* ============================================================
     * bootstrap-button.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#buttons
     * ============================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ============================================================ */


    !function ($) {

        "use strict"; // jshint ;_;


        /* BUTTON PUBLIC CLASS DEFINITION
         * ============================== */

        var Button = function (element, options) {
            this.$element = $(element)
            this.options = $.extend({}, $.fn.button.defaults, options)
        }

        Button.prototype.setState = function (state) {
            var d = 'disabled'
                , $el = this.$element
                , data = $el.data()
                , val = $el.is('input') ? 'val' : 'html'

            state = state + 'Text'
            data.resetText || $el.data('resetText', $el[val]())

            $el[val](data[state] || this.options[state])

            // push to event loop to allow forms to submit
            setTimeout(function () {
                state == 'loadingText' ?
                    $el.addClass(d).attr(d, d) :
                    $el.removeClass(d).removeAttr(d)
            }, 0)
        }

        Button.prototype.toggle = function () {
            var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

            $parent && $parent
                .find('.active')
                .removeClass('active')

            this.$element.toggleClass('active')
        }


        /* BUTTON PLUGIN DEFINITION
         * ======================== */

        var old = $.fn.button

        $.fn.button = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('button')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('button', (data = new Button(this, options)))
                if (option == 'toggle') data.toggle()
                else if (option) data.setState(option)
            })
        }

        $.fn.button.defaults = {
            loadingText: 'loading...'
        }

        $.fn.button.Constructor = Button


        /* BUTTON NO CONFLICT
         * ================== */

        $.fn.button.noConflict = function () {
            $.fn.button = old
            return this
        }


        /* BUTTON DATA-API
         * =============== */

        $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
            var $btn = $(e.target)
            if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
            $btn.button('toggle')
        })

    }(window.jQuery);
    /* =============================================================
     * bootstrap-collapse.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#collapse
     * =============================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ============================================================ */


    !function ($) {

        "use strict"; // jshint ;_;


        /* COLLAPSE PUBLIC CLASS DEFINITION
         * ================================ */

        var Collapse = function (element, options) {
            this.$element = $(element)
            this.options = $.extend({}, $.fn.collapse.defaults, options)

            if (this.options.parent) {
                this.$parent = $(this.options.parent)
            }

            this.options.toggle && this.toggle()
        }

        Collapse.prototype = {

            constructor: Collapse

            , dimension: function () {
                var hasWidth = this.$element.hasClass('width')
                return hasWidth ? 'width' : 'height'
            }

            , show: function () {
                var dimension
                    , scroll
                    , actives
                    , hasData

                if (this.transitioning || this.$element.hasClass('in')) return

                dimension = this.dimension()
                scroll = $.camelCase(['scroll', dimension].join('-'))
                actives = this.$parent && this.$parent.find('> .accordion-group > .in')

                if (actives && actives.length) {
                    hasData = actives.data('collapse')
                    if (hasData && hasData.transitioning) return
                    actives.collapse('hide')
                    hasData || actives.data('collapse', null)
                }

                this.$element[dimension](0)
                this.transition('addClass', $.Event('show'), 'shown')
                $.support.transition && this.$element[dimension](this.$element[0][scroll])
            }

            , hide: function () {
                var dimension
                if (this.transitioning || !this.$element.hasClass('in')) return
                dimension = this.dimension()
                this.reset(this.$element[dimension]())
                this.transition('removeClass', $.Event('hide'), 'hidden')
                this.$element[dimension](0)
            }

            , reset: function (size) {
                var dimension = this.dimension()

                this.$element
                    .removeClass('collapse')
                    [dimension](size || 'auto')
                    [0].offsetWidth

                this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

                return this
            }

            , transition: function (method, startEvent, completeEvent) {
                var that = this
                    , complete = function () {
                        if (startEvent.type == 'show') that.reset()
                        that.transitioning = 0
                        that.$element.trigger(completeEvent)
                    }

                this.$element.trigger(startEvent)

                if (startEvent.isDefaultPrevented()) return

                this.transitioning = 1

                this.$element[method]('in')

                $.support.transition && this.$element.hasClass('collapse') ?
                    this.$element.one($.support.transition.end, complete) :
                    complete()
            }

            , toggle: function () {
                this[this.$element.hasClass('in') ? 'hide' : 'show']()
            }

        }


        /* COLLAPSE PLUGIN DEFINITION
         * ========================== */

        var old = $.fn.collapse

        $.fn.collapse = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('collapse')
                    , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
                if (!data) $this.data('collapse', (data = new Collapse(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.collapse.defaults = {
            toggle: true
        }

        $.fn.collapse.Constructor = Collapse


        /* COLLAPSE NO CONFLICT
         * ==================== */

        $.fn.collapse.noConflict = function () {
            $.fn.collapse = old
            return this
        }


        /* COLLAPSE DATA-API
         * ================= */

        $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
            var $this = $(this), href
                , target = $this.attr('data-target')
                    || e.preventDefault()
                    || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
                , option = $(target).data('collapse') ? 'toggle' : $this.data()
            $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
            $(target).collapse(option)
        })

    }(window.jQuery);
    /* ==========================================================
     * bootstrap-carousel.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#carousel
     * ==========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================== */


    !function ($) {

        "use strict"; // jshint ;_;


        /* CAROUSEL CLASS DEFINITION
         * ========================= */

        var Carousel = function (element, options) {
            this.$element = $(element)
            this.$indicators = this.$element.find('.carousel-indicators')
            this.options = options
            this.options.pause == 'hover' && this.$element
                .on('mouseenter', $.proxy(this.pause, this))
                .on('mouseleave', $.proxy(this.cycle, this))
        }

        Carousel.prototype = {

            cycle: function (e) {
                if (!e) this.paused = false
                if (this.interval) clearInterval(this.interval);
                this.options.interval
                && !this.paused
                && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
                return this
            }

            , getActiveIndex: function () {
                this.$active = this.$element.find('.item.active')
                this.$items = this.$active.parent().children()
                return this.$items.index(this.$active)
            }

            , to: function (pos) {
                var activeIndex = this.getActiveIndex()
                    , that = this

                if (pos > (this.$items.length - 1) || pos < 0) return

                if (this.sliding) {
                    return this.$element.one('slid', function () {
                        that.to(pos)
                    })
                }

                if (activeIndex == pos) {
                    return this.pause().cycle()
                }

                return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
            }

            , pause: function (e) {
                if (!e) this.paused = true
                if (this.$element.find('.next, .prev').length && $.support.transition.end) {
                    this.$element.trigger($.support.transition.end)
                    this.cycle(true)
                }
                clearInterval(this.interval)
                this.interval = null
                return this
            }

            , next: function () {
                if (this.sliding) return
                return this.slide('next')
            }

            , prev: function () {
                if (this.sliding) return
                return this.slide('prev')
            }

            , slide: function (type, next) {
                var $active = this.$element.find('.item.active')
                    , $next = next || $active[type]()
                    , isCycling = this.interval
                    , direction = type == 'next' ? 'left' : 'right'
                    , fallback  = type == 'next' ? 'first' : 'last'
                    , that = this
                    , e

                this.sliding = true

                isCycling && this.pause()

                $next = $next.length ? $next : this.$element.find('.item')[fallback]()

                e = $.Event('slide', {
                    relatedTarget: $next[0]
                    , direction: direction
                })

                if ($next.hasClass('active')) return

                if (this.$indicators.length) {
                    this.$indicators.find('.active').removeClass('active')
                    this.$element.one('slid', function () {
                        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
                        $nextIndicator && $nextIndicator.addClass('active')
                    })
                }

                if ($.support.transition && this.$element.hasClass('slide')) {
                    this.$element.trigger(e)
                    if (e.isDefaultPrevented()) return
                    $next.addClass(type)
                    $next[0].offsetWidth // force reflow
                    $active.addClass(direction)
                    $next.addClass(direction)
                    this.$element.one($.support.transition.end, function () {
                        $next.removeClass([type, direction].join(' ')).addClass('active')
                        $active.removeClass(['active', direction].join(' '))
                        that.sliding = false
                        setTimeout(function () { that.$element.trigger('slid') }, 0)
                    })
                } else {
                    this.$element.trigger(e)
                    if (e.isDefaultPrevented()) return
                    $active.removeClass('active')
                    $next.addClass('active')
                    this.sliding = false
                    this.$element.trigger('slid')
                }

                isCycling && this.cycle()

                return this
            }

        }


        /* CAROUSEL PLUGIN DEFINITION
         * ========================== */

        var old = $.fn.carousel

        $.fn.carousel = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('carousel')
                    , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
                    , action = typeof option == 'string' ? option : options.slide
                if (!data) $this.data('carousel', (data = new Carousel(this, options)))
                if (typeof option == 'number') data.to(option)
                else if (action) data[action]()
                else if (options.interval) data.pause().cycle()
            })
        }

        $.fn.carousel.defaults = {
            interval: 5000
            , pause: 'hover'
        }

        $.fn.carousel.Constructor = Carousel


        /* CAROUSEL NO CONFLICT
         * ==================== */

        $.fn.carousel.noConflict = function () {
            $.fn.carousel = old
            return this
        }

        /* CAROUSEL DATA-API
         * ================= */

        $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
            var $this = $(this), href
                , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
                , options = $.extend({}, $target.data(), $this.data())
                , slideIndex

            $target.carousel(options)

            if (slideIndex = $this.attr('data-slide-to')) {
                $target.data('carousel').pause().to(slideIndex).cycle()
            }

            e.preventDefault()
        })

    }(window.jQuery);
    /* =============================================================
     * bootstrap-typeahead.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#typeahead
     * =============================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ============================================================ */


    !function($){

        "use strict"; // jshint ;_;


        /* TYPEAHEAD PUBLIC CLASS DEFINITION
         * ================================= */

        var Typeahead = function (element, options) {
            this.$element = $(element)
            this.options = $.extend({}, $.fn.typeahead.defaults, options)
            this.matcher = this.options.matcher || this.matcher
            this.sorter = this.options.sorter || this.sorter
            this.highlighter = this.options.highlighter || this.highlighter
            this.updater = this.options.updater || this.updater
            this.source = this.options.source
            this.$menu = $(this.options.menu)
            this.shown = false
            this.listen()
        }

        Typeahead.prototype = {

            constructor: Typeahead

            , select: function () {
                var val = this.$menu.find('.active').attr('data-value')
                this.$element
                    .val(this.updater(val))
                    .change()
                return this.hide()
            }

            , updater: function (item) {
                return item
            }

            , show: function () {
                var pos = $.extend({}, this.$element.position(), {
                    height: this.$element[0].offsetHeight
                })

                this.$menu
                    .insertAfter(this.$element)
                    .css({
                        top: pos.top + pos.height
                        , left: pos.left
                    })
                    .show()

                this.shown = true
                return this
            }

            , hide: function () {
                this.$menu.hide()
                this.shown = false
                return this
            }

            , lookup: function (event) {
                var items

                this.query = this.$element.val()

                if (!this.query || this.query.length < this.options.minLength) {
                    return this.shown ? this.hide() : this
                }

                items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

                return items ? this.process(items) : this
            }

            , process: function (items) {
                var that = this

                items = $.grep(items, function (item) {
                    return that.matcher(item)
                })

                items = this.sorter(items)

                if (!items.length) {
                    return this.shown ? this.hide() : this
                }

                return this.render(items.slice(0, this.options.items)).show()
            }

            , matcher: function (item) {
                return ~item.toLowerCase().indexOf(this.query.toLowerCase())
            }

            , sorter: function (items) {
                var beginswith = []
                    , caseSensitive = []
                    , caseInsensitive = []
                    , item

                while (item = items.shift()) {
                    if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
                    else if (~item.indexOf(this.query)) caseSensitive.push(item)
                    else caseInsensitive.push(item)
                }

                return beginswith.concat(caseSensitive, caseInsensitive)
            }

            , highlighter: function (item) {
                var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
                return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                    return '<strong>' + match + '</strong>'
                })
            }

            , render: function (items) {
                var that = this

                items = $(items).map(function (i, item) {
                    i = $(that.options.item).attr('data-value', item)
                    i.find('a').html(that.highlighter(item))
                    return i[0]
                })

                items.first().addClass('active')
                this.$menu.html(items)
                return this
            }

            , next: function (event) {
                var active = this.$menu.find('.active').removeClass('active')
                    , next = active.next()

                if (!next.length) {
                    next = $(this.$menu.find('li')[0])
                }

                next.addClass('active')
            }

            , prev: function (event) {
                var active = this.$menu.find('.active').removeClass('active')
                    , prev = active.prev()

                if (!prev.length) {
                    prev = this.$menu.find('li').last()
                }

                prev.addClass('active')
            }

            , listen: function () {
                this.$element
                    .on('focus',    $.proxy(this.focus, this))
                    .on('blur',     $.proxy(this.blur, this))
                    .on('keypress', $.proxy(this.keypress, this))
                    .on('keyup',    $.proxy(this.keyup, this))

                if (this.eventSupported('keydown')) {
                    this.$element.on('keydown', $.proxy(this.keydown, this))
                }

                this.$menu
                    .on('click', $.proxy(this.click, this))
                    .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
                    .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
            }

            , eventSupported: function(eventName) {
                var isSupported = eventName in this.$element
                if (!isSupported) {
                    this.$element.setAttribute(eventName, 'return;')
                    isSupported = typeof this.$element[eventName] === 'function'
                }
                return isSupported
            }

            , move: function (e) {
                if (!this.shown) return

                switch(e.keyCode) {
                    case 9: // tab
                    case 13: // enter
                    case 27: // escape
                        e.preventDefault()
                        break

                    case 38: // up arrow
                        e.preventDefault()
                        this.prev()
                        break

                    case 40: // down arrow
                        e.preventDefault()
                        this.next()
                        break
                }

                e.stopPropagation()
            }

            , keydown: function (e) {
                this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
                this.move(e)
            }

            , keypress: function (e) {
                if (this.suppressKeyPressRepeat) return
                this.move(e)
            }

            , keyup: function (e) {
                switch(e.keyCode) {
                    case 40: // down arrow
                    case 38: // up arrow
                    case 16: // shift
                    case 17: // ctrl
                    case 18: // alt
                        break

                    case 9: // tab
                    case 13: // enter
                        if (!this.shown) return
                        this.select()
                        break

                    case 27: // escape
                        if (!this.shown) return
                        this.hide()
                        break

                    default:
                        this.lookup()
                }

                e.stopPropagation()
                e.preventDefault()
            }

            , focus: function (e) {
                this.focused = true
            }

            , blur: function (e) {
                this.focused = false
                if (!this.mousedover && this.shown) this.hide()
            }

            , click: function (e) {
                e.stopPropagation()
                e.preventDefault()
                this.select()
                this.$element.focus()
            }

            , mouseenter: function (e) {
                this.mousedover = true
                this.$menu.find('.active').removeClass('active')
                $(e.currentTarget).addClass('active')
            }

            , mouseleave: function (e) {
                this.mousedover = false
                if (!this.focused && this.shown) this.hide()
            }

        }


        /* TYPEAHEAD PLUGIN DEFINITION
         * =========================== */

        var old = $.fn.typeahead

        $.fn.typeahead = function (option) {
            return this.each(function () {
                var $this = $(this)
                    , data = $this.data('typeahead')
                    , options = typeof option == 'object' && option
                if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.typeahead.defaults = {
            source: []
            , items: 8
            , menu: '<ul class="typeahead dropdown-menu"></ul>'
            , item: '<li><a href="#"></a></li>'
            , minLength: 1
        }

        $.fn.typeahead.Constructor = Typeahead


        /* TYPEAHEAD NO CONFLICT
         * =================== */

        $.fn.typeahead.noConflict = function () {
            $.fn.typeahead = old
            return this
        }


        /* TYPEAHEAD DATA-API
         * ================== */

        $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
            var $this = $(this)
            if ($this.data('typeahead')) return
            $this.typeahead($this.data())
        })

    }(window.jQuery);
    /* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

    window.onload = function() {
        function addIcon(el, entity) {
            var html = el.innerHTML;
            el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
        }
        var icons = {
                'icon-glass' : '&#xf000;',
                'icon-music' : '&#xf001;',
                'icon-search' : '&#xf002;',
                'icon-envelope' : '&#xf003;',
                'icon-heart' : '&#xf004;',
                'icon-star' : '&#xf005;',
                'icon-star-empty' : '&#xf006;',
                'icon-user' : '&#xf007;',
                'icon-film' : '&#xf008;',
                'icon-th-large' : '&#xf009;',
                'icon-th' : '&#xf00a;',
                'icon-th-list' : '&#xf00b;',
                'icon-ok' : '&#xf00c;',
                'icon-remove' : '&#xf00d;',
                'icon-zoom-in' : '&#xf00e;',
                'icon-zoom-out' : '&#xf010;',
                'icon-off' : '&#xf011;',
                'icon-signal' : '&#xf012;',
                'icon-cog' : '&#xf013;',
                'icon-trash' : '&#xf014;',
                'icon-home' : '&#xf015;',
                'icon-file' : '&#xf016;',
                'icon-time' : '&#xf017;',
                'icon-road' : '&#xf018;',
                'icon-download-alt' : '&#xf019;',
                'icon-download' : '&#xf01a;',
                'icon-upload' : '&#xf01b;',
                'icon-inbox' : '&#xf01c;',
                'icon-play-circle' : '&#xf01d;',
                'icon-repeat' : '&#xf01e;',
                'icon-refresh' : '&#xf021;',
                'icon-list-alt' : '&#xf022;',
                'icon-lock' : '&#xf023;',
                'icon-flag' : '&#xf024;',
                'icon-headphones' : '&#xf025;',
                'icon-volume-off' : '&#xf026;',
                'icon-volume-down' : '&#xf027;',
                'icon-volume-up' : '&#xf028;',
                'icon-qrcode' : '&#xf029;',
                'icon-barcode' : '&#xf02a;',
                'icon-tag' : '&#xf02b;',
                'icon-tags' : '&#xf02c;',
                'icon-book' : '&#xf02d;',
                'icon-bookmark' : '&#xf02e;',
                'icon-print' : '&#xf02f;',
                'icon-camera' : '&#xf030;',
                'icon-font' : '&#xf031;',
                'icon-bold' : '&#xf032;',
                'icon-italic' : '&#xf033;',
                'icon-text-height' : '&#xf034;',
                'icon-text-width' : '&#xf035;',
                'icon-align-left' : '&#xf036;',
                'icon-align-center' : '&#xf037;',
                'icon-align-right' : '&#xf038;',
                'icon-align-justify' : '&#xf039;',
                'icon-list' : '&#xf03a;',
                'icon-indent-left' : '&#xf03b;',
                'icon-indent-right' : '&#xf03c;',
                'icon-facetime-video' : '&#xf03d;',
                'icon-picture' : '&#xf03e;',
                'icon-pencil' : '&#xf040;',
                'icon-map-marker' : '&#xf041;',
                'icon-adjust' : '&#xf042;',
                'icon-tint' : '&#xf043;',
                'icon-edit' : '&#xf044;',
                'icon-share' : '&#xf045;',
                'icon-check' : '&#xf046;',
                'icon-move' : '&#xf047;',
                'icon-step-backward' : '&#xf048;',
                'icon-fast-backward' : '&#xf049;',
                'icon-backward' : '&#xf04a;',
                'icon-play' : '&#xf04b;',
                'icon-pause' : '&#xf04c;',
                'icon-stop' : '&#xf04d;',
                'icon-forward' : '&#xf04e;',
                'icon-fast-forward' : '&#xf050;',
                'icon-step-forward' : '&#xf051;',
                'icon-eject' : '&#xf052;',
                'icon-chevron-left' : '&#xf053;',
                'icon-chevron-right' : '&#xf054;',
                'icon-plus-sign' : '&#xf055;',
                'icon-minus-sign' : '&#xf056;',
                'icon-remove-sign' : '&#xf057;',
                'icon-ok-sign' : '&#xf058;',
                'icon-question-sign' : '&#xf059;',
                'icon-info-sign' : '&#xf05a;',
                'icon-screenshot' : '&#xf05b;',
                'icon-remove-circle' : '&#xf05c;',
                'icon-ok-circle' : '&#xf05d;',
                'icon-ban-circle' : '&#xf05e;',
                'icon-arrow-left' : '&#xf060;',
                'icon-arrow-right' : '&#xf061;',
                'icon-arrow-up' : '&#xf062;',
                'icon-arrow-down' : '&#xf063;',
                'icon-share-alt' : '&#xf064;',
                'icon-resize-full' : '&#xf065;',
                'icon-resize-small' : '&#xf066;',
                'icon-plus' : '&#xf067;',
                'icon-minus' : '&#xf068;',
                'icon-asterisk' : '&#xf069;',
                'icon-exclamation-sign' : '&#xf06a;',
                'icon-gift' : '&#xf06b;',
                'icon-leaf' : '&#xf06c;',
                'icon-fire' : '&#xf06d;',
                'icon-eye-open' : '&#xf06e;',
                'icon-eye-close' : '&#xf070;',
                'icon-warning-sign' : '&#xf071;',
                'icon-plane' : '&#xf072;',
                'icon-calendar' : '&#xf073;',
                'icon-random' : '&#xf074;',
                'icon-comment' : '&#xf075;',
                'icon-magnet' : '&#xf076;',
                'icon-chevron-up' : '&#xf077;',
                'icon-chevron-down' : '&#xf078;',
                'icon-retweet' : '&#xf079;',
                'icon-shopping-cart' : '&#xf07a;',
                'icon-folder-close' : '&#xf07b;',
                'icon-folder-open' : '&#xf07c;',
                'icon-resize-vertical' : '&#xf07d;',
                'icon-resize-horizontal' : '&#xf07e;',
                'icon-bar-chart' : '&#xf080;',
                'icon-twitter-sign' : '&#xf081;',
                'icon-facebook-sign' : '&#xf082;',
                'icon-camera-retro' : '&#xf083;',
                'icon-key' : '&#xf084;',
                'icon-cogs' : '&#xf085;',
                'icon-comments' : '&#xf086;',
                'icon-thumbs-up' : '&#xf087;',
                'icon-thumbs-down' : '&#xf088;',
                'icon-star-half' : '&#xf089;',
                'icon-heart-empty' : '&#xf08a;',
                'icon-signout' : '&#xf08b;',
                'icon-linkedin-sign' : '&#xf08c;',
                'icon-pushpin' : '&#xf08d;',
                'icon-external-link' : '&#xf08e;',
                'icon-signin' : '&#xf090;',
                'icon-trophy' : '&#xf091;',
                'icon-github-sign' : '&#xf092;',
                'icon-upload-alt' : '&#xf093;',
                'icon-lemon' : '&#xf094;',
                'icon-phone' : '&#xf095;',
                'icon-check-empty' : '&#xf096;',
                'icon-bookmark-empty' : '&#xf097;',
                'icon-phone-sign' : '&#xf098;',
                'icon-twitter' : '&#xf099;',
                'icon-facebook' : '&#xf09a;',
                'icon-github' : '&#xf09b;',
                'icon-unlock' : '&#xf09c;',
                'icon-credit' : '&#xf09d;',
                'icon-rss' : '&#xf09e;',
                'icon-hdd' : '&#xf0a0;',
                'icon-bullhorn' : '&#xf0a1;',
                'icon-bell' : '&#xf0a2;',
                'icon-certificate' : '&#xf0a3;',
                'icon-hand-right' : '&#xf0a4;',
                'icon-hand-left' : '&#xf0a5;',
                'icon-hand-up' : '&#xf0a6;',
                'icon-hand-down' : '&#xf0a7;',
                'icon-circle-arrow-left' : '&#xf0a8;',
                'icon-circle-arrow-right' : '&#xf0a9;',
                'icon-circle-arrow-up' : '&#xf0aa;',
                'icon-circle-arrow-down' : '&#xf0ab;',
                'icon-globe' : '&#xf0ac;',
                'icon-wrench' : '&#xf0ad;',
                'icon-tasks' : '&#xf0ae;',
                'icon-filter' : '&#xf0b0;',
                'icon-briefcase' : '&#xf0b1;',
                'icon-fullscreen' : '&#xf0b2;',
                'icon-group' : '&#xf0c0;',
                'icon-link' : '&#xf0c1;',
                'icon-cloud' : '&#xf0c2;',
                'icon-beaker' : '&#xf0c3;',
                'icon-cut' : '&#xf0c4;',
                'icon-copy' : '&#xf0c5;',
                'icon-paper-clip' : '&#xf0c6;',
                'icon-save' : '&#xf0c7;',
                'icon-sign-blank' : '&#xf0c8;',
                'icon-reorder' : '&#xf0c9;',
                'icon-list-ul' : '&#xf0ca;',
                'icon-list-ol' : '&#xf0cb;',
                'icon-strikethrough' : '&#xf0cc;',
                'icon-underline' : '&#xf0cd;',
                'icon-table' : '&#xf0ce;',
                'icon-magic' : '&#xf0d0;',
                'icon-truck' : '&#xf0d1;',
                'icon-pinterest' : '&#xf0d2;',
                'icon-pinterest-sign' : '&#xf0d3;',
                'icon-google-plus-sign' : '&#xf0d4;',
                'icon-google-plus' : '&#xf0d5;',
                'icon-money' : '&#xf0d6;',
                'icon-caret-down' : '&#xf0d7;',
                'icon-caret-up' : '&#xf0d8;',
                'icon-caret-left' : '&#xf0d9;',
                'icon-caret-right' : '&#xf0da;',
                'icon-columns' : '&#xf0db;',
                'icon-sort' : '&#xf0dc;',
                'icon-sort-down' : '&#xf0dd;',
                'icon-sort-up' : '&#xf0de;',
                'icon-envelope-alt' : '&#xf0e0;',
                'icon-linkedin' : '&#xf0e1;',
                'icon-undo' : '&#xf0e2;',
                'icon-legal' : '&#xf0e3;',
                'icon-dashboard' : '&#xf0e4;',
                'icon-comment-alt' : '&#xf0e5;',
                'icon-comments-alt' : '&#xf0e6;',
                'icon-bolt' : '&#xf0e7;',
                'icon-sitemap' : '&#xf0e8;',
                'icon-umbrella' : '&#xf0e9;',
                'icon-paste' : '&#xf0ea;',
                'icon-lightbulb' : '&#xf0eb;',
                'icon-exchange' : '&#xf0ec;',
                'icon-cloud-download' : '&#xf0ed;',
                'icon-cloud-upload' : '&#xf0ee;',
                'icon-user-md' : '&#xf0f0;',
                'icon-stethoscope' : '&#xf0f1;',
                'icon-suitcase' : '&#xf0f2;',
                'icon-bell-alt' : '&#xf0f3;',
                'icon-coffee' : '&#xf0f4;',
                'icon-food' : '&#xf0f5;',
                'icon-file-alt' : '&#xf0f6;',
                'icon-building' : '&#xf0f7;',
                'icon-hospital' : '&#xf0f8;',
                'icon-ambulance' : '&#xf0f9;',
                'icon-medkit' : '&#xf0fa;',
                'icon-fighter-jet' : '&#xf0fb;',
                'icon-beer' : '&#xf0fc;',
                'icon-h-sign' : '&#xf0fd;',
                'icon-plus-sign-2' : '&#xf0fe;',
                'icon-double-angle-left' : '&#xf100;',
                'icon-double-angle-right' : '&#xf101;',
                'icon-double-angle-up' : '&#xf102;',
                'icon-double-angle-down' : '&#xf103;',
                'icon-angle-left' : '&#xf104;',
                'icon-angle-right' : '&#xf105;',
                'icon-angle-up' : '&#xf106;',
                'icon-angle-down' : '&#xf107;',
                'icon-desktop' : '&#xf108;',
                'icon-laptop' : '&#xf109;',
                'icon-tablet' : '&#xf10a;',
                'icon-mobile' : '&#xf10b;',
                'icon-circle-blank' : '&#xf10c;',
                'icon-quote-left' : '&#xf10d;',
                'icon-quote-right' : '&#xf10e;',
                'icon-spinner' : '&#xf110;',
                'icon-circle' : '&#xf111;',
                'icon-reply' : '&#xf112;',
                'icon-github-alt' : '&#xf113;',
                'icon-folder-close-alt' : '&#xf114;',
                'icon-folder-open-alt' : '&#xf115;',
                'icon-number' : '&#xe000;',
                'icon-number-2' : '&#xe001;',
                'icon-number-3' : '&#xe002;',
                'icon-number-4' : '&#xe003;',
                'icon-number-5' : '&#xe004;',
                'icon-number-6' : '&#xe005;',
                'icon-number-7' : '&#xe006;',
                'icon-number-8' : '&#xe007;',
                'icon-number-9' : '&#xe008;',
                'icon-number-10' : '&#xe009;',
                'icon-number-11' : '&#xe00a;',
                'icon-number-12' : '&#xe00b;',
                'icon-number-13' : '&#xe00c;',
                'icon-number-14' : '&#xe00d;',
                'icon-number-15' : '&#xe00e;',
                'icon-number-16' : '&#xe00f;',
                'icon-number-17' : '&#xe010;',
                'icon-number-18' : '&#xe011;',
                'icon-number-19' : '&#xe012;',
                'icon-number-20' : '&#xe013;',
                'icon-quote' : '&#xe014;',
                'icon-quote-2' : '&#xe015;',
                'icon-tag-2' : '&#xe016;',
                'icon-tag-3' : '&#xe017;',
                'icon-link-2' : '&#xe018;',
                'icon-link-3' : '&#xe019;',
                'icon-cabinet' : '&#xe01a;',
                'icon-cabinet-2' : '&#xe01b;',
                'icon-calendar-2' : '&#xe01c;',
                'icon-calendar-3' : '&#xe01d;',
                'icon-calendar-4' : '&#xe01e;',
                'icon-file-2' : '&#xe01f;',
                'icon-file-3' : '&#xe020;',
                'icon-file-4' : '&#xe021;',
                'icon-files' : '&#xe022;',
                'icon-phone-2' : '&#xe023;',
                'icon-tablet-2' : '&#xe024;',
                'icon-window' : '&#xe025;',
                'icon-monitor' : '&#xe026;',
                'icon-ipod' : '&#xe027;',
                'icon-tv' : '&#xe028;',
                'icon-camera-2' : '&#xe029;',
                'icon-camera-3' : '&#xe02a;',
                'icon-camera-4' : '&#xe02b;',
                'icon-film-2' : '&#xe02c;',
                'icon-film-3' : '&#xe02d;',
                'icon-film-4' : '&#xe02e;',
                'icon-microphone' : '&#xe02f;',
                'icon-microphone-2' : '&#xe030;',
                'icon-microphone-3' : '&#xe031;',
                'icon-drink' : '&#xe032;',
                'icon-drink-2' : '&#xe033;',
                'icon-drink-3' : '&#xe034;',
                'icon-drink-4' : '&#xe035;',
                'icon-coffee-2' : '&#xe036;',
                'icon-mug' : '&#xe037;',
                'icon-ice-cream' : '&#xe038;',
                'icon-cake' : '&#xe039;',
                'icon-inbox-2' : '&#xe03a;',
                'icon-download-2' : '&#xe03b;',
                'icon-upload-2' : '&#xe03c;',
                'icon-inbox-3' : '&#xe03d;',
                'icon-checkmark' : '&#xe03e;',
                'icon-checkmark-2' : '&#xe03f;',
                'icon-cancel' : '&#xe040;',
                'icon-cancel-2' : '&#xe041;',
                'icon-plus-2' : '&#xe042;',
                'icon-plus-3' : '&#xe043;',
                'icon-minus-2' : '&#xe044;',
                'icon-minus-3' : '&#xe045;',
                'icon-notice' : '&#xe046;',
                'icon-notice-2' : '&#xe047;',
                'icon-cog-2' : '&#xe048;',
                'icon-cogs-2' : '&#xe049;',
                'icon-cog-3' : '&#xe04a;',
                'icon-warning' : '&#xe04b;',
                'icon-health' : '&#xe04c;',
                'icon-suitcase-2' : '&#xe04d;',
                'icon-suitcase-3' : '&#xe04e;',
                'icon-suitcase-4' : '&#xe04f;',
                'icon-picture-2' : '&#xe050;',
                'icon-pictures' : '&#xe051;',
                'icon-pictures-2' : '&#xe052;',
                'icon-android' : '&#xe053;',
                'icon-marvin' : '&#xe054;',
                'icon-pacman' : '&#xe055;',
                'icon-cassette' : '&#xe056;',
                'icon-watch' : '&#xe057;',
                'icon-chronometer' : '&#xe058;',
                'icon-watch-2' : '&#xe059;',
                'icon-alarm-clock' : '&#xe05a;',
                'icon-time-2' : '&#xe05b;',
                'icon-time-3' : '&#xe05c;',
                'icon-headphones-2' : '&#xe05d;',
                'icon-wallet' : '&#xe05e;',
                'icon-checkmark-3' : '&#xe05f;',
                'icon-cancel-3' : '&#xe060;',
                'icon-eye' : '&#xe061;',
                'icon-position' : '&#xe062;',
                'icon-site-map' : '&#xe063;',
                'icon-site-map-2' : '&#xe064;',
                'icon-cloud-2' : '&#xe065;',
                'icon-upload-3' : '&#xe066;',
                'icon-chart' : '&#xe067;',
                'icon-chart-2' : '&#xe068;',
                'icon-chart-3' : '&#xe069;',
                'icon-chart-4' : '&#xe06a;',
                'icon-chart-5' : '&#xe06b;',
                'icon-chart-6' : '&#xe06c;',
                'icon-location' : '&#xe06d;',
                'icon-download-3' : '&#xe06e;',
                'icon-basket' : '&#xe06f;',
                'icon-folder' : '&#xe070;',
                'icon-gamepad' : '&#xe071;',
                'icon-alarm' : '&#xe072;',
                'icon-alarm-cancel' : '&#xe073;',
                'icon-phone-3' : '&#xe074;',
                'icon-phone-4' : '&#xe075;',
                'icon-image' : '&#xe076;',
                'icon-open' : '&#xe077;',
                'icon-sale' : '&#xe078;',
                'icon-direction' : '&#xe079;',
                'icon-map' : '&#xe07a;',
                'icon-trashcan' : '&#xe07b;',
                'icon-vote' : '&#xe07c;',
                'icon-graduate' : '&#xe07d;',
                'icon-lab' : '&#xe07e;',
                'icon-tie' : '&#xe07f;',
                'icon-football' : '&#xe080;',
                'icon-eight-ball' : '&#xe081;',
                'icon-bowling' : '&#xe082;',
                'icon-bowling-pin' : '&#xe083;',
                'icon-baseball' : '&#xe084;',
                'icon-soccer' : '&#xe085;',
                'icon-3d-glasses' : '&#xe086;',
                'icon-microwave' : '&#xe087;',
                'icon-refrigerator' : '&#xe088;',
                'icon-oven' : '&#xe089;',
                'icon-washing-machine' : '&#xe08a;',
                'icon-mouse' : '&#xe08b;',
                'icon-smiley' : '&#xe08c;',
                'icon-sad' : '&#xe08d;',
                'icon-mute' : '&#xe08e;',
                'icon-hand' : '&#xe08f;',
                'icon-radio' : '&#xe090;',
                'icon-satellite' : '&#xe091;',
                'icon-medal' : '&#xe092;',
                'icon-medal-2' : '&#xe093;',
                'icon-switch' : '&#xe094;',
                'icon-key-2' : '&#xe095;',
                'icon-cord' : '&#xe096;',
                'icon-locked' : '&#xe097;',
                'icon-unlocked' : '&#xe098;',
                'icon-locked-2' : '&#xe099;',
                'icon-unlocked-2' : '&#xe09a;',
                'icon-magnifier' : '&#xe09b;',
                'icon-zoom-in-2' : '&#xe09c;',
                'icon-zoom-out-2' : '&#xe09d;',
                'icon-stack' : '&#xe09e;',
                'icon-stack-2' : '&#xe09f;',
                'icon-stack-3' : '&#xe0a0;',
                'icon-david-star' : '&#xe0a1;',
                'icon-cross' : '&#xe0a2;',
                'icon-moon-and-star' : '&#xe0a3;',
                'icon-transformers' : '&#xe0a4;',
                'icon-batman' : '&#xe0a5;',
                'icon-space-invaders' : '&#xe0a6;',
                'icon-skeletor' : '&#xe0a7;',
                'icon-lamp' : '&#xe0a8;',
                'icon-lamp-2' : '&#xe0a9;',
                'icon-umbrella-2' : '&#xe0aa;',
                'icon-street-light' : '&#xe0ab;',
                'icon-bomb' : '&#xe0ac;',
                'icon-archive' : '&#xe0ad;',
                'icon-battery' : '&#xe0ae;',
                'icon-battery-2' : '&#xe0af;',
                'icon-battery-3' : '&#xe0b0;',
                'icon-battery-4' : '&#xe0b1;',
                'icon-battery-5' : '&#xe0b2;',
                'icon-megaphone' : '&#xe0b3;',
                'icon-megaphone-2' : '&#xe0b4;',
                'icon-patch' : '&#xe0b5;',
                'icon-pil' : '&#xe0b6;',
                'icon-injection' : '&#xe0b7;',
                'icon-thermometer' : '&#xe0b8;',
                'icon-lamp-3' : '&#xe0b9;',
                'icon-lamp-4' : '&#xe0ba;',
                'icon-lamp-5' : '&#xe0bb;',
                'icon-cube' : '&#xe0bc;',
                'icon-box' : '&#xe0bd;',
                'icon-box-2' : '&#xe0be;',
                'icon-diamond' : '&#xe0bf;',
                'icon-bag' : '&#xe0c0;',
                'icon-money-bag' : '&#xe0c1;',
                'icon-grid' : '&#xe0c2;',
                'icon-grid-2' : '&#xe0c3;',
                'icon-list-2' : '&#xe0c4;',
                'icon-list-3' : '&#xe0c5;',
                'icon-ruler' : '&#xe0c6;',
                'icon-ruler-2' : '&#xe0c7;',
                'icon-layout' : '&#xe0c8;',
                'icon-layout-2' : '&#xe0c9;',
                'icon-layout-3' : '&#xe0ca;',
                'icon-layout-4' : '&#xe0cb;',
                'icon-layout-5' : '&#xe0cc;',
                'icon-layout-6' : '&#xe0cd;',
                'icon-layout-7' : '&#xe0ce;',
                'icon-layout-8' : '&#xe0cf;',
                'icon-layout-9' : '&#xe0d0;',
                'icon-layout-10' : '&#xe0d1;',
                'icon-layout-11' : '&#xe0d2;',
                'icon-layout-12' : '&#xe0d3;',
                'icon-layout-13' : '&#xe0d4;',
                'icon-layout-14' : '&#xe0d5;',
                'icon-tools' : '&#xe0d6;',
                'icon-screwdriver' : '&#xe0d7;',
                'icon-paint' : '&#xe0d8;',
                'icon-hammer' : '&#xe0d9;',
                'icon-brush' : '&#xe0da;',
                'icon-pen' : '&#xe0db;',
                'icon-chat' : '&#xe0dc;',
                'icon-comments-2' : '&#xe0dd;',
                'icon-chat-2' : '&#xe0de;',
                'icon-chat-3' : '&#xe0df;',
                'icon-volume' : '&#xe0e0;',
                'icon-volume-2' : '&#xe0e1;',
                'icon-volume-3' : '&#xe0e2;',
                'icon-equalizer' : '&#xe0e3;',
                'icon-resize' : '&#xe0e4;',
                'icon-resize-2' : '&#xe0e5;',
                'icon-stretch' : '&#xe0e6;',
                'icon-narrow' : '&#xe0e7;',
                'icon-resize-3' : '&#xe0e8;',
                'icon-download-4' : '&#xe0e9;',
                'icon-calculator' : '&#xe0ea;',
                'icon-library' : '&#xe0eb;',
                'icon-auction' : '&#xe0ec;',
                'icon-justice' : '&#xe0ed;',
                'icon-stats' : '&#xe0ee;',
                'icon-stats-2' : '&#xe0ef;',
                'icon-attachment' : '&#xe0f0;',
                'icon-hourglass' : '&#xe0f1;',
                'icon-abacus' : '&#xe0f2;',
                'icon-pencil-2' : '&#xe0f3;',
                'icon-pen-2' : '&#xe0f4;',
                'icon-pin' : '&#xe0f5;',
                'icon-pin-2' : '&#xe0f6;',
                'icon-discout' : '&#xe0f7;',
                'icon-edit-2' : '&#xe0f8;',
                'icon-scissors' : '&#xe0f9;',
                'icon-profile' : '&#xe0fa;',
                'icon-profile-2' : '&#xe0fb;',
                'icon-profile-3' : '&#xe0fc;',
                'icon-rotate' : '&#xe0fd;',
                'icon-rotate-2' : '&#xe0fe;',
                'icon-reply-2' : '&#xe0ff;',
                'icon-forward-2' : '&#xe100;',
                'icon-retweet-2' : '&#xe101;',
                'icon-shuffle' : '&#xe102;',
                'icon-loop' : '&#xe103;',
                'icon-crop' : '&#xe104;',
                'icon-square' : '&#xe105;',
                'icon-square-2' : '&#xe106;',
                'icon-circle-2' : '&#xe107;',
                'icon-dollar' : '&#xe108;',
                'icon-dollar-2' : '&#xe109;',
                'icon-coins' : '&#xe10a;',
                'icon-pig' : '&#xe10b;',
                'icon-bookmark-2' : '&#xe10c;',
                'icon-bookmark-3' : '&#xe10d;',
                'icon-address-book' : '&#xe10e;',
                'icon-address-book-2' : '&#xe10f;',
                'icon-safe' : '&#xe110;',
                'icon-envelope-2' : '&#xe111;',
                'icon-envelope-3' : '&#xe112;',
                'icon-radio-active' : '&#xe113;',
                'icon-music-2' : '&#xe114;',
                'icon-presentation' : '&#xe115;',
                'icon-male' : '&#xe116;',
                'icon-female' : '&#xe117;',
                'icon-aids' : '&#xe118;',
                'icon-heart-2' : '&#xe119;',
                'icon-info' : '&#xe11a;',
                'icon-info-2' : '&#xe11b;',
                'icon-piano' : '&#xe11c;',
                'icon-rain' : '&#xe11d;',
                'icon-snow' : '&#xe11e;',
                'icon-lightning' : '&#xe11f;',
                'icon-sun' : '&#xe120;',
                'icon-moon' : '&#xe121;',
                'icon-cloudy' : '&#xe122;',
                'icon-cloudy-2' : '&#xe123;',
                'icon-car' : '&#xe124;',
                'icon-bike' : '&#xe125;',
                'icon-truck-2' : '&#xe126;',
                'icon-bus' : '&#xe127;',
                'icon-bike-2' : '&#xe128;',
                'icon-plane-2' : '&#xe129;',
                'icon-paper-plane' : '&#xe12a;',
                'icon-rocket' : '&#xe12b;',
                'icon-book-2' : '&#xe12c;',
                'icon-book-3' : '&#xe12d;',
                'icon-barcode-2' : '&#xe12e;',
                'icon-barcode-3' : '&#xe12f;',
                'icon-expand' : '&#xe130;',
                'icon-collapse' : '&#xe131;',
                'icon-pop-out' : '&#xe132;',
                'icon-pop-in' : '&#xe133;',
                'icon-target' : '&#xe134;',
                'icon-badge' : '&#xe135;',
                'icon-badge-2' : '&#xe136;',
                'icon-ticket' : '&#xe137;',
                'icon-ticket-2' : '&#xe138;',
                'icon-ticket-3' : '&#xe139;',
                'icon-microphone-4' : '&#xe13a;',
                'icon-cone' : '&#xe13b;',
                'icon-blocked' : '&#xe13c;',
                'icon-stop-2' : '&#xe13d;',
                'icon-keyboard' : '&#xe13e;',
                'icon-keyboard-2' : '&#xe13f;',
                'icon-radio-2' : '&#xe140;',
                'icon-printer' : '&#xe141;',
                'icon-checked' : '&#xe142;',
                'icon-error' : '&#xe143;',
                'icon-add' : '&#xe144;',
                'icon-minus-4' : '&#xe145;',
                'icon-alert' : '&#xe146;',
                'icon-pictures-3' : '&#xe147;',
                'icon-atom' : '&#xe148;',
                'icon-eyedropper' : '&#xe149;',
                'icon-globe-2' : '&#xe14a;',
                'icon-globe-3' : '&#xe14b;',
                'icon-shipping' : '&#xe14c;',
                'icon-ying-yang' : '&#xe14d;',
                'icon-compass' : '&#xe14e;',
                'icon-zip' : '&#xe14f;',
                'icon-zip-2' : '&#xe150;',
                'icon-anchor' : '&#xe151;',
                'icon-locked-heart' : '&#xe152;',
                'icon-magnet-2' : '&#xe153;',
                'icon-navigation' : '&#xe154;',
                'icon-tags-2' : '&#xe155;',
                'icon-heart-3' : '&#xe156;',
                'icon-heart-4' : '&#xe157;',
                'icon-usb' : '&#xe158;',
                'icon-clipboard' : '&#xe159;',
                'icon-clipboard-2' : '&#xe15a;',
                'icon-clipboard-3' : '&#xe15b;',
                'icon-switch-2' : '&#xe15c;',
                'icon-ruler-3' : '&#xe15d;',
                'icon-heart-5' : '&#xe15e;',
                'icon-cloud-3' : '&#xe15f;',
                'icon-star-2' : '&#xe160;',
                'icon-tv-2' : '&#xe161;',
                'icon-sound' : '&#xe162;',
                'icon-video' : '&#xe163;',
                'icon-trash-2' : '&#xe164;',
                'icon-user-2' : '&#xe165;',
                'icon-key-3' : '&#xe166;',
                'icon-search-2' : '&#xe167;',
                'icon-settings' : '&#xe168;',
                'icon-camera-5' : '&#xe169;',
                'icon-tag-4' : '&#xe16a;',
                'icon-lock-2' : '&#xe16b;',
                'icon-bulb' : '&#xe16c;',
                'icon-pen-3' : '&#xe16d;',
                'icon-diamond-2' : '&#xe16e;',
                'icon-display' : '&#xe16f;',
                'icon-location-2' : '&#xe170;',
                'icon-eye-2' : '&#xe171;',
                'icon-bubble' : '&#xe172;',
                'icon-stack-4' : '&#xe173;',
                'icon-cup' : '&#xe174;',
                'icon-phone-5' : '&#xe175;',
                'icon-news' : '&#xe176;',
                'icon-mail' : '&#xe177;',
                'icon-like' : '&#xe178;',
                'icon-photo' : '&#xe179;',
                'icon-note' : '&#xe17a;',
                'icon-clock' : '&#xe17b;',
                'icon-paperplane' : '&#xe17c;',
                'icon-params' : '&#xe17d;',
                'icon-banknote' : '&#xe17e;',
                'icon-data' : '&#xe17f;',
                'icon-music-3' : '&#xe180;',
                'icon-megaphone-3' : '&#xe181;',
                'icon-study' : '&#xe182;',
                'icon-lab-2' : '&#xe183;',
                'icon-food-2' : '&#xe184;',
                'icon-t-shirt' : '&#xe185;',
                'icon-fire-2' : '&#xe186;',
                'icon-clip' : '&#xe187;',
                'icon-shop' : '&#xe188;',
                'icon-calendar-5' : '&#xe189;',
                'icon-wallet-2' : '&#xe18a;',
                'icon-vynil' : '&#xe18b;',
                'icon-truck-3' : '&#xe18c;',
                'icon-world' : '&#xe18d;',
                'icon-home-2' : '&#xe18e;',
                'icon-home-3' : '&#xe18f;',
                'icon-home-4' : '&#xe190;',
                'icon-office' : '&#xe191;',
                'icon-newspaper' : '&#xe192;',
                'icon-pencil-3' : '&#xe193;',
                'icon-pencil-4' : '&#xe194;',
                'icon-quill' : '&#xe195;',
                'icon-pen-4' : '&#xe196;',
                'icon-blog' : '&#xe197;',
                'icon-droplet' : '&#xe198;',
                'icon-paint-format' : '&#xe199;',
                'icon-image-2' : '&#xe19a;',
                'icon-image-3' : '&#xe19b;',
                'icon-images' : '&#xe19c;',
                'icon-camera-6' : '&#xe19d;',
                'icon-music-4' : '&#xe19e;',
                'icon-headphones-3' : '&#xe19f;',
                'icon-play-2' : '&#xe1a0;',
                'icon-film-5' : '&#xe1a1;',
                'icon-camera-7' : '&#xe1a2;',
                'icon-dice' : '&#xe1a3;',
                'icon-pacman-2' : '&#xe1a4;',
                'icon-spades' : '&#xe1a5;',
                'icon-clubs' : '&#xe1a6;',
                'icon-diamonds' : '&#xe1a7;',
                'icon-pawn' : '&#xe1a8;',
                'icon-bullhorn-2' : '&#xe1a9;',
                'icon-connection' : '&#xe1aa;',
                'icon-podcast' : '&#xe1ab;',
                'icon-feed' : '&#xe1ac;',
                'icon-book-4' : '&#xe1ad;',
                'icon-books' : '&#xe1ae;',
                'icon-library-2' : '&#xe1af;',
                'icon-file-5' : '&#xe1b0;',
                'icon-profile-4' : '&#xe1b1;',
                'icon-file-6' : '&#xe1b2;',
                'icon-file-7' : '&#xe1b3;',
                'icon-file-8' : '&#xe1b4;',
                'icon-copy-2' : '&#xe1b5;',
                'icon-copy-3' : '&#xe1b6;',
                'icon-copy-4' : '&#xe1b7;',
                'icon-paste-2' : '&#xe1b8;',
                'icon-paste-3' : '&#xe1b9;',
                'icon-paste-4' : '&#xe1ba;',
                'icon-stack-5' : '&#xe1bb;',
                'icon-folder-2' : '&#xe1bc;',
                'icon-folder-open-2' : '&#xe1bd;',
                'icon-tag-5' : '&#xe1be;',
                'icon-tags-3' : '&#xe1bf;',
                'icon-barcode-4' : '&#xe1c0;',
                'icon-qrcode-2' : '&#xe1c1;',
                'icon-ticket-4' : '&#xe1c2;',
                'icon-cart' : '&#xe1c3;',
                'icon-cart-2' : '&#xe1c4;',
                'icon-cart-3' : '&#xe1c5;',
                'icon-coin' : '&#xe1c6;',
                'icon-credit-2' : '&#xe1c7;',
                'icon-calculate' : '&#xe1c8;',
                'icon-support' : '&#xe1c9;',
                'icon-phone-6' : '&#xe1ca;',
                'icon-phone-hang-up' : '&#xe1cb;',
                'icon-address-book-3' : '&#xe1cc;',
                'icon-notebook' : '&#xe1cd;',
                'icon-envelop' : '&#xe1ce;',
                'icon-pushpin-2' : '&#xe1cf;',
                'icon-location-3' : '&#xe1d0;',
                'icon-location-4' : '&#xe1d1;',
                'icon-compass-2' : '&#xe1d2;',
                'icon-map-2' : '&#xe1d3;',
                'icon-map-3' : '&#xe1d4;',
                'icon-history' : '&#xe1d5;',
                'icon-clock-2' : '&#xe1d6;',
                'icon-clock-3' : '&#xe1d7;',
                'icon-alarm-2' : '&#xe1d8;',
                'icon-alarm-3' : '&#xe1d9;',
                'icon-bell-2' : '&#xe1da;',
                'icon-stopwatch' : '&#xe1db;',
                'icon-calendar-6' : '&#xe1dc;',
                'icon-calendar-7' : '&#xe1dd;',
                'icon-print-2' : '&#xe1de;',
                'icon-keyboard-3' : '&#xe1df;',
                'icon-screen' : '&#xe1e0;',
                'icon-laptop-2' : '&#xe1e1;',
                'icon-mobile-2' : '&#xe1e2;',
                'icon-mobile-3' : '&#xe1e3;',
                'icon-tablet-3' : '&#xe1e4;',
                'icon-tv-3' : '&#xe1e5;',
                'icon-cabinet-3' : '&#xe1e6;',
                'icon-drawer' : '&#xe1e7;',
                'icon-drawer-2' : '&#xe1e8;',
                'icon-drawer-3' : '&#xe1e9;',
                'icon-box-add' : '&#xe1ea;',
                'icon-box-remove' : '&#xe1eb;',
                'icon-download-5' : '&#xe1ec;',
                'icon-upload-4' : '&#xe1ed;',
                'icon-disk' : '&#xe1ee;',
                'icon-storage' : '&#xe1ef;',
                'icon-undo-2' : '&#xe1f0;',
                'icon-redo' : '&#xe1f1;',
                'icon-flip' : '&#xe1f2;',
                'icon-flip-2' : '&#xe1f3;',
                'icon-undo-3' : '&#xe1f4;',
                'icon-redo-2' : '&#xe1f5;',
                'icon-forward-3' : '&#xe1f6;',
                'icon-reply-3' : '&#xe1f7;',
                'icon-bubble-2' : '&#xe1f8;',
                'icon-bubbles' : '&#xe1f9;',
                'icon-bubbles-2' : '&#xe1fa;',
                'icon-bubble-3' : '&#xe1fb;',
                'icon-bubbles-3' : '&#xe1fc;',
                'icon-bubbles-4' : '&#xe1fd;',
                'icon-user-3' : '&#xe1fe;',
                'icon-users' : '&#xe1ff;',
                'icon-user-4' : '&#xe200;',
                'icon-users-2' : '&#xe201;',
                'icon-user-5' : '&#xe202;',
                'icon-user-6' : '&#xe203;',
                'icon-quotes-left' : '&#xe204;',
                'icon-busy' : '&#xe205;',
                'icon-spinner-2' : '&#xe206;',
                'icon-spinner-3' : '&#xe207;',
                'icon-spinner-4' : '&#xe208;',
                'icon-spinner-5' : '&#xe209;',
                'icon-spinner-6' : '&#xe20a;',
                'icon-spinner-7' : '&#xe20b;',
                'icon-binoculars' : '&#xe20c;',
                'icon-search-3' : '&#xe20d;',
                'icon-zoom-in-3' : '&#xe20e;',
                'icon-zoom-out-3' : '&#xe20f;',
                'icon-expand-2' : '&#xe210;',
                'icon-contract' : '&#xe211;',
                'icon-expand-3' : '&#xe212;',
                'icon-contract-2' : '&#xe213;',
                'icon-key-4' : '&#xe214;',
                'icon-key-5' : '&#xe215;',
                'icon-lock-3' : '&#xe216;',
                'icon-lock-4' : '&#xe217;',
                'icon-unlocked-3' : '&#xe218;',
                'icon-wrench-2' : '&#xe219;',
                'icon-settings-2' : '&#xe21a;',
                'icon-equalizer-2' : '&#xe21b;',
                'icon-cog-4' : '&#xe21c;',
                'icon-cogs-3' : '&#xe21d;',
                'icon-cog-5' : '&#xe21e;',
                'icon-hammer-2' : '&#xe21f;',
                'icon-wand' : '&#xe220;',
                'icon-aid' : '&#xe221;',
                'icon-bug' : '&#xe222;',
                'icon-pie' : '&#xe223;',
                'icon-stats-3' : '&#xe224;',
                'icon-bars' : '&#xe225;',
                'icon-bars-2' : '&#xe226;',
                'icon-gift-2' : '&#xe227;',
                'icon-trophy-2' : '&#xe228;',
                'icon-glass-2' : '&#xe229;',
                'icon-mug-2' : '&#xe22a;',
                'icon-food-3' : '&#xe22b;',
                'icon-leaf-2' : '&#xe22c;',
                'icon-rocket-2' : '&#xe22d;',
                'icon-meter' : '&#xe22e;',
                'icon-meter2' : '&#xe22f;',
                'icon-dashboard-2' : '&#xe230;',
                'icon-hammer-3' : '&#xe231;',
                'icon-fire-3' : '&#xe232;',
                'icon-lab-3' : '&#xe233;',
                'icon-magnet-3' : '&#xe234;',
                'icon-remove-2' : '&#xe235;',
                'icon-remove-3' : '&#xe236;',
                'icon-briefcase-2' : '&#xe237;',
                'icon-airplane' : '&#xe238;',
                'icon-truck-4' : '&#xe239;',
                'icon-road-2' : '&#xe23a;',
                'icon-accessibility' : '&#xe23b;',
                'icon-target-2' : '&#xe23c;',
                'icon-shield' : '&#xe23d;',
                'icon-lightning-2' : '&#xe23e;',
                'icon-switch-3' : '&#xe23f;',
                'icon-power-cord' : '&#xe240;',
                'icon-signup' : '&#xe241;',
                'icon-list-4' : '&#xe242;',
                'icon-list-5' : '&#xe243;',
                'icon-numbered-list' : '&#xe244;',
                'icon-menu' : '&#xe245;',
                'icon-menu-2' : '&#xe246;',
                'icon-tree' : '&#xe247;',
                'icon-cloud-4' : '&#xe248;',
                'icon-cloud-download-2' : '&#xe249;',
                'icon-cloud-upload-2' : '&#xe24a;',
                'icon-download-6' : '&#xe24b;',
                'icon-upload-5' : '&#xe24c;',
                'icon-download-7' : '&#xe24d;',
                'icon-upload-6' : '&#xe24e;',
                'icon-globe-4' : '&#xe24f;',
                'icon-earth' : '&#xe250;',
                'icon-link-4' : '&#xe251;',
                'icon-flag-2' : '&#xe252;',
                'icon-attachment-2' : '&#xe253;',
                'icon-eye-3' : '&#xe254;',
                'icon-eye-blocked' : '&#xe255;',
                'icon-eye-4' : '&#xe256;',
                'icon-bookmark-4' : '&#xe257;',
                'icon-bookmarks' : '&#xe258;',
                'icon-brightness-medium' : '&#xe259;',
                'icon-brightness-contrast' : '&#xe25a;',
                'icon-contrast' : '&#xe25b;',
                'icon-star-3' : '&#xe25c;',
                'icon-star-4' : '&#xe25d;',
                'icon-star-5' : '&#xe25e;',
                'icon-heart-6' : '&#xe25f;',
                'icon-heart-7' : '&#xe260;',
                'icon-heart-broken' : '&#xe261;',
                'icon-thumbs-up-2' : '&#xe262;',
                'icon-thumbs-up-3' : '&#xe263;',
                'icon-happy' : '&#xe264;',
                'icon-happy-2' : '&#xe265;',
                'icon-smiley-2' : '&#xe266;',
                'icon-smiley-3' : '&#xe267;',
                'icon-tongue' : '&#xe268;',
                'icon-tongue-2' : '&#xe269;',
                'icon-sad-2' : '&#xe26a;',
                'icon-sad-3' : '&#xe26b;',
                'icon-wink' : '&#xe26c;',
                'icon-wink-2' : '&#xe26d;',
                'icon-grin' : '&#xe26e;',
                'icon-grin-2' : '&#xe26f;',
                'icon-cool' : '&#xe270;',
                'icon-cool-2' : '&#xe271;',
                'icon-angry' : '&#xe272;',
                'icon-angry-2' : '&#xe273;',
                'icon-evil' : '&#xe274;',
                'icon-evil-2' : '&#xe275;',
                'icon-shocked' : '&#xe276;',
                'icon-shocked-2' : '&#xe277;',
                'icon-confused' : '&#xe278;',
                'icon-confused-2' : '&#xe279;',
                'icon-neutral' : '&#xe27a;',
                'icon-neutral-2' : '&#xe27b;',
                'icon-wondering' : '&#xe27c;',
                'icon-wondering-2' : '&#xe27d;',
                'icon-point-up' : '&#xe27e;',
                'icon-point-right' : '&#xe27f;',
                'icon-point-down' : '&#xe280;',
                'icon-point-left' : '&#xe281;',
                'icon-warning-2' : '&#xe282;',
                'icon-notification' : '&#xe283;',
                'icon-question' : '&#xe284;',
                'icon-info-3' : '&#xe285;',
                'icon-info-4' : '&#xe286;',
                'icon-blocked-2' : '&#xe287;',
                'icon-cancel-circle' : '&#xe288;',
                'icon-checkmark-circle' : '&#xe289;',
                'icon-spam' : '&#xe28a;',
                'icon-close' : '&#xe28b;',
                'icon-checkmark-4' : '&#xe28c;',
                'icon-checkmark-5' : '&#xe28d;',
                'icon-spell-check' : '&#xe28e;',
                'icon-minus-5' : '&#xe28f;',
                'icon-plus-4' : '&#xe290;',
                'icon-enter' : '&#xe291;',
                'icon-exit' : '&#xe292;',
                'icon-play-3' : '&#xe293;',
                'icon-pause-2' : '&#xe294;',
                'icon-stop-3' : '&#xe295;',
                'icon-backward-2' : '&#xe296;',
                'icon-forward-4' : '&#xe297;',
                'icon-play-4' : '&#xe298;',
                'icon-pause-3' : '&#xe299;',
                'icon-stop-4' : '&#xe29a;',
                'icon-backward-3' : '&#xe29b;',
                'icon-forward-5' : '&#xe29c;',
                'icon-first' : '&#xe29d;',
                'icon-last' : '&#xe29e;',
                'icon-previous' : '&#xe29f;',
                'icon-next' : '&#xe2a0;',
                'icon-eject-2' : '&#xe2a1;',
                'icon-volume-high' : '&#xe2a2;',
                'icon-volume-medium' : '&#xe2a3;',
                'icon-volume-low' : '&#xe2a4;',
                'icon-volume-mute' : '&#xe2a5;',
                'icon-volume-mute-2' : '&#xe2a6;',
                'icon-volume-increase' : '&#xe2a7;',
                'icon-volume-decrease' : '&#xe2a8;',
                'icon-loop-2' : '&#xe2a9;',
                'icon-loop-3' : '&#xe2aa;',
                'icon-loop-4' : '&#xe2ab;',
                'icon-shuffle-2' : '&#xe2ac;',
                'icon-arrow-up-left' : '&#xe2ad;',
                'icon-arrow-up-2' : '&#xe2ae;',
                'icon-arrow-up-right' : '&#xe2af;',
                'icon-arrow-right-2' : '&#xe2b0;',
                'icon-arrow-down-right' : '&#xe2b1;',
                'icon-arrow-down-2' : '&#xe2b2;',
                'icon-arrow-down-left' : '&#xe2b3;',
                'icon-arrow-left-2' : '&#xe2b4;',
                'icon-arrow-up-left-2' : '&#xe2b5;',
                'icon-arrow-up-3' : '&#xe2b6;',
                'icon-arrow-up-right-2' : '&#xe2b7;',
                'icon-arrow-right-3' : '&#xe2b8;',
                'icon-arrow-down-right-2' : '&#xe2b9;',
                'icon-arrow-down-3' : '&#xe2ba;',
                'icon-arrow-down-left-2' : '&#xe2bb;',
                'icon-arrow-left-3' : '&#xe2bc;',
                'icon-arrow-up-left-3' : '&#xe2bd;',
                'icon-arrow-up-4' : '&#xe2be;',
                'icon-arrow-up-right-3' : '&#xe2bf;',
                'icon-arrow-right-4' : '&#xe2c0;',
                'icon-arrow-down-right-3' : '&#xe2c1;',
                'icon-arrow-down-4' : '&#xe2c2;',
                'icon-arrow-down-left-3' : '&#xe2c3;',
                'icon-arrow-left-4' : '&#xe2c4;',
                'icon-tab' : '&#xe2c5;',
                'icon-checkbox-checked' : '&#xe2c6;',
                'icon-checkbox-unchecked' : '&#xe2c7;',
                'icon-checkbox-partial' : '&#xe2c8;',
                'icon-radio-checked' : '&#xe2c9;',
                'icon-radio-unchecked' : '&#xe2ca;',
                'icon-crop-2' : '&#xe2cb;',
                'icon-scissors-2' : '&#xe2cc;',
                'icon-filter-2' : '&#xe2cd;',
                'icon-filter-3' : '&#xe2ce;',
                'icon-font-2' : '&#xe2cf;',
                'icon-text-height-2' : '&#xe2d0;',
                'icon-text-width-2' : '&#xe2d1;',
                'icon-bold-2' : '&#xe2d2;',
                'icon-underline-2' : '&#xe2d3;',
                'icon-italic-2' : '&#xe2d4;',
                'icon-strikethrough-2' : '&#xe2d5;',
                'icon-omega' : '&#xe2d6;',
                'icon-sigma' : '&#xe2d7;',
                'icon-table-2' : '&#xe2d8;',
                'icon-table-3' : '&#xe2d9;',
                'icon-insert-template' : '&#xe2da;',
                'icon-pilcrow' : '&#xe2db;',
                'icon-left-to-right' : '&#xe2dc;',
                'icon-right-to-left' : '&#xe2dd;',
                'icon-paragraph-left' : '&#xe2de;',
                'icon-paragraph-center' : '&#xe2df;',
                'icon-paragraph-right' : '&#xe2e0;',
                'icon-paragraph-justify' : '&#xe2e1;',
                'icon-paragraph-left-2' : '&#xe2e2;',
                'icon-paragraph-center-2' : '&#xe2e3;',
                'icon-paragraph-right-2' : '&#xe2e4;',
                'icon-paragraph-justify-2' : '&#xe2e5;',
                'icon-indent-increase' : '&#xe2e6;',
                'icon-indent-decrease' : '&#xe2e7;',
                'icon-new-tab' : '&#xe2e8;',
                'icon-embed' : '&#xe2e9;',
                'icon-code' : '&#xe2ea;',
                'icon-console' : '&#xe2eb;',
                'icon-share-2' : '&#xe2ec;',
                'icon-mail-2' : '&#xe2ed;',
                'icon-mail-3' : '&#xe2ee;',
                'icon-mail-4' : '&#xe2ef;',
                'icon-mail-5' : '&#xe2f0;',
                'icon-google' : '&#xe2f1;',
                'icon-google-plus-2' : '&#xe2f2;',
                'icon-google-plus-3' : '&#xe2f3;',
                'icon-google-plus-4' : '&#xe2f4;',
                'icon-google-plus-5' : '&#xe2f5;',
                'icon-google-drive' : '&#xe2f6;',
                'icon-facebook-2' : '&#xe2f7;',
                'icon-facebook-3' : '&#xe2f8;',
                'icon-facebook-4' : '&#xe2f9;',
                'icon-instagram' : '&#xe2fa;',
                'icon-twitter-2' : '&#xe2fb;',
                'icon-twitter-3' : '&#xe2fc;',
                'icon-twitter-4' : '&#xe2fd;',
                'icon-feed-2' : '&#xe2fe;',
                'icon-feed-3' : '&#xe2ff;',
                'icon-feed-4' : '&#xe300;',
                'icon-youtube' : '&#xe301;',
                'icon-youtube-2' : '&#xe302;',
                'icon-vimeo' : '&#xe303;',
                'icon-vimeo2' : '&#xe304;',
                'icon-vimeo-2' : '&#xe305;',
                'icon-lanyrd' : '&#xe306;',
                'icon-flickr' : '&#xe307;',
                'icon-flickr-2' : '&#xe308;',
                'icon-flickr-3' : '&#xe309;',
                'icon-flickr-4' : '&#xe30a;',
                'icon-picassa' : '&#xe30b;',
                'icon-picassa-2' : '&#xe30c;',
                'icon-dribbble' : '&#xe30d;',
                'icon-dribbble-2' : '&#xe30e;',
                'icon-dribbble-3' : '&#xe30f;',
                'icon-forrst' : '&#xe310;',
                'icon-forrst-2' : '&#xe311;',
                'icon-deviantart' : '&#xe312;',
                'icon-deviantart-2' : '&#xe313;',
                'icon-steam' : '&#xe314;',
                'icon-steam-2' : '&#xe315;',
                'icon-github-2' : '&#xe316;',
                'icon-github-3' : '&#xe317;',
                'icon-github-4' : '&#xe318;',
                'icon-github-5' : '&#xe319;',
                'icon-github-6' : '&#xe31a;',
                'icon-wordpress' : '&#xe31b;',
                'icon-wordpress-2' : '&#xe31c;',
                'icon-joomla' : '&#xe31d;',
                'icon-blogger' : '&#xe31e;',
                'icon-blogger-2' : '&#xe31f;',
                'icon-tumblr' : '&#xe320;',
                'icon-tumblr-2' : '&#xe321;',
                'icon-yahoo' : '&#xe322;',
                'icon-tux' : '&#xe323;',
                'icon-apple' : '&#xe324;',
                'icon-finder' : '&#xe325;',
                'icon-android-2' : '&#xe326;',
                'icon-windows' : '&#xe327;',
                'icon-windows8' : '&#xe328;',
                'icon-soundcloud' : '&#xe329;',
                'icon-soundcloud-2' : '&#xe32a;',
                'icon-skype' : '&#xe32b;',
                'icon-reddit' : '&#xe32c;',
                'icon-linkedin-2' : '&#xe32d;',
                'icon-lastfm' : '&#xe32e;',
                'icon-lastfm-2' : '&#xe32f;',
                'icon-delicious' : '&#xe330;',
                'icon-stumbleupon' : '&#xe331;',
                'icon-stumbleupon-2' : '&#xe332;',
                'icon-stackoverflow' : '&#xe333;',
                'icon-pinterest-2' : '&#xe334;',
                'icon-pinterest-3' : '&#xe335;',
                'icon-xing' : '&#xe336;',
                'icon-xing-2' : '&#xe337;',
                'icon-flattr' : '&#xe338;',
                'icon-foursquare' : '&#xe339;',
                'icon-foursquare-2' : '&#xe33a;',
                'icon-paypal' : '&#xe33b;',
                'icon-paypal-2' : '&#xe33c;',
                'icon-paypal-3' : '&#xe33d;',
                'icon-yelp' : '&#xe33e;',
                'icon-libreoffice' : '&#xe33f;',
                'icon-file-pdf' : '&#xe340;',
                'icon-file-openoffice' : '&#xe341;',
                'icon-file-word' : '&#xe342;',
                'icon-file-excel' : '&#xe343;',
                'icon-file-zip' : '&#xe344;',
                'icon-file-powerpoint' : '&#xe345;',
                'icon-file-xml' : '&#xe346;',
                'icon-file-css' : '&#xe347;',
                'icon-html5' : '&#xe348;',
                'icon-html5-2' : '&#xe349;',
                'icon-css3' : '&#xe34a;',
                'icon-chrome' : '&#xe34b;',
                'icon-firefox' : '&#xe34c;',
                'icon-IE' : '&#xe34d;',
                'icon-opera' : '&#xe34e;',
                'icon-safari' : '&#xe34f;',
                'icon-IcoMoon' : '&#xe350;'
            },
            els = document.getElementsByTagName('*'),
            i, attr, html, c, el;
        for (i = 0; ; i += 1) {
            el = els[i];
            if(!el) {
                break;
            }
            attr = el.getAttribute('data-icon');
            if (attr) {
                addIcon(el, attr);
            }
            c = el.className;
            c = c.match(/icon-[^\s'"]+/);
            if (c && icons[c[0]]) {
                addIcon(el, icons[c[0]]);
            }
        }
    };

    /**
     * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
     * Dual licensed under MIT and GPL.
     * @author Ariel Flesler
     * @version 1.4.3
     */
    (function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(!e)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

    /*
     * jQuery One Page Nav Plugin
     * http://github.com/davist11/jQuery-One-Page-Nav
     *
     * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
     * Dual licensed under the MIT and GPL licenses.
     * Uses the same license as jQuery, see:
     * http://jquery.org/license
     *
     * @version 2.2.0
     *
     * Example usage:
     * $('#nav').onePageNav({
     *   currentClass: 'current',
     *   changeHash: false,
     *   scrollSpeed: 750
     * });
     */

    (function($, window, document, undefined){

        // our plugin constructor
        var OnePageNav = function(elem, options){
            this.elem = elem;
            this.$elem = $(elem);
            this.options = options;
            this.metadata = this.$elem.data('plugin-options');
            this.$nav = this.$elem.find('a');
            this.$win = $(window);
            this.sections = {};
            this.didScroll = false;
            this.$doc = $(document);
            this.docHeight = this.$doc.height();
        };

        // the plugin prototype
        OnePageNav.prototype = {
            defaults: {
                currentClass: 'current',
                changeHash: false,
                easing: 'swing',
                filter: '',
                scrollSpeed: 750,
                scrollOffset: 0,
                scrollThreshold: 0.5,
                begin: false,
                end: false,
                scrollChange: false
            },

            init: function() {
                var self = this;

                // Introduce defaults that can be extended either
                // globally or using an object literal.
                self.config = $.extend({}, self.defaults, self.options, self.metadata);

                //Filter any links out of the nav
                if(self.config.filter !== '') {
                    self.$nav = self.$nav.filter(self.config.filter);
                }

                //Handle clicks on the nav
                self.$nav.on('click.onePageNav', $.proxy(self.handleClick, self));

                //Get the section positions
                self.getPositions();

                //Handle scroll changes
                self.bindInterval();

                //Update the positions on resize too
                self.$win.on('resize.onePageNav', $.proxy(self.getPositions, self));

                return this;
            },

            adjustNav: function(self, $parent) {
                self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
                $parent.addClass(self.config.currentClass);
            },

            bindInterval: function() {
                var self = this;
                var docHeight;

                self.$win.on('scroll.onePageNav', function() {
                    self.didScroll = true;
                });

                self.t = setInterval(function() {
                    docHeight = self.$doc.height();

                    //If it was scrolled
                    if(self.didScroll) {
                        self.didScroll = false;
                        self.scrollChange();
                    }

                    //If the document height changes
                    if(docHeight !== self.docHeight) {
                        self.docHeight = docHeight;
                        self.getPositions();
                    }
                }, 250);
            },

            getHash: function($link) {
                return $link.attr('href').split('#')[1];
            },

            getPositions: function() {
                var self = this;
                var linkHref;
                var topPos;
                var $target;

                self.$nav.each(function() {
                    linkHref = self.getHash($(this));
                    $target = $('#' + linkHref);

                    if($target.length) {
                        topPos = $target.offset().top;
                        self.sections[linkHref] = Math.round(topPos) - self.config.scrollOffset;
                    }
                });
            },

            getSection: function(windowPos) {
                var returnValue = null;
                var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

                for(var section in this.sections) {
                    if((this.sections[section] - windowHeight) < windowPos) {
                        returnValue = section;
                    }
                }

                return returnValue;
            },

            handleClick: function(e) {
                var self = this;
                var $link = $(e.currentTarget);
                var $parent = $link.parent();
                var newLoc = '#' + self.getHash($link);

                if(!$parent.hasClass(self.config.currentClass)) {
                    //Start callback
                    if(self.config.begin) {
                        self.config.begin();
                    }

                    //Change the highlighted nav item
                    self.adjustNav(self, $parent);

                    //Removing the auto-adjust on scroll
                    self.unbindInterval();

                    //Scroll to the correct position
                    $.scrollTo(newLoc, self.config.scrollSpeed, {
                        axis: 'y',
                        easing: self.config.easing,
                        offset: {
                            top: -self.config.scrollOffset
                        },
                        onAfter: function() {
                            //Do we need to change the hash?
                            if(self.config.changeHash) {
                                window.location.hash = newLoc;
                            }

                            //Add the auto-adjust on scroll back in
                            self.bindInterval();

                            //End callback
                            if(self.config.end) {
                                self.config.end();
                            }
                        }
                    });
                }

                e.preventDefault();
            },

            scrollChange: function() {
                var windowTop = this.$win.scrollTop();
                var position = this.getSection(windowTop);
                var $parent;

                //If the position is set
                if(position !== null) {
                    $parent = this.$elem.find('a[href$="#' + position + '"]').parent();

                    //If it's not already the current section
                    if(!$parent.hasClass(this.config.currentClass)) {
                        //Change the highlighted nav item
                        this.adjustNav(this, $parent);

                        //If there is a scrollChange callback
                        if(this.config.scrollChange) {
                            this.config.scrollChange($parent);
                        }
                    }
                }
            },

            unbindInterval: function() {
                clearInterval(this.t);
                this.$win.unbind('scroll.onePageNav');
            }
        };

        OnePageNav.defaults = OnePageNav.prototype.defaults;

        $.fn.onePageNav = function(options) {
            return this.each(function() {
                new OnePageNav(this, options).init();
            });
        };

    })( jQuery, window , document );
    (function(e){var t={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:'<span aria-hidden="true" class="icon-angle-right"></span>',prevText:'<span aria-hidden="true" class="icon-angle-left"></span>',nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};e.fn.bxSlider=function(s){if(0==this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(s)}),this;var o={},r=this;t.el=this;var a=e(window).width(),l=e(window).height(),d=function(){o.settings=e.extend({},n,s),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return o.cssPrefix=t[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),c()},c=function(){if(r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=e('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?215*o.children.length+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),v(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:u()}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.width(p()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=e('<div class="bx-controls" />'),o.settings.captions&&E(),o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var t="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,t).clone().addClass("bx-clone"),n=o.children.slice(-t).clone().addClass("bx-clone");r.append(i).prepend(n)}o.active.last=o.settings.startSlide==f()-1,o.settings.video&&r.fitVids();var s=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(s=r.children()),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&w(),o.settings.controls&&T(),o.settings.auto&&o.settings.autoControls&&C(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),s.imagesLoaded(g)},g=function(){o.loader.remove(),m(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(h()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,e(window).bind("resize",Y),o.settings.auto&&o.settings.autoStart&&L(),o.settings.ticker&&W(),o.settings.pager&&M(o.settings.startSlide),o.settings.controls&&D(),o.settings.touchEnabled&&!o.settings.ticker&&O()},h=function(){var t=0,n=e();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var s=1==o.settings.moveSlides?o.active.index:o.active.index*x();for(n=o.children.eq(s),i=1;o.settings.maxSlides-1>=i;i++)n=s+i>=o.children.length?n.add(o.children.eq(i-1)):n.add(o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return"vertical"==o.settings.mode?(n.each(function(){t+=e(this).outerHeight()}),o.settings.slideMargin>0&&(t+=o.settings.slideMargin*(o.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),t},u=function(){var e="100%";return o.settings.slideWidth>0&&(e="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),e},p=function(){var e=o.settings.slideWidth,t=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>t&&!o.carousel||"vertical"==o.settings.mode?e=t:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(t>o.maxThreshold||o.minThreshold>t&&(e=(t-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),e},v=function(){var e=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)e=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)e=o.settings.maxSlides;else{var t=o.children.first().width();e=Math.floor(o.viewport.width()/t)}else"vertical"==o.settings.mode&&(e=o.settings.minSlides);return e},f=function(){var e=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)e=o.children.length/x();else for(var t=0,i=0;o.children.length>t;)++e,t=i+v(),i+=o.settings.moveSlides<=v()?o.settings.moveSlides:v();else e=Math.ceil(o.children.length/v());return e},x=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=v()?o.settings.moveSlides:v()},m=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var e=o.children.last(),t=e.position();S(-(t.left-(o.viewport.width()-e.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,t=o.children.eq(i).position();S(-t.top,"reset",0)}}else{var t=o.children.eq(o.active.index*x()).position();o.active.index==f()-1&&(o.active.last=!0),void 0!=t&&("horizontal"==o.settings.mode?S(-t.left,"reset",0):"vertical"==o.settings.mode&&S(-t.top,"reset",0))}},S=function(e,t,i,n){if(o.usingCSS){var s="vertical"==o.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==t?(r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),I()})):"reset"==t?r.css(o.animProp,s):"ticker"==t&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),H()}))}else{var a={};a[o.animProp]=e,"slide"==t?r.animate(a,i,o.settings.easing,function(){I()}):"reset"==t?r.css(o.animProp,e):"ticker"==t&&r.animate(a,speed,"linear",function(){S(n.resetValue,"reset",0),H()})}},b=function(){for(var t="",i=f(),n=0;i>n;n++){var s="";o.settings.buildPager&&e.isFunction(o.settings.buildPager)?(s=o.settings.buildPager(n),o.pagerEl.addClass("bx-custom-pager")):(s=n+1,o.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+s+"</a></div>"}o.pagerEl.html(t)},w=function(){o.settings.pagerCustom?o.pagerEl=e(o.settings.pagerCustom):(o.pagerEl=e('<div class="bx-pager" />'),o.settings.pagerSelector?e(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),b()),o.pagerEl.delegate("a","click",z)},T=function(){o.controls.next=e('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=e('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",A),o.controls.prev.bind("click",P),o.settings.nextSelector&&e(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&e(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=e('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},C=function(){o.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=e('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",y),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?e(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),q(o.settings.autoStart?"stop":"start")},E=function(){o.children.each(function(){var t=e(this).find("img:first").attr("title");void 0!=t&&e(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},A=function(e){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),e.preventDefault()},P=function(e){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),e.preventDefault()},k=function(e){r.startAuto(),e.preventDefault()},y=function(e){r.stopAuto(),e.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto();var i=e(t.currentTarget),n=parseInt(i.attr("data-slide-index"));n!=o.active.index&&r.goToSlide(n),t.preventDefault()},M=function(t){return"short"==o.settings.pagerType?(o.pagerEl.html(t+1+o.settings.pagerShortSeparator+o.children.length),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,n){e(n).find("a").eq(t).addClass("active")}),void 0)},I=function(){if(o.settings.infiniteLoop){var e="";0==o.active.index?e=o.children.eq(0).position():o.active.index==f()-1&&o.carousel?e=o.children.eq((f()-1)*x()).position():o.active.index==o.children.length-1&&(e=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?S(-e.left,"reset",0):"vertical"==o.settings.mode&&S(-e.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},q=function(e){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[e]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},D=function(){1==f()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==f()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},L=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},W=function(){var t=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();t="horizontal"==o.settings.mode?-i.left:-i.top}S(t,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var t=0;o.children.each(function(){t+="horizontal"==o.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var i=o.settings.speed/t,n="horizontal"==o.settings.mode?"left":"top",s=i*(t-Math.abs(parseInt(r.css(n))));H(s)}),H()},H=function(e){speed=e?e:o.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?t=r.find(".bx-clone").first().position():i=o.children.first().position();var n="horizontal"==o.settings.mode?-t.left:-t.top,s="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:s};S(n,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",N)},N=function(e){if(o.working)e.preventDefault();else{o.touch.originalPos=r.position();var t=e.originalEvent;o.touch.start.x=t.changedTouches[0].pageX,o.touch.start.y=t.changedTouches[0].pageY,o.viewport.bind("touchmove",B),o.viewport.bind("touchend",X)}},B=function(e){var t=e.originalEvent,i=Math.abs(t.changedTouches[0].pageX-o.touch.start.x),n=Math.abs(t.changedTouches[0].pageY-o.touch.start.y);if(3*i>n&&o.settings.preventDefaultSwipeX?e.preventDefault():3*n>i&&o.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var s=0;if("horizontal"==o.settings.mode){var r=t.changedTouches[0].pageX-o.touch.start.x;s=o.touch.originalPos.left+r}else{var r=t.changedTouches[0].pageY-o.touch.start.y;s=o.touch.originalPos.top+r}S(s,"reset",0)}},X=function(e){o.viewport.unbind("touchmove",B);var t=e.originalEvent,i=0;if(o.touch.end.x=t.changedTouches[0].pageX,o.touch.end.y=t.changedTouches[0].pageY,"fade"==o.settings.mode){var n=Math.abs(o.touch.start.x-o.touch.end.x);n>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var n=0;"horizontal"==o.settings.mode?(n=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(n=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&n>0||o.active.last&&0>n)?S(i,"reset",200):Math.abs(n)>=o.settings.swipeThreshold?(0>n?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):S(i,"reset",200)}o.viewport.unbind("touchend",X)},Y=function(){var t=e(window).width(),i=e(window).height();(a!=t||l!=i)&&(a=t,l=i,r.redrawSlider())};return r.goToSlide=function(t,i){if(!o.working&&o.active.index!=t)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>t?f()-1:t>=f()?0:t,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=f()-1,o.settings.pager&&M(o.active.index),o.settings.controls&&D(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=h()&&o.viewport.animate({height:h()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){e(this).css("zIndex",50),I()});else{o.settings.adaptiveHeight&&o.viewport.height()!=h()&&o.viewport.animate({height:h()},o.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);s=a.position(),n=o.viewport.width()-a.width()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-x():(f()-1)*x()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);s=a.position()}else if("next"==i&&0==o.active.index)s=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(t>=0){var c=t*x();s=o.children.eq(c).position()}if(s!==void 0){var g="horizontal"==o.settings.mode?-(s.left-n):-s.top;S(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var e=parseInt(o.active.index)+1;r.goToSlide(e,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var e=parseInt(o.active.index)-1;r.goToSlide(e,"prev")}},r.startAuto=function(e){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=e&&q("stop"))},r.stopAuto=function(e){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=e&&q("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).width(p()),o.viewport.css("height",h()),o.settings.ticker||m(),o.active.last&&(o.active.index=f()-1),o.active.index>=f()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(b(),M(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,e(".bx-clone",this).remove(),o.children.removeAttr("style"),this.removeAttr("style").unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),e(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),e(window).unbind("resize",Y))},r.reloadSlider=function(e){void 0!=e&&(s=e),r.destroySlider(),d()},d(),this}})(jQuery),function(e,t){var i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.fn.imagesLoaded=function(n){function s(){var t=e(g),i=e(h);a&&(h.length?a.reject(d,t,i):a.resolve(d)),e.isFunction(n)&&n.call(r,d,t,i)}function o(t,n){t.src===i||-1!==e.inArray(t,c)||(c.push(t),n?h.push(t):g.push(t),e.data(t,"imagesLoaded",{isBroken:n,src:t.src}),l&&a.notifyWith(e(t),[n,d,e(g),e(h)]),d.length===c.length&&(setTimeout(s),d.unbind(".imagesLoaded")))}var r=this,a=e.isFunction(e.Deferred)?e.Deferred():0,l=e.isFunction(a.notify),d=r.find("img").add(r.filter("img")),c=[],g=[],h=[];return e.isPlainObject(n)&&e.each(n,function(e,t){"callback"===e?n=t:a&&a[e](t)}),d.length?d.bind("load.imagesLoaded error.imagesLoaded",function(e){o(e.target,"error"===e.type)}).each(function(n,s){var r=s.src,a=e.data(s,"imagesLoaded");a&&a.src===r?o(s,a.isBroken):s.complete&&s.naturalWidth!==t?o(s,0===s.naturalWidth||0===s.naturalHeight):(s.readyState||s.complete)&&(s.src=i,s.src=r)}):s(),a?a.promise(r):r}}(jQuery);
    (function(a){var b="Close",c="BeforeAppend",d="MarkupParse",e="Open",f="Change",g="mfp",h="."+g,i="mfp-ready",j="mfp-removing",k="mfp-prevent-close",l,m=function(){},n,o=a(window),p,q,r,s,t,u=function(a,b){l.ev.on(g+a+h,b)},v=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},w=function(b,c){l.ev.triggerHandler(g+b,c),l.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),l.st.callbacks[b]&&l.st.callbacks[b].apply(l,a.isArray(c)?c:[c]))},x=function(){(l.st.focus?l.content.find(l.st.focus).eq(0):l.wrap).focus()},y=function(b){if(b!==t||!l.currTemplate.closeBtn)l.currTemplate.closeBtn=a(l.st.closeMarkup.replace("%title%",l.st.tClose)),t=b;return l.currTemplate.closeBtn};m.prototype={constructor:m,init:function(){var b=navigator.appVersion;l.isIE7=b.indexOf("MSIE 7.")!==-1,l.isAndroid=/android/gi.test(b),l.isIOS=/iphone|ipad|ipod/gi.test(b),l.probablyMobile=l.isAndroid||l.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),p=a(document.body),q=a(document),l.popupsCache={}},open:function(b){if(l.isOpen)return;var c;l.types=[],s="",l.ev=b.el||q;if(b.isObj)l.index=b.index||0;else{l.index=0;var f=b.items,g;for(c=0;c<f.length;c++){g=f[c],g.parsed&&(g=g.el[0]);if(g===b.el[0]){l.index=c;break}}}b.key?(l.popupsCache[b.key]||(l.popupsCache[b.key]={}),l.currTemplate=l.popupsCache[b.key]):l.currTemplate={},l.st=a.extend(!0,{},a.magnificPopup.defaults,b),l.fixedContentPos=l.st.fixedContentPos==="auto"?!l.probablyMobile:l.st.fixedContentPos,l.items=b.items.length?b.items:[b.items],l.bgOverlay||(l.bgOverlay=v("bg").on("click"+h,function(){l.close()}),l.wrap=v("wrap").attr("tabindex",-1).on("click"+h,function(b){var c=b.target;if(a(c).hasClass(k))return;l.st.closeOnContentClick?l.close():(!l.content||a(c).hasClass("mfp-close")||l.preloader&&b.target===l.preloader[0]||c!==l.content[0]&&!a.contains(l.content[0],c))&&l.close()}),l.container=v("container",l.wrap)),l.contentContainer=v("content"),l.st.preloader&&(l.preloader=v("preloader",l.container,l.st.tLoading));var j=a.magnificPopup.modules;for(c=0;c<j.length;c++){var m=j[c];m=m.charAt(0).toUpperCase()+m.slice(1),l["init"+m].call(l)}w("BeforeOpen"),l.st.closeBtnInside?(u(d,function(a,b,c,d){c.close_replaceWith=y(d.type)}),s+=" mfp-close-btn-in"):l.wrap.append(y()),l.st.alignTop&&(s+=" mfp-align-top"),l.fixedContentPos?l.wrap.css({overflow:l.st.overflowY,overflowX:"hidden",overflowY:l.st.overflowY}):l.wrap.css({top:o.scrollTop(),position:"absolute"}),(l.st.fixedBgPos===!1||l.st.fixedBgPos==="auto"&&!l.fixedContentPos)&&l.bgOverlay.css({height:q.height(),position:"absolute"}),q.on("keyup"+h,function(a){a.keyCode===27&&l.close()}),o.on("resize"+h,function(){l.updateSize()}),l.st.closeOnContentClick||(s+=" mfp-auto-cursor"),s&&l.wrap.addClass(s);var n=l.wH=o.height(),r={};if(l.fixedContentPos&&l.st.overflowY!=="scroll"){var t=l._getScrollbarSize();t&&(r.paddingRight=t)}l.fixedContentPos&&(l.isIE7?a("body, html").css("overflow","hidden"):r.overflow="hidden");var z=l.st.mainClass;l.isIE7&&(z+=" mfp-ie7"),z&&l._addClassToMFP(z),l.updateItemHTML(),p.css(r),l.bgOverlay.add(l.wrap).prependTo(document.body),l._lastFocusedEl=document.activeElement,setTimeout(function(){l.content?(l._addClassToMFP(i),x()):l.bgOverlay.addClass(i),q.on("focusin"+h,function(b){if(b.target!==l.wrap[0]&&!a.contains(l.wrap[0],b.target))return x(),!1})},16),l.isOpen=!0,l.updateSize(n),w(e)},close:function(){if(!l.isOpen)return;l.isOpen=!1,l.st.removalDelay?(l._addClassToMFP(j),setTimeout(function(){l._close()},l.st.removalDelay)):l._close()},_close:function(){w(b);var c=j+" "+i+" ";l.bgOverlay.detach(),l.wrap.detach(),l.container.empty(),l.st.mainClass&&(c+=l.st.mainClass+" "),l._removeClassFromMFP(c);if(l.fixedContentPos){var d={paddingRight:0};l.isIE7?a("body, html").css("overflow","auto"):d.overflow="visible",p.css(d)}q.off("keyup"+h+" focusin"+h),l.ev.off(h),l.wrap.attr("class","mfp-wrap").removeAttr("style"),l.bgOverlay.attr("class","mfp-bg"),l.container.attr("class","mfp-container"),(!l.st.closeBtnInside||l.currTemplate[l.currItem.type]===!0)&&l.currTemplate.closeBtn&&l.currTemplate.closeBtn.detach(),l._lastFocusedEl&&a(l._lastFocusedEl).focus(),l.currTemplate=null,l.prevHeight=0},updateSize:function(a){if(l.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;l.wrap.css("height",c),l.wH=c}else l.wH=a||o.height();w("Resize")},updateItemHTML:function(){var b=l.items[l.index];l.contentContainer.detach(),b.parsed||(b=l.parseEl(l.index)),l.currItem=b;var c=b.type;if(!l.currTemplate[c]){var d=l.st[c]?l.st[c].markup:!1;d?(w("FirstMarkupParse",d),l.currTemplate[c]=a(d)):l.currTemplate[c]=!0}r&&r!==b.type&&l.container.removeClass("mfp-"+r+"-holder");var e=l["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,l.currTemplate[c]);l.appendContent(e,c),b.preloaded=!0,w(f,b),r=b.type,l.container.prepend(l.contentContainer)},appendContent:function(a,b){l.content=a,a?l.st.closeBtnInside&&l.currTemplate[b]===!0?l.content.find(".mfp-close").length||l.content.append(y()):l.content=a:l.content="",w(c),l.container.addClass("mfp-"+b+"-holder"),l.contentContainer.html(l.content)},parseEl:function(b){var c=l.items[b],d=c.type;c.tagName?c={el:a(c)}:c={data:c,src:c.src};if(c.el){var e=l.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||l.st.type,c.index=b,c.parsed=!0,l.items[b]=c,w("ElementParse",c),l.items[b]},addGroup:function(b,c){var d=function(d){var e=c.midClick!==undefined?c.midClick:a.magnificPopup.defaults.midClick;if(e||d.which!==2){var f=c.disableOn!==undefined?c.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(l))return!0}else if(a(window).width()<f)return!0;d.preventDefault(),c.el=a(this),c.delegate&&(c.items=b.find(c.delegate)),l.open(c)}};c||(c={});var e="click.magnificPopup";c.items?(c.isObj=!0,b.off(e).on(e,d)):(c.isObj=!1,c.delegate?b.off(e).on(e,c.delegate,d):(c.items=b,b.off(e).on(e,d)))},updateStatus:function(a,b){if(l.preloader){n!==a&&l.container.removeClass("mfp-s-"+n),!b&&a==="loading"&&(b=l.st.tLoading);var c={status:a,text:b};w("UpdateStatus",c),a=c.status,b=c.text,l.preloader.html(b),l.preloader.find("a").click(function(a){a.stopImmediatePropagation()}),l.container.addClass("mfp-s-"+a),n=a}},_addClassToMFP:function(a){l.bgOverlay.addClass(a),l.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),l.wrap.removeClass(a)},_hasScrollBar:function(a){return document.body.clientHeight>(a||o.height())?!0:!1},_parseMarkup:function(b,c,e){var f;e.data&&(c=a.extend(e.data,c)),w(d,[b,c,e]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;f=a.split("_");if(f.length>1){var d=b.find(h+"-"+f[0]);if(d.length>0){var e=f[1];e==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):e==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(f[1],c)}}else b.find(h+"-"+a).html(c)})},_getScrollbarSize:function(){if(l.scrollbarSize===undefined){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),l.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return l.scrollbarSize}},a.magnificPopup={instance:null,proto:m.prototype,modules:[],open:function(b,c){return a.magnificPopup.instance||(l=new m,l.init(),a.magnificPopup.instance=l),b||(b={}),b.isObj=!0,b.index=c===undefined?0:c,this.instance.open(b)},close:function(){return a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeBtnInside:!0,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){return a.magnificPopup.instance||(l=new m,l.init(),a.magnificPopup.instance=l),l.addGroup(a(this),b),a(this)};var z="inline",A;a.magnificPopup.registerModule(z,{options:{hiddenClass:g+"-hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){l.types.push(z),A=!1,u(b+"."+z,function(){var a=l.currItem;if(a.type===z){if(A)for(var b=0;b<l.items.length;b++)a=l.items[b],a&&a.inlinePlaceholder&&a.inlinePlaceholder.after(a.inlineElement.addClass(l.st.inline.hiddenClass)).detach();a.inlinePlaceholder=a.inlineElement=null}})},getInline:function(b,c){l.updateStatus("ready");if(b.src){var d=l.st.inline;return typeof b.src!="string"&&(b.isElement=!0),!b.isElement&&!b.inlinePlaceholder&&(b.inlinePlaceholder=v(d.hiddenClass)),b.isElement?b.inlineElement=b.src:b.inlineElement||(b.inlineElement=a(b.src),b.inlineElement.length||(l.updateStatus("error",d.tNotFound),b.inlineElement=a("<div>"))),b.inlinePlaceholder&&(A=!0),b.inlineElement.after(b.inlinePlaceholder).detach().removeClass(d.hiddenClass),b.inlineElement}return l._parseMarkup(c,{},b),c}}});var B="ajax",C,D=function(){C&&p.removeClass(C)};a.magnificPopup.registerModule(B,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){l.types.push(B),C=l.st.ajax.cursor,u(b+"."+B,function(){D(),l.req&&l.req.abort()})},getAjax:function(b){C&&p.addClass(C),l.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){w("ParseAjax",e),l.appendContent(a(e.responseText),B),b.finished=!0,D(),x(),setTimeout(function(){l.wrap.addClass(i)},16),l.updateStatus("ready")},error:function(){D(),b.finished=b.loadError=!0,l.updateStatus("error",l.st.ajax.tError.replace("%url%",b.src))}},l.st.ajax.settings);return l.req=a.ajax(c),""}}});var E,F=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=l.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(l,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var a=l.st.image,c=".image";l.types.push("image"),u(e+c,function(){l.currItem.type==="image"&&a.cursor&&p.addClass(a.cursor)}),u(b+c,function(){a.cursor&&p.removeClass(a.cursor),o.off("resize"+h)}),u("Resize"+c,function(){l.resizeImage()})},resizeImage:function(){var a=l.currItem;if(!a.img)return;l.st.image.verticalFit&&a.img.css("max-height",l.wH+"px")},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,E&&clearInterval(E),a.isCheckingImgSize=!1,w("ImageHasSize",a),a.imgHidden&&(l.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){E&&clearInterval(E),E=setInterval(function(){if(c.naturalWidth>0){l._onImageHasSize(a);return}b>200&&clearInterval(E),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===l.currItem&&(l._onImageHasSize(b),l.updateStatus("ready")),b.hasSize=!0,b.loaded=!0):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===l.currItem&&(l._onImageHasSize(b),l.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=l.st.image,h=c.find(".mfp-img");if(h.length){var i=new Image;i.className="mfp-img",b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone())}return l._parseMarkup(c,{title:F(b),img_replaceWith:b.img},b),l.resizeImage(),b.hasSize?(E&&clearInterval(E),b.loadError?(c.addClass("mfp-loading"),l.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),l.updateStatus("ready")),c):(l.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),l.findImageSize(b)),c)}}});var G="iframe",H=function(a){if(l.isIE7&&l.currItem&&l.currItem.type===G){var b=l.content.find("iframe");b.length&&b.css("display",a?"block":"none")}};a.magnificPopup.registerModule(G,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){l.types.push(G),H(!0),u(b+"."+G,function(){H()})},getIframe:function(b,c){var d=b.src,e=l.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),l._parseMarkup(c,f,b),l.updateStatus("ready"),c}}});var I=function(a){var b=l.items.length;return a>b-1?a-b:a<0?b+a:a},J=function(a,b,c){return a.replace("%curr%",b+1).replace("%total%",c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=l.st.gallery,g=".mfp-gallery",h=Boolean(a.fn.mfpFastClick);l.direction=!0;if(!c||!c.enabled)return!1;s+=" mfp-gallery",u(e+g,function(){c.navigateByImgClick&&l.wrap.on("click"+g,".mfp-img",function(){return l.next(),!1}),q.on("keydown"+g,function(a){a.keyCode===37?l.prev():a.keyCode===39&&l.next()})}),u("UpdateStatus"+g,function(a,b){b.text&&(b.text=J(b.text,l.currItem.index,l.items.length))}),u(d+g,function(a,b,d,e){var f=l.items.length;d.counter=f?J(c.tCounter,e.index,f):""}),u(f+g,function(){l._preloadTimeout&&clearTimeout(l._preloadTimeout),l._preloadTimeout=setTimeout(function(){l.preloadNearbyImages(),l._preloadTimeout=null},16);if(c.arrows&&!l.arrowLeft){var b=c.arrowMarkup,d=l.arrowLeft=a(b.replace("%title%",c.tPrev).replace("%dir%","left")).addClass(k),e=l.arrowRight=a(b.replace("%title%",c.tNext).replace("%dir%","right")).addClass(k),f=h?"mfpFastClick":"click";d[f](function(){l.prev()}),e[f](function(){l.next()}),l.isIE7&&(v("b",d[0],!1,!0),v("a",d[0],!1,!0),v("b",e[0],!1,!0),v("a",e[0],!1,!0)),l.container.append(d.add(e))}}),u(b+g,function(){q.off(g),l.wrap.off("click"+g),h&&l.arrowLeft.add(l.arrowRight).destroyMfpFastClick(),l.arrowRight=l.arrowLeft=null})},next:function(){l.direction=!0,l.index=I(l.index+1),l.updateItemHTML()},prev:function(){l.direction=!1,l.index=I(l.index-1),l.updateItemHTML()},preloadNearbyImages:function(){var a=l.st.gallery.preload,b=Math.min(a[0],l.items.length),c=Math.min(a[1],l.items.length),d;for(d=1;d<=(l.direction?c:b);d++)l._preloadItem(l.index+d);for(d=1;d<=(l.direction?b:c);d++)l._preloadItem(l.index-d)},_preloadItem:function(b){b=I(b);if(l.items[b].preloaded)return;var c=l.items[b];c.parsed||(c=l.parseEl(b)),w("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0}).attr("src",c.src)),c.preloaded=!0}}});var K="retina";a.magnificPopup.registerModule(K,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=l.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(u("ImageHasSize."+K,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),u("ElementParse."+K,function(c,d){d.src=a.replaceSrc(d,b)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){o.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g=a(this),h;if(c){var i,j,k,l,m,n;g.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,o.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0];if(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)l=!0,d()}).on("touchend"+f,function(a){d();if(l||n>1)return;h=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){h=!1},b),e()})})}g.on("click"+f,function(){h||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&o.off("touchmove"+f+" touchend"+f)}}()})(window.jQuery||window.Zepto);
        /*!jQuery Knob*/
    /**
     * Downward compatible, touchable dial
     *
     * Version: 1.2.0 (15/07/2012)
     * Requires: jQuery v1.7+
     *
     * Copyright (c) 2012 Anthony Terrien
     * Under MIT and GPL licenses:
     *  http://www.opensource.org/licenses/mit-license.php
     *  http://www.gnu.org/licenses/gpl.html
     *
     * Thanks to vor, eskimoblood, spiffistan, FabrizioC
     */
    (function($) {

        /**
         * Kontrol library
         */
        "use strict";

        /**
         * Definition of globals and core
         */
        var k = {}, // kontrol
            max = Math.max,
            min = Math.min;

        k.c = {};
        k.c.d = $(document);
        k.c.t = function (e) {
            return e.originalEvent.touches.length - 1;
        };

        /**
         * Kontrol Object
         *
         * Definition of an abstract UI control
         *
         * Each concrete component must call this one.
         * <code>
         * k.o.call(this);
         * </code>
         */
        k.o = function () {
            var s = this;

            this.o = null; // array of options
            this.$ = null; // jQuery wrapped element
            this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
            this.g = null; // 2D graphics context for 'pre-rendering'
            this.v = null; // value ; mixed array or integer
            this.cv = null; // change value ; not commited value
            this.x = 0; // canvas x position
            this.y = 0; // canvas y position
            this.$c = null; // jQuery canvas element
            this.c = null; // rendered canvas context
            this.t = 0; // touches index
            this.isInit = false;
            this.fgColor = null; // main color
            this.pColor = null; // previous color
            this.dH = null; // draw hook
            this.cH = null; // change hook
            this.eH = null; // cancel hook
            this.rH = null; // release hook

            this.run = function () {
                var cf = function (e, conf) {
                    var k;
                    for (k in conf) {
                        s.o[k] = conf[k];
                    }
                    s.init();
                    s._configure()
                        ._draw();
                };

                if(this.$.data('kontroled')) return;
                this.$.data('kontroled', true);

                this.extend();
                this.o = $.extend(
                    {
                        // Config
                        min : this.$.data('min') || 0,
                        max : this.$.data('max') || 100,
                        stopper : true,
                        readOnly : this.$.data('readonly'),

                        // UI
                        cursor : (this.$.data('cursor') === true && 30)
                        || this.$.data('cursor')
                        || 0,
                        thickness : this.$.data('thickness') || 0.35,
                        lineCap : this.$.data('linecap') || 'butt',
                        width : this.$.data('width') || 200,
                        height : this.$.data('height') || 200,
                        displayInput : this.$.data('displayinput') == null || this.$.data('displayinput'),
                        displayPrevious : this.$.data('displayprevious'),
                        fgColor : this.$.data('fgcolor') || '#87CEEB',
                        inputColor: this.$.data('inputcolor') || this.$.data('fgcolor') || '#87CEEB',
                        inline : false,
                        step : this.$.data('step') || 1,

                        // Hooks
                        draw : null, // function () {}
                        change : null, // function (value) {}
                        cancel : null, // function () {}
                        release : null, // function (value) {}
                        error : null // function () {}
                    }, this.o
                );

                // routing value
                if(this.$.is('fieldset')) {

                    // fieldset = array of integer
                    this.v = {};
                    this.i = this.$.find('input');
                    this.i.each(function(k) {
                        var $this = $(this);
                        s.i[k] = $this;
                        s.v[k] = $this.val();

                        $this.bind(
                            'change'
                            , function () {
                                var val = {};
                                val[k] = $this.val();
                                s.val(val);
                            }
                        );
                    });
                    this.$.find('legend').remove();

                } else {
                    // input = integer
                    this.i = this.$;
                    this.v = this.$.val();
                    (this.v == '') && (this.v = this.o.min);

                    this.$.bind(
                        'change'
                        , function () {
                            s.val(s._validate(s.$.val()));
                        }
                    );
                }

                (!this.o.displayInput) && this.$.hide();

                this.$c = $('<canvas width="' +
                this.o.width + 'px" height="' +
                this.o.height + 'px"></canvas>');

                this.c = this.$c[0].getContext? this.$c[0].getContext('2d') : null;

                if (!this.c) {
                    this.o.error && this.o.error();
                    return;
                }

                this.$
                    .wrap($('<div style="' + (this.o.inline ? 'display:inline;' : '') +
                    'width:' + this.o.width + 'px;height:' +
                    this.o.height + 'px;"></div>'))
                    .before(this.$c);

                if (this.v instanceof Object) {
                    this.cv = {};
                    this.copy(this.v, this.cv);
                } else {
                    this.cv = this.v;
                }

                this.$
                    .bind("configure", cf)
                    .parent()
                    .bind("configure", cf);

                this._listen()
                    ._configure()
                    ._xy()
                    .init();

                this.isInit = true;

                this._draw();

                return this;
            };

            this._draw = function () {

                // canvas pre-rendering
                var d = true,
                    c = document.createElement('canvas');

                c.width = s.o.width;
                c.height = s.o.height;
                s.g = c.getContext('2d');

                s.clear();

                s.dH
                && (d = s.dH());

                (d !== false) && s.draw();

                s.c.drawImage(c, 0, 0);
                c = null;
            };

            this._touch = function (e) {

                var touchMove = function (e) {

                    var v = s.xy2val(
                        e.originalEvent.touches[s.t].pageX,
                        e.originalEvent.touches[s.t].pageY
                    );

                    if (v == s.cv) return;

                    if (
                        s.cH
                        && (s.cH(v) === false)
                    ) return;


                    s.change(s._validate(v));
                    s._draw();
                };

                // get touches index
                this.t = k.c.t(e);

                // First touch
                touchMove(e);

                // Touch events listeners
                k.c.d
                    .bind("touchmove.k", touchMove)
                    .bind(
                    "touchend.k"
                    , function () {
                        k.c.d.unbind('touchmove.k touchend.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

                return this;
            };

            this._mouse = function (e) {

                var mouseMove = function (e) {
                    var v = s.xy2val(e.pageX, e.pageY);
                    if (v == s.cv) return;

                    if (
                        s.cH
                        && (s.cH(v) === false)
                    ) return;

                    s.change(s._validate(v));
                    s._draw();
                };

                // First click
                mouseMove(e);

                // Mouse events listeners
                k.c.d
                    .bind("mousemove.k", mouseMove)
                    .bind(
                    // Escape key cancel current change
                    "keyup.k"
                    , function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (
                                s.eH
                                && (s.eH() === false)
                            ) return;

                            s.cancel();
                        }
                    }
                )
                    .bind(
                    "mouseup.k"
                    , function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

                return this;
            };

            this._xy = function () {
                var o = this.$c.offset();
                this.x = o.left;
                this.y = o.top;
                return this;
            };

            this._listen = function () {

                if (!this.o.readOnly) {
                    this.$c
                        .bind(
                        "mousedown"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                        }
                    )
                        .bind(
                        "touchstart"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                        }
                    );
                    this.listen();
                } else {
                    this.$.attr('readonly', 'readonly');
                }

                return this;
            };

            this._configure = function () {

                // Hooks
                if (this.o.draw) this.dH = this.o.draw;
                if (this.o.change) this.cH = this.o.change;
                if (this.o.cancel) this.eH = this.o.cancel;
                if (this.o.release) this.rH = this.o.release;

                if (this.o.displayPrevious) {
                    this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                    this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
                } else {
                    this.fgColor = this.o.fgColor;
                }

                return this;
            };

            this._clear = function () {
                this.$c[0].width = this.$c[0].width;
            };

            this._validate = function(v) {
                return (~~ (((v < 0) ? -0.5 : 0.5) + (v/this.o.step))) * this.o.step;
            };

            // Abstract methods
            this.listen = function () {}; // on start, one time
            this.extend = function () {}; // each time configure triggered
            this.init = function () {}; // each time configure triggered
            this.change = function (v) {}; // on change
            this.val = function (v) {}; // on release
            this.xy2val = function (x, y) {}; //
            this.draw = function () {}; // on change / on release
            this.clear = function () { this._clear(); };

            // Utils
            this.h2rgba = function (h, a) {
                var rgb;
                h = h.substring(1,7)
                rgb = [parseInt(h.substring(0,2),16)
                    ,parseInt(h.substring(2,4),16)
                    ,parseInt(h.substring(4,6),16)];
                return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
            };

            this.copy = function (f, t) {
                for (var i in f) { t[i] = f[i]; }
            };
        };


        /**
         * k.Dial
         */
        k.Dial = function () {
            k.o.call(this);

            this.startAngle = null;
            this.xy = null;
            this.radius = null;
            this.lineWidth = null;
            this.cursorExt = null;
            this.w2 = null;
            this.PI2 = 2*Math.PI;

            this.extend = function () {
                this.o = $.extend(
                    {
                        bgColor : this.$.data('bgcolor') || '#EEEEEE',
                        angleOffset : this.$.data('angleoffset') || 0,
                        angleArc : this.$.data('anglearc') || 360,
                        inline : true
                    }, this.o
                );
            };

            this.val = function (v) {
                if (null != v) {
                    this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                    this.v = this.cv;
                    this.$.val(this.v);
                    this._draw();
                } else {
                    return this.v;
                }
            };

            this.xy2val = function (x, y) {
                var a, ret;

                a = Math.atan2(
                    x - (this.x + this.w2)
                    , - (y - this.y - this.w2)
                ) - this.angleOffset;

                if(this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {
                    // if isset angleArc option, set to min if .5 under min
                    a = 0;
                } else if (a < 0) {
                    a += this.PI2;
                }

                ret = ~~ (0.5 + (a * (this.o.max - this.o.min) / this.angleArc))
                + this.o.min;

                this.o.stopper
                && (ret = max(min(ret, this.o.max), this.o.min));

                return ret;
            };

            this.listen = function () {
                // bind MouseWheel
                var s = this,
                    mw = function (e) {
                        e.preventDefault();
                        var ori = e.originalEvent
                            ,deltaX = ori.detail || ori.wheelDeltaX
                            ,deltaY = ori.detail || ori.wheelDeltaY
                            ,v = parseInt(s.$.val()) + (deltaX>0 || deltaY>0 ? s.o.step : deltaX<0 || deltaY<0 ? -s.o.step : 0);

                        if (
                            s.cH
                            && (s.cH(v) === false)
                        ) return;

                        s.val(v);
                    }
                    , kval, to, m = 1, kv = {37:-s.o.step, 38:s.o.step, 39:s.o.step, 40:-s.o.step};

                this.$
                    .bind(
                    "keydown"
                    ,function (e) {
                        var kc = e.keyCode;

                        // numpad support
                        if(kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {

                            (kc !== 13)         // enter
                            && (kc !== 8)       // bs
                            && (kc !== 9)       // tab
                            && (kc !== 189)     // -
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = parseInt(s.$.val()) + kv[kc] * m;

                                s.o.stopper
                                && (v = max(min(v, s.o.max), s.o.min));

                                s.change(v);
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(
                                    function () { m*=2; }
                                    ,30
                                );
                            }
                        }
                    }
                )
                    .bind(
                    "keyup"
                    ,function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }

                    }
                );

                this.$c.bind("mousewheel DOMMouseScroll", mw);
                this.$.bind("mousewheel DOMMouseScroll", mw)
            };

            this.init = function () {

                if (
                    this.v < this.o.min
                    || this.v > this.o.max
                ) this.v = this.o.min;

                this.$.val(this.v);
                this.w2 = this.o.width / 2;
                this.cursorExt = this.o.cursor / 100;
                this.xy = this.w2;
                this.lineWidth = this.xy * this.o.thickness;
                this.lineCap = this.o.lineCap;
                this.radius = this.xy - this.lineWidth / 2;

                this.o.angleOffset
                && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

                this.o.angleArc
                && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

                // deg to rad
                this.angleOffset = this.o.angleOffset * Math.PI / 180;
                this.angleArc = this.o.angleArc * Math.PI / 180;

                // compute start and end angles
                this.startAngle = 1.5 * Math.PI + this.angleOffset;
                this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

                var s = max(
                        String(Math.abs(this.o.max)).length
                        , String(Math.abs(this.o.min)).length
                        , 2
                    ) + 2;

                this.o.displayInput
                && this.i.css({
                    'width' : ((this.o.width / 2 + 4) >> 0) + 'px'
                    ,'height' : ((this.o.width / 3) >> 0) + 'px'
                    ,'position' : 'absolute'
                    ,'vertical-align' : 'middle'
                    ,'margin-top' : ((this.o.width / 3) >> 0) + 'px'
                    ,'margin-left' : '-' + ((this.o.width * 3 / 4 + 2) >> 0) + 'px'
                    ,'border' : 0
                    ,'background' : 'none'
                    ,'font' : 'bold ' + ((this.o.width / s) >> 0) + 'px Arial'
                    ,'text-align' : 'center'
                    ,'color' : this.o.inputColor || this.o.fgColor
                    ,'padding' : '0px'
                    ,'-webkit-appearance': 'none'
                })
                || this.i.css({
                    'width' : '0px'
                    ,'visibility' : 'hidden'
                });
            };

            this.change = function (v) {
                this.cv = v;
                this.$.val(v);
            };

            this.angle = function (v) {
                return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
            };

            this.draw = function () {

                var c = this.g,                 // context
                    a = this.angle(this.cv)    // Angle
                    , sat = this.startAngle     // Start angle
                    , eat = sat + a             // End angle
                    , sa, ea                    // Previous angles
                    , r = 1;

                c.lineWidth = this.lineWidth;

                c.lineCap = this.lineCap;

                this.o.cursor
                && (sat = eat - this.cursorExt)
                && (eat = eat + this.cursorExt);

                c.beginPath();
                c.strokeStyle = this.o.bgColor;
                c.arc(this.xy, this.xy, this.radius, this.endAngle, this.startAngle, true);
                c.stroke();

                if (this.o.displayPrevious) {
                    ea = this.startAngle + this.angle(this.v);
                    sa = this.startAngle;
                    this.o.cursor
                    && (sa = ea - this.cursorExt)
                    && (ea = ea + this.cursorExt);

                    c.beginPath();
                    c.strokeStyle = this.pColor;
                    c.arc(this.xy, this.xy, this.radius, sa, ea, false);
                    c.stroke();
                    r = (this.cv == this.v);
                }

                c.beginPath();
                c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                c.arc(this.xy, this.xy, this.radius, sat, eat, false);
                c.stroke();
            };

            this.cancel = function () {
                this.val(this.v);
            };
        };

        $.fn.dial = $.fn.knob = function (o) {
            return this.each(
                function () {
                    var d = new k.Dial();
                    d.o = o;
                    d.$ = $(this);
                    d.run();
                }
            ).parent();
        };

    })(jQuery);
    // Generated by CoffeeScript 1.4.0

    /*
     jQuery Waypoints - v2.0.2
     Copyright (c) 2011-2013 Caleb Troughton
     Dual licensed under the MIT license and GPL license.
     https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
     */


    (function() {
        var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
            __slice = [].slice;

        (function(root, factory) {
            if (typeof define === 'function' && define.amd) {
                return define('waypoints', ['jquery'], function($) {
                    return factory($, root);
                });
            } else {
                return factory(root.jQuery, root);
            }
        })(this, function($, window) {
            var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;
            $w = $(window);
            isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
            allWaypoints = {
                horizontal: {},
                vertical: {}
            };
            contextCounter = 1;
            contexts = {};
            contextKey = 'waypoints-context-id';
            resizeEvent = 'resize.waypoints';
            scrollEvent = 'scroll.waypoints';
            waypointCounter = 1;
            waypointKey = 'waypoints-waypoint-ids';
            wp = 'waypoint';
            wps = 'waypoints';
            Context = (function() {

                function Context($element) {
                    var _this = this;
                    this.$element = $element;
                    this.element = $element[0];
                    this.didResize = false;
                    this.didScroll = false;
                    this.id = 'context' + contextCounter++;
                    this.oldScroll = {
                        x: $element.scrollLeft(),
                        y: $element.scrollTop()
                    };
                    this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    };
                    $element.data(contextKey, this.id);
                    contexts[this.id] = this;
                    $element.bind(scrollEvent, function() {
                        var scrollHandler;
                        if (!(_this.didScroll || isTouch)) {
                            _this.didScroll = true;
                            scrollHandler = function() {
                                _this.doScroll();
                                return _this.didScroll = false;
                            };
                            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
                        }
                    });
                    $element.bind(resizeEvent, function() {
                        var resizeHandler;
                        if (!_this.didResize) {
                            _this.didResize = true;
                            resizeHandler = function() {
                                $[wps]('refresh');
                                return _this.didResize = false;
                            };
                            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
                        }
                    });
                }

                Context.prototype.doScroll = function() {
                    var axes,
                        _this = this;
                    axes = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: 'right',
                            backward: 'left'
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: 'down',
                            backward: 'up'
                        }
                    };
                    if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
                        $[wps]('refresh');
                    }
                    $.each(axes, function(aKey, axis) {
                        var direction, isForward, triggered;
                        triggered = [];
                        isForward = axis.newScroll > axis.oldScroll;
                        direction = isForward ? axis.forward : axis.backward;
                        $.each(_this.waypoints[aKey], function(wKey, waypoint) {
                            var _ref, _ref1;
                            if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
                                return triggered.push(waypoint);
                            } else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
                                return triggered.push(waypoint);
                            }
                        });
                        triggered.sort(function(a, b) {
                            return a.offset - b.offset;
                        });
                        if (!isForward) {
                            triggered.reverse();
                        }
                        return $.each(triggered, function(i, waypoint) {
                            if (waypoint.options.continuous || i === triggered.length - 1) {
                                return waypoint.trigger([direction]);
                            }
                        });
                    });
                    return this.oldScroll = {
                        x: axes.horizontal.newScroll,
                        y: axes.vertical.newScroll
                    };
                };

                Context.prototype.refresh = function() {
                    var axes, cOffset, isWin,
                        _this = this;
                    isWin = $.isWindow(this.element);
                    cOffset = this.$element.offset();
                    this.doScroll();
                    axes = {
                        horizontal: {
                            contextOffset: isWin ? 0 : cOffset.left,
                            contextScroll: isWin ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: 'right',
                            backward: 'left',
                            offsetProp: 'left'
                        },
                        vertical: {
                            contextOffset: isWin ? 0 : cOffset.top,
                            contextScroll: isWin ? 0 : this.oldScroll.y,
                            contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: 'down',
                            backward: 'up',
                            offsetProp: 'top'
                        }
                    };
                    return $.each(axes, function(aKey, axis) {
                        return $.each(_this.waypoints[aKey], function(i, waypoint) {
                            var adjustment, elementOffset, oldOffset, _ref, _ref1;
                            adjustment = waypoint.options.offset;
                            oldOffset = waypoint.offset;
                            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
                            if ($.isFunction(adjustment)) {
                                adjustment = adjustment.apply(waypoint.element);
                            } else if (typeof adjustment === 'string') {
                                adjustment = parseFloat(adjustment);
                                if (waypoint.options.offset.indexOf('%') > -1) {
                                    adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
                                }
                            }
                            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
                            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
                                return;
                            }
                            if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
                                return waypoint.trigger([axis.backward]);
                            } else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
                                return waypoint.trigger([axis.forward]);
                            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
                                return waypoint.trigger([axis.forward]);
                            }
                        });
                    });
                };

                Context.prototype.checkEmpty = function() {
                    if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
                        this.$element.unbind([resizeEvent, scrollEvent].join(' '));
                        return delete contexts[this.id];
                    }
                };

                return Context;

            })();
            Waypoint = (function() {

                function Waypoint($element, context, options) {
                    var idList, _ref;
                    options = $.extend({}, $.fn[wp].defaults, options);
                    if (options.offset === 'bottom-in-view') {
                        options.offset = function() {
                            var contextHeight;
                            contextHeight = $[wps]('viewportHeight');
                            if (!$.isWindow(context.element)) {
                                contextHeight = context.$element.height();
                            }
                            return contextHeight - $(this).outerHeight();
                        };
                    }
                    this.$element = $element;
                    this.element = $element[0];
                    this.axis = options.horizontal ? 'horizontal' : 'vertical';
                    this.callback = options.handler;
                    this.context = context;
                    this.enabled = options.enabled;
                    this.id = 'waypoints' + waypointCounter++;
                    this.offset = null;
                    this.options = options;
                    context.waypoints[this.axis][this.id] = this;
                    allWaypoints[this.axis][this.id] = this;
                    idList = (_ref = $element.data(waypointKey)) != null ? _ref : [];
                    idList.push(this.id);
                    $element.data(waypointKey, idList);
                }

                Waypoint.prototype.trigger = function(args) {
                    if (!this.enabled) {
                        return;
                    }
                    if (this.callback != null) {
                        this.callback.apply(this.element, args);
                    }
                    if (this.options.triggerOnce) {
                        return this.destroy();
                    }
                };

                Waypoint.prototype.disable = function() {
                    return this.enabled = false;
                };

                Waypoint.prototype.enable = function() {
                    this.context.refresh();
                    return this.enabled = true;
                };

                Waypoint.prototype.destroy = function() {
                    delete allWaypoints[this.axis][this.id];
                    delete this.context.waypoints[this.axis][this.id];
                    return this.context.checkEmpty();
                };

                Waypoint.getWaypointsByElement = function(element) {
                    var all, ids;
                    ids = $(element).data(waypointKey);
                    if (!ids) {
                        return [];
                    }
                    all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
                    return $.map(ids, function(id) {
                        return all[id];
                    });
                };

                return Waypoint;

            })();
            methods = {
                init: function(f, options) {
                    var _ref;
                    if (options == null) {
                        options = {};
                    }
                    if ((_ref = options.handler) == null) {
                        options.handler = f;
                    }
                    this.each(function() {
                        var $this, context, contextElement, _ref1;
                        $this = $(this);
                        contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
                        if (!$.isWindow(contextElement)) {
                            contextElement = $this.closest(contextElement);
                        }
                        contextElement = $(contextElement);
                        context = contexts[contextElement.data(contextKey)];
                        if (!context) {
                            context = new Context(contextElement);
                        }
                        return new Waypoint($this, context, options);
                    });
                    $[wps]('refresh');
                    return this;
                },
                disable: function() {
                    return methods._invoke(this, 'disable');
                },
                enable: function() {
                    return methods._invoke(this, 'enable');
                },
                destroy: function() {
                    return methods._invoke(this, 'destroy');
                },
                prev: function(axis, selector) {
                    return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
                        if (index > 0) {
                            return stack.push(waypoints[index - 1]);
                        }
                    });
                },
                next: function(axis, selector) {
                    return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
                        if (index < waypoints.length - 1) {
                            return stack.push(waypoints[index + 1]);
                        }
                    });
                },
                _traverse: function(axis, selector, push) {
                    var stack, waypoints;
                    if (axis == null) {
                        axis = 'vertical';
                    }
                    if (selector == null) {
                        selector = window;
                    }
                    waypoints = jQMethods.aggregate(selector);
                    stack = [];
                    this.each(function() {
                        var index;
                        index = $.inArray(this, waypoints[axis]);
                        return push(stack, index, waypoints[axis]);
                    });
                    return this.pushStack(stack);
                },
                _invoke: function($elements, method) {
                    $elements.each(function() {
                        var waypoints;
                        waypoints = Waypoint.getWaypointsByElement(this);
                        return $.each(waypoints, function(i, waypoint) {
                            waypoint[method]();
                            return true;
                        });
                    });
                    return this;
                }
            };
            $.fn[wp] = function() {
                var args, method;
                method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                if (methods[method]) {
                    return methods[method].apply(this, args);
                } else if ($.isFunction(method)) {
                    return methods.init.apply(this, arguments);
                } else if ($.isPlainObject(method)) {
                    return methods.init.apply(this, [null, method]);
                } else if (!method) {
                    return $.error("jQuery Waypoints needs a callback function or handler option.");
                } else {
                    return $.error("The " + method + " method does not exist in jQuery Waypoints.");
                }
            };
            $.fn[wp].defaults = {
                context: window,
                continuous: true,
                enabled: true,
                horizontal: false,
                offset: 0,
                triggerOnce: false
            };
            jQMethods = {
                refresh: function() {
                    return $.each(contexts, function(i, context) {
                        return context.refresh();
                    });
                },
                viewportHeight: function() {
                    var _ref;
                    return (_ref = window.innerHeight) != null ? _ref : $w.height();
                },
                aggregate: function(contextSelector) {
                    var collection, waypoints, _ref;
                    collection = allWaypoints;
                    if (contextSelector) {
                        collection = (_ref = contexts[$(contextSelector).data(contextKey)]) != null ? _ref.waypoints : void 0;
                    }
                    if (!collection) {
                        return [];
                    }
                    waypoints = {
                        horizontal: [],
                        vertical: []
                    };
                    $.each(waypoints, function(axis, arr) {
                        $.each(collection[axis], function(key, waypoint) {
                            return arr.push(waypoint);
                        });
                        arr.sort(function(a, b) {
                            return a.offset - b.offset;
                        });
                        waypoints[axis] = $.map(arr, function(waypoint) {
                            return waypoint.element;
                        });
                        return waypoints[axis] = $.unique(waypoints[axis]);
                    });
                    return waypoints;
                },
                above: function(contextSelector) {
                    if (contextSelector == null) {
                        contextSelector = window;
                    }
                    return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
                        return waypoint.offset <= context.oldScroll.y;
                    });
                },
                below: function(contextSelector) {
                    if (contextSelector == null) {
                        contextSelector = window;
                    }
                    return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
                        return waypoint.offset > context.oldScroll.y;
                    });
                },
                left: function(contextSelector) {
                    if (contextSelector == null) {
                        contextSelector = window;
                    }
                    return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
                        return waypoint.offset <= context.oldScroll.x;
                    });
                },
                right: function(contextSelector) {
                    if (contextSelector == null) {
                        contextSelector = window;
                    }
                    return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
                        return waypoint.offset > context.oldScroll.x;
                    });
                },
                enable: function() {
                    return jQMethods._invoke('enable');
                },
                disable: function() {
                    return jQMethods._invoke('disable');
                },
                destroy: function() {
                    return jQMethods._invoke('destroy');
                },
                extendFn: function(methodName, f) {
                    return methods[methodName] = f;
                },
                _invoke: function(method) {
                    var waypoints;
                    waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
                    return $.each(waypoints, function(key, waypoint) {
                        waypoint[method]();
                        return true;
                    });
                },
                _filter: function(selector, axis, test) {
                    var context, waypoints;
                    context = contexts[$(selector).data(contextKey)];
                    if (!context) {
                        return [];
                    }
                    waypoints = [];
                    $.each(context.waypoints[axis], function(i, waypoint) {
                        if (test(context, waypoint)) {
                            return waypoints.push(waypoint);
                        }
                    });
                    waypoints.sort(function(a, b) {
                        return a.offset - b.offset;
                    });
                    return $.map(waypoints, function(waypoint) {
                        return waypoint.element;
                    });
                }
            };
            $[wps] = function() {
                var args, method;
                method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                if (jQMethods[method]) {
                    return jQMethods[method].apply(null, args);
                } else {
                    return jQMethods.aggregate.call(null, method);
                }
            };
            $[wps].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            };
            return $w.load(function() {
                return $[wps]('refresh');
            });
        });

    }).call(this);
    /**
     * nlform.js v1.0.0
     * http://www.codrops.com
     *
     * Licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     *
     * Copyright 2013, Codrops
     * http://www.codrops.com
     */
    ( function( window ) {

        'use strict';

        var document = window.document;

        if (!String.prototype.trim) {
            String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
        }

        function NLForm( el ) {
            this.el = el;
            this.overlay = this.el.querySelector( '.nl-overlay' );
            this.fields = [];
            this.fldOpen = -1;
            this._init();
        }

        NLForm.prototype = {
            _init : function() {
                var self = this;
                Array.prototype.slice.call( this.el.querySelectorAll( 'select' ) ).forEach( function( el, i ) {
                    self.fldOpen++;
                    self.fields.push( new NLField( self, el, 'dropdown', self.fldOpen ) );
                } );
                Array.prototype.slice.call( this.el.querySelectorAll( 'input' ) ).forEach( function( el, i ) {
                    self.fldOpen++;
                    self.fields.push( new NLField( self, el, 'input', self.fldOpen ) );
                } );
                //this.overlay.addEventListener( 'click', function(ev) { self._closeFlds(); } );
               //this.overlay.addEventListener( 'touchstart', function(ev) { self._closeFlds(); } );
            },
            _closeFlds : function() {
                if( this.fldOpen !== -1 ) {
                    this.fields[ this.fldOpen ].close();
                }
            }
        };

        function NLField( form, el, type, idx ) {
            this.form = form;
            this.elOriginal = el;
            this.pos = idx;
            this.type = type;
            this._create();
            this._initEvents();
        }

        NLField.prototype = {
            _create : function() {
                if( this.type === 'dropdown' ) {
                    this._createDropDown();
                }
                else if( this.type === 'input' ) {
                    this._createInput();
                }
            },
            _createDropDown : function() {
                var self = this;
                this.fld = document.createElement( 'div' );
                this.fld.className = 'nl-field nl-dd';
                this.toggle = document.createElement( 'a' );
                this.toggle.innerHTML = this.elOriginal.options[ this.elOriginal.selectedIndex ].innerHTML;
                this.toggle.className = 'nl-field-toggle';
                this.optionsList = document.createElement( 'ul' );
                var ihtml = '';
                Array.prototype.slice.call( this.elOriginal.querySelectorAll( 'option' ) ).forEach( function( el, i ) {
                    ihtml += self.elOriginal.selectedIndex === i ? '<li class="nl-dd-checked">' + el.innerHTML + '</li>' : '<li>' + el.innerHTML + '</li>';
                    // selected index value
                    if( self.elOriginal.selectedIndex === i ) {
                        self.selectedIdx = i;
                    }
                } );
                this.optionsList.innerHTML = ihtml;
                this.fld.appendChild( this.toggle );
                this.fld.appendChild( this.optionsList );
                this.elOriginal.parentNode.insertBefore( this.fld, this.elOriginal );
                this.elOriginal.style.display = 'none';
            },
            _createInput : function() {
                var self = this;
                this.fld = document.createElement( 'div' );
                this.fld.className = 'nl-field nl-ti-text';
                this.toggle = document.createElement( 'a' );
                this.toggle.innerHTML = this.elOriginal.getAttribute( 'placeholder' );
                this.toggle.className = 'nl-field-toggle';
                this.optionsList = document.createElement( 'ul' );
                this.getinput = document.createElement( 'input' );
                this.getinput.setAttribute( 'type', 'text' );
                this.getinput.setAttribute( 'placeholder', this.elOriginal.getAttribute( 'placeholder' ) );
                this.getinputWrapper = document.createElement( 'li' );
                this.getinputWrapper.className = 'nl-ti-input';
                this.inputsubmit = document.createElement( 'button' );
                this.inputsubmit.className = 'nl-field-go';
                this.inputsubmit.innerHTML = 'Go';
                this.getinputWrapper.appendChild( this.getinput );
                this.getinputWrapper.appendChild( this.inputsubmit );
                this.example = document.createElement( 'li' );
                this.example.className = 'nl-ti-example';
                this.example.innerHTML = this.elOriginal.getAttribute( 'data-subline' );
                this.optionsList.appendChild( this.getinputWrapper );
                this.optionsList.appendChild( this.example );
                this.fld.appendChild( this.toggle );
                this.fld.appendChild( this.optionsList );
                this.elOriginal.parentNode.insertBefore( this.fld, this.elOriginal );
                this.elOriginal.style.display = 'none';
            },
            _initEvents : function() {
                var self = this;
                this.toggle.addEventListener( 'click', function( ev ) { ev.preventDefault(); ev.stopPropagation(); self._open(); } );
                this.toggle.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); ev.stopPropagation(); self._open(); } );

                if( this.type === 'dropdown' ) {
                    var opts = Array.prototype.slice.call( this.optionsList.querySelectorAll( 'li' ) );
                    opts.forEach( function( el, i ) {
                        el.addEventListener( 'click', function( ev ) { ev.preventDefault(); self.close( el, opts.indexOf( el ) ); } );
                        el.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); self.close( el, opts.indexOf( el ) ); } );
                    } );
                }
                else if( this.type === 'input' ) {
                    this.getinput.addEventListener( 'keydown', function( ev ) {
                        if ( ev.keyCode == 13 ) {
                            self.close();
                        }
                    } );
                    this.inputsubmit.addEventListener( 'click', function( ev ) { ev.preventDefault(); self.close(); } );
                    this.inputsubmit.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); self.close(); } );
                }

            },
            _open : function() {
                if( this.open ) {
                    return false;
                }
                this.open = true;
                this.form.fldOpen = this.pos;
                var self = this;
                this.fld.className += ' nl-field-open';
            },
            close : function( opt, idx ) {
                if( !this.open ) {
                    return false;
                }
                this.open = false;
                this.form.fldOpen = -1;
                this.fld.className = this.fld.className.replace(/\b nl-field-open\b/,'');

                if( this.type === 'dropdown' ) {
                    if( opt ) {
                        // remove class nl-dd-checked from previous option
                        var selectedopt = this.optionsList.children[ this.selectedIdx ];
                        selectedopt.className = '';
                        opt.className = 'nl-dd-checked';
                        this.toggle.innerHTML = opt.innerHTML;
                        // update selected index value
                        this.selectedIdx = idx;
                        // update original select element´s value
                        this.elOriginal.value = this.elOriginal.children[ this.selectedIdx ].value;
                    }
                }
                else if( this.type === 'input' ) {
                    this.getinput.blur();
                    this.toggle.innerHTML = this.getinput.value.trim() !== '' ? this.getinput.value : this.getinput.getAttribute( 'placeholder' );
                    this.elOriginal.value = this.getinput.value;
                }
            }
        };

        // add to global namespace
        window.NLForm = NLForm;

    } )( window );
    /*!
     * classie - class helper functions
     * from bonzo https://github.com/ded/bonzo
     *
     * classie.has( elem, 'my-class' ) -> true/false
     * classie.add( elem, 'my-new-class' )
     * classie.remove( elem, 'my-unwanted-class' )
     * classie.toggle( elem, 'my-class' )
     */

    /*jshint browser: true, strict: true, undef: true */

    ( function( window ) {

        'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

        function classReg( className ) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;

        if ( 'classList' in document.documentElement ) {
            hasClass = function( elem, c ) {
                return elem.classList.contains( c );
            };
            addClass = function( elem, c ) {
                elem.classList.add( c );
            };
            removeClass = function( elem, c ) {
                elem.classList.remove( c );
            };
        }
        else {
            hasClass = function( elem, c ) {
                return classReg( c ).test( elem.className );
            };
            addClass = function( elem, c ) {
                if ( !hasClass( elem, c ) ) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function( elem, c ) {
                elem.className = elem.className.replace( classReg( c ), ' ' );
            };
        }

        function toggleClass( elem, c ) {
            var fn = hasClass( elem, c ) ? removeClass : addClass;
            fn( elem, c );
        }

        window.classie = {
            // full names
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            // short names
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };

    })( window );
    /**
     *   Unslider by @idiot
     */

    (function($, f) {
        //  If there's no jQuery, Unslider can't work, so kill the operation.
        if(!$) return f;

        var Unslider = function() {
            //  Set up our elements
            this.el = f;
            this.items = f;

            //  Dimensions
            this.sizes = [];
            this.max = [0,0];

            //  Current inded
            this.current = 0;

            //  Start/stop timer
            this.interval = f;

            //  Set some options
            this.opts = {
                speed: 500,
                delay: 3000, // f for no autoplay
                complete: f, // when a slide's finished
                keys: !f, // keyboard shortcuts - disable if it breaks things
                dots: f, // display ••••o• pagination
                fluid: f // is it a percentage width?,
            };

            //  Create a deep clone for methods where context changes
            var _ = this;

            this.init = function(el, opts) {
                this.el = el;
                this.ul = el.children('ul');
                this.max = [el.outerWidth(), el.outerHeight()];
                this.items = this.ul.children('li').each(this.calculate);

                //  Check whether we're passing any options in to Unslider
                this.opts = $.extend(this.opts, opts);

                //  Set up the Unslider
                this.setup();

                return this;
            };

            //  Get the width for an element
            //  Pass a jQuery element as the context with .call(), and the index as a parameter: Unslider.calculate.call($('li:first'), 0)
            this.calculate = function(index) {
                var me = $(this),
                    width = me.outerWidth(), height = me.outerHeight();

                //  Add it to the sizes list
                _.sizes[index] = [width, height];

                //  Set the max values
                if(width > _.max[0]) _.max[0] = width;
                if(height > _.max[1]) _.max[1] = height;
            };

            //  Work out what methods need calling
            this.setup = function() {
                //  Set the main element
                this.el.css({
                    overflow: 'hidden',
                    width: _.max[0],
                    height: this.items.first().outerHeight()
                });

                //  Set the relative widths
                this.ul.css({width: (this.items.length * 100) + '%', position: 'relative'});
                this.items.css('width', (100 / this.items.length) + '%');

                if(this.opts.delay !== f) {
                    this.start();
                    this.el.hover(this.stop, this.start);
                }

                //  Custom keyboard support
                this.opts.keys && $(document).keydown(this.keys);

                //  Dot pagination
                this.opts.dots && this.dots();

                //  Little patch for fluid-width sliders. Screw those guys.
                if(this.opts.fluid) {
                    var resize = function() {
                        _.el.css('width', Math.min(Math.round((_.el.outerWidth() / _.el.parent().outerWidth()) * 100), 100) + '%');
                    };

                    resize();
                    $(window).resize(resize);
                }

                if(this.opts.arrows) {
                    this.el.parent().append('<p class="arrows"><span class="prev">←</span><span class="next">→</span></p>')
                        .find('.arrows span').click(function() {
                            $.isFunction(_[this.className]) && _[this.className]();
                        });
                };

                //  Swipe support
                if($.event.swipe) {
                    this.el.on('swipeleft', _.prev).on('swiperight', _.next);
                }
            };

            //  Move Unslider to a slide index
            this.move = function(index, cb) {
                //  If it's out of bounds, go to the first slide
                if(!this.items.eq(index).length) index = 0;
                if(index < 0) index = (this.items.length - 1);

                var target = this.items.eq(index);
                var obj = {height: target.outerHeight()};
                var speed = cb ? 5 : this.opts.speed;

                if(!this.ul.is(':animated')) {
                    //  Handle those pesky dots
                    _.el.find('.dot:eq(' + index + ')').addClass('active').siblings().removeClass('active');

                    this.el.animate(obj, speed) && this.ul.animate($.extend({left: '-' + index + '00%'}, obj), speed, function(data) {
                        _.current = index;
                        $.isFunction(_.opts.complete) && !cb && _.opts.complete(_.el);
                    });
                }
            };

            //  Autoplay functionality
            this.start = function() {
                _.interval = setInterval(function() {
                    _.move(_.current + 1);
                }, _.opts.delay);
            };

            //  Stop autoplay
            this.stop = function() {
                _.interval = clearInterval(_.interval);
                return _;
            };

            //  Keypresses
            this.keys = function(e) {
                var key = e.which;
                var map = {
                    //  Prev/next
                    37: _.prev,
                    39: _.next,

                    //  Esc
                    27: _.stop
                };

                if($.isFunction(map[key])) {
                    map[key]();
                }
            };

            //  Arrow navigation
            this.next = function() { return _.stop().move(_.current + 1) };
            this.prev = function() { return _.stop().move(_.current - 1) };

            this.dots = function() {
                //  Create the HTML
                var html = '<ol class="dots">';
                $.each(this.items, function(index) { html += '<li class="dot' + (index < 1 ? ' active' : '') + '">' + (index + 1) + '</li>'; });
                html += '</ol>';

                //  Add it to the Unslider
                this.el.addClass('has-dots').append(html).find('.dot').click(function() {
                    _.move($(this).index());
                });
            };
        };

        //  Create a jQuery plugin
        $.fn.unslider = function(o) {
            var len = this.length;

            //  Enable multiple-slider support
            return this.each(function(index) {
                //  Cache a copy of $(this), so it
                var me = $(this);
                var instance = (new Unslider).init(me, o);

                //  Invoke an Unslider instance
                me.data('unslider' + (len > 1 ? '-' + (index + 1) : ''), instance);
            });
        };
    })(window.jQuery, false);
    (function(l){function t(l){return l.replace(/(:|\.)/g,"\\$1")}var e="1.4.10",o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},r=function(t){var e=[],o=!1,r=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=l(this);t[r]()>0?e.push(this):(t[r](1),o=t[r]()>0,o&&e.push(this),t[r](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};l.fn.extend({scrollable:function(l){var t=r.call(this,{dir:l});return this.pushStack(t)},firstScrollable:function(l){var t=r.call(this,{el:"first",dir:l});return this.pushStack(t)},smoothScroll:function(e){e=e||{};var o=l.extend({},l.fn.smoothScroll.defaults,e),r=l.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,s=l(this),c=o.exclude,i=o.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===n.hostname||!n.hostname,m=o.scrollTarget||(l.smoothScroll.filterPath(n.pathname)||r)===r,p=t(n.hash);if(o.scrollTarget||d&&m&&p){for(;h&&c.length>a;)s.is(t(c[a++]))&&(h=!1);for(;h&&i.length>f;)s.closest(i[f++]).length&&(h=!1)}else h=!1;h&&(e.preventDefault(),l.extend(u,o,{scrollTarget:o.scrollTarget||p,link:n}),l.smoothScroll(u))}),this}}),l.smoothScroll=function(t,e){var o,r,n,s,c=0,i="offset",a="scrollTop",f={},h={};"number"==typeof t?(o=l.fn.smoothScroll.defaults,n=t):(o=l.extend({},l.fn.smoothScroll.defaults,t||{}),o.scrollElement&&(i="position","static"==o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),o=l.extend({link:null},o),a="left"==o.direction?"scrollLeft":a,o.scrollElement?(r=o.scrollElement,c=r[a]()):r=l("html, body").firstScrollable(),o.beforeScroll.call(r,o),n="number"==typeof t?t:e||l(o.scrollTarget)[i]()&&l(o.scrollTarget)[i]()[o.direction]||0,f[a]=n+c+o.offset,s=o.speed,"auto"===s&&(s=f[a]||r.scrollTop(),s/=o.autoCoefficent),h={duration:s,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(h.step=o.step),r.length?r.stop().animate(f,h):o.afterScroll.call(o.link,o)},l.smoothScroll.version=e,l.smoothScroll.filterPath=function(l){return l.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},l.fn.smoothScroll.defaults=o})(jQuery);

    /* -- Unslider
     -- src: http://unslider.com/
     ---------------------------- */
    $(document).ready(function(){
        var unslider = $('.banner').unslider({
            speed: 500,               //  The speed to animate each slide (in milliseconds)
            delay: 7000,              //  The delay between slide animations (in milliseconds)
            complete: function() {},  //  A function that gets called after every slide animation
            keys: true,               //  Enable keyboard (left, right) arrow shortcuts
            dots: true,
            fluid: true
        });

        $('.unslider-arrow').click(function() {
            var fn = this.className.split(' ')[1];

            //  Either do unslider.data('unslider').next() or .prev() depending on the className
            unslider.data('unslider')[fn]();
        });
    });






    /* -- Waypoints
     -- src: http://imakewebthings.com/jquery-waypoints/
     ---------------------------- */
    $('#about').waypoint(function() {
        $('.feature img').addClass('animated bounceInUp').css('display', 'block');
    }, { offset: 100 });

    $('#pricing').waypoint(function() {
        $('.plan').addClass('animated bounceIn');
    }, { offset: 150 });

    $('.plan').waypoint(function() {
        $('.circle .icon-like').addClass('animated bounceIn');
    }, { offset: 0 });






    /* -- Magnific Popup (Responsive Lightbox)
     -- src: www.dimsemenov.com/plugins/magnific-popup
     ---------------------------- */

    $(document).ready(function() {
        $('.lightbox').magnificPopup({
            type: 'image',

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 100,
            mainClass: 'my-mfp-slide-bottom',

            image: {
                verticalFit: true
            }
        });

        $('.modal-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#fullname',
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function() {
                    if($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#fullname';
                    }
                    $('#registerWithFacebook').click(function(){
                        Meteor.loginWithFacebook({
                            requestPermissions: ['email', 'user_birthday', 'user_location', 'public_profile', 'user_friends']
                        }, function () {

                            if (Meteor.loggingIn()) {
                            }
                            else{
                                var id = Meteor.user()._id;
                                var fbEmail = Meteor.user().services.facebook.email;
                                var fbName = Meteor.user().services.facebook.name;
                                var fbFirstName = Meteor.user().services.facebook.first_name;
                                var fbLastName = Meteor.user().services.facebook.last_name;
                                var fbLink = Meteor.user().services.facebook.link;
                                console.log( id + "  " + fbEmail + "  " +  fbName + "  " +  fbFirstName + "  " +  fbLastName + " " + fbLink);
                                Meteor.call('AddFbInfo', id, fbEmail, fbName, fbFirstName, fbLastName, fbLink, function (error, results) {
                                    if (error) {
                                        return sweetAlert({
                                            title: "Uh Oh!",
                                            type: "error",
                                            text: "There was an error, all we know is : " + error
                                        });
                                    } else {
                                       $('.mfp-close').trigger('click');
                                         Router.go('/faq');
                                    }
                                });
                            }

                        });

                        //Meteor.setTimeout(function(){
                        //    var id = Meteor.user()._id;
                        //    var fbEmail = Meteor.user().services.facebook.email;
                        //    var fbName = Meteor.user().services.facebook.name;
                        //    var fbFirstName = Meteor.user().services.facebook.first_name;
                        //    var fbLastName = Meteor.user().services.facebook.last_name;
                        //    var fbLink = Meteor.user().services.facebook.link;
                        //    console.log( id + "  " + fbEmail + "  " +  fbName + "  " +  fbFirstName + "  " +  fbLastName + " " + fbLink);
                        //    Meteor.call('AddFbInfo', id, fbEmail, fbName, fbFirstName, fbLastName, fbLink,function (error, results) {
                        //        if (error) {
                        //            return sweetAlert({
                        //                title: "Uh Oh!",
                        //                type: "error",
                        //                text: "There was an error, all we know is : " + error
                        //            });
                        //        } else {
                        //            window.location.reload();
                        //            Router.go('/email');
                        //        }
                        //    });
                        //
                        //},1000);
                    }); // wnd register with facebook

                    $('#submitSignup').click(function (e) {
                        $('#submitSignup').css('display', 'none');
                        e.preventDefault();
                        var name = $('#registerName').val();
                        var email = $('#registerEmail').val();
                        var password = $('#registerPassword').val();
                        var nameArray = name.split(" ");
                        var firstName = nameArray[0];
                            if (nameArray.length>2) {
                                var lastName = nameArray[1]+" "+nameArray[2];
                            } else {
                                lastName = nameArray[1];
                            }

                        console.log(firstName);
                        console.log(lastName);
                        if ((name != "" && email != "" && password != "")) {
                            Accounts.createUser({email: email, password : password, role: 'free'}, function(err){
                                if (err) {
                                    // Inform the user that account creation failed
                                } else {
                                    // Success. Account has been created and the user
                                    // has logged in successfully.

                               }
                            });

                            Meteor.setTimeout(function () {
                                var name = $('#registerName').val();
                                var nameArray = name.split(" ");
                                var firstName = nameArray[0];
                                if (nameArray.length>2) {
                                    var lastName = nameArray[1]+" "+nameArray[2];
                                } else {
                                    lastName = nameArray[1];
                                }
                                Meteor.call('AddProfile', firstName, lastName, function (e,r) {
                                    if (e) {
                                        
                                        $('#submitSignup').css('display', 'inline');
                                    }
                                    if (r) {
                                        $('.mfp-close').trigger('click');
                                        
                                        $('#submitSignup').css('display', 'inline');
                                        Router.go('/faq');
                                    }
                                });

                            },500);
                        }
                        
                         Meteor.setTimeout(function () {
                            $('#submitSignup').css('display', 'inline');
                         }, 1200);
                    });// wnd register with password

                    $('#submitLogin').click(function (e){
                        e.preventDefault();
                        var email = $('#loginEmail').value
                            , password = $('#loginPassword').value;

                        // Trim and validate your fields here....

                        // If validation passes, supply the appropriate fields to the
                        // Meteor.loginWithPassword() function.
                        Meteor.loginWithPassword(email, password, function(err){
                            if (err) {
                                // The user might not have been found, or their passwword
                                // could be incorrect. Inform the user that their
                                // login attempt has failed.
                                sweetAlert("Error!", err + "Please try again.", "error");
                            } else {
                                // The user has been logged in.
                                if (Meteor.user().roles === "free") {
                                    Router.go('/faq');
                                }
                            }

                        });
                    }); // end submit login w password
                    $('#loginWithFacebook').click(function (e){
                        e.preventDefault();
                        Meteor.loginWithFacebook({
                            requestPermissions: ['email', 'user_birthday', 'user_location', 'public_profile', 'user_friends']
                        }, function () {

                            if (Meteor.loggingIn()) {
                            }
                            else{
                                if (Meteor.user().roles === "free") {
                                    Router.go('/faq');
                                }
                            }

                        });
                    });// end login with facebook
                }
            }
        });

    });





    /* -- Bootstrap Popover
     ---------------------------- */
    $(function(){
        $('.login').popover({
            html: true,
            placement: "bottom",
            trigger: "click",
            content: function() {
                return $('#login-form').html();
            }
        });
    });




    /* -- jQuery Knobs
     -- src: https://github.com/aterrien/jQuery-Knob
     ---------------------------- */

    $(function() {
        $(".dial").knob();
    });





    /* -- Bxslider
     -- src: www.bxslider.com
     ---------------------------- */

    $(function(){

        $('.featuredSlider').bxSlider({
            auto: true,
            autoControls: false,
            mode: 'fade',
            easing: 'linear',
            pager: false,
            controls: false,
            speed: 150,
            pause: 5000
        });

    });




    /* -- Sticky Animated Header
     ---------------------------- */

    var header = $('header')
    var logo = $('.logo')
    var navmenu = $('header .nav-menu')

    $(window).scroll(function(e){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 50 ){
            header.stop().animate({height:"111px", backgroundColor: "#87d4d0", queue: false}, 300, 'linear');
        }
        else{
            header.stop().animate({height:"100px", backgroundColor: "none", queue: false}, 300, 'linear');
        }
    });

    function animateHeader() {
        siteHeader = $("header");
        siteHeaderHeight = siteHeader.outerHeight();

        if(siteHeader.offset().top > siteHeaderHeight){
            siteHeader.removeClass("transparent");
        }
        else{
            siteHeader.addClass("transparent");
        }
    }

    animateHeader();

    $(window).scroll(function(){
        animateHeader();
    });





    /* -- Page Slider
     -- src: https://github.com/davist11/jQuery-One-Page-Nav
     ---------------------------- */


    $(document).ready(function() {

        var $nav = $('header nav');
        var $nav2 = $('.nav2');

        $nav.onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 750,
            scrollOffset: 70,
            scrollThreshold: 0.1,
            filter: '',
            easing: 'swing',
            begin: function() {
                //I get fired when the animation is starting
            },
            end: function() {
                //I get fired when the animation is ending
            },
            scrollChange: function($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
            }
        });

        $nav2.on('click', 'a', function(e) {
            var currentPos = $(this).parent().prevAll().length;
            $nav.find('li').eq(currentPos).children('a').trigger('click');
            e.preventDefault();
        });


    });





    /* -- Teaser Form (Coming soon page)
     ---------------------------- */

    $(function(){
        $('.teaser-signup .lead').click(function(){
            $(this).hide();
            $('.teaser-signup form').show();
            return false;
        });
    });





    /* -- Smooth Scroll to Top
     ------------------------- */

    $(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup, .logo').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    });




    /* -- Full Screen Viewport Container
     ---------------------------- */

    $(function () {

        // Set Initial Screen Dimensions

        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";

        $("#home").css({
            width: screenWidth,
            height: screenHeight
        });

        // Every time the window is resized...

        $(window).resize( function () {

            // Fetch Screen Dimensions

            var screenWidth = $(window).width() + "px";
            var screenHeight = $(window).height() + "px";

            // Set Slides to new Screen Dimensions

            $("#home").css({
                width: screenWidth,
                height: screenHeight
            });

        });

    });

    /* -- Smooth Scroll to Specific Anchor
     -- src: https://github.com/kswedberg/jquery-smooth-scroll
     ------------------------- */

    $('a.scroll').smoothScroll({
        offset: -80,

        // one of 'top' or 'left'
        direction: 'top',

        // only use if you want to override default behavior
        scrollTarget: null,

        // fn(opts) function to be called before scrolling occurs.
        // `this` is the element(s) being scrolled
        beforeScroll: function() {},

        // fn(opts) function to be called after scrolling occurs.
        // `this` is the triggering element
        afterScroll: function() {},
        easing: 'swing',
        speed: 400,

        // coefficient for "auto" speed
        autoCoefficent: 2

    });


    /* -- NaturaL Language Hero Form
     -- src: http://tympanus.net/codrops/2013/05/21/natural-language-form-with-custom-input-elements/
     ---------------------------- */
    $(function () {

        var nlform = new NLForm( document.getElementById( 'nl-form' ) );

    });
    // <![CDATA[
    $(window).load(function() { $("#preloader").fadeOut("fast"); });
    // ]]>

}); // end meteor defer

    Meteor.setTimeout(function(){
        $("#preloader").fadeOut("fast");
    },2000);
};


Template.home.events({
    'click #registerWithFacebook' : function (e,t) {
        e.preventDefault();

        Meteor.loginWithFacebook({
            requestPermissions: ['email', 'user_birthday', 'user_location', 'public_profile', 'user_friends']
        }, function () {

            if (Meteor.loggingIn()) {
            }
            else{
                alert("logged in");
            }

        });

        Meteor.setTimeout(function(){
            var id = Meteor.user()._id;
            var fbEmail = Meteor.user().services.facebook.email;
            var fbName = Meteor.user().services.facebook.name;
            var fbFirstName = Meteor.user().services.facebook.first_name;
            var fbLastName = Meteor.user().services.facebook.last_name;
            var fbLink = Meteor.user().services.facebook.link;
            console.log( id + "  " + fbEmail + "  " +  fbName + "  " +  fbFirstName + "  " +  fbLastName + " " + fbLink);
            Meteor.call('AddFbInfo', id, fbEmail, fbName, fbFirstName, fbLastName, fbLink,function (error, results) {
                if (error) {
                    return sweetAlert({
                        title: "Uh Oh!",
                        type: "error",
                        text: "There was an error, all we know is : " + error
                    });
                } 
                if (results) {
                    sweetAlert({
                        title: "All Set!",
                        text: "You're registered",
                        imageUrl: "img/camera.gif",
                        timer: 1000
                    });
                    console.log('going to faq');
                }
            });

        },800);

        Meteor.setTimeout(function () {
            Router.go('/faq');
        },5000);
    },

    'submit #user-form' : function(e, t) {
       
        e.preventDefault();
        // retrieve the input field values
        var email = t.find('#loginEmail').value
            , password = t.find('#loginPassword').value;
            

        $('body').removeClass("noscroll");

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
            if (err) {
                // The user might not have been found, or their passwword
                // could be incorrect. Inform the user that their
                // login attempt has failed.
                sweetAlert("Error!", err + "Please try again.", "error");
            } else {
                // The user has been logged in.
                if (Meteor.user().roles === "free") {
                    Router.go('/faq');
                }
            }

        });
        return false;
    },
    'click #submitLogin' : function(e, t) {
        console.log('clicked user form');
        e.preventDefault();
        // retrieve the input field values
        var email = $('#loginEmail').val();
        var password = $('#loginPassword').val();
        $('body').removeClass("noscroll");
        // Trim and validate your fields here....
        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
            if (err) {
                // The user might not have been found, or their passwword
                // could be incorrect. Inform the user that their
                // login attempt has failed.
                sweetAlert("Error!", err + "Please try again.", "error");
            } else {
                // The user has been logged in.
                if (Meteor.user().roles === "free") {
                    Router.go('/faq');
                }
            }

        });
        return false;
    },
    'click #openSignup': function (e,t) {
        $('.modal-form').trigger('click');
    },

    //********This is being done above, was causing duplicate emails sent.********* 

    // 'submit #signup-form' : function(e, t) {
    //     e.preventDefault();
    //     var email = t.find('#registerEmail').value,
    //         password = t.find('#registerPassword').value,
    //         name = t.find("#registerName").value;

    //     // Trim and validate the input

    //     Accounts.createUser({email: email, password : password, name: name, role: 'free'}, function(err){
    //         if (err) {
    //             // Inform the user that account creation failed
    //         } else {
    //             // Success. Account has been created and the user
    //             // has logged in successfully.
    //             alert("logged in");
    //             Router.go('/faq');
    //             console.log('signupForm');
    //         }

    //     });

        
    //     return false;
    // },
    'click #just-verified-dismiss-button': function (e,t) {
        Router.go('/faq');
        alert('clicked');
    },
    //'click .accounts-dialog .accounts-centered-dialog'
    'click #loginWithFacebook' : function (e,t) {

        Meteor.loginWithFacebook({
            requestPermissions: ['email', 'user_birthday', 'user_location', 'public_profile', 'user_friends']
        }, function () {

            if (Meteor.loggingIn()) {
            }
            else{
                // The user has been logged in.
                if (Meteor.user().roles === "free") {
                    Router.go('/faq');
                    console.log('loginWithFacebook');
                }
            }

        });
    },
    'click .mfp-content': function (e,t) {
        alert('clicked');
    },
    'click .login-button': function (e,t) {
        Router.go('/faq');
    },
    'click #just-verified-dismiss-button': function (e,t) {
        Router.go('/faq');
    },
    'click #sendEmail': function (e,t) {
        e.preventDefault();
        var txt = $('#textArea').val();
        var email = $('#messageEmail').val();
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        function replaceAll(find, replace, str) {
          return str.replace(new RegExp(find, 'g'), replace);
        }

        if (email.match(re)) {
                
            var message1 = replaceAll("'", " ", txt);
            var message2 = replaceAll('/', " ", message1);
            var message3 = replaceAll("'", " ", message2);

            Meteor.call('sendEmailContact', message3, email, function(e,r) {
                if (e) {
                    Notifications.error('Mesage Error: ' + e); 
                }
                Notifications.success('Mesage Sent');
            });
        } else {
            Notifications.error('Invalid Email Address'); 
        }

        
    }
});

Meteor.setTimeout(function () {
    Meteor.defer(function () {
        $( document ).ready(function () {
            console.log('ready');
            $('#loginWithFacebook').click(function () {
                alert('clicked');
                console.log('clicked');
            });
        });
        Template.home.rendered = function () {
            Template.home.events({
                'click #registerWithFacebook': function (e,t) {
                    console.log('clicked register');
                },
                'click #loginWithFacebook': function (e,t) {
                    console.log('clicked login');
                }
            });
        }
    });
}, 2000);


