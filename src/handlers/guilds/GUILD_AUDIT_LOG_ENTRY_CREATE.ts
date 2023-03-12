import type { Bot } from "../../bot.js";
import { DiscordGatewayPayload, DiscordAuditLogEntry } from "@discordeno/types";

export async function handleGuildAuditLogEntryCreate(
  bot: LegacyBot,
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
