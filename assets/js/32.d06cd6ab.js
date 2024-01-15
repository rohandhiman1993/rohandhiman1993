(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{407:function(a,s,t){"use strict";t.r(s);var n=t(14),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"aws-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-cli"}},[a._v("#")]),a._v(" Aws cli")]),a._v(" "),s("p",[s("code",[a._v("aws --version")])]),a._v(" "),s("p",[s("code",[a._v("aws configure")])]),a._v(" "),s("p",[s("code",[a._v("aws configure list")])]),a._v(" "),s("p",[s("code",[a._v("aws configure get region --profile default")])]),a._v(" "),s("p",[s("code",[a._v("aws configure set region ap-south-1")])]),a._v(" "),s("p",[s("code",[a._v("aws configure import --csv file://credentials.csv")])]),a._v(" "),s("p",[s("code",[a._v("aws configure list-profiles")])]),a._v(" "),s("h2",{attrs:{id:"lambda-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lambda-cli"}},[a._v("#")]),a._v(" Lambda cli")]),a._v(" "),s("p",[s("code",[a._v("aws lambda list-functions")])]),a._v(" "),s("p",[s("code",[a._v("aws lambda get-function --function-name mylambdafun")])]),a._v(" "),s("p",[a._v("url [https://docs.aws.amazon.com/cli/latest/reference/lambda/]")]),a._v(" "),s("p",[a._v("invoke lambda")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("aws lambda invoke "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--function-name my-function "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--cli-binary-format raw-in-base64-out "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--payload")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{ ""key"": ""value"" }\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tresponse.json\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# get response")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# {"statusCode":200,"body":"\\"Hello from Lambda!\\""}')]),a._v("\n")])])]),s("h2",{attrs:{id:"send-payload-by-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-payload-by-file"}},[a._v("#")]),a._v(" send payload by file")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// event.json")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"value"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Invoke Command:")]),a._v("\naws lambda invoke --function-name my-function --cli-binary-format raw-in-base64-out "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--payload")]),a._v(" file://event.json response.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# output")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# {"statusCode":200,"body":"\\"Hello from Lambda!\\""}')]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# get logs")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Example retrieve a log ID")]),a._v("\naws lambda invoke --function-name my-function out --log-type Tail\n")])])]),s("h2",{attrs:{id:"role"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#role"}},[a._v("#")]),a._v(" Role")]),a._v(" "),s("p",[a._v("Create Execution Role for AWS Lambda functions with AWS CLI")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Run Command: with attarch policy")]),a._v("\naws iam create-role --role-name lambda-ex --assume-role-policy-document "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}\'')]),a._v("\n\n")])])]),s("h2",{attrs:{id:"role-and-by-policy-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#role-and-by-policy-file"}},[a._v("#")]),a._v(" Role and by policy file")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// file policy")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// trust-policy.json")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2012-10-17"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Statement"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Effect"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Allow"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Principal"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Service"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"lambda.amazonaws.com"')]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"sts:AssumeRole"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Run Command:")]),a._v("\naws iam create-role --role-name lambda-ex --assume-role-policy-document file://trust-policy.json\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# atttach policy")]),a._v("\n\naws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\n\n\n")])])]),s("h2",{attrs:{id:"upload-zip-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-zip-file"}},[a._v("#")]),a._v(" upload zip file")]),a._v(" "),s("p",[a._v("Deploy Node.js Lambda functions with .zip file archives")]),a._v(" "),s("p",[a._v("Run Command:\nmac\n"),s("code",[a._v("zip function.zip index.js")])]),a._v(" "),s("p",[a._v("go to index.js - right click - Send to -> Compressed (zip) folder")]),a._v(" "),s("p",[a._v("Create AWS Lambda function with .zip file using AWS CLI")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Get Role:")]),a._v("\naws iam get-role --role-name lambda-ex\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# arn:aws:iam::308360398142:role/lambda-ex")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Run Command:")]),a._v("\n\naws lambda create-function "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --function-name my-function2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--runtime")]),a._v(" nodejs14.x "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --zip-file fileb://function.zip "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--handler")]),a._v(" index.handler "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--role")]),a._v(" arn:aws:iam::308360398142:role/lambda-ex\n")])])]),s("h2",{attrs:{id:"invoke-lambda-functions-with-event-json-using-aws-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invoke-lambda-functions-with-event-json-using-aws-cli"}},[a._v("#")]),a._v(" Invoke Lambda functions with event.json using AWS CLI")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// event.json")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"value"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Invoke Command:")]),a._v("\naws lambda invoke --function-name my-function2 --cli-binary-format raw-in-base64-out "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--payload")]),a._v(" file://event.json response.json\n")])])]),s("h2",{attrs:{id:"aws-lambda-cloudwatch-logs-using-aws-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-lambda-cloudwatch-logs-using-aws-cli"}},[a._v("#")]),a._v(" AWS Lambda CloudWatch Logs using AWS CLI")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1- Get the log group name:")]),a._v("\naws logs describe-log-groups "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--query")]),a._v(" logGroups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".logGroupName\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2- List the log streams for that log group:")]),a._v("\naws logs describe-log-streams "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n\t--log-group-name "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/aws/lambda/my-function2'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--query")]),a._v(" logStreams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(".logStreamName\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3- Get the log events for that stream:")]),a._v("\naws logs get-log-events "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n\t--log-group-name "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/aws/lambda/my-function2'")]),a._v(" `\n\t--log-stream-name "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2022/05/10/[$LATEST]311cb43cd18843c2af37a60b2df0c110'")]),a._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);