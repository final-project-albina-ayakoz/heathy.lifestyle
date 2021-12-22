document.getElementById('product').innerHTML = localStorage.getItem('book');
document.getElementById('customer').innerHTML = localStorage.getItem('name');
function sale() {
    alert('SALE! this product');
    localStorage.removeItem('book');
    var div = document.getElementById('list');
    div.style.display = 'none';
}