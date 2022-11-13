import Caption from '../molecules/Caption';
import ImageContent from '../molecules/ImageContent';

export default function Hero({ imageSrc, imageAlt, imageTitle }) {
  return (
    <section>
      <ImageContent src={imageSrc} alt={imageAlt} />
      <Caption title={imageTitle} />
    </section>
  );
}
