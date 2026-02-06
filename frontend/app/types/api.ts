// API tip tanımları
export interface ApiRequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, any>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}