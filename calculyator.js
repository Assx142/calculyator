const PRICES = {
  pricePerLesson: { cheap: 500, comfortable: 800, intensive: 1100 },
  durationMultiplier: { 45: 1, 60: 1.3, 90: 1.8 },
};

function calc() {
  const lessons = parseInt(document.querySelector('#lessons').value, 10) || 0;
  const duration = parseInt(document.querySelector('#duration').value, 10) || 60;
  const tariff = document.querySelector('input[name="tariff"]:checked')?.value || 'cheap';
  const base = PRICES.pricePerLesson[tariff] * PRICES.durationMultiplier[duration];
  document.querySelector('#result').textContent = `Итоговая стоимость: ${lessons * base} ₽`;
}
