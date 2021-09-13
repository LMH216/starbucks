(function($, window, document){

    var starBucks = {
        init: function(){
            this.scrollEvent();
            this.header();
            this.section1();
            this.section2Notice();
            this.section2mainSlide();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.goTop();
        },
        scrollEvent:function(){
            $('.section').each(function(index){
                $(this).on('mousewheel',function(event){
                    event.preventDefault();
                    if(event.originalEvent.wheelDelta<0){
                        if(index<6){
                            $('html,body').stop().animate({scrollTop:$(this).next().offset().top-120},1000, 'easeInOutExpo')
                        }
                    }
                    if(event.originalEvent.wheelDelta>0){
                        if(index>0){
                            $('html,body').stop().animate({scrollTop:$(this).prev().offset().top-120},1000, 'easeInOutExpo')
                        }
                    }
                })
            })
        },
        header: function(){
            $('.find-btn').on({
                click:function(){
                $('.input-box').toggleClass('addfind');
                }
            });
            $('.main-btn').mouseenter(function(){
                $('.main-btn').removeClass('addhover')
                $(this).addClass('addhover')
                $('.sub').stop().slideUp(0)
                $(this).next().stop().slideDown(400)
            })
            .focusin(function(){
                $('.main-btn').removeClass('addhover')
                $(this).addClass('addhover')
                $('.sub').stop().slideUp(0)
                $(this).next().stop().slideDown(400)
            });
            $('#nav').mouseleave(function(){
                $('.main-btn').removeClass('addhover')
                $('.sub').stop().slideUp(400)
            });
        },
        section1: function(){
            $('.el-1').stop().fadeIn(600,function(){
                $('.el-4-1, .el-4-2').stop().fadeIn(600,function(){
                    $('.el-3-1, .el-3-2, .el-3-3').stop().fadeIn(600, function(){
                        $('.el-5-1, .el-5-2').stop().fadeIn(600,function(){
                            $('.el-2').stop().fadeIn(600);
                        });
                    });
                });
            });
        },
        section2Notice: function(){
            var cnt = 0;
            var setId=0;

            function listSlide(){
                $('.list').css({zIndex:1}).animate({top:24}, 0);
                $('.list').eq(cnt==0?4:cnt-1).css({zIndex:2}).animate({top:0}, 0);
                $('.list').eq(cnt).css({zIndex:3}).animate({top:0},600);
            };
            function nextCount(){
                cnt++;
                cnt>4?cnt=0:cnt;
                listSlide();
            };
            setInterval(nextCount,3000)
        },
        section2mainSlide:function(){
            var cnt=0;
            var setId=0;
            var t = 0;
            var t2 = 0;

                $('.prom-btn').on({
                    click:function(event){
                        event.preventDefault();
                        $(this).toggleClass('addup')
                        $('#section2 .bottom').stop().slideToggle(300, 'easeInOutQuart')
                        if(t==0){
                            timer(); 
                            t=1;
                            t2=0;
                            $('.play-stop').removeClass('addplay');
                            
                        }
                        else{
                            clearInterval(setId)
                            t=0;
                            t2=1;
                            cnt=0;
                            $('#section2 .slide-wrap').stop().animate({left:-829*cnt}, 0)
                            $('.play-stop').addClass('addplay');

                            $('.slide').removeClass('addSlide');
                            $('.slide').each(function(index){
                                if ( index % 3 == cnt ){
                                    $('.slide').eq(index).addClass('addSlide')
                                }
                            });
                        }
                        
                    }
                });
            
                function mainSlide(){
                    $('.slide-wrap').stop().animate({left:-829*cnt}, 600, function(){
                        cnt>2?cnt=0:cnt;
                        cnt<0?cnt=2:cnt;
                        $('.slide-wrap').stop().animate({left:-829*cnt}, 0)
                        pageEvent();

                        $('.slide').removeClass('addSlide');
                        
                        $('.slide').each(function(index){
                            if ( index % 3 == cnt ){
                                $('.slide').eq(index).addClass('addSlide')
                            }
                        });

                    });
                };
                function nextCount(){
                    cnt++
                    mainSlide();
                };
                function prevCount(){
                    cnt--
                    mainSlide();
                };
                
                function timer(){
                    setId = setInterval(nextCount,3000)
                };

                $('.next-btn').on({
                    click:function(event){
                        event.preventDefault();
                        if(! $('.slide-wrap').is(':animated')){
                            nextCount();
                            clearInterval(setId)
                            t2=1;
                            $('.play-stop').addClass('addplay')
                        }
                    }
                })
                $('.prev-btn').on({
                    click:function(event){
                        event.preventDefault();
                        if(! $('.slide-wrap').is(':animated')){
                            prevCount();
                            clearInterval(setId)
                            t2=1;
                            $('.play-stop').addClass('addplay')
                        }
                    }
                })
                
                function pageEvent(){
                    $('.page-btn').removeClass('addpage')
                    $('.page-btn').eq(cnt>2?0:cnt).addClass('addpage')
                };

                $('.page-btn').each(function(i){
                    $(this).on({
                        click:function(event){
                            event.preventDefault();
                            cnt = i
                            mainSlide();
                            clearInterval(setId);
                            t2=1;
                            $('.play-stop').addClass('addplay')
                        }
                    })
                })

                $('.play-stop').on({
                    click:function(event){
                        event.preventDefault();
                        $('.play-stop').toggleClass('addplay');
                        if(t2==0){
                            clearInterval(setId);
                            t2=1;
                        }
                        else if(t2==1){
                            timer();
                            t2=0;
                        }
                    }
                })


        },
        section4:function(){

            var s4Top = $('#section4').offset().top-700;

            $(window).scroll(function(){
                if($(window).scrollTop()>s4Top){
                    $('.left-ani').addClass('addani') 
                    $('.right-ani').addClass('addani')
                }

                if($(window).scrollTop()==0){
                    $('.left-ani').removeClass('addani')
                    $('.right-ani').removeClass('addani')
                }
            })
        },
        section5:function(){

            var s5Top = $('#section5').offset().top-700;

            $(window).scroll(function(){
                if($(window).scrollTop() > s5Top){
                    $('.right').addClass('addani')
                }
                if($(window).scrollTop() == 0){
                    $('.right').removeClass('addani')
                }
            })
        },
        section6:function(){

            var s6Top = $('#section6').offset().top-700;

            $(window).scroll(function(){
                if($(window).scrollTop()> s6Top){
                    $('.left-ani h2, .left-ani h3, .left-ani a').addClass('addani')
                }
            })
        },
        section7:function(){

            var s7Top= $('#section7').offset().top-700;

            $(window).scroll(function(){
                if($(window).scrollTop()>s7Top){
                    $('.title, .story-btn-wrap').addClass('addani')
                }
                
                if($(window).scrollTop()==0){
                    $('.title, .story-btn-wrap').removeClass('addani')
                }
            })
        },
        section8:function(){

            var s8Top = $('#section8').offset().top-700;

            $(window).scroll(function(){
                if($(window).scrollTop()>s8Top){
                    $('.right h2, .right h3, .right a').addClass('addani')
                }
            })
        },
        goTop:function(){
            $(window).scroll(function(){
                if($(window).scrollTop() > 50){
                    $('.goTop-wrap').stop().fadeIn(300)
                }
                else{
                    $('.goTop-wrap').stop().fadeOut(300)
                }
            })

            $('.goTop').click(function(event){
                event.preventDefault();
                $('html, body').stop().animate({scrollTop: 0},600, 'easeInOutExpo')
            })
        }
    };

    starBucks.init();

})(jQuery,window,document);