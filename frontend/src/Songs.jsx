

const Songs = ({musics}) => {


    
    const render=musics.map((song,index)=>(
        <div key={index}>
                        
                    <h2>{song.title}</h2>
                    <h2>{song.artist}</h2>
                    <h2>{song.mood}</h2>
                    <audio src={song.audio} autoPlay></audio>


                </div>
    ))

                console.log("musics",musics.title);
                

  return (
    <div className='flex'>
            <h1>recommende songs</h1>
            {render}
        

    </div>
  )
}

export default Songs