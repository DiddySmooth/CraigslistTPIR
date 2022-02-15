import {useEffect, useState} from 'react'
import posts from '../../Assets/dummyData'
const Play = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState([""])
    const [price, setPrice] = useState<number>()
    const [guess, setGuess] = useState<number>()
    useEffect(() => {
        console.log("Hello")
        setTitle(posts[0].title)
        setDescription(posts[0].description)
        setImg(posts[0].pictures)
        setPrice(posts[0].price)
    }, [])


    const submitGuess = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(price && guess)
        console.log(`your guess was off by ${price - guess}`)
    }
    return(
        <div>
            <div>
                <h1>Guess the Price</h1>
            </div>
            <div>
                <h1>{title}</h1>
                <img src={img[0]}/>
                <p>{description}</p>
            </div>
            <div>
                <form onSubmit={submitGuess}>
                    <input placeholder="Guess to nearest dollar" type="number" value={guess} onChange={(e) => {setGuess(parseInt(e.target.value))}}/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}
export default Play