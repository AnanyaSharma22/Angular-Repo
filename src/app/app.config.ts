import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';

const _api_end_point_root = environment.apiURL;

export interface AppUrlConfig {
    apiEndpoint: string;
}

export const AccountUserApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + 'api/accounts/'
}

export const AppPropertyApiEndPoints: AppUrlConfig = {
    apiEndpoint: _api_end_point_root + 'api/app/'
}