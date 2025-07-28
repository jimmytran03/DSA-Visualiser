// Hashing functionality

function addToHash() {
    const key = document.getElementById('hashKey').value;
    const value = document.getElementById('hashValue').value;
    
    if (!key || !value) return;

    hashTable[key] = value;
    renderHashTable();
    document.getElementById('hashStatus').textContent = `Added: ${key} -> ${value}`;
    
    document.getElementById('hashKey').value = '';
    document.getElementById('hashValue').value = '';
}

function renderHashTable() {
    const vis = document.getElementById('hashVis');
    vis.innerHTML = '';
    
    Object.entries(hashTable).forEach(([key, value]) => {
        const bucket = document.createElement('div');
        bucket.className = 'hash-bucket';
        bucket.innerHTML = `<strong>${key}</strong><br>${value}`;
        vis.appendChild(bucket);
    });
}

function searchHash() {
    const key = document.getElementById('hashKey').value;
    if (!key) return;

    const buckets = document.querySelectorAll('.hash-bucket');
    buckets.forEach(bucket => bucket.classList.remove('highlight'));

    if (hashTable[key]) {
        Object.keys(hashTable).forEach((k, index) => {
            if (k === key) {
                buckets[index].classList.add('highlight');
            }
        });
        document.getElementById('hashStatus').textContent = `Found: ${key} -> ${hashTable[key]}`;
    } else {
        document.getElementById('hashStatus').textContent = `Key "${key}" not found`;
    }
}

function clearHash() {
    hashTable = {};
    renderHashTable();
    document.getElementById('hashStatus').textContent = 'Hash table cleared';
}