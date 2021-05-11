document.addEventListener('DOMContentLoaded',() => {
    const expandsMore = document.querySelectorAll('[expand-more]')
    console.log(expandsMore)
    
    function expand() {
        const showContent = document.getElementById('showMoreContent1')

        if (showContent.classList.contains('expand-active')){
            this.innerHTML = this.dataset.showtext
        }else{
            this.innerHTML = this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active')
    }

    expandsMore.forEach(expandMore => {
        expandMore.addEventListener('click', expand)
        
    });
})