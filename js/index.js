import changePage from "./changePage.js"
import cleanSearch from "./cleanSearch.js"
import fetchAPI from "./fetchAPI.js"

export const numPage = {
    value: 1
}

const formSearch = document.querySelector('.form')
const textErrorEmpty = document.querySelector('.text-error-empty')

formSearch.addEventListener('submit', ev => {
    ev.preventDefault()

    const search = document.querySelector('#search')
    const searchValue = search.value

    search.classList.remove('border-red')
    textErrorEmpty.classList.add('hide')

    if(searchValue === "") {
        search.classList.add('border-red')
        textErrorEmpty.classList.remove('hide')
        return
    }

    numPage.value = 1

    fetchAPI(searchValue)
})


const iconDelete = document.querySelector('.icon-delete')
iconDelete.addEventListener('click', () => cleanSearch())


const buttons = document.querySelectorAll('.button-group button')
buttons.forEach(btn => {
    btn.addEventListener('click', (ev) => {
        const searchValue = document.querySelector('#search').value
        changePage(ev, numPage, searchValue)
    })
})


const btnCleanMovies = document.querySelector('.btn-clean-movies')
const listMovies = document.querySelector('.list-movies')
const initialPart = document.querySelector('.initial-part')
const buttonGroup = document.querySelector('.button-group')

btnCleanMovies.addEventListener('click', () => {
    listMovies.innerHTML = ""
    buttonGroup.classList.add('hide')
    initialPart.classList.add('hide')
    search.value = ""
})

const select = document.querySelector('#selectPage')
const top = document.querySelector('#top')

select.addEventListener('change', () => top.scrollIntoView({ behavior: "smooth" }))