
window.onload = () => {
    const skinBtn = document.querySelector(`[data-skin=${localStorage.getItem('JTC-skin')}]`)
	skinBtn.classList.remove('skin-container')
	skinBtn.classList.add('skin-container-active')

	const acessorieBtn = document.querySelector(`[data-acessorie=${localStorage.getItem('JTC-acessorie')}]`)
	acessorieBtn.classList.remove('acessorie-container')
	acessorieBtn.classList.add('acessorie-container-active')
}