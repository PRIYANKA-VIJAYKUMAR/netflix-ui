const tabItems=document.querySelectorAll('.tab-items');
const tabContentItems=document.querySelectorAll('.tab-content-items');

//select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //add border to current item
    this.classList.add('tab-border');
    //grab content item from DOM content-1,2,3
    const tabContentItems=document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItems.classList.add('show');
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));