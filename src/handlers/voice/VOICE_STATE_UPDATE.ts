import { LegacyBot } from "../../index.js";
import { DiscordGatewayPayload, DiscordVoiceState } from "@discordeno/types";

export async function handleVoiceStateUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  const payload = data.d as DiscordVoiceState;
  if (!payload.guild_id) return;

  const guildId = bot.transformers.snowflake(payload.guild_id);

  bot.events.voiceStateUpdate(
    bot,
    bot.transformers.voiceState(bot, { voiceState: payload, guildId })
  );
}
