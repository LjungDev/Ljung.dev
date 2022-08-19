import Image from "next/image";
import type { LogoProps, Size } from "./Logo.types";

const sizeMap: Record<Size, string> = {
  md: "w-14 h-24",
  lg: "w-32 h-52",
};

export default function Logo({ size }: LogoProps): JSX.Element {
  return (
    <div className={`relative ${sizeMap[size]}`}>
      <Image src="/logo.svg" alt="Logo" layout="fill" objectFit="contain" />
    </div>
  );
}
