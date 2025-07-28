// Stack functionality

function pushStack() {
    const value = document.getElementById('stackInput').value;
    if (!value) return;

    stack.push(value);
    renderStack();
    document.getElementById('stackStatus').textContent = `Pushed: ${value}`;
    document.getElementById('stackInput').value = '';
}

function popStack() {
    if (stack.length === 0) {
        document.getElementById('stackStatus').textContent = 'Stack is empty!';
        return;
    }

    const popped = stack.pop();
    renderStack();
    document.getElementById('stackStatus').textContent = `Popped: ${popped}`;
}

function peekStack() {
    if (stack.length === 0) {
        document.getElementById('stackStatus').textContent = 'Stack is empty!';
        return;
    }

    document.getElementById('stackStatus').textContent = `Top element: ${stack[stack.length - 1]}`;
}

function renderStack() {
    const container = document.getElementById('stackContainer');
    container.innerHTML = '';
    
    stack.forEach(item => {
        const div = document.createElement('div');
        div.className = 'stack-item';
        div.textContent = item;
        container.appendChild(div);
    });
}

function clearStack() {
    stack = [];
    renderStack();
    document.getElementById('stackStatus').textContent = 'Stack cleared';
}