/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { Newuser_credentials } from '../models/new-user-credentials';
import { user_credentials } from '../models/user-credentials';
import { user_credentialsPartial } from '../models/user-credentials-partial';
import { user_credentialsWithRelations } from '../models/user-credentials-with-relations';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({ providedIn: 'root' })
export class user_credentialsControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `user_credentialsControllerCount()` */
  static readonly user_credentialsControllerCountPath = '/user-credentials/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `count()` instead.
   *
   * This method doesn't expect any request body.
   */
  count$Response(
    params?: {
      where?: any;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<LoopbackCount>> {
    const rb = new RequestBuilder(this.rootUrl, user_credentialsControllerService.user_credentialsControllerCountPath, 'get');
    if (params) {
      rb.query('where', params.where, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `count$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  count(
    params?: {
      where?: any;
    },
    context?: HttpContext
  ): Observable<LoopbackCount> {
    return this.count$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoopbackCount>): LoopbackCount => r.body)
    );
  }

  /** Path part for operation `user_credentialsControllerFindById()` */
  static readonly user_credentialsControllerFindByIdPath = '/user-credentials/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(
    params: {
      id: number;
      filter?: any;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<user_credentialsWithRelations>> {
    const rb = new RequestBuilder(this.rootUrl, user_credentialsControllerService.user_credentialsControllerFindByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<user_credentialsWithRelations>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(
    params: {
      id: number;
      filter?: any;
    },
    context?: HttpContext
  ): Observable<user_credentialsWithRelations> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<user_credentialsWithRelations>): user_credentialsWithRelations => r.body)
    );
  }

  /** Path part for operation `user_credentialsControllerReplaceById()` */
  static readonly user_credentialsControllerReplaceByIdPath = '/user-credentials/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById$Response(
    params: {
      id: number;
      body?: user_credentials
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, user_credentialsControllerService.user_credentialsControllerReplaceByIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `replaceById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById(
    params: {
      id: number;
      body?: user_credentials
    },
    context?: HttpContext
  ): Observable<any> {
    return this.replaceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `user_credentialsControllerDeleteById()` */
  static readonly user_credentialsControllerDeleteByIdPath = '/user-credentials/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, user_credentialsControllerService.user_credentialsControllerDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<any> {
    return this.deleteById$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `user_credentialsControllerUpdateById()` */
  static readonly user_credentialsControllerUpdateByIdPath = '/user-credentials/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(
    params: {
      id: number;
      body?: user_credentialsPartial
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, user_credentialsControllerService.user_credentialsControllerUpdateByIdPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById(
    params: {
      id: number;
      body?: user_credentialsPartial
    },
    context?: HttpContext
  ): Observable<any> {
    return this.updateById$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `user_credentialsControllerFind()` */
  static readonly user_credentialsControllerFindPath = '/user-credentials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(
    params?: {
      filter?: any;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<user_credentialsWithRelations>>> {
    const rb = new RequestBuilder(this.rootUrl, user_credentialsControllerService.user_credentialsControllerFindPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<user_credentialsWithRelations>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(
    params?: {
      filter?: any;
    },
    context?: HttpContext
  ): Observable<Array<user_credentialsWithRelations>> {
    return this.find$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<user_credentialsWithRelations>>): Array<user_credentialsWithRelations> => r.body)
    );
  }

  /** Path part for operation `user_credentialsControllerCreate()` */
  static readonly user_credentialsControllerCreatePath = '/user-credentials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(
    params?: {
      body?: Newuser_credentials
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<user_credentials>> {
    const rb = new RequestBuilder(this.rootUrl, user_credentialsControllerService.user_credentialsControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<user_credentials>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(
    params?: {
      body?: Newuser_credentials
    },
    context?: HttpContext
  ): Observable<user_credentials> {
    return this.create$Response(params, context).pipe(
      map((r: StrictHttpResponse<user_credentials>): user_credentials => r.body)
    );
  }

  /** Path part for operation `user_credentialsControllerUpdateAll()` */
  static readonly user_credentialsControllerUpdateAllPath = '/user-credentials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll$Response(
    params?: {
      where?: any;
      body?: user_credentialsPartial
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<LoopbackCount>> {
    const rb = new RequestBuilder(this.rootUrl, user_credentialsControllerService.user_credentialsControllerUpdateAllPath, 'patch');
    if (params) {
      rb.query('where', params.where, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll(
    params?: {
      where?: any;
      body?: user_credentialsPartial
    },
    context?: HttpContext
  ): Observable<LoopbackCount> {
    return this.updateAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoopbackCount>): LoopbackCount => r.body)
    );
  }

}
