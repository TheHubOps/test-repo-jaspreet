import ProductCard from "../components/ProductCard";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
    // const { loading, error, data } = useQuery(GET_PRODUCTS);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        // fetch products from the api
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
        .then(res => setProducts(res?.data))
        .catch(err => setError(err));
    }, []); // Add dependency array to avoid infinite requests
    
    if (error) return <div className="text-center text-red-500 py-10">Sorry, something went wrong while loading products. Please try again later.</div>;

    return (
        <>
            <section className="py-10">
                <div className="container">
                    <h1 className="text-4xl mb-5">ALL</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {!products.length ? (
                            <Spinner loading={true} />
                        ) : (
                            products?.map((product) => (
                                <ProductCard product={product} key={product._id} />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
