import { Parallax } from 'react-parallax';
import Image2 from '../img/space2.jpg'

const ImageTwo = () => (
    <Parallax bgImage={Image2} bgImageAlt="sky" className='image' strength={300}>
        <div className='content'>
            {/* <span className='img-txt'>a trip to the sky</span> */}
        </div>
    </Parallax>
);

export default ImageTwo