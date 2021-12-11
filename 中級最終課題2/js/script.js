// Drawer
jQuery('.drawer-icon').on('click', function(e) {
    e.preventDefault();

    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');

    return false;
});

// WOW
new WOW().init();

// スムーススクロール
jQuery('a[href^="#"]').on('click', function(){

    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');

    var position = 0;
    if ( id != '#'){
        position = jQuery(id).offset().top - header;
    }

    jQuery('html, body').animate({
        scrollTop: position
    }, 500);

    return false;
});

// Google Form
let $form = $('#js-form');
$form.submit(function(e) { 
    e.preventDefault();

    $.ajax({ 
        url: $form.attr('action'), 
        data: $form.serialize(), 
        type: "POST", 
        dataType: "xml", 
        statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
            $form.slideUp();
            $( "#js-success" ).slideDown();
        }, 
        200: function() { 
          //送信に失敗したときの処理 
            $form.slideUp();
            $( "#js-error" ).slideDown();
        }
        } 
    });
    return false; 
}); 

    // フォームの入力確認 ボタンの有効化
let $submit = $('#js-submit');
// .on('change', function())でもいい
$('#js-form input').change(function(){
    if (
        // nameとemailが空でないか
        $( '#js-form input[name="entry.1358120111"]').val() !== "" &&
        $( '#js-form input[name="entry.1560056323"]').val() !== "" &&
        //  $( '#js-form input[type="email"]').val() !== "" &&
        // checkboxにチェックが入ったか
        $( '#js-form input[name="entry.1211200032"]').prop('checked') === true 
    ) {
        $submit.prop('disabled', false)
        // $submit.addClass( '-active')
    } else {
        $submit.prop('disabled', true)
        // $submit.removeClass( '-active')
    }
});

		// スライダー
		var mySwiper = new Swiper('.swiper-container', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			loop: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
			initialSlide: 1,
			breakpoints: {
				767: {
					slidesPerView: 'auto',
					spaceBetween: 40,
					initialSlide: 1,
				}
			},
            freeMode: true,
            freeModeSticky: true,
            grabCursor: true,
		});

// アコーディオン
jQuery('.qa-box__q').on('click', function(){

    // 同じ高さのdivに対して、nextを使い、slideToggleでゆっくり開く
    jQuery(this).next().slideToggle();

    // ＋からーへ消すためのクラスをつける。
    jQuery(this).children('.qa-box__icon').toggleClass('is-open');
});

// スクロールトップの表示
jQuery(window).on('scroll', function(){
    if(jQuery(this).scrollTop() > 100) {
        jQuery('.scroll-top').addClass('is-show');
    } else {
        jQuery('.scroll-top').removeClass('is-show');
    }
    return false;
});
