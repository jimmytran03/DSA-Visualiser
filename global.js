// Global variables
let currentArray = [];
let hashTable = {};
let stack = [];
let linkedList = [];
let binaryTree = null;

// Tab switching function
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}

// Initialize with sample data when page loads
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('arrayInput').value = '10,20,30,40,50';
    createArray();
});