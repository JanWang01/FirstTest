//引用jquery <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js"></script>

var tongji_unique_id = "20141215buer"; //改这个
var tongji_url_head = "http://app.yo-town.com/tongji/main/"; //改这个 http://app.yo-town.com/tongji/main/
var tongji_show_count_info = 0;//是否显示统计信息在页面底部的开关

//js获取页面访问的统计信息
function tongji_get_count() {
    var full_url = (tongji_url_head + "get_count/" + tongji_unique_id).replace(/%2F/g, "%40");
    $.ajax({
        url: full_url,
        dataType: "jsonp",
        jsonp: "callback",
        success: function (data) {
            var html = '<div class="rich_media"><div class="rich_media_inner"><div class="rich_media_tool">' +
                '<div class="media_tool_meta link_primary meta_primary" style="font-size:12px;">阅读 <span>' + data.hits + '</span></div>' +
                '</div></div></div>';
            document.body.insertAdjacentHTML('beforeend', html);
        }
    })
}
if (tongji_show_count_info == 1) {
    setTimeout('tongji_get_count()', 5000);
}

//js保存页面访问的统计信息
function tongji_save() {
    var page_url = window.location.href;
    var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_=' + Math.random();
    $.getJSON(url, function (data) {
        var ip = data.Ip;
        var full_url = (tongji_url_head + encodeURIComponent(page_url) + "/" + encodeURIComponent(ip) + "/" + tongji_unique_id).replace(/%2F/g, "%40");
        $.ajax({
            url: full_url,
            dataType: "jsonp",
            jsonp: "callback",
            success: function (data) {
            }
        })
    });
}
setTimeout('tongji_save()', 1000);
