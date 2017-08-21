/* Pecentage */

window.percentomize = function() {

var we_want_all_money = 10000000;
var now_we_already_have = 120000;

/* Do not edit the code below */

var percent = (now_we_already_have / we_want_all_money) * 100;

var x = document.querySelector('.progress-circle-prog');
x.style.strokeDasharray = (percent * 4.65) + ' 999';
var el = document.querySelector('.progress-text');
var from = $('.progress-text').data('progress');
$('.progress-text').data('progress', percent);
var start = new Date().getTime();

setTimeout(function() {
    var now = (new Date().getTime()) - start;
    var progress = now / 700;
    result = percent > from ? Math.floor((percent - from) * progress + from) : Math.floor(from - (from - percent) * progress);
    el.innerHTML = progress < 1 ? result+'%' : percent+'%';
    if (progress < 1) setTimeout(arguments.callee, 10);
}, 10);
}

setTimeout(window.percentomize, 200);


/* Header Mobile Navigation */
