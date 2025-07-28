// Linked List functionality

function addToList() {
    const value = document.getElementById('linkedInput').value;
    if (!value) return;

    linkedList.push(value);
    renderLinkedList();
    document.getElementById('linkedStatus').textContent = `Added node: ${value}`;
    document.getElementById('linkedInput').value = '';
}

function renderLinkedList() {
    const vis = document.getElementById('linkedVis');
    vis.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'linked-list';
    
    linkedList.forEach((item, index) => {
        const node = document.createElement('div');
        node.className = 'node';
        node.textContent = item;
        container.appendChild(node);
        
        if (index < linkedList.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'arrow';
            arrow.textContent = '→';
            container.appendChild(arrow);
        }
    });
    
    if (linkedList.length > 0) {
        const nullNode = document.createElement('div');
        nullNode.className = 'arrow';
        nullNode.textContent = '→ NULL';
        container.appendChild(nullNode);
    }
    
    vis.appendChild(container);
}

function removeFromList() {
    if (linkedList.length === 0) {
        document.getElementById('linkedStatus').textContent = 'List is empty!';
        return;
    }

    const removed = linkedList.pop();
    renderLinkedList();
    document.getElementById('linkedStatus').textContent = `Removed node: ${removed}`;
}

function searchList() {
    const value = document.getElementById('linkedInput').value;
    if (!value) return;

    const nodes = document.querySelectorAll('#linkedVis .node');
    nodes.forEach(node => node.classList.remove('highlight'));

    let found = false;
    linkedList.forEach((item, index) => {
        if (item === value) {
            nodes[index].classList.add('highlight');
            found = true;
        }
    });

    document.getElementById('linkedStatus').textContent = found ? 
        `Found "${value}" in the list!` : `"${value}" not found in list`;
}

function clearList() {
    linkedList = [];
    renderLinkedList();
    document.getElementById('linkedStatus').textContent = 'Linked list cleared';
}