import type { Bot } from "../../bot.js";
import {
  DiscordGatewayPayload,
  DiscordAuditLogEntry,
} from "../../types/discord.js";

export async function handleGuildAuditLogEntryCreate(
  bot: Bot,
  data: DiscordGatewayPayload
) {
  // TODO: better type here
  const payload = data.d as DiscordAuditLogEntry & { guild_id: string };
  bot.events.auditLogEntryCreate(
    bot,
    bot.transformers.auditLogEntry(bot, payload),
    bot.transformers.snowflake(payload.guild_id)
  );
}
