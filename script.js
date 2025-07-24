window.onload = () => {
  const colorPickersDiv = document.getElementById('colorPickers');
  for (let i = 0; i < 8; i++) {
    const input = document.createElement('input');
    input.type = 'color';
    input.value = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    input.className = 'color-input';
    colorPickersDiv.appendChild(input);
  }
};

function showPalette() {
  const inputs = document.querySelectorAll('.color-input');
  const paletteDiv = document.getElementById('palette');
  paletteDiv.innerHTML = '';

  inputs.forEach(input => {
    const color = input.value;

    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;

    const colorCode = document.createElement('div');
    colorCode.className = 'color-code';
    colorCode.textContent = color;
    colorCode.style.cursor = 'pointer';

    colorCode.onclick = () => {
      navigator.clipboard.writeText(color).then(() => {
        alert(`${color} kopyalandı!`);
      }).catch(() => {
        alert('Kopyalama başarısız oldu.');
      });
    };

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = '5px';

    wrapper.appendChild(colorBox);
    wrapper.appendChild(colorCode);
    paletteDiv.appendChild(wrapper);
  });
}
