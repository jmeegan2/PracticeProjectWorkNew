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

import { NewPatient } from '../models/new-patient';
import { Patient } from '../models/patient';
import { PatientPartial } from '../models/patient-partial';
import { PatientWithRelations } from '../models/patient-with-relations';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({ providedIn: 'root' })
export class PatientControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `patientControllerCount()` */
  static readonly PatientControllerCountPath = '/patients/count';

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
    const rb = new RequestBuilder(this.rootUrl, PatientControllerService.PatientControllerCountPath, 'get');
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

  /** Path part for operation `patientControllerFindById()` */
  static readonly PatientControllerFindByIdPath = '/patients/{id}';

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
  ): Observable<StrictHttpResponse<PatientWithRelations>> {
    const rb = new RequestBuilder(this.rootUrl, PatientControllerService.PatientControllerFindByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PatientWithRelations>;
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
  ): Observable<PatientWithRelations> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PatientWithRelations>): PatientWithRelations => r.body)
    );
  }

  /** Path part for operation `patientControllerReplaceById()` */
  static readonly PatientControllerReplaceByIdPath = '/patients/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById$Response(
    params: {
      id: number;
      body?: Patient
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, PatientControllerService.PatientControllerReplaceByIdPath, 'put');
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
      body?: Patient
    },
    context?: HttpContext
  ): Observable<any> {
    return this.replaceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `patientControllerDeleteById()` */
  static readonly PatientControllerDeleteByIdPath = '/patients/{id}';

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
    const rb = new RequestBuilder(this.rootUrl, PatientControllerService.PatientControllerDeleteByIdPath, 'delete');
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

  /** Path part for operation `patientControllerUpdateById()` */
  static readonly PatientControllerUpdateByIdPath = '/patients/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(
    params: {
      id: number;
      body?: PatientPartial
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, PatientControllerService.PatientControllerUpdateByIdPath, 'patch');
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
      body?: PatientPartial
    },
    context?: HttpContext
  ): Observable<any> {
    return this.updateById$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `patientControllerFind()` */
  static readonly PatientControllerFindPath = '/patients';

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
  ): Observable<StrictHttpResponse<Array<PatientWithRelations>>> {
    const rb = new RequestBuilder(this.rootUrl, PatientControllerService.PatientControllerFindPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PatientWithRelations>>;
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
  ): Observable<Array<PatientWithRelations>> {
    return this.find$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PatientWithRelations>>): Array<PatientWithRelations> => r.body)
    );
  }

  /** Path part for operation `patientControllerCreate()` */
  static readonly PatientControllerCreatePath = '/patients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(
    params?: {
      body?: NewPatient
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Patient>> {
    const rb = new RequestBuilder(this.rootUrl, PatientControllerService.PatientControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Patient>;
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
      body?: NewPatient
    },
    context?: HttpContext
  ): Observable<Patient> {
    return this.create$Response(params, context).pipe(
      map((r: StrictHttpResponse<Patient>): Patient => r.body)
    );
  }

  /** Path part for operation `patientControllerUpdateAll()` */
  static readonly PatientControllerUpdateAllPath = '/patients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll$Response(
    params?: {
      where?: any;
      body?: PatientPartial
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<LoopbackCount>> {
    const rb = new RequestBuilder(this.rootUrl, PatientControllerService.PatientControllerUpdateAllPath, 'patch');
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
      body?: PatientPartial
    },
    context?: HttpContext
  ): Observable<LoopbackCount> {
    return this.updateAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoopbackCount>): LoopbackCount => r.body)
    );
  }

}
