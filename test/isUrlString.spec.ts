import { isUrlString } from "../src";

const URL_RESULT_SET: {
  url: string;
  result: boolean | string;
}[] = [
  { url: "google", result: "Not a valid URL string" },
  { url: "bing", result: "Not a valid URL string" },
  { url: "https://github.com/Unbuttun/is-url-online", result: true },
  {
    url: "https://github.com/Unbuttun/is-url-online abcd",
    result: "There should not be any spaces within the URL",
  },
  {
    url: "https://www.geeksforgeeks.org/how-to-check-whether-a-script-is-running-under-node-js-or-not/",
    result: true,
  },
  {
    url: "not a url",
    result: "There should not be any spaces within the URL",
  },
  {
    url: "https://blog.bitsrc.io/successfully-throwing-async-errors-with-the-jest-testing-library-fda17261733a",
    result: true,
  },
];

describe("Wrong URLs", () => {
  const urlsThatThrowError = URL_RESULT_SET.filter(
    (i) => typeof i.result === "string"
  );
  urlsThatThrowError.forEach(({ url, result }, index) => {
    test(`#${index + 1}: Testing ${url}`, () => {
      expect(() => isUrlString(url)).toThrow(result?.toString());
    });
  });
});

describe("Correct URLs", () => {
  const urlsThatThrowError = URL_RESULT_SET.filter(
    (i) => typeof i.result === "boolean"
  );
  urlsThatThrowError.forEach(({ url, result }, index) => {
    test(`#${index + 1}: Testing ${url}`, () => {
      expect(isUrlString(url)).toBe(result);
    });
  });
});
