export interface AiChatRequest {
  readonly prompt: string;
  readonly conversationId?: string;
}

export interface AiChatResponse {
  readonly reply: string;
  readonly conversationId?: string;
}

export interface AiServiceInterface {
  sendMessage(request: AiChatRequest): Promise<AiChatResponse>;
}
