import changeSelect from "./select/changeSelect.js"
import fetchAPI from "./fetchAPI.js"
import { data } from "./fetchAPI.js"

const pageNumber = document.querySelector('.page-number')

export default (ev, numPage, searchValue) => {
    const button = ev.target.closest('button')
    const buttonText = button.dataset.text

    const totalPages = Math.ceil(data.totalResults / 10)

    if(buttonText === "next" && numPage.value < totalPages) {
        numPage.value++
        fetchAPI(searchValue)

        pageNumber.textContent = `Página: ${numPage.value}`
        changeSelect(numPage.value)
    }

    if(buttonText === "previous" && numPage.value > 1){
        numPage.value--
        fetchAPI(searchValue)

        pageNumber.textContent = `Página: ${numPage.value}`
        changeSelect(numPage.value)
    }
}