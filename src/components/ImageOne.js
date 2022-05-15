import { Parallax } from 'react-parallax';
import Image1 from '../img/space1.jpg'

const ImageOne = () => (
    <Parallax bgImage={Image1} bgImageAlt="sky" className='image' strength={300}>
        <div className='content'>
            <span className='img-txt'>a trip to the sky</span>
        </div>
    </Parallax>
);

export default ImageOne