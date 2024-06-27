const ctx1 = document.getElementById('myChart');

  new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        datasets: [{
        backgroundColor: '#FF8C00',
        borderColor: '#FF8C00',
        label: 'Temperatura',
        data: [30,29,28,25,22,23],
        borderWidth: 1
        
      },{
        backgroundColor: '#7B68EE',
        borderColor: '#7B68EE',
        label: 'Umidade',
        data: [80,82,80,85,80,83],
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

  const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'bar',
  data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
      backgroundColor: '#FF8C00',
      borderColor: '#FF8C00',
      label: 'Temperatura',
      data: [22, 24, 27, 23, 20, 18],
      borderWidth: 1
      
    },{
      backgroundColor: '#7B68EE',
      borderColor: '#7B68EE',
      label: 'Umidade',
      data: [90, 89, 93, 87, 88, 82],
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