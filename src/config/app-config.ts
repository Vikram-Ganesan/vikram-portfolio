export type AppEnvironment = 'development' | 'staging' | 'production' | 'test';
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface ApiConfig {
  readonly baseUrl: string;
  readonly timeoutMs: number;
}

export interface AppConfig {
  readonly appName: string;
  readonly version: string;
  readonly environment: AppEnvironment;
  readonly logLevel: LogLevel;
  readonly useMockService: boolean;
}

export interface SocialLinksConfig {
  readonly email: string;
  readonly location: string;
  readonly linkedin: string;
  readonly github: string;
}

export interface EmailJsConfig {
  readonly serviceId: string;
  readonly templateId: string;
  readonly publicKey: string;
  readonly isConfigured: boolean;
}

export interface Config {
  readonly app: AppConfig;
  readonly api: ApiConfig;
  readonly social: SocialLinksConfig;
  readonly emailjs: EmailJsConfig;
}

function getEnvironment(): AppEnvironment {
  const mode = import.meta.env.MODE;

  if (mode === 'development' || mode === 'staging' || mode === 'production' || mode === 'test') {
    return mode;
  }

  return import.meta.env.DEV ? 'development' : 'production';
}

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export const config: Config = {
  app: {
    appName: 'Vikram G Portfolio',
    version: '1.0.0',
    environment: getEnvironment(),
    logLevel: import.meta.env.DEV ? 'debug' : 'error',
    useMockService: import.meta.env.VITE_USE_MOCK_SERVICE !== 'false',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL?.trim() || '/api',
    timeoutMs: 15000,
  },
  social: {
    email: 'gvikram989@gmail.com',
    location: 'Chennai, Tamil Nadu, India',
    linkedin: 'https://www.linkedin.com/in/vikramganesan/',
    github: 'https://github.com/Vikram-Ganesan',
  },
  emailjs: {
    serviceId: emailJsServiceId,
    templateId: emailJsTemplateId,
    publicKey: emailJsPublicKey,
    isConfigured: Boolean(emailJsServiceId && emailJsTemplateId && emailJsPublicKey),
  },
};
