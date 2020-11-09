$(window).on("onload.init_unique/news", () => {
	app.news = {
		mainX: 0,
		mainY: 0,
		data: undefined,
		loadPosts(newPath, newData) {
			if(!app.templates.news) {
				$.when(
					$.get("/public/templates/subtemplates/news/template_1.tpl"),
					$.get("/public/templates/subtemplates/news/template_2.tpl"),
					$.get("/public/templates/subtemplates/news/template_3.tpl"),
					$.get("/public/templates/subtemplates/news/preview.tpl"),
					$.get("/public/templates/subtemplates/news/post.tpl"),
					$.getJSON("/public/templates/subtemplates/news/localization.json")
				).then((tpl1, tpl2, tpl3, preview, post, localization) => {
					app.templates.news = {
						_templates: [tpl1[0], tpl2[0], tpl3[0]],
						getPost(data) {
							let newTemplate = this._templates[data.template - 1];
							data.texts.forEach((text, index) => { newTemplate = newTemplate.replace("${text_" + index + "}", text); });
							data.images.forEach((image, index) => { newTemplate = newTemplate.replace("${image_" + index + "}", image); });
							return newTemplate;
						},
						_preview: preview[0]
							.replace("${open_post}", localization[0][app.translation.language.code]["open_post"])
							.replace("${read_more}", localization[0][app.translation.language.code]["read_more"])
							.replace("${hide}", localization[0][app.translation.language.code]["hide"]),
						getPreview(data) {
							return this._preview
								.replace("${name}", data.name)
								.replace("${text}", data.texts[0])
								.replace("${image}", data.preview)
								.replace("${article}", data.article);
						}
					};
					$(post[0].replace("${back}", localization[0][app.translation.language.code]["back"])).appendTo(".js-post-wrapper");
					// $(".js-back-btn").click(() => { this.closePost(); });
					app.navigation.wrapPageLinks(".js-post-back-btn");
					
					this.loadPosts(newPath, newData);
				});
				return;
			}
			
			if(!newData) {
				let condition = "";
				if(newPath[1] && Number.isNaN(+newPath[1])) condition = `?tags=${newPath[1]}`;
				// console.log("/data/database/post_query/" + app.translation.language.code + condition);
				
				$.getJSON("/data/database/post_query/" + app.translation.language.code + condition, (data) => {
					this.loadPosts(newPath, data);
				});
				return;
			}
			
			this.data = newData;
			this.generatePreviews();
			this.fillCounts();
			
			if(+newPath[1]) this.openPost(+newPath[1]);
			else this.closePost();
		},
		generatePreviews() {
			$(".js-preview-container").html("");
			for(let rawPost of this.data.posts) {
				let post = $(app.templates.news.getPreview(rawPost));
				post.find(".js-preview-tags-container").html(this.generateTagList(rawPost.tags));
				post.appendTo(".js-preview-container");
			}
			
			$(".js-read-more-btn").click((evt) => {
				let button = $(evt.currentTarget);
				let content = button.parents(".js-post-preview-wrapper").find(".news-card-content");
				let [lastX, lastY] = [window.scrollX, window.scrollY];
				
				content.children(".news-card-content-article").height("auto");
				content.height(content[0].scrollHeight);
				
				window.scrollTo(lastX, lastY);
				
				button.siblings(".js-hide-btn").show();
				button.hide();
			});
			
			$(".js-hide-btn").click((evt) => {
				let button = $(evt.currentTarget);
				let content = button.parent().siblings(".news-card-content");
				
				content.height("");
				content.children(".news-card-content-article").height("");
				
				button.siblings(".js-read-more-btn").show();
				button.hide();
			});
			
			app.navigation.wrapPageLinks(".js-preview-container [navid]");
		},
		fillCounts() {
			for(let key in this.data.counts) $(`.js-count-${key}`).html(this.data.counts[key]);
		},
		generateTag(id, locale) {
			return `<a class="news-page-keyword" navid="news/${id}">${locale}</a>`;
		},
		generateTagList(tags) {
			result = "";
			for(let id in tags) result += this.generateTag(id, tags[id]);
			return result;
		},
		openPost(article = 1) {			
			$.getJSON(`/data/database/post_info/${app.translation.language.code}/${article}`, (data) => {
				[this.mainX, this.mainY] = [window.scrollX, window.scrollY];
				window.scrollTo(0, 0);
				
				$(".js-post-name").html(data.name);
				$(".js-post-content").html(app.templates.news.getPost(data));
				$(".js-post-tags-container").html(this.generateTagList(data.tags));
				
				// Plug
				new GenericSimpleSlider(".js-post-slider", ["/public/images/news/plug_1.jpeg", "/public/images/news/plug_2.jpeg"]);
				new SimpleSlider();
				
				$(".js-news-page").hide();
				$(".js-post-wrapper").show();
			});
		},
		closePost() {
			$(".js-post-wrapper").hide();
			$(".js-news-page").show();
			
			window.scrollTo(this.mainX, this.mainY);
		}
	};
	
	$(".mobile-nav-button").click(() => { $(".blog-column-right").toggleClass("openned"); });
	$(".js-search-btn").click(() => {
		let searchValue = $(".js-search-value").val();
		if(searchValue.length > 0) {
			$.getJSON("/data/database/post_search/" + app.translation.language.code + `?search=${searchValue}`, (data) => {
				app.news.loadPosts(["news"], data);
			});
		}
	});
	$(".js-tags-form input").click(() => {
		let elements = Array.from($(".js-tags-form input"));
		let tags = elements.filter(element => element.checked).map(element => element.name).join("-");
		$.getJSON("/data/database/post_query/" + app.translation.language.code + `?tags=${tags}`, (data) => {
			app.news.loadPosts(["news"], data);
		});
	});
	
	$(window).on({
		"onunload.content": () => { app.news = undefined; }
	});
	
	app.scrollmagic.update();
});