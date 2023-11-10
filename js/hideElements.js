const initialPart = document.querySelector('.initial-part')

export default (buttonGroup) => {
    initialPart.classList.remove('hide')
    buttonGroup.classList.remove('hide')
}