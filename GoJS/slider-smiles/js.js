function Slider() {

    //Local variables
    var leftButton = document.body.querySelector('.arrow-left');
    var rightButton = document.body.querySelector('.arrow-right');
    var images = document.body.querySelectorAll('img');

    var counter = 0;

    //Methods
    leftButton.onclick = function () {
        if (counter >= 0 && counter <= 6) {
            images[counter].classList.remove('active');
            images[counter + 3].classList.add('active');

            counter++
        }
        console.log(counter);
    };

    rightButton.onclick = function () {
        if (counter >= 1 && counter <= 7) {
            images[counter - 1].classList.add('active');
            images[counter + 2].classList.remove('active');


            counter--;
        }
        console.log(counter);
    }
}