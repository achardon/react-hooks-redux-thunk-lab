export default function CatList( {catPics} ) {
    return(
        <div>
            {catPics? 
            catPics.map(cat => {
                return <img key={cat.id} src={cat.url} alt="cat" height="300" />
            }) :
            null }
        </div>
    )
}