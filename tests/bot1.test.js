import { describe, it, expect, beforeEach } from "vitest";
import Bot1 from "../bots/bot1.js";

describe("Bot1", () => {
    let bot;
    const testDeck = [5, 12, 24, 38, 47, 58, 87, 88, 99, 103];
    const playerId = 0;

    beforeEach(() => {
        bot = new Bot1(testDeck, playerId);
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

    describe("choose(piles)", () => {
        describe("Nur eine Karte pro Pile", () => {
            it("1. Nur eine Karte pro Pile", () => {
                const initialLength = bot.ownDeck.length;
                const piles = [[10], [16], [20]];
                const result = bot.choose(piles);
                expect(bot.ownDeck.length).toBe(initialLength - 1);
                expect(bot.ownDeck).not.toContain(result[0]);
                expect(result).toEqual([12, 0]);
            });

            it("2. Nur eine Karte pro Pile", () => {
                const initialLength = bot.ownDeck.length;
                const piles = [[5], [13], [20]];
                const result = bot.choose(piles);
                expect(bot.ownDeck.length).toBe(initialLength - 1);
                expect(bot.ownDeck).not.toContain(result[0]);
                expect(result).toEqual([12, 0]);
            });

            it("3. Nur eine Karte pro Pile", () => {
                const initialLength = bot.ownDeck.length;
                const piles = [[10]];
                const result = bot.choose(piles);
                expect(bot.ownDeck.length).toBe(initialLength - 1);
                expect(bot.ownDeck).not.toContain(result[0]);
                expect(result).toEqual([12, 0]);
            });
        });
        describe("Mehrere Karten pro Pile", () => {
            it("1. Mehrere Karten pro Pile", () => {
                const initialLength = bot.ownDeck.length;
                const piles = [
                    [10, 11, 14, 26],
                    [16, 17],
                    [20, 39, 44],
                ];
                const result = bot.choose(piles);
                expect(bot.ownDeck.length).toBe(initialLength - 1);
                expect(bot.ownDeck).not.toContain(result[0]);
                expect(result).toEqual([24, 1]);
            });

            it("2. Mehrere Karten pro Pile", () => {
                const initialLength = bot.ownDeck.length;
                const piles = [
                    [10, 11, 14, 100],
                    [16, 101],
                    [20, 39, 102],
                ];
                const result = bot.choose(piles);
                expect(bot.ownDeck.length).toBe(initialLength - 1);
                expect(bot.ownDeck).not.toContain(result[0]);
                expect(result).toEqual([103, 2]);
            });

            it("3. Mehrere Karten pro Pile", () => {
                const initialLength = bot.ownDeck.length;
                const piles = [
                    [10, 11, 14, 104],
                    [16, 17, 102],
                    [20, 39, 56],
                ];
                const result = bot.choose(piles);
                expect(bot.ownDeck.length).toBe(initialLength - 1);
                expect(bot.ownDeck).not.toContain(result[0]);
                expect(result).toEqual([58, 2]);
            });
        });
    });
});

// Todo: Implement tests if playedCard < smallestPileMax
