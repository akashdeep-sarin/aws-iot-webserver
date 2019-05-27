var myLineChart1;
var myLineChart2;
var myLineChart3;
var myLineChart4;
var myLineChart5;

function createChart1() {
	var tempData = {
		labels : [],
		datasets : [ {
			label: "Device #1",
			fillColor : "rgba(63, 155, 191, 0.8)",
			strokeColor : "rgba(63, 155, 191, 0.2)",
			pointColor : "rgba(63, 155, 191, 0.9)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			borderColor : "#3e95cd",
			data : []
		} ]
	};

	var ctx = document.getElementById("myChart1").getContext("2d");

	myLineChart1 = new Chart(ctx, {
		type : 'line',
		options : {
			scales : {
				yAxes : [ {
					ticks : {
						autoSkip : false
					}
				} ]
			}
		},
		data : tempData
	});
}

function createChart2() {
	var tempData = {
		labels : [],
		datasets : [ {
			label: "Device #2",
			fillColor : "rgba(63, 155, 191, 0.8)",
			strokeColor : "rgba(63, 155, 191, 0.2)",
			pointColor : "rgba(63, 155, 191, 0.9)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			borderColor : "#8e5ea2",
			data : []
		} ]
	};

	var ctx = document.getElementById("myChart2").getContext("2d");

	myLineChart2 = new Chart(ctx, {
		type : 'line',
		options : {
			scales : {
				yAxes : [ {
					ticks : {
						autoSkip : false
					}
				} ]
			}
		},
		data : tempData
	});
}

function createChart3() {
	var tempData = {
		labels : [],
		datasets : [ {
			label: "Device #3",
			fillColor : "rgba(63, 155, 191, 0.8)",
			strokeColor : "rgba(63, 155, 191, 0.2)",
			pointColor : "rgba(63, 155, 191, 0.9)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			borderColor : "#3cba9f",
			data : []
		} ]
	};

	var ctx = document.getElementById("myChart3").getContext("2d");

	myLineChart3 = new Chart(ctx, {
		type : 'line',
		options : {
			scales : {
				yAxes : [ {
					ticks : {
						autoSkip : false
					}
				} ]
			}
		},
		data : tempData
	});
}

function createChart4() {
	var tempData = {
		labels : [],
		datasets : [ {
			label: "Device #4",
			fillColor : "rgba(63, 155, 191, 0.8)",
			strokeColor : "rgba(63, 155, 191, 0.2)",
			pointColor : "rgba(63, 155, 191, 0.9)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			borderColor : "#e8c3b9",
			data : []
		} ]
	};

	var ctx = document.getElementById("myChart4").getContext("2d");

	myLineChart4 = new Chart(ctx, {
		type : 'line',
		options : {
			scales : {
				yAxes : [ {
					ticks : {
						autoSkip : false
					}
				} ]
			}
		},
		data : tempData
	});
}

function createChart5() {
	var tempData = {
		labels : [],
		datasets : [ {
			label: "Device #5",
			fillColor : "rgba(63, 155, 191, 0.8)",
			strokeColor : "rgba(63, 155, 191, 0.2)",
			pointColor : "rgba(63, 155, 191, 0.9)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			borderColor : "#c45850",
			data : []
		} ]
	};

	var ctx = document.getElementById("myChart5").getContext("2d");

	myLineChart5 = new Chart(ctx, {
		type : 'line',
		options : {
			scales : {
				yAxes : [ {
					ticks : {
						autoSkip : false
					}
				} ]
			}
		},
		data : tempData
	});
}

function drawLineChart1() {

	var jsonData = $
			.ajax({
				url : 'getDevice/AkashDevice_1',
				dataType : 'json',
			})
			.done(
					function(result) {

						console.log(`Device 1 ::: value = `
								+ (result.state.reported.value) + ` time= `
								+ (result.state.reported.timeString));

						var dataLength = myLineChart1.data.datasets[0].data.length;
						var labelLength = myLineChart1.data.labels.length;

						if (myLineChart1.data.labels.length > 50) {
							var dataLength = myLineChart1.data.datasets[0].data
									.shift();
							var labelLength = myLineChart1.data.labels.shift();
						}

						var dataLength = myLineChart1.data.datasets[0].data.length;
						var labelLength = myLineChart1.data.labels.length;

						myLineChart1.data.datasets[0].data[dataLength] = result.state.reported.value;
						myLineChart1.data.labels[labelLength] = result.state.reported.timeString;

						myLineChart1.update();

					});
}

function drawLineChart2() {

	var jsonData = $
			.ajax({
				url : 'getDevice/AkashDevice_2',
				dataType : 'json',
			})
			.done(
					function(result) {

						console.log(`Device 2 ::: value = ` + (result.state.reported.value)
								+ ` time= `
								+ (result.state.reported.timeString));

						var dataLength = myLineChart2.data.datasets[0].data.length;
						var labelLength = myLineChart2.data.labels.length;

						if (myLineChart2.data.labels.length > 50) {
							var dataLength = myLineChart2.data.datasets[0].data
									.shift();
							var labelLength = myLineChart2.data.labels.shift();
						}

						var dataLength = myLineChart2.data.datasets[0].data.length;
						var labelLength = myLineChart2.data.labels.length;

						myLineChart2.data.datasets[0].data[dataLength] = result.state.reported.value;
						myLineChart2.data.labels[labelLength] = result.state.reported.timeString;

						myLineChart2.update();

					});
}

function drawLineChart3() {

	var jsonData = $
			.ajax({
				url : 'getDevice/AkashDevice_3',
				dataType : 'json',
			})
			.done(
					function(result) {

						console.log(`Device 3 ::: value = ` + (result.state.reported.value)
								+ ` time= `
								+ (result.state.reported.timeString));

						var dataLength = myLineChart3.data.datasets[0].data.length;
						var labelLength = myLineChart3.data.labels.length;

						if (myLineChart3.data.labels.length > 50) {
							var dataLength = myLineChart3.data.datasets[0].data
									.shift();
							var labelLength = myLineChart3.data.labels.shift();
						}

						var dataLength = myLineChart3.data.datasets[0].data.length;
						var labelLength = myLineChart3.data.labels.length;

						myLineChart3.data.datasets[0].data[dataLength] = result.state.reported.value;
						myLineChart3.data.labels[labelLength] = result.state.reported.timeString;

						myLineChart3.update();

					});
}

function drawLineChart4() {

	var jsonData = $
			.ajax({
				url : 'getDevice/AkashDevice_4',
				dataType : 'json',
			})
			.done(
					function(result) {

						console.log(`Device 4 ::: value = ` + (result.state.reported.value)
								+ ` time= `
								+ (result.state.reported.timeString));

						var dataLength = myLineChart4.data.datasets[0].data.length;
						var labelLength = myLineChart4.data.labels.length;

						if (myLineChart4.data.labels.length > 50) {
							var dataLength = myLineChart4.data.datasets[0].data
									.shift();
							var labelLength = myLineChart4.data.labels.shift();
						}

						var dataLength = myLineChart4.data.datasets[0].data.length;
						var labelLength = myLineChart4.data.labels.length;

						myLineChart4.data.datasets[0].data[dataLength] = result.state.reported.value;
						myLineChart4.data.labels[labelLength] = result.state.reported.timeString;

						myLineChart4.update();

					});
}

function drawLineChart5() {

	var jsonData = $
			.ajax({
				url : 'getDevice/AkashDevice_5',
				dataType : 'json',
			})
			.done(
					function(result) {

						console.log(`Device 5 ::: value = ` + (result.state.reported.value)
								+ ` time= `
								+ (result.state.reported.timeString));

						var dataLength = myLineChart5.data.datasets[0].data.length;
						var labelLength = myLineChart5.data.labels.length;

						if (myLineChart5.data.labels.length > 50) {
							var dataLength = myLineChart5.data.datasets[0].data
									.shift();
							var labelLength = myLineChart5.data.labels.shift();
						}

						var dataLength = myLineChart5.data.datasets[0].data.length;
						var labelLength = myLineChart5.data.labels.length;

						myLineChart5.data.datasets[0].data[dataLength] = result.state.reported.value;
						myLineChart5.data.labels[labelLength] = result.state.reported.timeString;

						myLineChart5.update();

					});
}

$(document).ready(function() {
	createChart1();
	createChart2();
	createChart3();
	createChart4();
	createChart5();

	setInterval(drawLineChart1, 1000);
	setInterval(drawLineChart2, 1000);
	setInterval(drawLineChart3, 1000);
	setInterval(drawLineChart4, 1000);
	setInterval(drawLineChart5, 1000);

});
