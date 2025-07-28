// Two Pointers functionality

function findTwoSum() {
    const input = document.getElementById('twoPointerInput').value;
    const target = parseInt(document.getElementById('targetSum').value);
    
    if (!input || isNaN(target)) return;

    const arr = input.split(',').map(x => parseInt(x.trim()));
    renderTwoPointerArray(arr);

    let left = 0, right = arr.length - 1;
    let found = false;

    const items = document.querySelectorAll('#twoPointerVis .array-item');
    
    const animate = () => {
        items.forEach(item => item.classList.remove('pointer'));
        
        if (left < right) {
            items[left].classList.add('pointer');
            items[right].classList.add('pointer');
            
            const sum = arr[left] + arr[right];
            if (sum === target) {
                found = true;
                document.getElementById('twoPointerStatus').textContent = 
                    `Found pair: ${arr[left]} + ${arr[right]} = ${target}`;
                return;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
            
            setTimeout(animate, 1000);
        } else if (!found) {
            document.getElementById('twoPointerStatus').textContent = 'No pair found with target sum';
        }
    };
    
    animate();
}

function renderTwoPointerArray(arr) {
    const vis = document.getElementById('twoPointerVis');
    vis.innerHTML = '';
    arr.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'array-item';
        div.textContent = item;
        vis.appendChild(div);
    });
}

function checkPalindrome() {
    const input = document.getElementById('twoPointerInput').value;
    if (!input) return;

    const str = input.replace(/,/g, '').replace(/\s/g, '').toLowerCase();
    const arr = str.split('');
    renderTwoPointerArray(arr);

    let left = 0, right = arr.length - 1;
    let isPalindrome = true;

    const items = document.querySelectorAll('#twoPointerVis .array-item');
    
    const animate = () => {
        items.forEach(item => item.classList.remove('pointer'));
        
        if (left < right) {
            items[left].classList.add('pointer');
            items[right].classList.add('pointer');
            
            if (arr[left] !== arr[right]) {
                isPalindrome = false;
                document.getElementById('twoPointerStatus').textContent = 'Not a palindrome!';
                return;
            }
            
            left++;
            right--;
            setTimeout(animate, 1000);
        } else {
            document.getElementById('twoPointerStatus').textContent = 
                isPalindrome ? 'It\'s a palindrome! 🎉' : 'Not a palindrome!';
        }
    };
    
    animate();
}