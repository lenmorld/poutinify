import React from 'react'

const stars = {
	large: {
		0: <img src="./images/stars/large_0.png" alt="0 stars" />,
		1: <img src="./images/stars/large_1.png" alt="1 stars" />,
		1.5: <img src="./images/stars/large_1_half.png" alt="1.5 stars" />,
		2: <img src="./images/stars/large_2.png" alt="2 stars" />,
		2.5: <img src="./images/stars/large_2_half.png" alt="2.5 stars" />,
		3: <img src="./images/stars/large_3.png" alt="3 stars" />,
		3.5: <img src="./images/stars/large_3_half.png" alt="3.5 stars" />,
		4: <img src="./images/stars/large_4.png" alt="4 stars" />,
		4.5: <img src="./images/stars/large_4_half.png" alt="4.5 stars" />,
		5: <img src="./images/stars/large_5.png" alt="5 stars" />,
	},
	small: {
		0: <img src="./images/stars/small_0.png" alt="0 stars" />,
		1: <img src="./images/stars/small_1.png" alt="1 stars" />,
		1.5: <img src="./images/stars/small_1_half.png" alt="1.5 stars" />,
		2: <img src="./images/stars/small_2.png" alt="2 stars" />,
		2.5: <img src="./images/stars/small_2_half.png" alt="2.5 stars" />,
		3: <img src="./images/stars/small_3.png" alt="3 stars" />,
		3.5: <img src="./images/stars/small_3_half.png" alt="3.5 stars" />,
		4: <img src="./images/stars/small_4.png" alt="4 stars" />,
		4.5: <img src="./images/stars/small_4_half.png" alt="4.5 stars" />,
		5: <img src="./images/stars/small_5.png" alt="5 stars" />,
	}
}


function Rating({ rating, size }) {
	return stars[size][rating]
}


export default Rating