import { Row, Col } from 'antd'
import RatingStatistic from './RatingStatistic';
import ListRating from './ListRating';
function HomeAdmin() {
    return (
        <>
            <div className='mb-20'>
                <RatingStatistic></RatingStatistic>
            </div>
            <ListRating></ListRating>
        </>
    )
}
export default HomeAdmin;