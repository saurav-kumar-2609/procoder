const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
function showsidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function closesidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


