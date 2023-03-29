import Image from './export/images'
import './Gallery.css'


export default function Gallery() {
  return (
    <div className="section">
        <div className="section-title">
            <h1>Gallery Responsive</h1>
        </div>
      <div className="section-image">
        {Image.map(images =>(
            <figure>
                <img src={images} />
            </figure>
        ))}
      </div>
    </div>
  );
}
