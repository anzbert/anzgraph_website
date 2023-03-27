// UTILS

// test image support:
export async function checkAvif() {
  let avif = new Image();
  avif.src =
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
  return new Promise(function (resolve) {
    avif.onload = function () {
      //   console.info("Avif supported");
      resolve(true);
    };
    avif.onerror = function () {
      resolve(false);
    };
  });
}
export async function checkWebp() {
  let webp = new Image();
  webp.src =
    "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
  return new Promise(function (resolve) {
    webp.onload = function () {
      //   console.info("WebP supported");
      resolve(true);
    };
    webp.onerror = function () {
      resolve(false);
    };
  });
}

// function takes up to 1/refresh rate in latency:
export async function getSuffix(
  modernFormats: boolean = true
): Promise<string> {
  let suffix = ".jpg"; // default
  if (modernFormats) {
    const avifSupport = await checkAvif();
    if (avifSupport) suffix = ".avif";
    else {
      const webpSupport = await checkWebp();
      if (webpSupport) suffix = ".webp";
    }
  }
  return suffix;
}
