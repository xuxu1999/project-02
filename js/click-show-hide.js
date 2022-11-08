
// let clientWidth = document.body.clientWidth;
// if (clientWidth < 770) {
	
// 	$("#nav").hide();
// 	$("#search").hide();

	
// } else {
// 	$("#nav").show();
// 	$("#search").show();
// }
// // console.log(clientWidth);

// 上面代码应该在手机端屏幕才生效
$("#menu").click(function () {
	$(".nav").slideToggle();
	// $("#search").slideToggle();
});
