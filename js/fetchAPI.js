import generateItems from "./generateItems.js"
import { numPage } from "./index.js"

let data = null

export default (searchValue) => {
    const apiKey = 'a8d2b359'

    fetch(`https://www.omdbapi.com/?s=${searchValue}&page=${numPage.value}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(responseData => {
        data = responseData
        generateItems(data, searchValue)
    })
}

export { data }