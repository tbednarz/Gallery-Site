import React, { useState } from "react";
import Photo from "./Photo";
import "../index.css";

const Gallery = () => {
	function importAll(r) {
		return r.keys().map(r);
	}

	const images = importAll(require.context("../images", false, /\.(png|jpe?g|svg)$/));
	const [allImages, setallImages] = useState(images);
	return (
		<div id="gallery">
			{allImages.map((image, index) => {
				console.log(image);
				return <Photo link={image.default} key={index} alt="info" />;
			})}
		</div>
	);
};

export default Gallery;
