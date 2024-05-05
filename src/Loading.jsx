import loading from './assets/img/loading.gif'

function Loading() {
  return (
    <div className='w-screen h-screen'>
        <img src={loading} alt="Loading..." className=' w-full h-full object-contain' />
    </div>
  )
}

export default Loading
