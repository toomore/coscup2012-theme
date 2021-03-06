/*!

 Image Tile
 by timdream (http://timc.idv.tw/)

*/

"use strict";

(function ($) {

  // http://jsfromhell.com/array/shuffle
  Array.prototype.shuffle = function () { //v1.0
    for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
    return this;
  };


  $.imageTileSupported = true;

  $.fn.imageTile = function (options) {
    var settings = {
      beforeImageLoad: function ($img, i) {
        $img.hide();
      },
      imageLoad: function ($img, i) {
        $img.fadeIn(200);
      },
      num: 15*5,
      shuffle: true,
      photos: false
    };

    $.extend(settings, options);

    if (!settings.photos) return this;

    if (settings.shuffle) settings.photos = settings.photos.shuffle();
    if (settings.photos.length > settings.num) settings.photos = settings.photos.slice(0, settings.num);

    return this.each(
      function () {
        var $this = $(this);
        $.each(
          settings.photos,
          function (i, photo) {
            var $i = $('<img />');
            settings.beforeImageLoad($i, i);
            $i[0].onload = function () {
              settings.imageLoad($i, i);
            };
            var $a = $('<a href="' + photo.link_url + '" target="_blank" />').append($i);
            $a.attr('title', photo.title);
            $this.append($a);
            $i[0].src = photo.photo_url;
          }
        );
      }
    );

  };

})(jQuery);


// http://www.flickr.com/groups/coscup2010-selection/
// Selected by Yuren Ju
var yuren_54 = [
  {"photo_url":"4075/4889441807_3a86c8bf67","link_url":"12452841@N00/4889441807","title":"P8140746"},
  {"photo_url":"4140/4901940636_321b5dc4b1","link_url":"48749766@N00/4901940636","title":"DSC_2622"},
  {"photo_url":"4134/4893573695_bd7cf4c7b6","link_url":"12452841@N00/4893573695","title":"P8151046"},
  {"photo_url":"4074/4901933360_56de47f0a2","link_url":"48749766@N00/4901933360","title":"DSC_2541"},
  {"photo_url":"4077/4912818611_92a804ccb1","link_url":"54331619@N00/4912818611","title":"COSCUP Day 2"},
  {"photo_url":"4139/4903649894_ef83276b1e","link_url":"38664137@N07/4903649894","title":"full2"},
  {"photo_url":"4114/4892533724_255a0db780","link_url":"96595297@N00/4892533724","title":"DSC_8318"},
  {"photo_url":"4143/4893498695_6ed348fb05","link_url":"12452841@N00/4893498695","title":"P8151024"},
  {"photo_url":"4116/4901453941_9053107317","link_url":"48749766@N00/4901453941","title":"DSC_3313"},
  {"photo_url":"4082/4901389753_7a1dc45532","link_url":"48749766@N00/4901389753","title":"DSC_2942"},
  {"photo_url":"4114/4907109051_dbb853678f","link_url":"54331619@N00/4907109051","title":"COSCUP 2010 Day 1 - Ubuntu BoF"},
  {"photo_url":"4073/4892563466_96ec98e91b","link_url":"96595297@N00/4892563466","title":"DSC_8100"},
  {"photo_url":"4140/4907688780_cdd0f13076","link_url":"54331619@N00/4907688780","title":"COSCUP 2010 Day 1"},
  {"photo_url":"4094/4893271331_a53ae76028","link_url":"12452841@N00/4893271331","title":"P8150957"},
  {"photo_url":"4079/4905410356_15f64bf25e","link_url":"54331619@N00/4905410356","title":"COSCUP 2010 Day 1"},
  {"photo_url":"4100/4890741725_22f7365dd4","link_url":"12452841@N00/4890741725","title":"P8140894"},
  {"photo_url":"4116/4934292898_a1b9a6856f","link_url":"46509322@N00/4934292898","title":"熱血立夫！啟動！"},
  {"photo_url":"4116/4893221101_64a4153f3c","link_url":"12452841@N00/4893221101","title":"P8150940"},
  {"photo_url":"4119/4901468459_64d2a0084a","link_url":"48749766@N00/4901468459","title":"DSC_3445"},
  {"photo_url":"4099/4891967201_a83166e938","link_url":"96595297@N00/4891967201","title":"DSC_8084"},
  {"photo_url":"4101/4891959949_d60c5a3742","link_url":"96595297@N00/4891959949","title":"DSC_8145"},
  {"photo_url":"4120/4903478347_348668597a","link_url":"48749766@N00/4903478347","title":"DSC_4046"},
  {"photo_url":"4096/4901530949_263e864bb5","link_url":"48749766@N00/4901530949","title":"DSC_3988"},
  {"photo_url":"4122/4903778394_71c163b159","link_url":"38664137@N07/4903778394","title":"DPP_0019"},
  {"photo_url":"4138/4903778188_bc23cf45ee","link_url":"38664137@N07/4903778188","title":"DPP_0016"},
  {"photo_url":"4117/4934292964_3bb35f4940","link_url":"46509322@N00/4934292964","title":"DSC_8611"},
  {"photo_url":"4117/4901945960_21f1dd7608","link_url":"48749766@N00/4901945960","title":"DSC_2667"},
  {"photo_url":"4097/4902052284_3c5aecf783","link_url":"48749766@N00/4902052284","title":"DSC_3418"},
  {"photo_url":"4079/4890199661_a3590c7937","link_url":"19902918@N00/4890199661","title":"DSCF1148"},
  {"photo_url":"4076/4901394251_1dd75e5ccf","link_url":"48749766@N00/4901394251","title":"DSC_2998"},
  {"photo_url":"4079/4901363869_a4a5d5d5e9","link_url":"48749766@N00/4901363869","title":"DSC_2699"},
  {"photo_url":"4102/4901525359_e9618d4a64","link_url":"48749766@N00/4901525359","title":"DSC_3944"},
  {"photo_url":"4101/4901345859_252ba9610c","link_url":"48749766@N00/4901345859","title":"DSC_2540"},
  {"photo_url":"4115/4901393899_4dba8919d9","link_url":"48749766@N00/4901393899","title":"DSC_2994"},
  {"photo_url":"4096/4898141929_db97e43b81","link_url":"46509322@N00/4898141929","title":"YRJ_2119.jpg"},
  {"photo_url":"4122/4901982114_4dc417f32d","link_url":"48749766@N00/4901982114","title":"DSC_3005"},
  {"photo_url":"4099/4891943527_ac9e1b728c","link_url":"96595297@N00/4891943527","title":"DSC_8259"},
  {"photo_url":"4135/4901505453_faa39ab5d7","link_url":"48749766@N00/4901505453","title":"DSC_3775"},
  {"photo_url":"4101/4901929900_38815934e8","link_url":"48749766@N00/4901929900","title":"DSC_2490"},
  {"photo_url":"4115/4901305700_d603cf1794","link_url":"54331619@N00/4901305700","title":"COSCUP 2010 Day 1"},
  {"photo_url":"4076/4901391521_2fb178399c","link_url":"48749766@N00/4901391521","title":"DSC_2969"},
  {"photo_url":"4134/4903478809_99f3f3fa33","link_url":"48749766@N00/4903478809","title":"DSC_4057"},
  {"photo_url":"4095/4903779614_4905868635","link_url":"38664137@N07/4903779614","title":"DPP_0038"},
  {"photo_url":"4074/4905410896_58614cbc5d","link_url":"54331619@N00/4905410896","title":"COSCUP 2010 Day 1"},
  {"photo_url":"4115/4901472343_bae290f088","link_url":"48749766@N00/4901472343","title":"DSC_3478"},
  {"photo_url":"4077/4901955598_49c260dec7","link_url":"48749766@N00/4901955598","title":"DSC_2723"},
  {"photo_url":"4076/4901092374_cde96bbc4b","link_url":"54331619@N00/4901092374","title":"COSCUP 2010 場佈"},
  {"photo_url":"4075/4891957757_35dec77b02","link_url":"96595297@N00/4891957757","title":"DSC_8161"},
  {"photo_url":"4142/4892564928_d6d8f7ced0","link_url":"96595297@N00/4892564928","title":"DSC_8091"},
  {"photo_url":"4100/4893745794_cec3cc18b7","link_url":"12452841@N00/4893745794","title":"P8150918"},
  {"photo_url":"4138/4902019524_bc29ee82e8","link_url":"48749766@N00/4902019524","title":"DSC_3178"},
  {"photo_url":"4082/4901985134_0ea16d8d78","link_url":"48749766@N00/4901985134","title":"DSC_3052"},
  {"photo_url":"4134/4902105502_43cc7405d5","link_url":"48749766@N00/4902105502","title":"DSC_3888"},
  {"photo_url":"4142/4933698859_b3bf1e05f3","link_url":"46509322@N00/4933698859","title":"DSC_8365"}
];

jQuery.each(
  yuren_54,
  function (i, photo) {
    yuren_54[i].photo_url = 'http://farm5.static.flickr.com/' + photo.photo_url + '_s.jpg';
    yuren_54[i].link_url = 'http://www.flickr.com/photos/' + photo.link_url;
  }
);
