import { Bot } from "../../bot.ts";
import { BigString } from "../../types/shared.ts";

/**
 * Builds a URL to an emoji in the Discord CDN.
 *
 * @param emojiId - The ID of the emoji to access.
 * @param animated - Whether the emoji is animated or static.
 * @returns The link to the resource.
 */
export function getEmojiURL(
  _bot: LegacyBot,
  emojiId: BigString,
  animated = false
): string {
  return `https://cdn.discordapp.com/emojis/${emojiId}.${
    animated ? "gif" : "png"
  }`;
}
