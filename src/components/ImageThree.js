import { Parallax } from 'react-parallax';
import Image3 from '../img/space3.jpg'

const ImageThree = () => (
    <Parallax bgImage={Image3} bgImageAlt="sky" className='image' strength={800}>
        <div className='content'>
            {/* <span className='img-txt'>a trip to the sky</span> */}
        </div>
    </Parallax>
);

export default ImageThree