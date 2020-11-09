<div class="news-card-wrapper flex wrap relative scroll1 js-post-preview-wrapper" id="scroll-1">
	<div class="news-card-img">
		<img src="/public/images/news/${image}.jpeg" alt="" width="100%">
	</div>
	<div class="news-card-content">
		<h2>${name}</h2>
		<article class="news-card-content-article">
			<p>${text}</p>
		</article>
	</div>
	<div class="news-card-footer flex nowrap">
		<div class="news-card-keywords-wrapper js-preview-tags-container">
			<a class="news-card-keyword">Новинки</a>
			<a class="news-card-keyword">Mariole life-style</a>
			<a class="news-card-keyword">Одежда</a>
		</div>
		<div class="news-card-button-wrapper">
			<button class="hide-news js-hide-btn">${hide}</button>
			<button class="read-more js-read-more-btn">${read_more}</button>
			<button class="read">
				<a class="js-open-post-btn" navid="news/${article}">${open_post}</a>
			</button>
		</div>
	</div>
</div>