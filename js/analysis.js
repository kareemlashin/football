$(document).ready(function() {
    var pieChart = document.getElementById("pieChart");

    Chart.defaults.global.defaultFontSize = 18;

    var data = {
        labels: [
            "داخل الارض",
            "خارج الارض",
            "مجموع",
        ],
        datasets: [{
            data: [133.3, 86.2, 52.2],
            backgroundColor: [
                "#5FD727",
                "#FFA024",
                "#FF2728",
            ]
        }]
    };

    var pieChart = new Chart(pieChart, {
        type: 'pie',
        data: data
    });

    var pieChart2 = document.getElementById("pieChart2");

    Chart.defaults.global.defaultFontSize = 18;

    var data2 = {
        labels: [
            "داخل الارض",
            "خارج الارض",
            "مجموع",
        ],
        datasets: [{
            data: [133.3, 86.2, 52.2],
            backgroundColor: [
                "#5FD727",
                "#FFA024",
                "#FF2728",
            ]
        }]
    };

    var pieChart2 = new Chart(pieChart2, {
        type: 'pie',
        data: data2
    });

    var pieChart3 = document.getElementById("pieChart3");

    Chart.defaults.global.defaultFontSize = 18;

    var data3 = {
        labels: [
            "داخل الارض",
            "خارج الارض",
            "مجموع",
        ],
        datasets: [{
            data: [133.3, 86.2, 52.2],
            backgroundColor: [
                "#5FD727",
                "#FFA024",
                "#FF2728",
            ]
        }]
    };

    var pieChart3 = new Chart(pieChart3, {
        type: 'pie',
        data: data3
    });
    var line = document.getElementById("line").getContext('2d');


    var myChart = new Chart(line, {
        type: 'line',
        options: {
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["1", "2", "1 ", "4", "4", "6 ", "7", "8", "9", "10"],
            datasets: [{
                label: false,
                data: [1, 2, 1, 2, 3, 2, 3, 4, 5, 6], // Specify the data values array
                fill: false,
                borderColor: '#5FD727', // Add custom color border (Line)
                backgroundColor: '#5FD727', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }, {
                label: false,
                data: [1, 2, 1, 2, 3, 2, 3, 4, 5, 6], // Specify the data values array
                fill: false,
                borderColor: '#FFA024', // Add custom color border (Line)
                backgroundColor: '#FFA024', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }, {
                label: false,
                data: [1, 5, 7, 4, 2, 2, 6, 6, 5, 6], // Specify the data values array
                fill: false,
                borderColor: '#FF2728', // Add custom color border (Line)
                backgroundColor: '#FF2728', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }]
        },
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            legend: {
                display: false,
            },
        }
    });

    var line2 = document.getElementById("line2").getContext('2d');


    var myChart2 = new Chart(line2, {
        type: 'line',
        options: {
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["1", "2", "1 ", "4", "4", "6 ", "7", "8", "9", "10"],
            datasets: [{
                label: false,
                data: [1, 2, 1, 2, 3, 2, 3, 4, 5, 6], // Specify the data values array
                fill: false,
                borderColor: '#5FD727', // Add custom color border (Line)
                backgroundColor: '#5FD727', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }, {
                label: false,
                data: [1, 2, 1, 2, 3, 2, 3, 4, 5, 6], // Specify the data values array
                fill: false,
                borderColor: '#FFA024', // Add custom color border (Line)
                backgroundColor: '#FFA024', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }, {
                label: false,
                data: [1, 5, 7, 4, 2, 2, 6, 6, 5, 6], // Specify the data values array
                fill: false,
                borderColor: '#FF2728', // Add custom color border (Line)
                backgroundColor: '#FF2728', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }]
        },
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            legend: {
                display: false,
            },
        }
    });
    var line3 = document.getElementById("line3").getContext('2d');


    var myChart3 = new Chart(line3, {
        type: 'line',
        options: {
            legend: {
                display: false,
            },
        },
        data: {

            labels: ["1", "2", "1 ", "4", "4", "6 "],
            datasets: [{
                label: false,
                data: [1, 2, 1, 2, 1, 2], // Specify the data values array
                fill: false,
                borderColor: '#5FD727', // Add custom color border (Line)
                backgroundColor: '#5FD727', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }, {
                label: false,
                data: [3, 4, 3, 4, 3, 4], // Specify the data values array
                fill: false,
                borderColor: '#FFA024', // Add custom color border (Line)
                backgroundColor: '#FFA024', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }, {
                label: false,
                data: [5, 6, 5, 6, 5, 6], // Specify the data values array
                fill: false,
                borderColor: '#FF2728', // Add custom color border (Line)
                backgroundColor: '#FF2728', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }]
        },
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            legend: {
                display: false,
            },
        }
    });
});