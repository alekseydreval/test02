let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];
let images_path = 'images';

$(document).ready( () => {
    $('#createSlider').one('click', () => {
        $('#slider').slick({
            variableWidth: true
        });
        images.forEach(img => {
          $('#slider').slick('slickAdd', `<img src="${images_path}/${img}" style="height: 157px; width: auto">`);
        });
      });      
});

