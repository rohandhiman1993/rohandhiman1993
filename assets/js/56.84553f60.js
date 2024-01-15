(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{318:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"fact",fn:function(){return[s("h2",{attrs:{id:"stale-closures-and-react-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stale-closures-and-react-hooks"}},[t._v("#")]),t._v(" Stale closures and React hooks")]),t._v(" "),s("h2",{attrs:{id:"function-borrowing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-borrowing"}},[t._v("#")]),t._v(" function borrowing")]),t._v(" "),s("h2",{attrs:{id:"event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" Event loop")]),t._v(" "),s("p",[t._v("Javascript is a synchronouns, blocking, single-thread langauge")]),t._v(" "),s("p",[t._v("To make async programming possile we need to help of libuv")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sync check call stack add and remove")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"second"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// async check call stack and push  thiread pool libuv  after that if call stack is empty again push on thread pool libuv")]),t._v("\n\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"async"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"event-loop-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-2"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),s("p",[t._v("It is a C program and is part of libuv")]),t._v(" "),s("p",[t._v("A design pattern that orchestrates or co-ordinates the execution of asynchronouns and asynchronous code in node.js")]),t._v(" "),s("p",[s("img",{attrs:{src:"nodeJS/eventloop.png",alt:"img"}})]),t._v(" "),s("p",[t._v("We total six differnt queue.")]),t._v(" "),s("ol",[s("li",[t._v("First "),s("code",[t._v("timer queue")]),t._v(" (setTimeout, setInterval callbacks)")]),t._v(" "),s("li",[t._v("Second "),s("code",[t._v("I/O callbacks")]),t._v(" I/O queue example http and fs file system.")]),t._v(" "),s("li",[t._v("Third "),s("code",[t._v("check queue")]),t._v(" setImmediate callbacks. // browser javascript")]),t._v(" "),s("li",[t._v("close queue close handle event")]),t._v(" "),s("li",[t._v("microtask queue at center and this is seperate queue "),s("code",[t._v("nextTick queue")]),t._v(" process.nextTick callbacks.")]),t._v(" "),s("li",[t._v("Promise queue it base on native javascript.")])]),t._v(" "),s("p",[t._v("First four part is from libuv")]),t._v(" "),s("p",[t._v("5 and 6 not part of libuv.")]),t._v(" "),s("p",[t._v("Execution Order")]),t._v(" "),s("ol",[s("li",[t._v("Any callbacks in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue.")]),t._v(" "),s("li",[t._v("All the callbacks within the timer queue are executed")]),t._v(" "),s("li",[t._v("Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue.")]),t._v(" "),s("li",[t._v("All callbacks within the i/o queue are executed")]),t._v(" "),s("li",[t._v("Callbacks in the micro task queues if present are executed. nextTick queue followed by Promise queue.")]),t._v(" "),s("li",[t._v("All callbacks in the check queue are executed.")]),t._v(" "),s("li",[t._v("Callbacks in the micro task queues if present are executed. again first tasks in the nextTick queue and then tasks in the promise queue.")]),t._v(" "),s("li",[t._v("All callbacks in the close queue are executed.")]),t._v(" "),s("li",[t._v("For one final time the same loop, the micro, task queues are executed. nextTick queue followed by promise queue.")])]),t._v(" "),s("p",[t._v("Quiz: Whenever an async task completes in libuv, at what point does Node decide to run the associated callback function on the call stack?")]),t._v(" "),s("p",[t._v("Ans: Callback functions are executed only when the call stack is empty. The normal flow of execution fill not be interrupted to run a callback function.")]),t._v(" "),s("p",[t._v("Quiz : What about async methods like setTimeout and setInterval whih also delay the execution of a callback function?")]),t._v(" "),s("p",[t._v("Ans: setTimeout and setInterval callbacks are given first priority.")]),t._v(" "),s("p",[t._v("Quiz: if two async tasks such setTimeout and readFile completed at the same time, how does Node decide which callback function to run first on the call stack?")]),t._v(" "),s("p",[t._v("Ans: Timer callbacks are executed before I/O callbacks even if both are ready at the exact same time.")]),t._v(" "),s("h2",{attrs:{id:"microtask-queues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#microtask-queues"}},[t._v("#")]),t._v(" Microtask queues")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nextTick queue")]),t._v("\n\nprocess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is process.nextTick 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Promise Queue")]),t._v("\nPromise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is promise.resolve 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Experiment 1 interface")]),t._v(" "),s("p",[t._v("All user written synchronous Javascript code takes priority over async code that the runtime would like to eventually execute.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprocess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is process.nextTick 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"second"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// first")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// second")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is process.nextTick 1")]),t._v("\n\nPromise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is promise.resolve 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprocess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is process.nextTick 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// First this is process.nextTick 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Second this is promise.resolve 1")]),t._v("\n")])])]),s("p",[t._v("Experiment 2 interface")]),t._v(" "),s("p",[t._v("All callbacks in nextTick queue are executed before callbacks in promise queue.")])]},proxy:!0}])},[s("h3",{attrs:{id:"back"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#back"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/blog/"}},[t._v("Back")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);