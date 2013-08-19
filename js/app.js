var content = "";

$(document).ready(function () {
    //系統別バス情報を要素にもつ単純配列
    var businfoarr = [];
    //系統別バス情報
    var businfo1 = {
        'url': 'http://www.odakyubus.co.jp/dia/search/viewdia.cgi?busstopcdto=605&dia=1&newdia=&busstopcd=557&routeno=%2C442-0%2C&chk_sel=',
        'terminal': '7',
        'routeno': '新17(聖マリアンナ医科大学)'
    };

    var businfo2 = {
        'url': 'http://www.odakyubus.co.jp/dia/search/viewdia.cgi?busstopcdto=605&dia=1&newdia=&busstopcd=557&routeno=%2C440-0%2C&chk_sel=',
        'terminal': '6',
        'routeno': '新18(新百合ヶ丘駅循環)'
    };

    var businfo3 = {
        'url': 'http://www.odakyubus.co.jp/dia/search/viewdia.cgi?busstopcdto=605&dia=1&newdia=&busstopcd=557&routeno=%2C444-0%2C&chk_sel=',
        'terminal': '7',
        'routeno': '新19(田園調布学園大学)'
    };
    var businfo4 = {
        'url': 'http://www.odakyubus.co.jp/dia/search/viewdia.cgi?busstopcdto=605&dia=1&newdia=&busstopcd=557&routeno=%2C438-0%2C&chk_sel=',
        'terminal': '6',
        'routeno': '新15(大谷)'
    };
    var businfo5 = {
        'url': 'http://www.odakyubus.co.jp/dia/search/viewdia.cgi?busstopcdto=605&dia=1&newdia=&busstopcd=557&routeno=%2C300001173-0%2C436-0%2C&chk_sel=',
        'terminal': '3',
        'routeno': '新10(新ゆりグリーンタウン)'
    };

    //単純配列に系統別バス情報を設定する

    businfoarr.push(businfo1);
    businfoarr.push(businfo2);
    businfoarr.push(businfo3);
    businfoarr.push(businfo4);
    businfoarr.push(businfo5);

    //時刻毎にソートして一本化したバス到着時刻情報を要素に持つ単純配列
    var convinedarr = [];

    var f = function (i) {

        $.ajax({
            url: businfoarr[i]['url'],
            type: "GET",
            dataType: 'html'
        })
            .fail(
            function (XMLHttpRequest, textStatus, errorThrow) {
                console.log("error occured");
            }
        )
            .done(
            function (data, status, xhr) {
                console.log("ok" + i);
                var arr = [];
                $(data.results[0]).find("tr.hourRow").children("td.hour").each(function (index, value) {
                    var hour = $.trim($(this).text());
                    //console.log("hour="+hour);
                    //指定した時刻の行の分情報を取得する(平日のみ)
                    //containsだと部分一致のためターゲットが５時台でも5,15,25がヒットする。
                    //そのためchild(祖先)から先祖をたどり時刻情報がhourと一致したときのみ後続の処理を実行する。
                    $(data.results[0]).find("td.hour:contains(" + hour + ")").next(".week").find("td.dia").each(function (index, value) {
                        var isChild = false;
                        $(this).parents().each(function (index, value) {
                            if ((this.tagName == "TD") && (this.className == "week") && ($.trim($(this).prev(".hour").text()) == hour)) {
                                isChild = true;
                            }
                            ;
                        });
                        if (isChild == true) {
                            var min = $.trim($(this).text());
                            //console.log("     min="+min);
                            //バス到着時刻情報
                            var arivalinfoarr = [];
                            arivalinfoarr['terminal'] = businfoarr[i]['terminal'];
                            arivalinfoarr['routeno'] = businfoarr[i]['routeno'];
                            arivalinfoarr['hour'] = hour;
                            arivalinfoarr['min'] = min;
                            arivalinfoarr['hourmin'] = (hour + "" + min);
                            //統合済配列にセットする
                            convinedarr.push(arivalinfoarr);

                        }
                        ;
                    });


                });
                i++;
                if (i < businfoarr.length) {
                    f(i);
                } else {
                    //統合済配列を（時刻＋分）情報でソートする
                    convinedarr.sort(
                        function (a, b) {
                            var aTime = a["hourmin"] * 1;
                            var bTime = b["hourmin"] * 1;
                            if (aTime < bTime) return -1;
                            if (aTime > bTime) return 1;
                            return 0;
                        }
                    );
                    var j = 0;
                    for (j = 0; j < convinedarr.length; j++) {
                        console.log(convinedarr[j]["hourmin"] + ":" + convinedarr[j]["routeno"] + " at " + convinedarr[j]["terminal"]);
                    }
                }
                ;
            }
        );
    };
    f(0);
});     
