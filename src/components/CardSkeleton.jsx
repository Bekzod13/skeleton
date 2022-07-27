import Skeleton from 'react-loading-skeleton';

const CardSkeleton = ({cards}) => {
  return (
    Array(cards).fill(0).map((item, id)=>(
        <div className='card' key={id}>
        <div className="img-box">
            <Skeleton circle width="100px" height="100px" />
        </div>
        <h4> <Skeleton/></h4>
        <b> <Skeleton/></b>
        <i> <Skeleton/></i>
    </div>
    ))

  )
}

export default CardSkeleton