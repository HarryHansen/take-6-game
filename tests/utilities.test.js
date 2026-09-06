import { describe, it, expect, beforeEach, test } from "vitest";
import Utilities from "../utilities/utilities.js";

describe("Utilities", () => {
    let utility = new Utilities();

    describe("Checke CalculatePoints Funktion", () => {
        describe("Normale Fälle, Werte 1 bis 104", () => {
            it("Karte mit dem Wert 1", () => {
                expect(utility.calculatePoints(1)).toBe(1);
            });
            it("Karte mit dem Wert 2", () => {
                expect(utility.calculatePoints(2)).toBe(1);
            });
            it("Karte mit dem Wert 3", () => {
                expect(utility.calculatePoints(3)).toBe(1);
            });
            it("Karte mit dem Wert 4", () => {
                expect(utility.calculatePoints(4)).toBe(1);
            });
            it("Karte mit dem Wert 5", () => {
                expect(utility.calculatePoints(5)).toBe(2);
            });
            it("Karte mit dem Wert 6", () => {
                expect(utility.calculatePoints(6)).toBe(1);
            });
            it("Karte mit dem Wert 7", () => {
                expect(utility.calculatePoints(7)).toBe(1);
            });
            it("Karte mit dem Wert 8", () => {
                expect(utility.calculatePoints(8)).toBe(1);
            });
            it("Karte mit dem Wert 9", () => {
                expect(utility.calculatePoints(9)).toBe(1);
            });
            it("Karte mit dem Wert 10", () => {
                expect(utility.calculatePoints(10)).toBe(3);
            });
            it("Karte mit dem Wert 11", () => {
                expect(utility.calculatePoints(11)).toBe(5);
            });
            it("Karte mit dem Wert 12", () => {
                expect(utility.calculatePoints(12)).toBe(1);
            });
            it("Karte mit dem Wert 13", () => {
                expect(utility.calculatePoints(13)).toBe(1);
            });
            it("Karte mit dem Wert 14", () => {
                expect(utility.calculatePoints(14)).toBe(1);
            });
            it("Karte mit dem Wert 15", () => {
                expect(utility.calculatePoints(15)).toBe(2);
            });
            it("Karte mit dem Wert 16", () => {
                expect(utility.calculatePoints(16)).toBe(1);
            });
            it("Karte mit dem Wert 17", () => {
                expect(utility.calculatePoints(17)).toBe(1);
            });
            it("Karte mit dem Wert 18", () => {
                expect(utility.calculatePoints(18)).toBe(1);
            });
            it("Karte mit dem Wert 19", () => {
                expect(utility.calculatePoints(19)).toBe(1);
            });
            it("Karte mit dem Wert 20", () => {
                expect(utility.calculatePoints(20)).toBe(3);
            });
            it("Karte mit dem Wert 21", () => {
                expect(utility.calculatePoints(21)).toBe(1);
            });
            it("Karte mit dem Wert 22", () => {
                expect(utility.calculatePoints(22)).toBe(5);
            });
            it("Karte mit dem Wert 23", () => {
                expect(utility.calculatePoints(23)).toBe(1);
            });
            it("Karte mit dem Wert 24", () => {
                expect(utility.calculatePoints(24)).toBe(1);
            });
            it("Karte mit dem Wert 25", () => {
                expect(utility.calculatePoints(25)).toBe(2);
            });
            it("Karte mit dem Wert 26", () => {
                expect(utility.calculatePoints(26)).toBe(1);
            });
            it("Karte mit dem Wert 27", () => {
                expect(utility.calculatePoints(27)).toBe(1);
            });
            it("Karte mit dem Wert 28", () => {
                expect(utility.calculatePoints(28)).toBe(1);
            });
            it("Karte mit dem Wert 29", () => {
                expect(utility.calculatePoints(29)).toBe(1);
            });
            it("Karte mit dem Wert 30", () => {
                expect(utility.calculatePoints(30)).toBe(3);
            });
            it("Karte mit dem Wert 31", () => {
                expect(utility.calculatePoints(31)).toBe(1);
            });
            it("Karte mit dem Wert 32", () => {
                expect(utility.calculatePoints(32)).toBe(1);
            });
            it("Karte mit dem Wert 33", () => {
                expect(utility.calculatePoints(33)).toBe(5);
            });
            it("Karte mit dem Wert 34", () => {
                expect(utility.calculatePoints(34)).toBe(1);
            });
            it("Karte mit dem Wert 35", () => {
                expect(utility.calculatePoints(35)).toBe(2);
            });
            it("Karte mit dem Wert 36", () => {
                expect(utility.calculatePoints(36)).toBe(1);
            });
            it("Karte mit dem Wert 37", () => {
                expect(utility.calculatePoints(37)).toBe(1);
            });
            it("Karte mit dem Wert 38", () => {
                expect(utility.calculatePoints(38)).toBe(1);
            });
            it("Karte mit dem Wert 39", () => {
                expect(utility.calculatePoints(39)).toBe(1);
            });
            it("Karte mit dem Wert 40", () => {
                expect(utility.calculatePoints(40)).toBe(3);
            });
            it("Karte mit dem Wert 41", () => {
                expect(utility.calculatePoints(41)).toBe(1);
            });
            it("Karte mit dem Wert 42", () => {
                expect(utility.calculatePoints(42)).toBe(1);
            });
            it("Karte mit dem Wert 43", () => {
                expect(utility.calculatePoints(43)).toBe(1);
            });
            it("Karte mit dem Wert 44", () => {
                expect(utility.calculatePoints(44)).toBe(5);
            });
            it("Karte mit dem Wert 45", () => {
                expect(utility.calculatePoints(45)).toBe(2);
            });
            it("Karte mit dem Wert 46", () => {
                expect(utility.calculatePoints(46)).toBe(1);
            });
            it("Karte mit dem Wert 47", () => {
                expect(utility.calculatePoints(47)).toBe(1);
            });
            it("Karte mit dem Wert 48", () => {
                expect(utility.calculatePoints(48)).toBe(1);
            });
            it("Karte mit dem Wert 49", () => {
                expect(utility.calculatePoints(49)).toBe(1);
            });
            it("Karte mit dem Wert 50", () => {
                expect(utility.calculatePoints(50)).toBe(3);
            });
            it("Karte mit dem Wert 51", () => {
                expect(utility.calculatePoints(51)).toBe(1);
            });
            it("Karte mit dem Wert 52", () => {
                expect(utility.calculatePoints(52)).toBe(1);
            });
            it("Karte mit dem Wert 53", () => {
                expect(utility.calculatePoints(53)).toBe(1);
            });
            it("Karte mit dem Wert 54", () => {
                expect(utility.calculatePoints(54)).toBe(1);
            });
            it("Karte mit dem Wert 55", () => {
                expect(utility.calculatePoints(55)).toBe(7);
            });
            it("Karte mit dem Wert 56", () => {
                expect(utility.calculatePoints(56)).toBe(1);
            });
            it("Karte mit dem Wert 57", () => {
                expect(utility.calculatePoints(57)).toBe(1);
            });
            it("Karte mit dem Wert 58", () => {
                expect(utility.calculatePoints(58)).toBe(1);
            });
            it("Karte mit dem Wert 59", () => {
                expect(utility.calculatePoints(59)).toBe(1);
            });
            it("Karte mit dem Wert 60", () => {
                expect(utility.calculatePoints(60)).toBe(3);
            });
            it("Karte mit dem Wert 61", () => {
                expect(utility.calculatePoints(61)).toBe(1);
            });
            it("Karte mit dem Wert 62", () => {
                expect(utility.calculatePoints(62)).toBe(1);
            });
            it("Karte mit dem Wert 63", () => {
                expect(utility.calculatePoints(63)).toBe(1);
            });
            it("Karte mit dem Wert 64", () => {
                expect(utility.calculatePoints(64)).toBe(1);
            });
            it("Karte mit dem Wert 65", () => {
                expect(utility.calculatePoints(65)).toBe(2);
            });
            it("Karte mit dem Wert 66", () => {
                expect(utility.calculatePoints(66)).toBe(5);
            });
            it("Karte mit dem Wert 67", () => {
                expect(utility.calculatePoints(67)).toBe(1);
            });
            it("Karte mit dem Wert 68", () => {
                expect(utility.calculatePoints(68)).toBe(1);
            });
            it("Karte mit dem Wert 69", () => {
                expect(utility.calculatePoints(69)).toBe(1);
            });
            it("Karte mit dem Wert 70", () => {
                expect(utility.calculatePoints(70)).toBe(3);
            });
            it("Karte mit dem Wert 71", () => {
                expect(utility.calculatePoints(71)).toBe(1);
            });
            it("Karte mit dem Wert 72", () => {
                expect(utility.calculatePoints(72)).toBe(1);
            });
            it("Karte mit dem Wert 73", () => {
                expect(utility.calculatePoints(73)).toBe(1);
            });
            it("Karte mit dem Wert 74", () => {
                expect(utility.calculatePoints(74)).toBe(1);
            });
            it("Karte mit dem Wert 75", () => {
                expect(utility.calculatePoints(75)).toBe(2);
            });
            it("Karte mit dem Wert 76", () => {
                expect(utility.calculatePoints(76)).toBe(1);
            });
            it("Karte mit dem Wert 77", () => {
                expect(utility.calculatePoints(77)).toBe(5);
            });
            it("Karte mit dem Wert 78", () => {
                expect(utility.calculatePoints(78)).toBe(1);
            });
            it("Karte mit dem Wert 79", () => {
                expect(utility.calculatePoints(79)).toBe(1);
            });
            it("Karte mit dem Wert 80", () => {
                expect(utility.calculatePoints(80)).toBe(3);
            });
            it("Karte mit dem Wert 81", () => {
                expect(utility.calculatePoints(81)).toBe(1);
            });
            it("Karte mit dem Wert 82", () => {
                expect(utility.calculatePoints(82)).toBe(1);
            });
            it("Karte mit dem Wert 83", () => {
                expect(utility.calculatePoints(83)).toBe(1);
            });
            it("Karte mit dem Wert 84", () => {
                expect(utility.calculatePoints(84)).toBe(1);
            });
            it("Karte mit dem Wert 85", () => {
                expect(utility.calculatePoints(85)).toBe(2);
            });
            it("Karte mit dem Wert 86", () => {
                expect(utility.calculatePoints(86)).toBe(1);
            });
            it("Karte mit dem Wert 87", () => {
                expect(utility.calculatePoints(87)).toBe(1);
            });
            it("Karte mit dem Wert 88", () => {
                expect(utility.calculatePoints(88)).toBe(5);
            });
            it("Karte mit dem Wert 89", () => {
                expect(utility.calculatePoints(89)).toBe(1);
            });
            it("Karte mit dem Wert 90", () => {
                expect(utility.calculatePoints(90)).toBe(3);
            });
            it("Karte mit dem Wert 91", () => {
                expect(utility.calculatePoints(91)).toBe(1);
            });
            it("Karte mit dem Wert 92", () => {
                expect(utility.calculatePoints(92)).toBe(1);
            });
            it("Karte mit dem Wert 93", () => {
                expect(utility.calculatePoints(93)).toBe(1);
            });
            it("Karte mit dem Wert 94", () => {
                expect(utility.calculatePoints(94)).toBe(1);
            });
            it("Karte mit dem Wert 95", () => {
                expect(utility.calculatePoints(95)).toBe(2);
            });
            it("Karte mit dem Wert 96", () => {
                expect(utility.calculatePoints(96)).toBe(1);
            });
            it("Karte mit dem Wert 97", () => {
                expect(utility.calculatePoints(97)).toBe(1);
            });
            it("Karte mit dem Wert 98", () => {
                expect(utility.calculatePoints(98)).toBe(1);
            });
            it("Karte mit dem Wert 99", () => {
                expect(utility.calculatePoints(99)).toBe(5);
            });
            it("Karte mit dem Wert 100", () => {
                expect(utility.calculatePoints(100)).toBe(3);
            });
            it("Karte mit dem Wert 101", () => {
                expect(utility.calculatePoints(101)).toBe(1);
            });
            it("Karte mit dem Wert 102", () => {
                expect(utility.calculatePoints(102)).toBe(1);
            });
            it("Karte mit dem Wert 103", () => {
                expect(utility.calculatePoints(103)).toBe(1);
            });
            it("Karte mit dem Wert 104", () => {
                expect(utility.calculatePoints(104)).toBe(1);
            });
        });
        describe("Edge Cases, invalid Eingaben", () => {
            describe("Invalide Eingaben", () => {
                it("Kein Parameter", () => {
                    expect(utility.calculatePoints()).toBeUndefined();
                });

                it("undefined als Parameter", () => {
                    expect(utility.calculatePoints(undefined)).toBeUndefined();
                });

                it("null als Parameter", () => {
                    expect(utility.calculatePoints(null)).toBeUndefined();
                });

                it("String – Zahl als String", () => {
                    expect(utility.calculatePoints("5")).toBeUndefined();
                });

                it("String – Buchstaben", () => {
                    expect(utility.calculatePoints("abc")).toBeUndefined();
                });

                it("String – leer", () => {
                    expect(utility.calculatePoints("")).toBeUndefined();
                });

                it("Boolean – true", () => {
                    expect(utility.calculatePoints(true)).toBeUndefined();
                });

                it("Boolean – false", () => {
                    expect(utility.calculatePoints(false)).toBeUndefined();
                });

                it("Array als Parameter", () => {
                    expect(utility.calculatePoints([])).toBeUndefined();
                });

                it("Array mit Element als Parameter", () => {
                    expect(utility.calculatePoints([5])).toBeUndefined();
                });

                it("Object als Parameter", () => {
                    expect(utility.calculatePoints({})).toBeUndefined();
                });

                it("NaN als Parameter", () => {
                    expect(utility.calculatePoints(NaN)).toBeUndefined();
                });

                it("Infinity als Parameter", () => {
                    expect(utility.calculatePoints(Infinity)).toBeUndefined();
                });

                it("Negative Infinity als Parameter", () => {
                    expect(utility.calculatePoints(-Infinity)).toBeUndefined();
                });

                it("Symbol als Parameter", () => {
                    expect(
                        utility.calculatePoints(Symbol("karte")),
                    ).toBeUndefined();
                });

                it("BigInt als Parameter", () => {
                    expect(utility.calculatePoints(5n)).toBeUndefined();
                });
            });

            describe("Gleitkommazahlen", () => {
                it("Wert 1.5", () => {
                    expect(utility.calculatePoints(1.5)).toBeUndefined();
                });

                it("Wert 0.5", () => {
                    expect(utility.calculatePoints(0.5)).toBeUndefined();
                });

                it("Wert 2.99", () => {
                    expect(utility.calculatePoints(2.99)).toBeUndefined();
                });
            });

            describe("Wert außerhalb des gültigen Bereichs (1–104)", () => {
                it("Wert 0 – untere Grenze", () => {
                    expect(utility.calculatePoints(0)).toBeUndefined();
                });

                it("Wert -1 – negativ", () => {
                    expect(utility.calculatePoints(-1)).toBeUndefined();
                });

                it("Wert -10", () => {
                    expect(utility.calculatePoints(-10)).toBeUndefined();
                });

                it("Wert -100", () => {
                    expect(utility.calculatePoints(-100)).toBeUndefined();
                });

                it("Wert 105 – oberhalb der Grenze", () => {
                    expect(utility.calculatePoints(105)).toBeUndefined();
                });

                it("Wert 106", () => {
                    expect(utility.calculatePoints(106)).toBeUndefined();
                });

                it("Wert 110", () => {
                    expect(utility.calculatePoints(110)).toBeUndefined();
                });

                it("Wert 1000", () => {
                    expect(utility.calculatePoints(1000)).toBeUndefined();
                });

                it("Wert 1000000", () => {
                    expect(utility.calculatePoints(1000000)).toBeUndefined();
                });
            });

            describe("Grenzwerte – obere und untere Grenze", () => {
                it("Wert 1 – untere Grenze (gültig)", () => {
                    expect(utility.calculatePoints(1)).toBe(1);
                });

                it("Wert 104 – obere Grenze (gültig)", () => {
                    expect(utility.calculatePoints(104)).toBe(1);
                });
            });
        });
    });
    describe("Checke calculatePointsOfPile Funktion", () => {
        describe("Valid Inputs", () => {
            describe("Pile mit 0 Karten", () => {
                it("leeres Array", () => {
                    expect(utility.calculatePointsOfPile([])).toBe(0);
                });
            });

            describe("Pile mit 1 Karte", () => {
                it("Karte 1 (Punkte: 1)", () => {
                    expect(utility.calculatePointsOfPile([1])).toBe(1);
                });
                it("Karte 5 (Punkte: 2)", () => {
                    expect(utility.calculatePointsOfPile([5])).toBe(2);
                });
                it("Karte 10 (Punkte: 3)", () => {
                    expect(utility.calculatePointsOfPile([10])).toBe(3);
                });
                it("Karte 11 (Punkte: 5)", () => {
                    expect(utility.calculatePointsOfPile([11])).toBe(5);
                });
                it("Karte 55 (Punkte: 7)", () => {
                    expect(utility.calculatePointsOfPile([55])).toBe(7);
                });
                it("Karte 104 (Punkte: 1)", () => {
                    expect(utility.calculatePointsOfPile([104])).toBe(1);
                });
            });

            describe("Pile mit 2 Karten", () => {
                it("Karten [1, 2] → 1 + 1 = 2", () => {
                    expect(utility.calculatePointsOfPile([1, 2])).toBe(2);
                });
                it("Karten [5, 10] → 2 + 3 = 5", () => {
                    expect(utility.calculatePointsOfPile([5, 10])).toBe(5);
                });
                it("Karten [11, 55] → 5 + 7 = 12", () => {
                    expect(utility.calculatePointsOfPile([11, 55])).toBe(12);
                });
                it("Karten [3, 7] → 1 + 1 = 2", () => {
                    expect(utility.calculatePointsOfPile([3, 7])).toBe(2);
                });
                it("Karten [55, 104] → 7 + 1 = 8", () => {
                    expect(utility.calculatePointsOfPile([55, 104])).toBe(8);
                });
            });

            describe("Pile mit 3 Karten", () => {
                it("Karten [1, 5, 10] → 1 + 2 + 3 = 6", () => {
                    expect(utility.calculatePointsOfPile([1, 5, 10])).toBe(6);
                });
                it("Karten [11, 22, 33] → 5 + 5 + 5 = 15", () => {
                    expect(utility.calculatePointsOfPile([11, 22, 33])).toBe(
                        15,
                    );
                });
                it("Karten [5, 10, 55] → 2 + 3 + 7 = 12", () => {
                    expect(utility.calculatePointsOfPile([5, 10, 55])).toBe(12);
                });
                it("Karten [1, 2, 3] → 1 + 1 + 1 = 3", () => {
                    expect(utility.calculatePointsOfPile([1, 2, 3])).toBe(3);
                });
            });

            describe("Pile mit 4 Karten", () => {
                it("Karten [1, 5, 10, 11] → 1 + 2 + 3 + 5 = 11", () => {
                    expect(utility.calculatePointsOfPile([1, 5, 10, 11])).toBe(
                        11,
                    );
                });
                it("Karten [5, 10, 11, 55] → 2 + 3 + 5 + 7 = 17", () => {
                    expect(utility.calculatePointsOfPile([5, 10, 11, 55])).toBe(
                        17,
                    );
                });
                it("Karten [2, 4, 6, 8] → 1 + 1 + 1 + 1 = 4", () => {
                    expect(utility.calculatePointsOfPile([2, 4, 6, 8])).toBe(4);
                });
            });

            describe("Pile mit 5 Karten (Maximum)", () => {
                it("Karten [1, 5, 10, 11, 55] → 1 + 2 + 3 + 5 + 7 = 18", () => {
                    expect(
                        utility.calculatePointsOfPile([1, 5, 10, 11, 55]),
                    ).toBe(18);
                });
                it("Karten [55, 11, 22, 33, 44] → 7 + 5 + 5 + 5 + 5 = 27", () => {
                    expect(
                        utility.calculatePointsOfPile([55, 11, 22, 33, 44]),
                    ).toBe(27);
                });
                it("Karten [1, 2, 3, 4, 6] → 1 + 1 + 1 + 1 + 1 = 5", () => {
                    expect(utility.calculatePointsOfPile([1, 2, 3, 4, 6])).toBe(
                        5,
                    );
                });
                it("Karten [5, 15, 25, 35, 45] → 2 + 2 + 2 + 2 + 2 = 10", () => {
                    expect(
                        utility.calculatePointsOfPile([5, 15, 25, 35, 45]),
                    ).toBe(10);
                });
            });

            describe("Reihenfolge der Karten", () => {
                it("Aufsteigend [1, 5, 10, 11, 55] = 18", () => {
                    expect(
                        utility.calculatePointsOfPile([1, 5, 10, 11, 55]),
                    ).toBe(18);
                });
                it("Absteigend [55, 11, 10, 5, 1] = 18", () => {
                    expect(
                        utility.calculatePointsOfPile([55, 11, 10, 5, 1]),
                    ).toBe(18);
                });
                it("Zufällig [11, 5, 55, 1, 10] = 18", () => {
                    expect(
                        utility.calculatePointsOfPile([11, 5, 55, 1, 10]),
                    ).toBe(18);
                });
            });

            describe("Grenzwerte", () => {
                it("Niedrigste Summe – 5 Karten mit je 1 Punkt", () => {
                    expect(utility.calculatePointsOfPile([1, 2, 3, 4, 6])).toBe(
                        5,
                    );
                });
                it("Höchste Summe – 5 Karten: 55,11,22,33,44 → 27", () => {
                    expect(
                        utility.calculatePointsOfPile([55, 11, 22, 33, 44]),
                    ).toBe(27);
                });
                it("Summe 0 – leeres Array", () => {
                    expect(utility.calculatePointsOfPile([])).toBe(0);
                });
            });
        });

        describe("Invalid Inputs", () => {
            describe("Kein Array als Parameter", () => {
                it("Kein Parameter", () => {
                    expect(utility.calculatePointsOfPile()).toBeUndefined();
                });
                it("undefined", () => {
                    expect(
                        utility.calculatePointsOfPile(undefined),
                    ).toBeUndefined();
                });
                it("null", () => {
                    expect(utility.calculatePointsOfPile(null)).toBeUndefined();
                });
                it("Zahl statt Array", () => {
                    expect(utility.calculatePointsOfPile(5)).toBeUndefined();
                });
                it("String statt Array", () => {
                    expect(
                        utility.calculatePointsOfPile("1,2,3"),
                    ).toBeUndefined();
                });
                it("Leerer String", () => {
                    expect(utility.calculatePointsOfPile("")).toBeUndefined();
                });
                it("Boolean", () => {
                    expect(utility.calculatePointsOfPile(true)).toBeUndefined();
                });
                it("Object", () => {
                    expect(utility.calculatePointsOfPile({})).toBeUndefined();
                });
                it("Object mit keys", () => {
                    expect(
                        utility.calculatePointsOfPile({ a: 1, b: 2 }),
                    ).toBeUndefined();
                });
                it("NaN", () => {
                    expect(utility.calculatePointsOfPile(NaN)).toBeUndefined();
                });
                it("Infinity", () => {
                    expect(
                        utility.calculatePointsOfPile(Infinity),
                    ).toBeUndefined();
                });
                it("BigInt", () => {
                    expect(utility.calculatePointsOfPile(5n)).toBeUndefined();
                });
            });

            describe("Mehr als 5 Karten", () => {
                it("6 Karten [1,2,3,4,5,6]", () => {
                    expect(
                        utility.calculatePointsOfPile([1, 2, 3, 4, 5, 6]),
                    ).toBeUndefined();
                });
                it("7 Karten [1,2,3,4,5,6,7]", () => {
                    expect(
                        utility.calculatePointsOfPile([1, 2, 3, 4, 5, 6, 7]),
                    ).toBeUndefined();
                });
                it("11 Karten", () => {
                    expect(
                        utility.calculatePointsOfPile([
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                        ]),
                    ).toBeUndefined();
                });
            });

            describe("Doppelte Karten (nicht eindeutig)", () => {
                it("2 gleiche Karten [5, 5]", () => {
                    expect(
                        utility.calculatePointsOfPile([5, 5]),
                    ).toBeUndefined();
                });
                it("3 gleiche Karten [10, 10, 10]", () => {
                    expect(
                        utility.calculatePointsOfPile([10, 10, 10]),
                    ).toBeUndefined();
                });
                it("5 gleiche Karten [1, 1, 1, 1, 1]", () => {
                    expect(
                        utility.calculatePointsOfPile([1, 1, 1, 1, 1]),
                    ).toBeUndefined();
                });
                it("Teilweise doppelt [1, 2, 2, 4]", () => {
                    expect(
                        utility.calculatePointsOfPile([1, 2, 2, 4]),
                    ).toBeUndefined();
                });
                it("Teilweise doppelt mit 55 [11, 55, 55, 3]", () => {
                    expect(
                        utility.calculatePointsOfPile([11, 55, 55, 3]),
                    ).toBeUndefined();
                });
            });

            describe("Kartennamen außerhalb [1, 104]", () => {
                it("Karte 0", () => {
                    expect(utility.calculatePointsOfPile([0])).toBeUndefined();
                });
                it("Karte 105", () => {
                    expect(
                        utility.calculatePointsOfPile([105]),
                    ).toBeUndefined();
                });
                it("Karte 110", () => {
                    expect(
                        utility.calculatePointsOfPile([110]),
                    ).toBeUndefined();
                });
                it("Karte 1000", () => {
                    expect(
                        utility.calculatePointsOfPile([1000]),
                    ).toBeUndefined();
                });
                it("Karte -1", () => {
                    expect(utility.calculatePointsOfPile([-1])).toBeUndefined();
                });
                it("Karte -50", () => {
                    expect(
                        utility.calculatePointsOfPile([-50]),
                    ).toBeUndefined();
                });
                it("Mix gültig + 0 [1, 5, 0]", () => {
                    expect(
                        utility.calculatePointsOfPile([1, 5, 0]),
                    ).toBeUndefined();
                });
                it("Mix gültig + 105 [1, 5, 10, 11, 105]", () => {
                    expect(
                        utility.calculatePointsOfPile([1, 5, 10, 11, 105]),
                    ).toBeUndefined();
                });
                it("Mix gültig + negativ [3, 7, -1]", () => {
                    expect(
                        utility.calculatePointsOfPile([3, 7, -1]),
                    ).toBeUndefined();
                });
            });

            describe("Ungültiger Typ als Array-Element", () => {
                it('String-Element ["5"]', () => {
                    expect(
                        utility.calculatePointsOfPile(["5"]),
                    ).toBeUndefined();
                });
                it('String-Element ["abc"]', () => {
                    expect(
                        utility.calculatePointsOfPile(["abc"]),
                    ).toBeUndefined();
                });
                it('Leerer String-Element [""]', () => {
                    expect(utility.calculatePointsOfPile([""])).toBeUndefined();
                });
                it("null-Element [null]", () => {
                    expect(
                        utility.calculatePointsOfPile([null]),
                    ).toBeUndefined();
                });
                it("undefined-Element [undefined]", () => {
                    expect(
                        utility.calculatePointsOfPile([undefined]),
                    ).toBeUndefined();
                });
                it("Boolean-Element [true]", () => {
                    expect(
                        utility.calculatePointsOfPile([true]),
                    ).toBeUndefined();
                });
                it("Boolean-Element [false]", () => {
                    expect(
                        utility.calculatePointsOfPile([false]),
                    ).toBeUndefined();
                });
                it("Object-Element [{}]", () => {
                    expect(utility.calculatePointsOfPile([{}])).toBeUndefined();
                });
                it("Nested Array [[1]]", () => {
                    expect(
                        utility.calculatePointsOfPile([[1]]),
                    ).toBeUndefined();
                });
                it("Nested Array mit gültiger Zahl [[1, 5]]", () => {
                    expect(
                        utility.calculatePointsOfPile([[1, 5]]),
                    ).toBeUndefined();
                });
                it("NaN-Element [NaN]", () => {
                    expect(
                        utility.calculatePointsOfPile([NaN]),
                    ).toBeUndefined();
                });
                it("Infinity-Element [Infinity]", () => {
                    expect(
                        utility.calculatePointsOfPile([Infinity]),
                    ).toBeUndefined();
                });
                it('Mix gültig + String [1, "5"]', () => {
                    expect(
                        utility.calculatePointsOfPile([1, "5"]),
                    ).toBeUndefined();
                });
                it("Mix gültig + null [1, 5, null]", () => {
                    expect(
                        utility.calculatePointsOfPile([1, 5, null]),
                    ).toBeUndefined();
                });
            });

            describe("Gleitkommazahlen als Element", () => {
                it("1.5", () => {
                    expect(
                        utility.calculatePointsOfPile([1.5]),
                    ).toBeUndefined();
                });
                it("0.5", () => {
                    expect(
                        utility.calculatePointsOfPile([0.5]),
                    ).toBeUndefined();
                });
                it("Mix gültig + Float [1, 5, 10.5]", () => {
                    expect(
                        utility.calculatePointsOfPile([1, 5, 10.5]),
                    ).toBeUndefined();
                });
            });

            describe("Spezielle Array-Fälle", () => {
                it("Array mit Lücken (sparse) [1, , 3]", () => {
                    const sparse = [1, , 3];
                    expect(
                        utility.calculatePointsOfPile(sparse),
                    ).toBeUndefined();
                });
                it('Array aus lauter Strings ["1", "2", "3"]', () => {
                    expect(
                        utility.calculatePointsOfPile(["1", "2", "3"]),
                    ).toBeUndefined();
                });
            });
        });
    });
});
