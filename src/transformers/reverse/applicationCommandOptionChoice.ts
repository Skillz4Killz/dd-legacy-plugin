import { DiscordApplicationCommandOptionChoice } from "@discordeno/bot";
import { LegacyBot } from "../../index.js";
import { ApplicationCommandOptionChoice } from "../applicationCommandOptionChoice.js";

export function transformApplicationCommandOptionChoiceToDiscordApplicationCommandOptionChoice(
  bot: LegacyBot,
  payload: ApplicationCommandOptionChoice
): DiscordApplicationCommandOptionChoice {
  return {
    name: payload.name,
    name_localizations: payload.nameLocalizations,
    value: payload.value,
  };
}
