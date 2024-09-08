const containers = document.getElementById('cont');

const open1 = document.getElementById('open');
const close = document.getElementById('close');

// Function to add class to all containers
function showContainers() {

    containers.classList.add('show-nav');
}

// Function to remove class from all containers
function hideContainers() {
    containers.classList.remove('show-nav');
}

// Event listener for open button
open1.addEventListener('click', showContainers);

// Event listener for close button
close.addEventListener('click', hideContainers);
