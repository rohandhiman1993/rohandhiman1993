(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{340:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"fact",fn:function(){return[a("h2",{attrs:{id:"_1-disable-timestamps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-disable-timestamps"}},[t._v("#")]),t._v(" 1. Disable Timestamps")]),t._v(" "),a("p",[t._v("Laravel by default provides created_at and updated_at. If your DB doesn't have these fields. You will get an SQL error. If you don't need these fields we can disable them. go to your model class.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("StudentInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$timestamps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-change-timestamp-column-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-change-timestamp-column-names"}},[t._v("#")]),t._v(" 2. Change timestamp column names")]),t._v(" "),a("p",[t._v("If you have a different name column of your Database we also have to change Laravel. I mean, both should be the same otherwise, we will get an SQL error. We have create_time and update_time in our DB we have to change as well in Laravel.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("StudentInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CREATED_AT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'create_time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UPDATED_AT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'update_time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-change-date-and-time-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-change-date-and-time-format"}},[t._v("#")]),t._v(" 3. Change date and time format")]),t._v(" "),a("p",[t._v("we can change laravel default date and time according us")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("User")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Authenticatable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$casts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email_verified_at'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'datetime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        'created_at' => 'datetime:l',// Friday")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        'created_at' => 'datetime:F',// August")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        'created_at' => 'datetime:j',// Date 6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        'created_at' => 'datetime:Y',//  2021")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        'created_at' => 'datetime:g',//  1 pm")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        'created_at' => 'datetime:i',//  36 minute")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        'created_at' => 'datetime:g:i',//  1:36")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        'created_at' => 'datetime:g:i a',//  1:36 pm")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        'created_at' => 'datetime:d.m.y',//  06.08.21")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'created_at'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'datetime:Y.m.d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  2021.08.06")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n         * $today = date('h-i-s, j-m-y, it is w Day');     // 05-16-18, 10-03-01, 1631 1618 6 Satpm01\n            $today = date('\\i\\t \\i\\s \\t\\h\\e jS \\d\\a\\y.');   // it is the 10th day.\n            $today = date(\"D M j G:i:s T Y\");               // Sat Mar 10 17:16:18 MST 2001\n            $today = date('H:m:s \\m \\i\\s\\ \\m\\o\\n\\t\\h');     // 17:03:18 m is month\n            $today = date(\"H:i:s\");                         // 17:16:18\n            $today = date(\"Y-m-d H:i:s\");\n         *\n         * */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_4-update-table-without-update-at-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-update-table-without-update-at-field"}},[t._v("#")]),t._v(" 4. Update table without update_at field")]),t._v(" "),a("p",[t._v("somethimes if you don't want to update field of your upated column we can't stop it.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"rohan dhiman"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("timestamps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5-carbon-automatically-these-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-carbon-automatically-these-fields"}},[t._v("#")]),t._v(" 5. Carbon Automatically these fields")]),t._v(" "),a("p",[t._v("we don't need to create instance of carbon class if we are using these fields create_at, upated_at, delated_at and now function we can use direct.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// First")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Second we can use any fileds")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("created_at")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0}])},[a("h3",{attrs:{id:"back"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/blog/"}},[t._v("Back")])],1),t._v(" "),a("h1",{attrs:{id:"factory-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#factory-methods"}},[t._v("#")]),t._v(" Factory Methods")])])}),[],!1,null,null,null);a.default=n.exports}}]);