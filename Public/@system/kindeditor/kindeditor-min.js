var kindeditor = {};
var kindeditor_item0 = ["source","undo", "redo", "|", "preview", "print", "template", "cut", "copy", "paste", "plainpaste", "wordpaste", "code", "|", "justifyleft", "justifycenter", "justifyright", "justifyfull", "insertorderedlist", "insertunorderedlist", "indent", "outdent", "subscript", "superscript", "clearhtml", "quickformat", "selectall", "|","/", "formatblock", "fontname", "fontsize", "|", "forecolor", "hilitecolor", "bold", "italic", "underline", "strikethrough", "lineheight", "removeformat", "image", "flash", "media", "insertfile", "table", "hr", "emoticons", "map", "pagebreak", "anchor", "link", "unlink","about","fullscreen"];
var kindeditor_item1 = ["source","undo", "redo", "|", "preview", "print", "template", "cut", "copy", "paste", "plainpaste", "wordpaste", "code", "|", "justifyleft", "justifycenter", "justifyright", "justifyfull", "insertorderedlist", "insertunorderedlist", "indent", "outdent", "subscript", "superscript", "clearhtml", "quickformat", "selectall", "|","/", "formatblock", "fontname", "fontsize", "|", "forecolor", "hilitecolor", "bold", "italic", "underline", "strikethrough", "lineheight", "removeformat", "image", "flash", "media", "insertfile", "table", "hr", "emoticons", "map", "pagebreak", "anchor", "link", "unlink","about","fullscreen"];
var kindeditor_item2 = ["source","undo", "redo", "|", "preview", "print", "template", "cut", "copy", "paste", "plainpaste", "wordpaste", "code", "|", "justifyleft", "justifycenter", "justifyright", "justifyfull", "insertorderedlist", "insertunorderedlist", "indent", "outdent", "subscript", "superscript", "clearhtml", "quickformat", "selectall", "|","/", "formatblock", "fontname", "fontsize", "|", "forecolor", "hilitecolor", "bold", "italic", "underline", "strikethrough", "lineheight", "removeformat", "image", "flash", "media", "insertfile", "table", "hr", "emoticons", "map", "pagebreak", "anchor", "link", "unlink","about","fullscreen"];
var kindeditor_item3 = ["source","undo", "redo", "|", "preview", "print", "template", "cut", "copy", "paste", "plainpaste", "wordpaste", "code", "|", "justifyleft", "justifycenter", "justifyright", "justifyfull", "insertorderedlist", "insertunorderedlist", "indent", "outdent", "subscript", "superscript", "clearhtml", "quickformat", "selectall", "|","/", "formatblock", "fontname", "fontsize", "|", "forecolor", "hilitecolor", "bold", "italic", "underline", "strikethrough", "lineheight", "removeformat", "image", "flash", "media", "insertfile", "table", "hr", "emoticons", "map", "pagebreak", "anchor", "link", "unlink","about","fullscreen"];
(function(B, l) {
    function ba(a) {
        if (!a) return ! 1;
        return Object.prototype.toString.call(a) === "[object Array]"
    }
    function Ya(a) {
        if (!a) return ! 1;
        return Object.prototype.toString.call(a) === "[object Function]"
    }
    function M(a, b) {
        for (var c = 0,
        d = b.length; c < d; c++) if (a === b[c]) return c;
        return - 1
    }
    function k(a, b) {
        if (ba(a)) for (var c = 0,
        d = a.length; c < d; c++) {
            if (b.call(a[c], c, a[c]) === !1) break
        } else for (c in a) if (a.hasOwnProperty(c) && b.call(a[c], c, a[c]) === !1) break
    }
    function C(a) {
        return a.replace(/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, "")
    }
    function ka(a, b, c) {
        c = c === l ? ",": c;
        return (c + b + c).indexOf(c + a + c) >= 0
    }
    function r(a) {
        return a && /^\d+$/.test(a) ? a + "px": a
    }
    function t(a) {
        var b;
        return a && (b = /(\d+)/.exec(a)) ? parseInt(b[1], 10) : 0
    }
    function E(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }
    function ca(a) {
        var b = a.split("-"),
        a = "";
        k(b,
        function(b, d) {
            a += b > 0 ? d.charAt(0).toUpperCase() + d.substr(1) : d
        });
        return a
    }
    function la(a) {
        function b(a) {
            a = parseInt(a, 10).toString(16).toUpperCase();
            return a.length > 1 ? a: "0" + a
        }
        return a.replace(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/ig,
        function(a, d, e, f) {
            return "#" + b(d) + b(e) + b(f)
        })
    }
    function u(a, b) {
        var b = b === l ? ",": b,
        c = {},
        d = ba(a) ? a: a.split(b),
        e;
        k(d,
        function(a, b) {
            if (e = /^(\d+)\.\.(\d+)$/.exec(b)) for (var d = parseInt(e[1], 10); d <= parseInt(e[2], 10); d++) c[d.toString()] = !0;
            else c[b] = !0
        });
        return c
    }
    function Ba(a, b) {
        return Array.prototype.slice.call(a, b || 0)
    }
    function n(a, b) {
        return a === l ? b: a
    }
    function F(a, b, c) {
        c || (c = b, b = null);
        var d;
        if (b) {
            var e = function() {};
            e.prototype = b.prototype;
            d = new e;
            k(c,
            function(a, b) {
                d[a] = b
            })
        } else d = c;
        d.constructor = a;
        a.prototype = d;
        a.parent = b ? b.prototype: null
    }
    function Za(a) {
        var b;
        if (b = /\{[\s\S]*\}|\[[\s\S]*\]/.exec(a)) a = b[0];
        b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        b.lastIndex = 0;
        b.test(a) && (a = a.replace(b,
        function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return eval("(" + a + ")");
        throw "JSON parse error";
    }
    function Lb(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, $a) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    function ma(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, $a) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    function ab(a, b) {
        this.init(a, b)
    }
    function bb(a) {
        try {
            delete a[V]
        } catch(b) {
            a.removeAttribute && a.removeAttribute(V)
        }
    }
    function W(a, b, c) {
        if (b.indexOf(",") >= 0) k(b.split(","),
        function() {
            W(a, this, c)
        });
        else {
            var d = a[V] || null;
            d || (a[V] = ++cb, d = cb);
            v[d] === l && (v[d] = {});
            var e = v[d][b];
            e && e.length > 0 ? ma(a, b, e[0]) : (v[d][b] = [], v[d].el = a);
            e = v[d][b];
            e.length === 0 && (e[0] = function(b) {
                var c = b ? new ab(a, b) : l;
                k(e,
                function(b, d) {
                    b > 0 && d && d.call(a, c)
                })
            });
            M(c, e) < 0 && e.push(c);
            Lb(a, b, e[0])
        }
    }
    function da(a, b, c) {
        if (b && b.indexOf(",") >= 0) k(b.split(","),
        function() {
            da(a, this, c)
        });
        else {
            var d = a[V] || null;
            if (d) if (b === l) d in v && (k(v[d],
            function(b, c) {
                b != "el" && c.length > 0 && ma(a, b, c[0])
            }), delete v[d], bb(a));
            else if (v[d]) {
                var e = v[d][b];
                if (e && e.length > 0) {
                    c === l ? (ma(a, b, e[0]), delete v[d][b]) : (k(e,
                    function(a, b) {
                        a > 0 && b === c && e.splice(a, 1)
                    }), e.length == 1 && (ma(a, b, e[0]), delete v[d][b]));
                    var f = 0;
                    k(v[d],
                    function() {
                        f++
                    });
                    f < 2 && (delete v[d], bb(a))
                }
            }
        }
    }
    function db(a, b) {
        if (b.indexOf(",") >= 0) k(b.split(","),
        function() {
            db(a, this)
        });
        else {
            var c = a[V] || null;
            if (c) {
                var d = v[c][b];
                if (v[c] && d && d.length > 0) d[0]()
            }
        }
    }
    function Ca(a, b, c) {
        b = /^\d{2,}$/.test(b) ? b: b.toUpperCase().charCodeAt(0);
        W(a, "keydown",
        function(d) {
            d.ctrlKey && d.which == b && !d.shiftKey && !d.altKey && (c.call(a), d.stop())
        })
    }
    function ea(a) {
        for (var b = {},
        c = /\s*([\w\-]+)\s*:([^;]*)(;|$)/g,
        d; d = c.exec(a);) {
            var e = C(d[1].toLowerCase());
            d = C(la(d[2]));
            b[e] = d
        }
        return b
    }
    function K(a) {
        for (var b = {},
        c = /\s+(?:([\w\-:]+)|(?:([\w\-:]+)=([^\s"'<>]+))|(?:([\w\-:"]+)="([^"]*)")|(?:([\w\-:"]+)='([^']*)'))(?=(?:\s|\/|>)+)/g,
        d; d = c.exec(a);) {
            var e = (d[1] || d[2] || d[4] || d[6]).toLowerCase();
            b[e] = (d[2] ? d[3] : d[4] ? d[5] : d[7]) || ""
        }
        return b
    }
    function Mb(a, b) {
        return a = /\s+class\s*=/.test(a) ? a.replace(/(\s+class=["']?)([^"']*)(["']?[\s>])/,
        function(a, d, e, f) {
            return (" " + e + " ").indexOf(" " + b + " ") < 0 ? e === "" ? d + b + f: d + e + " " + b + f: a
        }) : a.substr(0, a.length - 1) + ' class="' + b + '">'
    }
    function Nb(a) {
        var b = "";
        k(ea(a),
        function(a, d) {
            b += a + ":" + d + ";"
        });
        return b
    }
    function na(a, b, c, d) {
        function e(a) {
            for (var a = a.split("/"), b = [], c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                e == ".." ? b.length > 0 && b.pop() : e !== "" && e != "." && b.push(e)
            }
            return "/" + b.join("/")
        }
        function f(b, c) {
            if (a.substr(0, b.length) === b) {
                for (var e = [], g = 0; g < c; g++) e.push("..");
                g = ".";
                e.length > 0 && (g += "/" + e.join("/"));
                d == "/" && (g += "/");
                return g + a.substr(b.length)
            } else if (h = /^(.*)\//.exec(b)) return f(h[1], ++c)
        }
        b = n(b, "").toLowerCase();
        if (M(b, ["absolute", "relative", "domain"]) < 0) return a;
        c = c || location.protocol + "//" + location.host;
        if (d === l) var g = location.pathname.match(/^(\/.*)\//),
        d = g ? g[1] : "";
        var h;
        if (h = /^(\w+:\/\/[^\/]*)/.exec(a)) {
            if (h[1] !== c) return a
        } else if (/^\w+:/.test(a)) return a;
        /^\//.test(a) ? a = c + e(a.substr(1)) : /^\w+:\/\//.test(a) || (a = c + e(d + "/" + a));
        b === "relative" ? a = f(c + d, 0).substr(2) : b === "absolute" && a.substr(0, c.length) === c && (a = a.substr(c.length));
        return a
    }
    function Q(a, b, c, d, e) {
        var c = c || "",
        d = n(d, !1),
        e = n(e, "\t"),
        f = "xx-small,x-small,small,medium,large,x-large,xx-large".split(","),
        a = a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig,
        function(a, b, c, d) {
            return b + c.replace(/<(?:br|br\s[^>]*)>/ig, "\n") + d
        }),
        a = a.replace(/<(?:br|br\s[^>]*)\s*\/?>\s*<\/p>/ig, "</p>"),
        a = a.replace(/(<(?:p|p\s[^>]*)>)\s*(<\/p>)/ig, "$1<br />$2"),
        a = a.replace(/\u200B/g, ""),
        g = {};
        b && (k(b,
        function(a, b) {
            for (var c = a.split(","), d = 0, e = c.length; d < e; d++) g[c[d]] = u(b)
        }), g.script || (a = a.replace(/(<(?:script|script\s[^>]*)>)([\s\S]*?)(<\/script>)/ig, "")), g.style || (a = a.replace(/(<(?:style|style\s[^>]*)>)([\s\S]*?)(<\/style>)/ig, "")));
        var h = [],
        a = a.replace(/(\s*)<(\/)?([\w\-:]+)((?:\s+|(?:\s+[\w\-:]+)|(?:\s+[\w\-:]+=[^\s"'<>]+)|(?:\s+[\w\-:"]+="[^"]*")|(?:\s+[\w\-:"]+='[^']*'))*)(\/)?>(\s*)/g,
        function(a, m, p, z, A, s, q) {
            var m = m || "",
            p = p || "",
            w = z.toLowerCase(),
            l = A || "",
            z = s ? " " + s: "",
            q = q || "";
            if (b && !g[w]) return "";
            z === "" && eb[w] && (z = " /");
            fb[w] && (m && (m = " "), q && (q = " "));
            Da[w] && (p ? q = "\n": m = "\n");
            d && w == "br" && (q = "\n");
            if (gb[w] && !Da[w]) if (d) {
                p && h.length > 0 && h[h.length - 1] === w ? h.pop() : h.push(w);
                q = m = "\n";
                A = 0;
                for (s = p ? h.length: h.length - 1; A < s; A++) m += e,
                p || (q += e);
                z ? h.pop() : p || (q += e)
            } else m = q = "";
            if (l !== "") {
                var n = K(a);
                if (w === "font") {
                    var o = {},
                    H = "";
                    k(n,
                    function(a, b) {
                        if (a === "color") o.color = b,
                        delete n[a];
                        a === "size" && (o["font-size"] = f[parseInt(b, 10) - 1] || "", delete n[a]);
                        a === "face" && (o["font-family"] = b, delete n[a]);
                        a === "style" && (H = b)
                    });
                    H && !/;$/.test(H) && (H += ";");
                    k(o,
                    function(a, b) {
                        b !== "" && (/\s/.test(b) && (b = "'" + b + "'"), H += a + ":" + b + ";")
                    });
                    n.style = H
                }
                k(n,
                function(a, d) {
                    Ob[a] && (n[a] = a);
                    M(a, ["src", "href"]) >= 0 && (n[a] = na(d, c)); (b && a !== "style" && !g[w]["*"] && !g[w][a] || w === "body" && a === "contenteditable" || /^kindeditor_\d+$/.test(a)) && delete n[a];
                    if (a === "style" && d !== "") {
                        var e = ea(d);
                        k(e,
                        function(a) {
                            b && !g[w].style && !g[w]["." + a] && delete e[a]
                        });
                        var f = "";
                        k(e,
                        function(a, b) {
                            f += a + ":" + b + ";"
                        });
                        n.style = f
                    }
                });
                l = "";
                k(n,
                function(a, b) {
                    a === "style" && b === "" || (l += " " + a + '="' + b + '"')
                })
            }
            w === "font" && (w = "span");
            return m + "<" + p + w + l + z + ">" + q
        }),
        a = a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig,
        function(a, b, c, d) {
            return b + c.replace(/\n/g, '<span id="__kindeditor_pre_newline__">\n') + d
        }),
        a = a.replace(/\n\s*\n/g, "\n"),
        a = a.replace(/<span id="__kindeditor_pre_newline__">\n/g, "\n");
        return C(a)
    }
    function hb(a, b) {
        a = a.replace(/<meta[\s\S]*?>/ig, "").replace(/<![\s\S]*?>/ig, "").replace(/<style[^>]*>[\s\S]*?<\/style>/ig, "").replace(/<script[^>]*>[\s\S]*?<\/script>/ig, "").replace(/<w:[^>]+>[\s\S]*?<\/w:[^>]+>/ig, "").replace(/<o:[^>]+>[\s\S]*?<\/o:[^>]+>/ig, "").replace(/<xml>[\s\S]*?<\/xml>/ig, "").replace(/<(?:table|td)[^>]*>/ig,
        function(a) {
            return a.replace(/border-bottom:([#\w\s]+)/ig, "border:$1")
        });
        return Q(a, b)
    }
    function ib(a) {
        if (/\.(rm|rmvb)(\?|$)/i.test(a)) return "audio/x-pn-realaudio-plugin";
        if (/\.(swf|flv)(\?|$)/i.test(a)) return "application/x-shockwave-flash";
        return "video/x-ms-asf-plugin"
    }
    function jb(a) {
        return K(unescape(a))
    }
    function Ea(a) {
        var b = "<embed ";
        k(a,
        function(a, d) {
            b += a + '="' + d + '" '
        });
        b += "/>";
        return b
    }
    function kb(a, b) {
        var c = b.width,
        d = b.height,
        e = b.type || ib(b.src),
        f = Ea(b),
        g = "";
        c > 0 && (g += "width:" + c + "px;");
        d > 0 && (g += "height:" + d + "px;");
        c = /realaudio/i.test(e) ? "ke-rm": /flash/i.test(e) ? "ke-flash": "ke-media";
        c = '<img class="' + c + '" src="' + a + '" ';
        g !== "" && (c += 'style="' + g + '" ');
        c += 'data-ke-tag="' + escape(f) + '" alt="" />';
        return c
    }
    function pa(a, b) {
        if (a.nodeType == 9 && b.nodeType != 9) return ! 0;
        for (; b = b.parentNode;) if (b == a) return ! 0;
        return ! 1
    }
    function qa(a, b) {
        var b = b.toLowerCase(),
        c = null;
        if (o && G < 8 && a.nodeName.toLowerCase() != "script") {
            var d = a.ownerDocument.createElement("div");
            d.appendChild(a.cloneNode(!1));
            d = K(d.innerHTML.toLowerCase());
            b in d && (c = d[b])
        } else try {
            c = a.getAttribute(b, 2)
        } catch(e) {
            c = a.getAttribute(b, 1)
        }
        b === "style" && c !== null && (c = Nb(c));
        return c
    }
    function ra(a, b) {
        function c(a) {
            if (typeof a != "string") return a;
            return a.replace(/([^\w\-])/g, "\\$1")
        }
        function d(a, b) {
            return a === "*" || a.toLowerCase() === c(b.toLowerCase())
        }
        function e(a, b, c) {
            var e = []; (a = (c.ownerDocument || c).getElementById(a.replace(/\\/g, ""))) && d(b, a.nodeName) && pa(c, a) && e.push(a);
            return e
        }
        function f(a, b, c) {
            var e = c.ownerDocument || c,
            g = [],
            j,
            h,
            i;
            if (c.getElementsByClassName) {
                e = c.getElementsByClassName(a.replace(/\\/g, ""));
                j = 0;
                for (h = e.length; j < h; j++) i = e[j],
                d(b, i.nodeName) && g.push(i)
            } else if (e.querySelectorAll) {
                e = e.querySelectorAll((c.nodeName !== "#document" ? c.nodeName + " ": "") + b + "." + a);
                j = 0;
                for (h = e.length; j < h; j++) i = e[j],
                pa(c, i) && g.push(i)
            } else {
                e = c.getElementsByTagName(b);
                a = " " + a + " ";
                j = 0;
                for (h = e.length; j < h; j++) if (i = e[j], i.nodeType == 1)(b = i.className) && (" " + b + " ").indexOf(a) > -1 && g.push(i)
            }
            return g
        }
        function g(a, b, d, e) {
            for (var f = [], d = e.getElementsByTagName(d), g = 0, j = d.length; g < j; g++) e = d[g],
            e.nodeType == 1 && (b === null ? qa(e, a) !== null && f.push(e) : b === c(qa(e, a)) && f.push(e));
            return f
        }
        function h(a, b) {
            var c = [],
            j,
            h = (j = /^((?:\\.|[^.#\s\[<>])+)/.exec(a)) ? j[1] : "*";
            if (j = /#((?:[\w\-]|\\.)+)$/.exec(a)) c = e(j[1], h, b);
            else if (j = /\.((?:[\w\-]|\\.)+)$/.exec(a)) c = f(j[1], h, b);
            else if (j = /\[((?:[\w\-]|\\.)+)\]/.exec(a)) c = g(j[1].toLowerCase(), null, h, b);
            else if (j = /\[((?:[\w\-]|\\.)+)\s*=\s*['"]?((?:\\.|[^'"]+)+)['"]?\]/.exec(a)) {
                c = j[1].toLowerCase();
                j = j[2];
                if (c === "id") h = e(j, h, b);
                else if (c === "class") h = f(j, h, b);
                else if (c === "name") {
                    c = [];
                    j = (b.ownerDocument || b).getElementsByName(j.replace(/\\/g, ""));
                    for (var m, p = 0,
                    q = j.length; p < q; p++) m = j[p],
                    d(h, m.nodeName) && pa(b, m) && m.getAttributeNode("name") && c.push(m);
                    h = c
                } else h = g(c, j, h, b);
                c = h
            } else {
                h = b.getElementsByTagName(h);
                m = 0;
                for (p = h.length; m < p; m++) j = h[m],
                j.nodeType == 1 && c.push(j)
            }
            return c
        }
        var j = a.split(",");
        if (j.length > 1) {
            var m = [];
            k(j,
            function() {
                k(ra(this, b),
                function() {
                    M(this, m) < 0 && m.push(this)
                })
            });
            return m
        }
        for (var b = b || document,
        j = [], p, z = /((?:\\.|[^\s>])+|[\s>])/g; p = z.exec(a);) p[1] !== " " && j.push(p[1]);
        p = [];
        if (j.length == 1) return h(j[0], b);
        var z = !1,
        A, s, q, n, l, o, oa, H, r, t;
        o = 0;
        for (lenth = j.length; o < lenth; o++) if (A = j[o], A === ">") z = !0;
        else {
            if (o > 0) {
                s = [];
                oa = 0;
                for (r = p.length; oa < r; oa++) {
                    n = p[oa];
                    q = h(A, n);
                    H = 0;
                    for (t = q.length; H < t; H++) l = q[H],
                    z ? n === l.parentNode && s.push(l) : s.push(l)
                }
                p = s
            } else p = h(A, b);
            if (p.length === 0) return []
        }
        return p
    }
    function X(a) {
        if (!a) return document;
        return a.ownerDocument || a.document || a
    }
    function R(a) {
        if (!a) return B;
        a = X(a);
        return a.parentWindow || a.defaultView
    }
    function Pb(a, b) {
        if (a.nodeType == 1) {
            var c = X(a);
            try {
                a.innerHTML = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + b;
                var d = c.getElementById("__kindeditor_temp_tag__");
                d.parentNode.removeChild(d)
            } catch(e) {
                f(a).empty(),
                f("@" + b, c).each(function() {
                    a.appendChild(this)
                })
            }
        }
    }
    function Fa(a, b, c) {
        o && G < 8 && b.toLowerCase() == "class" && (b = "className");
        a.setAttribute(b, "" + c)
    }
    function Ga(a) {
        if (!a || !a.nodeName) return "";
        return a.nodeName.toLowerCase()
    }
    function Qb(a, b) {
        var c = R(a),
        d = ca(b),
        e = "";
        c.getComputedStyle ? (c = c.getComputedStyle(a, null), e = c[d] || c.getPropertyValue(b) || a.style[d]) : a.currentStyle && (e = a.currentStyle[d] || a.style[d]);
        return e
    }
    function I(a) {
        a = a || document;
        return S ? a.body: a.documentElement
    }
    function fa(a) {
        var a = a || document,
        b;
        o || Ha ? (b = I(a).scrollLeft, a = I(a).scrollTop) : (b = R(a).scrollX, a = R(a).scrollY);
        return {
            x: b,
            y: a
        }
    }
    function J(a) {
        this.init(a)
    }
    function lb(a) {
        a.collapsed = a.startContainer === a.endContainer && a.startOffset === a.endOffset;
        return a
    }
    function Ia(a, b, c) {
        function d(d, e, f) {
            var g = d.nodeValue.length,
            j;
            b && (j = d.cloneNode(!0), j = e > 0 ? j.splitText(e) : j, f < g && j.splitText(f - e));
            if (c) {
                var i = d;
                e > 0 && (i = d.splitText(e), a.setStart(d, e));
                f < g && (d = i.splitText(f - e), a.setEnd(d, 0));
                h.push(i)
            }
            return j
        }
        function e() {
            c && a.up().collapse(!0);
            for (var b = 0,
            d = h.length; b < d; b++) {
                var e = h[b];
                e.parentNode && e.parentNode.removeChild(e)
            }
        }
        function f(e, q) {
            for (var l = e.firstChild,
            n; l;) {
                n = (new N(g)).selectNode(l);
                m = n.compareBoundaryPoints(ga, a);
                m >= 0 && p <= 0 && (p = n.compareBoundaryPoints(ha, a));
                p >= 0 && z <= 0 && (z = n.compareBoundaryPoints(Y, a));
                z >= 0 && k <= 0 && (k = n.compareBoundaryPoints(ia, a));
                if (k >= 0) return ! 1;
                n = l.nextSibling;
                if (m > 0) if (l.nodeType == 1) if (p >= 0 && z <= 0) b && q.appendChild(l.cloneNode(!0)),
                c && h.push(l);
                else {
                    var s;
                    b && (s = l.cloneNode(!1), q.appendChild(s));
                    if (f(l, s) === !1) return ! 1
                } else if (l.nodeType == 3 && (l = l == j.startContainer ? d(l, j.startOffset, l.nodeValue.length) : l == j.endContainer ? d(l, 0, j.endOffset) : d(l, 0, l.nodeValue.length), b)) try {
                    q.appendChild(l)
                } catch(o) {}
                l = n
            }
        }
        var g = a.doc,
        h = [],
        j = a.cloneRange().down(),
        m = -1,
        p = -1,
        z = -1,
        k = -1,
        s = a.commonAncestor(),
        q = g.createDocumentFragment();
        if (s.nodeType == 3) return s = d(s, a.startOffset, a.endOffset),
        b && q.appendChild(s),
        e(),
        b ? q: a;
        f(s, q);
        c && a.up().collapse(!0);
        for (var s = 0,
        n = h.length; s < n; s++) {
            var l = h[s];
            l.parentNode && l.parentNode.removeChild(l)
        }
        return b ? q: a
    }
    function ja(a, b) {
        for (var c = b; c;) {
            var d = f(c);
            if (d.name == "marquee" || d.name == "select") return;
            c = c.parentNode
        }
        try {
            a.moveToElementText(b)
        } catch(e) {}
    }
    function mb(a, b) {
        var c = a.parentElement().ownerDocument,
        d = a.duplicate();
        d.collapse(b);
        var e = d.parentElement(),
        i = e.childNodes;
        if (i.length === 0) return {
            node: e.parentNode,
            offset: f(e).index()
        };
        var g = c,
        h = 0,
        j = -1,
        m = a.duplicate();
        ja(m, e);
        for (var p = 0,
        l = i.length; p < l; p++) {
            var k = i[p],
            j = m.compareEndPoints("StartToStart", d);
            if (j === 0) return {
                node: k.parentNode,
                offset: p
            };
            if (k.nodeType == 1) {
                var n = a.duplicate(),
                q,
                o = f(k),
                r = k;
                o.isControl() && (q = c.createElement("span"), o.after(q), r = q, h += o.text().replace(/\r\n|\n|\r/g, "").length);
                ja(n, r);
                m.setEndPoint("StartToEnd", n);
                j > 0 ? h += n.text.replace(/\r\n|\n|\r/g, "").length: h = 0;
                q && f(q).remove()
            } else k.nodeType == 3 && (m.moveStart("character", k.nodeValue.length), h += k.nodeValue.length);
            j < 0 && (g = k)
        }
        if (j < 0 && g.nodeType == 1) return {
            node: e,
            offset: f(e.lastChild).index() + 1
        };
        if (j > 0) for (; g.nextSibling && g.nodeType == 1;) g = g.nextSibling;
        m = a.duplicate();
        ja(m, e);
        m.setEndPoint("StartToEnd", d);
        h -= m.text.replace(/\r\n|\n|\r/g, "").length;
        if (j > 0 && g.nodeType == 3) for (c = g.previousSibling; c && c.nodeType == 3;) h -= c.nodeValue.length,
        c = c.previousSibling;
        return {
            node: g,
            offset: h
        }
    }
    function nb(a, b) {
        var c = a.ownerDocument || a,
        d = c.body.createTextRange();
        if (c == a) return d.collapse(!0),
        d;
        if (a.nodeType == 1 && a.childNodes.length > 0) {
            var e = a.childNodes,
            i;
            b === 0 ? (i = e[0], e = !0) : (i = e[b - 1], e = !1);
            if (!i) return d;
            if (f(i).name === "head") return b === 1 && (e = !0),
            b === 2 && (e = !1),
            d.collapse(e),
            d;
            if (i.nodeType == 1) {
                var g = f(i),
                h;
                g.isControl() && (h = c.createElement("span"), e ? g.before(h) : g.after(h), i = h);
                ja(d, i);
                d.collapse(e);
                h && f(h).remove();
                return d
            }
            a = i;
            b = e ? 0 : i.nodeValue.length
        }
        c = c.createElement("span");
        f(a).before(c);
        ja(d, c);
        d.moveStart("character", b);
        f(c).remove();
        return d
    }
    function ob(a) {
        function b(a) {
            if (f(a.node).name == "tr") a.node = a.node.cells[a.offset],
            a.offset = 0
        }
        var c;
        if (o) {
            if (a.item) return c = X(a.item(0)),
            c = new N(c),
            c.selectNode(a.item(0)),
            c;
            c = a.parentElement().ownerDocument;
            var d = mb(a, !0),
            a = mb(a, !1);
            b(d);
            b(a);
            c = new N(c);
            c.setStart(d.node, d.offset);
            c.setEnd(a.node, a.offset);
            return c
        }
        d = a.startContainer;
        c = d.ownerDocument || d;
        c = new N(c);
        c.setStart(d, a.startOffset);
        c.setEnd(a.endContainer, a.endOffset);
        return c
    }
    function N(a) {
        this.init(a)
    }
    function Ja(a) {
        if (!a.nodeName) return a.constructor === N ? a: ob(a);
        return new N(a)
    }
    function O(a, b, c) {
        try {
            a.execCommand(b, !1, c)
        } catch(d) {}
    }
    function pb(a, b) {
        var c = "";
        try {
            c = a.queryCommandValue(b)
        } catch(d) {}
        typeof c !== "string" && (c = "");
        return c
    }
    function Ka(a) {
        var b = R(a);
        return a.selection || b.getSelection()
    }
    function qb(a) {
        var b = {},
        c, d;
        k(a,
        function(a, f) {
            c = a.split(",");
            for (var g = 0,
            h = c.length; g < h; g++) d = c[g],
            b[d] = f
        });
        return b
    }
    function La(a, b) {
        return rb(a, b, "*") || rb(a, b)
    }
    function rb(a, b, c) {
        c = c || a.name;
        if (a.type !== 1) return ! 1;
        b = qb(b);
        if (!b[c]) return ! 1;
        for (var c = b[c].split(","), b = 0, d = c.length; b < d; b++) {
            var e = c[b];
            if (e === "*") return ! 0;
            var f = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(e),
            g = f[1] ? "css": "attr",
            e = f[2],
            f = f[3] || "";
            if (f === "" && a[g](e) !== "") return ! 0;
            if (f !== "" && a[g](e) === f) return ! 0
        }
        return ! 1
    }
    function Ma(a, b) {
        a.type == 1 && (sb(a, b, "*"), sb(a, b))
    }
    function sb(a, b, c) {
        c = c || a.name;
        if (a.type === 1 && (b = qb(b), b[c])) {
            for (var c = b[c].split(","), b = !1, d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                if (f === "*") {
                    b = !0;
                    break
                }
                var g = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(f),
                f = g[2];
                g[1] ? (f = ca(f), a[0].style[f] && (a[0].style[f] = "")) : a.removeAttr(f)
            }
            b && a.remove(!0)
        }
    }
    function Na(a) {
        for (; a.first();) a = a.first();
        return a
    }
    function Oa(a) {
        return a.type == 1 && a.html().replace(/<[^>]+>/g, "") === ""
    }
    function Rb(a, b, c) {
        k(b,
        function(b, c) {
            b !== "style" && a.attr(b, c)
        });
        k(c,
        function(b, c) {
            a.css(b, c)
        })
    }
    function tb(a) {
        for (; a && a.name != "body";) {
            if (Da[a.name] || a.name == "div" && a.hasClass("ke-script")) return ! 0;
            a = a.parent()
        }
        return ! 1
    }
    function sa(a) {
        this.init(a)
    }
    function ub(a) {
        a.nodeName && (a = X(a), a = Ja(a).selectNodeContents(a.body).collapse(!1));
        return new sa(a)
    }
    function Pa(a) {
        var b = a.moveEl,
        c = a.moveFn,
        d = a.clickEl || b,
        e = a.beforeDrag,
        i = [document],
        g = [{
            x: 0,
            y: 0
        }],
        h = []; (a.iframeFix === l || a.iframeFix) && f("iframe").each(function() {
            var a;
            try {
                a = Qa(this),
                f(a)
            } catch(b) {
                a = null
            }
            a && (i.push(a), g.push(f(this).pos()))
        });
        d.mousedown(function(a) {
            var m = d.get(),
            p = t(b.css("left")),
            l = t(b.css("top")),
            n = b.width(),
            s = b.height(),
            q = a.pageX,
            o = a.pageY,
            r = !0;
            e && e();
            k(i,
            function(a, b) {
                function e(b) {
                    if (r) {
                        var f = P(g[a].x + b.pageX - q),
                        j = P(g[a].y + b.pageY - o);
                        c.call(d, p, l, n, s, f, j)
                    }
                    b.stop()
                }
                function j(a) {
                    a.stop()
                }
                function i(a) {
                    r = !1;
                    m.releaseCapture && m.releaseCapture();
                    k(h,
                    function() {
                        f(this.doc).unbind("mousemove", this.move).unbind("mouseup", this.up).unbind("selectstart", this.select)
                    });
                    a.stop()
                }
                f(b).mousemove(e).mouseup(i).bind("selectstart", j);
                h.push({
                    doc: b,
                    move: e,
                    up: i,
                    select: j
                })
            });
            m.setCapture && m.setCapture();
            a.stop()
        })
    }
    function T(a) {
        this.init(a)
    }
    function Ra(a) {
        return new T(a)
    }
    function Qa(a) {
        a = f(a)[0];
        return a.contentDocument || a.contentWindow.document
    }
    function Sb(a, b, c, d) {
        var e = ['<html><head><meta charset="utf-8" /><title>KindEditor</title>', "<style>", "html {margin:0;padding:0;}", "body {margin:0;padding:5px;}", 'body, td {font:12px/1.5 "sans serif",tahoma,verdana,helvetica;}', "body, p, div {word-wrap: break-word;}", "p {margin:5px 0;}", "table {border-collapse:collapse;}", "img {border:0;}", "table.ke-zeroborder td {border:1px dotted #AAA;}", "img.ke-flash {", "\tborder:1px solid #AAA;", "\tbackground-image:url(" + a + "common/flash.gif);", "\tbackground-position:center center;", "\tbackground-repeat:no-repeat;", "\twidth:100px;", "\theight:100px;", "}", "img.ke-rm {", "\tborder:1px solid #AAA;", "\tbackground-image:url(" + a + "common/rm.gif);", "\tbackground-position:center center;", "\tbackground-repeat:no-repeat;", "\twidth:100px;", "\theight:100px;", "}", "img.ke-media {", "\tborder:1px solid #AAA;", "\tbackground-image:url(" + a + "common/media.gif);", "\tbackground-position:center center;", "\tbackground-repeat:no-repeat;", "\twidth:100px;", "\theight:100px;", "}", "img.ke-anchor {", "\tborder:1px dashed #666;", "\twidth:16px;", "\theight:16px;", "}", ".ke-script {", "\tdisplay:none;", "\tfont-size:0;", "\twidth:0;", "\theight:0;", "}", ".ke-pagebreak {", "\tborder:1px dotted #AAA;", "\tfont-size:0;", "\theight:2px;", "}", "</style>"];
        ba(c) || (c = [c]);
        k(c,
        function(a, b) {
            b && e.push('<link href="' + b + '" rel="stylesheet" />')
        });
        d && e.push("<style>" + d + "</style>");
        e.push("</head><body " + (b ? 'class="' + b + '"': "") + "></body></html>");
        return e.join("\n")
    }
    function Z(a, b) {
        return a.hasVal() ? a.val(b) : a.html(b)
    }
    function ta(a) {
        this.init(a)
    }
    function vb(a) {
        return new ta(a)
    }
    function wb(a, b) {
        var c = this.get(a);
        c && !c.hasClass("ke-disabled") && b(c)
    }
    function Sa(a) {
        this.init(a)
    }
    function xb(a) {
        return new Sa(a)
    }
    function ua(a) {
        this.init(a)
    }
    function Ta(a) {
        return new ua(a)
    }
    function va(a) {
        this.init(a)
    }
    function yb(a) {
        return new va(a)
    }
    function zb(a) {
        this.init(a)
    }
    function wa(a) {
        this.init(a)
    }
    function Ab(a) {
        return new wa(a)
    }
    function Ua(a, b) {
        var c = document.getElementsByTagName("head")[0] || (S ? document.body: document.documentElement),
        d = document.createElement("script");
        c.appendChild(d);
        d.src = a;
        d.charset = "utf-8";
        d.onload = d.onreadystatechange = function() {
            if (!this.readyState || this.readyState === "loaded") b && b(),
            d.onload = d.onreadystatechange = null,
            c.removeChild(d)
        }
    }
    function Va(a) {
        for (var b = document.getElementsByTagName("head")[0] || (S ? document.body: document.documentElement), c = document.createElement("link"), d = na(a, "absolute"), e = f('link[rel="stylesheet"]', b), i = 0, g = e.length; i < g; i++) if (na(e[i].href, "absolute") === d) return;
        b.appendChild(c);
        c.href = a;
        c.rel = "stylesheet"
    }
    function Bb(a, b) {
        if (!b) return $[a];
        $[a] = b
    }
    function Cb(a) {
        var b, c = "core";
        if (b = /^(\w+)\.(\w+)$/.exec(a)) c = b[1],
        a = b[2];
        return {
            ns: c,
            key: a
        }
    }
    function Db(a, b) {
        b = b === l ? f.options.langType: b;
        if (typeof a === "string") {
            if (!L[b]) return "no language";
            var c = a.length - 1;
            if (a.substr(c) === ".") return L[b][a.substr(0, c)];
            c = Cb(a);
            return L[b][c.ns][c.key]
        }
        k(a,
        function(a, c) {
            var f = Cb(a);
            L[b] || (L[b] = {});
            L[b][f.ns] || (L[b][f.ns] = {});
            L[b][f.ns][f.key] = c
        })
    }
    function xa(a, b) {
        var a = a.cloneRange().up(),
        c = a.startContainer,
        d = a.startOffset;
        if (aa || a.isControl()) if ((c = f(c.childNodes[d])) && c.name == "img" && b(c)) return c
    }
    function Tb() {
        var a = this;
        f(a.edit.doc).contextmenu(function(b) {
            a.menu && a.hideMenu();
            if (a.useContextmenu) {
                if (a._contextmenus.length !== 0) {
                    var c = 0,
                    d = [];
                    for (k(a._contextmenus,
                    function() {
                        if (this.title == "-") d.push(this);
                        else if (this.cond && this.cond() && (d.push(this), this.width && this.width > c)) c = this.width
                    }); d.length > 0 && d[0].title == "-";) d.shift();
                    for (; d.length > 0 && d[d.length - 1].title == "-";) d.pop();
                    var e = null;
                    k(d,
                    function(a) {
                        this.title == "-" && e.title == "-" && delete d[a];
                        e = this
                    });
                    if (d.length > 0) {
                        b.preventDefault();
                        var i = f(a.edit.iframe).pos(),
                        g = Ta({
                            x: i.x + b.clientX,
                            y: i.y + b.clientY,
                            width: c,
                            css: {
                                visibility: "hidden"
                            }
                        });
                        k(d,
                        function() {
                            this.title && g.addItem(this)
                        });
                        var i = I(g.doc),
                        h = g.div.height();
                        b.clientY + h >= i.clientHeight - 100 && g.pos(g.x, t(g.y) - h);
                        g.div.css("visibility", "visible");
                        a.menu = g
                    }
                }
            } else b.preventDefault()
        })
    }
    function Ub() {
        function a(a) {
            for (a = f(a.commonAncestor()); a;) {
                if (a.type == 1 && !a.isStyle()) break;
                a = a.parent()
            }
            return a.name
        }
        var b = this,
        c = b.edit.doc,
        d = b.newlineTag;
        if (! (o && d !== "br") && (!Wa || !(G < 3 && d !== "p")) && !Ha) {
            var e = u("h1,h2,h3,h4,h5,h6,pre,li"),
            i = u("p,h1,h2,h3,h4,h5,h6,pre,li,blockquote");
            f(c).keydown(function(f) {
                if (! (f.which != 13 || f.shiftKey || f.ctrlKey || f.altKey)) {
                    b.cmd.selection();
                    var h = a(b.cmd.range);
                    h == "marquee" || h == "select" || (d === "br" && !e[h] ? (f.preventDefault(), b.insertHtml("<br />")) : i[h] || O(c, "formatblock", "<p>"))
                }
            });
            f(c).keyup(function(e) {
                if (! (e.which != 13 || e.shiftKey || e.ctrlKey || e.altKey) && d != "br") if (b.cmd.selection(), e = a(b.cmd.range), !(e == "marquee" || e == "select")) if (i[e] || O(c, "formatblock", "<p>"), e = b.cmd.commonAncestor("div")) {
                    for (var h = f("<p></p>"), j = e[0].firstChild; j;) {
                        var m = j.nextSibling;
                        h.append(j);
                        j = m
                    }
                    e.before(h);
                    e.remove();
                    b.cmd.range.selectNodeContents(h[0]);
                    b.cmd.select()
                }
            })
        }
    }
    function Vb() {
        var a = this,
        b = a.edit.doc;
        f(b).keydown(function(c) {
            if (c.which == 9) if (c.preventDefault(), a.afterTab) a.afterTab.call(a, c);
            else {
                var c = a.cmd,
                d = c.range;
                d.shrink();
                d.collapsed && d.startContainer.nodeType == 1 && (d.insertNode(f("@&nbsp;", b)[0]), c.select());
                a.insertHtml("&nbsp;&nbsp;&nbsp;&nbsp;")
            }
        })
    }
    function Wb() {
        var a = this;
        f(a.edit.textarea[0], a.edit.win).focus(function(b) {
            a.afterFocus && a.afterFocus.call(a, b)
        }).blur(function(b) {
            a.afterBlur && a.afterBlur.call(a, b)
        })
    }
    function U(a) {
        return C(a.replace(/<span [^>]*id="?__kindeditor_bookmark_\w+_\d+__"?[^>]*><\/span>/ig, ""))
    }
    function Eb(a, b) {
        if (a.length === 0) a.push(b);
        else {
            var c = a[a.length - 1];
            U(b.html) !== U(c.html) && a.push(b)
        }
    }
    function Fb(a, b) {
        var c = this.edit,
        d = c.doc.body,
        e, i;
        if (a.length === 0) return this;
        c.designMode ? (e = this.cmd.range, i = e.createBookmark(!0), i.html = d.innerHTML) : i = {
            html: d.innerHTML
        };
        Eb(b, i);
        var g = a.pop();
        U(i.html) === U(g.html) && a.length > 0 && (g = a.pop());
        c.designMode ? (c.html(g.html), g.start && (e.moveToBookmark(g), this.select())) : f(d).html(U(g.html));
        return this
    }
    function ya(a) {
        function b(a, b) {
            ya.prototype[a] === l && (c[a] = b);
            c.options[a] = b
        }
        var c = this;
        c.options = {};
        k(a,
        function(c) {
            b(c, a[c])
        });
        k(f.options,
        function(a, d) {
            c[a] === l && b(a, d)
        });
        b("width", n(c.width, c.minWidth));
        b("height", n(c.height, c.minHeight));
        b("width", r(c.width));
        b("height", r(c.height));
        if (Gb) c.designMode = !1;
        var d = f(c.srcElement || "<textarea/>");
        c.srcElement = d;
        c.initContent = Z(d);
        c.plugin = {};
        c.isCreated = !1;
        c.isLoading = !1;
        c._handlers = {};
        c._contextmenus = [];
        c._undoStack = [];
        c._redoStack = [];
        c._calledPlugins = {};
        c._firstAddBookmark = !0;
        c.menu = c.contextmenu = null;
        c.dialogs = []
    }
    if (!B.KindEditor) {
        if (!B.console) B.console = {};
        if (!console.log) console.log = function() {};
        var D = navigator.userAgent.toLowerCase(),
        o = D.indexOf("msie") > -1 && D.indexOf("opera") == -1,
        Wa = D.indexOf("gecko") > -1 && D.indexOf("khtml") == -1,
        aa = D.indexOf("applewebkit") > -1,
        Ha = D.indexOf("opera") > -1,
        Gb = D.indexOf("mobile") > -1,
        S = document.compatMode != "CSS1Compat",
        G = (D = /(?:msie|firefox|webkit|opera)[\/:\s](\d+)/.exec(D)) ? D[1] : "0",
        za = (new Date).getTime(),
        P = Math.round,
        f = {
            DEBUG: !1,
            VERSION: "4.0.3 (2011-11-04)",
            IE: o,
            GECKO: Wa,
            WEBKIT: aa,
            OPERA: Ha,
            V: G,
            TIME: za,
            each: k,
            isArray: ba,
            isFunction: Ya,
            inArray: M,
            inString: ka,
            trim: C,
            addUnit: r,
            removeUnit: t,
            escape: E,
            unescape: function(a) {
                return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
            },
            toCamel: ca,
            toHex: la,
            toMap: u,
            toArray: Ba,
            undef: n,
            invalidUrl: function(a) {
                return ! a || /[<>"]/.test(a)
            },
            addParam: function(a, b) {
                return a.indexOf("?") >= 0 ? a + "&" + b: a + "?" + b
            },
            extend: F,
            json: Za
        },
        fb = u("a,abbr,acronym,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,img,input,ins,kbd,label,map,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
        gb = u("address,applet,blockquote,body,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,h1,h2,h3,h4,h5,h6,head,hr,html,iframe,ins,isindex,li,map,menu,meta,noframes,noscript,object,ol,p,pre,script,style,table,tbody,td,tfoot,th,thead,title,tr,ul"),
        eb = u("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),
        Hb = u("b,basefont,big,del,em,font,i,s,small,span,strike,strong,sub,sup,u"),
        Xb = u("img,table,input,textarea,button"),
        Da = u("pre,style,script"),
        Aa = u("html,head,body,td,tr,table,ol,ul,li");
        u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
        var Ob = u("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),
        Ib = u("input,button,textarea,select");
        f.basePath = function() {
            for (var a = document.getElementsByTagName("script"), b, c = 0, d = a.length; c < d; c++) if (b = a[c].src || "", /kindeditor[\w\-\.]*\.js/.test(b)) return b.substring(0, b.lastIndexOf("/") + 1);
            return ""
        } ();
        f.options = {
            designMode: !0,
            fullscreenMode: !1,
            filterMode: !1,
            wellFormatMode: !0,
            shadowMode: !0,
            loadStyleMode: !0,
            basePath: f.basePath,
            themesPath: f.basePath + "themes/",
            langPath: f.basePath + "lang/",
            pluginsPath: f.basePath + "plugins/",
            themeType: "default",
            langType: "zh-cn",
            urlType: "",
            newlineTag: "p",
            resizeType: 1,
            syncType: "form",
            pasteType: 2,
            dialogAlignType: "page",
            useContextmenu: !0,
            bodyClass: "ke-content",
            indentChar: "\t",
            cssPath: "",
            cssData: "",
            minWidth: 650,
            minHeight: 100,
            minChangeSize: 5,
            items: kindeditor_item2,
            noDisableItems: ["source", "fullscreen"],
            colorTable: [["#E53333", "#E56600", "#FF9900", "#64451D", "#DFC5A4", "#FFE500"], ["#009900", "#006600", "#99BB00", "#B8D100", "#60D978", "#00D5FF"], ["#337FE5", "#003399", "#4C33E5", "#9933E5", "#CC33E5", "#EE33EE"], ["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333", "#000000"]],
            fontSizeTable: ["9px", "10px", "12px", "14px", "16px", "18px", "24px", "32px"],
            htmlTags: {
                font: ["color", "size", "face", ".background-color"],
                span: [".color", ".background-color", ".font-size", ".font-family", ".background", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".line-height"],
                div: ["align", ".border", ".margin", ".padding", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".font-weight", ".background", ".font-style", ".text-decoration", ".vertical-align", ".margin-left"],
                table: ["border", "cellspacing", "cellpadding", "width", "height", "align", "bordercolor", ".padding", ".margin", ".border", "bgcolor", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".font-weight", ".font-style", ".text-decoration", ".background", ".width", ".height", ".border-collapse"],
                "td,th": ["align", "valign", "width", "height", "colspan", "rowspan", "bgcolor", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".background", ".border"],
                a: ["href", "target", "name"],
                embed: ["src", "width", "height", "type", "loop", "autostart", "quality", ".width", ".height", "align", "allowscriptaccess"],
                img: ["src", "width", "height", "border", "alt", "title", "align", ".width", ".height", ".border"],
                "p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6": ["align", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".background", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".text-indent", ".margin-left"],
                pre: ["class"],
                "hr,br,tbody,tr,strong,b,sub,sup,em,i,u,strike": []
            },
            layout: '<div class="container"><div class="toolbar"></div><div class="edit"></div><div class="statusbar"></div></div>'
        };
        var $a = !1,
        Jb = u("8,9,13,32,46,48..57,59,61,65..90,106,109..111,188,190..192,219..222"),
        D = u("33..40"),
        Xa = {};
        k(Jb,
        function(a, b) {
            Xa[a] = b
        });
        k(D,
        function(a, b) {
            Xa[a] = b
        });
        var Yb = "altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,layerX,layerY,metaKey,newValue,offsetX,offsetY,originalTarget,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(",");
        F(ab, {
            init: function(a, b) {
                var c = this,
                d = a.ownerDocument || a.document || a;
                c.event = b;
                k(Yb,
                function(a, d) {
                    c[d] = b[d]
                });
                if (!c.target) c.target = c.srcElement || d;
                if (c.target.nodeType === 3) c.target = c.target.parentNode;
                if (!c.relatedTarget && c.fromElement) c.relatedTarget = c.fromElement === c.target ? c.toElement: c.fromElement;
                if (c.pageX == null && c.clientX != null) {
                    var e = d.documentElement,
                    d = d.body;
                    c.pageX = c.clientX + (e && e.scrollLeft || d && d.scrollLeft || 0) - (e && e.clientLeft || d && d.clientLeft || 0);
                    c.pageY = c.clientY + (e && e.scrollTop || d && d.scrollTop || 0) - (e && e.clientTop || d && d.clientTop || 0)
                }
                if (!c.which && (c.charCode || c.charCode === 0 ? c.charCode: c.keyCode)) c.which = c.charCode || c.keyCode;
                if (!c.metaKey && c.ctrlKey) c.metaKey = c.ctrlKey;
                if (!c.which && c.button !== l) c.which = c.button & 1 ? 1 : c.button & 2 ? 3 : c.button & 4 ? 2 : 0;
                switch (c.which) {
                case 186:
                    c.which = 59;
                    break;
                case 187:
                case 107:
                case 43:
                    c.which = 61;
                    break;
                case 189:
                case 45:
                    c.which = 109;
                    break;
                case 42:
                    c.which = 106;
                    break;
                case 47:
                    c.which = 111;
                    break;
                case 78:
                    c.which = 110
                }
                c.which >= 96 && c.which <= 105 && (c.which -= 48)
            },
            preventDefault: function() {
                var a = this.event;
                a.preventDefault && a.preventDefault();
                a.returnValue = !1
            },
            stopPropagation: function() {
                var a = this.event;
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = !0
            },
            stop: function() {
                this.preventDefault();
                this.stopPropagation()
            }
        });
        var V = "kindeditor_" + za,
        cb = 0,
        v = {};
        o && B.attachEvent("onunload",
        function() {
            k(v,
            function(a, b) {
                b.el && da(b.el)
            })
        });
        f.ctrl = Ca;
        f.ready = function(a) {
            function b() {
                e || (e = !0, a(KindEditor))
            }
            function c() {
                if (!e) {
                    try {
                        document.documentElement.doScroll("left")
                    } catch(a) {
                        setTimeout(c, 100);
                        return
                    }
                    b()
                }
            }
            function d() {
                document.readyState === "complete" && b()
            }
            var e = !1;
            document.addEventListener ? W(document, "DOMContentLoaded", b) : document.attachEvent && (W(document, "readystatechange", d), document.documentElement.doScroll && B.frameElement === l && c());
            W(B, "load", b)
        };
        f.formatUrl = na;
        f.formatHtml = Q;
        f.getCssList = ea;
        f.getAttrList = K;
        f.mediaType = ib;
        f.mediaAttrs = jb;
        f.mediaEmbed = Ea;
        f.mediaImg = kb;
        f.clearMsWord = hb;
        f.query = function(a, b) {
            var c = ra(a, b);
            return c.length > 0 ? c[0] : null
        };
        f.queryAll = ra;
        F(J, {
            init: function(a) {
                for (var b = 0,
                c = a.length; b < c; b++) this[b] = a[b].constructor === J ? a[b][0] : a[b];
                this.length = a.length;
                this.doc = X(this[0]);
                this.name = Ga(this[0]);
                this.type = this.length > 0 ? this[0].nodeType: null;
                this.win = R(this[0]);
                this._data = {}
            },
            each: function(a) {
                for (var b = 0; b < this.length; b++) if (a.call(this[b], b, this[b]) === !1) break;
                return this
            },
            bind: function(a, b) {
                this.each(function() {
                    W(this, a, b)
                });
                return this
            },
            unbind: function(a, b) {
                this.each(function() {
                    da(this, a, b)
                });
                return this
            },
            fire: function(a) {
                if (this.length < 1) return this;
                db(this[0], a);
                return this
            },
            hasAttr: function(a) {
                if (this.length < 1) return ! 1;
                return !! qa(this[0], a)
            },
            attr: function(a, b) {
                var c = this;
                if (a === l) return K(c.outer());
                if (typeof a === "object") return k(a,
                function(a, b) {
                    c.attr(a, b)
                }),
                c;
                if (b === l) return b = c.length < 1 ? null: qa(c[0], a),
                b === null ? "": b;
                c.each(function() {
                    Fa(this, a, b)
                });
                return c
            },
            removeAttr: function(a) {
                this.each(function() {
                    var b = a;
                    o && G < 8 && b.toLowerCase() == "class" && (b = "className");
                    Fa(this, b, "");
                    this.removeAttribute(b)
                });
                return this
            },
            get: function(a) {
                if (this.length < 1) return null;
                return this[a || 0]
            },
            hasClass: function(a) {
                if (this.length < 1) return ! 1;
                return ka(a, this[0].className, " ")
            },
            addClass: function(a) {
                this.each(function() {
                    if (!ka(a, this.className, " ")) this.className = C(this.className + " " + a)
                });
                return this
            },
            removeClass: function(a) {
                this.each(function() {
                    if (ka(a, this.className, " ")) this.className = C(this.className.replace(RegExp("(^|\\s)" + a + "(\\s|$)"), " "))
                });
                return this
            },
            html: function(a) {
                if (a === l) {
                    if (this.length < 1 || this.type != 1) return "";
                    return Q(this[0].innerHTML)
                }
                this.each(function() {
                    Pb(this, a)
                });
                return this
            },
            text: function() {
                if (this.length < 1) return "";
                return o ? this[0].innerText: this[0].textContent
            },
            hasVal: function() {
                if (this.length < 1) return ! 1;
                return !! Ib[Ga(this[0])]
            },
            val: function(a) {
                if (a === l) {
                    if (this.length < 1) return "";
                    return this.hasVal() ? this[0].value: this.attr("value")
                } else return this.each(function() {
                    Ib[Ga(this)] ? this.value = a: Fa(this, "value", a)
                }),
                this
            },
            css: function(a, b) {
                var c = this;
                if (a === l) return ea(c.attr("style"));
                if (typeof a === "object") return k(a,
                function(a, b) {
                    c.css(a, b)
                }),
                c;
                if (b === l) {
                    if (c.length < 1) return "";
                    return c[0].style[ca(a)] || Qb(c[0], a) || ""
                }
                c.each(function() {
                    this.style[ca(a)] = b
                });
                return c
            },
            width: function(a) {
                if (a === l) {
                    if (this.length < 1) return 0;
                    return this[0].offsetWidth
                }
                return this.css("width", r(a))
            },
            height: function(a) {
                if (a === l) {
                    if (this.length < 1) return 0;
                    return this[0].offsetHeight
                }
                return this.css("height", r(a))
            },
            opacity: function(a) {
                this.each(function() {
                    this.style.opacity === l ? this.style.filter = a == 1 ? "": "alpha(opacity=" + a * 100 + ")": this.style.opacity = a == 1 ? "": a
                });
                return this
            },
            data: function(a, b) {
                if (b === l) return this._data[a];
                this._data[a] = b;
                return this
            },
            pos: function() {
                var a = this[0],
                b = 0,
                c = 0;
                if (a) if (a.getBoundingClientRect) a = a.getBoundingClientRect(),
                c = fa(this.doc),
                b = a.left + c.x,
                c = a.top + c.y;
                else for (; a;) b += a.offsetLeft,
                c += a.offsetTop,
                a = a.offsetParent;
                return {
                    x: P(b),
                    y: P(c)
                }
            },
            clone: function(a) {
                if (this.length < 1) return new J([]);
                return new J([this[0].cloneNode(a)])
            },
            append: function(a) {
                this.each(function() {
                    this.appendChild && this.appendChild(f(a)[0])
                });
                return this
            },
            appendTo: function(a) {
                this.each(function() {
                    f(a)[0].appendChild(this)
                });
                return this
            },
            before: function(a) {
                this.each(function() {
                    this.parentNode.insertBefore(f(a)[0], this)
                });
                return this
            },
            after: function(a) {
                this.each(function() {
                    this.nextSibling ? this.parentNode.insertBefore(f(a)[0], this.nextSibling) : this.parentNode.appendChild(f(a)[0])
                });
                return this
            },
            replaceWith: function(a) {
                var b = [];
                this.each(function(c, d) {
                    da(d);
                    var e = f(a)[0];
                    d.parentNode.replaceChild(e, d);
                    b.push(e)
                });
                return f(b)
            },
            empty: function() {
                this.each(function(a, b) {
                    for (var c = b.firstChild; c;) {
                        if (!b.parentNode) break;
                        var d = c.nextSibling;
                        c.parentNode.removeChild(c);
                        c = d
                    }
                });
                return this
            },
            remove: function(a) {
                var b = this;
                b.each(function(c, d) {
                    if (d.parentNode) {
                        da(d);
                        if (a) for (var e = d.firstChild; e;) {
                            var f = e.nextSibling;
                            d.parentNode.insertBefore(e, d);
                            e = f
                        }
                        d.parentNode.removeChild(d);
                        delete b[c]
                    }
                });
                b.length = 0;
                b._data = {};
                return b
            },
            show: function(a) {
                return this.css("display", a === l ? "block": a)
            },
            hide: function() {
                return this.css("display", "none")
            },
            outer: function() {
                if (this.length < 1) return "";
                var a = this.doc.createElement("div");
                a.appendChild(this[0].cloneNode(!0));
                return Q(a.innerHTML)
            },
            isSingle: function() {
                return !! eb[this.name]
            },
            isInline: function() {
                return !! fb[this.name]
            },
            isBlock: function() {
                return !! gb[this.name]
            },
            isStyle: function() {
                return !! Hb[this.name]
            },
            isControl: function() {
                return !! Xb[this.name]
            },
            contains: function(a) {
                if (this.length < 1) return ! 1;
                return pa(this[0], f(a)[0])
            },
            parent: function() {
                if (this.length < 1) return null;
                var a = this[0].parentNode;
                return a ? new J([a]) : null
            },
            children: function() {
                if (this.length < 1) return [];
                for (var a = [], b = this[0].firstChild; b;)(b.nodeType != 3 || C(b.nodeValue) !== "") && a.push(new J([b])),
                b = b.nextSibling;
                return a
            },
            first: function() {
                var a = this.children();
                return a.length > 0 ? a[0] : null
            },
            last: function() {
                var a = this.children();
                return a.length > 0 ? a[a.length - 1] : null
            },
            index: function() {
                if (this.length < 1) return - 1;
                for (var a = -1,
                b = this[0]; b;) a++,
                b = b.previousSibling;
                return a
            },
            prev: function() {
                if (this.length < 1) return null;
                var a = this[0].previousSibling;
                return a ? new J([a]) : null
            },
            next: function() {
                if (this.length < 1) return null;
                var a = this[0].nextSibling;
                return a ? new J([a]) : null
            },
            scan: function(a, b) {
                function c(d) {
                    for (d = b ? d.firstChild: d.lastChild; d;) {
                        var e = b ? d.nextSibling: d.previousSibling;
                        if (a(d) === !1) return ! 1;
                        if (c(d) === !1) return ! 1;
                        d = e
                    }
                }
                if (! (this.length < 1)) return b = b === l ? !0 : b,
                c(this[0]),
                this
            }
        });
        k("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(","),
        function(a, b) {
            J.prototype[b] = function(a) {
                return a ? this.bind(b, a) : this.fire(b)
            }
        });
        D = f;
        f = function(a, b) {
            function c(a) {
                a[0] || (a = []);
                return new J(a)
            }
            if (! (a === l || a === null)) {
                if (typeof a === "string") {
                    b && (b = f(b)[0]);
                    var d = a.length;
                    a.charAt(0) === "@" && (a = a.substr(1));
                    if (a.length !== d || /<.+>/.test(a)) {
                        var d = (b ? b.ownerDocument || b: document).createElement("div"),
                        e = [];
                        d.innerHTML = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + a;
                        for (var i = 0,
                        g = d.childNodes.length; i < g; i++) {
                            var h = d.childNodes[i];
                            h.id != "__kindeditor_temp_tag__" && e.push(h)
                        }
                        return c(e)
                    }
                    return c(ra(a, b))
                }
                if (a && a.constructor === J) return a;
                if (ba(a)) return c(a);
                return c(Ba(arguments))
            }
        };
        k(D,
        function(a, b) {
            f[a] = b
        });
        B.KindEditor = f;
        var ha = 0,
        ga = 1,
        Y = 2,
        ia = 3,
        Kb = 0;
        F(N, {
            init: function(a) {
                this.startContainer = a;
                this.startOffset = 0;
                this.endContainer = a;
                this.endOffset = 0;
                this.collapsed = !0;
                this.doc = a
            },
            commonAncestor: function() {
                function a(a) {
                    for (var b = []; a;) b.push(a),
                    a = a.parentNode;
                    return b
                }
                for (var b = a(this.startContainer), c = a(this.endContainer), d = 0, e = b.length, f = c.length, g, h; ++d;) if (g = b[e - d], h = c[f - d], !g || !h || g !== h) break;
                return b[e - d + 1]
            },
            setStart: function(a, b) {
                var c = this.doc;
                this.startContainer = a;
                this.startOffset = b;
                if (this.endContainer === c) this.endContainer = a,
                this.endOffset = b;
                return lb(this)
            },
            setEnd: function(a, b) {
                var c = this.doc;
                this.endContainer = a;
                this.endOffset = b;
                if (this.startContainer === c) this.startContainer = a,
                this.startOffset = b;
                return lb(this)
            },
            setStartBefore: function(a) {
                return this.setStart(a.parentNode || this.doc, f(a).index())
            },
            setStartAfter: function(a) {
                return this.setStart(a.parentNode || this.doc, f(a).index() + 1)
            },
            setEndBefore: function(a) {
                return this.setEnd(a.parentNode || this.doc, f(a).index())
            },
            setEndAfter: function(a) {
                return this.setEnd(a.parentNode || this.doc, f(a).index() + 1)
            },
            selectNode: function(a) {
                return this.setStartBefore(a).setEndAfter(a)
            },
            selectNodeContents: function(a) {
                var b = f(a);
                if (b.type == 3 || b.isSingle()) return this.selectNode(a);
                b = b.children();
                if (b.length > 0) return this.setStartBefore(b[0][0]).setEndAfter(b[b.length - 1][0]);
                return this.setStart(a, 0).setEnd(a, 0)
            },
            collapse: function(a) {
                if (a) return this.setEnd(this.startContainer, this.startOffset);
                return this.setStart(this.endContainer, this.endOffset)
            },
            compareBoundaryPoints: function(a, b) {
                var c = this.get(),
                d = b.get();
                if (o) {
                    var e = {};
                    e[ha] = "StartToStart";
                    e[ga] = "EndToStart";
                    e[Y] = "EndToEnd";
                    e[ia] = "StartToEnd";
                    c = c.compareEndPoints(e[a], d);
                    if (c !== 0) return c;
                    var i, g, h, j;
                    if (a === ha || a === ia) i = this.startContainer,
                    h = this.startOffset;
                    if (a === ga || a === Y) i = this.endContainer,
                    h = this.endOffset;
                    if (a === ha || a === ga) g = b.startContainer,
                    j = b.startOffset;
                    if (a === Y || a === ia) g = b.endContainer,
                    j = b.endOffset;
                    if (i === g) return i = h - j,
                    i > 0 ? 1 : i < 0 ? -1 : 0;
                    for (c = g; c && c.parentNode !== i;) c = c.parentNode;
                    if (c) return f(c).index() >= h ? -1 : 1;
                    for (c = i; c && c.parentNode !== g;) c = c.parentNode;
                    if (c) return f(c).index() >= j ? 1 : -1;
                    if ((c = f(g).next()) && c.contains(i)) return 1;
                    if ((c = f(i).next()) && c.contains(g)) return - 1
                } else return c.compareBoundaryPoints(a, d)
            },
            cloneRange: function() {
                return (new N(this.doc)).setStart(this.startContainer, this.startOffset).setEnd(this.endContainer, this.endOffset)
            },
            toString: function() {
                var a = this.get();
                return (o ? a.text: a.toString()).replace(/\r\n|\n|\r/g, "")
            },
            cloneContents: function() {
                return Ia(this, !0, !1)
            },
            deleteContents: function() {
                return Ia(this, !1, !0)
            },
            extractContents: function() {
                return Ia(this, !0, !0)
            },
            insertNode: function(a) {
                var b = this.startContainer,
                c = this.startOffset,
                d = this.endContainer,
                e = this.endOffset,
                f, g, h, j = 1;
                if (a.nodeName.toLowerCase() === "#document-fragment") f = a.firstChild,
                g = a.lastChild,
                j = a.childNodes.length;
                b.nodeType == 1 ? (h = b.childNodes[c]) ? (b.insertBefore(a, h), b === d && (e += j)) : b.appendChild(a) : b.nodeType == 3 && (c === 0 ? (b.parentNode.insertBefore(a, b), b.parentNode === d && (e += j)) : c >= b.nodeValue.length ? b.nextSibling ? b.parentNode.insertBefore(a, b.nextSibling) : b.parentNode.appendChild(a) : (h = c > 0 ? b.splitText(c) : b, b.parentNode.insertBefore(a, h), b === d && (d = h, e -= c)));
                f ? this.setStartBefore(f).setEndAfter(g) : this.selectNode(a);
                if (this.compareBoundaryPoints(Y, this.cloneRange().setEnd(d, e)) >= 1) return this;
                return this.setEnd(d, e)
            },
            surroundContents: function(a) {
                a.appendChild(this.extractContents());
                return this.insertNode(a).selectNode(a)
            },
            isControl: function() {
                var a = this.startContainer,
                b = this.startOffset,
                c = this.endContainer,
                d = this.endOffset;
                return a.nodeType == 1 && a === c && b + 1 === d && f(a.childNodes[b]).isControl()
            },
            get: function(a) {
                var b = this.doc;
                if (!o) {
                    b = b.createRange();
                    try {
                        b.setStart(this.startContainer, this.startOffset),
                        b.setEnd(this.endContainer, this.endOffset)
                    } catch(c) {}
                    return b
                }
                if (a && this.isControl()) return b = b.body.createControlRange(),
                b.addElement(this.startContainer.childNodes[this.startOffset]),
                b;
                a = this.cloneRange().down();
                b = b.body.createTextRange();
                b.setEndPoint("StartToStart", nb(a.startContainer, a.startOffset));
                b.setEndPoint("EndToStart", nb(a.endContainer, a.endOffset));
                return b
            },
            html: function() {
                return f(this.cloneContents()).outer()
            },
            down: function() {
                function a(a, d, e) {
                    if (a.nodeType == 1 && (a = f(a).children(), a.length !== 0)) {
                        var i, g, h, j;
                        d > 0 && (i = a[d - 1]);
                        d < a.length && (g = a[d]);
                        if (i && i.type == 3) h = i[0],
                        j = h.nodeValue.length;
                        g && g.type == 3 && (h = g[0], j = 0);
                        h && (e ? b.setStart(h, j) : b.setEnd(h, j))
                    }
                }
                var b = this;
                a(b.startContainer, b.startOffset, !0);
                a(b.endContainer, b.endOffset, !1);
                return b
            },
            up: function() {
                function a(a, d, e) {
                    a.nodeType == 3 && (d === 0 ? e ? b.setStartBefore(a) : b.setEndBefore(a) : d == a.nodeValue.length && (e ? b.setStartAfter(a) : b.setEndAfter(a)))
                }
                var b = this;
                a(b.startContainer, b.startOffset, !0);
                a(b.endContainer, b.endOffset, !1);
                return b
            },
            enlarge: function(a) {
                function b(b, e, i) {
                    b = f(b);
                    if (! (b.type == 3 || Aa[b.name] || !a && b.isBlock())) if (e === 0) {
                        for (; ! b.prev();) {
                            e = b.parent();
                            if (!e || Aa[e.name] || !a && e.isBlock()) break;
                            b = e
                        }
                        i ? c.setStartBefore(b[0]) : c.setEndBefore(b[0])
                    } else if (e == b.children().length) {
                        for (; ! b.next();) {
                            e = b.parent();
                            if (!e || Aa[e.name] || !a && e.isBlock()) break;
                            b = e
                        }
                        i ? c.setStartAfter(b[0]) : c.setEndAfter(b[0])
                    }
                }
                var c = this;
                c.up();
                b(c.startContainer, c.startOffset, !0);
                b(c.endContainer, c.endOffset, !1);
                return c
            },
            shrink: function() {
                for (var a, b = this.collapsed; this.startContainer.nodeType == 1 && (a = this.startContainer.childNodes[this.startOffset]) && a.nodeType == 1 && !f(a).isSingle();) this.setStart(a, 0);
                if (b) return this.collapse(b);
                for (; this.endContainer.nodeType == 1 && this.endOffset > 0 && (a = this.endContainer.childNodes[this.endOffset - 1]) && a.nodeType == 1 && !f(a).isSingle();) this.setEnd(a, a.childNodes.length);
                return this
            },
            createBookmark: function(a) {
                var b, c = f('<span style="display:none;"></span>', this.doc)[0];
                c.id = "__kindeditor_bookmark_start_" + Kb+++"__";
                if (!this.collapsed) b = c.cloneNode(!0),
                b.id = "__kindeditor_bookmark_end_" + Kb+++"__";
                b && this.cloneRange().collapse(!1).insertNode(b).setEndBefore(b);
                this.insertNode(c).setStartAfter(c);
                return {
                    start: a ? "#" + c.id: c,
                    end: b ? a ? "#" + b.id: b: null
                }
            },
            moveToBookmark: function(a) {
                var b = this.doc,
                c = f(a.start, b),
                a = a.end ? f(a.end, b) : null;
                if (!c || c.length < 1) return this;
                this.setStartBefore(c[0]);
                c.remove();
                a && a.length > 0 ? (this.setEndBefore(a[0]), a.remove()) : this.collapse(!0);
                return this
            },
            dump: function() {
                console.log("--------------------");
                console.log(this.startContainer.nodeType == 3 ? this.startContainer.nodeValue: this.startContainer, this.startOffset);
                console.log(this.endContainer.nodeType == 3 ? this.endContainer.nodeValue: this.endContainer, this.endOffset)
            }
        });
        f.range = Ja;
        f.START_TO_START = ha;
        f.START_TO_END = ga;
        f.END_TO_END = Y;
        f.END_TO_START = ia;
        F(sa, {
            init: function(a) {
                var b = a.doc;
                this.doc = b;
                this.win = R(b);
                this.sel = Ka(b);
                this.range = a
            },
            selection: function(a) {
                var b = this.doc,
                c;
                c = Ka(b);
                var d;
                try {
                    d = c.rangeCount > 0 ? c.getRangeAt(0) : c.createRange()
                } catch(e) {}
                c = o && (!d || !d.item && d.parentElement().ownerDocument !== b) ? null: d;
                this.sel = Ka(b);
                if (c) return this.range = Ja(c),
                f(this.range.startContainer).name == "html" && this.range.selectNodeContents(b.body).collapse(!1),
                this;
                a && this.range.selectNodeContents(b.body).collapse(!1);
                return this
            },
            select: function(a) {
                var a = n(a, !0),
                b = this.sel,
                c = this.range.cloneRange(),
                d = c.startContainer,
                e = c.startOffset,
                i = X(d),
                g = this.win,
                h;
                if (a && d.nodeType == 1 && c.collapsed) {
                    if (o) {
                        b = f("<span>&nbsp;</span>", i);
                        c.insertNode(b[0]);
                        h = i.body.createTextRange();
                        try {
                            h.moveToElementText(b[0])
                        } catch(j) {}
                        h.collapse(!1);
                        h.select();
                        b.remove();
                        g.focus();
                        return this
                    }
                    if (aa) a = d.childNodes,
                    (f(d).isInline() || e > 0 && f(a[e - 1]).isInline() || a[e] && f(a[e]).isInline()) && c.insertNode(i.createTextNode("\u200b"))
                }
                if (o) try {
                    h = c.get(!0),
                    h.select()
                } catch(m) {} else h = c.get(!0),
                b.removeAllRanges(),
                b.addRange(h);
                g.focus();
                return this
            },
            wrap: function(a) {
                var b = this.range,
                c;
                c = f(a, this.doc);
                if (b.collapsed) return b.shrink(),
                b.insertNode(c[0]).selectNodeContents(c[0]),
                this;
                if (c.isBlock()) {
                    for (var d = a = c.clone(!0); d.first();) d = d.first();
                    d.append(b.extractContents());
                    b.insertNode(a[0]).selectNode(a[0]);
                    return this
                }
                b.enlarge();
                var e = b.createBookmark(),
                a = b.commonAncestor(),
                i = !1;
                f(a).scan(function(a) {
                    if (!i && a == e.start) i = !0;
                    else if (i) {
                        if (a == e.end) return ! 1;
                        var b = f(a);
                        if (!tb(b) && b.type == 3 && C(a.nodeValue).length > 0) {
                            for (var d; (d = b.parent()) && d.isStyle() && d.children().length == 1;) b = d;
                            d = c;
                            d = d.clone(!0);
                            if (b.type == 3) Na(d).append(b.clone(!1)),
                            b.replaceWith(d);
                            else {
                                for (var a = b,
                                m; (m = b.first()) && m.children().length == 1;) b = m;
                                m = b.first();
                                for (b = b.doc.createDocumentFragment(); m;) b.appendChild(m[0]),
                                m = m.next();
                                m = a.clone(!0);
                                for (var p = Na(m), k = m, l = !1; d;) {
                                    for (; k;) k.name === d.name && (Rb(k, d.attr(), d.css()), l = !0),
                                    k = k.first();
                                    l || p.append(d.clone(!1));
                                    l = !1;
                                    d = d.first()
                                }
                                d = m;
                                b.firstChild && Na(d).append(b);
                                a.replaceWith(d)
                            }
                        }
                    }
                });
                b.moveToBookmark(e);
                return this
            },
            split: function(a, b) {
                for (var c = this.range,
                d = c.doc,
                e = c.cloneRange().collapse(a), i = e.startContainer, g = e.startOffset, h = i.nodeType == 3 ? i.parentNode: i, j = !1, m; h && h.parentNode;) {
                    m = f(h);
                    if (b) {
                        if (!m.isStyle()) break;
                        if (!La(m, b)) break
                    } else if (Aa[m.name]) break;
                    j = !0;
                    h = h.parentNode
                }
                if (j) d = d.createElement("span"),
                c.cloneRange().collapse(!a).insertNode(d),
                a ? e.setStartBefore(h.firstChild).setEnd(i, g) : e.setStart(i, g).setEndAfter(h.lastChild),
                i = e.extractContents(),
                g = i.firstChild,
                j = i.lastChild,
                a ? (e.insertNode(i), c.setStartAfter(j).setEndBefore(d)) : (h.appendChild(i), c.setStartBefore(d).setEndBefore(g)),
                e = d.parentNode,
                e == c.endContainer && (h = f(d).prev(), i = f(d).next(), h && i && h.type == 3 && i.type == 3 ? c.setEnd(h[0], h[0].nodeValue.length) : a || c.setEnd(c.endContainer, c.endOffset - 1)),
                e.removeChild(d);
                return this
            },
            remove: function(a) {
                var b = this.doc,
                c = this.range;
                if (c.collapsed) return this.split(!0, a),
                c.collapse(!0),
                this;
                c.enlarge();
                if (c.startOffset === 0) {
                    for (var d = f(c.startContainer), e; (e = d.parent()) && e.isStyle() && e.children().length == 1;) d = e;
                    c.setStart(d[0], 0);
                    d = f(c.startContainer);
                    d.isBlock() && Ma(d, a); (d = d.parent()) && d.isBlock() && Ma(d, a)
                }
                this.split(!0, a);
                this.split(!1, a);
                var i = b.createElement("span"),
                g = b.createElement("span");
                c.cloneRange().collapse(!1).insertNode(g);
                c.cloneRange().collapse(!0).insertNode(i);
                var h = [],
                j = !1;
                f(c.commonAncestor()).scan(function(a) {
                    if (!j && a == i) j = !0;
                    else {
                        if (a == g) return ! 1;
                        j && h.push(a)
                    }
                });
                f(i).remove();
                f(g).remove();
                var b = c.startContainer,
                m = c.startOffset,
                d = c.endContainer;
                e = c.endOffset;
                if (m > 0) {
                    var p = f(b.childNodes[m - 1]);
                    p && Oa(p) && (p.remove(), c.setStart(b, m - 1), b == d && c.setEnd(d, e - 1));
                    if ((m = f(b.childNodes[m])) && Oa(m)) m.remove(),
                    b == d && c.setEnd(d, e - 1)
                } (b = f(d.childNodes[c.endOffset])) && Oa(b) && b.remove();
                b = c.createBookmark(!0);
                k(h,
                function(b, c) {
                    Ma(f(c), a)
                });
                c.moveToBookmark(b);
                return this
            },
            commonNode: function(a) {
                function b(b) {
                    for (var c = b; b;) {
                        if (La(f(b), a)) return f(b);
                        b = b.parentNode
                    }
                    for (; c && (c = c.lastChild);) if (La(f(c), a)) return f(c);
                    return null
                }
                var c = this.range,
                d = c.endContainer,
                c = c.endOffset,
                e = d.nodeType == 3 || c === 0 ? d: d.childNodes[c - 1],
                i = b(e);
                if (i) return i;
                if (e.nodeType == 1 || d.nodeType == 3 && c === 0) if (d = f(e).prev()) return b(d);
                return null
            },
            commonAncestor: function(a) {
                function b(b) {
                    for (; b;) {
                        if (b.nodeType == 1 && b.tagName.toLowerCase() === a) return b;
                        b = b.parentNode
                    }
                    return null
                }
                var c = this.range,
                d = c.startContainer,
                e = c.startOffset,
                i = c.endContainer,
                c = c.endOffset,
                i = i.nodeType == 3 || c === 0 ? i: i.childNodes[c - 1],
                d = b(d.nodeType == 3 || e === 0 ? d: d.childNodes[e - 1]),
                e = b(i);
                if (d && e && d === e) return f(d);
                return null
            },
            state: function(a) {
                var b = this.doc,
                c = !1;
                try {
                    c = b.queryCommandState(a)
                } catch(d) {}
                return c
            },
            val: function(a) {
                var b = this.doc,
                a = a.toLowerCase(),
                c = "";
                if (a === "fontfamily" || a === "fontname") return c = pb(b, "fontname"),
                c = c.replace(/['"]/g, ""),
                c.toLowerCase();
                if (a === "formatblock") {
                    c = pb(b, a);
                    if (c === "" && (a = this.commonNode({
                        "h1,h2,h3,h4,h5,h6,p,div,pre,address": "*"
                    }))) c = a.name;
                    c === "Normal" && (c = "p");
                    return c.toLowerCase()
                }
                if (a === "fontsize") return (a = this.commonNode({
                    "*": ".font-size"
                })) && (c = a.css("font-size")),
                c.toLowerCase();
                if (a === "forecolor") return (a = this.commonNode({
                    "*": ".color"
                })) && (c = a.css("color")),
                c = la(c),
                c === "" && (c = "default"),
                c.toLowerCase();
                if (a === "hilitecolor") return (a = this.commonNode({
                    "*": ".background-color"
                })) && (c = a.css("background-color")),
                c = la(c),
                c === "" && (c = "default"),
                c.toLowerCase();
                return c
            },
            toggle: function(a, b) {
                this.commonNode(b) ? this.remove(b) : this.wrap(a);
                return this.select()
            },
            bold: function() {
                return this.toggle("<strong></strong>", {
                    span: ".font-weight=bold",
                    strong: "*",
                    b: "*"
                })
            },
            italic: function() {
                return this.toggle("<em></em>", {
                    span: ".font-style=italic",
                    em: "*",
                    i: "*"
                })
            },
            underline: function() {
                return this.toggle("<u></u>", {
                    span: ".text-decoration=underline",
                    u: "*"
                })
            },
            strikethrough: function() {
                return this.toggle("<s></s>", {
                    span: ".text-decoration=line-through",
                    s: "*"
                })
            },
            forecolor: function(a) {
                return this.toggle('<span style="color:' + a + ';"></span>', {
                    span: ".color=" + a,
                    font: "color"
                })
            },
            hilitecolor: function(a) {
                return this.toggle('<span style="background-color:' + a + ';"></span>', {
                    span: ".background-color=" + a
                })
            },
            fontsize: function(a) {
                return this.toggle('<span style="font-size:' + a + ';"></span>', {
                    span: ".font-size=" + a,
                    font: "size"
                })
            },
            fontname: function(a) {
                return this.fontfamily(a)
            },
            fontfamily: function(a) {
                return this.toggle('<span style="font-family:' + a + ';"></span>', {
                    span: ".font-family=" + a,
                    font: "face"
                })
            },
            removeformat: function() {
                var a = {
                    "*": ".font-weight,.font-style,.text-decoration,.color,.background-color,.font-size,.font-family,.text-indent"
                };
                k(Hb,
                function(b) {
                    a[b] = "*"
                });
                this.remove(a);
                return this.select()
            },
            inserthtml: function(a) {
                function b(a, b) {
                    var b = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + b,
                    c = a.get();
                    c.item ? c.item(0).outerHTML = b: c.pasteHTML(b);
                    var e = a.doc.getElementById("__kindeditor_temp_tag__");
                    e.parentNode.removeChild(e);
                    c = ob(c);
                    a.setEnd(c.endContainer, c.endOffset);
                    a.collapse(!1);
                    d.select(!1)
                }
                function c(a, b) {
                    var c = a.doc,
                    e = c.createDocumentFragment();
                    f("@" + b, c).each(function() {
                        e.appendChild(this)
                    });
                    a.deleteContents();
                    a.insertNode(e);
                    a.collapse(!1);
                    d.select(!1)
                }
                var d = this,
                e = d.range;
                if (a === "") return d;
                if (tb(f(e.startContainer))) return d;
                if (o) {
                    try {
                        b(e, a)
                    } catch(i) {
                        c(e, a)
                    }
                    return d
                }
                c(e, a);
                return d
            },
            hr: function() {
                return this.inserthtml("<hr />")
            },
            print: function() {
                this.win.print();
                return this
            },
            insertimage: function(a, b, c, d, e, f) {
                b = n(b, "");
                n(e, 0);
                a = '<img src="' + E(a) + '" data-ke-src="' + E(a) + '" ';
                c && (a += 'width="' + E(c) + '" ');
                d && (a += 'height="' + E(d) + '" ');
                b && (a += 'title="' + E(b) + '" ');
                f && (a += 'align="' + E(f) + '" ');
                a += 'alt="' + E(b) + '" ';
                a += "/>";
                return this.inserthtml(a)
            },
            createlink: function(a, b) {
                var c = this.doc,
                d = this.range;
                this.select();
                var e = this.commonNode({
                    a: "*"
                });
                e && !d.isControl() && (d.selectNode(e.get()), this.select());
                d.collapsed ? (c = '<a href="' + E(a) + '" data-ke-src="' + E(a) + '" ', b && (c += ' target="' + E(b) + '"'), c += ">" + E(a) + "</a>", this.inserthtml(c)) : (O(c, "createlink", "__kindeditor_temp_url__"), f('a[href="__kindeditor_temp_url__"]', c).each(function() {
                    f(this).attr("href", a).attr("data-ke-src", a);
                    b ? f(this).attr("target", b) : f(this).removeAttr("target")
                }));
                return this
            },
            unlink: function() {
                var a = this.doc,
                b = this.range;
                this.select();
                if (b.collapsed) {
                    var c = this.commonNode({
                        a: "*"
                    });
                    c && (b.selectNode(c.get()), this.select());
                    O(a, "unlink", null);
                    aa && f(b.startContainer).name === "img" && (a = f(b.startContainer).parent(), a.name === "a" && a.remove(!0))
                } else O(a, "unlink", null);
                return this
            }
        });
        k("formatblock,selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript".split(","),
        function(a, b) {
            sa.prototype[b] = function(a) {
                this.select();
                O(this.doc, b, a); (!o || M(b, "formatblock,selectall,insertorderedlist,insertunorderedlist".split(",")) >= 0) && this.selection();
                return this
            }
        });
        k("cut,copy,paste".split(","),
        function(a, b) {
            sa.prototype[b] = function() {
                if (!this.doc.queryCommandSupported(b)) throw "not supported";
                this.select();
                O(this.doc, b, null);
                return this
            }
        });
        f.cmd = ub;
        F(T, {
            init: function(a) {
                var b = this;
                b.name = a.name || "";
                b.doc = a.doc || document;
                b.win = R(b.doc);
                b.x = r(a.x);
                b.y = r(a.y);
                b.z = a.z;
                b.width = r(a.width);
                b.height = r(a.height);
                b.div = f('<div style="display:block;"></div>');
                b.options = a;
                b._alignEl = a.alignEl;
                b.width && b.div.css("width", b.width);
                b.height && b.div.css("height", b.height);
                b.z && b.div.css({
                    position: "absolute",
                    left: b.x,
                    top: b.y,
                    "z-index": b.z
                });
                b.z && (b.x === l || b.y === l) && b.autoPos(b.width, b.height);
                a.cls && b.div.addClass(a.cls);
                a.css && b.div.css(a.css);
                a.src ? f(a.src).replaceWith(b.div) : f(b.doc.body).append(b.div);
                a.html && b.div.html(a.html);
                if (a.autoScroll) if (o && G < 7 || S) {
                    var c = fa();
                    f(b.win).bind("scroll",
                    function() {
                        var a = fa(),
                        e = a.x - c.x,
                        a = a.y - c.y;
                        b.pos(t(b.x) + e, t(b.y) + a, !1)
                    })
                } else b.div.css("position", "fixed")
            },
            pos: function(a, b, c) {
                c = n(c, !0);
                if (a !== null && (a = a < 0 ? 0 : r(a), this.div.css("left", a), c)) this.x = a;
                if (b !== null && (b = b < 0 ? 0 : r(b), this.div.css("top", b), c)) this.y = b;
                return this
            },
            autoPos: function(a, b) {
                var c = t(a) || 0,
                d = t(b) || 0,
                e = fa();
                if (this._alignEl) {
                    var i = f(this._alignEl),
                    g = i.pos(),
                    c = P(i[0].clientWidth / 2 - c / 2),
                    d = P(i[0].clientHeight / 2 - d / 2);
                    x = c < 0 ? g.x: g.x + c;
                    y = d < 0 ? g.y: g.y + d
                } else g = I(this.doc),
                x = P(e.x + (g.clientWidth - c) / 2),
                y = P(e.y + (g.clientHeight - d) / 2);
                o && G < 7 || S || (x -= e.x, y -= e.y);
                return this.pos(x, y)
            },
            remove: function() {
                var a = this;
                o && G < 7 && f(a.win).unbind("scroll");
                a.div.remove();
                k(a,
                function(b) {
                    a[b] = null
                });
                return this
            },
            show: function() {
                this.div.show();
                return this
            },
            hide: function() {
                this.div.hide();
                return this
            },
            draggable: function(a) {
                var b = this,
                a = a || {};
                a.moveEl = b.div;
                a.moveFn = function(a, d, e, f, g, h) {
                    if ((a += g) < 0) a = 0;
                    if ((d += h) < 0) d = 0;
                    b.pos(a, d)
                };
                Pa(a);
                return b
            }
        });
        f.widget = Ra;
        F(ta, T, {
            init: function(a) {
                function b() {
                    var b = Qa(c.iframe);
                    b.open();
                    if (h) b.domain = document.domain;
                    b.write(Sb(d, e, i, g));
                    b.close();
                    c.win = c.iframe[0].contentWindow;
                    c.doc = b;
                    var j = ub(b);
                    c.afterChange(function() {
                        j.selection()
                    });
                    aa && f(b).click(function(a) {
                        f(a.target).name === "img" && (j.selection(!0), j.range.selectNode(a.target), j.select())
                    });
                    o && f(b).keydown(function(a) {
                        if (a.which == 8) {
                            j.selection();
                            var b = j.range;
                            b.isControl() && (b.collapse(!0), f(b.startContainer.childNodes[b.startOffset]).remove(), a.preventDefault())
                        }
                    });
                    c.cmd = j;
                    c.html(Z(c.srcElement));
                    o ? (b.body.disabled = !0, b.body.contentEditable = !0, b.body.removeAttribute("disabled")) : b.designMode = "on";
                    a.afterCreate && a.afterCreate.call(c)
                }
                var c = this;
                ta.parent.init.call(c, a);
                c.srcElement = f(a.srcElement);
                c.div.addClass("ke-edit");
                c.designMode = n(a.designMode, !0);
                c.beforeGetHtml = a.beforeGetHtml;
                c.beforeSetHtml = a.beforeSetHtml;
                c.afterSetHtml = a.afterSetHtml;
                var d = n(a.themesPath, ""),
                e = a.bodyClass,
                i = a.cssPath,
                g = a.cssData,
                h = location.host.replace(/:\d+/, "") !== document.domain,
                j = "document.open();" + (h ? 'document.domain="' + document.domain + '";': "") + "document.close();",
                j = o ? ' src="javascript:void(function(){' + encodeURIComponent(j) + '}())"': "";
                c.iframe = f('<iframe class="ke-edit-iframe" hidefocus="true" frameborder="0"' + j + "></iframe>").css("width", "100%");
                c.textarea = f('<textarea class="ke-edit-textarea" hidefocus="true"></textarea>').css("width", "100%");
                c.width && c.setWidth(c.width);
                c.height && c.setHeight(c.height);
                c.designMode ? c.textarea.hide() : c.iframe.hide();
                h && c.iframe.bind("load",
                function() {
                    c.iframe.unbind("load");
                    o ? b() : setTimeout(b, 0)
                });
                c.div.append(c.iframe);
                c.div.append(c.textarea);
                c.srcElement.hide(); ! h && b()
            },
            setWidth: function(a) {
                this.div.css("width", r(a));
                return this
            },
            setHeight: function(a) {
                a = r(a);
                this.div.css("height", a);
                this.iframe.css("height", a);
                if (o && G < 8 || S) a = r(t(a) - 2);
                this.textarea.css("height", a);
                return this
            },
            remove: function() {
                var a = this.doc;
                f(a.body).unbind();
                f(a).unbind();
                f(this.win).unbind();
                Z(this.srcElement, this.html());
                this.srcElement.show();
                a.write("");
                this.iframe.unbind();
                this.textarea.unbind();
                ta.parent.remove.call(this)
            },
            html: function(a, b) {
                var c = this.doc;
                if (this.designMode) {
                    c = c.body;
                    if (a === l) return a = b ? "<!doctype html><html>" + c.parentNode.innerHTML + "</html>": c.innerHTML,
                    this.beforeGetHtml && (a = this.beforeGetHtml(a)),
                    Wa && a == "<br />" && (a = ""),
                    a;
                    this.beforeSetHtml && (a = this.beforeSetHtml(a));
                    f(c).html(a);
                    this.afterSetHtml && this.afterSetHtml();
                    return this
                }
                if (a === l) return this.textarea.val();
                this.textarea.val(a);
                return this
            },
            design: function(a) {
                if (a === l ? !this.designMode: a) {
                    if (!this.designMode) a = this.html(),
                    this.designMode = !0,
                    this.html(a),
                    this.textarea.hide(),
                    this.iframe.show()
                } else if (this.designMode) a = this.html(),
                this.designMode = !1,
                this.html(a),
                this.iframe.hide(),
                this.textarea.show();
                return this.focus()
            },
            focus: function() {
                this.designMode ? this.win.focus() : this.textarea[0].focus();
                return this
            },
            blur: function() {
                if (o) {
                    var a = f('<input type="text" style="float:left;width:0;height:0;padding:0;margin:0;border:0;" value="" />', this.div);
                    this.div.append(a);
                    a[0].focus();
                    a.remove()
                } else this.designMode ? this.win.blur() : this.textarea[0].blur();
                return this
            },
            afterChange: function(a) {
                function b(b) {
                    setTimeout(function() {
                        a(b)
                    },
                    1)
                }
                var c = this.doc,
                d = c.body;
                f(c).keyup(function(b) { ! b.ctrlKey && !b.altKey && Xa[b.which] && a(b)
                });
                f(c).mouseup(a).contextmenu(a);
                f(this.win).blur(a);
                f(d).bind("paste", b);
                f(d).bind("cut", b);
                return this
            }
        });
        f.edit = vb;
        f.iframeDoc = Qa;
        F(Sa, T, {
            init: function(a) {
                function b(a) {
                    a = f(a);
                    if (a.hasClass("ke-outline")) return a;
                    if (a.hasClass("ke-toolbar-icon")) return a.parent()
                }
                function c(a, c) {
                    var d = b(a.target);
                    if (d && !d.hasClass("ke-disabled") && !d.hasClass("ke-selected")) d[c]("ke-on")
                }
                var d = this;
                Sa.parent.init.call(d, a);
                d.disableMode = n(a.disableMode, !1);
                d.noDisableItemMap = u(n(a.noDisableItems, []));
                d._itemMap = {};
                d.div.addClass("ke-toolbar").bind("contextmenu,mousedown,mousemove",
                function(a) {
                    a.preventDefault()
                }).attr("unselectable", "on");
                d.div.mouseover(function(a) {
                    c(a, "addClass")
                }).mouseout(function(a) {
                    c(a, "removeClass")
                }).click(function(a) {
                    var c = b(a.target);
                    c && !c.hasClass("ke-disabled") && d.options.click.call(this, a, c.attr("data-name"))
                })
            },
            get: function(a) {
                if (this._itemMap[a]) return this._itemMap[a];
                return this._itemMap[a] = f("span.ke-icon-" + a, this.div).parent()
            },
            select: function(a) {
                wb.call(this, a,
                function(a) {
                    a.addClass("ke-selected")
                });
                return self
            },
            unselect: function(a) {
                wb.call(this, a,
                function(a) {
                    a.removeClass("ke-selected").removeClass("ke-on")
                });
                return self
            },
            enable: function(a) {
                if (a = a.get ? a: this.get(a)) a.removeClass("ke-disabled"),
                a.opacity(1);
                return this
            },
            disable: function(a) {
                if (a = a.get ? a: this.get(a)) a.removeClass("ke-selected").addClass("ke-disabled"),
                a.opacity(0.5);
                return this
            },
            disableAll: function(a, b) {
                var c = this,
                d = c.noDisableItemMap;
                b && (d = u(b)); (a === l ? !c.disableMode: a) ? (f("span.ke-outline", c.div).each(function() {
                    var a = f(this),
                    b = a[0].getAttribute("data-name", 2);
                    d[b] || c.disable(a)
                }), c.disableMode = !0) : (f("span.ke-outline", c.div).each(function() {
                    var a = f(this),
                    b = a[0].getAttribute("data-name", 2);
                    d[b] || c.enable(a)
                }), c.disableMode = !1);
                return c
            }
        });
        f.toolbar = xb;
        F(ua, T, {
            init: function(a) {
                a.z = a.z || 811213;
                ua.parent.init.call(this, a);
                this.centerLineMode = n(a.centerLineMode, !0);
                this.div.addClass("ke-menu").bind("click,mousedown",
                function(a) {
                    a.stopPropagation()
                }).attr("unselectable", "on")
            },
            addItem: function(a) {
                if (a.title === "-") this.div.append(f('<div class="ke-menu-separator"></div>'));
                else {
                    var b = f('<div class="ke-menu-item" unselectable="on"></div>'),
                    c = f('<div class="ke-inline-block ke-menu-item-left"></div>'),
                    d = f('<div class="ke-inline-block ke-menu-item-right"></div>'),
                    e = r(a.height),
                    i = a.iconClass;
                    this.div.append(b);
                    e && (b.css("height", e), d.css("line-height", e));
                    var g;
                    this.centerLineMode && (g = f('<div class="ke-inline-block ke-menu-item-center"></div>'), e && g.css("height", e));
                    b.mouseover(function() {
                        f(this).addClass("ke-menu-item-on");
                        g && g.addClass("ke-menu-item-center-on")
                    }).mouseout(function() {
                        f(this).removeClass("ke-menu-item-on");
                        g && g.removeClass("ke-menu-item-center-on")
                    }).click(function(b) {
                        a.click.call(f(this));
                        b.stopPropagation()
                    }).append(c);
                    g && b.append(g);
                    b.append(d);
                    a.checked && (i = "ke-icon-checked");
                    c.html('<span class="ke-inline-block ke-toolbar-icon ke-toolbar-icon-url ' + i + '"></span>');
                    d.html(a.title);
                    return this
                }
            },
            remove: function() {
                this.options.beforeRemove && this.options.beforeRemove.call(this);
                f(".ke-menu-item", this.div[0]).unbind();
                ua.parent.remove.call(this);
                return this
            }
        });
        f.menu = Ta;
        F(va, T, {
            init: function(a) {
                a.z = a.z || 811213;
                va.parent.init.call(this, a);
                var b = a.colors || [["#E53333", "#E56600", "#FF9900", "#64451D", "#DFC5A4", "#FFE500"], ["#009900", "#006600", "#99BB00", "#B8D100", "#60D978", "#00D5FF"], ["#337FE5", "#003399", "#4C33E5", "#9933E5", "#CC33E5", "#EE33EE"], ["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333", "#000000"]];
                this.selectedColor = (a.selectedColor || "").toLowerCase();
                this._cells = [];
                this.div.addClass("ke-colorpicker").bind("click,mousedown",
                function(a) {
                    a.stopPropagation()
                }).attr("unselectable", "on");
                a = this.doc.createElement("table");
                this.div.append(a);
                a.className = "ke-colorpicker-table";
                a.cellPadding = 0;
                a.cellSpacing = 0;
                a.border = 0;
                var c = a.insertRow(0),
                d = c.insertCell(0);
                d.colSpan = b[0].length;
                this._addAttr(d, "", "ke-colorpicker-cell-top");
                for (var e = 0; e < b.length; e++) for (var c = a.insertRow(e + 1), f = 0; f < b[e].length; f++) d = c.insertCell(f),
                this._addAttr(d, b[e][f], "ke-colorpicker-cell")
            },
            _addAttr: function(a, b, c) {
                var d = this,
                a = f(a).addClass(c);
                d.selectedColor === b.toLowerCase() && a.addClass("ke-colorpicker-cell-selected");
                a.attr("title", b || d.options.noColor);
                a.mouseover(function() {
                    f(this).addClass("ke-colorpicker-cell-on")
                });
                a.mouseout(function() {
                    f(this).removeClass("ke-colorpicker-cell-on")
                });
                a.click(function(a) {
                    a.stop();
                    d.options.click.call(f(this), b)
                });
                b ? a.append(f('<div class="ke-colorpicker-cell-color" unselectable="on"></div>').css("background-color", b)) : a.html(d.options.noColor);
                f(a).attr("unselectable", "on");
                d._cells.push(a)
            },
            remove: function() {
                k(this._cells,
                function() {
                    this.unbind()
                });
                va.parent.remove.call(this);
                return this
            }
        });
        f.colorpicker = yb;
        F(zb, {
            init: function(a) {
                var b = f(a.button),
                c = a.fieldName || "file",
                d = a.url || "",
                e = b.val(),
                i = b[0].className || "",
                g = "kindeditor_upload_iframe_" + (new Date).getTime();
                a.afterError = a.afterError ||
                function(a) {
                    alert(a)
                };
                c = ['<div class="ke-inline-block ' + i + '">', '<iframe name="' + g + '" style="display:none;"></iframe>', '<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="' + g + '" action="' + d + '">', '<span class="ke-button-common">', '<input type="button" class="ke-button-common ke-button" value="' + e + '" />', "</span>", '<input type="file" class="ke-upload-file" name="' + c + '" tabindex="-1" />', "</form></div>"].join("");
                c = f(c, b.doc);
                b.hide();
                b.before(c);
                this.div = c;
                this.button = b;
                this.iframe = f("iframe", c);
                this.form = f("form", c);
                this.fileBox = f(".ke-upload-file", c).width(f(".ke-button-common").width());
                this.options = a
            },
            submit: function() {
                var a = this,
                b = a.iframe;
                b.bind("load",
                function() {
                    b.unbind();
                    var c, e = f.iframeDoc(b).body.innerHTML;
                    try {
                        c = f.json(e)
                    } catch(i) {
                        a.options.afterError.call(a, e)
                    }
                    c && a.options.afterUpload.call(a, c)
                });
                a.form[0].submit();
                var c = document.createElement("form");
                a.fileBox.before(c);
                f(c).append(a.fileBox);
                c.reset();
                f(c).remove(!0);
                return a
            },
            remove: function() {
                this.fileBox && this.fileBox.unbind();
                this.div.remove();
                this.button.show();
                return this
            }
        });
        f.uploadbutton = function(a) {
            return new zb(a)
        };
        F(wa, T, {
            init: function(a) {
                a.z = a.z || 811213;
                wa.parent.init.call(this, a);
                var b = a.title,
                c = f(a.body, this.doc),
                d = a.previewBtn,
                e = a.yesBtn,
                i = a.noBtn,
                g = a.closeBtn,
                h = n(a.shadowMode, !0),
                j = n(a.showMask, !0);
                this.div.addClass("ke-dialog").bind("click,mousedown",
                function(a) {
                    a.stopPropagation()
                }).addClass("ke-dialog-" + (h ? "": "no-") + "shadow");
                h = f('<div class="ke-dialog-header"></div>');
                this.div.append(h);
                h.html(b);
                this.closeIcon = f('<span class="ke-dialog-icon-close" title="' + g.name + '"></span>').click(g.click);
                h.append(this.closeIcon);
                this.draggable({
                    clickEl: h,
                    beforeDrag: a.beforeDrag
                });
                a = f('<div class="ke-dialog-body"></div>');
                this.div.append(a);
                a.append(c);
                var m = f('<div class="ke-dialog-footer"></div>'); (d || e || i) && this.div.append(m);
                k([{
                    btn: d,
                    name: "preview"
                },
                {
                    btn: e,
                    name: "yes"
                },
                {
                    btn: i,
                    name: "no"
                }],
                function() {
                    if (this.btn) {
                        var a = this.btn,
                        a = a || {},
                        b = a.name || "",
                        c = f('<span class="ke-button-common ke-button-outer" title="' + b + '"></span>'),
                        b = f('<input class="ke-button-common ke-button" type="button" value="' + b + '" />');
                        a.click && b.click(a.click);
                        c.append(b);
                        c.addClass("ke-dialog-" + this.name);
                        m.append(c)
                    }
                });
                this.height && a.height(t(this.height) - h.height() - m.height());
                this.mask = null;
                if (j && (d = I(this.doc), c = Math.max(d.scrollWidth, d.clientWidth), d = Math.max(d.scrollHeight, d.clientHeight), this.mask = Ra({
                    x: 0,
                    y: 0,
                    z: this.z - 1,
                    cls: "ke-dialog-mask",
                    width: c,
                    height: d
                }), o && G < 7)) this.iframeMask = f('<iframe src="about:blank" style="position:absolute;top:0;left:0;z-index:' + (this.z - 2) + ";width:" + c + "px;height:" + d + 'px;filter:alpha(opacity=0)"></iframe>').appendTo(document.body);
                this.autoPos(this.div.width(), this.div.height());
                this.footerDiv = m;
                this.bodyDiv = a;
                this.headerDiv = h
            },
            setMaskIndex: function(a) {
                this.mask.div.css("z-index", a);
                this.iframeMask && this.iframeMask.css("z-index", a - 1)
            },
            showLoading: function() {
                var a = this.bodyDiv;
                this.loading = f('<div class="ke-dialog-loading"></div>').width(a.width()).height(a.height()).css("top", this.headerDiv.height() + "px");
                a.css("visibility", "hidden").after(this.loading);
                return this
            },
            hideLoading: function() {
                this.loading && this.loading.remove();
                this.bodyDiv.css("visibility", "visible");
                return this
            },
            remove: function() {
                this.options.beforeRemove && this.options.beforeRemove.call(this);
                this.mask && this.mask.remove();
                this.iframeMask && this.iframeMask.remove();
                this.closeIcon.unbind();
                f("input", this.div).unbind();
                this.footerDiv.unbind();
                this.bodyDiv.unbind();
                this.headerDiv.unbind();
                wa.parent.remove.call(this);
                return this
            }
        });
        f.dialog = Ab;
        f.tabs = function(a) {
            var b = Ra(a),
            c = b.remove,
            d = a.afterSelect,
            a = b.div,
            e = [];
            a.addClass("ke-tabs").bind("contextmenu,mousedown,mousemove",
            function(a) {
                a.preventDefault()
            });
            var i = f('<ul class="ke-tabs-ul ke-clearfix"></ul>');
            a.append(i);
            b.add = function(a) {
                var b = f('<li class="ke-tabs-li">' + a.title + "</li>");
                b.data("tab", a);
                e.push(b);
                i.append(b)
            };
            b.selectedIndex = 0;
            b.select = function(a) {
                b.selectedIndex = a;
                k(e,
                function(c, d) {
                    d.unbind();
                    c === a ? (d.addClass("ke-tabs-li-selected"), f(d.data("tab").panel).show("")) : (d.removeClass("ke-tabs-li-selected").removeClass("ke-tabs-li-on").mouseover(function() {
                        f(this).addClass("ke-tabs-li-on")
                    }).mouseout(function() {
                        f(this).removeClass("ke-tabs-li-on")
                    }).click(function() {
                        b.select(c)
                    }), f(d.data("tab").panel).hide())
                });
                d && d.call(b, a)
            };
            b.remove = function() {
                k(e,
                function() {
                    this.remove()
                });
                i.remove();
                c.call(b)
            };
            return b
        };
        f.loadScript = Ua;
        f.loadStyle = Va;
        f.ajax = function(a, b, c, d, e) {
            var c = c || "GET",
            e = e || "json",
            f = B.XMLHttpRequest ? new B.XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP");
            f.open(c, a, !0);
            f.onreadystatechange = function() {
                if (f.readyState == 4 && f.status == 200 && b) {
                    var a = C(f.responseText);
                    e == "json" && (a = Za(a));
                    b(a)
                }
            };
            if (c == "POST") {
                var g = [];
                k(d,
                function(a, b) {
                    g.push(encodeURIComponent(a) + "=" + encodeURIComponent(b))
                });
                try {
                    f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                } catch(h) {}
                f.send(g.join("&"))
            } else f.send(null)
        };
        var $ = {},
        L = {};
        ya.prototype = {
            lang: function(a) {
                return Db(a, this.langType)
            },
            loadPlugin: function(a, b) {
                var c = this;
                if ($[a]) {
                    if (c._calledPlugins[a]) return b && b.call(c),
                    c;
                    $[a].call(c, KindEditor);
                    b && b.call(c);
                    c._calledPlugins[a] = !0;
                    return c
                }
                if (c.isLoading) return c;
                c.isLoading = !0;
                Ua(c.pluginsPath + a + "/" + a + ".js?ver=" + encodeURIComponent(f.DEBUG ? za: "4.0.3 (2011-11-04)"),
                function() {
                    c.isLoading = !1;
                    $[a] && c.loadPlugin(a, b)
                });
                return c
            },
            handler: function(a, b) {
                var c = this;
                c._handlers[a] || (c._handlers[a] = []);
                if (Ya(b)) return c._handlers[a].push(b),
                c;
                k(c._handlers[a],
                function() {
                    b = this.call(c, b)
                });
                return b
            },
            clickToolbar: function(a, b) {
                var c = this,
                d = "clickToolbar" + a;
                if (b === l) {
                    if (c._handlers[d]) return c.handler(d);
                    c.loadPlugin(a,
                    function() {
                        c.handler(d)
                    });
                    return c
                }
                return c.handler(d, b)
            },
            updateState: function() {
                var a = this;
                k("justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,subscript,superscript,bold,italic,underline,strikethrough".split(","),
                function(b, c) {
                    a.cmd.state(c) ? a.toolbar.select(c) : a.toolbar.unselect(c)
                });
                return a
            },
            addContextmenu: function(a) {
                this._contextmenus.push(a);
                return this
            },
            afterCreate: function(a) {
                return this.handler("afterCreate", a)
            },
            beforeRemove: function(a) {
                return this.handler("beforeRemove", a)
            },
            beforeGetHtml: function(a) {
                return this.handler("beforeGetHtml", a)
            },
            beforeSetHtml: function(a) {
                return this.handler("beforeSetHtml", a)
            },
            afterSetHtml: function(a) {
                return this.handler("afterSetHtml", a)
            },
            create: function() {
                function a() {
                    m.height() === 0 ? setTimeout(a, 100) : c.resize(e, i)
                }
                function b(a, b, d) {
                    d = n(d, !0);
                    if (a && a >= c.minWidth && (c.resize(a, null), d)) c.width = r(a);
                    if (b && b >= c.minHeight && (c.resize(null, b), d)) c.height = r(b)
                }
                var c = this,
                d = c.fullscreenMode;
                if (c.isCreated) return c;
                d ? I().style.overflow = "hidden": I().style.overflow = "";
                var e = d ? I().clientWidth + "px": c.width,
                i = d ? I().clientHeight + "px": c.height;
                if (o && G < 8 || S) i = r(t(i) + 2);
                var g = c.container = f(c.layout);
                d ? f(document.body).append(g) : c.srcElement.before(g);
                var h = f(".toolbar", g),
                j = f(".edit", g),
                m = c.statusbar = f(".statusbar", g);
                g.removeClass("container").addClass("ke-container ke-container-" + c.themeType).css("width", e);
                d ? (g.css({
                    position: "absolute",
                    left: 0,
                    top: 0,
                    "z-index": 811211
                }), c._scrollPos = fa(), B.scrollTo(0, 0), f(document.body).css({
                    height: "1px",
                    overflow: "hidden"
                }), f(document.body.parentNode).css("overflow", "hidden")) : c._scrollPos && (f(document.body).css({
                    height: "",
                    overflow: ""
                }), f(document.body.parentNode).css("overflow", ""), B.scrollTo(c._scrollPos.x, c._scrollPos.y));
                var k = [];
                f.each(c.items,
                function(a, b) {
                    b == "|" ? k.push('<span class="ke-inline-block ke-separator"></span>') : b == "/" ? k.push("<br />") : (k.push('<span class="ke-inline-block ke-outline" data-name="' + b + '" title="' + c.lang(b) + '" unselectable="on">'), k.push('<span class="ke-inline-block ke-toolbar-icon ke-toolbar-icon-url ke-icon-' + b + '" unselectable="on"></span></span>'))
                });
                var h = c.toolbar = xb({
                    src: h,
                    html: k.join(""),
                    noDisableItems: c.noDisableItems,
                    click: function(a, b) {
                        a.stop();
                        if (c.menu) {
                            var d = c.menu.name;
                            c.hideMenu();
                            if (d === b) return
                        }
                        c.clickToolbar(b)
                    }
                }),
                l = t(i) - h.div.height(),
                A = c.edit = vb({
                    height: l > 0 && t(i) > c.minHeight ? l: c.minHeight,
                    src: j,
                    srcElement: c.srcElement,
                    designMode: c.designMode,
                    themesPath: c.themesPath,
                    bodyClass: c.bodyClass,
                    cssPath: c.cssPath,
                    cssData: c.cssData,
                    beforeGetHtml: function(a) {
                        a = c.beforeGetHtml(a);
                        return Q(a, c.filterMode ? c.htmlTags: null, c.urlType, c.wellFormatMode, c.indentChar)
                    },
                    beforeSetHtml: function(a) {
                        a = Q(a, c.filterMode ? c.htmlTags: null, "", !1);
                        return c.beforeSetHtml(a)
                    },
                    afterSetHtml: function() {
                        c.afterSetHtml()
                    },
                    afterCreate: function() {
                        c.edit = A = this;
                        c.cmd = A.cmd;
                        c._docMousedownFn = function() {
                            c.menu && c.hideMenu()
                        };
                        f(A.doc, document).mousedown(c._docMousedownFn);
                        Tb.call(c);
                        Ub.call(c);
                        Vb.call(c);
                        Wb.call(c);
                        A.afterChange(function() {
                            A.designMode && (c.updateState(), c.addBookmark(), c.options.afterChange && c.options.afterChange.call(c))
                        });
                        A.textarea.keyup(function(a) { ! a.ctrlKey && !a.altKey && Jb[a.which] && c.options.afterChange && c.options.afterChange.call(c)
                        });
                        c.readonlyMode && c.readonly();
                        c.isCreated = !0;
                        c.initContent = c.html();
                        c.afterCreate();
                        c.options.afterCreate && c.options.afterCreate.call(c)
                    }
                });
                m.removeClass("statusbar").addClass("ke-statusbar").append('<span class="ke-inline-block ke-statusbar-center-icon"></span>').append('<span class="ke-inline-block ke-statusbar-right-icon"></span>');
                f(B).unbind("resize");
                a();
                d ? (f(B).bind("resize",
                function() {
                    c.isCreated && b(I().clientWidth, I().clientHeight, !1)
                }), h.select("fullscreen"), m.first().css("visibility", "hidden"), m.last().css("visibility", "hidden")) : (c.resizeType > 0 ? Pa({
                    moveEl: g,
                    clickEl: m,
                    moveFn: function(a, c, d, e, f, j) {
                        e += j;
                        b(null, e)
                    }
                }) : m.first().css("visibility", "hidden"), c.resizeType === 2 ? Pa({
                    moveEl: g,
                    clickEl: m.last(),
                    moveFn: function(a, c, d, e, f, j) {
                        d += f;
                        e += j;
                        b(d, e)
                    }
                }) : m.last().css("visibility", "hidden"));
                return c
            },
            remove: function() {
                var a = this;
                if (!a.isCreated) return a;
                a.beforeRemove();
                a.menu && a.hideMenu();
                k(a.dialogs,
                function() {
                    a.hideDialog()
                });
                f(document).unbind("mousedown", a._docMousedownFn);
                a.toolbar.remove();
                a.edit.remove();
                a.statusbar.last().unbind();
                a.statusbar.unbind();
                a.container.remove();
                a.container = a.toolbar = a.edit = a.menu = null;
                a.dialogs = [];
                a.isCreated = !1;
                return a
            },
            resize: function(a, b) {
                a !== null && t(a) > this.minWidth && this.container.css("width", r(a));
                b !== null && (b = t(b) - this.toolbar.div.height() - this.statusbar.height(), b > 0 && t(b) > this.minHeight && this.edit.setHeight(b));
                return this
            },
            select: function() {
                this.isCreated && this.cmd.select();
                return this
            },
            html: function(a) {
                if (a === l) return this.isCreated ? this.edit.html() : Z(this.srcElement);
                this.isCreated ? this.edit.html(a) : Z(this.srcElement, a);
                return this
            },
            fullHtml: function() {
                return this.isCreated ? this.edit.html(l, !0) : ""
            },
            text: function(a) {
                return a === l ? C(this.html().replace(/<(?!img|embed).*?>/ig, "").replace(/&nbsp;/ig, " ")) : this.html(E(a))
            },
            isEmpty: function() {
                return C(this.text().replace(/\r\n|\n|\r/, "")) === ""
            },
            isDirty: function() {
                return C(this.initContent.replace(/\r\n|\n|\r|t/g, "")) !== C(this.html().replace(/\r\n|\n|\r|t/g, ""))
            },
            selectedHtml: function() {
                return this.isCreated ? this.cmd.range.html() : ""
            },
            count: function(a) {
                a = (a || "html").toLowerCase();
                if (a === "html") return U(this.html()).length;
                if (a === "text") return this.text().replace(/<(?:img|embed).*?>/ig, "K").replace(/\r\n|\n|\r/g, "").length;
                return 0
            },
            exec: function(a) {
                var a = a.toLowerCase(),
                b = this.cmd,
                c = M(a, "selectall,copy,paste,print".split(",")) < 0;
                c && this.addBookmark(!1);
                b[a].apply(b, Ba(arguments, 1));
                c && (this.updateState(), this.addBookmark(!1), this.options.afterChange && this.options.afterChange.call(this));
                return this
            },
            insertHtml: function(a) {
                if (!this.isCreated) return this;
                a = this.beforeSetHtml(a);
                this.exec("inserthtml", a);
                return this
            },
            appendHtml: function(a) {
                this.html(this.html() + a);
                if (this.isCreated) a = this.cmd,
                a.range.selectNodeContents(a.doc.body).collapse(!1),
                a.select();
                return this
            },
            sync: function() {
                Z(this.srcElement, this.html());
                return this
            },
            focus: function() {
                this.isCreated ? this.edit.focus() : this.srcElement[0].focus();
                return this
            },
            blur: function() {
                this.isCreated ? this.edit.blur() : this.srcElement[0].blur();
                return this
            },
            addBookmark: function(a) {
                var a = n(a, !0),
                b = this.edit,
                c = b.doc.body,
                d = c.innerHTML;
                if (a && this._undoStack.length > 0 && Math.abs(d.length - U(this._undoStack[this._undoStack.length - 1].html).length) < this.minChangeSize) return this;
                b.designMode && !this._firstAddBookmark ? (b = this.cmd.range, a = b.createBookmark(!0), a.html = c.innerHTML, b.moveToBookmark(a)) : a = {
                    html: c.innerHTML
                };
                this._firstAddBookmark = !1;
                Eb(this._undoStack, a);
                return this
            },
            undo: function() {
                return Fb.call(this, this._undoStack, this._redoStack)
            },
            redo: function() {
                return Fb.call(this, this._redoStack, this._undoStack)
            },
            fullscreen: function(a) {
                this.fullscreenMode = a === l ? !this.fullscreenMode: a;
                return this.remove().create()
            },
            readonly: function(a) {
                var a = n(a, !0),
                b = this,
                c = b.edit,
                d = c.doc;
                b.designMode ? b.toolbar.disableAll(a, []) : k(b.noDisableItems,
                function() {
                    b.toolbar[a ? "disable": "enable"](this)
                });
                o ? d.body.contentEditable = !a: d.designMode = a ? "off": "on";
                c.textarea[0].disabled = a
            },
            createMenu: function(a) {
                var b = this.toolbar.get(a.name),
                c = b.pos();
                a.x = c.x;
                a.y = c.y + b.height();
                a.selectedColor !== l ? (a.cls = "ke-colorpicker-" + this.themeType, a.noColor = this.lang("noColor"), this.menu = yb(a)) : (a.cls = "ke-menu-" + this.themeType, a.centerLineMode = !1, this.menu = Ta(a));
                return this.menu
            },
            hideMenu: function() {
                this.menu.remove();
                this.menu = null;
                return this
            },
            hideContextmenu: function() {
                this.contextmenu.remove();
                this.contextmenu = null;
                return this
            },
            createDialog: function(a) {
                var b = this;
                a.autoScroll = n(a.autoScroll, !0);
                a.shadowMode = n(a.shadowMode, b.shadowMode);
                a.closeBtn = n(a.closeBtn, {
                    name: b.lang("close"),
                    click: function() {
                        b.hideDialog();
                        o && b.cmd && b.cmd.select()
                    }
                });
                a.noBtn = n(a.noBtn, {
                    name: b.lang(a.yesBtn ? "no": "close"),
                    click: function() {
                        b.hideDialog();
                        o && b.cmd && b.cmd.select()
                    }
                });
                if (b.dialogAlignType != "page") a.alignEl = b.container;
                a.cls = "ke-dialog-" + b.themeType;
                if (b.dialogs.length > 0) {
                    var c = b.dialogs[b.dialogs.length - 1];
                    b.dialogs[0].setMaskIndex(c.z + 2);
                    a.z = c.z + 3;
                    a.showMask = !1
                }
                a = Ab(a);
                b.dialogs.push(a);
                return a
            },
            hideDialog: function() {
                this.dialogs.length > 0 && this.dialogs.pop().remove();
                this.dialogs.length > 0 && this.dialogs[0].setMaskIndex(this.dialogs[this.dialogs.length - 1].z - 1);
                return this
            }
        };
        o && G < 7 && O(document, "BackgroundImageCache", !0);
        f.editor = function(a) {
            return new ya(a)
        };
        f.create = function(a, b) {
            function c(a) {
                k($,
                function(b, c) {
                    c.call(a, KindEditor)
                });
                return a.create()
            }
            b = b || {};
            b.basePath = n(b.basePath, f.basePath);
            b.themesPath = n(b.themesPath, b.basePath + "themes/");
            b.langPath = n(b.langPath, b.basePath + "lang/");
            b.pluginsPath = n(b.pluginsPath, b.basePath + "plugins/");
            if (n(b.loadStyleMode, f.options.loadStyleMode)) {
                var d = n(b.themeType, f.options.themeType);
                Va(b.themesPath + "default/default.css");
                Va(b.themesPath + d + "/" + d + ".css")
            }
            if (d = f(a)) {
                b.srcElement = d[0];
                if (!b.width) b.width = d[0].style.width || d.width();
                if (!b.height) b.height = d[0].style.height || d.height();
                var e = new ya(b);
                if (L[e.langType]) return c(e);
                Ua(e.langPath + e.langType + ".js?ver=" + encodeURIComponent(f.DEBUG ? za: "4.0.3 (2011-11-04)"),
                function() {
                    return c(e)
                });
                return e
            }
        };
        f.plugin = Bb;
        f.lang = Db;
        Bb("core",
        function(a) {
            var b = this,
            c = {
                undo: "Z",
                redo: "Y",
                bold: "B",
                italic: "I",
                underline: "U",
                print: "P",
                selectall: "A"
            };
            b.afterSetHtml(function() {
                b.options.afterChange && b.options.afterChange.call(b)
            });
            if (b.syncType == "form") {
                for (var d = a(b.srcElement), e = !1; d = d.parent();) if (d.name == "form") {
                    e = !0;
                    break
                }
                if (e) {
                    d.bind("submit",
                    function() {
                        b.sync();
                        b.edit.textarea.remove()
                    });
                    var f = a('[type="reset"]', d);
                    f.click(function() {
                        b.html(b.initContent);
                        b.cmd.selection()
                    });
                    b.beforeRemove(function() {
                        d.unbind();
                        f.unbind()
                    })
                }
            }
            b.clickToolbar("source",
            function() {
                if (!Gb) b.edit.designMode ? (b.toolbar.disableAll(!0), b.edit.design(!1), b.toolbar.select("source")) : (b.toolbar.disableAll(!1), b.edit.design(!0), b.toolbar.unselect("source")),
                b.designMode = b.edit.designMode
            });
            b.afterCreate(function() {
                b.designMode || b.toolbar.disableAll(!0).select("source")
            });
            b.clickToolbar("fullscreen",
            function() {
                b.fullscreen()
            });
            var g = !1;
            b.afterCreate(function() {
                a(b.edit.doc, b.edit.textarea).keyup(function(a) {
                    a.which == 27 && setTimeout(function() {
                        b.fullscreen()
                    },
                    0)
                });
                if (g) {
                    if (o && !b.designMode) return;
                    b.focus()
                }
                g || (g = !0)
            });
            k("undo,redo".split(","),
            function(a, d) {
                c[d] && b.afterCreate(function() {
                    Ca(this.edit.doc, c[d],
                    function() {
                        b.clickToolbar(d)
                    })
                });
                b.clickToolbar(d,
                function() {
                    b[d]()
                })
            });
            b.clickToolbar("formatblock",
            function() {
                var a = b.lang("formatblock.formatBlock"),
                c = {
                    h1: 28,
                    h2: 24,
                    h3: 18,
                    H4: 14,
                    p: 12
                },
                d = b.cmd.val("formatblock"),
                e = b.createMenu({
                    name: "formatblock",
                    width: b.langType == "en" ? 200 : 150
                });
                k(a,
                function(a, f) {
                    var h = "font-size:" + c[a] + "px;";
                    a.charAt(0) === "h" && (h += "font-weight:bold;");
                    e.addItem({
                        title: '<span style="' + h + '" unselectable="on">' + f + "</span>",
                        height: c[a] + 12,
                        checked: d === a || d === f,
                        click: function() {
                            b.select().exec("formatblock", "<" + a + ">").hideMenu()
                        }
                    })
                })
            });
            b.clickToolbar("fontname",
            function() {
                var a = b.cmd.val("fontname"),
                c = b.createMenu({
                    name: "fontname",
                    width: 150
                });
                k(b.lang("fontname.fontName"),
                function(d, e) {
                    c.addItem({
                        title: '<span style="font-family: ' + d + ';" unselectable="on">' + e + "</span>",
                        checked: a === d.toLowerCase() || a === e.toLowerCase(),
                        click: function() {
                            b.exec("fontname", d).hideMenu()
                        }
                    })
                })
            });
            b.clickToolbar("fontsize",
            function() {
                var a = b.cmd.val("fontsize"),
                c = b.createMenu({
                    name: "fontsize",
                    width: 150
                });
                k(b.fontSizeTable,
                function(d, e) {
                    c.addItem({
                        title: '<span style="font-size:' + e + ';" unselectable="on">' + e + "</span>",
                        height: t(e) + 12,
                        checked: a === e,
                        click: function() {
                            b.exec("fontsize", e).hideMenu()
                        }
                    })
                })
            });
            k("forecolor,hilitecolor".split(","),
            function(a, c) {
                b.clickToolbar(c,
                function() {
                    b.createMenu({
                        name: c,
                        selectedColor: b.cmd.val(c) || "default",
                        colors: b.colorTable,
                        click: function(a) {
                            b.exec(c, a).hideMenu()
                        }
                    })
                })
            });
            k("cut,copy,paste".split(","),
            function(a, c) {
                b.clickToolbar(c,
                function() {
                    b.focus();
                    try {
                        b.exec(c, null)
                    } catch(a) {
                        alert(b.lang(c + "Error"))
                    }
                })
            });
            b.clickToolbar("about",
            function() {
                b.createDialog({
                    name: "about",
                    width: 300,
					height:150,
                    title: b.lang("about"),
                    body: '<div style="margin:20px;"><div>KindEditor For wx.0du.cc</div><div>Copyright &copy; kindsoft All rights reserved.</div></div>'
                })
            });
            b.plugin.getSelectedLink = function() {
                return b.cmd.commonAncestor("a")
            };
            b.plugin.getSelectedImage = function() {
                return xa(b.edit.cmd.range,
                function(a) {
                    return ! /^ke-\w+$/i.test(a[0].className)
                })
            };
            b.plugin.getSelectedFlash = function() {
                return xa(b.edit.cmd.range,
                function(a) {
                    return a[0].className == "ke-flash"
                })
            };
            b.plugin.getSelectedMedia = function() {
                return xa(b.edit.cmd.range,
                function(a) {
                    return a[0].className == "ke-media" || a[0].className == "ke-rm"
                })
            };
            b.plugin.getSelectedAnchor = function() {
                return xa(b.edit.cmd.range,
                function(a) {
                    return a[0].className == "ke-anchor"
                })
            };
            k("link,image,flash,media,anchor".split(","),
            function(a, c) {
                var d = c.charAt(0).toUpperCase() + c.substr(1);
                k("edit,delete".split(","),
                function(a, e) {
                    b.addContextmenu({
                        title: b.lang(e + d),
                        click: function() {
                            b.loadPlugin(c,
                            function() {
                                b.plugin[c][e]();
                                b.hideMenu()
                            })
                        },
                        cond: b.plugin["getSelected" + d],
                        width: 150,
                        iconClass: e == "edit" ? "ke-icon-" + c: l
                    })
                });
                b.addContextmenu({
                    title: "-"
                })
            });
            b.plugin.getSelectedTable = function() {
                return b.cmd.commonAncestor("table")
            };
            b.plugin.getSelectedRow = function() {
                return b.cmd.commonAncestor("tr")
            };
            b.plugin.getSelectedCell = function() {
                return b.cmd.commonAncestor("td")
            };
            k("prop,cellprop,colinsertleft,colinsertright,rowinsertabove,rowinsertbelow,rowmerge,colmerge,rowsplit,colsplit,coldelete,rowdelete,insert,delete".split(","),
            function(a, c) {
                var d = M(c, ["prop", "delete"]) < 0 ? b.plugin.getSelectedCell: b.plugin.getSelectedTable;
                b.addContextmenu({
                    title: b.lang("table" + c),
                    click: function() {
                        b.loadPlugin("table",
                        function() {
                            b.plugin.table[c]();
                            b.hideMenu()
                        })
                    },
                    cond: d,
                    width: 170,
                    iconClass: "ke-icon-table" + c
                })
            });
            b.addContextmenu({
                title: "-"
            });
            k("selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript,hr,print,bold,italic,underline,strikethrough,removeformat,unlink".split(","),
            function(a, d) {
                c[d] && b.afterCreate(function() {
                    Ca(this.edit.doc, c[d],
                    function() {
                        b.cmd.selection();
                        b.clickToolbar(d)
                    })
                });
                b.clickToolbar(d,
                function() {
                    b.focus().exec(d, null)
                })
            });
            b.afterCreate(function() {
                function c() {
                    e.range.moveToBookmark(f);
                    e.select();
                    aa && (a("div." + i, g).each(function() {
                        a(this).after("<br />").remove(!0)
                    }), a("span.Apple-style-span", g).remove(!0), a("meta", g).remove());
                    var d = g[0].innerHTML;
                    g.remove();
                    d !== "" && (b.pasteType === 2 && (/schemas-microsoft-com|worddocument|mso-\w+/i.test(d) ? d = hb(d, b.filterMode ? b.htmlTags: a.options.htmlTags) : (d = Q(d, b.filterMode ? b.htmlTags: null), d = b.beforeSetHtml(d))), b.pasteType === 1 && (d = d.replace(/<br[^>]*>/ig, "\n"), d = d.replace(/<\/p><p[^>]*>/ig, "\n"), d = d.replace(/<[^>]+>/g, ""), d = d.replace(/&nbsp;/ig, " "), d = d.replace(/\n\s*\n/g, "\n"), d = b.newlineTag == "p" ? d.replace(/^/, "<p>").replace(/$/, "</p>").replace(/\n/g, "</p><p>") : d.replace(/\n/g, "<br />$&")), b.insertHtml(d))
                }
                var d = b.edit.doc,
                e, f, g, i = "__kindeditor_paste__",
                k = !1;
                a(d.body).bind("paste",
                function(l) {
                    if (b.pasteType === 0) l.stop();
                    else if (!k) {
                        k = !0;
                        a("div." + i, d).remove();
                        e = b.cmd.selection();
                        f = e.range.createBookmark();
                        g = a('<div class="' + i + '"></div>', d).css({
                            position: "absolute",
                            width: "1px",
                            height: "1px",
                            overflow: "hidden",
                            left: "-1981px",
                            top: a(f.start).pos().y + "px",
                            "white-space": "nowrap"
                        });
                        a(d.body).append(g);
                        if (o) {
                            var n = e.range.get(!0);
                            n.moveToElementText(g[0]);
                            n.select();
                            n.execCommand("paste");
                            l.preventDefault()
                        } else e.range.selectNodeContents(g[0]),
                        e.select();
                        setTimeout(function() {
                            c();
                            k = !1
                        },
                        0)
                    }
                })
            });
            b.beforeGetHtml(function(a) {
                return a.replace(/<img[^>]*class="?ke-(flash|rm|media)"?[^>]*>/ig,
                function(a) {
                    var a = K(a),
                    b = ea(a.style || ""),
                    c = jb(a["data-ke-tag"]);
                    c.width = n(a.width, t(n(b.width, "")));
                    c.height = n(a.height, t(n(b.height, "")));
                    return Ea(c)
                }).replace(/<img[^>]*class="?ke-anchor"?[^>]*>/ig,
                function(a) {
                    a = K(a);
                    return '<a name="' + unescape(a["data-ke-name"]) + '"></a>'
                }).replace(/<div\s+[^>]*data-ke-script-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig,
                function(a, b, c) {
                    return "<script" + unescape(b) + ">" + c + "<\/script>"
                }).replace(/(<[^>]*)data-ke-src="([^"]*)"([^>]*>)/ig,
                function(a, b, c) {
                    a = a.replace(/(\s+(?:href|src)=")[^"]*(")/i, "$1" + c + "$2");
                    return a = a.replace(/\s+data-ke-src="[^"]*"/i, "")
                }).replace(/(<[^>]+\s)data-ke-(on\w+="[^"]*"[^>]*>)/ig,
                function(a, b, c) {
                    return b + c
                })
            });
            b.beforeSetHtml(function(a) {
                return a.replace(/<embed[^>]*type="([^"]+)"[^>]*>(?:<\/embed>)?/ig,
                function(a) {
                    a = K(a);
                    a.src = n(a.src, "");
                    a.width = n(a.width, 0);
                    a.height = n(a.height, 0);
                    return kb(b.themesPath + "common/blank.gif", a)
                }).replace(/<a[^>]*name="([^"]+)"[^>]*>(?:<\/a>)?/ig,
                function(a) {
                    var c = K(a);
                    if (c.href !== l) return a;
                    return '<img class="ke-anchor" src="' + b.themesPath + 'common/anchor.gif" data-ke-name="' + escape(c.name) + '" />'
                }).replace(/<script([^>]*)>([\s\S]*?)<\/script>/ig,
                function(a, b, c) {
                    return '<div class="ke-script" data-ke-script-attr="' + escape(b) + '">' + c + "</div>"
                }).replace(/(<[^>]*)(href|src)="([^"]*)"([^>]*>)/ig,
                function(a, b, c, d, e) {
                    if (a.match(/\sdata-ke-src="[^"]*"/i)) return a;
                    return b + c + '="' + d + '" data-ke-src="' + d + '"' + e
                }).replace(/(<[^>]+\s)(on\w+="[^"]*"[^>]*>)/ig,
                function(a, b, c) {
                    return b + "data-ke-" + c
                }).replace(/<table[^>]*\s+border="0"[^>]*>/ig,
                function(a) {
                    if (a.indexOf("ke-zeroborder") >= 0) return a;
                    return Mb(a, "ke-zeroborder")
                })
            })
        })
    }
})(window);