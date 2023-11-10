import fetchAPI from "../fetchAPI.js"
import { numPage } from "../index.js"

export default (selectValue) => {
    const search = document.querySelector('#search')
    const searchValue = search.value

    numPage.value = selectValue

    fetchAPI(searchValue)
}