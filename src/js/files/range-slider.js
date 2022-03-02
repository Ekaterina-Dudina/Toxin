$(function () {
	$(".price__slider").slider({
		range: true,
		min: 0,
		max: 15000,
		values: [5000, 10000],
		slide: function (event, ui) {
			$("#amount").val(ui.values[0].toLocaleString() + "₽" + " - " + ui.values[1].toLocaleString() + "₽");
		}
	});
	$("#amount").val($(".price__slider").slider("values", 0).toLocaleString() + "₽" +
		" - " + $(".price__slider").slider("values", 1).toLocaleString() + "₽");
});