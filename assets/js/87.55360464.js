(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{351:function(n,s,t){"use strict";t.r(s);var a=t(14),e=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"degital-ocean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#degital-ocean"}},[n._v("#")]),n._v(" Degital Ocean")]),n._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("\nlocalhost\n\tssh-keygen "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-t")]),n._v(" rsa "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-b")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("4096")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-C")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"server"')]),n._v("\n\tafter that ask you path and name\n\t/home/hacker/.ssh/id_server\n\tpub share any where we want use it\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("cat")]),n._v(" id_server.pub "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" copy text\n\n\non server\n\tll\n\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("cd")]),n._v(" .ssh "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" got inside authorized_keys \n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("nano")]),n._v(" authorized_keys "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("paste")]),n._v(" pub code here\n\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("exit")]),n._v(" and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("test")]),n._v(" it\n\nlocalhost\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("ssh")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-i")]),n._v(" ~/.ssh/id_server root@159.65.154.250 "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" you success login its working\n\n\non server\n\tadduser rohandhiman\n\tpassword rohann\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("su")]),n._v(" mean switch user\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("su")]),n._v(" rohandhiman\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("su")]),n._v(" root "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" not work this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("command")]),n._v(" because you are admin you have to provide "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("command")]),n._v(" this user so use "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("exit")]),n._v("\n\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("exit")]),n._v(" after got root user access\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("usermod")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-aG")]),n._v(" admin rohandhiman\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("su")]),n._v(" rohandhiman\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("su")]),n._v(" root "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" success it mean working properly\n\n\n// rohandhiman use don"),s("span",{pre:!0,attrs:{class:"token string"}},[n._v("'t have ssh so create or check\n\nll check .ssh folder present or not\nmkdir .ssh\ncd .ssh\nnano authorized_keys => paste key inside\nexit \nexit\n\n\nssh -i ~/.ssh/id_server rohandhiman@159.65.154.250 => got login now rohandhiman user\n\n\n\nstop login by password\nsudo nano /etc/ssh/sshd_config\nPermitRootLogin no\nPasswordAuthentication no\n\nexit\n\nlogin once with password got access because we have to restart server let do it\nfirst login server root login\nsudo service ssh restart\n\nnote here you can'")]),n._v("t login root user and you cann"),s("span",{pre:!0,attrs:{class:"token string"}},[n._v("'t login with password\n\n\n\n\nShortcuts\n\ncommand+shift+3 screenshot\n\ncommand+shift+4 screenshot with selection\n\n\t\n\n\n\nlsb_release -a\n\n\n\ncommand apt-get update\n\ncomand : add-apt-repository ppa:ondrej/php\n\nCommand: apt-cache search php\n\nCommand: apt-get update\n\n\n\nCommand : apt-add-repository ppa:nilarimogard/webupd8\n\nCommand: apt-get update if you got error use this command\n\nCommand: apt-get install launchpad-getkeys\n\n\n\nCommand: launchpad-getkeys\n\n\n\nCommand: apt-cache search php\n\n\n\nCommand: apt-get install -y php7.2-cli php7.2-fpm php7.2-mbstring php7.2-mysql php7.2-curl php7.1-mcrypt php7.2-xml\n\napt-get install -y php7.4-cli php7.4-fpm php7.4-mbstring php7.4-mysql php7.4-curl php7.1-mcrypt php7.4-xml\n\n\n\n\nCommand : php -v\n\n\n\nCommand : apt-get install mysql-server\n\n\n\nCommand : mysql -u root\n\n\n\nCommand : SHOW DATABASES;\n\n\n\nCOMMAND : apt-get install nginx\n\n\n\nCommand : ll /etc.   /// check in this nginx folder preset or not if yes its ok\n\n\n\nCommand: apt-get install git\n\n\n\nCommand: git --version\n\n\n\nCommand: apt-get install zip unzip\n\n\n\ncommand: ssh-keygen -t rsa -b 4096 -C “githbub”\n\n\n\nCommand : cat ~/.ssh/id_rsa.pub\n\n\n\nGot repository after select setting after that deploy keys add id_rsa.pub data past\n\n\n\nCheck connected or not\n\nCommand : ssh -T git@github.com\n\n\n\ncommand : git clone url\n\n\n\nInstall composer \n\ncurl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer\n\n\n\n// go to project use it\n\ncomposer install —no-dev\n\n\n\ncommand : ll // list\n\n\n\ncommand : cp .env.example .env\n\ncommand : php artisan key:generate\n\n\n\n// configuration nginx\n\n\n\nCommand: cd /etc/nginx\n\nCommand: ll // get folder name sites-availlable\n\n\n\ncommand : vim sites-available // get default\n\n\n\n// insert use (i) press\n\nEscape for cancel\n\n:qw\n\n\n\nCommand : vim sites-available/default\n\n\n\nChanges in this file root: path add our folder name\n\n\n\nroot /var/www/html/hackerdais\n\n\n\nChange on more line\n\nindex index.html index.htm index.php\n\n\n\nChange on more line\n\ntry_files $uri $uri/ /index.php$is_args$args;\n\n\n\n\n\n\n\nOne more changes\n\nLocation ~ \\.php$ {\n\n// change php version here\n\nincludes snippets/fastcgi-php.conf;\n\nfastcgi_pass unix:/run/php/php7.2-fpm.sock\n\n}\n\n\n\n\n\n// restart server\n\n\n\nservice nginx restart\n\nservice nginx reload\n\nnginx -t \n\n\n\n\n\n\n\n// mysql\n\nCREATE DATABASE tutorials;\n\n\n\n\n\n// queue server\n\napt-get install supervisor \n\ncd /etc/supervisor/conf.d\n\n\n\n\n\nadminrootpass\n\nALTER USER '")]),n._v("root"),s("span",{pre:!0,attrs:{class:"token string"}},[n._v("'@'")]),n._v("localhost"),s("span",{pre:!0,attrs:{class:"token string"}},[n._v("' IDENTIFIED WITH mysql_native_password BY '")]),n._v("adminrootpass"),s("span",{pre:!0,attrs:{class:"token string"}},[n._v("';\nGRANT ALL PRIVILEGES ON *.* TO '")]),n._v("root"),s("span",{pre:!0,attrs:{class:"token string"}},[n._v("'@'")]),n._v("localhost' WITH GRANT OPTION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("DB_DATABASE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("awslaravel\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("DB_USERNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("DB_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("adminrootpass\n\n\t\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);