const metrics = {
  batteryHealth: 85,
  energyConsumption: 12.5,
  regenEfficiency: 75,
  currentSpeed: 80,
  powerUsage: 30,
  rangeEstimation: 200
};

function updateMetrics() {
  metrics.batteryHealth = Math.max(50, Math.min(100, metrics.batteryHealth + (Math.random() * 2 - 1)));
  metrics.energyConsumption = Math.max(5, metrics.energyConsumption + (Math.random() * 0.5 - 0.25));
  metrics.regenEfficiency = Math.max(50, Math.min(100, metrics.regenEfficiency + (Math.random() * 2 - 1)));
  metrics.currentSpeed = Math.max(0, Math.min(120, metrics.currentSpeed + (Math.random() * 5 - 2.5)));
  metrics.powerUsage = Math.max(10, Math.min(50, metrics.powerUsage + (Math.random() * 2 - 1)));
  metrics.rangeEstimation = Math.max(100, Math.min(500, metrics.rangeEstimation + (Math.random() * 5 - 2.5)));

  document.getElementById('batteryHealth').innerText = metrics.batteryHealth.toFixed(2) + '%';
  document.getElementById('energyConsumption').innerText = metrics.energyConsumption.toFixed(2) + ' kWh';
  document.getElementById('regenEfficiency').innerText = metrics.regenEfficiency.toFixed(2) + '%';
  document.getElementById('rangeEstimation').innerText = metrics.rangeEstimation.toFixed(2) + ' km';
  document.getElementById('currentSpeed').innerText = metrics.currentSpeed.toFixed(2) + ' km/h';
  document.getElementById('powerUsage').innerText = metrics.powerUsage.toFixed(2) + ' kW';

  const suggestions = getOptimizationSuggestions();
  document.getElementById('suggestions').innerText = suggestions;
}

function getOptimizationSuggestions() {
  const { currentSpeed, powerUsage } = metrics;
  if (currentSpeed > 100) {
    return "Consider reducing speed to optimize energy consumption.";
  } else if (powerUsage > 50) {
    return "Reduce acceleration for better power efficiency.";
  } else {
    return "Driving efficiency is optimal.";
  }
}

setInterval(updateMetrics, 2000);

updateMetrics();
