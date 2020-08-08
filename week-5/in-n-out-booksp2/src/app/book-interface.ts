/**
 * Title: book-interface.ts
 * Author: Emily Richter
 * Date: 7 August 2020
 * Description: Book interface
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
