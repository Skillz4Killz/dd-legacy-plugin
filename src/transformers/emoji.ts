import { LegacyBot } from "../index.js";
import { DiscordEmoji } from "@discordeno/types";
import { EmojiToggles } from "./toggles/emoji.js";
import { Optionalize } from "../optionalize.js";

export function transformEmoji(bot: LegacyBot, payload: DiscordEmoji) {
  const emoji = {
    id: payload.id ? bot.transformers.snowflake(payload.id) : undefined,
    name: payload.name || undefined,
    roles: payload.roles?.map((id) => bot.transformers.snowflake(id)),
    user: payload.user ? bot.transformers.user(bot, payload.user) : undefined,
    toggles: new EmojiToggles(payload),
  };

  return emoji as Optionalize<typeof emoji>;
}

export interface Emoji extends ReturnType<typeof transformEmoji> {}
