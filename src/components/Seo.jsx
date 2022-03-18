import React from "react";
import Helmet from "react-helmet";


const Seo = ({ title, description, url, image, keywords, og_title, og_description }) => {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
        </Helmet>
    )

}


export default Seo;