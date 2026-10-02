import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [productname, setProductname] = useState("");
    const [productprice, setProductprice] = useState("");
    const [productdescription, setProductdescription] = useState("");
    const [message, setMessage] = useState("");

    const productHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:4000/demo/add-product",
                {
                    productname,
                    productprice: Number(productprice),
                    productdescription
                }
            );

            console.log(response.data);

            setMessage("Product added successfully");

            // Clear form
            setProductname("");
            setProductprice("");
            setProductdescription("");

        } catch (error) {
            console.log(error.message);
            setMessage("Failed to add product");
        }
    };

    return (
        <div>
            <form onSubmit={productHandler}>

                <h3>Product Name</h3>
                <input
                    type="text"
                    value={productname}
                    onChange={(e) => setProductname(e.target.value)}
                />

                <h3>Product Price</h3>
                <input
                    type="number"
                    value={productprice}
                    onChange={(e) => setProductprice(e.target.value)}
                />

                <h3>Product Description</h3>
                <input
                    type="text"
                    value={productdescription}
                    onChange={(e) =>
                        setProductdescription(e.target.value)
                    }
                />

                <br /><br />

                <button type="submit">
                    Add Product
                </button>

                <h3>{message}</h3>

            </form>
        </div>
    );
};

export default AddProduct;