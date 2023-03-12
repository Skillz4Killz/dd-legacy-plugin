import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordVoiceServerUpdate,
} from "@discordeno/types";

export async function handleVoiceServerUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordVoiceServerUpdate;

  bot.events.voiceServerUpdate(bot, {
    token: payload.token,
    guildId: bot.transformers.snowflake(payload.guild_id),
    endpoint: payload.endpoint ?? undefined,
  });
}
