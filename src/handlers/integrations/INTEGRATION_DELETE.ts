import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordIntegrationDelete,
} from "@discordeno/types";

export function handleIntegrationDelete(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordIntegrationDelete;

  bot.events.integrationDelete(bot, {
    id: bot.transformers.snowflake(payload.id),
    guildId: bot.transformers.snowflake(payload.guild_id),
    applicationId: payload.application_id
      ? bot.transformers.snowflake(payload.application_id)
      : undefined,
  });
}
