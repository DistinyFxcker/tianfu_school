var Public = {
    init: function () {
        var that = this;
        that.stringSplit();
        that.Banners();
        that.consult();
        that.Index()
        that.listen();
        new WOW().init();
        if ($('.timer').length > 0) {
            var a = Math.round($('.lh-power').offset().top + 100);
            var b = Math.round($(window).scrollTop() + $(window).height());
            if (a < b && !$('.timer').hasClass('aa')) {
                $('.timer').addClass('aa');
                $('.timer').countTo();
            }
            $(window).scroll(function () {
                var a = Math.round($('.lh-power').offset().top + 100);
                var b = Math.round($(window).scrollTop() + $(window).height());
                if (a < b && !$('.timer').hasClass('aa')) {
                    $('.timer').addClass('aa');
                    $('.timer').countTo();
                }
            });
        }
    },
    //浏览器窗口宽度
    winInfo: function () {
        var width = $(window).width();
        var height = $(window).height();
        return { _winW: width, _winH: height };
    },
    // 首页js
    Index: function (e) {
        var that = this;
        //banner
        if ($('.lh-banner').length > 0) {
            that.setBanner({ boxCell: '.lh-banner', paginationEl: '.lh-banner-hd', autoplay: true, loop: true });
        }
        // major
        if ($('.lh-majors-item').length > 0) {
            $('.lh-majors-item li').eq(0).addClass('on');
            var html = $('.lh-majors-item li').eq(0).find('pre').html(), title = $('.lh-majors-item li').eq(0).find('h2').text();
            $('.lh-majors-info').children('a').attr('title', title + '咨询');
            $('.lh-majors-info').children('.cont').html(html);
            $('.lh-majors-item li').hover(function () {
                var html = $(this).find('pre').html(), title = $(this).find('h2').text();
                $(this).addClass('on').siblings().removeClass('on');
                $(this).parents('.swiper-slide').find('.lh-majors-info').children('a').attr('title', title + '咨询');
                $(this).parents('.swiper-slide').find('.lh-majors-info').children('.cont').stop(true, true).fadeOut(100, function () {
                    $(this).html(html).stop(true, true).fadeIn(100);
                });
            });
        }

        //在线留言
        $('.lh-message-input li input').focus(function () {
            $(this).parents('li').addClass('on');
        });
        $('.lh-message-input li input').blur(function () {
            $(this).parents('li').removeClass('on');
        });

        //人才招聘
        if ($('.lh-recruitment-item').length > 0) {
            $('.lh-recruitment-item li').eq(0).addClass('on');
            $('.lh-recruitment-item li').eq(0).find('.lh-recruitment-main').slideDown();
            $('#erlo_lj_data').on('click', 'li .lh-recruitment-h', function () {
                var _this = $(this).parent();
                if (_this.hasClass('on')) {
                    _this.removeClass('on'); _this.find('.lh-recruitment-main').slideUp();
                } else {
                    _this.addClass('on'); _this.find('.lh-recruitment-main').slideDown();
                }
            });
        }

    },
    // banners
    Banners: function (e) {
        var that = this;
        $('.lh-public-banner').each(function () {
            var boxCell = '.' + $(this)[0].className.split(' ')[0], slidesPerView = $(this).attr('data-slidesPerView'), autoplay = $(this).attr('data-autoplay'), delay = $(this).attr('data-delay'), webslidesPerView = $(this).attr('data-webslidesPerView'), length = $(this).find('.bd li').length, paginationEl = '', slidesPerColumn = $(this).attr('data-slidesPerColumn'), slidesLoop = $(this).attr('data-loop');
            if ($(this).find('.bannerbd').length > 0) {
                paginationEl = '.' + $(this).find('.bannerbd')[0].className.split(' ')[0];
            }
            if (!slidesPerView) {
                slidesPerView = 1;
            }
            if (!slidesPerColumn) {
                slidesPerColumn = 1;
            }
            if (!autoplay) {
                autoplay = false;
            }
            if (!delay) {
                delay = 4500
            }
            if (that.winInfo()._winW <= 980) {
                if (slidesPerView) {
                    slidesPerView = webslidesPerView;
                }
            }
            if (!slidesLoop) {
                slidesLoop = 0
            }

            if (length > slidesPerView) {
                that.setBanner({ boxCell: boxCell, paginationEl: paginationEl, effect: 'slide', slidesPerView: slidesPerView, autoplay: autoplay, delay: delay, slidesPerColumn: slidesPerColumn, loop: slidesLoop });
                $('.bannerbd').show();
            }
        });
    },
    setBanner: function (a) {
        var a = a || {};
        var opt = $.extend({
            boxCell: '.lh-banner',
            paginationEl: '.hd',
            paginationType: 'bullets',
            paginationBulletElement: 'li',
            paginationDynamicBullets: false,
            paginationDynamicMainBullets: 1,
            paginationClickable: true,
            paginationRenderBullet: null,
            paginationBulletActiveClass: 'on',
            stopOnLastSlide: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1000,
            loop: false,
            direction: 'horizontal',
            initialSlide: 0,
            effect: 'fade',
            mousewheel: false,
            nextEl: '.next',
            prevEl: '.prev',
            noSwipingClass: 'stop-swiping',
            on: null,
            observer: true,
            observeParents: true,
            parallax: true,
            disableOnInteraction: false,
            mainCell: '.swiper-wrapper',
            autoPage: true,
            autoplay: false,
            delay: 4500,
            hashNavigation: false,
            slidesPerColumn: 1
        }, a);
        if ($(opt.boxCell).find('.next').length > 0) {
            var nextEl = $(opt.boxCell).find('.next'), prevEl = $(opt.boxCell).find('.prev');
        } else {
            var nextEl = opt.nextEl, prevEl = opt.prevEl;
        }
        if (opt.autoplay) {
            var autoplay = {
                delay: opt.delay,
                stopOnLastSlide: opt.stopOnLastSlide,
                disableOnInteraction: opt.disableOnInteraction
            }
        } else {
            var autoplay = false;
        }
        if (this.winInfo()._winW <= 980) {
            opt.effect = 'slide';
        }
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf('Chrome') <= -1 && opt.effect != 'fade') {
            opt.effect = 'slide';
        }
        var mySwiper = new Swiper(opt.boxCell, {
            parallax: opt.parallax,
            slidesPerView: opt.slidesPerView,
            initialSlide: opt.initialSlide,
            pagination: {
                el: opt.paginationEl,
                type: opt.paginationType,
                bulletElement: opt.paginationBulletElement,
                dynamicBullets: opt.paginationDynamicBullets,
                dynamicMainBullets: opt.paginationDynamicMainBullets,
                clickable: opt.paginationClickable,
                renderBullet: opt.paginationRenderBullet,
                bulletActiveClass: opt.paginationBulletActiveClass
            },
            speed: opt.speed,
            loop: opt.loop,
            effect: opt.effect,
            spaceBetween: opt.spaceBetween,
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
            direction: opt.direction,
            mousewheel: opt.mousewheel,
            noSwipingClass: opt.noSwipingClass,
            on: opt.on,
            observeParents: opt.observeParents,
            observer: opt.observer,
            autoplay: autoplay,
            stopOnLastSlide: opt.stopOnLastSlide,
            disableOnInteraction: opt.disableOnInteraction,
            hashNavigation: opt.hashNavigation,
            slidesPerColumn: opt.slidesPerColumn
        });
        if (autoplay) {
            $(opt.boxCell).mouseenter(function () {
                mySwiper.autoplay.stop();
            })
            $(opt.boxCell).mouseleave(function () {
                mySwiper.autoplay.start();
            })
        }
        return mySwiper;
    },
    //字符串换行
    stringSplit: function (e) {
        $('.lhSplit').each(function () {
            var text = $(this).text().split(' ');
            if (text.length == 2) {
                $(this).html(text[0] + '<br />' + text[1]);
            }
            if (text.length == 4) {
                $(this).html(text[0] + ' ' + text[1] + '<br />' + text[3] + '' + text[4]);
            }
        });
    },
    listen: function () {
        var that = this
        // 手机导航点击事件
        if (that.winInfo()._winW <= 980) {
            $('.lh-nav-btn').click(function () {
                $('body').hasClass('WebNav') ? $('body').removeClass('WebNav') : $('body').addClass('WebNav');
            });
        }

        //播放功能
        // if ($('.lh-video').length > 0) {
        //     var video = $('.Video')[0];
        //     $('.lh-video-btn').click(function () {
        //         var src = $(this).data('video');
        //         $('body').addClass('Videos');
        //         $('.Video').attr('src', src);
        //         $('video').trigger('play');
        //     });
        //     $('.lh-video-close').click(function () {
        //         $('body').removeClass('Videos');
        //         $('.Video').attr('src', '');
        //     });

        //     video.onended = function () {
        //         $('body').removeClass('Videos');
        //         $('.Video').attr('src', '');
        //     }
        // }

        // 荣誉弹窗
        if ($('.lh-layerImg').length > 0) {
            $('.lh-layerImg li a').click(function () {
                var img = $(this).data('bigimg');
                if (img) {
                    var html = '<div class="lh-layerImg-box"><img src="' + img + '" /><a href="javascript:;" class="lh-layerImg-close"><i class="iconfont icon-l-close"></i></a><div>';
                    $('body').append(html);
                }
            });
            $(document).on('click', '.lh-layerImg-close,.lh-layerImg-box', function () {
                $('.lh-layerImg-box').remove();
            });
            $(document).on('click', '.lh-layerImg-box img', function (e) {
                e.stopPropagation();
            });
        }

        // 3d 横向循环个数
        if ($('.swiper-list').find('.swiper-slide').length && $('.swiper-list').find('.swiper-slide').length > 0) {
            var swiper3Dnum = $('.swiper-list').find('.swiper-slide').length
            // 3d 横向循环效果
            var certifySwiper = new Swiper('#certify .swiper-container', {
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                delay: 2500,
                centeredSlides: true,
                loop: true,
                loopedSlides: swiper3Dnum - 1,
                autoplay: true,
                autoplayDisableOnInteraction: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                on: {
                    progress: function (progress) {
                        for (i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i);
                            var slideProgress = this.slides[i].progress;
                            modify = 1;
                            if (Math.abs(slideProgress) > 1) {
                                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                            }
                            translate = slideProgress * modify * 260 + 'px';
                            scale = 1 - Math.abs(slideProgress) / 5;
                            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                            slide.css('zIndex', zIndex);
                            slide.css('opacity', 1);
                            if (Math.abs(slideProgress) > 3) {
                                slide.css('opacity', 0);
                            }
                        }
                    },
                    setTransition: function (transition) {
                        for (var i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i)
                            slide.transition(transition);
                        }
                    },
                    slideNextTransitionEnd: function (swiper) {
                        this.autoplay.start()
                    },
                    slidePrevTransitionEnd: function (swiper) {
                        this.autoplay.start()
                    },
                }

            })
        }

        //介绍手机端，加载更多
        that.loadMore()
        new Swiper('.swiper-container', {
            spaceBetween: 20,
            slidesPerView: 'auto',
            freeMode: true
        });
        var banheight = $('.lh-ban').innerHeight() ? $('.lh-ban').innerHeight() : $('.lh-banner').innerHeight()
        //手机端二级菜单栏滑动效果
        $(window).scroll(function () {
            var windowWidth = $(window).width();
            if (windowWidth < 980) {
                if ($(window).scrollTop() > banheight - 50) {
                    $('.topmenu').addClass('c-top');
                    $('.lh-header').addClass('c-bg');
                    $('.head-title-img').show()
                    $('.head-title-img').addClass('lightSpeedIn')
                } else {
                    $('.topmenu').removeClass('c-top')
                    $('.lh-header').removeClass('c-bg')
                    // $('.head-title-img').hide();
                    $('.head-title-img').removeClass('lightSpeedIn')
                }
            } else {
                if ($('.lh-other-nav-box').length > 0) {
                    if ($(window).scrollTop() > banheight - 100) {
                        $('.lh-other-nav-box').addClass('c-pc-top');
                        $('.lh-header').addClass('c-bg');
                        $('.lh-nav li a.on').css({ 'color': 'red' });

                        $('.lh-nav li').mouseenter(function () {
                            $(this).find('a').css({ 'color': 'red' });
                        })

                        $('.lh-nav li').mouseleave(function () {
                            $(this).find('a').css({ 'color': '#fff' });
                        })
                    } else {
                        $('.lh-other-nav-box').removeClass('c-pc-top')
                        $('.lh-header').removeClass('c-bg')
                        $('.lh-nav li a.on').css({ 'color': '#16A06A' });
                        $('.lh-nav li').mouseenter(function () {
                            $(this).find('a').css({ 'color': '#16A06A' });
                        })
                        $('.lh-nav li').mouseleave(function () {
                            $(this).find('a').css({ 'color': '#fff' });
                        })
                    }
                }

            }

        });

    },
    loadMore: function () {
        var that = this
        if (that.winInfo()._winW <= 980) {
            var overflowHight = $('.c-overflow-y').innerHeight()
            if (overflowHight && overflowHight >= 300) {
                $('.loadmore-x').show()
                $('.loadmore-x').on('click', function () {
                    $(this).hide();
                    $(this).prev().css({ 'overflow': 'auto', 'max-height': '9999px' })
                })
            }
            $('#certify').hide()
            $('.lh-mobile-show').show()
        } else {
            $('.loadmore-x').hide()
            $('.lh-mobile-show').hide()
            $('#certify').show()
        }
    },
    //立即咨询
    consult: function (e) {
        var that = this;
        var serverurl = 'https://w16.53kf.com/webCompany.php?kf_sign=DEwNTMTYwOg4MDExMzQ1MDYyNTEyMDA2NzIyNDk2MTM=&arg=10249613&style=1&language=cn&charset=GBK&kflist=off&kf=&zdkf_type=1&lnk_overflow=0&callback_id6ds=&referer=https%3A%2F%2Fwww.chamiedu.com%2Findex%2Fselfs%2Findex.html&keyword=https%3A%2F%2Fwww.chamiedu.com%2Findex%2Fselfs%2Findex.html&tfrom=1&tpl=crystal_blue&uid=27915295c542f50e11562e9698675d49&is_group=&is_group=&timeStamp=1608106066089&ucust_id=';
        $(document).on('click', '.lhLjzx', function (e) {
            that.openWin(serverurl, 'server', that.IsPC(), 800, 600)
            return false;
        });
        $(document).on('click', '.servercont', function () {
            window.open(serverurl); return false;
        });
    },
    // 客服弹出窗口
    openWin: function (url, name, IsPC, iWidth, iHeight) {
        if (IsPC) {
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
    },
    IsPC: function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    },
}
Public.init();