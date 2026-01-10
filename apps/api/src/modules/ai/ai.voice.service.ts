import { Injectable } from "@nestjs/common";

@Injectable()
export class AiVoiceService {
  generateSpeechText(message: string) {
    return {
      voiceStyle: "calm_confident",
      pacing: "smooth",
      text: message,
    };
  }
}