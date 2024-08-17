import './not-found.css'
import not_found from "/not_found.png"

const NotFound = () => {
    return (
      <div className='not-found-container'>
        <h1 className="page-not-found">Error: 404 Page Not Found</h1>
        <img className='not-found-img' src={not_found} alt="" />
      </div>
    );
}

export default NotFound
