import { ApiClient } from '../api-client/client';
import type { AiChatRequest, AiChatResponse, AiServiceInterface } from '../types/ai-service-types';
import type { ApiClientInterface } from '../types/api-client-types';

export class AiService implements AiServiceInterface {
  private readonly apiClient: ApiClientInterface;

  public constructor(apiClient: ApiClientInterface) {
    this.apiClient = apiClient;
  }

  public sendMessage(request: AiChatRequest): Promise<AiChatResponse> {
    return this.apiClient.post<AiChatResponse>('ai/chat', request);
  }
}

export const aiService: AiServiceInterface = new AiService(ApiClient);
