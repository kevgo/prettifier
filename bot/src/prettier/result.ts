/** a prettified file */
export interface PrettifiedFile {
  /** the prettified content */
  formatted: string

  /** the content before it was prettified */
  old: string

  /** the full path of the file */
  path: string
}

/** list of files that were prettified */
export class Result extends Array<PrettifiedFile> {
  paths(): string[] {
    return this.map(pf => pf.path).sort()
  }
}
