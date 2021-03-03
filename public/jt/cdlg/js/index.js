; (function () {
    var index = {
        init: function () {
            var that=this;
            this.listen()
            $(document).ready(function () {
                if (that.checkWebp()) {
                } else {
                    that.checkImg()
                    that.checkBg()
                }
            })
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
                var url = 'https://tb.53kf.com/code/client/6806b0d67a0b08c412e210e31d43e9526/1'
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
                    window.open(url, name);
                }


            }
        },
        checkWebp: function () {
            try {
                return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
            } catch (err) {
                return false;
            }
        },
        checkImg: function () {
            $('img').each(function () {
                var src = $(this).attr('src');
                if (typeof src != 'undefined') {
                    src = src.replace('.webp', '.png');   //将webp格式转换成jpg格式
                    $(this).attr('src', src);
                }
                var original = $(this).attr('original');		//针对用了懒加载的情况
                if (typeof original != 'undefined') {
                    original = original.replace('/format,webp', '/format,png');   //将webp格式转换成jpg格式
                    $(this).attr('original', original);
                }
            })
        },
        checkBg: function () {
            $('.bg').each(function () {
                var url = $(this).css('backgroundImage');
                if (typeof url != 'undefined') {
                    url = url.replace('.webp', '.png');   //将webp格式转换成jpg格式
                    $(this).css('backgroundImage', url);
                }
            })
        }
    }
    index.init()
})()



