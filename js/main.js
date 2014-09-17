// create clock background
  var root = document.getElementById('background');
  root.innerHTML = "<!-- Copyright 2013 Nikolai Rassadin <rassadin@gmail.com>Content is licensed under CC BY-NC-SA 3.0 --><style>#a{width:10em;height:10em;position:relative;border-radius:5em;background:#ccc;box-shadow:inset .05em -.05em 0 #333,inset .17em -.17em 0 #555,inset -.03em -.04em 0 #333,inset -.03em .02em 0 #333,inset -.1em -.1em 0 #555,.1em .3em .2em rgba(0,0,0,.3)}#b{width:9.4em;height:9.4em;top:.3em;left:.3em;position:relative;border-radius:4.7em;background:#fff;box-shadow:inset .04em 0 0 #fff,inset 0 -.06em 0 #ddd,inset .16em -.08em 0 #222,inset -.16em .08em 0 #222,inset .2em .2em 0 #222,.06em -.03em 0 #999,-.1em .1em 0 #777,-.13em -.2em 0 #fff,.13em .2em 0 #222,.13em .3em 0 #333}#c{width:8.9em;height:8.9em;top:.25em;left:.25em;position:relative;border-radius:4.45em;background:#eed;box-shadow:inset .15em .2em .05em rgba(0,0,0,.4),inset .2em .4em .2em rgba(0,0,0,.3),inset 0 .05em .3em rgba(0,0,0,.1),-.16em .08em 0 #444,.16em -.08em 0 #444}#d{width:8.8em;height:8.8em;top:.05em;left:.05em;position:relative;border-radius:4.4em}#e{width:8.18em;height:8.18em;padding-top:4.09em;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;left:.29em;top:.29em;position:absolute;border:.04em solid rgba(0,0,0,.5);border-radius:4.09em}#ii{padding-left:4.34em;position:absolute}b,i{height:8.2em;position:absolute;display:block}b{border:0 solid #222;border-width:.3em 0;width:.12em}i{border:0 solid rgba(0,0,0,.5);border-width:.3em 0;width:.04em}b>i,i>i{transform:rotate(6deg);margin-top:-.3em}b>b{transform:rotate(30deg);margin-top:-.3em}b>i{left:.03em}#f,#g{font:1.2em\/1em WallClock,sans-serif;text-align:center;width:6.8em;color:#222}#g>u>u{letter-spacing:.1em}#g>u>u>u{letter-spacing:0}u{display:block;line-height:1em;text-decoration:none}u>u>u>u{margin:.5em -.55em;padding:0 .05em}u>u>u{margin:0 -1.75em;padding:0 .7em}u>u{margin:-.55em 0;text-align:right;padding:0 1.65em}#f{margin-top:-3.37em}#g{margin-top:-6em}#g u>u{text-align:left}#q{font:.22em\/1em Segoe UI,Helvetica,sans-serif;text-align:center;margin-top:-11.5em;color:#555}.hh,.mm,.ss{width:8em;height:8em;top:.4em;left:.4em;position:absolute}.hh{transform:rotate(-55deg)}.mm{transform:rotate(60deg)}.ss{animation:tick 1s normal infinite steps(25,end)}@keyframes tick{0%{transform:rotate(0deg)}100%,12%{transform:rotate(6deg)}}.s{width:.1em;height:4.8em;top:.6em;left:3.95em;position:relative;background:#a00;outline:transparent solid 1px;animation:a360_10 60s normal infinite steps(60,end)}.sr{width:.3em;height:.3em;background:#a00;margin:-.95em 0 0 3.84em;border-radius:.15em}@keyframes a360_10{0%{transform:translate(0,1em) rotate(0deg) translate(0,-1em)}100%{transform:translate(0,1em) rotate(360deg) translate(0,-1em)}}.m{height:4.8em;left:3.89em;width:.22em;position:relative;background:#222;border:0;animation:a36016 3600s normal infinite linear;outline:transparent solid 1px}@keyframes a36016{0%{transform:translate(0,1.6em) rotate(0deg) translate(0,-1.6em)}100%{transform:translate(0,1.6em) rotate(360deg) translate(0,-1.6em)}}.mr{width:.5em;height:.5em;background:#222;margin:-1.05em 0 0 3.74em;border-radius:.25em}.h{width:.3em;height:3.4em;left:3.85em;position:relative;background:#222;margin-top:1.3em;outline:transparent solid 1px;animation:a36010 43200s normal infinite linear}#sh{width:8em;height:8em;top:.2em;left:.1em;position:absolute}#sh .h,#sh .m,#sh .mr,#sh .s{background:#ddc;box-shadow:0 0 .05em #ddc,0 0 .025em #ddc}#k{width:8.8em;height:8.8em;position:absolute;border-radius:4.4em;box-shadow:inset .45em .9em .05em rgba(250,252,253,.2)}#clock b>i,#clock i>i{-ms-transform:rotate(6deg);-webkit-transform:rotate(6deg)}#clock b>b{-ms-transform:rotate(30deg);-webkit-transform:rotate(30deg)}#clock .hh{-webkit-transform:rotate(-55deg)}#clock .mm{-webkit-transform:rotate(60deg)}#clock .ss{-webkit-animation:tick 1s normal infinite steps(25,end)}@-webkit-keyframes tick{0%{-webkit-transform:rotate(0deg)}100%,12%{-webkit-transform:rotate(6deg)}}#clock .s{-webkit-animation:a360_10 60s normal infinite steps(60,end)}@-webkit-keyframes a360_10{0%{-webkit-transform:translate(0,1em) rotate(0deg) translate(0,-1em)}100%{-webkit-transform:translate(0,1em) rotate(360deg) translate(0,-1em)}}#clock .m{-webkit-animation:a36016 3600s normal infinite linear}@-webkit-keyframes a36016{0%{-webkit-transform:translate(0,1.6em) rotate(0deg) translate(0,-1.6em)}50%{-webkit-transform:translate(0,1.6em) rotate(180deg) translate(0,-1.6em)}100%{-webkit-transform:translate(0,1.6em) rotate(360deg) translate(0,-1.6em)}}#clock .h,#css3fixed:checked~#clock .hh{-webkit-animation:a36010 43200s normal infinite linear}#clock{transition:none;-webkit-transition:none;-moz-transition:none;-o-transition:none}#clock b:nth-child(2){transform:rotate(30deg);-ms-transform:rotate(30deg);-webkit-transform:rotate(30deg)}#clock b:nth-child(3){transform:rotate(60deg);-ms-transform:rotate(60deg);-webkit-transform:rotate(60deg)}#clock b:nth-child(4){transform:rotate(90deg);-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg)}#clock b:nth-child(5){transform:rotate(120deg);-ms-transform:rotate(120deg);-webkit-transform:rotate(120deg)}#clock b:nth-child(6){transform:rotate(150deg);-ms-transform:rotate(150deg);-webkit-transform:rotate(150deg)}#clock i:nth-child(1){transform:rotate(12deg);-ms-transform:rotate(12deg);-webkit-transform:rotate(12deg)}#clock i:nth-child(2){transform:rotate(18deg);-ms-transform:rotate(18deg);-webkit-transform:rotate(18deg)}#clock i:nth-child(3){transform:rotate(24deg);-ms-transform:rotate(24deg);-webkit-transform:rotate(24deg)}#clock #f{-webkit-transform:translate(0,.05em)}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){#css3fixed:checked~#clock b,#css3fixed:checked~#clock i{border-left:solid 0 #fff;border-right:solid 0 #fff}}#clock .s{animation:a360_10of 60s normal infinite steps(60,end)}@keyframes a360_10of{0%{transform:translate(0,1em) rotate(0deg) translate(0,-1em);-o-transform:translate(0,2em) rotate(0deg) translate(0,-2em)}100%{transform:translate(0,1em) rotate(360deg) translate(0,-1em);-o-transform:translate(0,2em) rotate(360deg) translate(0,-2em)}}@font-face{font-family:WallClock;asrc:url(wallclock.eot)}@font-face{font-family:WallClock;src:url(data:font\/otf;charset=utf-8;base64,T1RUTwANAIAAAwBQQ0ZGIE\/fdygAAAIYAAAKvERTSUcAAAABAAAM1AAAAAhHUE9Tlz+W7wAADNwAAABwT1MvMl6AbIAAAADcAAAAYGNtYXASvinKAAAPEAAAAfhnYXNwAAAAEAAAAfgAAAAIaGVhZP9vfJwAAAGIAAAANmhoZWENKwZOAAABXAAAACRobXR4OGL+jgAAAcAAAAA4a2VybgALABoAAAIAAAAAGG1heHAADlAAAAABgAAAAAZuYW1lzcoX5QAADUwAAAHDcG9zdAADAAAAAAE8AAAAIAACBLIBkAAFAAAFRwVHAAAA3AVHBUcAAAI1AAAAAAAAAgAFBAAAAAAAAAAAAAEAAAAAAAAAAAAAAABQZkVkAEAAIAA5B9j\/2P+oB4AAKAAAAAEAAAAAAAAAAAAAACAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAfY\/9j\/qAZo\/z\/\/\/wZpAAEAAAAAAAAAAAAAAAAAAAAOAABQAAAOAAAAAQAAAAEAALHqAIpfDzz1ACkIAAAAAADNPFJLAAAAAM1P3dj\/PwAABmoHgAAAAAMAAAABAAAAAAIgAAAAAAAAAAAAAAMgAAABvAAABXwAAAV0\/z8FnQADBaz\/SAXJAAAFEwABBmgAAAXgAAIECAABAAEAAf\/\/AA8AAAABAAAAFAABAAEABgAAAAAABAAEAAABAAQEAAEBAQp3YWxsY2xvY2sAAQIAAQBJ+B4A+BsC+BwD+B0EiwwBiwwCiwwDiwwEHqAASIL\/i4seoABIgv+LiwwHLXf5V\/o+BR0AAACuDx0AAAADHQAACrUSHQAAAMkRAAcBARIbISYvOD9XYWxsQ2xvY2sgTnVtYmVyc1dhbGxDbG9ja05vcm1hbDEsMDAwY29udHJvbEJTY29udHJvbEhUZ2x5cGgxNAAAAQEAAYsBjAABABIAEwAUABUAFgAXABgAGQAaABEADgQAAAABAAAAKAAAACoAAAAsAAAALwAAAGUAAAFVAAAChQAAAzEAAAQxAAAFmgAABi4AAAeRAAAIuwAACa74tM+LFYscBVX4tIuLHPqr\/LSLBc\/PFfgsi4scBM38LIuLHPszBQ6LDosO+bQO+FD3tfhkFYuBhoWAiwj7lIsFgYuGkYqVCIscBXAFjJaQkJWLCPeUiwWWi5CGi4AIixz6kAUOHAV8HAV4+WQVi5aGkICLCP2uiwWBi4qOlJD32vdK90Lso5jxxtXHuce6yaLWi+WLw4O+erl7uXWyb6pxq2mmYaEIY6JjnWGXY5hclVeTV5NdkGGNYo1ejFmLQYtAh0GCQYNOgVt\/W4Bdfl99CF99b4F+hX+FgIeDiIKGiYSQgQj3EvuEBZGCkoiUj52TopWpl6mXy5vtnu2f8JTxi\/cbi+h+vW++cKRii1SLZ4JseG8IeXF2dnR9e4IyWfs2Mfs2MfsxNPsuNQj7evsUBYKGhoOLgAiL+5YFi4GRhZWLCBwFWIsFlouQkYuVCIv3lAUOHAV0+v8cBSgVg5GJkZGTCPd093QFk5OPlYuVCIv3kAWMloqRiYyKjYWLgIsIHPrQiwWBi4aGioAIi\/uUBYyBkIWViwj6LIsFlouMh4ODCPtM+0IFhYWDh3+LCPsiiwWBi4aGioAIi\/uQBYyBkIWViwj3xosFl4uVipWIkIqRiZGIk4mYhZyBnYKbgJl+mn+YeZV0l3WRc4pxjGeDbHlvCHtxeHRzeXV6bnxmf2h\/bYNzhnWHbodniGmJd4mFi4eLgYt9i\/thi\/tby\/tU9xQIeZkFg5GDioOECPtY+1gFhYOMhJKEkYeSh5KFx1\/MY9Fm0WfnafcGafcGa\/cFevcEi9SL0pLRmdOZzqLLqQjNqsOwu7W9trK\/p8mpyZrPitSM43XYXctfzFK\/RbMIc5kFDhwFnRwEmxwHcBWLloaQgIsI+4CLBYGLg4eDgwj+Cv4KBYOFh4KLgAiL+6AFjIGQhZWLCPnsiwWWi5CGi4AIi\/t8BYyBkIWViwj3lIsFlouQkYuVCIv3fAWMlpCQlYsI93SLBZaLkJGLlQiL95QFi5aGkICLCPt0iwWBi4aRipUIi\/oMBfu0\/gwVi4GGhYCLCPxgiwWBi4mPkZMI+Gr4agWTko+Ji4AIi\/xgBQ4cBawcBaz6KhWL43baYc9h0FDDPbf7DM77K6z7S4v7OYv7IXX7CF0IdYMFgoeGj4uVCIv3YAWLlpGQlYsI+siLBZaLjpCHlAj7DveWBYaWg5CAiwgc+yqLBYGLhYaLgAiL\/agFi4GRhZWLCPe8iwWWi5aNlY+PjpGOkY3HpsKcvZK9k8iO04vPi8iGv4HBgbR\/qXyqfaR6n3cIn3iZeZF7knuOfIt8i1JfWDNdM177BnT7IItCi0SURZtGnFWcY51knVamSK0Id5UFgpGCioGECPuS+1AFg4WLhZOFj4mRh5GH95\/7OfemOPeti\/eIi\/dUvPcg7Pcg7dH3EYv3LQgOHAXJ+bQcBWAV+yyL+yBu+xZQCGl7BYeJiIqJjYmNi46Mj4+dkJqQmK7pxdLcvd297aT3CIv3B4v2b+1RCKd7BZOGk4yRkQjX3wWTk5OTkZMI190FkpKKkoOThpGDkoCTgZRzmmehZ6Fln2ObY5xZmk2ZTplNkkyL+4aL+1lA+yr7Kgj7KvsqQPtai\/uLi2mNaI5pj2mTYphamVucXqFhoWKrYbNftWC6ZsFswm3Pct13CN1454Hwi8aLxpDFlMaVx5zJo8mkwqq5sLqxsbypyanJmtGL2Iuzh7KBsAiCsXezbbdtt2WxW6tdq0mmNaA3oSmV+wOLCIv9SBUzizaaOag5qU28YNAIe6kFh5WOkpSQko+UkZaRl5Kil62crp2umq2Yrpmzl7mVuZa2kLOL0ovIhr+BCL+BsoCjfqR\/nnuZd5l4k3yNgI2BjH+LfYtjfmlxbXFuanVie2N9Yn9hgwhihGKHY4sIDhwFE5wcB0gVgYuGhoqACIv7lAWMgZCFlYsI+nCLBZaLjYeEg1lWXVhhWzktSztbSV1KZUprSzX7SVr7Rn77QwiJawWMgZCFlYsI97CLBZaLkJGLlYuRi5OLl473D6X3Fbz3HMT3MNz3LvX3LKOrqrKxubO5rLGlqAi1uQWTk4+Vi5UIi\/eUBYuWhpCAiwgc+xCLBQ4cBmgcBVscBOgVgZGLkZORmZaXlJWTysmqzYvTi\/cCSuf7F9f7Ftf7NLH7VIv7Uov7NGX7GD\/7Fj9KL4r7AgiMQ6pJyU8Ir20FlYWLhX+FgIeAh4GF+zI7PPsBivsfjC6vNtE\/0z\/uUPcQX\/cSYPcgdfcsi\/cui\/cgofcQtgj3ErfuxtHX09ev4Iroi\/cfPPcB+zPbCGuZBf4o94oVi6GWoKGdoZ+zm8SZxZnTkt+L0IvGh72DvoOxgaV9pX6efZd9l32RfIt7CIt5hnmAe4F7eXtwe3F7ZX9YglmDT4ZDi0yLUpBZlFuVZJhvmXGbdpt9mwh+nISbi5sI+OD9mhVGfUGDPIs9i0GTRZlGmlKdX6FgoWiicaJyo36gi52LnpigpKKlo66htqEIt6HEntCZ0ZrVktmL2ovVhNB80X3EeLZ1t3WudaRzpXSYdop4jHl+dnFzCHJ0aHRfdWB1UnlFfAgOHAXgHATz+RQV9yz3JNf3VIv3gov3akT3Ovsj9wz7IvcM+1nH+5GL+2iL+z1h+xI1+xA2TfsJivsojHONdI1zj3WTb5drCJlsm22eb59vp2+vb69vtXS7d7x5x3vTfdV\/24Tii\/cmi\/cmrfcmzwivnQWPjY6LjYmOiouIiYeHeod8h39pKU8\/NFU1ViBw+xSL+wyL+ya7+0DpCG+bBYKRgomDgwj7SPtSBYWDjYSThJKHlYWYg\/eC+yH3aUT3T4v3iov3WtP3KPckCPzG+OwVYotijWOPZI9ek1mVWpZjnWykbaV8qoqwjK6YqaWlpqWpnqyXrZeylbeSCLmTrI+gi6GMn4uci\/d2i\/csU9n7BAiZcwWRgomDgYSBg4CEfoT7IDb7HmD7HIsIDvqc+KX4VBWDi4SLhIsIh4sF+xuP+wm+Kesq7Fj3CIf3HAiLkQWLkouUi5UIi\/f8BYuWi5aLlYuNi46LkJL3HMD3CO\/q7+v3C7r3HYv3IIv3C1vtK+8rwPsIkfscCIuDBYuBi4CLgAiL+\/wFi4GLgIuACIuDBYX7GVj7BissLS37B1n7HIUIhYsF+4L6NhWJhQWLgYuAi4AIi\/v8BYuBjH2MewiLiwWRUqRbtWO3ZL53xYvHi76ftbO3s6S8kcQIi5MFi5WLlYuVCIv3\/AWLlouWi5WMjYqOiZCFxXK7X7FhslieUYtSi1h3X2NgY3JbhVEIDouLBgAAAQEAAAABAAAAAAABAAAACgAwAEoAAkRGTFQADmxhdG4AGgAEAAAAAP\/\/AAEAAQAEAAAAAP\/\/AAEAAAACa2VybgAOa2VybgAUAAAAAQAAAAAAAQAAAAEABAACAAAAAQAIAAEAEAAAAAAAAQAMAAEABAACAAEABAAEAAAAAAAJAHIAAQAAAAAAAwAkAAAAAQAAAAAABgAJACQAAwABBAkAAAByAC0AAwABBAkAAQASAJ8AAwABBAkAAgAOALEAAwABBAkAAwBIAL8AAwABBAkABAAiAQcAAwABBAkABQAWASkAAwABBAkABgASAT9Gb250Rm9yZ2UgMi4wIDogd2FsbGNsb2NrIDogOS0yLTIwMTN3YWxsY2xvY2sAqQAyADAAMQAzACAAdwB3AHcALgBjAHIAOABzAG8AZgB0AHcAYQByAGUALgBuAGUAdAAgACAARABFAE0ATwAgAC0AIABuAG8AdAAgAGYAbwByACAAYwBvAG0AbQBlAHIAYwBpAGEAbAAgAHUAcwBlAC4AVwBhAGwAbABDAGwAbwBjAGsATgB1AG0AYgBlAHIAcwBGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAHcAYQBsAGwAYwBsAG8AYwBrACAAOgAgADkALQAyAC0AMgAwADEAMwBXAGEAbABsAEMAbABvAGMAawAgAE4AdQBtAGIAZQByAHMAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAYQBsAGwAYwBsAG8AYwBrAAAAAAMAAAADAAAAHgABAAAAAACIAAMAAQAAAY4AAAAEAGoAAAAOAAgAAgAGAAoADQATAB0AIAA5\/\/8AAAAIAA0AEwAdACAAMP\/\/AAAAAAAAAAAAAAAAAAEADgASABIAEgASABIAAAABAAIAAgACAAIAAQADAA0ABAAFAAYABwAIAAkACgALAAwAAAEGAAABAAAAAAAAAAECAgAAAgAAAAAAAgAAAAAAAAAAAAEAAAMAAAAAAAAAAAAAAAAAAAANBAUGBwgJCgsMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAagAAAA4ACAACAAYACgANABMAHQAgADn\/\/wAAAAgADQATAB0AIAAw\/\/8AAAAAAAAAAAAAAAAAAQAOABIAEgASABIAEgAAAAEAAgACAAIAAgABAAMADQAEAAUABgAHAAgACQAKAAsADA==) format(\'opentype\');font-weight:400;font-style:normal}body{padding:0;margin:0;width:100%;height:100%}#clock{z-index: 1;font-size:4.7em;display:block;position:absolute;left:50%;top:50%;margin:-5em 0 0 -5em}</style><link href=\"http:\/\/tezla.ru\/rassadin\/wall-clock-demo\/\" rel=\"stylesheet\" type=\"text\/css\"\/><div id=\"clock\"><div id=\"a\"><div id=\"b\"><div id=\"c\"><div id=\"d\"><div id=\"sh\"><div class=\"hh\"><div class=\"h\"><\/div><\/div><div class=\"mm\"><div class=\"m\"><\/div><div class=\"mr\"><\/div><\/div><div class=\"ss\"><div class=\"s\"><\/div><\/div><\/div><div id=\"ii\"><b><i><\/i><i><\/i><i><\/i><i><\/i><\/b><b><i><\/i><i><\/i><i><\/i><i><\/i><\/b><b><i><\/i><i><\/i><i><\/i><i><\/i><\/b><b><i><\/i><i><\/i><i><\/i><i><\/i><\/b><b><i><\/i><i><\/i><i><\/i><i><\/i><\/b><b><i><\/i><i><\/i><i><\/i><i><\/i><\/b><\/div><div id=\"e\"><div id=\"f\"><u>12<u>1<u>2<u>3<\/u>4<\/u>5<\/u><\/u><\/div><div id=\"g\"><u><u>11<u>10<u>9<\/u>8<\/u>7<\/u>6<\/u><\/div><div id=\"q\"><a href=\"\" style=\"position:relative;z-index:1000;color:#222;text-decoration:none;\">quartz<\/a><\/div><\/div><div class=\"hh\"><div class=\"h\"><\/div><\/div><div class=\"mm\"><div class=\"m\"><\/div><div class=\"mr\"><\/div><\/div><div class=\"ss\"><div class=\"s\"><\/div><div class=\"sr\"><\/div><\/div><div id=\"k\"><\/div><\/div><\/div><\/div><\/div><\/div>"

// slide background down
  $(document).ready(function(){
  	setTimeout(function(){
  		$('.box1').slideDown(1000);
  	}, 800 );
  	 	setTimeout(function(){
  		$('.contentBox1').slideDown(500);
  	}, 1800 );
  
  });

// box controllers
  $('.box2').css('display','none');
  $("#go1").click(function(){
    $('.box1').css('display','none');
    $('.box2').css('display','block');
    $('.contentBox2').css('display','block');
  });

$(".citySwitch1").click(function(event){
  event.preventDefault();
  document.getElementById('firstCity').value = '';
  $('.input-group-1').toggle();
});
$(".citySwitch2").click(function(event){
  event.preventDefault();
  document.getElementById('secondCity').value = '';
  $('.input-group-2').toggle();
});


$('#convert').click(function(event){
  event.preventDefault();
  search();});

// Begin Converter
function search(){
  // Arrays for matching Timezone inputs to cities that can be called through the google API
  var UTCs = ["-12", "-11", "-10", "-09:30", "-09", "-08", "-07", "-06", "-05", "-04:30", "-04", "-03:30", "-03", "-02:30", "-02", "-01", "0", "+01", "+02", "+03", "+03:30", "+04", "+04:30", "+05", "+05:30", "+05:45", "+06", "+06:30", "+07", "+08", "+08:45", "+09", "+09:30", "+10", "+10:30", "+11", "+11:30", "+12", "+12:45", "+13", "+13:45", "+14"];
  var UTCCities = ["Baker Island", "Jarvis Island", "Honolulu", "Marquesas Islands", "Anchorage", "Los Angeles", "Phoenix", "Chicago", "New York", "Caracas", "Santiago", "St. John's", "Buenos Aires", "Newfoundland", "Fernando de Noronha", "ittoqqortoormiit", "London", "Belgrade", "Athens", "Nairobi", "Tehran", "Dubai", "Kabul", "Karachi", "Dehli", "Kathmandu", "Dhaka", "Yangon", "Jakarta", "Perth", "Eucla", "Tokyo", "Adelaide", "Canberra", "Lord Howe Island", "Vladivostok", "Norfolk Island", "Auckland", "Chatham Islands", "Samoa", "Chatham Islands", "Line Islands"];

  var inputTime = $('#time').val() * 3600000;
  var date = new Date();
  
  // determine UTC time
  var currentTime = date.getTime(); //get local time
  var currentOffset = date.getTimezoneOffset() * 60000; //get local offset in milliseconds
  currentTime = (currentTime + currentOffset) / 1000; //currentTime is UTC

  // get input values
  var firstCity, secondCity;

  // determine first City or Timezone
  if($('.input-group-1').get(0).style.cssText === 'display: none;'){
    // grab end of timezone string for UTC value
    firstCity = $('#firstTimezone').val();
    firstCity = firstCity.substr(firstCity.lastIndexOf('|') + 2);
    firstCity = UTCCities[UTCs.indexOf(firstCity)]; // find corresponding city to timezone
  } else {
    // grab city string for ajax call
    firstCity = encodeURIComponent($('#firstCity').val());
  };

  // determine second city or timezone
  if($('.input-group-2').get(0).style.cssText === 'display: none;'){
    secondCity = $('#secondTimezone').val();
    secondCity = secondCity.substr(secondCity.lastIndexOf('|') + 2);
    secondCity = UTCCities[UTCs.indexOf(secondCity)];
  } else {
    secondCity = encodeURIComponent($('#secondCity').val());
  };

  // begin Ajax calls
      $.ajax({
        url: "http://maps.googleapis.com/maps/api/geocode/json?address=" + firstCity + "&sensor=false",
        success: function (data, textStatus, jqXHR) {

            var lat1 = data.results[0].geometry.location.lat;
            var lng1 = data.results[0].geometry.location.lng;
            $.ajax({
                url: "https://maps.googleapis.com/maps/api/timezone/json?sensor=false&location=" + lat1 + "," + lng1 + "&timestamp=" + currentTime,
                success: function (data1, textStatus, jqXHR) {
                    var firstCityTimeZone = data1.timeZoneName;
                    var firstCityTime = currentTime + (data1.dstOffset + data1.rawOffset);
                    $.ajax({
                        url: "http://maps.googleapis.com/maps/api/geocode/json?address=" + secondCity + "&sensor=false",
                        success: function (data2, text, jqXHR) {
                            var lat2 = data2.results[0].geometry.location.lat;
                            var lng2 = data2.results[0].geometry.location.lng;
                            $.ajax({
                                url: "https://maps.googleapis.com/maps/api/timezone/json?sensor=false&location=" + lat2 + "," + lng2 + "&timestamp=" + currentTime,
                                success: function (data3, text, jqXHR) {
                                    var secondCityTimeZone = data2.timeZoneName;
                                    var secondCityTime = currentTime + (data3.dstOffset + data3.rawOffset);
                                    var totalOffsetTime = inputTime + (secondCityTime * 1000 - firstCityTime * 1000);
                                    totalOffsetTime = Math.abs(totalOffsetTime / 1000 / 60 / 60);

                                    var answer;
                                    if (totalOffsetTime === 36) {
                                        answer = "12 PM next day";
                                    } else
                                    if (totalOffsetTime > 36) {
                                        answer = (totalOffsetTime - 36) + " PM next day";
                                    } else
                                    if (totalOffsetTime === 24) {
                                        answer = "12 AM next day";
                                    } else
                                    if (totalOffsetTime > 24) {
                                        answer = (totalOffsetTime - 24) + " AM next day";
                                    } else 
                                    if (totalOffsetTime > 12) {
                                        answer = (totalOffsetTime - 12) + " PM";
                                    } else 
                                    if (totalOffsetTime === 12) {
                                      answer = "12 PM";
                                    } else
                                    if (totalOffsetTime === 0){
                                      answer = "12 AM";
                                    } else {
                                        answer = totalOffsetTime + " AM";
                                      }
                  
                                    document.getElementById("results").innerHTML = "The time will be " + answer;
                                }    
                            });
                        }
                    });
                }
            });
        }
     });

}