document.addEventListener('keydown', keypressed)
document.addEventListener('keyup', keyup)

function keypressed(e) {

    document.querySelectorAll('.key').forEach(element => {

        let key = element.innerHTML

        if (e.code === `Key${key.toUpperCase()}`) {

            element.classList.add("clicked")
        }


    });



    document.querySelectorAll('.sKey').forEach(element => {

        

        if ( element.classList.contains(e.code) ) {

            element.classList.add("sClicked")
        }


    });

}









function keyup(e) {
    document.querySelectorAll('.key').forEach(element => {
        element.classList.remove("clicked")
    });
    document.querySelectorAll('.sKey').forEach(element => {
        element.classList.remove("sClicked")
    });


}