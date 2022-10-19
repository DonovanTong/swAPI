const getResidents = document.querySelector("button")
const body = document.querySelector('body')

function fun() {
    console.log('Consider it clicked.')
    axios.get("https://swapi.dev/api/planets/2/") 
    .then((response) => {
        console.log('hello')
        let {residents} = response.data
        for (let i = 0; i<residents.length; i++) {
            console.log('hello2')
            let ul = document.createElement('ul')
            let li = document.createElement('li')

            axios.get(residents[i]) .then((res) => {
                let {name} = res.data
                li.textContent = name
            })
            .catch((error) => {
                console.log('error')
            })
            ul.appendChild(li)
            body.appendChild(ul)
        }
    })
    .catch((error) => {
        console.log('error')
    })
    
}

getResidents.addEventListener('click', fun)