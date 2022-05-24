﻿if (typeof orichiElementButtonAddToCart == "undefined") {
    var orichiElementButtonAddToCart = ".gt_atom-gfJyZItCdWdircv_productButtonBuyItNow,.product-form__cart-submit,#teeAtcButton,#new-form-atc,.single_add_to_cart_button,#AddToCartForm button,.product__form button.add-to-cart, #AddToCart-product-template,.product-form__cart-submit,[name^='add'],button[data-pf-type='ProductATC'], .ProductForm__AddToCart,.product-form__add-button,.add-to-cart-btn,.ProductForm__AddToCart span,.tt-btn-addtocart,.btn-addtocart,.mfy-sticky-add-to-cart span,[name^='add'] span, .so-btn-add-to-cart-vanity-copy, .btn-addtocart span, .stickyaddtocart span, .vtl-ub-suggestion__add-to-cart";
    var orichiElementButtonCheckout = '.shopify-payment-button__button,form[action^="/checkout"] :submit[name^="checkout"],form[action^="/checkout"] .checkout-button,.checkout_btn,.OTCheckout,[name^="checkout"],form[action^="/cart"] :submit[name^="checkout"],form[action^="/cart"] .checkout-button,#cart .action_button.right, .btn-checkout, a[href="/checkout"],.cb-bundle_custom_checkout_button_selector span, .cart_button_secure[href^="/checkout"], button[data-checkout="checkout"]';
    if (Shopify.shop == "virginia-macari.myshopify.com") {
        orichiElementButtonAddToCart = "#teeAtcButton,#new-form-atc,.single_add_to_cart_button,#AddToCartForm button,.product__form button.add-to-cart, #AddToCart-product-template,.product-form__cart-submit,[name^='add'],.product-add";
    }
    if (Shopify.shop == "everly-store-il.myshopify.com") {
        orichiElementButtonCheckout = 'a[href^="/checkout"], form[action^="/checkout"] :submit[name^="checkout"],form[action^="/checkout"] .checkout-button,.checkout_btn,.OTCheckout,[name^="checkout"],form[action^="/cart"] :submit[name^="checkout"],form[action^="/cart"] .checkout-button,#cart .action_button.right, .btn-checkout';
    }
    if (Shopify.shop == "digital-army.myshopify.com") {
        orichiElementButtonCheckout = 'a[href^="/checkout"], form[action^="/checkout"] :submit[name^="checkout"],form[action^="/checkout"] .checkout-button,.checkout_btn,.OTCheckout,[name^="checkout"],form[action^="/cart"] :submit[name^="checkout"],form[action^="/cart"] .checkout-button,#cart .action_button.right, .btn-checkout, #slidedown-cart .actions .btn[onclick="window.location=\'/checkout\'"]';
    }
    if (Shopify.shop == "even-subscriptions.myshopify.com") {
        orichiElementButtonAddToCart = "#teeAtcButton,#new-form-atc,.single_add_to_cart_button,#AddToCartForm button,.product__form button.add-to-cart, #AddToCart-product-template,.product-form__cart-submit,[name^='add'],button[data-pf-type='ProductATC'], .ProductForm__AddToCart, button[data-add-to-cart]";
    }

    if (Shopify.shop == "meow-approved.myshopify.com") {
        orichiElementButtonCheckout = 'a[href^="/checkout"], form[action^="/checkout"] :submit[name^="checkout"],form[action^="/checkout"] .checkout-button,.checkout_btn,.OTCheckout,[name^="checkout"],form[action^="/cart"] :submit[name^="checkout"],form[action^="/cart"] .checkout-button,#cart .action_button.right, .btn-checkout, .mu-checkout-btn';
    }

    if (Shopify.shop == 'pyknicusa.myshopify.com') {
        orichiElementButtonCheckout = 'button.cart-checkout,.shopify-payment-button__button,.checkout_btn,.OTCheckout,form[action^="/cart"] .checkout-button,#cart .action_button.right, .btn-checkout, a[href="/checkout"],.cb-bundle_custom_checkout_button_selector span, .cart_button_secure[href^="/checkout"]';
    }

    if (Shopify.shop == "slipespesialisten.myshopify.com") {
        orichiElementButtonAddToCart = "#teeAtcButton,#new-form-atc,.single_add_to_cart_button,#AddToCartForm button,.product__form button.add-to-cart, #AddToCart-product-template,.product-form__cart-submit,[name^='add'],button[data-pf-type='ProductATC'], .ProductForm__AddToCart, button[data-add-to-cart],.quick-add-btn .icon-plus, .add-to-cart span";
    }

    if (Shopify.shop == "grem-store.myshopify.com") {
        orichiElementButtonAddToCart = "#teeAtcButton,#new-form-atc,.single_add_to_cart_button,#AddToCartForm button,.product__form button.add-to-cart, #AddToCart-product-template,.product-form__cart-submit,[name^='add'],button[data-pf-type='ProductATC'], .ProductForm__AddToCart, button[data-add-to-cart],.quick-add-btn .icon-plus, .add-to-cart span, .tt-btn-addtocart span, .btn-addtocart span";
    }

    if (Shopify.shop == 'tim-and-ted.myshopify.com') {
        orichiElementButtonCheckout = '.shopify-payment-button__button,form[action^="/checkout"] :submit[name^="checkout"],form[action^="/checkout"] .checkout-button,.checkout_btn,.OTCheckout,[name^="checkout"],form[action^="/cart"] :submit[name^="checkout"],form[action^="/cart"] .checkout-button,#cart .action_button.right, .btn-checkout, a[href="/checkout"],.cb-bundle_custom_checkout_button_selector span, .cart_button_secure[href^="/checkout"], button[data-checkout="checkout"], .rebuy-button';
    }

    if (Shopify.shop == 'familynecklace-shop.myshopify.com') {
        orichiElementButtonCheckout = '.shopify-payment-button__button,form[action^="/checkout"] :submit[name^="checkout"],form[action^="/checkout"] .checkout-button,.checkout_btn,.OTCheckout,[name^="checkout"],form[action^="/cart"] :submit[name^="checkout"],form[action^="/cart"] .checkout-button,#cart .action_button.right, .btn-checkout, a[href="/checkout"],.cb-bundle_custom_checkout_button_selector span, .cart_button_secure[href^="/checkout"], button[data-checkout="checkout"], .rebuy-button, input[value="Checkout"]';
    }

    if (typeof __st.pageurl != "undefined") {
        var pageURL = "https://" + __st.pageurl;
    } else {
        var pageURL = window.location.href;
    }
    if (pageURL.indexOf('&')) {
        pageURL = pageURL.split("&")[0];
    }
    var currency = Shopify.currency.active;
    var isUseProductID = ["bellefever-apac.myshopify.com", "my-dream-store-final.myshopify.com", "amano-ke.myshopify.com", "hysouq.myshopify.com", "amano-ghana.myshopify.com", "amano-kenya.myshopify.com", "goatfilm-tw.myshopify.com", "tim-and-ted.myshopify.com", "bonorganik-kids.myshopify.com"].indexOf(Shopify.shop) >= 0;
    var notIncludeShippingFee = ["my-dream-store-final.myshopify.com", "grem-store.myshopify.com"].indexOf(Shopify.shop) >= 0;
    var notUsingFbpFbc = ["cezanny.myshopify.com", "wwgenestore2.myshopify.com", "shop1raven.myshopify.com"].indexOf(Shopify.shop) >= 0;
}

!(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
        n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
})(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
);


(function (window, document) {
    if (window.orfbq) return;
    window.orfbq = (function () {
        if (arguments.length > 0) {
            var pixelIds, trackType, contentObj, eventID;
            if (typeof arguments[0] == 'object') pixelIds = arguments[0];
            if (typeof arguments[1] == 'string') trackType = arguments[1];
            if (typeof arguments[2] == 'object') contentObj = arguments[2];
            if (typeof arguments[3] != 'undefined') eventID = arguments[3];
            if (eventID == "" || typeof eventID == "undefined") {
                eventID = (new Date()).getTime() + getRandomInt(1, 100000);
            }

            if (Shopify.shop == "grem-store.myshopify.com" && contentObj != undefined) {
                if (contentObj.value != undefined) {
                    contentObj.value = (contentObj.value * 0.85).toFixed(2);
                }

            }

            if (Shopify.shop == 'mallumba.myshopify.com' || Shopify.shop == 'botique-mallibu.myshopify.com'){
                if (typeof trackType === 'string' && trackType.replace(/\s+/gi, '') && trackType == 'Purchase') {
                    return;
                }
            }

            if (typeof trackType === 'string' && trackType.replace(/\s+/gi, '')) {


                //Call Pixel server
                var pixelFilter = pixelIds.filter(p => p.IsEnableConversationAPI != null && p.IsEnableConversationAPI);
                if (pixelFilter != undefined && pixelFilter.length > 0) {

                    var data;
                    var event_time = Math.round(Date.now() / 1000);
                    //if (pixel.ShopID == 1859) {
                    //    debugger
                    //    var now = new Date();
                    //    var utcNow = new Date(
                    //        now.getUTCFullYear(),
                    //        now.getUTCMonth(),
                    //        now.getUTCDate(),
                    //        now.getUTCHours(),
                    //        now.getUTCMinutes(),
                    //        now.getUTCSeconds()
                    //    );

                    //    if (window.orichiSetting != undefined && window.orichiSetting.TimeZone != null) {
                    //        event_time = Math.round((utcNow.getTime() + window.orichiSetting.TimeZone * 60 * 60 * 1000) / 1000);
                    //    }
                    //    else {
                    //        event_time = Math.round(utcNow.getTime() / 1000);
                    //    }
                    //}
                    //get fbc, fbp
                    var fbp = '';
                    var fbc = '';
                    try {
                        var fbclidUrl = getParameterByName('fbclid');
                        var fbclidLocal = localStorage.getItem("orichiFbclid");
                        var fbclidLocalExpired = localStorage.getItem("orichiFbclidExpired");

                        var fbpCookie = getFbClientId();
                        var fbpLocal = localStorage.getItem("orichiFbp");
                        var fbpLocalExpired = localStorage.getItem("orichiFbpExpired");
                        var now = Date.now();
                        var ramdomNumber = new Date().getTime() + getRandomInt(1, 100000);

                        if (fbclidLocalExpired != null) {
                            if (now - parseInt(fbclidLocalExpired) > 604800000) {
                                fbclidLocal = null;
                            }
                        }
                        else {
                            fbclidLocal = null;
                        }
                        if (fbclidUrl != null) {
                            fbc = 'fb.1.' + now + '.' + fbclidUrl;
                            localStorage.setItem("orichiFbclid", fbclidUrl);
                            localStorage.setItem("orichiFbclidExpired", now);
                        }
                        else if (fbclidLocal != null) {
                            fbc = 'fb.1.' + now + '.' + fbclidLocal;
                        }

                        if (fbpLocalExpired != null) {
                            if (now - parseInt(fbpLocalExpired) > 604800000) {
                                fbpLocal = null;
                            }
                        }
                        else {
                            fbpLocal = null;
                        }
                        if (fbpCookie != null) {
                            fbp = fbpCookie;
                            localStorage.setItem("orichiFbp", fbpCookie);
                            localStorage.setItem("orichiFbpExpired", now);
                        }
                        else if (fbpLocal != null) {
                            fbp = fbpLocal;
                        }
                        else {
                            fbp = 'fb.1.' + now + '.' + ramdomNumber + '';
                            localStorage.setItem("orichiFbp", fbp);
                            localStorage.setItem("orichiFbpExpired", now);
                        }

                        if (notUsingFbpFbc) {
                            fbp = '';
                        }


                    }
                    catch (exception_var) {

                    }

                    var userData = {};
                    try {
                        userData = JSON.parse(localStorage.getItem("orichiUserData")) || {};
                    } catch (t) {
                        this.consoleLog("User Data Parse Error")
                    }

                    switch (trackType) {
                        case 'PageView':
                        case 'Search':
                        case 'AddPaymentInfo':
                        case 'Lead':
                        case 'CompleteRegistration':
                        case 'AddToWishlist':
                            data = {
                                client_user_agent: navigator.userAgent,
                                content_type: 'product',
                                event_source_url: removeParam(window.location.href),
                                fbp: fbp,
                                fbc: fbc,
                                customer_email: userData.customer_email != undefined ? userData.customer_email : '',
                                customer_phone: userData.customer_phone != undefined ? userData.customer_phone : '',
                                first_name: userData.first_name != undefined ? userData.first_name : '',
                                last_name: userData.last_name != undefined ? userData.last_name : '',
                                zp: userData.zp != undefined ? userData.zp : '',
                                ct: userData.ct != undefined ? userData.ct : '',
                                st: userData.st != undefined ? userData.st : '',
                                country: userData.country != undefined ? userData.country : '',
                            };
                            break;
                        case 'Purchase':
                            data = {
                                client_user_agent: navigator.userAgent,
                                content_type: 'product',
                                content_ids: Array.isArray(contentObj.content_ids) ? contentObj.content_ids : [contentObj.content_ids],
                                value: contentObj.value,
                                content_name: Array.isArray(contentObj.content_name) ? JSON.stringify(contentObj.content_name) : contentObj.content_name,
                                currency: contentObj.currency,
                                num_items: contentObj.num_items,
                                event_source_url: removeParam(window.location.href),
                                customer_email: typeof Shopify === 'undefined' ? '' : (typeof Shopify.checkout === 'undefined' ? '' : (typeof Shopify.checkout.email === 'undefined' ? '' : (Shopify.checkout.email == null ? '' : Shopify.checkout.email))),
                                customer_phone: typeof Shopify === 'undefined' ? '' : (typeof Shopify.checkout === 'undefined' ? '' : (typeof Shopify.checkout.phone === 'undefined' ? '' : (Shopify.checkout.phone == null ? '' : Shopify.checkout.phone))),
                                first_name: typeof Shopify === 'undefined' ? '' : (typeof Shopify.checkout === 'undefined' ? '' : (typeof Shopify.checkout.billing_address === 'undefined' ? '' : (typeof Shopify.checkout.billing_address.first_name === 'undefined' ? '' : (Shopify.checkout.billing_address.first_name == null ? '' : Shopify.checkout.billing_address.first_name)))),
                                last_name: typeof Shopify === 'undefined' ? '' : (typeof Shopify.checkout === 'undefined' ? '' : (typeof Shopify.checkout.billing_address === 'undefined' ? '' : (typeof Shopify.checkout.billing_address.last_name === 'undefined' ? '' : (Shopify.checkout.billing_address.last_name == null ? '' : Shopify.checkout.billing_address.last_name)))),
                                zp: typeof Shopify === 'undefined' ? '' : (typeof Shopify.checkout === 'undefined' ? '' : (typeof Shopify.checkout.billing_address === 'undefined' ? '' : (typeof Shopify.checkout.billing_address.zip === 'undefined' ? '' : (Shopify.checkout.billing_address.zip == null ? '' : Shopify.checkout.billing_address.zip)))),
                                ct: typeof Shopify === 'undefined' ? '' : (typeof Shopify.checkout === 'undefined' ? '' : (typeof Shopify.checkout.billing_address === 'undefined' ? '' : (typeof Shopify.checkout.billing_address.city === 'undefined' ? '' : (Shopify.checkout.billing_address.city == null ? '' : Shopify.checkout.billing_address.city)))),
                                st: typeof Shopify === 'undefined' ? '' : (typeof Shopify.checkout === 'undefined' ? '' : (typeof Shopify.checkout.billing_address === 'undefined' ? '' : (typeof Shopify.checkout.billing_address.province_code === 'undefined' ? '' : (Shopify.checkout.billing_address.province_code == null ? '' : Shopify.checkout.billing_address.province_code)))),
                                country: typeof Shopify === 'undefined' ? '' : (typeof Shopify.checkout === 'undefined' ? '' : (typeof Shopify.checkout.billing_address === 'undefined' ? '' : (typeof Shopify.checkout.billing_address.country_code === 'undefined' ? '' : (Shopify.checkout.billing_address.country_code == null ? '' : Shopify.checkout.billing_address.country_code)))),
                                fbp: fbp,
                                fbc: fbc,
                            };
                            localStorage.setItem("orichiUserData", JSON.stringify(data));
                            break;
                        case 'InitiateCheckout':
                            data = {
                                client_user_agent: navigator.userAgent,
                                content_type: 'product',
                                content_ids: Array.isArray(contentObj.content_ids) ? contentObj.content_ids : [contentObj.content_ids],
                                value: contentObj.value,
                                content_name: Array.isArray(contentObj.content_name) ? JSON.stringify(contentObj.content_name) : contentObj.content_name,
                                currency: contentObj.currency,
                                num_items: contentObj.num_items,
                                event_source_url: removeParam(window.location.href),
                                fbp: fbp,
                                fbc: fbc,
                                customer_email: userData.customer_email != undefined ? userData.customer_email : '',
                                customer_phone: userData.customer_phone != undefined ? userData.customer_phone : '',
                                first_name: userData.first_name != undefined ? userData.first_name : '',
                                last_name: userData.last_name != undefined ? userData.last_name : '',
                                zp: userData.zp != undefined ? userData.zp : '',
                                ct: userData.ct != undefined ? userData.ct : '',
                                st: userData.st != undefined ? userData.st : '',
                                country: userData.country != undefined ? userData.country : '',
                            };
                            break;
                        case 'ViewContent':
                        case 'AddToCart':

                            data = {
                                client_user_agent: navigator.userAgent,
                                content_type: 'product',
                                content_ids: Array.isArray(contentObj.content_ids) ? contentObj.content_ids : [contentObj.content_ids],
                                value: contentObj.value,
                                content_name: Array.isArray(contentObj.content_name) ? JSON.stringify(contentObj.content_name) : contentObj.content_name,
                                currency: contentObj.currency,
                                event_source_url: removeParam(window.location.href),
                                fbp: fbp,
                                fbc: fbc,
                                customer_email: userData.customer_email != undefined ? userData.customer_email : '',
                                customer_phone: userData.customer_phone != undefined ? userData.customer_phone : '',
                                first_name: userData.first_name != undefined ? userData.first_name : '',
                                last_name: userData.last_name != undefined ? userData.last_name : '',
                                zp: userData.zp != undefined ? userData.zp : '',
                                ct: userData.ct != undefined ? userData.ct : '',
                                st: userData.st != undefined ? userData.st : '',
                                country: userData.country != undefined ? userData.country : '',
                            };
                            break;
                        default:
                            data = {
                                client_user_agent: navigator.userAgent,
                                content_type: 'product',
                                event_source_url: removeParam(window.location.href),
                                fbp: fbp,
                                fbc: fbc,
                            };
                            break;

                    }
                    var url = "https://api.orichi.info/Customer/PostPixels";
                    //var arrActive = [1010, 1012, 1019, 1106, 1551, 1899, 1916, 1859, 3477];
                    var arrActive = [];
                    if (arrActive.indexOf(pixelFilter[0].ShopID) >= 0) {
                        url = "https://shopify.orichi.info/pixel/Customer/PostPixels";
                    }
                    var order_id = eventID;
                    $.ajax({
                        url: url,
                        data: {
                            shop_id: pixelFilter[0].ShopID,
                            pixel_ids: pixelFilter.map(p => p.FacebookPixel),
                            track_type: trackType,
                            event_id: eventID,
                            event_time: event_time,
                            content: JSON.stringify(data)
                        },
                        type: 'POST',
                        success: function (res) {

                        },
                        error: function (request, status, error) {
                            var url2 = "https://shopify.orichi.info/pixel/Customer/PostPixels";
                            //var arrActive = [1010, 1012, 1019, 1106, 1551, 1899, 1916, 1859, 3477];
                            var arrActive = [];
                            if (arrActive.indexOf(pixelFilter[0].ShopID) >= 0) {
                                url2 = "https://pixel.roughgroup.com/Customer/PostPixels";
                            }
                            $.ajax({
                                url: url2,
                                data: {
                                    shop_id: pixelFilter[0].ShopID,
                                    pixel_ids: pixelFilter.map(p => p.FacebookPixel),
                                    track_type: trackType,
                                    event_id: eventID,
                                    order_id: order_id,
                                    event_time: event_time,
                                    content: JSON.stringify(data)
                                },
                                type: 'POST',
                                success: function (res) {

                                },
                                error: function (request, status, error) {
                                    console.log(request.responseText);
                                }
                            });
                        },
                    });


                }

                for (var i = 0; i < pixelIds.length; i++) {
                    var pixel = pixelIds[i];
                    //if ([6484,6964,6988,7656,8508].indexOf(pixel.ShopID) >= 0 || pixel.ShopID <= 4649 || !(pixel.IsEnableConversationAPI != null && pixel.IsEnableConversationAPI && (pixel.TestCode == undefined || pixel.TestCode == null || pixel.TestCode == '') && (pixel.ShopID % 4 == 0 || [4650,5032].indexOf(pixel.ShopID) >= 0))) {
                    //                      }
                    var pixelId = pixelIds[i].FacebookPixel;
                    if (pixel.ShopID > 8810) {
                        fbq('init', pixelId);
                        switch (trackType) {
                            case 'PageView':
                                fbq('trackSingle', pixelId, 'PageView', {}, { eventID });
                                break;
                            case 'ViewContent':
                            case 'Search':
                            case 'AddToCart':
                            case 'InitiateCheckout':
                            case 'AddPaymentInfo':
                            case 'Lead':
                            case 'CompleteRegistration':
                            case 'Purchase':
                            case 'AddToWishlist':
                                fbq('trackSingle', pixelId, trackType, contentObj, {
                                    eventID,
                                });
                                break;
                            default:
                                return;
                        }
                    }
                    else {
                        var params = [];
                        params.push('id=' + encodeURIComponent(pixelId));
                        switch (trackType) {
                            case 'PageView':
                            case 'ViewContent':
                            case 'Search':
                            case 'AddToCart':
                            case 'InitiateCheckout':
                            case 'AddPaymentInfo':
                            case 'Lead':
                            case 'CompleteRegistration':
                            case 'Purchase':
                            case 'AddToWishlist':
                                params.push('ev=' + encodeURIComponent(trackType));
                                break;
                            default:
                                return;
                        }
                        params.push('dl=' + encodeURIComponent(removeParam(document.location.href)));
                        if (document.referrer) params.push('rl=' + encodeURIComponent(removeParam(document.referrer)));
                        params.push('if=false');
                        params.push('ts=' + new Date().getTime());
                        if (typeof contentObj == 'object') {
                            for (var u in contentObj) {
                                if (typeof contentObj[u] == 'object' && contentObj[u] instanceof Array) {
                                    if (contentObj[u].length > 0) {
                                        for (var y = 0; y < contentObj[u].length; y++) { contentObj[u][y] = (contentObj[u][y] + '').replace(/^\s+|\s+$/gi, '').replace(/\s+/gi, ' ').replace(/,/gi, 'Â§'); }
                                        params.push('cd[' + u + ']=' + encodeURIComponent(contentObj[u].join(',').replace(/^/gi, '[\'').replace(/$/gi, '\']').replace(/,/gi, '\',\'').replace(/Â§/gi, '\,')));
                                    }
                                } else {
                                    params.push('cd[' + u + ']=' + encodeURIComponent(contentObj[u]));
                                }
                            }
                        }
                        params.push('v=' + encodeURIComponent('2.7.19'));
                        var imgId = new Date().getTime();
                        var img = document.createElement('img');
                        img.id = 'fb_' + imgId, img.src = 'https://www.facebook.com/tr/?eid=' + eventID + '&' + params.join('&'), img.width = 1, img.height = 1, img.style = 'display:none;';
                        //document.body.appendChild(img);
                        //window.setTimeout(function () { var t = document.getElementById('fb_' + imgId); t.parentElement.removeChild(t); }, 5000);
                    }



                }







            }
        }
    });
})(window, document);

async function orichiInitFacebookPixel() {
    let pixels = await orichiGetAllFacebookPixels5($);
    window.pixels = pixels;
    if (pixels.length > 0) {
        trackPageView(pixels);
        if (pageURL.indexOf('/products/') > -1) {
            if (pageURL.indexOf('?') > -1) {
                var product_url = pageURL.split('?');
                product_url = product_url[0] + '.json';
            } else {
                var product_url = pageURL + '.json';
            }
            var product = await otGetInfoProductByLink(product_url, $);
            trackViewContent(pixels, product);
        }
        document.addEventListener('click', function (event) {
            if (Shopify.shop == 'rultimate.myshopify.com') {
                if (event.target.matches('#CartDrawer button.drawer__close-button')) {
                    if (typeof itemInCart != "undefined" && typeof itemInCart.items != "undefined") {
                        var cart = itemInCart;
                        if (cart.items.length > 0) {
                            let content_ids = [];
                            let content_name = [];
                            $.each(cart.items, function (index, value) {
                                content_ids.push(value.variant_id);
                                content_name.push(value.product_title);
                                if (index == cart.items.length - 1) {
                                    trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                }
                            });
                        }
                    } else {
                        $.ajax({
                            type: 'GET',
                            url: '/cart.js',
                            dataType: 'json'
                        }).done(cart => {
                            if (cart.items.length > 0) {
                                let content_ids = [];
                                let content_name = [];
                                $.each(cart.items, function (index, value) {
                                    content_ids.push(value.variant_id);
                                    content_name.push(value.product_title);
                                    if (index == cart.items.length - 1) {
                                        trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                    }
                                });
                            }
                        }).fail(function (jqXHR, textStatus) {
                        });
                    }
                }
            }
            if (Shopify.shop == 'tryfuns.myshopify.com') {
                if (event.target.matches('.mu-checkout-btn')) {
                    if (typeof itemInCart != "undefined" && typeof itemInCart.items != "undefined") {
                        var cart = itemInCart;
                        if (cart.items.length > 0) {
                            let content_ids = [];
                            let content_name = [];
                            $.each(cart.items, function (index, value) {
                                content_ids.push(value.variant_id);
                                content_name.push(value.product_title);
                                if (index == cart.items.length - 1) {
                                    trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                }
                            });
                        }
                    } else {
                        $.ajax({
                            type: 'GET',
                            url: '/cart.js',
                            dataType: 'json'
                        }).done(cart => {
                            if (cart.items.length > 0) {
                                let content_ids = [];
                                let content_name = [];
                                $.each(cart.items, function (index, value) {
                                    content_ids.push(value.variant_id);
                                    content_name.push(value.product_title);
                                    if (index == cart.items.length - 1) {
                                        trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                    }
                                });
                            }
                        }).fail(function (jqXHR, textStatus) {
                        });
                    }
                }
            }
            if (Shopify.shop == 'sua-ferramenta-shop.myshopify.com') {
                if (event.target.matches('.cart-recap__checkout')) {
                    if (typeof itemInCart != "undefined" && typeof itemInCart.items != "undefined") {
                        var cart = itemInCart;
                        if (cart.items.length > 0) {
                            let content_ids = [];
                            let content_name = [];
                            $.each(cart.items, function (index, value) {
                                content_ids.push(value.variant_id);
                                content_name.push(value.product_title);
                                if (index == cart.items.length - 1) {
                                    trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                }
                            });
                        }
                    } else {
                        $.ajax({
                            type: 'GET',
                            url: '/cart.js',
                            dataType: 'json'
                        }).done(cart => {
                            if (cart.items.length > 0) {
                                let content_ids = [];
                                let content_name = [];
                                $.each(cart.items, function (index, value) {
                                    content_ids.push(value.variant_id);
                                    content_name.push(value.product_title);
                                    if (index == cart.items.length - 1) {
                                        trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                    }
                                });
                            }
                        }).fail(function (jqXHR, textStatus) {
                        });
                    }

                }
            }
            if (Shopify.shop == 'theplantparty.myshopify.com' || Shopify.shop == 'footgoo.myshopify.com' || Shopify.shop == 'zorazola.myshopify.com' || Shopify.shop == 'sevosa.myshopify.com' || Shopify.shop == 'tryfuns.myshopify.com') {
                return;
            }
            if (Shopify.shop == 'ovlied.myshopify.com' || Shopify.shop == 'jj-ellie-beauty.myshopify.com' || Shopify.shop == 'grem-store.myshopify.com') {
                return;
            }
            if (Shopify.shop == 'amano-ke.myshopify.com' || Shopify.shop == 'hysouq.myshopify.com' || Shopify.shop == 'amano-ghana.myshopify.com' || Shopify.shop == "amano-kenya.myshopify.com") {
                if (event.target.matches('#scrollToLeadForm,#advancedCodModal') && typeof meta.product != "undefined") {
                    let event_id = (new Date()).getTime() + getRandomInt(1, 100000);
                    orfbq(pixels, 'AddToCart', {
                        content_ids: isUseProductID ? meta.product.id : meta.product.variants[0]["id"],
                        content_type: 'product',
                        value: parseInt(meta.product.variants[0]["price"]) / 100,
                        content_name: meta.product.variants[0]["name"],
                        currency: currency,
                    }, event_id);
                }
            }
            if (Shopify.shop == 'alohaaloe.myshopify.com') {
                if (event.target.matches('.shopify-payment-button__button')) {
                    if (__st.p == 'home') {
                        var prid = $(event.target).parents('form').attr('id').replace('AddToCartForm-', '');
                        var proObj = JSON.parse($('#ProductJson-' + prid).html());
                        let content_ids = [$('#ProductSelect-' + prid).val()];
                        let content_name = [proObj.title];
                        let quantity = parseInt($('#Quantity').val());
                        trackInitiateCheckout(pixels, content_ids, content_name, { total_price: quantity * proObj.price, item_count: quantity });
                    }
                    else if (__st.p == 'product') {
                        var proObj = JSON.parse($('#ProductJson-product-template').html());
                        let content_ids = [$('#ProductSelect-product-template').val()];
                        let content_name = [proObj.title];
                        let quantity = parseInt($('#Quantity').val());
                        trackInitiateCheckout(pixels, content_ids, content_name, { total_price: quantity * proObj.price, item_count: quantity });
                    }

                }
                return;
            }
            if (event.target.matches(orichiElementButtonAddToCart)) {
                trackAddToCart(pixels);
            }
            if (Shopify.shop == 'cozy-drippy.myshopify.com') {
                if (event.target.matches('.shopify-payment-button__button')) {
                    if (typeof itemInCart != "undefined" && typeof itemInCart.items != "undefined") {
                        var cart = itemInCart;
                        if (cart.items.length > 0) {
                            let content_ids = [];
                            let content_name = [];
                            $.each(cart.items, function (index, value) {
                                content_ids.push(value.variant_id);
                                content_name.push(value.product_title);
                                if (index == cart.items.length - 1) {
                                    trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                }
                            });
                        }
                    } else {
                        $.ajax({
                            type: 'GET',
                            url: '/cart.js',
                            dataType: 'json'
                        }).done(cart => {
                            if (cart.items.length > 0) {
                                let content_ids = [];
                                let content_name = [];
                                $.each(cart.items, function (index, value) {
                                    content_ids.push(value.variant_id);
                                    content_name.push(value.product_title);
                                    if (index == cart.items.length - 1) {
                                        trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                    }
                                });
                            }
                        }).fail(function (jqXHR, textStatus) {
                        });
                    }
                }
            }


        })

        $('body').on('click', orichiElementButtonCheckout, function (e) {
            if (Shopify.shop == 'vital-chakra.myshopify.com' || Shopify.shop == 'dejajewels.myshopify.com') {
                return;
            }
            if (typeof itemInCart != "undefined" && typeof itemInCart.items != "undefined") {
                var cart = itemInCart;
                if (cart.items.length > 0) {
                    let content_ids = [];
                    let content_name = [];
                    $.each(cart.items, function (index, value) {
                        content_ids.push(isUseProductID ? value.product_id : value.variant_id);
                        content_name.push(value.product_title);
                        if (index == cart.items.length - 1) {
                            trackInitiateCheckout(pixels, content_ids, content_name, cart);
                        }
                    });
                }
            } else {
                $.ajax({
                    type: 'GET',
                    url: '/cart.js',
                    dataType: 'json'
                }).done(cart => {
                    if (cart.items.length > 0) {
                        let content_ids = [];
                        let content_name = [];
                        $.each(cart.items, function (index, value) {
                            content_ids.push(isUseProductID ? value.product_id : value.variant_id);
                            content_name.push(value.product_title);
                            if (index == cart.items.length - 1) {
                                trackInitiateCheckout(pixels, content_ids, content_name, cart);
                            }
                        });
                    }
                }).fail(function (jqXHR, textStatus) {
                });
            }
        })
        if (Shopify.Checkout && (Shopify.Checkout.page == 'thank_you' || Shopify.Checkout.page == 'checkout_one_thank_you')) {
            var productIds = [];
            var productNames = [];
            var quantity = 0;
            Shopify.checkout.line_items.forEach(function (item, index) {
                quantity = quantity + item.quantity
                if (item.variant_title != '') {
                    var prod_name = item.title + ' - ' + item.variant_title;
                } else {
                    var prod_name = item.title;
                }
                productNames.push(prod_name);
                productIds.push(isUseProductID ? item.product_id : item.variant_id);
            });
            trackPurchase($, productIds, quantity, pixels);
        }
        if ((Shopify.shop == "amano-ke.myshopify.com" || Shopify.shop == 'hysouq.myshopify.com' || Shopify.shop == 'amano-ghana.myshopify.com' || Shopify.shop == "amano-kenya.myshopify.com") && (window.location.href.indexOf("pages/thank-you") > -1)) {
            orfbq(pixels, 'Lead');
        }
        if (Shopify.shop == "even-subscriptions.myshopify.com") {
            setTimeout(function () {
                $(orichiElementButtonCheckout).click(function (e) {
                    if (typeof itemInCart != "undefined" && typeof itemInCart.items != "undefined") {
                        var cart = itemInCart;
                        if (cart.items.length > 0) {
                            let content_ids = [];
                            let content_name = [];
                            $.each(cart.items, function (index, value) {
                                content_ids.push(value.variant_id);
                                content_name.push(value.product_title);
                                if (index == cart.items.length - 1) {
                                    trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                }
                            });
                        }
                    } else {
                        $.ajax({
                            type: 'GET',
                            url: '/cart.js',
                            dataType: 'json'
                        }).done(cart => {
                            if (cart.items.length > 0) {
                                let content_ids = [];
                                let content_name = [];
                                $.each(cart.items, function (index, value) {
                                    content_ids.push(value.variant_id);
                                    content_name.push(value.product_title);
                                    if (index == cart.items.length - 1) {
                                        trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                    }
                                });
                            }
                        }).fail(function (jqXHR, textStatus) {
                        });
                    }
                })
            }, 300);

        }

        if (Shopify.shop == 'hobby-stories.myshopify.com' && __st.p == 'collection') {
            $('body').on('click', '.gf_add-to-cart', function (e) {
                var prid = $(this).parent().attr('data-pid');
                var productJson = JSON.parse($('#product-json' + prid).html());
                var event_id = (new Date()).getTime() + getRandomInt(1, 100000);
                orfbq(pixels, 'AddToCart', {
                    content_ids: productJson.id,
                    content_type: 'product',
                    value: parseInt(productJson.price) / 100,
                    content_name: productJson.title,
                    currency: currency,
                }, event_id);

            });


        }

        if (Shopify.shop == '1000-ways-forward.myshopify.com') {
            $('body').on('click', '.gf_add-to-cart', function (e) {
                var prid = $(this).parent().attr('data-pid');
                var productJson = JSON.parse($('#product-json' + prid).html());
                var event_id = (new Date()).getTime() + getRandomInt(1, 100000);
                orfbq(pixels, 'AddToCart', {
                    content_ids: productJson.id,
                    content_type: 'product',
                    value: parseInt(productJson.price) / 100,
                    content_name: productJson.title,
                    currency: currency,
                }, event_id, pixel);
            });


        }

        if (Shopify.shop == 'sacred-weaves.myshopify.com') {
            $('body').on('click', orichiElementButtonAddToCart, function (e) {
                trackAddToCart(pixels);
            });

        }

        if (Shopify.shop == 'hobbyparati-es.myshopify.com') {
            $('body').on('click', '.rebuy-product-actions .rebuy-button', function (e) {
                trackAddToCart(pixels);
            });

        }

        if (Shopify.shop == 'meow-approved.myshopify.com') {
            var atcFunction = window.handleAddToCart;
            window.handleAddToCart = function (e) { atcFunction(e); trackAddToCart(pixels); }

        }



        if (Shopify.shop == 'coffee-gummies.myshopify.com') {
            $('body').on('click', 'form[action="/cart/add"] #main_form_button', function (e) {
                var prid = $('form[action="/cart/add"]').parent().attr('data-product-id');
                var proObj = window.__pageflyProducts[prid];
                var event_id = (new Date()).getTime() + getRandomInt(1, 100000);
                orfbq(pixels, 'AddToCart', {
                    content_ids: prid,
                    content_type: 'product',
                    value: parseInt(proObj.variants[0].price) / 100,
                    content_name: proObj.title,
                    currency: currency,
                }, event_id);
            });

            $('body').on('click', '#contact_form button[type="submit"]', function (e) {
                var prid = $('form[action="/cart/add"]').parent().attr('data-product-id');
                var proObj = window.__pageflyProducts[prid];
                var content_ids = [prid];
                var content_name = [proObj.title];
                var event_id = (new Date()).getTime() + getRandomInt(1, 100000);
                orfbq(pixels, 'InitiateCheckout', {
                    content_type: 'product',
                    content_ids: content_ids,
                    currency: currency,
                    value: parseFloat(proObj.variants[0].price) / 100,
                    num_items: 1,
                    content_name: content_name
                }, event_id);
            });


        }

        if (Shopify.shop == "jj-ellie-beauty.myshopify.com") {
            setTimeout(function () {
                $('#OrichiCheckoutButton').click(function (e) {
                    $(this).css('color', 'black');
                    //if (typeof itemInCart != "undefined" && typeof itemInCart.items != "undefined") {
                    //    var cart = itemInCart;
                    //    if (cart.items.length > 0) {
                    //        let content_ids = [];
                    //       let content_name = [];
                    //        $.each(cart.items, function (index, value) {
                    //           content_ids.push(value.product_id);
                    //            content_name.push(value.product_title);
                    //            if (index == cart.items.length - 1) {
                    //                trackInitiateCheckout(pixels, content_ids, content_name, cart);
                    //            }
                    //       });
                    //    };
                    //	$('button[name="checkout"]').click();
                    //} else {
                    //    $.ajax({
                    //        type: 'GET',
                    //        url: '/cart.js',
                    //        dataType: 'json'
                    //    }).done(cart => {
                    //        if (cart.items.length > 0) {
                    //            let content_ids = [];
                    //           let content_name = [];
                    //            $.each(cart.items, function (index, value) {
                    //                content_ids.push(value.product_id);
                    //                content_name.push(value.product_title);
                    //                if (index == cart.items.length - 1) {
                    //                   trackInitiateCheckout(pixels, content_ids, content_name, cart);
                    //                }
                    //            });
                    //        };
                    //		$('button[name="checkout"]').click();
                    //    }).fail(function (jqXHR, textStatus) {
                    //		$('button[name="checkout"]').click();
                    //    });
                    //}
                    $('button[name="checkout"]').click();
                })
            }, 300);

        }

        if (Shopify.shop == 'ortomaisstore.myshopify.com') {
            $('body').on('click', '.shopify-payment-button .shopify-payment-button__button', function (e) {
                var prid = $('.shopify-section>.page-width').attr('data-section-id');
                var productJson = JSON.parse($('#ProductJson' + prid).html());
                var content_ids = [productJson.id];
                var content_name = [productJson.title];
                var event_id = (new Date()).getTime() + getRandomInt(1, 100000);
                orfbq(pixels, 'InitiateCheckout', {
                    content_type: 'product',
                    content_ids: content_ids,
                    currency: currency,
                    value: parseFloat(productJson.variants[0].price) / 100,
                    num_items: 1,
                    content_name: content_name
                }, event_id);
            });


        }
        if (Shopify.shop == 'quibike2.myshopify.com') {
            myInterval = setInterval(function () {
                if (Spurit.global != undefined) {
                    clearInterval(myInterval);
                    Spurit.global.checkout.onCheckout(function (next) {
                        debugger;
                        if (typeof itemInCart != "undefined" && typeof itemInCart.items != "undefined") {
                            var cart = itemInCart;
                            if (cart.items.length > 0) {
                                let content_ids = [];
                                let content_name = [];
                                $.each(cart.items, function (index, value) {
                                    content_ids.push(isUseProductID ? value.product_id : value.variant_id);
                                    content_name.push(value.product_title);
                                    if (index == cart.items.length - 1) {
                                        trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                    }
                                });
                            }
                        } else {
                            $.ajax({
                                type: 'GET',
                                url: '/cart.js',
                                dataType: 'json'
                            }).done(cart => {
                                if (cart.items.length > 0) {
                                    let content_ids = [];
                                    let content_name = [];
                                    $.each(cart.items, function (index, value) {
                                        content_ids.push(isUseProductID ? value.product_id : value.variant_id);
                                        content_name.push(value.product_title);
                                        if (index == cart.items.length - 1) {
                                            trackInitiateCheckout(pixels, content_ids, content_name, cart);
                                        }
                                    });
                                }
                            }).fail(function (jqXHR, textStatus) {
                            });
                        }
                    });

                }
            }, 500);

        }

        //buy it now
        if (Shopify.shop == "digital-army.myshopify.com") {
            var quantityEle = 'input[name="quantity"]:first';
            $('body').on('click', '.aod_buy_now .aod_buy_button', function (e) {
                if (typeof __st.rid != "undefined" && typeof meta.product.variants[0]["id"] != "undefined") {

                    var event_id = (new Date()).getTime() + getRandomInt(1, 100000);
                    orfbq(pixels, 'InitiateCheckout', {
                        content_type: 'product',
                        content_ids: isUseProductID ? meta.product.id : meta.product.variants[0]["id"],
                        currency: currency,
                        value: parseInt($(quantityEle).val()) * parseInt(meta.product.variants[0]["price"]) / 100,
                        num_items: parseInt($(quantityEle).val()),
                        content_name: meta.product.variants[0]["name"]
                    }, event_id);
                }

            });
        }
    }


}

function otGetInfoProductByLink(URL, $) {
    return new Promise(resolve => {
        $.ajax({
            url: URL,
            dataType: 'jsonp',
            header: { 'Access-Control-Allow-Origin': '*' },
            success: function (responseData) {
                if (typeof responseData == "string") {
                    responseData = JSON.parse(responseData);
                }
                if (responseData.product.title.indexOf("'") > -1) {
                    responseData.product.title = responseData.product.title.replace(/'/g, '');
                }
                resolve(responseData.product);
            }
        })
    })
}
function trackPageView(pixels) {
    let event_id = (new Date()).getTime();
    orfbq(pixels, "PageView", "", event_id);

}
function trackViewContent(pixels, product) {
    console.log("product", product);
    let event_id = (new Date()).getTime();
    orfbq(pixels, 'ViewContent', {
        content_ids: isUseProductID ? [product.id] : [(product.variants.length == 0 || product.variants == null) ? product.id : product.variants[0].id],
        content_type: 'product',
        value: product.variants[0].price,
        content_name: product.title,
        currency: currency,
    }, event_id);
}
function trackAddToCart(pixels) {
    $.ajax({
        type: 'GET',
        url: '/cart.js',
        dataType: 'json'
    }).done(cart => {
        if (cart.items.length > 0) {
            var lastItem = cart.items[0];
            let check_add_to_cart = localStorage.getItem("orichi_is_tracked_atc");
            //debugger;

            localStorage.setItem("orichi_is_tracked_atc", lastItem['variant_id']);
            let event_id = (new Date()).getTime() + getRandomInt(1, 100000);
            orfbq(pixels, 'AddToCart', {
                content_ids: isUseProductID ? lastItem['product_id'] : lastItem['variant_id'],
                content_type: 'product',
                value: parseInt(cart.total_price) / 100,
                content_name: lastItem['product_title'],
                currency: currency,
            }, event_id);


        } else {
            if (typeof __st.rid != "undefined" && typeof meta.product.variants[0]["id"] != "undefined") {
                let event_id = (new Date()).getTime() + getRandomInt(1, 100000);
                orfbq(pixels, 'AddToCart', {
                    content_ids: isUseProductID ? meta.product.id : meta.product.variants[0]["id"],
                    content_type: 'product',
                    value: parseInt(meta.product.variants[0]["price"]) / 100,
                    content_name: meta.product.variants[0]["name"],
                    currency: currency,
                }, event_id);
            }
        }

    })

}
function trackInitiateCheckout(pixels, content_ids, content_name, cart) {
    let event_id = (new Date()).getTime() + getRandomInt(1, 100000);
    orfbq(pixels, 'InitiateCheckout', {
        content_type: 'product',
        content_ids: content_ids,
        currency: currency,
        value: parseFloat(cart.total_price) / 100,
        num_items: (cart.item_count),
        content_name: content_name
    }, event_id);
}
function trackPurchase($, productIds, quantity, pixels) {
    if (Shopify.shop == "amano-ke.myshopify.com" || Shopify.shop == 'hysouq.myshopify.com' || Shopify.shop == 'amano-ghana.myshopify.com' || Shopify.shop == "amano-kenya.myshopify.com") {
        orfbq(pixels, 'Lead');
    }


    orfbq(pixels, 'Purchase', {
        currency: currency,
        value: notIncludeShippingFee ? Shopify.checkout.subtotal_price : Shopify.checkout.total_price,
        content_ids: productIds,
        content_type: 'product',
        num_items: quantity
    }, Shopify.checkout.order_id);
}

if (typeof $ == 'undefined' && Shopify.shop != 'nelly-by-nelly.myshopify.com') {
    javascript: (function (e, s) {
        e.src = s;
        e.onload = function () {
            $ = jQuery.noConflict();
            if (typeof window.orichiCheckExistFacebookPixel === 'undefined') {
                orichiInitFacebookPixel();
                window.orichiCheckExistFacebookPixel = false;
            }

        };
        document.head.appendChild(e);
    })(document.createElement('script'), 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js')

} else {
    if (typeof window.orichiCheckExistFacebookPixel === 'undefined') {
        orichiInitFacebookPixel();
        window.orichiCheckExistFacebookPixel = false;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function removeParam(sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "",
        key = 'variant';
    try {
        if (queryString !== "") {
            params_arr = queryString.split("&");
            for (var i = params_arr.length - 1; i >= 0; i -= 1) {
                param = params_arr[i].split("=")[0];
                if (param === key) {
                    params_arr.splice(i, 1);
                }
            }
            if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
        }
    } catch (error) {
    }


    return rtn;
}

function getFbClientId() {
    let result = /_fbp=(fb\.1\.\d+\.\d+)/.exec(window.document.cookie);
    if (!(result && result[1])) {
        return null;
    }
    return result[1];
}

function orichiGetAllFacebookPixels4($) {
    'use strict'
    return new Promise(resolve => {
        $.ajax({
            url: "https://pixel.roughgroup.com/Customer/GetVersion",
            data: { id: __st.a },
            type: 'GET',
            success: function (res) {
                var version = Date.now();
                if (res.version != undefined && res.version != '') {
                    version = res.version;
                    $.getJSON("https://pixel.roughgroup.com/FileJson/" + Shopify.shop + "/settings.json?v=" + version, function (res) {
                        if (res.Setting != undefined && res.Setting.Active) {
                            res.Pixel = res.Pixel.filter(p => p.Status);
                            let orichiPixels = res.Pixel;
                            window.orichiSetting = res.Setting;
                            try {
                                let arrPro = $('meta[property="orichi:product"]').attr('content') != null ? $('meta[property="orichi:product"]').attr('content').split(',') : [];
                                let arrCol = $('meta[property="orichi:collections"]').attr('content') != null ? $('meta[property="orichi:collections"]').attr('content').split(',') : [];

                                orichiPixels = [];
                                for (var i = 0; i < res.Pixel.length; i++) {
                                    let pixel = res.Pixel[i];
                                    switch (pixel.Target) {
                                        case 'All':
                                            orichiPixels.push(pixel);
                                            break;
                                        case 'Product':
                                            var arrProPixel = pixel.LstProduct == null ? [] : pixel.LstProduct.split(',');
                                            if ([arrPro, arrProPixel].reduce((a, c) => a.filter(i => c.map(x => x.trim()).includes(i.trim()))).length > 0) {
                                                orichiPixels.push(pixel);
                                            }
                                            break;
                                        case 'Collection':
                                            var arrColPixel = pixel.LstCollect == null ? [] : pixel.LstCollect.split(',');
                                            if ([arrCol, arrColPixel].reduce((a, c) => a.filter(i => c.map(x => x.trim()).includes(i.trim()))).length > 0) {
                                                orichiPixels.push(pixel);
                                            }
                                            break;
                                        default:
                                            orichiPixels.push(pixel);
                                            break;
                                    }

                                }
                            }
                            catch (e) {
                                console.log(e);
                                orichiPixels = res.Pixel;
                            }


                            if (typeof orichiPixels == "string") {
                                orichiPixels = JSON.parse(orichiPixels);
                            }
                            if (res.Setting.TimeDelay != null && res.Setting.TimeDelay != 0) {
                                setTimeout(function () { resolve(orichiPixels); }, res.Setting.TimeDelay * 1000);
                            }
                            else {
                                resolve(orichiPixels);
                            }

                        }
                    });
                }


            },
        });



    })
}

function orichiGetAllFacebookPixels5($) {
    'use strict'
    return new Promise(resolve => {
        $.ajax({
            url: "https://pixel.roughgroup.com/Customer/GetShopData?domain=" + Shopify.shop,
            type: 'GET',
            success: function (res) {
                if (res.Setting != undefined && res.Setting.Active) {
                    res.Pixel = res.Pixel.filter(p => p.Status);
                    let orichiPixels = res.Pixel;
                    window.orichiSetting = res.Setting;
                    try {
                        let arrPro = $('meta[property="orichi:product"]').attr('content') != null ? $('meta[property="orichi:product"]').attr('content').split(',') : [];
                        let arrCol = $('meta[property="orichi:collections"]').attr('content') != null ? $('meta[property="orichi:collections"]').attr('content').split(',') : [];

                        orichiPixels = [];
                        for (var i = 0; i < res.Pixel.length; i++) {
                            let pixel = res.Pixel[i];
                            switch (pixel.Target) {
                                case 'All':
                                    orichiPixels.push(pixel);
                                    break;
                                case 'Product':
                                    var arrProPixel = pixel.LstProduct == null ? [] : pixel.LstProduct.split(',');
                                    if ([arrPro, arrProPixel].reduce((a, c) => a.filter(i => c.map(x => x.trim()).includes(i.trim()))).length > 0) {
                                        orichiPixels.push(pixel);
                                    }
                                    break;
                                case 'Collection':
                                    var arrColPixel = pixel.LstCollect == null ? [] : pixel.LstCollect.split(',');
                                    if ([arrCol, arrColPixel].reduce((a, c) => a.filter(i => c.map(x => x.trim()).includes(i.trim()))).length > 0) {
                                        orichiPixels.push(pixel);
                                    }
                                    break;
                                default:
                                    orichiPixels.push(pixel);
                                    break;
                            }

                        }
                    }
                    catch (e) {
                        console.log(e);
                        orichiPixels = res.Pixel;
                    }


                    if (typeof orichiPixels == "string") {
                        orichiPixels = JSON.parse(orichiPixels);
                    }
                    if (res.Setting.TimeDelay != null && res.Setting.TimeDelay != 0) {
                        setTimeout(function () { resolve(orichiPixels); }, res.Setting.TimeDelay * 1000);
                    }
                    else {
                        resolve(orichiPixels);
                    }

                }

            },
        });



    })
}

