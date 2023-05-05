const image = document.querySelectorAll('.image');

for (let [i, imageSelected] of image.entries()){
    imageSelected.addEventListener('click', function focus (){
        resetFocus();
        imageSelected.classList.toggle('active')
    })
}

function resetFocus(){
    image.forEach(i => i.classList.remove('active'))
}