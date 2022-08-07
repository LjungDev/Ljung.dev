import Image from "next/image";

export default function Logo(): JSX.Element {
  return (
    <div className="relative h-52">
      <Image src="/logo.svg" alt="Logo" layout="fill" objectFit="contain" />
    </div>
  );
}
