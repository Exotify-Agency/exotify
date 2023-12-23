import classes from "./ImageLoader.module.scss";
import { forwardRef } from "react";
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
      rootMargin: "200px",
      triggerOnce: true,
    });

    const split = src.split(".");
    const path = split[0];
    const ext = split[split.length - 1];

    const callbackRef = (node) => {
      if (!node) return;

      if (ref) ref.current = node;
      inViewRef(node);
    };

    const UHDSrcSet = inView || priority ? src : null;
    const computerSrcSet =
      inView || priority
        ? `${path}-computer-1x.${ext} 1x, ${path}-computer-2x.${ext} 2x`
        : null;
    const tabletSrcSet =
      inView || priority
        ? `${path}-tablet-1x.${ext} 1x, ${path}-tablet-2x.${ext} 2x`
        : null;
    const mobileSrcSet =
      inView || priority
        ? `${path}-mobile-1x.${ext} 1x, ${path}-mobile-2x.${ext} 2x`
        : null;

    return (
      <picture className={classes.Picture}>
        {!noSrcSet && (
          <>
            {/* 4k */}
            <source
              style={{ display: "none" }}
              srcSet={UHDSrcSet}
              media="(min-width: 1700px)"
            />

            {/* COMPUTER */}
            <source
              style={{ display: "none" }}
              srcSet={computerSrcSet}
              media="(min-width: 900px)"
            />

            {/* TABLET */}
            <source
              style={{ display: "none" }}
              srcSet={tabletSrcSet}
              media="(min-width: 450px)"
            />

            {/* MOBILE */}
            <source style={{ display: "none" }} srcSet={mobileSrcSet} />
          </>
        )}

        {/* FALLBACK */}
        <img
          className={classes.Image}
          src={inView || priority ? src : null}
          alt={alt}
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : null}
          ref={callbackRef}
          {...otherProps}
        />
      </picture>
    );
  }
);
Image.displayName = "Image";

export default Image;
