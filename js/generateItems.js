import hideElements from "./hideElements.js"
import { numPage } from "./index.js"
import createSelect from "./select/createSelect.js"

const textErrorNotFound = document.querySelector('.text-error-notFound')
const buttonGroup = document.querySelector('.button-group')
const pageNumber = document.querySelector('.page-number')
const select = document.querySelector('#selectPage')
const initialPart = document.querySelector('.initial-part')
const searchTitle = document.querySelector('.search-title')

export default (data, searchValue) => {
    const listMovies = document.querySelector('.list-movies')
    listMovies.innerHTML = ""  

    textErrorNotFound.classList.add('hide')

    if(data.Response == 'False') {
        textErrorNotFound.classList.remove('hide')
        buttonGroup.classList.add('hide')
        initialPart.classList.add('hide')
        return 
    }

    hideElements(buttonGroup)

    searchTitle.innerHTML = ""
    searchTitle.innerHTML += `Busca do filme <span style="text-transform: capitalize;">"${searchValue}"</span>`

    data.Search.forEach(element => {
        const item = document.createElement('div')
        item.classList.add('item')

        if (element.Poster !== "N/A") {
            item.innerHTML = `
                <a href="https://www.google.com/search?q=${element.Title}" class="link-movie" target="_blank">
                    <img src="${element.Poster}" />
                    <h2>${element.Title}</h2>
                    <p>${element.Year}</p>
                </a>
            `

            listMovies.appendChild(item)
        } else {
            item.classList.add('item-without-poster')
            item.innerHTML = `
                <div class="movie-without-poster">
                    <h2>${element.Title}</h2>
                    <p>${element.Year}</p>
                </div>
            `

            listMovies.appendChild(item)
        }
    })

    const totalPages = Math.ceil(data.totalResults/ 10)

    if(select.length == 1) createSelect()
    else if(select.length !== totalPages + 1) createSelect()

    pageNumber.textContent = `Página: ${numPage.value}`
}