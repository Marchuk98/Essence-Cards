import { ImgHTMLAttributes, useEffect, useState } from 'react'

import { BlurhashCanvas as ImportedBlurHashCanvas } from 'react-blurhash'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  blurWidth: number
  blurHeight: number
}

export const BlurHashCanvas = ({ src, alt, blurHeight, blurWidth, ...props }: ImageProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)

  useEffect(() => {
    const img = new Image()

    img.onload = () => {
      setImageLoaded(true)
    }
    img.src = src
  }, [src])

  return (
    <>
      <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
        <ImportedBlurHashCanvas
          style={{ borderRadius: '2px' }}
          hash="L37nC1M_00s?-BaepJX50cog^nWA"
          width={blurWidth}
          height={blurHeight}
          punch={1}
        />
      </div>
      <div style={{ display: !imageLoaded ? 'none' : 'inline' }}>
        <img src={src} alt={alt} {...props} />
      </div>
    </>
  )
}