// Arrays functionality

function createArray() {
    const input = document.getElementById('arrayInput').value;
    currentArray = input.split(',').map(x => x.trim()).filter(x => x);
    renderArray();
    document.getElementById('arrayStatus').textContent = `Array created with ${currentArray.length} elements`;
}

function renderArray() {
    const vis = document.getElementById('arrayVis');
    vis.innerHTML = '';
    currentArray.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'array-item';
        div.textContent = item;
        div.setAttribute('data-index', index);
        vis.appendChild(div);
    });
}

function searchArray() {
    const searchVal = document.getElementById('searchValue').value;
    if (!searchVal) return;

    const items = document.querySelectorAll('.array-item');
    items.forEach(item => item.classList.remove('highlight'));

    let found = false;
    currentArray.forEach((item, index) => {
        if (item == searchVal) {
            items[index].classList.add('highlight');
            found = true;
        }
    });

    document.getElementById('arrayStatus').textContent = found ? 
        `Found "${searchVal}" in the array!` : `"${searchVal}" not found in array`;
}