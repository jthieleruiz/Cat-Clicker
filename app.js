$(function(){

	var model = {
		init: function() {
			if (!localStorage.cats) {
				localStorage.cats = JSON.stringify([]);
			}
		},
		add: function(obj) {
			var data = JSON.parse(localStorage.cats);
			data.push(obj);
			localStorage.cats = JSON.stringify(data);
		},
		getAllCats: function() {
			return JSON.parse(localStorage.cats);
		}
	};

	var controller = {
		init: function() {

		},
		getCats: function() {

		},
		selectCat: function(){

		},
		clickCat: function(){

		}
		model.init();
		catListView.init();
		catClickView.init();
	};

	var catListView = {
		init: function() {
			this.catList = $('#cat-list');
			catListView.render();
		},
		render: function() {

		}
	}

	var catClickView = {
		init: function() {
			this.catImage = $('#cat-image');
			catClickView.render();
		},
		render: function() {

		}
	}
	controller.init();
});