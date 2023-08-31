"use client";

import React, { forwardRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

// Treat component as img
const Image = forwardRef(
  (
    {
      src,
      srcset,
      priority = false,
      alt = "Picture",
      noSrcSet = false,
      ...otherProps
    },
    ref
  ) => {
    const { ref: inViewRef, inView } = useInView({
      rootMargin: "100px",
      triggerOnce: true,
    });

    const split = src.split(".");
    const path = split[0];
    const ext = split[split.length - 1];

    const callbackRef = useCallback(
      (node) => {
        if (!node) return;

        if (ref) ref.current = node;
        inViewRef(node);
      },
      [ref, inViewRef]
    );

    return (
      <picture style={{ display: "contents" }}>
        {/* 4k */}
        {!noSrcSet && (
          <source
            style={{ display: "none" }}
            srcSet={inView || priority ? src : null}
            media="(min-width: 1700px)"
          />
        )}

        {/* COMPUTER */}
        {!noSrcSet && (
          <source
            style={{ display: "none" }}
            srcSet={
              inView || priority
                ? `${path}-computer-1x.${ext} 1x, ${path}-computer-2x.${ext} 2x`
                : null
            }
            media="(min-width: 900px)"
          />
        )}

        {/* TABLET */}
        {!noSrcSet && (
          <source
            style={{ display: "none" }}
            srcSet={
              inView || priority
                ? `${path}-tablet-1x.${ext} 1x, ${path}-tablet-2x.${ext} 2x`
                : null
            }
            media="(min-width: 450px)"
          />
        )}

        {/* MOBILE */}
        {!noSrcSet && (
          <source
            style={{ display: "none" }}
            srcSet={
              inView || priority
                ? `${path}-mobile-1x.${ext} 1x, ${path}-mobile-2x.${ext} 2x`
                : null
            }
          />
        )}

        {/* FALLBACK */}
        <img
          src={inView || priority ? src : null}
          alt={alt}
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : null}
          // onLoad={(e) => e.target.classList.add("visible")}
          {...otherProps}
          ref={callbackRef}
        />
      </picture>
    );
  }
);
Image.displayName = "Image";

export default Image;
