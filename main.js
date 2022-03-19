const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('dragend', dragend)
})

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragstart(){
  dropzones.forEach(dropzone => {
    dropzone.classList.add('highlight')})

  this.classList.add('is-dragging')
  
}

function dragend(){
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

  this.classList.remove('is-dragging')
}

function dragenter(){
  console.log('drag entered')
  }
  
  function dragover(){
    this.classList.add('over')
    const actualCard = document.querySelector('.is-dragging')
    this.appendChild(actualCard)
  }
  
  function dragleave(){
    this.classList.remove('over')
  }

  function drop(){
    this.classList.remove('over')
  }