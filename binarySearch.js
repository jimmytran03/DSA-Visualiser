// Binary Search functionality

function createBinaryArray() {
    const input = document.getElementById('binaryInput').value;
    currentArray = input.split(',').map(x => parseInt(x.trim())).sort((a, b) => a - b);
    renderBinaryArray();
    document.getElementById('binaryStatus').textContent = 'Sorted array created for binary search';
}

function renderBinaryArray() {
    const vis = document.getElementById('binaryVis');
    vis.innerHTML = '';
    currentArray.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'array-item';
        div.textContent = item;
        vis.appendChild(div);
    });
}

function startBinarySearch() {
    const target = parseInt(document.getElementById('binaryTarget').value);
    if (isNaN(target)) return;

    let left = 0, right = currentArray.length - 1;
    const items = document.querySelectorAll('#binaryVis .array-item');

    const animate = () => {
        items.forEach(item => item.classList.remove('highlight', 'pointer'));
        
        if (left <= right) {
            const mid = Math.floor((left + right) / 2);
            items[mid].classList.add('highlight');
            items[left].classList.add('pointer');
            items[right].classList.add('pointer');
            
            if (currentArray[mid] === target) {
                document.getElementById('binaryStatus').textContent = 
                    `Found ${target} at index ${mid}!`;
                return;
            } else if (currentArray[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            
            setTimeout(animate, 1500);
        } else {
            document.getElementById('binaryStatus').textContent = `${target} not found in array`;
        }
    };
    
    animate();
}