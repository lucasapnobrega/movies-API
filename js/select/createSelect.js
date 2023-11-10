import { data } from "../fetchAPI.js"
import selectPage from "./selectPage.js"

export default () => {
    const select = document.querySelector('#selectPage')
    const totalPages = Math.ceil(data.totalResults / 10) 

    while (select.options.length > 1) {
        select.remove(1);
    }

    for(let i = 1; i <= totalPages; i++) {
        const option = document.createElement('option')
        option.value = i
        option.textContent = i

        select.appendChild(option)
    }

    select.selectedIndex = 0

    select.addEventListener('change', () => {
        const selectValue = select.value

        selectPage(selectValue)
    })
}