import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "react-bootstrap";
import axios from "axios";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blogs} = useFetch('http://localhost:4000/blogs/' +id);
    const history = useHistory();

    const handleDelete = (e)=>{
        e.preventDefault()

        axios.delete('http://localhost:4000/blogs/' +id)
        .then(res=>{
            alert("blog deleted");
            history.push('/');
        })
    }

        return (

            <div className="details">

                (blogs && {
                    
                })


            </div>

        )

}