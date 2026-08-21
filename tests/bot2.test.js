import { describe, it, expect, beforeEach, test } from "vitest";
import Bot2 from "../bots/bot2.js";

describe("Bot2", () => {
    let bot;
    const testDeck = [5, 12, 24, 38, 47, 58, 87, 88, 99, 103];
    const playerId = 1;

    beforeEach(() => {
        bot = new Bot2(testDeck, playerId);
    });

    describe("Constructor", () => {
        it("initialisiert ownDeck korrekt", () => {
            expect(bot.ownDeck).toEqual(testDeck);
        });

        it("setzt playerId korrekt", () => {
            expect(bot.playerId).toBe(playerId);
        });

        it("initialisiert collectedPoints auf 0", () => {
            expect(bot.collectedPoints).toBe(0);
        });
    });
});
