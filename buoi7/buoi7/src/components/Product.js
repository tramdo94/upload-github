import{Link, useParams} from "react-router-dom";
function Product(){
    const{id} = useParams();
    return (
        <div className="header">
            <h1>Product: id={id}</h1>

        </div>
    );
}
export default Product;