var menuItem = document.querySelectorAll('.item-menu')
function selectItem(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
    
}   