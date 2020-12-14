$(window).on("onload.init_unique/news", () => {
	app.news = {
		mainX: 0,
		mainY: 0,
		data: undefined,
		loadTemplates(callback) {
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
				
				let wrapper = $(".js-post-wrapper");
				wrapper.children().remove();
				$(post[0].replace("${back}", localization[0][app.translation.language.code]["back"]))
					.css("top", $("#headerContainer").height())
					.appendTo(wrapper);
				
				callback();
			});
		},
		loadPosts(newPath, callback) {
			let condition = newPath[1] && Number.isNaN(+newPath[1]) ? `?tags=${newPath[1]}` : "";
			$.getJSON({
				url: "/data/database/post_query/" + app.translation.language.code + condition,
				success: (data) => { callback(data); }
			});
		},
		updateSelection(newPath, newData) {
			if(!app.templates.news) {
				this.loadTemplates(() => {
					app.navigation.wrapPageLinks(".js-post-back-btn");
					this.updateSelection(newPath, newData);
				});
				return;
			}
			
			if(this.data) {
				if(newData) this.routeAddress({ data: newData });
				else {
					if(newPath[1] && Number.isNaN(+newPath[1])) this.loadPosts(newPath, (data) => { this.routeAddress({ path: newPath, data: data }); });
					else this.routeAddress({ path: newPath });
				}
			} else this.loadPosts(newPath, (data) => { this.routeAddress({ path: newPath, data: data }); });
		},
		routeAddress(config = {}) {
			if(config.data) {
				this.data = config.data;
				this.generatePreviews();
				this.fillCounts();
			}
			
			if(config.path) {
				if(Number.isNaN(+config.path[1])) this.closePost(true, true);
				else this.openPost(+config.path[1]);
			}
		},
		generatePreviews() {
			$(".js-preview-container").html("");
			for(let rawPost of this.data.posts) {
				let post = $(app.templates.news.getPreview(rawPost));
				post.find(".js-preview-tags-container").html(this.generateTagList(rawPost.tags));
				post.appendTo(".js-preview-container");
			}
			
			$(".js-read-more-btn").click((evt) => {
				let wrapper = $(evt.currentTarget).hide().parents(".js-post-preview-wrapper");
				wrapper.find(".js-hide-btn").show();
				
				let [lastX, lastY] = [window.scrollX, window.scrollY];
				
				let content = wrapper.find(".news-card-content");
				let article = content.find(".js-post-preview-content");
				
				article.height(article[0].scrollHeight);
				content.height(content[0].scrollHeight);
				
				window.scrollTo(lastX, lastY);
			});
			
			$(".js-hide-btn").click((evt) => {
				let wrapper = $(evt.currentTarget).hide().parents(".js-post-preview-wrapper");
				wrapper.find(".js-read-more-btn").show();
				
				wrapper.find(".news-card-content").add(wrapper.find(".news-card-content-article")).height("");
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
		openPost(article = 1, post) {
			post ??= this.data.posts.find(entry => entry.article == article);
			if(!post) {
				$.getJSON({
					url: `/data/database/post_info/${app.translation.language.code}/${article}`,
					success: (data) => { this.openPost(article, data); }
				});
				return;
			}
			
			[this.mainX, this.mainY] = [window.scrollX, window.scrollY];
			window.scrollTo(0, 0);
			
			$(".js-post-name").html(post.name);
			$(".js-post-content").html(app.templates.news.getPost(post));
			$(".js-post-tags-container").html(this.generateTagList(post.tags));
			
			// Plug
			new GenericSimpleSlider(
				".js-post-slider",
				["/public/images/news/plug_1.jpeg", "/public/images/news/plug_2.jpeg"]
			);
			new SimpleSlider();
			
			this.togglePage(false);
			this.togglePost(true);
			
		},
		closePost(doScroll = true, immediately = false) {
			this.togglePage(true);
			this.togglePost(false, immediately ? 0 : null);
			
			if(doScroll) window.scrollTo(this.mainX, this.mainY);
		},
		togglePage(enabled) {
			$(".js-news-page").toggleClass("backgrounded", !enabled).show();
		},
		togglePost(enabled, timeout = 800) {
			let post = $(".js-post-wrapper").css("opacity", enabled ? 1 : 0);
			if(enabled) post.css("display", "block");
			else setTimeout(() => { post.hide(); }, timeout);
		}
	};
	
	$(".mobile-nav-button").click(() => { $(".blog-column-right").toggleClass("openned"); });
	$(".js-search-form").on("submit", () => {
		let searchValue = $(".js-search-value").val();
		if(searchValue.length > 0) {
			$.getJSON("/data/database/post_search/" + app.translation.language.code + `?search=${searchValue}`, (data) => {
				app.news.updateSelection(["news"], data);
			});
		}
	});
	$(".js-tags-form input").click((evt) => {
		evt.currentTarget.parentElement.classList.toggle("active");
		let elements = Array.from($(".js-tags-form input"));
		let tags = elements.filter(element => element.checked).map(element => element.name).join("-");
		$.getJSON("/data/database/post_query/" + app.translation.language.code + `?tags=${tags}`, (data) => {
			app.news.updateSelection(["news"], data);
		});
	});
	
	app.scrollmagic.update();
	
	$(window).on({
		"onlanguagechange.content": () => {
			app.templates.news = undefined;
			app.news.data = undefined;
			app.news.updateSelection(app.navigation.path);
		},
		"onunload.content": () => { app.news = undefined; }
	});
});