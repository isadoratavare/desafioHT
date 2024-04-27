import * as React from "react";
import { SvgProps, SvgXml } from "react-native-svg";

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
 <path d="m531.1 1170.2c-0.625 0-1.6094 0.10938-1.7539-0.085937h-0.070312c-2.1602-0.21484-4.3203-0.79297-6.3242-1.7891-0.070313-0.035156-0.10938-0.070312-0.17969-0.10938h-0.035156l-275.76-137.86c-3.2891-1.6562-6.0352-4.2461-7.9062-7.4766l-183.82-321.66c-2.125-3.7695-2.8555-8.0156-2.2695-12.035l45.938-321.64c0.50391-3.4453 1.9453-6.707 4.1758-9.3711l229.71-275.59c0.40625-0.53906 0.875-1.0195 1.3555-1.5l0.035156-0.035157 0.10547-0.10547c0.035156 0 0.035156-0.035156 0.035156-0.035156h0.035156c0.58984-0.58984 1.2109-1.0938 1.8711-1.5703l0.035156-0.035156s0.035157 0 0.035157-0.035157h0.035156l0.070312-0.070312h0.035156s0-0.035157 0.035157-0.035157c1.9453-1.3555 4.1406-2.375 6.5156-2.9297h0.070312 0.035156l0.035157-0.035156h0.070312c0.48047-0.10938 0.94922-0.17969 1.4648-0.25391l321.62-45.973c2.9297-0.40625 5.8555-0.10938 8.5664 0.76953l275.7 91.934c4.1406 1.3555 7.8242 4.2109 10.211 8.2305 0.070312 0.10938 0.15625 0.19141 0.19141 0.28906l183.79 321.62c2.0039 3.5156 2.8086 7.6094 2.293 11.641l-45.961 367.63v0.035156 0.035156 0.035157c-0.035156 0.046875-0.035156 0.085937-0.035156 0.085937v0.035156 0.035157 0.070312c-0.40625 2.7461-1.3906 5.3047-2.8555 7.5859-0.070313 0.070312-0.10938 0.14453-0.14453 0.17969v0.035156s-0.046876 0-0.046876 0.035157c-0.035156 0.046875-0.035156 0.046875-0.035156 0.085937h-0.035156v0.035156c0 0.035157-0.035156 0.035157-0.035156 0.035157v0.035156l-0.023438-0.007813c0 0.035157-0.035156 0.070313-0.035156 0.10938 0 0-0.035156 0-0.035156 0.046874-0.035156 0-0.035156 0.035157-0.035156 0.035157s-0.085938 0.070312-0.12109 0.14453c0 0.035156 0 0.035156-0.035156 0.035156v0.035156c-0.035157 0.046876-0.070313 0.085938-0.10938 0.12109 0 0.035156-0.085937 0.070313-0.035156 0.070313-0.19141 0.25391-0.40625 0.51562-0.58984 0.76953l-229.75 275.68c-2.9648 3.5391-7.1406 5.8789-11.746 6.5508l-321.59 45.961c-0.22656 0-0.44531 0.035156-0.66016 0.070312h-0.035157-0.035156-0.10547l-0.035157 0.035157h-0.070312c-0.59375 0.050781-1.1719 0.085937-1.7578 0.085937zm18.73-374v333.67l293.15-41.902 212.89-255.53-206.02-164.84zm-281.04 203.15 243.56 121.8v-328.54l-257.65-214.7-158.69 119.07zm600.88-363.89 198.39 158.76 41.062-328.22-171.9-300.83-154.88 77.398zm-590.95-86.34 255.56 212.98 296.85-127.23-85.754-385.79-295.49-42.238zm-143.46-171.02-38.762 271.71 144.05-108.12 175.81-351.6-67.848-67.848zm312.73-209.38 309.72 44.281 138.13-69.059-228.6-76.234-280.23 40.039z"/>
</svg>`;

export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;