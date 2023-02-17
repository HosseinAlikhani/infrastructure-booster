 export interface RequestInterface
 {
  /**
  * return body of request
  */
  getContent();

  /**
  * get request params
  * @param key
  * @return void
  */
  private getParams(key): void
}