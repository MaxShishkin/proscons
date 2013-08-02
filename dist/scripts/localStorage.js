var angularLocalStorage=angular.module("LocalStorageModule",[]);angularLocalStorage.value("prefix","ls"),angularLocalStorage.constant("cookie",{expiry:30,path:"/"}),angularLocalStorage.constant("notify",{setItem:!0,removeItem:!1}),angularLocalStorage.service("localStorageService",["$rootScope","prefix","cookie","notify",function(e,t,n,r){"."!==t.substr(-1)&&(t=t?t+".":"");var i=function(){try{return"localStorage"in window&&null!==window.localStorage}catch(t){return e.$broadcast("LocalStorageModule.notification.error",t.message),!1}},o=function(n,o){if(!i())return e.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),r.setItem&&e.$broadcast("LocalStorageModule.notification.setitem",{key:n,newvalue:o,storageType:"cookie"}),f(n,o);o===void 0&&(o=null);try{(angular.isObject(o)||angular.isArray(o))&&(o=angular.toJson(o)),localStorage.setItem(t+n,o),r.setItem&&e.$broadcast("LocalStorageModule.notification.setitem",{key:n,newvalue:o,storageType:"localStorage"})}catch(a){return e.$broadcast("LocalStorageModule.notification.error",a.message),f(n,o)}return!0},a=function(n){if(!i())return e.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),p(n);var r=localStorage.getItem(t+n);return r?"{"===r.charAt(0)||"["===r.charAt(0)?angular.fromJson(r):r:null},s=function(n){if(!i())return e.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),r.removeItem&&e.$broadcast("LocalStorageModule.notification.removeitem",{key:n,storageType:"cookie"}),d(n);try{localStorage.removeItem(t+n),r.removeItem&&e.$broadcast("LocalStorageModule.notification.removeitem",{key:n,storageType:"localStorage"})}catch(o){return e.$broadcast("LocalStorageModule.notification.error",o.message),d(n)}return!0},u=function(){if(!i())return e.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),!1;var n=t.length,r=[];for(var o in localStorage)if(o.substr(0,n)===t)try{r.push(o.substr(n))}catch(a){return e.$broadcast("LocalStorageModule.notification.error",a.Description),[]}return r},c=function(){if(!i())return e.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),h();var n=t.length;for(var r in localStorage)if(r.substr(0,n)===t)try{s(r.substr(n))}catch(o){return e.$broadcast("LocalStorageModule.notification.error",o.message),h()}return!0},l=function(){try{return navigator.cookieEnabled||"cookie"in document&&(document.cookie.length>0||(document.cookie="test").indexOf.call(document.cookie,"test")>-1)}catch(t){return e.$broadcast("LocalStorageModule.notification.error",t.message),!1}},f=function(r,i){if(i===void 0)return!1;if(!l())return e.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;try{var o="",a=new Date;null===i&&(n.expiry=-1,i=""),0!==n.expiry&&(a.setTime(a.getTime()+1e3*60*60*24*n.expiry),o="; expires="+a.toGMTString()),r&&(document.cookie=t+r+"="+encodeURIComponent(i)+o+"; path="+n.path)}catch(s){return e.$broadcast("LocalStorageModule.notification.error",s.message),!1}return!0},p=function(n){if(!l())return e.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;for(var r=document.cookie.split(";"),i=0;r.length>i;i++){for(var o=r[i];" "==o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t+n+"="))return decodeURIComponent(o.substring(t.length+n.length+1,o.length))}return null},d=function(e){f(e,null)},h=function(){for(var e=null,n=t.length,r=document.cookie.split(";"),i=0;r.length>i;i++){for(e=r[i];" "==e.charAt(0);)e=e.substring(1,e.length);key=e.substring(n,e.indexOf("=")),d(key)}};return{isSupported:i,set:o,add:o,get:a,keys:u,remove:s,clearAll:c,cookie:{set:f,add:f,get:p,remove:d,clearAll:h}}}]);