function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    // Toggle the dark-theme class on the body
    body.classList.toggle('dark-theme');
    
    // Toggle the icon visibility
    const lightIcon = themeToggle.querySelector('.light-icon');
    const darkIcon = themeToggle.querySelector('.dark-icon');

    if (body.classList.contains('dark-theme')) {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
    } else {
        lightIcon.style.display = 'inline';
        darkIcon.style.display = 'none';
    }
}



const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            tension: 0.3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        weight: 'bold',
                        family: 'Nunito'
                    },
                    color: '#333'
                }
            }
        }
    }
});


const ctx1 = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['cyan-light', 'Cyan', 'Blue'],
        datasets: [{
            label: 'Sample Data',
            data: [35, 40, 25],
            backgroundColor: [
                getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-light'),
                getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-dark'),
                getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-darker')
            ],
            borderColor: [
                getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-darker'),
                getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-darker'),
                getComputedStyle(document.documentElement).getPropertyValue('--color-blue-darker')
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
});



// Data for the chart
const ctx2 = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [30, 45, 28, 60, 75, 90],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Bar chart data and configuration
const ctx3 = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

