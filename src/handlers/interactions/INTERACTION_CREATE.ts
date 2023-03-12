import { LegacyBot } from "../../index.js";
import { DiscordGatewayPayload, DiscordInteraction } from "@discordeno/types";

export async function handleInteractionCreate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  bot.cache.unrepliedInteractions.add(
    bot.transformers.snowflake((data.d as DiscordInteraction).id)
  );
  bot.events.interactionCreate(
    bot,
    bot.transformers.interaction(bot, data.d as DiscordInteraction)
  );
}
