const timer = setInterval(function updateTimer() {
  const future = Date.parse('august 04, 2022 10:23:00');
  const now: any = new Date();
  const diff = future - now;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor(diff / 1000);

  const y = years;
  const d = days - years * 365;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  if (y === 0 && d === 0 && h === 0 && m === 0 && s === 0) {
    clearInterval(timer);
    console.log('Стоп таймер');
  }

  if (y < 0) {
    clearInterval(timer);
    console.log('Мы не можем прыгать в прошлое)');
    return;
  }
  console.log(`Осталось ${y} лет: ${d} дней: ${h}часов: ${m}минут: ${s}секунд`);
}, 1000);
