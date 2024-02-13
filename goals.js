document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');


    accordionItems.forEach(function (item) {
        item.addEventListener('click', function() {
            if(!this.classList.contains('active')) {
                closeAllItems();
            }
            this.classList.toggle('active');
        });
    });

    function closeAllItems(){
        accordionItems.forEach(function(item){
            item.classList.remove('active');
        });
    }
});