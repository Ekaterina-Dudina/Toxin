$(function () {
	$('#calendar__first-date').datepicker({
		inline: false,
		// multipleDates: 2,
		multipleDatesSeparator: ' - ',
		// minDate: new Date(),
		language: 'ru',
		// dateFormat: 'yyyy-mm-dd',
		// firstDay: 0,
		toggleSelected: false,
		range: true,

		// view: 'months',
		clearButton: true,
		onSelect: function (fd, d, picker) {
			$("#calendar__first-date").val(fd.split("-")[0]);
			$("#calendar__end-date").val(fd.split("-")[1]);
		}
	});
	$('#formDate').datepicker({
		inline: false,
		// multipleDates: 2,
		// minDate: new Date(),
		language: 'ru',

		// firstDay: 0,


		// view: 'months',
		clearButton: true,

	});

	$(function () {
		addApplyButton();

		let $applyButton = $('[data-action="apply"]');
		$applyButton.on('click', hideDatePicker);
	});

	function addApplyButton() {
		let $isPickerButtons = $('.datepicker').find('.datepicker--buttons');
		if ($isPickerButtons) {
			$isPickerButtons.append(
				'<span class="datepicker--button" data-action="apply">Применить</span>'
			);
		}
	}

	function hideDatePicker() {
		let $isDatePicker = $('.datepicker');
		$isDatePicker.css('display', 'none');
	}


	$('#filter-calendar').datepicker({
		inline: false,
		// multipleDates: 2,
		// minDate: new Date(),
		language: 'ru',
		multipleDatesSeparator: ' - ',
		// firstDay: 0,
		toggleSelected: false,
		range: true,

		// view: 'months',
		clearButton: true,

	});

});



