import { Union } from "./utilityTypes";

/**
 * Custom preset easing strings.
 */
export type PresetLinearEasingKey = `${`power${'1' | '2' | '3' | '4'}` | `quad` | `expo` | `circ` | `sine` | `back` | `elastic` | `bounce`}-${'in' | 'out' | 'in-out'}`;
// type EasingFunction<funcName extends string> = `${funcName}(${string})`;

/**
 * Autocompleted custom preset easing strings and trivial <easing-function>s
 * (but still allowing any `string` to account for non-trivial <easing-function>s such as cubier-bezier functions).
 */
export type EasingString = Union<
  | `linear` | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end'
  | PresetLinearEasingKey,
  // | EasingFunction<'cubic-bezier'> | EasingFunction<'linear'> | EasingFunction<'steps'>,
  string
>;

/**
 * Map mapping custom preset easing strings to linear easing functions.
 */
export const easingMap = Object.freeze(new Map<PresetLinearEasingKey, string>([
  // CREDITS:
  // https://www.smashingmagazine.com/2023/09/path-css-easing-linear-function/
  // https://gist.github.com/jh3y/1b3afdfa7af3ebc5668bf169cea17d09
  [`power1-in`, `linear(0, 0.0039, 0.0156, 0.0352, 0.0625, 0.0977, 0.1407, 0.1914, 0.2499, 0.3164, 0.3906 62.5%, 0.5625, 0.7656, 1)`],
  [`power1-out`, `linear(0, 0.2342, 0.4374, 0.6093 37.49%, 0.6835, 0.7499, 0.8086, 0.8593, 0.9023, 0.9375, 0.9648, 0.9844, 0.9961, 1)`],
  [`power1-in-out`, `linear(0, 0.0027, 0.0106 7.29%, 0.0425, 0.0957, 0.1701 29.16%, 0.2477, 0.3401 41.23%, 0.5982 55.18%, 0.7044 61.56%, 0.7987, 0.875 75%, 0.9297, 0.9687, 0.9922, 1)`],
  [`power2-in`, `linear(0, 0.0014 11.11%, 0.0071 19.24%, 0.0188 26.6%, 0.037 33.33%, 0.0634 39.87%, 0.0978 46.07%, 0.1407 52.02%, 0.1925 57.74%, 0.2559 63.49%, 0.3295 69.07%, 0.4135 74.5%, 0.5083 79.81%, 0.6141 85%, 0.7312 90.09%, 1)`],
  [`power2-out`, `linear(0, 0.2688 9.91%, 0.3859 15%, 0.4917 20.19%, 0.5865 25.5%, 0.6705 30.93%, 0.7441 36.51%, 0.8075 42.26%, 0.8593 47.98%, 0.9022 53.93%, 0.9366 60.13%, 0.963 66.67%, 0.9812 73.4%, 0.9929 80.76%, 0.9986 88.89%, 1)`],
  [`power2-in-out`, `linear(0, 0.0036 9.62%, 0.0185 16.66%, 0.0489 23.03%, 0.0962 28.86%, 0.1705 34.93%, 0.269 40.66%, 0.3867 45.89%, 0.5833 52.95%, 0.683 57.05%, 0.7829 62.14%, 0.8621 67.46%, 0.8991 70.68%, 0.9299 74.03%, 0.9545 77.52%, 0.9735 81.21%, 0.9865 85%, 0.9949 89.15%, 1)`],
  [`power3-in`, `linear(0, 0.0039 25%, 0.0117 32.89%, 0.0248 39.68%, 0.0457 46.22%, 0.0743 52.21%, 0.1113 57.77%, 0.1575 63%, 0.218 68.33%, 0.2901 73.39%, 0.3745 78.23%, 0.4718 82.88%, 0.5827 87.37%, 0.7074 91.71%, 0.8462 95.91%, 1)`],
  [`power3-out`, `linear(0, 0.1538 4.09%, 0.2926 8.29%, 0.4173 12.63%, 0.5282 17.12%, 0.6255 21.77%, 0.7099 26.61%, 0.782 31.67%, 0.8425 37%, 0.8887 42.23%, 0.9257 47.79%, 0.9543 53.78%, 0.9752 60.32%, 0.9883 67.11%, 0.9961 75%, 1)`],
  [`power3-in-out`, `linear(0, 0.0029 13.8%, 0.0184 21.9%, 0.0339 25.51%, 0.0551 28.81%, 0.0827 31.88%, 0.1168 34.76%, 0.1962 39.57%, 0.3005 44.02%, 0.4084 47.53%, 0.6242 53.45%, 0.7493 57.93%, 0.8495 62.97%, 0.8888 65.67%, 0.9213 68.51%, 0.9629 73.9%, 0.9876 80.16%, 0.998 87.5%, 1)`],
  [`power4-in`, `linear(0, 0.0024 29.91%, 0.008 38.03%, 0.0179 44.72%, 0.035 51.16%, 0.0595 56.88%, 0.0922 62.08%, 0.1338 66.88%, 0.1914 71.85%, 0.262 76.5%, 0.3461 80.88%, 0.4447 85.04%, 0.5587 89.01%, 0.689 92.82%, 0.8359 96.48%, 1)`],
  [`power4-out`, `linear(0, 0.1641 3.52%, 0.311 7.18%, 0.4413 10.99%, 0.5553 14.96%, 0.6539 19.12%, 0.738 23.5%, 0.8086 28.15%, 0.8662 33.12%, 0.9078 37.92%, 0.9405 43.12%, 0.965 48.84%, 0.9821 55.28%, 0.992 61.97%, 0.9976 70.09%, 1)`],
  [`power4-in-out`, `linear(0, 0.0012 14.95%, 0.0089 22.36%, 0.0297 28.43%, 0.0668 33.43%, 0.0979 36.08%, 0.1363 38.55%, 0.2373 43.07%, 0.3675 47.01%, 0.5984 52.15%, 0.7121 55.23%, 0.8192 59.21%, 0.898 63.62%, 0.9297 66.23%, 0.9546 69.06%, 0.9733 72.17%, 0.9864 75.67%, 0.9982 83.73%, 1)`],
  [`quad-in`, `linear(0, 0.0039, 0.0156, 0.0352, 0.0625, 0.0977, 0.1407, 0.1914, 0.2499, 0.3164, 0.3906 62.5%, 0.5625, 0.7656, 1)`],
  [`quad-out`, `linear(0, 0.2342, 0.4374, 0.6093 37.49%, 0.6835, 0.7499, 0.8086, 0.8593, 0.9023, 0.9375, 0.9648, 0.9844, 0.9961, 1)`],
  [`quad-in-out`, `linear(0, 0.0027, 0.0106 7.29%, 0.0425, 0.0957, 0.1701 29.16%, 0.2477, 0.3401 41.23%, 0.5982 55.18%, 0.7044 61.56%, 0.7987, 0.875 75%, 0.9297, 0.9687, 0.9922, 1)`],
  [`expo-in`, `linear(0, 0.0085 31.26%, 0.0167 40.94%, 0.0289 48.86%, 0.0471 55.92%, 0.0717 61.99%, 0.1038 67.32%, 0.1443 72.07%, 0.1989 76.7%, 0.2659 80.89%, 0.3465 84.71%, 0.4419 88.22%, 0.554 91.48%, 0.6835 94.51%, 0.8316 97.34%, 1)`],
  [`expo-out`, `linear(0, 0.1684 2.66%, 0.3165 5.49%, 0.446 8.52%, 0.5581 11.78%, 0.6535 15.29%, 0.7341 19.11%, 0.8011 23.3%, 0.8557 27.93%, 0.8962 32.68%, 0.9283 38.01%, 0.9529 44.08%, 0.9711 51.14%, 0.9833 59.06%, 0.9915 68.74%, 1)`],
  [`expo-in-out`, `linear(0, 0.0053 17.18%, 0.0195 26.59%, 0.0326 30.31%, 0.0506 33.48%, 0.0744 36.25%, 0.1046 38.71%, 0.1798 42.62%, 0.2846 45.93%, 0.3991 48.37%, 0.6358 52.29%, 0.765 55.45%, 0.8622 59.3%, 0.8986 61.51%, 0.9279 63.97%, 0.9481 66.34%, 0.9641 69.01%, 0.9856 75.57%, 0.9957 84.37%, 1)`],
  [`circ-in`, `linear(-0, 0.0048 9.8%, 0.0192 19.5%, 0.043 29.02%, 0.0761 38.26%, 0.1181 47.13%, 0.1685 55.56%, 0.227 63.44%, 0.2929 70.71%, 0.3656 77.3%, 0.4445 83.15%, 0.5285 88.19%, 0.6173 92.39%, 0.7099 95.7%, 0.805 98.08%, 0.9021 99.52%, 1)`],
  [`circ-out`, `linear(0, 0.0979 0.48%, 0.195 1.92%, 0.2901 4.3%, 0.3827 7.61%, 0.4715 11.81%, 0.5555 16.85%, 0.6344 22.7%, 0.7071 29.29%, 0.773 36.56%, 0.8315 44.44%, 0.8819 52.87%, 0.9239 61.74%, 0.957 70.98%, 0.9808 80.5%, 0.9952 90.2%, 1)`],
  [`circ-in-out`, `linear(-0, 0.0033 5.75%, 0.0132 11.43%, 0.0296 16.95%, 0.0522 22.25%, 0.0808 27.25%, 0.1149 31.89%, 0.1542 36.11%, 0.1981 39.85%, 0.2779 44.79%, 0.3654 48.15%, 0.4422 49.66%, 0.5807 50.66%, 0.6769 53.24%, 0.7253 55.37%, 0.7714 58.01%, 0.8142 61.11%, 0.8536 64.65%, 0.9158 72.23%, 0.9619 80.87%, 0.9904 90.25%, 1)`],
  [`sine-in`, `linear(0, 0.0035, 0.0141 10.7%, 0.0318 16.09%, 0.0566 21.51%, 0.0885 26.98%, 0.1278 32.53%, 0.2288 43.93%, 0.3563 55.48%, 0.5171 67.92%, 0.7139 81.53%, 1)`],
  [`sine-out`, `linear(0, 0.2861 18.47%, 0.4829 32.08%, 0.6437 44.52%, 0.7712 56.07%, 0.8722 67.47%, 0.9115 73.02%, 0.9434 78.49%, 0.9682 83.91%, 0.9859 89.3%, 0.9965, 1)`],
  [`sine-in-out`, `linear(0, 0.007 5.35%, 0.0282 10.75%, 0.0638 16.26%, 0.1144 21.96%, 0.1833 28.16%, 0.2717 34.9%, 0.6868 62.19%, 0.775 68.54%, 0.8457 74.3%, 0.9141 81.07%, 0.9621 87.52%, 0.9905 93.8%, 1)`],
  [`back-in`, `linear(0, -0.0029 4.31%, -0.0119 9.02%, -0.0837 31.27%, -0.0954 36.64%, -0.0998 41.45%, -0.0951 47.03%, -0.079 52.25%, -0.051 57.19%, -0.0108 61.92%, 0.0515 67.19%, 0.1312 72.27%, 0.2286 77.18%, 0.3445 81.96%, 0.4792 86.62%, 0.633 91.17%, 0.8066 95.63%, 1)`],
  [`back-out`, `linear(0, 0.1934 4.37%, 0.367 8.83%, 0.5208 13.38%, 0.6555 18.04%, 0.7714 22.82%, 0.8688 27.73%, 0.9485 32.81%, 1.0108 38.08%, 1.051 42.81%, 1.079 47.75%, 1.0951 52.97%, 1.0998 58.55%, 1.0954 63.36%, 1.0837 68.73%, 1.0119 90.98%, 1.0029 95.69%, 1)`],
  [`back-in-out`, `linear(0, -0.0059 4.51%, -0.0418 15.63%, -0.0499 20.72%, -0.0476 23.51%, -0.0395 26.12%, -0.0255 28.59%, -0.0055 30.95%, 0.0281 33.76%, 0.0717 36.47%, 0.1901 41.63%, 0.344 46.32%, 0.6156 52.65%, 0.7495 56.35%, 0.8757 60.97%, 0.9663 65.85%, 1.0006 68.58%, 1.0256 71.43%, 1.0417 74.43%, 1.0493 77.65%, 1.0452 83.02%, 1.0077 94.8%, 1)`],
  [`elastic-in`, `linear(0, 0.0019 13.34%, -0.0056 27.76%, -0.0012 31.86%, 0.0147 39.29%, 0.0161 42.46%, 0.0039 46.74%, -0.0416 54.3%, -0.046 57.29%, -0.0357, -0.0122 61.67%, 0.1176 69.29%, 0.1302 70.79%, 0.1306 72.16%, 0.1088 74.09%, 0.059 75.99%, -0.0317 78.19%, -0.3151 83.8%, -0.3643 85.52%, -0.3726, -0.3705 87.06%, -0.3463, -0.2959 89.3%, -0.1144 91.51%, 0.7822 97.9%, 1)`],
  [`elastic-out`, `linear(0, 0.2178 2.1%, 1.1144 8.49%, 1.2959 10.7%, 1.3463 11.81%, 1.3705 12.94%, 1.3726, 1.3643 14.48%, 1.3151 16.2%, 1.0317 21.81%, 0.941 24.01%, 0.8912 25.91%, 0.8694 27.84%, 0.8698 29.21%, 0.8824 30.71%, 1.0122 38.33%, 1.0357, 1.046 42.71%, 1.0416 45.7%, 0.9961 53.26%, 0.9839 57.54%, 0.9853 60.71%, 1.0012 68.14%, 1.0056 72.24%, 0.9981 86.66%, 1)`],
  [`elastic-in-out`, `linear(0, -0.0028 13.88%, 0.0081 21.23%, 0.002 23.37%, -0.0208 27.14%, -0.023 28.64%, -0.0178, -0.0061 30.83%, 0.0588 34.64%, 0.0651 35.39%, 0.0653 36.07%, 0.0514, 0.0184 38.3%, -0.1687 42.21%, -0.1857 43.04%, -0.181 43.8%, -0.1297 44.93%, -0.0201 46.08%, 1.0518 54.2%, 1.1471, 1.1853 56.48%, 1.1821 57.25%, 1.1573 58.11%, 0.9709 62%, 0.9458, 0.9347 63.92%, 0.9349 64.61%, 0.9412 65.36%, 1.0061 69.17%, 1.0178, 1.023 71.36%, 1.0208 72.86%, 0.998 76.63%, 0.9919 78.77%, 1.0028 86.12%, 1)`],
  [`bounce-in`, `linear(0, 0.0117, 0.0156, 0.0117, 0, 0.0273, 0.0468, 0.0586, 0.0625, 0.0586, 0.0468, 0.0273, 0 27.27%, 0.1093, 0.1875 36.36%, 0.2148, 0.2343, 0.2461, 0.25, 0.2461, 0.2344, 0.2148 52.28%, 0.1875 54.55%, 0.1095, 0, 0.2341, 0.4375, 0.6092, 0.75, 0.8593, 0.9375 90.91%, 0.9648, 0.9843, 0.9961, 1)`],
  [`bounce-out`, `linear(0, 0.0039, 0.0157, 0.0352, 0.0625 9.09%, 0.1407, 0.25, 0.3908, 0.5625, 0.7654, 1, 0.8907, 0.8125 45.45%, 0.7852, 0.7657, 0.7539, 0.75, 0.7539, 0.7657, 0.7852, 0.8125 63.64%, 0.8905, 1 72.73%, 0.9727, 0.9532, 0.9414, 0.9375, 0.9414, 0.9531, 0.9726, 1, 0.9883, 0.9844, 0.9883, 1)`],
  [`bounce-in-out`, `linear(0, 0.0078, 0, 0.0235, 0.0313, 0.0235, 0.0001 13.63%, 0.0549 15.92%, 0.0938, 0.1172, 0.125, 0.1172, 0.0939 27.26%, 0.0554 29.51%, 0.0003 31.82%, 0.2192, 0.3751 40.91%, 0.4332, 0.4734 45.8%, 0.4947 48.12%, 0.5027 51.35%, 0.5153 53.19%, 0.5437, 0.5868 57.58%, 0.6579, 0.7504 62.87%, 0.9999 68.19%, 0.9453, 0.9061, 0.8828, 0.875, 0.8828, 0.9063, 0.9451 84.08%, 0.9999 86.37%, 0.9765, 0.9688, 0.9765, 1, 0.9922, 1)`],
]));

export type KeyInEasingMap = typeof easingMap extends Map<infer I, any> ? I : never;

/**
 * Accepts either a preset easing string or a CSS `<easing-function>` string and returns an `<easing-function>` that inverts the easing.
 * @param easingString - preset easing string or a CSS <easing-function> string
 * @returns - The inverted form of {@link easingString}.
 * 
 * @see [\<easing-function\>](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
 */
export function invertEasing(easingString: EasingString): string {
  try {
    const str = (easingMap.get(easingString as KeyInEasingMap) ?? easingString).trim().toLowerCase();

    // INVERT LINEAR
    if (str === 'linear') { return 'linear'; }
  
    // INVERT EASE
    if (str.startsWith('ease')) {
      // if (str.match(/^ease(-(in-out))?$/)) { return str; }
      if (str === 'ease-in') { return 'ease-out'; }
      if (str === 'ease-out') { return 'ease-in'; }
      return str; // either ease or ease-in-ouot
    }
  
    // INVERT LINEAR()
    if (str.startsWith(`linear(`)) {
      const args = str.match(/linear\((.*)\)/)![1].trim();
      return `linear(${args
        .split(/,\s*/)
        .reverse()
        .map(piece => {
          const [val, perc] = piece.split(/\s+/);
          const inverseVal = 1 - Number(val);
          const inversePerc = perc ? 100 - Number(perc.slice(0, -1)) : null;
          return `${inverseVal.toFixed(5)}${inversePerc ? ` ${inversePerc.toFixed(5)}%` : ''}`;
        })
        .join(', ')})`
      ;
    }
  
    // INVERT CUBIC-BEZIER()
    else if (str.startsWith(`cubic-bezier(`)) {
      const [a, b, c, d] = str
        .match(/cubic-bezier\((.*)\)/)![1]
        .split(',')
        .map(point => Number(point.trim()));
      return `cubic-bezier(${1-c}, ${1-d}, ${1-a}, ${1-b})`;
    }
    
    // INVERT STEPS()
    else if (str.startsWith(`steps(`) || str.match(/step-(start|end)/)) {
      if (str.includes('end')) { return str.replace('end', 'start'); }
      if (str.includes('start')) { return str.replace('start', 'end'); }
    }
  
    throw new Error(`Invalid easing string "${easingString}".`);
  }
  catch (err) {
    throw new Error(`Invalid easing string "${easingString}".`);
  }
}

/**
 * Accepts either a preset easing string or a CSS `<easing-function>` string and returns an `<easing-function>`
 * @param easingString - preset easing string or a CSS <easing-function> string
 * @param options - options affecting the output based on {@link easingString}
 * @param options.inverted - If `true`, the returned easing function will be inverted.
 * @returns An `<easing-string>` corresponding to the provided {@link easingString}.
 * - If {@link easingString} is a preset easing string (such as `"power1-in"` or `"bounce-out"`), the returned `<easing-function>`
 * will be a custom `<linear-easing-function>` coming from a map of preset strings to linear easing functions.
 * - If {@link easingString} is a standard `<easing-function>` string (such as `"ease-in"` or `"cubic-bezier(...)"`), the string
 * itself will be returned with no modifications since it is obviously already a valid CSS easing function string.
 * 
 * @see [\<easing-function\>](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
 */
export function useEasing(easingString: EasingString, options: {
  /**
   * If `true`, the returned easing function will be inverted.
   * @defaultValue
   * ```ts
   * false
   * ```
   */
  inverted: boolean
} = {inverted: false}): string {
  if (options?.inverted) { return invertEasing(easingString); }
  return easingMap.get(easingString as KeyInEasingMap) ?? easingString;
}