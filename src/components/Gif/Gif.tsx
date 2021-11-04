import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import Image from "next/image";

interface IGifData {
  gif: {
    title: string;
    images: {
      fixed_height: {
        url: string;
        width: string | number;
        height: string | number;
      };
    };
  };
}

const GifImg = styled(Image)`
  background-color: #e0e0e0;
  border-radius: 5px;
`;

const Gif: FC<IGifData> = ({ gif }) => {
  return (
    <GifImg
      loader={({ width }) =>
        `${gif.images.fixed_height.url}?w=${width}&q=${25}`
      }
      src={gif.images.fixed_height.url}
      alt={gif.title}
      // layout="fixed"
      width={Number(gif.images.fixed_height.width)}
      height={200}
    />
  );
};

export default Gif;
