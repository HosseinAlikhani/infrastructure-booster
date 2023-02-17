 export interface RequestInterface
 {
  /**
  * get request body
  * @return void
  */
  getContent();

  /**
  * get request params
  * @param key
  * @return void
  */
  private getParams(key): void
}