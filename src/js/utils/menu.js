import { GLOBAL } from './config.js';

function MENU() {
    let curr = 0,
        last = 0,
        sanim,
        interval, state;



    function route(hash) {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        let top;
        top = $("#"+hash).offset().top;

        //TweenMax.set(window, {scrollTo:{y:top}});
        $body.animate({
            scrollTop: top -80
        }, 1000);

    }

    function getHash() {
        var hash = document.location.hash
        //     id = hash.match(re); // for some reason this matches both the full string and the number
        // id = id.pop();
        return hash;
    }

    function scrollBy(typ = "share") {
        if (typ != "body") {
            $('html , body').css("overflow-y", "hidden")
        } else {
            $('html , body').css("overflow-y", "auto")
        }
    }

    function showPop(typ = "game") {
        console.log("showPop:" + typ)
        if(typ=='game')
        $(".btn-qa-kv").trigger("click");
        else{
            let id = typ.replace( "result", "");
            console.log("result:" + id)
            $('#result'+id+'_pop' ).trigger('click');
            GLOBAL.ga.GT('/bot-web', '.pv.' +typ , '' );
        }
    }

    function bind() {
         // $(".form-check a.hash").click(function(e){
         //     e.preventDefault();
         //     let link = $(this).attr('href');
         //     let ga = $(this).data("ga");
         //     // let hash = $.param.fragment(link).split('/')[1];
         //     switch (ga) {
         //         case "rule":
         //             showPop("rule");
         //             break;
         //         case "gallery":
         //             route(ga);
         //             break;
         //         case "winner":
         //             alert("尚未公布")
         //             break;
         //         case "buy":
         //             route(ga);
         //             break;
         //     }
         // })
        $(".pop-tvc .btn-close ").click(function(){
            $(".pop-tvc").fadeOut('fast');
            TweenMax.to($('.banner') , .5 , {x:0,ease:Cubic.easeOut})
        })
        $(".banner a.hash").each(function(){
            $(this).hover(function() {
                
                TweenMax.to($(this).find('.ico') , .2 , {x:5,ease:Sine.easeIn})
            }, function() {
                TweenMax.to($(this).find('.ico') , .2 , {x:0,ease:Sine.easeOut})
            })
        })

        $("a.hash").each(function() {
            console.log("hash")
            $(this).click(function(e) {
                e.preventDefault();
                var ga = $(this).data("ga");
                var link = $(this).attr('href');
                let hash = $.param.fragment(link).split('/')[1];
                console.log("hash " + hash);
                if ($('#' + hash).parents('html').length > 0) {
                    let toggle = $('.navbar-toggle')
                    if (toggle.attr('aria-expanded') == 'true')
                        toggle.trigger('click');


                    GLOBAL.ga.GT(( $(this).parent().hasClass('banner') )? '/nav-banner' :'/nav', '.btn.' +ga, "" );
                    switch (ga) {
                        case "game":
                            
                            
                            if(GLOBAL.started != 1 )
                            showPop(hash);
                            break;
                        case "tech":
                            route(ga);
                            break;
                        case "blogger":
                            route(ga);
                            break;
                        case "trial":
                            route(ga);
                            break;
                      
                    }
                } else {
                    GLOBAL.ga.GT(( $(this).parent().hasClass('banner') )? '/nav-banner' :'/nav', '.btn.' +ga, "" );
                    setTimeout(function(){location.href = link;} , 300)
                    
                }

                return false;
            })

        })
        $('.dropdown').on('show.bs.dropdown', function() {
            $(this).find('.dropdown-menu').first().slideDown(500);
            $(this).find('.dropdown-toggle .plus').html('-')
        });

        // Add slideUp animation to Bootstrap dropdown when collapsing.
        $('.dropdown').on('hide.bs.dropdown', function() {
            $(this).find('.dropdown-menu').first().hide();
            $(this).find('.dropdown-toggle .plus').html('+')
        });

        $('#navbar .btn-close img').click(function(){
            $('.navbar-toggle').trigger("click")
        })

    }
    this.getupdateState = function(id) {
        //updateState(id);
    }

    function updateState(id) {

        curr = id;
        $('nav #navbar > ul > li ').not('.hash').each(function() {
            let id = $(this).data('id');
            if (curr == id) {
                $(this).find('> a').addClass('act')
            } else {
                $(this).find('> a').removeClass('act')

            }
        })
    }

    function chgState(obj, id, typ) {
        clearTimeout(interval)
        if (typ == "act") {
            if (id != 'fb') {

            }

        } else {



            //sanim.setPolyOpen(curr)
        }
    }

    function bind_html_link() {


        $('nav li ').not('.hash').each(function() {

            $(this).hover(function() {
                let id = $(this).data('id');
                if (id != curr)
                    chgState($(this), id, 'act')


            }, function() {
                let id = $(this).data('id');
                if (id != curr)
                    chgState($(this), id, 'dis')


            })


            $(this).find('.tracklink').click(function(e) {

                let target = $(this).attr('target');
                let href = $(this).attr('href');
                let act = $(this).data('act');

                let ga = $(this).data('ga');
                //GLOBAL.ga.GT('/nav', '.click' , ga );
                GLOBAL.ga.GT('/nav', '.btn.' +ga, "" );
                clk(target, href, act, ga, e);

                return false;
            })
        })

        $(".wrapper .tracklink").click(function(e) {
                let target = $(this).attr('target');
                let href = $(this).attr('href');
                let act = $(this).data('act');
                let ga = $(this).data('ga');
                //GLOBAL.ga.GT('/nav', '.click' , ga );
                GLOBAL.ga.GT('/nav', '.btn.' +ga, "" );
                clk(target, href, act, ga, e);
                return false;
        })

        

        $('.navbar-header').find('.tracklink').click(function(e) {

            let target = $(this).attr('target');
            let href = $(this).attr('href');
            let act = $(this).data('act');
            let ga = $(this).data('ga');
            GLOBAL.ga.GT('/nav', '.click.'+ga ,  );
            clk(target, href, act, ga, e);
            return false;
        })

        function clk(target, href, act, ga, e) {
            e.preventDefault();
            //GLOBAL.ga.GT('/menu', '.btn.' + ga);
            if (act == "disable") {
                alert("Coming Soon!")
            } else if (target === '_blank') {
                if(ga=="tvc"){
                    //window.open(href, target  , "width=600,height=400");
                    $('.pop-tvc').fadeIn('fast');
                    TweenMax.to($('.banner') , .5 , {x:140,ease:Cubic.easeOut})
                    
                }else
                window.open(href, target);
            } else {
                setTimeout(function() { window.open(href, '_self'); }, 300)
            }
        }
    }

    function chkIgContainsHash() {
        let link = location.href;
        let hash = $.param.fragment(link).split('/')[1];
        console.log("hash " + hash)
        if (hash) {
                if(hash.indexOf("result")>=0){
                    showPop(hash)
                    return
                }

                if ($('#' + hash).parents('html').length > 0) {
                    if (hash == "game" || hash.indexOf("result")>=0 ) {
                        showPop(hash)
                        return
                    }
                    setTimeout(function() { route(hash); }, 1000);
                } else {
                    //location.href = link;
                }
            // } catch (err) {}

        }
    }
    this.init = function() {
        setTimeout(chkIgContainsHash , 500)
       // updateState(curr);
        bind_html_link();
        bind();


    };
    this.init();
}

export { MENU as MENU }