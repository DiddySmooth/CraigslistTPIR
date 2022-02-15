import React, {useEffect, useState} from 'react'
import posts from '../../Assets/dummyData'
const Play = ({socket}:any) => {

    const [username, setUsername] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState([""])
    const [price, setPrice] = useState<number>()
    const [guess, setGuess] = useState<number>()
    const [users, setUsers] = useState<any>([])
    useEffect(() => {
        setTitle(posts[0].title)
        setDescription(posts[0].description)
        setImg(posts[0].pictures)
        setPrice(posts[0].price)
    }, [])


    const submitGuess = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(socket){
            socket.emit("login", username)
        }

    }
    console.log(socket)
    if(socket){
        socket.on("serverMessage", (serverMessage:any) => {
            console.log(serverMessage)
            
            setUsers(serverMessage)
        })
    }
    console.log(users)
    return(
        <div>
            <div>
                <form onSubmit={login}>
                    <input placeholder='Please Enter a Name' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                    <input type="submit" />
                </form>
            </div>
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
                {users && (
                    users.map((user:any) => 
                        <li>{user}</li>
                    )
                )}
            <div>
                
            </div>
        </div>
    )
}
export default Play