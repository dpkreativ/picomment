import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="avatar">
      <Image
        src={`/images/profile.png`}
        fill
        sizes="100vw"
        style={{ objectFit: 'contain' }}
        alt="user avatar"
      />
    </div>
  );
}
