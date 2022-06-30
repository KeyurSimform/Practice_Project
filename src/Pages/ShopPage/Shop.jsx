import React from "react";
import ShopData from "./ShopData";
import CollectionPreview from "../../Componenet/CollectionPreview/CollectionPreview";
import { useState } from "react";

const Shop = () => {
	const [Data, setData] = useState(ShopData);
	return (<div>
        {Data.map(({id , ...otherDataProps}) => (
            <CollectionPreview key={id} {...otherDataProps}/>
        ))}
    </div>);
};

export default Shop;
