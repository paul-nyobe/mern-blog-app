import './post.css'
import postImg from '../../assets/pexels-gary-barnes-6232002.jpg'

export const Post = () => {
    return (
        <div className="post">
            <img src={postImg} alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">music</span>
                    <span className="postCat">life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. A error impedit quos est. Nulla expedita aliquam numquam aperiam iste eum hic ad ullam adipisci distinctio corrupti itaque, tempora ipsum dolorem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas expedita assumenda consequuntur temporibus impedit laboriosam aliquam, pariatur provident in blanditiis velit libero harum delectus, voluptatem quibusdam deserunt quam fuga.
            </p>
        </div>
    )
}
