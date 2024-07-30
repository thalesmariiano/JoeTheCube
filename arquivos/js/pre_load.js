
window.onload = () => {
    const btn = document.querySelector(`[data-skin=${localStorage.getItem('JTC-skin')}]`)
	btn.classList.remove('skin-container')
	btn.classList.add('skin-container-active')
}