const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend) 

for (const placeholder of placeholders){
    // console.log(placeholder)
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(e) {
    console.log('drag start', e.target)
    e.currentTarget.classList.add('hold')
    setTimeout(()=> e.target.classList.add('hide'), 0)
    
}
function dragend(e) {
    console.log('drag end')
    e.currentTarget.classList.remove('hold', 'hide')
   //e.target.claName ='item'
}

function dragenter(e) {
    e.currentTarget.classList.add('hovered')
    console.log('drag enter')
}

function dragover(e) {
    console.log('drag over')
    e.preventDefault()
}
 
function dragleave(e) {
    e.target.classList.remove('hovered')
    console.log('drag leave')
}

function dragdrop(e) {
    console.log('drag drop')
    e.target.classList.remove('hovered')
    e.target.append(item)
}