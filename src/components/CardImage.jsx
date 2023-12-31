import { useState } from 'react'

function CardImage() {


  return (
    <>
    <div className='relative w-full rounded-lg'>
      <div
        className={
          isTrending
            ? 'relative h-[140px] w-[240px] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-app-dark-blue after:opacity-50 after:content-[""] sm:h-[230px] sm:w-[470px]'
            : 'relative h-[133px] md:h-[140px] lg:h-[174px]'
        }>
        <Image
          className='rounded-lg'
          src={src}
          alt={alt}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(240, 140)
          )}`}
          unoptimized
        />
      </div>
    </div>
    </>
  )
}

export default CardImage
