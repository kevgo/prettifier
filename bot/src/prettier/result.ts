/** a prettified file */
export interface PrettifiedFile {
  /** the prettified content */
  readonly formatted: string

  /** the content before it was prettified */
  readonly old: string

  /** the full path of the file */
  readonly path: string
}

/** list of files that were prettified */
export class Result extends Array<PrettifiedFile> {
  /** provides the paths of these files */
  paths(): string[] {
    return this.map(pf => pf.path).sort()
  }

  /** provides path and formatted content of these files */
  formattedFiles(): { content: string; path: string }[] {
    return this.map(file => {
      return { path: file.path, content: file.formatted }
    })
  }
}
