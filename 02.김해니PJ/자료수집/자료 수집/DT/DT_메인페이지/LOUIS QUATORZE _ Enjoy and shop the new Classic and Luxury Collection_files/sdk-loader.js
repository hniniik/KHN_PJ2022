(function() {
    function createTag() {
        var urls = ["https:\/\/cdn.langshop.app\/buckets\/app\/libs\/storefront\/sdk.js?proxy_prefix=\/apps\/langshop"];
        for (var i = 0; i < urls.length; i++) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.defer = true;
            s.src = urls[i];
            document.getElementsByTagName('head')[0].appendChild(s);
        }
    }

    window.setTimeout(function () {
        if (typeof window.LangShop === 'undefined') {
            createTag();
        }
    }, 5000);
})();
