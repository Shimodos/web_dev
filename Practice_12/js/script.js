const root = document.querySelector(':root'),
            rootStyle = getComputedStyle(root);

document.querySelector('button').addEventListener('click', () => {
    root.style.setProperty('--text-color', 'red');
});