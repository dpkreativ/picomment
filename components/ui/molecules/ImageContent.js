import Image from 'next/image';

export default function ImageContent({ alt, src }) {
  return (
    <div className="image-box">
      <Image
        className="image"
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
