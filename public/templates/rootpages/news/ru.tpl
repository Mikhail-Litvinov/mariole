Styles: news;
Scripts: common/SimpleSlider, unique/news;
Title: Новости;
<div class="content-wrapper-full-width js-news-page" style="display: none;">
	<div class="mobile-nav-news ">
		<div class="mobile-nav-button">
			<img src="/public/images/button.png" alt="" width="100%" class="mob-open-btn">
		</div>
	</div>
	<div class="blog-wrapper flex nowrap">
		<div class="blog-column-left flex wrap js-preview-container">
			<!--
			<div class="news-card-wrapper flex wrap relative scroll2" id="scroll-2">
				<div class="news-card-img">
					<img src="/public/images/gallery/img filler 16x9.jpg" alt="" width="100%">
				</div>
				<div class="news-card-content">
					<h2>Название новости</h2>
					<article class="news-card-content-article">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum eos excepturi
							repudiandae omnis quasi, adipisci ducimus ut officia iure quibusdam pariatur
							repellendus, ipsa unde vitae odio libero dolorem eligendi aspernatur hic quae. Quae
							neque voluptates blanditiis nemo aut ut a et quis hic. Accusamus, illum natus aperiam,
							magnam quasi tempora neque, cumque quo eligendi facilis fugit atque! Beatae quae
							reprehenderit aut fugit laborum, dolore, maiores unde ipsam maxime impedit doloremque?
							Corrupti ipsa, eum minima nihil expedita consequuntur eveniet, quas deleniti maiores rem
							voluptatum corporis sed nobis aut libero praesentium minus vitae tenetur quisquam
							perferendis reprehenderit? Tempore laudantium necessitatibus aut. Obcaecati fugit
							pariatur debitis. Earum maiores debitis, dolorem provident praesentium dolore atque
							suscipit quis, odit dolorum officiis quos nemo nesciunt. Enim veritatis obcaecati nihil!
							Cupiditate, tempore maxime. Velit natus libero maiores praesentium eligendi minus
							recusandae dolorem sit explicabo dolorum reiciendis consequuntur accusantium error
							sapiente unde quos repellendus illum, atque cumque expedita vero voluptas quo nihil?
							Consectetur consequatur fuga porro neque officia, facilis quae dolores cupiditate sequi,
							voluptatibus at ratione sit vitae minus eum laborum molestias aspernatur. Odio odit
							deleniti repellendus reprehenderit non dicta porro delectus sequi quod sapiente deserunt
							in, doloremque distinctio assumenda sit consequatur ratione praesentium beatae,
							obcaecati modi architecto suscipit eligendi voluptate voluptas. Dolor at nemo magnam
							velit, quaerat recusandae accusamus eius nihil est! Dolore enim unde laboriosam odit
							illum necessitatibus quas alias voluptas reiciendis, aspernatur reprehenderit dolor,
							veniam sed beatae? Consectetur amet suscipit ipsum! Voluptate ab quibusdam quo nostrum
							recusandae sint. Ducimus vero temporibus sint excepturi repellendus, error incidunt
							fuga, maxime adipisci soluta non nemo beatae mollitia voluptates ut a iste. In odit nemo
							consequuntur ducimus recusandae eveniet repudiandae dolores eos molestiae esse
							voluptatum sequi perferendis distinctio officia at, autem voluptate ipsum. Incidunt
							perferendis voluptas quae deleniti ab laboriosam vel qui neque ipsam placeat similique
							maxime magni, hic, eius voluptatum quidem dolore. Enim, officiis dolores sint eaque
							impedit aperiam ea soluta laboriosam deleniti accusantium quas! Praesentium velit
							laborum itaque. Eveniet voluptate consectetur porro, est ipsum explicabo vero ut atque,
							mollitia ducimus in unde, aperiam aliquam. Laborum repudiandae fugit commodi nihil harum
							dolore blanditiis molestiae dolores ad impedit aspernatur fugiat distinctio dolor
							reprehenderit at velit sint quibusdam sequi iste, magnam quos nobis? Voluptas odit
							beatae aspernatur culpa magnam itaque unde possimus illo. Aliquam quas ad nemo quibusdam
							autem? Tempore, doloremque adipisci! Animi cupiditate impedit eligendi labore quibusdam
							laboriosam quae numquam, praesentium veniam at voluptas sapiente dicta! Dignissimos,
							libero? Aperiam, quasi veniam? Eos nobis fugiat sunt sequi ducimus iure consectetur
							rerum quibusdam esse quo praesentium suscipit, nesciunt nisi sit quis laudantium minus
							adipisci consequatur? Asperiores esse quidem officia provident explicabo laudantium
							porro excepturi. Aperiam eveniet voluptate explicabo possimus iusto iure tempora
							consequuntur temporibus, quis placeat sint. Saepe earum nemo totam maiores nesciunt
							facere dicta iste, velit expedita ab eius autem distinctio nobis laboriosam at, numquam
							magni enim harum. Veritatis eum maxime amet illo fugiat magni facilis, earum vitae. Quo
							magni nulla dolore quibusdam rerum deleniti, earum excepturi. Sapiente repudiandae,
							numquam eaque exercitationem molestias nam inventore amet doloribus labore omnis.</p>
					</article>
				</div>
				<div class="news-card-footer flex nowrap">
					<button class="read-more js-read-more-btn">Показать полностью</button>
					<button class="js-hide-btn">Скрыть</button>
					<div class="news-card-keywords-wrapper">
						<a class="news-card-keyword">Новинки</a>
						<a class="news-card-keyword">Mariole life-style</a>
						<a class="news-card-keyword">Одежда</a>
					</div>
					<div class="news-card-button-wrapper">
						<button onclick="console.log('post-page')" class="read">Читать далее</button>
					</div>
				</div>
			</div>-->
		</div>
		<div class="blog-column-right wrap">
			<div class="blog-nav-element">
				<div class="blog-search-wrapper">
					<form action="javascript:void(0);" class="blog-search-form flex wrap js-search-form">
						<input type="text" placeholder="поиск" class="blog-search-input js-search-value"/>
						<span class="blog-search"></span>
						<input type="submit" class="blog-search-button js-search-btn" value="Поиск"/>
					</form>
				</div>
			</div>
			<div class="blog-nav-element">
				<div class="blog-categories-wrapper flex wrap">
					<h2>Категории</h2>
					<button class="blog-categories-button">
						<a>Свежие новости (<span class="news-count js-count-fresh"></span>)</a>
					</button>
					<button class="blog-categories-button">
						<a>Рекомендованное (<span class="news-count js-count-recommended"></span>)</a>
					</button>
					<button class="blog-categories-button">
						<a navid="news/media">Мы в прессе (<span class="news-count js-count-media"></span>)</a>
					</button>
					<button class="blog-categories-button">
						<a navid="news/trips">Поездки (<span class="news-count js-count-trips"></span>)</a>
					</button>
					<button class="blog-categories-button">
						<a navid="news/product">Продукция (<span class="news-count js-count-products"></span>)</a>
					</button>
					<button class="blog-categories-button">
						<a navid="news/sale">Акции (<span class="news-count js-count-sales"></span>)</a>
					</button>
				</div>
			</div>
			<div class="blog-nav-element">
				<div class="key-words-wrapper flex wrap">
					<form action="" class="js-tags-form flex wrap">
						<label class="blog-keywords-button">
							<input name="product" type="checkbox" class="checkbox-keywords"/>
							<span>Продукт</span>
						</label>
						<label class="blog-keywords-button">
							<input name="sale" type="checkbox" class="checkbox-keywords"/>
							Акция
						</label>
						<label class="blog-keywords-button">
							<input name="trips" type="checkbox" class="checkbox-keywords"/>
							Поездки
						</label>
						<label class="blog-keywords-button">
							<input name="new" type="checkbox" class="checkbox-keywords"/>
							Новинки
						</label>
						<label class="blog-keywords-button">
							<input name="mariole_life_style" type="checkbox" class="checkbox-keywords"/>
							Mariole life-style
						</label>
						<label class="blog-keywords-button">
							<input name="design" type="checkbox" class="checkbox-keywords"/>
							Дизайн
						</label>
						<label class="blog-keywords-button">
							<input name="photo" type="checkbox" class="checkbox-keywords"/>
							Фото
						</label>
						<label class="blog-keywords-button">
							<input name="clothes" type="checkbox" class="checkbox-keywords"/>
							Одежда
						</label>
						<label class="blog-keywords-button">
							<input name="accessories" type="checkbox" class="checkbox-keywords"/>
							Аксессуары
						</label>
						<label class="blog-keywords-button">
							<input name="media" type="checkbox" class="checkbox-keywords"/>
							Пресса
						</label>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="js-post-wrapper post-wrapper" style="display: none;"></div>