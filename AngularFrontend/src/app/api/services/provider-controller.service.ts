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

import { NewProvider } from '../models/new-provider';
import { Provider } from '../models/provider';
import { ProviderPartial } from '../models/provider-partial';
import { ProviderWithRelations } from '../models/provider-with-relations';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({ providedIn: 'root' })
export class ProviderControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `providerControllerCount()` */
  static readonly ProviderControllerCountPath = '/providers/count';

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
    const rb = new RequestBuilder(this.rootUrl, ProviderControllerService.ProviderControllerCountPath, 'get');
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

  /** Path part for operation `providerControllerFindById()` */
  static readonly ProviderControllerFindByIdPath = '/providers/{id}';

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
  ): Observable<StrictHttpResponse<ProviderWithRelations>> {
    const rb = new RequestBuilder(this.rootUrl, ProviderControllerService.ProviderControllerFindByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProviderWithRelations>;
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
  ): Observable<ProviderWithRelations> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProviderWithRelations>): ProviderWithRelations => r.body)
    );
  }

  /** Path part for operation `providerControllerReplaceById()` */
  static readonly ProviderControllerReplaceByIdPath = '/providers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById$Response(
    params: {
      id: number;
      body?: Provider
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, ProviderControllerService.ProviderControllerReplaceByIdPath, 'put');
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
      body?: Provider
    },
    context?: HttpContext
  ): Observable<any> {
    return this.replaceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `providerControllerDeleteById()` */
  static readonly ProviderControllerDeleteByIdPath = '/providers/{id}';

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
    const rb = new RequestBuilder(this.rootUrl, ProviderControllerService.ProviderControllerDeleteByIdPath, 'delete');
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

  /** Path part for operation `providerControllerUpdateById()` */
  static readonly ProviderControllerUpdateByIdPath = '/providers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(
    params: {
      id: number;
      body?: ProviderPartial
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, ProviderControllerService.ProviderControllerUpdateByIdPath, 'patch');
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
      body?: ProviderPartial
    },
    context?: HttpContext
  ): Observable<any> {
    return this.updateById$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `providerControllerFind()` */
  static readonly ProviderControllerFindPath = '/providers';

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
  ): Observable<StrictHttpResponse<Array<ProviderWithRelations>>> {
    const rb = new RequestBuilder(this.rootUrl, ProviderControllerService.ProviderControllerFindPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProviderWithRelations>>;
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
  ): Observable<Array<ProviderWithRelations>> {
    return this.find$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProviderWithRelations>>): Array<ProviderWithRelations> => r.body)
    );
  }

  /** Path part for operation `providerControllerCreate()` */
  static readonly ProviderControllerCreatePath = '/providers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(
    params?: {
      body?: NewProvider
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Provider>> {
    const rb = new RequestBuilder(this.rootUrl, ProviderControllerService.ProviderControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Provider>;
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
      body?: NewProvider
    },
    context?: HttpContext
  ): Observable<Provider> {
    return this.create$Response(params, context).pipe(
      map((r: StrictHttpResponse<Provider>): Provider => r.body)
    );
  }

  /** Path part for operation `providerControllerUpdateAll()` */
  static readonly ProviderControllerUpdateAllPath = '/providers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll$Response(
    params?: {
      where?: any;
      body?: ProviderPartial
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<LoopbackCount>> {
    const rb = new RequestBuilder(this.rootUrl, ProviderControllerService.ProviderControllerUpdateAllPath, 'patch');
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
      body?: ProviderPartial
    },
    context?: HttpContext
  ): Observable<LoopbackCount> {
    return this.updateAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoopbackCount>): LoopbackCount => r.body)
    );
  }

}
