"ui";
/**免费工具，学习交流，破解大佬请高抬贵手，好人一生平安 */
var kh = device.height;
var kk = device.width;
var 颜色 = "#88000000"
var 宽度 = device.width;
var 高度 = 400
var Plcz = {};
Plcz.plqydz = 0
Plcz.plgz = true
Plcz.plsx = true
Plcz.pldz = true
Plcz.sjbq = true
Plcz.zplj = ""
Plcz.sjjg01 = "800"
Plcz.sjjg02 = "5000"
Plcz.sdyhzs = "20"
Plcz.sxnrsd = "HI#你好#1"
var hsgglx = "/sdcard/masterhas/";
importClass(android.graphics.Color);
require('./widget-switch-se7en');
var color1 = "#000000";
var color3 = "#ffffff";
var shape = require("./RippleDrawable.js");
ui.statusBarColor("#FFFFFF");
ui.layout(
    <drawer id="drawer">
        <vertical>
            <viewpager id="viewpager" bg="#FFFFFF">
                <frame>
                    <ScrollView>
                        <vertical >
                            <linear orientation="horizontal" gravity="center" margin="25 5 0 0">
                                <text text="评论区互动" textSize="14sp" textStyle="bold" color="#130c0e"></text>
                                <text text="       热门推荐！" textSize="10sp" textStyle="bold" color="red"></text>
                            </linear>
                            <horizontal padding="10 5 10 5" >
                                <text h="1" bg="#D4D4D4" w="*" />
                            </horizontal>
                            <TextView
                                padding="10 5 10 5"
                                id="tv_text"
                                singleLine="true"
                                ellipsize="marquee"
                                focusable="true"
                                text="用前须知：速度不要过快，话术内容请合理配置，以免用户举报"
                                textColor="#ff010100" />
                            <linear orientation="horizontal" gravity="left" margin="25 5 0 0">
                                <text text="参数设置" textSize="12sp" textStyle="bold" color="#130c0e"></text>
                                <progressbar id="旋转无限进度条" h="12" margin="0 2 0 0" />
                            </linear>
                            <horizontal padding="10 5 10 5" >
                                <text h="1" bg="#D4D4D4" w="*" />
                            </horizontal>
                            <card w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <linear orientation="vertical" marginLeft="5" gravity="center">
                                    <text text="     无障碍设置" textColor="#000000" textSize="15sp" />
                                </linear>
                                <Switch id="autoService" marginRight="25" gravity="right||center" />
                                <View bg="#dddddd" h="*" w="3" />
                            </card>

                            <card w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 0" h="auto">
                                    <linear>
                                        <text text="功能：" textColor="black" w="auto" />
                                        <checkbox id="plgz" checked="{{Plcz.plgz}}" text="关注" w="auto" marginLeft="10" />
                                        <checkbox id="plsx" checked="{{Plcz.plsx}}" text="私信" w="auto" marginLeft="10" />
                                        <checkbox id="pldz" checked="{{Plcz.pldz}}" text="点赞" w="auto" marginLeft="10" />
                                    </linear>
                                    <linear>
                                        <checkbox id="sjbq" checked="{{Plcz.sjbq}}" text="私信前加随机动画表情" w="auto" marginLeft="50" />

                                    </linear>
                                </vertical>
                                <View bg="#dddddd" h="*" w="3" />
                            </card>
                            <card w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 0" h="auto">
                                    <linear>
                                        <text text="目标：" textColor="black" w="auto" />
                                        <spinner id="plczxz" entries="随机作品|指定作品" textSize="12sp" spinnerMode="dialog" />
                                    </linear>

                                    <linear >
                                        <text text="作品链接：" textColor="black" w="auto" />
                                        <input id="zplj" color="black" w="200" lines="1" textSize="12sp" />
                                    </linear>
                                    <text text="* 指定作品请填写作品右下角分享复制链接（删除文字纯链接）" textSize="10sp" color="red"></text>

                                </vertical>
                                <View bg="#dddddd" h="*" w="3" />
                            </card>
                            <card w="*" h="*" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 0 0 40" h="auto">
                                    <linear margin="0 12 0 0">
                                        <text text="关注概率：" textColor="black" w="auto" />
                                        <vertical gravity="center" h="auto" w="*">
                                            <text id='gzglsj' text='10%' textColor="#000000" gravity="center" textSize="10sp" />
                                            <seekbar id='gzgl' progress='10' w="*" />
                                            <text text="      * 关注率建议20左右" textSize="10sp" color="red"></text>
                                        </vertical>
                                    </linear>
                                    <linear margin="0 12 0 0">
                                        <text text="私信概率：" textColor="black" w="auto" />
                                        <vertical gravity="center" h="auto" w="*">
                                            <text id='sxqdsz' text='20%' textColor="#000000" gravity="center" textSize="10sp" />
                                            <seekbar id='sxqd' progress='20' w="*" />
                                            <text text="      * 私信率建议20左右" textSize="10sp" color="red"></text>
                                        </vertical>
                                    </linear>
                                    <linear margin="0 12 0 0">
                                        <text text="点赞概率：" textColor="black" w="auto" />
                                        <vertical gravity="center" h="auto" w="*">
                                            <text id='dzqdsz' text='30%' textColor="#000000" gravity="center" textSize="10sp" />
                                            <seekbar id='dzgl' progress='30' w="*" />
                                            <text text="      * 点赞率建议30左右！" textSize="10sp" color="red"></text>
                                        </vertical>
                                    </linear>
                                    <linear margin="0 12 0 0">
                                        <text text="随机间隔：" textColor="black" w="auto" />
                                        <input id="sjjg01" color="black" inputType="number" w="50" textSize="12sp" />
                                        <text text="~" textColor="black" w="auto" textSize="12sp" />
                                        <input id="sjjg02" color="black" inputType="number" w="50" textSize="12sp" />
                                        <text text="毫秒" textColor="black" w="auto" />
                                    </linear>
                                    <linear margin="0 12 0 0">
                                        <text text="设定互动：" textColor="black" w="auto" />
                                        <input id="sdyhzs" color="black" inputType="number" w="50" textSize="12sp" />
                                        <text text="个用户" textColor="black" w="auto" textSize="12sp" />
                                        <text text=" * 总数" textSize="10sp" color="red"></text>
                                    </linear>
                                    <vertical margin="0 12 0 0">
                                        <linear >
                                            <text text="私信内容：" textColor="black" w="auto" />
                                            <input id="sxnrsd" color="black" w="200" lines="1" textSize="12sp" />
                                        </linear>
                                        <text text="* 内容请用 # 号隔开，支持多句随机，无上限" textSize="10sp" color="red"></text>
                                    </vertical>
                                </vertical>
                                <View bg="#dddddd" h="*" w="3" />
                            </card>
                            <LinearLayout layout_width="match_parent" layout_height="50" gravity="center" paddingLeft="30" paddingRight="30">
                                <TextView w="0" layout_weight="1" clickable="true" h="40" gravity="center" id="start" text="启动功能" textColor={color1} marginLeft="15" marginRight="15" />
                            </LinearLayout>
                        </vertical>
                    </ScrollView>
                </frame>
            </viewpager>
        </vertical>

    </drawer >
);
files.removeDir(hsgglx);
getData(true);
ui.tv_text.setSelected(true);
ui.autoService.on("check", function (checked) {
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    } else if (auto.service == null) {
        if (checked) {
            engines.execScript("Auto", "auto.waitFor();\ntoastLog('无障碍权限已开启！')");
        }
    }
});
shape.widthRipple(activity).setStroke(2, color1).setAllRadius(20).setRippleColor("#000000", color3).setColor(color3).into(ui.start);
ui.gzgl.setProgressTintList(ColorStateList.valueOf(Color.parseColor("#000000")))
ui.gzgl.setThumbTintList(ColorStateList.valueOf(Color.parseColor("#000000")))
ui.sxqd.setProgressTintList(ColorStateList.valueOf(Color.parseColor("#000000")))
ui.sxqd.setThumbTintList(ColorStateList.valueOf(Color.parseColor("#000000")))
ui.dzgl.setProgressTintList(ColorStateList.valueOf(Color.parseColor("#000000")))
ui.dzgl.setThumbTintList(ColorStateList.valueOf(Color.parseColor("#000000")))
ui.gzgl.setOnSeekBarChangeListener({
    onProgressChanged: function (view, p) {
        ui.gzglsj.setText(p + '%');
    }
});
ui.sxqd.setOnSeekBarChangeListener({
    onProgressChanged: function (view, p) {
        ui.sxqdsz.setText(p + '%');
    }
});
ui.dzgl.setOnSeekBarChangeListener({
    onProgressChanged: function (view, p) {
        ui.dzqdsz.setText(p + '%');
    }
});
ui.start.on("click", () => {
    saveData();
    getData(false);
    if (auto.service == null) {
        toastLog("请先开启无障碍服务！");
        return;
    };
    events.setKeyInterceptionEnabled("volume_up", true);
    events.observeKey();
    events.onKeyDown("volume_up", () => {
        toastLog('按音量键停止');
        console.hide();
        exit();
    });
    threads.start(function () {
        BlackSharkconsole()
        解除限制()
        抖音版本核实()
    });
});
function 解除限制() {
    importClass(com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter);
    let bridge = runtime.accessibilityBridge;
    let bridgeField = runtime.getClass().getDeclaredField("accessibilityBridge");
    let configField = bridgeField.getType().getDeclaredField("mConfig");
    configField.setAccessible(true);
    configField.set(bridge, configField.getType().newInstance());
    bridge.setWindowFilter(new JavaAdapter(AccessibilityBridge$WindowFilter, {
        filter: function (info) {
            return true;
        }
    }));
}
function saveData() {
    setStorageData(Plcz.characteristic, "plczxz", ui.plczxz.getSelectedItemPosition())
    setStorageData(Plcz.characteristic, "sjbq", ui.sjbq.isChecked())
    setStorageData(Plcz.characteristic, "plgz", ui.plgz.isChecked())
    setStorageData(Plcz.characteristic, "plsx", ui.plsx.isChecked())
    setStorageData(Plcz.characteristic, "pldz", ui.pldz.isChecked())
    setStorageData(Plcz.characteristic, "zplj", ui.zplj.text())
    setStorageData(Plcz.characteristic, "sjjg01", ui.sjjg01.text())
    setStorageData(Plcz.characteristic, "sjjg02", ui.sjjg02.text())
    setStorageData(Plcz.characteristic, "sdyhzs", ui.sdyhzs.text())
    setStorageData(Plcz.characteristic, "sxnrsd", ui.sxnrsd.text())
};
function setStorageData(name, key, value) {
    const storage = storages.create(name);
    storage.put(key, value);
};
function getData(isSetVlue) {
    if (getStorageData(Plcz.characteristic, "plczxz") != undefined) {
        Plcz.plczxz = getStorageData(Plcz.characteristic, "plczxz")
        isSetVlue && ui.plczxz.setSelection(Plcz.plczxz);
    };
    if (getStorageData(Plcz.characteristic, "sjbq") != undefined) {
        Plcz.sjbq = getStorageData(Plcz.characteristic, "sjbq")
    };
    isSetVlue && ui.sjbq.setChecked(Plcz.sjbq);
    if (getStorageData(Plcz.characteristic, "plgz") != undefined) {
        Plcz.plgz = getStorageData(Plcz.characteristic, "plgz")
    };
    isSetVlue && ui.plgz.setChecked(Plcz.plgz);
    if (getStorageData(Plcz.characteristic, "plsx") != undefined) {
        Plcz.plsx = getStorageData(Plcz.characteristic, "plsx")
    };
    isSetVlue && ui.plsx.setChecked(Plcz.plsx);
    if (getStorageData(Plcz.characteristic, "pldz") != undefined) {
        Plcz.pldz = getStorageData(Plcz.characteristic, "pldz")
    };
    isSetVlue && ui.pldz.setChecked(Plcz.pldz);
    if (getStorageData(Plcz.characteristic, "zplj") != undefined) {
        Plcz.zplj = getStorageData(Plcz.characteristic, "zplj")
    };
    isSetVlue && ui.zplj.setText(Plcz.zplj);
    if (getStorageData(Plcz.characteristic, "sjjg01") != undefined) {
        Plcz.sjjg01 = getStorageData(Plcz.characteristic, "sjjg01")
    };
    isSetVlue && ui.sjjg01.setText(Plcz.sjjg01);
    if (getStorageData(Plcz.characteristic, "sjjg02") != undefined) {
        Plcz.sjjg02 = getStorageData(Plcz.characteristic, "sjjg02")
    };
    isSetVlue && ui.sjjg02.setText(Plcz.sjjg02);
    if (getStorageData(Plcz.characteristic, "sdyhzs") != undefined) {
        Plcz.sdyhzs = getStorageData(Plcz.characteristic, "sdyhzs")
    };
    isSetVlue && ui.sdyhzs.setText(Plcz.sdyhzs);
    if (getStorageData(Plcz.characteristic, "sxnrsd") != undefined) {
        Plcz.sxnrsd = getStorageData(Plcz.characteristic, "sxnrsd")
    };
    isSetVlue && ui.sxnrsd.setText(Plcz.sxnrsd);

};
function getStorageData(name, key) {
    const storage = storages.create(name);
    if (storage.contains(key)) {
        return storage.get(key, "");
    };
};
function BlackSharkconsole() {
    var window = floaty.rawWindow(
        <vertical>
            <com.stardust.autojs.core.console.ConsoleView id="console" h="{{高度}}" w="{{宽度}}" bg="{{颜色}}" />
        </vertical>
    );
    var i = 1000
    setInterval(() => {
        i++
    }, 1000);
    window.setTouchable(false);
    window.setPosition(0, kh / 2);
    setInterval(() => { }, 1000);
    window.console.setConsole(runtime.console);
}
function 抖音版本核实() {
    let app_name = "抖音";
    var current = getVerName(app.getPackageName(app_name))
    log(current);
    function getVerName(package_name) {
        let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
        for (let i in pkgs) {
            if (pkgs[i].packageName.toString() === package_name) {
                return pkgs[i].versionName;
            }
        }
    }
    sleep(1500)
    var Specifyversionnumber = '21.0.0'
    let Fingerplate = Specifyversionnumber;
    if (Fingerplate == current) {
        toastLog("抖音APP版本合格")
        sleep(1500)
        初始化内存()
        sleep(1000)
        log("启动程序")
        main()
    } else {
        toastLog("抖音版本错误！请安装21.0版本适配")
        sleep(3000)
        exit();
    }
}
function main() {
    if (Plcz.plczxz == "0") {
        log("本次运行：随机作品评论互动")
        进入随机作品()
    } else if (Plcz.plczxz == "1") {
        launchApp("抖音");
        sleep(4000);
        关闭应用();
        launchApp("抖音");
        sleep(4000);
        text("首页").waitFor();
        console.info("成功激活抖音")
        sleep(2000);
        log("加载防封组件1…")
        sleep(2000);
        console.info("防封插件加载成功！")
        sleep(1000);
        console.info("开始执行：指定作品评论互动")
        sleep(2000);
        qlj = http.get(Plcz.zplj).url.toString();
        //log(qlj)
        let guanjianziA = 'video/'
        let guanjianziB = '?previous'
        进入指定作品(qlj, guanjianziA, guanjianziB)
    }
}
function 进入随机作品() {
    launchApp("抖音");
    sleep(4000);
    关闭应用();
    launchApp("抖音");
    sleep(4000);
    text("首页").waitFor();
    console.info("成功激活抖音")
    sleep(2000);
    log("加载防封组件1…")
    sleep(2000);
    console.info("防封插件加载成功！")
    sleep(1000);
    console.info("开始执行：随机作品评论互动")
    sleep(2000);
    随机作品评论互动主程序()
}
function 进入指定作品(文本内容, guanjianziA, guanjianziB) {
    var str = 文本内容;
    var aPos = str.indexOf(guanjianziA);
    var bPos = str.indexOf(guanjianziB, aPos + guanjianziA.length);
    var retstr = str.substr(aPos + guanjianziA.length, 文本内容.length - (aPos + guanjianziA.length) - (文本内容.length - bPos));
    //log(retstr)
    //跳转
    //var ub = "7041169772905598208"
    var tmp = "snssdk1128://aweme/detail/" + retstr + "?refer=web&gd_label=click_wap_detail_download_feature"
    app.startActivity({
        data: tmp
    });
    sleep(3000)

    var gnjrsb = id("ck+").findOnce()
    if (gnjrsb) {
        var pl = id("com.ss.android.ugc.aweme:id/ck+").find()
        if (pl) {
            var plq = pl.length
            //log(plq)
            for (var i = 0; i < plq; i++) {
                var plq1 = pl[i]
                if (plq1) {
                    var plq1r = plq1.bounds()
                    //log(plq1r.centerX(), plq1r.centerY())
                    if (plq1r.centerY() > 0) {
                        if (plq1r.centerY() < device.height) {
                            if (plq1r.centerX() < device.width) {
                                if (plq1r.centerX() > 0) {
                                    click(plq1r.centerX(), plq1r.centerY())

                                }
                            }
                        }
                    }
                }
            }
        }
        sleep(2000)
        var plqdksb = text("留下你的精彩评论吧").findOnce()
        if (plqdksb) {
            log("展开评论区")
            for (var blplcs = 0; blplcs < 999; blplcs++) {
                遍历评论区()
            }
            back()
            sleep(1000)
        } else {
            // log("评论区没有展开")
        }

        sleep(1000)
    } else {
        log("跳转失败，请检查链接")
    }


}
function 关闭应用() {
    let packageName = currentPackage();
    app.openAppSetting(packageName);
    text(app.getAppName(packageName)).waitFor();
    let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
    if (is_sure.enabled()) {
        textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
        textMatches(/(.*确.*|.*定.*)/).findOne().click();
        log(app.getAppName(packageName) + "应用正在执行刷新");
        sleep(1000);
        back();
    } else {
        log(app.getAppName(packageName) + "应用不能被正常关闭刷新或不在后台运行");
        back();
    }
}
function 随机作品评论互动主程序() {

    for (var i = 0; i < 99999; i++) {
        swipe(device.width / 2 + random(-100, 100), device.height * 0.8, device.width / 2 + random(-100, 100), device.height * 0.2 + random(-100, 100), random(600, 1200))
        sleep(1000)

        var like = textContains("点击进入直播间").findOnce()
        if (like != null) {

        } else {
            var pl = id("com.ss.android.ugc.aweme:id/ck+").find()
            if (pl) {
                var plq = pl.length
                //log(plq)
                for (var i = 0; i < plq; i++) {
                    var plq1 = pl[i]
                    if (plq1) {
                        var plq1r = plq1.bounds()
                        //log(plq1r.centerX(), plq1r.centerY())
                        if (plq1r.centerY() > 0) {
                            if (plq1r.centerY() < device.height) {
                                if (plq1r.centerX() < device.width) {
                                    if (plq1r.centerX() > 0) {
                                        click(plq1r.centerX(), plq1r.centerY())

                                    }
                                }
                            }
                        }
                    }
                }
            }
            sleep(2000)
            var plqdksb = text("留下你的精彩评论吧").findOnce()
            if (plqdksb) {
                log("展开评论区")
                for (var blplcs = 0; blplcs < 2; blplcs++) {
                    遍历评论区()
                }
                back()
                sleep(1000)
            } else {
                // log("评论区没有展开")
            }

            sleep(1000)

        }
    }

}
function 遍历评论区() {
    //点评论区头像

    var plyh = id("com.ss.android.ugc.aweme:id/e4=").find()
    var plyh1 = plyh.length
    for (var i = 1; i < plyh1 - 1; i++) {
        if (plyh[i]) {
            var plyh2 = plyh[i].bounds()
            click(plyh2.centerX(), plyh2.centerY())
            sleep(1500)
            var yhmzsb = id("com.ss.android.ugc.aweme:id/khl").findOnce()
            if (yhmzsb) {
                var smzhpl = text("私密账号").findOnce()
                if (smzhpl) {
                    log("跳过私密账号")
                    识别返回评论()
                } else {
                    var wenj = files.read("/sdcard/BlackShark/评论互动.txt", encoding = "UTF-8");
                    //var gu = "1141726988"
                    var pd = wenj.indexOf(yhmzsb.text()) != -1
                    if (pd == true) {
                        console.warn("跳过重复用户")
                        识别返回评论()
                    } else if (pd == false) {
                        files.append("/sdcard/BlackShark/评论互动.txt", "\n" + yhmzsb.text());
                        console.info("访问用户 " + yhmzsb.text())
                        sleep(500)
                        if (Plcz.plgz == true) {
                            var 关注概率 = (random(1, 100))
                            if (parseInt(ui.gzglsj.text()) >= 关注概率) {
                                log("执行关注")
                                sleep(300)
                                执行pl关注()
                                sleep(800)
                                检查返回名片()
                            }
                        }
                        if (Plcz.plsx == true) {
                            var 私信概率 = (random(1, 100))
                            if (parseInt(ui.sxqdsz.text()) >= 私信概率) {
                                log("执行私信")
                                sleep(300)
                                执行pl私信()
                                sleep(800)
                                检查返回名片()
                            }
                        }
                        if (Plcz.pldz == true) {
                            var 点赞概率 = (random(1, 100))
                            if (parseInt(ui.dzqdsz.text()) >= 点赞概率) {
                                log("执行点赞")
                                sleep(300)
                                执行pl点赞()
                                sleep(800)
                                检查返回名片()
                            }

                        }
                        Plcz.plqydz++
                        log("当前访问用户 " + Plcz.plqydz + " 个")
                        if (parseInt(Plcz.plqydz) >= parseInt(Plcz.sdyhzs)) {
                            toastLog("任务已完成，结束脚本")
                            sleep(1500)
                            exit();
                        } else {
                            识别返回评论()
                        }
                    }
                }

            }
        }
        随机延迟()
    }
    id("com.ss.android.ugc.aweme:id/2").scrollForward()
    sleep(1000)
}
function 初始化内存() {

    files.createWithDirs("/sdcard/BlackShark/评论互动.txt")
    sleep(1000)
    var pdlj = (files.exists("/sdcard/BlackShark/评论互动.txt"))
    log(pdlj)
    if (pdlj == 1) {
        console.info("初始化成功")
    } else {
        console.error("初始化失败")
    }
    files.write("/sdcard/BlackShark/评论互动.txt", " ", encoding = "utf-8");
    sleep(1500)
}
function 识别返回评论() {
    var sbfhplq = text("留下你的精彩评论吧").findOnce()
    if (sbfhplq) {
        // log("返回评论区")
    } else {
        back()
        sleep(1000)
        识别返回评论()
    }
}
function 随机延迟() {
    var 评论互动随机延迟 = (random(parseInt(Plcz.sjjg01), parseInt(Plcz.sjjg02)))
    log("随机间隔 " + 评论互动随机延迟 + " 毫秒")
    sleep(评论互动随机延迟)
}
function 执行pl关注() {
    var gz = text("关注").id("com.ss.android.ugc.aweme:id/lwt").findOne(1000)
    if (gz) {
        var gr = gz.bounds()
        click(gr.centerX(), gr.centerY())
        sleep(1000)
    } else {
        log("未找到关注按钮或已关注")
    }
}
function 执行pl私信() {

    var gdan = desc("更多").id("com.ss.android.ugc.aweme:id/pfu").findOne(1000)
    if (gdan) {
        var gr1 = gdan.bounds()
        click(gr1.centerX(), gr1.centerY())
        sleep(1000)

        var lt1 = text("聊天").findOne(600)
        var lt2 = text("发消息").findOne(600)
        var lt3 = text("发私信").findOne(600)
        if (lt1) {
            var ltb = lt1.bounds()
            click(ltb.centerX(), ltb.centerY())
            sleep(1500)
            识别私信()
        } else if (lt2) {
            var ltb = lt2.bounds()
            click(ltb.centerX(), ltb.centerY())
            sleep(1500)
            识别私信()
        } else if (lt3) {
            var ltb = lt3.bounds()
            click(ltb.centerX(), ltb.centerY())
            sleep(1500)
            识别私信()
        }

    } else {
        log("未找到入口")
    }

}
function 识别私信() {
    var shisx = id("com.ss.android.ugc.aweme:id/al4").findOne(500)
    if (shisx) {
        back()
        sleep(500)
    } else {

        if (Plcz.sjbq == true) {
            var sjbqsb = id("ebo").find()
            if (sjbqsb) {
                var sjbqs = sjbqsb.length
                var sjsbq = random(0, 4)
                var sbr = sjbqsb[sjsbq].bounds()
                click(sbr.centerX(), sbr.centerY())
            }
        }

        var 随机私信 = Plcz.sxnrsd.split("#")
        log(随机私信.length + "句预设话术")//-1

        var 取随机话术 = (random(0, 随机私信.length - 1))

        log("本次私信：" + 随机私信[取随机话术])
        id("j5n").setText(随机私信[取随机话术])
        sleep(700)

        var sbpfsx = desc("发送").findOnce()
        if (sbpfsx) {
            var fasongsir = sbpfsx.bounds()
            click(fasongsir.centerX(), fasongsir.centerY())
            sleep(500)
        }

    }


}
function 执行pl点赞() {
    swipe(device.width / 2 + random(-100, 100), device.height * 0.8, device.width / 2 + random(-100, 100), device.height * 0.4 + random(-100, 100), random(600, 1200))
    sleep(1700)

    var plhdyhzp = descContains("点赞数").findOnce()
    if (plhdyhzp) {
        var plyhzpwe = plhdyhzp.bounds()
        click(plyhzpwe.centerX(), plyhzpwe.centerY())
        sleep(1400)

        var pl = id("dj0").find()
        if (pl) {
            var plq = pl.length
            for (var i = 0; i < plq; i++) {
                var plq1 = pl[i]
                if (plq1) {
                    var plq1r = plq1.bounds()
                    if (plq1r.centerY() > 0) {
                        if (plq1r.centerY() < device.height) {
                            if (plq1r.centerX() < device.width) {
                                if (plq1r.centerX() > 0) {
                                    click(plq1r.centerX(), plq1r.centerY())
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    sleep(700)
    back()
    sleep(700)


}
function 检查返回名片() {
    var jcfmp = id("com.ss.android.ugc.aweme:id/kyl").findOnce()
    if (jcfmp) {

    } else {
        back()
        sleep(700)
        检查返回名片()
    }

}