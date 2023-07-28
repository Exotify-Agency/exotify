import React, { forwardRef } from "react";

// Treat component as img
const Image = forwardRef(
  ({ src, srcset, priority = false, alt = "Picture", ...otherProps }, ref) => {
    const split = src.split(".");
    const path = split[0];
    const ext = split[split.length - 1];

    return (
      <picture style={{ display: "contents" }}>
        {/* 4k */}
        <source
          style={{ display: "none" }}
          srcSet={src}
          media="(min-width: 1700px)"
        />

        {/* COMPUTER */}
        <source
          style={{ display: "none" }}
          srcSet={`${path}-computer-1x.${ext} 1x, ${path}-computer-2x.${ext} 2x`}
          media="(min-width: 900px)"
        />

        {/* TABLET */}
        <source
          style={{ display: "none" }}
          srcSet={`${path}-tablet-1x.${ext} 1x, ${path}-tablet-2x.${ext} 2x`}
          media="(min-width: 450px)"
        />

        {/* MOBILE */}
        <source
          style={{ display: "none" }}
          srcSet={`${path}-mobile-1x.${ext} 1x, ${path}-mobile-2x.${ext} 2x`}
        />

        {/* FALLBACK */}
        <img
          src={src}
          alt={alt}
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : null}
          onLoad={(e) => e.target.classList.add("visible")}
          {...otherProps}
          ref={ref}
        />
      </picture>
    );
  }
);
Image.displayName = "Image";

export default Image;
