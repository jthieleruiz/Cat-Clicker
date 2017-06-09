	var model = {
		currentCat: null,
		init: function() {
			localStorage.cats = JSON.stringify([]);
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
			model.init();
			catListView.init();
			catClickView.init();
		},
		getCats: function() {
			return model.getAllCats();
		},
		selectCat: function(cat){
			model.currentCat = cat;
		},
		clickCat: function(){
			model.currentCat.count++;
		},
		addCat: function(name, image) {
			model.add({
				name,
				image,
				count: 0
			});
			catListView.render();
		},
		getCurrentCat() {
			return model.currentCat;
		}
	};

	var catListView = {
		init: function() {
			catListView.render();
		},
		render: function() {
			var cats = controller.getCats();
			var catList = $('#cat-list');
			catList.empty();
			cats.forEach(function(currCat) {
				listItem = $('<li/>').appendTo(catList);
				listItem.append(currCat.name);
				listItem.click(function() {
					controller.selectCat(currCat);
					catClickView.render();
					console.log('clicked');
					console.log(currCat);
				});
			});
		}
	}

	var catClickView = {
		init: function() {
			this.catImage = $('#cat-image');
			this.catCounter = $('#cat-count');
			this.catImage.click(function() {
				controller.clickCat();
				catClickView.render();
			});
			catClickView.render();
		},
		render: function() {
			if (controller.getCurrentCat() != null) {
				this.catImage.attr('src', controller.getCurrentCat().image);
				this.catCounter.html(controller.getCurrentCat().count);
				// $('#cat-image').attr('src', controller.getCurrentCat.image);
			}
		}
	}
	controller.init();
	controller.addCat('Cat 1', 'http://i.imgur.com/Cxagv.jpg');
	controller.addCat('Cat 2', 'http://i.imgur.com/b7r1f.jpg');
