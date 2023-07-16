import React from 'react';

const GalleryProduct = ({ uniqProduct }) => {

    const images = [
        {
            id: 1,
            img: uniqProduct.image
        },
        {
            id: 2,
            img: uniqProduct.image
        },
        {
            id: 3,
            img: uniqProduct.image
        },
        {
            id: 4,
            img: uniqProduct.image
        },
        {

            id: 5,
            img: uniqProduct.image
        },

    ]



    return (
        <section className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <article className=" p-3 shadow-sm rounded bg-white overflow-hidden">
                <section className="row">
                    <section className="p-2 rounded mb-4">
                        <section className="product-gallery">
                            <section className="product-gallery-selected-image  ">
                                <img className='mainImage rounded-3 ' src={uniqProduct.image} alt="pic-main" />
                            </section>
                            <section className="product-gallery-thumbs">
                                <div className="w-75 row-cols-6 m-5 rounded-2 justify-content-center align-items-center">
                                    {images && images.map((image, setImg) => {
                                        return (<img className='m-1 p-1 img-thumbnail' src={image.img} key={image.id} onClick={() => setImg(image.img)} />)
                                    })
                                    }
                                </div>
                            </section>
                        </section>
                    </section>
                </section>
            </article>
        </section>
    );
};

export default GalleryProduct;