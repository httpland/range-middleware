// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

export { Status } from "https://deno.land/std@0.178.0/http/http_status.ts";
export {
  isNull,
  isNumber,
  isString,
} from "https://deno.land/x/isx@1.0.0-beta.24/mod.ts";
export { type Middleware } from "https://deno.land/x/http_middleware@1.0.0-beta.1/mod.ts";
export {
  ConditionalHeader,
  RangeHeader,
  RepresentationHeader,
} from "https://deno.land/x/http_utils@1.0.0-beta.12/header.ts";
export { Method } from "https://deno.land/x/http_utils@1.0.0-beta.12/method.ts";
export { isErr, unsafe } from "https://deno.land/x/result_js@1.0.0/mod.ts";
import {
  RepresentationHeader,
} from "https://deno.land/x/http_utils@1.0.0-beta.12/header.ts";
export {
  type IntRange,
  isIntRange,
  isOtherRange,
  isSuffixRange,
  type OtherRange,
  parse,
  type Range,
  type RangeSpec,
  type RangesSpecifier,
  type SuffixRange,
} from "https://deno.land/x/range_parser@1.0.0/mod.ts";
export { concat } from "https://deno.land/std@0.178.0/bytes/concat.ts";
export { toHashString } from "https://deno.land/std@0.178.0/crypto/to_hash_string.ts";

/** Create headers with no representation header fields. */
export class NoContentHeaders extends Headers {
  constructor(init?: HeadersInit | undefined) {
    super(init);

    const allHeaders = [
      RepresentationHeader.ContentEncoding,
      RepresentationHeader.ContentLanguage,
      RepresentationHeader.ContentLength,
      RepresentationHeader.ContentLocation,
      RepresentationHeader.ContentType,
      RepresentationHeader.ETag,
      RepresentationHeader.LastModified,
    ];

    allHeaders.forEach(this.delete.bind(this));
  }
}

export function isNotEmpty<T>(input: readonly T[]): input is [T, ...T[]] {
  return !!input.length;
}
