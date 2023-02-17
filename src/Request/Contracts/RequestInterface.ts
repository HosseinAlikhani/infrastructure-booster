 export interface RequestInterface
 {
  /**
  * get request body
  * @return void
  */
  getContent();

  /**
  * get request params
  * @param key string|null
  * @return void
  */
  getParams(key: string|null): void
}