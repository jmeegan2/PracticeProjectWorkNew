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

import { NewUserCredentials } from '../models/new-user-credentials';
import { UserCredentials } from '../models/user-credentials';
import { UserCredentialsPartial } from '../models/user-credentials-partial';
import { UserCredentialsWithRelations } from '../models/user-credentials-with-relations';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({ providedIn: 'root' })
export class UserCredentialsControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `userCredentialsControllerCount()` */
  static readonly UserCredentialsControllerCountPath = '/user-credentials/count';

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
    const rb = new RequestBuilder(this.rootUrl, UserCredentialsControllerService.UserCredentialsControllerCountPath, 'get');
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

  /** Path part for operation `userCredentialsControllerFindById()` */
  static readonly UserCredentialsControllerFindByIdPath = '/user-credentials/{id}';

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
  ): Observable<StrictHttpResponse<UserCredentialsWithRelations>> {
    const rb = new RequestBuilder(this.rootUrl, UserCredentialsControllerService.UserCredentialsControllerFindByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserCredentialsWithRelations>;
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
  ): Observable<UserCredentialsWithRelations> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserCredentialsWithRelations>): UserCredentialsWithRelations => r.body)
    );
  }

  /** Path part for operation `userCredentialsControllerReplaceById()` */
  static readonly UserCredentialsControllerReplaceByIdPath = '/user-credentials/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById$Response(
    params: {
      id: number;
      body?: UserCredentials
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, UserCredentialsControllerService.UserCredentialsControllerReplaceByIdPath, 'put');
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
      body?: UserCredentials
    },
    context?: HttpContext
  ): Observable<any> {
    return this.replaceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `userCredentialsControllerDeleteById()` */
  static readonly UserCredentialsControllerDeleteByIdPath = '/user-credentials/{id}';

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
    const rb = new RequestBuilder(this.rootUrl, UserCredentialsControllerService.UserCredentialsControllerDeleteByIdPath, 'delete');
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

  /** Path part for operation `userCredentialsControllerUpdateById()` */
  static readonly UserCredentialsControllerUpdateByIdPath = '/user-credentials/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(
    params: {
      id: number;
      body?: UserCredentialsPartial
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, UserCredentialsControllerService.UserCredentialsControllerUpdateByIdPath, 'patch');
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
      body?: UserCredentialsPartial
    },
    context?: HttpContext
  ): Observable<any> {
    return this.updateById$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `userCredentialsControllerFind()` */
  static readonly UserCredentialsControllerFindPath = '/user-credentials';

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
  ): Observable<StrictHttpResponse<Array<UserCredentialsWithRelations>>> {
    const rb = new RequestBuilder(this.rootUrl, UserCredentialsControllerService.UserCredentialsControllerFindPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserCredentialsWithRelations>>;
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
  ): Observable<Array<UserCredentialsWithRelations>> {
    return this.find$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserCredentialsWithRelations>>): Array<UserCredentialsWithRelations> => r.body)
    );
  }

  /** Path part for operation `userCredentialsControllerCreate()` */
  static readonly UserCredentialsControllerCreatePath = '/user-credentials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(
    params?: {
      body?: NewUserCredentials
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UserCredentials>> {
    const rb = new RequestBuilder(this.rootUrl, UserCredentialsControllerService.UserCredentialsControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserCredentials>;
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
      body?: NewUserCredentials
    },
    context?: HttpContext
  ): Observable<UserCredentials> {
    return this.create$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserCredentials>): UserCredentials => r.body)
    );
  }

  /** Path part for operation `userCredentialsControllerUpdateAll()` */
  static readonly UserCredentialsControllerUpdateAllPath = '/user-credentials';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll$Response(
    params?: {
      where?: any;
      body?: UserCredentialsPartial
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<LoopbackCount>> {
    const rb = new RequestBuilder(this.rootUrl, UserCredentialsControllerService.UserCredentialsControllerUpdateAllPath, 'patch');
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
      body?: UserCredentialsPartial
    },
    context?: HttpContext
  ): Observable<LoopbackCount> {
    return this.updateAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoopbackCount>): LoopbackCount => r.body)
    );
  }

}
