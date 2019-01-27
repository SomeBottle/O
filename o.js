var $ = new Object();
$.get = function(url, sf) {
	var x = new XMLHttpRequest();
	x.open('get', url, true);
	x.send(null);
	x.onreadystatechange = function() {
		if (x.readyState == 4 && x.status == 200) {
			sf.success(x.responseText);
		} else if (x.readyState == 4 && x.status !== 200) {
			sf.failed(x.status);
		}
	}
}
var e = document.getElementById('sc');
var el = document.getElementById('l');
$.get('https://api.github.com/repos/SomeBottle/O/contents/v', {
	success: function(t) {
		el.style.display='none';
		var i = JSON.parse(t);
		var h='<h3>V</h3><ul>';
		for(var p in i){
			h=h+'<li><a href=\''+i[p].path+'\' target=\'_blank\'>'+i[p].name+'</a></li>';
		}
		h=h+'</ul>';
		e.innerHTML=e.innerHTML+h;
	},
	failed: function(t) {
		e.innerHTML = '<h3>Load Failed</h3>';
	}
});
$.get('https://api.github.com/repos/SomeBottle/O/contents/p', {
	success: function(t) {
		el.style.display='none';
		var i = JSON.parse(t);
		var h='<h3>P</h3><ul>';
		for(var p in i){
			h=h+'<li><a href=\''+i[p].path+'\' target=\'_blank\'>'+i[p].name+'</a></li>';
		}
		h=h+'</ul>';
		e.innerHTML=e.innerHTML+h;
	},
	failed: function(t) {
		e.innerHTML = '<h3>Load Failed</h3>';
	}
});
$.get('https://api.github.com/repos/SomeBottle/O/contents/z', {
	success: function(t) {
		el.style.display='none';
		var i = JSON.parse(t);
		var h='<h3>Z</h3><ul>';
		for(var p in i){
			h=h+'<li><a href=\''+i[p].path+'\' target=\'_blank\'>'+i[p].name+'</a></li>';
		}
		h=h+'</ul>';
		e.innerHTML=e.innerHTML+h;
	},
	failed: function(t) {
		e.innerHTML = '<h3>Load Failed</h3>';
	}
});