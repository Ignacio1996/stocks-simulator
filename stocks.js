var ctx = document.getElementById('canvas');
console.log(ctx);

var myChart = new myChart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [100, 200, 300]
        }]
    }
})

console.log("hey")