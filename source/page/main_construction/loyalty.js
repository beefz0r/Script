// show loyalty when building
// destroy button is disabled now (but for how long?)
if (user_data.ajaxLoyalty) {
	ajax("overview", function (overview) {
		var loyalty = $("#show_mood div.vis_item", overview);
		if (loyalty.size() == 1) {
			$(".modemenu tr:first").append("<td><b>" + trans.tw.main.loyaltyHeader + "</b> " + loyalty.html() + "</td>");
		}
	});
}