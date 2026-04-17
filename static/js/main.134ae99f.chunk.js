(this.webpackJsonpreactniceresume =
  this.webpackJsonpreactniceresume || []).push([
  [0],
  {
    35: function (e, t, s) {},
    38: function (e, t, s) {},
    58: function (e, t, s) {},
    65: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(2),
        a = s.n(n),
        c = s(15),
        r = s.n(c),
        i = (s(35), s(4)),
        o = s(5),
        l = s(7),
        d = s(6),
        h = s(17),
        j = s(26),
        b = s.n(j),
        u = (s(38), s(27)),
        p = s(3),
        g = s.n(p),
        x = s(0),
        m = (function (e) {
          Object(l.a)(s, e);
          var t = Object(d.a)(s);
          function s() {
            return (Object(i.a)(this, s), t.apply(this, arguments));
          }
          return (
            Object(o.a)(s, [
              {
                key: "render",
                value: function () {
                  if (!this.props.data) return null;
                  var e = this.props.data.github,
                    t = this.props.data.linkedin,
                    s = (this.props.data.name, this.props.data.labName),
                    n = this.props.data.description,
                    a = this.props.data.uf_profile;
                  return Object(x.jsxs)("header", {
                    id: "home",
                     style: {
                        backgroundImage: "url('/SongLab/images/home_background.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      },
                    children: [
                     // Object(x.jsx)(u.a, { type: "circle", bg: !0 }),
                      Object(x.jsxs)("nav", {
                        id: "nav-wrap",
                        children: [
                          Object(x.jsx)("a", {
                            className: "mobile-btn",
                            href: "#nav-wrap",
                            title: "Show navigation",
                            children: "Show navigation",
                          }),
                          Object(x.jsx)("a", {
                            className: "mobile-btn",
                            href: "#home",
                            title: "Hide navigation",
                            children: "Hide navigation",
                          }),
                          Object(x.jsxs)("ul", {
                            id: "nav",
                            className: "nav",
                            children: [
                              Object(x.jsx)("li", {
                                className: "current",
                                children: Object(x.jsx)("a", {
                                  className: "smoothscroll",
                                  href: "#home",
                                  children: "Home",
                                }),
                              }),
                              Object(x.jsx)("li", {
                                children: Object(x.jsx)("a", {
                                  className: "smoothscroll",
                                  href: "#research",
                                  children: "Research",
                                }),
                              }),
                              Object(x.jsx)("li", {
                                children: Object(x.jsx)("a", {
                                  className: "smoothscroll",
                                  href: "#news",
                                  children: "News",
                                }),
                              }),
                              Object(x.jsx)("li", {
                                children: Object(x.jsx)("a", {
                                  className: "smoothscroll",
                                  href: "#about",
                                  children: "Teams",
                                }),
                              }),
                              Object(x.jsx)("li", {
                                children: Object(x.jsx)("a", {
                                  className: "smoothscroll",
                                  href: "#publications",
                                  children: "Publications",
                                }),
                              }),
                              Object(x.jsx)("li", {
                                children: Object(x.jsx)("a", {
                                  className: "smoothscroll",
                                  href: "#software-tools",
                                  children: "Developed Tools",
                                }),
                              }),
                              Object(x.jsx)("li", {
                                children: Object(x.jsx)("a", {
                                  className: "smoothscroll",
                                  href: "#contact",
                                  children: "Contact",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(x.jsx)("div", {
                        className: "row banner",
                        children: Object(x.jsxs)("div", {
                          className: "banner-text",
                          children: [
                            Object(x.jsx)(g.a, {
                              bottom: !0,
                              children: Object(x.jsx)("h1", {
                                className: "responsive-headline",
                                children: s,
                              }),
                            }),
                            Object(x.jsx)(g.a, {
                              bottom: !0,
                              duration: 1200,
                              children: Object(x.jsx)("h3", { children: n }),
                            }),
                            Object(x.jsx)("hr", {}),
                            Object(x.jsx)(g.a, {
                              bottom: !0,
                              duration: 2e3,
                              children: Object(x.jsxs)("ul", {
                                className: "social",
                                children: [
                                  Object(x.jsxs)("a", {
                                    href: a,
                                    className: "button btn school-btn",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                      marginRight: "15px",
                                      padding: "10px 15px",
                                      backgroundColor: "#00529b",
                                      color: "white",
                                      borderRadius: "5px",
                                    },
                                    children: [
                                      Object(x.jsx)("i", {
                                        className: "fa fa-book",
                                      }),
                                      " UF profile",
                                    ],
                                  }),
                                  Object(x.jsxs)("a", {
                                    href: t,
                                    className: "button btn github-btn",
                                    style: {
                                      marginRight: "15px",
                                      padding: "10px 15px",
                                      backgroundColor: "#00529b",
                                      color: "white",
                                      borderRadius: "5px",
                                    },
                                    children: [
                                      Object(x.jsx)("i", {
                                        className: "fa fa-linkedin",
                                      }),
                                      "Linkedin",
                                    ],
                                  }),
                                  Object(x.jsxs)("a", {
                                    href: e,
                                    className: "button btn linkedin-btn",
                                    style: {
                                      marginRight: "15px",
                                      padding: "10px 15px",
                                      borderRadius: "5px",
                                    },
                                    children: [
                                      Object(x.jsx)("i", {
                                        className: "fa fa-github",
                                      }),
                                      "Github",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(x.jsx)("p", {
                        className: "scrolldown",
                        children: Object(x.jsx)("a", {
                          className: "smoothscroll",
                          href: "#research",
                          children: Object(x.jsx)("i", {
                            className: "icon-down-circle",
                          }),
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            s
          );
        })(n.Component),
        O = (function (e) {
          Object(l.a)(s, e);
          var t = Object(d.a)(s);
          function s() {
            return (Object(i.a)(this, s), t.apply(this, arguments));
          }
          return (
            Object(o.a)(s, [
              {
                key: "render",
                value: function () {
                  if (!this.props.data) return null;
                  var e = this.props.data.social.map(function (e) {
                    return Object(x.jsx)(
                      "li",
                      {
                        children: Object(x.jsx)("a", {
                          href: e.url,
                          children: Object(x.jsx)("i", {
                            className: e.className,
                          }),
                        }),
                      },
                      e.name,
                    );
                  });
                  return Object(x.jsx)("footer", {
                    children: Object(x.jsxs)("div", {
                      className: "row",
                      children: [
                        Object(x.jsx)(g.a, {
                          bottom: !0,
                          children: Object(x.jsxs)("div", {
                            className: "twelve columns",
                            children: [
                              Object(x.jsx)("ul", {
                                className: "social-links",
                                children: e,
                              }),
                              Object(x.jsxs)("ul", {
                                className: "copyright",
                                children: [
                                  Object(x.jsx)("li", {
                                    children:
                                      "\xa9 Copyright 2021 Nordic Giant",
                                  }),
                                  Object(x.jsxs)("li", {
                                    children: [
                                      "Design by",
                                      " ",
                                      Object(x.jsx)("a", {
                                        title: "Styleshout",
                                        href: "http://www.styleshout.com/",
                                        children: "Styleshout",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(x.jsx)("div", {
                          id: "go-top",
                          children: Object(x.jsx)("a", {
                            className: "smoothscroll",
                            title: "Back to Top",
                            href: "#home",
                            children: Object(x.jsx)("i", {
                              className: "icon-up-open",
                            }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            s
          );
        })(n.Component),
        f = (n.Component, n.Component, s(12)),
        v = s(30),
        w = (function (e) {
          Object(l.a)(s, e);
          var t = Object(d.a)(s);
          function s(e) {
            var n;
            return (
              Object(i.a)(this, s),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(f.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault();
                var t = n.state,
                  s = {
                    contactName: t.contactName,
                    contactEmail: t.contactEmail,
                    contactSubject: t.contactSubject,
                    contactMessage: t.contactMessage,
                  };
                v.a
                  .send(
                    "service_30lmbk2",
                    "template_hwx9dbs",
                    s,
                    "0NlYRTzn992amyGA6",
                  )
                  .then(
                    function (e) {
                      (console.log("SUCCESS!", e.status, e.text),
                        n.setState({
                          messageSuccess: !0,
                          messageError: !1,
                          showSuccessMessage: !0,
                          contactName: "",
                          contactEmail: "",
                          contactSubject: "",
                          contactMessage: "",
                        }),
                        setTimeout(function () {
                          n.setState({ showSuccessMessage: !1 });
                        }, 5e3));
                    },
                    function (e) {
                      (console.log("FAILED...", e),
                        n.setState({ messageSuccess: !1, messageError: !0 }));
                    },
                  );
              }),
              (n.state = {
                contactName: "",
                contactEmail: "",
                contactSubject: "",
                contactMessage: "",
                messageSuccess: !1,
                messageError: !1,
                showSuccessMessage: !1,
              }),
              n
            );
          }
          return (
            Object(o.a)(s, [
              {
                key: "render",
                value: function () {
                  if (!this.props.data) return null;
                  var e = this.props.data,
                    t = e.name,
                    s = e.address,
                    n = e.phone,
                    a = e.contactmessage,
                    c = s.street,
                    r = s.city,
                    i = s.state,
                    o = s.zip,
                    l = this.state,
                    d = l.showSuccessMessage,
                    h = l.messageError;
                  return Object(x.jsxs)("section", {
                    id: "contact",
                    children: [
                      Object(x.jsx)(p.Fade, {
                        bottom: !0,
                        duration: 1e3,
                        children: Object(x.jsxs)("div", {
                          className: "row section-head",
                          children: [
                            Object(x.jsx)("div", {
                              className: "two columns header-col",
                              children: Object(x.jsx)("h1", {
                                children: Object(x.jsx)("span", {
                                  children: "Get In Touch.",
                                }),
                              }),
                            }),
                            Object(x.jsx)("div", {
                              className: "ten columns",
                              children: Object(x.jsx)("p", {
                                className: "lead",
                                children: a,
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(x.jsxs)("div", {
                        className: "row",
                        children: [
                          Object(x.jsx)(p.Slide, {
                            left: !0,
                            duration: 1e3,
                            children: Object(x.jsxs)("div", {
                              className: "eight columns",
                              children: [
                                Object(x.jsx)("form", {
                                  onSubmit: this.handleSubmit,
                                  id: "contactForm",
                                  name: "contactForm",
                                  children: Object(x.jsxs)("fieldset", {
                                    children: [
                                      Object(x.jsxs)("div", {
                                        children: [
                                          Object(x.jsxs)("label", {
                                            htmlFor: "contactName",
                                            children: [
                                              "Name ",
                                              Object(x.jsx)("span", {
                                                className: "required",
                                                children: "*",
                                              }),
                                            ],
                                          }),
                                          Object(x.jsx)("input", {
                                            type: "text",
                                            value: this.state.contactName,
                                            size: "35",
                                            id: "contactName",
                                            name: "contactName",
                                            onChange: this.handleChange,
                                          }),
                                        ],
                                      }),
                                      Object(x.jsxs)("div", {
                                        children: [
                                          Object(x.jsxs)("label", {
                                            htmlFor: "contactEmail",
                                            children: [
                                              "Email ",
                                              Object(x.jsx)("span", {
                                                className: "required",
                                                children: "*",
                                              }),
                                            ],
                                          }),
                                          Object(x.jsx)("input", {
                                            type: "email",
                                            value: this.state.contactEmail,
                                            size: "35",
                                            id: "contactEmail",
                                            name: "contactEmail",
                                            onChange: this.handleChange,
                                          }),
                                        ],
                                      }),
                                      Object(x.jsxs)("div", {
                                        children: [
                                          Object(x.jsx)("label", {
                                            htmlFor: "contactSubject",
                                            children: "Subject",
                                          }),
                                          Object(x.jsx)("input", {
                                            type: "text",
                                            value: this.state.contactSubject,
                                            size: "35",
                                            id: "contactSubject",
                                            name: "contactSubject",
                                            onChange: this.handleChange,
                                          }),
                                        ],
                                      }),
                                      Object(x.jsxs)("div", {
                                        children: [
                                          Object(x.jsxs)("label", {
                                            htmlFor: "contactMessage",
                                            children: [
                                              "Message ",
                                              Object(x.jsx)("span", {
                                                className: "required",
                                                children: "*",
                                              }),
                                            ],
                                          }),
                                          Object(x.jsx)("textarea", {
                                            cols: "50",
                                            rows: "15",
                                            value: this.state.contactMessage,
                                            id: "contactMessage",
                                            name: "contactMessage",
                                            onChange: this.handleChange,
                                          }),
                                        ],
                                      }),
                                      Object(x.jsxs)("div", {
                                        children: [
                                          Object(x.jsx)("button", {
                                            type: "submit",
                                            className: "submit",
                                            children: "Submit",
                                          }),
                                          Object(x.jsx)("span", {
                                            id: "image-loader",
                                            children: Object(x.jsx)("img", {
                                              alt: "",
                                              src: "images/loader.gif",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                h &&
                                  Object(x.jsx)("div", {
                                    id: "message-warning",
                                    children: " Error: Could not send message",
                                  }),
                                d &&
                                  Object(x.jsxs)("div", {
                                    id: "message-success",
                                    children: [
                                      Object(x.jsx)("i", {
                                        className: "fa fa-check",
                                      }),
                                      " Your message was sent, thank you!",
                                    ],
                                  }),
                              ],
                            }),
                          }),
                          Object(x.jsx)(p.Slide, {
                            right: !0,
                            duration: 1e3,
                            children: Object(x.jsxs)("aside", {
                              className: "four columns footer-widgets",
                              children: [
                                Object(x.jsxs)("div", {
                                  className: "widget widget_contact",
                                  children: [
                                    Object(x.jsx)("h4", {
                                      children: "Address and Phone",
                                    }),
                                    Object(x.jsxs)("p", {
                                      className: "address",
                                      children: [
                                        t,
                                        Object(x.jsx)("br", {}),
                                        c,
                                        " ",
                                        Object(x.jsx)("br", {}),
                                        r,
                                        ", ",
                                        i,
                                        " ",
                                        o,
                                        Object(x.jsx)("br", {}),
                                        Object(x.jsx)("span", { children: n }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(x.jsxs)("div", {
                                  className: "widget widget_tweets",
                                  children: [
                                    Object(x.jsx)("h4", {
                                      className: "widget-title",
                                      children: "Latest Tweets",
                                    }),
                                    Object(x.jsx)("ul", {
                                      id: "twitter",
                                      children: Object(x.jsxs)("li", {
                                        children: [
                                          Object(x.jsxs)("span", {
                                            children: [
                                              "DrugFormer: Graph\u2010Enhanced Language Model to Predict Drug Sensitivity",
                                              Object(x.jsx)("br", {}),
                                              "\ud83e\uddec A groundbreaking model, DrugFormer, integrates graph-based knowledge with large language models to predict drug resistance at the single-cell level.",
                                              Object(x.jsx)("br", {}),
                                              Object(x.jsx)("a", {
                                                href: "./",
                                                children:
                                                  "https://x.com/BiologyAIDaily/status/1831508466734920005",
                                              }),
                                            ],
                                          }),
                                          Object(x.jsx)("b", {
                                            children: Object(x.jsx)("a", {
                                              children: "Sep 4, 2024",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            s
          );
        })(n.Component),
        y = s(28),
        N = s.n(y),
        C = 0,
        k =
          (n.Component,
          (function (e) {
            Object(l.a)(s, e);
            var t = Object(d.a)(s);
            function s(e) {
              var n;
              return (
                Object(i.a)(this, s),
                ((n = t.call(this, e)).toggleManuscripts = function () {
                  n.setState({ showManuscripts: !n.state.showManuscripts });
                }),
                (n.toggleJournals = function () {
                  n.setState({ showJournals: !n.state.showJournals });
                }),
                (n.toggleConferences = function () {
                  n.setState({ showConferences: !n.state.showConferences });
                }),
                (n.state = {
                  showManuscripts: !1,
                  showJournals: !1,
                  showConferences: !1,
                }),
                n
              );
            }
            return (
              Object(o.a)(s, [
                {
                  key: "getDisplayList",
                  value: function (e, t) {
                    return t ? e : e.slice(0, 5);
                  },
                },
                {
                  key: "getRandomColor",
                  value: function () {
                    for (var e = "#", t = 0; t < 6; t++)
                      e += "0123456789ABCDEF"[Math.floor(16 * Math.random())];
                    return e;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    if (!this.props.publications) return null;
                    var e = function (e) {
                        var t = e.replace(/Song Q/g, "<strong>Song Q</strong>");
                        return Object(x.jsx)(
                          "div",
                          {
                            children: Object(x.jsx)("p", {
                              dangerouslySetInnerHTML: { __html: t },
                            }),
                          },
                          e,
                        );
                      },
                      t =
                        (this.props.publications.ManuscriptUnderReview.map(e),
                        this.props.publications.PublishedJournalArticles.map(
                          e,
                        ));
                    this.props.publications.ConferenceAbstracts.map(e);
                    return Object(x.jsx)("section", {
                      id: "publications",
                      style: { backgroundColor: "white" },
                      children: Object(x.jsx)(g.a, {
                        left: !0,
                        duration: 1300,
                        children: Object(x.jsxs)("div", {
                          className: "row publication",
                          children: [
                            Object(x.jsx)("div", {
                              className: "three columns header-col",
                              children: Object(x.jsx)("h1", {
                                children: Object(x.jsx)("span", {
                                  children: "Publications",
                                }),
                              }),
                            }),
                            Object(x.jsxs)("div", {
                              className: "nine columns main-col",
                              children: [
                                Object(x.jsx)("div", {
                                  children: this.getDisplayList(
                                    t,
                                    this.state.showJournals,
                                  ),
                                }),
                                Object(x.jsx)("button", {
                                  onClick: this.toggleJournals,
                                  style: {
                                    padding: "5px 10px",
                                    marginTop: "-15px",
                                    borderRadius: "20px",
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s ease",
                                    fontSize: "12px",
                                  },
                                  onMouseEnter: function (e) {
                                    return (e.target.style.backgroundColor =
                                      "#0056b3");
                                  },
                                  onMouseLeave: function (e) {
                                    return (e.target.style.backgroundColor =
                                      "#007bff");
                                  },
                                  children: this.state.showJournals
                                    ? "View Less"
                                    : "View More",
                                }),
                                Object(x.jsx)("br", {}),
                              ],
                            }),
                          ],
                        }),
                      }),
                    });
                  },
                },
              ]),
              s
            );
          })(n.Component)),
        S = s(16),
        M = (function (e) {
          Object(l.a)(s, e);
          var t = Object(d.a)(s);
          function s(e) {
            var n;
            return (
              Object(i.a)(this, s),
              ((n = t.call(this, e)).toggleCurrents = function () {
                n.setState({ showCurrents: !n.state.showCurrents });
              }),
              (n.toggleGraduates = function () {
                n.setState({ showGraduates: !n.state.showGraduates });
              }),
              (n.state = { showCurrents: !0, showGraduates: !0 }),
              n
            );
          }
          return (
            Object(o.a)(s, [
              {
                key: "getDisplayList",
                value: function (e, t) {
                  var s = Object.keys(e).flatMap(function (t) {
                    return e[t].map(function (e) {
                      return Object(S.a)(Object(S.a)({}, e), {}, { role: t });
                    });
                  });
                  return t ? s : s.slice(0, 4);
                },
              },
              {
                key: "render",
                value: function () {
                  if (!this.props.teams) return null;
                  var e = function (e) {
                      return e.map(function (e, t) {
                        var s = e.name.replace(/\s*\(.*?\)\s*/g, "");
                        return Object(x.jsxs)(
                          "div",
                          {
                            style: {
                              padding: "10px",
                              margin: "10px 0",
                              borderRadius: "8px",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "space-between",
                            },
                            children: [
                              Object(x.jsxs)("div", {
                                style: {
                                  flex: "1",
                                  display: "flex",
                                  flexDirection: "column",
                                },
                                children: [
                                  Object(x.jsx)("h3", {
                                    style: { margin: "0", color: "#333" },
                                    children: s,
                                  }),
                                  Object(x.jsx)("p", {
                                    style: {
                                      margin: "0",
                                      fontStyle: "italic",
                                      whiteSpace: "nowrap",
                                    },
                                    children: e.role,
                                  }),
                                  Object(x.jsxs)("p", {
                                    style: { margin: "5px 0" },
                                    children: ["Department: ", e.department],
                                  }),
                                  Object(x.jsxs)("p", {
                                    style: { margin: "5px 0" },
                                    children: ["Time: ", e.time],
                                  }),
                                ],
                              }),
                              e.imagePath &&
                                Object(x.jsx)("div", {
                                  style: {
                                    flexShrink: 0,
                                    marginLeft: "10px",
                                    textAlign: "right",
                                  },
                                  children: Object(x.jsx)("img", {
                                    src: e.imagePath,
                                    alt: "".concat(s, "'s photo"),
                                    style: {
                                      width: "130px",
                                      height: "165px",
                                      borderRadius: "8px",
                                      objectFit: "cover",
                                      marginTop: "5px",
                                    },
                                  }),
                                }),
                            ],
                          },
                          t,
                        );
                      });
                    },
                    t = e(
                      this.getDisplayList(
                        this.props.teams.current,
                        this.state.showCurrents,
                      ),
                    ),
                    s = e(
                      this.getDisplayList(
                        this.props.teams.graduated,
                        this.state.showGraduates,
                      ),
                    );
                  return Object(x.jsxs)("div", {
                    children: [
                      Object(x.jsx)(D, { data: this.props.data }),
                      Object(x.jsx)("section", {
                        id: "teams",
                        children: Object(x.jsx)(g.a, {
                          left: !0,
                          duration: 1300,
                          children: Object(x.jsxs)("div", {
                            className: "row teams",
                            children: [
                              Object(x.jsx)("div", {
                                className: "three columns header-col",
                                children: Object(x.jsx)("h1", {
                                  children: Object(x.jsx)("span", {
                                    children: "Our Teams",
                                  }),
                                }),
                              }),
                              Object(x.jsxs)("div", {
                                className: "nine columns main-col",
                                children: [
                                  Object(x.jsx)("div", {
                                    className: "team-section-header",
                                    children: Object(x.jsx)("h4", {
                                      children: "Current Students",
                                    }),
                                  }),
                                  Object(x.jsx)("div", { children: t }),
                                  Object(x.jsx)("br", {}),
                                  Object(x.jsx)("br", {}),
                                  Object(x.jsx)("div", {
                                    className: "team-section-header",
                                    children: Object(x.jsx)("h4", {
                                      children: "Alumni",
                                    }),
                                  }),
                                  Object(x.jsx)("div", { children: s }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            s
          );
        })(n.Component),
        D = (function (e) {
          Object(l.a)(s, e);
          var t = Object(d.a)(s);
          function s() {
            return (Object(i.a)(this, s), t.apply(this, arguments));
          }
          return (
            Object(o.a)(s, [
              {
                key: "render",
                value: function () {
                  if (!this.props.data) return null;
                  this.props.data.name;
                  var e = "images/" + this.props.data.image,
                    t = this.props.data.bio;
                  (this.props.data.address.street,
                    this.props.data.address.city,
                    this.props.data.address.state,
                    this.props.data.address.zip,
                    this.props.data.phone,
                    this.props.data.email);
                  return Object(x.jsx)("section", {
                    id: "about",
                    style: {
                      paddingBottom: "0px",
                      paddingRight: "0px",
                      position: "relative",
                      overflow: "hidden",
                    },
                    children: Object(x.jsxs)(g.a, {
                      right: !0,
                      duration: 1300,
                      children: [
                        Object(x.jsx)("img", {
                          src: "/SongLab/images/profilepic3.png",
                          alt: "Background",
                          style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            position: "absolute",
                            top: 15,
                            left: 490,
                            zIndex: 0,
                          },
                        }),
                        Object(x.jsx)("div", {
                          style: {
                            position: "absolute",
                            top: 15,
                            left: 490,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(255, 255, 255, 0.6)",
                            zIndex: 0,
                          },
                        }),
                        Object(x.jsx)(g.a, {
                          duration: 1e3,
                          children: Object(x.jsxs)("div", {
                            className: "row",
                            style: {
                              backgroundColor: "rgba(255, 255, 255, 0.0)",
                              padding: "20px",
                              borderRadius: "8px",
                              position: "relative",
                              zIndex: 2,
                            },
                            children: [
                              Object(x.jsx)("div", {
                                className: "three columns",
                                children: Object(x.jsx)("img", {
                                  className: "profile-pic",
                                  src: e,
                                  alt: "Nordic Giant Profile Pic",
                                  style: {
                                    width: "75%",
                                    height: "auto",
                                    objectFit: "contain",
                                  },
                                }),
                              }),
                              Object(x.jsxs)("div", {
                                className: "nine columns main-col",
                                children: [
                                  Object(x.jsx)("h2", { children: "About Me" }),
                                  Object(x.jsx)("p", {
                                    style: { whiteSpace: "pre-line" },
                                    children: t,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            s
          );
        })(n.Component),
        L = (function (e) {
          Object(l.a)(s, e);
          var t = Object(d.a)(s);
          function s(e) {
            var n;
            return (
              Object(i.a)(this, s),
              ((n = t.call(this, e)).toggleOngoing = function () {
                n.setState({ showOngoing: !n.state.showOngoing });
              }),
              (n.togglePending = function () {
                n.setState({ showPending: !n.state.showPending });
              }),
              (n.toggleCompleted = function () {
                n.setState({ showCompleted: !n.state.showCompleted });
              }),
              (n.state = {
                showOngoing: !1,
                showPending: !1,
                showCompleted: !1,
              }),
              n
            );
          }
          return (
            Object(o.a)(s, [
              {
                key: "getDisplayList",
                value: function (e, t) {
                  return t ? e : e.slice(0, 3);
                },
              },
              {
                key: "render",
                value: function () {
                  if (!this.props.grants) return null;
                  var e = function (e) {
                      return Object(x.jsxs)(
                        "div",
                        {
                          style: {
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "8px",
                            backgroundColor: "#f9f9f9",
                            border: "1px solid #ddd",
                          },
                          children: [
                            Object(x.jsx)("h4", {
                              style: { margin: "0", color: "#333" },
                              children: e.id,
                            }),
                            Object(x.jsx)("p", {
                              style: { margin: "5px 0", fontStyle: "italic" },
                              children: e.time,
                            }),
                            Object(x.jsx)("p", { children: e.description }),
                            Object(x.jsxs)("p", {
                              style: { fontWeight: "bold" },
                              children: ["Role: ", e.role],
                            }),
                          ],
                        },
                        e.id,
                      );
                    },
                    t = this.getDisplayList(
                      this.props.grants.OngoingResearchSupport,
                      this.state.showOngoing,
                    ).map(e),
                    s = this.getDisplayList(
                      this.props.grants.Pending,
                      this.state.showPending,
                    ).map(e),
                    n = this.getDisplayList(
                      this.props.grants.Completed,
                      this.state.showCompleted,
                    ).map(e);
                  return Object(x.jsx)("section", {
                    id: "grants",
                    style: { backgroundColor: "white" },
                    children: Object(x.jsx)(g.a, {
                      left: !0,
                      duration: 1300,
                      children: Object(x.jsxs)("div", {
                        className: "row grants",
                        children: [
                          Object(x.jsx)("div", {
                            className: "three columns header-col",
                            children: Object(x.jsx)("h1", {
                              children: Object(x.jsx)("span", {
                                children: "Grants and Contracts",
                              }),
                            }),
                          }),
                          Object(x.jsxs)("div", {
                            className: "nine columns main-col",
                            children: [
                              Object(x.jsx)("h3", {
                                children: "Ongoing Research Support",
                              }),
                              Object(x.jsx)("div", { children: t }),
                              Object(x.jsx)("button", {
                                onClick: this.toggleOngoing,
                                style: {
                                  padding: "5px 10px",
                                  marginTop: "-15px",
                                  borderRadius: "20px",
                                  backgroundColor: "#007bff",
                                  color: "white",
                                  border: "none",
                                  cursor: "pointer",
                                  transition: "background-color 0.3s ease",
                                  fontSize: "12px",
                                },
                                onMouseEnter: function (e) {
                                  return (e.target.style.backgroundColor =
                                    "#0056b3");
                                },
                                onMouseLeave: function (e) {
                                  return (e.target.style.backgroundColor =
                                    "#007bff");
                                },
                                children: this.state.showOngoing
                                  ? "View Less"
                                  : "View More",
                              }),
                              Object(x.jsx)("br", {}),
                              Object(x.jsx)("br", {}),
                              Object(x.jsx)("h3", { children: "Pending" }),
                              Object(x.jsx)("div", { children: s }),
                              Object(x.jsx)("button", {
                                onClick: this.togglePending,
                                style: {
                                  padding: "5px 10px",
                                  marginTop: "-15px",
                                  borderRadius: "20px",
                                  backgroundColor: "#007bff",
                                  color: "white",
                                  border: "none",
                                  cursor: "pointer",
                                  transition: "background-color 0.3s ease",
                                  fontSize: "12px",
                                },
                                onMouseEnter: function (e) {
                                  return (e.target.style.backgroundColor =
                                    "#0056b3");
                                },
                                onMouseLeave: function (e) {
                                  return (e.target.style.backgroundColor =
                                    "#007bff");
                                },
                                children: this.state.showPending
                                  ? "View Less"
                                  : "View More",
                              }),
                              Object(x.jsx)("br", {}),
                              Object(x.jsx)("br", {}),
                              Object(x.jsx)("h3", { children: "Completed" }),
                              Object(x.jsx)("div", { children: n }),
                              Object(x.jsx)("button", {
                                onClick: this.toggleCompleted,
                                style: {
                                  padding: "5px 10px",
                                  marginTop: "-15px",
                                  borderRadius: "20px",
                                  backgroundColor: "#007bff",
                                  color: "white",
                                  border: "none",
                                  cursor: "pointer",
                                  transition: "background-color 0.3s ease",
                                  fontSize: "12px",
                                },
                                onMouseEnter: function (e) {
                                  return (e.target.style.backgroundColor =
                                    "#0056b3");
                                },
                                onMouseLeave: function (e) {
                                  return (e.target.style.backgroundColor =
                                    "#007bff");
                                },
                                children: this.state.showCompleted
                                  ? "View Less"
                                  : "View More",
                              }),
                              Object(x.jsx)("br", {}),
                              Object(x.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            s
          );
        })(n.Component),
        R = (function (e) {
          Object(l.a)(s, e);
          var t = Object(d.a)(s);
          function s(e) {
            var n;
            return (
              Object(i.a)(this, s),
              ((n = t.call(this, e)).toggleShowAll = function () {
                n.setState({ showAll: !n.state.showAll });
              }),
              (n.state = { showAll: !0 }),
              n
            );
          }
          return (
            Object(o.a)(s, [
              {
                key: "getDisplayList",
                value: function (e, t) {
                  return t ? e : e.slice(0, 5);
                },
              },
              {
                key: "render",
                value: function () {
                  //if (!this.props.softwareTools) return null;
                  var tools = this.props.softwareTools || [];
                  var e = this.getDisplayList(
                    //this.props.softwareTools,
                    tools,
                    this.state.showAll,
                  ).map(function (e) {
                    return Object(x.jsxs)(
                      "div",
                      {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "15px",
                          margin: "15px 0",
                          borderRadius: "8px",
                          backgroundColor: "#f9f9f9",
                          border: "1px solid #ddd",
                          transition:
                            "background-color 0.3s ease, box-shadow 0.3s ease",
                          cursor: "pointer",
                          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        },
                        onMouseEnter: function (e) {
                          ((e.currentTarget.style.backgroundColor = "#f0f8ff"),
                            (e.currentTarget.style.boxShadow =
                              "0px 4px 8px rgba(0, 0, 0, 0.15)"));
                        },
                        onMouseLeave: function (e) {
                          ((e.currentTarget.style.backgroundColor = "#f9f9f9"),
                            (e.currentTarget.style.boxShadow =
                              "0px 2px 4px rgba(0, 0, 0, 0.1)"));
                        },
                        children: [
                          Object(x.jsxs)("div", {
                            style: { flex: "1" },
                            children: [
                              Object(x.jsx)("h4", {
                                style: {
                                  margin: "0",
                                  color: "#333",
                                  fontWeight: "bold",
                                },
                                children: e.name,
                              }),
                              Object(x.jsx)("p", {
                                style: {
                                  margin: "8px 0",
                                  color: "#555",
                                  lineHeight: "1.15",
                                },
                                children: e.description,
                              }),
                            ],
                          }),
                          Object(x.jsx)("a", {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                              padding: "8px 16px",
                              color: "white",
                              backgroundColor: "#0762f9",
                              borderRadius: "20px",
                              textDecoration: "none",
                              transition: "background-color 0.3s ease",
                              fontSize: "14px",
                              marginLeft: "15px",
                            },
                            onMouseEnter: function (e) {
                              return (e.target.style.backgroundColor =
                                "#0444AE");
                            },
                            onMouseLeave: function (e) {
                              return (e.target.style.backgroundColor =
                                "#0762f9");
                            },
                            children: "View Tool",
                          }),
                        ],
                      },
                      e.name,
                    );
                  });
                  return Object(x.jsx)("section", {
                    id: "software-tools",
                    style: {
                      backgroundColor: "#e6f4ea",
                    },
                    children: Object(x.jsx)(g.a, {
                      left: !0,
                      duration: 1300,
                      children: Object(x.jsxs)("div", {
                        className: "row software-tools",
                        children: [
                          Object(x.jsx)("div", {
                            className: "three columns header-col",
                            children: Object(x.jsx)("h1", {
                              children: Object(x.jsx)("span", {
                                children: "Developed Software & Tools",
                              }),
                            }),
                          }),
                          Object(x.jsxs)("div", {
                            className: "nine columns main-col",
                            children: [
                              Object(x.jsx)("div", { children: e }),
                              Object(x.jsx)("br", {}),
                              Object(x.jsx)("br", {}),
                              Object(x.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            s
          );
        })(n.Component),
        T = (function (e) {
          Object(l.a)(s, e);
          var t = Object(d.a)(s);
          function s(e) {
            var n;
            return (
              Object(i.a)(this, s),
              ((n = t.call(this, e)).toggleNews = function () {
                n.setState({ showMoreNews: !n.state.showMoreNews });
              }),
              (n.state = { showMoreNews: !1 }),
              n
            );
          }
          return (
            Object(o.a)(s, [
              {
                key: "getDisplayList",
                value: function (e, t) {
                  return t ? e : e.slice(0, 5);
                },
              },
              {
                key: "render",
                value: function () {
                  if (!this.props.news) return null;
                  var e = this.getDisplayList(
                    this.props.news,
                    this.state.showMoreNews,
                  ).map(function (e, t) {
                    return Object(x.jsx)(
                      "div",
                      {
                        style: {
                          padding: "10px",
                          margin: "10px 0",
                          borderBottom: "1px solid #ddd",
                        },
                        children: Object(x.jsxs)("p", {
                          style: { margin: "5px 0", lineHeight: "1.2" },
                          children: [
                            Object(x.jsxs)("span", {
                              style: {
                                fontWeight: "bold",
                                color: "#333",
                                fontSize: "18px",
                              },
                              children: ["[", e.date, "]"],
                            }),
                            "\xa0",
                            e.description,
                          ],
                        }),
                      },
                      t,
                    );
                  });
                  return Object(x.jsx)("section", {
                    id: "news",
                    children: Object(x.jsx)(g.a, {
                      left: !0,
                      duration: 1300,
                      children: Object(x.jsxs)("div", {
                        className: "row news",
                        children: [
                          Object(x.jsx)("div", {
                            className: "three columns header-col",
                            children: Object(x.jsx)("h1", {
                              children: Object(x.jsx)("span", {
                                children: "News",
                              }),
                            }),
                          }),
                          Object(x.jsxs)("div", {
                            className: "nine columns main-col",
                            children: [
                              Object(x.jsx)("div", { children: e }),
                              Object(x.jsx)("button", {
                                onClick: this.toggleNews,
                                style: {
                                  padding: "8px 16px",
                                  marginTop: "15px",
                                  borderRadius: "20px",
                                  backgroundColor: "#007bff",
                                  color: "white",
                                  border: "none",
                                  cursor: "pointer",
                                  transition: "background-color 0.3s ease",
                                  fontSize: "14px",
                                },
                                onMouseEnter: function (e) {
                                  return (e.target.style.backgroundColor =
                                    "#0056b3");
                                },
                                onMouseLeave: function (e) {
                                  return (e.target.style.backgroundColor =
                                    "#007bff");
                                },
                                children: this.state.showMoreNews
                                  ? "View Less"
                                  : "View More",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            s
          );
        })(n.Component),
        E = (s(57), s(58), s(29)),
        F = (function (e) {
          Object(l.a)(s, e);
          var t = Object(d.a)(s);
          function s() {
            return (Object(i.a)(this, s), t.apply(this, arguments));
          }
          return (
            Object(o.a)(s, [
              {
                key: "render",
                value: function () {
                  if (!this.props.research) return null;
                  var e = this.props.research;
                  return Object(x.jsxs)("section", {
                    id: "research",
                    style: { backgroundColor: "white", marginBottom: "45px" },
                    children: [
                      Object(x.jsx)("div", {
                        className: "row research",
                        children: Object(x.jsx)("div", {
                          className: "header-col",
                          children: Object(x.jsx)("h1", {
                            children: Object(x.jsx)("span", {
                              children: "Research",
                            }),
                          }),
                        }),
                      }),
                      Object(x.jsx)("div", {
                        className: "row",
                        style: { marginTop: "20px" },
                        children: Object(x.jsxs)("div", {
                          className: "twelve columns main-col",
                          children: [
                            Object(x.jsx)("div", {
                              style: Object(f.a)(
                                {
                                  backgroundImage:
                                    "url('/SongLab/images/carousel_BG2.avif')",
                                  backgroundSize: "cover",
                                 // backgroundPosition: "center",
                                  //backgroundRepeat: "no-repeat",
                                },
                                "backgroundSize", "900px 510px",
                              ),
                              children: Object(x.jsxs)(E.Carousel, {
                                autoPlay: !0,
                                interval: 2500,
                                infiniteLoop: !0,
                                showThumbs: !1,
                                children: [       
                                    Object(x.jsxs)("div", {
                                    children: [
                                      Object(x.jsx)("img", {
                                        src: "/SongLab/images/research/PhenoProfiler.webp",
                                        style: {
                                          width: "91%",
                                          height: "auto",
                                          objectFit: "contain",
                                        },
                                      }),
                                      Object(x.jsx)("p", {
                                        className: "legend",
                                        children:
                                          "PhenoProfiler: advancing phenotypic learning for image-based drug discovery, Nature Communications (2026)",
                                      }),
                                    ],
                                  }),
                                 Object(x.jsxs)("div", {
                                    children: [
                                      Object(x.jsx)("img", {
                                        src: "/SongLab/images/research/scDrugMap.png",
                                        style: {
                                          width: "90%",
                                          height: "auto",
                                          objectFit: "contain",
                                        },
                                      }),
                                      Object(x.jsx)("p", {
                                        className: "legend",
                                        children:
                                          "scDrugMap: benchmarking large foundation models for drug response prediction, Nature Communications (2026)",
                                      }),
                                    ],
                                  }),

                                  Object(x.jsxs)("div", {
                                    children: [
                                      Object(x.jsx)("img", {
                                        src: "/SongLab/images/research/SpaIM.webp",
                                        style: {
                                          width: "60%",
                                          height: "auto",
                                          objectFit: "contain",
                                        },
                                      }),
                                      Object(x.jsx)("p", {
                                        className: "legend",
                                        children:
                                          "SpaIM: single-cell spatial transcriptomics imputation via style transfer, Nature Communications (2025)",
                                      }),
                                    ],
                                  }),
                                    Object(x.jsxs)("div", {
                                    children: [
                                      Object(x.jsx)("img", {
                                        src: "/SongLab/images/research/DRMref.jpeg",
                                        style: {
                                          width: "60%",
                                          height: "auto",
                                          objectFit: "contain",
                                        },
                                      }),
                                      Object(x.jsx)("p", {
                                        className: "legend",
                                        children:
                                          "DRMref: comprehensive reference map of drug resistance mechanisms in human cancer, Nucleic Acids Research (2024)",
                                      }),
                                    ],
                                  }),
                                  Object(x.jsxs)("div", {
                                    children: [
                                      Object(x.jsx)("img", {
                                        src: "/SongLab/images/research/SiGra.png",
                                        style: {
                                          width: "60%",
                                          height: "auto",
                                          objectFit: "contain",
                                        },
                                      }),
                                      Object(x.jsx)("p", {
                                        className: "legend",
                                        children:
                                          "SiGra: single-cell spatial elucidation through an image-augmented graph transformer, Nature Communications (2023)",
                                      }),
                                    ],
                                  }),

                                  Object(x.jsxs)("div", {
                                    children: [
                                      Object(x.jsx)("img", {
                                        src: "/SongLab/images/research/hypergraphNN.png",
                                        style: {
                                          width: "90%",
                                          height: "90%",
                                          objectFit: "contain",
                                        },
                                      }),
                                      Object(x.jsx)("p", {
                                        className: "legend",
                                        children:
                                          "Gene expression prediction from histology images via hypergraph neural networks, Briefings in Bioinformatics (2024)",
                                      }),
                                    ],
                                  }),
                                  Object(x.jsxs)("div", {
                                    children: [
                                      Object(x.jsx)("img", {
                                        src: "/SongLab/images/research/COVID.jpg",
                                        style: {
                                          width: "90%",
                                          height: "auto",
                                          objectFit: "contain",
                                        },
                                      }),
                                      Object(x.jsx)("p", {
                                        className: "legend",
                                        children:
                                          "Risk and Outcome of Breakthrough COVID-19 Infections in Vaccinated Patients With Cancer: Real-World Evidence From the National COVID Cohort Collaborative, Journal of Clinical Oncology (2022)",
                                      }),
                                    ],
                                  }),
                                  Object(x.jsxs)("div", {
                                    children: [
                                      Object(x.jsx)("img", {
                                        src: "/SongLab/images/research/spaCI.png",
                                        style: {
                                          width: "90%",
                                          height: "auto",
                                          objectFit: "contain",
                                        },
                                      }),
                                      Object(x.jsx)("p", {
                                        className: "legend",
                                        children:
                                          "spaCI: deciphering spatial cellular communications through adaptive graph model, Briefings in Bioinformatics (2023)",
                                      }),
                                    ],
                                  }),
                                  Object(x.jsxs)("div", {
                                    children: [
                                      Object(x.jsx)("img", {
                                        src: "/SongLab/images/research/scGCN.jpg",
                                        style: {
                                          width: "90%",
                                          height: "auto",
                                          objectFit: "contain",
                                        },
                                      }),
                                      Object(x.jsx)("p", {
                                        className: "legend",
                                        children:
                                          "scGCN: a Graph Convolutional Networks Algorithm for Knowledge Transfer in Single Cell Omics. Nature Communications (2021)",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(x.jsxs)("div", {
                              children: [
                                Object(x.jsx)("p", {
                                  style: Object(f.a)(
                                    {
                                      fontSize: "16px",
                                      color: "#333",
                                      lineHeight: "1.6",
                                      paddingLeft: "20px",
                                      paddingRight: "20px",
                                    },
                                    "fontSize",
                                    "14px",
                                  ),
                                  children: e.introduction,
                                }),
                                e.text.map(function (e, t) {
                                  return Object(x.jsxs)(
                                    "div",
                                    {
                                      style: {
                                        marginBottom: "-20px",
                                        padding: "20px",
                                      },
                                      children: [
                                        Object(x.jsx)("h3", {
                                          style: {
                                            color: "black",
                                            fontWeight: "bold",
                                            marginBottom: "15px",
                                          },
                                          children: e.title,
                                        }),
                                        Object(x.jsx)("p", {
                                          style: {
                                            fontSize: "14px",
                                            lineHeight: "1.6",
                                            color: "#444",
                                          },
                                          children: e.content
                                            .split("\n")
                                            .map(function (e, t) {
                                              return Object(x.jsxs)(
                                                a.a.Fragment,
                                                {
                                                  children: [
                                                    e,
                                                    Object(x.jsx)("br", {}),
                                                    Object(x.jsx)("br", {}),
                                                  ],
                                                },
                                                t,
                                              );
                                            }),
                                        }),
                                      ],
                                    },
                                    t,
                                  );
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            s
          );
        })(n.Component),
        A = (function (e) {
          Object(l.a)(s, e);
          var t = Object(d.a)(s);
          function s(e) {
            var n;
            return (
              Object(i.a)(this, s),
              ((n = t.call(this, e)).state = { foo: "bar", resumeData: {} }),
              h.a.initialize("UA-110570651-1"),
              h.a.pageview(window.location.pathname),
              n
            );
          }
          return (
            Object(o.a)(s, [
              {
                key: "getResumeData",
                value: function () {
                  b.a.ajax({
                    url: "./resumeData.json",
                    dataType: "json",
                    cache: !1,
                    success: function (e) {
                      this.setState({ resumeData: e });
                    }.bind(this),
                    error: function (e, t, s) {
                      (console.log(s), alert(s));
                    },
                  });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.getResumeData();
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(x.jsxs)("div", {
                    className: "App",
                    children: [
                      Object(x.jsx)(m, { data: this.state.resumeData.main }),
                      Object(x.jsx)(F, {
                        research: this.state.resumeData.research,
                      }),
                      Object(x.jsx)(T, { news: this.state.resumeData.news }),
                      Object(x.jsx)(M, {
                        teams: this.state.resumeData.teams,
                        data: this.state.resumeData.main,
                      }),
                      Object(x.jsx)(L, {
                        publications:
                          this.state.resumeData.GrantsAndContractAwards,
                      }),
                      Object(x.jsx)(k, {
                        publications: this.state.resumeData.publications,
                      }),
                      Object(x.jsx)(R, {
                        softwareTools:
                          this.state.resumeData.DevelopedSoftwareAndTools,
                      }),
                      Object(x.jsx)(w, { data: this.state.resumeData.main }),
                      Object(x.jsx)(O, { data: this.state.resumeData.main }),
                    ],
                  });
                },
              },
            ]),
            s
          );
        })(n.Component),
        z = function (e) {
          e &&
            e instanceof Function &&
            s
              .e(3)
              .then(s.bind(null, 66))
              .then(function (t) {
                var s = t.getCLS,
                  n = t.getFID,
                  a = t.getFCP,
                  c = t.getLCP,
                  r = t.getTTFB;
                (s(e), n(e), a(e), c(e), r(e));
              });
        };
      (r.a.render(Object(x.jsx)(A, {}), document.getElementById("root")), z());
    },
  },
  [[65, 1, 2]],
]);
//# sourceMappingURL=main.134ae99f.chunk.js.map
