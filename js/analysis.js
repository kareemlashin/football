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
                "rgb(54,162,235,0.8)",
                "rgb(255,206,86,0.8)",
                "rgb(255,99,132,0.8)",
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
                "rgb(54,162,235,0.8)",
                "rgb(255,206,86,0.8)",
                "rgb(255,99,132,0.8)",
            ]
        }]
    };

    var pieChart2 = new Chart(pieChart2, {
        type: 'pie',
        data: data2
    });
    var line = document.getElementById("line").getContext('2d');


    var myChart = new Chart(line, {
        type: 'bar',
        options: {
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["1", "2", "1 ", "4", "4", "6 ", "7", "8", "9", "10"],
            datasets: [{
                label: 'label',

                data: [1, 2, 1, 2, 3, 2, 3, 4, 5, 6], // Specify the data values array
                fill: false,
                borderColor: 'rgb(54,162,235,0.8)', // Add custom color border (Line)
                backgroundColor: 'rgb(54,162,235,0.8)', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }, {
                label: 'label',

                data: [1, 2, 1, 2, 3, 2, 3, 4, 5, 6], // Specify the data values array
                fill: false,
                borderColor: 'rgb(255,206,86,0.8)', // Add custom color border (Line)
                backgroundColor: 'rgb(255,206,86,0.8)', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }, {
                label: 'label',

                data: [1, 5, 7, 4, 2, 2, 6, 6, 5, 6], // Specify the data values array
                borderColor: 'rgb(255,99,132,0.8)', // Add custom color border (Line)
                backgroundColor: 'rgb(255,99,132,0.8)', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]
        },
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            legend: {
                display: true,
            },
        }
    });

    var line2 = document.getElementById("line2").getContext('2d');


    var myChart2 = new Chart(line2, {
        type: 'bar',
        options: {
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["1", "2", "1 ", "4", "4", "6 ", "7", "8", "9", "10"],
            datasets: [{
                label: 'label',

                data: [1, 2, 1, 2, 3, 2, 3, 4, 5, 6], // Specify the data values array
                fill: false,
                borderColor: 'rgb(54,162,235,0.8)', // Add custom color border (Line)
                backgroundColor: 'rgb(54,162,235,0.8)', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }, {
                label: 'label',

                data: [1, 2, 1, 2, 3, 2, 3, 4, 5, 6], // Specify the data values array
                fill: false,
                borderColor: 'rgb(255,206,86,0.8)', // Add custom color border (Line)
                backgroundColor: 'rgb(255,206,86,0.8)', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }, {
                label: 'label',

                data: [1, 5, 7, 4, 2, 2, 6, 6, 5, 6], // Specify the data values array
                borderColor: 'rgb(255,99,132,0.8)', // Add custom color border (Line)
                backgroundColor: 'rgb(255,99,132,0.8)', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]
        },
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            legend: {
                display: true,
            },
        }
    });
});