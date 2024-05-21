document.getElementById('open-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.right = '0';
    document.getElementById('items').classList.add('sidebar-open');
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.right = '-250px'; // Vuelve a ocultar el sidebar
    document.getElementById('items').classList.remove('sidebar-open');
});