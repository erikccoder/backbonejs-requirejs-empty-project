define(
    [   "jquery",
        "underscore",
        "backbone"
    ],function($, _, Backbone)
    {

        var html = [
            "<a href='home'>Home</a> | ",
            "<a href='help'>help</a> | ",
            "<a href='search/erik'>search:erik</a> | ",
            "<img src='img/cap.jpg'>"
        ].join('');

        var Router = Backbone.Router.extend(
        {
            routes: {
                "home":                 "home",
                "home/":                 "home",
                "help":                 "help",    // #help
                "help/":                 "help",    // #help
                "search/:query":        "search",  // #search/kiwis
                "search/:query/p:page": "search"   // #search/kiwis/p7
            },

            initialize : function(){
                console.log("Router.initialize");


                $("body").on("click","a:not(a[data-bypass]), a:not(a[target])",function(e){
                    // block the default link behavior
                    e.preventDefault();
                    // take the href of the link clicked
                    var href = $(this).attr("href");
                    // pass this link to Backbone
                    Backbone.history.navigate(href,true);
                });


                var self = this;
                var fragment = Backbone.history.fragment;
                if(fragment)
                {
                    self.navigate("",{
                        trigger: false,
                        replace: true
                    });
                    self.navigate(fragment,
                    {
                        trigger: true,
                        replace: true
                    });
                }
                else{
                    console.log(" navigate to home");
                    this.navigate("home",
                        {
                            trigger : true
                        })
                }

            },
            home : function()
            {
                console.log("Router.home");
                $(".d3-root").html("<p>Router.home</p>" + html);

            },
            help: function() {
                console.log("Router.help");
                $(".d3-root").html("<p>Router.help</p>" + html);

            },

            search: function(query, page) {
                console.log("Router.search");
                $(".d3-root").html("<p>Router.search</p>" + html);
            }

        });

        return {
            "start" : function()
            {
                Backbone.history.start(
                    {
                        pushState: true,
                        root : "/charityCicle/"
                    });

                var app = new Router();

            }
        };
    });