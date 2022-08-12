import loading from '../loading.gif'

const Loading = () => {
    return (
        <div className='d-flex align-items-center'>
            <img src={loading} alt="Loading.." style={{ width: '50px', margin: '20px auto' }} />
        </div>
    )
}

export default Loading