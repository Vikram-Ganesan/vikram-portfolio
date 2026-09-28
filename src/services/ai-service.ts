import { ApiClient } from '../api-client/client';
import type { AiChatRequest, AiChatResponse, AiServiceInterface } from '../interfaces/ai-service';
import type { ApiClientInterface } from '../interfaces/api-client';

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
