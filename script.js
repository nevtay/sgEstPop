let myChart = document.getElementById('myChart').getContext('2d');

// global options
Chart.defaults.global.defaultFontFamily = 'Hammersmith One, Helvetica';
Chart.defaults.global.defaultFontColor = '#777';
Chart.defaults.global.animation.duration = '1500';
Chart.defaults.global.animation.easing = 'easeInOutExpo';
Chart.defaults.global.maintainAspectRatio = true;

let singPopChart = new Chart(myChart, {
    responsive: true,
    type: 'doughnut', //other types include: line, bar, doughnut, radar, and polar area
    data: {
        labels: ['Ang Mo Kio', 'Bedok', 'Clementi', 'Bishan', 'Tampines', 'Marine Parade'],
        datasets: [{
            label: 'Population',
            data: [
                143800,
                194700,
                72300,
                63200,
                232700,
                21600
            ],
            // backgroundColor: "orange"
            backgroundColor: [
                'rgba(255, 87, 51, 1)',
                'rgba(173, 20, 87, 1)',
                'rgba(57, 73, 171, 1)',
                'rgba(0, 191, 165, 1)',
                'rgba(255, 214, 0, 1)',
                'rgba(78, 52, 46, 1)'
            ],
            borderWidth: 0.5,
            borderColor: '#000',
            hoverBorderWidth: 2.5,
            hoverBorderColor: '#283747'
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Housing Estate Population (SG, 2017)',
            // fontSize: 15,
            position: 'top'
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#000',
                // boxWidth: 25,
                // fontSize: 15,
            }
        },
        layout: {
            padding: {
                left: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
})


// let popNum = singPopChart.tooltip._data.datasets[0].data;
// console.log(popNum);