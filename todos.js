
const generateTemp=(todo)=>{
$('.todos').append(`<li class="list-group-item d-flex justify-content-between align-items-center"><span>${todo}</span><span><i class="fas fa-edit mx-3 edit"></i><i class="fas fa-trash-alt delete"></i></span></li>
`)
}
$('.add').on('submit',e=>{
    e.preventDefault();
    const newTodo=($('#add').val().trim());
generateTemp(newTodo)
    
})

///////////////////////////////////Event Delegation//////////////////////////////

$('.todos').on('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove()
    }
})
///////////////////////////////////////Update List//////////////////////
$('.todos').on('click',e=>{
    if(e.target.classList.contains('edit')){
        // e.target.parentElement.parentElement.firstChild.textContent='helo g'
        // e.target.closest('.list-group-item').firstChild.textContent='helo g'
        e.target.parentElement.previousSibling.textContent='helo '
    }
})

////////////////////////////////Searching//////////////
const filteredtodos=(srtodo)=>{
Array.from($('.todos').children())
    .filter((ft)=>!ft.textContent.toLowerCase().includes(srtodo))   
    .forEach(fe=>fe.classList.add('filtered'))
Array.from($('.todos').children())
    .filter((ft)=>ft.textContent.toLowerCase().includes(srtodo))   
    .forEach(fe=>fe.classList.remove('filtered'))


    

}

$('.search').on('keyup',e=>{
const Srtodo=$('#search').val().trim().toLowerCase();
    
filteredtodos(Srtodo)
})