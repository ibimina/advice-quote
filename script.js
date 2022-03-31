const main = document.querySelector('main')
const title = document.querySelector('h4')
const text = document.querySelector('blockquote')
const dice = document.querySelector('.dice')

const url = "https://api.adviceslip.com/advice"
const randomAdvice = async ()=>{

    try {
        let response = await fetch(url)
        let advice = await response.json()
          title.textContent = 'ADVICE #'+ advice.slip.id
        text.textContent = `"${advice.slip.advice}"`
        
       
    } catch (error) {
        console.log('p')
    }

}
randomAdvice();

dice.addEventListener('click', e =>{
    //console.log('p')
    e.preventDefault()
    randomAdvice()

})