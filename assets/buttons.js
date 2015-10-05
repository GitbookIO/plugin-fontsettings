require(["gitbook", "lodash"], function(gitbook, _) {
    gitbook.events.bind("start", function(config) {
        console.log(config);
        var opts = _.defaults(_.get(config, 'pluginsConfig.sharing', {}), {
            "facebook": true,
            "google": true,
            "twitter": true,
            "weibo": false,
            "all": [
                "facebook", "google", "twitter",
                "weibo", "instapaper"
            ]
        });

        console.log(opts);
        // Create buttons in toolbar
        gitbook.toolbar.createButton({
            icon: 'fa fa-share-alt',
            label: 'Share',
            menu: [


            ]
        });
    });


    gitbook.events.bind("page.change", function() {

    });
});


