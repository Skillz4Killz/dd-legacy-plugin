import { DiscordAttachment } from "@discordeno/bot";
import { LegacyBot } from "../../index.js";
import { Attachment } from "../attachment.js";

export function transformAttachmentToDiscordAttachment(
  bot: LegacyBot,
  payload: Attachment
): DiscordAttachment {
  return {
    id: bot.transformers.reverse.snowflake(payload.id),
    filename: payload.filename,
    content_type: payload.contentType,
    size: payload.size,
    url: payload.url,
    proxy_url: payload.proxyUrl,
    height: payload.height,
    width: payload.width,
    ephemeral: payload.ephemeral,
    description: payload.description,
  };
}
