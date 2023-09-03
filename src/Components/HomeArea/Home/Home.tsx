import "./Home.css";
import produceImageSource from "../../../Assets/Images/products.jpg";
import beveragesImageSource from "../../../Assets/Images/beverages.png";

function Home(): JSX.Element {

    const imageNumber = Math.floor(Math.random() * 2) + 1;

    // Gets the data from the server.
    const desserts = [
        { id: 1, name: "Ice cream", price: 10.5 },
        { id: 2, name: "Eclair", price: 20.7 },
        { id: 3, name: "Apple Pie", price: 10.5 },
        { id: 4, name: "Pavlova", price: 11.8 }
    ];

    {/* Conditional Rendering - Fifth way: */ }
    // if (imageNumber === 1) {
    //     return (
    //         <div className="Home">
    //             <img src={produceImageSource} />
    //         </div>
    //     );
    // }

    return (
        <div className="Home">

            {/* Conditional Rendering - First way: */}
            <img src={imageNumber === 1 ? produceImageSource : beveragesImageSource} />

            <br />

            { desserts.map(d => <span key={d.id}> {d.name}, price: {d.price} ❤ </span> ) }

            {/* Conditional Rendering - Second way: */}
            {/* { imageNumber === 1 ? <img src={produceImageSource} /> : <img src={beveragesImageSource} /> } */}

            {/* Conditional Rendering - Third way: */}
            {/* {imageNumber === 1 && <img src={produceImageSource} />}
            {imageNumber === 2 && <img src={beveragesImageSource} />} */}

            {/* Conditional Rendering - Fourth way: */}
            {/* {imageNumber === 1 || <img src={produceImageSource} />}
            {imageNumber === 2 || <img src={beveragesImageSource} />} */}

            {/* Conditional Rendering - Fifth way: */}
            {/* <img src={beveragesImageSource} /> */}

        </div>
    );
}

export default Home;
