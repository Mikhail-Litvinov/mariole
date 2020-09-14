<div class="modal-country-bg" id="modal-country">
	<div class="modal-country-wrapper">
		<div class="modal-country-wrapper-2">
			<div class="modal-country-cont flex wrap">
				<div class="modal-country-header flex-row nowrap">
					<div class="col-9-10 height-100 flex-column flex-align-middle ">
						<div class="modal-country-title-cont flex flex-align-middle">
							<img src="img/title.png" alt="" srcset="" width="100%">
						</div>
					</div>
					<div class="col-1-10 height-100 flex-column flex-align-middle ">
						<span class="close-modal" id="close-country"></span>
					</div>
				</div>
				<div class="flex-row nowrap flex-align-middle width-100 modal-country-title-2">
					<span id="choose-country" class="choose-country languageable"></span>
				</div>
				<div class="modal-country-content flex wrap">
					<div class="flex-row width-100 nowrap">
						<div class="flex-column width-100 height-100 wrap">
							<span class="country-list-europe">
								<span id="area-europe" class="languageable"></span>
								<ul class="country-list">
									<?php
										foreach($countries_list as $key => $value) {
											if(!isset($value['area'])) {
												echo '<li><a href="#" id="country-' . $key . '" class="country-btn"></a></li>';
											}
										}
									?>
								</ul>
							</span>
						</div>
					</div>
					<div class="flex-row width-100">
						<div class="flex-column nowrap col-1-2 align-items-center">
							<span class="country-list-america">
								<span id="area-america" class="languageable"></span>
								<ul class="country-list-2">
									<?php
										foreach($countries_list as $key => $value) {
											if(isset($value['area']) && $value['area'] == 0) {
												echo '<li><a href="#" id="country-' . $key . '" class="country-btn"></a></li>';
											}
										}
									?>
								</ul>
							</span>
						</div>
						<div class="flex-column nowrap col-1-2 align-items-center">
							<span class="country-list-asia">
								<span id="area-asia" class="languageable"></span>
								<ul class="country-list-2">
									<?php
										foreach($countries_list as $key => $value) {
											if(isset($value['area']) && $value['area'] == 1) {
												echo '<li><a href="#" id="country-' . $key . '" class="country-btn"></a></li>';
											}
										}
									?>
								</ul>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>