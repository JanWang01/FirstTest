var car2={_events:{},_windowHeight:$(window).height(),_windowWidth:$(window).width(),_rotateNode:$(".p-ct"),_page:$(".m-page"),_pageNum:$(".m-page").size(),_pageNow:0,_pageNext:null,_touchStartValY:0,_touchDeltaY:0,_moveStart:!0,_movePosition:null,_movePosition_c:null,_mouseDown:!1,_moveFirst:!0,_moveInit:!1,_firstChange:!1,_map:$(".ylmap"),_mapValue:null,_mapIndex:null,_audioNode:$(".u-audio"),_audio:null,_audio_val:!0,_elementStyle:document.createElement("div").style,_UC:RegExp("Android").test(navigator.userAgent)&&RegExp("UC").test(navigator.userAgent)?!0:!1,_weixin:RegExp("MicroMessenger").test(navigator.userAgent)?!0:!1,_iPhoen:RegExp("iPhone").test(navigator.userAgent)||RegExp("iPod").test(navigator.userAgent)||RegExp("iPad").test(navigator.userAgent)?!0:!1,_Android:RegExp("Android").test(navigator.userAgent)?!0:!1,_IsPC:function(){var d,a=navigator.userAgent,b=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),c=!0;for(d=0;d<b.length;d++)if(a.indexOf(b[d])>0){c=!1;break}return c},_isOwnEmpty:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},_WXinit:function(a){"undefined"==typeof window.WeixinJSBridge||"undefined"==typeof window.WeixinJSBridge.invoke?setTimeout(function(){this.WXinit(a)},200):a()},_vendor:function(){for(var b,a=["t","webkitT","MozT","msT","OT"],c=0,d=a.length;d>c;c++)if(b=a[c]+"ransform",b in this._elementStyle)return a[c].substr(0,a[c].length-1);return!1},_prefixStyle:function(a){return this._vendor()===!1?!1:""===this._vendor()?a:this._vendor()+a.charAt(0).toUpperCase()+a.substr(1)},_hasPerspective:function(){var a=this._prefixStyle("perspective")in this._elementStyle;return a&&"webkitPerspective"in this._elementStyle&&this._injectStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),!!a},_translateZ:function(){return car2._hasPerspective?" translateZ(0)":""},_injectStyles:function(a,b,c,d){var e,f,g,h,i=document.createElement("div"),j=document.body,k=j||document.createElement("body"),l="modernizr";if(parseInt(c,10))for(;c--;)g=document.createElement("div"),g.id=d?d[c]:l+(c+1),i.appendChild(g);return e=["&#173;",'<style id="s',l,'">',a,"</style>"].join(""),i.id=l,(j?i:k).innerHTML+=e,k.appendChild(i),j||(k.style.background="",k.style.overflow="hidden",h=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(k)),f=b(i,a),j?i.parentNode.removeChild(i):(k.parentNode.removeChild(k),docElement.style.overflow=h),!!f},_handleEvent:function(a){if(this._events[a]){var b=0,c=this._events[a].length;if(c)for(;c>b;b++)this._events[a][b].apply(this,[].slice.call(arguments,1))}},_on:function(a,b){this._events[a]||(this._events[a]=[]),this._events[a].push(b)},_scrollStop:function(){$(window).on("touchmove.scroll",this._scrollControl),$(window).on("scroll.scroll",this._scrollControl)},_scrollStart:function(){$(window).off("touchmove.scroll"),$(window).off("scroll.scroll")},_scrollControl:function(a){a.preventDefault()},page_start:function(){car2._page.on("touchstart mousedown",car2.page_touch_start),car2._page.on("touchmove mousemove",car2.page_touch_move),car2._page.on("touchend mouseup",car2.page_touch_end)},page_stop:function(){car2._page.off("touchstart mousedown"),car2._page.off("touchmove mousemove"),car2._page.off("touchend mouseup")},page_touch_start:function(a){car2._moveStart&&("touchstart"==a.type?car2._touchStartValY=window.event.touches[0].pageY:(car2._touchStartValY=a.pageY||a.y,car2._mouseDown=!0),car2._moveInit=!0,car2._handleEvent("start"))},page_touch_move:function(a){if(a.preventDefault(),car2._moveStart&&car2._moveInit){var d,b=car2._page.eq(car2._pageNow),f=(parseInt(b.height()),null),g=!1;if("touchmove"==a.type)d=window.event.touches[0].pageY,g=!0;else{if(!car2._mouseDown)return;d=a.pageY||a.y,g=!0}f=car2.page_position(a,d,b),car2.page_translate(f),car2._handleEvent("move")}},page_position:function(a,b,c){function f(a){var b,c,d=car2._translateZ();car2._page.removeClass("action"),$(a[1]).addClass("action").removeClass("f-hide"),car2._page.not(".action").addClass("f-hide"),car2.height_auto(car2._page.eq(car2._pageNext),"false"),$(a[0]).removeClass("f-hide").addClass("active"),"up"==car2._movePosition?(b=parseInt($(window).scrollTop()),c=b>0?$(window).height()+b:$(window).height(),a[0].style[car2._prefixStyle("transform")]="translate(0,"+c+"px)"+d,$(a[0]).attr("data-translate",c),$(a[1]).attr("data-translate",0)):(a[0].style[car2._prefixStyle("transform")]="translate(0,-"+Math.max($(window).height(),$(a[0]).height())+"px)"+d,$(a[0]).attr("data-translate",-Math.max($(window).height(),$(a[0]).height())),$(a[1]).attr("data-translate",0))}var d,e;if("undefined"!=b&&(car2._touchDeltaY=b-car2._touchStartValY),car2._movePosition=b-car2._touchStartValY>0?"down":"up",car2._movePosition!=car2._movePosition_c?(car2._moveFirst=!0,car2._movePosition_c=car2._movePosition):car2._moveFirst=!1,car2._touchDeltaY<=0)car2._pageNext=0==c.next(".m-page").length?0:car2._pageNow+1,e=car2._page.eq(car2._pageNext)[0];else{if(0==c.prev(".m-page").length){if(!car2._firstChange)return;car2._pageNext=car2._pageNum-1}else car2._pageNext=car2._pageNow-1;e=car2._page.eq(car2._pageNext)[0]}return d=car2._page.eq(car2._pageNow)[0],node=[e,d],car2._moveFirst&&f(node),node},page_translate:function(a){if(a){var c,d,e,b=car2._translateZ(),f=car2._touchDeltaY;$(a[0]).attr("data-translate")&&(c=f+parseInt($(a[0]).attr("data-translate"))),a[0].style[car2._prefixStyle("transform")]="translate(0,"+c+"px)"+b,$(a[1]).attr("data-translate")&&(d=f+parseInt($(a[1]).attr("data-translate"))),e=1-Math.abs(.2*f/$(window).height()),d/=5,a[1].style[car2._prefixStyle("transform")]="translate(0,"+d+"px)"+b+" scale("+e+")"}},page_touch_end:function(){car2._moveInit=!1,car2._mouseDown=!1,car2._moveStart&&(car2._pageNext||0==car2._pageNext)&&(car2._moveStart=!1,Math.abs(car2._touchDeltaY)>10&&(car2._page.eq(car2._pageNext)[0].style[car2._prefixStyle("transition")]="all .3s",car2._page.eq(car2._pageNow)[0].style[car2._prefixStyle("transition")]="all .3s"),Math.abs(car2._touchDeltaY)>=100?car2.page_success():Math.abs(car2._touchDeltaY)>10&&Math.abs(car2._touchDeltaY)<100?car2.page_fial():car2.page_fial(),car2._handleEvent("end"),car2._movePosition=null,car2._movePosition_c=null,car2._touchStartValY=0,$("#j-mengban").hasClass("z-show")&&50==car2._pageNext&&car2.page_stop())},page_success:function(){var b,c,a=car2._translateZ();car2._page.eq(car2._pageNext)[0].style[car2._prefixStyle("transform")]="translate(0,0)"+a,b=car2._touchDeltaY>0?$(window).height()/5:-$(window).height()/5,c=.8,car2._page.eq(car2._pageNow)[0].style[car2._prefixStyle("transform")]="translate(0,"+b+"px)"+a+" scale("+c+")",car2._handleEvent("success")},page_fial:function(){var a=car2._translateZ();return car2._pageNext||0==car2._pageNext?(car2._page.eq(car2._pageNext)[0].style[car2._prefixStyle("transform")]="up"==car2._movePosition?"translate(0,"+$(window).height()+"px)"+a:"translate(0,-"+$(window).height()+"px)"+a,car2._page.eq(car2._pageNow)[0].style[car2._prefixStyle("transform")]="translate(0,0)"+a+" scale(1)",car2._handleEvent("fial"),void 0):(car2._moveStart=!0,car2._moveFirst=!0,void 0)},haddle_envent_fn:function(){car2._on("start",car2.lazy_bigP),car2._on("move",function(){}),car2._on("fial",function(){setTimeout(function(){car2._page.eq(car2._pageNow).attr("data-translate",""),car2._page.eq(car2._pageNow)[0].style[car2._prefixStyle("transform")]="",car2._page.eq(car2._pageNow)[0].style[car2._prefixStyle("transition")]="",car2._page.eq(car2._pageNext)[0].style[car2._prefixStyle("transform")]="",car2._page.eq(car2._pageNext)[0].style[car2._prefixStyle("transition")]="",car2._page.eq(car2._pageNext).removeClass("active").addClass("f-hide"),car2._moveStart=!0,car2._moveFirst=!0,car2._pageNext=null,car2._touchDeltaY=0,car2._page.eq(car2._pageNow).attr("style","")},300)}),car2._on("success",function(){0==car2._pageNext&&car2._pageNow==car2._pageNum-1&&(car2._firstChange=!0),0!=car2._page.eq(car2._pageNext).next(".m-page").length&&car2.lightapp_intro_hide(!0),setTimeout(function(){car2.Txt_init(car2._page.eq(car2._pageNow)),car2._pageNext==car2._pageNum-1?$(".u-arrow").addClass("f-hide"):$(".u-arrow").removeClass("f-hide"),car2._page.eq(car2._pageNow).addClass("f-hide"),car2._page.eq(car2._pageNow).attr("data-translate",""),car2._page.eq(car2._pageNow)[0].style[car2._prefixStyle("transform")]="",car2._page.eq(car2._pageNow)[0].style[car2._prefixStyle("transition")]="",car2._page.eq(car2._pageNext)[0].style[car2._prefixStyle("transform")]="",car2._page.eq(car2._pageNext)[0].style[car2._prefixStyle("transition")]="",$(".p-ct").removeClass("fixed"),car2._page.eq(car2._pageNext).removeClass("active"),car2._page.eq(car2._pageNext).removeClass("fixed"),car2._pageNow=car2._pageNext,car2._moveStart=!0,car2._moveFirst=!0,car2._pageNext=null,car2._page.eq(car2._pageNow).attr("style",""),car2._page.eq(car2._pageNow).removeClass("fixed"),car2._page.eq(car2._pageNow).attr("data-translate",""),car2._touchDeltaY=0,setTimeout(function(){car2._page.eq(car2._pageNow).hasClass("z-animate")||car2._page.eq(car2._pageNow).addClass("z-animate")},20),$(".j-detail").removeClass("z-show"),$(".txt-arrow").removeClass("z-toggle"),$("video").each(function(){this.paused||this.pause()}),car2.Txt_init(car2._page.eq(car2._pageNow)),0==car2._page.eq(car2._pageNow).next(".m-page").length&&(car2.lightapp_intro_show(),car2.lightapp_intro())},300);var a=car2._page.eq(car2._pageNow).attr("data-statics");car2.ajaxTongji(a)})},mapAddEventHandler:function(a,b,c,d){var e=c;car2._isOwnEmpty(d)||(e=function(){c.call(this,d)}),a.each(function(){$(this).on(b,e)})},mapShow:function(option){var detal,latitude,longitude,fnOpen,fnClose,str_data=$(this).attr("data-detal");option.detal=""!=str_data?eval("("+str_data+")"):"",option.latitude=$(this).attr("data-latitude"),option.longitude=$(this).attr("data-longitude"),detal=option.detal,latitude=option.latitude,longitude=option.longitude,fnOpen=option.fnOpen,fnClose=option.fnClose,car2._scrollStop(),car2._map.addClass("show"),$(document.body).animate({scrollTop:0},0),$(this).attr("data-mapIndex")!=car2._mapIndex?(car2._map.html($('<div class="bk"><span class="css_sprite01 s-bg-map-logo"></span></div>')),car2._mapValue=!1,car2._mapIndex=$(this).attr("data-mapIndex")):car2._mapValue=!0,setTimeout(function(){car2._map.find("div").length>=1&&(car2._map.addClass("mapOpen"),car2.page_stop(),car2._scrollStop(),car2._audioNode.addClass("z-low"),car2._page.eq(car2._pageNow).css("z-index",15),setTimeout(function(){car2._mapValue||car2.addMap(detal,latitude,longitude,fnOpen,fnClose)},500))},100)},mapSave:function(){function a(){car2._map.removeClass("show"),car2._page.eq(car2._pageNow).css("z-index",9),$(window).off("webkitTransitionEnd transitionend")}$(window).on("webkitTransitionEnd transitionend",a),car2.page_start(),car2._scrollStart(),car2._map.removeClass("mapOpen"),car2._audioNode.removeClass("z-low"),car2._mapValue||(car2._mapValue=!0)},addMap:function(a,b,c,d,e){var f;a=a,b=Number(b),c=Number(c),d="function"==typeof d?d:"",e="function"==typeof e?e:"",f={sign_name:"",contact_tel:"",address:"天安门"},a=car2._isOwnEmpty(a)?f:a,b=b?b:39.915,c=c?c:116.404,car2._map.ylmap({detal:a,latitude:b,longitude:c,fnOpen:d,fnClose:e})},mapCreate:function(){var a,b;".j-map".length<=0||(a=$(".j-map"),b={fnOpen:car2._scrollStop,fnClose:car2.mapSave},car2.mapAddEventHandler(a,"click",car2.mapShow,b))},audio_init:function(){var b,a={loop:!0,preload:"auto",src:car2._audioNode.attr("data-src")};car2._audio=new Audio;for(b in a)a.hasOwnProperty(b)&&b in car2._audio&&(car2._audio[b]=a[b]);car2._audio.load()},audio_addEvent:function(){function c(a,b,c){b?a.text("打开"):a.text("关闭"),c&&clearTimeout(c),a.removeClass("z-move z-hide"),c=setTimeout(function(){a.addClass("z-move").addClass("z-hide")},1e3)}if(!(car2._audioNode.length<=0)){var a=car2._audioNode.find(".txt_audio"),b=null;car2._audioNode.find(".btn_audio").on("click",car2.audio_contorl),$(car2._audio).on("play",function(){car2._audio_val=!1,c(a,!0,b),$.fn.coffee.start(),$(".coffee-steam-box").show(500)}),$(car2._audio).on("pause",function(){c(a,!1,b),$.fn.coffee.stop(),$(".coffee-steam-box").hide(500)})}},audio_contorl:function(){car2._audio_val?car2.audio_play():car2.audio_stop()},audio_play:function(){car2._audio_val=!1,car2._audio&&car2._audio.play()},audio_stop:function(){car2._audio_val=!0,car2._audio&&car2._audio.pause()},video_init:function(){$(".j-video").each(function(){var c,d,a={controls:"controls",preload:"none",width:$(this).attr("data-width"),height:$(this).attr("data-height"),src:$(this).attr("data-src")},b=$('<video class="f-hide"></video>')[0];for(c in a)a.hasOwnProperty(c)&&c in b&&(b[c]=a[c]),this.appendChild(b);d=$(b).prev(),$(b).on("play",function(){d.hide(),$(b).removeClass("f-hide")}),$(b).on("pause",function(){d.show(),$(b).addClass("f-hide")})}),$(".j-video .img").on("click",function(){var a=$(this).next()[0];a.paused&&($(a).removeClass("f-hide"),a.play(),$(this).hide())})},media_control:function(){car2._audio&&($("video").length<=0||($(car2._audio).on("play",function(){$("video").each(function(){this.paused||this.pause()})}),$("video").on("play",function(){car2._audio_val||car2.audio_contorl()})))},media_init:function(){car2.audio_init(),car2.video_init(),car2.audio_addEvent(),car2.media_control()},lazy_img:function(){var a=$(".lazy-img");a.each(function(){var b,c,a=$(this);a.is("img")?a.attr("src","img_hz/loading_large.gif"):(b=a.css("background-position"),c=a.css("background-size"),a.attr({"data-position":b,"data-size":c}),"no"==a.attr("data-bg")&&a.css({"background-repeat":"no-repeat"}),a.css({"background-image":"url(img/loading_large.gif)","background-size":"120px 120px","background-position":"center"}),"no"==a.attr("data-image")&&a.css({"background-image":"none"}))})},lazy_start:function(){setTimeout(function(){var a,b;for(a=0;3>a&&(b=$(".m-page").eq(a),0!=b.length);a++)0!=b.find(".lazy-img").length&&(car2.lazy_change(b,!1),"flyCon"==b.attr("data-page-type")&&car2.lazy_change($(".m-flypop"),!1))},200)},lazy_bigP:function(){var a,b;for(a=3;5>=a&&(b=$(".m-page").eq(car2._pageNow+a),0!=b.length);a++)0!=b.find(".lazy-img").length&&(car2.lazy_change(b,!0),"flyCon"==b.attr("data-page-type")&&car2.lazy_change($(".m-flypop"),!1))},lazy_change:function(a,b){var c,d;"3d"==a.attr("data-page-type")&&car2.lazy_3d(a),"flyCon"==a.attr("data-page-type")&&(c=$(".m-flypop").find(".lazy-img"),c.each(function(){var a=$(this),b=a.attr("data-src");$("<img />").on("load",function(){a.is("img")&&a.attr("src",b)}).attr("src",b)})),d=a.find(".lazy-img"),d.each(function(){var a=$(this),c=a.attr("data-src"),d=a.attr("data-position"),e=a.attr("data-size");"no"!=a.attr("data-bg")?($("<img />").on("load",function(){var f,g;if(a.is("img")?a.attr("src",c):a.css({"background-image":"url("+c+")","background-position":d,"background-size":e}),b)for(f=0;f<$(".m-page").size();f++)g=$(".m-page").eq(f),0!=$(".m-page").find(".lazy-img").length&&car2.lazy_change(g,!0)}).attr("src",c),a.removeClass("lazy-img").addClass("lazy-finish")):"yes"==a.attr("data-auto")&&a.css("background","none")})},signUp_submit:function(){$("#j-signUp-submit").on("click",function(a){var b,c;console.log("click"),a.preventDefault(),b=$(this).parents("#j-signUp"),c=car2.signUpCheck_input(b),c&&car2.signUpCheck_submit(b)})},signUpCheck_input:function(a){var c=!0,d=a.find("input");return d.each(function(){var a,b,d,e,f;if(""!=this.name&&"undefined"!=this.name){if(a=this.name,b=car2.regFunction(a),d=b.empty_tip,e=b.reg,f=b.reg_tip,""==$.trim($(this).val()))return car2.showCheckMessage(d,!0),$(this).focus(),$(this).addClass("z-error"),c=!1,!1;if(void 0!=e&&""!=e&&!$(this).val().match(e))return $(this).focus(),$(this).addClass("z-error"),car2.showCheckMessage(f,!0),c=!1,!1;$(this).removeClass("z-error"),$(".u-note-error").html("")}}),0==c?!1:!0},regFunction:function(a){var b="",c="",d="";switch(a){case"name":d=/^[\u4e00-\u9fa5|a-z|A-Z|\s]{1,20}$/,b="不能落下姓名哦！",c="这名字太怪了！";break;case"sex":b="想想，该怎么称呼您呢？",c="想想，该怎么称呼您呢？";break;case"tel":d=/^1[0-9][0-9]\d{8}$/,b="有个联系方式，就更好了！",c="这号码,可打不通... ";break;case"email":d=/(^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$)/i,b="都21世纪了，应该有个电子邮箱吧！",c="邮箱格式有问题哦！";break;case"company":d=/^[\u4e00-\u9fa5|a-z|A-Z|\s|\d]{1,20}$/,b="填个公司吧！",c="这个公司太奇怪了！";break;case"job":d=/^[\u4e00-\u9fa5|a-z|A-Z|\s]{1,20}$/,b="请您填个职位",c="这个职位太奇怪了！";break;case"date":b="给个日期吧！",c="";break;case"time":b="填下具体时间更好哦！",c="";break;case"age":d=/^([3-9])|([1-9][0-9])|([1][0-3][0-9])$/,b="有个年龄就更好了！",c="这年龄可不对哦！"}return{empty_tip:b,reg_tip:c,reg:d}},signUpCheck_submit:function(a){car2.loadingPageShow();var b="/auto/submit/"+$("#activity_id").val();$.ajax({url:b,cache:!1,dataType:"json",async:!0,type:"POST",data:a.serialize(),success:function(a){car2.loadingPageHide(),200==a.code?(car2.showCheckMessage("提交成功！",!0),setTimeout(function(){$(".book-form").removeClass("z-show"),$(".book-bg").removeClass("z-show"),setTimeout(function(){$(document.body).css("height","100%"),car2.page_start(),car2._scrollStop(),$(".book-bg").addClass("f-hide"),$(".book-form").addClass("f-hide")},500)},1e3),$(".book-bd .bd-form .btn").addClass("z-stop"),$(".book-bd .bd-form .btn").attr("data-submit","true")):"400"==a.code&&car2.showCheckMessage("提交失败",!1)},error:function(a,b,c){car2.showCheckMessage(c,!0),setTimeout(function(){car2.loadingPageHide()},500)}})},showCheckMessage:function(a,b){b?($(".u-note-error").html(a),$(".u-note-error").addClass("on"),$(".u-note-sucess").removeClass("on"),setTimeout(function(){$(".u-note").removeClass("on")},2e3)):($(".u-note-sucess").addClass("on"),$(".u-note-error").removeClass("on"),setTimeout(function(){$(".u-note").removeClass("on")},2e3))},height_auto:function(a,b){var c,d;if(a.children(".page-con").css("height","auto"),c=$(window).height(),d=!0)a.children(".page-con").height(c+2),$(".p-ct").hasClass("fixed")||"true"!=b||$(".p-ct").addClass("fixed");else{if(!(a.height()<=c))return car2._scrollStart(),"true"==b&&$(".p-ct").removeClass("fixed"),a.children(".page-con").css("height","100%"),void 0;a.children(".page-con").height(c+2),$(".p-ct").hasClass("fixed")||"true"!=b||$(".p-ct").addClass("fixed")}},Txt_init:function(a){a.find(".j-txt").length<=0||a.find(".j-txt").find(".j-detail p").length<=0||a.find(".j-txt").each(function(){var a=$(this).find(".j-detail"),b=$(this).find(".j-title"),c=b.find(".txt-arrow"),d=a.find("p"),e=parseInt(b.height()),f=parseInt(d.height()),g=f+e;$(this).parents(".m-page").hasClass("m-smallTxt")&&(0==$(this).parents(".smallTxt-bd").index()?a.css("top",e):a.css("bottom",e)),a.attr("data-height",f),$(this).attr("data-height-init",e),$(this).attr("data-height-extand",g),d[0].style[car2._prefixStyle("transform")]="translate(0,-"+f+"px)",$(this.parentNode).hasClass("z-left")&&(d[0].style[car2._prefixStyle("transform")]="translate(0,"+f+"px)"),a.css("height","0"),c.removeClass("z-toggle"),$(this).css("height",e)})},bigTxt_extand:function(){$("body").on("click",".j-title",function(){if(!($(".j-detail").length<=0)){var a=$(this.parentNode).find(".j-detail");$(".j-detail").removeClass("action"),a.addClass("action"),$(this).hasClass("smallTxt-arrow")&&($(".smallTxt-bd").removeClass("action"),a.parent().addClass("action")),a.hasClass("z-show")?(a.removeClass("z-show"),a.css("height",0),$(this.parentNode).css("height",parseInt($(this.parentNode).attr("data-height-init")))):(a.addClass("z-show"),a.css("height",parseInt(a.attr("data-height"))),$(this.parentNode).css("height",parseInt($(this.parentNode).attr("data-height-extand")))),$(".j-detail").not(".action").removeClass("z-show"),$(".txt-arrow").removeClass("z-toggle"),a.hasClass("z-show")?$(this).find(".txt-arrow").addClass("z-toggle"):$(this).find(".txt-arrow").removeClass("z-toggle")}})}(),Txt_back:function(){$("body").on("click",".m-page",function(a){var b,c,d,e;a.stopPropagation(),b=$(a.target),c=b.parents(".m-page"),d=0==b.parents(".j-txtWrap").length?b:b.parents(".j-txtWrap"),c.find(".j-txt").find(".j-detail p").length<=0||c.find(".j-txt").length<=0||b.parents(".j-txt").length>=1||b.hasClass("bigTxt-btn")||b.parents(".bigTxt-btn").length>=1||(e=d.find(".j-detail"),$(".j-detail").removeClass("action"),e.addClass("action"),$(".j-detail").not(".action").removeClass("z-show"),d.each(function(){var a=$(this).find(".j-detail"),b=$(this).find(".txt-arrow"),c=$(this).find(".j-txt");a.hasClass("z-show")?(a.removeClass("z-show"),a.css("height",0),c.css("height",parseInt(c.attr("data-height-init")))):(a.addClass("z-show"),a.css("height",parseInt(a.attr("data-height"))),c.css("height",parseInt(c.attr("data-height-extand")))),a.hasClass("z-show")?b.addClass("z-toggle"):b.removeClass("z-toggle")}))})}(),input_form:function(){$("body").on("click",".book-bd .bd-form .btn",function(){var b,a=$(this).attr("data-submit");"true"!=a&&(b=$(window).height(),$(document.body).css("height",b),car2.page_stop(),car2._scrollStart(),car2._page.eq(car2._pageNow).css("z-index",15),$(".book-bg").removeClass("f-hide"),$(".book-form").removeClass("f-hide"),setTimeout(function(){$(".book-form").addClass("z-show"),$(".book-bg").addClass("z-show")},50),$(".book-bg").off("click"),$(".book-bg").on("click",function(a){a.stopPropagation();var b=$(a.target);b.parents(".book-form").length>=1&&!b.hasClass("j-close-img")&&b.parents(".j-close").length<=0||($(".book-form").removeClass("z-show"),$(".book-bg").removeClass("z-show"),setTimeout(function(){$(document.body).css("height","100%"),car2.page_start(),car2._scrollStop(),car2._page.eq(car2._pageNow).css("z-index",9),$(".book-bg").addClass("f-hide"),$(".book-form").addClass("f-hide")},500))}))})}(),sex_select:function(){var a=$("#j-signUp").find(".sex p"),b=$("#j-signUp").find(".sex strong"),c=$("#j-signUp").find(".sex input");a.on("click",function(){var d,a=$(this).find("strong");b.removeClass("open"),a.addClass("open"),d=$(this).attr("data-sex"),c.val(d)})}(),lightapp_intro_show:function(){$(".market-notice").removeClass("f-hide"),setTimeout(function(){$(".market-notice").addClass("show")},100)},lightapp_intro_hide:function(a){return a?($(".market-notice").addClass("f-hide").removeClass("show"),void 0):($(".market-notice").removeClass("show"),setTimeout(function(){$(".market-notice").addClass("f-hide")},500),void 0)},lightapp_intro:function(){$(".market-notice").off("click"),$(".market-notice").on("click",function(){$(".market-page").removeClass("f-hide"),setTimeout(function(){$(".market-page").addClass("show"),setTimeout(function(){$(".market-img").addClass("show")},100),car2.lightapp_intro_hide()},100),car2.page_stop(),car2._scrollStop()}),$(".market-page").off("click"),$(".market-page").on("click",function(a){$(a.target).hasClass("market-page")&&($(".market-img").removeClass("show"),setTimeout(function(){$(".market-page").removeClass("show"),setTimeout(function(){$(".market-page").addClass("f-hide")},200)},500),car2.lightapp_intro_show(),car2.page_start(),car2._scrollStart())})},ajaxTongji:function(a){var c,d,b=location.search.substr(location.search.indexOf("channel=")+8);b=b.match(/^\d+/),(!b||isNaN(b)||0>b)&&(b=1),c=$("#activity_id").val(),d="/analyseplugin/plugin?activity_id="+c+"&plugtype="+a,$.get(d,{},function(){})},wxShare:function(){$("body").on("click",".bigTxt-btn-wx",function(){var a=$(this).parent().find(".bigTxt-weixin");a.addClass("z-show"),car2.page_stop(),a.on("click",function(){$(this).removeClass("z-show"),car2.page_start(),$(this).off("click")})})}(),loadingPageShow:function(){$(".u-pageLoading").show()},loadingPageHide:function(){$(".u-pageLoading").hide()},refresh:function(){$(window).height()=$(window).height(),car2._windowWidth=$(window).width()},plugin:function(){car2.mapCreate(),$("#coffee_flow").coffee({steams:["<img src='img_hz/audio_widget_01@2x.png' />","<img src='img_hz/audio_widget_01@2x.png' />"],steamHeight:100,steamWidth:44}),car2.start_callback();var a={};""!=$("#r-wx-title").val()&&(a.title=$("#r-wx-title").val()),""!=$("#r-wx-img").val()&&(a.img=$("#r-wx-img").val()),""!=$("#r-wx-con").val()&&(a.con=$("#r-wx-con").val()),car2._weixin&&$(document.body).wx(a)},cover_draw:function(a,b,c,d,e,f,g){if(!(a.style.display.indexOf("none")>-1)){var h=new Lottery(a,c,d,e,f,g);h.init()}},menban_callback:function(){$("#j-mengban").removeClass("z-show"),setTimeout(function(){$("#j-mengban").addClass("f-hide")},1500),car2.page_start()},start_callback:function(){if(car2._scrollStart(),car2.page_start(),$(".u-arrow").removeClass("f-hide"),car2._audio){car2._audioNode.removeClass("f-hide"),car2._audio.play(),$(document).one("touchstart",function(){car2._audio.play()});var a=$("#j-mengban")[0],b="img/page_01_bg@2x.jpg",c=$("#r-cover").val(),d="image",e=640,f=$(window).height(),g=car2.menban_callback;car2.cover_draw(a,b,c,d,e,f,g)}},styleInit:function(){document.body.style.userSelect="none",document.body.style.mozUserSelect="none",document.body.style.webkitUserSelect="none",car2._IsPC()?$(document.body).addClass("pc"):$(document.body).addClass("mobile"),car2._Android&&$(document.body).addClass("android"),car2._iPhoen&&$(document.body).addClass("iphone"),car2._hasPerspective()?(car2._rotateNode.addClass("transformNode-3d"),$(document.body).addClass("perspective"),$(document.body).addClass("yes-3d")):(car2._rotateNode.addClass("transformNode-2d"),$(document.body).addClass("no-3d")),this.lazy_img(),car2.Txt_init(car2._page.eq(car2._pageNow)),setTimeout(function(){$(".m-alert").find("strong").addClass("z-show")},1e3),$(".u-arrow").on("touchmove",function(a){a.preventDefault()}),$(".p-ct").height($(window).height()),$(".m-page").height($(window).height()),$("#j-mengban").height($(window).height()),$(".translate-back").height($(window).height())},init:function(){this.styleInit(),this.haddle_envent_fn(),$('input[type="hidden"]').appendTo($("body")),$("<img />").attr("src",$("#r-cover").val()),$("<img />").attr("src",$(".m-fengye").find(".page-con").attr("data-src"));var a=(new Date).getTime();$(window).on("load",function(){var d,b=(new Date).getTime(),c=!1,e=b-a;e>=500&&(c=!0),d=c?0:500-e,setTimeout(function(){var a,b,c;setTimeout(function(){$(".m-alert").addClass("f-hide")},1e3),$("#j-mengban").addClass("z-show"),setTimeout(function(){$(".translate-back").removeClass("f-hide"),$(".m-fengye").removeClass("f-hide"),car2.height_auto(car2._page.eq(car2._pageNow),"false")},1e3),car2.media_init(),car2.lazy_start(),car2.signUp_submit(),car2.plugin(),a=location.search.substr(location.search.indexOf("channel=")+8),a=a.match(/^\d+/),(!a||isNaN(a)||0>a)&&(a=1),b=$("#activity_id").val(),c="/auto/analyse/"+b+"?channel="+a,$.get(c,{},function(){}),$(".p-ct").height($(window).height()),$(".m-page").height($(window).height()),$("#j-mengban").height($(window).height()),$(".translate-back").height($(window).height())},d)})}};car2.init();