import placeholder from './../assets/images/placholder.jpg'

function Deal({title, ratingText, thumb}) {
    return (
        <div className='dealCard'>
            <img src={thumb} alt="deal thumbnail" />
            <h2>{title}</h2>
            <p>Steam Rating: {ratingText} </p>
        </div>
    )
}

export default Deal;