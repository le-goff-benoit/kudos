import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-IE366Y5W.js";

// app/components/layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "h-screen w-full bg-blue-600 font-mono",
    children
  }, void 0, false, {
    fileName: "app/components/layout.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "h-full justify-center items-center flex flex-col gap-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "text-5xl font-extrabold text-yellow-300",
          children: "Welcome to Kudos!"
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 7,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "font-semibold text-slate-300",
          children: "Log In To Give Some Praise!"
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "post",
          className: "rounded-2xl bg-gray-200 p-6 w-96",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              htmlFor: "email",
              className: "text-blue-600 font-semibold",
              children: "Email"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 15,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "text",
              id: "email",
              name: "email",
              className: "w-full p-2 rounded-xl my-2"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 18,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              htmlFor: "password",
              className: "text-blue-600 font-semibold",
              children: "Password"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "password",
              id: "password",
              name: "password",
              className: "w-full p-2 rounded-xl my-2"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full text-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "submit",
                className: "rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
                value: "Sign In"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 35,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-QS2K5VS7.js.map
