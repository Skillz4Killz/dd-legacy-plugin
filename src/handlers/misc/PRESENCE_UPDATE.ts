import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordPresenceUpdate,
} from "@discordeno/types";

export async function handlePresenceUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  bot.events.presenceUpdate(
    bot,
    bot.transformers.presence(bot, data.d as DiscordPresenceUpdate)
  );
}
