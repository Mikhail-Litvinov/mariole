<div class="modal-country-bg" id="modal-country" style="display:none;">
	<div class="modal-country-wrapper">
		<div class="modal-country-wrapper-2">
			<div class="modal-country-cont flex wrap">
				<div class="modal-country-header flex-row nowrap">
					<div class="col-9-10 height-100 flex-column flex-align-middle ">
						<div class="modal-country-title-cont flex flex-align-middle">
							<img src="/public/images/title.png" alt="" srcset="" width="100%">
						</div>
					</div>
					<div class="col-1-10 height-100 flex-column flex-align-middle ">
						<span class="close-modal" id="close-country"></span>
					</div>
				</div>
				<div class="flex-row nowrap flex-align-middle width-100 modal-country-title-2">
					<span id="choose-country" class="choose-country" langid="choose-country"></span>
				</div>
				<div class="modal-country-content flex wrap">
					<div class="flex-row width-100 nowrap">
						<div class="flex-column width-100 height-100 wrap">
							<span class="country-list-europe">
								<span id="area-europe" langid="area-europe"></span>
								<ul class="country-list">
									<?php
										$countries_sorted_list;
										$format = '<li><a id="country-%s" class="country-btn" langid="country-%s"></a></li>' . "\n";
										foreach(get_countries_list() as $key => $value) {
											$countries_sorted_list[
												!isset($value['area']) ? 'europe' :
												($value['area'] == 0 ? 'america' : 'asia')
											][] = sprintf($format, $key, $key);
										}
									
										foreach($countries_sorted_list['europe'] as $value) echo $value;
									?>
								</ul>
							</span>
						</div>
					</div>
					<div class="flex-row width-100">
						<div class="flex-column nowrap col-1-2 align-items-center">
							<span class="country-list-america">
								<span id="area-america" langid="area-america"></span>
								<ul class="country-list-2">
									<?php foreach($countries_sorted_list['america'] as $value) echo $value; ?>
								</ul>
							</span>
						</div>
						<div class="flex-column nowrap col-1-2 align-items-center">
							<span class="country-list-asia">
								<span id="area-asia" langid="area-asia"></span>
								<ul class="country-list-2">
									<?php foreach($countries_sorted_list['asia'] as $value) echo $value; ?>
								</ul>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>