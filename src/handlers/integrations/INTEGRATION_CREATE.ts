import { LegacyBot } from "../../index.js";
import {
  DiscordGatewayPayload,
  DiscordIntegrationCreateUpdate,
} from "@discordeno/types";

export function handleIntegrationCreate(
  bot: LegacyBot,
  data: DiscordGatewayPayload
) {
  bot.events.integrationCreate(
    bot,
    bot.transformers.integration(bot, data.d as DiscordIntegrationCreateUpdate)
  );
}
