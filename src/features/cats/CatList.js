import React from 'react'

function CatList({ catPics }){
    const catsToDisplay = catPics.map(cat => <img src={cat.url} alt="cat" key={cat.id} />)
    return catsToDisplay
}

export default CatList