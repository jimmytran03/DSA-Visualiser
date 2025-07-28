// Binary Tree functionality

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function addToTree() {
    const value = parseInt(document.getElementById('treeInput').value);
    if (isNaN(value)) return;

    if (!binaryTree) {
        binaryTree = new TreeNode(value);
    } else {
        insertNode(binaryTree, value);
    }

    renderTree();
    document.getElementById('treeStatus').textContent = `Added node: ${value}`;
    document.getElementById('treeInput').value = '';
}

function insertNode(root, value) {
    if (value < root.value) {
        if (!root.left) {
            root.left = new TreeNode(value);
        } else {
            insertNode(root.left, value);
        }
    } else {
        if (!root.right) {
            root.right = new TreeNode(value);
        } else {
            insertNode(root.right, value);
        }
    }
}

function renderTree() {
    const vis = document.getElementById('treeVis');
    vis.innerHTML = '';
    
    if (!binaryTree) return;

    const container = document.createElement('div');
    container.className = 'tree-container';
    vis.appendChild(container);

    const positions = {};
    calculatePositions(binaryTree, 0, positions);
    drawTree(binaryTree, container, positions, 0);
}

function calculatePositions(node, level, positions, inorderIndex = {value: 0}) {
    if (!node) return;

    calculatePositions(node.left, level + 1, positions, inorderIndex);
    
    const x = inorderIndex.value * 80 + 50;
    const y = level * 80 + 50;

    // Draw node
    const nodeDiv = document.createElement('div');
    nodeDiv.className = 'tree-node';
    nodeDiv.textContent = node.value;
    nodeDiv.style.left = x + 'px';
    nodeDiv.style.top = y + 'px';
    nodeDiv.setAttribute('data-value', node.value);
    container.appendChild(nodeDiv);

    // Draw lines to children
    if (node.left) {
        const leftX = (inorderIndex.value - countNodes(node.left)) * 80 + 50 + 25;
        const leftY = (level + 1) * 80 + 50 + 25;
        drawLine(container, x + 25, y + 50, leftX, leftY);
    }

    if (node.right) {
        const rightX = (inorderIndex.value + countNodes(node.right)) * 80 + 50 + 25;
        const rightY = (level + 1) * 80 + 50 + 25;
        drawLine(container, x + 25, y + 50, rightX, rightY);
    }

    inorderIndex.value++;
    drawTree(node.right, container, positions, level + 1, inorderIndex);
}

function drawLine(container, x1, y1, x2, y2) {
    const line = document.createElement('div');
    line.className = 'tree-line';
    
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    
    line.style.width = length + 'px';
    line.style.left = x1 + 'px';
    line.style.top = y1 + 'px';
    line.style.transform = `rotate(${angle}deg)`;
    line.style.zIndex = '1';
    
    container.appendChild(line);
}

function countNodes(node) {
    if (!node) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

function searchTree() {
    const value = parseInt(document.getElementById('treeInput').value);
    if (isNaN(value)) return;

    const nodes = document.querySelectorAll('.tree-node');
    nodes.forEach(node => node.classList.remove('highlight'));

    const found = searchInTree(binaryTree, value);
    if (found) {
        const nodeElement = document.querySelector(`[data-value="${value}"]`);
        if (nodeElement) {
            nodeElement.classList.add('highlight');
        }
        document.getElementById('treeStatus').textContent = `Found ${value} in the tree!`;
    } else {
        document.getElementById('treeStatus').textContent = `${value} not found in tree`;
    }
}

function searchInTree(node, value) {
    if (!node) return false;
    if (node.value === value) return true;
    if (value < node.value) return searchInTree(node.left, value);
    return searchInTree(node.right, value);
}

function traverseInorder() {
    if (!binaryTree) return;

    const result = [];
    inorderTraversal(binaryTree, result);
    
    animateTraversal(result, 'Inorder');
}

function traversePreorder() {
    if (!binaryTree) return;

    const result = [];
    preorderTraversal(binaryTree, result);
    
    animateTraversal(result, 'Preorder');
}

function inorderTraversal(node, result) {
    if (!node) return;
    inorderTraversal(node.left, result);
    result.push(node.value);
    inorderTraversal(node.right, result);
}

function preorderTraversal(node, result) {
    if (!node) return;
    result.push(node.value);
    preorderTraversal(node.left, result);
    preorderTraversal(node.right, result);
}

function animateTraversal(values, type) {
    const nodes = document.querySelectorAll('.tree-node');
    nodes.forEach(node => node.classList.remove('highlight'));

    let index = 0;
    const animate = () => {
        if (index < values.length) {
            const nodeElement = document.querySelector(`[data-value="${values[index]}"]`);
            if (nodeElement) {
                nodeElement.classList.add('highlight');
                setTimeout(() => {
                    nodeElement.classList.remove('highlight');
                }, 800);
            }
            
            document.getElementById('treeStatus').textContent = 
                `${type} Traversal: ${values.slice(0, index + 1).join(' → ')}`;
            
            index++;
            setTimeout(animate, 1000);
        } else {
            document.getElementById('treeStatus').textContent = 
                `${type} Traversal Complete: ${values.join(' → ')}`;
        }
    };
    
    animate();
}

function clearTree() {
    binaryTree = null;
    renderTree();
    document.getElementById('treeStatus').textContent = 'Tree cleared. Add nodes to build a new tree!';
}
    const y = level * 80 + 50;
    positions[node.value + '_' + level + '_' + inorderIndex.value] = {x, y, node};
    inorderIndex.value++;

    calculatePositions(node.right, level + 1, positions, inorderIndex);


function drawTree(node, container, positions, level, inorderIndex = {value: 0}) {
    if (!node) return;

    drawTree(node.left, container, positions, level + 1, inorderIndex);

    const x = inorderIndex.value * 80 + 50;
}