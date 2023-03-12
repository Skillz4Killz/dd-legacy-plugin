import { LegacyBot } from "../index.js";
import { DiscordAttachment } from "@discordeno/types";
import { Optionalize } from "../optionalize.js";

export function transformAttachment(
  bot: LegacyBot,
  payload: DiscordAttachment
) {
  const attachment = {
    id: bot.transformers.snowflake(payload.id),
    filename: payload.filename,
    contentType: payload.content_type,
    size: payload.size,
    url: payload.url,
    proxyUrl: payload.proxy_url,
    height: payload.height ?? undefined,
    width: payload.width ?? undefined,
    ephemeral: payload.ephemeral,
    description: payload.description,
  };

  return attachment as Optionalize<typeof attachment>;
}

export interface Attachment extends ReturnType<typeof transformAttachment> {}
