; (function () {
    var index = {
        init: function () {
            this.listen()
        },
        countdown: function (endtime) {
            var show_time = document.getElementById("show_time");
            var num1 = $('.num1');
            var num2 = $('.num2');
            var num3 = $('.num3');
            var num4 = $('.num4');
            var newtime = new Date() //获取当前时间
            var storptime = new Date(endtime) //获取截止时间
            var mistiming = storptime.getTime() - newtime.getTime() //   获取截止时间距离现在的毫秒差
            var days = Math.floor(mistiming / 1000 / 60 / 60 / 24); //获取天数   
            var hours = Math.floor(mistiming / 1000 / 60 / 60 % 24); // 获取小时
            var minutes = Math.floor(mistiming / 1000 / 60 % 60); //获取分钟数
            var seconds = Math.floor(mistiming / 1000 % 60); //获取秒数

            // 判断天、时、分、秒是不是两位数，如果是直接输出，如果不是在前边加个0;    
            days < 10 ? days = "0" + days : days;
            hours < 10 ? hours = "0" + hours : hours;
            minutes < 10 ? minutes = "0" + minutes : minutes;
            seconds < 10 ? seconds = "0" + seconds : seconds;

            if (mistiming < 0) {
                clearInterval(index.option.interval)
                show_time.innerHTML = "倒计时已经结束";
                return
            }
            num1.html(days)
            num2.html(hours)
            num3.html(minutes)
            num4.html(seconds)
        },
        option: {
            interval: 0
        },
        listen: function () {
            var that = this
            $('.c-p').click(function () {
                var url = 'https://www2.53kf.com/webCompany.php?kf_sign=jY2NzMTYwNc5MTEwNjYwNTM3Nzk0MDEzNzIyMTIxNjY=&arg=10212166&style=1&language=zh-cn&charset=GBK&kflist=off&kf=&zdkf_type=1&lnk_overflow=0&callback_id6ds=&referer=https%3A%2F%2Fwww.chamiedu.com%2F&keyword=http%3A%2F%2Fwww.chamiedu.com%2F&tfrom=1&tpl=crystal_blue&uid=6d1c9483a8874d98c44854bd5df35074&is_group=&is_group=&timeStamp=1606668851467&ucust_id='
                that.api.openWin(url, '客服', '980', '600')
            })

        },
        api: {
            openWin: function (url, name, iWidth, iHeight) {
                if (IsPC()) {
                    //获得窗口的垂直位置 
                    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
                    //获得窗口的水平位置 
                    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
                    window.open(url, name, 'height=' + iHeight + ',innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
                } else {
                    //获得窗口的垂直位置 
                    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
                    //获得窗口的水平位置 
                    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
                    window.open(url, name,);
                }


            }
        }
    }
    index.init()
})();



