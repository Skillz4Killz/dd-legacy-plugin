import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordIntegrationCreateUpdate,
} from "@discordeno/types";

export function handleIntegrationUpdate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  bot.events.integrationUpdate(
    bot,
    bot.transformers.integration(bot, data.d as DiscordIntegrationCreateUpdate)
  );
}
