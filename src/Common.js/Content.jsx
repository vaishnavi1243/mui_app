
import '../CSS/Content.css'
const Content=(props)=>
{
    return (<>
    <div className='content'>
    <h1 className="content_heading">{props.heading}</h1>
    <p className="content_para">{props.content}</p> 
    </div>
    </>)
    
}
export default Content;