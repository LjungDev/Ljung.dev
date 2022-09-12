import { Image } from "react-datocms";

import { useState } from "react";
import Link from "../../atoms/Link";
import type { ImageViewerProps } from "./ImageViewer.types";

export default function ImageViewer({ image }: ImageViewerProps): JSX.Element {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible((current) => !current);
  };

  return (
    <>
      <div
        className="flex justify-center cursor-pointer"
        onClick={toggleOverlay}
      >
        <Image data={image} layout={"intrinsic"} />
      </div>
      {overlayVisible && (
        <div className="w-full h-screen max-h-screen bg-polar-night-0 bg-opacity-95 fixed top-0 left-0 z-10 flex flex-col">
          <div className="flex flex-col items-end p-2">
            <button
              className="text-frost-3 dark:text-frost-1 hover:opacity-50 active:opacity-75 bg-polar-night-0 dark:bg-polar-night-2 text-xl w-8 h-8 rounded-sm"
              onClick={toggleOverlay}
            >
              X
            </button>
          </div>
          <div className="grow flex flex-col gap-2 p-2 justify-center items-center">
            <Image data={image} layout={"intrinsic"} />
            {image.src && (
              <Link href={image.src} target={"_blank"}>
                Open full
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
