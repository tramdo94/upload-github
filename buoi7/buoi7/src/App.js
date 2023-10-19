import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import{BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Product from "./components/Product";

export default function App(){
    return(
        <div>
           
            
            <BrowserRouter>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="footer">Footer</Link>
                </li>
                <li>
                    <Link to ="main">Main</Link>
                </li>
                <li>
                    <Link to ="product/6">Product 6</Link>
                </li>
                <li>
                    <Link to ="product/2">Product 2</Link>
                </li>
            </ul>
            <Routes>
            <Route index element={<Header/>}></Route>
            <Route path="footer" element={<Footer/>}></Route>
            <Route path="main" element={<Main/>}></Route>
            <Route path="product/:id" element={<Product/>}></Route>

            </Routes>
            
            </BrowserRouter>
        </div>
    );
}