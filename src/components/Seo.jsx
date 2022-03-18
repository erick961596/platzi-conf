import Helmet from "react-helmet";


const Seo = ({ title, description, url, image, keywords }) => {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
        </Helmet>
    )

}


export default Seo;