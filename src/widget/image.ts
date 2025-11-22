import { Widget } from "../core/widget.ts";

type ImageProps = {
  src?: string;
  width?: number;
  height?: number;
  fit?: BoxFit;
  alignment?: Alignment;
  repeat?: ImageRepeat;
  semanticLabel?: string;
  excludeFromSemantics?: boolean;
  color?: string;
  colorBlendMode?: BlendMode;
  filterQuality?: FilterQuality;
  isAntiAlias?: boolean;
  opacity?: number;
};

// Flutter BoxFit enum
export enum BoxFit {
  fill = "fill",
  contain = "contain",
  cover = "cover",
  fitWidth = "fitWidth",
  fitHeight = "fitHeight",
  none = "none",
  scaleDown = "scaleDown",
}

// Flutter Alignment enum
export enum Alignment {
  topLeft = "topLeft",
  topCenter = "topCenter",
  topRight = "topRight",
  centerLeft = "centerLeft",
  center = "center",
  centerRight = "centerRight",
  bottomLeft = "bottomLeft",
  bottomCenter = "bottomCenter",
  bottomRight = "bottomRight",
}

// Flutter ImageRepeat enum
export enum ImageRepeat {
  repeat = "repeat",
  repeatX = "repeatX",
  repeatY = "repeatY",
  noRepeat = "noRepeat",
}

// Flutter BlendMode enum (common ones)
export enum BlendMode {
  clear = "clear",
  src = "src",
  dst = "dst",
  srcOver = "srcOver",
  dstOver = "dstOver",
  srcIn = "srcIn",
  dstIn = "dstIn",
  srcOut = "srcOut",
  dstOut = "dstOut",
  srcATop = "srcATop",
  dstATop = "dstATop",
  xor = "xor",
  plus = "plus",
  modulate = "modulate",
  screen = "screen",
  overlay = "overlay",
  darken = "darken",
  lighten = "lighten",
  colorDodge = "colorDodge",
  colorBurn = "colorBurn",
  hardLight = "hardLight",
  softLight = "softLight",
  difference = "difference",
  exclusion = "exclusion",
  multiply = "multiply",
  hue = "hue",
  saturation = "saturation",
  color = "color",
  luminosity = "luminosity",
}

// Flutter FilterQuality enum
export enum FilterQuality {
  none = "none",
  low = "low",
  medium = "medium",
  high = "high",
}

class Image extends Widget {
  get type(): string {
    return "image";
  }

  constructor(props: ImageProps) {
    super(props);
  }

  // Image.network(src, {...otherProps})
  static network(
    src: string,
    props?: Omit<ImageProps, "src">
  ): Image {
    return new Image({ ...props, src });
  }

  // Image.asset(src, {...otherProps})
  static asset(
    src: string,
    props?: Omit<ImageProps, "src">
  ): Image {
    return new Image({ ...props, src });
  }

  // Image.memory - for base64 or data URLs
  static memory(
    src: string,
    props?: Omit<ImageProps, "src">
  ): Image {
    return new Image({ ...props, src });
  }
}

export { Image };
